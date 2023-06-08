import{d as y,u as g,D as E,E as b,b as m,o as u,I as k,n as R,J as B,h as C,q as w,c as d,C as a,t as h,F as f,R as $,G as x,a5 as I,a6 as j,S as A,U as P,_ as S,r as O,L as T,A as N,Q as v,a7 as F,k as q,a8 as M,a9 as U,aa as G,ab as J,ac as z,ad as Q,ae as H,af as K,ag as W,ah as X,ai as Y,aj as Z,ak as ee,M as te}from"./chunks/framework.a347656d.js";import{V as ne,t as V}from"./chunks/theme.775db820.js";const ae=y({__name:"CustomLayout",setup(e){const{Layout:t}=V,{page:n}=g(),o={mainnet:"/",staging:"/staging/",experimental:"/experimental/"};function r(s){return s==="mainnet"?window.location.origin+"/"+n.value.relativePath.replace(".md",".html"):window.location.origin+o[s]+n.value.relativePath.replace(".md",".html")}function i(s){!s||!s.target||!s.target.classList.contains("VPLink")||window.location.reload()}function c(){return[{text:"Mainnet",link:r("mainnet"),target:"_parent",rel:"noreferrer"},{text:"Staging",link:r("staging"),target:"_parent",rel:"noreferrer"},{text:"Experimental",link:r("experimental"),target:"_parent",rel:"noreferrer"}]}return(s,p)=>{const L=B("ClientOnly");return u(),E(m(t),null,{"nav-bar-content-after":b(()=>[k(L,null,{default:b(()=>[k(ne,{class:R({VPNavBarMenuGroup:!1,active:!1}),button:"Version",items:c(),onClick:i},null,8,["items"])]),_:1})]),_:1})}}});const l=e=>(A("data-v-fcd5a4b8"),e=e(),P(),e),oe=l(()=>a("api-title",null,"Query",-1)),se={class:"api-container"},ie={class:"api-split"},re=l(()=>a("span",{class:"no-select"},"Endpoint",-1)),le={id:"api",class:"input-mock"},ce=l(()=>a("br",null,null,-1)),ue=l(()=>a("api-title",null,"Parameters",-1)),pe={class:"api-container"},de={class:"api-split"},_e={class:"no-select"},me=["onUpdate:modelValue"],fe=l(()=>a("br",null,null,-1)),ye=l(()=>a("br",null,null,-1)),he=l(()=>a("br",null,null,-1)),ve=l(()=>a("api-title",null,"Response",-1)),ge={class:"response"},be=y({__name:"DemoApi",props:{query:null,body:null,type:null},setup(e){const t=e;let n=C({json:!0}),o=C();async function r(){const i={method:t.type,headers:{"Content-Type":"application/json"},body:JSON.stringify(n.value)};t.type==="GET"&&delete i.body;const c=await fetch(`https://api.mainnet.ultra.io${t.query}`,i).catch(p=>(console.log(p),p));if(!c||!c.ok){o.value=c.toString();return}const s=await c.json();o.value=`
`+JSON.stringify(s,null,2)}return w(()=>{if(t.body)for(let i of t.body)n.value[i.key]=i.value}),(i,c)=>(u(),d(f,null,[oe,a("div",se,[a("div",ie,[re,a("div",le,h(t.query),1)])]),ce,t.body&&t.body.length>=1?(u(),d(f,{key:0},[ue,a("div",pe,[(u(!0),d(f,null,$(t.body,s=>(u(),d("div",de,[a("span",_e,h(s.key),1),I(a("input",{class:"input-mock",id:"api","onUpdate:modelValue":p=>m(n)[s.key]=p},null,8,me),[[j,m(n)[s.key]]])]))),256))]),fe],64)):x("",!0),a("button",{title:"execute",onClick:r},"Execute"),ye,he,m(o)?(u(),d(f,{key:1},[ve,a("pre",ge,"            "+h(m(o))+`
        `,1)],64)):x("",!0)],64))}});const ke=S(be,[["__scopeId","data-v-fcd5a4b8"]]),Ce=e=>(A("data-v-2e6d04a6"),e=e(),P(),e),xe=Ce(()=>a("div",{class:"spacer"},null,-1)),we=y({__name:"Button",props:{align:null},emits:["onClick"],setup(e,{emit:t}){const n=e;return(o,r)=>(u(),d(f,null,[a("button",{onClick:r[0]||(r[0]=i=>t("onClick")),style:T([`float: ${n.align}`])},[O(o.$slots,"default",{},void 0,!0)],4),xe],64))}});const Ae=S(we,[["__scopeId","data-v-2e6d04a6"]]),Pe={...V,Layout:ae,enhanceApp({app:e,router:t,siteData:n}){e.component("DemoApi",ke),e.component("Button",Ae)},setup(){g(),N()}};function D(e){if(e.extends){const t=D(e.extends);return{...t,...e,async enhanceApp(n){t.enhanceApp&&await t.enhanceApp(n),e.enhanceApp&&await e.enhanceApp(n)}}}return e}const _=D(Pe),Se=y({name:"VitePressApp",setup(){const{site:e}=g();return w(()=>{q(()=>{document.documentElement.lang=e.value.lang,document.documentElement.dir=e.value.dir})}),M(),U(),G(),_.setup&&_.setup(),()=>J(_.Layout)}});async function Ve(){const e=Le(),t=De();t.provide(z,e);const n=Q(e.route);return t.provide(H,n),t.component("Content",K),t.component("ClientOnly",W),Object.defineProperties(t.config.globalProperties,{$frontmatter:{get(){return n.frontmatter.value}},$params:{get(){return n.page.value.params}}}),_.enhanceApp&&await _.enhanceApp({app:t,router:e,siteData:X}),{app:t,router:e,data:n}}function De(){return Y(Se)}function Le(){let e=v,t;return Z(n=>{let o=ee(n);return e&&(t=o),(e||t===o)&&(o=o.replace(/\.js$/,".lean.js")),v&&(e=!1),te(()=>import(o),[])},_.NotFound)}v&&Ve().then(({app:e,router:t,data:n})=>{t.go().then(()=>{F(t.route,n.site),e.mount("#app")})});export{Ve as createApp};
