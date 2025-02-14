import{_ as b}from"./PolicySummary.vue_vue_type_script_setup_true_lang-BFwfg2iw.js";import{_ as v}from"./ResourceCodeBlock.vue_vue_type_script_setup_true_lang-gSzYjsvJ.js";import{d as D,r as a,o as p,q as c,w as t,b as n,m as i,t as d,e as m,c as g,M,N as C,T as N,s as f,_ as A}from"./index-DELdVnGm.js";const B={key:0},q=D({__name:"PolicySummaryView",props:{items:{},policyType:{}},setup(S){const y=S;return(L,s)=>{const x=a("XEmptyState"),w=a("RouteTitle"),E=a("XAction"),V=a("XSelect"),R=a("XLayout"),k=a("DataSource"),X=a("AppView"),T=a("DataCollection"),$=a("RouteView");return p(),c($,{name:"policy-summary-view",params:{mesh:"",policyPath:"",policy:"",codeSearch:"",codeFilter:!1,codeRegExp:!1,format:String}},{default:t(({route:e,t:l})=>[n(T,{items:y.items,predicate:u=>u.id===e.params.policy,find:!0},{empty:t(()=>[n(x,null,{title:t(()=>[i("h2",null,d(l("common.collection.summary.empty_title",{type:y.policyType.name})),1)]),default:t(()=>[s[0]||(s[0]=m()),i("p",null,d(l("common.collection.summary.empty_message",{type:y.policyType.name})),1)]),_:2},1024)]),default:t(({items:u})=>[(p(!0),g(M,null,C([u[0]],r=>(p(),c(X,{key:r.id},{title:t(()=>[i("h2",null,[n(E,{to:{name:"policy-detail-view",params:{mesh:e.params.mesh,policyPath:e.params.policyPath,policy:e.params.policy}}},{default:t(()=>[n(w,{title:l("policies.routes.item.title",{name:r.name})},null,8,["title"])]),_:2},1032,["to"])])]),default:t(()=>[s[3]||(s[3]=m()),r?(p(),c(b,{key:0,policy:r,format:e.params.format},{header:t(()=>[i("header",null,[n(R,{type:"separated",size:"max"},{default:t(()=>[i("h3",null,d(l("policies.routes.item.config")),1),s[1]||(s[1]=m()),r.spec?(p(),g("div",B,[n(V,{label:l("policies.routes.item.format"),selected:e.params.format,onChange:o=>{e.update({format:o})}},N({_:2},[C(["structured","yaml"],o=>({name:`${o}-option`,fn:t(()=>[m(d(l(`policies.routes.item.formats.${o}`)),1)])}))]),1032,["label","selected","onChange"])])):f("",!0)]),_:2},1024)])]),default:t(()=>[s[2]||(s[2]=m()),n(v,{resource:r.config,"is-searchable":"",query:e.params.codeSearch,"is-filter-mode":e.params.codeFilter,"is-reg-exp-mode":e.params.codeRegExp,onQueryChange:o=>e.update({codeSearch:o}),onFilterModeChange:o=>e.update({codeFilter:o}),onRegExpModeChange:o=>e.update({codeRegExp:o})},{default:t(({copy:o,copying:F})=>[F?(p(),c(k,{key:0,src:`/meshes/${e.params.mesh}/policy-path/${e.params.policyPath}/policy/${e.params.policy}/as/kubernetes?no-store`,onChange:_=>{o(h=>h(_))},onError:_=>{o((h,P)=>P(_))}},null,8,["src","onChange","onError"])):f("",!0)]),_:2},1032,["resource","query","is-filter-mode","is-reg-exp-mode","onQueryChange","onFilterModeChange","onRegExpModeChange"])]),_:2},1032,["policy","format"])):f("",!0)]),_:2},1024))),128))]),_:2},1032,["items","predicate"])]),_:1})}}}),j=A(q,[["__scopeId","data-v-49caf745"]]);export{j as default};
