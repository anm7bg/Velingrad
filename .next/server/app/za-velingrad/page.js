(()=>{var e={};e.id=626,e.ids=[626],e.modules={7849:e=>{"use strict";e.exports=require("next/dist/client/components/action-async-storage.external")},2934:e=>{"use strict";e.exports=require("next/dist/client/components/action-async-storage.external.js")},5403:e=>{"use strict";e.exports=require("next/dist/client/components/request-async-storage.external")},4580:e=>{"use strict";e.exports=require("next/dist/client/components/request-async-storage.external.js")},4749:e=>{"use strict";e.exports=require("next/dist/client/components/static-generation-async-storage.external")},5869:e=>{"use strict";e.exports=require("next/dist/client/components/static-generation-async-storage.external.js")},399:e=>{"use strict";e.exports=require("next/dist/compiled/next-server/app-page.runtime.prod.js")},9432:(e,t,s)=>{"use strict";s.r(t),s.d(t,{GlobalError:()=>l.a,__next_app__:()=>p,originalPathname:()=>x,pages:()=>c,routeModule:()=>u,tree:()=>d}),s(1602),s(8426),s(6627),s(6083),s(5866);var r=s(3191),n=s(8716),a=s(7922),l=s.n(a),i=s(5231),o={};for(let e in i)0>["default","tree","pages","GlobalError","originalPathname","__next_app__","routeModule"].indexOf(e)&&(o[e]=()=>i[e]);s.d(t,o);let d=["",{children:["za-velingrad",{children:["__PAGE__",{},{page:[()=>Promise.resolve().then(s.bind(s,1602)),"C:\\Users\\nsite\\Downloads\\velingrad-SPA-09-11-2018\\Next\\Velingrad\\app\\za-velingrad\\page.tsx"]}]},{layout:[()=>Promise.resolve().then(s.bind(s,8426)),"C:\\Users\\nsite\\Downloads\\velingrad-SPA-09-11-2018\\Next\\Velingrad\\app\\za-velingrad\\layout.tsx"]}]},{layout:[()=>Promise.resolve().then(s.bind(s,6627)),"C:\\Users\\nsite\\Downloads\\velingrad-SPA-09-11-2018\\Next\\Velingrad\\app\\layout.tsx"],error:[()=>Promise.resolve().then(s.bind(s,6083)),"C:\\Users\\nsite\\Downloads\\velingrad-SPA-09-11-2018\\Next\\Velingrad\\app\\error.tsx"],"not-found":[()=>Promise.resolve().then(s.t.bind(s,5866,23)),"next/dist/client/components/not-found-error"]}],c=["C:\\Users\\nsite\\Downloads\\velingrad-SPA-09-11-2018\\Next\\Velingrad\\app\\za-velingrad\\page.tsx"],x="/za-velingrad/page",p={require:s,loadChunk:()=>Promise.resolve()},u=new r.AppPageRouteModule({definition:{kind:n.x.APP_PAGE,page:"/za-velingrad/page",pathname:"/za-velingrad",bundlePath:"",filename:"",appPaths:[]},userland:{loaderTree:d}})},3908:(e,t,s)=>{Promise.resolve().then(s.bind(s,5180)),Promise.resolve().then(s.bind(s,8876)),Promise.resolve().then(s.bind(s,715)),Promise.resolve().then(s.t.bind(s,2481,23)),Promise.resolve().then(s.t.bind(s,9404,23))},5303:()=>{},5180:(e,t,s)=>{"use strict";s.d(t,{default:()=>o});var r=s(326),n=s(7577),a=s(434),l=s(5047);let i=[{title:"За Велинград",path:"/za-velingrad"},{title:"Забележителности Велинград",path:"/zabelezhitelnosti-velingrad"}],o=()=>r.jsx("div",{className:"sidebar md:w-60 bg-white h-screen flex-1 fixed border-r border-zinc-200 hidden md:flex",children:(0,r.jsxs)("div",{className:"flex flex-col space-y-6 w-full",children:[r.jsx("p",{children:"Категории:"}),r.jsx("div",{className:"flex flex-col space-y-2  md:px-6 ",children:i.map((e,t)=>r.jsx(d,{item:e},t))})]})}),d=({item:e})=>{let t=(0,l.usePathname)(),[s,i]=(0,n.useState)(!1);return r.jsx("div",{className:"",children:e.submenu?(0,r.jsxs)(r.Fragment,{children:[(0,r.jsxs)("button",{onClick:()=>{i(!s)},className:`flex flex-row items-center p-2 rounded-lg hover-bg-zinc-100 w-full justify-between hover:bg-zinc-100 ${t.includes(e.path)?"bg-zinc-100":""}`,children:[(0,r.jsxs)("div",{className:"flex flex-row space-x-4 items-center",children:[e.icon,r.jsx("span",{className:"font-semibold text-xl  flex",children:e.title})]}),r.jsx("div",{className:`${s?"rotate-180":""} flex`})]}),s&&r.jsx("div",{className:"my-2 ml-12 flex flex-col space-y-4",children:e.subMenuItems?.map((e,s)=>r.jsx(a.default,{href:e.path,className:`${e.path===t?"font-bold":""}`,children:r.jsx("span",{children:e.title})},s))})]}):(0,r.jsxs)(a.default,{href:e.path,className:`flex flex-row space-x-4 items-center p-2 rounded-lg hover:bg-zinc-100 ${e.path===t?"bg-zinc-100":""}`,children:[e.icon,r.jsx("span",{className:"font-semibold text-xl flex",children:e.title})]})})}},8426:(e,t,s)=>{"use strict";s.r(t),s.d(t,{default:()=>a,metadata:()=>n});var r=s(9510);let n={title:{default:"За Велинград - Velingrad24.com",template:"За Велинград - Velingrad24.com"},description:"Категория За Велиинград предоставя полезна информация и забележителности за Велиинград – перлата на Родопите и СПА столицата на Балканите.",icons:{icon:"/new-favicon.ico"}};function a({children:e}){return r.jsx("section",{className:"flex flex-col items-center justify-center gap-4 py-8 md:py-10",children:r.jsx("div",{className:"w-[100%] px-[20px] text-center justify-center",children:e})})}},1602:(e,t,s)=>{"use strict";s.r(t),s.d(t,{default:()=>c});var r=s(9510),n=s(7371),a=s(7710),l=s(5093),i=s(2569),o=s(2637),d=s(541);let c=async()=>{let e=await (0,i.Cb)();return console.log("Posts2"),console.log(e),(0,r.jsxs)("div",{className:"leftRightWrap",children:[(0,r.jsxs)("div",{className:"blog-page",children:[r.jsx("h2",{className:"center blue",children:"Категория: Забележителности Велинград."}),r.jsx("div",{className:"posts",children:e.map((e,t)=>(console.log("Post"),console.log(e),(0,r.jsxs)(o.Zb,{className:"mb-[20px]",children:[r.jsx(a.default,{src:e.featuredImage.node.sourceUrl,alt:"image",width:600,height:400,className:"rounded-t-lg object-cover"}),r.jsx(o.Ol,{className:"py-[5px] my-[5px] blog-card-head",children:r.jsx("h3",{className:"text-center text-lg line-clamp-2",children:e.title})}),r.jsx(o.eW,{className:"p-[5px]",children:r.jsx("p",{className:"line-clamp-2 text-sm",children:e.shortDesc})}),r.jsx(o.iR,{children:r.jsx(l.zx,{className:"w-full mt7",children:r.jsx(n.default,{href:`${e.slug}`,children:"Виж"})})})]},t)))}),r.jsx("p",{children:'Категория "За Велиинград" предоставя полезна информация и забележителности за Велиинград – перлата на Родопите и СПА столицата на Балканите. Открийте най-добрите места за настаняване, минерални извори, културни и природни забележителности, както и разнообразни възможности за релакс и активна почивка. Възползвайте се от нашите съвети за пътуване и направете престоя си във Велиинград незабравим!'})]}),r.jsx(d.ZP,{})]})}},541:(e,t,s)=>{"use strict";s.d(t,{ZP:()=>i});var r=s(8570);let n=(0,r.createProxy)(String.raw`C:\Users\nsite\Downloads\velingrad-SPA-09-11-2018\Next\Velingrad\components\side-nav.tsx`),{__esModule:a,$$typeof:l}=n;n.default;let i=(0,r.createProxy)(String.raw`C:\Users\nsite\Downloads\velingrad-SPA-09-11-2018\Next\Velingrad\components\side-nav.tsx#default`)},2569:(e,t,s)=>{"use strict";s.d(t,{zQ:()=>o,Jq:()=>a,sb:()=>l,Cb:()=>i});let r=function(e,t){if(void 0===e)throw Error(t);return e}("https://velingrad.powweb.space/graphapi","Missing environment variable: API_URL");async function n(e="",{variables:t}={}){let s=await fetch(r,{headers:{"Content-Type":"application/json"},method:"POST",body:JSON.stringify({query:e,variables:t})}),n=await s.json();if(n.errors)throw console.error(n.errors),Error("Failed to fetch API");return n.data}async function a(){let e=await n(`query FetchPosts {
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
      }`);return e?.posts?.nodes}async function l(){let e=await n(`query FetchPosts {
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
      }`);return e?.posts?.nodes}async function i(){let e=await n(`query FetchPosts {
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
  }`,{variables:{id:e}});return t?.post}}};var t=require("../../webpack-runtime.js");t.C(e);var s=e=>t(t.s=e),r=t.X(0,[948,737,815,779,875],()=>s(9432));module.exports=r})();