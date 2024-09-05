(()=>{var e={};e.id=723,e.ids=[723],e.modules={7849:e=>{"use strict";e.exports=require("next/dist/client/components/action-async-storage.external")},2934:e=>{"use strict";e.exports=require("next/dist/client/components/action-async-storage.external.js")},5403:e=>{"use strict";e.exports=require("next/dist/client/components/request-async-storage.external")},4580:e=>{"use strict";e.exports=require("next/dist/client/components/request-async-storage.external.js")},4749:e=>{"use strict";e.exports=require("next/dist/client/components/static-generation-async-storage.external")},5869:e=>{"use strict";e.exports=require("next/dist/client/components/static-generation-async-storage.external.js")},399:e=>{"use strict";e.exports=require("next/dist/compiled/next-server/app-page.runtime.prod.js")},3898:(e,t,s)=>{"use strict";s.r(t),s.d(t,{GlobalError:()=>i.a,__next_app__:()=>u,originalPathname:()=>p,pages:()=>c,routeModule:()=>x,tree:()=>d}),s(180),s(6627),s(6083),s(5866);var r=s(3191),n=s(8716),a=s(7922),i=s.n(a),l=s(5231),o={};for(let e in l)0>["default","tree","pages","GlobalError","originalPathname","__next_app__","routeModule"].indexOf(e)&&(o[e]=()=>l[e]);s.d(t,o);let d=["",{children:["[postSlug]",{children:["__PAGE__",{},{page:[()=>Promise.resolve().then(s.bind(s,180)),"C:\\Users\\nsite\\Downloads\\velingrad-SPA-09-11-2018\\Next\\Velingrad\\app\\[postSlug]\\page.tsx"]}]},{}]},{layout:[()=>Promise.resolve().then(s.bind(s,6627)),"C:\\Users\\nsite\\Downloads\\velingrad-SPA-09-11-2018\\Next\\Velingrad\\app\\layout.tsx"],error:[()=>Promise.resolve().then(s.bind(s,6083)),"C:\\Users\\nsite\\Downloads\\velingrad-SPA-09-11-2018\\Next\\Velingrad\\app\\error.tsx"],"not-found":[()=>Promise.resolve().then(s.t.bind(s,5866,23)),"next/dist/client/components/not-found-error"]}],c=["C:\\Users\\nsite\\Downloads\\velingrad-SPA-09-11-2018\\Next\\Velingrad\\app\\[postSlug]\\page.tsx"],p="/[postSlug]/page",u={require:s,loadChunk:()=>Promise.resolve()},x=new r.AppPageRouteModule({definition:{kind:n.x.APP_PAGE,page:"/[postSlug]/page",pathname:"/[postSlug]",bundlePath:"",filename:"",appPaths:[]},userland:{loaderTree:d}})},2801:(e,t,s)=>{Promise.resolve().then(s.bind(s,5180)),Promise.resolve().then(s.t.bind(s,2481,23))},5180:(e,t,s)=>{"use strict";s.d(t,{default:()=>o});var r=s(326),n=s(7577),a=s(434),i=s(5047);let l=[{title:"За Велинград",path:"/za-velingrad"},{title:"Забележителности Велинград",path:"/zabelezhitelnosti-velingrad"}],o=()=>r.jsx("div",{className:"sidebar md:w-60 bg-white h-screen flex-1 fixed border-r border-zinc-200 hidden md:flex",children:(0,r.jsxs)("div",{className:"flex flex-col space-y-6 w-full",children:[r.jsx("p",{children:"Категории:"}),r.jsx("div",{className:"flex flex-col space-y-2  md:px-6 ",children:l.map((e,t)=>r.jsx(d,{item:e},t))})]})}),d=({item:e})=>{let t=(0,i.usePathname)(),[s,l]=(0,n.useState)(!1);return r.jsx("div",{className:"",children:e.submenu?(0,r.jsxs)(r.Fragment,{children:[(0,r.jsxs)("button",{onClick:()=>{l(!s)},className:`flex flex-row items-center p-2 rounded-lg hover-bg-zinc-100 w-full justify-between hover:bg-zinc-100 ${t.includes(e.path)?"bg-zinc-100":""}`,children:[(0,r.jsxs)("div",{className:"flex flex-row space-x-4 items-center",children:[e.icon,r.jsx("span",{className:"font-semibold text-xl  flex",children:e.title})]}),r.jsx("div",{className:`${s?"rotate-180":""} flex`})]}),s&&r.jsx("div",{className:"my-2 ml-12 flex flex-col space-y-4",children:e.subMenuItems?.map((e,s)=>r.jsx(a.default,{href:e.path,className:`${e.path===t?"font-bold":""}`,children:r.jsx("span",{children:e.title})},s))})]}):(0,r.jsxs)(a.default,{href:e.path,className:`flex flex-row space-x-4 items-center p-2 rounded-lg hover:bg-zinc-100 ${e.path===t?"bg-zinc-100":""}`,children:[e.icon,r.jsx("span",{className:"font-semibold text-xl flex",children:e.title})]})})}},180:(e,t,s)=>{"use strict";s.r(t),s.d(t,{default:()=>d,dynamicParams:()=>l,generateStaticParams:()=>o});var r=s(9510),n=s(541),a=s(2569),i=s(7710);let l=!0;async function o(){return(await (0,a.Jq)()).map(e=>({postSlug:e.slug}))}let d=async({params:e})=>{console.log("Params"),console.log(e);let t=await (0,a.zQ)(e.postSlug);return(console.log("Post2"),console.log(t),t)?(0,r.jsxs)("div",{className:"leftRightWrap",children:[(0,r.jsxs)("div",{className:"single-blog-page",children:[r.jsx("h1",{className:"post-page-title my-[50px] uppercase tracking-widest text-[1.5rem] text-center text-blue-100",children:t.title}),r.jsx(i.default,{src:t.featuredImage.node.sourceUrl,alt:"image",width:600,height:400,className:"post-image rounded-t-lg object-cover"}),r.jsx("div",{className:"blog-post mt-[50px]",children:r.jsx("p",{dangerouslySetInnerHTML:{__html:t.content}})})]}),r.jsx(n.ZP,{})]}):r.jsx("div",{children:"Loading..."})}},541:(e,t,s)=>{"use strict";s.d(t,{ZP:()=>l});var r=s(8570);let n=(0,r.createProxy)(String.raw`C:\Users\nsite\Downloads\velingrad-SPA-09-11-2018\Next\Velingrad\components\side-nav.tsx`),{__esModule:a,$$typeof:i}=n;n.default;let l=(0,r.createProxy)(String.raw`C:\Users\nsite\Downloads\velingrad-SPA-09-11-2018\Next\Velingrad\components\side-nav.tsx#default`)},2569:(e,t,s)=>{"use strict";s.d(t,{zQ:()=>o,Jq:()=>a,sb:()=>i,Cb:()=>l});let r=function(e,t){if(void 0===e)throw Error(t);return e}("https://velingrad.powweb.space/graphapi","Missing environment variable: API_URL");async function n(e="",{variables:t}={}){let s=await fetch(r,{headers:{"Content-Type":"application/json"},method:"POST",body:JSON.stringify({query:e,variables:t})}),n=await s.json();if(n.errors)throw console.error(n.errors),Error("Failed to fetch API");return n.data}async function a(){let e=await n(`query FetchPosts {
        posts(first: 100) {
          nodes {
            excerpt
            featuredImage {
              node {
                sourceUrl
              }
            }
            slug
            title
          }
        }
      }`);return e?.posts?.nodes}async function i(){let e=await n(`query FetchPosts {
        posts(first: 100, where: {categoryId: 9}) {
          nodes {
            excerpt
            featuredImage {
              node {
                sourceUrl
              }
            }
            slug
            title
          }
        }
      }`);return e?.posts?.nodes}async function l(){let e=await n(`query FetchPosts {
        posts(first: 100, where: {categoryId: 8}) {
          nodes {
            excerpt
            featuredImage {
              node {
                sourceUrl
              }
            }
            slug
            title
          }
        }
      }`);return e?.posts?.nodes}async function o(e){let t=await n(`query GetPost($id: ID = "") {
    post(id: $id, idType: SLUG) {
      content
      featuredImage {
        node {
          sourceUrl
        }
      }
      slug
      title
    }
  }`,{variables:{id:e}});return t?.post}}};var t=require("../../webpack-runtime.js");t.C(e);var s=e=>t(t.s=e),r=t.X(0,[948,737,815,875],()=>s(3898));module.exports=r})();