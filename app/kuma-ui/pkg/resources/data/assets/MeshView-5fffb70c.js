import{o as v}from"./kongponents.es-e7d71783.js";import{d as w,D as g,r as i,o as _,a as h,b as a,i as u,e as s,m as $,k as C,h as d,t as R,j as V}from"./index-e873eaa3.js";import{k as x,g as y,_ as B}from"./RouteView.vue_vue_type_script_setup_true_lang-983ede33.js";const L=w({__name:"MeshView",setup(D){var c;const{t:p}=x(),f=(((c=g().getRoutes().find(t=>t.name==="mesh-abstract-view"))==null?void 0:c.children)??[])[0].children??[],l=new Map,o=f.map(t=>{var r;const n=String(t.name);return l.set(`#${n}`,{module:(r=t==null?void 0:t.meta)==null?void 0:r.module}),{title:p(`meshes.routes.item.navigation.${n}`),hash:`#${n}`}});return(t,n)=>{const r=i("router-link"),b=i("RouterView");return _(),h(B,null,{default:a(({children:k})=>[u(y,null,{default:a(()=>[u(s(v),{class:"route-mesh-view-tabs",tabs:s(o),"has-panels":!1,"model-value":(s(o).find(e=>{var m;return k.includes((m=s(l).get(e.hash))==null?void 0:m.module)})??s(o)[0]).hash},$({_:2},[C(s(o),e=>({name:`${e.hash.substr(1)}-anchor`,fn:a(()=>[u(r,{to:{name:e.hash.substr(1)}},{default:a(()=>[d(R(e.title),1)]),_:2},1032,["to"])])}))]),1032,["tabs","model-value"]),d(),u(b,null,{default:a(e=>[(_(),h(V(e.Component),{key:e.route.path}))]),_:1})]),_:2},1024)]),_:1})}}});export{L as default};
