import{d as z,r as n,o as s,q as d,w as t,b as i,e as l,p as R,A as E,T as N,t as A,m as B,c as g,M as I,N as X}from"./index-DELdVnGm.js";const v=["data-testid"],M=z({__name:"ZoneConfigView",props:{data:{}},setup(_){const a=_;return(b,r)=>{const f=n("RouteTitle"),C=n("XI18n"),h=n("XCodeBlock"),k=n("XAlert"),y=n("XCard"),V=n("AppView"),w=n("DataSource"),x=n("RouteView");return s(),d(x,{name:"zone-cp-config-view",params:{zone:"",codeSearch:"",codeFilter:!1,codeRegExp:!1}},{default:t(({route:o,t:p,uri:S})=>{var u,m;return[i(f,{render:!1,title:p("zone-cps.routes.item.navigation.zone-cp-config-view")},null,8,["title"]),r[1]||(r[1]=l()),i(w,{src:S(R(E),"/control-plane/outdated/:version",{version:((m=(u=a.data.zoneInsight.version)==null?void 0:u.kumaCp)==null?void 0:m.version)??"-"})},{default:t(({data:c})=>[i(V,null,N({default:t(()=>[r[0]||(r[0]=l()),i(y,null,{default:t(()=>[Object.keys(a.data.zoneInsight.config).length>0?(s(),d(h,{key:0,language:"json",code:JSON.stringify(a.data.zoneInsight.config,null,2),"is-searchable":"",query:o.params.codeSearch,"is-filter-mode":o.params.codeFilter,"is-reg-exp-mode":o.params.codeRegExp,onQueryChange:e=>o.update({codeSearch:e}),onFilterModeChange:e=>o.update({codeFilter:e}),onRegExpModeChange:e=>o.update({codeRegExp:e})},null,8,["code","query","is-filter-mode","is-reg-exp-mode","onQueryChange","onFilterModeChange","onRegExpModeChange"])):(s(),d(k,{key:1,class:"mt-4","data-testid":"warning-no-subscriptions",variant:"warning"},{default:t(()=>[l(A(p("zone-cps.detail.no_subscriptions")),1)]),_:2},1024))]),_:2},1024)]),_:2},[a.data.warnings.length>0?{name:"notifications",fn:t(()=>[B("ul",null,[(s(!0),g(I,null,X(a.data.warnings,e=>(s(),g("li",{key:e.kind,"data-testid":`warning-${e.kind}`},[i(C,{path:`common.warnings.${e.kind}`,params:{zoneCpVersion:e.payload.zoneCpVersion??"",...e.kind==="INCOMPATIBLE_ZONE_AND_GLOBAL_CPS_VERSIONS"?{globalCpVersion:(c==null?void 0:c.version)??""}:{}}},null,8,["path","params"])],8,v))),128))])]),key:"0"}:void 0]),1024)]),_:2},1032,["src"])]}),_:1})}}});export{M as default};
