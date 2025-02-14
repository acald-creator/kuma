import{d as L,r as c,o as r,q as d,w as e,b as t,e as n,t as i,m as u,s as f,Z as S,p as E,ao as q,B as M,c as k,M as R,I as $,_ as F}from"./index-DELdVnGm.js";import{P as G}from"./PolicyTypeTag-DVBj53ba.js";import{S as Z}from"./SummaryView-gVGILa9M.js";const O={class:"stack"},j={class:"visually-hidden"},H={key:0},J=L({__name:"PolicyListView",props:{policyTypes:{}},setup(C){const X=C;return(K,a)=>{const b=c("XEmptyState"),h=c("XBadge"),_=c("XAction"),z=c("XI18n"),v=c("XCard"),V=c("XInput"),P=c("XIcon"),x=c("XActionGroup"),w=c("DataCollection"),B=c("RouterView"),I=c("DataLoader"),A=c("AppView"),N=c("RouteView");return r(),d(N,{name:"policy-list-view",params:{page:1,size:Number,mesh:"",policyPath:"",policy:"",s:""}},{default:e(({route:s,t:p,can:T,uri:D,me:y})=>[t(w,{predicate:l=>typeof l<"u"&&l.path===s.params.policyPath,items:X.policyTypes??[]},{empty:e(()=>[t(b,null,{default:e(()=>[n(i(p("policies.routes.items.empty")),1)]),_:2},1024)]),item:e(({item:l})=>[t(A,null,{default:e(()=>[u("div",O,[t(v,null,{default:e(()=>[u("header",null,[u("div",null,[l.isExperimental?(r(),d(h,{key:0,appearance:"warning"},{default:e(()=>[n(i(p("policies.collection.beta")),1)]),_:2},1024)):f("",!0),a[1]||(a[1]=n()),l.isInbound?(r(),d(h,{key:1,appearance:"neutral"},{default:e(()=>[n(i(p("policies.collection.inbound")),1)]),_:2},1024)):f("",!0),a[2]||(a[2]=n()),l.isOutbound?(r(),d(h,{key:2,appearance:"neutral"},{default:e(()=>[n(i(p("policies.collection.outbound")),1)]),_:2},1024)):f("",!0),a[3]||(a[3]=n()),t(_,{action:"docs",href:p("policies.href.docs",{name:l.name}),"data-testid":"policy-documentation-link"},{default:e(()=>[u("span",j,i(p("common.documentation")),1)]),_:2},1032,["href"])]),a[4]||(a[4]=n()),u("h3",null,[t(G,{"policy-type":l.name},{default:e(()=>[n(i(p("policies.collection.title",{name:l.name})),1)]),_:2},1032,["policy-type"])])]),a[5]||(a[5]=n()),t(z,{path:`policies.type.${l.name}.description`,"default-path":"policies.collection.description"},null,8,["path"])]),_:2},1024),a[18]||(a[18]=n()),t(v,null,{default:e(()=>[u("search",null,[u("form",{onSubmit:a[0]||(a[0]=S(()=>{},["prevent"]))},[t(V,{placeholder:"Filter by name...",type:"search",appearance:"search",value:s.params.s,debounce:1e3,onChange:m=>s.update({s:m})},null,8,["value","onChange"])],32)]),a[17]||(a[17]=n()),t(I,{src:D(E(q),"/meshes/:mesh/policy-path/:path",{mesh:s.params.mesh,path:s.params.policyPath},{page:s.params.page,size:s.params.size,search:s.params.s})},{loadable:e(({data:m})=>[t(w,{items:(m==null?void 0:m.items)??[void 0],page:s.params.page,"page-size":s.params.size,total:m==null?void 0:m.total,onChange:s.update},{empty:e(()=>[t(b,null,{title:e(()=>[u("h3",null,i(p("policies.x-empty-state.title")),1)]),action:e(()=>[t(_,{action:"docs",href:p("policies.href.docs",{name:l.name})},{default:e(()=>[n(i(p("common.documentation")),1)]),_:2},1032,["href"])]),default:e(()=>[a[6]||(a[6]=n()),t(z,{path:"policies.x-empty-state.body",params:{type:l.name,suffix:s.params.s.length>0?p("common.matchingsearch"):""}},null,8,["params"]),a[7]||(a[7]=n())]),_:2},1024)]),default:e(()=>[t(M,{headers:[{...y.get("headers.role"),label:"Role",key:"role",hideLabel:!0},{...y.get("headers.name"),label:"Name",key:"name"},{...y.get("headers.namespace"),label:"Namespace",key:"namespace"},...T("use zones")&&l.isTargetRefBased?[{...y.get("headers.zone"),label:"Zone",key:"zone"}]:[],...l.isTargetRefBased?[{...y.get("headers.targetRef"),label:"Target ref",key:"targetRef"}]:[],{...y.get("headers.actions"),label:"Actions",key:"actions",hideLabel:!0}],items:m==null?void 0:m.items,"is-selected-row":o=>o.id===s.params.policy,onResize:y.set},{role:e(({row:o})=>[o.role==="producer"?(r(),d(P,{key:0,name:`policy-role-${o.role}`},{default:e(()=>[n(`
                              Role: `+i(o.role),1)]),_:2},1032,["name"])):(r(),k(R,{key:1},[n(`
                             
                          `)],64))]),name:e(({row:o})=>[t(_,{"data-action":"",to:{name:"policy-summary-view",params:{mesh:o.mesh,policyPath:l.path,policy:o.id},query:{page:s.params.page,size:s.params.size}}},{default:e(()=>[n(i(o.name),1)]),_:2},1032,["to"])]),namespace:e(({row:o})=>[n(i(o.namespace.length>0?o.namespace:p("common.detail.none")),1)]),targetRef:e(({row:o})=>{var g;return[typeof((g=o.spec)==null?void 0:g.targetRef)<"u"?(r(),d(h,{key:0,appearance:"neutral"},{default:e(()=>[n(i(o.spec.targetRef.kind),1),o.spec.targetRef.name?(r(),k("span",H,[a[8]||(a[8]=n(":")),u("b",null,i(o.spec.targetRef.name),1)])):f("",!0)]),_:2},1024)):(r(),d(h,{key:1,appearance:"neutral"},{default:e(()=>a[9]||(a[9]=[n(`
                            Mesh
                          `)])),_:1}))]}),zone:e(({row:o})=>[o.zone?(r(),d(_,{key:0,to:{name:"zone-cp-detail-view",params:{zone:o.zone}}},{default:e(()=>[n(i(o.zone),1)]),_:2},1032,["to"])):(r(),k(R,{key:1},[n(i(p("common.detail.none")),1)],64))]),actions:e(({row:o})=>[t(x,null,{default:e(()=>[t(_,{to:{name:"policy-detail-view",params:{mesh:o.mesh,policyPath:l.path,policy:o.id}}},{default:e(()=>[n(i(p("common.collection.actions.view")),1)]),_:2},1032,["to"])]),_:2},1024)]),_:2},1032,["headers","items","is-selected-row","onResize"])]),_:2},1032,["items","page","page-size","total","onChange"]),a[16]||(a[16]=n()),s.params.policy?(r(),d(B,{key:0},{default:e(({Component:o})=>[t(Z,{onClose:g=>s.replace({name:"policy-list-view",params:{mesh:s.params.mesh,policyPath:s.params.policyPath},query:{page:s.params.page,size:s.params.size}})},{default:e(()=>[typeof m<"u"?(r(),d($(o),{key:0,items:m.items,"policy-type":l},null,8,["items","policy-type"])):f("",!0)]),_:2},1032,["onClose"])]),_:2},1024)):f("",!0)]),_:2},1032,["src"])]),_:2},1024)])]),_:2},1024)]),_:2},1032,["predicate","items"])]),_:1})}}}),Y=F(J,[["__scopeId","data-v-1a08eeaa"]]);export{Y as default};
