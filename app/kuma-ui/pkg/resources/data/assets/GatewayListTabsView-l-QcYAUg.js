import{_ as v,r as t,o as l,q as r,w as a,b as o,e as c,m as h,c as x,M as A,N as C,n as R,t as X,I as k}from"./index-DELdVnGm.js";const $={},B={class:"stack"};function D(N,n){const u=t("RouteTitle"),_=t("XAction"),w=t("XActionGroup"),f=t("DataCollection"),g=t("XI18n"),y=t("RouterView"),V=t("AppView"),b=t("RouteView");return l(),r(b,{name:"gateway-list-tabs-view",params:{mesh:""}},{default:a(({route:s,t:m})=>{var d;return[o(u,{render:!1,title:m(`${((d=s.child())==null?void 0:d.name)==="builtin-gateway-list-view"?"builtin":"delegated"}-gateways.routes.items.title`)},null,8,["title"]),n[2]||(n[2]=c()),h("div",B,[o(V,null,{actions:a(()=>[o(f,{items:s.children,empty:!1},{default:a(({items:i})=>[o(w,{expanded:!0},{default:a(()=>[(l(!0),x(A,null,C(i,({name:e})=>{var p;return l(),r(_,{key:`${e}`,class:R({active:((p=s.child())==null?void 0:p.name)===e}),to:{name:e,params:{mesh:s.params.mesh}},"data-testid":`${e}-sub-tab`},{default:a(()=>[c(X(m(`gateways.routes.items.navigation.${e}.label`)),1)]),_:2},1032,["class","to","data-testid"])}),128))]),_:2},1024)]),_:2},1032,["items"])]),default:a(()=>{var i;return[n[0]||(n[0]=c()),o(g,{path:`gateways.routes.items.navigation.${(i=s.child())==null?void 0:i.name}.description`,"default-path":"common.i18n.ignore-error"},null,8,["path"]),n[1]||(n[1]=c()),o(y,null,{default:a(({Component:e})=>[(l(),r(k(e)))]),_:1})]}),_:2},1024)])]}),_:1})}const G=v($,[["render",D]]);export{G as default};
