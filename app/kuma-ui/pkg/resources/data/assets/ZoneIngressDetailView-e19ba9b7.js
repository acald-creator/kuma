import{d as w,u as k,s as l,w as f,o as s,a as o,b as _,i as m,e as p,h as z,l as h,f as b}from"./index-e873eaa3.js";import{_ as y}from"./ZoneIngressDetails.vue_vue_type_script_setup_true_lang-1f77e8d6.js";import{j as I,f as $,k as x,g as B,_ as E}from"./RouteView.vue_vue_type_script_setup_true_lang-983ede33.js";import{_ as V}from"./RouteTitle.vue_vue_type_script_setup_true_lang-9ba039cc.js";import{_ as N}from"./EmptyBlock.vue_vue_type_script_setup_true_lang-af517a3d.js";import{E as A}from"./ErrorBlock-509c51e2.js";import{_ as C}from"./LoadingBlock.vue_vue_type_script_setup_true_lang-735ab041.js";import"./DefinitionListItem-7e421553.js";import"./EnvoyData-b8edf579.js";import"./kongponents.es-e7d71783.js";import"./CodeBlock.vue_vue_type_style_index_0_lang-4041119f.js";import"./StatusInfo.vue_vue_type_script_setup_true_lang-355ab075.js";import"./SubscriptionHeader.vue_vue_type_script_setup_true_lang-63b48b9d.js";import"./TabsWidget-42b22250.js";import"./QueryParameter-70743f73.js";import"./TextWithCopyButton-df7cd424.js";const D={class:"zone-details"},O={key:3,class:"kcard-border"},X=w({__name:"ZoneIngressDetailView",setup(T){const d=I(),e=k(),v=$(),{t:u}=x(),a=l(null),n=l(!0),r=l(null);f(()=>e.params.mesh,function(){e.name==="zone-ingress-detail-view"&&i()}),f(()=>e.params.name,function(){e.name==="zone-ingress-detail-view"&&i()}),g();function g(){v.dispatch("updatePageTitle",e.params.zoneIngress),i()}async function i(){n.value=!0,r.value=null;const c=e.params.zoneIngress;try{a.value=await d.getZoneIngressOverview({name:c})}catch(t){a.value=null,t instanceof Error?r.value=t:console.error(t)}finally{n.value=!1}}return(c,t)=>(s(),o(E,null,{default:_(()=>[m(V,{title:p(u)("zone-ingresses.routes.item.title")},null,8,["title"]),z(),m(B,{breadcrumbs:[{to:{name:"zone-ingress-list-view"},text:p(u)("zone-ingresses.routes.item.breadcrumbs")}]},{default:_(()=>[h("div",D,[n.value?(s(),o(C,{key:0})):r.value!==null?(s(),o(A,{key:1,error:r.value},null,8,["error"])):a.value===null?(s(),o(N,{key:2})):(s(),b("div",O,[m(y,{"zone-ingress-overview":a.value},null,8,["zone-ingress-overview"])]))])]),_:1},8,["breadcrumbs"])]),_:1}))}});export{X as default};
