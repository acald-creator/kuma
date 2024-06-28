package meshservice

import (
	"fmt"

	. "github.com/onsi/ginkgo/v2"
	. "github.com/onsi/gomega"
	"k8s.io/apimachinery/pkg/util/intstr"

	meshmzservice_api "github.com/kumahq/kuma/pkg/core/resources/apis/meshmultizoneservice/api/v1alpha1"
	"github.com/kumahq/kuma/pkg/core/resources/apis/meshservice/api/v1alpha1"
	"github.com/kumahq/kuma/pkg/core/resources/model/rest"
	"github.com/kumahq/kuma/pkg/kds/hash"
	. "github.com/kumahq/kuma/test/framework"
	"github.com/kumahq/kuma/test/framework/deployments/democlient"
	"github.com/kumahq/kuma/test/framework/envs/multizone"
)

func Sync() {
	meshName := "meshservice"
	namespace := "meshservice"

	BeforeAll(func() {
		Expect(NewClusterSetup().
			Install(MTLSMeshUniversal(meshName)).
			Install(MeshTrafficPermissionAllowAllUniversal(meshName)).
			Install(YamlUniversal(`
type: MeshMultiZoneService
name: backend
mesh: meshservice
spec:
  selector:
    meshService:
      matchLabels:
        test-name: backend
`)).
			Setup(multizone.Global)).To(Succeed())
		Expect(WaitForMesh(meshName, multizone.Zones())).To(Succeed())

		Expect(NewClusterSetup().
			Install(YamlUniversal(`
type: MeshService
name: backend
mesh: meshservice
labels:
  kuma.io/origin: zone
  test-name: backend
spec:
  selector:
    dataplaneTags:
      kuma.io/service: test-server
  ports:
  - port: 80
    targetPort: 80
    appProtocol: http
`)).
			Install(TestServerUniversal("dp-echo-1", meshName,
				WithArgs([]string{"echo", "--instance", "echo-v1"}),
				WithServiceVersion("v1"),
			)).
			Setup(multizone.UniZone1)).To(Succeed())

		Expect(NewClusterSetup().
			Install(YamlUniversal(`
type: MeshService
name: backend
mesh: meshservice
labels:
  kuma.io/origin: zone
  test-name: backend
spec:
  selector:
    dataplaneTags:
      kuma.io/service: test-server
  ports:
  - port: 80
    targetPort: 80
    appProtocol: http
`)).
			Install(DemoClientUniversal("uni-demo-client", meshName, WithTransparentProxy(true))).
			Setup(multizone.UniZone2)).To(Succeed())

		err := NewClusterSetup().
			Install(NamespaceWithSidecarInjection(namespace)).
			Install(democlient.Install(democlient.WithNamespace(namespace), democlient.WithMesh(meshName))).
			Setup(multizone.KubeZone2)
		Expect(err).ToNot(HaveOccurred())
	})

	AfterEachFailure(func() {
		DebugUniversal(multizone.Global, meshName)
		DebugUniversal(multizone.UniZone1, meshName)
		DebugUniversal(multizone.UniZone2, meshName)
		DebugKube(multizone.KubeZone1, meshName)
		DebugKube(multizone.KubeZone2, meshName, namespace)
	})

	E2EAfterAll(func() {
		Expect(multizone.UniZone1.DeleteMeshApps(meshName)).To(Succeed())
		Expect(multizone.UniZone2.DeleteMeshApps(meshName)).To(Succeed())
		Expect(multizone.KubeZone2.TriggerDeleteNamespace(namespace)).To(Succeed())
		Expect(multizone.Global.DeleteMesh(meshName)).To(Succeed())
	})

	msStatus := func(cluster Cluster, name string) (*v1alpha1.MeshService, *v1alpha1.MeshServiceStatus, error) {
		out, err := cluster.GetKumactlOptions().RunKumactlAndGetOutput("get", "meshservice", "-m", meshName, name, "-ojson")
		if err != nil {
			return nil, nil, err
		}
		res, err := rest.JSON.Unmarshal([]byte(out), v1alpha1.MeshServiceResourceTypeDescriptor)
		if err != nil {
			return nil, nil, err
		}
		return res.GetSpec().(*v1alpha1.MeshService), res.GetStatus().(*v1alpha1.MeshServiceStatus), nil
	}

	It("should sync MeshService to global with VIP status", func() {
		vipPrefix := "241.0.0."
		vipOverridePrefix := "251.0.0."
		if Config.IPV6 {
			vipPrefix = "fd00:fd01:"
			vipOverridePrefix = "fd00:fd11:"
		}

		// VIP and identities are assigned
		Eventually(func(g Gomega) {
			spec, status, err := msStatus(multizone.UniZone1, "backend")
			g.Expect(err).ToNot(HaveOccurred())
			g.Expect(status.VIPs).To(HaveLen(1))
			g.Expect(status.VIPs[0].IP).To(ContainSubstring(vipPrefix))
			g.Expect(spec.Identities).To(Equal([]v1alpha1.MeshServiceIdentity{
				{
					Type:  v1alpha1.MeshServiceIdentityServiceTagType,
					Value: "test-server",
				},
			}))
		}, "30s", "1s").Should(Succeed())

		// and MeshService is synced to global with the original status
		Eventually(func(g Gomega) {
			spec, status, err := msStatus(multizone.Global, hash.HashedName(meshName, "backend", "kuma-4"))
			g.Expect(err).ToNot(HaveOccurred())
			g.Expect(status.VIPs).To(HaveLen(1))
			g.Expect(status.VIPs[0].IP).To(ContainSubstring(vipPrefix))
			g.Expect(spec.Identities).To(Equal([]v1alpha1.MeshServiceIdentity{
				{
					Type:  v1alpha1.MeshServiceIdentityServiceTagType,
					Value: "test-server",
				},
			}))
		}, "30s", "1s").Should(Succeed())

		// and MeshService is synced to other zone but VIP is generated by other zone
		Eventually(func(g Gomega) {
			spec, status, err := msStatus(multizone.UniZone2, hash.HashedName(meshName, "backend", "kuma-4"))
			g.Expect(err).ToNot(HaveOccurred())
			g.Expect(status.VIPs).To(HaveLen(1))
			g.Expect(status.VIPs[0].IP).To(ContainSubstring(vipOverridePrefix))
			g.Expect(spec.Identities).To(Equal([]v1alpha1.MeshServiceIdentity{
				{
					Type:  v1alpha1.MeshServiceIdentityServiceTagType,
					Value: "test-server",
				},
			}))
		}, "30s", "1s").Should(Succeed())
	})

	It("should sync MeshServices with the same name in different zones without conflicts", func() {
		// MeshServices are synced to global zone without conflict
		Eventually(func(g Gomega) {
			_, _, err := msStatus(multizone.Global, hash.HashedName(meshName, "backend", "kuma-4"))
			g.Expect(err).ToNot(HaveOccurred())
			_, _, err = msStatus(multizone.Global, hash.HashedName(meshName, "backend", "kuma-5"))
			g.Expect(err).ToNot(HaveOccurred())
		}, "30s", "1s").Should(Succeed())

		// MeshServices are synced to other zone without conflict
		Eventually(func(g Gomega) {
			_, _, err := msStatus(multizone.KubeZone2, fmt.Sprintf("%s.%s", hash.HashedName(meshName, "backend", "kuma-4"), Config.KumaNamespace))
			g.Expect(err).ToNot(HaveOccurred())
			_, _, err = msStatus(multizone.KubeZone2, fmt.Sprintf("%s.%s", hash.HashedName(meshName, "backend", "kuma-5"), Config.KumaNamespace))
			g.Expect(err).ToNot(HaveOccurred())
		}, "30s", "1s").Should(Succeed())
	})

	It("should update MeshMultiZoneService status", func() {
		Eventually(func(g Gomega) {
			out, err := multizone.UniZone1.GetKumactlOptions().RunKumactlAndGetOutput("get", "meshmultizoneservice", "-m", meshName, hash.HashedName(meshName, "backend"), "-ojson")
			g.Expect(err).ToNot(HaveOccurred())
			res, err := rest.JSON.Unmarshal([]byte(out), meshmzservice_api.MeshMultiZoneServiceResourceTypeDescriptor)
			g.Expect(err).ToNot(HaveOccurred())
			g.Expect(res.GetStatus().(*meshmzservice_api.MeshMultiZoneServiceStatus).MeshServices).To(HaveLen(2))
			g.Expect(res.GetStatus().(*meshmzservice_api.MeshMultiZoneServiceStatus).Ports).To(Equal([]v1alpha1.Port{
				{
					Port:        80,
					TargetPort:  intstr.FromInt32(80),
					AppProtocol: "http",
				},
			}))
		}, "30s", "1s").Should(Succeed())
	})
}
