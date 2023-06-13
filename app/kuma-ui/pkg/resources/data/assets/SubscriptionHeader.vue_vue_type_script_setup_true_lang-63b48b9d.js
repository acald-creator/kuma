import{l as w,V as B}from"./kongponents.es-e7d71783.js";import{a as p,D as v}from"./DefinitionListItem-7e421553.js";import{k as C,h as L}from"./RouteView.vue_vue_type_script_setup_true_lang-983ede33.js";import{d as x,c as N,o as e,f as o,h as a,i as k,b as i,a as u,t as c,e as s,g as d,E as T,F as b,k as D,l as y,p as P,n as j,U as S}from"./index-e873eaa3.js";const E=t=>(P("data-v-321555ca"),t=t(),j(),t),O={key:0},q=E(()=>y("h5",{class:"overview-tertiary-title"},`
        General Information:
      `,-1)),F={key:1,class:"columns mt-4",style:{"--columns":"4"}},R={key:0},U={class:"overview-tertiary-title"},G=x({__name:"SubscriptionDetails",props:{details:{type:Object,required:!0},isDiscoverySubscription:{type:Boolean,default:!1}},setup(t){const r=t,{t:l}=C(),h=N(()=>{var I,m;let n;if(r.isDiscoverySubscription){const{lastUpdateTime:_,total:g,...f}=r.details.status;n=f}return(I=r.details.status)!=null&&I.stat&&(n=(m=r.details.status)==null?void 0:m.stat),n});function V(n){return n?parseInt(n,10).toLocaleString("en").toString():"0"}function $(n){return n==="--"?"error calculating":n}return(n,I)=>(e(),o("div",null,[t.details.globalInstanceId||t.details.controlPlaneInstanceId||t.details.connectTime||t.details.disconnectTime?(e(),o("div",O,[q,a(),k(v,null,{default:i(()=>[t.details.globalInstanceId?(e(),u(p,{key:0,term:s(l)("http.api.property.globalInstanceId")},{default:i(()=>[a(c(t.details.globalInstanceId),1)]),_:1},8,["term"])):d("",!0),a(),t.details.controlPlaneInstanceId?(e(),u(p,{key:1,term:s(l)("http.api.property.controlPlaneInstanceId")},{default:i(()=>[a(c(t.details.controlPlaneInstanceId),1)]),_:1},8,["term"])):d("",!0),a(),t.details.connectTime?(e(),u(p,{key:2,term:s(l)("http.api.property.connectTime")},{default:i(()=>[a(c(s(T)(t.details.connectTime)),1)]),_:1},8,["term"])):d("",!0),a(),t.details.disconnectTime?(e(),u(p,{key:3,term:s(l)("http.api.property.disconnectTime")},{default:i(()=>[a(c(s(T)(t.details.disconnectTime)),1)]),_:1},8,["term"])):d("",!0)]),_:1})])):d("",!0),a(),h.value?(e(),o("div",F,[(e(!0),o(b,null,D(h.value,(m,_)=>(e(),o(b,{key:_},[Object.keys(m).length>0?(e(),o("div",R,[y("h6",U,c(s(l)(`http.api.property.${_}`))+`:
          `,1),a(),k(v,null,{default:i(()=>[(e(!0),o(b,null,D(m,(g,f)=>(e(),u(p,{key:f,term:s(l)(`http.api.property.${f}`)},{default:i(()=>[a(c($(V(g))),1)]),_:2},1032,["term"]))),128))]),_:2},1024)])):d("",!0)],64))),128))])):(e(),u(s(B),{key:2,appearance:"info",class:"mt-4"},{alertIcon:i(()=>[k(s(w),{icon:"portal"})]),alertMessage:i(()=>[a(`
        There are no subscription statistics for `),y("strong",null,c(t.details.id),1)]),_:1}))]))}});const W=L(G,[["__scopeId","data-v-321555ca"]]),H={class:"text-lg font-medium"},M={class:"color-green-500"},z={key:0,class:"ml-4 color-red-600"},X=x({__name:"SubscriptionHeader",props:{details:{type:Object,required:!0}},setup(t){const r=t;return(l,h)=>(e(),o("h4",H,[y("span",M,`
      Connect time: `+c(s(S)(r.details.connectTime)),1),a(),r.details.disconnectTime?(e(),o("span",z,`
      Disconnect time: `+c(s(S)(r.details.disconnectTime)),1)):d("",!0)]))}});export{W as S,X as _};
