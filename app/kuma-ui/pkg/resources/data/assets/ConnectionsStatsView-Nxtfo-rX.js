import{d as h,r as o,o as w,q as k,w as a,b as n,e as p,p as R,$ as A}from"./index-DELdVnGm.js";const X=h({__name:"ConnectionsStatsView",props:{networking:{},routeName:{}},setup(d){const r=d;return(T,t)=>{const c=o("RouteTitle"),i=o("XAction"),l=o("XCodeBlock"),m=o("DataLoader"),g=o("XCard"),u=o("AppView"),_=o("RouteView");return w(),k(_,{name:r.routeName,params:{mesh:"",proxy:"",proxyType:"",codeSearch:"",codeFilter:!1,codeRegExp:!1}},{default:a(({route:e,t:f,uri:x})=>[n(c,{render:!1,title:f("data-planes.routes.item.navigation.data-plane-stats-view")},null,8,["title"]),t[1]||(t[1]=p()),n(u,null,{default:a(()=>[n(g,null,{default:a(()=>[n(m,{src:x(R(A),"/connections/stats/for/:proxyType/:name/:mesh/:socketAddress",{proxyType:{ingresses:"zone-ingress",egresses:"zone-egress"}[e.params.proxyType]??"dataplane",name:e.params.proxy,mesh:e.params.mesh||"*",socketAddress:r.networking.inboundAddress})},{default:a(({data:y,refresh:C})=>[n(l,{language:"json",code:y.raw,"is-searchable":"",query:e.params.codeSearch,"is-filter-mode":e.params.codeFilter,"is-reg-exp-mode":e.params.codeRegExp,onQueryChange:s=>e.update({codeSearch:s}),onFilterModeChange:s=>e.update({codeFilter:s}),onRegExpModeChange:s=>e.update({codeRegExp:s})},{"primary-actions":a(()=>[n(i,{action:"refresh",appearance:"primary",onClick:C},{default:a(()=>t[0]||(t[0]=[p(`
                Refresh
              `)])),_:2},1032,["onClick"])]),_:2},1032,["code","query","is-filter-mode","is-reg-exp-mode","onQueryChange","onFilterModeChange","onRegExpModeChange"])]),_:2},1032,["src"])]),_:2},1024)]),_:2},1024)]),_:1},8,["name"])}}});export{X as default};
