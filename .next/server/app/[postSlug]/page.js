(()=>{var e={};e.id=723,e.ids=[723],e.modules={7849:e=>{"use strict";e.exports=require("next/dist/client/components/action-async-storage.external")},2934:e=>{"use strict";e.exports=require("next/dist/client/components/action-async-storage.external.js")},5403:e=>{"use strict";e.exports=require("next/dist/client/components/request-async-storage.external")},4580:e=>{"use strict";e.exports=require("next/dist/client/components/request-async-storage.external.js")},4749:e=>{"use strict";e.exports=require("next/dist/client/components/static-generation-async-storage.external")},5869:e=>{"use strict";e.exports=require("next/dist/client/components/static-generation-async-storage.external.js")},399:e=>{"use strict";e.exports=require("next/dist/compiled/next-server/app-page.runtime.prod.js")},1013:(e,t,s)=>{"use strict";s.r(t),s.d(t,{GlobalError:()=>a.a,__next_app__:()=>u,originalPathname:()=>p,pages:()=>c,routeModule:()=>g,tree:()=>d}),s(180),s(6627),s(6083),s(5866);var r=s(3191),o=s(8716),n=s(7922),a=s.n(n),i=s(5231),l={};for(let e in i)0>["default","tree","pages","GlobalError","originalPathname","__next_app__","routeModule"].indexOf(e)&&(l[e]=()=>i[e]);s.d(t,l);let d=["",{children:["[postSlug]",{children:["__PAGE__",{},{page:[()=>Promise.resolve().then(s.bind(s,180)),"C:\\Users\\nsite\\Downloads\\WordPress-Headles-Blog-Next-Ui\\app\\[postSlug]\\page.tsx"]}]},{}]},{layout:[()=>Promise.resolve().then(s.bind(s,6627)),"C:\\Users\\nsite\\Downloads\\WordPress-Headles-Blog-Next-Ui\\app\\layout.tsx"],error:[()=>Promise.resolve().then(s.bind(s,6083)),"C:\\Users\\nsite\\Downloads\\WordPress-Headles-Blog-Next-Ui\\app\\error.tsx"],"not-found":[()=>Promise.resolve().then(s.t.bind(s,5866,23)),"next/dist/client/components/not-found-error"]}],c=["C:\\Users\\nsite\\Downloads\\WordPress-Headles-Blog-Next-Ui\\app\\[postSlug]\\page.tsx"],p="/[postSlug]/page",u={require:s,loadChunk:()=>Promise.resolve()},g=new r.AppPageRouteModule({definition:{kind:o.x.APP_PAGE,page:"/[postSlug]/page",pathname:"/[postSlug]",bundlePath:"",filename:"",appPaths:[]},userland:{loaderTree:d}})},9830:(e,t,s)=>{Promise.resolve().then(s.t.bind(s,2481,23))},180:(e,t,s)=>{"use strict";s.r(t),s.d(t,{default:()=>l,dynamicParams:()=>a,generateStaticParams:()=>i});var r=s(9510),o=s(2569),n=s(7710);let a=!0;async function i(){let e=await (0,o.J)();return console.log("Response"),console.log(e),e.map(e=>({postSlug:e.slug}))}let l=async({params:e})=>{console.log("Params"),console.log(e);let t=await (0,o.z)(e.postSlug);return(console.log("Post2"),console.log(t),t)?(0,r.jsxs)("div",{className:"single-blog-page",children:[r.jsx("h1",{className:"post-page-title my-[50px] uppercase tracking-widest text-[1.5rem] text-center text-blue-100",children:t.title}),r.jsx(n.default,{src:t.featuredImage.node.sourceUrl,alt:"image",width:600,height:400,className:"post-image rounded-t-lg object-cover"}),r.jsx("div",{className:"blog-post mt-[50px]",children:r.jsx("p",{dangerouslySetInnerHTML:{__html:t.content}})})]}):r.jsx("div",{children:"Loading..."})}},2569:(e,t,s)=>{"use strict";s.d(t,{z:()=>a,J:()=>n});let r=function(e,t){if(void 0===e)throw Error(t);return e}("https://powweb.space/graphql","Missing environment variable: API_URL");async function o(e="",{variables:t}={}){let s=await fetch(r,{headers:{"Content-Type":"application/json"},method:"POST",body:JSON.stringify({query:e,variables:t})}),o=await s.json();if(o.errors)throw console.error(o.errors),Error("Failed to fetch API");return o.data}async function n(){let e=await o(`query FetchPosts {
        posts {
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
      }`);return e?.posts?.nodes}async function a(e){let t=await o(`query GetPost($id: ID = "") {
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
  }`,{variables:{id:e}});return t?.post}}};var t=require("../../webpack-runtime.js");t.C(e);var s=e=>t(t.s=e),r=t.X(0,[376,624,859],()=>s(1013));module.exports=r})();