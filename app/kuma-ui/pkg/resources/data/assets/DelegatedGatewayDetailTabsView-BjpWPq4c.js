import{_ as g,r as t,o as b,q as f,w as a,b as s,m as y,e as i,T as V,N as h,t as x}from"./index-DELdVnGm.js";const v={};function T(R,o){const m=t("RouteTitle"),d=t("XCopyButton"),l=t("XAction"),p=t("XTabs"),_=t("RouterView"),w=t("AppView"),u=t("RouteView");return b(),f(u,{name:"delegated-gateway-detail-tabs-view",params:{mesh:"",service:""}},{default:a(({route:e,t:n})=>[s(w,{docs:n("delegated-gateways.href.docs"),breadcrumbs:[{to:{name:"mesh-detail-view",params:{mesh:e.params.mesh}},text:e.params.mesh},{to:{name:"delegated-gateway-list-view",params:{mesh:e.params.mesh}},text:n("delegated-gateways.routes.item.breadcrumbs")}]},{title:a(()=>[y("h1",null,[s(d,{text:e.params.service},{default:a(()=>[s(m,{title:n("delegated-gateways.routes.item.title",{name:e.params.service})},null,8,["title"])]),_:2},1032,["text"])])]),default:a(()=>{var c;return[o[0]||(o[0]=i()),s(p,{selected:(c=e.child())==null?void 0:c.name},V({_:2},[h(e.children,({name:r})=>({name:`${r}-tab`,fn:a(()=>[s(l,{to:{name:r}},{default:a(()=>[i(x(n(`delegated-gateways.routes.item.navigation.${r}`)),1)]),_:2},1032,["to"])])}))]),1032,["selected"]),o[1]||(o[1]=i()),s(_)]}),_:2},1032,["docs","breadcrumbs"])]),_:1})}const B=g(v,[["render",T]]);export{B as default};
