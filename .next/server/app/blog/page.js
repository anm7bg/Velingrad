(()=>{var e={};e.id=404,e.ids=[404],e.modules={7849:e=>{"use strict";e.exports=require("next/dist/client/components/action-async-storage.external")},2934:e=>{"use strict";e.exports=require("next/dist/client/components/action-async-storage.external.js")},5403:e=>{"use strict";e.exports=require("next/dist/client/components/request-async-storage.external")},4580:e=>{"use strict";e.exports=require("next/dist/client/components/request-async-storage.external.js")},4749:e=>{"use strict";e.exports=require("next/dist/client/components/static-generation-async-storage.external")},5869:e=>{"use strict";e.exports=require("next/dist/client/components/static-generation-async-storage.external.js")},399:e=>{"use strict";e.exports=require("next/dist/compiled/next-server/app-page.runtime.prod.js")},322:(e,s,t)=>{"use strict";t.r(s),t.d(s,{GlobalError:()=>l.a,__next_app__:()=>p,originalPathname:()=>x,pages:()=>c,routeModule:()=>u,tree:()=>d}),t(1918),t(8618),t(6627),t(6083),t(5866);var r=t(3191),n=t(8716),a=t(7922),l=t.n(a),i=t(5231),o={};for(let e in i)0>["default","tree","pages","GlobalError","originalPathname","__next_app__","routeModule"].indexOf(e)&&(o[e]=()=>i[e]);t.d(s,o);let d=["",{children:["blog",{children:["__PAGE__",{},{page:[()=>Promise.resolve().then(t.bind(t,1918)),"C:\\Users\\nsite\\Downloads\\velingrad-SPA-09-11-2018\\Next\\Velingrad\\app\\blog\\page.tsx"]}]},{layout:[()=>Promise.resolve().then(t.bind(t,8618)),"C:\\Users\\nsite\\Downloads\\velingrad-SPA-09-11-2018\\Next\\Velingrad\\app\\blog\\layout.tsx"]}]},{layout:[()=>Promise.resolve().then(t.bind(t,6627)),"C:\\Users\\nsite\\Downloads\\velingrad-SPA-09-11-2018\\Next\\Velingrad\\app\\layout.tsx"],error:[()=>Promise.resolve().then(t.bind(t,6083)),"C:\\Users\\nsite\\Downloads\\velingrad-SPA-09-11-2018\\Next\\Velingrad\\app\\error.tsx"],"not-found":[()=>Promise.resolve().then(t.t.bind(t,5866,23)),"next/dist/client/components/not-found-error"]}],c=["C:\\Users\\nsite\\Downloads\\velingrad-SPA-09-11-2018\\Next\\Velingrad\\app\\blog\\page.tsx"],x="/blog/page",p={require:t,loadChunk:()=>Promise.resolve()},u=new r.AppPageRouteModule({definition:{kind:n.x.APP_PAGE,page:"/blog/page",pathname:"/blog",bundlePath:"",filename:"",appPaths:[]},userland:{loaderTree:d}})},3908:(e,s,t)=>{Promise.resolve().then(t.bind(t,5180)),Promise.resolve().then(t.bind(t,8876)),Promise.resolve().then(t.bind(t,715)),Promise.resolve().then(t.t.bind(t,2481,23)),Promise.resolve().then(t.t.bind(t,9404,23))},5303:()=>{},5180:(e,s,t)=>{"use strict";t.d(s,{default:()=>o});var r=t(326),n=t(7577),a=t(434),l=t(5047);let i=[{title:"За Велинград",path:"/za-velingrad"},{title:"Забележителности Велинград",path:"/zabelezhitelnosti-velingrad"}],o=()=>r.jsx("div",{className:"sidebar md:w-60 bg-white h-screen flex-1 fixed border-r border-zinc-200 hidden md:flex",children:(0,r.jsxs)("div",{className:"flex flex-col space-y-6 w-full",children:[r.jsx("p",{children:"Категории:"}),r.jsx("div",{className:"flex flex-col space-y-2  md:px-6 ",children:i.map((e,s)=>r.jsx(d,{item:e},s))})]})}),d=({item:e})=>{let s=(0,l.usePathname)(),[t,i]=(0,n.useState)(!1);return r.jsx("div",{className:"",children:e.submenu?(0,r.jsxs)(r.Fragment,{children:[(0,r.jsxs)("button",{onClick:()=>{i(!t)},className:`flex flex-row items-center p-2 rounded-lg hover-bg-zinc-100 w-full justify-between hover:bg-zinc-100 ${s.includes(e.path)?"bg-zinc-100":""}`,children:[(0,r.jsxs)("div",{className:"flex flex-row space-x-4 items-center",children:[e.icon,r.jsx("span",{className:"font-semibold text-xl  flex",children:e.title})]}),r.jsx("div",{className:`${t?"rotate-180":""} flex`})]}),t&&r.jsx("div",{className:"my-2 ml-12 flex flex-col space-y-4",children:e.subMenuItems?.map((e,t)=>r.jsx(a.default,{href:e.path,className:`${e.path===s?"font-bold":""}`,children:r.jsx("span",{children:e.title})},t))})]}):(0,r.jsxs)(a.default,{href:e.path,className:`flex flex-row space-x-4 items-center p-2 rounded-lg hover:bg-zinc-100 ${e.path===s?"bg-zinc-100":""}`,children:[e.icon,r.jsx("span",{className:"font-semibold text-xl flex",children:e.title})]})})}},8618:(e,s,t)=>{"use strict";t.r(s),t.d(s,{default:()=>n});var r=t(9510);function n({children:e}){return r.jsx("section",{className:"flex flex-col items-center justify-center gap-4 py-8 md:py-10",children:r.jsx("div",{className:"w-[100%] px-[20px] text-center justify-center",children:e})})}},1918:(e,s,t)=>{"use strict";t.r(s),t.d(s,{default:()=>c});var r=t(9510),n=t(7371),a=t(7710),l=t(5093),i=t(2569),o=t(2637),d=t(541);let c=async()=>{let e=await (0,i.Jq)();return console.log("Posts"),console.log(e),(0,r.jsxs)("div",{className:"blog-page",children:[r.jsx("h2",{children:"Публикации:"}),(0,r.jsxs)("div",{className:"leftRightWrap",children:[r.jsx("div",{className:"posts",children:e.map((e,s)=>(console.log("Post"),console.log(e),(0,r.jsxs)(o.Zb,{className:"mb-[20px]",children:[r.jsx(a.default,{src:e.featuredImage.node.sourceUrl,alt:"image",width:600,height:400,className:"rounded-t-lg object-cover"}),r.jsx(o.Ol,{className:"py-[5px] my-[5px] blog-card-head",children:r.jsx("h3",{className:"text-center text-lg line-clamp-2",children:e.title})}),r.jsx(o.eW,{className:"p-[5px]",children:r.jsx("p",{className:"line-clamp-2 text-sm",children:e.shortDesc})}),r.jsx(o.iR,{children:r.jsx(l.zx,{className:"w-full mt7",children:r.jsx(n.default,{href:`${e.slug}`,children:"Виж"})})})]},s)))}),r.jsx(d.ZP,{})]})]})}},541:(e,s,t)=>{"use strict";t.d(s,{ZP:()=>i});var r=t(8570);let n=(0,r.createProxy)(String.raw`C:\Users\nsite\Downloads\velingrad-SPA-09-11-2018\Next\Velingrad\components\side-nav.tsx`),{__esModule:a,$$typeof:l}=n;n.default;let i=(0,r.createProxy)(String.raw`C:\Users\nsite\Downloads\velingrad-SPA-09-11-2018\Next\Velingrad\components\side-nav.tsx#default`)},2569:(e,s,t)=>{"use strict";t.d(s,{zQ:()=>o,Jq:()=>a,sb:()=>l,Cb:()=>i});let r=function(e,s){if(void 0===e)throw Error(s);return e}("https://velingrad.powweb.space/graphapi","Missing environment variable: API_URL");async function n(e="",{variables:s}={}){let t=await fetch(r,{headers:{"Content-Type":"application/json"},method:"POST",body:JSON.stringify({query:e,variables:s})}),n=await t.json();if(n.errors)throw console.error(n.errors),Error("Failed to fetch API");return n.data}async function a(){let e=await n(`query FetchPosts {
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
      }`);return e?.posts?.nodes}async function o(e){let s=await n(`query GetPost($id: ID = "") {
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
  }`,{variables:{id:e}});return s?.post}}};var s=require("../../webpack-runtime.js");s.C(e);var t=e=>s(s.s=e),r=s.X(0,[948,737,815,779,875],()=>t(322));module.exports=r})();