import{d as P,u as V,s as r,c as A,w as I,P as S,o as b,a as k,b as w,i as c,e as G,h as N}from"./index-e873eaa3.js";import{D as O}from"./DataPlaneList-91f78d14.js";import{j as q,k as B,g as R,_ as $}from"./RouteView.vue_vue_type_script_setup_true_lang-983ede33.js";import{_ as z}from"./RouteTitle.vue_vue_type_script_setup_true_lang-9ba039cc.js";import{Q as f}from"./QueryParameter-70743f73.js";import"./kongponents.es-e7d71783.js";import"./ContentWrapper-077fd70e.js";import"./DataOverview-0f286c9f.js";import"./EmptyBlock.vue_vue_type_script_setup_true_lang-af517a3d.js";import"./ErrorBlock-509c51e2.js";import"./LoadingBlock.vue_vue_type_script_setup_true_lang-735ab041.js";import"./TagList-9e4179fb.js";import"./StatusBadge-910ecedd.js";import"./DefinitionListItem-7e421553.js";import"./ResourceCodeBlock.vue_vue_type_script_setup_true_lang-34c1dccd.js";import"./CodeBlock.vue_vue_type_style_index_0_lang-4041119f.js";import"./TextWithCopyButton-df7cd424.js";import"./StatusInfo.vue_vue_type_script_setup_true_lang-355ab075.js";import"./toYaml-4e00099e.js";const oe=P({__name:"DataPlaneListView",props:{selectedDppName:{type:String,required:!1,default:null},gatewayType:{type:String,required:!1,default:"true"},offset:{type:Number,required:!1,default:0},isGatewayView:{type:Boolean,required:!1,default:!1}},setup(v){const a=v,g=q(),{t:_}=B(),D={name:{description:"filter by name or parts of a name"},service:{description:"filter by “kuma.io/service” value"},tag:{description:"filter by tags (e.g. “tag: version:2”)"},zone:{description:"filter by “kuma.io/zone” value"}},E={protocol:{description:"filter by “kuma.io/protocol” value"}},F={},i=V(),o=r([]),n=r(!0),d=r(null),p=r(null),y=r(a.offset),L=A(()=>({...D,...a.isGatewayView?F:E}));I(()=>i.params.mesh,function(){i.name!=="data-planes-list-view"&&i.name!=="gateways-list-view"||u(0)});function T(){const t=f.get("filterFields"),s=t!==null?JSON.parse(t):{};u(a.offset,{...s,gateway:a.gatewayType})}T();async function u(t,s={}){y.value=t,f.set("offset",t>0?t:null),f.set("gatewayType",s.gateway==="true"?"all":s.gateway),n.value=!0;const m=i.params.mesh,l=h(s,S,t,a.isGatewayView);try{const{items:e,next:x}=await g.getAllDataplaneOverviewsFromMesh({mesh:m},l);p.value=x,o.value=e??[]}catch(e){e instanceof Error?d.value=e:console.error(e),o.value=[],p.value=null}finally{n.value=!1}}function h(t,s,m,l){const e={...t,size:s,offset:m};return l&&(!("gateway"in e)||e.gateway==="false")?e.gateway="true":l||(e.gateway="false"),e}return(t,s)=>(b(),k($,{module:a.isGatewayView?"gateways":"data-planes"},{default:w(()=>[c(z,{title:G(_)(`${a.isGatewayView?"gateways":"data-planes"}.routes.items.title`)},null,8,["title"]),N(),c(R,null,{default:w(()=>[c(O,{"data-plane-overviews":o.value,"is-loading":n.value,error:d.value,"next-url":p.value,"page-offset":y.value,"selected-dpp-name":a.selectedDppName,"is-gateway-view":a.isGatewayView,"gateway-type":a.gatewayType,"dpp-filter-fields":L.value,onLoadData:u},null,8,["data-plane-overviews","is-loading","error","next-url","page-offset","selected-dpp-name","is-gateway-view","gateway-type","dpp-filter-fields"])]),_:1})]),_:1},8,["module"]))}});export{oe as default};
