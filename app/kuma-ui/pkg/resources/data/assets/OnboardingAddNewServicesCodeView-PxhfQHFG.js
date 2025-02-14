import{L as w}from"./LoadingBox-BZ1eWcin.js";import{O as _,a as k,b as x}from"./OnboardingPage-CZnGKg34.js";import{d as C,r as d,o as a,q as V,w as t,b as n,e as o,m as s,c as i,M as y,s as A,_ as B}from"./index-DELdVnGm.js";const D={key:1},N={class:"mb-4 text-center"},O=["href"],R={class:"mt-4 text-center"},T=["href"],L={class:"status-box mt-4"},S={key:0,class:"status--is-connected","data-testid":"dpps-connected"},E={key:1,class:"status--is-disconnected","data-testid":"dpps-disconnected"},P={key:0,class:"status-loading-box mt-4"},H=C({__name:"OnboardingAddNewServicesCodeView",setup(I){return(M,e)=>{const p=d("RouteTitle"),u=d("XCodeBlock"),c=d("DataLoader"),m=d("DataSource"),g=d("AppView"),b=d("RouteView");return a(),V(b,{name:"onboarding-add-new-services"},{default:t(({can:f,t:r})=>[n(p,{title:r("onboarding.routes.add-services-code.title"),render:!1},null,8,["title"]),e[16]||(e[16]=o()),n(g,null,{default:t(()=>[n(m,{src:"/dataplanes/online?page=1&size=10"},{default:t(({data:l,error:v})=>[n(_,null,{header:t(()=>[n(k,null,{title:t(()=>e[0]||(e[0]=[o(`
                Add services
              `)])),_:1})]),content:t(()=>[e[11]||(e[11]=s("p",{class:"mb-4 text-center"},`
              The demo application includes two services: a Redis backend to store a counter value, and a frontend web UI to show and increment the counter.
            `,-1)),e[12]||(e[12]=o()),f("use kubernetes")?(a(),i(y,{key:0},[e[1]||(e[1]=s("p",null,"To run execute the following command:",-1)),e[2]||(e[2]=o()),n(u,{language:"bash",code:r("onboarding.routes.add-services-code.k8s")},null,8,["code"])],64)):(a(),i("div",D,[s("p",N,[e[3]||(e[3]=o(`
                Clone `)),s("a",{href:r("onboarding.routes.add-services-code.repo"),target:"_blank"},"the GitHub repository",8,O),e[4]||(e[4]=o(` for the demo application:
              `))]),e[7]||(e[7]=o()),n(u,{language:"bash",code:`git clone ${r("onboarding.routes.add-services-code.repo")}`},null,8,["code"]),e[8]||(e[8]=o()),s("p",R,[e[5]||(e[5]=o(`
                And follow the instructions in `)),s("a",{href:r("onboarding.routes.add-services-code.readme"),target:"_blank"},"the README",8,T),e[6]||(e[6]=o(`.
              `))])])),e[13]||(e[13]=o()),s("div",null,[n(c,{data:[l],errors:[v],loader:!1},{default:t(()=>[s("p",L,[e[9]||(e[9]=o(`
                  DPPs status:

                  `)),typeof l<"u"?(a(),i("span",S,"Connected")):(a(),i("span",E,"Disconnected"))]),e[10]||(e[10]=o()),typeof l>"u"?(a(),i("div",P,[n(w)])):A("",!0)]),_:2},1032,["data","errors"])])]),navigation:t(()=>[n(x,{"next-step":"onboarding-dataplanes-view","previous-step":"onboarding-add-new-services-view","should-allow-next":typeof l<"u"},null,8,["should-allow-next"])]),_:2},1024)]),_:2},1024)]),_:2},1024)]),_:1})}}}),F=B(H,[["__scopeId","data-v-84481557"]]);export{F as default};
