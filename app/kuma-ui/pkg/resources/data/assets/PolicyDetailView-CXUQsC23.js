import{d as B,r as m,o as l,q as d,w as e,b as n,U as z,e as a,t as s,s as y,c as h,m as w,p as N,ao as P,B as L,M as S,I as T}from"./index-CjpuIAP7.js";import{S as q}from"./SummaryView-ilhZUlnY.js";const G={key:0},U=B({__name:"PolicyDetailView",props:{data:{}},setup(k){const p=k;return(E,t)=>{const u=m("XBadge"),_=m("XAction"),C=m("XAboutCard"),b=m("XActionGroup"),v=m("RouterView"),V=m("DataCollection"),A=m("DataLoader"),R=m("XCard"),X=m("AppView"),x=m("RouteView");return l(),d(x,{name:"policy-detail-view",params:{page:1,size:Number,s:"",mesh:"",policy:"",policyPath:"",proxy:""}},{default:e(({route:o,t:c,uri:D,can:g,me:f})=>[n(X,null,{default:e(()=>[n(C,{title:c("policies.detail.about.title"),created:p.data.creationTime,modified:p.data.modificationTime},{default:e(()=>[n(z,{layout:"horizontal"},{title:e(()=>[a(s(c("http.api.property.type")),1)]),body:e(()=>[n(u,{appearance:"decorative"},{default:e(()=>[a(s(p.data.type),1)]),_:1})]),_:2},1024),t[5]||(t[5]=a()),p.data.namespace.length>0?(l(),d(z,{key:0,layout:"horizontal"},{title:e(()=>[a(s(c("http.api.property.namespace")),1)]),body:e(()=>[n(u,{appearance:"decorative"},{default:e(()=>[a(s(p.data.namespace),1)]),_:1})]),_:2},1024)):y("",!0),t[6]||(t[6]=a()),g("use zones")&&p.data.zone?(l(),d(z,{key:1,layout:"horizontal"},{title:e(()=>[a(s(c("http.api.property.zone")),1)]),body:e(()=>[n(u,{appearance:"decorative"},{default:e(()=>[n(_,{to:{name:"zone-cp-detail-view",params:{zone:p.data.zone}}},{default:e(()=>[a(s(p.data.zone),1)]),_:1},8,["to"])]),_:1})]),_:2},1024)):y("",!0),t[7]||(t[7]=a()),p.data.spec?(l(),d(z,{key:2,layout:"horizontal"},{title:e(()=>[a(s(c("http.api.property.targetRef")),1)]),body:e(()=>[p.data.spec.targetRef?(l(),d(u,{key:0,appearance:"neutral"},{default:e(()=>[a(s(p.data.spec.targetRef.kind),1),p.data.spec.targetRef.name?(l(),h("span",G,[t[3]||(t[3]=a(":")),w("b",null,s(p.data.spec.targetRef.name),1)])):y("",!0)]),_:1})):(l(),d(u,{key:1,appearance:"neutral"},{default:e(()=>[a(s(c("http.api.property.mesh")),1)]),_:2},1024))]),_:2},1024)):y("",!0)]),_:2},1032,["title","created","modified"]),t[14]||(t[14]=a()),n(R,null,{title:e(()=>t[8]||(t[8]=[w("h3",null,"Affected Data Plane Proxies",-1)])),default:e(()=>[t[13]||(t[13]=a()),n(A,{src:D(N(P),"/meshes/:mesh/policy-path/:path/policy/:name/dataplanes",{mesh:o.params.mesh,path:o.params.policyPath,name:o.params.policy},{page:o.params.page,size:o.params.size})},{loadable:e(({data:r})=>[n(V,{type:"data-planes",items:(r==null?void 0:r.items)??[void 0],page:o.params.page,"page-size":o.params.size,total:r==null?void 0:r.total,onChange:o.update},{default:e(()=>[n(L,{headers:[{...f.get("headers.name"),label:"Name",key:"name"},{...f.get("headers.namespace"),label:"Namespace",key:"namespace"},...g("use zones")?[{...f.get("headers.zone"),label:"Zone",key:"zone"}]:[],{...f.get("headers.actions"),label:"Actions",key:"actions",hideLabel:!0}],items:r==null?void 0:r.items,"is-selected-row":i=>i.id===o.params.proxy,onResize:f.set},{name:e(({row:i})=>[n(_,{"data-action":"",to:{name:"data-plane-detail-view",params:{proxy:i.id}}},{default:e(()=>[a(s(i.name),1)]),_:2},1032,["to"])]),namespace:e(({row:i})=>[a(s(i.namespace),1)]),zone:e(({row:i})=>[i.zone?(l(),d(_,{key:0,to:{name:"zone-cp-detail-view",params:{zone:i.zone}}},{default:e(()=>[a(s(i.zone),1)]),_:2},1032,["to"])):(l(),h(S,{key:1},[a(s(c("common.collection.none")),1)],64))]),actions:e(({row:i})=>[n(b,null,{default:e(()=>[n(_,{to:{name:"data-plane-detail-view",params:{proxy:i.id}}},{default:e(()=>[a(s(c("common.collection.actions.view")),1)]),_:2},1032,["to"])]),_:2},1024)]),_:2},1032,["headers","items","is-selected-row","onResize"]),t[12]||(t[12]=a()),n(v,null,{default:e(({Component:i})=>[o.child()?(l(),d(q,{key:0,onClose:F=>o.replace({params:{mesh:o.params.mesh},query:{page:o.params.page,size:o.params.size,s:o.params.s}})},{default:e(()=>[typeof r<"u"?(l(),d(T(i),{key:0,items:r.items},null,8,["items"])):y("",!0)]),_:2},1032,["onClose"])):y("",!0)]),_:2},1024)]),_:2},1032,["items","page","page-size","total","onChange"])]),_:2},1032,["src"])]),_:2},1024)]),_:2},1024)]),_:1})}}});export{U as default};
