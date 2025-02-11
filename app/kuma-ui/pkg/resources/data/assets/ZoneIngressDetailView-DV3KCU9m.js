import{d as G,H,r as u,o as i,q as c,w as e,b as n,U as h,e as t,t as r,S as M,s as w,c as y,M as g,p as X,$ as P,N as C,I as U,m as J,B as K,_ as Q}from"./index-CjpuIAP7.js";import{S as W}from"./SummaryView-ilhZUlnY.js";import{C as R,b as $,a as Y}from"./ConnectionTraffic-ierpVTvk.js";import"./TagList-CSMSGr39.js";const ee=G({__name:"ZoneIngressDetailView",props:{data:{}},setup(q){const d=q,S=H();return(te,o)=>{const V=u("XBadge"),D=u("XCopyButton"),L=u("XAboutCard"),z=u("XAction"),x=u("DataCollection"),A=u("XLayout"),N=u("XInputSwitch"),B=u("XCard"),O=u("RouterView"),j=u("DataLoader"),Z=u("AppView"),E=u("RouteView");return i(),c(E,{name:"zone-ingress-detail-view",params:{subscription:"",proxy:"",inactive:Boolean}},{default:e(({t:p,me:f,route:l,uri:F})=>[n(Z,null,{default:e(()=>[n(L,{title:p("zone-ingresses.routes.item.about.title"),created:d.data.creationTime,modified:d.data.modificationTime},{default:e(()=>[n(h,{layout:"horizontal"},{title:e(()=>[t(r(p("http.api.property.status")),1)]),body:e(()=>[n(M,{status:d.data.state},null,8,["status"])]),_:2},1024),o[4]||(o[4]=t()),d.data.namespace.length>0?(i(),c(h,{key:0,layout:"horizontal"},{title:e(()=>[t(r(p("http.api.property.namespace")),1)]),body:e(()=>[n(V,{appearance:"decorative"},{default:e(()=>[t(r(d.data.namespace),1)]),_:1})]),_:2},1024)):w("",!0),o[5]||(o[5]=t()),n(h,{layout:"horizontal"},{title:e(()=>[t(r(p("http.api.property.address")),1)]),body:e(()=>[d.data.zoneIngress.socketAddress.length>0?(i(),c(D,{key:0,variant:"badge",format:"default",text:d.data.zoneIngress.socketAddress},null,8,["text"])):(i(),y(g,{key:1},[t(r(p("common.detail.none")),1)],64))]),_:2},1024),o[6]||(o[6]=t()),n(h,{layout:"horizontal"},{title:e(()=>[t(r(p("http.api.property.advertisedAddress")),1)]),body:e(()=>[d.data.zoneIngress.advertisedSocketAddress.length>0?(i(),c(V,{key:0,appearance:"decorative"},{default:e(()=>[n(D,{text:d.data.zoneIngress.advertisedSocketAddress},null,8,["text"])]),_:1})):(i(),y(g,{key:1},[t(r(p("common.detail.none")),1)],64))]),_:2},1024)]),_:2},1032,["title","created","modified"]),o[18]||(o[18]=t()),n(j,{src:F(X(P),"/connections/stats/for/:proxyType/:name/:mesh/:socketAddress",{name:l.params.proxy,mesh:"*",socketAddress:d.data.zoneIngress.socketAddress,proxyType:"zone-ingress"})},{default:e(({data:s,refresh:m})=>[n(B,null,{default:e(()=>[n(A,{type:"columns"},{default:e(()=>[n(R,null,{default:e(()=>[n(A,{type:"stack",size:"small"},{default:e(()=>[n(x,{type:"inbounds",items:Object.entries(s.inbounds)},{default:e(({items:a})=>[(i(!0),y(g,null,C(a,([k,v])=>(i(),c($,{key:`${k}`,protocol:"",traffic:v},{default:e(()=>[n(z,{"data-action":"",to:{name:(_=>_.includes("bound")?_.replace("-outbound-","-inbound-"):"zone-ingress-connection-inbound-summary-stats-view")(String(X(S).name)),params:{connection:k,proxyType:"ingresses"},query:{inactive:l.params.inactive}}},{default:e(()=>[t(`
                        :`+r(k.split("_").at(-1)),1)]),_:2},1032,["to"])]),_:2},1032,["traffic"]))),128))]),_:2},1032,["items"])]),_:2},1024)]),_:2},1024),o[11]||(o[11]=t()),n(R,null,{actions:e(()=>[n(N,{checked:l.params.inactive,"data-testid":"dataplane-outbounds-inactive-toggle",onChange:a=>l.update({inactive:a})},{label:e(()=>o[7]||(o[7]=[t(`
                    Show inactive
                  `)])),_:2},1032,["checked","onChange"]),o[9]||(o[9]=t()),n(z,{action:"refresh",appearance:"primary",onClick:m},{default:e(()=>o[8]||(o[8]=[t(`
                  Refresh
                `)])),_:2},1032,["onClick"])]),default:e(()=>[o[10]||(o[10]=t()),(i(),y(g,null,C(["upstream"],a=>n(x,{key:a,type:"outbounds",items:Object.entries(s.outbounds)},{default:e(({items:k})=>[n(x,{type:"activeOutbounds",predicate:l.params.inactive?void 0:([v,_])=>{var b,I;return((typeof _.tcp<"u"?(b=_.tcp)==null?void 0:b[`${a}_cx_rx_bytes_total`]:(I=_.http)==null?void 0:I[`${a}_rq_total`])??0)>0},items:k},{default:e(({items:v})=>[v.length>0?(i(),c(Y,{key:0,type:"outbound"},{default:e(()=>[(i(),y(g,null,C([/-([a-f0-9]){16}$/],_=>n(A,{key:_,type:"stack",size:"small"},{default:e(()=>[(i(!0),y(g,null,C(v,([b,I])=>(i(),c($,{key:`${b}`,"data-testid":"dataplane-outbound",protocol:"",traffic:I,direction:a},{default:e(()=>[n(z,{"data-action":"",to:{name:(T=>T.includes("bound")?T.replace("-inbound-","-outbound-"):"zone-ingress-connection-outbound-summary-stats-view")(String(X(S).name)),params:{connection:b},query:{inactive:l.params.inactive}}},{default:e(()=>[t(r(b),1)]),_:2},1032,["to"])]),_:2},1032,["traffic","direction"]))),128))]),_:2},1024)),64))]),_:2},1024)):w("",!0)]),_:2},1032,["predicate","items"])]),_:2},1032,["items"])),64))]),_:2},1024)]),_:2},1024)]),_:2},1024),o[12]||(o[12]=t()),n(O,null,{default:e(a=>[a.route.name!==l.name?(i(),c(W,{key:0,width:"670px",onClose:function(){l.replace({name:"zone-ingress-detail-view",params:{proxy:l.params.proxy,proxyType:"ingresses"},query:{inactive:l.params.inactive?null:void 0}})}},{default:e(()=>[(i(),c(U(a.Component),{data:l.params.subscription.length>0?d.data.zoneIngressInsight.subscriptions:a.route.name.includes("-inbound-")?[d.data.zoneIngress]:(s==null?void 0:s.outbounds)||{},networking:d.data.zoneIngress.networking},null,8,["data","networking"]))]),_:2},1032,["onClose"])):w("",!0)]),_:2},1024)]),_:2},1032,["src"]),o[19]||(o[19]=t()),d.data.zoneIngressInsight.subscriptions.length>0?(i(),c(B,{key:0},{title:e(()=>[J("h2",null,r(p("zone-ingresses.routes.item.subscriptions.title")),1)]),default:e(()=>[o[17]||(o[17]=t()),n(K,{headers:[{...f.get("headers.instanceId"),label:p("http.api.property.instanceId"),key:"instanceId"},{...f.get("headers.version"),label:p("http.api.property.version"),key:"version"},{...f.get("headers.connected"),label:p("http.api.property.connected"),key:"connected"},{...f.get("headers.disconnected"),label:p("http.api.property.disconnected"),key:"disconnected"},{...f.get("headers.responses"),label:p("http.api.property.responses"),key:"responses"}],"is-selected-row":s=>s.id===l.params.subscription,items:d.data.zoneIngressInsight.subscriptions.map((s,m,a)=>a[a.length-(m+1)]),onResize:f.set},{instanceId:e(({row:s})=>[n(z,{"data-action":"",to:{name:"zone-ingress-subscription-summary-view",params:{subscription:s.id}}},{default:e(()=>[t(r(s.controlPlaneInstanceId),1)]),_:2},1032,["to"])]),version:e(({row:s})=>{var m,a;return[t(r(((a=(m=s.version)==null?void 0:m.kumaDp)==null?void 0:a.version)??"-"),1)]}),connected:e(({row:s})=>[t(r(p("common.formats.datetime",{value:Date.parse(s.connectTime??"")})),1)]),disconnected:e(({row:s})=>[s.disconnectTime?(i(),y(g,{key:0},[t(r(p("common.formats.datetime",{value:Date.parse(s.disconnectTime)})),1)],64)):w("",!0)]),responses:e(({row:s})=>{var m;return[(i(!0),y(g,null,C([((m=s.status)==null?void 0:m.total)??{}],a=>(i(),y(g,null,[t(r(a.responsesSent)+"/"+r(a.responsesAcknowledged),1)],64))),256))]}),_:2},1032,["headers","is-selected-row","items","onResize"])]),_:2},1024)):w("",!0)]),_:2},1024)]),_:1})}}}),ie=Q(ee,[["__scopeId","data-v-0bddf534"]]);export{ie as default};
