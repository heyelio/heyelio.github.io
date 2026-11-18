import{A as e,B as t,F as n,H as r,I as i,L as a,M as o,O as s,P as c,Q as l,U as u,V as d,X as f,Z as p,at as m,et as h,f as g,h as _,it as v,j as y,k as b,l as x,lt as S,m as C,ot as w,rt as T,st as E,t as D,tt as O,z as k}from"./jsx-runtime-CnXuS9mb.js";var A=`application/x-www-form-urlencoded`;function j(e){return typeof HTMLElement<`u`&&e instanceof HTMLElement}function M(e){return j(e)&&e.tagName.toLowerCase()===`button`}function ee(e){return j(e)&&e.tagName.toLowerCase()===`form`}function te(e){return j(e)&&e.tagName.toLowerCase()===`input`}function ne(e){return!!(e.metaKey||e.altKey||e.ctrlKey||e.shiftKey)}function re(e,t){return e.button===0&&(!t||t===`_self`)&&!ne(e)}function N(e=``){return new URLSearchParams(typeof e==`string`||Array.isArray(e)||e instanceof URLSearchParams?e:Object.keys(e).reduce((t,n)=>{let r=e[n];return t.concat(Array.isArray(r)?r.map(e=>[n,e]):[[n,r]])},[]))}function ie(e,t){let n=N(e);return t&&t.forEach((e,r)=>{n.has(r)||t.getAll(r).forEach(e=>{n.append(r,e)})}),n}var P=null;function ae(){if(P===null)try{new FormData(document.createElement(`form`),0),P=!1}catch{P=!0}return P}var oe=new Set([`application/x-www-form-urlencoded`,`multipart/form-data`,`text/plain`]);function se(e){return e!=null&&!oe.has(e)?(m(!1,`"${e}" is not a valid \`encType\` for \`<Form>\`/\`<fetcher.Form>\` and will default to "${A}"`),null):e}function ce(e,t){let n,r,i,a,o;if(ee(e)){let o=e.getAttribute(`action`);r=o?O(o,t):null,n=e.getAttribute(`method`)||`get`,i=se(e.getAttribute(`enctype`))||A,a=new FormData(e)}else if(M(e)||te(e)&&(e.type===`submit`||e.type===`image`)){let o=e.form;if(o==null)throw Error(`Cannot submit a <button> or <input type="submit"> without a <form>`);let s=e.getAttribute(`formaction`)||o.getAttribute(`action`);if(r=s?O(s,t):null,n=e.getAttribute(`formmethod`)||o.getAttribute(`method`)||`get`,i=se(e.getAttribute(`formenctype`))||se(o.getAttribute(`enctype`))||A,a=new FormData(o,e),!ae()){let{name:t,type:n,value:r}=e;if(n===`image`){let e=t?`${t}.`:``;a.append(`${e}x`,`0`),a.append(`${e}y`,`0`)}else t&&a.append(t,r)}}else if(j(e))throw Error(`Cannot submit element that is not <form>, <button>, or <input type="submit|image">`);else n=`get`,r=null,i=A,o=e;return a&&i===`text/plain`&&(o=a,a=void 0),{action:r,method:n.toLowerCase(),encType:i,formData:a,body:o}}var F=S(E(),1),le=typeof window<`u`&&window.document!==void 0&&window.document.createElement!==void 0;try{le&&(window.__reactRouterVersion=`8`)}catch{}var I=F.forwardRef(function({onClick:e,discover:t=`render`,prefetch:n=`none`,relative:r,reloadDocument:i,replace:a,mask:s,state:u,target:p,to:m,preventScrollReset:v,viewTransition:y,defaultShouldRevalidate:b,...x},S){let{basename:T,navigator:E,useTransitions:D}=F.useContext(d),O=typeof m==`string`&&w.test(m),k=l(m,T);m=k.to;let A=o(m,{relative:r}),j=c(),M=null;if(s){let e=h(s,[],j.mask?j.mask.pathname:`/`,!0);T!==`/`&&(e.pathname=e.pathname===`/`?T:f([T,e.pathname])),M=E.createHref(e)}let[ee,te,ne]=_(n,x),re=pe(m,{replace:a,mask:s,state:u,target:p,preventScrollReset:v,relative:r,viewTransition:y,defaultShouldRevalidate:b,useTransitions:D});function N(t){e&&e(t),t.defaultPrevented||re(t)}let ie=!(k.isExternal||i),P=F.createElement(`a`,{...x,...ne,href:(ie?M:void 0)||k.absoluteURL||A,onClick:ie?N:e,ref:C(S,te),target:p,"data-discover":!O&&t===`render`?`true`:void 0});return ee&&!O?F.createElement(F.Fragment,null,P,F.createElement(g,{page:A})):P});I.displayName=`Link`;var ue=F.forwardRef(function({"aria-current":e=`page`,caseSensitive:n=!1,className:r=``,end:i=!1,style:a,to:o,viewTransition:s,children:l,...u},f){let p=k(o,{relative:u.relative}),m=c(),h=F.useContext(t),{navigator:g,basename:_}=F.useContext(d),v=h!=null&&Te(p)&&s===!0,y=g.encodeLocation?g.encodeLocation(p).pathname:p.pathname,b=m.pathname,x=h?.navigation.location?h.navigation.location.pathname:null;n||(b=b.toLowerCase(),x=x?x.toLowerCase():null,y=y.toLowerCase()),x&&_&&(x=O(x,_)||x);let S=y!==`/`&&y.endsWith(`/`)?y.length-1:y.length,C=b===y||!i&&b.startsWith(y)&&b.charAt(S)===`/`,w=x!=null&&(x===y||!i&&x.startsWith(y)&&x.charAt(S)===`/`),T={isActive:C,isPending:w,isTransitioning:v},E=C?e:void 0,D;D=typeof r==`function`?r(T):[r,C?`active`:null,w?`pending`:null,v?`transitioning`:null].filter(Boolean).join(` `);let A=typeof a==`function`?a(T):a;return F.createElement(I,{...u,"aria-current":E,className:D,ref:f,style:A,to:o,viewTransition:s},typeof l==`function`?l(T):l)});ue.displayName=`NavLink`;var de=F.forwardRef(({discover:e=`render`,fetcherKey:t,navigate:n,reloadDocument:r,replace:i,state:a,method:o=`get`,action:s,onSubmit:c,relative:l,preventScrollReset:u,viewTransition:f,defaultShouldRevalidate:p,...m},h)=>{let{useTransitions:g}=F.useContext(d),_=_e(),v=ve(s,{relative:l}),y=o.toLowerCase()===`get`?`get`:`post`,b=typeof s==`string`&&w.test(s);return F.createElement(`form`,{ref:h,method:y,action:v,onSubmit:r?c:e=>{if(c&&c(e),e.defaultPrevented)return;e.preventDefault();let r=e.nativeEvent.submitter,s=r?.getAttribute(`formmethod`)||o,d=()=>_(r||e.currentTarget,{fetcherKey:t,method:s,navigate:n,replace:i,state:a,relative:l,preventScrollReset:u,viewTransition:f,defaultShouldRevalidate:p});g&&n!==!1?F.startTransition(()=>d()):d()},...m,"data-discover":!b&&e===`render`?`true`:void 0})});de.displayName=`Form`;function fe({getKey:e,storageKey:t,...r}){let i=F.useContext(x),{basename:a}=F.useContext(d),o=c(),l=n();Se({getKey:e,storageKey:t});let u=F.useMemo(()=>{if(!i||!e)return null;let t=xe(o,l,a,e);return t===o.key?null:t},[]);if(!i||i.isSpaMode)return null;let f=((e,t)=>{if(!window.history.state||!window.history.state.key){let e=Math.random().toString(32).slice(2);window.history.replaceState({key:e},``)}try{let n=JSON.parse(sessionStorage.getItem(e)||`{}`)[t||window.history.state.key];typeof n==`number`&&window.scrollTo(0,n)}catch(t){console.error(t),sessionStorage.removeItem(e)}}).toString();return r.nonce==null&&i?.nonce&&(r.nonce=i.nonce),F.createElement(`script`,{...r,suppressHydrationWarning:!0,dangerouslySetInnerHTML:{__html:`(${f})(${s(JSON.stringify(t||ye))}, ${s(JSON.stringify(u))})`}})}fe.displayName=`ScrollRestoration`;function pe(e,{target:t,replace:n,mask:r,state:a,preventScrollReset:o,relative:s,viewTransition:l,defaultShouldRevalidate:u,useTransitions:d}={}){let f=i(),p=c(),m=k(e,{relative:s});return F.useCallback(i=>{if(re(i,t)){i.preventDefault();let t=n===void 0?T(p)===T(m):n,c=()=>f(e,{replace:t,mask:r,state:a,preventScrollReset:o,relative:s,viewTransition:l,defaultShouldRevalidate:u});d?F.startTransition(()=>c()):c()}},[p,f,m,n,r,a,t,e,o,s,l,u,d])}function me(e){m(typeof URLSearchParams<`u`,"You cannot use the `useSearchParams` hook in a browser that does not support the URLSearchParams API. If you need to support Internet Explorer 11, we recommend you load a polyfill such as https://github.com/ungap/url-search-params.");let t=F.useRef(N(e)),n=F.useRef(!1),r=c(),a=F.useMemo(()=>ie(r.search,n.current?null:t.current),[r.search]),o=i();return[a,F.useCallback((e,t)=>{let r=N(typeof e==`function`?e(new URLSearchParams(a)):e);n.current=!0,o(`?`+r,t)},[o,a])]}var he=0,ge=()=>`__${String(++he)}__`;function _e(){let{router:t}=e(`useSubmit`),{basename:n}=F.useContext(d),r=b(`useSubmit`),i=t.fetch,a=t.navigate;return F.useCallback(async(e,t={})=>{let{action:o,method:s,encType:c,formData:l,body:u}=ce(e,n);t.navigate===!1?await i(t.fetcherKey||ge(),r,t.action||o,{defaultShouldRevalidate:t.defaultShouldRevalidate,preventScrollReset:t.preventScrollReset,relative:t.relative,formData:l,body:u,formMethod:t.method||s,formEncType:t.encType||c,flushSync:t.flushSync}):await a(t.action||o,{defaultShouldRevalidate:t.defaultShouldRevalidate,preventScrollReset:t.preventScrollReset,relative:t.relative,formData:l,body:u,formMethod:t.method||s,formEncType:t.encType||c,replace:t.replace,state:t.state,fromRouteId:r,flushSync:t.flushSync,viewTransition:t.viewTransition})},[i,a,n,r])}function ve(e,{relative:t}={}){let{basename:n}=F.useContext(d),i=F.useContext(r);v(i,`useFormAction must be used inside a RouteContext`);let[a]=i.matches.slice(-1),o={...k(e||`.`,{relative:t})},s=c();if(e==null){o.search=s.search;let e=new URLSearchParams(o.search),t=e.getAll(`index`);if(t.some(e=>e===``)){e.delete(`index`),t.filter(e=>e).forEach(t=>e.append(`index`,t));let n=e.toString();o.search=n?`?${n}`:``}}return(!e||e===`.`)&&a.route.index&&(o.search=o.search?o.search.replace(/^\?/,`?index&`):`?index`),n!==`/`&&(o.pathname=o.pathname===`/`?n:f([n,o.pathname])),T(o)}var ye=`react-router-scroll-positions`,be={};function xe(e,t,n,r){let i=null;return r&&(i=r(n===`/`?e:{...e,pathname:O(e.pathname,n)||e.pathname},t)),i??=e.key,i}function Se({getKey:t,storageKey:r}={}){let{router:i}=e(`useScrollRestoration`),{restoreScrollPosition:o,preventScrollReset:s}=y(`useScrollRestoration`),{basename:l}=F.useContext(d),u=c(),f=n(),p=a();F.useEffect(()=>(window.history.scrollRestoration=`manual`,()=>{window.history.scrollRestoration=`auto`}),[]),we(F.useCallback(e=>{e.persisted&&(window.history.scrollRestoration=`manual`)},[])),Ce(F.useCallback(()=>{if(p.state===`idle`){let e=xe(u,f,l,t);be[e]=window.scrollY}try{sessionStorage.setItem(r||ye,JSON.stringify(be))}catch(e){m(!1,`Failed to save scroll positions in sessionStorage, <ScrollRestoration /> will not work properly (${e}).`)}window.history.scrollRestoration=`auto`},[p.state,t,l,u,f,r])),typeof document<`u`&&(F.useLayoutEffect(()=>{try{let e=sessionStorage.getItem(r||ye);e&&(be=JSON.parse(e))}catch{}},[r]),F.useLayoutEffect(()=>{let e=i?.enableScrollRestoration(be,()=>window.scrollY,t?(e,n)=>xe(e,n,l,t):void 0);return()=>e&&e()},[i,l,t]),F.useLayoutEffect(()=>{if(o!==!1){if(typeof o==`number`)window.scrollTo(0,o);else{try{if(u.hash){let e=document.getElementById(decodeURIComponent(u.hash.slice(1)));if(e){e.scrollIntoView();return}}}catch{m(!1,`"${u.hash.slice(1)}" is not a decodable element ID. The view will not scroll to it.`)}s!==!0&&window.scrollTo(0,0)}}},[u,o,s]))}function Ce(e,t){let{capture:n}=t||{};F.useEffect(()=>{let t=n==null?void 0:{capture:n};return window.addEventListener(`pagehide`,e,t),()=>{window.removeEventListener(`pagehide`,e,t)}},[e,n])}function we(e,t){let{capture:n}=t||{};F.useEffect(()=>{let t=n==null?void 0:{capture:n};return window.addEventListener(`pageshow`,e,t),()=>{window.removeEventListener(`pageshow`,e,t)}},[e,n])}function Te(t,{relative:n}={}){let r=F.useContext(u);v(r!=null,"`useViewTransitionState` must be used within `react-router/dom`'s `RouterProvider`.  Did you accidentally import `RouterProvider` from `react-router`?");let{basename:i}=e(`useViewTransitionState`),a=k(t,{relative:n});if(!r.isTransitioning)return!1;let o=O(r.currentLocation.pathname,i)||r.currentLocation.pathname,s=O(r.nextLocation.pathname,i)||r.nextLocation.pathname;return p(a.pathname,s)!=null||p(a.pathname,o)!=null}var L=D(),Ee={paragraphs:[`我是一名有产品思维的工程师，关注软件工程实践与 AI Agent。相比炫技，我更相信扎实的工程基础才是打造优秀软件的关键。`,`在这里，我记录所学、分享所做，也会时不时聊聊粤语流行音乐、R&B、电影，以及生活中那些让我始终保持好奇的事物。`],skills:[{group:`语言`,items:[`Java`,`TypeScript`,`JavaScript`,`HTML`,`CSS`]},{group:`后端`,items:[`Spring Boot`,`Spring Security`,`MyBatis`,`JPA`,`OAuth2`,`JWT`,`WebSocket`,`MapStruct`,`Lombok`]},{group:`数据与中间件`,items:[`MySQL`,`PostgreSQL`,`Redis`,`RabbitMQ`,`MinIO`]},{group:`工程化`,items:[`Docker`,`Nginx`,`Maven`,`Git`,`GitHub`,`GitHub Actions`,`SonarQube`,`Swagger`,`Linux`]},{group:`质量与可观测性`,items:[`JUnit`,`Testcontainers`,`Prometheus`,`Grafana`,`OpenTelemetry`,`Micrometer Tracing`,`ELK`]},{group:`前端`,items:[`React`,`Vue`]},{group:`兴趣`,items:[`Cantopop & Mandopop & R&B`,`Sci-Fi & HK Cinema`,`Novels`,`Open Source`,`Ping Pong`,`Cooking`,`Vibe Coding`]}],timeline:[{year:`2026`,text:`重新开始写博客，并用 React Router 重写了站点。`},{year:`2024`,text:`大学毕业。`},{year:`2021`,text:`写下第一篇公开博客。`},{year:`2012`,text:`第一次接触编程，从易语言开始。`}]},De=[{slug:`blog`,name:`HeyElio Blog`,description:`一个集文章阅读、项目展示、ACG 收藏、相册与动态于一体的个人博客，采用静态预渲染架构，支持多语言、主题定制与灵活配置。`,href:`https://heyelio.github.io`,tags:[`Blog`,`React Router`,`TypeScript`],year:`2026`,status:`published`,cover:`/posts/ai-rebuilt-blog/cover.webp`,summary:[`这个项目最初源于我对 Firefly 博客主题的喜爱。我以其官方站点和 Astro 源码为参照，逐组件对照视觉表现与交互细节，并借助 AI 完成整个项目的重写。过程中没有直接套用原主题，而是将项目从 Astro 迁移到 React Router 框架模式，在保留原有设计语言与业务逻辑的基础上，重新组织架构、组件和构建流程。`,`内容方面，我把文章、项目、友链、书签、动态、相册、留言板和 ACG 收藏整合到同一套设计体系中。文章支持 Markdown / MDX、代码高亮、数学公式与图表，也实现了构建期加密文章、全文搜索和多种内容组织方式。外观上提供明暗主题、主题色调整、多套壁纸和六种界面语言，文章还会自动生成分享卡片与海报。`,`技术架构采用 React Router 框架模式与静态预渲染，所有路由均在构建期生成，不依赖服务端运行时。内容通过 Schema 进行校验，站点信息集中维护在一个配置文件中，涵盖导航、作者、项目、相册、收藏等数据。可选功能默认关闭，未启用的功能会在构建阶段裁剪，尽量避免引入不必要的客户端资源。`,`构建流程不仅负责页面预渲染，还会生成搜索索引、加密内容、分享图片、图表资源及 RSS、Atom 等站点文件，并对图片和字体进行优化。工程方面，我为项目建立了覆盖类型检查、代码规范、单元测试、依赖分析和产物体积的质量门禁，配合 GitHub Actions 自动执行校验与部署。同时维护 ADR、变更日志和设计文档，让项目的实现过程与架构决策都有迹可循。`]},{slug:`duo`,name:`Duo`,description:`本地优先的小说角色扮演应用：角色只记住她认为重要的事，故事时间持续向前。`,href:`https://heyelio.github.io/duo-app`,repo:`https://github.com/heyelio/duo`,tags:[`App`,`Flutter`,`LLM`],year:`2026`,status:`developing`,cover:`/posts/duo/cover.webp`,summary:[`Duo 是一款本地优先的小说角色扮演应用。选择一部小说，以一个“人设”的身份走进去，与书里的角色互动；数据保存在本机，不依赖云端账号，模型接口由使用者自行配置。`,`它和普通 AI 聊天的区别在于：世界设定是独立的一层，角色拥有一本自己书写的剧情记忆，只记住她认为重要的事；每条消息都带着故事时间，事件可以在你不说话时让世界继续运转。`,`客户端用 Flutter 开发，覆盖 Android、iOS 与 Web。目前尚未上架应用商店，用手机浏览器就能直接体验。`]}],Oe=[{id:`changsha-2026`,name:`湖南长沙三日游`,description:`2026 年 7 月，在长沙走了三天：从文和里、黄兴路到橘子洲和岳麓山，最后一天留给湖南博物院。`,date:`2026-07-07`,location:`湖南 · 长沙`,tags:[`旅行`,`长沙`,`湖南`],cover:`/gallery/changsha-2026/orange-isle.webp`,photos:[{src:`/gallery/changsha-2026/wenheli.webp`,alt:`文和里的复古街巷与招牌`,width:1280,height:1706,caption:`第一天 · 文和里`},{src:`/gallery/changsha-2026/huangxing-road.webp`,alt:`夜晚的黄兴路步行街`,width:1280,height:1706,caption:`第一天 · 黄兴路步行街`},{src:`/gallery/changsha-2026/orange-isle.webp`,alt:`橘子洲头的江景`,width:1137,height:1421,caption:`第二天 · 橘子洲`},{src:`/gallery/changsha-2026/aiwan-pavilion.webp`,alt:`岳麓山下的爱晚亭`,width:1280,height:1706,caption:`第二天 · 爱晚亭`},{src:`/gallery/changsha-2026/lushan-south-road.webp`,alt:`麓山南路的街道`,width:1280,height:1706,caption:`第二天 · 麓山南路`},{src:`/gallery/changsha-2026/tang-figurine.webp`,alt:`湖南博物院的胡人俑`,width:1089,height:1089,caption:`第三天 · 湖南博物院 · 胡人俑`},{src:`/gallery/changsha-2026/snack-kingdom.webp`,alt:`零食王国内的货架`,width:1077,height:1507,caption:`第三天 · 零食王国`}]}],ke=[{name:`阮一峰的网络日志`,description:`每周一期的科技周刊，把这一周的 AI、前端与开源动态过一遍。`,href:`https://ruanyifeng.com/`,avatar:`/friends/ruanyifeng.webp`,group:`国内`},{name:`张鑫旭`,description:`前端开发，把 CSS 的细节、布局与浏览器行为写得很透。`,href:`https://www.zhangxinxu.com/`,avatar:`/friends/zhangxinxu.webp`,group:`国内`},{name:`Simon Willison`,description:`Django 联合创始人，每天记录大模型能做什么、边界在哪。`,href:`https://simonwillison.net/`,avatar:`/friends/simonwillison.webp`,group:`海外`},{name:`Lil’Log`,description:`Lilian Weng 的 AI 笔记，把论文里的方法讲成能读懂的路径。`,href:`https://lilianweng.github.io/`,avatar:`/friends/lilianweng.webp`,group:`海外`},{name:`Jay Alammar`,description:`用图解讲清楚 Transformer、向量与语言模型内部发生了什么。`,href:`https://jalammar.github.io/`,avatar:`/friends/jalammar.webp`,group:`海外`},{name:`Josh W. Comeau`,description:`CSS 与交互细节，动画怎么调才自然，都在他的交互式文章里。`,href:`https://www.joshwcomeau.com/`,avatar:`/friends/joshwcomeau.webp`,group:`海外`},{name:`Emil Kowalski`,description:`界面动效的手感从哪来：缓动、时长和那些容易被忽略的细节。`,href:`https://emilkowal.ski/`,avatar:`/friends/emilkowalski.webp`,group:`海外`},{name:`Stratechery`,description:`Ben Thompson 一个人写的产品与商业分析，科技公司的战略走向。`,href:`https://stratechery.com/`,avatar:`/friends/stratechery.webp`,group:`海外`}],Ae={title:`申请友链`,description:`欢迎交换友链。请把你的站点名称、一句介绍和头像地址发到邮箱，我会在确认内容后加入这一页。`,email:`peiwei.hwang@gmail.com`},je={intro:[`这个博客的所有内容都会保持免费开放，不需要任何形式的付费解锁。`,`如果你想支持它的持续更新，可以扫码赞赏。金额不重要，愿意读下去本身就是最好的支持。`],qrCodes:[{name:`微信赞赏`,description:`微信扫一扫，或在手机上长按识别。`,hint:`长按识别，或用手机扫一扫`,src:`/assets/images/sponsor/wechat.png`,alt:`微信赞赏码`,width:538,height:538},{name:`支付宝`,description:`支付宝扫一扫，或在手机上长按识别。`,hint:`长按识别，或用手机扫一扫`,src:`/assets/images/sponsor/alipay.png`,alt:`支付宝收款码`,width:716,height:716}],channels:[],thanks:`感谢每一位读过、留言过、转发过的朋友。`},Me={type:`giscus`,twikoo:{envId:`https://twikoo.vercel.app`,lang:`zh-CN`,visitorCount:!0,jsUrl:`https://cdn.jsdelivr.net/npm/twikoo@1.7.14/dist/twikoo.min.js`},waline:{serverURL:`https://waline.vercel.app`,lang:`zh-CN`,emoji:[`https://unpkg.com/@waline/emojis@1.4.0/weibo`,`https://unpkg.com/@waline/emojis@1.4.0/bilibili`,`https://unpkg.com/@waline/emojis@1.4.0/bmoji`],login:`enable`,visitorCount:!0},artalk:{server:`https://artalk.example.com/`,locale:`zh-CN`,visitorCount:!0},giscus:{repo:`heyelio/blog-comments`,repoId:`R_kgDOVxYpKg`,category:`Announcements`,categoryId:`DIC_kwDOVxYpKs4DLUkA`,mapping:`pathname`,strict:`0`,reactionsEnabled:`1`,emitMetadata:`0`,inputPosition:`bottom`,lang:`zh-CN`,loading:`lazy`}},Ne={endpoint:`https://api.injahow.cn/meting/?server=netease&type=playlist&id=18603848506`},Pe={enabled:!1,model:[{path:`/pio/models/live2d/sample/model.json`,volume:0,scale:1,x:0,y:0}],position:`bottom-left`,size:{width:200,height:200},primaryColor:`var(--l2d-msg-bg)`,transitionDuration:1500,transitionType:`slide`,menus:{items:[{icon:`mdi:home`,label:`返回主页`,action:`home`},{icon:`mdi:arrow-up`,label:`返回顶部`,action:`scrollToTop`},{icon:`mdi:bed`,label:`休眠`,action:`sleep`},{icon:`mdi:swap-horizontal`,label:`切换模型`,action:`switchModel`},{icon:`mdi:github`,label:`GitHub`,action:`github`}],align:`right`},tips:{enable:!0,welcomeMessage:[`你好呀！`,`欢迎来到我的世界！`],messages:[`有什么需要帮助的吗？`,`今天天气真不错呢！`,`要不要一起玩游戏？`,`记得按时休息哦！`],duration:3e3,interval:6e3,offset:{x:0,y:0}},responsive:{hideOnMobile:!0,mobileBreakpoint:768}},Fe={enabled:!1,model:{path:`/pio/models/spine/sample/sample.json`,scale:1,x:0,y:0},position:{corner:`bottom-left`,offsetX:0,offsetY:0},size:{width:135,height:165},interactive:{enabled:!0,clickAnimations:[`click`],clickMessages:[`你好呀！`,`今天也要加油哦！`,`记得要好好休息呢~`],messageDisplayTime:3e3,idleAnimations:[`idle`],idleInterval:8e3},responsive:{hideOnMobile:!1,mobileBreakpoint:768},zIndex:1e3,opacity:1},Ie={googleAnalyticsId:``,microsoftClarityId:``,umamiAnalytics:{websiteId:`e1b50849-0b69-489f-a902-19cd29a87eba`,scriptUrl:`https://cloud.umami.is/script.js`,replaysScriptUrl:`https://cloud.umami.is/recorder.js`,domains:`heyelio.github.io`,trackOutboundLinks:!0,collectWebVitals:!1,replays:{enabled:!1,sampleRate:.15,maskLevel:`moderate`,maxDuration:3e5,blockSelector:``}},la51Analytics:{id:``,sdkUrl:``,ck:``,autoTrack:!1,hashMode:!1,screenRecord:!0}},Le={enabled:!0,userId:`1301160`,mode:`static`,apiUrl:`https://api.bgm.tv`,subjectBaseUrl:`https://bgm.tv/subject/`,categoryOrder:[`anime`,`book`,`music`,`game`],categories:{anime:!0,book:!0,music:!0,game:!0},nsfw:`hide`},Re={enabled:!0,uid:`1771978903`},ze={enabled:!1,userId:``,mode:`static`,downloadCovers:!1,apiUrl:`https://api.vndb.org/kana`,vnBaseUrl:`https://vndb.org/`,apiToken:``,nsfw:`hide`},Be={enabled:!0,username:`heyelio`,clientId:`5feb850078b0ba7f10752183522972f6`,apiUrl:`https://api.myanimelist.net/v2`,animeBaseUrl:`https://myanimelist.net/anime/`,mangaBaseUrl:`https://myanimelist.net/manga/`,nsfw:`off`};function Ve(){try{return}catch{return typeof process>`u`?void 0:{}.PUBLIC_SITE_LANG}}function He(e){if(e!==void 0&&e!==``)switch(e.toLowerCase()){case`zh_cn`:case`zh-cn`:return`zh_CN`;case`zh_tw`:case`zh-tw`:return`zh_TW`;case`ja`:case`ja_jp`:case`ja-jp`:return`ja`;case`ru`:case`ru_ru`:case`ru-ru`:return`ru`;case`ko`:case`ko_kr`:case`ko-kr`:return`ko`;case`en`:case`en_us`:case`en_gb`:case`en-gb`:return`en`;default:return}}function Ue(e){return He(Ve())??e}function We(e){return e.replace(`_`,`-`)}function Ge(e){switch(e.toLowerCase().replace(`-`,`_`)){case`zh_cn`:return`zh_CN`;case`zh_tw`:return`zh_TW`;case`ja`:return`ja_JP`;case`ko`:return`ko_KR`;case`ru`:return`ru_RU`;default:return`en_US`}}var R={url:`https://heyelio.github.io`,title:`Elio Hwang`,description:`专注于软件工程，探索 AI 的未来。热衷于创造、折腾 Agent，也乐于记录那些真正有用的经验。让每一次探索都有迹可循，让未来的自己和他人少走一些弯路。`,locale:`zh-CN`,lang:Ue(`zh_CN`),timeZone:`Asia/Shanghai`,since:2023,license:`CC BY-NC-SA 4.0`,licenseUrl:`https://creativecommons.org/licenses/by-nc-sa/4.0/`,licenseIcon:``,ogImage:`/static/og-default.png`,post:{generateOgImages:!0,showLastModified:!0,outdatedThreshold:30,share:!0,postNavigation:!0,relatedPosts:!0,randomPosts:!0,immersiveReading:{enable:!0,defaultOn:!1,tocEnabled:!0,tocPosition:`left`}},coverImage:{enableInPost:!0,enableInPostOverlay:!0,showLoading:!1,randomCoverImage:{enable:!1,apis:[`https://t.alcy.cc/pc`,`https://www.dmoe.cc/random.php`,`https://uapis.cn/api/v1/random/image?category=acg&type=pc`]}},postListLayout:{defaultMode:`list`,mobileDefaultMode:`grid`,coverPosition:`right`,descriptionLines:2,showStatsIcons:!0,tagsPosition:`bottom`,tagsBottomStyle:`chip`,meta:{showPublished:!0,showCategory:!0,showTags:!0,tagCount:3,showWords:!1,showReadingTime:!1},stats:{showPublished:!0,showWords:!0,showReadingTime:!0},grid:{masonry:!1,columnWidth:320,coverFullWidth:!1}},themeColor:{hue:230},dynamic:{showComment:!0},navbar:{mode:`dynamic`,widthFull:!1,logo:{icon:`home`,alt:`Elio Hwang`,light:`/static/logo.png`,dark:`/static/logo.png`}},wallpaperPlayer:{enabled:!1,urls:[`https://example.com/videos/background.mp4`],mode:`order`},banner:{mode:`banner`,position:`0% 20%`,dimOpacity:.2,postInfo:{mode:`description`},carousel:{enable:!1,interval:5e3,transitionEffect:`zoom`},homeText:{enable:!0,title:`Elio Hwang`,titleSize:`4.5rem`,subtitle:[`"Talk is cheap. Show me the code." — Linus Torvalds`,`"Simplicity is prerequisite for reliability." — Edsger Dijkstra`,`"Premature optimization is the root of all evil." — Donald Knuth`,`"The best way to predict the future is to invent it." — Alan Kay`,`"AI is the new electricity." — Andrew Ng`],subtitleSize:`1.5rem`,typewriter:{enable:!0,speed:100,deleteSpeed:50,pauseTime:2e3},linksEnable:!0,links:[{name:`GitHub`,icon:`github`,url:`https://github.com/heyelio`,showName:!0},{name:`X`,icon:`x`,url:`https://x.com/heyelioh`},{name:`Email`,icon:`mail`,url:`mailto:peiwei.hwang@gmail.com`},{name:`RSS`,icon:`rss`,url:`/rss/`}]},waves:{desktop:!0,mobile:!0},gradient:{desktop:!0,mobile:!0,height:`10%`}},wallpaperImages:{desktop:[`/assets/images/DesktopWallpaper/d1.avif`,`/assets/images/DesktopWallpaper/d2.avif`,`/assets/images/DesktopWallpaper/d3.avif`,`/assets/images/DesktopWallpaper/d4.avif`,`/assets/images/DesktopWallpaper/d5.avif`,`/assets/images/DesktopWallpaper/d6.avif`],mobile:[`/assets/images/MobileWallpaper/m1.avif`,`/assets/images/MobileWallpaper/m2.avif`,`/assets/images/MobileWallpaper/m3.avif`,`/assets/images/MobileWallpaper/m4.avif`,`/assets/images/MobileWallpaper/m5.avif`,`/assets/images/MobileWallpaper/m6.avif`]},imageOptimization:{quality:80,variantWidths:[400,800,1200,1600],formats:`both`,noReferrerDomains:[`*.hdslb.com`,`*.bilibili.com`,`*.myanimelist.net`,`*.vndb.org`]},diagram:{mermaid:{lightTheme:`editor-light`,darkTheme:`editor-dark`},plantuml:{enable:!0,server:`https://www.plantuml.com/plantuml`,lightTheme:``,darkTheme:`cyborg`}},author:{name:`Elio Hwang`,handle:`heyelio`,bio:`星星之火，可以燎原！`,avatar:`/static/avatar.png`},nav:[{label:`主页`,href:`/`,icon:`home`},{label:`归档`,href:`/archive/`,icon:`archive`},{label:`分类`,href:`/categories/`,icon:`folder`},{label:`标签`,href:`/tags/`,icon:`tag`},{label:`系列`,href:`/series/`,icon:`list`},{label:`动态`,href:`/dynamic/`,icon:`chat`},{label:`相册`,href:`/gallery/`,icon:`image`},{label:`项目`,href:`/projects/`,icon:`rocket`},{label:`番组计划`,href:`/bangumi/`,icon:`movie`},{label:`哔哩哔哩`,href:`/bilibili/`,icon:`bilibili`},{label:`友链`,href:`/friends/`,icon:`link`},{label:`关于`,href:`/about/`,icon:`user`}],navGroups:[{label:`主页`,href:`/`,icon:`home`},{label:`文章`,icon:`archive`,children:[{label:`归档`,href:`/archive/`,icon:`archive`},{label:`分类`,href:`/categories/`,icon:`folder`},{label:`标签`,href:`/tags/`,icon:`tag`},{label:`系列`,href:`/series/`,icon:`list`}]},{label:`社交`,icon:`chat`,children:[{label:`GitHub`,href:`https://github.com/heyelio`,icon:`github`,external:!0},{label:`X`,href:`https://x.com/heyelioh`,icon:`x`,external:!0},{label:`RSS`,href:`/rss/`,icon:`rss`},{label:`Atom`,href:`/atom/`,icon:`atom`},{label:`Email`,href:`mailto:peiwei.hwang@gmail.com`,icon:`mail`}]},{label:`我的`,icon:`user`,children:[{label:`动态`,href:`/dynamic/`,icon:`chat`},{label:`相册`,href:`/gallery/`,icon:`image`},{label:`项目`,href:`/projects/`,icon:`rocket`},{label:`书签导航`,href:`/booknav/`,icon:`bookmark`},{label:`番组计划`,href:`/bangumi/`,icon:`movie`},{label:`哔哩哔哩`,href:`/bilibili/`,icon:`bilibili`},{label:`动漫收藏`,href:`/myanimelist/`,icon:`myanimelist`}]},{label:`关于`,href:`/about/`,icon:`user`},{label:`链接`,icon:`link`,children:[{label:`友链`,href:`/friends/`,icon:`link`},{label:`留言板`,href:`/guestbook/`,icon:`chat`},{label:`赞助`,href:`/sponsor/`,icon:`heart`},{label:`搜索`,href:`/search/`,icon:`search`}]}],social:[{label:`GitHub`,href:`https://github.com/heyelio`,icon:`github`,showName:!0},{label:`X`,href:`https://x.com/heyelioh`,icon:`x`,showName:!1},{label:`RSS`,href:`/rss/`,icon:`rss`,showName:!1},{label:`Atom`,href:`/atom/`,icon:`atom`,showName:!1},{label:`Email`,href:`mailto:peiwei.hwang@gmail.com`,icon:`mail`,showName:!1}],announcement:{title:`公告`,body:`从代码到产品，从 AI 到 Agent，从一个想法到真正落地。这里的内容不一定完美，但都来自真实的探索与实践。`,href:`/about/`,linkLabel:`了解更多`},foldArticle:!0},z={version:`0.1.0`,frameworkVersion:`8.5.1`,nodeVersion:`v24.22.2`,pnpmVersion:`v10.34.9`,buildPlatform:`GitHub Actions`,buildTime:`2026-11-19 00:18:40`,system:`Linux / x86_64`},Ke={BASE_URL:`/`,DEV:!1,MODE:`production`,PROD:!0,SSR:!1},qe=Ke?.DEV??!1,Je=Ke?.BASE_URL??`/`;function B(e){return`${Je}${e.replace(/^\//,``)}`}function Ye(e,t=Je){return new URL(`${t}${e.replace(/^\//,``)}`,R.url).href}var Xe=`modulepreload`,Ze=function(e){return`/`+e},Qe={},$e=function(e){return e.pathname.endsWith(`.css`)},et=function(e,t,n){if(t in e)return e[t];let r=n();if(!r){e[t]=void 0;return}let i=r.then(()=>{e[t]=void 0},n=>{throw e[t]=void 0,n});return e[t]=i,i},tt=function(e,t,n){let r=Promise.resolve();if(t&&t.length>0){let e,i=document.querySelector(`meta[property=csp-nonce]`),a=i?.nonce||i?.getAttribute(`nonce`);function o(e){return Promise.all(e.map(e=>Promise.resolve(e).then(e=>({status:`fulfilled`,value:e}),e=>({status:`rejected`,reason:e}))))}function s(e){return import.meta.resolve?new URL(import.meta.resolve(e)):new URL(e,import.meta.url)}r=o(t.map(t=>{t=Ze(t,n);let r=s(t),i=$e(r);return et(Qe,r.href,()=>{if(e===void 0){e={all:new Set,styles:new Set};let t=document.getElementsByTagName(`link`);for(let n=t.length-1;n>=0;n--){let r=t[n];e.all.add(r.href),r.rel===`stylesheet`&&e.styles.add(r.href)}}if((i?e.styles:e.all).has(r.href))return;let t=document.createElement(`link`);if(t.rel=i?`stylesheet`:Xe,i||(t.as=`script`),t.crossOrigin=``,t.href=r.href,a&&t.setAttribute(`nonce`,a),document.head.appendChild(t),i)return new Promise((e,n)=>{t.addEventListener(`load`,e),t.addEventListener(`error`,()=>n(Error(`Unable to preload CSS for ${r}`)))})})}).filter(e=>e!==void 0))}function i(e){let t=new Event(`vite:preloadError`,{cancelable:!0});if(t.payload=e,window.dispatchEvent(t),!t.defaultPrevented)throw e}return r.then(t=>{for(let e of t||[])e.status===`rejected`&&i(e.reason);return e().catch(i)})},V=function(e){return e.home=`home`,e.about=`about`,e.archive=`archive`,e.search=`search`,e.searchNoResults=`searchNoResults`,e.searchTypeSomething=`searchTypeSomething`,e.searchLoading=`searchLoading`,e.searchSummary=`searchSummary`,e.searchContent=`searchContent`,e.searchViewMore=`searchViewMore`,e.searchClear=`searchClear`,e.other=`other`,e.navArticles=`navArticles`,e.navSocial=`navSocial`,e.navMine=`navMine`,e.navAbout=`navAbout`,e.navLinks=`navLinks`,e.tags=`tags`,e.categories=`categories`,e.allCategories=`allCategories`,e.allTags=`allTags`,e.allSeries=`allSeries`,e.recentPosts=`recentPosts`,e.postList=`postList`,e.tableOfContents=`tableOfContents`,e.tocEmpty=`tocEmpty`,e.music=`music`,e.dynamic=`dynamic`,e.latestDynamics=`latestDynamics`,e.moreDynamics=`moreDynamics`,e.dynamicDescription=`dynamicDescription`,e.dynamicEmpty=`dynamicEmpty`,e.dynamicSearch=`dynamicSearch`,e.dynamicNoResults=`dynamicNoResults`,e.dynamicLoading=`dynamicLoading`,e.dynamicAllYears=`dynamicAllYears`,e.dynamicLoadMore=`dynamicLoadMore`,e.dynamicBackToList=`dynamicBackToList`,e.dynamicProfile=`dynamicProfile`,e.dynamicPermalink=`dynamicPermalink`,e.dynamicCollapseGallery=`dynamicCollapseGallery`,e.dynamicViewOriginal=`dynamicViewOriginal`,e.dynamicPreviousImage=`dynamicPreviousImage`,e.dynamicNextImage=`dynamicNextImage`,e.dynamicViewImage=`dynamicViewImage`,e.dynamicSelectImage=`dynamicSelectImage`,e.announcement=`announcement`,e.announcementClose=`announcementClose`,e.comments=`comments`,e.commentSection=`commentSection`,e.commentSubtitle=`commentSubtitle`,e.commentNotConfigured=`commentNotConfigured`,e.guestbookCommentHint=`guestbookCommentHint`,e.untitled=`untitled`,e.uncategorized=`uncategorized`,e.noTags=`noTags`,e.postBack=`postBack`,e.wordCount=`wordCount`,e.wordsCount=`wordsCount`,e.minuteCount=`minuteCount`,e.minutesCount=`minutesCount`,e.postCount=`postCount`,e.postsCount=`postsCount`,e.tagsCount=`tagsCount`,e.noData=`noData`,e.emptyHint=`emptyHint`,e.booknavEmptyHint=`booknavEmptyHint`,e.friendsEmptyHint=`friendsEmptyHint`,e.projectEmptyHint=`projectEmptyHint`,e.galleryNoAlbumsHint=`galleryNoAlbumsHint`,e.dynamicEmptyHint=`dynamicEmptyHint`,e.sponsorEmptyHint=`sponsorEmptyHint`,e.musicNoPlaying=`musicNoPlaying`,e.musicLyrics=`musicLyrics`,e.musicVolume=`musicVolume`,e.musicPlayMode=`musicPlayMode`,e.musicPrev=`musicPrev`,e.musicNext=`musicNext`,e.musicPlaylist=`musicPlaylist`,e.musicNoLyrics=`musicNoLyrics`,e.musicLoadingLyrics=`musicLoadingLyrics`,e.musicFailedLyrics=`musicFailedLyrics`,e.musicNoSongs=`musicNoSongs`,e.musicError=`musicError`,e.musicPlay=`musicPlay`,e.musicPause=`musicPause`,e.musicProgress=`musicProgress`,e.musicCover=`musicCover`,e.musicNoCover=`musicNoCover`,e.musicAudioPlayer=`musicAudioPlayer`,e.themeColor=`themeColor`,e.lightMode=`lightMode`,e.darkMode=`darkMode`,e.systemMode=`systemMode`,e.more=`more`,e.collapse=`collapse`,e.all=`all`,e.author=`author`,e.publishedAt=`publishedAt`,e.updatedAt=`updatedAt`,e.readTime=`readTime`,e.license=`license`,e.friends=`friends`,e.friendsDescription=`friendsDescription`,e.searchFriends=`searchFriends`,e.friendsEmpty=`friendsEmpty`,e.guestbook=`guestbook`,e.guestbookDescription=`guestbookDescription`,e.bangumi=`bangumi`,e.booknav=`booknav`,e.booknavDescription=`booknavDescription`,e.searchBooknav=`searchBooknav`,e.booknavEmpty=`booknavEmpty`,e.projects=`projects`,e.projectsDescription=`projectsDescription`,e.projectDetails=`projectDetails`,e.projectBack=`projectBack`,e.projectEmpty=`projectEmpty`,e.projectSearch=`projectSearch`,e.projectStatusPlanning=`projectStatusPlanning`,e.projectStatusDeveloping=`projectStatusDeveloping`,e.projectStatusPublished=`projectStatusPublished`,e.projectStatusArchived=`projectStatusArchived`,e.bangumiTitle=`bangumiTitle`,e.bangumiSubtitle=`bangumiSubtitle`,e.bangumiFilterAll=`bangumiFilterAll`,e.bangumiFilterWatched=`bangumiFilterWatched`,e.bangumiFilterWatching=`bangumiFilterWatching`,e.bangumiFilterWish=`bangumiFilterWish`,e.bangumiFilterOnHold=`bangumiFilterOnHold`,e.bangumiFilterDropped=`bangumiFilterDropped`,e.bangumiFilterGamePlayed=`bangumiFilterGamePlayed`,e.bangumiFilterGamePlaying=`bangumiFilterGamePlaying`,e.bangumiFilterGameWish=`bangumiFilterGameWish`,e.bangumiFilterBookRead=`bangumiFilterBookRead`,e.bangumiFilterBookReading=`bangumiFilterBookReading`,e.bangumiFilterBookWish=`bangumiFilterBookWish`,e.bangumiFilterMusicListened=`bangumiFilterMusicListened`,e.bangumiFilterMusicListening=`bangumiFilterMusicListening`,e.bangumiFilterMusicWish=`bangumiFilterMusicWish`,e.bangumiStatusWish=`bangumiStatusWish`,e.bangumiStatusWatched=`bangumiStatusWatched`,e.bangumiStatusWatching=`bangumiStatusWatching`,e.bangumiStatusOnHold=`bangumiStatusOnHold`,e.bangumiStatusDropped=`bangumiStatusDropped`,e.bangumiStatusGameWish=`bangumiStatusGameWish`,e.bangumiStatusGamePlayed=`bangumiStatusGamePlayed`,e.bangumiStatusGamePlaying=`bangumiStatusGamePlaying`,e.bangumiStatusBookWish=`bangumiStatusBookWish`,e.bangumiStatusBookRead=`bangumiStatusBookRead`,e.bangumiStatusBookReading=`bangumiStatusBookReading`,e.bangumiStatusMusicWish=`bangumiStatusMusicWish`,e.bangumiStatusMusicListened=`bangumiStatusMusicListened`,e.bangumiStatusMusicListening=`bangumiStatusMusicListening`,e.bangumiStatusUnknown=`bangumiStatusUnknown`,e.bangumiNoData=`bangumiNoData`,e.bangumiNoDataDescription=`bangumiNoDataDescription`,e.bangumiEmpty=`bangumiEmpty`,e.bangumiEmptyReason=`bangumiEmptyReason`,e.bangumiUsername=`bangumiUsername`,e.bangumiApi=`bangumiApi`,e.bangumiConfigTip=`bangumiConfigTip`,e.bangumiPrevPage=`bangumiPrevPage`,e.bangumiNextPage=`bangumiNextPage`,e.bangumiCurrentPage=`bangumiCurrentPage`,e.bangumiTotalPages=`bangumiTotalPages`,e.bangumiPage=`bangumiPage`,e.bangumiFetchError=`bangumiFetchError`,e.bangumiFetchErrorDesc=`bangumiFetchErrorDesc`,e.bangumiCategoryBook=`bangumiCategoryBook`,e.bangumiCategoryAnime=`bangumiCategoryAnime`,e.bangumiCategoryMusic=`bangumiCategoryMusic`,e.bangumiCategoryGame=`bangumiCategoryGame`,e.bangumiCategoryReal=`bangumiCategoryReal`,e.bangumiLastUpdated=`bangumiLastUpdated`,e.bangumiUpdatedAt=`bangumiUpdatedAt`,e.bangumiDataStatic=`bangumiDataStatic`,e.vndb=`vndb`,e.vndbSubtitle=`vndbSubtitle`,e.vndbFilterAll=`vndbFilterAll`,e.vndbFilterVoted=`vndbFilterVoted`,e.vndbFilterUnvoted=`vndbFilterUnvoted`,e.vndbFilterNotes=`vndbFilterNotes`,e.vndbStatusWishlist=`vndbStatusWishlist`,e.vndbStatusPlaying=`vndbStatusPlaying`,e.vndbStatusFinished=`vndbStatusFinished`,e.vndbStatusStalled=`vndbStatusStalled`,e.vndbStatusDropped=`vndbStatusDropped`,e.vndbStatusUnknown=`vndbStatusUnknown`,e.vndbNoData=`vndbNoData`,e.vndbNoDataDescription=`vndbNoDataDescription`,e.vndbEmpty=`vndbEmpty`,e.vndbEmptyReason=`vndbEmptyReason`,e.vndbFetchError=`vndbFetchError`,e.vndbFetchErrorDesc=`vndbFetchErrorDesc`,e.vndbNotConfigured=`vndbNotConfigured`,e.vndbNotConfiguredDesc=`vndbNotConfiguredDesc`,e.vndbLastUpdated=`vndbLastUpdated`,e.vndbVotes=`vndbVotes`,e.vndbLengthVeryShort=`vndbLengthVeryShort`,e.vndbLengthShort=`vndbLengthShort`,e.vndbLengthMedium=`vndbLengthMedium`,e.vndbLengthLong=`vndbLengthLong`,e.vndbLengthVeryLong=`vndbLengthVeryLong`,e.bilibili=`bilibili`,e.bilibiliSubtitle=`bilibiliSubtitle`,e.bilibiliNotConfigured=`bilibiliNotConfigured`,e.bilibiliNotConfiguredDesc=`bilibiliNotConfiguredDesc`,e.animeTotal=`animeTotal`,e.animeAverageRating=`animeAverageRating`,e.animeSearch=`animeSearch`,e.animeAllTypes=`animeAllTypes`,e.animeTV=`animeTV`,e.animeMovie=`animeMovie`,e.animeRatingDesc=`animeRatingDesc`,e.animeRatingAsc=`animeRatingAsc`,e.animeDateDesc=`animeDateDesc`,e.animeDateAsc=`animeDateAsc`,e.animeNoResults=`animeNoResults`,e.animeLastUpdated=`animeLastUpdated`,e.animeEpStatus=`animeEpStatus`,e.animeViewDetails=`animeViewDetails`,e.animeBilibiliAvg=`animeBilibiliAvg`,e.animeNoOverview=`animeNoOverview`,e.animeClose=`animeClose`,e.animeSynopsis=`animeSynopsis`,e.animeWatchNow=`animeWatchNow`,e.animeAllWithCount=`animeAllWithCount`,e.animeTVWithCount=`animeTVWithCount`,e.animeMovieWithCount=`animeMovieWithCount`,e.animeTypeAnime=`animeTypeAnime`,e.animeTypeMovie=`animeTypeMovie`,e.animeTypeDocumentary=`animeTypeDocumentary`,e.animeTypeChinese=`animeTypeChinese`,e.animeTypeDrama=`animeTypeDrama`,e.animeTypeConcert=`animeTypeConcert`,e.mal=`mal`,e.malSubtitle=`malSubtitle`,e.malCategoryAnime=`malCategoryAnime`,e.malCategoryManga=`malCategoryManga`,e.malFilterAll=`malFilterAll`,e.malStatusWatching=`malStatusWatching`,e.malStatusReading=`malStatusReading`,e.malStatusCompleted=`malStatusCompleted`,e.malStatusOnHold=`malStatusOnHold`,e.malStatusDropped=`malStatusDropped`,e.malStatusPlanToWatch=`malStatusPlanToWatch`,e.malStatusPlanToRead=`malStatusPlanToRead`,e.malNoData=`malNoData`,e.malNoDataDescription=`malNoDataDescription`,e.malEmpty=`malEmpty`,e.malEmptyReason=`malEmptyReason`,e.malFetchError=`malFetchError`,e.malFetchErrorDesc=`malFetchErrorDesc`,e.malNotConfigured=`malNotConfigured`,e.malNotConfiguredDesc=`malNotConfiguredDesc`,e.malLastUpdated=`malLastUpdated`,e.malSeasonWinter=`malSeasonWinter`,e.malSeasonSpring=`malSeasonSpring`,e.malSeasonSummer=`malSeasonSummer`,e.malSeasonFall=`malSeasonFall`,e.paginationFirst=`paginationFirst`,e.paginationPrev=`paginationPrev`,e.paginationNext=`paginationNext`,e.paginationLast=`paginationLast`,e.paginationPage=`paginationPage`,e.paginationOf=`paginationOf`,e.paginationTotal=`paginationTotal`,e.paginationRecords=`paginationRecords`,e.paginationJump=`paginationJump`,e.notFound=`notFound`,e.notFoundTitle=`notFoundTitle`,e.notFoundDescription=`notFoundDescription`,e.backToHome=`backToHome`,e.rss=`rss`,e.rssDescription=`rssDescription`,e.rssSubtitle=`rssSubtitle`,e.rssLink=`rssLink`,e.rssCopyToReader=`rssCopyToReader`,e.rssCopyLink=`rssCopyLink`,e.rssLatestPosts=`rssLatestPosts`,e.rssWhatIsRSS=`rssWhatIsRSS`,e.rssWhatIsRSSDescription=`rssWhatIsRSSDescription`,e.rssBenefit1=`rssBenefit1`,e.rssBenefit2=`rssBenefit2`,e.rssBenefit3=`rssBenefit3`,e.rssBenefit4=`rssBenefit4`,e.rssHowToUse=`rssHowToUse`,e.rssCopied=`rssCopied`,e.rssCopyFailed=`rssCopyFailed`,e.atom=`atom`,e.atomDescription=`atomDescription`,e.atomSubtitle=`atomSubtitle`,e.atomLink=`atomLink`,e.atomCopyToReader=`atomCopyToReader`,e.atomCopied=`atomCopied`,e.lastModifiedPrefix=`lastModifiedPrefix`,e.lastModifiedOutdated=`lastModifiedOutdated`,e.lastModifiedDaysAgo=`lastModifiedDaysAgo`,e.year=`year`,e.month=`month`,e.day=`day`,e.hour=`hour`,e.minute=`minute`,e.second=`second`,e.pageViews=`pageViews`,e.pageViewsLoading=`pageViewsLoading`,e.pageViewsError=`pageViewsError`,e.pinned=`pinned`,e.relatedPosts=`relatedPosts`,e.randomPosts=`randomPosts`,e.smartRecommend=`smartRecommend`,e.randomRecommend=`randomRecommend`,e.noRelatedPosts=`noRelatedPosts`,e.noRandomPosts=`noRandomPosts`,e.series=`series`,e.seriesPartOf=`seriesPartOf`,e.seriesPart=`seriesPart`,e.seriesThisArticle=`seriesThisArticle`,e.noSeries=`noSeries`,e.postEncrypted=`postEncrypted`,e.wallpaperMode=`wallpaperMode`,e.wallpaperBannerMode=`wallpaperBannerMode`,e.wallpaperFullscreenMode=`wallpaperFullscreenMode`,e.fullscreenLayout=`fullscreenLayout`,e.fullscreenClassicLayout=`fullscreenClassicLayout`,e.fullscreenHeroLayout=`fullscreenHeroLayout`,e.wallpaperOverlayMode=`wallpaperOverlayMode`,e.wallpaperNoneMode=`wallpaperNoneMode`,e.wallpaperSettings=`wallpaperSettings`,e.wallpaperTitle=`wallpaperTitle`,e.wallpaperCarousel=`wallpaperCarousel`,e.wavesAnimation=`wavesAnimation`,e.gradientTransition=`gradientTransition`,e.sakuraEffect=`sakuraEffect`,e.effectsSettings=`effectsSettings`,e.overlaySettings=`overlaySettings`,e.overlayOpacity=`overlayOpacity`,e.overlayBlur=`overlayBlur`,e.overlayCardOpacity=`overlayCardOpacity`,e.settingsTabAppearance=`settingsTabAppearance`,e.settingsTabWallpaper=`settingsTabWallpaper`,e.settingsTabEffects=`settingsTabEffects`,e.cardSettings=`cardSettings`,e.cardBorder=`cardBorder`,e.cardFollowTheme=`cardFollowTheme`,e.postListLayout=`postListLayout`,e.postListLayoutList=`postListLayoutList`,e.postListLayoutGrid=`postListLayoutGrid`,e.sponsor=`sponsor`,e.sponsorTitle=`sponsorTitle`,e.sponsorDescription=`sponsorDescription`,e.sponsorMethods=`sponsorMethods`,e.sponsorList=`sponsorList`,e.sponsorEmpty=`sponsorEmpty`,e.sponsorAmount=`sponsorAmount`,e.sponsorDate=`sponsorDate`,e.sponsorMessage=`sponsorMessage`,e.sponsorAnonymous=`sponsorAnonymous`,e.scanToSponsor=`scanToSponsor`,e.sponsorGoTo=`sponsorGoTo`,e.sponsorButton=`sponsorButton`,e.sponsorButtonText=`sponsorButtonText`,e.shareOnSocial=`shareOnSocial`,e.shareOnSocialDescription=`shareOnSocialDescription`,e.siteStats=`siteStats`,e.siteStatsPostCount=`siteStatsPostCount`,e.siteStatsDynamicCount=`siteStatsDynamicCount`,e.siteStatsCategoryCount=`siteStatsCategoryCount`,e.siteStatsTagCount=`siteStatsTagCount`,e.siteStatsTotalWords=`siteStatsTotalWords`,e.siteStatsRunningDays=`siteStatsRunningDays`,e.siteStatsLastUpdate=`siteStatsLastUpdate`,e.siteStatsDaysAgo=`siteStatsDaysAgo`,e.siteStatsDays=`siteStatsDays`,e.today=`today`,e.siteInfo=`siteInfo`,e.siteInfoBuildTime=`siteInfoBuildTime`,e.siteInfoBuildPlatform=`siteInfoBuildPlatform`,e.siteInfoBlogVersion=`siteInfoBlogVersion`,e.siteInfoAstroVersion=`siteInfoAstroVersion`,e.siteInfoNodeVersion=`siteInfoNodeVersion`,e.siteInfoPnpmVersion=`siteInfoPnpmVersion`,e.siteInfoSystem=`siteInfoSystem`,e.siteInfoExpand=`siteInfoExpand`,e.siteInfoCollapse=`siteInfoCollapse`,e.siteInfoDomain=`siteInfoDomain`,e.siteInfoLicense=`siteInfoLicense`,e.calendarSunday=`calendarSunday`,e.calendarMonday=`calendarMonday`,e.calendarTuesday=`calendarTuesday`,e.calendarWednesday=`calendarWednesday`,e.calendarThursday=`calendarThursday`,e.calendarFriday=`calendarFriday`,e.calendarSaturday=`calendarSaturday`,e.calendarJanuary=`calendarJanuary`,e.calendarFebruary=`calendarFebruary`,e.calendarMarch=`calendarMarch`,e.calendarApril=`calendarApril`,e.calendarMay=`calendarMay`,e.calendarJune=`calendarJune`,e.calendarJuly=`calendarJuly`,e.calendarAugust=`calendarAugust`,e.calendarSeptember=`calendarSeptember`,e.calendarOctober=`calendarOctober`,e.calendarNovember=`calendarNovember`,e.calendarDecember=`calendarDecember`,e.calendar=`calendar`,e.calendarHeatmapWeek=`calendarHeatmapWeek`,e.advertisement=`advertisement`,e.shareArticle=`shareArticle`,e.generatingPoster=`generatingPoster`,e.copied=`copied`,e.copyLink=`copyLink`,e.savePoster=`savePoster`,e.scanToRead=`scanToRead`,e.codeCollapsibleShowMore=`codeCollapsibleShowMore`,e.codeCollapsibleShowLess=`codeCollapsibleShowLess`,e.codeCollapsibleExpanded=`codeCollapsibleExpanded`,e.codeCollapsibleCollapsed=`codeCollapsibleCollapsed`,e.gallery=`gallery`,e.galleryDescription=`galleryDescription`,e.galleryPhotos=`galleryPhotos`,e.galleryAlbums=`galleryAlbums`,e.galleryNoAlbums=`galleryNoAlbums`,e.galleryBackToAlbums=`galleryBackToAlbums`,e.galleryEnterAlbum=`galleryEnterAlbum`,e.searchAlbums=`searchAlbums`,e.passwordProtected=`passwordProtected`,e.passwordProtectedDesc=`passwordProtectedDesc`,e.passwordHint=`passwordHint`,e.passwordPlaceholder=`passwordPlaceholder`,e.passwordSubmit=`passwordSubmit`,e.passwordError=`passwordError`,e.passwordProtectedRss=`passwordProtectedRss`,e.videoPlay=`videoPlay`,e.videoPause=`videoPause`,e.videoPrev=`videoPrev`,e.videoNext=`videoNext`,e.videoLoadError=`videoLoadError`,e.immersiveReading=`immersiveReading`,e.enterImmersiveReading=`enterImmersiveReading`,e.exitImmersiveReading=`exitImmersiveReading`,e.tocExpand=`tocExpand`,e.tocCollapse=`tocCollapse`,e}(V||{}),nt={[V.home]:`Home`,[V.about]:`About`,[V.archive]:`Archive`,[V.search]:`Search`,[V.searchNoResults]:`No results found.`,[V.searchTypeSomething]:`Type something to search...`,[V.searchLoading]:`Searching...`,[V.searchSummary]:`Summary`,[V.searchContent]:`Content`,[V.searchViewMore]:`View more results ({count} more)`,[V.searchClear]:`Clear the search field`,[V.other]:`Other`,[V.navArticles]:`Articles`,[V.navSocial]:`Social`,[V.navMine]:`Mine`,[V.navAbout]:`About`,[V.navLinks]:`Links`,[V.all]:`All`,[V.tags]:`Tags`,[V.categories]:`Categories`,[V.allCategories]:`All Categories`,[V.allTags]:`All Tags`,[V.allSeries]:`All Series`,[V.recentPosts]:`Recent Posts`,[V.postList]:`Post List`,[V.tableOfContents]:`Table of Contents`,[V.tocEmpty]:`No table of contents on this page`,[V.music]:`Music`,[V.dynamic]:`Moments`,[V.latestDynamics]:`Latest Moments`,[V.moreDynamics]:`More moments`,[V.dynamicDescription]:`Short thoughts and everyday moments.`,[V.dynamicEmpty]:`No moments have been posted yet`,[V.dynamicSearch]:`Search moments...`,[V.dynamicNoResults]:`No matching moments found`,[V.dynamicLoading]:`Loading moments`,[V.dynamicAllYears]:`All years`,[V.dynamicLoadMore]:`Load more`,[V.dynamicBackToList]:`Back to moments`,[V.dynamicProfile]:`View {name}'s profile`,[V.dynamicPermalink]:`Permalink to this moment`,[V.dynamicCollapseGallery]:`Collapse`,[V.dynamicViewOriginal]:`View full size`,[V.dynamicPreviousImage]:`Previous image`,[V.dynamicNextImage]:`Next image`,[V.dynamicViewImage]:`View image {index}`,[V.dynamicSelectImage]:`Select image {index}`,[V.musicNoPlaying]:`No playing`,[V.musicLyrics]:`Lyrics`,[V.musicVolume]:`Volume`,[V.musicPlayMode]:`Switch Play Mode`,[V.musicPrev]:`Previous`,[V.musicNext]:`Next`,[V.musicPlaylist]:`Playlist`,[V.musicNoLyrics]:`No lyrics available`,[V.musicLoadingLyrics]:`Loading lyrics...`,[V.musicFailedLyrics]:`Failed to load lyrics`,[V.musicNoSongs]:`No songs`,[V.musicError]:`Player Error`,[V.musicPlay]:`Play`,[V.musicPause]:`Pause`,[V.musicProgress]:`Playback Progress`,[V.musicCover]:`Cover`,[V.musicNoCover]:`No cover available`,[V.musicAudioPlayer]:`Audio Player`,[V.announcement]:`Announcement`,[V.announcementClose]:`Close`,[V.comments]:`Comments`,[V.commentSection]:`Comments`,[V.commentSubtitle]:`Share your thoughts and discuss with everyone`,[V.commentNotConfigured]:`Comment system not configured`,[V.guestbookCommentHint]:`You have not enabled the comment system in the configuration file yet. After enabling it, visitors will be able to leave messages here`,[V.friends]:`Friends`,[V.friendsDescription]:`Here are my friends, welcome to visit and communicate with each other`,[V.searchFriends]:`Search friends...`,[V.friendsEmpty]:`No friends yet.`,[V.booknav]:`Bookmark Nav`,[V.booknavDescription]:`A curated collection of useful sites, organized by category.`,[V.searchBooknav]:`Search bookmarks...`,[V.booknavEmpty]:`No bookmarks yet.`,[V.projects]:`Projects`,[V.projectsDescription]:`Here are the projects I've built`,[V.projectDetails]:`View details`,[V.projectBack]:`Back to projects`,[V.projectEmpty]:`No projects yet`,[V.projectSearch]:`Search projects`,[V.projectStatusPlanning]:`Planning`,[V.projectStatusDeveloping]:`In Development`,[V.projectStatusPublished]:`Published`,[V.projectStatusArchived]:`Archived`,[V.guestbook]:`Guestbook`,[V.guestbookDescription]:`Welcome to leave your mark here, share your thoughts and suggestions`,[V.untitled]:`Untitled`,[V.uncategorized]:`Uncategorized`,[V.noTags]:`No Tags`,[V.postBack]:`Back to posts`,[V.wordCount]:`word`,[V.wordsCount]:`words`,[V.minuteCount]:`minute`,[V.minutesCount]:`minutes`,[V.postCount]:`post`,[V.postsCount]:`posts`,[V.tagsCount]:`tags`,[V.noData]:`No data yet`,[V.emptyHint]:`Nothing here yet — check back a little later.`,[V.booknavEmptyHint]:`Bookmark a post while reading and it will show up here.`,[V.friendsEmptyHint]:`No blog friends yet — feel free to reach out for a link exchange.`,[V.projectEmptyHint]:`Projects will be listed here once they are added.`,[V.galleryNoAlbumsHint]:`Photos added to an album will appear here.`,[V.dynamicEmptyHint]:`No moments yet — the next update will land here.`,[V.sponsorEmptyHint]:`Be the first to support this site.`,[V.themeColor]:`Theme Color`,[V.lightMode]:`Light`,[V.darkMode]:`Dark`,[V.systemMode]:`System`,[V.more]:`More`,[V.collapse]:`Collapse`,[V.author]:`Author`,[V.publishedAt]:`Published at`,[V.updatedAt]:`Updated at`,[V.readTime]:`Read time`,[V.license]:`License`,[V.bangumi]:`Bangumi`,[V.bangumiTitle]:`My Bangumi`,[V.bangumiSubtitle]:`Record my ACG journey`,[V.bangumiFilterAll]:`All`,[V.bangumiFilterWatched]:`Watched`,[V.bangumiFilterWatching]:`Watching`,[V.bangumiFilterWish]:`Wish`,[V.bangumiFilterOnHold]:`On Hold`,[V.bangumiFilterDropped]:`Dropped`,[V.bangumiFilterGamePlayed]:`Played`,[V.bangumiFilterGamePlaying]:`Playing`,[V.bangumiFilterGameWish]:`Wish to Play`,[V.bangumiFilterBookRead]:`Read`,[V.bangumiFilterBookReading]:`Reading`,[V.bangumiFilterBookWish]:`Wish to Read`,[V.bangumiFilterMusicListened]:`Listened`,[V.bangumiFilterMusicListening]:`Listening`,[V.bangumiFilterMusicWish]:`Wish to Listen`,[V.bangumiStatusWish]:`Wish`,[V.bangumiStatusWatched]:`Watched`,[V.bangumiStatusWatching]:`Watching`,[V.bangumiStatusOnHold]:`On Hold`,[V.bangumiStatusDropped]:`Dropped`,[V.bangumiStatusGameWish]:`Wish to Play`,[V.bangumiStatusGamePlayed]:`Played`,[V.bangumiStatusGamePlaying]:`Playing`,[V.bangumiStatusBookWish]:`Wish to Read`,[V.bangumiStatusBookRead]:`Read`,[V.bangumiStatusBookReading]:`Reading`,[V.bangumiStatusMusicWish]:`Wish to Listen`,[V.bangumiStatusMusicListened]:`Listened`,[V.bangumiStatusMusicListening]:`Listening`,[V.bangumiStatusUnknown]:`Unknown`,[V.bangumiNoData]:`No Data`,[V.bangumiNoDataDescription]:`No items in this category`,[V.bangumiEmpty]:`No Data`,[V.bangumiEmptyReason]:`Possible reasons: username does not exist, network connection issue, or API limit`,[V.bangumiFetchError]:`Bangumi Data Fetch Failed`,[V.bangumiFetchErrorDesc]:`Failed to fetch data from Bangumi API during build. This page is temporarily unavailable.`,[V.bangumiUsername]:`Username`,[V.bangumiApi]:`API`,[V.bangumiConfigTip]:`Tip: Please set the correct Bangumi username in the page configuration`,[V.bangumiPrevPage]:`Previous`,[V.bangumiNextPage]:`Next`,[V.bangumiCurrentPage]:`Page`,[V.bangumiTotalPages]:`of`,[V.bangumiPage]:`page`,[V.bangumiCategoryBook]:`Book`,[V.bangumiCategoryAnime]:`Anime`,[V.bangumiCategoryMusic]:`Music`,[V.bangumiCategoryGame]:`Game`,[V.bangumiCategoryReal]:`Real`,[V.bangumiLastUpdated]:`Data updated on`,[V.bangumiUpdatedAt]:`Build time`,[V.bangumiDataStatic]:`Static data`,[V.vndb]:`VNDB`,[V.vndbSubtitle]:`My visual novel list from VNDB`,[V.vndbFilterAll]:`All`,[V.vndbFilterVoted]:`Voted`,[V.vndbFilterUnvoted]:`Unvoted`,[V.vndbFilterNotes]:`With notes`,[V.vndbStatusWishlist]:`Wishlist`,[V.vndbStatusPlaying]:`Playing`,[V.vndbStatusFinished]:`Finished`,[V.vndbStatusStalled]:`Stalled`,[V.vndbStatusDropped]:`Dropped`,[V.vndbStatusUnknown]:`Unknown`,[V.vndbNoData]:`No Data`,[V.vndbNoDataDescription]:`No items in this category`,[V.vndbEmpty]:`No Data`,[V.vndbEmptyReason]:`Possible reasons: user ID does not exist, list is private, network issue, or API limit`,[V.vndbFetchError]:`VNDB Data Fetch Failed`,[V.vndbFetchErrorDesc]:`Failed to fetch data from VNDB API during build. This page is temporarily unavailable.`,[V.vndbNotConfigured]:`VNDB User ID Not Configured`,[V.vndbNotConfiguredDesc]:`Please configure your VNDB user ID in src/config/siteConfig.ts`,[V.vndbLastUpdated]:`Data updated on`,[V.vndbVotes]:`votes`,[V.vndbLengthVeryShort]:`Very short`,[V.vndbLengthShort]:`Short`,[V.vndbLengthMedium]:`Medium`,[V.vndbLengthLong]:`Long`,[V.vndbLengthVeryLong]:`Very long`,[V.bilibili]:`Bilibili`,[V.bilibiliSubtitle]:`My Bilibili follow list (anime + drama)`,[V.bilibiliNotConfigured]:`Bilibili not configured`,[V.bilibiliNotConfiguredDesc]:`Configure bilibili.uid in src/config/siteConfig.ts`,[V.animeTotal]:`Total`,[V.animeAverageRating]:`Avg Rating`,[V.animeSearch]:`Search anime...`,[V.animeAllTypes]:`All`,[V.animeTV]:`TV Anime`,[V.animeMovie]:`Movie`,[V.animeRatingDesc]:`Highest Rating`,[V.animeRatingAsc]:`Lowest Rating`,[V.animeDateDesc]:`Newest`,[V.animeDateAsc]:`Oldest`,[V.animeNoResults]:`No matching anime found`,[V.animeLastUpdated]:`Data updated on`,[V.animeEpStatus]:`Progress`,[V.animeViewDetails]:`View Details`,[V.animeBilibiliAvg]:`Bilibili Avg`,[V.animeNoOverview]:`No synopsis available`,[V.animeClose]:`Close`,[V.animeSynopsis]:`Synopsis`,[V.animeWatchNow]:`Watch Now`,[V.animeAllWithCount]:`All ({count})`,[V.animeTVWithCount]:`TV ({count})`,[V.animeMovieWithCount]:`Movie ({count})`,[V.animeTypeAnime]:`Anime`,[V.animeTypeMovie]:`Movie`,[V.animeTypeDocumentary]:`Documentary`,[V.animeTypeChinese]:`Chinese Animation`,[V.animeTypeDrama]:`Drama`,[V.animeTypeConcert]:`Concert`,[V.mal]:`MyAnimeList`,[V.malSubtitle]:`My anime and manga lists from MyAnimeList`,[V.malCategoryAnime]:`Anime`,[V.malCategoryManga]:`Manga`,[V.malFilterAll]:`All`,[V.malStatusWatching]:`Watching`,[V.malStatusReading]:`Reading`,[V.malStatusCompleted]:`Completed`,[V.malStatusOnHold]:`On Hold`,[V.malStatusDropped]:`Dropped`,[V.malStatusPlanToWatch]:`Plan to Watch`,[V.malStatusPlanToRead]:`Plan to Read`,[V.malNoData]:`No Data`,[V.malNoDataDescription]:`No items in this category`,[V.malEmpty]:`No Data`,[V.malEmptyReason]:`Possible reasons: username does not exist, list is private, invalid Client ID, or network issue`,[V.malFetchError]:`MyAnimeList Data Fetch Failed`,[V.malFetchErrorDesc]:`Failed to fetch data from MyAnimeList API during build. Please check the username and Client ID, and make sure the list is public.`,[V.malNotConfigured]:`MyAnimeList Not Configured`,[V.malNotConfiguredDesc]:`Please configure your MyAnimeList username and Client ID in src/config/siteConfig.ts. The list must be public.`,[V.malLastUpdated]:`Data updated on`,[V.malSeasonWinter]:`Winter`,[V.malSeasonSpring]:`Spring`,[V.malSeasonSummer]:`Summer`,[V.malSeasonFall]:`Fall`,[V.paginationFirst]:`First`,[V.paginationPrev]:`Previous`,[V.paginationNext]:`Next`,[V.paginationLast]:`Last`,[V.paginationPage]:`Page`,[V.paginationOf]:`of`,[V.paginationTotal]:`, Total`,[V.paginationRecords]:` records`,[V.paginationJump]:`Jump to page`,[V.notFound]:`404`,[V.notFoundTitle]:`Page Not Found`,[V.notFoundDescription]:`Sorry, the page you visited does not exist or has been moved.`,[V.backToHome]:`Back to Home`,[V.rss]:`RSS Feed`,[V.rssDescription]:`Subscribe to get latest updates`,[V.rssSubtitle]:`Subscribe via RSS to get the latest articles and updates immediately`,[V.rssLink]:`RSS Link`,[V.rssCopyToReader]:`Copy link to your RSS reader`,[V.rssCopyLink]:`Copy Link`,[V.rssLatestPosts]:`Latest Posts`,[V.rssWhatIsRSS]:`What is RSS?`,[V.rssWhatIsRSSDescription]:`RSS (Really Simple Syndication) is a standard format for publishing frequently updated content. With RSS, you can:`,[V.rssBenefit1]:`Get the latest website content in time without manually visiting`,[V.rssBenefit2]:`Manage subscriptions to multiple websites in one place`,[V.rssBenefit3]:`Avoid missing important updates and articles`,[V.rssBenefit4]:`Enjoy an ad-free, clean reading experience`,[V.rssHowToUse]:`It is recommended to use Feedly, Inoreader or other RSS readers to subscribe to this site.`,[V.rssCopied]:`RSS link copied to clipboard!`,[V.rssCopyFailed]:`Copy failed, please copy the link manually`,[V.atom]:`Atom Feed`,[V.atomDescription]:`Subscribe to get latest updates`,[V.atomSubtitle]:`Subscribe via Atom to get the latest articles and updates immediately`,[V.atomLink]:`Atom Link`,[V.atomCopyToReader]:`Copy link to your Atom reader`,[V.atomCopied]:`Atom link copied to clipboard!`,[V.lastModifiedPrefix]:`Last updated on `,[V.lastModifiedOutdated]:`Some content may be outdated`,[V.lastModifiedDaysAgo]:`{days} days ago`,[V.year]:`year`,[V.month]:`month`,[V.day]:`day`,[V.hour]:`hour`,[V.minute]:`minute`,[V.second]:`second`,[V.pageViews]:`Views`,[V.pageViewsLoading]:`Loading...`,[V.pageViewsError]:`Stats unavailable`,[V.pinned]:`Pinned`,[V.relatedPosts]:`Related Posts`,[V.randomPosts]:`Random Posts`,[V.smartRecommend]:`Smart`,[V.randomRecommend]:`Random`,[V.noRelatedPosts]:`No related posts`,[V.noRandomPosts]:`No random posts`,[V.series]:`Series`,[V.seriesPartOf]:`Part of series`,[V.seriesPart]:`Part {n}`,[V.seriesThisArticle]:`This article`,[V.noSeries]:`No series yet`,[V.postEncrypted]:`This post is encrypted`,[V.wallpaperMode]:`Wallpaper Mode`,[V.wallpaperBannerMode]:`Banner Wallpaper`,[V.wallpaperFullscreenMode]:`Fullscreen Wallpaper`,[V.fullscreenLayout]:`Fullscreen Layout`,[V.fullscreenClassicLayout]:`Classic`,[V.fullscreenHeroLayout]:`Hero`,[V.wallpaperOverlayMode]:`Overlay Wallpaper`,[V.wallpaperNoneMode]:`None Wallpaper`,[V.wallpaperSettings]:`Wallpaper Settings`,[V.wallpaperTitle]:`Home Wallpaper Title`,[V.wallpaperCarousel]:`Wallpaper Carousel`,[V.wavesAnimation]:`Waves Animation`,[V.gradientTransition]:`Gradient Transition`,[V.sakuraEffect]:`Sakura Effect`,[V.effectsSettings]:`Effects Settings`,[V.overlaySettings]:`Transparency Settings`,[V.overlayOpacity]:`Wallpaper Opacity`,[V.overlayBlur]:`Background Blur`,[V.overlayCardOpacity]:`Card Opacity`,[V.settingsTabAppearance]:`Appearance`,[V.settingsTabWallpaper]:`Wallpaper`,[V.settingsTabEffects]:`Effects`,[V.cardSettings]:`Card Style`,[V.cardBorder]:`Card Border & Shadow`,[V.cardFollowTheme]:`Card Follow Theme Color`,[V.postListLayout]:`Post List Layout`,[V.postListLayoutList]:`List`,[V.postListLayoutGrid]:`Grid`,[V.sponsor]:`Sponsor`,[V.sponsorTitle]:`Support Me`,[V.sponsorDescription]:`If my content has been helpful to you, welcome to sponsor me through the following methods. Your support is the driving force for my continued creation!`,[V.sponsorMethods]:`Payment Methods`,[V.sponsorList]:`Sponsors`,[V.sponsorEmpty]:`No sponsors yet`,[V.sponsorAmount]:`Amount`,[V.sponsorDate]:`Date`,[V.sponsorMessage]:`Message`,[V.sponsorAnonymous]:`Anonymous`,[V.scanToSponsor]:`Scan to Sponsor`,[V.sponsorGoTo]:`Go to Sponsor`,[V.sponsorButton]:`Support & Share`,[V.sponsorButtonText]:`If this article helped you, please share or support!`,[V.shareOnSocial]:`Share Article`,[V.shareOnSocialDescription]:`If this article helped you, please share it with others!`,[V.siteStats]:`Site Statistics`,[V.siteStatsPostCount]:`Posts`,[V.siteStatsDynamicCount]:`Moments`,[V.siteStatsCategoryCount]:`Categories`,[V.siteStatsTagCount]:`Tags`,[V.siteStatsTotalWords]:`Total Words`,[V.siteStatsRunningDays]:`Running Days`,[V.siteStatsLastUpdate]:`Last Activity`,[V.siteStatsDaysAgo]:`{days} days ago`,[V.siteStatsDays]:`{days} days`,[V.today]:`Today`,[V.siteInfo]:`Site Info`,[V.siteInfoBuildTime]:`Build Time`,[V.siteInfoBuildPlatform]:`Build Platform`,[V.siteInfoBlogVersion]:`Blog Version`,[V.siteInfoAstroVersion]:`Astro Version`,[V.siteInfoNodeVersion]:`Node Version`,[V.siteInfoPnpmVersion]:`pnpm Version`,[V.siteInfoSystem]:`System`,[V.siteInfoExpand]:`Show build info`,[V.siteInfoCollapse]:`Hide build info`,[V.siteInfoDomain]:`Domain`,[V.siteInfoLicense]:`License`,[V.calendarSunday]:`Sun`,[V.calendarMonday]:`Mon`,[V.calendarTuesday]:`Tue`,[V.calendarWednesday]:`Wed`,[V.calendarThursday]:`Thu`,[V.calendarFriday]:`Fri`,[V.calendarSaturday]:`Sat`,[V.calendarJanuary]:`Jan`,[V.calendarFebruary]:`Feb`,[V.calendarMarch]:`Mar`,[V.calendarApril]:`Apr`,[V.calendarMay]:`May`,[V.calendarJune]:`Jun`,[V.calendarJuly]:`Jul`,[V.calendarAugust]:`Aug`,[V.calendarSeptember]:`Sep`,[V.calendarOctober]:`Oct`,[V.calendarNovember]:`Nov`,[V.calendarDecember]:`Dec`,[V.calendar]:`Site Calendar`,[V.calendarHeatmapWeek]:`Week {week} of {month}, {count} posts`,[V.advertisement]:`Advertisement`,[V.shareArticle]:`Share`,[V.generatingPoster]:`Generating Poster...`,[V.copied]:`Copied`,[V.copyLink]:`Copy Link`,[V.savePoster]:`Save Poster`,[V.scanToRead]:`Scan to Read`,[V.codeCollapsibleShowMore]:`Show more`,[V.codeCollapsibleShowLess]:`Show less`,[V.codeCollapsibleExpanded]:`Code block expanded`,[V.codeCollapsibleCollapsed]:`Code block collapsed`,[V.gallery]:`Gallery`,[V.galleryDescription]:`Capturing beautiful moments in life`,[V.galleryPhotos]:`photos`,[V.galleryAlbums]:`albums`,[V.galleryNoAlbums]:`No albums yet`,[V.galleryBackToAlbums]:`Back to albums`,[V.galleryEnterAlbum]:`Enter album`,[V.searchAlbums]:`Search albums...`,[V.passwordProtected]:`Password Protected`,[V.passwordProtectedDesc]:`This content is password protected. Please enter the password to view.`,[V.passwordHint]:`Hint`,[V.passwordPlaceholder]:`Enter password`,[V.passwordSubmit]:`Unlock`,[V.passwordError]:`Incorrect password, please try again.`,[V.passwordProtectedRss]:`This article is encrypted. Please visit the website to view it.`,[V.videoPlay]:`Play background video`,[V.videoPause]:`Pause background video`,[V.videoPrev]:`Previous video`,[V.videoNext]:`Next video`,[V.videoLoadError]:`Video failed to load`,[V.immersiveReading]:`Immersive Reading`,[V.enterImmersiveReading]:`Enter Immersive Reading`,[V.exitImmersiveReading]:`Exit Immersive Reading`,[V.tocExpand]:`Expand directory`,[V.tocCollapse]:`Collapse directory`},rt={[V.home]:`ホーム`,[V.about]:`について`,[V.archive]:`アーカイブ`,[V.search]:`検索`,[V.searchNoResults]:`結果が見つかりません。`,[V.searchTypeSomething]:`検索キーワードを入力してください。`,[V.searchLoading]:`検索中...`,[V.searchSummary]:`摘要`,[V.searchContent]:`内容`,[V.searchViewMore]:`さらに結果を表示 ({count} 件)`,[V.searchClear]:`検索語をクリア`,[V.other]:`その他`,[V.navArticles]:`記事`,[V.navSocial]:`ソーシャル`,[V.navMine]:`マイ`,[V.navAbout]:`について`,[V.navLinks]:`リンク`,[V.all]:`すべて`,[V.tags]:`タグ`,[V.categories]:`カテゴリ`,[V.allCategories]:`すべてのカテゴリ`,[V.allTags]:`すべてのタグ`,[V.allSeries]:`すべてのシリーズ`,[V.recentPosts]:`最近の投稿`,[V.postList]:`投稿リスト`,[V.tableOfContents]:`目次`,[V.tocEmpty]:`このページには目次がありません`,[V.music]:`音楽`,[V.dynamic]:`つぶやき`,[V.latestDynamics]:`最新の投稿`,[V.moreDynamics]:`もっと見る`,[V.dynamicDescription]:`日々の短い思いや出来事を記録します。`,[V.dynamicEmpty]:`まだ投稿がありません`,[V.dynamicSearch]:`投稿を検索...`,[V.dynamicNoResults]:`一致する投稿がありません`,[V.dynamicLoading]:`投稿を読み込んでいます`,[V.dynamicAllYears]:`すべての年`,[V.dynamicLoadMore]:`さらに読み込む`,[V.dynamicBackToList]:`投稿一覧へ戻る`,[V.dynamicProfile]:`{name}のプロフィールを見る`,[V.dynamicPermalink]:`この投稿への固定リンク`,[V.dynamicCollapseGallery]:`閉じる`,[V.dynamicViewOriginal]:`拡大表示`,[V.dynamicPreviousImage]:`前の画像`,[V.dynamicNextImage]:`次の画像`,[V.dynamicViewImage]:`画像 {index} を表示`,[V.dynamicSelectImage]:`画像 {index} に切り替え`,[V.musicNoPlaying]:`再生中なし`,[V.musicLyrics]:`歌詞`,[V.musicVolume]:`音量`,[V.musicPlayMode]:`再生モードを切り替え`,[V.musicPrev]:`前の曲`,[V.musicNext]:`次の曲`,[V.musicPlaylist]:`プレイリスト`,[V.musicNoLyrics]:`歌詞なし`,[V.musicLoadingLyrics]:`歌詞を読み込み中...`,[V.musicFailedLyrics]:`歌詞の読み込みに失敗しました`,[V.musicNoSongs]:`曲なし`,[V.musicError]:`プレーヤーエラー`,[V.musicPlay]:`再生`,[V.musicPause]:`一時停止`,[V.musicProgress]:`再生の進捗`,[V.musicCover]:`カバー`,[V.musicNoCover]:`カバーなし`,[V.musicAudioPlayer]:`オーディオプレーヤー`,[V.announcement]:`お知らせ`,[V.announcementClose]:`閉じる`,[V.comments]:`コメント`,[V.commentSection]:`コメント欄`,[V.commentSubtitle]:`あなたの考えを共有し、みんなと議論しましょう`,[V.commentNotConfigured]:`コメントシステムが設定されていません`,[V.guestbookCommentHint]:`設定ファイルでコメントシステムをまだ有効にしていません。有効にすると、訪問者がここにメッセージを残せるようになります`,[V.friends]:`友達`,[V.friendsDescription]:`ここは私の友達です、お互いに訪問して交流することを歓迎します`,[V.searchFriends]:`友達を検索...`,[V.friendsEmpty]:`まだ友達がいません`,[V.booknav]:`ブックマーク集`,[V.booknavDescription]:`便利なサイトをカテゴリ別に集めました`,[V.searchBooknav]:`ブックマークを検索...`,[V.booknavEmpty]:`ブックマークがありません`,[V.projects]:`プロジェクト`,[V.projectsDescription]:`私が開発したプロジェクトです`,[V.projectDetails]:`詳細を見る`,[V.projectBack]:`プロジェクト一覧へ戻る`,[V.projectEmpty]:`プロジェクトはまだありません`,[V.projectSearch]:`プロジェクトを検索`,[V.projectStatusPlanning]:`計画中`,[V.projectStatusDeveloping]:`開発中`,[V.projectStatusPublished]:`公開済み`,[V.projectStatusArchived]:`アーカイブ`,[V.guestbook]:`ゲストブック`,[V.guestbookDescription]:`ここに足跡を残して、あなたの考えや提案を共有してください`,[V.untitled]:`無題`,[V.uncategorized]:`未分類`,[V.noTags]:`タグなし`,[V.postBack]:`記事一覧へ戻る`,[V.wordCount]:`語`,[V.wordsCount]:`語`,[V.minuteCount]:`分`,[V.minutesCount]:`分`,[V.postCount]:`投稿`,[V.postsCount]:`投稿`,[V.tagsCount]:`タグ`,[V.noData]:`データなし`,[V.emptyHint]:`まだ何もありません。しばらくしてからもう一度ご覧ください。`,[V.booknavEmptyHint]:`記事を読むときにブックマークすると、ここに表示されます。`,[V.friendsEmptyHint]:`まだブログフレンドがいません。リンク交換はお気軽にどうぞ。`,[V.projectEmptyHint]:`プロジェクトが追加されると、ここに表示されます。`,[V.galleryNoAlbumsHint]:`アルバムに写真を追加すると、ここに表示されます。`,[V.dynamicEmptyHint]:`まだつぶやきがありません。新しい投稿はここに表示されます。`,[V.sponsorEmptyHint]:`このサイトを最初に支援してみませんか。`,[V.themeColor]:`テーマカラー`,[V.lightMode]:`ライト`,[V.darkMode]:`ダーク`,[V.systemMode]:`システム`,[V.more]:`もっと`,[V.collapse]:`折りたたむ`,[V.author]:`著者`,[V.publishedAt]:`公開日`,[V.updatedAt]:`更新日`,[V.readTime]:`読了時間`,[V.license]:`ライセンス`,[V.bangumi]:`Bangumi`,[V.bangumiTitle]:`私のBangumi`,[V.bangumiSubtitle]:`私の二次元の旅を記録する`,[V.bangumiFilterAll]:`すべて`,[V.bangumiFilterWatched]:`見た`,[V.bangumiFilterWatching]:`視聴中`,[V.bangumiFilterWish]:`見たい`,[V.bangumiFilterOnHold]:`保留`,[V.bangumiFilterDropped]:`中断`,[V.bangumiFilterGamePlayed]:`プレイ済み`,[V.bangumiFilterGamePlaying]:`プレイ中`,[V.bangumiFilterGameWish]:`プレイしたい`,[V.bangumiFilterBookRead]:`読んだ`,[V.bangumiFilterBookReading]:`読んでいる`,[V.bangumiFilterBookWish]:`読みたい`,[V.bangumiFilterMusicListened]:`聴いた`,[V.bangumiFilterMusicListening]:`聴いている`,[V.bangumiFilterMusicWish]:`聴きたい`,[V.bangumiStatusWish]:`見たい`,[V.bangumiStatusWatched]:`見た`,[V.bangumiStatusWatching]:`視聴中`,[V.bangumiStatusOnHold]:`保留`,[V.bangumiStatusDropped]:`中断`,[V.bangumiStatusGameWish]:`プレイしたい`,[V.bangumiStatusGamePlayed]:`プレイ済み`,[V.bangumiStatusGamePlaying]:`プレイ中`,[V.bangumiStatusBookWish]:`読みたい`,[V.bangumiStatusBookRead]:`読んだ`,[V.bangumiStatusBookReading]:`読んでいる`,[V.bangumiStatusMusicWish]:`聴きたい`,[V.bangumiStatusMusicListened]:`聴いた`,[V.bangumiStatusMusicListening]:`聴いている`,[V.bangumiStatusUnknown]:`不明`,[V.bangumiNoData]:`データなし`,[V.bangumiNoDataDescription]:`このカテゴリに項目がありません`,[V.bangumiEmpty]:`データなし`,[V.bangumiEmptyReason]:`考えられる理由：ユーザー名が存在しない、ネットワーク接続の問題、またはAPI制限`,[V.bangumiFetchError]:`Bangumi データ取得失敗`,[V.bangumiFetchErrorDesc]:`ビルド時に Bangumi API からのデータ取得に失敗しました。このページは一時的に利用できません。`,[V.bangumiUsername]:`ユーザー名`,[V.bangumiApi]:`API`,[V.bangumiConfigTip]:`ヒント：ページ設定で正しいBangumiユーザー名を設定してください`,[V.bangumiPrevPage]:`前へ`,[V.bangumiNextPage]:`次へ`,[V.bangumiCurrentPage]:`ページ`,[V.bangumiTotalPages]:`の`,[V.bangumiPage]:`ページ`,[V.bangumiCategoryBook]:`本`,[V.bangumiCategoryAnime]:`アニメ`,[V.bangumiCategoryMusic]:`音楽`,[V.bangumiCategoryGame]:`ゲーム`,[V.bangumiCategoryReal]:`実写`,[V.bangumiLastUpdated]:`データ更新日`,[V.bangumiUpdatedAt]:`ビルド時間`,[V.bangumiDataStatic]:`静的データ`,[V.vndb]:`VNDB`,[V.vndbSubtitle]:`私のビジュアルノベルリスト`,[V.vndbFilterAll]:`すべて`,[V.vndbFilterVoted]:`評価済み`,[V.vndbFilterUnvoted]:`未評価`,[V.vndbFilterNotes]:`ノートあり`,[V.vndbStatusWishlist]:`プレイしたい`,[V.vndbStatusPlaying]:`プレイ中`,[V.vndbStatusFinished]:`プレイ済み`,[V.vndbStatusStalled]:`保留`,[V.vndbStatusDropped]:`中断`,[V.vndbStatusUnknown]:`不明`,[V.vndbNoData]:`データなし`,[V.vndbNoDataDescription]:`このカテゴリに項目がありません`,[V.vndbEmpty]:`データなし`,[V.vndbEmptyReason]:`考えられる理由：ユーザーIDが存在しない、リストが非公開、ネットワーク接続の問題、またはAPI制限`,[V.vndbFetchError]:`VNDB データ取得失敗`,[V.vndbFetchErrorDesc]:`ビルド時に VNDB API からのデータ取得に失敗しました。このページは一時的に利用できません。`,[V.vndbNotConfigured]:`VNDB ユーザーIDが未設定です`,[V.vndbNotConfiguredDesc]:`src/config/siteConfig.ts で VNDB ユーザーIDを設定してください`,[V.vndbLastUpdated]:`データ更新日`,[V.vndbVotes]:`票`,[V.vndbLengthVeryShort]:`非常に短い`,[V.vndbLengthShort]:`短い`,[V.vndbLengthMedium]:`中程度`,[V.vndbLengthLong]:`長い`,[V.vndbLengthVeryLong]:`非常に長い`,[V.bilibili]:`Bilibili`,[V.bilibiliSubtitle]:`私のBilibili追番・追劇リスト`,[V.bilibiliNotConfigured]:`Bilibiliデータソースが未設定`,[V.bilibiliNotConfiguredDesc]:`src/config/siteConfig.ts で bilibili.uid を設定してください`,[V.animeTotal]:`合計`,[V.animeAverageRating]:`平均評価`,[V.animeSearch]:`アニメを検索...`,[V.animeAllTypes]:`すべて`,[V.animeTV]:`TV アニメ`,[V.animeMovie]:`映画`,[V.animeRatingDesc]:`評価が高い順`,[V.animeRatingAsc]:`評価が低い順`,[V.animeDateDesc]:`新しい順`,[V.animeDateAsc]:`古い順`,[V.animeNoResults]:`一致するアニメが見つかりません`,[V.animeLastUpdated]:`データ更新日`,[V.animeEpStatus]:`進捗`,[V.animeViewDetails]:`詳細を見る`,[V.animeBilibiliAvg]:`Bilibili 平均`,[V.animeNoOverview]:`あらすじなし`,[V.animeClose]:`閉じる`,[V.animeSynopsis]:`あらすじ`,[V.animeWatchNow]:`今すぐ視聴`,[V.animeAllWithCount]:`すべて ({count})`,[V.animeTVWithCount]:`TV ({count})`,[V.animeMovieWithCount]:`映画 ({count})`,[V.animeTypeAnime]:`アニメ`,[V.animeTypeMovie]:`映画`,[V.animeTypeDocumentary]:`ドキュメンタリー`,[V.animeTypeChinese]:`中国アニメ`,[V.animeTypeDrama]:`ドラマ`,[V.animeTypeConcert]:`コンサート`,[V.mal]:`MyAnimeList`,[V.malSubtitle]:`私の MyAnimeList アニメ・マンガリスト`,[V.malCategoryAnime]:`アニメ`,[V.malCategoryManga]:`マンガ`,[V.malFilterAll]:`すべて`,[V.malStatusWatching]:`視聴中`,[V.malStatusReading]:`読んでいる`,[V.malStatusCompleted]:`見た`,[V.malStatusOnHold]:`保留`,[V.malStatusDropped]:`中断`,[V.malStatusPlanToWatch]:`見たい`,[V.malStatusPlanToRead]:`読みたい`,[V.malNoData]:`データなし`,[V.malNoDataDescription]:`このカテゴリに項目がありません`,[V.malEmpty]:`データなし`,[V.malEmptyReason]:`考えられる理由：ユーザー名が存在しない、リストが非公開、Client ID が無効、またはネットワーク接続の問題`,[V.malFetchError]:`MyAnimeList データ取得失敗`,[V.malFetchErrorDesc]:`ビルド時に MyAnimeList API からのデータ取得に失敗しました。ユーザー名と Client ID を確認し、リストが公開であることを確認してください。`,[V.malNotConfigured]:`MyAnimeList が未設定です`,[V.malNotConfiguredDesc]:`src/config/siteConfig.ts で MyAnimeList のユーザー名と Client ID を設定してください（リストは公開にする必要があります）`,[V.malLastUpdated]:`データ更新日`,[V.malSeasonWinter]:`冬`,[V.malSeasonSpring]:`春`,[V.malSeasonSummer]:`夏`,[V.malSeasonFall]:`秋`,[V.paginationFirst]:`最初`,[V.paginationPrev]:`前へ`,[V.paginationNext]:`次へ`,[V.paginationLast]:`最後`,[V.paginationPage]:`ページ`,[V.paginationOf]:`ページ、全`,[V.paginationTotal]:`ページ、合計`,[V.paginationRecords]:`件`,[V.paginationJump]:`指定ページへ移動`,[V.notFound]:`404`,[V.notFoundTitle]:`ページが見つかりません`,[V.notFoundDescription]:`申し訳ありませんが、アクセスしたページは存在しないか、移動されています。`,[V.backToHome]:`ホームに戻る`,[V.rss]:`RSSフィード`,[V.rssDescription]:`最新の更新を購読する`,[V.rssSubtitle]:`RSSで購読して、最新の記事と更新を第一时间で取得する`,[V.rssLink]:`RSSリンク`,[V.rssCopyToReader]:`RSSリンクをリーダーにコピー`,[V.rssCopyLink]:`リンクをコピー`,[V.rssLatestPosts]:`最新の投稿`,[V.rssWhatIsRSS]:`RSSとは？`,[V.rssWhatIsRSSDescription]:`RSS（Really Simple Syndication）は、頻繁に更新されるコンテンツを公開するための標準形式です。RSSを使用すると：`,[V.rssBenefit1]:`手動で訪問することなく、最新のウェブサイトコンテンツを及时に取得`,[V.rssBenefit2]:`1か所で複数のウェブサイトの購読を管理`,[V.rssBenefit3]:`重要な更新や記事を見逃すことを回避`,[V.rssBenefit4]:`広告なしのクリーンな読書体験を楽しむ`,[V.rssHowToUse]:`Feedly、Inoreaderまたは他のRSSリーダーを使用してこのサイトを購読することを推奨します。`,[V.rssCopied]:`RSSリンクがクリップボードにコピーされました！`,[V.rssCopyFailed]:`コピーに失敗しました。手動でリンクをコピーしてください`,[V.atom]:`Atom フィード`,[V.atomDescription]:`最新の更新を購読`,[V.atomSubtitle]:`Atom で購読すると、最新の記事と更新をすぐに受け取れます`,[V.atomLink]:`Atom リンク`,[V.atomCopyToReader]:`Atom リーダーにリンクをコピー`,[V.atomCopied]:`Atom リンクをクリップボードにコピーしました！`,[V.lastModifiedPrefix]:`最終更新日：`,[V.lastModifiedOutdated]:`一部の内容が古くなっている可能性があります`,[V.lastModifiedDaysAgo]:`{days}日前`,[V.year]:`年`,[V.month]:`月`,[V.day]:`日`,[V.hour]:`時`,[V.minute]:`分`,[V.second]:`秒`,[V.pageViews]:`閲覧数`,[V.pageViewsLoading]:`読み込み中...`,[V.pageViewsError]:`統計利用不可`,[V.pinned]:`ピン留め`,[V.relatedPosts]:`関連記事`,[V.randomPosts]:`ランダム記事`,[V.smartRecommend]:`スマート`,[V.randomRecommend]:`ランダム`,[V.noRelatedPosts]:`関連記事がありません`,[V.noRandomPosts]:`ランダム記事がありません`,[V.series]:`シリーズ`,[V.seriesPartOf]:`シリーズの一部`,[V.seriesPart]:`パート {n}`,[V.seriesThisArticle]:`この記事`,[V.noSeries]:`シリーズはありません`,[V.postEncrypted]:`この記事は暗号化されています`,[V.wallpaperMode]:`壁紙モード`,[V.wallpaperBannerMode]:`バナー壁紙`,[V.wallpaperFullscreenMode]:`フルスクリーン壁紙`,[V.fullscreenLayout]:`フルスクリーンレイアウト`,[V.fullscreenClassicLayout]:`クラシック`,[V.fullscreenHeroLayout]:`ヒーロー`,[V.wallpaperOverlayMode]:`透明`,[V.wallpaperNoneMode]:`単色背景`,[V.wallpaperSettings]:`壁紙設定`,[V.wallpaperTitle]:`ホーム壁紙タイトル`,[V.wallpaperCarousel]:`壁紙カルーセル`,[V.wavesAnimation]:`波アニメーション`,[V.gradientTransition]:`グラデーション遷移`,[V.sakuraEffect]:`桜エフェクト`,[V.effectsSettings]:`エフェクト設定`,[V.overlaySettings]:`透明設定`,[V.overlayOpacity]:`壁紙の透明度`,[V.overlayBlur]:`背景ぼかし`,[V.overlayCardOpacity]:`カード透明度`,[V.settingsTabAppearance]:`外観`,[V.settingsTabWallpaper]:`壁紙`,[V.settingsTabEffects]:`エフェクト`,[V.cardSettings]:`カードスタイル`,[V.cardBorder]:`カードのボーダーと影`,[V.cardFollowTheme]:`カードのテーマカラー追随`,[V.postListLayout]:`投稿リストレイアウト`,[V.postListLayoutList]:`リスト`,[V.postListLayoutGrid]:`グリッド`,[V.sponsor]:`スポンサー`,[V.sponsorTitle]:`サポート`,[V.sponsorDescription]:`私のコンテンツがあなたの役に立ったなら、以下の方法で私をスポンサーしてください。あなたのサポートは私の継続的な創作の原動力です！`,[V.sponsorMethods]:`支払い方法`,[V.sponsorList]:`スポンサーリスト`,[V.sponsorEmpty]:`スポンサー記録なし`,[V.sponsorAmount]:`金額`,[V.sponsorDate]:`日付`,[V.sponsorMessage]:`メッセージ`,[V.sponsorAnonymous]:`匿名`,[V.scanToSponsor]:`スキャンしてスポンサー`,[V.sponsorGoTo]:`スポンサーへ`,[V.sponsorButton]:`サポートと共有`,[V.sponsorButtonText]:`この記事が役に立ったなら、共有またはサポートをお願いします！`,[V.shareOnSocial]:`記事を共有`,[V.shareOnSocialDescription]:`この記事が役に立ったなら、ぜひ他の人と共有してください！`,[V.siteStats]:`サイト統計`,[V.siteStatsPostCount]:`記事`,[V.siteStatsDynamicCount]:`投稿`,[V.siteStatsCategoryCount]:`カテゴリー`,[V.siteStatsTagCount]:`タグ`,[V.siteStatsTotalWords]:`総文字数`,[V.siteStatsRunningDays]:`運用日数`,[V.siteStatsLastUpdate]:`最終活動`,[V.siteStatsDaysAgo]:`{days} 日前`,[V.siteStatsDays]:`{days} 日`,[V.today]:`今日`,[V.siteInfo]:`サイト情報`,[V.siteInfoBuildTime]:`ビルド日時`,[V.siteInfoBuildPlatform]:`ビルドプラットフォーム`,[V.siteInfoBlogVersion]:`ブログバージョン`,[V.siteInfoAstroVersion]:`Astro バージョン`,[V.siteInfoNodeVersion]:`Node バージョン`,[V.siteInfoPnpmVersion]:`pnpm バージョン`,[V.siteInfoSystem]:`システム情報`,[V.siteInfoExpand]:`ビルド情報を展開`,[V.siteInfoCollapse]:`ビルド情報を折畳む`,[V.siteInfoDomain]:`ドメイン`,[V.siteInfoLicense]:`ライセンス`,[V.calendarSunday]:`日`,[V.calendarMonday]:`月`,[V.calendarTuesday]:`火`,[V.calendarWednesday]:`水`,[V.calendarThursday]:`木`,[V.calendarFriday]:`金`,[V.calendarSaturday]:`土`,[V.calendarJanuary]:`1月`,[V.calendarFebruary]:`2月`,[V.calendarMarch]:`3月`,[V.calendarApril]:`4月`,[V.calendarMay]:`5月`,[V.calendarJune]:`6月`,[V.calendarJuly]:`7月`,[V.calendarAugust]:`8月`,[V.calendarSeptember]:`9月`,[V.calendarOctober]:`10月`,[V.calendarNovember]:`11月`,[V.calendarDecember]:`12月`,[V.calendar]:`サイトカレンダー`,[V.calendarHeatmapWeek]:`{month}月第{week}週、{count}記事`,[V.advertisement]:`広告`,[V.shareArticle]:`共有`,[V.generatingPoster]:`ポスター生成中...`,[V.copied]:`コピーしました`,[V.copyLink]:`リンクをコピー`,[V.savePoster]:`ポスターを保存`,[V.scanToRead]:`QRコードで読む`,[V.codeCollapsibleShowMore]:`展開する`,[V.codeCollapsibleShowLess]:`折りたたむ`,[V.codeCollapsibleExpanded]:`コードブロックが展開されました`,[V.codeCollapsibleCollapsed]:`コードブロックが折りたたまれました`,[V.gallery]:`ギャラリー`,[V.galleryDescription]:`人生の美しい瞬間を記録する`,[V.galleryPhotos]:`枚の写真`,[V.galleryAlbums]:`冊のアルバム`,[V.galleryNoAlbums]:`アルバムがありません`,[V.galleryBackToAlbums]:`アルバム一覧に戻る`,[V.galleryEnterAlbum]:`アルバムを見る`,[V.searchAlbums]:`アルバムを検索...`,[V.passwordProtected]:`パスワード保護`,[V.passwordProtectedDesc]:`このコンテンツはパスワードで保護されています。表示するにはパスワードを入力してください。`,[V.passwordHint]:`ヒント`,[V.passwordPlaceholder]:`パスワードを入力`,[V.passwordSubmit]:`ロック解除`,[V.passwordError]:`パスワードが間違っています。もう一度お試しください。`,[V.passwordProtectedRss]:`この記事は暗号化されています。ウェブサイトにアクセスしてご覧ください。`,[V.videoPlay]:`背景動画を再生`,[V.videoPause]:`背景動画を一時停止`,[V.videoPrev]:`前の動画`,[V.videoNext]:`次の動画`,[V.videoLoadError]:`動画の読み込みに失敗しました`,[V.immersiveReading]:`没入型リーディング`,[V.enterImmersiveReading]:`没入型リーディングに入る`,[V.exitImmersiveReading]:`没入型リーディングを終了する`,[V.tocExpand]:`目錄を開く`,[V.tocCollapse]:`目錄をたたむ`},it={[V.home]:`홈`,[V.about]:`소개`,[V.archive]:`아카이브`,[V.search]:`검색`,[V.searchNoResults]:`검색 결과가 없습니다.`,[V.searchTypeSomething]:`검색어를 입력하세요...`,[V.searchLoading]:`검색 중...`,[V.searchSummary]:`요약`,[V.searchContent]:`내용`,[V.searchViewMore]:`더 많은 결과 보기 ({count}개 더)`,[V.searchClear]:`검색어 지우기`,[V.other]:`기타`,[V.navArticles]:`글`,[V.navSocial]:`소셜`,[V.navMine]:`마이`,[V.navAbout]:`소개`,[V.navLinks]:`링크`,[V.all]:`전체`,[V.tags]:`태그`,[V.categories]:`카테고리`,[V.allCategories]:`모든 카테고리`,[V.allTags]:`모든 태그`,[V.allSeries]:`모든 시리즈`,[V.recentPosts]:`최근 게시글`,[V.postList]:`게시글 목록`,[V.tableOfContents]:`목차`,[V.tocEmpty]:`이 페이지에는 목차가 없습니다`,[V.music]:`음악`,[V.dynamic]:`일상`,[V.latestDynamics]:`최신 일상`,[V.moreDynamics]:`더 많은 일상`,[V.dynamicDescription]:`짧은 생각과 일상을 기록합니다.`,[V.dynamicEmpty]:`아직 게시된 일상이 없습니다`,[V.dynamicSearch]:`일상 검색...`,[V.dynamicNoResults]:`일치하는 일상이 없습니다`,[V.dynamicLoading]:`일상을 불러오는 중`,[V.dynamicAllYears]:`모든 연도`,[V.dynamicLoadMore]:`더 보기`,[V.dynamicBackToList]:`일상 목록으로`,[V.dynamicProfile]:`{name}님의 프로필 보기`,[V.dynamicPermalink]:`이 일상의 고유 링크`,[V.dynamicCollapseGallery]:`접기`,[V.dynamicViewOriginal]:`크게 보기`,[V.dynamicPreviousImage]:`이전 이미지`,[V.dynamicNextImage]:`다음 이미지`,[V.dynamicViewImage]:`이미지 {index} 보기`,[V.dynamicSelectImage]:`이미지 {index} 선택`,[V.musicNoPlaying]:`재생 중인 곡 없음`,[V.musicLyrics]:`가사`,[V.musicVolume]:`볼륨`,[V.musicPlayMode]:`재생 모드 전환`,[V.musicPrev]:`이전 곡`,[V.musicNext]:`다음 곡`,[V.musicPlaylist]:`재생목록`,[V.musicNoLyrics]:`가사 없음`,[V.musicLoadingLyrics]:`가사 불러오는 중...`,[V.musicFailedLyrics]:`가사를 불러오지 못했습니다`,[V.musicNoSongs]:`곡 없음`,[V.musicError]:`플레이어 오류`,[V.musicPlay]:`재생`,[V.musicPause]:`일시정지`,[V.musicProgress]:`재생 진행률`,[V.musicCover]:`커버`,[V.musicNoCover]:`커버 이미지 없음`,[V.musicAudioPlayer]:`오디오 플레이어`,[V.announcement]:`공지사항`,[V.announcementClose]:`닫기`,[V.comments]:`댓글`,[V.commentSection]:`댓글`,[V.commentSubtitle]:`생각을 공유하고 모두와 이야기해 보세요`,[V.commentNotConfigured]:`댓글 시스템이 설정되지 않았습니다`,[V.guestbookCommentHint]:`설정 파일에서 댓글 시스템을 아직 활성화하지 않았습니다. 활성화하면 방문자가 이곳에 메시지를 남길 수 있습니다`,[V.friends]:`친구`,[V.friendsDescription]:`여기는 제 친구들입니다. 방문하여 서로 교류해 보세요`,[V.searchFriends]:`친구 검색...`,[V.friendsEmpty]:`아직 친구가 없습니다.`,[V.booknav]:`북마크 모음`,[V.booknavDescription]:`유용한 사이트를 카테고리별로 모았습니다.`,[V.searchBooknav]:`북마크 검색...`,[V.booknavEmpty]:`북마크가 없습니다.`,[V.projects]:`프로젝트`,[V.projectsDescription]:`제가 개발한 프로젝트입니다`,[V.projectDetails]:`자세히 보기`,[V.projectBack]:`프로젝트 목록으로 돌아가기`,[V.projectEmpty]:`아직 프로젝트가 없습니다`,[V.projectSearch]:`프로젝트 검색`,[V.projectStatusPlanning]:`계획 중`,[V.projectStatusDeveloping]:`개발 중`,[V.projectStatusPublished]:`출시됨`,[V.projectStatusArchived]:`보관됨`,[V.guestbook]:`방명록`,[V.guestbookDescription]:`이곳에 흔적을 남기고 생각과 제안을 공유해 주세요`,[V.untitled]:`제목 없음`,[V.uncategorized]:`미분류`,[V.noTags]:`태그 없음`,[V.postBack]:`게시글 목록으로 돌아가기`,[V.wordCount]:`단어`,[V.wordsCount]:`단어`,[V.minuteCount]:`분`,[V.minutesCount]:`분`,[V.postCount]:`게시글`,[V.postsCount]:`게시글`,[V.tagsCount]:`태그`,[V.noData]:`데이터 없음`,[V.emptyHint]:`아직 아무것도 없습니다. 잠시 후 다시 확인해 주세요.`,[V.booknavEmptyHint]:`글을 읽으며 북마크하면 여기에 표시됩니다.`,[V.friendsEmptyHint]:`아직 블로그 친구가 없습니다. 링크 교환은 언제든 환영합니다.`,[V.projectEmptyHint]:`프로젝트가 추가되면 여기에 표시됩니다.`,[V.galleryNoAlbumsHint]:`앨범에 사진을 추가하면 여기에 표시됩니다.`,[V.dynamicEmptyHint]:`아직 소식이 없습니다. 새 소식이 여기에 표시됩니다.`,[V.sponsorEmptyHint]:`이 사이트를 처음으로 후원해 보세요.`,[V.themeColor]:`테마 색상`,[V.lightMode]:`라이트`,[V.darkMode]:`다크`,[V.systemMode]:`시스템`,[V.more]:`더 보기`,[V.collapse]:`접기`,[V.author]:`작성자`,[V.publishedAt]:`게시일`,[V.updatedAt]:`수정일`,[V.readTime]:`읽는 시간`,[V.license]:`라이선스`,[V.bangumi]:`Bangumi`,[V.bangumiTitle]:`나의 Bangumi`,[V.bangumiSubtitle]:`나의 ACG 기록`,[V.bangumiFilterAll]:`전체`,[V.bangumiFilterWatched]:`시청 완료`,[V.bangumiFilterWatching]:`시청 중`,[V.bangumiFilterWish]:`보고 싶음`,[V.bangumiFilterOnHold]:`보류`,[V.bangumiFilterDropped]:`중단`,[V.bangumiFilterGamePlayed]:`플레이 완료`,[V.bangumiFilterGamePlaying]:`플레이 중`,[V.bangumiFilterGameWish]:`플레이하고 싶음`,[V.bangumiFilterBookRead]:`읽음`,[V.bangumiFilterBookReading]:`읽는 중`,[V.bangumiFilterBookWish]:`읽고 싶음`,[V.bangumiFilterMusicListened]:`감상 완료`,[V.bangumiFilterMusicListening]:`감상 중`,[V.bangumiFilterMusicWish]:`감상하고 싶음`,[V.bangumiStatusWish]:`보고 싶음`,[V.bangumiStatusWatched]:`시청 완료`,[V.bangumiStatusWatching]:`시청 중`,[V.bangumiStatusOnHold]:`보류`,[V.bangumiStatusDropped]:`중단`,[V.bangumiStatusGameWish]:`플레이하고 싶음`,[V.bangumiStatusGamePlayed]:`플레이 완료`,[V.bangumiStatusGamePlaying]:`플레이 중`,[V.bangumiStatusBookWish]:`읽고 싶음`,[V.bangumiStatusBookRead]:`읽음`,[V.bangumiStatusBookReading]:`읽는 중`,[V.bangumiStatusMusicWish]:`감상하고 싶음`,[V.bangumiStatusMusicListened]:`감상 완료`,[V.bangumiStatusMusicListening]:`감상 중`,[V.bangumiStatusUnknown]:`알 수 없음`,[V.bangumiNoData]:`데이터 없음`,[V.bangumiNoDataDescription]:`이 카테고리에는 항목이 없습니다`,[V.bangumiEmpty]:`데이터 없음`,[V.bangumiEmptyReason]:`가능한 원인: 사용자 이름이 존재하지 않음, 네트워크 연결 문제, 또는 API 호출 제한`,[V.bangumiFetchError]:`반구미 데이터 가져오기 실패`,[V.bangumiFetchErrorDesc]:`빌드 중 반구미 API에서 데이터를 가져오지 못했습니다. 이 페이지는 일시적으로 사용할 수 없습니다.`,[V.bangumiUsername]:`사용자 이름`,[V.bangumiApi]:`API`,[V.bangumiConfigTip]:`팁: 페이지 설정에서 올바른 반구미 사용자 이름을 설정하세요`,[V.bangumiPrevPage]:`이전`,[V.bangumiNextPage]:`다음`,[V.bangumiCurrentPage]:`페이지`,[V.bangumiTotalPages]:`/`,[V.bangumiPage]:`페이지`,[V.bangumiCategoryBook]:`책`,[V.bangumiCategoryAnime]:`애니메이션`,[V.bangumiCategoryMusic]:`음악`,[V.bangumiCategoryGame]:`게임`,[V.bangumiCategoryReal]:`실사`,[V.bangumiLastUpdated]:`데이터 업데이트 날짜`,[V.bangumiUpdatedAt]:`빌드 시각`,[V.bangumiDataStatic]:`정적 데이터`,[V.vndb]:`VNDB`,[V.vndbSubtitle]:`내 VNDB 비주얼 노벨 목록`,[V.vndbFilterAll]:`전체`,[V.vndbFilterVoted]:`평가함`,[V.vndbFilterUnvoted]:`미평가`,[V.vndbFilterNotes]:`메모 있음`,[V.vndbStatusWishlist]:`플레이하고 싶음`,[V.vndbStatusPlaying]:`플레이 중`,[V.vndbStatusFinished]:`플레이 완료`,[V.vndbStatusStalled]:`보류`,[V.vndbStatusDropped]:`중단`,[V.vndbStatusUnknown]:`알 수 없음`,[V.vndbNoData]:`데이터 없음`,[V.vndbNoDataDescription]:`이 카테고리에는 항목이 없습니다`,[V.vndbEmpty]:`데이터 없음`,[V.vndbEmptyReason]:`가능한 원인: 사용자 ID가 존재하지 않음, 목록이 비공개, 네트워크 연결 문제, 또는 API 호출 제한`,[V.vndbFetchError]:`VNDB 데이터 가져오기 실패`,[V.vndbFetchErrorDesc]:`빌드 중 VNDB API에서 데이터를 가져오지 못했습니다. 이 페이지는 일시적으로 사용할 수 없습니다.`,[V.vndbNotConfigured]:`VNDB 사용자 ID가 설정되지 않았습니다`,[V.vndbNotConfiguredDesc]:`src/config/siteConfig.ts에서 VNDB 사용자 ID를 설정하세요`,[V.vndbLastUpdated]:`데이터 업데이트 날짜`,[V.vndbVotes]:`표`,[V.vndbLengthVeryShort]:`매우 짧음`,[V.vndbLengthShort]:`짧음`,[V.vndbLengthMedium]:`중간`,[V.vndbLengthLong]:`김`,[V.vndbLengthVeryLong]:`매우 김`,[V.bilibili]:`Bilibili`,[V.bilibiliSubtitle]:`저의 Bilibili 시청 목록 (애니메이션 + 드라마)`,[V.bilibiliNotConfigured]:`Bilibili 데이터 소스가 설정되지 않았습니다`,[V.bilibiliNotConfiguredDesc]:`src/config/siteConfig.ts에서 bilibili.uid를 설정하세요`,[V.animeTotal]:`총계`,[V.animeAverageRating]:`평균 평점`,[V.animeSearch]:`애니메이션 검색...`,[V.animeAllTypes]:`전체`,[V.animeTV]:`TV 애니메이션`,[V.animeMovie]:`극장판`,[V.animeRatingDesc]:`평점 높은 순`,[V.animeRatingAsc]:`평점 낮은 순`,[V.animeDateDesc]:`최신순`,[V.animeDateAsc]:`오래된 순`,[V.animeNoResults]:`일치하는 애니메이션이 없습니다`,[V.animeLastUpdated]:`데이터 업데이트 날짜`,[V.animeEpStatus]:`진행 상황`,[V.animeViewDetails]:`상세 보기`,[V.animeBilibiliAvg]:`Bilibili 평균`,[V.animeNoOverview]:`줄거리 정보 없음`,[V.animeClose]:`닫기`,[V.animeSynopsis]:`줄거리`,[V.animeWatchNow]:`지금 시청하기`,[V.animeAllWithCount]:`전체 ({count})`,[V.animeTVWithCount]:`TV ({count})`,[V.animeMovieWithCount]:`극장판 ({count})`,[V.animeTypeAnime]:`애니메이션`,[V.animeTypeMovie]:`극장판`,[V.animeTypeDocumentary]:`다큐멘터리`,[V.animeTypeChinese]:`중국 애니메이션`,[V.animeTypeDrama]:`드라마`,[V.animeTypeConcert]:`콘서트`,[V.mal]:`MyAnimeList`,[V.malSubtitle]:`MyAnimeList 애니메이션 및 만화 목록`,[V.malCategoryAnime]:`애니메이션`,[V.malCategoryManga]:`만화`,[V.malFilterAll]:`전체`,[V.malStatusWatching]:`시청 중`,[V.malStatusReading]:`읽는 중`,[V.malStatusCompleted]:`시청 완료`,[V.malStatusOnHold]:`보류`,[V.malStatusDropped]:`중단`,[V.malStatusPlanToWatch]:`보고 싶음`,[V.malStatusPlanToRead]:`읽고 싶음`,[V.malNoData]:`데이터 없음`,[V.malNoDataDescription]:`이 카테고리에는 항목이 없습니다`,[V.malEmpty]:`데이터 없음`,[V.malEmptyReason]:`가능한 원인: 사용자 이름이 존재하지 않음, 목록이 비공개, Client ID가 유효하지 않음, 또는 네트워크 연결 문제`,[V.malFetchError]:`MyAnimeList 데이터 가져오기 실패`,[V.malFetchErrorDesc]:`빌드 중 MyAnimeList API에서 데이터를 가져오지 못했습니다. 사용자 이름과 Client ID를 확인하고 목록이 공개인지 확인하세요.`,[V.malNotConfigured]:`MyAnimeList가 설정되지 않았습니다`,[V.malNotConfiguredDesc]:`src/config/siteConfig.ts에서 MyAnimeList 사용자 이름과 Client ID를 설정하세요 (목록은 공개여야 합니다)`,[V.malLastUpdated]:`데이터 업데이트 날짜`,[V.malSeasonWinter]:`겨울`,[V.malSeasonSpring]:`봄`,[V.malSeasonSummer]:`여름`,[V.malSeasonFall]:`가을`,[V.paginationFirst]:`처음`,[V.paginationPrev]:`이전`,[V.paginationNext]:`다음`,[V.paginationLast]:`마지막`,[V.paginationPage]:`페이지`,[V.paginationOf]:`/`,[V.paginationTotal]:`, 총`,[V.paginationRecords]:`개`,[V.paginationJump]:`지정한 페이지로 이동`,[V.notFound]:`404`,[V.notFoundTitle]:`페이지를 찾을 수 없습니다`,[V.notFoundDescription]:`죄송합니다. 방문하신 페이지가 존재하지 않거나 이동되었습니다.`,[V.backToHome]:`홈으로 돌아가기`,[V.rss]:`RSS 피드`,[V.rssDescription]:`최신 소식을 구독하세요`,[V.rssSubtitle]:`RSS를 구독하여 최신 글과 업데이트를 즉시 받아보세요`,[V.rssLink]:`RSS 링크`,[V.rssCopyToReader]:`링크를 RSS 리더기에 복사하세요`,[V.rssCopyLink]:`링크 복사`,[V.rssLatestPosts]:`최신 게시글`,[V.rssWhatIsRSS]:`RSS란 무엇인가요?`,[V.rssWhatIsRSSDescription]:`RSS(Really Simple Syndication)는 자주 업데이트되는 콘텐츠를 게시하기 위한 표준 형식입니다. RSS를 사용하면 다음이 가능합니다:`,[V.rssBenefit1]:`직접 방문하지 않고도 최신 웹사이트 콘텐츠를 제때 받아볼 수 있습니다`,[V.rssBenefit2]:`여러 웹사이트의 구독을 한 곳에서 관리할 수 있습니다`,[V.rssBenefit3]:`중요한 업데이트와 글을 놓치지 않을 수 있습니다`,[V.rssBenefit4]:`광고 없는 깔끔한 읽기 환경을 즐길 수 있습니다`,[V.rssHowToUse]:`Feedly, Inoreader 등 RSS 리더기를 사용하여 이 사이트를 구독하는 것을 권장합니다.`,[V.rssCopied]:`RSS 링크가 클립보드에 복사되었습니다!`,[V.rssCopyFailed]:`복사에 실패했습니다. 링크를 직접 복사해 주세요`,[V.atom]:`Atom 피드`,[V.atomDescription]:`최신 업데이트 구독`,[V.atomSubtitle]:`Atom으로 구독하면 최신 글과 업데이트를 바로 받을 수 있습니다`,[V.atomLink]:`Atom 링크`,[V.atomCopyToReader]:`Atom 리더에 링크 복사`,[V.atomCopied]:`Atom 링크가 클립보드에 복사되었습니다!`,[V.lastModifiedPrefix]:`마지막 업데이트: `,[V.lastModifiedOutdated]:`일부 내용이 오래되었을 수 있습니다`,[V.lastModifiedDaysAgo]:`{days}일 전`,[V.year]:`년`,[V.month]:`월`,[V.day]:`일`,[V.hour]:`시간`,[V.minute]:`분`,[V.second]:`초`,[V.pageViews]:`조회수`,[V.pageViewsLoading]:`불러오는 중...`,[V.pageViewsError]:`통계를 불러올 수 없습니다`,[V.pinned]:`고정됨`,[V.relatedPosts]:`관련 게시글`,[V.randomPosts]:`무작위 게시글`,[V.smartRecommend]:`스마트`,[V.randomRecommend]:`무작위`,[V.noRelatedPosts]:`관련 게시글이 없습니다`,[V.noRandomPosts]:`무작위 게시글이 없습니다`,[V.series]:`시리즈`,[V.seriesPartOf]:`시리즈의 일부`,[V.seriesPart]:`파트 {n}`,[V.seriesThisArticle]:`이 글`,[V.noSeries]:`시리즈가 없습니다`,[V.postEncrypted]:`이 게시글은 암호화되어 있습니다`,[V.wallpaperMode]:`배경화면 모드`,[V.wallpaperBannerMode]:`배너 배경화면`,[V.wallpaperFullscreenMode]:`전체화면 배경화면`,[V.fullscreenLayout]:`전체화면 레이아웃`,[V.fullscreenClassicLayout]:`클래식`,[V.fullscreenHeroLayout]:`히어로`,[V.wallpaperOverlayMode]:`오버레이 배경화면`,[V.wallpaperNoneMode]:`배경화면 없음`,[V.wallpaperSettings]:`배경화면 설정`,[V.wallpaperTitle]:`홈 배경화면 제목`,[V.wallpaperCarousel]:`배경화면 캐러셀`,[V.wavesAnimation]:`파도 애니메이션`,[V.gradientTransition]:`그라디언트 전환`,[V.sakuraEffect]:`벚꽃 효과`,[V.effectsSettings]:`효과 설정`,[V.overlaySettings]:`투명도 설정`,[V.overlayOpacity]:`배경화면 불투명도`,[V.overlayBlur]:`배경 흐림`,[V.overlayCardOpacity]:`카드 불투명도`,[V.settingsTabAppearance]:`외형`,[V.settingsTabWallpaper]:`배경화면`,[V.settingsTabEffects]:`효과`,[V.cardSettings]:`카드 스타일`,[V.cardBorder]:`카드 테두리와 그림자`,[V.cardFollowTheme]:`카드 테마 색상 따르기`,[V.postListLayout]:`게시글 목록 레이아웃`,[V.postListLayoutList]:`목록형`,[V.postListLayoutGrid]:`격자형`,[V.sponsor]:`후원`,[V.sponsorTitle]:`저를 후원해 주세요`,[V.sponsorDescription]:`제 콘텐츠가 도움이 되셨다면 아래 방법으로 후원해 주세요. 여러분의 후원은 계속 창작할 수 있는 원동력이 됩니다!`,[V.sponsorMethods]:`결제 방법`,[V.sponsorList]:`후원자`,[V.sponsorEmpty]:`아직 후원자가 없습니다`,[V.sponsorAmount]:`금액`,[V.sponsorDate]:`날짜`,[V.sponsorMessage]:`메시지`,[V.sponsorAnonymous]:`익명`,[V.scanToSponsor]:`스캔하여 후원하기`,[V.sponsorGoTo]:`후원하러 가기`,[V.sponsorButton]:`응원 & 공유`,[V.sponsorButtonText]:`이 글이 도움이 되셨다면 공유하거나 후원해 주세요!`,[V.shareOnSocial]:`글 공유하기`,[V.shareOnSocialDescription]:`이 글이 도움이 되셨다면 다른 사람과 공유해 주세요!`,[V.siteStats]:`사이트 통계`,[V.siteStatsPostCount]:`게시글`,[V.siteStatsDynamicCount]:`일상`,[V.siteStatsCategoryCount]:`카테고리`,[V.siteStatsTagCount]:`태그`,[V.siteStatsTotalWords]:`총 단어 수`,[V.siteStatsRunningDays]:`운영 일수`,[V.siteStatsLastUpdate]:`최근 활동`,[V.siteStatsDaysAgo]:`{days}일 전`,[V.siteStatsDays]:`{days}일`,[V.today]:`오늘`,[V.siteInfo]:`사이트 정보`,[V.siteInfoBuildTime]:`빌드 시각`,[V.siteInfoBuildPlatform]:`빌드 플랫폼`,[V.siteInfoBlogVersion]:`블로그 버전`,[V.siteInfoAstroVersion]:`Astro 버전`,[V.siteInfoNodeVersion]:`Node 버전`,[V.siteInfoPnpmVersion]:`pnpm 버전`,[V.siteInfoSystem]:`시스템`,[V.siteInfoExpand]:`빌드 정보 표시`,[V.siteInfoCollapse]:`빌드 정보 숨기기`,[V.siteInfoDomain]:`도메인`,[V.siteInfoLicense]:`라이선스`,[V.calendarSunday]:`일`,[V.calendarMonday]:`월`,[V.calendarTuesday]:`화`,[V.calendarWednesday]:`수`,[V.calendarThursday]:`목`,[V.calendarFriday]:`금`,[V.calendarSaturday]:`토`,[V.calendarJanuary]:`1월`,[V.calendarFebruary]:`2월`,[V.calendarMarch]:`3월`,[V.calendarApril]:`4월`,[V.calendarMay]:`5월`,[V.calendarJune]:`6월`,[V.calendarJuly]:`7월`,[V.calendarAugust]:`8월`,[V.calendarSeptember]:`9월`,[V.calendarOctober]:`10월`,[V.calendarNovember]:`11월`,[V.calendarDecember]:`12월`,[V.calendar]:`사이트 캘린더`,[V.calendarHeatmapWeek]:`{month}의 {week}주차, 게시글 {count}개`,[V.advertisement]:`광고`,[V.shareArticle]:`공유`,[V.generatingPoster]:`포스터 생성 중...`,[V.copied]:`복사됨`,[V.copyLink]:`링크 복사`,[V.savePoster]:`포스터 저장`,[V.scanToRead]:`스캔하여 읽기`,[V.codeCollapsibleShowMore]:`더 보기`,[V.codeCollapsibleShowLess]:`간략히 보기`,[V.codeCollapsibleExpanded]:`코드 블록 펼쳐짐`,[V.codeCollapsibleCollapsed]:`코드 블록 접힘`,[V.gallery]:`갤러리`,[V.galleryDescription]:`삶의 아름다운 순간을 담다`,[V.galleryPhotos]:`장`,[V.galleryAlbums]:`앨범`,[V.galleryNoAlbums]:`아직 앨범이 없습니다`,[V.galleryBackToAlbums]:`앨범으로 돌아가기`,[V.galleryEnterAlbum]:`앨범 보기`,[V.searchAlbums]:`앨범 검색...`,[V.passwordProtected]:`비밀번호로 보호됨`,[V.passwordProtectedDesc]:`이 콘텐츠는 비밀번호로 보호되어 있습니다. 보려면 비밀번호를 입력하세요.`,[V.passwordHint]:`힌트`,[V.passwordPlaceholder]:`비밀번호 입력`,[V.passwordSubmit]:`잠금 해제`,[V.passwordError]:`비밀번호가 올바르지 않습니다. 다시 시도해 주세요.`,[V.passwordProtectedRss]:`이 글은 암호화되어 있습니다. 웹사이트에서 확인해 주세요.`,[V.videoPlay]:`배경 영상 재생`,[V.videoPause]:`배경 영상 일시정지`,[V.videoPrev]:`이전 영상`,[V.videoNext]:`다음 영상`,[V.videoLoadError]:`영상을 불러오지 못했습니다`,[V.immersiveReading]:`몰입형 읽기`,[V.enterImmersiveReading]:`몰입형 읽기 시작`,[V.exitImmersiveReading]:`몰입형 읽기 종료`,[V.tocExpand]:`목차 펼치기`,[V.tocCollapse]:`목차 접기`},at={[V.home]:`Главная`,[V.about]:`О нас`,[V.archive]:`Архив`,[V.search]:`Поиск`,[V.searchNoResults]:`Результаты не найдены.`,[V.searchTypeSomething]:`Введите ключевое слово для поиска...`,[V.searchLoading]:`Поиск...`,[V.searchSummary]:`Резюме`,[V.searchContent]:`Содержание`,[V.searchViewMore]:`Показать еще ({count} шт)`,[V.searchClear]:`Очистить поле поиска`,[V.other]:`Прочее`,[V.navArticles]:`Статьи`,[V.navSocial]:`Соцсети`,[V.navMine]:`Моё`,[V.navAbout]:`Обо мне`,[V.navLinks]:`Ссылки`,[V.all]:`Все`,[V.tags]:`Теги`,[V.categories]:`Категории`,[V.allCategories]:`Все категории`,[V.allTags]:`Все теги`,[V.allSeries]:`Все серии`,[V.recentPosts]:`Последние посты`,[V.postList]:`Список постов`,[V.tableOfContents]:`Содержание`,[V.tocEmpty]:`На этой странице нет оглавления`,[V.music]:`Музыка`,[V.dynamic]:`Моменты`,[V.latestDynamics]:`Последние публикации`,[V.moreDynamics]:`Больше публикаций`,[V.dynamicDescription]:`Короткие мысли и моменты повседневной жизни.`,[V.dynamicEmpty]:`Пока нет публикаций`,[V.dynamicSearch]:`Поиск публикаций...`,[V.dynamicNoResults]:`Подходящие публикации не найдены`,[V.dynamicLoading]:`Загрузка публикаций`,[V.dynamicAllYears]:`Все годы`,[V.dynamicLoadMore]:`Загрузить ещё`,[V.dynamicBackToList]:`Назад к публикациям`,[V.dynamicProfile]:`Открыть профиль {name}`,[V.dynamicPermalink]:`Постоянная ссылка на публикацию`,[V.dynamicCollapseGallery]:`Свернуть`,[V.dynamicViewOriginal]:`Открыть оригинал`,[V.dynamicPreviousImage]:`Предыдущее изображение`,[V.dynamicNextImage]:`Следующее изображение`,[V.dynamicViewImage]:`Открыть изображение {index}`,[V.dynamicSelectImage]:`Выбрать изображение {index}`,[V.musicNoPlaying]:`Ничего не воспроизводится`,[V.musicLyrics]:`Текст песни`,[V.musicVolume]:`Громкость`,[V.musicPlayMode]:`Переключить режим воспроизведения`,[V.musicPrev]:`Предыдущий трек`,[V.musicNext]:`Следующий трек`,[V.musicPlaylist]:`Плейлист`,[V.musicNoLyrics]:`Текст песни отсутствует`,[V.musicLoadingLyrics]:`Загрузка текста песни...`,[V.musicFailedLyrics]:`Ошибка загрузки текста песни`,[V.musicNoSongs]:`Нет песен`,[V.musicError]:`Ошибка плеера`,[V.musicPlay]:`Воспроизвести`,[V.musicPause]:`Пауза`,[V.musicProgress]:`Прогресс воспроизведения`,[V.musicCover]:`Обложка`,[V.musicNoCover]:`Нет обложки`,[V.musicAudioPlayer]:`Аудиоплеер`,[V.announcement]:`Объявление`,[V.announcementClose]:`Закрыть`,[V.comments]:`Комментарии`,[V.commentSection]:`Комментарии`,[V.commentSubtitle]:`Поделитесь своими мыслями и обсудите с остальными`,[V.commentNotConfigured]:`Система комментариев не настроена`,[V.guestbookCommentHint]:`Вы еще не включили систему комментариев в файле конфигурации. После включения посетители смогут оставлять сообщения здесь`,[V.friends]:`Ссылки`,[V.friendsDescription]:`Вот мои друзья, добро пожаловать посетить и общаться друг с другом`,[V.searchFriends]:`Поиск друзей...`,[V.friendsEmpty]:`Друзей пока нет.`,[V.booknav]:`Каталог закладок`,[V.booknavDescription]:`Подборка полезных сайтов, сгруппированных по категориям.`,[V.searchBooknav]:`Поиск закладок...`,[V.booknavEmpty]:`Закладок пока нет.`,[V.projects]:`Проекты`,[V.projectsDescription]:`Мои разработанные проекты`,[V.projectDetails]:`Подробнее`,[V.projectBack]:`К списку проектов`,[V.projectEmpty]:`Проектов пока нет`,[V.projectSearch]:`Поиск проектов`,[V.projectStatusPlanning]:`В планах`,[V.projectStatusDeveloping]:`В разработке`,[V.projectStatusPublished]:`Опубликовано`,[V.projectStatusArchived]:`В архиве`,[V.guestbook]:`Гостевая книга`,[V.guestbookDescription]:`Добро пожаловать, оставьте свой след здесь, поделитесь своими мыслями и предложениями`,[V.untitled]:`Без названия`,[V.uncategorized]:`Без категории`,[V.noTags]:`Нет тегов`,[V.postBack]:`К списку статей`,[V.wordCount]:`слово`,[V.wordsCount]:`слова`,[V.minuteCount]:`минута`,[V.minutesCount]:`минуты`,[V.postCount]:`пост`,[V.postsCount]:`постов`,[V.tagsCount]:`тегов`,[V.noData]:`Нет данных`,[V.emptyHint]:`Здесь пока ничего нет — загляните позже.`,[V.booknavEmptyHint]:`Добавьте закладку во время чтения, и она появится здесь.`,[V.friendsEmptyHint]:`Друзей блога пока нет — пишите, обменяемся ссылками.`,[V.projectEmptyHint]:`Проекты появятся здесь, как только будут добавлены.`,[V.galleryNoAlbumsHint]:`Фотографии появятся здесь после добавления в альбом.`,[V.dynamicEmptyHint]:`Записей пока нет — новые появятся здесь.`,[V.sponsorEmptyHint]:`Станьте первым, кто поддержит этот сайт.`,[V.themeColor]:`Цвет темы`,[V.lightMode]:`Светлая`,[V.darkMode]:`Тёмная`,[V.systemMode]:`Система`,[V.more]:`Ещё`,[V.collapse]:`Свернуть`,[V.author]:`Автор`,[V.publishedAt]:`Опубликовано`,[V.updatedAt]:`Обновлено`,[V.readTime]:`Время чтения`,[V.license]:`Лицензия`,[V.bangumi]:`Bangumi`,[V.bangumiTitle]:`Мой Bangumi`,[V.bangumiSubtitle]:`Запись моего аниме путешествия`,[V.bangumiFilterAll]:`Все`,[V.bangumiFilterWatched]:`Просмотрено`,[V.bangumiFilterWatching]:`Смотрю`,[V.bangumiFilterWish]:`Хочу`,[V.bangumiFilterOnHold]:`Отложено`,[V.bangumiFilterDropped]:`Брошено`,[V.bangumiFilterGamePlayed]:`Пройдено`,[V.bangumiFilterGamePlaying]:`Играю`,[V.bangumiFilterGameWish]:`Хочу сыграть`,[V.bangumiFilterBookRead]:`Прочитано`,[V.bangumiFilterBookReading]:`Читаю`,[V.bangumiFilterBookWish]:`Хочу прочитать`,[V.bangumiFilterMusicListened]:`Прослушано`,[V.bangumiFilterMusicListening]:`Слушаю`,[V.bangumiFilterMusicWish]:`Хочу послушать`,[V.bangumiStatusWish]:`Хочу`,[V.bangumiStatusWatched]:`Просмотрено`,[V.bangumiStatusWatching]:`Смотрю`,[V.bangumiStatusOnHold]:`Отложено`,[V.bangumiStatusDropped]:`Брошено`,[V.bangumiStatusGameWish]:`Хочу сыграть`,[V.bangumiStatusGamePlayed]:`Пройдено`,[V.bangumiStatusGamePlaying]:`Играю`,[V.bangumiStatusBookWish]:`Хочу прочитать`,[V.bangumiStatusBookRead]:`Прочитано`,[V.bangumiStatusBookReading]:`Читаю`,[V.bangumiStatusMusicWish]:`Хочу послушать`,[V.bangumiStatusMusicListened]:`Прослушано`,[V.bangumiStatusMusicListening]:`Слушаю`,[V.bangumiStatusUnknown]:`Неизвестно`,[V.bangumiNoData]:`Нет данных`,[V.bangumiNoDataDescription]:`В этой категории нет элементов`,[V.bangumiEmpty]:`Нет данных`,[V.bangumiEmptyReason]:`Возможные причины: имя пользователя не существует, проблема с подключением к сети или ограничение API`,[V.bangumiFetchError]:`Ошибка загрузки данных Bangumi`,[V.bangumiFetchErrorDesc]:`Не удалось загрузить данные из Bangumi API при сборке. Эта страница временно недоступна.`,[V.bangumiUsername]:`Имя пользователя`,[V.bangumiApi]:`API`,[V.bangumiConfigTip]:`Подсказка: установите правильное имя пользователя Bangumi в конфигурации страницы`,[V.bangumiPrevPage]:`Предыдущая`,[V.bangumiNextPage]:`Следующая`,[V.bangumiCurrentPage]:`Страница`,[V.bangumiTotalPages]:`из`,[V.bangumiPage]:`страница`,[V.bangumiCategoryBook]:`Книга`,[V.bangumiCategoryAnime]:`Аниме`,[V.bangumiCategoryMusic]:`Музыка`,[V.bangumiCategoryGame]:`Игра`,[V.bangumiCategoryReal]:`Реальный`,[V.bangumiLastUpdated]:`Дата обновления данных`,[V.bangumiUpdatedAt]:`Время сборки`,[V.bangumiDataStatic]:`Статические данные`,[V.vndb]:`VNDB`,[V.vndbSubtitle]:`Мой список визуальных новелл VNDB`,[V.vndbFilterAll]:`Все`,[V.vndbFilterVoted]:`Оценено`,[V.vndbFilterUnvoted]:`Без оценки`,[V.vndbFilterNotes]:`С заметками`,[V.vndbStatusWishlist]:`Хочу сыграть`,[V.vndbStatusPlaying]:`Играю`,[V.vndbStatusFinished]:`Пройдено`,[V.vndbStatusStalled]:`Отложено`,[V.vndbStatusDropped]:`Брошено`,[V.vndbStatusUnknown]:`Неизвестно`,[V.vndbNoData]:`Нет данных`,[V.vndbNoDataDescription]:`В этой категории нет элементов`,[V.vndbEmpty]:`Нет данных`,[V.vndbEmptyReason]:`Возможные причины: ID пользователя не существует, список закрыт, проблемы с сетью или ограничение API`,[V.vndbFetchError]:`Ошибка загрузки данных VNDB`,[V.vndbFetchErrorDesc]:`Не удалось загрузить данные из VNDB API при сборке. Эта страница временно недоступна.`,[V.vndbNotConfigured]:`ID пользователя VNDB не настроен`,[V.vndbNotConfiguredDesc]:`Укажите ID пользователя VNDB в src/config/siteConfig.ts`,[V.vndbLastUpdated]:`Дата обновления данных`,[V.vndbVotes]:`голосов`,[V.vndbLengthVeryShort]:`Очень короткая`,[V.vndbLengthShort]:`Короткая`,[V.vndbLengthMedium]:`Средняя`,[V.vndbLengthLong]:`Длинная`,[V.vndbLengthVeryLong]:`Очень длинная`,[V.bilibili]:`Bilibili`,[V.bilibiliSubtitle]:`Мой список Bilibili (аниме и сериалы)`,[V.bilibiliNotConfigured]:`Источник данных Bilibili не настроен`,[V.bilibiliNotConfiguredDesc]:`Настройте bilibili.uid в src/config/siteConfig.ts`,[V.animeTotal]:`Всего`,[V.animeAverageRating]:`Средний рейтинг`,[V.animeSearch]:`Поиск аниме...`,[V.animeAllTypes]:`Все`,[V.animeTV]:`TV Аниме`,[V.animeMovie]:`Фильм`,[V.animeRatingDesc]:`По рейтингу ↓`,[V.animeRatingAsc]:`По рейтингу ↑`,[V.animeDateDesc]:`Сначала новые`,[V.animeDateAsc]:`Сначала старые`,[V.animeNoResults]:`Аниме не найдено`,[V.animeLastUpdated]:`Дата обновления данных`,[V.animeEpStatus]:`Прогресс`,[V.animeViewDetails]:`Подробнее`,[V.animeBilibiliAvg]:`Bilibili ср.`,[V.animeNoOverview]:`Нет описания`,[V.animeClose]:`Закрыть`,[V.animeSynopsis]:`Описание`,[V.animeWatchNow]:`Смотреть`,[V.animeAllWithCount]:`Все ({count})`,[V.animeTVWithCount]:`ТВ ({count})`,[V.animeMovieWithCount]:`Фильм ({count})`,[V.animeTypeAnime]:`Аниме`,[V.animeTypeMovie]:`Фильм`,[V.animeTypeDocumentary]:`Документальный`,[V.animeTypeChinese]:`Китайское аниме`,[V.animeTypeDrama]:`Сериал`,[V.animeTypeConcert]:`Концерт`,[V.mal]:`MyAnimeList`,[V.malSubtitle]:`Мои списки аниме и манги из MyAnimeList`,[V.malCategoryAnime]:`Аниме`,[V.malCategoryManga]:`Манга`,[V.malFilterAll]:`Все`,[V.malStatusWatching]:`Смотрю`,[V.malStatusReading]:`Читаю`,[V.malStatusCompleted]:`Просмотрено`,[V.malStatusOnHold]:`Отложено`,[V.malStatusDropped]:`Брошено`,[V.malStatusPlanToWatch]:`Хочу посмотреть`,[V.malStatusPlanToRead]:`Хочу прочитать`,[V.malNoData]:`Нет данных`,[V.malNoDataDescription]:`В этой категории нет элементов`,[V.malEmpty]:`Нет данных`,[V.malEmptyReason]:`Возможные причины: имя пользователя не существует, список закрыт, неверный Client ID или проблема с сетью`,[V.malFetchError]:`Ошибка загрузки данных MyAnimeList`,[V.malFetchErrorDesc]:`Не удалось загрузить данные из MyAnimeList API при сборке. Проверьте имя пользователя и Client ID, а также убедитесь, что список открыт.`,[V.malNotConfigured]:`MyAnimeList не настроен`,[V.malNotConfiguredDesc]:`Укажите имя пользователя и Client ID MyAnimeList в src/config/siteConfig.ts (список должен быть открытым)`,[V.malLastUpdated]:`Дата обновления данных`,[V.malSeasonWinter]:`Зима`,[V.malSeasonSpring]:`Весна`,[V.malSeasonSummer]:`Лето`,[V.malSeasonFall]:`Осень`,[V.paginationFirst]:`Первая`,[V.paginationPrev]:`Предыдущая`,[V.paginationNext]:`Следующая`,[V.paginationLast]:`Последняя`,[V.paginationPage]:`Страница`,[V.paginationOf]:`из`,[V.paginationTotal]:`, всего`,[V.paginationRecords]:` записей`,[V.paginationJump]:`Перейти к странице`,[V.notFound]:`404`,[V.notFoundTitle]:`Страница не найдена`,[V.notFoundDescription]:`Извините, страница, которую вы посетили, не существует или была перемещена.`,[V.backToHome]:`Вернуться на главную`,[V.rss]:`RSS лента`,[V.rssDescription]:`Подпишитесь, чтобы получать последние обновления`,[V.rssSubtitle]:`Подписаться через RSS, чтобы сразу получать последние статьи и обновления`,[V.rssLink]:`RSS ссылка`,[V.rssCopyToReader]:`Скопировать ссылку в ваш RSS читатель`,[V.rssCopyLink]:`Скопировать ссылку`,[V.rssLatestPosts]:`Последние посты`,[V.rssWhatIsRSS]:`Что такое RSS?`,[V.rssWhatIsRSSDescription]:`RSS (Really Simple Syndication) — стандартный формат для публикации часто обновляемого контента. С RSS вы можете:`,[V.rssBenefit1]:`Получать последний контент сайта вовремя без ручного посещения`,[V.rssBenefit2]:`Управлять подписками на несколько сайтов в одном месте`,[V.rssBenefit3]:`Не пропускать важные обновления и статьи`,[V.rssBenefit4]:`Наслаждаться чистым чтением без рекламы`,[V.rssHowToUse]:`Рекомендуется использовать Feedly, Inoreader или другие RSS читатели для подписки на этот сайт.`,[V.rssCopied]:`RSS ссылка скопирована в буфер обмена!`,[V.rssCopyFailed]:`Ошибка копирования, пожалуйста, скопируйте ссылку вручную`,[V.atom]:`Atom-лента`,[V.atomDescription]:`Подпишитесь на последние обновления`,[V.atomSubtitle]:`Подпишитесь через Atom, чтобы сразу получать последние статьи и обновления`,[V.atomLink]:`Atom-ссылка`,[V.atomCopyToReader]:`Скопируйте ссылку в свой Atom-ридер`,[V.atomCopied]:`Atom-ссылка скопирована в буфер обмена!`,[V.lastModifiedPrefix]:`Последнее обновление: `,[V.lastModifiedOutdated]:`Некоторый контент может быть устаревшим`,[V.lastModifiedDaysAgo]:`{days} дней назад`,[V.year]:`год`,[V.month]:`месяц`,[V.day]:`день`,[V.hour]:`час`,[V.minute]:`минута`,[V.second]:`секунда`,[V.pageViews]:`Просмотры`,[V.pageViewsLoading]:`Загрузка...`,[V.pageViewsError]:`Статистика недоступна`,[V.pinned]:`Закреплено`,[V.relatedPosts]:`Похожие статьи`,[V.randomPosts]:`Случайные статьи`,[V.smartRecommend]:`Умный`,[V.randomRecommend]:`Случайный`,[V.noRelatedPosts]:`Нет похожих статей`,[V.noRandomPosts]:`Нет случайных статей`,[V.series]:`Серии`,[V.seriesPartOf]:`Часть серии`,[V.seriesPart]:`Часть {n}`,[V.seriesThisArticle]:`Эта статья`,[V.noSeries]:`Пока нет серий`,[V.postEncrypted]:`Эта статья зашифрована`,[V.wallpaperMode]:`Режим обоев`,[V.wallpaperBannerMode]:`Баннер обои`,[V.wallpaperFullscreenMode]:`Полноэкранные обои`,[V.fullscreenLayout]:`Полноэкранный макет`,[V.fullscreenClassicLayout]:`Классический`,[V.fullscreenHeroLayout]:`Hero`,[V.wallpaperOverlayMode]:`Прозрачный`,[V.wallpaperNoneMode]:`Однотонный фон`,[V.wallpaperSettings]:`Настройки обоев`,[V.wallpaperTitle]:`Заголовок главных обоев`,[V.wallpaperCarousel]:`Карусель обоев`,[V.wavesAnimation]:`Анимация волн`,[V.gradientTransition]:`Градиентный переход`,[V.sakuraEffect]:`Эффект сакуры`,[V.effectsSettings]:`Настройки эффектов`,[V.overlaySettings]:`Настройки прозрачности`,[V.overlayOpacity]:`Прозрачность обоев`,[V.overlayBlur]:`Размытие фона`,[V.overlayCardOpacity]:`Прозрачность карточек`,[V.settingsTabAppearance]:`Оформление`,[V.settingsTabWallpaper]:`Обои`,[V.settingsTabEffects]:`Эффекты`,[V.cardSettings]:`Стиль карточек`,[V.cardBorder]:`Рамка и тень карточек`,[V.cardFollowTheme]:`Карточки跟随主题色`,[V.postListLayout]:`Макет списка сообщений`,[V.postListLayoutList]:`Список`,[V.postListLayoutGrid]:`Сетка`,[V.sponsor]:`Спонсор`,[V.sponsorTitle]:`Поддержать меня`,[V.sponsorDescription]:`Если мой контент был полезен для вас, добро пожаловать поддержать меня следующими способами. Ваша поддержка - это движущая сила моего постоянного творчества!`,[V.sponsorMethods]:`Способы оплаты`,[V.sponsorList]:`Спонсоры`,[V.sponsorEmpty]:`Пока нет спонсоров`,[V.sponsorAmount]:`Сумма`,[V.sponsorDate]:`Дата`,[V.sponsorMessage]:`Сообщение`,[V.sponsorAnonymous]:`Анонимно`,[V.scanToSponsor]:`Сканировать для поддержки`,[V.sponsorGoTo]:`Перейти к спонсору`,[V.sponsorButton]:`Поддержка и Поделиться`,[V.sponsorButtonText]:`Если эта статья помогла вам, пожалуйста, поделитесь или поддержите!`,[V.shareOnSocial]:`Поделиться статьей`,[V.shareOnSocialDescription]:`Если эта статья помогла вам, пожалуйста, поделитесь ею с другими!`,[V.siteStats]:`Статистика сайта`,[V.siteStatsPostCount]:`Статьи`,[V.siteStatsDynamicCount]:`Публикации`,[V.siteStatsCategoryCount]:`Категории`,[V.siteStatsTagCount]:`Теги`,[V.siteStatsTotalWords]:`Всего слов`,[V.siteStatsRunningDays]:`Дней работы`,[V.siteStatsLastUpdate]:`Последняя активность`,[V.siteStatsDaysAgo]:`{days} дней назад`,[V.siteStatsDays]:`{days} дней`,[V.today]:`Сегодня`,[V.siteInfo]:`Информация о сайте`,[V.siteInfoBuildTime]:`Время сборки`,[V.siteInfoBuildPlatform]:`Платформа сборки`,[V.siteInfoBlogVersion]:`Версия блога`,[V.siteInfoAstroVersion]:`Astro`,[V.siteInfoNodeVersion]:`Node`,[V.siteInfoPnpmVersion]:`pnpm`,[V.siteInfoSystem]:`Система`,[V.siteInfoExpand]:`Показать информацию о сборке`,[V.siteInfoCollapse]:`Скрыть информацию о сборке`,[V.siteInfoDomain]:`Домен`,[V.siteInfoLicense]:`Лицензия`,[V.calendarSunday]:`Вс`,[V.calendarMonday]:`Пн`,[V.calendarTuesday]:`Вт`,[V.calendarWednesday]:`Ср`,[V.calendarThursday]:`Чт`,[V.calendarFriday]:`Пт`,[V.calendarSaturday]:`Сб`,[V.calendarJanuary]:`Янв`,[V.calendarFebruary]:`Фев`,[V.calendarMarch]:`Мар`,[V.calendarApril]:`Апр`,[V.calendarMay]:`Май`,[V.calendarJune]:`Июн`,[V.calendarJuly]:`Июл`,[V.calendarAugust]:`Авг`,[V.calendarSeptember]:`Сен`,[V.calendarOctober]:`Окт`,[V.calendarNovember]:`Ноя`,[V.calendarDecember]:`Дек`,[V.calendar]:`Календарь сайта`,[V.calendarHeatmapWeek]:`Неделя {week} {month}, {count} записей`,[V.advertisement]:`Реклама`,[V.shareArticle]:`Поделиться`,[V.generatingPoster]:`Создание постера...`,[V.copied]:`Скопировано`,[V.copyLink]:`Копировать ссылку`,[V.savePoster]:`Сохранить постер`,[V.scanToRead]:`Сканируйте, чтобы прочитать`,[V.codeCollapsibleShowMore]:`Развернуть`,[V.codeCollapsibleShowLess]:`Свернуть`,[V.codeCollapsibleExpanded]:`Блок кода развернут`,[V.codeCollapsibleCollapsed]:`Блок кода свернут`,[V.gallery]:`Галерея`,[V.galleryDescription]:`Запечатлеть прекрасные моменты жизни`,[V.galleryPhotos]:`фото`,[V.galleryAlbums]:`альбомов`,[V.galleryNoAlbums]:`Пока нет альбомов`,[V.galleryBackToAlbums]:`Вернуться к альбомам`,[V.galleryEnterAlbum]:`Открыть альбом`,[V.searchAlbums]:`Поиск альбомов...`,[V.passwordProtected]:`Защищено паролем`,[V.passwordProtectedDesc]:`Этот контент защищён паролем. Пожалуйста, введите пароль для просмотра.`,[V.passwordHint]:`Подсказка`,[V.passwordPlaceholder]:`Введите пароль`,[V.passwordSubmit]:`Разблокировать`,[V.passwordError]:`Неверный пароль, попробуйте снова.`,[V.passwordProtectedRss]:`Эта статья зашифрована. Пожалуйста, посетите сайт для просмотра.`,[V.videoPlay]:`Воспроизвести фоновое видео`,[V.videoPause]:`Пауза фонового видео`,[V.videoPrev]:`Предыдущее видео`,[V.videoNext]:`Следующее видео`,[V.videoLoadError]:`Не удалось загрузить видео`,[V.immersiveReading]:`Чтение без отвлечений`,[V.enterImmersiveReading]:`Войти в режим чтения`,[V.exitImmersiveReading]:`Выйти из режима чтения`,[V.tocExpand]:`Развернуть оглавление`,[V.tocCollapse]:`Свернуть оглавление`},ot={[V.home]:`主页`,[V.about]:`关于我`,[V.archive]:`归档`,[V.search]:`搜索`,[V.searchNoResults]:`找不到相关结果。`,[V.searchTypeSomething]:`请输入搜索关键词。`,[V.searchLoading]:`正在搜索...`,[V.searchSummary]:`摘要`,[V.searchContent]:`内容`,[V.searchViewMore]:`查看更多结果 ({count} 个更多)`,[V.searchClear]:`清除搜索内容`,[V.other]:`其他`,[V.navArticles]:`文章`,[V.navSocial]:`社交`,[V.navMine]:`我的`,[V.navAbout]:`关于`,[V.navLinks]:`链接`,[V.all]:`全部`,[V.tags]:`标签`,[V.categories]:`分类`,[V.allCategories]:`全部分类`,[V.allTags]:`全部标签`,[V.allSeries]:`全部系列`,[V.recentPosts]:`最新文章`,[V.postList]:`文章列表`,[V.tableOfContents]:`文章目录`,[V.tocEmpty]:`当前页面没有目录`,[V.music]:`音乐`,[V.dynamic]:`动态`,[V.latestDynamics]:`最新动态`,[V.moreDynamics]:`更多动态`,[V.dynamicDescription]:`随手记下此刻的想法与日常。`,[V.dynamicEmpty]:`还没有发布动态`,[V.dynamicSearch]:`搜索动态...`,[V.dynamicNoResults]:`没有找到匹配的动态`,[V.dynamicLoading]:`正在加载动态`,[V.dynamicAllYears]:`全部年份`,[V.dynamicLoadMore]:`加载更多`,[V.dynamicBackToList]:`返回动态列表`,[V.dynamicProfile]:`查看 {name} 的资料`,[V.dynamicPermalink]:`此动态的固定链接`,[V.dynamicCollapseGallery]:`收起`,[V.dynamicViewOriginal]:`查看大图`,[V.dynamicPreviousImage]:`上一张图片`,[V.dynamicNextImage]:`下一张图片`,[V.dynamicViewImage]:`查看图片 {index}`,[V.dynamicSelectImage]:`切换到图片 {index}`,[V.musicNoPlaying]:`暂未播放`,[V.musicLyrics]:`歌词`,[V.musicVolume]:`音量`,[V.musicPlayMode]:`切换播放模式`,[V.musicPrev]:`上一首`,[V.musicNext]:`下一首`,[V.musicPlaylist]:`列表`,[V.musicNoLyrics]:`暂无歌词`,[V.musicLoadingLyrics]:`正在加载歌词...`,[V.musicFailedLyrics]:`歌词加载失败`,[V.musicNoSongs]:`暂无歌曲`,[V.musicError]:`播放器错误`,[V.musicPlay]:`播放`,[V.musicPause]:`暂停`,[V.musicProgress]:`播放进度`,[V.musicCover]:`封面`,[V.musicNoCover]:`暂无封面`,[V.musicAudioPlayer]:`音频播放器`,[V.announcement]:`公告`,[V.announcementClose]:`关闭`,[V.comments]:`评论`,[V.commentSection]:`评论区`,[V.commentSubtitle]:`分享你的想法，与大家交流讨论`,[V.commentNotConfigured]:`评论系统暂未配置`,[V.guestbookCommentHint]:`您还未在配置文件中启用评论系统，启用后访客才可在此留言`,[V.friends]:`友链`,[V.friendsDescription]:`这里是我的朋友们，欢迎互相访问交流`,[V.searchFriends]:`搜索友链...`,[V.friendsEmpty]:`暂无友情链接`,[V.booknav]:`书签导航`,[V.booknavDescription]:`收藏一些好用的网站，按分类整理`,[V.searchBooknav]:`搜索书签...`,[V.booknavEmpty]:`暂无书签`,[V.projects]:`项目`,[V.projectsDescription]:`这里展示我开发过的项目`,[V.projectDetails]:`查看详情`,[V.projectBack]:`返回项目列表`,[V.projectEmpty]:`暂无项目`,[V.projectSearch]:`搜索项目`,[V.projectStatusPlanning]:`计划中`,[V.projectStatusDeveloping]:`开发中`,[V.projectStatusPublished]:`已发布`,[V.projectStatusArchived]:`已归档`,[V.guestbook]:`留言`,[V.guestbookDescription]:`欢迎在这里留下你的足迹，分享你的想法和建议`,[V.untitled]:`无标题`,[V.uncategorized]:`未分类`,[V.noTags]:`无标签`,[V.postBack]:`返回文章列表`,[V.wordCount]:`字`,[V.wordsCount]:`字`,[V.minuteCount]:`分钟`,[V.minutesCount]:`分钟`,[V.postCount]:`篇文章`,[V.postsCount]:`篇文章`,[V.tagsCount]:`个标签`,[V.noData]:`暂无数据`,[V.emptyHint]:`这里暂时还没有内容，稍后再来看看吧。`,[V.booknavEmptyHint]:`阅读文章时添加书签，就会出现在这里。`,[V.friendsEmptyHint]:`还没有添加友链，欢迎来交换链接。`,[V.projectEmptyHint]:`添加项目后就会展示在这里。`,[V.galleryNoAlbumsHint]:`相册中添加照片后就会显示在这里。`,[V.dynamicEmptyHint]:`还没有发布动态，新的动态会出现在这里。`,[V.sponsorEmptyHint]:`成为第一个支持本站的人吧。`,[V.themeColor]:`主题色相`,[V.lightMode]:`亮色`,[V.darkMode]:`暗色`,[V.systemMode]:`跟随系统`,[V.more]:`更多`,[V.collapse]:`收起`,[V.author]:`作者`,[V.publishedAt]:`发布于`,[V.updatedAt]:`更新于`,[V.readTime]:`阅读时长`,[V.license]:`许可协议`,[V.bangumi]:`番组计划`,[V.bangumiTitle]:`我的番组计划`,[V.bangumiSubtitle]:`记录我的二次元之旅`,[V.bangumiFilterAll]:`全部`,[V.bangumiFilterWatched]:`看过`,[V.bangumiFilterWatching]:`在看`,[V.bangumiFilterWish]:`想看`,[V.bangumiFilterOnHold]:`搁置`,[V.bangumiFilterDropped]:`抛弃`,[V.bangumiFilterGamePlayed]:`玩过`,[V.bangumiFilterGamePlaying]:`在玩`,[V.bangumiFilterGameWish]:`想玩`,[V.bangumiFilterBookRead]:`读过`,[V.bangumiFilterBookReading]:`在读`,[V.bangumiFilterBookWish]:`想读`,[V.bangumiFilterMusicListened]:`听过`,[V.bangumiFilterMusicListening]:`在听`,[V.bangumiFilterMusicWish]:`想听`,[V.bangumiStatusWish]:`想看`,[V.bangumiStatusWatched]:`看过`,[V.bangumiStatusWatching]:`在看`,[V.bangumiStatusOnHold]:`搁置`,[V.bangumiStatusDropped]:`抛弃`,[V.bangumiStatusGameWish]:`想玩`,[V.bangumiStatusGamePlayed]:`玩过`,[V.bangumiStatusGamePlaying]:`在玩`,[V.bangumiStatusBookWish]:`想读`,[V.bangumiStatusBookRead]:`读过`,[V.bangumiStatusBookReading]:`在读`,[V.bangumiStatusMusicWish]:`想听`,[V.bangumiStatusMusicListened]:`听过`,[V.bangumiStatusMusicListening]:`在听`,[V.bangumiStatusUnknown]:`未知`,[V.bangumiNoData]:`暂无数据`,[V.bangumiNoDataDescription]:`该分类下还没有任何条目`,[V.bangumiEmpty]:`暂无数据`,[V.bangumiEmptyReason]:`可能的原因：用户名不存在、网络连接问题或API限制`,[V.bangumiFetchError]:`Bangumi 数据拉取失败`,[V.bangumiFetchErrorDesc]:`构建时从 Bangumi API 获取数据失败，该页面内容暂不可用。`,[V.bangumiUsername]:`用户名`,[V.bangumiApi]:`API`,[V.bangumiConfigTip]:`提示：请在页面配置中设置正确的Bangumi用户名`,[V.bangumiPrevPage]:`上一页`,[V.bangumiNextPage]:`下一页`,[V.bangumiCurrentPage]:`第`,[V.bangumiTotalPages]:`页，共`,[V.bangumiPage]:`页`,[V.bangumiCategoryBook]:`书籍`,[V.bangumiCategoryAnime]:`动画`,[V.bangumiCategoryMusic]:`音乐`,[V.bangumiCategoryGame]:`游戏`,[V.bangumiCategoryReal]:`三次元`,[V.bangumiLastUpdated]:`数据更新日期`,[V.bangumiUpdatedAt]:`构建时间`,[V.bangumiDataStatic]:`静态数据`,[V.vndb]:`VNDB`,[V.vndbSubtitle]:`我的 VNDB 视觉小说列表`,[V.vndbFilterAll]:`全部`,[V.vndbFilterVoted]:`已评分`,[V.vndbFilterUnvoted]:`未评分`,[V.vndbFilterNotes]:`有笔记`,[V.vndbStatusWishlist]:`想玩`,[V.vndbStatusPlaying]:`在玩`,[V.vndbStatusFinished]:`已玩`,[V.vndbStatusStalled]:`搁置`,[V.vndbStatusDropped]:`抛弃`,[V.vndbStatusUnknown]:`未知`,[V.vndbNoData]:`暂无数据`,[V.vndbNoDataDescription]:`该分类下还没有任何条目`,[V.vndbEmpty]:`暂无数据`,[V.vndbEmptyReason]:`可能的原因：用户 ID 不存在、列表为私密、网络连接问题或 API 限制`,[V.vndbFetchError]:`VNDB 数据拉取失败`,[V.vndbFetchErrorDesc]:`构建时从 VNDB API 获取数据失败，该页面内容暂不可用。`,[V.vndbNotConfigured]:`未配置 VNDB 用户ID`,[V.vndbNotConfiguredDesc]:`请在 src/config/siteConfig.ts 中配置你的 VNDB 用户ID`,[V.vndbLastUpdated]:`数据更新日期`,[V.vndbVotes]:`票`,[V.vndbLengthVeryShort]:`极短`,[V.vndbLengthShort]:`短`,[V.vndbLengthMedium]:`中等`,[V.vndbLengthLong]:`长`,[V.vndbLengthVeryLong]:`极长`,[V.bilibili]:`哔哩哔哩`,[V.bilibiliSubtitle]:`我的哔哩哔哩追番与追剧列表`,[V.bilibiliNotConfigured]:`未配置哔哩哔哩数据源`,[V.bilibiliNotConfiguredDesc]:`请在 src/config/siteConfig.ts 中配置 bilibili.uid`,[V.animeTotal]:`总追番`,[V.animeAverageRating]:`平均评分`,[V.animeSearch]:`搜索番剧...`,[V.animeAllTypes]:`全部`,[V.animeTV]:`TV 动画`,[V.animeMovie]:`电影`,[V.animeRatingDesc]:`评分最高`,[V.animeRatingAsc]:`评分最低`,[V.animeDateDesc]:`最新发布`,[V.animeDateAsc]:`最早发布`,[V.animeNoResults]:`没有找到匹配的番剧`,[V.animeLastUpdated]:`数据更新日期`,[V.animeEpStatus]:`进度`,[V.animeViewDetails]:`查看详情`,[V.animeBilibiliAvg]:`Bilibili 均分`,[V.animeNoOverview]:`暂无简介`,[V.animeClose]:`关闭`,[V.animeSynopsis]:`剧情简介`,[V.animeWatchNow]:`立即观看`,[V.animeAllWithCount]:`全部 ({count})`,[V.animeTVWithCount]:`TV ({count})`,[V.animeMovieWithCount]:`电影 ({count})`,[V.animeTypeAnime]:`番剧`,[V.animeTypeMovie]:`电影`,[V.animeTypeDocumentary]:`纪录片`,[V.animeTypeChinese]:`国创`,[V.animeTypeDrama]:`电视剧`,[V.animeTypeConcert]:`演唱会`,[V.mal]:`动漫收藏`,[V.malSubtitle]:`我的 MyAnimeList 动画与漫画列表`,[V.malCategoryAnime]:`动画`,[V.malCategoryManga]:`漫画`,[V.malFilterAll]:`全部`,[V.malStatusWatching]:`在看`,[V.malStatusReading]:`在读`,[V.malStatusCompleted]:`已看完`,[V.malStatusOnHold]:`搁置`,[V.malStatusDropped]:`抛弃`,[V.malStatusPlanToWatch]:`想看`,[V.malStatusPlanToRead]:`想读`,[V.malNoData]:`暂无数据`,[V.malNoDataDescription]:`该分类下还没有任何条目`,[V.malEmpty]:`暂无数据`,[V.malEmptyReason]:`可能的原因：用户名不存在、列表为私密、Client ID 无效或网络连接问题`,[V.malFetchError]:`MyAnimeList 数据拉取失败`,[V.malFetchErrorDesc]:`构建时从 MyAnimeList API 获取数据失败。请确认用户名和 Client ID 正确，且列表为公开状态。`,[V.malNotConfigured]:`未配置 MyAnimeList 用户信息`,[V.malNotConfiguredDesc]:`请在 src/config/siteConfig.ts 中配置你的 MyAnimeList 用户名和 Client ID（列表需为公开状态）`,[V.malLastUpdated]:`数据更新日期`,[V.malSeasonWinter]:`冬季`,[V.malSeasonSpring]:`春季`,[V.malSeasonSummer]:`夏季`,[V.malSeasonFall]:`秋季`,[V.paginationFirst]:`首页`,[V.paginationPrev]:`上一页`,[V.paginationNext]:`下一页`,[V.paginationLast]:`末页`,[V.paginationPage]:`第`,[V.paginationOf]:`页，共`,[V.paginationTotal]:`页，总计`,[V.paginationRecords]:`条记录`,[V.paginationJump]:`跳转到指定页`,[V.notFound]:`404`,[V.notFoundTitle]:`页面未找到`,[V.notFoundDescription]:`抱歉，您访问的页面不存在或已被移动。`,[V.backToHome]:`返回首页`,[V.rss]:`RSS 订阅`,[V.rssDescription]:`订阅获取最新更新`,[V.rssSubtitle]:`通过 RSS 订阅，第一时间获取最新文章和动态`,[V.rssLink]:`RSS 链接`,[V.rssCopyToReader]:`复制链接到你的 RSS 阅读器`,[V.rssCopyLink]:`复制链接`,[V.rssLatestPosts]:`最新文章`,[V.rssWhatIsRSS]:`什么是 RSS？`,[V.rssWhatIsRSSDescription]:`RSS（Really Simple Syndication）是一种用于发布经常更新内容的标准格式。通过 RSS，你可以：`,[V.rssBenefit1]:`及时获取网站最新内容，无需手动访问`,[V.rssBenefit2]:`在一个地方管理多个网站的订阅`,[V.rssBenefit3]:`避免错过重要更新和文章`,[V.rssBenefit4]:`享受无广告的纯净阅读体验`,[V.rssHowToUse]:`推荐使用 Feedly、Inoreader 或其他 RSS 阅读器来订阅本站。`,[V.rssCopied]:`RSS 链接已复制到剪贴板！`,[V.rssCopyFailed]:`复制失败，请手动复制链接`,[V.atom]:`Atom 订阅`,[V.atomDescription]:`订阅获取最新更新`,[V.atomSubtitle]:`通过 Atom 订阅，第一时间获取最新文章和动态`,[V.atomLink]:`Atom 链接`,[V.atomCopyToReader]:`复制链接到你的 Atom 阅读器`,[V.atomCopied]:`Atom 链接已复制到剪贴板！`,[V.lastModifiedPrefix]:`最后更新于 `,[V.lastModifiedOutdated]:`部分内容可能已过时`,[V.lastModifiedDaysAgo]:`距今已过 {days} 天`,[V.year]:`年`,[V.month]:`月`,[V.day]:`日`,[V.hour]:`时`,[V.minute]:`分`,[V.second]:`秒`,[V.pageViews]:`浏览量`,[V.pageViewsLoading]:`加载中...`,[V.pageViewsError]:`统计不可用`,[V.pinned]:`置顶`,[V.relatedPosts]:`相关文章`,[V.randomPosts]:`随机文章`,[V.smartRecommend]:`智能推荐`,[V.randomRecommend]:`随机推荐`,[V.noRelatedPosts]:`暂无相关文章`,[V.noRandomPosts]:`暂无随机文章`,[V.series]:`系列`,[V.seriesPartOf]:`所属系列`,[V.seriesPart]:`第 {n} 篇`,[V.seriesThisArticle]:`本文`,[V.noSeries]:`暂无系列`,[V.postEncrypted]:`本文已加密`,[V.wallpaperMode]:`壁纸模式`,[V.wallpaperBannerMode]:`横幅壁纸`,[V.wallpaperFullscreenMode]:`全屏壁纸`,[V.fullscreenLayout]:`全屏布局`,[V.fullscreenClassicLayout]:`经典模式`,[V.fullscreenHeroLayout]:`Hero 模式`,[V.wallpaperOverlayMode]:`覆盖透明`,[V.wallpaperNoneMode]:`纯色背景`,[V.wallpaperSettings]:`壁纸设置`,[V.wallpaperTitle]:`首页壁纸标题`,[V.wallpaperCarousel]:`壁纸轮播`,[V.wavesAnimation]:`水波纹动画`,[V.gradientTransition]:`渐变过渡`,[V.sakuraEffect]:`樱花特效`,[V.effectsSettings]:`特效设置`,[V.overlaySettings]:`透明设置`,[V.overlayOpacity]:`壁纸透明度`,[V.overlayBlur]:`背景模糊度`,[V.overlayCardOpacity]:`卡片透明度`,[V.settingsTabAppearance]:`外观`,[V.settingsTabWallpaper]:`壁纸`,[V.settingsTabEffects]:`特效`,[V.cardSettings]:`卡片样式`,[V.cardBorder]:`卡片边框和阴影`,[V.cardFollowTheme]:`卡片跟随主题色`,[V.postListLayout]:`文章布局`,[V.postListLayoutList]:`列表`,[V.postListLayoutGrid]:`网格`,[V.sponsor]:`打赏`,[V.sponsorTitle]:`打赏支持`,[V.sponsorDescription]:`如果我的内容对你有帮助，欢迎通过以下方式打赏我，你的支持是我持续创作的动力！`,[V.sponsorMethods]:`打赏方式`,[V.sponsorList]:`打赏列表`,[V.sponsorEmpty]:`暂无打赏记录`,[V.sponsorAmount]:`金额`,[V.sponsorDate]:`日期`,[V.sponsorMessage]:`留言`,[V.sponsorAnonymous]:`匿名`,[V.scanToSponsor]:`扫码打赏`,[V.sponsorGoTo]:`前往打赏`,[V.sponsorButton]:`支持与分享`,[V.sponsorButtonText]:`如果这篇文章对你有帮助，欢迎分享给更多人或打赏支持！`,[V.shareOnSocial]:`文章分享`,[V.shareOnSocialDescription]:`如果这篇文章对你有帮助，欢迎分享给更多人！`,[V.siteStats]:`站点统计`,[V.siteStatsPostCount]:`文章`,[V.siteStatsDynamicCount]:`动态`,[V.siteStatsCategoryCount]:`分类`,[V.siteStatsTagCount]:`标签`,[V.siteStatsTotalWords]:`总字数`,[V.siteStatsRunningDays]:`运行时长`,[V.siteStatsLastUpdate]:`最后活动`,[V.siteStatsDaysAgo]:`{days} 天前`,[V.siteStatsDays]:`{days} 天`,[V.today]:`今天`,[V.siteInfo]:`站点信息`,[V.siteInfoBuildTime]:`构建时间`,[V.siteInfoBuildPlatform]:`构建平台`,[V.siteInfoBlogVersion]:`博客版本`,[V.siteInfoAstroVersion]:`Astro`,[V.siteInfoNodeVersion]:`Node`,[V.siteInfoPnpmVersion]:`pnpm`,[V.siteInfoSystem]:`系统信息`,[V.siteInfoExpand]:`展开构建信息`,[V.siteInfoCollapse]:`收起构建信息`,[V.siteInfoDomain]:`站点域名`,[V.siteInfoLicense]:`文章许可`,[V.calendarSunday]:`日`,[V.calendarMonday]:`一`,[V.calendarTuesday]:`二`,[V.calendarWednesday]:`三`,[V.calendarThursday]:`四`,[V.calendarFriday]:`五`,[V.calendarSaturday]:`六`,[V.calendarJanuary]:`1月`,[V.calendarFebruary]:`2月`,[V.calendarMarch]:`3月`,[V.calendarApril]:`4月`,[V.calendarMay]:`5月`,[V.calendarJune]:`6月`,[V.calendarJuly]:`7月`,[V.calendarAugust]:`8月`,[V.calendarSeptember]:`9月`,[V.calendarOctober]:`10月`,[V.calendarNovember]:`11月`,[V.calendarDecember]:`12月`,[V.calendar]:`站点日历`,[V.calendarHeatmapWeek]:`{month}月第{week}周，{count}篇文章`,[V.advertisement]:`广告`,[V.shareArticle]:`分享`,[V.generatingPoster]:`海报生成中...`,[V.copied]:`已复制`,[V.copyLink]:`复制链接`,[V.savePoster]:`保存海报`,[V.scanToRead]:`扫码阅读文章`,[V.codeCollapsibleShowMore]:`展开`,[V.codeCollapsibleShowLess]:`收起`,[V.codeCollapsibleExpanded]:`代码块已展开`,[V.codeCollapsibleCollapsed]:`代码块已折叠`,[V.gallery]:`相册`,[V.galleryDescription]:`记录生活中的美好瞬间`,[V.galleryPhotos]:`张照片`,[V.galleryAlbums]:`本相册`,[V.galleryNoAlbums]:`暂无相册`,[V.galleryBackToAlbums]:`返回相册列表`,[V.galleryEnterAlbum]:`进入相册`,[V.searchAlbums]:`搜索相簿...`,[V.passwordProtected]:`密码保护`,[V.passwordProtectedDesc]:`此内容已被密码保护，请输入密码查看。`,[V.passwordHint]:`提示`,[V.passwordPlaceholder]:`请输入密码`,[V.passwordSubmit]:`解锁`,[V.passwordError]:`密码错误，请重试。`,[V.passwordProtectedRss]:`本文已加密保护，请访问网站查看。`,[V.videoPlay]:`播放背景视频`,[V.videoPause]:`暂停背景视频`,[V.videoPrev]:`上一个视频`,[V.videoNext]:`下一个视频`,[V.videoLoadError]:`视频加载失败`,[V.immersiveReading]:`沉浸阅读`,[V.enterImmersiveReading]:`进入沉浸阅读`,[V.exitImmersiveReading]:`退出沉浸阅读`,[V.tocExpand]:`展开目录`,[V.tocCollapse]:`折叠目录`},st={[V.home]:`首頁`,[V.about]:`關於我`,[V.archive]:`歸檔`,[V.search]:`搜尋`,[V.searchNoResults]:`找不到相關結果。`,[V.searchTypeSomething]:`請輸入搜尋關鍵字。`,[V.searchLoading]:`搜尋中...`,[V.searchSummary]:`摘要`,[V.searchContent]:`內容`,[V.searchViewMore]:`查看更多結果 ({count} 個更多)`,[V.searchClear]:`清除搜尋內容`,[V.other]:`其他`,[V.navArticles]:`文章`,[V.navSocial]:`社交`,[V.navMine]:`我的`,[V.navAbout]:`關於`,[V.navLinks]:`連結`,[V.all]:`全部`,[V.tags]:`標籤`,[V.categories]:`分類`,[V.allCategories]:`全部分類`,[V.allTags]:`全部標籤`,[V.allSeries]:`全部系列`,[V.recentPosts]:`最新文章`,[V.postList]:`文章列表`,[V.tableOfContents]:`文章目錄`,[V.tocEmpty]:`目前頁面沒有目錄`,[V.music]:`音樂`,[V.dynamic]:`動態`,[V.latestDynamics]:`最新動態`,[V.moreDynamics]:`更多動態`,[V.dynamicDescription]:`隨手記下此刻的想法與日常。`,[V.dynamicEmpty]:`還沒有發佈動態`,[V.dynamicSearch]:`搜尋動態...`,[V.dynamicNoResults]:`沒有找到符合的動態`,[V.dynamicLoading]:`正在載入動態`,[V.dynamicAllYears]:`全部年份`,[V.dynamicLoadMore]:`載入更多`,[V.dynamicBackToList]:`返回動態列表`,[V.dynamicProfile]:`查看 {name} 的資料`,[V.dynamicPermalink]:`此動態的固定連結`,[V.dynamicCollapseGallery]:`收起`,[V.dynamicViewOriginal]:`查看大圖`,[V.dynamicPreviousImage]:`上一張圖片`,[V.dynamicNextImage]:`下一張圖片`,[V.dynamicViewImage]:`查看圖片 {index}`,[V.dynamicSelectImage]:`切換到圖片 {index}`,[V.musicNoPlaying]:`暫未播放`,[V.musicLyrics]:`歌詞`,[V.musicVolume]:`音量`,[V.musicPlayMode]:`切換播放模式`,[V.musicPrev]:`上一首`,[V.musicNext]:`下一首`,[V.musicPlaylist]:`列表`,[V.musicNoLyrics]:`暫無歌詞`,[V.musicLoadingLyrics]:`正在加載歌詞...`,[V.musicFailedLyrics]:`歌詞加載失敗`,[V.musicNoSongs]:`暫無歌曲`,[V.musicError]:`播放器錯誤`,[V.musicPlay]:`播放`,[V.musicPause]:`暫停`,[V.musicProgress]:`播放進度`,[V.musicCover]:`封面`,[V.musicNoCover]:`暫無封面`,[V.musicAudioPlayer]:`音頻播放器`,[V.announcement]:`公告`,[V.announcementClose]:`關閉`,[V.comments]:`評論`,[V.commentSection]:`評論區`,[V.commentSubtitle]:`分享你的想法，與大家交流討論`,[V.commentNotConfigured]:`評論系統暫未配置`,[V.guestbookCommentHint]:`您還未在配置文件中啟用評論系統，啟用後訪客才可在此留言`,[V.friends]:`友鏈`,[V.friendsDescription]:`這裡是我的朋友們，歡迎互相訪問交流`,[V.searchFriends]:`搜尋友鏈...`,[V.friendsEmpty]:`暫無友情連結`,[V.booknav]:`書籤導航`,[V.booknavDescription]:`收藏一些好用的網站，按分類整理`,[V.searchBooknav]:`搜尋書籤...`,[V.booknavEmpty]:`暫無書籤`,[V.projects]:`專案`,[V.projectsDescription]:`這裡展示我開發過的專案`,[V.projectDetails]:`查看詳情`,[V.projectBack]:`返回專案列表`,[V.projectEmpty]:`暫無專案`,[V.projectSearch]:`搜尋專案`,[V.projectStatusPlanning]:`規劃中`,[V.projectStatusDeveloping]:`開發中`,[V.projectStatusPublished]:`已發佈`,[V.projectStatusArchived]:`已封存`,[V.guestbook]:`留言`,[V.guestbookDescription]:`歡迎在這裡留下你的足跡，分享你的想法和建議`,[V.untitled]:`無標題`,[V.uncategorized]:`未分類`,[V.noTags]:`無標籤`,[V.postBack]:`返回文章列表`,[V.wordCount]:`字`,[V.wordsCount]:`字`,[V.minuteCount]:`分鐘`,[V.minutesCount]:`分鐘`,[V.postCount]:`篇文章`,[V.postsCount]:`篇文章`,[V.tagsCount]:`個標籤`,[V.noData]:`暫無資料`,[V.emptyHint]:`這裡暫時還沒有內容，稍後再來看看吧。`,[V.booknavEmptyHint]:`閱讀文章時加入書籤，就會出現在這裡。`,[V.friendsEmptyHint]:`還沒有加入友鏈，歡迎來交換連結。`,[V.projectEmptyHint]:`加入專案後就會展示在這裡。`,[V.galleryNoAlbumsHint]:`相簿中加入照片後就會顯示在這裡。`,[V.dynamicEmptyHint]:`還沒有發布動態，新的動態會出現在這裡。`,[V.sponsorEmptyHint]:`成為第一個支持本站的人吧。`,[V.themeColor]:`主題色相`,[V.lightMode]:`亮色`,[V.darkMode]:`暗色`,[V.systemMode]:`跟隨系統`,[V.more]:`更多`,[V.collapse]:`收起`,[V.author]:`作者`,[V.publishedAt]:`發布於`,[V.updatedAt]:`更新於`,[V.readTime]:`閱讀時長`,[V.license]:`許可協議`,[V.bangumi]:`番組計劃`,[V.bangumiTitle]:`我的番組計劃`,[V.bangumiSubtitle]:`記錄我的二次元之旅`,[V.bangumiFilterAll]:`全部`,[V.bangumiFilterWatched]:`看過`,[V.bangumiFilterWatching]:`在看`,[V.bangumiFilterWish]:`想看`,[V.bangumiFilterOnHold]:`擱置`,[V.bangumiFilterDropped]:`拋棄`,[V.bangumiFilterGamePlayed]:`玩過`,[V.bangumiFilterGamePlaying]:`在玩`,[V.bangumiFilterGameWish]:`想玩`,[V.bangumiFilterBookRead]:`讀過`,[V.bangumiFilterBookReading]:`在讀`,[V.bangumiFilterBookWish]:`想讀`,[V.bangumiFilterMusicListened]:`聽過`,[V.bangumiFilterMusicListening]:`在聽`,[V.bangumiFilterMusicWish]:`想聽`,[V.bangumiStatusWish]:`想看`,[V.bangumiStatusWatched]:`看過`,[V.bangumiStatusWatching]:`在看`,[V.bangumiStatusOnHold]:`擱置`,[V.bangumiStatusDropped]:`拋棄`,[V.bangumiStatusGameWish]:`想玩`,[V.bangumiStatusGamePlayed]:`玩過`,[V.bangumiStatusGamePlaying]:`在玩`,[V.bangumiStatusBookWish]:`想讀`,[V.bangumiStatusBookRead]:`讀過`,[V.bangumiStatusBookReading]:`在讀`,[V.bangumiStatusMusicWish]:`想聽`,[V.bangumiStatusMusicListened]:`聽過`,[V.bangumiStatusMusicListening]:`在聽`,[V.bangumiStatusUnknown]:`未知`,[V.bangumiNoData]:`暫無數據`,[V.bangumiNoDataDescription]:`該分類下還沒有任何條目`,[V.bangumiEmpty]:`暫無數據`,[V.bangumiEmptyReason]:`可能的原因：用戶名不存在、網絡連接問題或API限制`,[V.bangumiFetchError]:`Bangumi 資料拉取失敗`,[V.bangumiFetchErrorDesc]:`構建時從 Bangumi API 獲取資料失敗，該頁面內容暫不可用。`,[V.bangumiUsername]:`用戶名`,[V.bangumiApi]:`API`,[V.bangumiConfigTip]:`提示：請在頁面配置中設置正確的Bangumi用戶名`,[V.bangumiPrevPage]:`上一頁`,[V.bangumiNextPage]:`下一頁`,[V.bangumiCurrentPage]:`第`,[V.bangumiTotalPages]:`頁，共`,[V.bangumiPage]:`頁`,[V.bangumiCategoryBook]:`書籍`,[V.bangumiCategoryAnime]:`動畫`,[V.bangumiCategoryMusic]:`音樂`,[V.bangumiCategoryGame]:`遊戲`,[V.bangumiCategoryReal]:`三次元`,[V.bangumiLastUpdated]:`資料更新日期`,[V.bangumiUpdatedAt]:`構建時間`,[V.bangumiDataStatic]:`靜態數據`,[V.vndb]:`VNDB`,[V.vndbSubtitle]:`我的 VNDB 視覺小說列表`,[V.vndbFilterAll]:`全部`,[V.vndbFilterVoted]:`已評分`,[V.vndbFilterUnvoted]:`未評分`,[V.vndbFilterNotes]:`有筆記`,[V.vndbStatusWishlist]:`想玩`,[V.vndbStatusPlaying]:`在玩`,[V.vndbStatusFinished]:`已玩`,[V.vndbStatusStalled]:`擱置`,[V.vndbStatusDropped]:`拋棄`,[V.vndbStatusUnknown]:`未知`,[V.vndbNoData]:`暫無數據`,[V.vndbNoDataDescription]:`該分類下還沒有任何條目`,[V.vndbEmpty]:`暫無數據`,[V.vndbEmptyReason]:`可能的原因：用戶 ID 不存在、列表為私密、網絡連接問題或 API 限制`,[V.vndbFetchError]:`VNDB 資料拉取失敗`,[V.vndbFetchErrorDesc]:`構建時從 VNDB API 獲取資料失敗，該頁面內容暫不可用。`,[V.vndbNotConfigured]:`未配置 VNDB 用戶ID`,[V.vndbNotConfiguredDesc]:`請在 src/config/siteConfig.ts 中配置你的 VNDB 用戶ID`,[V.vndbLastUpdated]:`資料更新日期`,[V.vndbVotes]:`票`,[V.vndbLengthVeryShort]:`極短`,[V.vndbLengthShort]:`短`,[V.vndbLengthMedium]:`中等`,[V.vndbLengthLong]:`長`,[V.vndbLengthVeryLong]:`極長`,[V.bilibili]:`嗶哩嗶哩`,[V.bilibiliSubtitle]:`我的嗶哩嗶哩追番與追劇列表`,[V.bilibiliNotConfigured]:`未配置嗶哩嗶哩資料來源`,[V.bilibiliNotConfiguredDesc]:`請在 src/config/siteConfig.ts 中配置 bilibili.uid`,[V.animeTotal]:`總追番`,[V.animeAverageRating]:`平均評分`,[V.animeSearch]:`搜尋番劇...`,[V.animeAllTypes]:`全部`,[V.animeTV]:`TV 動畫`,[V.animeMovie]:`電影`,[V.animeRatingDesc]:`評分最高`,[V.animeRatingAsc]:`評分最低`,[V.animeDateDesc]:`最新發布`,[V.animeDateAsc]:`最早發布`,[V.animeNoResults]:`沒有找到匹配的番劇`,[V.animeLastUpdated]:`資料更新日期`,[V.animeEpStatus]:`進度`,[V.animeViewDetails]:`查看詳情`,[V.animeBilibiliAvg]:`Bilibili 均分`,[V.animeNoOverview]:`暫無簡介`,[V.animeClose]:`關閉`,[V.animeSynopsis]:`劇情簡介`,[V.animeWatchNow]:`立即觀看`,[V.animeAllWithCount]:`全部 ({count})`,[V.animeTVWithCount]:`TV ({count})`,[V.animeMovieWithCount]:`電影 ({count})`,[V.animeTypeAnime]:`番劇`,[V.animeTypeMovie]:`電影`,[V.animeTypeDocumentary]:`紀錄片`,[V.animeTypeChinese]:`國創`,[V.animeTypeDrama]:`電視劇`,[V.animeTypeConcert]:`演唱會`,[V.mal]:`動漫收藏`,[V.malSubtitle]:`我的 MyAnimeList 動畫與漫畫列表`,[V.malCategoryAnime]:`動畫`,[V.malCategoryManga]:`漫畫`,[V.malFilterAll]:`全部`,[V.malStatusWatching]:`在看`,[V.malStatusReading]:`在讀`,[V.malStatusCompleted]:`已看完`,[V.malStatusOnHold]:`擱置`,[V.malStatusDropped]:`拋棄`,[V.malStatusPlanToWatch]:`想看`,[V.malStatusPlanToRead]:`想讀`,[V.malNoData]:`暫無數據`,[V.malNoDataDescription]:`該分類下還沒有任何條目`,[V.malEmpty]:`暫無數據`,[V.malEmptyReason]:`可能的原因：用戶名不存在、列表為私密、Client ID 無效或網絡連接問題`,[V.malFetchError]:`MyAnimeList 資料拉取失敗`,[V.malFetchErrorDesc]:`構建時從 MyAnimeList API 獲取資料失敗。請確認用戶名和 Client ID 正確，且列表為公開狀態。`,[V.malNotConfigured]:`未配置 MyAnimeList 用戶資訊`,[V.malNotConfiguredDesc]:`請在 src/config/siteConfig.ts 中配置你的 MyAnimeList 用戶名和 Client ID（列表需為公開狀態）`,[V.malLastUpdated]:`資料更新日期`,[V.malSeasonWinter]:`冬季`,[V.malSeasonSpring]:`春季`,[V.malSeasonSummer]:`夏季`,[V.malSeasonFall]:`秋季`,[V.paginationFirst]:`首頁`,[V.paginationPrev]:`上一頁`,[V.paginationNext]:`下一頁`,[V.paginationLast]:`末頁`,[V.paginationPage]:`第`,[V.paginationOf]:`頁，共`,[V.paginationTotal]:`頁，總計`,[V.paginationRecords]:`條記錄`,[V.paginationJump]:`跳轉到指定頁`,[V.notFound]:`404`,[V.notFoundTitle]:`頁面未找到`,[V.notFoundDescription]:`抱歉，您訪問的頁面不存在或已被移動。`,[V.backToHome]:`返回首頁`,[V.rss]:`RSS 訂閱`,[V.rssDescription]:`訂閱獲取最新更新`,[V.rssSubtitle]:`通過 RSS 訂閱，第一時間獲取最新文章和動態`,[V.rssLink]:`RSS 鏈接`,[V.rssCopyToReader]:`複製鏈接到你的 RSS 閱讀器`,[V.rssCopyLink]:`複製鏈接`,[V.rssLatestPosts]:`最新文章`,[V.rssWhatIsRSS]:`什麼是 RSS？`,[V.rssWhatIsRSSDescription]:`RSS（Really Simple Syndication）是一種用於發布經常更新內容的標準格式。通過 RSS，你可以：`,[V.rssBenefit1]:`及時獲取網站最新內容，無需手動訪問`,[V.rssBenefit2]:`在一個地方管理多個網站的訂閱`,[V.rssBenefit3]:`避免錯過重要更新和文章`,[V.rssBenefit4]:`享受無廣告的純淨閱讀體驗`,[V.rssHowToUse]:`推薦使用 Feedly、Inoreader 或其他 RSS 閱讀器來訂閱本站。`,[V.rssCopied]:`RSS 鏈接已複製到剪貼板！`,[V.rssCopyFailed]:`複製失敗，請手動複製鏈接`,[V.atom]:`Atom 訂閱`,[V.atomDescription]:`訂閱獲取最新更新`,[V.atomSubtitle]:`透過 Atom 訂閱，第一時間獲取最新文章和動態`,[V.atomLink]:`Atom 連結`,[V.atomCopyToReader]:`複製連結到你的 Atom 閱讀器`,[V.atomCopied]:`Atom 連結已複製到剪貼簿！`,[V.lastModifiedPrefix]:`最後更新於 `,[V.lastModifiedOutdated]:`部分內容可能已過時`,[V.lastModifiedDaysAgo]:`距今已過 {days} 天`,[V.year]:`年`,[V.month]:`月`,[V.day]:`日`,[V.hour]:`時`,[V.minute]:`分`,[V.second]:`秒`,[V.pageViews]:`瀏覽量`,[V.pageViewsLoading]:`載入中...`,[V.pageViewsError]:`統計不可用`,[V.pinned]:`置頂`,[V.relatedPosts]:`相關文章`,[V.randomPosts]:`隨機文章`,[V.smartRecommend]:`智慧推薦`,[V.randomRecommend]:`隨機推薦`,[V.noRelatedPosts]:`暫無相關文章`,[V.noRandomPosts]:`暫無隨機文章`,[V.series]:`系列`,[V.seriesPartOf]:`所屬系列`,[V.seriesPart]:`第 {n} 篇`,[V.seriesThisArticle]:`本文`,[V.noSeries]:`暫無系列`,[V.postEncrypted]:`本文已加密`,[V.wallpaperMode]:`壁紙模式`,[V.wallpaperBannerMode]:`橫幅壁紙`,[V.wallpaperFullscreenMode]:`全屏壁紙`,[V.fullscreenLayout]:`全屏佈局`,[V.fullscreenClassicLayout]:`經典模式`,[V.fullscreenHeroLayout]:`Hero 模式`,[V.wallpaperOverlayMode]:`覆蓋透明`,[V.wallpaperNoneMode]:`純色背景`,[V.wallpaperSettings]:`壁紙設置`,[V.wallpaperTitle]:`首頁壁紙標題`,[V.wallpaperCarousel]:`壁紙輪播`,[V.wavesAnimation]:`水波紋動畫`,[V.gradientTransition]:`漸變過渡`,[V.sakuraEffect]:`櫻花特效`,[V.effectsSettings]:`特效設定`,[V.overlaySettings]:`透明設定`,[V.overlayOpacity]:`桌布透明度`,[V.overlayBlur]:`背景模糊度`,[V.overlayCardOpacity]:`卡片透明度`,[V.settingsTabAppearance]:`外觀`,[V.settingsTabWallpaper]:`壁紙`,[V.settingsTabEffects]:`特效`,[V.cardSettings]:`卡片樣式`,[V.cardBorder]:`卡片邊框和陰影`,[V.cardFollowTheme]:`卡片跟隨主題色`,[V.postListLayout]:`文章佈局`,[V.postListLayoutList]:`清單`,[V.postListLayoutGrid]:`網格`,[V.sponsor]:`打賞`,[V.sponsorTitle]:`打賞支持`,[V.sponsorDescription]:`如果我的內容對你有幫助，歡迎通過以下方式打賞我，你的支持是我持續創作的動力！`,[V.sponsorMethods]:`打賞方式`,[V.sponsorList]:`打賞列表`,[V.sponsorEmpty]:`暫無打賞記錄`,[V.sponsorAmount]:`金額`,[V.sponsorDate]:`日期`,[V.sponsorMessage]:`留言`,[V.sponsorAnonymous]:`匿名`,[V.scanToSponsor]:`掃碼打賞`,[V.sponsorGoTo]:`前往打賞`,[V.sponsorButton]:`支持與分享`,[V.sponsorButtonText]:`如果這篇文章對你有幫助，歡迎分享給更多人或打賞支持！`,[V.shareOnSocial]:`文章分享`,[V.shareOnSocialDescription]:`如果這篇文章對你有幫助，歡迎分享給更多人！`,[V.siteStats]:`站點統計`,[V.siteStatsPostCount]:`文章`,[V.siteStatsDynamicCount]:`動態`,[V.siteStatsCategoryCount]:`分類`,[V.siteStatsTagCount]:`標籤`,[V.siteStatsTotalWords]:`總字數`,[V.siteStatsRunningDays]:`運行時長`,[V.siteStatsLastUpdate]:`最後活動`,[V.siteStatsDaysAgo]:`{days} 天前`,[V.siteStatsDays]:`{days} 天`,[V.today]:`今天`,[V.siteInfo]:`站點資訊`,[V.siteInfoBuildTime]:`構建時間`,[V.siteInfoBuildPlatform]:`構建平台`,[V.siteInfoBlogVersion]:`部落格版本`,[V.siteInfoAstroVersion]:`Astro`,[V.siteInfoNodeVersion]:`Node`,[V.siteInfoPnpmVersion]:`pnpm`,[V.siteInfoSystem]:`系統資訊`,[V.siteInfoExpand]:`展開構建資訊`,[V.siteInfoCollapse]:`收起構建資訊`,[V.siteInfoDomain]:`站點域名`,[V.siteInfoLicense]:`文章許可`,[V.calendarSunday]:`日`,[V.calendarMonday]:`一`,[V.calendarTuesday]:`二`,[V.calendarWednesday]:`三`,[V.calendarThursday]:`四`,[V.calendarFriday]:`五`,[V.calendarSaturday]:`六`,[V.calendarJanuary]:`1月`,[V.calendarFebruary]:`2月`,[V.calendarMarch]:`3月`,[V.calendarApril]:`4月`,[V.calendarMay]:`5月`,[V.calendarJune]:`6月`,[V.calendarJuly]:`7月`,[V.calendarAugust]:`8月`,[V.calendarSeptember]:`9月`,[V.calendarOctober]:`10月`,[V.calendarNovember]:`11月`,[V.calendarDecember]:`12月`,[V.calendar]:`站點日曆`,[V.calendarHeatmapWeek]:`{month}月第{week}週，{count}篇文章`,[V.advertisement]:`廣告`,[V.shareArticle]:`分享`,[V.generatingPoster]:`海報生成中...`,[V.copied]:`已複製`,[V.copyLink]:`複製連結`,[V.savePoster]:`保存海報`,[V.scanToRead]:`掃碼閱讀文章`,[V.codeCollapsibleShowMore]:`展開`,[V.codeCollapsibleShowLess]:`收起`,[V.codeCollapsibleExpanded]:`代碼區塊已展開`,[V.codeCollapsibleCollapsed]:`代碼區塊已折疊`,[V.gallery]:`相簿`,[V.galleryDescription]:`記錄生活中的美好瞬間`,[V.galleryPhotos]:`張照片`,[V.galleryAlbums]:`本相簿`,[V.galleryNoAlbums]:`暫無相簿`,[V.galleryBackToAlbums]:`返回相簿列表`,[V.galleryEnterAlbum]:`進入相簿`,[V.searchAlbums]:`搜尋相簿...`,[V.passwordProtected]:`密碼保護`,[V.passwordProtectedDesc]:`此內容已被密碼保護，請輸入密碼查看。`,[V.passwordHint]:`提示`,[V.passwordPlaceholder]:`請輸入密碼`,[V.passwordSubmit]:`解鎖`,[V.passwordError]:`密碼錯誤，請重試。`,[V.passwordProtectedRss]:`本文已加密保護，請訪問網站查看。`,[V.videoPlay]:`播放背景影片`,[V.videoPause]:`暫停背景影片`,[V.videoPrev]:`上一個影片`,[V.videoNext]:`下一個影片`,[V.videoLoadError]:`影片載入失敗`,[V.immersiveReading]:`沉浸閱讀`,[V.enterImmersiveReading]:`進入沉浸閱讀`,[V.exitImmersiveReading]:`退出沉浸閱讀`,[V.tocExpand]:`展開目錄`,[V.tocCollapse]:`摺疊目錄`},ct=nt,lt={en:nt,en_us:nt,en_gb:nt,en_au:nt,zh_cn:ot,zh_tw:st,ja:rt,ja_jp:rt,ru:at,ru_ru:at,ko:it,ko_kr:it};function ut(e){return lt[e.toLowerCase().replace(`-`,`_`)]??ct}function dt(e,t){return t===void 0?e:e.replace(/\{(\w+)\}/g,(e,n)=>{let r=t[n];return r===void 0?e:String(r)})}function H(e,t){let n=R.lang,r=ut(n)[e];return r===``?n.toLowerCase()!==`zh_cn`&&ot[e]!==``?dt(ot[e],t):dt(ct[e],t):dt(r,t)}var ft=R.banner.mode,pt=[{value:`banner`,label:H(V.wallpaperBannerMode)},{value:`fullscreen`,label:H(V.wallpaperFullscreenMode)},{value:`overlay`,label:H(V.wallpaperOverlayMode)},{value:`none`,label:H(V.wallpaperNoneMode)}],mt=R.wallpaperImages.desktop,ht=R.wallpaperImages.mobile,gt=R.banner.carousel;function _t(e){return{src:mt[e%mt.length]??mt[0]??``,alt:`博客背景壁纸`}}var U={theme:`heyelio:theme`,hue:`heyelio:hue`,cardBorder:`heyelio:card-border`,cardFollowHue:`heyelio:card-follow-hue`,postLayout:`heyelio:post-layout`,wallpaperMode:`heyelio:wallpaper-mode`,fullscreenLayout:`heyelio:fullscreen-layout`,overlayOpacity:`heyelio:overlay-opacity`,overlayBlur:`heyelio:overlay-blur`,overlayCardOpacity:`heyelio:overlay-card-opacity`,bannerTitle:`heyelio:banner-title`,wallpaperRotate:`heyelio:wallpaper-rotate`,bannerWaves:`heyelio:banner-waves`,bannerGradient:`heyelio:banner-gradient`,sakura:`heyelio:sakura`},vt=R.themeColor.hue,W={hue:vt,cardBorder:!1,cardFollowHue:!1,postLayout:R.postListLayout.defaultMode,wallpaperMode:`banner`,fullscreenLayout:`classic`,overlayOpacity:.8,overlayBlur:10,overlayCardOpacity:.6,bannerTitle:!0,wallpaperRotate:R.banner.carousel.enable,bannerWaves:R.banner.waves.desktop,bannerGradient:R.banner.gradient.desktop};function yt(){if(typeof window>`u`)return`system`;try{let e=window.localStorage.getItem(U.theme);return e===`light`||e===`dark`||e===`system`?e:`system`}catch{return`system`}}function bt(e){let t=e===`dark`||e===`system`&&window.matchMedia(`(prefers-color-scheme: dark)`).matches;document.documentElement.classList.toggle(`dark`,t)}function xt(){if(typeof window>`u`)return vt;try{let e=window.localStorage.getItem(U.hue),t=Number(e);return e!==null&&Number.isFinite(t)&&t>=0&&t<=360?t:vt}catch{return vt}}function G(e,t=!1){if(typeof window>`u`)return t;try{let n=window.localStorage.getItem(e);return n===null?t:n===`true`}catch{return t}}function St(e,t,n,r){if(typeof window>`u`)return t;try{let i=Number.parseFloat(window.localStorage.getItem(e)??``);return Number.isFinite(i)?Math.min(r,Math.max(n,i)):t}catch{return t}}function Ct(){return typeof document>`u`?`classic`:document.documentElement.dataset.fullscreenLayout===`hero`?`hero`:`classic`}function wt(){if(typeof document>`u`)return`banner`;let e=document.documentElement.dataset.wallpaperMode;return e===`fullscreen`||e===`overlay`||e===`none`?e:`banner`}var Tt=`(max-width: 779px)`,Et=`(max-width: 379px)`,K=new Set,Dt=null;function Ot(){if(typeof window>`u`)return null;try{let e=window.localStorage.getItem(U.postLayout);return e===`list`||e===`grid`?e:null}catch{return null}}function kt(){return typeof window>`u`?R.postListLayout.defaultMode:window.matchMedia(Tt).matches?R.postListLayout.mobileDefaultMode:R.postListLayout.defaultMode}function At(){return typeof window>`u`?R.postListLayout.defaultMode:window.matchMedia(Et).matches?`grid`:Ot()??kt()}function jt(e){if(K.add(e),K.size===1&&typeof window<`u`){let e=[window.matchMedia(Tt),window.matchMedia(Et)],t=()=>{K.forEach(e=>{e()})};e.forEach(e=>{e.addEventListener(`change`,t)}),Dt=()=>{e.forEach(e=>{e.removeEventListener(`change`,t)})}}return()=>{K.delete(e),K.size===0&&Dt!==null&&(Dt(),Dt=null)}}function Mt(){return At()}function Nt(){return R.postListLayout.defaultMode}var Pt=(0,F.createContext)(null);function Ft({children:e}){let[t,n]=(0,F.useState)(yt),[r,i]=(0,F.useState)(xt),[a,o]=(0,F.useState)(()=>G(U.cardBorder)),[s,c]=(0,F.useState)(()=>G(U.cardFollowHue)),l=(0,F.useSyncExternalStore)(jt,Mt,Nt),[u,d]=(0,F.useState)(wt),[f,p]=(0,F.useState)(Ct),[m,h]=(0,F.useState)(()=>St(U.overlayOpacity,.8,0,1)),[g,_]=(0,F.useState)(()=>St(U.overlayBlur,W.overlayBlur,0,20)),[v,y]=(0,F.useState)(()=>St(U.overlayCardOpacity,.6,0,1)),[b,x]=(0,F.useState)(()=>G(U.bannerTitle,!0)),[S,C]=(0,F.useState)(()=>G(U.wallpaperRotate,R.banner.carousel.enable)),[w,T]=(0,F.useState)(()=>G(U.bannerWaves,R.banner.waves.desktop)),[E,D]=(0,F.useState)(()=>G(U.bannerGradient,R.banner.gradient.desktop)),[O,k]=(0,F.useState)(()=>G(U.sakura));(0,F.useEffect)(()=>{let e=document.documentElement;e.style.setProperty(`--overlay-opacity`,String(m)),e.style.setProperty(`--overlay-blur`,`${g}px`),e.style.setProperty(`--card-transparent-opacity`,String(v)),e.dataset.fullscreenLayout=f,e.dataset.bannerTitleEnabled=String(b),e.dataset.wavesEnabled=String(w),e.dataset.gradientEnabled=String(E)},[f,m,g,v,b,w,E]),(0,F.useEffect)(()=>{document.body.classList.toggle(`wallpaper-transparent`,u===`overlay`||u===`fullscreen`&&f===`hero`)},[u,f]);let A=(0,F.useCallback)(e=>{n(e),bt(e),window.localStorage.setItem(U.theme,e)},[]),j=(0,F.useCallback)(()=>{n(e=>{let t=e===`dark`?`light`:`dark`;return bt(t),window.localStorage.setItem(U.theme,t),t})},[]);(0,F.useEffect)(()=>{if(t!==`system`)return;let e=window.matchMedia(`(prefers-color-scheme: dark)`),n=()=>{document.documentElement.classList.toggle(`dark`,e.matches)};return n(),e.addEventListener(`change`,n),()=>e.removeEventListener(`change`,n)},[t]);let M=(0,F.useCallback)(e=>{i(e),document.documentElement.style.setProperty(`--hue`,String(e)),window.localStorage.setItem(U.hue,String(e))},[]),ee=(0,F.useCallback)(e=>{o(e),document.documentElement.classList.toggle(`enable-card-border`,e),window.localStorage.setItem(U.cardBorder,String(e))},[]),te=(0,F.useCallback)(e=>{c(e),document.documentElement.classList.toggle(`card-follow-hue`,e),document.body.classList.toggle(`card-follow-theme-hue`,e),window.localStorage.setItem(U.cardFollowHue,String(e))},[]),ne=(0,F.useCallback)(e=>{window.localStorage.setItem(U.postLayout,e),K.forEach(e=>{e()})},[]),re=(0,F.useCallback)(()=>{window.localStorage.removeItem(U.postLayout),K.forEach(e=>{e()})},[]),N=(0,F.useCallback)(e=>{d(e);let t=document.documentElement;e===`banner`?delete t.dataset.wallpaperMode:t.dataset.wallpaperMode=e,window.localStorage.setItem(U.wallpaperMode,e)},[]),ie=(0,F.useCallback)(e=>{p(e),window.localStorage.setItem(U.fullscreenLayout,e)},[]),P=(0,F.useCallback)(e=>{let t=Math.min(1,Math.max(0,e));h(t),window.localStorage.setItem(U.overlayOpacity,String(t))},[]),ae=(0,F.useCallback)(e=>{let t=Math.min(20,Math.max(0,e));_(t),window.localStorage.setItem(U.overlayBlur,String(t))},[]),oe=(0,F.useCallback)(e=>{let t=Math.min(1,Math.max(0,e));y(t),window.localStorage.setItem(U.overlayCardOpacity,String(t))},[]),se=(0,F.useCallback)(e=>{x(e),window.localStorage.setItem(U.bannerTitle,String(e))},[]),ce=(0,F.useCallback)(e=>{C(e),window.localStorage.setItem(U.wallpaperRotate,String(e))},[]),le=(0,F.useCallback)(e=>{T(e),window.localStorage.setItem(U.bannerWaves,String(e))},[]),I=(0,F.useCallback)(e=>{D(e),window.localStorage.setItem(U.bannerGradient,String(e))},[]),ue=(0,F.useCallback)(e=>{k(e),window.localStorage.setItem(U.sakura,String(e))},[]),de=(0,F.useMemo)(()=>({theme:t,hue:r,cardBorder:a,cardFollowHue:s,postLayout:l,wallpaperMode:u,fullscreenLayout:f,overlayOpacity:m,overlayBlur:g,overlayCardOpacity:v,wallpaper:_t(0),bannerTitle:b,wallpaperRotate:S,bannerWaves:w,bannerGradient:E,sakura:O,setTheme:A,toggleTheme:j,setHue:M,setCardBorder:ee,setCardFollowHue:te,setPostLayout:ne,resetPostLayout:re,setWallpaperMode:N,setFullscreenLayout:ie,setOverlayOpacity:P,setOverlayBlur:ae,setOverlayCardOpacity:oe,setBannerTitle:se,setWallpaperRotate:ce,setBannerWaves:le,setBannerGradient:I,setSakura:ue}),[t,r,a,s,l,u,f,m,g,v,b,S,w,E,O,A,j,M,ee,te,ne,re,N,ie,P,ae,oe,se,ce,le,I,ue]);return(0,L.jsx)(Pt.Provider,{value:de,children:e})}function It(){let e=(0,F.useContext)(Pt);if(!e)throw Error(`useTheme must be used within ThemeProvider`);return e}var Lt=[/\/posts\/.+/,/\/post\/.+/,/\/projects\/.+/];function Rt(e){return Lt.some(t=>t.test(e))}function q(...e){return e.filter(Boolean).join(` `)}var zt={enable:!0,position:`both`,tabletSidebar:`left`,hideSidebarOnPostPage:!1,noSidebarContentWidth:.6,leftComponents:[{type:`profile`,enable:!0,position:`top`,showOnPostPage:!0},{type:`announcement`,enable:!0,position:`top`,showOnPostPage:!0},{type:`music`,enable:!0,position:`top`,showOnPostPage:!0},{type:`categories`,enable:!0,position:`sticky`,showOnPostPage:!0,specificConfig:{collapseThreshold:5}},{type:`tags`,enable:!0,position:`sticky`,showOnPostPage:!0,specificConfig:{collapseThreshold:10}}],rightComponents:[{type:`dynamic`,enable:!0,position:`top`,showOnPostPage:!0,specificConfig:{dynamic:{limit:2}}},{type:`stats`,enable:!0,position:`top`,showOnPostPage:!1},{type:`siteInfo`,enable:!0,position:`top`,showOnPostPage:!1,specificConfig:{siteInfo:{unknownBuildPlatform:`Unknown CI`}}},{type:`calendar`,enable:!0,showTitle:!1,position:`sticky`,showOnPostPage:!1,specificConfig:{calendar:{showHeatmap:!0}}},{type:`sidebarToc`,enable:!0,position:`sticky`,showOnPostPage:!0,hideOnNonPostPage:!0},{type:`advertisement`,enable:!1,position:`sticky`,showOnPostPage:!0,specificConfig:{ad:{title:`支持博主`,content:`如果您觉得本站内容对您有帮助，欢迎支持我们的创作！您的支持是我们持续更新的动力。`,link:{text:`支持一下`,url:`about/`,external:!1},closable:!1,displayCount:-1}}}],mobileBottomComponents:[{type:`profile`,enable:!0,showOnPostPage:!0},{type:`announcement`,enable:!0,showOnPostPage:!0},{type:`categories`,enable:!0,showOnPostPage:!0,specificConfig:{collapseThreshold:5}},{type:`tags`,enable:!0,showOnPostPage:!0,specificConfig:{collapseThreshold:10}},{type:`dynamic`,enable:!0,showOnPostPage:!0,specificConfig:{dynamic:{limit:2}}},{type:`stats`,enable:!0,showOnPostPage:!0},{type:`siteInfo`,enable:!0,showOnPostPage:!0,specificConfig:{siteInfo:{unknownBuildPlatform:`Unknown CI`}}}]},Bt=`<svg xmlns="http://www.w3.org/2000/svg" width="860.13137" height="571.14799" viewBox="0 0 860.13137 571.14799"><path d="M605.66974,324.95306c-7.66934-12.68446-16.7572-26.22768-30.98954-30.36953-16.482-4.7965-33.4132,4.73193-47.77473,14.13453a1392.15692,1392.15692,0,0,0-123.89338,91.28311l.04331.49238q46.22556-3.1878,92.451-6.37554c22.26532-1.53546,45.29557-3.2827,64.97195-13.8156,7.46652-3.99683,14.74475-9.33579,23.20555-9.70782,10.51175-.46217,19.67733,6.87923,26.8802,14.54931,42.60731,45.371,54.937,114.75409,102.73817,154.61591A1516.99453,1516.99453,0,0,0,605.66974,324.95306Z" transform="translate(-169.93432 -164.42601)" fill="var(--illus-soft)"/><path d="M867.57068,709.78146c-4.71167-5.94958-6.6369-7.343-11.28457-13.34761q-56.7644-73.41638-106.70791-151.79237-33.92354-53.23-64.48275-108.50439-14.54864-26.2781-28.29961-52.96872-10.67044-20.6952-20.8646-41.63793c-1.94358-3.98782-3.8321-7.99393-5.71122-12.00922-4.42788-9.44232-8.77341-18.93047-13.43943-28.24449-5.31686-10.61572-11.789-21.74485-21.55259-28.877a29.40493,29.40493,0,0,0-15.31855-5.89458c-7.948-.51336-15.28184,2.76855-22.17568,6.35295-50.43859,26.301-97.65922,59.27589-140.3696,96.79771A730.77816,730.77816,0,0,0,303.32241,496.24719c-1.008,1.43927-3.39164.06417-2.37419-1.38422q6.00933-8.49818,12.25681-16.81288A734.817,734.817,0,0,1,500.80465,303.06436q18.24824-11.82581,37.18269-22.54245c6.36206-3.60275,12.75188-7.15967,19.25136-10.49653,6.37146-3.27274,13.13683-6.21547,20.41563-6.32547,24.7701-.385,37.59539,27.66695,46.40506,46.54248q4.15283,8.9106,8.40636,17.76626,16.0748,33.62106,33.38729,66.628,10.68453,20.379,21.83683,40.51955,34.7071,62.71816,73.77854,122.897c34.5059,53.1429,68.73651,100.08874,108.04585,149.78472C870.59617,709.21309,868.662,711.17491,867.57068,709.78146Z" transform="translate(-169.93432 -164.42601)" fill="var(--illus-line)"/><path d="M414.91613,355.804c-1.43911-1.60428-2.86927-3.20856-4.31777-4.81284-11.42244-12.63259-23.6788-25.11847-39.3644-32.36067a57.11025,57.11025,0,0,0-23.92679-5.54622c-8.56213.02753-16.93178,2.27348-24.84306,5.41792-3.74034,1.49427-7.39831,3.1902-11.00078,4.99614-4.11634,2.07182-8.15927,4.28118-12.1834,6.50883q-11.33112,6.27044-22.36816,13.09089-21.9606,13.57221-42.54566,29.21623-10.67111,8.11311-20.90174,16.75788-9.51557,8.03054-18.64618,16.492c-1.30169,1.20091-3.24527-.74255-1.94358-1.94347,1.60428-1.49428,3.22691-2.97938,4.84955-4.44613q6.87547-6.21546,13.9712-12.19257,12.93921-10.91827,26.54851-20.99312,21.16293-15.67614,43.78288-29.22541,11.30361-6.76545,22.91829-12.96259c2.33794-1.24675,4.70318-2.466,7.09572-3.6211a113.11578,113.11578,0,0,1,16.86777-6.86632,60.0063,60.0063,0,0,1,25.476-2.50265,66.32706,66.32706,0,0,1,23.50512,8.1314c15.40091,8.60812,27.34573,21.919,38.97,34.90915C418.03337,355.17141,416.09875,357.12405,414.91613,355.804Z" transform="translate(-169.93432 -164.42601)" fill="var(--illus-line)"/><path d="M730.47659,486.71092l36.90462-13.498,18.32327-6.70183c5.96758-2.18267,11.92082-4.66747,18.08988-6.23036a28.53871,28.53871,0,0,1,16.37356.20862,37.73753,37.73753,0,0,1,12.771,7.91666,103.63965,103.63965,0,0,1,10.47487,11.18643c3.98932,4.79426,7.91971,9.63877,11.86772,14.46706q24.44136,29.89094,48.56307,60.04134,24.12117,30.14991,47.91981,60.556,23.85681,30.48041,47.38548,61.21573,2.88229,3.76518,5.75966,7.53415c1.0598,1.38809,3.44949.01962,2.37472-1.38808Q983.582,650.9742,959.54931,620.184q-24.09177-30.86383-48.51647-61.46586-24.42421-30.60141-49.17853-60.93743-6.16706-7.55761-12.35445-15.09858c-3.47953-4.24073-6.91983-8.52718-10.73628-12.47427-7.00539-7.24516-15.75772-13.64794-26.23437-13.82166-6.15972-.10214-12.121,1.85248-17.844,3.92287-6.16968,2.232-12.32455,4.50571-18.48633,6.75941l-37.16269,13.59243-9.29067,3.3981c-1.64875.603-.93651,3.2619.73111,2.652Z" transform="translate(-169.93432 -164.42601)" fill="var(--illus-line)"/><path d="M366.37741,334.52609c-18.75411-9.63866-42.77137-7.75087-60.00508,4.29119a855.84708,855.84708,0,0,1,97.37056,22.72581C390.4603,353.75916,380.07013,341.5635,366.37741,334.52609Z" transform="translate(-169.93432 -164.42601)" fill="var(--illus-soft)"/><path d="M306.18775,338.7841l-3.61042,2.93462c1.22123-1.02713,2.4908-1.99013,3.795-2.90144C306.31073,338.80665,306.24935,338.79473,306.18775,338.7841Z" transform="translate(-169.93432 -164.42601)" fill="var(--illus-soft)"/><path d="M831.54929,486.84576c-3.6328-4.42207-7.56046-9.05222-12.99421-10.84836l-5.07308.20008A575.436,575.436,0,0,0,966.74929,651.418Q899.14929,569.13192,831.54929,486.84576Z" transform="translate(-169.93432 -164.42601)" fill="var(--illus-soft)"/><path d="M516.08388,450.36652A37.4811,37.4811,0,0,0,531.015,471.32518c2.82017,1.92011,6.15681,3.76209,7.12158,7.03463a8.37858,8.37858,0,0,1-.87362,6.1499,24.88351,24.88351,0,0,1-3.86126,5.04137l-.13667.512c-6.99843-4.14731-13.65641-9.3934-17.52227-16.55115s-4.40553-16.53895.34116-23.14544" transform="translate(-169.93432 -164.42601)" fill="var(--illus-soft)"/><path d="M749.08388,653.36652A37.4811,37.4811,0,0,0,764.015,674.32518c2.82017,1.92011,6.15681,3.76209,7.12158,7.03463a8.37858,8.37858,0,0,1-.87362,6.1499,24.88351,24.88351,0,0,1-3.86126,5.04137l-.13667.512c-6.99843-4.14731-13.65641-9.3934-17.52227-16.55115s-4.40553-16.53895.34116-23.14544" transform="translate(-169.93432 -164.42601)" fill="var(--illus-soft)"/><path d="M284.08388,639.36652A37.4811,37.4811,0,0,0,299.015,660.32518c2.82017,1.92011,6.15681,3.76209,7.12158,7.03463a8.37858,8.37858,0,0,1-.87362,6.1499,24.88351,24.88351,0,0,1-3.86126,5.04137l-.13667.512c-6.99843-4.14731-13.65641-9.3934-17.52227-16.55115s-4.40553-16.53895.34116-23.14544" transform="translate(-169.93432 -164.42601)" fill="var(--illus-soft)"/><circle cx="649.24878" cy="51" r="51" fill="currentColor"/><path d="M911.21851,176.29639c-24.7168-3.34094-52.93512,10.01868-59.34131,34.12353a21.59653,21.59653,0,0,0-41.09351,2.10871l2.82972,2.02667a372.27461,372.27461,0,0,0,160.65881-.72638C957.07935,195.76,935.93537,179.63727,911.21851,176.29639Z" transform="translate(-169.93432 -164.42601)" fill="var(--illus-soft)"/><path d="M805.21851,244.29639c-24.7168-3.34094-52.93512,10.01868-59.34131,34.12353a21.59653,21.59653,0,0,0-41.09351,2.10871l2.82972,2.02667a372.27461,372.27461,0,0,0,160.65881-.72638C851.07935,263.76,829.93537,247.63727,805.21851,244.29639Z" transform="translate(-169.93432 -164.42601)" fill="var(--illus-soft)"/><path d="M1020.94552,257.15423a.98189.98189,0,0,1-.30176-.04688C756.237,173.48919,523.19942,184.42376,374.26388,208.32122c-20.26856,3.251-40.59131,7.00586-60.40381,11.16113-5.05811,1.05957-10.30567,2.19532-15.59668,3.37793-6.31885,1.40723-12.55371,2.85645-18.53223,4.30567q-3.873.917-7.59472,1.84863c-3.75831.92773-7.57178,1.89453-11.65967,2.957-4.56787,1.17774-9.209,2.41309-13.79737,3.67188a.44239.44239,0,0,1-.05127.01465l.00049.001c-5.18261,1.415-10.33789,2.8711-15.32324,4.3252-2.69824.77929-5.30371,1.54785-7.79932,2.30664-.2788.07715-.52587.15136-.77636.22754l-.53614.16308c-.31054.09473-.61718.1875-.92382.27539l-.01953.00586.00048.001-.81152.252c-.96777.293-1.91211.5791-2.84082.86426-24.54492,7.56641-38.03809,12.94922-38.17139,13.00195a1,1,0,1,1-.74414-1.85644c.13428-.05274,13.69336-5.46289,38.32764-13.05762.93213-.28613,1.87891-.57226,2.84961-.86621l.7539-.23438c.02588-.00976.05176-.01757.07813-.02539.30518-.08691.60986-.17968.91943-.27343l.53711-.16309c.26758-.08105.53125-.16113.80127-.23535,2.47852-.75391,5.09278-1.52441,7.79785-2.30664,4.98731-1.45508,10.14746-2.91113,15.334-4.32813.01611-.00586.03271-.00976.04883-.01464v-.001c4.60449-1.2627,9.26269-2.50293,13.84521-3.68457,4.09424-1.06348,7.915-2.03223,11.67969-2.96192q3.73755-.93017,7.60937-1.85253c5.98536-1.45118,12.23291-2.90235,18.563-4.3125,5.29932-1.1836,10.55567-2.32227,15.62207-3.38282,19.84326-4.16211,40.19776-7.92285,60.49707-11.17871C523.09591,182.415,756.46749,171.46282,1021.2463,255.2011a.99974.99974,0,0,1-.30078,1.95313Z" transform="translate(-169.93432 -164.42601)" fill="var(--illus-line)"/><path d="M432.92309,584.266a6.72948,6.72948,0,0,0-1.7-2.67,6.42983,6.42983,0,0,0-.92-.71c-2.61-1.74-6.51-2.13-8.99,0a5.81012,5.81012,0,0,0-.69.71q-1.11,1.365-2.28,2.67c-1.28,1.46-2.59,2.87-3.96,4.24-.39.38-.78.77-1.18,1.15-.23.23-.46.45-.69.67-.88.84-1.78,1.65-2.69,2.45-.48.43-.96.85-1.45,1.26-.73.61-1.46,1.22-2.2,1.81-.07.05-.14.1-.21.16-.02.01-.03.03-.05.04-.01,0-.02,0-.03.02a.17861.17861,0,0,0-.07.05c-.22.15-.37.25-.48.34.04-.01995.08-.05.12-.07-.18.14-.37.28-.55.42-1.75,1.29-3.54,2.53-5.37,3.69a99.21022,99.21022,0,0,1-14.22,7.55c-.33.13-.67.27-1.01.4a85.96993,85.96993,0,0,1-40.85,6.02q-2.13008-.165-4.26-.45c-1.64-.24-3.27-.53-4.89-.86a97.93186,97.93186,0,0,1-18.02-5.44,118.65185,118.65185,0,0,1-20.66-12.12c-1-.71-2.01-1.42-3.02-2.11,1.15-2.82,2.28-5.64,3.38-8.48.55-1.37,1.08-2.74,1.6-4.12,4.09-10.63,7.93-21.36,11.61-32.13q5.58-16.365,10.53-32.92.51-1.68.99-3.36,2.595-8.745,4.98-17.53c.15-.56994.31-1.12994.45-1.7q.68994-2.52,1.35-5.04c1-3.79-1.26-8.32-5.24-9.23a7.63441,7.63441,0,0,0-9.22,5.24c-.43,1.62-.86,3.23-1.3,4.85q-3.165,11.74494-6.66,23.41-.51,1.68-1.02,3.36-7.71,25.41-16.93,50.31-1.11,3.015-2.25,6.01c-.37.98-.74,1.96-1.12,2.94-.73,1.93-1.48,3.86-2.23,5.79-.43006,1.13-.87006,2.26-1.31,3.38-.29.71-.57,1.42-.85,2.12a41.80941,41.80941,0,0,0-8.81-2.12l-.48-.06a27.397,27.397,0,0,0-7.01.06,23.91419,23.91419,0,0,0-17.24,10.66c-4.77,7.51-4.71,18.25,1.98,24.63,6.89,6.57,17.32,6.52,25.43,2.41a28.35124,28.35124,0,0,0,10.52-9.86,50.56939,50.56939,0,0,0,2.74-4.65c.21.14.42.28.63.43.8.56,1.6,1.13,2.39,1.69a111.73777,111.73777,0,0,0,14.51,8.91,108.35887,108.35887,0,0,0,34.62,10.47c.27.03.53.07.8.1,1.33.17,2.67.3,4.01.41a103.78229,103.78229,0,0,0,55.58-11.36q2.175-1.125,4.31-2.36,3.315-1.92,6.48-4.08c1.15-.78,2.27-1.57,3.38-2.4a101.04244,101.04244,0,0,0,13.51-11.95q2.35491-2.475,4.51-5.11005a8.0612,8.0612,0,0,0,2.2-5.3A7.5644,7.5644,0,0,0,432.92309,584.266Zm-165.59,23.82c.21-.15.42-.31.62-.47C267.89312,607.766,267.60308,607.936,267.33312,608.086Zm3.21-3.23c-.23.26-.44.52-.67.78a23.36609,23.36609,0,0,1-2.25,2.2c-.11.1-.23.2-.35.29a.00976.00976,0,0,0-.01.01,3.80417,3.80417,0,0,0-.42005.22q-.645.39-1.31994.72a17.00459,17.00459,0,0,1-2.71.75,16.79925,16.79925,0,0,1-2.13.02h-.02a14.82252,14.82252,0,0,1-1.45-.4c-.24-.12-.47-.25994-.7-.4-.09-.08-.17005-.16-.22-.21a2.44015,2.44015,0,0,1-.26995-.29.0098.0098,0,0,0-.01-.01c-.11005-.2-.23005-.4-.34-.6a.031.031,0,0,1-.01-.02c-.08-.25-.15-.51-.21-.77a12.51066,12.51066,0,0,1,.01-1.37,13.4675,13.4675,0,0,1,.54-1.88,11.06776,11.06776,0,0,1,.69-1.26c.02-.04.12-.2.23-.38.01-.01.01-.01.01-.02.15-.17.3-.35.46-.51.27-.3.56-.56.85-.83a18.02212,18.02212,0,0,1,1.75-1.01,19.48061,19.48061,0,0,1,2.93-.79,24.98945,24.98945,0,0,1,4.41.04,30.30134,30.30134,0,0,1,4.1,1.01,36.94452,36.94452,0,0,1-2.77,4.54C270.6231,604.746,270.58312,604.806,270.54308,604.856Zm-11.12-3.29a2.18029,2.18029,0,0,1-.31.38995A1.40868,1.40868,0,0,1,259.42309,601.566Z" transform="translate(-169.93432 -164.42601)" fill="var(--illus-ink)"/><path d="M402.86309,482.136q-.13494,4.71-.27,9.42-.285,10.455-.59,20.92-.315,11.775-.66,23.54-.165,6.07507-.34,12.15-.465,16.365-.92,32.72c-.03,1.13-.07,2.25-.1,3.38q-.225,8.11506-.45,16.23-.255,8.805-.5,17.61-.18,6.59994-.37,13.21-1.34994,47.895-2.7,95.79a7.64844,7.64844,0,0,1-7.5,7.5,7.56114,7.56114,0,0,1-7.5-7.5q.75-26.94,1.52-53.88.675-24.36,1.37-48.72.225-8.025.45-16.06.345-12.09.68-24.18c.03-1.13.07-2.25.1-3.38.02-.99.05-1.97.08-2.96q.66-23.475,1.32-46.96.27-9.24.52-18.49.3-10.545.6-21.08c.09-3.09.17005-6.17.26-9.26a7.64844,7.64844,0,0,1,7.5-7.5A7.56116,7.56116,0,0,1,402.86309,482.136Z" transform="translate(-169.93432 -164.42601)" fill="var(--illus-ink)"/><path d="M814.29118,484.2172a893.23753,893.23753,0,0,1-28.16112,87.94127c-3.007,7.94641-6.08319,15.877-9.3715,23.71185l.75606-1.7916a54.58274,54.58274,0,0,1-5.58953,10.61184q-.22935.32119-.46685.63642,1.16559-1.49043.4428-.589c-.25405.30065-.5049.60219-.7676.89546a23.66436,23.66436,0,0,1-2.2489,2.20318q-.30139.25767-.61188.5043l.93783-.729c-.10884.25668-.87275.59747-1.11067.74287a18.25362,18.25362,0,0,1-2.40479,1.21853l1.7916-.75606a19.0859,19.0859,0,0,1-4.23122,1.16069l1.9938-.26791a17.02055,17.02055,0,0,1-4.29785.046l1.99379.2679a14.0022,14.0022,0,0,1-3.40493-.917l1.79159.75606a12.01175,12.01175,0,0,1-1.67882-.89614c-.27135-.17688-1.10526-.80852-.01487.02461,1.13336.86595.14562.07434-.08763-.15584-.19427-.19171-.36962-.4-.55974-.595-.88208-.90454.99637,1.55662.39689.49858a18.18179,18.18179,0,0,1-.87827-1.63672l.75606,1.7916a11.92493,11.92493,0,0,1-.728-2.65143l.26791,1.9938a13.65147,13.65147,0,0,1-.00316-3.40491l-.2679,1.9938a15.96371,15.96371,0,0,1,.99486-3.68011l-.75606,1.7916a16.72914,16.72914,0,0,1,1.17794-2.29848,6.72934,6.72934,0,0,1,.72851-1.0714c.04915.01594-1.26865,1.51278-.56937.757.1829-.19767.354-.40592.539-.602.29617-.31382.61354-.60082.92561-.89791,1.04458-.99442-1.46188.966-.25652.17907a19.0489,19.0489,0,0,1,2.74925-1.49923l-1.79159.75606a20.31136,20.31136,0,0,1,4.99523-1.33984l-1.9938.2679a25.62828,25.62828,0,0,1,6.46062.07647l-1.9938-.2679a33.21056,33.21056,0,0,1,7.89178,2.2199l-1.7916-.75606c5.38965,2.31383,10.16308,5.74926,14.928,9.118a111.94962,111.94962,0,0,0,14.50615,8.9065,108.38849,108.38849,0,0,0,34.62226,10.47371,103.93268,103.93268,0,0,0,92.58557-36.75192,8.07773,8.07773,0,0,0,2.1967-5.3033,7.63232,7.63232,0,0,0-2.1967-5.3033c-2.75154-2.52586-7.94926-3.239-10.6066,0a95.63575,95.63575,0,0,1-8.10664,8.72692q-2.01736,1.914-4.14232,3.70983-1.21364,1.02588-2.46086,2.01121c-.3934.31081-1.61863,1.13807.26309-.19744-.43135.30614-.845.64036-1.27058.95478a99.26881,99.26881,0,0,1-20.33215,11.56478l1.79159-.75606a96.8364,96.8364,0,0,1-24.17119,6.62249l1.99379-.2679a97.64308,97.64308,0,0,1-25.75362-.03807l1.99379.2679a99.79982,99.79982,0,0,1-24.857-6.77027l1.7916.75607a116.02515,116.02515,0,0,1-21.7364-12.59112,86.87725,86.87725,0,0,0-11.113-6.99417,42.8238,42.8238,0,0,0-14.43784-4.38851c-9.43884-1.11076-19.0571,2.56562-24.24624,10.72035-4.77557,7.50482-4.71394,18.24362,1.97369,24.62519,6.8877,6.5725,17.31846,6.51693,25.43556,2.40567,7.81741-3.95946,12.51288-12.18539,15.815-19.94186,7.43109-17.45514,14.01023-35.31364,20.1399-53.263q9.09651-26.63712,16.49855-53.81332.91661-3.36581,1.80683-6.73869c1.001-3.78869-1.26094-8.32-5.23829-9.22589a7.63317,7.63317,0,0,0-9.22589,5.23829Z" transform="translate(-169.93432 -164.42601)" fill="var(--illus-ink)"/><path d="M889.12382,482.13557l-2.69954,95.79311-2.68548,95.29418-1.5185,53.88362a7.56465,7.56465,0,0,0,7.5,7.5,7.64923,7.64923,0,0,0,7.5-7.5l2.69955-95.79311,2.68548-95.29418,1.51849-53.88362a7.56465,7.56465,0,0,0-7.5-7.5,7.64923,7.64923,0,0,0-7.5,7.5Z" transform="translate(-169.93432 -164.42601)" fill="var(--illus-ink)"/><path d="M629.52566,700.36106h2.32885V594.31942h54.32863v-2.32291H631.85451V547.25214H673.8102q-.92256-1.17339-1.89893-2.31694H631.85451V515.38231c-.7703-.32846-1.54659-.64493-2.32885-.9435V544.9352h-45.652V507.07c-.78227.03583-1.55258.08959-2.3289.15527v37.71h-36.4201V516.68409c-.78227.34636-1.55258.71061-2.31694,1.0928V544.9352h-30.6158v2.31694h30.6158v44.74437h-30.6158v2.32291h30.6158V700.36106h2.31694V594.31942a36.41283,36.41283,0,0,1,36.4201,36.42007v69.62157h2.3289V594.31942h45.652Zm-84.401-108.36455V547.25214h36.4201v44.74437Zm38.749,0V547.25214h.91362a44.74135,44.74135,0,0,1,44.73842,44.74437Z" transform="translate(-169.93432 -164.42601)" opacity="0.2"/><path d="M615.30309,668.566a63.05854,63.05854,0,0,1-20.05,33.7c-.74.64-1.48,1.26-2.25,1.87q-2.805.25506-5.57.52c-1.53.14-3.04.29-4.54.43l-.27.03-.19-1.64-.76-6.64a37.623,37.623,0,0,1-3.3-32.44c2.64-7.12,7.42-13.41,12.12-19.65,6.49-8.62,12.8-17.14,13.03-27.65a60.54415,60.54415,0,0,1,7.9,13.33,16.432,16.432,0,0,0-5.12,3.76995c-.41.45-.82,1.08-.54,1.62006.24.46.84.57,1.36.62994,1.25.13,2.51.26,3.76.39,1,.11,2,.21,3,.32a63.99025,63.99025,0,0,1,2.45,12.18A61.18851,61.18851,0,0,1,615.30309,668.566Z" transform="translate(-169.93432 -164.42601)" fill="var(--illus-ink)"/><path d="M648.50311,642.356c-5.9,4.29-9.35,10.46-12.03,17.26a16.62776,16.62776,0,0,0-7.17,4.58c-.41.45-.82,1.08-.54,1.62006.24.46.84.57,1.36.62994,1.25.13,2.51.26,3.76.39-2.68,8.04-5.14,16.36-9.88,23.15a36.98942,36.98942,0,0,1-12.03,10.91,38.49166,38.49166,0,0,1-4.02,1.99q-7.62.585-14.95,1.25-2.805.25506-5.57.52c-1.53.14-3.04.29-4.54.43q-.015-.825,0-1.65a63.30382,63.30382,0,0,1,15.25-39.86c.45-.52.91-1.03,1.38-1.54a61.7925,61.7925,0,0,1,16.81-12.7A62.65425,62.65425,0,0,1,648.50311,642.356Z" transform="translate(-169.93432 -164.42601)" fill="currentColor"/><path d="M589.16308,699.526l-1.15,3.4-.58,1.73c-1.53.14-3.04.29-4.54.43l-.27.03c-1.66.17-3.31.34-4.96.51-.43-.5-.86-1.01-1.28-1.53a62.03045,62.03045,0,0,1,8.07-87.11c-1.32,6.91.22,13.53,2.75,20.1-.27.11-.53.22-.78.34a16.432,16.432,0,0,0-5.12,3.76995c-.41.45-.82,1.08-.54,1.62006.24.46.84.57,1.36.62994,1.25.13,2.51.26,3.76.39,1,.11,2,.21,3,.32q.705.075,1.41.15c.07.15.13.29.2.44,2.85,6.18,5.92,12.39,7.65,18.83a43.66591,43.66591,0,0,1,1.02,4.91A37.604,37.604,0,0,1,589.16308,699.526Z" transform="translate(-169.93432 -164.42601)" fill="currentColor"/><path d="M689.82123,554.48655c-8.60876-16.79219-21.94605-30.92088-37.63219-41.30357a114.2374,114.2374,0,0,0-52.5626-18.37992q-3.69043-.33535-7.399-.39281c-2.92141-.04371-46.866,12.63176-61.58712,22.98214a114.29462,114.29462,0,0,0-35.333,39.527,102.49972,102.49972,0,0,0-12.12557,51.6334,113.56387,113.56387,0,0,0,14.70268,51.47577,110.47507,110.47507,0,0,0,36.44425,38.74592C549.66655,708.561,565.07375,734.51,583.1831,735.426c18.24576.923,39.05418-23.55495,55.6951-30.98707a104.42533,104.42533,0,0,0,41.72554-34.005,110.24964,110.24964,0,0,0,19.599-48.94777c2.57368-18.08313,1.37415-36.73271-4.80123-54.01627a111.85969,111.85969,0,0,0-5.58024-12.9833c-1.77961-3.50519-6.996-4.7959-10.26142-2.69063a7.67979,7.67979,0,0,0-2.69064,10.26142q1.56766,3.08773,2.91536,6.27758l-.75606-1.7916a101.15088,101.15088,0,0,1,6.87641,25.53816l-.26791-1.99379a109.2286,109.2286,0,0,1-.06613,28.68252l.26791-1.9938a109.73379,109.73379,0,0,1-7.55462,27.67419l.75606-1.79159a104.212,104.212,0,0,1-6.67151,13.09835q-1.92308,3.18563-4.08062,6.22159c-.63172.8881-1.28287,1.761-1.939,2.63114-.85625,1.13555,1.16691-1.48321.28228-.36941-.15068.18972-.30049.3801-.45182.5693q-.68121.85165-1.3818,1.68765a93.61337,93.61337,0,0,1-10.17647,10.38359q-1.36615,1.19232-2.77786,2.33115c-.46871.37832-.932.77269-1.42079,1.12472.01861-.0134,1.57956-1.19945.65556-.511-.2905.21644-.57851.43619-.86961.65184q-2.90994,2.1558-5.97433,4.092a103.48509,103.48509,0,0,1-14.75565,7.7131l1.7916-.75606a109.21493,109.21493,0,0,1-27.59663,7.55154l1.9938-.26791a108.15361,108.15361,0,0,1-28.58907.0506l1.99379.2679a99.835,99.835,0,0,1-25.09531-6.78448l1.79159.75607a93.64314,93.64314,0,0,1-13.41605-6.99094q-3.17437-2-6.18358-4.24743c-.2862-.21359-.56992-.43038-.855-.64549-.9155-.69088.65765.50965.67021.51787a19.16864,19.16864,0,0,1-1.535-1.22469q-1.45353-1.18358-2.86136-2.4218a101.98931,101.98931,0,0,1-10.49319-10.70945q-1.21308-1.43379-2.37407-2.91054c-.33524-.4263-.9465-1.29026.40424.5289-.17775-.23939-.36206-.47414-.54159-.71223q-.64657-.85751-1.27568-1.72793-2.203-3.048-4.18787-6.24586a109.29037,109.29037,0,0,1-7.8054-15.10831l.75606,1.7916a106.58753,106.58753,0,0,1-7.34039-26.837l.26791,1.9938a97.86589,97.86589,0,0,1-.04843-25.63587l-.2679,1.9938A94.673,94.673,0,0,1,505.27587,570.55l-.75606,1.7916a101.55725,101.55725,0,0,1,7.19519-13.85624q2.0655-3.32328,4.37767-6.4847.52528-.71832,1.06244-1.42786c.324-.4279,1.215-1.49333-.30537.38842.14906-.18449.29252-.37428.43942-.56041q1.26882-1.60756,2.59959-3.1649A107.40164,107.40164,0,0,1,530.772,536.21508q1.47408-1.29171,2.99464-2.52906.6909-.56218,1.39108-1.11284c.18664-.14673.37574-.29073.56152-.43858-1.99743,1.58953-.555.43261-.10157.09288q3.13393-2.34833,6.43534-4.46134a103.64393,103.64393,0,0,1,15.38655-8.10791l-1.7916.75606c7.76008-3.25839,42.14086-10.9492,48.394-10.10973l-1.99379-.26791A106.22471,106.22471,0,0,1,628.768,517.419l-1.7916-.75606a110.31334,110.31334,0,0,1,12.6002,6.32922q3.04344,1.78405,5.96742,3.76252,1.38351.93658,2.73809,1.915.677.48917,1.34626.98885c.24789.185.49386.37253.74135.558,1.03924.779-1.43148-1.1281-.34209-.26655a110.84261,110.84261,0,0,1,10.36783,9.2532q2.401,2.445,4.63686,5.04515,1.14659,1.33419,2.24643,2.70757c.36436.45495,1.60506,2.101.08448.08457.37165.49285.74744.98239,1.11436,1.47884a97.97718,97.97718,0,0,1,8.39161,13.53807c1.79317,3.49775,6.98675,4.80186,10.26142,2.69064A7.67666,7.67666,0,0,0,689.82123,554.48655Z" transform="translate(-169.93432 -164.42601)" fill="var(--illus-ink)"/><path d="M602.43116,676.88167a3.77983,3.77983,0,0,1-2.73939-6.55137c.09531-.37882.16368-.65085.259-1.02968q-.05115-.12366-.1029-.24717c-3.47987-8.29769-25.685,14.83336-26.645,22.63179a30.029,30.029,0,0,0,.52714,10.32752A120.39223,120.39223,0,0,1,562.77838,652.01a116.20247,116.20247,0,0,1,.72078-12.96332q.59712-5.293,1.65679-10.51055a121.78667,121.78667,0,0,1,24.1515-51.61646c6.87378.38364,12.898-.66348,13.47967-13.98532.10346-2.36972,1.86113-4.42156,2.24841-6.756-.65621.08607-1.32321.13985-1.97941.18285-.20444.0107-.41958.02149-.624.03228l-.07709.00346a3.745,3.745,0,0,1-3.07566-6.10115q.425-.52305.85054-1.04557c.43036-.53793.87143-1.06507,1.30171-1.60292a1.865,1.865,0,0,0,.13986-.16144c.49494-.61322.98971-1.21564,1.48465-1.82885a10.82911,10.82911,0,0,0-3.55014-3.43169c-4.95941-2.90463-11.80146-.89293-15.38389,3.59313-3.59313,4.486-4.27083,10.77947-3.023,16.3843a43.39764,43.39764,0,0,0,6.003,13.3828c-.269.34429-.54872.67779-.81765,1.02209a122.57366,122.57366,0,0,0-12.79359,20.2681c1.0163-7.93863-11.41159-36.60795-16.21776-42.68052-5.773-7.29409-17.61108-4.11077-18.62815,5.13562q-.01476.13428-.02884.26849,1.07082.60411,2.0964,1.28237a5.12707,5.12707,0,0,1-2.06713,9.33031l-.10452.01613c-9.55573,13.64367,21.07745,49.1547,28.74518,41.18139a125.11045,125.11045,0,0,0-6.73449,31.69282,118.66429,118.66429,0,0,0,.08607,19.15986l-.03231-.22593C558.90163,648.154,529.674,627.51374,521.139,629.233c-4.91675.99041-9.75952.76525-9.01293,5.72484q.01788.11874.03635.2375a34.4418,34.4418,0,0,1,3.862,1.86105q1.07082.60423,2.09639,1.28237a5.12712,5.12712,0,0,1-2.06712,9.33039l-.10464.01606c-.07528.01079-.13987.02157-.21507.03237-4.34967,14.96631,27.90735,39.12,47.5177,31.43461h.01081a125.07484,125.07484,0,0,0,8.402,24.52806H601.679c.10765-.3335.20443-.67779.3013-1.01129a34.102,34.102,0,0,1-8.30521-.49477c2.22693-2.73257,4.45377-5.48664,6.6807-8.21913a1.86122,1.86122,0,0,0,.13986-.16135c1.12956-1.39849,2.26992-2.78627,3.39948-4.18476l.00061-.00173a49.95232,49.95232,0,0,0-1.46367-12.72495Zm-34.37066-67.613.0158-.02133-.0158.04282Zm-6.64832,59.93237-.25822-.58084c.01079-.41957.01079-.83914,0-1.26942,0-.11845-.0215-.23672-.0215-.35508.09678.74228.18285,1.48464.29042,2.22692Z" transform="translate(-169.93432 -164.42601)" fill="var(--illus-ink)"/><circle cx="95.24878" cy="439" r="11" fill="var(--illus-ink)"/><circle cx="227.24878" cy="559" r="11" fill="var(--illus-ink)"/><circle cx="728.24878" cy="559" r="11" fill="var(--illus-ink)"/><circle cx="755.24878" cy="419" r="11" fill="var(--illus-ink)"/><circle cx="723.24878" cy="317" r="11" fill="var(--illus-ink)"/><path d="M434.1831,583.426a10.949,10.949,0,1,1-.21-2.16A10.9921,10.9921,0,0,1,434.1831,583.426Z" transform="translate(-169.93432 -164.42601)" fill="var(--illus-ink)"/><circle cx="484.24878" cy="349" r="11" fill="var(--illus-ink)"/><path d="M545.1831,513.426a10.949,10.949,0,1,1-.21-2.16A10.9921,10.9921,0,0,1,545.1831,513.426Z" transform="translate(-169.93432 -164.42601)" fill="var(--illus-ink)"/><path d="M403.1831,481.426a10.949,10.949,0,1,1-.21-2.16A10.9921,10.9921,0,0,1,403.1831,481.426Z" transform="translate(-169.93432 -164.42601)" fill="var(--illus-ink)"/><circle cx="599.24878" cy="443" r="11" fill="var(--illus-ink)"/><circle cx="426.24878" cy="338" r="16" fill="var(--illus-ink)"/><path d="M1028.875,735.26666l-857.75.30733a1.19068,1.19068,0,1,1,0-2.38136l857.75-.30734a1.19069,1.19069,0,0,1,0,2.38137Z" transform="translate(-169.93432 -164.42601)" fill="var(--illus-line)"/></svg>`,Vt=/var\((--illus-[a-z]+)\)|currentColor/g,Ht={"--illus-ink":`#8b8b8b`,"--illus-soft":`#f2f2f2`,"--illus-muted":`#d4d4d8`,"--illus-line":`#e4e4e7`},Ut=`图片加载失败`;function Wt(){let e=getComputedStyle(document.documentElement),t=t=>e.getPropertyValue(t).trim()||Ht[t]||`#8b8b8b`,n=Bt.replace(Vt,(e,n)=>t(e===`currentColor`?`--primary`:n??``));return`data:image/svg+xml,${encodeURIComponent(n)}`}function Gt(e){return e===``?Ut:`${Ut}：${e}`}function Kt({alt:e,className:t}){return(0,L.jsxs)(`span`,{className:q(`image-fallback`,t),"data-image-fallback":!0,role:`img`,"aria-label":Gt(e),children:[(0,L.jsx)(`img`,{src:Wt(),alt:``,"aria-hidden":`true`,className:`image-fallback-art`,"data-image-managed":!0}),(0,L.jsxs)(`span`,{className:`image-fallback-copy`,"aria-hidden":`true`,children:[(0,L.jsx)(`span`,{className:`image-fallback-title`,children:Ut}),e===``?null:(0,L.jsx)(`span`,{className:`image-fallback-alt`,children:e})]})]})}function qt(e){let{alt:t}=e,n=e.closest(`figure`)?.querySelector(`figcaption`)!=null,r=document.createElement(`span`);r.className=`image-fallback`,r.dataset.imageFallback=``,r.setAttribute(`role`,`img`),r.setAttribute(`aria-label`,Gt(t));let i=document.createElement(`img`);i.className=`image-fallback-art`,i.dataset.imageManaged=``,i.src=Wt(),i.alt=``,i.setAttribute(`aria-hidden`,`true`);let a=document.createElement(`span`);a.className=`image-fallback-copy`,a.setAttribute(`aria-hidden`,`true`);let o=document.createElement(`span`);if(o.className=`image-fallback-title`,o.textContent=Ut,a.append(o),t!==``&&!n){let e=document.createElement(`span`);e.className=`image-fallback-alt`,e.textContent=t,a.append(e)}return r.append(i,a),r}var Jt={home:`tabler:home`,archive:`tabler:archive`,folder:`tabler:folder`,tag:`tabler:tag`,chat:`tabler:message`,image:`tabler:photo`,code:`tabler:code`,link:`tabler:link`,bookmark:`tabler:bookmark`,user:`tabler:user`,"address-card":`tabler:id-badge-2`,more:`tabler:dots`,location:`tabler:map-pin`,search:`tabler:search`,sun:`tabler:sun`,moon:`tabler:moon`,"brightness-auto":`tabler:brightness-auto`,palette:`tabler:palette`,menu:`tabler:menu-2`,close:`tabler:x`,"arrow-up":`tabler:arrow-up`,"chevron-up":`tabler:chevron-up`,"chevron-down":`tabler:chevron-down`,"chevron-left":`tabler:chevron-left`,"chevron-right":`tabler:chevron-right`,notes:`tabler:notes`,history:`tabler:history`,signpost:`tabler:sign-right`,recommend:`tabler:thumb-up`,article:`tabler:article`,share:`tabler:share`,lock:`tabler:lock`,qr:`tabler:qrcode`,copyright:`tabler:copyright`,"creative-commons":`tabler:creative-commons`,"creative-commons-zero":`tabler:creative-commons-zero`,"creative-commons-pd":`tabler:creative-commons`,osi:`tabler:brand-open-source`,info:`tabler:info-circle`,github:`tabler:brand-github`,x:`tabler:brand-x`,mail:`tabler:mail`,rss:`tabler:rss`,atom:`tabler:atom`,music:`tabler:vinyl`,play:`tabler:player-play`,pause:`tabler:player-pause`,volume:`tabler:volume`,repeat:`tabler:repeat`,shuffle:`tabler:arrows-shuffle`,"skip-back":`tabler:player-skip-back`,"skip-forward":`tabler:player-skip-forward`,"repeat-one":`tabler:repeat-once`,"volume-off":`tabler:volume-off`,playlist:`tabler:playlist`,sync:`tabler:refresh`,subtitles:`tabler:subtitles`,"subtitles-off":`tabler:subtitles-off`,calendar:`tabler:calendar-month`,clock:`tabler:clock`,eye:`tabler:eye`,heart:`tabler:heart`,star:`tabler:star`,git:`tabler:git-branch`,flag:`tabler:flag`,book:`tabler:book`,zap:`tabler:bolt`,bug:`tabler:bug`,edit:`tabler:pencil`,external:`tabler:external-link`,copy:`tabler:copy`,check:`tabler:check`,quote:`tabler:quote`,list:`tabler:list`,layers:`tabler:stack-2`,grid:`tabler:border-outer`,"arrow-left":`tabler:arrow-left`,"arrow-right":`tabler:arrow-right`,movie:`tabler:movie`,bilibili:`tabler:brand-bilibili`,myanimelist:`simple-icons:myanimelist`,settings:`tabler:settings`,error:`tabler:alert-circle`,pin:`tabler:pin`,rocket:`tabler:rocket`,sad:`tabler:mood-sad`,globe:`tabler:language`,"world-www":`tabler:world-www`,"clock-record":`tabler:clock-record`,versions:`tabler:versions`,hammer:`tabler:hammer`,"brand-react":`tabler:brand-react`,"brand-nodejs":`tabler:brand-nodejs`,"brand-pnpm":`tabler:brand-pnpm`,download:`tabler:download`,titlecase:`tabler:letter-case`,"logo-github":`simple-icons:github`,"logo-google":`simple-icons:google`,"logo-openai":`simple-icons:openai`,"logo-claude":`simple-icons:claude`,"logo-anthropic":`simple-icons:anthropic`,"logo-deepseek":`simple-icons:deepseek`,"logo-stackoverflow":`simple-icons:stackoverflow`,"logo-mdn":`simple-icons:mdnwebdocs`,"logo-react":`simple-icons:react`,"logo-typescript":`simple-icons:typescript`,"logo-vite":`simple-icons:vite`,"logo-nodejs":`simple-icons:nodedotjs`,"logo-tailwind":`simple-icons:tailwindcss`,"logo-react-router":`simple-icons:reactrouter`,"logo-zod":`simple-icons:zod`,"logo-vitest":`simple-icons:vitest`,"logo-spring":`simple-icons:spring`,"logo-java":`simple-icons:openjdk`,"logo-postgresql":`simple-icons:postgresql`,"logo-redis":`simple-icons:redis`,"logo-rabbitmq":`simple-icons:rabbitmq`,"logo-docker":`simple-icons:docker`,"logo-maven":`simple-icons:apachemaven`,"logo-huggingface":`simple-icons:huggingface`,"logo-mcp":`simple-icons:modelcontextprotocol`,"logo-langchain":`simple-icons:langchain`,"logo-ollama":`simple-icons:ollama`,"logo-arxiv":`simple-icons:arxiv`,"logo-dribbble":`simple-icons:dribbble`,"logo-behance":`simple-icons:behance`,"logo-awwwards":`simple-icons:awwwards`,"logo-unsplash":`simple-icons:unsplash`,"logo-figma":`simple-icons:figma`,"logo-iconify":`simple-icons:iconify`,"logo-simpleicons":`simple-icons:simpleicons`,"logo-lucide":`simple-icons:lucide`,"logo-googlefonts":`simple-icons:googlefonts`,"logo-excalidraw":`simple-icons:excalidraw`,database:`tabler:database`,sparkles:`tabler:sparkles`,icons:`tabler:icons`},Yt={"fa7-brands:alipay":`heart`,"fa7-brands:bilibili":`bilibili`,"fa7-brands:creative-commons":`creative-commons`,"fa7-brands:creative-commons-pd":`creative-commons-pd`,"fa7-brands:creative-commons-zero":`creative-commons-zero`,"fa7-brands:gitee":`code`,"fa7-brands:github":`github`,"fa7-brands:node-js":`code`,"fa7-brands:osi":`osi`,"fa7-brands:weixin":`chat`,"fa7-regular:address-card":`address-card`,"fa7-regular:copyright":`copyright`,"fa7-solid:arrow-right":`arrow-right`,"fa7-solid:arrow-rotate-left":`history`,"fa7-solid:arrow-up-right-from-square":`external`,"fa7-solid:atom":`atom`,"fa7-solid:chevron-left":`chevron-left`,"fa7-solid:chevron-right":`chevron-right`,"fa7-solid:envelope":`mail`,"fa7-solid:rss":`rss`,"fa7-solid:xmark":`close`,"material-symbols:airwave-rounded":`sync`,"material-symbols:archive":`archive`,"material-symbols:arrow-back":`arrow-left`,"material-symbols:arrow-drop-down-rounded":`chevron-down`,"material-symbols:arrow-outward-rounded":`external`,"material-symbols:article":`article`,"material-symbols:article-outline":`article`,"material-symbols:auto-stories":`notes`,"material-symbols:auto-stories-outline-rounded":`notes`,"material-symbols:book-2-outline-rounded":`notes`,"material-symbols:bookmark-rounded":`bookmark`,"material-symbols:bookmarks":`bookmark`,"material-symbols:border-outer-rounded":`grid`,"material-symbols:brightness-auto-outline-rounded":`brightness-auto`,"material-symbols:build-outline":`settings`,"material-symbols:build-outline-rounded":`settings`,"material-symbols:calendar-clock-outline":`calendar`,"material-symbols:calendar-month-outline-rounded":`calendar`,"material-symbols:calendar-month-rounded":`calendar`,"material-symbols:calendar-today":`calendar`,"material-symbols:calendar-today-outline-rounded":`calendar`,"material-symbols:chat":`chat`,"material-symbols:chat-bubble-outline-rounded":`chat`,"material-symbols:check":`check`,"material-symbols:chevron-left-rounded":`chevron-left`,"material-symbols:chevron-right-rounded":`chevron-right`,"material-symbols:chrome-reader-mode-rounded":`article`,"material-symbols:close-fullscreen-rounded":`close`,"material-symbols:close-rounded":`close`,"material-symbols:cloud-outline":`info`,"material-symbols:code":`code`,"material-symbols:code-rounded":`code`,"material-symbols:computer-outline":`settings`,"material-symbols:copyright-outline":`copyright`,"material-symbols:dark-mode-outline-rounded":`moon`,"material-symbols:desktop-landscape-outline-rounded":`grid`,"material-symbols:docs":`notes`,"material-symbols:download":`download`,"material-symbols:dynamic-feed-rounded":`chat`,"material-symbols:edit-calendar-outline-rounded":`calendar`,"material-symbols:emoji-people-rounded":`user`,"material-symbols:error-outline":`error`,"material-symbols:expand-more-rounded":`chevron-down`,"material-symbols:favorite":`heart`,"material-symbols:folder-off":`folder`,"material-symbols:folder-open":`folder`,"material-symbols:folder-open-rounded":`folder`,"material-symbols:folder-outline":`folder`,"material-symbols:format-list-bulleted":`list`,"material-symbols:format-quote-rounded":`notes`,"material-symbols:forum-rounded":`chat`,"material-symbols:full-coverage-outline-rounded":`grid`,"material-symbols:gradient":`palette`,"material-symbols:group":`user`,"material-symbols:group-off-outline":`user`,"material-symbols:help-outline":`info`,"material-symbols:hide-image-outline":`image`,"material-symbols:history-rounded":`history`,"material-symbols:home":`home`,"material-symbols:home-outline-rounded":`home`,"material-symbols:home-pin-outline":`home`,"material-symbols:image-outline":`image`,"material-symbols:info":`info`,"material-symbols:info-outline":`info`,"material-symbols:ink-pen-outline-rounded":`notes`,"material-symbols:keyboard-arrow-down-rounded":`chevron-down`,"material-symbols:keyboard-arrow-up-rounded":`chevron-up`,"material-symbols:label-outline":`tag`,"material-symbols:language":`globe`,"material-symbols:layers":`layers`,"material-symbols:link":`link`,"material-symbols:link-2-rounded":`link`,"material-symbols:link-rounded":`link`,"material-symbols:location-on":`location`,"material-symbols:location-on-outline-rounded":`location`,"material-symbols:location-on-rounded":`location`,"material-symbols:lock-outline":`lock`,"material-symbols:menu-book":`notes`,"material-symbols:menu-rounded":`menu`,"material-symbols:more-horiz":`more`,"material-symbols:movie":`movie`,"material-symbols:movie-filter":`movie`,"material-symbols:music-note-rounded":`music`,"material-symbols:notes-rounded":`notes`,"material-symbols:palette":`palette`,"material-symbols:palette-outline":`palette`,"material-symbols:palette-outline-rounded":`palette`,"material-symbols:pause-rounded":`pause`,"material-symbols:person":`user`,"material-symbols:photo-library":`image`,"material-symbols:pinboard":`pin`,"material-symbols:play-arrow-rounded":`play`,"material-symbols:push-pin":`pin`,"material-symbols:recommend":`recommend`,"material-symbols:repeat-one-rounded":`repeat-one`,"material-symbols:repeat-rounded":`repeat`,"material-symbols:rocket-launch":`rocket`,"material-symbols:rocket-launch-outline":`rocket`,"material-symbols:rss-feed":`rss`,"material-symbols:schedule":`clock`,"material-symbols:schedule-outline-rounded":`clock`,"material-symbols:search":`search`,"material-symbols:search-off":`search`,"material-symbols:search-off-rounded":`search`,"material-symbols:search-rounded":`search`,"material-symbols:sentiment-sad":`sad`,"material-symbols:settings":`settings`,"material-symbols:share":`share`,"material-symbols:shield-lock":`lock`,"material-symbols:shuffle-rounded":`shuffle`,"material-symbols:signpost":`signpost`,"material-symbols:skip-next-rounded":`skip-forward`,"material-symbols:skip-previous-rounded":`skip-back`,"material-symbols:subtitles-off-outline-rounded":`subtitles-off`,"material-symbols:subtitles-outline-rounded":`subtitles`,"material-symbols:sync-rounded":`sync`,"material-symbols:tag-rounded":`tag`,"material-symbols:text-ad-outline-rounded":`notes`,"material-symbols:titlecase-rounded":`titlecase`,"material-symbols:update-rounded":`sync`,"material-symbols:view-carousel-outline":`grid`,"material-symbols:view-day-outline":`grid`,"material-symbols:visibility-outline-rounded":`eye`,"material-symbols:volume-off-rounded":`volume-off`,"material-symbols:volume-up-rounded":`volume`,"material-symbols:wallpaper":`image`,"material-symbols:wb-sunny-outline-rounded":`sun`,"material-symbols:zoom-in-rounded":`search`,"mdi:arrow-up":`arrow-up`,"mdi:bed":`moon`,"mdi:clover":`heart`,"mdi:flower-poppy":`heart`,"mdi:github":`github`,"mdi:home":`home`,"mdi:playlist-music":`playlist`,"mdi:swap-horizontal":`sync`,"mingcute:comment-line":`chat`,"mingcute:heartbeat-line":`heart`,"simple-icons:afdian":`heart`,"simple-icons:kofi":`heart`,"simple-icons:pnpm":`code`,"svg-spinners:ring-resize":`sync`},Xt={"simple-icons:anthropic":{body:`<path fill="currentColor" d="M17.304 3.541h-3.672l6.696 16.918H24Zm-10.608 0L0 20.459h3.744l1.37-3.553h7.005l1.369 3.553h3.744L10.536 3.541Zm-.371 10.223L8.616 7.82l2.291 5.945Z"/>`,viewBox:`0 0 24 24`},"simple-icons:apachemaven":{body:`<path fill="currentColor" d="M4.237.001c-.312-.013-.665.072-.828.457c-.158.374-.283 1.188-.34 2.276l1.223.591c-.02-.737.007-1.43.076-2.066c-.026.299-.056.96.006 2.039q.029.513.088 1.15q.001.036.007.069a46 46 0 0 0 .309 2.412c.057.368.126.752.195 1.16l-.01.01c.014.01.015.018.014.023l.03.16q.044.244.093.494l.108.553l.056.289a62 62 0 0 0 .457 2.068q.135.575.287 1.186q.146.579.309 1.193q.146.543.303 1.117c.003.018.012.036.015.055a146 146 0 0 0 .34 1.185l.049.174c.078.261.158.533.242.805a4 4 0 0 1-.293-.135l-.19-.654c-.02-.077-.042-.148-.062-.225l-.002-.004l-.004-.002q-.128-.451-.257-.916q-.033-.13-.069-.263l-.314-1.178c-.1-.381-.194-.765-.29-1.154q-.14-.584-.277-1.172q-.14-.6-.265-1.203c-.085-.396-.161-.798-.24-1.193a50 50 0 0 1-.211-1.17c-.004-.013-.006-.03-.01-.041l.004-.002q-.086-.58-.174-1.15a61 61 0 0 1-.154-1.204a28 28 0 0 1-.172-2.41l-1.22-.59l-.013.23q-.018.442-.023.93a45 45 0 0 0 .006 1.157q.014.557.045 1.148q.029.503.07 1.022l.002.039l.006.004q.006.036.006.076c.033.368.064.739.107 1.115a35 35 0 0 0 .303 2.125l.035.195a23 23 0 0 0 .547 2.32q.105.356.21.68q.096.274.194.545q.233.633.512 1.232l.006.004a.3.3 0 0 0 .02.05q.336.727.755 1.395c.01.013.02.033.03.047c-.455-.183-1.259-.098-1.253-.097c.83.288 1.557.64 2.016 1.175c-.183.2-.523.352-.953.477c.594.064.924-.039 1.045-.092c-.31.26-.483.732-.635 1.24c.35-.57.696-.949 1.033-1.094c.078.258.162.524.244.788A148 148 0 0 0 5.157 24a.56.56 0 0 0 .43-.312c.13-.282.83-1.775 1.908-3.875c.413 1.303.88 2.679 1.386 4.109a.5.5 0 0 0 .076-.465a104 104 0 0 1-1.308-3.945q.232-.45.484-.932q.188.062.389.155c.203.186.352.491.482.84a1.52 1.52 0 0 0-.334-1.098c1.335.258 2.547.09 3.287-.81a4 4 0 0 0 .192-.258c-.325.304-.682.404-1.313.273c.996-.281 1.523-.617 2.035-1.22q.18-.216.371-.48c-.943.722-1.927.822-2.9.493l-.045-.018c.914.02 2.203-.474 3.092-1.189c.41-.33.796-.73 1.17-1.21c.28-.359.55-.76.82-1.216q.352-.59.7-1.293a2.8 2.8 0 0 1-.74.137l-.144.008c-.048.002-.093 0-.146.002c.885-.198 1.5-.74 1.994-1.447c-.24.117-.628.262-1.07.297q-.088.008-.182.006c-.013-.002-.028 0-.047-.002c.306-.078.574-.178.81-.309a3 3 0 0 0 .358-.236l.13-.106q.149-.128.28-.287c.028-.034.056-.063.08-.098q.056-.075.104-.146a8 8 0 0 0 .51-.828c.015-.031.032-.057.046-.088c.04-.084.08-.16.11-.227q.064-.149.092-.238a.5.5 0 0 1-.108.051c-.273.112-.727.187-1.086.201q-.006-.001-.013.004h-.067c.72-.214 1.067-.45 1.422-.818a14 14 0 0 0 1.154-1.428c.264-.37.505-.738.692-1.072a7 7 0 0 0 .298-.592q.098-.234.172-.45c-.466.01-.986.011-1.48 0c.495.01 1.015.007 1.484-.005c.5-1.485.063-2.262.063-2.262s-.526-1.212-1.4-.851c-.426.175-1.172.73-2.083 1.56l.514 1.45a18 18 0 0 1 1.703-1.602c-.257.22-.807.726-1.615 1.644q-.384.436-.844.997q-.027.028-.047.06a51 51 0 0 0-1.666 2.187c-.248.34-.498.704-.765 1.088h-.016c.002.02-.004.028-.01.032l-.101.152c-.104.155-.213.31-.318.47l-.352.534q-.092.134-.186.277c-.184.282-.367.573-.558.873a97 97 0 0 0-1.428 2.338a97 97 0 0 0-1.341 2.343c-.012.017-.02.04-.034.057a197 197 0 0 0-.668 1.223l-.097.181q-.257.475-.52.979c0 .004-.005.008-.006.013q-.039.07-.072.141c-.117.222-.218.424-.45.87a1.4 1.4 0 0 0-.233-.182l.345-.65q.072-.132.143-.27l.04-.077l.546-1.001l.13-.233v-.006l-.001-.006c.169-.31.345-.62.52-.94q.076-.129.153-.265l.684-1.197a92 92 0 0 1 2.135-3.504c.247-.386.503-.77.754-1.152c.092-.138.182-.272.279-.41a73 73 0 0 1 .48-.701c.007-.012.019-.024.026-.037h.006l.773-1.065q.417-.559.83-1.09a31 31 0 0 1 1.777-2.075l-.515-1.446l-.192.178a32 32 0 0 0-.758.729q-.441.441-.912.935a46 46 0 0 0-1.632 1.838l-.03.033l.002.008q-.024.032-.054.064c-.266.323-.538.649-.801.985a39 39 0 0 0-1.445 1.95c-.043.06-.085.126-.127.186a27 27 0 0 0-1.403 2.303q-.197.37-.37.715c-.096.195-.187.395-.278.591q-.315.695-.566 1.399l.002.006a.4.4 0 0 0-.026.058q-.16.455-.29.914q-.21.26-.483.46a4 4 0 0 0-.131-.153a5.15 5.15 0 0 0 .824-2.211a6.4 6.4 0 0 0-.016-1.488c-.046-.4-.126-.82-.238-1.274q-.145-.59-.363-1.248q-.139.278-.379.545l-.086.094c-.029.032-.06.06-.092.094c.434-.674.486-1.397.358-2.148a2.7 2.7 0 0 1-.49.85q-.051.057-.11.116l-.033.028c.144-.24.25-.467.318-.698a1 1 0 0 0 .04-.146a3 3 0 0 0 .038-.225l.018-.146a2 2 0 0 0-.002-.354q-.003-.059-.01-.113c-.01-.055-.016-.105-.027-.154a7 7 0 0 0-.193-.84c-.01-.028-.015-.056-.026-.084c-.027-.079-.048-.149-.072-.209a2 2 0 0 0-.09-.209a.5.5 0 0 1-.035.1c-.102.24-.34.57-.557.8q-.006.003-.007.01l-.04.043c.318-.58.39-.946.385-1.398a12 12 0 0 0-.16-1.615a11 11 0 0 0-.232-1.104a6 6 0 0 0-.18-.558a6 6 0 0 0-.172-.391l.002-.004C5.576.341 4.82.124 4.82.124s-.27-.11-.582-.123zm3.38 15.783l.032.082v.002c-.06.033-.116.067-.178.097l-.039.018a2 2 0 0 0 .186-.2zm-.603 1.626q.197.203.354.32l.07.227a2 2 0 0 0-.246.053l-.03-.098q-.035-.126-.076-.257l-.021-.073zm.26.875a2 2 0 0 1 .271.01l.07.229a.8.8 0 0 1 .247-.004l-.326.627z"/>`,viewBox:`0 0 24 24`},"simple-icons:arxiv":{body:`<path fill="currentColor" d="M3.842 0a1 1 0 0 0-.922.608c-.153.369-.044.627.294 1.111l6.919 8.36l-1.023 1.106a1.04 1.04 0 0 0 .003 1.423l1.23 1.313l-5.44 6.444c-.28.3-.453.823-.297 1.199a1.025 1.025 0 0 0 .959.635a.91.91 0 0 0 .689-.34l5.783-6.126l7.49 8.005a.85.85 0 0 0 .684.26a.96.96 0 0 0 .877-.615c.158-.377-.017-.75-.306-1.14L13.73 13.9l1.064-1.13a.963.963 0 0 0 .009-1.316L4.633.464S4.26.01 3.867 0zm0 .272h.017c.218.005.487.272.564.364l.005.006l.005.005l10.17 10.99a.69.69 0 0 1-.008.946l-1.066 1.133l-1.498-1.772l-8.6-10.39c-.328-.472-.352-.619-.26-.841a.73.73 0 0 1 .671-.44Zm14.341 1.57a.88.88 0 0 0-.655.242l-5.696 6.158l1.694 1.832l5.309-6.514c.325-.433.479-.66.325-1.029a1.12 1.12 0 0 0-.977-.689m-7.655 12.282l1.318 1.414l-5.786 6.13a.65.65 0 0 1-.496.26a.75.75 0 0 1-.706-.467c-.112-.269.036-.687.244-.909l.005-.005l.005-.006z"/>`,viewBox:`0 0 24 24`},"simple-icons:awwwards":{body:`<path fill="currentColor" d="m14.72 5.6l-2.24 8.68l-2.12-8.68H7.47l-2.12 8.68L3.11 5.6H0l4.01 12.65h2.74l2.17-8.18l2.16 8.18h2.74L17.83 5.6zm5.1 10.7c0 1.2.9 2.1 2.09 2.1c1.2 0 2.09-.9 2.09-2.1s-.9-2.12-2.1-2.12c-1.19 0-2.08.9-2.08 2.11"/>`,viewBox:`0 0 24 24`},"simple-icons:behance":{body:`<path fill="currentColor" d="M16.969 16.927a2.56 2.56 0 0 0 1.901.677a2.5 2.5 0 0 0 1.531-.475c.362-.235.636-.584.779-.99h2.585a5.1 5.1 0 0 1-1.9 2.896a5.3 5.3 0 0 1-3.091.88a5.8 5.8 0 0 1-2.284-.433a4.9 4.9 0 0 1-1.723-1.211a5.7 5.7 0 0 1-1.08-1.874a7 7 0 0 1-.383-2.393c-.005-.8.129-1.595.396-2.349a5.31 5.31 0 0 1 5.088-3.604a4.9 4.9 0 0 1 2.376.563c.661.362 1.231.87 1.668 1.485a6.2 6.2 0 0 1 .943 2.133c.194.821.263 1.666.205 2.508h-7.699c-.063.79.184 1.574.688 2.187M6.947 4.084a8 8 0 0 1 1.928.198a4.3 4.3 0 0 1 1.49.638c.418.303.748.711.958 1.182c.241.579.357 1.203.341 1.83a3.5 3.5 0 0 1-.506 1.961a3.7 3.7 0 0 1-1.503 1.287a3.6 3.6 0 0 1 2.027 1.437c.464.747.697 1.615.67 2.494a4.6 4.6 0 0 1-.423 2.032a3.95 3.95 0 0 1-1.163 1.413a5.1 5.1 0 0 1-1.683.807a7 7 0 0 1-1.928.259H0V4.084zm-.235 12.9q.464.006.916-.099a2.2 2.2 0 0 0 .766-.332c.228-.158.411-.371.534-.619c.142-.317.208-.663.191-1.009a2.08 2.08 0 0 0-.642-1.715a2.62 2.62 0 0 0-1.696-.505h-3.54v4.279zm13.635-5.967a2.13 2.13 0 0 0-1.654-.619a2.34 2.34 0 0 0-1.163.259a2.5 2.5 0 0 0-.738.62a2.4 2.4 0 0 0-.396.792q-.111.36-.137.734h4.769a3.24 3.24 0 0 0-.679-1.785zm-13.813-.648a2.25 2.25 0 0 0 1.423-.433c.399-.355.607-.88.56-1.413a1.9 1.9 0 0 0-.178-.891a1.3 1.3 0 0 0-.495-.533a1.85 1.85 0 0 0-.711-.274a4 4 0 0 0-.835-.073H3.241v3.631h3.293zM21.62 5.122h-5.976v1.527h5.976z"/>`,viewBox:`0 0 24 24`},"simple-icons:claude":{body:`<path fill="currentColor" d="m4.714 15.956l4.718-2.648l.079-.23l-.08-.128h-.23l-.79-.048l-2.695-.073l-2.337-.097l-2.265-.122l-.57-.121l-.535-.704l.055-.353l.48-.321l.685.06l1.518.104l2.277.157l1.651.098l2.447.255h.389l.054-.158l-.133-.097l-.103-.098l-2.356-1.596l-2.55-1.688l-1.336-.972l-.722-.491L2 6.223l-.158-1.008l.656-.722l.88.06l.224.061l.893.686l1.906 1.476l2.49 1.833l.364.304l.146-.104l.018-.072l-.164-.274l-1.354-2.446l-1.445-2.49l-.644-1.032l-.17-.619a3 3 0 0 1-.103-.729L6.287.133L6.7 0l.995.134l.42.364l.619 1.415L9.735 4.14l1.555 3.03l.455.898l.243.832l.09.255h.159V9.01l.127-1.706l.237-2.095l.23-2.695l.08-.76l.376-.91l.747-.492l.583.28l.48.685l-.067.444l-.286 1.851l-.558 2.903l-.365 1.942h.213l.243-.242l.983-1.306l1.652-2.064l.728-.82l.85-.904l.547-.431h1.032l.759 1.129l-.34 1.166l-1.063 1.347l-.88 1.142l-1.263 1.7l-.79 1.36l.074.11l.188-.02l2.853-.606l1.542-.28l1.84-.315l.832.388l.09.395l-.327.807l-1.967.486l-2.307.462l-3.436.813l-.043.03l.049.061l1.548.146l.662.036h1.62l3.018.225l.79.522l.473.638l-.08.485l-1.213.62l-1.64-.389l-3.825-.91l-1.31-.329h-.183v.11l1.093 1.068l2.003 1.81l2.508 2.33l.127.578l-.321.455l-.34-.049l-2.204-1.657l-.85-.747l-1.925-1.62h-.127v.17l.443.649l2.343 3.521l.122 1.08l-.17.353l-.607.213l-.668-.122l-1.372-1.924l-1.415-2.168l-1.141-1.943l-.14.08l-.674 7.254l-.316.37l-.728.28l-.607-.461l-.322-.747l.322-1.476l.388-1.924l.316-1.53l.285-1.9l.17-.632l-.012-.042l-.14.018l-1.432 1.967l-2.18 2.945l-1.724 1.845l-.413.164l-.716-.37l.066-.662l.401-.589l2.386-3.036l1.439-1.882l.929-1.086l-.006-.158h-.055L4.138 18.56l-1.13.146l-.485-.456l.06-.746l.231-.243l1.907-1.312Z"/>`,viewBox:`0 0 24 24`},"simple-icons:deepseek":{body:`<path fill="currentColor" d="M23.748 4.651c-.254-.124-.364.113-.512.233c-.051.04-.094.09-.137.137c-.372.397-.806.657-1.373.626c-.829-.046-1.537.214-2.163.848c-.133-.782-.575-1.248-1.247-1.548c-.352-.155-.708-.311-.955-.65c-.172-.24-.219-.509-.305-.774c-.055-.16-.11-.323-.293-.35c-.2-.031-.278.136-.356.276c-.313.572-.434 1.202-.422 1.84c.027 1.436.633 2.58 1.838 3.393c.137.094.172.187.129.323c-.082.28-.18.553-.266.833c-.055.179-.137.218-.328.14a5.5 5.5 0 0 1-1.737-1.179c-.857-.828-1.631-1.743-2.597-2.46a12 12 0 0 0-.689-.47c-.985-.957.13-1.743.387-1.836c.27-.098.094-.433-.778-.428c-.872.003-1.67.295-2.687.685a3 3 0 0 1-.465.136a9.6 9.6 0 0 0-2.883-.101c-1.885.21-3.39 1.1-4.497 2.622C.082 8.776-.231 10.854.152 13.02c.403 2.284 1.568 4.175 3.36 5.653c1.857 1.533 3.997 2.284 6.438 2.14c1.482-.085 3.132-.284 4.994-1.86c.47.234.962.328 1.78.398c.629.058 1.235-.031 1.705-.129c.735-.155.684-.836.418-.961c-2.155-1.004-1.682-.595-2.112-.926c1.095-1.295 2.768-3.598 3.284-6.733c.05-.346.115-.834.108-1.114c-.004-.171.035-.238.23-.257a4.2 4.2 0 0 0 1.545-.475c1.397-.763 1.96-2.016 2.093-3.517c.02-.23-.004-.467-.247-.588M11.58 18.168c-2.088-1.642-3.101-2.183-3.52-2.16c-.39.024-.32.472-.234.763c.09.288.207.487.371.74c.114.167.192.416-.113.603c-.673.416-1.842-.14-1.897-.168c-1.361-.801-2.5-1.86-3.301-3.306c-.775-1.393-1.225-2.888-1.299-4.482c-.02-.385.094-.522.477-.592a4.7 4.7 0 0 1 1.53-.038c2.131.311 3.946 1.264 5.467 2.774c.868.86 1.525 1.887 2.202 2.89c.72 1.066 1.494 2.082 2.48 2.915c.348.291.626.513.892.677c-.802.09-2.14.109-3.055-.615zm1.001-6.44a.306.306 0 0 1 .415-.287a.3.3 0 0 1 .113.074a.3.3 0 0 1 .086.214c0 .17-.136.307-.308.307a.303.303 0 0 1-.306-.307m3.11 1.596c-.2.081-.4.151-.591.16a1.25 1.25 0 0 1-.798-.254c-.274-.23-.47-.358-.551-.758a1.7 1.7 0 0 1 .015-.588c.07-.327-.007-.537-.238-.727c-.188-.156-.426-.199-.689-.199a.6.6 0 0 1-.254-.078a.253.253 0 0 1-.114-.358a1 1 0 0 1 .192-.21c.356-.202.767-.136 1.146.016c.352.144.618.408 1.001.782c.392.451.462.576.685.915c.176.264.336.536.446.848c.066.194-.02.353-.25.45"/>`,viewBox:`0 0 24 24`},"simple-icons:docker":{body:`<path fill="currentColor" d="M13.983 11.078h2.119a.186.186 0 0 0 .186-.185V9.006a.186.186 0 0 0-.186-.186h-2.119a.185.185 0 0 0-.185.185v1.888c0 .102.083.185.185.185m-2.954-5.43h2.118a.186.186 0 0 0 .186-.186V3.574a.186.186 0 0 0-.186-.185h-2.118a.185.185 0 0 0-.185.185v1.888c0 .102.082.185.185.185m0 2.716h2.118a.187.187 0 0 0 .186-.186V6.29a.186.186 0 0 0-.186-.185h-2.118a.185.185 0 0 0-.185.185v1.887c0 .102.082.185.185.186m-2.93 0h2.12a.186.186 0 0 0 .184-.186V6.29a.185.185 0 0 0-.185-.185H8.1a.185.185 0 0 0-.185.185v1.887c0 .102.083.185.185.186m-2.964 0h2.119a.186.186 0 0 0 .185-.186V6.29a.185.185 0 0 0-.185-.185H5.136a.186.186 0 0 0-.186.185v1.887c0 .102.084.185.186.186m5.893 2.715h2.118a.186.186 0 0 0 .186-.185V9.006a.186.186 0 0 0-.186-.186h-2.118a.185.185 0 0 0-.185.185v1.888c0 .102.082.185.185.185m-2.93 0h2.12a.185.185 0 0 0 .184-.185V9.006a.185.185 0 0 0-.184-.186h-2.12a.185.185 0 0 0-.184.185v1.888c0 .102.083.185.185.185m-2.964 0h2.119a.185.185 0 0 0 .185-.185V9.006a.185.185 0 0 0-.184-.186h-2.12a.186.186 0 0 0-.186.186v1.887c0 .102.084.185.186.185m-2.92 0h2.12a.185.185 0 0 0 .184-.185V9.006a.185.185 0 0 0-.184-.186h-2.12a.185.185 0 0 0-.184.185v1.888c0 .102.082.185.185.185M23.763 9.89c-.065-.051-.672-.51-1.954-.51q-.508.001-1.01.087c-.248-1.7-1.653-2.53-1.716-2.566l-.344-.199l-.226.327c-.284.438-.49.922-.612 1.43c-.23.97-.09 1.882.403 2.661c-.595.332-1.55.413-1.744.42H.751a.75.75 0 0 0-.75.748a11.4 11.4 0 0 0 .692 4.062c.545 1.428 1.355 2.48 2.41 3.124c1.18.723 3.1 1.137 5.275 1.137a15.7 15.7 0 0 0 2.93-.266a12.3 12.3 0 0 0 3.823-1.389a10.5 10.5 0 0 0 2.61-2.136c1.252-1.418 1.998-2.997 2.553-4.4h.221c1.372 0 2.215-.549 2.68-1.009c.309-.293.55-.65.707-1.046l.098-.288Z"/>`,viewBox:`0 0 24 24`},"simple-icons:dribbble":{body:`<path fill="currentColor" d="M12 24C5.385 24 0 18.615 0 12S5.385 0 12 0s12 5.385 12 12s-5.385 12-12 12m10.12-10.358c-.35-.11-3.17-.953-6.384-.438c1.34 3.684 1.887 6.684 1.992 7.308a10.28 10.28 0 0 0 4.395-6.87zm-6.115 7.808c-.153-.9-.75-4.032-2.19-7.77l-.066.02c-5.79 2.015-7.86 6.025-8.04 6.4a10.16 10.16 0 0 0 6.29 2.166c1.42 0 2.77-.29 4-.814zm-11.62-2.58c.232-.4 3.045-5.055 8.332-6.765q.202-.067.405-.12q-.392-.879-.832-1.74C7.17 11.775 2.206 11.71 1.756 11.7l-.004.312c0 2.633.998 5.037 2.634 6.855zm-2.42-8.955c.46.008 4.683.026 9.477-1.248a66 66 0 0 0-3.8-5.928a10.28 10.28 0 0 0-5.676 7.17zM9.6 2.052c.282.38 2.145 2.914 3.822 6c3.645-1.365 5.19-3.44 5.373-3.702A10.2 10.2 0 0 0 12 1.764c-.825 0-1.63.1-2.4.285zm10.335 3.483c-.218.29-1.935 2.493-5.724 4.04c.24.49.47.985.68 1.486c.08.18.15.36.22.53c3.41-.43 6.8.26 7.14.33c-.02-2.42-.88-4.64-2.31-6.38z"/>`,viewBox:`0 0 24 24`},"simple-icons:excalidraw":{body:`<path fill="currentColor" d="M23.943 19.806a.2.2 0 0 0-.168-.034c-1.26-1.855-2.873-3.61-4.419-5.315l-.252-.284c-.001-.073-.067-.12-.134-.15l-.084-.084c-.05-.1-.169-.167-.286-.1c-.47.234-.907.585-1.327.919c-.554.434-1.109.87-1.63 1.354a5 5 0 0 0-.588.618c-.084.117-.017.217.084.267c-.37.368-.74.736-1.109 1.12a.2.2 0 0 0-.05.134c0 .05.033.1.067.117l.655.502v.016c.924.92 2.554 2.173 4.285 3.527c.251.201.52.402.773.602c.117.134.234.285.335.418c.05.066.169.084.236.033c.033.034.084.067.118.1a.24.24 0 0 0 .1.034a.15.15 0 0 0 .135-.066a.24.24 0 0 0 .033-.1c.017 0 .017.016.034.016a.2.2 0 0 0 .134-.05l3.058-3.327c.12-.116.014-.267 0-.267m-7.628-.134l-1.546-1.17l-.15-.1c-.035-.017-.068-.05-.102-.067l-.117-.1c.66-.66 1.33-1.308 2-1.956c-.488.484-1.463 1.906-1.261 2.373c.002 0 .018.042.067.084zm4.1 3.126l-1.277-.97a27 27 0 0 0-1.58-1.504c.69.518 1.277.97 1.361 1.053c.673.585.638.485 1.093.87l.554.4c-.074.103-.151.148-.151.151m.336.25l-.034-.016a1 1 0 0 0 .152-.117zM.588 3.476c.033.217.084.435.117.636c.201 1.103.403 2.106.772 2.858l.152.568c.05.217.134.485.219.552a67 67 0 0 0 3.578 2.942a.18.18 0 0 0 .219 0s0 .016.016.016a.15.15 0 0 0 .118.05a.2.2 0 0 0 .134-.05c1.798-1.989 3.142-3.627 4.1-4.998c.068-.066.084-.167.084-.25c.067-.067.118-.151.185-.201c.067-.067.067-.184 0-.235l-.017-.016c0-.033-.017-.084-.05-.1c-.42-.401-.722-.685-1.042-.986a94 94 0 0 1-2.352-2.273c-.017-.017-.034-.034-.067-.034c-.336-.117-1.025-.234-1.882-.385c-1.277-.216-3.008-.517-4.57-.986c0 0-.101 0-.118.017l-.05.05C.05.714.022.707 0 .718c.017.1.017.167.05.284c0 .033.068.301.068.334zm7.19 4.78l-.033.034a.036.036 0 0 1 .033-.034M6.553 2.238c.101.1.521.502.622.585c-.437-.2-1.529-.702-2.034-.869c.505.1 1.194.201 1.412.284M.79 1.403c.252.434.454 1.939.655 3.41c-.118-.469-.201-.936-.302-1.372C.992 2.673.84 1.988.638 1.386c.124 0 .152.021.152.017m-.286-.369c0-.016 0-.033-.017-.033c.085 0 .135.017.202.05c0 .006-.145-.017-.185-.017m23.17-.217c.017-.066-.336-.367-.219-.384c.253-.017.253-.401 0-.401c-.335.017-.688.1-1.008.15c-.587.117-1.192.234-1.78.367a80 80 0 0 0-3.949.937c-.403.117-.857.2-1.243.401c-.135.067-.118.2-.05.284c-.034.017-.051.017-.085.034c-.117.017-.218.034-.335.05c-.102.017-.152.1-.135.2c0 .017.017.05.017.067c-.706.936-1.496 1.923-2.353 2.976c-.84.969-1.73 1.989-2.62 3.042c-2.84 3.31-6.05 7.07-9.594 10.38a.16.16 0 0 0 0 .234c.016.016.033.033.05.033c-.05.05-.101.085-.152.134q-.05.05-.05.1a.4.4 0 0 0-.067.084c-.067.067-.067.184.017.234c.067.066.185.066.235-.017c.017-.017.017-.033.033-.033a.265.265 0 0 1 .37 0c.202.217.404.435.588.618l-.42-.35c-.067-.067-.184-.05-.234.016c-.068.066-.051.184.016.234l4.469 3.727c.034.034.067.034.118.034a.15.15 0 0 0 .117-.05l.101-.1c.017.016.05.016.067.016c.05 0 .084-.016.118-.05c6.049-6.05 10.922-10.614 16.5-14.693c.05-.033.067-.1.067-.15c.067 0 .118-.05.15-.117c1.026-3.125 1.228-5.9 1.295-7.27c0-.059.016-.038.016-.068c.017-.033.017-.05.017-.05a.98.98 0 0 0-.067-.619m-10.82 4.915c.268-.301.537-.619.806-.903c-1.73 2.273-4.603 5.767-8.67 9.929c2.773-3.059 5.562-6.218 7.864-9.026M5.14 23.466c-.016-.017-.016-.017 0-.017zm2.504-2.156c.135-.15.27-.284.42-.434c0 0 0 .016.017.016c-.224.198-.433.418-.437.418m.69-.668c.099-.1.14-.173.284-.318c.992-1.02 2.017-2.04 3.059-3.076l.016-.016c.252-.2.555-.418.824-.619a228 228 0 0 0-4.184 4.029M14.852 3.91c-.554.719-1.176 1.671-1.697 2.423c-1.646 2.374-6.94 8.174-7.057 8.274a1190 1190 0 0 1-4.839 4.597l-.1.1c-.085-.1-.085-.25.016-.334C8.652 11.966 13.19 6.133 15.021 3.576c-.05.116-.084.216-.168.334zm2.906 3.427c-.671-.386-.99-.987-.806-1.572l.05-.2a.8.8 0 0 1 .085-.167a1.9 1.9 0 0 1 .756-.703c.016 0 .033 0 .05-.016c-.017-.034-.017-.084-.017-.134c.017-.1.085-.167.202-.167c.202 0 .824.184 1.059.384c.067.05.134.117.202.184c.084.1.218.268.285.401c.034.017.067.184.118.268c.033.134.067.284.05.418c-.017.016 0 .116-.017.116a1.6 1.6 0 0 1-.218.619c-.03.03.006.012-.05.067a1.2 1.2 0 0 1-.32.334a1.49 1.49 0 0 1-1.26.234a2 2 0 0 0-.169-.066m4.37 1.403c0 .017-.017.05 0 .067c-.034 0-.05.017-.085.034a110 110 0 0 0-3.915 3.025c1.11-.986 2.218-1.989 3.378-2.975c.336-.301.571-.686.638-1.12l.168-1.003v-.033c.085-.201.404-.118.353.1c-.004-.001-.173.795-.537 1.905"/>`,viewBox:`0 0 24 24`},"simple-icons:figma":{body:`<path fill="currentColor" d="M15.852 8.981h-4.588V0h4.588c2.476 0 4.49 2.014 4.49 4.49s-2.014 4.491-4.49 4.491M12.735 7.51h3.117c1.665 0 3.019-1.355 3.019-3.019s-1.355-3.019-3.019-3.019h-3.117zm0 1.471H8.148c-2.476 0-4.49-2.014-4.49-4.49S5.672 0 8.148 0h4.588v8.981zm-4.587-7.51c-1.665 0-3.019 1.355-3.019 3.019s1.354 3.02 3.019 3.02h3.117V1.471zm4.587 15.019H8.148c-2.476 0-4.49-2.014-4.49-4.49s2.014-4.49 4.49-4.49h4.588v8.98zM8.148 8.981c-1.665 0-3.019 1.355-3.019 3.019s1.355 3.019 3.019 3.019h3.117V8.981zM8.172 24c-2.489 0-4.515-2.014-4.515-4.49s2.014-4.49 4.49-4.49h4.588v4.441c0 2.503-2.047 4.539-4.563 4.539m-.024-7.51a3.023 3.023 0 0 0-3.019 3.019c0 1.665 1.365 3.019 3.044 3.019c1.705 0 3.093-1.376 3.093-3.068v-2.97zm7.704 0h-.098c-2.476 0-4.49-2.014-4.49-4.49s2.014-4.49 4.49-4.49h.098c2.476 0 4.49 2.014 4.49 4.49s-2.014 4.49-4.49 4.49m-.097-7.509c-1.665 0-3.019 1.355-3.019 3.019s1.355 3.019 3.019 3.019h.098c1.665 0 3.019-1.355 3.019-3.019s-1.355-3.019-3.019-3.019z"/>`,viewBox:`0 0 24 24`},"simple-icons:github":{body:`<path fill="currentColor" d="M12 .297c-6.63 0-12 5.373-12 12c0 5.303 3.438 9.8 8.205 11.385c.6.113.82-.258.82-.577c0-.285-.01-1.04-.015-2.04c-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729c1.205.084 1.838 1.236 1.838 1.236c1.07 1.835 2.809 1.305 3.495.998c.108-.776.417-1.305.76-1.605c-2.665-.3-5.466-1.332-5.466-5.93c0-1.31.465-2.38 1.235-3.22c-.135-.303-.54-1.523.105-3.176c0 0 1.005-.322 3.3 1.23c.96-.267 1.98-.399 3-.405c1.02.006 2.04.138 3 .405c2.28-1.552 3.285-1.23 3.285-1.23c.645 1.653.24 2.873.12 3.176c.765.84 1.23 1.91 1.23 3.22c0 4.61-2.805 5.625-5.475 5.92c.42.36.81 1.096.81 2.22c0 1.606-.015 2.896-.015 3.286c0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12"/>`,viewBox:`0 0 24 24`},"simple-icons:google":{body:`<path fill="currentColor" d="M12.48 10.92v3.28h7.84c-.24 1.84-.853 3.187-1.787 4.133c-1.147 1.147-2.933 2.4-6.053 2.4c-4.827 0-8.6-3.893-8.6-8.72s3.773-8.72 8.6-8.72c2.6 0 4.507 1.027 5.907 2.347l2.307-2.307C18.747 1.44 16.133 0 12.48 0C5.867 0 .307 5.387.307 12s5.56 12 12.173 12c3.573 0 6.267-1.173 8.373-3.36c2.16-2.16 2.84-5.213 2.84-7.667c0-.76-.053-1.467-.173-2.053z"/>`,viewBox:`0 0 24 24`},"simple-icons:googlefonts":{body:`<path fill="currentColor" d="M4 2.8A3.6 3.6 0 1 0 4 10a3.6 3.6 0 0 0 0-7.2m7.6 0v18.4h7.2a5.2 5.2 0 1 1 0-10.4a4 4 0 1 1 0-8zm7.2 0v8a4 4 0 1 0 0-8m0 8v10.4A5.2 5.2 0 0 0 24 16a5.2 5.2 0 0 0-5.2-5.2m-7.7-7.206L0 21.199h8.8l2.3-3.64Z"/>`,viewBox:`0 0 24 24`},"simple-icons:huggingface":{body:`<path fill="currentColor" d="M12.025 1.13c-5.77 0-10.449 4.647-10.449 10.378c0 1.112.178 2.181.503 3.185c.064-.222.203-.444.416-.577a.96.96 0 0 1 .524-.15c.293 0 .584.124.84.284c.278.173.48.408.71.694c.226.282.458.611.684.951v-.014c.017-.324.106-.622.264-.874s.403-.487.762-.543c.3-.047.596.06.787.203s.31.313.4.467c.15.257.212.468.233.542c.01.026.653 1.552 1.657 2.54c.616.605 1.01 1.223 1.082 1.912c.055.537-.096 1.059-.38 1.572c.637.121 1.294.187 1.967.187c.657 0 1.298-.063 1.921-.178c-.287-.517-.44-1.041-.384-1.581c.07-.69.465-1.307 1.081-1.913c1.004-.987 1.647-2.513 1.657-2.539c.021-.074.083-.285.233-.542c.09-.154.208-.323.4-.467a1.08 1.08 0 0 1 .787-.203c.359.056.604.29.762.543s.247.55.265.874v.015c.225-.34.457-.67.683-.952c.23-.286.432-.52.71-.694c.257-.16.547-.284.84-.285a.97.97 0 0 1 .524.151c.228.143.373.388.43.625l.006.04a10.3 10.3 0 0 0 .534-3.273c0-5.731-4.678-10.378-10.449-10.378M8.327 6.583a1.5 1.5 0 0 1 .713.174a1.487 1.487 0 0 1 .617 2.013c-.183.343-.762-.214-1.102-.094c-.38.134-.532.914-.917.71a1.487 1.487 0 0 1 .69-2.803m7.486 0a1.487 1.487 0 0 1 .689 2.803c-.385.204-.536-.576-.916-.71c-.34-.12-.92.437-1.103.094a1.487 1.487 0 0 1 .617-2.013a1.5 1.5 0 0 1 .713-.174m-10.68 1.55a.96.96 0 1 1 0 1.921a.96.96 0 0 1 0-1.92m13.838 0a.96.96 0 1 1 0 1.92a.96.96 0 0 1 0-1.92M8.489 11.458c.588.01 1.965 1.157 3.572 1.164c1.607-.007 2.984-1.155 3.572-1.164c.196-.003.305.12.305.454c0 .886-.424 2.328-1.563 3.202c-.22-.756-1.396-1.366-1.63-1.32q-.011.001-.02.006l-.044.026l-.01.008l-.03.024q-.018.017-.035.036l-.032.04a1 1 0 0 0-.058.09l-.014.025q-.049.088-.11.19a1 1 0 0 1-.083.116a1.2 1.2 0 0 1-.173.18q-.035.029-.075.058a1.3 1.3 0 0 1-.251-.243a1 1 0 0 1-.076-.107c-.124-.193-.177-.363-.337-.444c-.034-.016-.104-.008-.2.022q-.094.03-.216.087q-.06.028-.125.063l-.13.074q-.067.04-.136.086a3 3 0 0 0-.135.096a3 3 0 0 0-.26.219a2 2 0 0 0-.12.121a2 2 0 0 0-.106.128l-.002.002a2 2 0 0 0-.09.132l-.001.001a1.2 1.2 0 0 0-.105.212q-.013.036-.024.073c-1.139-.875-1.563-2.317-1.563-3.203c0-.334.109-.457.305-.454m.836 10.354c.824-1.19.766-2.082-.365-3.194c-1.13-1.112-1.789-2.738-1.789-2.738s-.246-.945-.806-.858s-.97 1.499.202 2.362c1.173.864-.233 1.45-.685.64c-.45-.812-1.683-2.896-2.322-3.295s-1.089-.175-.938.647s2.822 2.813 2.562 3.244s-1.176-.506-1.176-.506s-2.866-2.567-3.49-1.898s.473 1.23 2.037 2.16c1.564.932 1.686 1.178 1.464 1.53s-3.675-2.511-4-1.297c-.323 1.214 3.524 1.567 3.287 2.405c-.238.839-2.71-1.587-3.216-.642c-.506.946 3.49 2.056 3.522 2.064c1.29.33 4.568 1.028 5.713-.624m5.349 0c-.824-1.19-.766-2.082.365-3.194c1.13-1.112 1.789-2.738 1.789-2.738s.246-.945.806-.858s.97 1.499-.202 2.362c-1.173.864.233 1.45.685.64c.451-.812 1.683-2.896 2.322-3.295s1.089-.175.938.647s-2.822 2.813-2.562 3.244s1.176-.506 1.176-.506s2.866-2.567 3.49-1.898s-.473 1.23-2.037 2.16c-1.564.932-1.686 1.178-1.464 1.53s3.675-2.511 4-1.297c.323 1.214-3.524 1.567-3.287 2.405c.238.839 2.71-1.587 3.216-.642c.506.946-3.49 2.056-3.522 2.064c-1.29.33-4.568 1.028-5.713-.624"/>`,viewBox:`0 0 24 24`},"simple-icons:iconify":{body:`<path fill="currentColor" d="M2.857 19.429V9.642q.35-.089.67-.295l1.616-1.045v9.984h4.571v2.285H4c-.63 0-1.143-.512-1.143-1.142m7.429-8.572a1.715 1.715 0 1 1 3.43.001a1.715 1.715 0 0 1-3.43 0m-5.143-8V1.143a1.143 1.143 0 0 1 2.286 0v.235zm9.143 15.429h4.571V8.302l1.616 1.045q.32.206.67.295v9.787c0 .63-.512 1.143-1.143 1.143h-5.714Zm-.004-17.028l8.053 5.211a1.144 1.144 0 0 1-1.242 1.919l-8.041-5.203l.19-.123a2.28 2.28 0 0 0 1.04-1.804M11.38.183a1.144 1.144 0 0 1 1.242 1.92L2.907 8.387a1.144 1.144 0 0 1-1.242-1.919Zm2.6 22.103H22c.473 0 .857.384.857.857A.86.86 0 0 1 22 24H2a.86.86 0 0 1-.857-.857c0-.473.384-.857.857-.857h8.02a2.286 2.286 0 0 0 3.96 0m-.836-8.81v7.667a1.143 1.143 0 0 1-2.286 0v-7.667a2.85 2.85 0 0 0 1.143.238c.406 0 .793-.085 1.143-.238"/>`,viewBox:`0 0 24 24`},"simple-icons:langchain":{body:`<path fill="currentColor" d="M13.796 0a6.93 6.93 0 0 0-4.91 2.019L5.451 5.455l3.273 3.27l3.432-3.432a2.284 2.284 0 0 1 3.277 0a2.28 2.28 0 0 1 0 3.275L12 12.001l3.273 3.273l3.433-3.435c2.692-2.692 2.692-7.127 0-9.82A6.92 6.92 0 0 0 13.796 0m-5.07 8.728l-3.433 3.434c-2.692 2.693-2.692 7.126 0 9.819A6.92 6.92 0 0 0 10.203 24a6.93 6.93 0 0 0 4.911-2.02l3.432-3.432l-3.271-3.272l-3.433 3.433a2.284 2.284 0 0 1-3.277 0a2.28 2.28 0 0 1 0-3.276L12 12z"/>`,viewBox:`0 0 24 24`},"simple-icons:lucide":{body:`<path fill="currentColor" d="M18.483 1.123a1.1 1.1 0 0 0-.752.362a1.09 1.09 0 0 0 .088 1.54a11.96 11.96 0 0 1 4 8.946a7.62 7.62 0 0 1-7.637 7.636a7.62 7.62 0 0 1-7.637-7.636a3.255 3.255 0 0 1 3.273-3.273c1.82 0 3.273 1.45 3.273 3.273a1.09 1.09 0 0 0 1.09 1.09a1.09 1.09 0 0 0 1.092-1.09c0-3-2.455-5.455-5.455-5.455s-5.454 2.455-5.454 5.455c0 5.408 4.408 9.818 9.818 9.818S24 17.379 24 11.971A14.16 14.16 0 0 0 19.272 1.4a1.1 1.1 0 0 0-.789-.277M9.818 2.15C4.408 2.151 0 6.561 0 11.97a14.16 14.16 0 0 0 4.8 10.637a1.09 1.09 0 0 0 1.54-.096a1.09 1.09 0 0 0-.095-1.54a11.96 11.96 0 0 1-4.063-9a7.62 7.62 0 0 1 7.636-7.637a7.62 7.62 0 0 1 7.637 7.636a3.256 3.256 0 0 1-3.273 3.273a3.256 3.256 0 0 1-3.273-3.273a1.09 1.09 0 0 0-1.09-1.09a1.09 1.09 0 0 0-1.092 1.09c0 3 2.455 5.455 5.455 5.455s5.454-2.455 5.454-5.455c0-5.408-4.408-9.818-9.818-9.818z"/>`,viewBox:`0 0 24 24`},"simple-icons:mdnwebdocs":{body:`<path fill="currentColor" d="m21.538 1.1l-6.745 21.8h-2.77L18.77 1.1ZM24 1.1v21.8h-2.462V1.1Zm-12 0v21.8H9.538V1.1Zm-2.462 0L2.77 22.9H0L6.746 1.1Z"/>`,viewBox:`0 0 24 24`},"simple-icons:modelcontextprotocol":{body:`<path fill="currentColor" d="M13.85 0a4.16 4.16 0 0 0-2.95 1.217L1.456 10.66a.835.835 0 0 0 0 1.18a.835.835 0 0 0 1.18 0l9.442-9.442a2.49 2.49 0 0 1 3.541 0a2.49 2.49 0 0 1 0 3.541L8.59 12.97l-.1.1a.835.835 0 0 0 0 1.18a.835.835 0 0 0 1.18 0l.1-.098l7.03-7.034a2.49 2.49 0 0 1 3.542 0l.049.05a2.49 2.49 0 0 1 0 3.54l-8.54 8.54a1.96 1.96 0 0 0 0 2.755l1.753 1.753a.835.835 0 0 0 1.18 0a.835.835 0 0 0 0-1.18l-1.753-1.753a.266.266 0 0 1 0-.394l8.54-8.54a4.185 4.185 0 0 0 0-5.9l-.05-.05a4.16 4.16 0 0 0-2.95-1.218c-.2 0-.401.02-.6.048a4.17 4.17 0 0 0-1.17-3.552A4.16 4.16 0 0 0 13.85 0m0 3.333a.84.84 0 0 0-.59.245L6.275 10.56a4.186 4.186 0 0 0 0 5.902a4.186 4.186 0 0 0 5.902 0L19.16 9.48a.835.835 0 0 0 0-1.18a.835.835 0 0 0-1.18 0l-6.985 6.984a2.49 2.49 0 0 1-3.54 0a2.49 2.49 0 0 1 0-3.54l6.983-6.985a.835.835 0 0 0 0-1.18a.84.84 0 0 0-.59-.245"/>`,viewBox:`0 0 24 24`},"simple-icons:myanimelist":{body:`<path fill="currentColor" d="M14.921 6.479c-.82 0-3.683 0-4.947 3.156c-.662 1.652-.986 4.812.876 7.886l1.934-1.41s-.767-1.095-1.083-3.191h2.897l.022 3.19h2.604V8.835h-2.581v2.043l-2.46-.023s.413-2.408 2.877-2.336h2.454l-.572-2.04ZM0 6.528v9.624h2.348v-5.84l2.031 2.664l2.047-2.652v5.828h2.336V6.528H6.437L4.368 9.474L2.31 6.528Zm18.447.022v9.583h5.022L24 14.09h-3.232V6.55Z"/>`,viewBox:`0 0 24 24`},"simple-icons:nodedotjs":{body:`<path fill="currentColor" d="M11.998 24c-.321 0-.641-.084-.922-.247L8.14 22.016c-.438-.245-.224-.332-.08-.383c.585-.203.703-.25 1.328-.604c.065-.037.151-.023.218.017l2.256 1.339a.29.29 0 0 0 .272 0l8.795-5.076a.28.28 0 0 0 .134-.238V6.921a.28.28 0 0 0-.137-.242l-8.791-5.072a.28.28 0 0 0-.271 0L3.075 6.68a.28.28 0 0 0-.139.241v10.15a.27.27 0 0 0 .139.235l2.409 1.392c1.307.654 2.108-.116 2.108-.89V7.787c0-.142.114-.253.256-.253h1.115c.139 0 .255.112.255.253v10.021c0 1.745-.95 2.745-2.604 2.745c-.508 0-.909 0-2.026-.551L2.28 18.675a1.86 1.86 0 0 1-.922-1.604V6.921c0-.659.353-1.275.922-1.603L11.075.236a1.93 1.93 0 0 1 1.848 0l8.794 5.082c.57.329.924.944.924 1.603v10.15a1.86 1.86 0 0 1-.924 1.604l-8.794 5.078c-.28.163-.599.247-.925.247m7.101-10.007c0-1.9-1.284-2.406-3.987-2.763c-2.731-.361-3.009-.548-3.009-1.187c0-.528.235-1.233 2.258-1.233c1.807 0 2.473.389 2.747 1.607a.254.254 0 0 0 .247.199h1.141a.26.26 0 0 0 .186-.081a.26.26 0 0 0 .067-.196c-.177-2.098-1.571-3.076-4.388-3.076c-2.508 0-4.004 1.058-4.004 2.833c0 1.925 1.488 2.457 3.895 2.695c2.88.282 3.103.703 3.103 1.269c0 .983-.789 1.402-2.642 1.402c-2.327 0-2.839-.584-3.011-1.742a.255.255 0 0 0-.253-.215h-1.137a.25.25 0 0 0-.254.253c0 1.482.806 3.248 4.655 3.248c2.788.001 4.386-1.096 4.386-3.013"/>`,viewBox:`0 0 24 24`},"simple-icons:ollama":{body:`<path fill="currentColor" d="M16.361 10.26a.9.9 0 0 0-.558.47l-.072.148l.001.207c0 .193.004.217.059.353c.076.193.152.312.291.448c.24.238.51.3.872.205a.86.86 0 0 0 .517-.436a.75.75 0 0 0 .08-.498c-.064-.453-.33-.782-.724-.897a1.1 1.1 0 0 0-.466 0m-9.203.005c-.305.096-.533.32-.65.639a1.2 1.2 0 0 0-.06.52c.057.309.31.59.598.667c.362.095.632.033.872-.205c.14-.136.215-.255.291-.448c.055-.136.059-.16.059-.353l.001-.207l-.072-.148a.9.9 0 0 0-.565-.472a1 1 0 0 0-.474.007m4.184 2c-.131.071-.223.25-.195.383c.031.143.157.288.353.407c.105.063.112.072.117.136c.004.038-.01.146-.029.243c-.02.094-.036.194-.036.222c.002.074.07.195.143.253c.064.052.076.054.255.059c.164.005.198.001.264-.03c.169-.082.212-.234.15-.525c-.052-.243-.042-.28.087-.355c.137-.08.281-.219.324-.314a.365.365 0 0 0-.175-.48a.4.4 0 0 0-.181-.033c-.126 0-.207.03-.355.124l-.085.053l-.053-.032c-.219-.13-.259-.145-.391-.143a.4.4 0 0 0-.193.032m.39-2.195c-.373.036-.475.05-.654.086a4.5 4.5 0 0 0-.951.328c-.94.46-1.589 1.226-1.787 2.114c-.04.176-.045.234-.045.53c0 .294.005.357.043.524c.264 1.16 1.332 2.017 2.714 2.173c.3.033 1.596.033 1.896 0c1.11-.125 2.064-.727 2.493-1.571c.114-.226.169-.372.22-.602c.039-.167.044-.23.044-.523c0-.297-.005-.355-.045-.531c-.288-1.29-1.539-2.304-3.072-2.497a7 7 0 0 0-.855-.031zm.645.937a3.3 3.3 0 0 1 1.44.514c.223.148.537.458.671.662c.166.251.26.508.303.82c.02.143.01.251-.043.482c-.08.345-.332.705-.672.957a3 3 0 0 1-.689.348c-.382.122-.632.144-1.525.138c-.582-.006-.686-.01-.853-.042q-.856-.16-1.35-.68c-.264-.28-.385-.535-.45-.946c-.03-.192.025-.509.137-.776c.136-.326.488-.73.836-.963c.403-.269.934-.46 1.422-.512c.187-.02.586-.02.773-.002m-5.503-11a1.65 1.65 0 0 0-.683.298C5.617.74 5.173 1.666 4.985 2.819c-.07.436-.119 1.04-.119 1.503c0 .544.064 1.24.155 1.721c.02.107.031.202.023.208l-.187.152a5.3 5.3 0 0 0-.949 1.02a5.5 5.5 0 0 0-.94 2.339a6.6 6.6 0 0 0-.023 1.357c.091.78.325 1.438.727 2.04l.13.195l-.037.064c-.269.452-.498 1.105-.605 1.732c-.084.496-.095.629-.095 1.294c0 .67.009.803.088 1.266c.095.555.288 1.143.503 1.534c.071.128.243.393.264.407c.007.003-.014.067-.046.141a7.4 7.4 0 0 0-.548 1.873a5 5 0 0 0-.071.991c0 .56.031.832.148 1.279L3.42 24h1.478l-.05-.091c-.297-.552-.325-1.575-.068-2.597c.117-.472.25-.819.498-1.296l.148-.29v-.177c0-.165-.003-.184-.057-.293a.9.9 0 0 0-.194-.25a1.7 1.7 0 0 1-.385-.543c-.424-.92-.506-2.286-.208-3.451c.124-.486.329-.918.544-1.154a.8.8 0 0 0 .223-.531c0-.195-.07-.355-.224-.522a3.14 3.14 0 0 1-.817-1.729c-.14-.96.114-2.005.69-2.834c.563-.814 1.353-1.336 2.237-1.475c.199-.033.57-.028.776.01c.226.04.367.028.512-.041c.179-.085.268-.19.374-.431c.093-.215.165-.333.36-.576c.234-.29.46-.489.822-.729c.413-.27.884-.467 1.352-.561c.17-.035.25-.04.569-.04s.398.005.569.04a4.07 4.07 0 0 1 1.914.997c.117.109.398.457.488.602c.034.057.095.177.132.267c.105.241.195.346.374.43c.14.068.286.082.503.045c.343-.058.607-.053.943.016c1.144.23 2.14 1.173 2.581 2.437c.385 1.108.276 2.267-.296 3.153c-.097.15-.193.27-.333.419c-.301.322-.301.722-.001 1.053c.493.539.801 1.866.708 3.036c-.062.772-.26 1.463-.533 1.854a2 2 0 0 1-.224.258a.9.9 0 0 0-.194.25c-.054.109-.057.128-.057.293v.178l.148.29c.248.476.38.823.498 1.295c.253 1.008.231 2.01-.059 2.581a1 1 0 0 0-.044.098c0 .006.329.009.732.009h.73l.02-.074l.036-.134c.019-.076.057-.3.088-.516a9 9 0 0 0 0-1.258c-.11-.875-.295-1.57-.597-2.226c-.032-.074-.053-.138-.046-.141a1.4 1.4 0 0 0 .108-.152c.376-.569.607-1.284.724-2.228c.031-.26.031-1.378 0-1.628c-.083-.645-.182-1.082-.348-1.525a6 6 0 0 0-.329-.7l-.038-.064l.131-.194c.402-.604.636-1.262.727-2.04a6.6 6.6 0 0 0-.024-1.358a5.5 5.5 0 0 0-.939-2.339a5.3 5.3 0 0 0-.95-1.02l-.186-.152a.7.7 0 0 1 .023-.208c.208-1.087.201-2.443-.017-3.503c-.19-.924-.535-1.658-.98-2.082c-.354-.338-.716-.482-1.15-.455c-.996.059-1.8 1.205-2.116 3.01a7 7 0 0 0-.097.726c0 .036-.007.066-.015.066a1 1 0 0 1-.149-.078A4.86 4.86 0 0 0 12 3.03c-.832 0-1.687.243-2.456.698a1 1 0 0 1-.148.078c-.008 0-.015-.03-.015-.066a7 7 0 0 0-.097-.725C8.997 1.392 8.337.319 7.46.048a2 2 0 0 0-.585-.041Zm.293 1.402c.248.197.523.759.682 1.388c.03.113.06.244.069.292c.007.047.026.152.041.233c.067.365.098.76.102 1.24l.002.475l-.12.175l-.118.178h-.278c-.324 0-.646.041-.954.124l-.238.06c-.033.007-.038-.003-.057-.144a8.4 8.4 0 0 1 .016-2.323c.124-.788.413-1.501.696-1.711c.067-.05.079-.049.157.013m9.825-.012c.17.126.358.46.498.888c.28.854.36 2.028.212 3.145c-.019.14-.024.151-.057.144l-.238-.06a3.7 3.7 0 0 0-.954-.124h-.278l-.119-.178l-.119-.175l.002-.474c.004-.669.066-1.19.214-1.772c.157-.623.434-1.185.68-1.382c.078-.062.09-.063.159-.012"/>`,viewBox:`0 0 24 24`},"simple-icons:openai":{body:`<path fill="currentColor" d="M22.282 9.821a6 6 0 0 0-.516-4.91a6.05 6.05 0 0 0-6.51-2.9A6.065 6.065 0 0 0 4.981 4.18a6 6 0 0 0-3.998 2.9a6.05 6.05 0 0 0 .743 7.097a5.98 5.98 0 0 0 .51 4.911a6.05 6.05 0 0 0 6.515 2.9A6 6 0 0 0 13.26 24a6.06 6.06 0 0 0 5.772-4.206a6 6 0 0 0 3.997-2.9a6.06 6.06 0 0 0-.747-7.073M13.26 22.43a4.48 4.48 0 0 1-2.876-1.04l.141-.081l4.779-2.758a.8.8 0 0 0 .392-.681v-6.737l2.02 1.168a.07.07 0 0 1 .038.052v5.583a4.504 4.504 0 0 1-4.494 4.494M3.6 18.304a4.47 4.47 0 0 1-.535-3.014l.142.085l4.783 2.759a.77.77 0 0 0 .78 0l5.843-3.369v2.332a.08.08 0 0 1-.033.062L9.74 19.95a4.5 4.5 0 0 1-6.14-1.646M2.34 7.896a4.5 4.5 0 0 1 2.366-1.973V11.6a.77.77 0 0 0 .388.677l5.815 3.354l-2.02 1.168a.08.08 0 0 1-.071 0l-4.83-2.786A4.504 4.504 0 0 1 2.34 7.872zm16.597 3.855l-5.833-3.387L15.119 7.2a.08.08 0 0 1 .071 0l4.83 2.791a4.494 4.494 0 0 1-.676 8.105v-5.678a.79.79 0 0 0-.407-.667m2.01-3.023l-.141-.085l-4.774-2.782a.78.78 0 0 0-.785 0L9.409 9.23V6.897a.07.07 0 0 1 .028-.061l4.83-2.787a4.5 4.5 0 0 1 6.68 4.66zm-12.64 4.135l-2.02-1.164a.08.08 0 0 1-.038-.057V6.075a4.5 4.5 0 0 1 7.375-3.453l-.142.08L8.704 5.46a.8.8 0 0 0-.393.681zm1.097-2.365l2.602-1.5l2.607 1.5v2.999l-2.597 1.5l-2.607-1.5Z"/>`,viewBox:`0 0 24 24`},"simple-icons:openjdk":{body:`<path fill="currentColor" d="M11.915 0L11.7.215C9.515 2.4 7.47 6.39 6.046 10.483c-1.064 1.024-3.633 2.81-3.711 3.551c-.093.87 1.746 2.611 1.55 3.235c-.198.625-1.304 1.408-1.014 1.939c.1.188.823.011 1.277-.491a13.4 13.4 0 0 0-.017 2.14c.076.906.27 1.668.643 2.232c.372.563.956.911 1.667.911c.397 0 .727-.114 1.024-.264c.298-.149.571-.33.91-.5c.68-.34 1.634-.666 3.53-.604c1.903.062 2.872.39 3.559.704s1.15.664 1.925.664c.767 0 1.395-.336 1.807-.9c.412-.563.631-1.33.72-2.24c.06-.623.055-1.32 0-2.066c.454.45 1.117.604 1.213.424c.29-.53-.816-1.314-1.013-1.937c-.198-.624 1.642-2.366 1.549-3.236c-.08-.748-2.707-2.568-3.748-3.586C16.428 6.374 14.308 2.394 12.13.215zm.175 6.038a2.95 2.95 0 0 1 2.943 2.942a2.95 2.95 0 0 1-2.943 2.943A2.95 2.95 0 0 1 9.148 8.98a2.95 2.95 0 0 1 2.942-2.942M8.685 7.983a3.5 3.5 0 0 0-.145.997c0 1.951 1.6 3.55 3.55 3.55s3.55-1.598 3.55-3.55q-.002-.495-.132-.951q.502.143.915.336a43 43 0 0 1 2.042 5.829c.678 2.545 1.01 4.92.846 6.607c-.082.844-.29 1.51-.606 1.94c-.315.431-.713.651-1.315.651c-.593 0-.932-.27-1.673-.61c-.741-.338-1.825-.694-3.792-.758c-1.974-.064-3.073.293-3.821.669c-.375.188-.659.373-.911.5s-.466.2-.752.2c-.53 0-.876-.209-1.16-.64c-.285-.43-.474-1.101-.545-1.948c-.141-1.693.176-4.069.823-6.614a43 43 0 0 1 1.934-5.783c.348-.167.749-.31 1.192-.425m-3.382 4.362a.2.2 0 0 1 .13.031c-.166.56-.323 1.116-.463 1.665a34 34 0 0 0-.547 2.555a4 4 0 0 0-.2-.39c-.58-1.012-.914-1.642-1.16-2.08c.315-.24 1.679-1.755 2.24-1.781m13.394.01c.562.027 1.926 1.543 2.24 1.783c-.246.438-.58 1.068-1.16 2.08a4 4 0 0 0-.163.309a32 32 0 0 0-.562-2.49a41 41 0 0 0-.482-1.652a.2.2 0 0 1 .127-.03"/>`,viewBox:`0 0 24 24`},"simple-icons:postgresql":{body:`<path fill="currentColor" d="M23.56 14.723a.5.5 0 0 0-.057-.12q-.21-.395-1.007-.231c-1.654.34-2.294.13-2.526-.02c1.342-2.048 2.445-4.522 3.041-6.83c.272-1.05.798-3.523.122-4.73a1.6 1.6 0 0 0-.15-.236C21.693.91 19.8.025 17.51.001c-1.495-.016-2.77.346-3.116.479a10 10 0 0 0-.516-.082a8 8 0 0 0-1.312-.127c-1.182-.019-2.203.264-3.05.84C8.66.79 4.729-.534 2.296 1.19C.935 2.153.309 3.873.43 6.304c.041.818.507 3.334 1.243 5.744q.69 2.26 1.433 3.582q.83 1.493 1.714 1.79c.448.148 1.133.143 1.858-.729a56 56 0 0 1 1.945-2.206c.435.235.906.362 1.39.377v.004a11 11 0 0 0-.247.305c-.339.43-.41.52-1.5.745c-.31.064-1.134.233-1.146.811a.6.6 0 0 0 .091.327c.227.423.922.61 1.015.633c1.335.333 2.505.092 3.372-.679c-.017 2.231.077 4.418.345 5.088c.221.553.762 1.904 2.47 1.904q.375.001.829-.094c1.782-.382 2.556-1.17 2.855-2.906c.15-.87.402-2.875.539-4.101c.017-.07.036-.12.057-.136c0 0 .07-.048.427.03l.044.007l.254.022l.015.001c.847.039 1.911-.142 2.531-.43c.644-.3 1.806-1.033 1.595-1.67M2.37 11.876c-.744-2.435-1.178-4.885-1.212-5.571c-.109-2.172.417-3.683 1.562-4.493c1.837-1.299 4.84-.54 6.108-.13l-.01.01C6.795 3.734 6.843 7.226 6.85 7.44c0 .082.006.199.016.36c.034.586.1 1.68-.074 2.918c-.16 1.15.194 2.276.973 3.089q.12.126.252.237c-.347.371-1.1 1.193-1.903 2.158c-.568.682-.96.551-1.088.508c-.392-.13-.813-.587-1.239-1.322c-.48-.839-.963-2.032-1.415-3.512m6.007 5.088a1.6 1.6 0 0 1-.432-.178c.089-.039.237-.09.483-.14c1.284-.265 1.482-.451 1.915-1a8 8 0 0 1 .367-.443a.4.4 0 0 0 .074-.13c.17-.151.272-.11.436-.042c.156.065.308.26.37.475c.03.102.062.295-.045.445c-.904 1.266-2.222 1.25-3.168 1.013m2.094-3.988l-.052.14c-.133.357-.257.689-.334 1.004c-.667-.002-1.317-.288-1.81-.803c-.628-.655-.913-1.566-.783-2.5c.183-1.308.116-2.447.08-3.059l-.013-.22c.296-.262 1.666-.996 2.643-.772c.446.102.718.406.83.928c.585 2.704.078 3.83-.33 4.736a9 9 0 0 0-.23.546m7.364 4.572q-.024.266-.062.596l-.146.438a.4.4 0 0 0-.018.108c-.006.475-.054.649-.115.87a4.8 4.8 0 0 0-.18 1.057c-.11 1.414-.878 2.227-2.417 2.556c-1.515.325-1.784-.496-2.02-1.221a7 7 0 0 0-.078-.227c-.215-.586-.19-1.412-.157-2.555c.016-.561-.025-1.901-.33-2.646q.006-.44.019-.892a.4.4 0 0 0-.016-.113a2 2 0 0 0-.044-.208c-.122-.428-.42-.786-.78-.935c-.142-.059-.403-.167-.717-.087c.067-.276.183-.587.309-.925l.053-.142c.06-.16.134-.325.213-.5c.426-.948 1.01-2.246.376-5.178c-.237-1.098-1.03-1.634-2.232-1.51c-.72.075-1.38.366-1.709.532a6 6 0 0 0-.196.104c.092-1.106.439-3.174 1.736-4.482a4 4 0 0 1 .303-.276a.35.35 0 0 0 .145-.064c.752-.57 1.695-.85 2.802-.833q.616.01 1.174.081c1.94.355 3.244 1.447 4.036 2.383c.814.962 1.255 1.931 1.431 2.454c-1.323-.134-2.223.127-2.68.78c-.992 1.418.544 4.172 1.282 5.496c.135.242.252.452.289.54c.24.583.551.972.778 1.256c.07.087.138.171.189.245c-.4.116-1.12.383-1.055 1.717a35 35 0 0 1-.084.815c-.046.208-.07.46-.1.766m.89-1.621c-.04-.832.27-.919.597-1.01l.135-.041a1 1 0 0 0 .134.103c.57.376 1.583.421 3.007.134c-.202.177-.519.4-.953.601c-.41.19-1.096.333-1.747.364c-.72.034-1.086-.08-1.173-.151m.57-9.271a7 7 0 0 1-.105 1.001c-.055.358-.112.728-.127 1.177c-.014.436.04.89.093 1.33c.107.887.216 1.8-.207 2.701a4 4 0 0 1-.188-.385a8 8 0 0 0-.325-.617c-.616-1.104-2.057-3.69-1.32-4.744c.38-.543 1.342-.566 2.179-.463m.228 7.013l-.085-.107l-.035-.044c.726-1.2.584-2.387.457-3.439c-.052-.432-.1-.84-.088-1.222c.013-.407.066-.755.118-1.092c.064-.415.13-.844.111-1.35a.6.6 0 0 0 .012-.19c-.046-.486-.6-1.938-1.73-3.253a7.8 7.8 0 0 0-2.688-2.04A9.3 9.3 0 0 1 17.62.746c2.052.046 3.675.814 4.824 2.283a1 1 0 0 1 .067.1c.723 1.356-.276 6.275-2.987 10.54m-8.816-6.116c-.025.18-.31.423-.621.423l-.081-.006a.8.8 0 0 1-.506-.315c-.046-.06-.12-.178-.106-.285a.22.22 0 0 1 .093-.149c.118-.089.352-.122.61-.086c.316.044.642.193.61.418m7.93-.411c.011.08-.049.2-.153.31a.72.72 0 0 1-.408.223l-.075.005c-.293 0-.541-.234-.56-.371c-.024-.177.264-.31.56-.352c.298-.042.612.009.636.185"/>`,viewBox:`0 0 24 24`},"simple-icons:rabbitmq":{body:`<path fill="currentColor" d="M23.035 9.601h-7.677a.956.956 0 0 1-.962-.962V.962a.956.956 0 0 0-.962-.956H10.56a.956.956 0 0 0-.962.956V8.64a.956.956 0 0 1-.962.962H5.762a.956.956 0 0 1-.961-.962V.962A.956.956 0 0 0 3.839 0H.959a.956.956 0 0 0-.956.962v22.076A.956.956 0 0 0 .965 24h22.07a.956.956 0 0 0 .962-.962V10.58a.956.956 0 0 0-.962-.98zm-3.86 8.152a1.437 1.437 0 0 1-1.437 1.443h-1.924a1.437 1.437 0 0 1-1.436-1.443v-1.917a1.437 1.437 0 0 1 1.436-1.443h1.924a1.437 1.437 0 0 1 1.437 1.443z"/>`,viewBox:`0 0 24 24`},"simple-icons:react":{body:`<path fill="currentColor" d="M14.23 12.004a2.236 2.236 0 0 1-2.235 2.236a2.236 2.236 0 0 1-2.236-2.236a2.236 2.236 0 0 1 2.235-2.236a2.236 2.236 0 0 1 2.236 2.236m2.648-10.69c-1.346 0-3.107.96-4.888 2.622c-1.78-1.653-3.542-2.602-4.887-2.602c-.41 0-.783.093-1.106.278c-1.375.793-1.683 3.264-.973 6.365C1.98 8.917 0 10.42 0 12.004c0 1.59 1.99 3.097 5.043 4.03c-.704 3.113-.39 5.588.988 6.38c.32.187.69.275 1.102.275c1.345 0 3.107-.96 4.888-2.624c1.78 1.654 3.542 2.603 4.887 2.603c.41 0 .783-.09 1.106-.275c1.374-.792 1.683-3.263.973-6.365C22.02 15.096 24 13.59 24 12.004c0-1.59-1.99-3.097-5.043-4.032c.704-3.11.39-5.587-.988-6.38a2.17 2.17 0 0 0-1.092-.278zm-.005 1.09v.006c.225 0 .406.044.558.127c.666.382.955 1.835.73 3.704c-.054.46-.142.945-.25 1.44a23.5 23.5 0 0 0-3.107-.534A24 24 0 0 0 12.769 4.7c1.592-1.48 3.087-2.292 4.105-2.295zm-9.77.02c1.012 0 2.514.808 4.11 2.28c-.686.72-1.37 1.537-2.02 2.442a23 23 0 0 0-3.113.538a15 15 0 0 1-.254-1.42c-.23-1.868.054-3.32.714-3.707c.19-.09.4-.127.563-.132zm4.882 3.05q.684.704 1.36 1.564c-.44-.02-.89-.034-1.345-.034q-.691-.001-1.36.034c.44-.572.895-1.096 1.345-1.565zM12 8.1c.74 0 1.477.034 2.202.093q.61.874 1.183 1.86q.557.961 1.018 1.946c-.308.655-.646 1.31-1.013 1.95c-.38.66-.773 1.288-1.18 1.87a25.6 25.6 0 0 1-4.412.005a27 27 0 0 1-1.183-1.86q-.557-.961-1.018-1.946a25 25 0 0 1 1.013-1.954c.38-.66.773-1.286 1.18-1.868A25 25 0 0 1 12 8.098zm-3.635.254c-.24.377-.48.763-.704 1.16q-.336.585-.635 1.174c-.265-.656-.49-1.31-.676-1.947c.64-.15 1.315-.283 2.015-.386zm7.26 0q1.044.153 2.006.387c-.18.632-.405 1.282-.66 1.933a26 26 0 0 0-1.345-2.32zm3.063.675q.727.226 1.375.498c1.732.74 2.852 1.708 2.852 2.476c-.005.768-1.125 1.74-2.857 2.475c-.42.18-.88.342-1.355.493a24 24 0 0 0-1.1-2.98c.45-1.017.81-2.01 1.085-2.964zm-13.395.004c.278.96.645 1.957 1.1 2.98a23 23 0 0 0-1.086 2.964c-.484-.15-.944-.318-1.37-.5c-1.732-.737-2.852-1.706-2.852-2.474s1.12-1.742 2.852-2.476c.42-.18.88-.342 1.356-.494m11.678 4.28c.265.657.49 1.312.676 1.948c-.64.157-1.316.29-2.016.39a26 26 0 0 0 1.341-2.338zm-9.945.02c.2.392.41.783.64 1.175q.345.586.705 1.143a22 22 0 0 1-2.006-.386c.18-.63.406-1.282.66-1.933zM17.92 16.32c.112.493.2.968.254 1.423c.23 1.868-.054 3.32-.714 3.708c-.147.09-.338.128-.563.128c-1.012 0-2.514-.807-4.11-2.28c.686-.72 1.37-1.536 2.02-2.44c1.107-.118 2.154-.3 3.113-.54zm-11.83.01c.96.234 2.006.415 3.107.532c.66.905 1.345 1.727 2.035 2.446c-1.595 1.483-3.092 2.295-4.11 2.295a1.2 1.2 0 0 1-.553-.132c-.666-.38-.955-1.834-.73-3.703c.054-.46.142-.944.25-1.438zm4.56.64q.661.032 1.345.034q.691.001 1.36-.034c-.44.572-.895 1.095-1.345 1.565q-.684-.706-1.36-1.565"/>`,viewBox:`0 0 24 24`},"simple-icons:reactrouter":{body:`<path fill="currentColor" d="M12.118 5.466a2.3 2.3 0 0 0-.623.08c-.278.067-.702.332-.953.583c-.41.423-.49.609-.662 1.469c-.08.423.41 1.43.847 1.734c.45.317 1.085.502 2.065.608c1.429.16 1.84.636 1.84 2.197c0 1.377-.385 1.747-1.96 1.906c-1.707.172-2.58.834-2.765 2.117c-.106.781.41 1.76 1.125 2.091c1.627.768 3.15-.198 3.467-2.196c.211-1.284.622-1.642 1.998-1.747c1.588-.133 2.409-.675 2.713-1.787c.278-1.02-.304-2.157-1.297-2.554c-.264-.106-.873-.238-1.35-.291c-1.495-.16-1.879-.424-2.038-1.39c-.225-1.337-.317-1.562-.794-2.09a2.17 2.17 0 0 0-1.613-.73m-4.785 4.36a2.2 2.2 0 0 0-.497.048c-1.469.318-2.17 2.051-1.35 3.295c1.178 1.774 3.944.953 3.97-1.177c.012-1.193-.98-2.143-2.123-2.166M2.089 14.19a2.2 2.2 0 0 0-.427.052c-2.158.476-2.237 3.626-.106 4.182c.53.145.582.145 1.111.013c1.191-.318 1.866-1.456 1.549-2.607c-.278-1.02-1.144-1.664-2.127-1.64m19.824.008c-.233.002-.477.058-.784.162c-1.39.477-1.866 2.092-.98 3.336c.557.794 1.96 1.058 2.82.516c1.416-.874 1.363-3.057-.093-3.746c-.38-.186-.663-.271-.963-.268"/>`,viewBox:`0 0 24 24`},"simple-icons:redis":{body:`<path fill="currentColor" d="M22.71 13.145c-1.66 2.092-3.452 4.483-7.038 4.483c-3.203 0-4.397-2.825-4.48-5.12c.701 1.484 2.073 2.685 4.214 2.63c4.117-.133 6.94-3.852 6.94-7.239c0-4.05-3.022-6.972-8.268-6.972c-3.752 0-8.4 1.428-11.455 3.685C2.59 6.937 3.885 9.958 4.35 9.626c2.648-1.904 4.748-3.13 6.784-3.744C8.12 9.244.886 17.05 0 18.425c.1 1.261 1.66 4.648 2.424 4.648c.232 0 .431-.133.664-.365a101 101 0 0 0 5.54-6.765c.222 3.104 1.748 6.898 6.014 6.898c3.819 0 7.604-2.756 9.33-8.965c.2-.764-.73-1.361-1.261-.73zm-4.349-5.013c0 1.959-1.926 2.922-3.685 2.922a4.45 4.45 0 0 1-2.235-.568c1.051-1.592 2.092-3.225 3.21-4.973c1.972.334 2.71 1.43 2.71 2.619"/>`,viewBox:`0 0 24 24`},"simple-icons:simpleicons":{body:`<path fill="currentColor" d="M18 6a6 6 0 1 0-6 6a6 6 0 0 1 5.35 9h1.5A7.5 7.5 0 0 0 12 10.5A4.5 4.5 0 1 1 16.5 6Zm-6-3a3 3 0 0 0 0 6a1 1 0 0 0 0-6m0 1.5a1.5 1.5 0 0 1 0 3a1 1 0 0 1 0-3M7.5 15v1.5H9v6H4.5V24h15v-1.5H15v-6h1.5V15Zm3 1.5h3v6h-3zm-6 1.5a7.5 7.5 0 0 0 .7 3h1.5a6 6 0 0 1-.7-3Z"/>`,viewBox:`0 0 24 24`},"simple-icons:spring":{body:`<path fill="currentColor" d="M21.854 1.416a10.5 10.5 0 0 1-1.284 2.247A11.967 11.967 0 1 0 3.852 20.776l.444.395a11.954 11.954 0 0 0 19.632-8.297c.346-3.013-.568-6.865-2.074-11.458M5.58 20.875a1.017 1.017 0 1 1-.149-1.433a1.04 1.04 0 0 1 .149 1.432m16.199-3.581c-2.939 3.926-9.26 2.593-13.286 2.79c0 0-.716.05-1.432.148c0 0 .272-.123.618-.247c2.84-.987 4.173-1.185 5.901-2.074c3.235-1.654 6.47-5.284 7.112-9.038c-1.235 3.606-4.988 6.717-8.396 7.976c-2.346.865-6.568 1.704-6.568 1.704l-.173-.099c-2.865-1.407-2.963-7.63 2.272-9.63c2.296-.89 4.47-.395 6.963-.988c2.643-.617 5.705-2.593 6.94-5.186c1.382 4.174 3.061 10.643.049 14.644"/>`,viewBox:`0 0 24 24`},"simple-icons:stackoverflow":{body:`<path fill="currentColor" d="m15.725 0l-1.72 1.277l6.39 8.588l1.716-1.277zm-3.94 3.418l-1.369 1.644l8.225 6.85l1.369-1.644zm-3.15 4.465l-.905 1.94l9.702 4.517l.904-1.94zm-1.85 4.86l-.44 2.093l10.473 2.201l.44-2.092l-10.473-2.203zM1.89 15.47V24h19.19v-8.53h-2.133v6.397H4.021v-6.396zm4.265 2.133v2.13h10.66v-2.13H6.154Z"/>`,viewBox:`0 0 24 24`},"simple-icons:tailwindcss":{body:`<path fill="currentColor" d="M12.001 4.8q-4.8 0-6 4.8q1.8-2.4 4.2-1.8c.913.228 1.565.89 2.288 1.624C13.666 10.618 15.027 12 18.001 12q4.8 0 6-4.8q-1.8 2.4-4.2 1.8c-.913-.228-1.565-.89-2.288-1.624C16.337 6.182 14.976 4.8 12.001 4.8m-6 7.2q-4.8 0-6 4.8q1.8-2.4 4.2-1.8c.913.228 1.565.89 2.288 1.624c1.177 1.194 2.538 2.576 5.512 2.576q4.8 0 6-4.8q-1.8 2.4-4.2 1.8c-.913-.228-1.565-.89-2.288-1.624C10.337 13.382 8.976 12 6.001 12"/>`,viewBox:`0 0 24 24`},"simple-icons:typescript":{body:`<path fill="currentColor" d="M1.125 0C.502 0 0 .502 0 1.125v21.75C0 23.498.502 24 1.125 24h21.75c.623 0 1.125-.502 1.125-1.125V1.125C24 .502 23.498 0 22.875 0zm17.363 9.75q.918 0 1.627.111a6.4 6.4 0 0 1 1.306.34v2.458a4 4 0 0 0-.643-.361a5 5 0 0 0-.717-.26a5.5 5.5 0 0 0-1.426-.2q-.45 0-.819.086a2.1 2.1 0 0 0-.623.242q-.254.156-.393.374a.9.9 0 0 0-.14.49q0 .294.156.529q.156.234.443.444c.287.21.423.276.696.41q.41.203.926.416q.705.296 1.266.628q.561.333.963.753q.402.418.614.957q.213.538.214 1.253q0 .986-.373 1.656a3 3 0 0 1-1.012 1.085a4.4 4.4 0 0 1-1.487.596q-.85.18-1.79.18a10 10 0 0 1-1.84-.164a5.5 5.5 0 0 1-1.512-.493v-2.63a5.03 5.03 0 0 0 3.237 1.2q.5 0 .872-.09q.373-.09.623-.25q.249-.162.373-.38a1.02 1.02 0 0 0-.074-1.089a2.1 2.1 0 0 0-.537-.5a5.6 5.6 0 0 0-.807-.444a28 28 0 0 0-1.007-.436q-1.377-.575-2.053-1.405t-.676-2.005q0-.92.369-1.582q.368-.662 1.004-1.089a4.5 4.5 0 0 1 1.47-.629a7.5 7.5 0 0 1 1.77-.201m-15.113.188h9.563v2.166H9.506v9.646H6.789v-9.646H3.375z"/>`,viewBox:`0 0 24 24`},"simple-icons:unsplash":{body:`<path fill="currentColor" d="M7.5 6.75V0h9v6.75zm9 3.75H24V24H0V10.5h7.5v6.75h9z"/>`,viewBox:`0 0 24 24`},"simple-icons:vite":{body:`<path fill="currentColor" d="M13.056 23.238a.57.57 0 0 1-1.02-.355v-5.202c0-.63-.512-1.143-1.144-1.143H5.148a.57.57 0 0 1-.464-.903l3.777-5.29c.54-.753 0-1.804-.93-1.804H.57a.574.574 0 0 1-.543-.746a.6.6 0 0 1 .08-.157L5.008.78a.57.57 0 0 1 .467-.24h14.589a.57.57 0 0 1 .466.903l-3.778 5.29c-.54.755 0 1.806.93 1.806h5.745c.238 0 .424.138.513.322a.56.56 0 0 1-.063.603z"/>`,viewBox:`0 0 24 24`},"simple-icons:vitest":{body:`<path fill="currentColor" d="M11.545 23.3a.613.613 0 0 1-.895.197L.252 15.936A.61.61 0 0 1 0 15.439V6.325c0-.502.569-.792.975-.497l6.358 4.624c.594.433 1.432.25 1.793-.39L14.393.7a.62.62 0 0 1 .535-.314h8.455a.613.613 0 0 1 .537.916z"/>`,viewBox:`0 0 24 24`},"simple-icons:zod":{body:`<path fill="currentColor" d="M2.584 3.582a2.25 2.25 0 0 1 2.112-1.479h14.617c.948 0 1.794.595 2.115 1.487l2.44 6.777a2.25 2.25 0 0 1-.624 2.443l-9.61 8.52a2.25 2.25 0 0 1-2.963.018L.776 12.773a2.25 2.25 0 0 1-.64-2.467Zm12.038 4.887l-9.11 5.537l5.74 5.007a1.206 1.206 0 0 0 1.593-.006l5.643-5.001H14.4l6.239-3.957c.488-.328.69-.947.491-1.5l-1.24-3.446a1.535 1.535 0 0 0-1.456-1.015H5.545a1.535 1.535 0 0 0-1.431 1.01l-1.228 3.37z"/>`,viewBox:`0 0 24 24`},"tabler:alert-circle":{body:`<path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 12a9 9 0 1 0 18 0a9 9 0 0 0-18 0m9-4v4m0 4h.01"/>`,viewBox:`0 0 24 24`},"tabler:alert-circle-filled":{body:`<path fill="currentColor" d="M12 2c5.523 0 10 4.477 10 10a10 10 0 0 1-19.995.324L2 12l.004-.28C2.152 6.327 6.57 2 12 2m.01 13l-.127.007a1 1 0 0 0 0 1.986L12 17l.127-.007a1 1 0 0 0 0-1.986zM12 7a1 1 0 0 0-.993.883L11 8v4l.007.117a1 1 0 0 0 1.986 0L13 12V8l-.007-.117A1 1 0 0 0 12 7"/>`,viewBox:`0 0 24 24`},"tabler:archive":{body:`<path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 6a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2m2 2v10a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V8m-9 4h4"/>`,viewBox:`0 0 24 24`},"tabler:archive-filled":{body:`<path fill="currentColor" d="M2 5a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2m17 4c.513 0 .936.463.993 1.06l.007.14v7.2c0 1.917-1.249 3.484-2.824 3.594L17 21H7c-1.598 0-2.904-1.499-2.995-3.388L4 17.4v-7.2C4 9.537 4.448 9 5 9zm-5 2h-4l-.117.007a1 1 0 0 0 0 1.986L10 13h4l.117-.007a1 1 0 0 0 0-1.986z"/>`,viewBox:`0 0 24 24`},"tabler:arrow-left":{body:`<path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 12h14M5 12l6 6m-6-6l6-6"/>`,viewBox:`0 0 24 24`},"tabler:arrow-right":{body:`<path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 12h14m-6 6l6-6m-6-6l6 6"/>`,viewBox:`0 0 24 24`},"tabler:arrow-up":{body:`<path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 5v14m6-8l-6-6m-6 6l6-6"/>`,viewBox:`0 0 24 24`},"tabler:arrows-shuffle":{body:`<g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><path d="m18 4l3 3l-3 3m0 10l3-3l-3-3"/><path d="M3 7h3a5 5 0 0 1 5 5a5 5 0 0 0 5 5h5m0-10h-5a4.98 4.98 0 0 0-3 1m-4 8a5 5 0 0 1-3 1H3"/></g>`,viewBox:`0 0 24 24`},"tabler:article":{body:`<path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 6a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2zm4 2h10M7 12h10M7 16h10"/>`,viewBox:`0 0 24 24`},"tabler:article-filled":{body:`<path fill="currentColor" d="M19 3a3 3 0 0 1 2.995 2.824L22 6v12a3 3 0 0 1-2.824 2.995L19 21H5a3 3 0 0 1-2.995-2.824L2 18V6a3 3 0 0 1 2.824-2.995L5 3zm-2 12H7l-.117.007a1 1 0 0 0 0 1.986L7 17h10l.117-.007a1 1 0 0 0 0-1.986zm0-4H7l-.117.007a1 1 0 0 0 0 1.986L7 13h10l.117-.007a1 1 0 0 0 0-1.986zm0-4H7l-.117.007a1 1 0 0 0 0 1.986L7 9h10l.117-.007a1 1 0 0 0 0-1.986z"/>`,viewBox:`0 0 24 24`},"tabler:atom":{body:`<g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><path d="M12 12v.01m7.071-7.081c-1.562-1.562-6 .337-9.9 4.243c-3.905 3.905-5.804 8.337-4.242 9.9c1.562 1.561 6-.338 9.9-4.244c3.905-3.905 5.804-8.337 4.242-9.9"/><path d="M4.929 4.929c-1.562 1.562.337 6 4.243 9.9c3.905 3.905 8.337 5.804 9.9 4.242c1.561-1.562-.338-6-4.244-9.9c-3.905-3.905-8.337-5.804-9.9-4.242"/></g>`,viewBox:`0 0 24 24`},"tabler:bolt":{body:`<path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 3v7h6l-8 11v-7H5z"/>`,viewBox:`0 0 24 24`},"tabler:bolt-filled":{body:`<path fill="currentColor" d="m13 2l.018.001l.016.001l.083.005l.011.002h.011l.038.009l.052.008l.016.006l.011.001l.029.011l.052.014l.019.009l.015.004l.028.014l.04.017l.021.012l.022.01l.023.015l.031.017l.034.024l.018.011l.013.012l.024.017l.038.034l.022.017l.008.01l.014.012l.036.041l.026.027l.006.009c.12.147.196.322.218.513l.001.012l.002.041L14 3v6h5a1 1 0 0 1 .868 1.497l-.06.091l-8 11C11.24 22.371 10 21.968 10 21v-6H5a1 1 0 0 1-.868-1.497l.06-.091l8-11l.01-.013l.018-.024l.033-.038l.018-.022l.009-.008l.013-.014l.04-.036l.028-.026l.008-.006a1 1 0 0 1 .402-.199l.011-.001l.027-.005l.074-.013l.011-.001l.041-.002z"/>`,viewBox:`0 0 24 24`},"tabler:book":{body:`<path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 19a9 9 0 0 1 9 0a9 9 0 0 1 9 0M3 6a9 9 0 0 1 9 0a9 9 0 0 1 9 0M3 6v13m9-13v13m9-13v13"/>`,viewBox:`0 0 24 24`},"tabler:book-filled":{body:`<path fill="currentColor" d="M21.5 5.134a1 1 0 0 1 .493.748L22 6v13a1 1 0 0 1-1.5.866A8 8 0 0 0 13 19.6V4.426a10 10 0 0 1 8.5.708M11 4.427l.001 15.174a8 8 0 0 0-7.234.117l-.327.18l-.103.044l-.049.016l-.11.026l-.061.01L3 20h-.042l-.11-.012l-.077-.014l-.108-.032l-.126-.056l-.095-.056l-.089-.067l-.06-.056l-.073-.082l-.064-.089l-.022-.036l-.032-.06l-.044-.103l-.016-.049l-.026-.11l-.01-.061l-.004-.049L2 6a1 1 0 0 1 .5-.866a10 10 0 0 1 8.5-.707"/>`,viewBox:`0 0 24 24`},"tabler:bookmark":{body:`<path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M18 7v14l-6-4l-6 4V7a4 4 0 0 1 4-4h4a4 4 0 0 1 4 4"/>`,viewBox:`0 0 24 24`},"tabler:bookmark-filled":{body:`<path fill="currentColor" d="M14 2a5 5 0 0 1 5 5v14a1 1 0 0 1-1.555.832L12 18.202l-5.444 3.63a1 1 0 0 1-1.55-.72L5 21V7a5 5 0 0 1 5-5z"/>`,viewBox:`0 0 24 24`},"tabler:border-outer":{body:`<path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2zm8 2v.01M8 12v.01m4-.01v.01m4-.01v.01M12 16v.01"/>`,viewBox:`0 0 24 24`},"tabler:brand-bilibili":{body:`<path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 10a4 4 0 0 1 4-4h10a4 4 0 0 1 4 4v6a4 4 0 0 1-4 4H7a4 4 0 0 1-4-4zm5-7l2 3m6-3l-2 3m-5 7v-2m6 0v2"/>`,viewBox:`0 0 24 24`},"tabler:brand-github":{body:`<path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 19c-4.3 1.4-4.3-2.5-6-3m12 5v-3.5c0-1 .1-1.4-.5-2c2.8-.3 5.5-1.4 5.5-6a4.6 4.6 0 0 0-1.3-3.2a4.2 4.2 0 0 0-.1-3.2s-1.1-.3-3.5 1.3a12.3 12.3 0 0 0-6.2 0C6.5 2.8 5.4 3.1 5.4 3.1a4.2 4.2 0 0 0-.1 3.2A4.6 4.6 0 0 0 4 9.5c0 4.6 2.7 5.7 5.5 6c-.6.6-.6 1.2-.5 2V21"/>`,viewBox:`0 0 24 24`},"tabler:brand-github-filled":{body:`<path fill="currentColor" d="M5.315 2.1c.791-.113 1.9.145 3.333.966l.272.161l.16.1l.397-.083a13.3 13.3 0 0 1 4.59-.08l.456.08l.396.083l.161-.1c1.385-.84 2.487-1.17 3.322-1.148l.164.008l.147.017l.076.014l.05.011l.144.047a1 1 0 0 1 .53.514a5.2 5.2 0 0 1 .397 2.91l-.047.267l-.046.196l.123.163c.574.795.93 1.728 1.03 2.707l.023.295L21 9.5c0 3.855-1.659 5.883-4.644 6.68l-.245.061l-.132.029l.014.161l.008.157l.004.365l-.002.213L16 21a1 1 0 0 1-.883.993L15 22H9a1 1 0 0 1-.993-.883L8 21v-.734c-1.818.26-3.03-.424-4.11-1.878l-.535-.766c-.28-.396-.455-.579-.589-.644l-.048-.019a1 1 0 0 1 .564-1.918c.642.188 1.074.568 1.57 1.239l.538.769c.76 1.079 1.36 1.459 2.609 1.191L8 17.562l-.018-.168a5 5 0 0 1-.021-.824l.017-.185l.019-.12l-.108-.024c-2.976-.71-4.703-2.573-4.875-6.139l-.01-.31L3 9.5a5.6 5.6 0 0 1 .908-3.051l.152-.222l.122-.163l-.045-.196a5.2 5.2 0 0 1 .145-2.642l.1-.282l.106-.253a1 1 0 0 1 .529-.514l.144-.047z"/>`,viewBox:`0 0 24 24`},"tabler:brand-nodejs":{body:`<g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><path d="M9 9v8.044a2 2 0 0 1-2.996 1.734l-1.568-.9A3 3 0 0 1 3 15.317V8.682a3 3 0 0 1 1.436-2.56l6-3.667a3 3 0 0 1 3.128 0l6 3.667A3 3 0 0 1 21 8.683v6.634a3 3 0 0 1-1.436 2.56l-6 3.667a3 3 0 0 1-3.128 0"/><path d="M17 9h-3.5a1.5 1.5 0 0 0 0 3h2a1.5 1.5 0 0 1 0 3H12"/></g>`,viewBox:`0 0 24 24`},"tabler:brand-open-source":{body:`<path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 3a9 9 0 0 1 3.618 17.243l-2.193-5.602a3 3 0 1 0-2.849 0l-2.193 5.603A9 9 0 0 1 12 3"/>`,viewBox:`0 0 24 24`},"tabler:brand-open-source-filled":{body:`<path fill="currentColor" d="M12.283 2.004a10 10 0 0 1 3.736 19.155a1 1 0 0 1-1.332-.551l-2.193-5.602a1 1 0 0 1 .456-1.245a2 2 0 1 0-1.9 0a1 1 0 0 1 .457 1.244l-2.193 5.603a1 1 0 0 1-1.332.552A10 10 0 0 1 12 2z"/>`,viewBox:`0 0 24 24`},"tabler:brand-pnpm":{body:`<path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 17h4v4H3zm7 0h4v4h-4zm7 0h4v4h-4zm0-7h4v4h-4zm0-7h4v4h-4zm-7 7h4v4h-4zm0-7h4v4h-4zM3 3h4v4H3z"/>`,viewBox:`0 0 24 24`},"tabler:brand-react":{body:`<g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><path d="M6.306 8.711C3.704 9.434 2 10.637 2 12c0 2.21 4.477 4 10 4c.773 0 1.526-.035 2.248-.102m3.444-.609C20.295 14.567 22 13.363 22 12c0-2.21-4.477-4-10-4c-.773 0-1.526.035-2.25.102"/><path d="M6.305 15.287C5.629 17.902 5.82 19.98 7 20.66c1.913 1.105 5.703-1.877 8.464-6.66q.581-1.007 1.036-2m1.194-3.284C18.371 6.1 18.181 4.02 17 3.34C15.087 2.235 11.297 5.217 8.536 10c-.387.67-.733 1.34-1.037 2"/><path d="M12 5.424C10.075 3.532 8.18 2.658 7 3.34C5.087 4.444 5.774 9.217 8.536 14c.386.67.793 1.304 1.212 1.896M12 18.574c1.926 1.893 3.821 2.768 5 2.086c1.913-1.104 1.226-5.877-1.536-10.66q-.563-.976-1.212-1.897M11.5 12.866a1 1 0 1 0 1-1.732a1 1 0 0 0-1 1.732"/></g>`,viewBox:`0 0 24 24`},"tabler:brand-x":{body:`<path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m4 4l11.733 16H20L8.267 4zm0 16l6.768-6.768m2.46-2.46L20 4"/>`,viewBox:`0 0 24 24`},"tabler:brand-x-filled":{body:`<path fill="currentColor" d="M8.267 3a1 1 0 0 1 .73.317l.076.092l4.274 5.828l5.946-5.944a1 1 0 0 1 1.497 1.32l-.083.094l-6.163 6.162l6.262 8.54a1 1 0 0 1-.697 1.585L20 21h-4.267a1 1 0 0 1-.73-.317l-.076-.092l-4.276-5.829l-5.944 5.945a1 1 0 0 1-1.497-1.32l.083-.094l6.161-6.163l-6.26-8.539a1 1 0 0 1 .697-1.585L4 3z"/>`,viewBox:`0 0 24 24`},"tabler:brightness-auto":{body:`<g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><path d="M6 6h3.5L12 3.5L14.5 6H18v3.5l2.5 2.5l-2.5 2.5V18h-3.5L12 20.5L9.5 18H6v-3.5L3.5 12L6 9.5z"/><path d="M10 14.5V11a2 2 0 1 1 4 0v3.5M10 13h4"/></g>`,viewBox:`0 0 24 24`},"tabler:brightness-auto-filled":{body:`<path fill="currentColor" d="M12.707 2.793L14.915 5H18a1 1 0 0 1 .993.883L19 6v3.085l2.207 2.208a1 1 0 0 1 .083 1.32l-.083.094L19 14.914V18a1 1 0 0 1-.883.993L18 19h-3.086l-2.207 2.207a1 1 0 0 1-1.32.083l-.094-.083L9.085 19H6a1 1 0 0 1-.993-.883L5 18v-3.085l-2.207-2.208a1 1 0 0 1-.083-1.32l.083-.094L5 9.084V6a1 1 0 0 1 .883-.993L6 5h3.084l2.209-2.207a1 1 0 0 1 1.414 0M12 8a3 3 0 0 0-3 3v3.5a1 1 0 0 0 2 0V14h2v.5a1 1 0 0 0 .883.993L14 15.5a1 1 0 0 0 1-1V11a3 3 0 0 0-3-3m0 2a1 1 0 0 1 1 1v1h-2v-1a1 1 0 0 1 .883-.993z"/>`,viewBox:`0 0 24 24`},"tabler:bug":{body:`<path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 9V8a3 3 0 0 1 6 0v1M8 9h8a6 6 0 0 1 1 3v3a5 5 0 0 1-10 0v-3a6 6 0 0 1 1-3m-5 4h4m10 0h4m-9 7v-6m-8 5l3.35-2M20 19l-3.35-2M4 7l3.75 2.4M20 7l-3.75 2.4"/>`,viewBox:`0 0 24 24`},"tabler:bug-filled":{body:`<path fill="currentColor" d="M12 4a4 4 0 0 1 3.995 3.8L16 8a1 1 0 0 1 .428.096l3.033-1.938a1 1 0 1 1 1.078 1.684l-3.015 1.931A7.2 7.2 0 0 1 18 12h3a1 1 0 0 1 0 2h-3v1a6 6 0 0 1-.195 1.525l2.708 1.616a1 1 0 1 1-1.026 1.718l-2.514-1.501A6 6 0 0 1 13 20.918V15a1 1 0 0 0-2 0v5.917a6 6 0 0 1-3.973-2.56L4.513 19.86a1 1 0 1 1-1.026-1.718l2.708-1.616A6 6 0 0 1 6 15v-1H3a1 1 0 0 1 0-2h3.001v-.055a7 7 0 0 1 .474-2.173l-3.014-1.93a1 1 0 1 1 1.078-1.684l3.032 1.939l.024-.012l.068-.027l.019-.005l.016-.006l.032-.008l.04-.013l.034-.007l.034-.004l.045-.008l.015-.001l.015-.002L8 8a4 4 0 0 1 4-4m0 2a2 2 0 0 0-2 2h4a2 2 0 0 0-2-2"/>`,viewBox:`0 0 24 24`},"tabler:calendar-month":{body:`<path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 7a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2zm12-4v4M8 3v4m-4 4h16M8 14v4m4-4v4m4-4v4"/>`,viewBox:`0 0 24 24`},"tabler:calendar-month-filled":{body:`<g fill="currentColor"><path d="M8 12a1 1 0 0 1 1 1v4a1 1 0 0 1-2 0v-4a1 1 0 0 1 1-1m4 0a1 1 0 0 1 1 1v4a1 1 0 0 1-2 0v-4a1 1 0 0 1 1-1m4 0a1 1 0 0 1 1 1v4a1 1 0 0 1-2 0v-4a1 1 0 0 1 1-1"/><path d="M16 2a1 1 0 0 1 .993.883L17 3v1h1a3 3 0 0 1 2.995 2.824L21 7v12a3 3 0 0 1-2.824 2.995L18 22H6a3 3 0 0 1-2.995-2.824L3 19V7a3 3 0 0 1 2.824-2.995L6 4h1V3a1 1 0 0 1 1.993-.117L9 3v1h6V3a1 1 0 0 1 1-1m3 7H5v9.625c0 .705.386 1.286.883 1.366L6 20h12c.513 0 .936-.53.993-1.215l.007-.16z"/></g>`,viewBox:`0 0 24 24`},"tabler:check":{body:`<path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m5 12l5 5L20 7"/>`,viewBox:`0 0 24 24`},"tabler:check-filled":{body:`<path fill="currentColor" d="M20.707 6.293a1 1 0 0 1 0 1.414l-10 10a1 1 0 0 1-1.414 0l-5-5a1 1 0 0 1 1.414-1.414L10 15.586l9.293-9.293a1 1 0 0 1 1.414 0"/>`,viewBox:`0 0 24 24`},"tabler:chevron-down":{body:`<path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m6 9l6 6l6-6"/>`,viewBox:`0 0 24 24`},"tabler:chevron-down-filled":{body:`<path fill="currentColor" d="M18.707 8.293a1 1 0 0 1 0 1.414l-6 6a1 1 0 0 1-1.414 0l-6-6a1 1 0 0 1 1.414-1.414L12 13.586l5.293-5.293a1 1 0 0 1 1.414 0"/>`,viewBox:`0 0 24 24`},"tabler:chevron-left":{body:`<path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m15 6l-6 6l6 6"/>`,viewBox:`0 0 24 24`},"tabler:chevron-right":{body:`<path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m9 6l6 6l-6 6"/>`,viewBox:`0 0 24 24`},"tabler:chevron-right-filled":{body:`<path fill="currentColor" d="m9.707 5.293l6 6a1 1 0 0 1 0 1.414l-6 6a1 1 0 1 1-1.414-1.414L13.586 12L8.293 6.707a1 1 0 0 1 1.414-1.414"/>`,viewBox:`0 0 24 24`},"tabler:chevron-up":{body:`<path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m6 15l6-6l6 6"/>`,viewBox:`0 0 24 24`},"tabler:clock":{body:`<g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><path d="M3 12a9 9 0 1 0 18 0a9 9 0 0 0-18 0"/><path d="M12 7v5l3 3"/></g>`,viewBox:`0 0 24 24`},"tabler:clock-filled":{body:`<path fill="currentColor" d="M17 3.34a10 10 0 1 1-14.995 8.984L2 12l.005-.324A10 10 0 0 1 17 3.34M12 6a1 1 0 0 0-.993.883L11 7v5l.009.131a1 1 0 0 0 .197.477l.087.1l3 3l.094.082a1 1 0 0 0 1.226 0l.094-.083l.083-.094a1 1 0 0 0 0-1.226l-.083-.094L13 11.585V7l-.007-.117A1 1 0 0 0 12 6"/>`,viewBox:`0 0 24 24`},"tabler:clock-record":{body:`<g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><path d="M21 12.3a9 9 0 1 0-8.683 8.694"/><path d="M12 7v5l2 2m2 5a3 3 0 1 0 6 0a3 3 0 1 0-6 0"/></g>`,viewBox:`0 0 24 24`},"tabler:code":{body:`<path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m7 8l-4 4l4 4m10-8l4 4l-4 4M14 4l-4 16"/>`,viewBox:`0 0 24 24`},"tabler:copy":{body:`<g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><path d="M7 9.667A2.667 2.667 0 0 1 9.667 7h8.666A2.667 2.667 0 0 1 21 9.667v8.666A2.667 2.667 0 0 1 18.333 21H9.667A2.667 2.667 0 0 1 7 18.333z"/><path d="M4.012 16.737A2 2 0 0 1 3 15V5c0-1.1.9-2 2-2h10c.75 0 1.158.385 1.5 1"/></g>`,viewBox:`0 0 24 24`},"tabler:copy-filled":{body:`<g fill="currentColor"><path d="M20.926 7.074A3.67 3.67 0 0 1 22 9.667v8.666A3.667 3.667 0 0 1 18.333 22H9.667A3.667 3.667 0 0 1 6 18.333V9.667q0-.053.005-.102A3.66 3.66 0 0 1 9.667 6h8.666c.973 0 1.905.386 2.593 1.074"/><path d="M17.374 3.514a1 1 0 1 1-1.748.972C15.405 4.088 15.284 4 15 4H5c-.548 0-1 .452-1 1v9.998c0 .36.194.692.507.87a1 1 0 1 1-.99 1.738A3 3 0 0 1 2 15V5c0-1.652 1.348-3 3-3h10c1.094 0 1.828.533 2.374 1.514"/></g>`,viewBox:`0 0 24 24`},"tabler:copyright":{body:`<g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><path d="M3 12a9 9 0 1 0 18 0a9 9 0 1 0-18 0"/><path d="M14 9.75a3.016 3.016 0 0 0-4.163.173a2.993 2.993 0 0 0 0 4.154A3.016 3.016 0 0 0 14 14.25"/></g>`,viewBox:`0 0 24 24`},"tabler:copyright-filled":{body:`<path fill="currentColor" d="M17 3.34a10 10 0 1 1-14.995 8.984L2 12l.005-.324A10 10 0 0 1 17 3.34m-2.34 5.659a4.016 4.016 0 0 0-5.543.23a3.993 3.993 0 0 0 0 5.542a4.016 4.016 0 0 0 5.543.23a1 1 0 0 0-1.32-1.502c-.81.711-2.035.66-2.783-.116a1.993 1.993 0 0 1 0-2.766a2.016 2.016 0 0 1 2.783-.116A1 1 0 0 0 14.66 9z"/>`,viewBox:`0 0 24 24`},"tabler:creative-commons":{body:`<g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><path d="M3 12a9 9 0 1 0 18 0a9 9 0 1 0-18 0"/><path d="M10.5 10.5a2.187 2.187 0 0 0-2.914.116a1.93 1.93 0 0 0 0 2.768a2.19 2.19 0 0 0 2.914.116m6-3a2.187 2.187 0 0 0-2.914.116a1.93 1.93 0 0 0 0 2.768a2.19 2.19 0 0 0 2.914.116"/></g>`,viewBox:`0 0 24 24`},"tabler:creative-commons-zero":{body:`<g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><path d="M3 12a9 9 0 1 0 18 0a9 9 0 1 0-18 0"/><path d="M9 12a3 4 0 1 0 6 0a3 4 0 1 0-6 0m5-3l-4 6"/></g>`,viewBox:`0 0 24 24`},"tabler:database":{body:`<g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><path d="M4 6a8 3 0 1 0 16 0A8 3 0 1 0 4 6"/><path d="M4 6v6a8 3 0 0 0 16 0V6"/><path d="M4 12v6a8 3 0 0 0 16 0v-6"/></g>`,viewBox:`0 0 24 24`},"tabler:database-filled":{body:`<g fill="currentColor"><path d="M3 15.731C4.968 17.238 8.234 18 12 18c3.76 0 7.025-.76 9-2.252V18c0 2.425-3.895 3.936-8.693 3.998L12 22c-4.938 0-9-1.523-9-4z"/><path d="M3 9.731C4.968 11.238 8.234 12 12 12c3.76 0 7.025-.76 9-2.252V12c0 2.477-4.062 4-9 4c-4.798 0-8.77-1.438-8.979-3.795l-.016-.101L3 12z"/><path d="M12 2c1.041 0 2.044.068 2.977.198l.469.071q.84.14 1.586.348l.44.131l.075.024a11 11 0 0 1 .805.3l.199.086q.535.242.967.53q.165.11.313.225a3.8 3.8 0 0 1 .669.668l.091.128q.07.105.129.211l.07.139q.163.35.2.73L21 6c0 2.477-4.062 4-9 4c-4.798 0-8.77-1.438-8.979-3.795A1 1 0 0 1 3 6l.005-.104l.016-.1c.205-2.306 4.01-3.733 8.667-3.794z"/></g>`,viewBox:`0 0 24 24`},"tabler:dots":{body:`<path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 12a1 1 0 1 0 2 0a1 1 0 1 0-2 0m7 0a1 1 0 1 0 2 0a1 1 0 1 0-2 0m7 0a1 1 0 1 0 2 0a1 1 0 1 0-2 0"/>`,viewBox:`0 0 24 24`},"tabler:dots-filled":{body:`<path fill="currentColor" d="M7 12a2 2 0 1 1-4 0q0-.053.005-.102A1.996 1.996 0 0 1 5 10a2 2 0 0 1 2 2m7 0a2 2 0 1 1-4 0q0-.053.005-.102A1.996 1.996 0 0 1 12 10a2 2 0 0 1 2 2m7 0a2 2 0 1 1-4 0q0-.053.005-.102A1.996 1.996 0 0 1 19 10a2 2 0 0 1 2 2"/>`,viewBox:`0 0 24 24`},"tabler:download":{body:`<path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 17v2a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-2M7 11l5 5l5-5m-5-7v12"/>`,viewBox:`0 0 24 24`},"tabler:download-filled":{body:`<path fill="currentColor" d="M20 16a1 1 0 0 1 1 1v2a3 3 0 0 1-3 3H6a3 3 0 0 1-3-3v-2a1 1 0 0 1 2 0v2a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1v-2a1 1 0 0 1 1-1M12 3a1 1 0 0 1 1 1v9.585l3.293-3.292a1 1 0 0 1 1.414 1.414l-5 5a1 1 0 0 1-.09.08l.09-.08a1 1 0 0 1-.674.292L12 17h-.032l-.054-.004L12 17a1 1 0 0 1-.617-.213a1 1 0 0 1-.09-.08l-5-5a1 1 0 0 1 1.414-1.414L11 13.585V4a1 1 0 0 1 1-1"/>`,viewBox:`0 0 24 24`},"tabler:external-link":{body:`<path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 6H6a2 2 0 0 0-2 2v10a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2v-6m-7 1l9-9m-5 0h5v5"/>`,viewBox:`0 0 24 24`},"tabler:external-link-filled":{body:`<path fill="currentColor" d="M12 5a1 1 0 0 1 0 2H6a1 1 0 0 0-1 1v10a1 1 0 0 0 1 1h10a1 1 0 0 0 1-1v-6a1 1 0 0 1 2 0v6a3 3 0 0 1-3 3H6a3 3 0 0 1-3-3V8a3 3 0 0 1 3-3zm3-2h5l.075.003l.126.017l.111.03l.111.044l.098.052l.096.067l.09.08q.054.053.097.112l.071.11l.054.114l.035.105l.03.148L21 4v5a1 1 0 0 1-2 0V6.414l-7.293 7.293a1 1 0 0 1-1.414-1.414L17.584 5H15a1 1 0 0 1 0-2"/>`,viewBox:`0 0 24 24`},"tabler:eye":{body:`<g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><path d="M10 12a2 2 0 1 0 4 0a2 2 0 0 0-4 0"/><path d="M21 12q-3.6 6-9 6t-9-6q3.6-6 9-6t9 6"/></g>`,viewBox:`0 0 24 24`},"tabler:eye-filled":{body:`<path fill="currentColor" d="M12 4c4.29 0 7.863 2.429 10.665 7.154l.22.379l.045.1l.03.083l.014.055l.014.082l.011.1v.11l-.014.111a1 1 0 0 1-.026.11l-.039.108l-.036.075l-.016.03c-2.764 4.836-6.3 7.38-10.555 7.499L12 20c-4.396 0-8.037-2.549-10.868-7.504a1 1 0 0 1 0-.992C3.963 6.549 7.604 4 12 4m0 5a3 3 0 1 0 0 6a3 3 0 0 0 0-6"/>`,viewBox:`0 0 24 24`},"tabler:flag":{body:`<path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 5a5 5 0 0 1 7 0a5 5 0 0 0 7 0v9a5 5 0 0 1-7 0a5 5 0 0 0-7 0zm0 16v-7"/>`,viewBox:`0 0 24 24`},"tabler:flag-filled":{body:`<path fill="currentColor" d="M4 5a1 1 0 0 1 .3-.714a6 6 0 0 1 8.213-.176l.351.328a4 4 0 0 0 5.272 0l.249-.227c.61-.483 1.527-.097 1.61.676L20 5v9a1 1 0 0 1-.3.714a6 6 0 0 1-8.213.176l-.351-.328A4 4 0 0 0 6 14.448V21a1 1 0 0 1-1.993.117L4 21z"/>`,viewBox:`0 0 24 24`},"tabler:folder":{body:`<path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 4h4l3 3h7a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2"/>`,viewBox:`0 0 24 24`},"tabler:folder-filled":{body:`<path fill="currentColor" d="M9 3a1 1 0 0 1 .608.206l.1.087L12.414 6H19a3 3 0 0 1 2.995 2.824L22 9v8a3 3 0 0 1-2.824 2.995L19 20H5a3 3 0 0 1-2.995-2.824L2 17V6a3 3 0 0 1 2.824-2.995L5 3z"/>`,viewBox:`0 0 24 24`},"tabler:git-branch":{body:`<g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><path d="M5 18a2 2 0 1 0 4 0a2 2 0 1 0-4 0M5 6a2 2 0 1 0 4 0a2 2 0 1 0-4 0m10 0a2 2 0 1 0 4 0a2 2 0 1 0-4 0M7 8v8m2 2h6a2 2 0 0 0 2-2v-5"/><path d="m14 14l3-3l3 3"/></g>`,viewBox:`0 0 24 24`},"tabler:hammer":{body:`<path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m11.414 10l-7.383 7.418a2.09 2.09 0 0 0 0 2.967a2.11 2.11 0 0 0 2.976 0L14.414 13m3.707 2.293l2.586-2.586a1 1 0 0 0 0-1.414l-7.586-7.586a1 1 0 0 0-1.414 0L9.121 6.293a1 1 0 0 0 0 1.414l7.586 7.586a1 1 0 0 0 1.414 0"/>`,viewBox:`0 0 24 24`},"tabler:heart":{body:`<path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19.5 12.572L12 20l-7.5-7.428A5 5 0 1 1 12 6.006a5 5 0 1 1 7.5 6.572"/>`,viewBox:`0 0 24 24`},"tabler:heart-filled":{body:`<path fill="currentColor" d="M6.979 3.074a6 6 0 0 1 4.988 1.425l.037.033l.034-.03a6 6 0 0 1 4.733-1.44l.246.036a6 6 0 0 1 3.364 10.008l-.18.185l-.048.041l-7.45 7.379a1 1 0 0 1-1.313.082l-.094-.082l-7.493-7.422A6 6 0 0 1 6.979 3.074"/>`,viewBox:`0 0 24 24`},"tabler:history":{body:`<g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><path d="M12 8v4l2 2"/><path d="M3.05 11a9 9 0 1 1 .5 4m-.5 5v-5h5"/></g>`,viewBox:`0 0 24 24`},"tabler:home":{body:`<g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><path d="M5 12H3l9-9l9 9h-2M5 12v7a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2v-7"/><path d="M9 21v-6a2 2 0 0 1 2-2h2a2 2 0 0 1 2 2v6"/></g>`,viewBox:`0 0 24 24`},"tabler:home-filled":{body:`<path fill="currentColor" d="m12.707 2.293l9 9c.63.63.184 1.707-.707 1.707h-1v6a3 3 0 0 1-3 3h-1v-7a3 3 0 0 0-2.824-2.995L13 12h-2a3 3 0 0 0-3 3v7H7a3 3 0 0 1-3-3v-6H3c-.89 0-1.337-1.077-.707-1.707l9-9a1 1 0 0 1 1.414 0M13 14a1 1 0 0 1 1 1v7h-4v-7a1 1 0 0 1 .883-.993L11 14z"/>`,viewBox:`0 0 24 24`},"tabler:icons":{body:`<path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 6.5a3.5 3.5 0 1 0 7 0a3.5 3.5 0 1 0-7 0M2.5 21h8l-4-7zM14 3l7 7m-7 0l7-7m-7 11h7v7h-7z"/>`,viewBox:`0 0 24 24`},"tabler:icons-filled":{body:`<g fill="currentColor"><path d="M4.25 2.603A4.5 4.5 0 1 1 2 6.5l.006-.229A4.5 4.5 0 0 1 4.25 2.603m1.382 10.901a1 1 0 0 1 1.736 0l4 7A1 1 0 0 1 10.5 22h-8a1 1 0 0 1-.868-1.496zm7.661-11.211a1 1 0 0 1 1.414 0l7 7a1 1 0 1 1-1.414 1.414l-7-7a1 1 0 0 1 0-1.414"/><path d="M20.293 2.293a1 1 0 0 1 1.414 1.414l-7 7a1 1 0 0 1-1.414-1.414zM21 13a1 1 0 0 1 1 1v7a1 1 0 0 1-1 1h-7a1 1 0 0 1-1-1v-7a1 1 0 0 1 1-1z"/></g>`,viewBox:`0 0 24 24`},"tabler:id-badge-2":{body:`<g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><path d="M7 12h3v4H7z"/><path d="M10 6H4a1 1 0 0 0-1 1v12a1 1 0 0 0 1 1h16a1 1 0 0 0 1-1V7a1 1 0 0 0-1-1h-6"/><path d="M10 4a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v3a1 1 0 0 1-1 1h-2a1 1 0 0 1-1-1zm4 12h2m-2-4h4"/></g>`,viewBox:`0 0 24 24`},"tabler:info-circle":{body:`<g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><path d="M3 12a9 9 0 1 0 18 0a9 9 0 0 0-18 0m9-3h.01"/><path d="M11 12h1v4h1"/></g>`,viewBox:`0 0 24 24`},"tabler:info-circle-filled":{body:`<path fill="currentColor" d="M12 2c5.523 0 10 4.477 10 10a10 10 0 0 1-19.995.324L2 12l.004-.28C2.152 6.327 6.57 2 12 2m0 9h-1l-.117.007a1 1 0 0 0 0 1.986L11 13v3l.007.117a1 1 0 0 0 .876.876L12 17h1l.117-.007a1 1 0 0 0 .876-.876L14 16l-.007-.117a1 1 0 0 0-.764-.857l-.112-.02L13 15v-3l-.007-.117a1 1 0 0 0-.876-.876zm.01-3l-.127.007a1 1 0 0 0 0 1.986L12 10l.127-.007a1 1 0 0 0 0-1.986z"/>`,viewBox:`0 0 24 24`},"tabler:language":{body:`<g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><path d="M9 6.371C9 10.789 6.761 13 4 13m0-6.629h7"/><path d="M5 9c0 2.144 2.252 3.908 6 4m1 7l4-9l4 9m-.9-2h-6.2M6.694 3l.793.582"/></g>`,viewBox:`0 0 24 24`},"tabler:letter-case":{body:`<path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14 15.5a3.5 3.5 0 1 0 7 0a3.5 3.5 0 1 0-7 0M3 19V8.5a3.5 3.5 0 0 1 7 0V19m-7-6h7m11-1v7"/>`,viewBox:`0 0 24 24`},"tabler:link":{body:`<path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m9 15l6-6m-4-3l.463-.536a5 5 0 0 1 7.071 7.072L18 13m-5 5l-.397.534a5.07 5.07 0 0 1-7.127 0a4.97 4.97 0 0 1 0-7.071L6 11"/>`,viewBox:`0 0 24 24`},"tabler:link-filled":{body:`<g fill="currentColor"><path d="M15.707 8.293a1 1 0 0 1 0 1.414l-6 6a1 1 0 1 1-1.414-1.414l6-6a1 1 0 0 1 1.414 0"/><path d="M19.242 4.757c2.343 2.344 2.342 6.143-.052 8.534l-.534.464a1 1 0 1 1-1.312-1.51l.483-.416a4 4 0 0 0 0-5.657c-1.562-1.563-4.095-1.563-5.607-.054l-.463.536a1 1 0 1 1-1.514-1.308l.513-.59a6 6 0 0 1 8.486.001M6.75 10.338a1 1 0 0 1-.088 1.411l-.483.425a3.97 3.97 0 0 0 0 5.649a4.064 4.064 0 0 0 5.678.038l.34-.458a1 1 0 1 1 1.606 1.194l-.397.534l-.1.114a6.07 6.07 0 0 1-8.533 0A5.97 5.97 0 0 1 3 14.998c0-1.595.638-3.124 1.814-4.284l.524-.463a1 1 0 0 1 1.411.087"/></g>`,viewBox:`0 0 24 24`},"tabler:list":{body:`<path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 6h11M9 12h11M9 18h11M5 6v.01M5 12v.01M5 18v.01"/>`,viewBox:`0 0 24 24`},"tabler:list-filled":{body:`<path fill="currentColor" d="M21 6a1 1 0 0 1-1 1H10a1 1 0 1 1 0-2h10a1 1 0 0 1 1 1m0 6a1 1 0 0 1-1 1H10a1 1 0 0 1 0-2h10a1 1 0 0 1 1 1m0 6a1 1 0 0 1-1 1H10a1 1 0 0 1 0-2h10a1 1 0 0 1 1 1M7 5.995v.02c0 1.099-.895 1.99-2 1.99s-2-.891-2-1.99v-.02c0-1.099.895-1.99 2-1.99s2 .891 2 1.99m0 6v.02c0 1.099-.895 1.99-2 1.99s-2-.891-2-1.99v-.02c0-1.099.895-1.99 2-1.99s2 .891 2 1.99m0 6v.02c0 1.099-.895 1.99-2 1.99s-2-.891-2-1.99v-.02c0-1.099.895-1.99 2-1.99s2 .891 2 1.99"/>`,viewBox:`0 0 24 24`},"tabler:lock":{body:`<g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><path d="M5 13a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2v6a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2z"/><path d="M11 16a1 1 0 1 0 2 0a1 1 0 0 0-2 0m-3-5V7a4 4 0 1 1 8 0v4"/></g>`,viewBox:`0 0 24 24`},"tabler:lock-filled":{body:`<path fill="currentColor" d="M12 2a5 5 0 0 1 5 5v3a3 3 0 0 1 3 3v6a3 3 0 0 1-3 3H7a3 3 0 0 1-3-3v-6a3 3 0 0 1 3-3V7a5 5 0 0 1 5-5m0 12a2 2 0 0 0-1.995 1.85L10 16a2 2 0 1 0 2-2m0-10a3 3 0 0 0-3 3v3h6V7a3 3 0 0 0-3-3"/>`,viewBox:`0 0 24 24`},"tabler:mail":{body:`<g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><path d="M3 7a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/><path d="m3 7l9 6l9-6"/></g>`,viewBox:`0 0 24 24`},"tabler:mail-filled":{body:`<g fill="currentColor"><path d="M22 7.535V17a3 3 0 0 1-2.824 2.995L19 20H5a3 3 0 0 1-2.995-2.824L2 17V7.535l9.445 6.297l.116.066a1 1 0 0 0 .878 0l.116-.066z"/><path d="M19 4c1.08 0 2.027.57 2.555 1.427L12 11.797l-9.555-6.37a3 3 0 0 1 2.354-1.42L5 4z"/></g>`,viewBox:`0 0 24 24`},"tabler:map-pin":{body:`<g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><path d="M9 11a3 3 0 1 0 6 0a3 3 0 0 0-6 0"/><path d="M17.657 16.657L13.414 20.9a2 2 0 0 1-2.827 0l-4.244-4.243a8 8 0 1 1 11.314 0"/></g>`,viewBox:`0 0 24 24`},"tabler:map-pin-filled":{body:`<path fill="currentColor" d="M18.364 4.636a9 9 0 0 1 .203 12.519l-.203.21l-4.243 4.242a3 3 0 0 1-4.097.135l-.144-.135l-4.244-4.243A9 9 0 0 1 18.364 4.636M12 8a3 3 0 1 0 0 6a3 3 0 0 0 0-6"/>`,viewBox:`0 0 24 24`},"tabler:menu-2":{body:`<path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16"/>`,viewBox:`0 0 24 24`},"tabler:menu-2-filled":{body:`<path fill="currentColor" d="M21 6a1 1 0 0 1-1 1H4a1 1 0 1 1 0-2h16a1 1 0 0 1 1 1m0 6a1 1 0 0 1-1 1H4a1 1 0 0 1 0-2h16a1 1 0 0 1 1 1m0 6a1 1 0 0 1-1 1H4a1 1 0 0 1 0-2h16a1 1 0 0 1 1 1"/>`,viewBox:`0 0 24 24`},"tabler:message":{body:`<path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 9h8m-8 4h6m4-9a3 3 0 0 1 3 3v8a3 3 0 0 1-3 3h-5l-5 3v-3H6a3 3 0 0 1-3-3V7a3 3 0 0 1 3-3z"/>`,viewBox:`0 0 24 24`},"tabler:message-filled":{body:`<path fill="currentColor" d="M18 3a4 4 0 0 1 4 4v8a4 4 0 0 1-4 4h-4.724l-4.762 2.857a1 1 0 0 1-1.508-.743L7 21v-2H6a4 4 0 0 1-3.995-3.8L2 15V7a4 4 0 0 1 4-4zm-4 9H8a1 1 0 0 0 0 2h6a1 1 0 0 0 0-2m2-4H8a1 1 0 1 0 0 2h8a1 1 0 0 0 0-2"/>`,viewBox:`0 0 24 24`},"tabler:mood-sad":{body:`<g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><path d="M3 12a9 9 0 1 0 18 0a9 9 0 1 0-18 0m6-2h.01M15 10h.01"/><path d="M9.5 15.25a3.5 3.5 0 0 1 5 0"/></g>`,viewBox:`0 0 24 24`},"tabler:mood-sad-filled":{body:`<path fill="currentColor" d="M17 3.34a10 10 0 1 1-14.995 8.984L2 12l.005-.324A10 10 0 0 1 17 3.34m-5 9.86a4.5 4.5 0 0 0-3.214 1.35a1 1 0 1 0 1.428 1.4a2.5 2.5 0 0 1 3.572 0a1 1 0 0 0 1.428-1.4A4.5 4.5 0 0 0 12 13.2M9.01 9l-.127.007a1 1 0 0 0 0 1.986L9 11l.127-.007a1 1 0 0 0 0-1.986zm6 0l-.127.007a1 1 0 0 0 0 1.986L15 11l.127-.007a1 1 0 0 0 0-1.986z"/>`,viewBox:`0 0 24 24`},"tabler:moon":{body:`<path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 3h.393a7.5 7.5 0 0 0 7.92 12.446A9 9 0 1 1 12 2.992z"/>`,viewBox:`0 0 24 24`},"tabler:moon-filled":{body:`<path fill="currentColor" d="M12 1.992a10 10 0 1 0 9.236 13.838c.341-.82-.476-1.644-1.298-1.31a6.5 6.5 0 0 1-6.864-10.787l.077-.08c.551-.63.113-1.653-.758-1.653h-.266l-.068-.006z"/>`,viewBox:`0 0 24 24`},"tabler:movie":{body:`<path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2zm4-2v16m8-16v16M4 8h4m-4 8h4m-4-4h16m-4-4h4m-4 8h4"/>`,viewBox:`0 0 24 24`},"tabler:notes":{body:`<path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2zm4 2h6m-6 4h6m-6 4h4"/>`,viewBox:`0 0 24 24`},"tabler:palette":{body:`<g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><path d="M12 21a9 9 0 0 1 0-18c4.97 0 9 3.582 9 8c0 1.06-.474 2.078-1.318 2.828S17.693 15 16.5 15H14a2 2 0 0 0-1 3.75A1.3 1.3 0 0 1 12 21"/><path d="M7.5 10.5a1 1 0 1 0 2 0a1 1 0 1 0-2 0m4-3a1 1 0 1 0 2 0a1 1 0 1 0-2 0m4 3a1 1 0 1 0 2 0a1 1 0 1 0-2 0"/></g>`,viewBox:`0 0 24 24`},"tabler:palette-filled":{body:`<path fill="currentColor" d="M12 2c5.498 0 10 4.002 10 9c0 1.351-.6 2.64-1.654 3.576C19.316 15.49 17.934 16 16.5 16h-2.516a1 1 0 0 0-.5 1.875a1 1 0 0 1 .194.14a2.3 2.3 0 0 1-1.597 3.99l-.156-.009l.068.004l-.273-.004c-5.3-.146-9.57-4.416-9.716-9.716L2 12C2 6.477 6.477 2 12 2M8.5 8.5a2 2 0 0 0-1.995 1.85l-.005.15a2 2 0 1 0 2-2m8 0a2 2 0 0 0-1.995 1.85l-.005.15a2 2 0 1 0 2-2m-4-3a2 2 0 0 0-1.995 1.85l-.005.15a2 2 0 1 0 2-2"/>`,viewBox:`0 0 24 24`},"tabler:pencil":{body:`<path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 20h4L18.5 9.5a2.828 2.828 0 1 0-4-4L4 16zm9.5-13.5l4 4"/>`,viewBox:`0 0 24 24`},"tabler:pencil-filled":{body:`<path fill="currentColor" d="m12.085 6.5l5.415 5.415l-8.793 8.792A1 1 0 0 1 8 21H4a1 1 0 0 1-1-1v-4a1 1 0 0 1 .293-.707zm5.406-2.698a3.828 3.828 0 0 1 1.716 6.405l-.292.293L13.5 5.085l.293-.292a3.83 3.83 0 0 1 3.698-.991"/>`,viewBox:`0 0 24 24`},"tabler:photo":{body:`<g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><path d="M15 8h.01M3 6a3 3 0 0 1 3-3h12a3 3 0 0 1 3 3v12a3 3 0 0 1-3 3H6a3 3 0 0 1-3-3z"/><path d="m3 16l5-5c.928-.893 2.072-.893 3 0l5 5"/><path d="m14 14l1-1c.928-.893 2.072-.893 3 0l3 3"/></g>`,viewBox:`0 0 24 24`},"tabler:photo-filled":{body:`<path fill="currentColor" d="M8.813 11.612c.457-.38.918-.38 1.386.011l.108.098l4.986 4.986l.094.083a1 1 0 0 0 1.403-1.403l-.083-.094L15.415 14l.292-.293l.106-.095c.457-.38.918-.38 1.386.011l.108.098l4.674 4.675a4 4 0 0 1-3.775 3.599L18 22H6a4 4 0 0 1-3.98-3.603l6.687-6.69zM18 2a4 4 0 0 1 3.995 3.8L22 6v9.585l-3.293-3.292l-.15-.137c-1.256-1.095-2.85-1.097-4.096-.017l-.154.14l-.307.306l-2.293-2.292l-.15-.137c-1.256-1.095-2.85-1.097-4.096-.017l-.154.14L2 15.585V6a4 4 0 0 1 3.8-3.995L6 2zm-2.99 5l-.127.007a1 1 0 0 0 0 1.986L15 9l.127-.007a1 1 0 0 0 0-1.986z"/>`,viewBox:`0 0 24 24`},"tabler:pin":{body:`<path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m15 4.5l-4 4L7 10l-1.5 1.5l7 7L14 17l1.5-4l4-4M9 15l-4.5 4.5M14.5 4L20 9.5"/>`,viewBox:`0 0 24 24`},"tabler:pin-filled":{body:`<path fill="currentColor" d="m15.113 3.21l.094.083l5.5 5.5a1 1 0 0 1-1.175 1.59l-3.172 3.171l-1.424 3.797a1 1 0 0 1-.158.277l-.07.08l-1.5 1.5a1 1 0 0 1-1.32.082l-.095-.083L9 16.415l-3.793 3.792a1 1 0 0 1-1.497-1.32l.083-.094L7.585 15l-2.792-2.793a1 1 0 0 1-.083-1.32l.083-.094l1.5-1.5a1 1 0 0 1 .258-.187l.098-.042l3.796-1.425l3.171-3.17a1 1 0 0 1 1.497-1.26z"/>`,viewBox:`0 0 24 24`},"tabler:player-pause":{body:`<path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 6a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v12a1 1 0 0 1-1 1H7a1 1 0 0 1-1-1zm8 0a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v12a1 1 0 0 1-1 1h-2a1 1 0 0 1-1-1z"/>`,viewBox:`0 0 24 24`},"tabler:player-pause-filled":{body:`<path fill="currentColor" d="M9 4H7a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h2a2 2 0 0 0 2-2V6a2 2 0 0 0-2-2m8 0h-2a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h2a2 2 0 0 0 2-2V6a2 2 0 0 0-2-2"/>`,viewBox:`0 0 24 24`},"tabler:player-play":{body:`<path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M7 4v16l13-8z"/>`,viewBox:`0 0 24 24`},"tabler:player-play-filled":{body:`<path fill="currentColor" d="M6 4v16a1 1 0 0 0 1.524.852l13-8a1 1 0 0 0 0-1.704l-13-8A1 1 0 0 0 6 4"/>`,viewBox:`0 0 24 24`},"tabler:player-skip-back":{body:`<path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M20 5v14L8 12zM4 5v14"/>`,viewBox:`0 0 24 24`},"tabler:player-skip-back-filled":{body:`<path fill="currentColor" d="m19.496 4.136l-12 7a1 1 0 0 0 0 1.728l12 7A1 1 0 0 0 21 19V5a1 1 0 0 0-1.504-.864M4 4a1 1 0 0 1 .993.883L5 5v14a1 1 0 0 1-1.993.117L3 19V5a1 1 0 0 1 1-1"/>`,viewBox:`0 0 24 24`},"tabler:player-skip-forward":{body:`<path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 5v14l12-7zm16 0v14"/>`,viewBox:`0 0 24 24`},"tabler:player-skip-forward-filled":{body:`<path fill="currentColor" d="M3 5v14a1 1 0 0 0 1.504.864l12-7a1 1 0 0 0 0-1.728l-12-7A1 1 0 0 0 3 5m17-1a1 1 0 0 1 .993.883L21 5v14a1 1 0 0 1-1.993.117L19 19V5a1 1 0 0 1 1-1"/>`,viewBox:`0 0 24 24`},"tabler:playlist":{body:`<path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M11 17a3 3 0 1 0 6 0a3 3 0 1 0-6 0m6 0V4h4m-8 1H3m0 4h10m-4 4H3"/>`,viewBox:`0 0 24 24`},"tabler:playlist-filled":{body:`<g fill="currentColor"><path d="M21 3a1 1 0 0 1 0 2h-3v12a4 4 0 1 1-2.001-3.465L16 4a1 1 0 0 1 1-1zm-7 2a1 1 0 0 1-1 1H3a1 1 0 1 1 0-2h10a1 1 0 0 1 1 1"/><path d="M14 9a1 1 0 0 1-1 1H3a1 1 0 1 1 0-2h10a1 1 0 0 1 1 1m-4 4a1 1 0 0 1-1 1H3a1 1 0 0 1 0-2h6a1 1 0 0 1 1 1"/></g>`,viewBox:`0 0 24 24`},"tabler:qrcode":{body:`<path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 5a1 1 0 0 1 1-1h4a1 1 0 0 1 1 1v4a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1zm3 12v.01M14 5a1 1 0 0 1 1-1h4a1 1 0 0 1 1 1v4a1 1 0 0 1-1 1h-4a1 1 0 0 1-1-1zM7 7v.01M4 15a1 1 0 0 1 1-1h4a1 1 0 0 1 1 1v4a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1zm13-8v.01M14 14h3m3 0v.01M14 14v3m0 3h3m0-3h3m0 0v3"/>`,viewBox:`0 0 24 24`},"tabler:quote":{body:`<path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 11H6a1 1 0 0 1-1-1V7a1 1 0 0 1 1-1h3a1 1 0 0 1 1 1v6q0 4-4 5m13-7h-4a1 1 0 0 1-1-1V7a1 1 0 0 1 1-1h3a1 1 0 0 1 1 1v6q0 4-4 5"/>`,viewBox:`0 0 24 24`},"tabler:quote-filled":{body:`<path fill="currentColor" d="M9 5a2 2 0 0 1 2 2v6c0 3.13-1.65 5.193-4.757 5.97a1 1 0 1 1-.486-1.94C7.984 16.473 9 15.203 9 13v-1H6a2 2 0 0 1-1.995-1.85L4 10V7a2 2 0 0 1 2-2zm9 0a2 2 0 0 1 2 2v6c0 3.13-1.65 5.193-4.757 5.97a1 1 0 1 1-.486-1.94C16.984 16.473 18 15.203 18 13v-1h-3a2 2 0 0 1-1.995-1.85L13 10V7a2 2 0 0 1 2-2z"/>`,viewBox:`0 0 24 24`},"tabler:refresh":{body:`<path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M20 11A8.1 8.1 0 0 0 4.5 9M4 5v4h4m-4 4a8.1 8.1 0 0 0 15.5 2m.5 4v-4h-4"/>`,viewBox:`0 0 24 24`},"tabler:repeat":{body:`<path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 12V9a3 3 0 0 1 3-3h13m-3-3l3 3l-3 3m3 3v3a3 3 0 0 1-3 3H4m3 3l-3-3l3-3"/>`,viewBox:`0 0 24 24`},"tabler:repeat-once":{body:`<path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 12V9a3 3 0 0 1 3-3h13m-3-3l3 3l-3 3m3 3v3a3 3 0 0 1-3 3H4m3 3l-3-3l3-3m4-4l1-1v4"/>`,viewBox:`0 0 24 24`},"tabler:rocket":{body:`<g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><path d="M4 13a8 8 0 0 1 7 7a6 6 0 0 0 3-5a9 9 0 0 0 6-8a3 3 0 0 0-3-3a9 9 0 0 0-8 6a6 6 0 0 0-5 3"/><path d="M7 14a6 6 0 0 0-3 6a6 6 0 0 0 6-3m4-8a1 1 0 1 0 2 0a1 1 0 1 0-2 0"/></g>`,viewBox:`0 0 24 24`},"tabler:rss":{body:`<path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 19a1 1 0 1 0 2 0a1 1 0 1 0-2 0M4 4a16 16 0 0 1 16 16M4 11a9 9 0 0 1 9 9"/>`,viewBox:`0 0 24 24`},"tabler:search":{body:`<path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 10a7 7 0 1 0 14 0a7 7 0 1 0-14 0m18 11l-6-6"/>`,viewBox:`0 0 24 24`},"tabler:search-filled":{body:`<path fill="currentColor" d="M14 3.072a8 8 0 0 1 2.32 11.834l5.387 5.387a1 1 0 0 1-1.414 1.414l-5.388-5.387A8 8 0 1 1 14 3.071"/>`,viewBox:`0 0 24 24`},"tabler:settings":{body:`<g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><path d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 0 0 2.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 0 0 1.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 0 0-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 0 0-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 0 0-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 0 0-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 0 0 1.066-2.573c-.94-1.543.826-3.31 2.37-2.37c1 .608 2.296.07 2.572-1.065"/><path d="M9 12a3 3 0 1 0 6 0a3 3 0 0 0-6 0"/></g>`,viewBox:`0 0 24 24`},"tabler:settings-filled":{body:`<path fill="currentColor" d="M14.647 4.081a.724.724 0 0 0 1.08.448c2.439-1.485 5.23 1.305 3.745 3.744a.724.724 0 0 0 .447 1.08c2.775.673 2.775 4.62 0 5.294a.724.724 0 0 0-.448 1.08c1.485 2.439-1.305 5.23-3.744 3.745a.724.724 0 0 0-1.08.447c-.673 2.775-4.62 2.775-5.294 0a.724.724 0 0 0-1.08-.448c-2.439 1.485-5.23-1.305-3.745-3.744a.724.724 0 0 0-.447-1.08c-2.775-.673-2.775-4.62 0-5.294a.724.724 0 0 0 .448-1.08c-1.485-2.439 1.305-5.23 3.744-3.745a.722.722 0 0 0 1.08-.447c.673-2.775 4.62-2.775 5.294 0M12 9a3 3 0 1 0 0 6a3 3 0 0 0 0-6"/>`,viewBox:`0 0 24 24`},"tabler:share":{body:`<path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 12a3 3 0 1 0 6 0a3 3 0 1 0-6 0m12-6a3 3 0 1 0 6 0a3 3 0 1 0-6 0m0 12a3 3 0 1 0 6 0a3 3 0 1 0-6 0m-6.3-7.3l6.6-3.4m-6.6 6l6.6 3.4"/>`,viewBox:`0 0 24 24`},"tabler:sign-right":{body:`<path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 21h4m-2 0V11m0-5V3M6 6h10l2 2.5l-2 2.5H6z"/>`,viewBox:`0 0 24 24`},"tabler:sign-right-filled":{body:`<path fill="currentColor" d="M10 2a1 1 0 0 1 .993.883L11 3v2h5a1 1 0 0 1 .694.28l.087.095l2 2.5a1 1 0 0 1 .072 1.147l-.072.103l-2 2.5a1 1 0 0 1-.652.367L16 12h-5v8h1a1 1 0 0 1 .117 1.993L12 22H8a1 1 0 0 1-.117-1.993L8 20h1v-8H6a1 1 0 0 1-.993-.883L5 11V6a1 1 0 0 1 .883-.993L6 5h3V3a1 1 0 0 1 1-1"/>`,viewBox:`0 0 24 24`},"tabler:sparkles":{body:`<path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M16 18a2 2 0 0 1 2 2a2 2 0 0 1 2-2a2 2 0 0 1-2-2a2 2 0 0 1-2 2m0-12a2 2 0 0 1 2 2a2 2 0 0 1 2-2a2 2 0 0 1-2-2a2 2 0 0 1-2 2M9 18a6 6 0 0 1 6-6a6 6 0 0 1-6-6a6 6 0 0 1-6 6a6 6 0 0 1 6 6"/>`,viewBox:`0 0 24 24`},"tabler:sparkles-filled":{body:`<path fill="currentColor" d="M16 19a1 1 0 0 1 0-2a1 1 0 0 0 1-1c0-1.333 2-1.333 2 0a1 1 0 0 0 1 1c1.333 0 1.333 2 0 2a1 1 0 0 0-1 1c0 1.333-2 1.333-2 0a1 1 0 0 0-1-1M3 11a5 5 0 0 0 5-5c0-1.333 2-1.333 2 0a5 5 0 0 0 5 5c1.333 0 1.333 2 0 2a5 5 0 0 0-5 5a1 1 0 0 1-2 0a5 5 0 0 0-5-5c-1.333 0-1.333-2 0-2m13-4a1 1 0 0 1 0-2a1 1 0 0 0 1-1c0-1.333 2-1.333 2 0a1 1 0 0 0 1 1c1.333 0 1.333 2 0 2a1 1 0 0 0-1 1c0 1.333-2 1.333-2 0a1 1 0 0 0-1-1"/>`,viewBox:`0 0 24 24`},"tabler:stack-2":{body:`<path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 4L4 8l8 4l8-4zm-8 8l8 4l8-4M4 16l8 4l8-4"/>`,viewBox:`0 0 24 24`},"tabler:stack-2-filled":{body:`<path fill="currentColor" d="M20.894 15.553a1 1 0 0 1-.447 1.341l-8 4a1 1 0 0 1-.894 0l-8-4a1 1 0 0 1 .894-1.788L12 18.88l7.554-3.775a1 1 0 0 1 1.341.447m0-4a1 1 0 0 1-.447 1.341l-8 4a1 1 0 0 1-.894 0l-8-4a1 1 0 0 1 .894-1.788L12 14.88l7.554-3.775a1 1 0 0 1 1.341.447M12.008 3q.056 0 .111.007l.111.02l.086.024l.012.006l.012.002l.029.014l.05.019l.016.009l.012.005l8 4a1 1 0 0 1 0 1.788l-8 4a1 1 0 0 1-.894 0l-8-4a1 1 0 0 1 0-1.788l8-4l.011-.005l.018-.01l.078-.032l.011-.002l.013-.006l.086-.024l.11-.02l.056-.005z"/>`,viewBox:`0 0 24 24`},"tabler:star":{body:`<path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m12 17.75l-6.172 3.245l1.179-6.873l-5-4.867l6.9-1l3.086-6.253l3.086 6.253l6.9 1l-5 4.867l1.179 6.873z"/>`,viewBox:`0 0 24 24`},"tabler:star-filled":{body:`<path fill="currentColor" d="m8.243 7.34l-6.38.925l-.113.023a1 1 0 0 0-.44 1.684l4.622 4.499l-1.09 6.355l-.013.11a1 1 0 0 0 1.464.944l5.706-3l5.693 3l.1.046a1 1 0 0 0 1.352-1.1l-1.091-6.355l4.624-4.5l.078-.085a1 1 0 0 0-.633-1.62l-6.38-.926l-2.852-5.78a1 1 0 0 0-1.794 0z"/>`,viewBox:`0 0 24 24`},"tabler:subtitles":{body:`<path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M18 5a3 3 0 0 1 3 3v8a3 3 0 0 1-3 3H6a3 3 0 0 1-3-3V8a3 3 0 0 1 3-3zM7 15h5m3 0h2m0-3h-3m-3 0h-1"/>`,viewBox:`0 0 24 24`},"tabler:subtitles-off":{body:`<path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5h9a3 3 0 0 1 3 3v8a3 3 0 0 1-.13.874m-2.006 2A3 3 0 0 1 18 19H6a3 3 0 0 1-3-3V8c0-1.35.893-2.493 2.12-2.869M7 15h5m5-3h-1m-4 0h-2M3 3l18 18"/>`,viewBox:`0 0 24 24`},"tabler:sun":{body:`<path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 12a4 4 0 1 0 8 0a4 4 0 1 0-8 0m-5 0h1m8-9v1m8 8h1m-9 8v1M5.6 5.6l.7.7m12.1-.7l-.7.7m0 11.4l.7.7m-12.1-.7l-.7.7"/>`,viewBox:`0 0 24 24`},"tabler:sun-filled":{body:`<path fill="currentColor" d="M12 19a1 1 0 0 1 .993.883L13 20v1a1 1 0 0 1-1.993.117L11 21v-1a1 1 0 0 1 1-1m6.313-2.09l.094.083l.7.7a1 1 0 0 1-1.32 1.497l-.094-.083l-.7-.7a1 1 0 0 1 1.218-1.567zm-11.306.083a1 1 0 0 1 .083 1.32l-.083.094l-.7.7a1 1 0 0 1-1.497-1.32l.083-.094l.7-.7a1 1 0 0 1 1.414 0M4 11a1 1 0 0 1 .117 1.993L4 13H3a1 1 0 0 1-.117-1.993L3 11zm17 0a1 1 0 0 1 .117 1.993L21 13h-1a1 1 0 0 1-.117-1.993L20 11zM6.213 4.81l.094.083l.7.7a1 1 0 0 1-1.32 1.497l-.094-.083l-.7-.7A1 1 0 0 1 6.11 4.74zm12.894.083a1 1 0 0 1 .083 1.32l-.083.094l-.7.7a1 1 0 0 1-1.497-1.32l.083-.094l.7-.7a1 1 0 0 1 1.414 0M12 2a1 1 0 0 1 .993.883L13 3v1a1 1 0 0 1-1.993.117L11 4V3a1 1 0 0 1 1-1m0 5a5 5 0 1 1-4.995 5.217L7 12l.005-.217A5 5 0 0 1 12 7"/>`,viewBox:`0 0 24 24`},"tabler:tag":{body:`<g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><path d="M6.5 7.5a1 1 0 1 0 2 0a1 1 0 1 0-2 0"/><path d="M3 6v5.172a2 2 0 0 0 .586 1.414l7.71 7.71a2.41 2.41 0 0 0 3.408 0l5.592-5.592a2.41 2.41 0 0 0 0-3.408l-7.71-7.71A2 2 0 0 0 11.172 3H6a3 3 0 0 0-3 3"/></g>`,viewBox:`0 0 24 24`},"tabler:tag-filled":{body:`<path fill="currentColor" d="M11.172 2a3 3 0 0 1 2.121.879l7.71 7.71a3.41 3.41 0 0 1 0 4.822l-5.592 5.592a3.41 3.41 0 0 1-4.822 0l-7.71-7.71A3 3 0 0 1 2 11.172V6a4 4 0 0 1 4-4zM7.5 5.5a2 2 0 0 0-1.995 1.85L5.5 7.5a2 2 0 1 0 2-2"/>`,viewBox:`0 0 24 24`},"tabler:thumb-up":{body:`<path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M7 11v8a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1v-7a1 1 0 0 1 1-1za4 4 0 0 0 4-4V6a2 2 0 0 1 4 0v5h3a2 2 0 0 1 2 2l-1 5a2 3 0 0 1-2 2h-7a3 3 0 0 1-3-3"/>`,viewBox:`0 0 24 24`},"tabler:thumb-up-filled":{body:`<path fill="currentColor" d="M13 3a3 3 0 0 1 2.995 2.824L16 6v4h2a3 3 0 0 1 2.98 2.65l.015.174L21 13l-.02.196l-1.006 5.032c-.381 1.626-1.502 2.796-2.81 2.78L17 21H9a1 1 0 0 1-.993-.883L8 20l.001-9.536a1 1 0 0 1 .5-.865a3 3 0 0 0 1.492-2.397L10 7V6a3 3 0 0 1 3-3m-8 7a1 1 0 0 1 .993.883L6 11v9a1 1 0 0 1-.883.993L5 21H4a2 2 0 0 1-1.995-1.85L2 19v-7a2 2 0 0 1 1.85-1.995L4 10z"/>`,viewBox:`0 0 24 24`},"tabler:user":{body:`<path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 7a4 4 0 1 0 8 0a4 4 0 0 0-8 0M6 21v-2a4 4 0 0 1 4-4h4a4 4 0 0 1 4 4v2"/>`,viewBox:`0 0 24 24`},"tabler:user-filled":{body:`<path fill="currentColor" d="M12 2a5 5 0 1 1-5 5l.005-.217A5 5 0 0 1 12 2m2 12a5 5 0 0 1 5 5v1a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2v-1a5 5 0 0 1 5-5z"/>`,viewBox:`0 0 24 24`},"tabler:versions":{body:`<path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 7a2 2 0 0 1 2-2h6a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2h-6a2 2 0 0 1-2-2zM7 7v10M4 8v8"/>`,viewBox:`0 0 24 24`},"tabler:versions-filled":{body:`<path fill="currentColor" d="M18 4h-6a3 3 0 0 0-3 3v10a3 3 0 0 0 3 3h6a3 3 0 0 0 3-3V7a3 3 0 0 0-3-3M7 6a1 1 0 0 1 .993.883L8 7v10a1 1 0 0 1-1.993.117L6 17V7a1 1 0 0 1 1-1M4 7a1 1 0 0 1 .993.883L5 8v8a1 1 0 0 1-1.993.117L3 16V8a1 1 0 0 1 1-1"/>`,viewBox:`0 0 24 24`},"tabler:vinyl":{body:`<g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><path d="M16 3.937A9 9 0 1 0 21 12"/><path d="M11 12a1 1 0 1 0 2 0a1 1 0 1 0-2 0m8-8a1 1 0 1 0 2 0a1 1 0 1 0-2 0"/><path d="m20 4l-3.5 10l-2.5 2"/></g>`,viewBox:`0 0 24 24`},"tabler:volume":{body:`<path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 8a5 5 0 0 1 0 8m2.7-11a9 9 0 0 1 0 14M6 15H4a1 1 0 0 1-1-1v-4a1 1 0 0 1 1-1h2l3.5-4.5A.8.8 0 0 1 11 5v14a.8.8 0 0 1-1.5.5z"/>`,viewBox:`0 0 24 24`},"tabler:volume-off":{body:`<path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 8a5 5 0 0 1 1.912 4.934m-1.377 2.602A5 5 0 0 1 15 16m2.7-11a9 9 0 0 1 2.362 11.086m-1.676 2.299A9 9 0 0 1 17.7 19M9.069 5.054L9.5 4.5A.8.8 0 0 1 11 5v2m0 4v8a.8.8 0 0 1-1.5.5L6 15H4a1 1 0 0 1-1-1v-4a1 1 0 0 1 1-1h2l1.294-1.664M3 3l18 18"/>`,viewBox:`0 0 24 24`},"tabler:world-www":{body:`<g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><path d="M19.5 7A9 9 0 0 0 12 3a8.99 8.99 0 0 0-7.484 4"/><path d="M11.5 3a17 17 0 0 0-1.826 4M12.5 3a17 17 0 0 1 1.828 4M19.5 17a9 9 0 0 1-7.5 4a8.99 8.99 0 0 1-7.484-4"/><path d="M11.5 21a17 17 0 0 1-1.826-4m2.826 4a17 17 0 0 0 1.828-4M2 10l1 4l1.5-4L6 14l1-4m10 0l1 4l1.5-4l1.5 4l1-4M9.5 10l1 4l1.5-4l1.5 4l1-4"/></g>`,viewBox:`0 0 24 24`},"tabler:x":{body:`<path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M18 6L6 18M6 6l12 12"/>`,viewBox:`0 0 24 24`},"tabler:x-filled":{body:`<path fill="currentColor" d="M6.707 5.293L12 10.585l5.293-5.292a1 1 0 0 1 1.414 1.414L13.415 12l5.292 5.293a1 1 0 0 1-1.414 1.414L12 13.415l-5.293 5.292a1 1 0 1 1-1.414-1.414L10.585 12L5.293 6.707a1 1 0 0 1 1.414-1.414"/>`,viewBox:`0 0 24 24`}},Zt=`tabler:info-circle`;function Qt(e){if(Object.prototype.hasOwnProperty.call(Xt,e))return e;let t=Jt[e];if(t!==void 0)return t;let n=Yt[e];if(n!==void 0)return Object.prototype.hasOwnProperty.call(Xt,n)?n:Jt[n]}function $t(e){return Qt(e)!==void 0}function en(e){return Qt(e)??Zt}function J({name:e,size:t=`1em`,variant:n=`line`,...r}){let i=en(e),a=`${i}-filled`,o=n===`solid`&&Object.prototype.hasOwnProperty.call(Xt,a)?Xt[a]:Xt[i],s={"aria-hidden":!0,fill:`currentColor`,height:t,viewBox:o.viewBox,width:t,...r};return o.d===void 0?(0,L.jsx)(`svg`,{...s,dangerouslySetInnerHTML:{__html:o.body??``}}):(0,L.jsx)(`svg`,{...s,children:(0,L.jsx)(`path`,{d:o.d})})}function tn({icon:e,toggleIcon:t,label:n,title:r,active:i=!1,hidden:a=!1,className:o,...s}){return(0,L.jsxs)(`button`,{type:`button`,"aria-label":n,title:r??n,className:q(`floating-btn`,o,i&&`toggled`,a&&`hide`),...s,children:[(0,L.jsx)(J,{name:e,className:t===void 0?`mx-auto`:`icon-default mx-auto`}),t===void 0?null:(0,L.jsx)(J,{name:t,className:`icon-toggled`})]})}function nn(){let{pathname:e}=c(),t=i(),n=e.replace(/\/$/,``)===``;return(0,L.jsx)(tn,{id:`back-to-home-btn`,icon:`home`,label:H(V.backToHome),hidden:n,onClick:()=>{t(`/`)}})}function rn(e=8){let[t,n]=(0,F.useState)(!1);return(0,F.useEffect)(()=>{let t=()=>{n(window.scrollY>e)};return t(),window.addEventListener(`scroll`,t,{passive:!0}),()=>{window.removeEventListener(`scroll`,t)}},[e]),t}function an(){let e=rn(200);return(0,L.jsx)(tn,{id:`back-to-top-btn`,icon:`chevron-up`,label:`回到顶部`,hidden:!e,onClick:()=>{let e=window.matchMedia(`(prefers-reduced-motion: reduce)`).matches;window.scrollTo({top:0,behavior:e?`auto`:`smooth`})}})}function on(){return(0,L.jsxs)(`div`,{className:`floating-controls-container`,children:[(0,L.jsx)(nn,{}),(0,L.jsx)(an,{})]})}var sn=[{title:`抽象工厂模式：成系列地创建对象`,description:`抽象工厂模式是一种创建型设计模式，它能创建一系列相关的对象，而无需指定其具体类。`,publishedAt:`2023-04-03T13:22:00+08:00`,updatedAt:`2023-04-03T13:22:00+08:00`,tags:[`设计模式`,`创建型模式`,`抽象工厂模式`],category:`设计模式`,series:`设计模式`,seriesOrder:3,pinned:!1,draft:!1,cover:`/posts/abstract-factory-pattern/cover.webp`,coverAlt:`抽象工厂模式封面`,content:`**抽象工厂模式**是一种创建型设计模式， 它能创建一系列相关的对象， 而无需指定其具体类。

工厂模式分为：简单工厂、工厂方法、**抽象工厂**。

## 为什么要使用？

**抽象工厂模式的对象职责：**

**创建一系列相关的对象， 而无需指定其具体类。**

例如现在有一个家具厂🏬（抽象工厂），对于购买者👨来说，他们并不关心家具厂的家具🛏️（抽象产品）是什么风格的；而对于创造者来说，他们必须设计各种风格的家具，以便更好的销售。

同一风格的不同家具是一种产品实现，制造同一风格家具的是一种工厂实现。又或者说顾客需要风格统一的家具，每个具体的家具工厂制作的家具都是同一风格。

家具的风格更新十分频繁，使用抽象工厂模式能够让我们不需要修改其他代码，只需要根据抽象工厂和抽象产品增加新风格的家具工厂和家具产品。

总的来说，使用者更关心一组产品的某些共性（有哪些家具），至于一些具体的实现（这些家具有多少种风格）并不在意。而创建者要找到正确的共性，并尽可能隐藏具体实现细节，始终围绕着提供符合共性的产品（不同风格的家具）。

## 模式结构

- **抽象工厂（Abstract Factory） ：** 接口声明了一组创建各种抽象产品的方法。
- **抽象产品（Abstract Product 通用的一类对象或接口）：** 为相同系列的不同产品声明接口。抽象产品的好坏直接决定了抽象工厂和具体工厂能否发挥最大作用的关键所在。
- **具体工厂（Concrete Factory） ：** 实现抽象工厂的构建方法。 每个具体工厂都对应特定产品变体， 且仅创建此种产品变体。
- **具体产品（Concrete Product 继承通用对象或接口后扩展特有属性）：** 是抽象产品的多种不同系列实现。所有系列产品都必须实现相应的抽象产品。

**抽象工厂模式的类图：**

![抽象工厂模式的类图](./5ee14ce921ac7632ef501219bf990b21.webp)

抽象接口和抽象类的本质相同，可以根据不同业务进行修改。使用者无需关注当前工厂和产品是何种实现，只需要使用抽象工厂创建抽象产品即可。

## 模式实现

该示例使用抽象工厂模式定义抽象家具工厂和一系列抽象家具产品，分别用现代风格和维多利亚风格实现。

### 示例程序的类图

![示例程序的类图](./8802a1b390a9d80f2aa368c4f408ffc2.webp)

具体工厂实现类的方法是重写抽象工厂类的，所以其返回类型和抽象工厂类一样，这里由于害怕线条混乱，就不把具体工厂实现类和抽象产品类的依赖关系画出来了。

### 代码实现

#### 抽象工厂类

\`\`\`java
package example.factory;

import example.product.Chair;
import example.product.Table;

/** 抽象家具工厂 */
public abstract class FurnitureFactory {
    /**
     - 用反射构建具体工厂
     - @param className 具体工厂全类名
     */
    public static FurnitureFactory getFactory(String className) {
        FurnitureFactory factory = null;
        try {
            factory = (FurnitureFactory) Class.forName(className).newInstance();
        } catch (ClassNotFoundException e) {
            System.out.println("没有找到类：" + className);
        } catch (Exception e) {
            e.printStackTrace();
        }
        return factory;
    }

    /**
     - 创建椅子产品
     - @return 抽象椅子产品
     */
    public abstract Chair createChair();

    /**
     - 创建桌子产品
     - @return 抽象桌子产品
     */
    public abstract Table createTable();
}
\`\`\`

#### 抽象产品类

\`\`\`java
package example.product;

/** 抽象椅子产品 */
public abstract class Chair {
    /**
     - 获取椅子腿数
     - @return 椅子腿数
     */
    public abstract int getLegsNum();

    /**
     - 获取椅子高度
     - @return 椅子高度
     */
    public abstract double getHeight();
}
\`\`\`

\`\`\`java
package example.product;

/** 抽象桌子产品 */
public abstract class Table {
    /**
     - 获取桌子面积
     - @return 桌子面积
     */
    public abstract int getSize();

    /**
     - 获取桌子高度
     - @return 桌子高度
     */
    public abstract double getHeight();
}
\`\`\`

#### 具体工厂类

\`\`\`java
package example.factory.impl;

import example.factory.FurnitureFactory;
import example.product.Chair;
import example.product.Table;
import example.product.impl.ModernChairImpl;
import example.product.impl.ModernTableImpl;

/** 现代风格家具工厂实现 */
public class ModernFurnitureFactoryImpl extends FurnitureFactory {
    /**
     - 创建椅子产品
     - @return 抽象椅子产品
     */
    @Override
    public Chair createChair() {
        return new ModernChairImpl();
    }

    /**
     - 创建桌子产品
     - @return 抽象桌子产品
     */
    @Override
    public Table createTable() {
        return new ModernTableImpl();
    }
}
\`\`\`

\`\`\`java
package example.factory.impl;

import example.factory.FurnitureFactory;
import example.product.Chair;
import example.product.Table;
import example.product.impl.VictorianChairImpl;
import example.product.impl.VictorianTableImpl;

/** 维多利亚风格家具工厂实现 */
public class VictorianFurnitureFactoryImpl extends FurnitureFactory {
    /**
     - 创建椅子产品
     - @return 抽象椅子产品
     */
    @Override
    public Chair createChair() {
        return new VictorianChairImpl();
    }

    /**
     - 创建桌子产品
     - @return 抽象桌子产品
     */
    @Override
    public Table createTable() {
        return new VictorianTableImpl();
    }
}
\`\`\`

#### 具体产品类

\`\`\`java
package example.product.impl;

import example.product.Chair;

/** 现代风格椅子产品实现 */
public class ModernChairImpl extends Chair {
    /**
     - 获取椅子腿数
     - @return 椅子腿数
     */
    @Override
    public int getLegsNum() {
        return 4;
    }

    /**
     - 获取椅子高度
     - @return 椅子高度
     */
    @Override
    public double getHeight() {
        return 70;
    }
}
\`\`\`

\`\`\`java
package example.product.impl;

import example.product.Table;

/** 现代风格桌子产品实现 */
public class ModernTableImpl extends Table {
    /**
     - 获取桌子面积
     - @return 桌子面积
     */
    @Override
    public int getSize() {
        return 200;
    }

    /**
     - 获取桌子高度
     - @return 桌子高度
     */
    @Override
    public double getHeight() {
        return 70;
    }
}
\`\`\`

\`\`\`java
package example.product.impl;

import example.product.Chair;

/** 维多利亚风格产品椅子实现 */
public class VictorianChairImpl extends Chair {
    /**
     - 获取椅子腿数
     - @return 椅子腿数
     */
    @Override
    public int getLegsNum() {
        return 4;
    }

    /**
     - 获取椅子高度
     - @return 椅子高度
     */
    @Override
    public double getHeight() {
        return 50;
    }
}
\`\`\`

\`\`\`java
package example.product.impl;

import example.product.Table;

/** 维多利亚风格产品桌子实现 */
public class VictorianTableImpl extends Table {
    /**
     - 获取桌子面积
     - @return 桌子面积
     */
    @Override
    public int getSize() {
        return 100;
    }

    /**
     - 获取桌子高度
     - @return 桌子高度
     */
    @Override
    public double getHeight() {
        return 50;
    }
}
\`\`\`

### 代码测试

\`\`\`java
import example.factory.FurnitureFactory;
import example.product.Chair;
import example.product.Table;

/** 测试抽象工厂模式 */
public class Test {
    public static void main(String[] args) {
        if (args.length != 1) {
            System.out.println("未找到参数或参数格式不正确！");
        }
        FurnitureFactory factory = FurnitureFactory.getFactory(args[0]);
        Chair chair = factory.createChair();
        Table table = factory.createTable();
        System.out.println("当前椅子有" + chair.getLegsNum() + "条腿，高为" + chair.getHeight() + "！");
        System.out.println("当前桌子的桌面面积为" + table.getSize() + "，高为" + table.getHeight() + "！");
    }
}
\`\`\`

### 输出结果

\`\`\`text
# 执行参数为 example.factory.impl.ModernFurnitureFactoryImpl 时
当前椅子有4条腿，高为70.0！
当前桌子的桌面面积为200，高为70.0！
\`\`\`

\`\`\`text
# 执行参数为 example.factory.impl.VictorianFurnitureFactoryImpl 时
当前椅子有4条腿，高为50.0！
当前桌子的桌面面积为100，高为50.0！
\`\`\`

从上面代码可以看出抽象工厂主要是用来生成抽象产品的，而具体工厂则是用来生成同一系列的具体产品。并且在编写代码时，我是先编写测试代码再编写具体实现的。这也印证了抽象工厂模式不需要考虑具体实现，使用与实现分开的优点。

## 常用场景和解决方案

- 不同系列产品有较多共性特征时，使用抽象工厂模式有助于提高组件复用性。
- 解决跨平台带来的兼容性问题。
- 知道相关产品但是不知道具体实现，使用抽象工厂模式可以让你在以后任意添加新的实现而不变更使用代码。例如在注入时，不需要修改使用代码，就能更改注入方式等。

## 模式的优缺点

| 优点                                                                     | 缺点                                                                    |
| :----------------------------------------------------------------------- | :---------------------------------------------------------------------- |
| 你可以确保同一工厂生成的产品相互匹配。                                   | 由于采用该模式需要向应用中引入众多接口和类， 代码可能会比之前更加复杂。 |
| 你可以避免客户端和具体产品代码的耦合。或者说让使用和创建的代码解耦。     | 变更产品的结构困难，需要修改所有的抽象和具体工厂。                      |
| _单一职责原则_。 你可以将产品生成代码抽取到同一位置， 使得代码易于维护。 |                                                                         |
| _开闭原则_。 向应用程序中引入新产品变体时， 你无需修改客户端代码。       |                                                                         |

## 拓展知识

- 生成器重点关注如何分步生成复杂对象。抽象工厂专门用于生产一系列相关对象。 _抽象工厂_会马上返回产品，_生成器_则允许你在获取产品前执行一些额外构造步骤。
- 在许多设计工作的初期都会使用工厂方法模式（较为简单， 而且可以更方便地通过子类进行定制），随后演化为使用抽象工厂模式、原型模式或生成器模式（更灵活但更加复杂）。

🔙 [设计模式](https://heyelio.github.io/0587cd81)

**📌最后：希望本文能够给您提供帮助，文章中有不懂或不正确的地方，请在下方评论区💬留言！**

**🔗参考文献：**

🌐 [设计模式 --refactoringguru](https://refactoringguru.cn/design-patterns#intro-patterns)

📺 [bilibili-趣学设计模式；黄靖锋. --拉勾教育](https://www.bilibili.com/video/BV1hY411Y7zR/?p=1&vd_source=a9a236c4d6e5c5350c70b71ee0727b8c)

📖 图解设计模式 /（日）结城浩著；杨文轩译. --北京：人民邮电出版社，2017.1`,slug:`abstract-factory-pattern`,path:`/posts/abstract-factory-pattern/`,wordCount:5839,readingMinutes:7,toc:[{depth:2,slug:`为什么要使用`,text:`为什么要使用？`},{depth:2,slug:`模式结构`,text:`模式结构`},{depth:2,slug:`模式实现`,text:`模式实现`},{depth:3,slug:`示例程序的类图`,text:`示例程序的类图`},{depth:3,slug:`代码实现`,text:`代码实现`},{depth:4,slug:`抽象工厂类`,text:`抽象工厂类`},{depth:4,slug:`抽象产品类`,text:`抽象产品类`},{depth:4,slug:`具体工厂类`,text:`具体工厂类`},{depth:4,slug:`具体产品类`,text:`具体产品类`},{depth:3,slug:`代码测试`,text:`代码测试`},{depth:3,slug:`输出结果`,text:`输出结果`},{depth:2,slug:`常用场景和解决方案`,text:`常用场景和解决方案`},{depth:2,slug:`模式的优缺点`,text:`模式的优缺点`},{depth:2,slug:`拓展知识`,text:`拓展知识`}],protected:!1,passwordHint:``,sourcePath:`abstract-factory-pattern/index.md`},{title:`适配器模式：让不兼容的接口对接`,description:`适配器模式是一种结构型设计模式，它能使接口不兼容的对象能够相互合作。`,publishedAt:`2023-04-04T09:14:00+08:00`,updatedAt:`2023-04-04T09:14:00+08:00`,tags:[`设计模式`,`结构型模式`,`适配器模式`],category:`设计模式`,series:`设计模式`,seriesOrder:7,pinned:!1,draft:!1,cover:`/posts/adapter-pattern/cover.webp`,coverAlt:`适配器模式封面`,content:`**适配器模式**是一种结构型设计模式，它能使接口不兼容的对象能够相互合作。

## 为什么要使用？

**适配器模式的对象职责：**

**使接口不兼容的对象能够相互合作。** 适配器可以让不兼容的两个类一起协同工作，将类的接口转换为客户期望的另一个接口。

在实际开发中，我们可能会遇到一个无法修改的功能性服务类，如第三方、遗留系统或存在众多已有依赖的类。同时我们有一个或多个需要使用服务类的客户端类。我们需要让客户端类能够使用服务类的功能。但是客户端类和服务类不兼容。这时我们就可以使用适配器模式。

我们让**客户端**使用**客户端接口**来使用**适配器**与**服务类**进行通信。这样一来就可以让我们不需要变更服务类的代码和不影响客户端代码的情况下
**修改**或**扩展**适配器。

举个例子：如果现在有一个充电宝🔋（客户端类），你要用这个充电宝去给苹果手机📱（被适配/ 服务类）充电，不过充电宝的 \`USB\`
接口🔌（客户端接口）和苹果接口无法兼容。你也无法修改苹果手机内部的充电接口。

那么这时候你可以用一条 \`USB\` 接口转苹果充电接口（适配器）的数据线来为手机充电。如果我们有新的充电接口呢？如 \`Type-C 接口\`
。那么我们只需要用一条 \`USB\` 接口转 \`Type-C\` 接口的数据线即可。我们只需要更换不同数据线（适配器）就可以让充电宝给不同充电口的手机充电。

## 模式结构

- **客户端** （Client） 是包含当前程序业务逻辑的类。

- **客户端接口** （Client Interface） 描述了其他类与客户端代码合作时必须遵循的协议。

- **服务** （Service） 中有一些功能类 （通常来自第三方或遗留系统）。 客户端与其接口不兼容， 因此无法直接调用其功能。

- **适配器** （Adapter） 是一个可以同时与客户端和服务交互的类： 它在实现客户端接口的同时封装了服务对象。
  适配器接受客户端通过适配器接口发起的调用， 并将其转换为适用于被封装服务对象的调用。

### 对象适配器

对象适配器的实现是让服务类作为适配器的属性，属于组合关系。所有流行的编程语言都可以实现适配器。

**适配器模式的类图：**

![适配器模式的类图](./b8d8779644a7b9d806913facfbe7dedd.webp)

### 类适配器

类适配器的实现是让适配器类继承服务类，属于继承关系。这种方式仅能在支持多重继承的编程语言中实现， 例如 C++。

**适配器模式的类图：**

![适配器模式的类图](./74a4aa36f0d2a2e06d091dfd1b28dd45.webp)

## 模式实现

该示例分别使用对象适配器和类适配器来获取时间类型（\`Long\` 和 \`Date\`）。原来的接口都是返回数值，使用适配器模式将它们的调用方式改为直接打印在控制台。

### 示例程序的类图

![示例程序的类图](./9476d46b184e462dafcf84e768a2332e.webp)

### 代码实现

#### 客户端接口

\`\`\`java
package example;

/** 客户端接口 */
public interface ClientInterface {
    /**
     - 根据类型获取时间并输出
     - @param type “Long”，“Date”
     */
    void print(String type);
}
\`\`\`

#### 适配器

\`\`\`java
package example;

/** 适配器 */
public class Adapter extends DateTypeTime implements ClientInterface {
    /** 被适配器-组合关系 */
    private LongTypeTime longTypeTime = new LongTypeTime();

    /**
     - 根据类型获取时间并输出
     - @param type “Long”，“Date”
     */
    @Override
    public void print(String type) {
        if ("Long".equals(type)) {
            System.out.println(longTypeTime.getNowTime());
        } else if ("Date".equals(type)) {
            System.out.println(super.getNowTime());
        } else {
            System.out.println("无效类型");
        }
    }
}
\`\`\`

#### 服务（继承）

\`\`\`java
package example;

import java.util.Date;

/** “Date”类型时间服务类，被适配类，使用继承的方式实现适配器模式 */
public class DateTypeTime {
    /**
     - 获取“Date”类型的当前时间
     - @return 当前时间
     */
    public Date getNowTime() {
        return new Date(System.currentTimeMillis());
    }
}
\`\`\`

#### 服务（组合/ 委托）

\`\`\`java
package example;

import java.util.Date;

/** “Long”类型时间服务类，被适配类，使用组合/ 委托的方式实现适配器模式 */
public class LongTypeTime {
    /**
     - 获取“Long”类型的当前时间
     - @return 当前时间
     */
    public Long getNowTime() {
        return new Date(System.currentTimeMillis()).getTime();
    }
}
\`\`\`

### 代码测试

\`\`\`java
import example.Adapter;
import example.ClientInterface;

/** 测试适配器模式 */
public class Test {
    public static void main(String[] args) {
        ClientInterface adapter = new Adapter();

        System.out.println("使用继承的方式实现适配器模式");
        adapter.print("Date");

        System.out.println("\\n------------------- 分割线 -------------------\\n");

        System.out.println("使用组合/ 委托的方式实现适配器模式");
        adapter.print("Long");
    }
}
\`\`\`

### 输出结果

\`\`\`text
使用继承的方式实现适配器模式
Sun Mar 05 16:10:59 CST 2023

------------------- 分割线 -------------------

使用组合/ 委托的方式实现适配器模式
1678003859670
\`\`\`

对象适配器和类适配器都能实现适配器模式，不过在单继承的编程语言里，只能使用对象适配器。

## 常用场景和解决方案

- 当你希望使用某个类，但是其接口与其他代码不兼容时，可以使用适配器类。或原有接口功能不满足现有要求，需要在兼容老接口的同时做适当的扩展。
- 如果您需要复用这样一些类，他们处于同一个继承体系，并且他们又有了额外的一些共同的方法，但是这些共同的方法不是所有在这一继承体系中的子类所具有的共性。或将有相似性的多个不同接口之间做功能的统一。
- 旧版本和新版本相互兼容。

## 模式的优缺点

| 优点                                                                                                                      | 缺点                                                                                             |
| ------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------ |
| _单一职责原则_ 你可以将接口或数据转换代码从程序主要业务逻辑中分离。                                                       | 代码整体复杂度增加，因为你需要新增一系列接口和类。有时直接更改服务类使其与其他代码兼容会更简单。 |
| _开闭原则_ 只要客户端代码通过客户端接口与适配器进行交互，你就能在不修改现有客户端代码的情况下在程序中添加新类型的适配器。 |                                                                                                  |
| _里氏替换原则_ 适配器类只要不影响客户端接口功能，具体被适配类无论使用什么新功能，都能很方便进行替换。                     |                                                                                                  |

### 使用适配器模式的优势

- 将目标类（客户端接口）和具体适配者类解耦。可以通过更换不同适配器去使用更多类。
- 增加了类的透明性。修改的只是适配器类，客户端的调用逻辑不会被影响。换句话说适配器根据客户端接口进行变更，不会影响到客户端。
- 统一多个类或接口。一个适配器类可以把多个不同的具体被适配类和子类都适配到同一个目标类上，如果目标类是新类，那么它就统一多个类或接口。

### 使用适配器模式的劣势

- 一次只能适配一个抽象类或接口。面对单继承编程语言，一次就只能适配一个被适配者类。
- 过度嵌套会导致接口臃肿，例如不断在一个目标类上适配适配器，就会让接口变得臃肿。
- 目标接口依赖太多适配接口，修改目标接口会导致所以适配器都需要定制修改。

## 拓展知识

- 适配器模式的适配器类**最好采用私有继承的方式**，以起到限定接口功能范围的作用。
- 适配器可以对已有对象的接口进行修改，装饰模式则能在不改变对象接口的前提下强化对象功能。此外，_装饰_ 还支持递归组合，
  _适配器_ 则无法实现。
- 适配器能为被封装对象提供不同的接口，代理模式能为对象提供相同的接口，装饰则能为对象提供加强的接口。

🔙 [设计模式](/posts/design-patterns/)

**📌最后：希望本文能够给您提供帮助，文章中有不懂或不正确的地方，请在下方评论区💬留言！**

**🔗参考文献：**

🌐 [设计模式 --refactoringguru](https://refactoringguru.cn/design-patterns#intro-patterns)

📺 [bilibili-趣学设计模式；黄靖锋. --拉勾教育](https://www.bilibili.com/video/BV1hY411Y7zR/?p=1&vd_source=a9a236c4d6e5c5350c70b71ee0727b8c)

📖 图解设计模式 /（日）结城浩著；杨文轩译. --北京：人民邮电出版社，2017.1`,slug:`adapter-pattern`,path:`/posts/adapter-pattern/`,wordCount:4202,readingMinutes:9,toc:[{depth:2,slug:`为什么要使用`,text:`为什么要使用？`},{depth:2,slug:`模式结构`,text:`模式结构`},{depth:3,slug:`对象适配器`,text:`对象适配器`},{depth:3,slug:`类适配器`,text:`类适配器`},{depth:2,slug:`模式实现`,text:`模式实现`},{depth:3,slug:`示例程序的类图`,text:`示例程序的类图`},{depth:3,slug:`代码实现`,text:`代码实现`},{depth:4,slug:`客户端接口`,text:`客户端接口`},{depth:4,slug:`适配器`,text:`适配器`},{depth:4,slug:`服务继承`,text:`服务（继承）`},{depth:4,slug:`服务组合-委托`,text:`服务（组合/ 委托）`},{depth:3,slug:`代码测试`,text:`代码测试`},{depth:3,slug:`输出结果`,text:`输出结果`},{depth:2,slug:`常用场景和解决方案`,text:`常用场景和解决方案`},{depth:2,slug:`模式的优缺点`,text:`模式的优缺点`},{depth:3,slug:`使用适配器模式的优势`,text:`使用适配器模式的优势`},{depth:3,slug:`使用适配器模式的劣势`,text:`使用适配器模式的劣势`},{depth:2,slug:`拓展知识`,text:`拓展知识`}],protected:!1,passwordHint:``,sourcePath:`adapter-pattern/index.md`},{title:`我如何用 AI 重构这个博客`,description:`从 Astro 迁移到 React Router，记录一次 AI 深度参与的博客重构：技术选型、开发流程、质量检查，以及过程中遇到的问题。`,publishedAt:`2026-11-17T09:00:00+08:00`,tags:[`AI 协作`,`重构`,`React Router`,`静态站点`,`工程化`],category:`工程实践`,pinned:!0,rank:0,draft:!1,cover:`/posts/ai-rebuilt-blog/cover.webp`,coverAlt:`我如何用 AI 重构这个博客封面`,content:`这个博客最初基于 Astro 和 Firefly 主题搭建。Firefly 的设计和交互都很不错，不过随着我不断往博客里添加功能，逐渐发现自己对原有主题的模板约定和组件组织方式并不熟悉。每次修改页面或增加功能，都需要先花时间理解原来的实现。

于是，我决定以 Firefly 官方站点和源码为参照，将整个博客迁移到 React Router。包括页面、组件、样式和构建流程在内，大部分开发工作都交给 AI 完成，我主要负责确定技术方案、提供参考、检查实现效果和处理一些需要人工判断的问题。

这次重构涉及的内容不少，从基础页面到搜索、文章分享图，再到静态资源优化，几乎重新梳理了一遍整个站点的实现。

这篇文章想聊聊这次开发的过程，以及我在 AI 协作、工程约束和质量检查方面积累的一些经验。

## 一、开始之前，先明确重构范围

一开始，我没有直接让 AI 开始写代码，而是先整理了这次重构的目标和约束。

这一步很有必要。只给出「把 Astro 博客迁移到 React Router」这样的任务，AI 很容易根据自己的理解补充设计，最后做出来的东西虽然能运行，却可能和原站点存在不少差异。

因此，我提前确定了几个基本原则：

1. **视觉效果以 Firefly 官方站点为准。** 颜色、圆角、间距、动画时长等细节，都需要对照官方站点的实际表现。
2. **保留原有业务行为。** 数据规则、分页参数、分类顺序和交互逻辑尽量保持一致，主要调整框架、组件组织和构建流程。
3. **拆分任务，分批完成。** 导航与布局、文章页面、搜索、外部数据页面等内容分别推进，每个阶段完成后都要经过检查。

第三点在实际开发中帮了我不少忙。

AI 的上下文和注意力都有一定限制。如果一次性安排大量文件的修改，前面确定的约定很容易在后续实现中被遗漏。我把整个项目拆成多个相对独立的开发批次，每次只处理一类功能，并在开始前说明涉及的文件、实现要求和验收标准。

这样做之后，开发过程更容易控制，出现问题时也能快速定位到具体批次。

## 二、技术选型：尽可能把工作放在构建阶段

重构后的技术栈如下：

- **React Router 8 + React 19 + TypeScript**：采用 Framework Mode，所有路由页面均进行静态预渲染；
- **Vite 8**：负责开发和构建；
- **Tailwind CSS 4**：负责样式；
- **content-collections + Zod**：管理文章内容，并在构建前校验 Frontmatter；
- **Pagefind**：生成站内搜索索引；
- **KaTeX**：渲染数学公式；
- **Iconify**：在构建阶段生成所需的图标路径，避免引入整套图标字体。

整个项目有一个比较明确的技术方向：尽量把能够提前处理的工作放在构建阶段完成。

因此，构建流程承担了不少工作。除了生成页面，还包括：

- 为约 30 篇文章生成静态页面；
- 生成 Pagefind 搜索索引；
- 生成 RSS、Atom 和 sitemap；
- 为文章生成 OG 分享卡片和分享海报；
- 将 Mermaid 和 PlantUML 图表生成明暗双主题 SVG；
- 为图片生成 WebP、AVIF 等格式的变体；
- 对中文字体进行子集化处理。

这些任务完成后，浏览器只需要加载页面和处理必要的交互，不必再承担大量内容加工工作。

这样的架构有两个比较直观的优势：页面首屏对 JavaScript 的依赖很低，静态资源也能直接通过 CDN 分发。整个站点不需要运行时服务端，部署和维护都简单了不少。

::github{repo="heyelio/heyelio.github.io"}

## 三、让 AI 更可靠的五个做法

这次重构中，AI 承担了大量编码工作。我逐渐发现，影响开发效率的一个重要因素，是能否给 AI 提供足够明确的参考，以及能否及时发现实现中的问题。

下面是我在项目里实际采用的几种做法。

### 1. 尽可能提供真实的参考源码

比如，要实现一个毛玻璃导航栏，只告诉 AI「做一个带毛玻璃效果的导航栏」，它可能会给出很多不同的实现方案。

但如果直接提供参考项目中的 DOM 结构、CSS 变量和组件源码，AI 就有了明确的实现依据。包括 \`backdrop-filter\` 的参数、背景透明度、层级关系等细节，都可以按照现有实现进行还原。

我的做法是先让 AI 对参考项目进行逐文件梳理，整理出页面、组件、样式和功能清单，再根据清单逐项实现。

这样也能减少遗漏：有些功能并不直接出现在页面上，却可能藏在独立的组件或工具文件中。

### 2. 用自动化门禁检查代码

开发过程中，我为项目配置了一套检查流程：

\`\`\`bash
pnpm typecheck   # TypeScript 类型检查
pnpm lint        # ESLint / Stylelint / remark
pnpm test        # Vitest 单元测试
pnpm build       # 静态构建
pnpm check:html  # HTML 有效性检查
pnpm check:size  # 产物体积检查
pnpm knip        # 未引用文件与依赖检查
pnpm spell       # 拼写检查
\`\`\`

这些检查都会在提交前执行。

相比于反复提醒 AI「记得检查一下代码」，自动化脚本能提供更明确的反馈。类型错误、测试失败、HTML 结构问题都会以具体信息呈现，AI 可以根据报错继续修复。

同时，这些检查也不依赖 AI 自己判断实现是否正确，能够避免一些看起来合理、实际上存在问题的代码进入后续开发阶段。

### 3. 把重要决策记录下来

项目中有不少技术决策，例如为什么选择某种路由组织方式、为什么不使用 Service Worker，以及某些功能为什么采用构建期处理。

这些内容我都会记录在 ADR（架构决策记录）和变更日志中。

原因很简单：不同开发会话之间，AI 不一定能保留之前的讨论内容。如果没有文档，下次继续开发时，它可能重新提出已经讨论过甚至已经否决的方案。

有了这些记录，AI 就可以先阅读项目文档，了解当前架构、已有约定和历史决策，再开始修改代码。

### 4. 一次只处理一类问题

视觉调整尤其需要注意这一点。

例如，一个页面的布局出现问题，可能同时涉及 DOM 结构、CSS 布局和组件之间的层级关系。如果让 AI 一次性全部修改，很难判断最终效果究竟由哪个改动带来。

因此，我通常会先确认问题属于哪一层，再安排对应的修改。

需要调整布局时先处理结构，需要调整视觉表现时再修改样式。每次修改后都对照截图检查，避免在原有问题上不断叠加新的补丁。

### 5. 视觉效果由人来验收

AI 能够理解 CSS 属性，也能按照描述实现动画和布局，但它对视觉效果的判断仍然不够稳定。

例如，某个渐变是否协调、卡片放在侧栏是否合适、页面整体的留白是否舒服，这些问题很难完全通过文字描述清楚。

所以我会直接对照 Firefly 官方站点的截图，指出具体差异，再让 AI 调整。

在这个过程中，AI 负责实现，我负责判断结果是否符合预期。尤其是一些细微的视觉问题，往往需要经过多轮截图对比才能调整到满意的状态。

## 四、重构过程中遇到的一些问题

开发过程中也遇到了不少比较具体的问题。有些和 React 或 CSS 本身有关，有些则是浏览器和静态托管环境带来的行为差异。

这里记录几个印象比较深的案例。

**静态站点需要通配符兜底路由。**

最初只注册了一个 \`/404\` 路由，认为这样就能处理不存在的页面。但在静态托管环境中，直接访问未知地址时，客户端 hydration 可能因为找不到对应页面而失败。

后来改用通配符路由接管未知路径，统一渲染 404 页面，才解决了这个问题。

**标准滚动条属性和 \`::-webkit-scrollbar\` 不能随意混用。**

开发过程中发现，同时声明标准滚动条属性和 \`::-webkit-scrollbar\` 伪元素规则时，Chromium 和 Safari 会出现样式不符合预期的情况，部分规则甚至会被忽略。

最终采用了区分浏览器的处理方式：标准属性主要用于 Firefox，其他浏览器使用 WebKit 伪元素控制样式。

**带有 \`transform\` 的祖先元素会影响固定定位和毛玻璃效果。**

移动端菜单曾经出现过 \`backdrop-filter\` 效果不稳定的问题。

排查后发现，菜单所在的祖先元素使用了 \`transform\` 动画，影响了子元素的固定定位和背景采样。

最终将浮层移动到更合适的层级，避开受变换影响的容器，问题才得到解决。

**CSS 框架的 scoped 样式可能影响伪元素。**

有一处毛玻璃背景依赖 \`::before\` 伪元素实现，但在经过 scoped 样式处理后，相关规则没有按预期生效。

后来将伪元素改成实际的 DOM 节点，样式就恢复正常了。

**提交信息也需要明确规范。**

项目配置了 Git Hooks，对提交信息的格式和长度进行检查。AI 生成的提交说明有时比较冗长，容易超过限制，导致提交失败。

把提交规范写入项目文档，并在开发任务中明确要求，之后就很少再遇到这个问题。

这些问题单独看都不复杂，但如果缺少记录，同样的问题很可能在后续开发中再次出现。

## 五、通过工程约束保证项目质量

AI 参与编写的代码数量越多，越需要一套稳定的检查机制。

这次重构中，我主要从三个方面控制项目质量。

**第一，使用 TypeScript 和 Schema 校验内容。**

文章等内容文件会在构建前经过 Zod 校验。例如，文章缺少 \`coverAlt\`，或者系列文章缺少 \`seriesOrder\`，都会直接导致构建失败。

这样可以尽早发现内容数据的问题，不必等到页面上线后才发现某个字段没有正确显示。

**第二，通过测试和自动化门禁控制回归风险。**

项目使用 Vitest 覆盖路由数据、搜索、加密和分享图生成等容易出现回归问题的部分。

同时，类型检查、代码规范、拼写检查、死代码检查和产物体积检查也都纳入了门禁流程。

任何一项检查失败，都需要先处理问题，再继续交付。

**第三，让可选功能保持独立。**

评论、统计、看板娘和外部收藏页等功能都设计成了可选配置，默认关闭。

这些功能是否启用由统一配置控制。关闭时，相关组件和资源会在构建阶段被裁剪，避免给最终页面增加不必要的客户端开销。

整个流程可以概括为：

\`\`\`text
可选功能默认关闭
    ↓
构建阶段根据配置裁剪资源
    ↓
未启用时不产生额外客户端开销
    ↓
需要时修改配置即可开启
\`\`\`

这套设计也让后续扩展更加方便。即使暂时不需要某个功能，也不必为了它额外维护一套运行时逻辑。

## 六、这次重构让我重新认识了 AI 的能力边界

经过这次项目实践，我对 AI 在软件开发中的适用场景有了更清晰的认识。

在有明确参考和验收标准的任务中，AI 的效率优势非常明显。

例如，将现有 DOM 结构迁移到另一个框架、补齐多语言文案、按照清单逐个还原组件，以及根据测试报错修复问题。这些任务通常有比较明确的输入和输出，工作量不小，但需要人工做出的判断相对有限。

遇到需要审美判断或技术取舍的任务时，情况就不一样了。

一个间距是否协调、一段文案是否啰嗦、某个抽象是否值得引入，这些问题往往没有唯一答案。AI 可以提供方案，但最终效果仍然需要结合项目实际情况判断。

因此，在这次重构中，我把 AI 主要放在实现环节，由自己负责需求边界、技术决策和最终验收。自动化测试与工程门禁则负责检查那些能够明确判断对错的部分。

这套分工让我能够把更多时间放在整体设计和细节打磨上，也减少了大量重复性的编码工作。

## 七、写在最后

这次博客重构让我最大的感受，是 AI 已经能够承担相当大一部分实际工程开发工作，但前提是项目本身有足够清晰的约定和检查机制。

从 Astro 迁移到 React Router，涉及的不只是页面组件的改写，还包括内容管理、静态构建、资源优化、自动化测试和部署流程。整个过程如果缺少明确的技术边界，很容易在不断修改中积累问题。

现在回头看，类型定义、Schema、测试、自动化门禁、ADR 和变更日志，这些看起来比较传统的工程实践，在 AI 参与开发的项目里依然很有价值。

它们让项目的实现过程更容易追踪，也让后续开发能够建立在已有成果之上。`,slug:`ai-rebuilt-blog`,path:`/posts/ai-rebuilt-blog/`,wordCount:4793,readingMinutes:18,toc:[{depth:2,slug:`一开始之前先明确重构范围`,text:`一、开始之前，先明确重构范围`},{depth:2,slug:`二技术选型尽可能把工作放在构建阶段`,text:`二、技术选型：尽可能把工作放在构建阶段`},{depth:2,slug:`三让-ai-更可靠的五个做法`,text:`三、让 AI 更可靠的五个做法`},{depth:3,slug:`h-1-尽可能提供真实的参考源码`,text:`1. 尽可能提供真实的参考源码`},{depth:3,slug:`h-2-用自动化门禁检查代码`,text:`2. 用自动化门禁检查代码`},{depth:3,slug:`h-3-把重要决策记录下来`,text:`3. 把重要决策记录下来`},{depth:3,slug:`h-4-一次只处理一类问题`,text:`4. 一次只处理一类问题`},{depth:3,slug:`h-5-视觉效果由人来验收`,text:`5. 视觉效果由人来验收`},{depth:2,slug:`四重构过程中遇到的一些问题`,text:`四、重构过程中遇到的一些问题`},{depth:2,slug:`五通过工程约束保证项目质量`,text:`五、通过工程约束保证项目质量`},{depth:2,slug:`六这次重构让我重新认识了-ai-的能力边界`,text:`六、这次重构让我重新认识了 AI 的能力边界`},{depth:2,slug:`七写在最后`,text:`七、写在最后`}],protected:!1,passwordHint:``,sourcePath:`ai-rebuilt-blog/index.md`},{title:`桥接模式：把抽象与实现拆开`,description:`桥接模式是一种结构型设计模式，可将一个大类或一系列紧密相关的类拆分为抽象和实现两个独立的层次结构，从而能在开发时分别使用。`,publishedAt:`2023-04-04T08:15:00+08:00`,updatedAt:`2023-04-04T08:15:00+08:00`,tags:[`设计模式`,`结构型模式`,`桥接模式`],category:`设计模式`,series:`设计模式`,seriesOrder:8,pinned:!1,draft:!1,cover:`/posts/bridge-pattern/cover.webp`,coverAlt:`桥接模式封面`,content:`**桥接模式**是一种结构型设计模式，可将一个大类或一系列紧密相关的类拆分为**抽象**和**实现**两个独立的**层次结构**，从而能在开发时分别使用。

**层次结构：**

- **功能层次：** 子类添加父类没有的功能，按功能划分子类，属于桥接模式的**抽象**。
- **实现层次：** 子类实现父类的方法，按实现划分子类，属于桥接模式的**实现**。

## 为什么要使用？

**桥接模式的对象职责：**

**将一个大类或一系列紧密相关的类拆分为抽象和实现两个独立的层次结构。** 或者说把一个类按功能和实现两个维度划分，用组合关系关联起来。

在现实世界，许多事物都有两个或以上维度的变化。那么当我们将它们抽象成对象的时候，就需要注意处理其中的变化。

例如几何体这个抽象类，如果我们只按形状划分的话，可以分为正方体⬜、球体⚪等。但是如果后期需要拓展几何体，给它添加颜色。那么又要在正方体和球体下各自添加子类红色🟥🔴、绿色🟩🟢等。层级变深，代码也变臃肿。这时桥接模式🌉就可以派上它的作用。

我们将几何体分为形状和颜色两个维度，再用组合关系连接起来。那么它们就可以互相组合。降低了继承关系带来的强耦合。未来要新增形状或颜色只需要在各自抽象类或接口中继承或实现即可。类似的例子还有很多，如不同平台的 \`GUI\` 层。抽象部分为 \`GUI\` 层可以随意添加功能，实现部分为操作系统的 \`API\` 可以更换各种平台。

但是使用桥接模式对于我们的抽象能力有更大的要求，要求我们能明确类的维度。从整体结构设计类。

## 模式结构

- **抽象部分**（Abstraction）定义的一种抽象分类。提供高层控制逻辑，依赖于完成底层实际工作的实现对象。<span style="color:gray">抽象部分可以列出和实现部分一样的方法，但是抽象部分通常声明一些复杂行为，这些行为依赖于多种由实现部分声明的原语操作。</span>

- **实现部分**（Implementation）定义抽象实体中具备的多种行为。为所有具体实现声明通用接口。抽象部分仅能通过在这里声明的方法与实现对象交互。

- **精确抽象**（Refined Abstraction）继承抽象实体的子类实体。提供控制逻辑的变体。与其父类一样，它们通过通用实现接口与不同的实现进行交互。
- **具体实现**（Concrete Implementations）实现抽象行为的具体算法。

通常情况下，**客户端** （Client） 仅关心如何与抽象部分合作。但是，客户端需要将抽象对象与一个实现对象连接起来。

**桥接模式的类图：**

![桥接模式的类图](./170468a7aa5c1a7ceebd07353354c223.webp)

桥接模式使得 \`RefinedAbstraction\` 和 \`ConcreteImplementations\` 可以自由组合，从而降低了代码的耦合度。

## 模式实现

该示例使用桥接模式将几何体分为形状和颜色两个维度。将形状作为几何体的主要特征，让不同子类扩展不同的方法（即添加父类没有的功能）；将获取颜色的行为抽离成一个新的接口，交由子类去实现（即实现父类的方法）。

### 示例程序的类图

![示例程序的类图](./5d19ba9e59b510579c4c0ce5b31b4f56.webp)

### 代码实现

#### 抽象部分

\`\`\`java
package example.bridge;

/** 几何体抽象部分 */
public abstract class Geometry {
    /** 几何体颜色-组合关系 */
    private Color color;

    public Geometry(Color color) {
        this.color = color;
    }

    /** 打印几何体 */
    public void print() {
        System.out.println("这是一个" + color.getColor() + "的" + getShape());
    }

    /**
     - 获取几何体形状
     - @return 几何体形状
     */
    public abstract String getShape();
}
\`\`\`

#### 实现部分

\`\`\`java
package example.bridge;

/** 颜色实现部分 */
public interface Color {
    /**
     - 获取颜色
     - @return 颜色字符串
     */
    String getColor();
}
\`\`\`

#### 精准抽象

\`\`\`java
package example.refined;

import example.bridge.Color;
import example.bridge.Geometry;

/** 正方体精准抽象 */
public class Cube extends Geometry {
    public Cube(Color color) {
        super(color);
    }

    /**
     - 获取几何体形状
     - @return 几何体形状
     */
    @Override
    public String getShape() {
        return "立方体";
    }

    /** 搭积木-立方体特有方法 */
    public void buildBlocks() {
        System.out.println("立方体可以搭积木！");
    }
}
\`\`\`

\`\`\`java
package example.refined;

import example.bridge.Color;
import example.bridge.Geometry;

/** 球体精准抽象 */
public class Sphere extends Geometry {
    public Sphere(Color color) {
        super(color);
    }

    /**
     - 获取几何体形状
     - @return 几何体形状
     */
    @Override
    public String getShape() {
        return "球体";
    }

    /** 滚动-球体特有方法 */
    public void roll() {
        System.out.println("球体可以滚动！");
    }
}
\`\`\`

#### 具体抽象

\`\`\`java
package example.impl;

import example.bridge.Color;

/** 红色具体实现 */
public class Red implements Color {
    /**
     - 获取颜色
     - @return 颜色字符串
     */
    @Override
    public String getColor() {
        return "红色";
    }
}
\`\`\`

\`\`\`java
package example.impl;

import example.bridge.Color;

/** 红色具体实现 */
public class Red implements Color {
    /**
     - 获取颜色
     - @return 颜色字符串
     */
    @Override
    public String getColor() {
        return "红色";
    }
}
\`\`\`

### 代码测试

\`\`\`java
import example.bridge.Geometry;
import example.impl.Green;
import example.impl.Red;
import example.refined.Cube;
import example.refined.Sphere;

/** 测试桥接模式 */
public class Test {
    public static void main(String[] args) {
        Red red = new Red();
        Green green = new Green();
        System.out.println("自由组合形状和颜色：");
        Geometry redCube = new Cube(red);
        Geometry redSphere = new Sphere(red);
        Geometry greenCube = new Cube(green);
        Geometry greenSphere = new Sphere(green);
        redCube.print();
        redSphere.print();
        greenCube.print();
        greenSphere.print();

        System.out.println("\\n--------------------- 分割线 ---------------------\\n");

        System.out.println("不同抽象实体功能：");
        Cube cube = new Cube(red);
        Sphere sphere = new Sphere(red);
        cube.buildBlocks();
        sphere.roll();
    }
}
\`\`\`

### 输出结果

\`\`\`text
自由组合形状和颜色：
这是一个红色的立方体
这是一个红色的球体
这是一个绿色的立方体
这是一个绿色的球体

--------------------- 分割线 ---------------------

不同抽象实体功能：
立方体可以搭积木！
球体可以滚动！
\`\`\`

从测试和结果来看，使用桥接模式让类变得更加灵活。

## 常用场景和解决方案

- 拆分或重组一个具有多重功能的庞杂类。桥接模式能让你将它按不同层次划分。
- 多个维度扩展一个类。例如，几何体的形状和颜色维度。
- 如果你需要在运行时切换不同实现方法，可使用桥接模式。
- 需要提供平台独立性的应用程序时。
- 需要在某种统一协议下增加更大组件时。
- 基于消息驱动的场景，例如，手机短信、微信消息等。
- 实现上传到云存储时，将操作和执行器分开，即基本上传操作和云存储服务商执行器分开。

## 模式的优缺点

| 优点                                                               | 缺点                                         |
| :----------------------------------------------------------------- | :------------------------------------------- |
| 你可以创建与平台无关的类和程序。                                   | 对高内聚的类使用该模式可能会让代码更加复杂。 |
| 客户端代码仅与高层抽象部分进行互动，不会接触到平台的详细信息。     |                                              |
| _开闭原则_。你可以新增抽象部分和实现部分，且它们之间不会相互影响。 |                                              |
| _单一职责原则_。抽象部分专注于处理高层逻辑，实现部分处理平台细节。 |                                              |

### 使用桥接模式的优势

- 分离抽象实体与行为，可以提升各种维度的演化效率。
- 用组合关系替代了多重继承，提高了代码结构的演化灵活性。
- 符合表达原则，提升代码的可理解性。

### 使用桥接模式的劣势

- 增加了维护成本。
- 导致性能下降。
- 增加设计难度。

## 拓展知识

- 桥接模式通常会于开发前期进行设计，使你能够将程序的各个部分独立开来以便开发。另一方面，适配器模式通常在已有程序中使用， 让相互不兼容的类能很好地合作。
- 你可以结合使用生成器模式和桥接模式：_主管_类负责抽象工作，各种不同的_生成器_负责_实现_工作。

🔙 [设计模式](/posts/design-patterns/)

**📌最后：希望本文能够给您提供帮助，文章中有不懂或不正确的地方，请在下方评论区💬留言！**

**🔗参考文献：**

🌐 [设计模式 --refactoringguru](https://refactoringguru.cn/design-patterns#intro-patterns)

📺 [bilibili-趣学设计模式；黄靖锋. --拉勾教育](https://www.bilibili.com/video/BV1hY411Y7zR/?p=1&vd_source=a9a236c4d6e5c5350c70b71ee0727b8c)

📖 图解设计模式 /（日）结城浩著；杨文轩译. --北京：人民邮电出版社，2017.1`,slug:`bridge-pattern`,path:`/posts/bridge-pattern/`,wordCount:4650,readingMinutes:8,toc:[{depth:2,slug:`为什么要使用`,text:`为什么要使用？`},{depth:2,slug:`模式结构`,text:`模式结构`},{depth:2,slug:`模式实现`,text:`模式实现`},{depth:3,slug:`示例程序的类图`,text:`示例程序的类图`},{depth:3,slug:`代码实现`,text:`代码实现`},{depth:4,slug:`抽象部分`,text:`抽象部分`},{depth:4,slug:`实现部分`,text:`实现部分`},{depth:4,slug:`精准抽象`,text:`精准抽象`},{depth:4,slug:`具体抽象`,text:`具体抽象`},{depth:3,slug:`代码测试`,text:`代码测试`},{depth:3,slug:`输出结果`,text:`输出结果`},{depth:2,slug:`常用场景和解决方案`,text:`常用场景和解决方案`},{depth:2,slug:`模式的优缺点`,text:`模式的优缺点`},{depth:3,slug:`使用桥接模式的优势`,text:`使用桥接模式的优势`},{depth:3,slug:`使用桥接模式的劣势`,text:`使用桥接模式的劣势`},{depth:2,slug:`拓展知识`,text:`拓展知识`}],protected:!1,passwordHint:``,sourcePath:`bridge-pattern/index.md`},{title:`生成器模式：分步骤造出复杂对象`,description:`生成器模式也叫“建造者模式”是一种创建型设计模式，使你能够分步骤创建复杂对象。 该模式允许你使用相同的创建代码生成不同类型和形式的对象。`,publishedAt:`2023-04-03T13:55:00+08:00`,updatedAt:`2023-04-03T13:55:00+08:00`,tags:[`设计模式`,`创建型模式`,`生成器模式`],category:`设计模式`,series:`设计模式`,seriesOrder:4,pinned:!1,draft:!1,cover:`/posts/builder-pattern/cover.webp`,coverAlt:`生成器模式封面`,content:`**生成器模式**也叫“建造者模式”是一种创建型设计模式， 使你能够分步骤创建复杂对象。 该模式允许你使用相同的创建代码生成不同类型和形式的对象。

## 为什么要使用？

**生成器模式的对象职责：**

- **分步骤创建复杂对象。** 分阶段、分步骤的方法更适合多次运算结果类创建场景。在实际开发中，并非所有参数都能一次性准备好的，需要通过其他运算后才能得出。这时我们有 3 种方法可以实现：

  1. **构造函数：** 如果参数很多，并且有许多不必要生成的参数，那么我们就需要根据各种情况，编写各种构造函数，或者在全参构造函数中为那些不必要的参数传值。代码臃肿、多余。

  2. **Setter 方法：** 如果使用 \`Setter\` 方法，就需要用无参构造先创建对象，再一个个 \`Setter\` 属性，如果属性过多，而且要生成的对象多，也是很麻烦、冗余。

  3. **生成器模式：** 生成器模式可以帮助你分步骤的创建一个复杂对象，虽然生成器模式本身会占用一定的资源。但如果要创建很多对象或创建的对象很复杂，这点资源也可以忽略不计。例如创建一个学生对象：

     \`\`\`java
     Student student = new Student.Builder().name("张三").age(18).sex("男").build();
     \`\`\`

- **使用相同的创建代码生成不同类型和形式的对象。** 不需要关系特定类型的建造者的具体算法实现。例如很多框架都会使用生成器模式去创建对象，我们在使用这些框架去创建某些对象时，不需要关注其内部逻辑，只需要着重关注它能给我们带来什么功能，这样能提高开发效率。

## 模式结构

- **生成器** （Builder） 接口声明在所有类型生成器中通用的产品构造步骤。
- **具体生成器** （Concrete Builders） 提供构造过程的不同实现。 具体生成器也可以构造不遵循通用接口的产品。
- **产品** （Products） 是最终生成的对象。 由不同生成器构造的产品无需属于同一类层次结构或接口。
- **主管** （Director） 类定义调用构造步骤的顺序， 这样你就可以创建和复用特定的产品配置。
- **客户端** （Client） 必须将某个生成器对象与主管类关联。 一般情况下， 你只需通过主管类构造函数的参数进行一次性关联即可。 此后主管类就能使用生成器对象完成后续所有的构造任务。 但在客户端将生成器对象传递给主管类制造方法时还有另一种方式。 在这种情况下， 你在使用主管类生产产品时每次都可以使用不同的生成器。

**生成器模式的类图：**

![生成器模式的类图](./019e689544409e7eafba4ced61995e60.webp)

**生成器模式的顺序图：**

![生成器模式的顺序图](./9bdcb64df359e7bb14fc0cb1b1410395.webp)

## 模式实现

该示例通过使用生成器模式分别创建复杂对象 HTML 页面和 Markdown 文档。

### 示例程序的类图

![示例程序的类图](./789909bfb22d51447387a2db90919158.webp)

### 代码实现

#### 文档生成器 Builder

\`\`\`java
/** 生成器接口，统一文档编写接口 */
public interface Builder {
    /**
     - 创建标题
     - @param title 标题内容
     */
    void makeTitle(String title);

    /**
     - 创建无序列表
     - @param items 列表项
     */
    void makeItems(String[] items);

    /**
     - 创建内容
     - @param content 内容
     */
    void makeContent(String content);
}
\`\`\`

#### HTML生成器 HTMLBuilder

\`\`\`java
/** HTML文档实现类 */
public class HTMLBuilder implements Builder {
    private String html = "";
    /**
     - 创建标题
     - @param title 标题内容
     */
    @Override
    public void makeTitle(String title) {
        html += "<html><head><title>" + title + "</title></head></html>" + "\\n";
    }

    /**
     - 创建无序列表
     - @param items 列表项
     */
    @Override
    public void makeItems(String[] items) {
        html += "<ul>" + "\\n";
        for (String item : items) {
            html += "<li>" + item + "</li>" + "\\n";
        }
        html += "</ul>" + "\\n";
    }

    /**
     - 创建内容
     - @param content 内容
     */
    @Override
    public void makeContent(String content) {
        html += "<p>" + content + "</p>" + "\\n";
    }

    /**
     - 获取HTML文档
     - @return HTML文档字符串
     */
    public String getResult() {
        return html;
    }
}
\`\`\`

#### Markdown文档生成器 MarkdownBuilder

\`\`\`java
/** markdown文档实现类 */
public class MarkdownBuilder implements Builder {
    private String markdown = "";
    /**
     - 创建标题
     - @param title 标题内容
     */
    @Override
    public void makeTitle(String title) {
        markdown += "## " + title + "\\n";
    }

    /**
     - 创建无序列表
     - @param items 列表项
     */
    @Override
    public void makeItems(String[] items) {
        for (String item : items) {
            markdown += "* " + item + "\\n";
        }
    }

    /**
     - 创建内容
     - @param content 内容
     */
    @Override
    public void makeContent(String content) {
        markdown += content + "\\n";
    }

    /**
     - 获取markdown文档
     - @return markdown文档字符串
     */
    public String getResult() {
        return markdown;
    }
}
\`\`\`

#### 编写文档主管 Director

\`\`\`java
/** 主管类，决定生成的文档类型 */
public class Director {
    /** 生成器 */
    private Builder builder;

    /** 注入生成器 */
    public Director(Builder builder) {
        this.builder = builder;
    }

    /** 创建一个文档 */
    public void construct() {
        builder.makeTitle("这是一个标题");
        String[] items = {"无序列表1", "无序列表2", "无序列表3"};
        builder.makeItems(items);
        builder.makeContent("这是一段内容！");
    }
}
\`\`\`

### 代码测试

\`\`\`java
/** 测试生成器模式 */
public class Test {
    public static void main(String[] args) {
        System.out.println("用HTMLBuilder生成文档");
        HTMLBuilder htmlBuilder = new HTMLBuilder();
        Director director1 = new Director(htmlBuilder);
        director1.construct();
        System.out.println(htmlBuilder.getResult());

        System.out.println("----------------- 分割线 -----------------\\n");

        System.out.println("用MarkdownBuilder生成文档");
        MarkdownBuilder markdownBuilder = new MarkdownBuilder();
        Director director2 = new Director(markdownBuilder);
        director2.construct();
        System.out.println(markdownBuilder.getResult());
    }
}
\`\`\`

### 输出结果

\`\`\`markdown
用HTMLBuilder生成文档
<html><head><title>这是一个标题</title></head></html>
<ul>
<li>无序列表1</li>
<li>无序列表2</li>
<li>无序列表3</li>
</ul>
<p>这是一段内容！</p>

----------------- 分割线 -----------------

用MarkdownBuilder生成文档

## 这是一个标题

- 无序列表1
- 无序列表2
- 无序列表3
  这是一段内容！
\`\`\`

我们也可以直接跳过 \`Director\`，直接使用 \`Builder\`，或者在 \`Director\` 里编写多个方法，注入不同 \`Builder\`。

## 常用场景和解决方案

- 需要生成的对象包含多个成员属性，使用生成器模式可以避免“重叠构造函数”和“繁琐 Setter”的出现。
- 需要生成的对象的属性相互依赖，需要指定其生成顺序。
- 对象的创建过程独立于创建该对象的类。
- 需要隔离复杂对象的创建和使用，并使用相同的创建过程可以创建不同的产品。

## 模式的优缺点

| 优点                                                              | 缺点                                                        |
| :---------------------------------------------------------------- | :---------------------------------------------------------- |
| 你可以分步创建对象， 暂缓创建步骤或递归运行创建步骤。             | 由于该模式需要新增多个类， 因此代码整体复杂程度会有所增加。 |
| 生成不同形式的产品时， 你可以复用相同的制造代码。                 |                                                             |
| _单一职责原则_。 你可以将复杂构造代码从产品的业务逻辑中分离出来。 |                                                             |

### 使用生成器模式的优势

- 分离创建与使用，使用方不需要知道类的内部实现逻辑细节，通过统一接口调用，可以组合出不同类型的对象。
- 满足开闭原则，每一个生成器都相对独立，可以很容易替换或新增，提高代码的可拓展性。
- 自由地组合对象的创建过程，使用者可以使用少量代码灵活创建满足自己需求的对象。

### 使用生成器模式的劣势

- 使用范围有限。
- 容易引起超大的类。
- 增加代码行数。

## 拓展知识

- 生成器重点关注如何分步生成复杂对象。 抽象工厂专门用于生产一系列相关对象。 _抽象工厂_会马上返回产品， _生成器_则允许你在获取产品前执行一些额外构造步骤。
- 你可以结合使用生成器和桥接模式：_主管_类负责抽象工作，各种不同的_生成器_负责_实现_工作。
- 抽象工厂、 生成器和原型都可以用单例模式来实现。
- 设计时要谨记“只有不知道子类才能替换”。

🔙 [设计模式](/posts/design-patterns/)

**📌最后：希望本文能够给您提供帮助，文章中有不懂或不正确的地方，请在下方评论区💬留言！**

**🔗参考文献：**

🌐 [设计模式 --refactoringguru](https://refactoringguru.cn/design-patterns#intro-patterns)

📺 [bilibili-趣学设计模式；黄靖锋. --拉勾教育](https://www.bilibili.com/video/BV1hY411Y7zR/?p=1&vd_source=a9a236c4d6e5c5350c70b71ee0727b8c)

📖 图解设计模式 /（日）结城浩著；杨文轩译. --北京：人民邮电出版社，2017.1`,slug:`builder-pattern`,path:`/posts/builder-pattern/`,wordCount:4870,readingMinutes:8,toc:[{depth:2,slug:`为什么要使用`,text:`为什么要使用？`},{depth:2,slug:`模式结构`,text:`模式结构`},{depth:2,slug:`模式实现`,text:`模式实现`},{depth:3,slug:`示例程序的类图`,text:`示例程序的类图`},{depth:3,slug:`代码实现`,text:`代码实现`},{depth:4,slug:`文档生成器-builder`,text:`文档生成器 Builder`},{depth:4,slug:`html生成器-htmlbuilder`,text:`HTML生成器 HTMLBuilder`},{depth:4,slug:`markdown文档生成器-markdownbuilder`,text:`Markdown文档生成器 MarkdownBuilder`},{depth:4,slug:`编写文档主管-director`,text:`编写文档主管 Director`},{depth:3,slug:`代码测试`,text:`代码测试`},{depth:3,slug:`输出结果`,text:`输出结果`},{depth:2,slug:`常用场景和解决方案`,text:`常用场景和解决方案`},{depth:2,slug:`模式的优缺点`,text:`模式的优缺点`},{depth:3,slug:`使用生成器模式的优势`,text:`使用生成器模式的优势`},{depth:3,slug:`使用生成器模式的劣势`,text:`使用生成器模式的劣势`},{depth:2,slug:`拓展知识`,text:`拓展知识`}],protected:!1,passwordHint:``,sourcePath:`builder-pattern/index.md`},{title:`责任链模式：让请求沿链传递`,description:`责任链模式是一种行为设计模式，允许你将请求沿着处理者链进行发送。收到请求后，每个处理者均可对请求进行处理，或将其传递给链上的下个处理者。简单来说就是通过构建一个处理流水线来对一次请求进行多次的处理。`,publishedAt:`2023-04-04T10:22:00+08:00`,updatedAt:`2023-04-04T10:22:00+08:00`,tags:[`设计模式`,`行为型模式`,`责任链模式`],category:`设计模式`,series:`设计模式`,seriesOrder:14,pinned:!1,draft:!1,cover:`/posts/chain-of-responsibility-pattern/cover.webp`,coverAlt:`责任链模式封面`,content:`**责任链模式**是一种行为设计模式，允许你将请求沿着处理者链进行发送。收到请求后，每个处理者均可对请求进行处理，或将其传递给链上的下个处理者。简单来说就是通过构建一个处理流水线来对一次请求进行多次的处理。

## 为什么要使用？

**责任链模式的对象职责：**

**通过构建一个处理流水线来对一次请求进行多次的处理，每个处理者均可对请求进行处理，或将其传递给链上的下个处理者。**

👉 解耦使用者和后台庞大的流程化处理。

👉 为了动态更换流程处理中的处理对象。

👉 为了处理一些需要递归遍历的对象列表。

🎈 责任链模式弱化了发出请求的人和处理请求的人之间的关系，提高了组件的复用性，让每个处理者专注于自己的工作。通过动态地重组责任链也能够让程序变得更加灵活。

## 模式结构

- **处理者**（Handler）声明了所有具体处理者的通用接口。该接口通常仅包含单个方法用于请求处理，但有时其还会包含一个设置链上下个处理者的方法。
- **基础处理者**（Base Handler）是一个可选的类，你可以将所有处理者共用的样本代码放置在其中。<span style="color:gray">通常情况下，该类中定义了一个保存对于下个处理者引用的成员变量。客户端可通过将处理者传递给上个处理者的构造函数或设定方法来创建链。该类还可以实现默认的处理行为：确定下个处理者存在后再将请求传递给它。</span>
- **具体处理者**（Concrete Handlers）包含处理请求的实际代码。每个处理者接收到请求后，都必须决定是否进行处理，以及是否沿着链传递请求。<span style="color:gray">处理者通常是独立且不可变的，需要通过构造函数一次性地获得所有必要地数据。</span>
- **客户端**（Client）可根据程序逻辑一次性或者动态地生成链。值得注意的是，请求可发送给链上的任意一个处理者，而非必须是第一个处理者。

**责任链模式的类图：**

![责任链模式的类图](./fdac606a637ad2eb22d4ba89bc5278a3.webp)

## 模式实现

该示例使用责任链模式实现了处理者根据问题编号处理问题。具体类信息如下：

| 责任链顺序 | 类名             | 职责                          |
| :--------- | :--------------- | :---------------------------- |
| 1          | \`NoSupport\`      | 永远不解决问题                |
| 2          | \`LimitSupport\`   | 只解决编号小于 limit 值的问题 |
| 3          | \`SpecialSupport\` | 只解决指定编号的问题          |
| 4          | \`OddSupport\`     | 只解决奇数编号的问题          |

通过处理者的 \`setNext\` 方法设置责任链，使用其 \`support\` 方法解决问题。当前处理者能够解决问题时，优先当前处理者解决；如果无法解决则交由下一位处理者解决；如果没有下一位处理者则说明问题无法解决。

### 示例程序的类图

![示例程序的类图](./148a0f66a5c81882a9ab1222979e8f62.webp)

### 代码实现

#### 基础处理者

\`\`\`java
package example;

/** 基础处理者 */
public abstract class Support {
    /** 处理者名称 */
    private String name;
    /** 下一个处理者 */
    private Support next;

    public Support(String name) {
        this.name = name;
    }

    /**
     - 设置下一个处理者，链式调用
     - @param next 下一个处理者
     */
    public Support setNext(Support next) {
        this.next = next;
        return next;
    }

    /**
     - 解决问题步骤
     - 1. 自身可以解决
     - 2. 存在下一个处理者，交给下一个处理者解决
     - 3. 不存在下一个处理者，无法解决
     - @param trouble 问题
     */
    public final void support(Trouble trouble) {
        if (resolve(trouble)) {
            done(trouble);
        } else if (next != null) {
            next.support(trouble);
        } else {
            fail(trouble);
        }
    }

    /**
     - 成功解决
     - @param trouble 问题
     */
    protected void done(Trouble trouble) {
        System.out.println("[" + trouble.getNumber() + "]问题已解决！处理人：{" + name + "}");
    }

    /**
     - 无法解决
     - @param trouble 问题
     */
    protected void fail(Trouble trouble) {
        System.out.println("[" + trouble.getNumber() + "]问题未解决！");
    }

    /**
     - 能否解决问题，在解决问题后访问是否成功解决
     - @param trouble 问题
     - @return true可以解决
     */
    protected abstract boolean resolve(Trouble trouble);
}
\`\`\`

#### 具体处理者

\`\`\`java
package example;

/** 永远不解决问题的处理者 */
public class NoSupport extends Support {
    public NoSupport(String name) {
        super(name);
    }

    /**
     - 无法解决任何问题
     - @param trouble 问题
     - @return 永远返回false
     */
    @Override
    protected boolean resolve(Trouble trouble) {
        return false;
    }
}
\`\`\`

\`\`\`java
package example;

/** 只解决编号小于limit值问题的处理者 */
public class LimitSupport extends Support {
    private int limit;

    public LimitSupport(String name, int limit) {
        super(name);
        this.limit = limit;
    }

    /**
     - 只解决编号小于limit值的问题
     - @param trouble 问题
     - @return true可以解决
     */
    @Override
    protected boolean resolve(Trouble trouble) {
        if (trouble.getNumber() < limit) {
            return true;
        }
        return false;
    }
}
\`\`\`

\`\`\`java
package example;

/** 只解决指定编号问题的处理者 */
public class SpecialSupport extends Support {
    private int number;

    public SpecialSupport(String name, int number) {
        super(name);
        this.number = number;
    }

    /**
     - 只解决指定编号的问题
     - @param trouble 问题
     - @return true可以解决
     */
    @Override
    protected boolean resolve(Trouble trouble) {
        if (trouble.getNumber() == number) {
            return true;
        }
        return false;
    }
}
\`\`\`

\`\`\`java
package example;

/** 只解决奇数编号问题的处理者 */
public class OddSupport extends Support {
    public OddSupport(String name) {
        super(name);
    }

    /**
     - 只解决奇数编号的问题
     - @param trouble 问题
     - @return true可以解决
     */
    @Override
    protected boolean resolve(Trouble trouble) {
        if (trouble.getNumber() % 2 == 1) {
            return true;
        }
        return false;
    }
}
\`\`\`

#### 其他类

\`\`\`java
package example;

/** 其他类，表示发生的问题 */
public class Trouble {
    /** 问题编号 */
    private int number;

    public Trouble(int number) {
        this.number = number;
    }

    public int getNumber() {
        return number;
    }
}
\`\`\`

### 代码测试

\`\`\`java
import example.*;

/** 测试责任链模式 */
public class Test {
    public static void main(String[] args) {
        Support zhangsan = new NoSupport("张三");
        Support lisi = new LimitSupport("李四（只会解决编号小于20的问题）", 20);
        Support wangwu = new SpecialSupport("王五（只会解决编号为20的问题）", 20);
        Support zhaoliu = new OddSupport("赵六（只会解决奇数编号的问题）");
        // 配置责任链
        zhangsan.setNext(lisi).setNext(wangwu).setNext(zhaoliu);
        System.out.println("责任链的顺序为：张三{NoSupport} --> 李四{LimitSupport} --> 王五{SpecialSupport} --> 赵六{OddSupport}");

        zhangsan.support(new Trouble(15));
        zhangsan.support(new Trouble(20));
        zhangsan.support(new Trouble(21));
        zhangsan.support(new Trouble(22));
    }
}
\`\`\`

### 输出结果

\`\`\`text
责任链的顺序为：张三{NoSupport} --> 李四{LimitSupport} --> 王五{SpecialSupport} --> 赵六{OddSupport}
[15]问题已解决！处理人：{李四（只会解决编号小于20的问题）}
[20]问题已解决！处理人：{王五（只会解决编号为20的问题）}
[21]问题已解决！处理人：{赵六（只会解决奇数编号的问题）}
[22]问题未解决！
\`\`\`

## 常用场景和解决方案

- 在运行时需要动态使用多个关联对象来处理同一次请求时，如请假流程。
- 不想让使用者知道具体的处理逻辑时，如权限校验的登录拦截器。
- 需要动态更换处理对象或处理顺序时。在处理者类中有对引用成员变量的设定方法，你将能动态地插入和移除处理者，或者改变其顺序。
- 当程序需要使用不同方式处理不同种类请求，而且请求类型和顺序预先未知时。该模式能将多个处理者连接成一条链。接收到请求后，它会“询问”每个处理者是否能够对其进行处理。这样所有处理者都有机会来处理请求。

## 模式的优缺点

| 优点                                                           | 缺点                   |
| :------------------------------------------------------------- | :--------------------- |
| 你可以控制请求处理的顺序。                                     | 部分请求可能未被处理。 |
| _单一职责原则_。你可对发起操作和执行操作的类进行解耦。         |                        |
| _开闭原则_。你可以在不更改现有代码的情况下在程序中新增处理者。 |                        |

### 使用责任链模式的优势

- 降低客户端对象与处理链条上对象之间的耦合度。
- 提升系统扩展性。
- 增强了具体处理类的职责独立性。
- 简化了对象之间前后关联处理的复杂性。

### 使用责任链模式的劣势

- 降低性能。
- 调试难度增大。
- 容易出现死锁异常，需要注意维护上下文关系的正确性。

## 拓展知识

- 由于链的动态性，客户端需要准备好处理以下情况：
  - 链中可能只有单个链接。
  - 部分请求可能无法到达链尾。
  - 其他请求可能直到链尾都未被处理。
- 责任链和装饰模式的类结构非常相似。两者都依赖递归组合将需要执行的操作传递给一系列对象。但是，两者有几点重要的不同之处。
  - 在责任链模式中，责任链的管理者可以相互独立地执行一切操作，还可以随时停止传递请求。
  - 在装饰器模式中，各种_装饰_可以在遵循基本接口的情况下扩展对象的行为。此外，装饰无法中断请求的传递。
- 责任链通常和组合模式结合使用。在这种情况下，叶组件接收到请求后，可以将请求沿包含全体父组件的链一直传递至对象树的底部。

- 虽然责任链模式能让程序更加灵活但也会导致处理延迟。在面对需要非常快的处理速度时，责任链模式显然不是个好选择。

🔙 [设计模式](/posts/design-patterns/)

**📌最后：希望本文能够给您提供帮助，文章中有不懂或不正确的地方，请在下方评论区💬留言！**

**🔗参考文献：**

🌐 [设计模式 --refactoringguru](https://refactoringguru.cn/design-patterns#intro-patterns)

📺 [bilibili-趣学设计模式；黄靖锋. --拉勾教育](https://www.bilibili.com/video/BV1hY411Y7zR/?p=1&vd_source=a9a236c4d6e5c5350c70b71ee0727b8c)

📖 图解设计模式 /（日）结城浩著；杨文轩译. --北京：人民邮电出版社，2017.1`,slug:`chain-of-responsibility-pattern`,path:`/posts/chain-of-responsibility-pattern/`,wordCount:5470,readingMinutes:8,toc:[{depth:2,slug:`为什么要使用`,text:`为什么要使用？`},{depth:2,slug:`模式结构`,text:`模式结构`},{depth:2,slug:`模式实现`,text:`模式实现`},{depth:3,slug:`示例程序的类图`,text:`示例程序的类图`},{depth:3,slug:`代码实现`,text:`代码实现`},{depth:4,slug:`基础处理者`,text:`基础处理者`},{depth:4,slug:`具体处理者`,text:`具体处理者`},{depth:4,slug:`其他类`,text:`其他类`},{depth:3,slug:`代码测试`,text:`代码测试`},{depth:3,slug:`输出结果`,text:`输出结果`},{depth:2,slug:`常用场景和解决方案`,text:`常用场景和解决方案`},{depth:2,slug:`模式的优缺点`,text:`模式的优缺点`},{depth:3,slug:`使用责任链模式的优势`,text:`使用责任链模式的优势`},{depth:3,slug:`使用责任链模式的劣势`,text:`使用责任链模式的劣势`},{depth:2,slug:`拓展知识`,text:`拓展知识`}],protected:!1,passwordHint:``,sourcePath:`chain-of-responsibility-pattern/index.md`},{title:`命令模式：把请求封装成对象`,description:`命令模式是一种行为设计模式，它可将请求转换为一个包含与请求相关的所有信息的独立对象。该转换让你能根据不同的请求将方法参数化、延迟请求执行或将其放入队列中，且能实现可撤销操作。`,publishedAt:`2023-04-04T11:11:00+08:00`,updatedAt:`2023-04-04T11:11:00+08:00`,tags:[`设计模式`,`行为型模式`,`命令模式`],category:`设计模式`,series:`设计模式`,seriesOrder:15,pinned:!1,draft:!1,cover:`/posts/command-pattern/cover.webp`,coverAlt:`命令模式封面`,content:`**命令模式**是一种行为设计模式，它可将请求转换为一个包含与请求相关的所有信息的独立对象。该转换让你能根据不同的请求将方法参数化、延迟请求执行或将其放入队列中，且能实现可撤销操作。

命令模式的本质是**对命令进行封装，将发出命令的责任和执行命令的责任分离开。**

## 为什么要使用？

**命令模式的对象职责：**

**将一个请求封装为一个对象，从而可以参数化具体不同请求、队列或日志请求的其他对象，并支持可撤销的操作。** 命令模式是将一组操作封装在对象中而设计的。简单来说就是为了将函数方法封装为对象以方便传输。

👉 只关心具体的命令和动作，不想知道具体的接收者是谁以及如何操作。

🎈 命令模式将发送者与接收者解耦，让发送者只提供命令而不必知道命令到底是如何完成的。

👉 为了方便统计跟踪行为操作。

🎈 使用命令模式能够便携地记录数据的排序、序列化、跟踪、日志记录等操作。在一些需要读取大量数据的场景中，使用命令模式来读取上下文信息，能避免内存溢出的风险。

👉 为了围绕命令的维度来构建功能。

🎈 能够自由组合相关的命令，完成一系列的组合功能；还能避免使用者需要了解大量的代码实现逻辑，起到了隐藏代码逻辑的作用。

❓ 例如，在 Java 中使用 \`GUI\`。对于一个页面内的许多 \`Button\`，它们虽然都是点击，但却包含许多相同或不同的命令操作（打开、关闭 ...）。我们要如何处理这些命令呢？在每个 \`Button\` 所在类中实现？这样会导致代码混乱且难以修改。同时也会出现很多重复代码，如，点击操作往往有对应的快捷键操作，它们实现逻辑一样但所用的 \`Listener\` 却不同。

⁉️ 在面向对象设计中提倡关注点分离。所以在处理图形化这方面的问题时，我们往往是将图形界面和业务逻辑进行分层。一个 \`GUI\` 对象传递一些参数来调用一个业务逻辑对象。这个过程通常被描述为一个对象发送请求给另一个对象。

❗ 在命令模式中，命令对象负责连接不同的 \`GUI\` 和业务逻辑对象。\`GUI\` 对象无需了解业务逻辑对象是否获得了请求，也无需了解其对请求进行处理的方式。\`GUI\` 对象触发命令即可，命令对象会自行处理所有细节工作。（命令的执行操作中通常没有参数，如何将请求的详情发送给接收者呢？可以使用数据对命令进行预先配置，或者让其能够自行获取数据。）

✅ 现在我们再使用 \`Button\` 时，则不需要在类中实现具体的逻辑操作。只需要在 \`Button\` 类中添加一个成员变量来存储对于命令对象的引用，并在点击后执行该命令即可。我们需要为每个可能的操作实现一系列命令类，并且根据 \`Button\` 所需行为将命令和 \`Button\` 连接起来。

## 模式结构

- **发送者**（Sender）——亦称“调用者 （Invoker）”——类负责对请求进行初始化，其中必须包含一个成员变量来存储对于命令对象的引用。发送者触发命令，而不向接收者直接发送请求。注意，发送者并不负责创建命令对象：它通常会通过构造函数从客户端处获得预先生成的命令。
- **命令**（Command）接口通常仅声明一个执行命令的方法。
- **具体命令**（Concrete Commands）会实现各种类型的请求。具体命令自身并不完成工作，而是会将调用委派给一个业务逻辑对象。但为了简化代码，这些类可以进行合并。<span style="color:gray">接收对象执行方法所需的参数可以声明为具体命令的成员变量。你可以将命令对象设为不可变，仅允许通过构造函数对这些成员变量进行初始化。</span>
- **接收者**（Receiver）类包含部分业务逻辑。几乎任何对象都可以作为接收者。绝大部分命令只处理如何将请求传递到接收者的细节，接收者自己会完成实际的工作。
- **客户端**（Client）会创建并配置具体命令对象。客户端必须将包括接收者实体在内的所有请求参数传递给命令的构造函数。此后，生成的命令就可以与一个或多个发送者相关联了。

**命令模式的类图：**

![命令模式的类图](./165ee197c88431e235078d2e9f4a16c2.webp)

## 模式实现

该示例使用命令模式实现复制和粘贴功能。让调用者 \`Invoker\` 根据传入的命令 \`Command\`，执行命令。具体的命令 \`Copy\` 和 \`Paste\` 分别去调用接收者 \`ControlConsole\`（变量 \`controlString\` 表示控制台中的字符串，可被用户复制；变量 \`copy\` 表示剪切板的值，可被用户粘贴）的具体逻辑实现。相当于把调用者发出的命令和控制台接收者执行的命令中的命令（复制、粘贴）封装成对象，作为这两个类沟通的桥梁。

### 示例程序的类图

![示例程序的类图](./e0fc9bbb0cd827dd977c7385a16f9587.webp)

### 代码实现

#### 发送者

\`\`\`java
package example;

/** 调用者 */
public class Invoker {
    /** 命令 */
    private Command command;

    /**
     - 绑定命令
     - @param command
     */
    public void setCommand(Command command) {
        this.command = command;
    }

    /** 调用命令 */
    public void executeCommand() {
        if (command != null) {
            command.execute();
        }
    }
}
\`\`\`

#### 命令

\`\`\`java
package example;

/** 命令接口 */
public interface Command {
    /** 执行命令 */
    void execute();
}
\`\`\`

#### 具体命令

\`\`\`java
package example;

/** 复制命令 */
public class Copy implements Command {
    /** 具体实现命令逻辑的接收者 */
    private ControlConsole console;

    public Copy(ControlConsole console) {
        this.console = console;
    }

    /** 执行命令 */
    @Override
    public void execute() {
        console.copyConsole();
    }
}
\`\`\`

\`\`\`java
package example;

/** 粘贴命令 */
public class Paste implements Command {
    /** 具体实现命令逻辑的接收者 */
    private ControlConsole console;

    public Paste(ControlConsole console) {
        this.console = console;
    }

    /** 执行命令 */
    @Override
    public void execute() {
        console.pasteConsole();
    }
}
\`\`\`

#### 接收者

\`\`\`java
package example;

/** 控制台接收者，实现具体业务逻辑 */
public class ControlConsole {
    /** 保存输出到控制台的字符串，用于复制 */
    private StringBuffer controlString = new StringBuffer("");
    /** 剪切板 */
    private String copy = "";

    /** 复制控制台内容 */
    public void copyConsole() {
        copy = "{剪切板的内容}<<" + controlString.toString() + ">>";
    }

    /** 粘贴到控制台 */
    public void pasteConsole() {
        System.out.println(copy);
    }

    /**
     - 更新控制台字符串
     - @param s 输出在控制台的字符串
     */
    public void setControlString(String s) {
        controlString.append(s);
    }
}
\`\`\`

### 代码测试

\`\`\`java
import example.*;

/** 测试命令模式 */
public class Test {
    public static void main(String[] args) {
        String input = "Hello world!";
        // 创建接收者
        ControlConsole console = new ControlConsole();
        // 为命令绑定接收者（具体命令逻辑实现）
        Command copy = new Copy(console);
        Command paste = new Paste(console);

        Invoker invoker = new Invoker();
        System.out.println("控制台无字符，执行copy操作：");
        invoker.setCommand(copy);
        invoker.executeCommand();
        invoker.setCommand(paste);
        invoker.executeCommand();

        System.out.println("\\n------------------- 分割线 -------------------\\n");
        System.out.println("控制台字符为：" + input);
        console.setControlString(input);
        System.out.println("控制台有字符，执行copy操作：");
        invoker.setCommand(copy);
        invoker.executeCommand();
        invoker.setCommand(paste);
        invoker.executeCommand();
    }
}
\`\`\`

### 输出结果

\`\`\`text
控制台无字符，执行copy操作：
{剪切板的内容}<<>>

------------------- 分割线 -------------------

控制台字符为：Hello world!
控制台有字符，执行copy操作：
{剪切板的内容}<<Hello world!>>
\`\`\`

## 常用场景和解决方案

- 需要通过操作来参数化对象时。例如，在图形化页面中点击获取下列列表的同时还能点击菜单项。
- 想要将操作放入队列、按顺序执行脚本操作或者执行一些远程操作命令时。
- 实现操作回滚功能的场景时，命令模式能够更好地记录命令操作顺序和相关上下文。
- \`Shell\` 脚本类似命令模式的调用者 \`Invoker\`，脚本命令如 \`cat\` 就等同于命令 \`Command\`，而 bash shell 就是作为接收者 \`Receiver\` 来具体实现执行命令的。

## 模式的优缺点

| 优点                                                                   | 缺点                                                                     |
| :--------------------------------------------------------------------- | :----------------------------------------------------------------------- |
| _单一职责原则_。你可以解耦触发和执行操作的类。                         | 代码可能会变得更加复杂，因为你在发送者和接收者之间增加了一个全新的层次。 |
| _开闭原则_。你可以在不修改已有客户端代码的情况下在程序中创建新的命令。 | 不同的接收者需要实现重复的命令。                                         |
| 你可以实现撤销和恢复功能。                                             | 当命令中涉及对象状态变化时，可能导致不同的结果出现。                     |
| 你可以实现操作的延迟执行。                                             |                                                                          |
| 你可以将一组简单命令组合成一个复杂命令。                               |                                                                          |

## 拓展知识

- 命令模式并不仅限于操作系统的命令，在实际的业务开发中，可能是对应的一组复杂的代码调用逻辑。
- 你可以同时使用命令和备忘录模式来实现“撤销”。在这种情况下，命令用于对目标对象执行各种不同的操作，备忘录用来保存一条命令执行前该对象的状态。
- 命令和策略模式看上去很像，因为两者都能通过某些行为来参数化对象。但是，它们的意图有非常大的不同。
  - 你可以使用_命令_来将任何操作转换为对象。操作的参数将成为对象的成员变量。你可以通过转换来延迟操作的执行、将操作放入队列、保存历史命令或者向远程服务发送命令等。
  - 另一方面，_策略_通常可用于描述完成某件事的不同方式，让你能够在同一个上下文类中切换算法。

🔙 [设计模式](/posts/design-patterns/)

**📌最后：希望本文能够给您提供帮助，文章中有不懂或不正确的地方，请在下方评论区💬留言！**

**🔗参考文献：**

🌐 [设计模式 --refactoringguru](https://refactoringguru.cn/design-patterns#intro-patterns)

📺 [bilibili-趣学设计模式；黄靖锋. --拉勾教育](https://www.bilibili.com/video/BV1hY411Y7zR/?p=1&vd_source=a9a236c4d6e5c5350c70b71ee0727b8c)

📖 图解设计模式 /（日）结城浩著；杨文轩译. --北京：人民邮电出版社，2017.1`,slug:`command-pattern`,path:`/posts/command-pattern/`,wordCount:5248,readingMinutes:11,toc:[{depth:2,slug:`为什么要使用`,text:`为什么要使用？`},{depth:2,slug:`模式结构`,text:`模式结构`},{depth:2,slug:`模式实现`,text:`模式实现`},{depth:3,slug:`示例程序的类图`,text:`示例程序的类图`},{depth:3,slug:`代码实现`,text:`代码实现`},{depth:4,slug:`发送者`,text:`发送者`},{depth:4,slug:`命令`,text:`命令`},{depth:4,slug:`具体命令`,text:`具体命令`},{depth:4,slug:`接收者`,text:`接收者`},{depth:3,slug:`代码测试`,text:`代码测试`},{depth:3,slug:`输出结果`,text:`输出结果`},{depth:2,slug:`常用场景和解决方案`,text:`常用场景和解决方案`},{depth:2,slug:`模式的优缺点`,text:`模式的优缺点`},{depth:2,slug:`拓展知识`,text:`拓展知识`}],protected:!1,passwordHint:``,sourcePath:`command-pattern/index.md`},{title:`组合模式：把对象搭成一棵树`,description:`组合模式是一种结构型设计模式，你可以使用它将对象组合成树状结构，并且能像使用独立对象一样使用它们。`,publishedAt:`2023-04-04T16:41:00+08:00`,updatedAt:`2023-04-04T16:41:00+08:00`,tags:[`设计模式`,`结构型模式`,`组合模式`],category:`设计模式`,series:`设计模式`,seriesOrder:9,pinned:!1,draft:!1,cover:`/posts/composite-pattern/cover.webp`,coverAlt:`组合模式封面`,content:`**组合模式**是一种结构型设计模式，你可以使用它将对象组合成树状结构，并且能像使用独立对象一样使用它们。

将对象组合成**树形结构**以表示整个部分的层次结构。组合模式可以**让用户统一对待**单个对象和对象的组合。

## 为什么要使用？

**组合模式的对象职责：**

**将对象组合成树状结构，并且能像使用独立对象一样使用它们。**

组合模式就是一种容器与内容组合在一起的模式。它能够**使容器与内容具有一致性**。

例如，在文件系统中，有文件夹📁和文件📄两种对象，它们间的层级关系就是树状关系🌲。文件夹属于容器、文件属于内容，但是它们都属于目录条目。所以我们能像使用独立对象一样使用它们。

那么在树状结构中，树节点就是容器🫙，能够承载更多的树节点和叶子节点，叶子节点就是内容。它们都属于节点，可以组合成一棵树。两者不同的是树节点会记录它的子节点而已。

如果你有以下需求，可以考虑使用组合模式。

1. 希望一组对象按照某种层级结构进行管理。
2. 需要按照统一的行为来处理复杂结构中的对象。
3. 能够快速拓展对象组合。

## 模式结构

- **组件**（Component）接口描述了树中简单项目和复杂项目所共有的操作。

- **叶节点**（Leaf）是树的基本结构，它不包含子项目。<span style="color:gray">一般情况下，叶节点最终会完成大部分的实际工作，因为它们无法将工作指派给其他部分。</span>

- **容器**（Container）——又名“组合（Composite）”——是包含叶节点或其他容器等子项目的单位。容器不知道其子项目所属的具体类，它只通过通用的组件接口与其子项目交互。<span style="color:gray">容器接收到请求后会将工作分配给自己的子项目，处理中间结果，然后将最终结果返回给客户端。</span>

- **客户端**（Client）通过组件接口与所有项目交互。因此，客户端能以相同方式与树状结构中的简单或复杂项目交互。

**组合模式的类图：**

![组合模式的类图](./ec9dc19c17bd94311b85810c3b53efd1.webp)

## 模式实现

文件中只包含自己的信息，属于单个对象；文件夹中能够存储文件和文件夹，属于组合对象。该示例使用组合模式将文件和文件夹归为目录条目，使其具有一致性，方便管理。

### 示例程序的类图

![示例程序的类图](./52fbfc00f9ebd52fcc072ff8d978f0e6.webp)

### 代码实现

#### 组件

\`\`\`java
package example;

/** 目录条目抽象组件 */
public interface Entry {
    /**
     - 获取文件夹或文件名字
     - @return 文件夹或文件名字
     */
    String getName();

    /**
     - 获取文件夹的子文件夹和子文件总数或文件大小
     - @return 文件夹的子文件夹和子文件总数或文件大小
     */
    int getSize();

    /**
     - 打印文件夹或文件路径
     - @param prefix 父文件夹路径
     */
    void printList(String prefix);
}
\`\`\`

#### 叶节点

\`\`\`java
package example;

/** 文件叶节点 */
public class File implements Entry {
    /** 文件名 */
    private String name;
    /** 文件大小 */
    private int size;

    public File(String name, int size) {
        this.name = name;
        this.size = size;
    }

    /**
     - 获取文件夹或文件名字
     - @return 文件夹或文件名字
     */
    @Override
    public String getName() {
        return name;
    }

    /**
     - 获取文件夹的子文件夹和子文件总数或文件大小
     - @return 文件夹的子文件夹和子文件总数或文件大小
     */
    @Override
    public int getSize() {
        return size;
    }

    /**
     - 打印文件夹或文件路径
     - @param prefix 父文件夹路径
     */
    @Override
    public void printList(String prefix) {
        System.out.println(prefix + "/" + name);
    }
}
\`\`\`

#### 容器

\`\`\`java
package example;

import java.util.ArrayList;

/** 文件夹容器 */
public class Directory implements Entry {
    /** 文件夹名 */
    private String name;
    /** 子文件列表 */
    private ArrayList<Entry> directory = new ArrayList<>();

    public Directory(String name) {
        this.name = name;
    }

    /**
     - 添加文件夹或文件
     - @param entry 文件夹或文件
     - @return 当前文件夹
     */
    public Entry add(Entry entry) {
        directory.add(entry);
        return this;
    }

    /**
     - 获取文件夹或文件名字
     - @return 文件夹或文件名字
     */
    @Override
    public String getName() {
        return name;
    }

    /**
     - 获取文件夹的子文件夹和子文件总数或文件大小
     - @return 文件夹的子文件夹和子文件总数或文件大小
     */
    @Override
    public int getSize() {
        return directory.size();
    }

    /**
     - 打印文件夹或文件路径
     - @param prefix 父文件夹路径
     */
    @Override
    public void printList(String prefix) {
        String path = prefix + "/" + name;
        System.out.println(path);
        for (Entry entry : directory) {
            entry.printList(path);
        }
    }
}
\`\`\`

### 代码测试

\`\`\`java
import example.Directory;
import example.File;

/** 测试组合模式 */
public class Test {
    public static void main(String[] args) {
        File txt = new File("test.txt", 1);
        File png = new File("test.png", 10);
        Directory root = new Directory("root");
        Directory child = new Directory("child");

        System.out.println("root文件夹添加child文件夹：");
        root.add(child).printList("~");
        System.out.println("文件数量：" + root.getSize());

        System.out.println("\\nroot文件夹添加test.png文件：");
        root.add(png).printList("~");
        System.out.println("文件数量：" + root.getSize());

        System.out.println("\\nchild文件夹添加test.txt文件：");
        child.add(txt).printList("~/root");
        System.out.println("文件数量：" + child.getSize());
    }
}
\`\`\`

### 输出结果

\`\`\`text
root文件夹添加child文件夹：
~/root
~/root/child
文件数量：1

root文件夹添加test.png文件：
~/root
~/root/child
~/root/test.png
文件数量：2

child文件夹添加test.txt文件：
~/root/child
~/root/child/test.txt
文件数量：1
\`\`\`

你也可以在 \`Entry\` 接口中加入获取父类文件路径的方法，就无需在创建 \`File\` 和 \`Directory\` 时，直接输入字符串常量。

## 常用场景和解决方案

- 处理一个树型结构。比如，公司人员组织架构、订单信息等。
- 跨越多个层次结构聚合数据。比如，统计文件夹下文件总数。
- 统一处理一个结构中的多个对象。比如，遍历文件夹下所有 \`XML\` 类型文件内容。
- 如果你希望客户端代码以相同方式处理简单和复杂元素，可以使用该模式。组合模式中定义的所有元素共用同一个接口。在这一接口的帮助下，客户端不必在意其所使用的对象的具体类。

## 模式的优缺点

| 优点                                                                               | 缺点                                                                                                           |
| :--------------------------------------------------------------------------------- | :------------------------------------------------------------------------------------------------------------- |
| 你可以利用多态和递归机制更方便地使用复杂树结构。                                   | 对于功能差异较大的类，提供公共接口或许会有困难。在特定情况下，你需要过度一般化组件接口，使其变得令人难以理解。 |
| _开闭原则_。无需更改现有代码，你就可以在应用中添加新元素，使其成为对象树的一部分。 |                                                                                                                |

### 使用组合模式的优势

- 清晰定义分层结构。
- 快速新增节点，提升组合灵活性。
- 简化了使用者使用复杂结构数据的代码。组合模式为你提供了两种共享公共接口的基本元素类型：简单叶节点和复杂容器。容器中可以包含叶节点和其他容器。这使得你可以构建树状嵌套递归对象结构。

### 使用组合模式的劣势

- 难以限制节点类型。
- 需要增加很多运行时的检查，增加了代码复杂度。
- 错误的遍历算法可能会影响系统性能。

## 拓展知识

- 你可以在创建复杂组合树时使用生成器模式，因为这可使其构造步骤以递归的方式运行。
- 责任链模式通常和组合模式结合使用。在这种情况下，叶组件接收到请求后，可以将请求沿包含全体父组件的链一直传递至对象树的底部。
- 你可以使用迭代器模式来遍历组合树。
- 你可以使用访问者模式对整个组合树执行操作。
- 你可以使用享元模式实现组合树的共享叶节点以节省内存。

🔙 [设计模式](/posts/design-patterns/)

**📌最后：希望本文能够给您提供帮助，文章中有不懂或不正确的地方，请在下方评论区💬留言！**

**🔗参考文献：**

🌐 [设计模式 --refactoringguru](https://refactoringguru.cn/design-patterns#intro-patterns)

📺 [bilibili-趣学设计模式；黄靖锋. --拉勾教育](https://www.bilibili.com/video/BV1hY411Y7zR/?p=1&vd_source=a9a236c4d6e5c5350c70b71ee0727b8c)

📖 图解设计模式 /（日）结城浩著；杨文轩译. --北京：人民邮电出版社，2017.1`,slug:`composite-pattern`,path:`/posts/composite-pattern/`,wordCount:4543,readingMinutes:7,toc:[{depth:2,slug:`为什么要使用`,text:`为什么要使用？`},{depth:2,slug:`模式结构`,text:`模式结构`},{depth:2,slug:`模式实现`,text:`模式实现`},{depth:3,slug:`示例程序的类图`,text:`示例程序的类图`},{depth:3,slug:`代码实现`,text:`代码实现`},{depth:4,slug:`组件`,text:`组件`},{depth:4,slug:`叶节点`,text:`叶节点`},{depth:4,slug:`容器`,text:`容器`},{depth:3,slug:`代码测试`,text:`代码测试`},{depth:3,slug:`输出结果`,text:`输出结果`},{depth:2,slug:`常用场景和解决方案`,text:`常用场景和解决方案`},{depth:2,slug:`模式的优缺点`,text:`模式的优缺点`},{depth:3,slug:`使用组合模式的优势`,text:`使用组合模式的优势`},{depth:3,slug:`使用组合模式的劣势`,text:`使用组合模式的劣势`},{depth:2,slug:`拓展知识`,text:`拓展知识`}],protected:!1,passwordHint:``,sourcePath:`composite-pattern/index.md`},{title:`装饰模式：给对象层层加功能`,description:`装饰模式是一种结构型设计模式，允许你通过将对象放入包含行为的特殊封装对象中来为原对象绑定新的行为。或者说允许动态地向一个现有的对象添加新的功能同时又不改变其结构，相当于对现有的对象进行了一个包装。`,publishedAt:`2023-04-04T11:56:00+08:00`,updatedAt:`2023-04-04T11:56:00+08:00`,tags:[`设计模式`,`结构型模式`,`装饰模式`],category:`设计模式`,series:`设计模式`,seriesOrder:10,pinned:!1,draft:!1,cover:`/posts/decorator-pattern/cover.webp`,coverAlt:`装饰模式封面`,content:`**装饰模式**是一种结构型设计模式，允许你通过将对象放入包含行为的特殊封装对象中来为原对象绑定新的行为。或者说允许动态地向一个现有的对象添加新的功能同时又不改变其结构，相当于对现有的对象进行了一个包装。所以装饰模式也称“包装器模式”。

## 为什么要使用？

**装饰模式的对象职责：**

**动态地向一个现有的对象添加新的功能同时又不改变其结构。**

对于一些无法通过继承来扩展功能的类或一些难以扩展功能的类，可以使用装饰模式来动态地添加新的功能。

例如，在一个原始的文件类中，文件内容明文保存。现在有部分文件需要让内容加密，就可以使用装饰模式给它添加加解密功能。如果还需要将大文件压缩，可以在加解密外层再添加一个压缩解压缩的装饰器。使其变成一种链式结构：\`明文 -> 加密 -> 压缩\`、\`解压 -> 解密 -> 明文\`。

**装饰模式是一种纵向扩展的模式，能够动态扩展。** 就像套娃玩具🪆一样，一层套一层，不打开它，你永远不知道是不是最后一层。每个套娃都能打开，这就像一种统一的行为，无论套多少层，它都不会改变。装饰模式也一样，**要确保被装饰物的接口 \`API\` 的透明性，无论添加多少装饰器都要保证不改变“被装饰物的 \`API\`”。**

## 模式结构

- **部件**（Component）声明封装器和被封装对象的公用接口。

- **具体部件**（Concrete Component）类是被封装对象所属的类。它定义了基础行为，但装饰类可以改变这些行为。

- **基础装饰**（Base Decorator）类拥有一个指向被封装对象的引用成员变量。该变量的类型应当被声明为通用部件接口，这样它就可以引用具体的部件和装饰。装饰基类会将所有操作委派给被封装的对象。

- **具体装饰类**（Concrete Decorators）定义了可动态添加到部件的额外行为。具体装饰类会重写装饰基类的方法，并在调用父类方法之前或之后进行额外的行为。

- **客户端**（Client）可以使用多层装饰来封装部件，只要它能使用通用接口与所有对象互动即可。

**装饰模式的类图：**

![装饰模式的类图](./c0e298a40b69d23f3f09c084fcc68775.webp)

- 装饰模式让原始类（Concrete Component）和装饰类（Base Decorator）分离开来。

- 让装饰类基类（Base Decorator）在原始类（Concrete Component）的基础上扩展新功能。
- 让具体装饰类（Concrete decorators）在装饰类基类（Base Decorator）的基础上扩展新功能。

## 模式实现

该示例使用装饰器模式为原始数据提供加解密和压缩解压缩的装饰，使原始数据可以使用一种链式结构任意加密压缩或压缩加密。该示例中加解密和压缩解压缩只用字符串标识。

### 示例程序的类图

![示例程序的类图](./b5fbe73222ce5220abe5ee71ec089f74.webp)

### 代码实现

#### 部件

\`\`\`java
package example;

/** 数据源接口部件 */
public interface DataSource {
    /**
     - 写入数据源字符串
     - @param data 数据源字符串
     */
    void write(String data);

    /**
     - 读取数据源字符串
     - @return 数据源字符串
     */
    String read();
}
\`\`\`

#### 具体部件

\`\`\`java
package example;

/** 字符串数据具体部件 */
public class StringData implements DataSource {
    /** 数据 */
    private String data;

    /**
     - 写入数据源字符串
     - @param data 数据源字符串
     */
    @Override
    public void write(String data) {
        this.data = data;
    }

    /**
     - 读取数据源字符串
     - @return 数据源字符串
     */
    @Override
    public String read() {
        if (data != null && !"".equals(data)) {
            return "\\n[储存的字符串]" + data + "\\n";
        }
        return "";
    }
}
\`\`\`

#### 基础装饰

\`\`\`java
package example;

/** 基础装饰 */
public class BaseDecorator implements DataSource {
    /** 被装饰的类 */
    private DataSource wrapper;

    public BaseDecorator(DataSource wrapper) {
        this.wrapper = wrapper;
    }

    /**
     - 写入数据源字符串
     - @param data 数据源字符串
     */
    @Override
    public void write(String data) {
        if (wrapper != null) {
            wrapper.write(data);
        }
    }

    /**
     - 读取数据源字符串
     - @return 数据源字符串
     */
    @Override
    public String read() {
        if (wrapper != null) {
            return wrapper.read();
        }
        return null;
    }
}
\`\`\`

#### 具体装饰类

\`\`\`java
package example;

/** 加解密具体装饰类 */
public class EncryptionDecorator extends BaseDecorator {
    public EncryptionDecorator(DataSource wrapper) {
        super(wrapper);
    }

    /**
     - 写入数据源字符串
     - @param data 数据源字符串
     */
    @Override
    public void write(String data) {
        super.write(encode(data));
    }

    /**
     - 读取数据源字符串
     - @return 数据源字符串
     */
    @Override
    public String read() {
        return decode(super.read());
    }
    /**
     - 加密
     - @param data 明文
     - @return 密文
     */
    private String encode(String data) {
        return "(encode)" + data + "(encode)";
    }

    /**
     - 解密
     - @param data 密文
     - @return 明文
     */
    private String decode(String data) {
        return "\\n(decode)" + data + "(decode)\\n";
    }
}
\`\`\`

\`\`\`java
package example;

/** 压缩解压缩装饰类 */
public class CompressionDecorator extends BaseDecorator {
    public CompressionDecorator(DataSource wrapper) {
        super(wrapper);
    }

    /**
     - 写入数据源字符串
     - @param data 数据源字符串
     */
    @Override
    public void write(String data) {
        super.write(compress(data));
    }

    /**
     - 读取数据源字符串
     - @return 数据源字符串
     */
    @Override
    public String read() {
        return decompress(super.read());
    }

    /**
     - 压缩
     - @param data 数据
     - @return 压缩后的数据
     */
    private String compress(String data) {
        return "(compress)" + data + "(compress)";
    }

    /**
     - 解压
     - @param data 压缩后的数据
     - @return 原始数据
     */
    private String decompress(String data) {
        return "\\n(decompress)" + data + "(decompress)\\n";
    }
}
\`\`\`

### 代码测试

\`\`\`java
import example.*;

/** 测试装饰模式 */
public class Test {
    public static void main(String[] args) {
        String data = "Hello world!";
        System.out.println("字符串：" + data);
        System.out.println("使用装饰器前：");
        DataSource before = new StringData();
        before.write(data);
        System.out.println("读出的数据为：" + before.read());

        System.out.println("\\n--------------------- 分割线 ---------------------\\n");

        System.out.println("使用装饰器后（加密压缩）：");
        BaseDecorator encryptionDecorator = new EncryptionDecorator(before);
        encryptionDecorator.write(data);
        System.out.println("只有加密读出的数据为：" + encryptionDecorator.read());

        BaseDecorator compressionDecorator = new CompressionDecorator(before);
        compressionDecorator.write(data);
        System.out.println("只有压缩读出的数据为：" + compressionDecorator.read());

        BaseDecorator encryptionAndCompressionDecorator = new CompressionDecorator(new EncryptionDecorator(before));
        encryptionAndCompressionDecorator.write(data);
        System.out.println("加密压缩读出的数据为：" + encryptionAndCompressionDecorator.read());
    }
}
\`\`\`

### 输出结果

\`\`\`text
字符串：Hello world!
使用装饰器前：
读出的数据为：
[储存的字符串]Hello world!

--------------------- 分割线 ---------------------

使用装饰器后（加密压缩）：
只有加密读出的数据为：
(decode)
[储存的字符串](encode)Hello world!(encode)
(decode)

只有压缩读出的数据为：
(decompress)
[储存的字符串](compress)Hello world!(compress)
(decompress)

加密压缩读出的数据为：
(decompress)
(decode)
[储存的字符串](encode)(compress)Hello world!(compress)(encode)
(decode)
(decompress)
\`\`\`

从结果可以看出加密压缩后字符串变为 \`(encode)(compress)Hello world!(compress)(encode)\`，然后要先 \`(decode)\`，再进行 \`(decompress)\`，才能变为原始字符串 \`Hello world!\`。从结果我们可以清楚地看出装饰器的调用顺序是递归栈（先压缩再加密的字符串，需要先解密再解压才能得到原始字符串）。所以，在使用装饰模式时，我们要明确装饰器的调用顺序。

## 常用场景和解决方案

- 快速**动态**扩展和撤销一个类的功能场景。
- 可以通过顺序组合包装的方式来附加扩张功能的场景。比如在原始类中加入加解密的装饰器，加解密外层再加入压缩解压缩的装饰器。
- 使用装饰模式可以扩展老旧功能的类，而不改变该类本身。同时新拓展的功能可以任意组合、拆卸。
- 不支持继承扩展类的场景。例如，许多编程语言使用 \`final\` 关键字来限制对某个类的进一步扩展。复用最终类已有行为的唯一方法是使用装饰模式：用封装器对其进行封装。

## 模式的优缺点

| 优点                                                                     | 缺点                                       |
| :----------------------------------------------------------------------- | :----------------------------------------- |
| 你无需创建新子类即可扩展对象的行为。                                     | 在封装器栈中删除特定封装器比较困难。       |
| 你可以在运行时添加或删除对象的功能。                                     | 实现行为不受装饰栈顺序影响的装饰比较困难。 |
| 你可以用多个装饰封装对象来组合几种行为。                                 | 各层的初始化配置代码看上去可能会很糟糕。   |
| _单一职责原则_。你可以将实现了许多不同行为的一个大类拆分为多个较小的类。 | 增加问题定位和后期代码维护成本。           |

## 拓展知识

- 适配器模式侧重于转换，装饰模式侧重于动态扩展。
- 桥接模式侧重于横向宽度的扩展，装饰模式侧重于纵向深度的扩展。
- 一般情况下不建议装饰器超过 10 个，如果超过要考虑重构组件功能。
- 对于没有上下逻辑的装饰器要尽量避免使用装饰模式。
- 装饰模式是一种递归组合的模式。

🔙 [设计模式](/posts/design-patterns/)

**📌最后：希望本文能够给您提供帮助，文章中有不懂或不正确的地方，请在下方评论区💬留言！**

**🔗参考文献：**

🌐 [设计模式 --refactoringguru](https://refactoringguru.cn/design-patterns#intro-patterns)

📺 [bilibili-趣学设计模式；黄靖锋. --拉勾教育](https://www.bilibili.com/video/BV1hY411Y7zR/?p=1&vd_source=a9a236c4d6e5c5350c70b71ee0727b8c)

📖 图解设计模式 /（日）结城浩著；杨文轩译. --北京：人民邮电出版社，2017.1`,slug:`decorator-pattern`,path:`/posts/decorator-pattern/`,wordCount:5721,readingMinutes:8,toc:[{depth:2,slug:`为什么要使用`,text:`为什么要使用？`},{depth:2,slug:`模式结构`,text:`模式结构`},{depth:2,slug:`模式实现`,text:`模式实现`},{depth:3,slug:`示例程序的类图`,text:`示例程序的类图`},{depth:3,slug:`代码实现`,text:`代码实现`},{depth:4,slug:`部件`,text:`部件`},{depth:4,slug:`具体部件`,text:`具体部件`},{depth:4,slug:`基础装饰`,text:`基础装饰`},{depth:4,slug:`具体装饰类`,text:`具体装饰类`},{depth:3,slug:`代码测试`,text:`代码测试`},{depth:3,slug:`输出结果`,text:`输出结果`},{depth:2,slug:`常用场景和解决方案`,text:`常用场景和解决方案`},{depth:2,slug:`模式的优缺点`,text:`模式的优缺点`},{depth:2,slug:`拓展知识`,text:`拓展知识`}],protected:!1,passwordHint:``,sourcePath:`decorator-pattern/index.md`},{title:`设计模式：23 种套路与六原则`,description:`23 种设计模式总览，涵盖创建型、结构型、行为型三大类模式及六大设计原则。`,publishedAt:`2023-04-03T07:00:00+08:00`,updatedAt:`2023-04-03T07:00:00+08:00`,tags:[`设计模式`,`GoF`,`软件设计`],category:`设计模式`,series:`设计模式`,seriesOrder:1,pinned:!0,rank:3,draft:!1,cover:`/posts/design-patterns/cover.webp`,coverAlt:`设计模式封面`,content:`## 简介

上个世纪 90 年代，Eric Gamma、Richard Helm、Ralph Johnson、John Vlissides 等 4 人合作出版了《设计模式：可复用面向对象软件的基础》。而"设计模式"这个概念也是从中而来。这 4 人也被称为 the Gang of Four，简称 GoF。

"设计模式"共 23 种，是一种能够提高代码可复用性、可维护性、可读性、稳健性以及安全性的解决方案。它是解决某些特定问题的一般性概念，能够根据需求进行调整，用于解决代码中反复出现的设计问题。

合理利用"设计模式"开发会给我们带来很多的便利。而如何合理的运用就在于学会"找到变化，封装变化"。

## 设计原则

本系列将通过 Java（面向对象编程语言）和 UML（统一建模语言）来表示各种设计模式。

需要了解的内容有：

👉[面向对象设计](/posts/object-oriented-design/)

👉[类图 Class Diagram](/posts/uml-class-diagram/)

👉[顺序图 Sequence Diagram](/posts/uml-sequence-diagram/)

### 基本开发原则

- **单一原则（Dont't Repeat Yourself）抽象出一个共同的解决方法来避免冗余重复的代码。** 不过在使用单一原则时应该避免过度关心代码重用和设计。
- **简单原则（Keep It Simple and Stupid）指代码应该容易理解、编写和改变。** 简单代码应该是让别人理解代码逻辑时更简单，迭代时更轻松。将来可能需要，但现在却用不上的代码不要写。
- **迪米特法则（Law of Demeter）又称"最少原则"指出一个类应该与它直接相关的类通信和每一个类应该知道自己需要的最少知识。** 或者说一个类应该了解的只有与它有直接关联的类，包括依赖、关联、聚合、组合等。在简化局部代码时应该注意整体，避免引入很多过小的中间类和方法。适用"迪米特法则"可以降低代码耦合度。
- **表达原则（Program Intently and Expressively）指编程时应该有清晰的编程意图并通过代码明确地表达出来。** 好的命名规范对于他人理解代码有着很多的帮助。好的注释应该是"为什么"注释。
- **面向对象原则（SOLID）包括单一职责原则（Single Responsibility Principle）、开闭原则（Open Closed Principle）、里氏替换原则（Liskov Substitution Principle）、接口隔离原则（Interface Segregation Principle）、依赖倒置原则（Dependence Inversion Principle）。** 其中开闭原则也被称为"面向对象设计中最重要的原理"。

  ![SOLID 原则](./61498af9a3ef3871bd1ae93fd6fa659f.webp)

- **惯例优于配置原则（Convention over Configuration）是将一些在编程中公认的配置方式和约定信息作为内部缺省的默认规则来使用。** 惯例原则通过提供隐形的公共知识，来减少开发人员重复决策的次数。
- **关注点分离原则（Separation of Concerns）是将计算机程序分隔为不同部分的设计原则。** 先将复杂问题做合理的分解，再分别仔细研究程序上特定问题的侧面（关注点），最后解决得出的接口，再合成整体的解决思路。
- **契约式设计原则（Design by Contract）指在软件设计时应该为软件组件定义一种精确和可验证的接口规范。这种规范要包括使用的预置条件、后置条件和不变条件，用来扩展普通抽象数据类型的定义。** 如何做好 API 接口设计有 6 点：
  1. 让接口职责分离；
  2. API 命名很重要；
  3. 尽量少创造自定义错误码；
  4. 同一接口要做到幂等；
  5. 安全策略；
  6. 版本管理。
- **职责分离原则将不同变化原因引起的类或方法修改行为拆分到不同类或方法里去。** 或者说将模块看成一个大的对象，按面向对象设计去拆分职责。

### 六大设计原则

- **迪米特法则（Law of Demeter）又称"最少原则"指出一个类应该与它直接相关的类通信和每一个类应该知道自己需要的最少知识。** 或者说一个类应该了解的只有与它有直接关联的类，包括依赖、关联、聚合、组合等。在简化局部代码时应该注意整体，避免引入很多过小的中间类和方法。
- **单一职责原则（Single Responsibility Principle）指对象应该仅具有一种单一的功能。** 或者说当一个类存在一个甚至多个因素使它发生改变时，就应该拆分它。例如：实体类仅仅包含数据、设置数据和包含数据。如果一个实体类包含其他服务，那么在其他服务所依赖的外部接口变更时，就需要修改类，违背了单一职责原则。
- **开闭原则（Open Closed Principle）指程序对于扩展开放，对于修改封闭。** 开闭原则往往运用于框架设计，而对于变更频繁的业务来说，有时会显得过分冗余。
- **里氏替换原则（Liskov Substitution Principle）指子类应该能够完全替换掉它的基类。** 或者说应该尽量保持子类和父类方法行为的一致性，子类只完成父类期待的事情。例如：父类希望子类去实现相应的数据格式验证，否则就抛出输入异常。但是子类却在实现时添加了数据库的数据校验，还增加了数据库数据验证异常，这就违背了里氏替换原则。
- **接口隔离原则（Interface Segregation Principle）指多个特定客户端接口要好于一个宽泛用途的接口。** 或者说不能强迫类使用它们不想使用的方法。例如：在一个增删改查的接口中加入同步的方法，并非所有持久层类都需要使用到同步方法，这就违背了接口隔离原则。
- **依赖倒置原则（Dependence Inversion Principle）认为一个方法应该遵从"依赖于抽象而不是一个实例"。** 依赖倒置原则是一种统一代码交互标准的软件设计方法，具体表现在：
  1. **高层模块不应该依赖底层模块，二者都应该依赖于抽象。** 例如有一个高层模块需要依赖底层模块时，我们不应该只把高层模块抽象为接口，这样一旦底层模块发生改变时，高层模块依然要修改。我们应该把它们间的依赖关系抽象出来，让高层抽象模块依赖底层抽象模块，在让高层模块和底层模块分别实现它们。以后即使底层模块发生改变，我们也不需要修改高层模块，因为它们间的依赖关系没有变化。
  2. **抽象不应该依赖于细节，细节应该依赖于抽象。**
  3. **好的抽象是具备一些共性规律并能经得起实践检验的抽象。**

## 设计模式分类

设计模式共 23 种，分别为创建型模式 5 种、结构型模式 7 种、行为型模式 11 种。

- **创建型模式**提供创建对象的机制， 增加已有代码的灵活性和可复用性。
- **结构型模式**介绍如何将对象和类组装成较大的结构， 并同时保持结构的灵活和高效。
- **行为模式**负责对象间的高效沟通和职责委派。

## 创建型模式

创建型模式共 5 种，分别为工厂方法 Factory Method、抽象工厂 Abstract Factory、生成器 Builder、原型 Prototype、单例 Singleton。

**💡工厂方法模式（Factory Method）** 实现了对象创建时的多态。

**💡抽象工厂模式（Abstract Factory）** 本质上是为了寻找正确的抽象产品。

**💡生成器模式（Builder）** 实现了对象创建过程的多态。

**💡原型模式（Prototype）** 是一种将对象生成的责任代理给自己的模式。

**💡单例模式（Singleton）** 相当于强制实现了有限、唯一对象的生产。

### 工厂方法 Factory Method

> **工厂方法模式**是一种创建型设计模式，其在父类中提供一个创建对象的方法，允许子类决定实例化对象的类型。

更多内容请点击👉[工厂方法 Factory Method](/posts/factory-method-pattern/)

### 抽象工厂 Abstract Factory

> **抽象工厂模式**是一种创建型设计模式， 它能创建一系列相关的对象， 而无需指定其具体类。

更多内容请点击👉[抽象工厂 Abstract Factory](/posts/abstract-factory-pattern/)

### 生成器 Builder

> **生成器模式**也叫"建造者模式"是一种创建型设计模式， 使你能够分步骤创建复杂对象。 该模式允许你使用相同的创建代码生成不同类型和形式的对象。

更多内容请点击👉[生成器 Builder](/posts/builder-pattern/)

### 原型 Prototype

> **原型模式**是一种创建型设计模式，使你能够复制已有对象，而又无需使代码依赖它们所属的类。

更多内容请点击👉[原型 Prototype](/posts/prototype-pattern/)

### 单例 Singleton

> **单例模式**是一种创建型设计模式， 让你能够保证一个类只有一个实例， 并提供一个访问该实例的全局节点。

更多内容请点击👉[单例 Singleton](/posts/singleton-pattern/)

## 结构型模式

结构型模式共 7 种，分别为适配器 Adapter、桥接 Bridge、组合 Composite、装饰 Decorator、外观 Facade、享元 Flyweight、代理 Proxy。

**💡适配器模式 （Adapter）** 实现了不同接口功能之间的转换，为组件的快速复用提供了直接的解决办法。

**💡桥接模式（ Bridge）** 实现了抽象实体和抽象行为之间的永久绑定，往往与抽象工厂模式共同用于跨平台设计的场景。

**💡组合模式（ Composite）** 用于表达整体和部分的关系，可忽略单个对象和合成对象之间的差别，实际采用的是树状结构。

**💡装饰模式 （Decorator）** 通过代理方式实现了接口功能的多态，避免了大量子类的派生。适用于链状和树状的结构，但容易造成对象与装饰器之间耦合度过高。

**💡外观模式 （Facade）** 用于对子系统提供统一的接口。

**💡享元模式 （Flyweight）** 用于解决大对象重复创建损耗资源的问题，通过共享对象池来复用对象。

**💡代理模式 （Proxy）** 模式的结构与装饰模式相似，但侧重点不同，一种是修改对象的行为，另一种是控制访问。

### 适配器 Adapter

> **适配器模式**是一种结构型设计模式，它能使接口不兼容的对象能够相互合作。

更多内容请点击👉[适配器 Adapter](/posts/adapter-pattern/)

### 桥接 Bridge

> **桥接模式**是一种结构型设计模式，可将一个大类或一系列紧密相关的类拆分为**抽象**和**实现**两个独立的**层次结构**，从而能在开发时分别使用。

更多内容请点击👉[桥接 Bridge](/posts/bridge-pattern/)

### 组合 Composite

> **组合模式**是一种结构型设计模式，你可以使用它将对象组合成树状结构，并且能像使用独立对象一样使用它们。

更多内容请点击👉[组合 Composite](/posts/composite-pattern/)

### 装饰 Decorator

> **装饰模式**是一种结构型设计模式，允许你通过将对象放入包含行为的特殊封装对象中来为原对象绑定新的行为。或者说允许动态地向一个现有的对象添加新的功能同时又不改变其结构，相当于对现有的对象进行了一个包装。所以装饰模式也称"包装器模式"。

更多内容请点击👉[装饰 Decorator](/posts/decorator-pattern/)

### 外观 Facade

> **外观模式**是一种结构型设计模式，能为程序库、框架或其他复杂类提供一个简单的接口或为子系统中的一组接口提供统一的接口。它定义了一个更高级别的接口，使子系统更易于使用。

更多内容请点击👉[外观 Facade](/posts/facade-pattern/)

### 享元 Flyweight

> **享元模式**是一种结构型设计模式，它摒弃了在每个对象中保存所有数据的方式，通过共享多个对象所共有的相同状态，让你能在有限的内存容量中载入更多对象。

更多内容请点击👉[享元 Flyweight](/posts/flyweight-pattern/)

### 代理 Proxy

> **代理模式**是一种结构型设计模式，让你能够提供对象的替代品或其占位符。代理控制着对于原对象的访问，并允许在将请求提交给对象前后进行一些处理。

更多内容请点击👉[代理 Proxy](/posts/proxy-pattern/)

## 行为型模式

**🔖 类行为型模型：** 使用继承的方式来关联不同类之间的行为。

**🔖 对象行为型模型：** 使用组合或聚合方式来分配不同类之间的行为。

行为型模式共 11 种，分别为责任链 Chain of Responsibility、命令 Command、迭代器 Iterator、中介者 Mediator、备忘录 Memento、观察者 Observer、状态 State、策略 Strategy、模板方法 Template Method、访问者 Visitor、解释器 Interpreter。

**💡责任链模式（Chain of Responsibility）** 用于链条状结构，将处理请求沿链条进行传递，动态指定职责的承担对象，由各自对象实现对应职责。

**💡命令模式（Command）** 将某个命令（函数方法）封装成对象进行传递，关注的维度是命令。

**💡迭代器模式（Iterator）** 大量应用于基础类库中，对重复遍历操作进行封装。

**💡中介者模式（Mediator）** 解耦对象之间的直接引用，在结构上是星型结构，保证了对象行为上的稳定性。

**💡备忘录模式（Memento）** 也叫快照模式，通常用于捕获一个对象的内部状态。

**💡观察者模式（Observer）** 经典 \`MVC\` 模式的变形，在结构上是星型结构，侧重于将观察者和被观察者代码解耦。

**💡状态模式（State）** 最常用的实现方式是状态机，大量应用于需要控制状态流转的系统中。

**💡策略模式（Strategy）** 将多个不同的算法封装成策略，适合应用于对计算效率有一定要求的系统。

**💡模板方法模式（Template Method）** 定义一个算法模板，并将具体的执行步骤延迟到子类中实现。

**💡访问者模式（Visitor）** 在对象级别中实际为树型结构，与抽象工厂模式类似。

**💡解释器模式（Interpreter）** 为某个语言（编程语言也是语言）定义它的语法表示。

### 责任链 Chain of Responsibility

> **责任链模式**是一种行为设计模式，允许你将请求沿着处理者链进行发送。收到请求后，每个处理者均可对请求进行处理，或将其传递给链上的下个处理者。简单来说就是通过构建一个处理流水线来对一次请求进行多次的处理。

更多内容请点击👉[责任链 Chain of Responsibility](/posts/chain-of-responsibility-pattern/)

### 命令 Command

> **命令模式**是一种行为设计模式，它可将请求转换为一个包含与请求相关的所有信息的独立对象。该转换让你能根据不同的请求将方法参数化、延迟请求执行或将其放入队列中，且能实现可撤销操作。

更多内容请点击👉[命令 Command](/posts/command-pattern/)

### 迭代器 Iterator

> **迭代器模式**是一种行为设计模式，让你能在不暴露集合底层表现形式（列表、 栈和树等）的情况下遍历集合中所有的元素。

更多内容请点击👉[迭代器 Iterator](/posts/iterator-pattern/)

### 中介者 Mediator

> **中介者模式**是一种行为设计模式，能让你减少对象之间混乱无序的依赖关系。该模式会限制对象之间的直接交互，迫使它们通过一个中介者对象进行合作。

更多内容请点击👉[中介者 Mediator](/posts/mediator-pattern/)

### 备忘录 Memento

> **备忘录模式**（也称快照模式）是一种行为设计模式，允许在不暴露对象实现细节的情况下保存和恢复对象之前的状态。

更多内容请点击👉[备忘录 Memento](/posts/memento-pattern/)

### 观察者 Observer

> **观察者模式**（也称事件订阅者、监听者。）是一种行为设计模式，允许你定义一种订阅机制，可在对象事件发生时通知多个"观察"该对象的其他对象。这是对象之间的一对多依赖关系，这样当一个对象改变状态时，它的所有依赖项都会自动得到通知和更新。

更多内容请点击👉[观察者 Observer](/posts/observer-pattern/)

### 状态 State

> **状态模式**是一种行为设计模式，让你能在一个对象的内部状态变化时改变其行为，使其看上去就像改变了自身所属的类一样。或者说通过控制状态的变化使其行为发生变化。

更多内容请点击👉[状态 State](/posts/state-pattern/)

### 策略 Strategy

> **策略模式**是一种行为设计模式，它能让你定义一系列算法，并将每种算法分别放入独立的类中，以使算法的对象能够相互替换。

更多内容请点击👉[策略 Strategy](/posts/strategy-pattern/)

### 模板方法 Template Method

> **模板方法模式**是一种行为设计模式，它在超类中定义了一个算法的框架，允许子类在**不修改结构**的情况下重写算法的特定步骤。

更多内容请点击👉[模板方法 Template Method](/posts/template-method-pattern/)

### 访问者 Visitor

> **访问者模式**是一种行为设计模式，它能将算法与其所作用的对象隔离开来。允许在运行时将一个或多个操作应用于一组对象，将**操作**与**对象结构**分离。

更多内容请点击👉[访问者 Visitor](/posts/visitor-pattern/)

### 解释器 Interpreter

> **解释器模式**是一种行为设计模式，用于定义语言的语法规则表示，并提供解释器来处理句子中的语法。

更多内容请点击👉[解释器 Interpreter](/posts/interpreter-pattern/)

---

**📌最后：希望本文能够给您提供帮助，文章中有不懂或不正确的地方，请在下方评论区💬留言！**

**🔗参考文献：**

🌐 [设计模式 --refactoringguru](https://refactoringguru.cn/design-patterns#intro-patterns)

📺 [bilibili-趣学设计模式；黄靖锋. --拉勾教育](https://www.bilibili.com/video/BV1hY411Y7zR/?p=1&vd_source=a9a236c4d6e5c5350c70b71ee0727b8c)

📖 图解设计模式 /（日）结城浩著；杨文轩译. --北京：人民邮电出版社，2017.1`,slug:`design-patterns`,path:`/posts/design-patterns/`,wordCount:7873,readingMinutes:24,toc:[{depth:2,slug:`简介`,text:`简介`},{depth:2,slug:`设计原则`,text:`设计原则`},{depth:3,slug:`基本开发原则`,text:`基本开发原则`},{depth:3,slug:`六大设计原则`,text:`六大设计原则`},{depth:2,slug:`设计模式分类`,text:`设计模式分类`},{depth:2,slug:`创建型模式`,text:`创建型模式`},{depth:3,slug:`工厂方法-factory-method`,text:`工厂方法 Factory Method`},{depth:3,slug:`抽象工厂-abstract-factory`,text:`抽象工厂 Abstract Factory`},{depth:3,slug:`生成器-builder`,text:`生成器 Builder`},{depth:3,slug:`原型-prototype`,text:`原型 Prototype`},{depth:3,slug:`单例-singleton`,text:`单例 Singleton`},{depth:2,slug:`结构型模式`,text:`结构型模式`},{depth:3,slug:`适配器-adapter`,text:`适配器 Adapter`},{depth:3,slug:`桥接-bridge`,text:`桥接 Bridge`},{depth:3,slug:`组合-composite`,text:`组合 Composite`},{depth:3,slug:`装饰-decorator`,text:`装饰 Decorator`},{depth:3,slug:`外观-facade`,text:`外观 Facade`},{depth:3,slug:`享元-flyweight`,text:`享元 Flyweight`},{depth:3,slug:`代理-proxy`,text:`代理 Proxy`},{depth:2,slug:`行为型模式`,text:`行为型模式`},{depth:3,slug:`责任链-chain-of-responsibility`,text:`责任链 Chain of Responsibility`},{depth:3,slug:`命令-command`,text:`命令 Command`},{depth:3,slug:`迭代器-iterator`,text:`迭代器 Iterator`},{depth:3,slug:`中介者-mediator`,text:`中介者 Mediator`},{depth:3,slug:`备忘录-memento`,text:`备忘录 Memento`},{depth:3,slug:`观察者-observer`,text:`观察者 Observer`},{depth:3,slug:`状态-state`,text:`状态 State`},{depth:3,slug:`策略-strategy`,text:`策略 Strategy`},{depth:3,slug:`模板方法-template-method`,text:`模板方法 Template Method`},{depth:3,slug:`访问者-visitor`,text:`访问者 Visitor`},{depth:3,slug:`解释器-interpreter`,text:`解释器 Interpreter`}],protected:!1,passwordHint:``,sourcePath:`design-patterns/index.md`},{title:`Duo：和角色一起，住进一部小说`,description:`Duo 是一款本地优先的小说角色扮演应用：角色只记住她认为重要的事，故事时间持续向前，世界在你不说话时也会发生变化。`,publishedAt:`2026-11-16T10:00:00+08:00`,tags:[`Flutter`,`AI 角色扮演`,`LLM`,`本地优先`,`产品设计`],category:`项目`,pinned:!0,rank:1,draft:!1,cover:`/posts/duo/cover.webp`,coverAlt:`Duo 应用的多张手机界面截图`,content:`import { PhoneFrame } from '@/ui/mdx/phone-frame';

我玩过很长时间的 AI 角色扮演。最初，这种体验确实很新鲜：角色随时在线，能接住你的话，也总能给出回应。

但聊得越久，我越觉得有些地方不太对劲。

角色太像客服了。你开口，她回答；你离开，世界就暂停；你换个话题，她也立刻跟着转向。她似乎没有自己的生活，也没有真正属于自己的记忆——上一段对话里的情绪和经历，到了下一段，很快就淡了。

问题或许不在于模型还不够聪明，而在于产品本身的结构。很多 AI 角色扮演产品，把角色设计成一个“很会接话的人”。但如果我们想体验的是一部小说，需要的就不只是一个聊天对象，而是一个**可以真正走进去的世界**。

Duo 就是从这个想法开始的。

<PhoneFrame
  light="./chat-light.webp"
  dark="./chat-dark.webp"
  alt="Duo 的聊天界面：故事场景显示在顶部，对话、贴纸和输入框集中在同一处"
/>

## Duo 是什么

简单来说，**Duo 是一款本地优先的小说角色扮演聊天应用**。

你选择一部小说，再以一个“人设”的身份进入其中，与小说里的角色互动。同一时间只能有一部小说处于当前状态。切换小说，就像走进另一个世界；不同小说之间的故事和身份不会混在一起。

Duo 基于 Flutter 开发，支持 iOS、Android 和 Web。数据保存在你自己的设备上，不需要注册云端账号，也没有应用自建的同步服务器。模型则由你自行配置：只要服务兼容 OpenAI API，就可以接入使用；API 密钥会保存在系统安全存储中。

目前，Duo 还没有上架应用商店，但已经可以直接通过手机浏览器体验。打开网页，进入的就是应用本身，而不是一个展示页面。

## 一个角色，首先需要一个世界

很多角色扮演产品会从角色卡开始：名字、外貌、性格、说话方式。这些当然重要，但角色并不是悬浮在空中的。她生活在某个地方，可能就读于一所学校、工作于某家公司，也会受到特定环境和规则的影响。

因此，Duo 把“世界”作为独立的一层来处理，这一层叫作**设定记忆**。

作者可以把校园背景、城市信息、行业规则，或某个角色私下才知道的经历，整理成不同的知识库。角色在对话中需要相关信息时，可以主动检索，而不是把几万字的设定一次性塞进提示词。

<div className="shot-row">
  <PhoneFrame light="./characters-light.webp" dark="./characters-dark.webp" alt="角色列表" />
  <PhoneFrame
    light="./assets-lore-light.webp"
    dark="./assets-lore-dark.webp"
    alt="设定记忆库，每个知识库都会显示已索引、可供检索的条目数量"
  />
</div>

角色卡回答的是“她是谁”，世界设定回答的则是“她生活在哪里，以及那里如何运转”。把两者分开，角色就不再只是一段孤立的人物设定，而是有了可以依托的生活环境。

## 以自己的身份进入故事

在 Duo 里，你不是一个站在故事之外的旁观者。

进入小说之前，你需要先创建一个**人设**：你在故事里叫什么、长什么样、与其他角色是什么关系，以及有哪些不想让别人轻易知道的事。

这里有两个容易混淆的概念：**用户**和**人设**。用户是使用设备的你，人设则是你在某一部小说中的身份。切换小说时，你也会切换到对应的人设，不会把上一部小说里的身份直接带进另一个世界。

<PhoneFrame
  light="./persona-light.webp"
  dark="./persona-dark.webp"
  alt="人设档案：身份、外貌、简报与备注，构成了你在故事中的角色信息"
/>

人设更像一份人物档案，而不是一份预先写好的剧本。它帮助角色理解你是谁、如何称呼你，以及你在故事中的处境，但不会替你决定说什么或做什么。

## 她记得的，是她选择记住的

这是 Duo 最核心的设计之一，也是它与普通聊天应用最不一样的地方。

不少 AI 角色会持续总结对话，试图尽可能多地记住发生过的事。但人并不是这样记忆的。我们会遗忘，也会筛选；有些事情转眼就忘，有些事情却会被反复想起，甚至随着时间改变理解。

在 Duo 中，角色拥有一本**剧情记忆**。她认为重要的事情，可以由她自己记录下来。被写进剧情记忆的内容，会在之后的每一轮对话中进入上下文；没有被记录的内容，则不会自动变成长期记忆。

除此之外，Duo 还提供了两种辅助机制：

- **对话记录**：保留近期对话窗口，并提供主动检索过往对话的工具。
- **待办**：角色可以为自己安排提醒、提问或后续跟进事项。

这也带来了一个很直接的体验：**开启新会话，就像刚刚醒来。** 角色不会机械地带着上一段对话的全部内容继续聊天，而是带着自己真正记下来的事情，进入新的场景。

这并不只是“失忆”。它更接近人与人分别一段时间后，再次见面时的状态：有些细节已经模糊，但真正重要的事情仍然留在心里。

## 故事里的时间，真的会向前走

<PhoneFrame
  light="./sessions-light.webp"
  dark="./sessions-dark.webp"
  alt="会话列表顶部显示的是故事中的时间，而不只是现实世界里的消息时间"
/>

很多聊天应用里的时间，更像是一个装饰：无论故事过去了多久，打开应用时，角色和场景似乎都还停留在刚才。

Duo 为每部小说设置了一根**故事时钟**。

作者可以指定故事开始的时间，而故事真正开始推进，是从你发送第一条消息时开始的。此后，故事时间会持续向前，每条消息也都会带有对应的故事时间。

你可以手动调整时钟，但只能向未来推进，不能通过调整时间改写已经经历过的过去。你也可以暂停故事：暂停期间，时间会停在原处，不会因为你暂时离开，就让角色在你看不到的地方悄悄度过一天。

此外，只有当前正在使用的小说会继续推进；切换到其他小说后，原来的世界也会随之停下来。

因此，对角色来说，“现在几点”“今天发生了什么”“我们多久没见了”，都不再只是可以随口生成的台词，而是有故事时间作为依据。像“晚上好”或“你昨晚没睡吗”这样的对话，也因此有了更明确的时间背景。

## 即使你不说话，世界也会发生事情

如果故事里只有你和角色两个人，互动很容易逐渐变成一场持续不断的面对面聊天。

但真实的世界不会只围绕着两个人运转。

为此，Duo 引入了**事件**机制。一场突如其来的雨、一次临时通知，或一个没有提前约好的饭局，都可以成为故事中的事件。事件既可以由专门的 AI 生成，也可以由作者手动编写。

这里有一条重要的边界：事件可以描述世界发生了什么，也可以描述角色的处境，但**必须为你留下参与空间，不能替你行动、感受或作出决定**。

例如，事件可以写“通知贴出来了，你正好路过”，但不能直接写成“你已经报名参加了”。前者把一个情境交给你，后者则越过了你的选择。

事件也不会由正在和你聊天的角色生成。负责生成事件的 AI 无法读取你们的对话记录，避免角色借助事件生成机制，把聊天中说过的话包装成已经发生的世界事实。

每个事件结束后，系统还会生成一段后记，并整理这一事件中值得保留的记忆。这也是整套系统中，唯一一次自动写入剧情记忆的时机。

## 一部小说，也可以分享给别人

<PhoneFrame
  light="./market-light.webp"
  dark="./market-dark.webp"
  alt="小说市场：发布的是一部小说的定义，而不是某个用户的个人存档"
/>

如果每个人都要从零开始搭建世界、编写角色，使用门槛就会很高。因此，Duo 提供了一个**市场**，让小说内容可以被整理、发布和安装。

市场中发布的不是某个人的游戏存档，而是一部小说的**定义**。它包含小说本身、人设、设定记忆、角色，以及这些内容之间的绑定关系。

与之相对，你在体验过程中产生的剧情记忆、待办、会话和进度，都属于个人数据，不会随着小说定义一起发布。别人安装的是这部小说的内容，而不是你的游玩经历。

为了保护本地修改，小说包带有完整性校验。安装后，如果你在本地修改过内容，应用会尽可能保护这些改动，避免在你不知情的情况下被覆盖。升级时也会尽量保留现有进度；如果新版本删除了你正在使用的内容，应用会先给出警告。

代码仓库中还附带了一部可以直接安装的官方小说，作为完整示例。你可以先体验它，也可以参考它的结构，制作自己的小说。

## 技术栈

Duo 目前是一个单应用包仓库，客户端使用 Flutter stable（Dart SDK ^3.11.5），同时面向 Android、iOS 和 Web。

| 关注点         | 选择                                         | 说明                                    |
| -------------- | -------------------------------------------- | --------------------------------------- |
| 领域模型       | Freezed 3 + json_serializable                | 领域层不依赖 Flutter、Riverpod 或 Drift |
| 持久化         | Drift / SQLite                               | 数据层按聚合拆 repository               |
| 依赖注入与状态 | Riverpod 3                                   | 没有引入 get_it                         |
| 错误模型       | \`Result<T>\` + Freezed sealed \`DomainFailure\` | repository 不向外泄漏 Drift / IO 类型   |
| 路由           | go_router 17 + Shell                         | 页面结构与信息架构分开维护              |
| 模型接入       | OpenAI 兼容 HTTP + models.dev 目录           | 密钥放在系统安全存储中                  |

界面层用 FlexColorScheme 驱动 Material 3 的 ThemeData，seed 色取自一份配色目录，没有并行的 token 层；图标用 Tabler，插画用 unDraw，头像用 DiceBear。日志走 talker，国际化用 ARB / AppLocalizations，英文先行。

小说包 \`.duopkg\` 本身是一个 zip，用 \`archive\` 打包、\`pub_semver\` 做版本比较，安装与升级都基于它完成。

## Duo 适合谁

- **喜欢角色扮演，但不满足于普通 AI 陪聊的人**：希望角色拥有自己的世界、记忆和时间，而不只是一个随时等待回复的聊天对象。
- **小说作者和世界观设定爱好者**：想让自己创作的世界真正运转起来，看看角色在其中会如何互动。
- **重视数据自主权的人**：希望对话和故事数据保存在自己的设备上，而不是依赖某个云端账号。
- **喜欢尝试不同模型的人**：可以自行配置兼容 OpenAI API 的模型服务，不必等待应用官方接入特定模型。

当然，如果你只想找一个秒回消息、永远顺着你说话的聊天对象，Duo 可能不是最省事的选择。

它更像是一部需要你亲自走进去、并在其中生活一段时间的小说。

## 现在就可以体验

Duo 目前还没有上架应用商店，但已经可以完整体验：

- **在线试玩**：用手机浏览器打开 [Duo](https://heyelio.github.io/duo-app)。网页本身就是应用，不是录屏或静态展示页。选择一部小说，就可以进入故事。
- **查看源码和自行构建**：访问 [GitHub 仓库](https://github.com/heyelio/duo)。项目使用 Flutter 开发，采用 GPL-3.0 许可证，支持构建 iOS、Android 和 Web 版本。

首次打开应用时，你需要配置一个兼容 OpenAI API 的模型接口，并填写对应的密钥。完成后，就可以开始体验故事。除此之外，不需要注册 Duo 的云端账号。

## 常见问题

**数据存在哪里？会上传吗？**

数据保存在设备本地数据库中。为了生成回复，当前对话所需的上下文会发送给你配置的模型服务；除此之外，应用不会将数据上传到 Duo 自己的服务器。Duo 没有自建服务器。

**一定要自己配置模型吗？**

是的。Duo 不内置模型。你需要填写兼容 OpenAI API 的接口地址、模型名称和密钥，密钥会保存在系统安全存储中。生成回复时需要联网，但应用本身和故事数据都保存在本地。

**界面支持中文吗？**

目前应用界面为英文。故事使用哪种语言，则取决于你安装的小说定义和所使用的模型。

**Duo 和普通 AI 聊天有什么区别？**

普通聊天通常围绕“你说一句，AI 回一句”展开。Duo 则先为你提供一个世界、一种身份和一根持续推进的故事时钟，再让角色在这个世界中记忆、遗忘，并安排自己的事情。你暂时不说话时，故事也不必停留在聊天框里。

**换手机怎么办？**

目前 Duo 不提供云同步，数据保存在本机。更换设备时，暂时无法通过 Duo 账号自动恢复数据。

## 最后

我做 Duo，是因为我想要一个可以随时“回去”的地方。

它不应该只是一个打开后就堆满待回复消息的聊天窗口，而应该是一个即使我暂时离开，也依然有自己的时间、角色和日常的世界。

如果你也有过类似的感受——明明聊得很热闹，却总觉得屏幕另一端少了点真实感——也许可以试试 Duo。

**用手机浏览器打开 [Duo](https://heyelio.github.io/duo-app)，选一部小说，走进去。**`,slug:`duo`,path:`/posts/duo/`,wordCount:5334,readingMinutes:18,toc:[{depth:2,slug:`duo-是什么`,text:`Duo 是什么`},{depth:2,slug:`一个角色首先需要一个世界`,text:`一个角色，首先需要一个世界`},{depth:2,slug:`以自己的身份进入故事`,text:`以自己的身份进入故事`},{depth:2,slug:`她记得的是她选择记住的`,text:`她记得的，是她选择记住的`},{depth:2,slug:`故事里的时间真的会向前走`,text:`故事里的时间，真的会向前走`},{depth:2,slug:`即使你不说话世界也会发生事情`,text:`即使你不说话，世界也会发生事情`},{depth:2,slug:`一部小说也可以分享给别人`,text:`一部小说，也可以分享给别人`},{depth:2,slug:`技术栈`,text:`技术栈`},{depth:2,slug:`duo-适合谁`,text:`Duo 适合谁`},{depth:2,slug:`现在就可以体验`,text:`现在就可以体验`},{depth:2,slug:`常见问题`,text:`常见问题`},{depth:2,slug:`最后`,text:`最后`}],protected:!1,passwordHint:``,sourcePath:`duo/index.mdx`},{title:`动态规划：从爬楼梯开始`,description:`动态规划解题步骤与例题训练，包含爬楼梯、最长回文子串、最长递增子序列等经典问题。`,publishedAt:`2023-04-09T17:55:00+08:00`,updatedAt:`2023-04-09T17:55:00+08:00`,tags:[`算法`,`动态规划`,`LeetCode`],category:`算法`,pinned:!0,rank:4,draft:!1,cover:`/posts/dynamic-programming/cover.webp`,coverAlt:`动态规划封面`,content:`> 动态规划是把原问题分解为相对简单的子问题的方式求解复杂问题的方法。常常用于解决有重叠子问题和最优子结构性质的问题。

**🔍解题步骤：** 确定状态、设计状态转移方程、考虑初始条件和边界情况、计算顺序、优化代码。

在使用动态规划解题时，我们需要思考：

❓ 什么是"已知态"？

❓ 什么是"未知态"？

❓ 通过"已知态"如何去获取"未知态"？

## ✅解题步骤一：确定状态

🔖 动态规划其实就是通过"❗已知态"去获取"❓未知态"的状态转移算法。通过一个"📝备忘录"去记录"状态"，在下次需要的时候不需要重新计算，可以直接使用。

👉 确定状态一般三个步骤：

1. 研究最优策略的最后一步，一般是列举最后一步的所有可能进行分析。
2. 通过研究最后一步与倒数第二步或第三步...之间的关系发现规律，化为子问题。在这个过程中，我们需要确定"已知态"和"未知态"。
3. 根据子问题来创建状态数组保存"已知态"。一般来说，子问题有几个变量就是几维数组。

❗ 最关键的地方就是要**确定状态数组的每个元素表示什么**。状态数组通常是 \`dp[i]\` 或 \`dp[i][j]\`。

## ✅解题步骤二：设计状态转移方程

🔖 动态规划中本阶段的状态往往是上一阶段状态和上一阶段决策的结果。状态转移方程就是用来表示它们的公式。换言之就是设计出一个递推公式。

❗ 设计状态转移方程就是思考"如何通过 _已知态_ 去获取 _未知态_ ？"，并将它们的关系用公式表示出来。这也是动态规划中最关键的一步。

## ✅解题步骤三：初始条件和边界情况

🔖 初始条件：用状态转移方程无法计算出来，但我们又需要它的定义。即**给出递推公式的基本条件**。

🔖 边界情况：根据题目和状态转移方程判断边界情况，**剔除出界情况**。

## ✅解题步骤四：计算顺序

❗ 通过思考"要想计算本次状态还需要依靠哪些状态"来确定计算顺序。换句话说，就是确定计算顺序要利用之前得出的结果来判断。一般是从小到大，从上到下，从左到右。

## ✅解题步骤五：优化代码

🔖 动态规划可以说是一种"空间换时间"的算法。所以对于优化动态规划代码，我们可以选择：

👉 优化空间：减少状态转移变量的记录数。例如，那些只需要使用一次的转移状态变量，可以在使用后，通过覆盖的方式让其去记录新的状态转移变量。这样就可以减少内存消耗。

👉 优化时间：减少状态转移的时间。例如，用更好的算法去减少计算递推式的时间。

❗ 在使用动态规划解题时，应该先解题再优化，把解题放在第一位。

## 例题训练

### 1. 爬楼梯

#### 1.1. 🔍题目要求

**难度：**<span style="color:green">简单</span> | \`LeetCode\` | 🔗[链接直达](https://leetcode.cn/problems/climbing-stairs/)

假设你正在爬楼梯。需要 \`n\` 阶你才能到达楼顶。

每次你可以爬 \`1\` 或 \`2\` 个台阶。你有多少种不同的方法可以爬到楼顶呢？

**📃示例 1：**

\`\`\`text
输入：n = 2
输出：2
解释：有两种方法可以爬到楼顶。
1. 1 阶 + 1 阶
2. 2 阶
\`\`\`

**📃示例 2：**

\`\`\`text
输入：n = 3
输出：3
解释：有三种方法可以爬到楼顶。
1. 1 阶 + 1 阶 + 1 阶
2. 1 阶 + 2 阶
3. 2 阶 + 1 阶
\`\`\`

**🎗️提示：**

- \`1 <= n <= 45\`

#### 1.2. 💡题目分析

1️⃣ 在该题目中，最后一步是走到第 n 阶。那么它的上一步可能是第 n - 1 阶也可能是第 n - 2 阶。因为我们可以走一步或者走两步。

- 假设为第 n - 1 阶，那么能到达第 n 阶的方法只有一种，即"走一步"。
- 假设为第 n - 2 阶，那么能到达第 n 阶的方法有两种，即"一步一步走"或"一次走两步"。

那么继续对倒数第二步（第 n - 1 阶 或第 n - 2 阶）分析，我们也能得出类似的结果。那么我们就能够推断出第 n 阶只与第 n - 1 阶和第 n - 2 阶有关。

要想知道走到第 n 阶有多少种不同的方法，那么首先就要知道走到第 n - 1 阶和第 n - 2 阶有多少不同的方法。"未知态"就是走到第 n 阶有多少种不同的方法；"已知态"就是走到第 n - 1 阶和第 n - 2 阶有种多少不同的方法。那么就可以得出状态数组 \`dp[i]\` 表示走到第 i 阶有多少种不同的方法。

2️⃣ 通过"状态数组 \`dp[i]\` 表示走到第 i 阶有多少种不同的方法"和"要想知道走到第 i 阶有多少种不同的方法，那么首先就要知道走到第 i - 1 阶和第 i - 2 阶有多少不同的方法。"，我们能够得出状态转移方程为：\`dp[i] = dp[i - 1] + dp[i - 2]\`。

3️⃣ 初始条件为 \`dp[1]\` 和 \`dp[2]\`，因为我们无法用之前的状态得出它们的值。那么边界条件也显而易见了，为 \`i >= 3\`。

4️⃣ 由于需要根据 f(i - 1) 和 f(i - 2) 得出 f(i)，那么计算顺序就是 f(1) -> f(n)。

#### 1.3. ⌨️代码实现

\`\`\`java
class Solution {
    public int climbStairs(int n) {
        int dp[] = new int[n + 1];
        if (n == 1) return 1;
        if (n == 2) return 2;
        dp[1] = 1;
        dp[2] = 2;
        for (int i = 3; i <= n; i++) {
            dp[i] = dp[i - 2] + dp[i - 1];
        }
        return dp[n];
    }
}
\`\`\`

#### 1.4. ♻️代码优化

从上述代码中可以看到，它利用到的状态只有 \`dp[i - 2]\` 和 \`dp[i - 1]\`，那么就可以简化为两个变量。

\`\`\`java
class Solution {
    public int climbStairs(int n) {
        if (n == 1) return 1;
        if (n == 2) return 2;
        int dp1 = 1;
        int dp2 = 2;
        int tmp = 0;
        for (int i = 3; i <= n; i++) {
            tmp = dp2;
            dp2 = dp1 + dp2;
            dp1 = tmp;
        }
        return dp2;
    }
}
\`\`\`

### 2. 最长回文子串

#### 2.1 🔍题目要求

**难度：**<span style="color:orange">中等</span> | \`LeetCode\` | 🔗[链接直达](https://leetcode.cn/problems/longest-palindromic-substring/)

给你一个字符串 \`s\`，找到 \`s\` 中最长的回文子串。

如果字符串的反序与原始字符串相同，则该字符串称为回文字符串。

**📃示例 1：**

\`\`\`text
输入：s = "babad"
输出："bab"
解释："aba" 同样是符合题意的答案。
\`\`\`

**📃示例 2：**

\`\`\`text
输入：s = "cbbd"
输出："bb"
\`\`\`

**🎗️提示：**

- \`1 <= s.length <= 1000\`
- \`s\` 仅由数字和英文字母组成

#### 2.2. 💡题目分析

1️⃣ 最优决策下的最后一步是"最长回文子串的第一个字符的下标为 i，最后一个字符下标为 j。这里用 f(i, j) 表示下标从 i 到 j 为最长回文子串（包含 i 和 j）。依此类推，倒数第二步就是 f(i + 1, j - 1)，倒数第三步就是 f(i + 2, j - 2)...

从中我们可以看出，要想 f(i, j) 成立，就必须满足"f(i + 1, j - 1) 成立"和"\`s[i] == s[j]\`"。<span style="color:gray">\`s[i]\` 表示字符串的第 i 个字符。</span>

那么就能得出"已知态"就是 f(i + 1, j - 1)，"未知态"就是 f(i, j)。使用状态数组 \`dp[i][j]\` 来保存"已知态"。\`dp[i][j]\` 表示下标从 i 到 j 的字符子串，如果是回文子串则为 \`true\`。<span style="color:gray">因为我们假定 f(i, j) 表示 i 到 j 为最长回文子串是最优策略。所以在非最优策略的时候，f(i, j) 表示的应该是下标从 i 到 j 的字符子串，并不一定是回文子串。</span>

2️⃣ 根据"状态数组 \`dp[i][j]\`"和"要想 \`dp[i][j]\` 成立，就必须满足 \`dp[i + 1][j - 1] == true\` 和 \`s[i] == s[j]\`。"可以得出状态转移方程为：\`dp[i][j] = dp[i + 1][j - 1] && s[i] == s[j]\`。

3️⃣ 对于初始条件和边界情况的判断，需要先列一个 \`dp表格\`，这里假设字符串长度为 7，如下表：

|  0  |  1  |  2  |  3  |  4  |  5  |     6     |
| :-: | :-: | :-: | :-: | :-: | :-: | :-------: |
| ✔️  |     |     |     |     |     |   \`end\`   |
| ❌  | ✔️  |     |     |     |     |           |
| ❌  | ❌  | ✔️  |     |     |     |           |
| ❌  | ❌  | ❌  | ✔️  |     |     |           |
| ❌  | ❌  | ❌  | ❌  | ✔️  |     |           |
| ❌  | ❌  | ❌  | ❌  | ❌  | ✔️  |           |
| ❌  | ❌  | ❌  | ❌  | ❌  | ❌  | ✔️\`start\` |

上述表格中，❌表示错误情况，不需要考虑；✔️表示我们需要计算的 \`true\`，✖️表示我们需要计算的 \`false\`；\`start\` 和 \`end\` 分别表示开始遍历的起点和终点。

💡那么可以得出以下几种情况：

1. i > j：错误情况，下标不可能存在 i > j 的情况，这样子串就变成逆序了，故排除。
2. i = j：即只有一个字符时，永远为回文子串，所以 \`dp[i][j]\` 为 \`true\`。
3. i < j：使用状态转移方程 \`dp[i][j] = dp[i + 1][j - 1] && s[i] == s[j]\` 进行判断。
   - \`s[i] != s[j]\`：必为 \`false\`。
   - \`s[i] == s[j] && i + 1 == j\`：即两个字符，且两个字符相等时，永远为回文子串，所以 \`dp[i][j]\` 为 \`true\`。
   - \`s[i] == s[j] && i + 1 < j\`： \`dp[i][j] = dp[i + 1][j - 1]\`。

边界条件：\`0 <= i <= j < s.length()\`。

💡假设要求 \`dp[0][6]\` 那么就要先求 \`dp[1][5]\`，还要先求 \`dp[2][3]\`。那么我们就知道，要求表格上面的值时，应该先求表格下面的值。

初始条件：\`i = s.length() - 1\`、\`j = i\`。

4️⃣ 根据上面的分析和表格，我们可以得出计算顺序是"从下到上"、"从左到右"。

#### 2.3. ⌨️代码实现

\`\`\`java
class Solution {
    public String longestPalindrome(String s) {
        int len = s.length();
        if (len < 2) {
            return s;
        }

        boolean[][] dp = new boolean[len][len];
        /** 回文子串的字符数量（最长回文子串长度） */
        int maxLen = 1;
        /** 回文子串的开始下标 */
        int start = 0;

        for (int i = len - 1; i >= 0; i--) {
            for (int j = i; j < len; j++) {
                if (i == j) {
                    dp[i][j] = true;
                } else if (s.charAt(i) != s.charAt(j)) {
                    dp[i][j] = false;
                } else {
                    dp[i][j] = i + 1 == j ? s.charAt(i) == s.charAt(j) : dp[i + 1][j - 1];
                }

                // 如果当前子串是回文子串且长度比最长回文子串的长度长，则更新下标。
                if (dp[i][j] && (j - i + 1) >= maxLen) {
                    start = i;
                    maxLen = j - i + 1;
                }
            }
        }

        // 如果无回文子串，则返回第一个字符
        return s.substring(start, start + maxLen);
    }
}
\`\`\`

#### 2.4. ♻️代码优化

暂时想不到应该如何优化...

### 3. 最长递增子序列

#### 3.1. 🔍题目要求

**难度：**<span style="color:orange">中等</span> | \`LeetCode\` | 🔗[链接直达](https://leetcode.cn/problems/longest-increasing-subsequence/)

给你一个整数数组 \`nums\` ，找到其中最长严格递增子序列的长度。

**子序列** 是由数组派生而来的序列，删除（或不删除）数组中的元素而不改变其余元素的顺序。

例如，\`[3,6,2,7]\` 是数组 \`[0,3,1,6,2,2,7]\` 的子序列。

**📃示例 1：**

\`\`\`text
输入：nums = [10,9,2,5,3,7,101,18]
输出：4
解释：最长递增子序列是 [2,3,7,101]，因此长度为 4 。
\`\`\`

**📃示例 2：**

\`\`\`text
输入：nums = [0,1,0,3,2,3]
输出：4
\`\`\`

**📃示例 3：**

\`\`\`text
输入：nums = [7,7,7,7,7,7,7]
输出：1
\`\`\`

**🎗️提示：**

- \`1 <= nums.length <= 2500\`
- -10<sup>4</sup> &lt;= \`nums[i]\` &lt;= 10<sup>4</sup>

**🆙进阶：**

- 你能将算法的时间复杂度降低到 \`O(n log(n))\` 吗?

#### 3.2. 💡题目分析

1️⃣ 最优策略下的最后一步：下标为 i 的元素是最长严格递增子序列的最后一个数，长度为 n。这里用 f(i) = n 来表示。那么倒数第二步则为 f(j) = n - 1，倒数第三步则为 f(k) = n - 2 ...

在这些最优决策的步骤下，包含以下关系：

1. i > j > k。
2. f(k) + 2 = f(j) + 1 = f(i) + 1。

那么，要想得到 f(i) 的值，就要先求 f(j) 的值。

所以，可以看出"已知态"就是 f(j)，"未知态"就是 f(i)。状态数组 \`dp[i]\` 用来表示以下标 i 结尾的最长严格递增子序列的长度。

2️⃣ 从上述中，我们总结出几点：

- \`j < i\`：j 与 i 不一定是相邻的，但是它们一定是连续的。
- \`nums[j] < nums[i]\`：i 所指向的数一定是大于 j 所指向的数，因为是递增子序列。
- \`dp[i]\`：意味着在以下标 i 结束的递增子序列中，长度最长。

那么，状态转移方程：在满足 \`nums[j] < nums[i]\`（递增）的情况下，\`dp[i] = max{dp[0], ..., dp[i - 1]} + 1\`。

3️⃣ 通过上述状态转移方程可以得知，我们需要一个循环 \`i\` 用来遍历 \`nums数组\`，另一个循环 \`j\` 用来往回遍历 \`dp数组\`。那么初始条件：\`dp[0] = 1\`、\`i = 1\`、\`j = i - 1\`；边界条件: \`nums.length > i > j >= 0\`。

4️⃣ 计算顺序：\`i\` 从左到右遍历 \`nums数组\`，\`j\` 从右到左比较 \`dp数组\`。

#### 3.3. ⌨️代码实现

\`\`\`java
class Solution {
    public int lengthOfLIS(int[] nums) {
        int len = nums.length;
        if (len == 1) return 1;
        int[] dp = new int[len];
        dp[0] = 1;
        int max = 1;
        for (int i = 1; i < len; i++) {
            for (int j = i - 1; j >= 0; j--) {
                if (dp[j] == 0) {
                    dp[j] = 1;
                }
                if (nums[i] > nums[j]) {
                    dp[i] = Math.max(dp[j] + 1, dp[i]);
                }
            }
            // 获取最长严格递增子序列的长度
            max = Math.max(max, dp[i]);
        }
        return max;
    }
}
\`\`\`

#### 3.4. ♻️代码优化

暂时想不到应该如何优化...

---

**📌最后：希望本文能够给您提供帮助，文章中有不懂或不正确的地方，请在下方评论区💬留言！**

**🔗参考文献：**

📺 [bilibili - 【动态规划专题班】ACM总冠军、清华+斯坦福大神带你入门动态规划算法；侯卫东. –九章算法](https://www.bilibili.com/video/BV1xb411e7ww/?spm_id_from=333.337.search-card.all.click&vd_source=a9a236c4d6e5c5350c70b71ee0727b8c)`,slug:`dynamic-programming`,path:`/posts/dynamic-programming/`,wordCount:6344,readingMinutes:13,toc:[{depth:2,slug:`解题步骤一确定状态`,text:`✅解题步骤一：确定状态`},{depth:2,slug:`解题步骤二设计状态转移方程`,text:`✅解题步骤二：设计状态转移方程`},{depth:2,slug:`解题步骤三初始条件和边界情况`,text:`✅解题步骤三：初始条件和边界情况`},{depth:2,slug:`解题步骤四计算顺序`,text:`✅解题步骤四：计算顺序`},{depth:2,slug:`解题步骤五优化代码`,text:`✅解题步骤五：优化代码`},{depth:2,slug:`例题训练`,text:`例题训练`},{depth:3,slug:`h-1-爬楼梯`,text:`1. 爬楼梯`},{depth:4,slug:`h-11-题目要求`,text:`1.1. 🔍题目要求`},{depth:4,slug:`h-12-题目分析`,text:`1.2. 💡题目分析`},{depth:4,slug:`h-13-代码实现`,text:`1.3. ⌨️代码实现`},{depth:4,slug:`h-14-代码优化`,text:`1.4. ♻️代码优化`},{depth:3,slug:`h-2-最长回文子串`,text:`2. 最长回文子串`},{depth:4,slug:`h-21-题目要求`,text:`2.1 🔍题目要求`},{depth:4,slug:`h-22-题目分析`,text:`2.2. 💡题目分析`},{depth:4,slug:`h-23-代码实现`,text:`2.3. ⌨️代码实现`},{depth:4,slug:`h-24-代码优化`,text:`2.4. ♻️代码优化`},{depth:3,slug:`h-3-最长递增子序列`,text:`3. 最长递增子序列`},{depth:4,slug:`h-31-题目要求`,text:`3.1. 🔍题目要求`},{depth:4,slug:`h-32-题目分析`,text:`3.2. 💡题目分析`},{depth:4,slug:`h-33-代码实现`,text:`3.3. ⌨️代码实现`},{depth:4,slug:`h-34-代码优化`,text:`3.4. ♻️代码优化`}],protected:!1,passwordHint:``,sourcePath:`dynamic-programming/index.md`},{title:`E-R 图：传统画法与 IE 模型`,description:`E-R 图的画法介绍，包括传统画法与改进的 IE 模型画法。`,publishedAt:`2023-03-09T08:17:00+08:00`,updatedAt:`2023-03-09T08:17:00+08:00`,tags:[`数据库`,`E-R图`,`UML`],category:`软件建模`,pinned:!1,draft:!1,cover:`/posts/er-diagram/cover.webp`,coverAlt:`E-R 图封面`,content:`想要了解数据库中有多少元素和这些元素之间的关联是非常复杂的，所以我们需要一种更加直观的方式来理解这些独立元素元素是如何相互关联的，以及它们是如何合作的。这种方法就是 E-R 图。下面是一段来自百度百科🌐对 E-R 图的描述：

> E-R图也称实体-联系图(Entity Relationship Diagram)，提供了表示实体类型、属性和联系的方法，用来描述现实世界的概念模型。
>
> 用"矩形框"表示实体型，矩形框内写明实体名称；用"椭圆图框"或圆角矩形表示实体的属性，并用"实心线段"将其与相应关系的"实体型"连接起来；
>
> 用"菱形框"表示实体型之间的联系成因，在菱形框内写明联系名，并用"实心线段"分别与有关实体型连接起来，同时在"实心线段"旁标上联系的类型（1 : 1, 1 : n 或 m : n ）。

👉 这是一种较为老式的 E-R 图画法由 Peter Chen👨‍💻 提出。由下图所示：

![传统 E-R图画法](./87fc41d8017325b700b4c46f787cf9df.webp)

如果当我们的实体属性有很多时，就会造成图上的椭圆图框太多，E-R 图也变得混乱起来。所以我们要用一种改进的 E-R 图画法。下面就来分享一下这种改进的 E-R 图画法。

👉 这是一种 Information Engineering - IE 模型，改进的 E-R 图关系如下：

![IE 模型关系](./5a438852ca1754dda16db7e995bc8380.webp)

👉 改进的 E-R 图如下：

![改进的 E-R 图](./9eb5e7723b5635a2eced1fb849e406d7.webp)

从上图可以得出，我们可以用 \`PK\` 标记为主键（📕特征：必须唯一、永不改变、不能为空。），\`FK\` 标记为外键。将外键和其对应的其他表的字段连接起来。不同的画图软件可能对于表的画法不同，但如果是 IE 模型，那么表与表之间的关系的画法是不变的。

👉 对于复合主键（📕原则：使用尽可能少的属性、不要使用容易改变的属性。），我们可以按下图表示：

![复合主键表示](./4b03c175ccee917f8116eca0bbc68e52.webp)

👉 在我们需要详细构建数据表的时候，我们可以为它们指定类型，如下图所示：

![指定数据类型](./d2ce14c1789b9d5b168a7e84b0b9fa82.webp)

---

**📌最后：希望本文能够给您提供帮助，文章中有不懂或不正确的地方，请在下方评论区💬留言！**

**🔗参考文献：**

🌐 [E-R图 --百度百科](https://baike.baidu.com/item/E-R%E5%9B%BE/304954)

📺 [bilibili - UML ER图 part1](https://www.bilibili.com/video/BV1tK411P7N2/?spm_id_from=333.1007.top_right_bar_window_default_collection.content.click&vd_source=a9a236c4d6e5c5350c70b71ee0727b8c)

📺 [bilibili - UML ER图 part2](https://www.bilibili.com/video/BV1uK411V7gz/?spm_id_from=333.788.recommend_more_video.-1&vd_source=a9a236c4d6e5c5350c70b71ee0727b8c)`,slug:`er-diagram`,path:`/posts/er-diagram/`,wordCount:1443,readingMinutes:3,toc:[],protected:!1,passwordHint:``,sourcePath:`er-diagram/index.md`},{title:`外观模式：给复杂系统一个入口`,description:`外观模式是一种结构型设计模式，能为程序库、框架或其他复杂类提供一个简单的接口或为子系统中的一组接口提供统一的接口。它定义了一个更高级别的接口，使子系统更易于使用。`,publishedAt:`2023-04-04T14:42:00+08:00`,updatedAt:`2023-04-04T14:42:00+08:00`,tags:[`设计模式`,`结构型模式`,`外观模式`],category:`设计模式`,series:`设计模式`,seriesOrder:11,pinned:!1,draft:!1,cover:`/posts/facade-pattern/cover.webp`,coverAlt:`外观模式封面`,content:`**外观模式**是一种结构型设计模式，能为程序库、框架或其他复杂类提供一个简单的接口或为子系统中的一组接口提供统一的接口。它定义了一个更高级别的接口，使子系统更易于使用。

外观模式的本质是**简化调用，统一操作。**

## 为什么要使用？

**外观模式的对象职责：**

**为一些类提供一个简单或统一的接口。**

例如，使用 \`Slf4j\` 日志🗒️框架统一 \`log4j\`、\`log4j2\`、\`CommonLog\` 等日志框架。\`Slf4j\` 作为一个日志门面让我们无需关注日志实现就能实现日志功能。即使未来会出现更多的日志实现，只要依赖日志门面开发，那么就不需要额外的学习成本去学习新的日志框架。而且，就算后期系统需要更换日志实现，也不需要修改代码。只需要变更日志门面依赖的日志实现即可。

外观模式能让复杂的东西看起来简单，当我们在向其他人说使用这个类需要先调用那个类，还要在那个类注册一下时，我们就需要使用外观模式来统一并简化接口了。除此之外，在解决遗留系统重构的问题或分层架构中的扩展问题等也能使用外观模式。

## 模式结构

- **外观**（Facade）提供了一种访问特定子系统功能的便捷方式，其了解如何重定向客户端请求，知晓如何操作一切活动部件。
- 创建**附加外观**（Additional Facade）类可以避免多种不相关的功能污染单一外观，使其变成又一个复杂结构。客户端和其他外观都可使用附加外观。
- **复杂子系统**（Complex Subsystem）由数十个不同对象构成。如果要用这些对象完成有意义的工作，你必须深入了解子系统的实现细节，比如按照正确顺序初始化对象和为其提供正确格式的数据。<span style="color:gray">子系统类不会意识到外观的存在， 它们在系统内运作并且相互之间可直接进行交互。</span>
- **客户端**（Client）使用外观代替对子系统对象的直接调用。

**外观模式的类图：**

![外观模式的类图](./e77e801629c4d6151c419f66692b9ccb.webp)

从类图中，我们可以看出外观模式并没有具体的实现。

外观模式本身并不是一个代码实现的模式，而是组合更多的其他模式来使用的一种通用解决方案。

## 模式实现

该示例使用外观模式来为 Markdown 文档提供一个简单的生成接口。

### 示例程序的类图

![示例程序的类图](./9cbd373edc153b594ce1918bab06b2bd.webp)

### 代码实现

#### 外观

\`\`\`java
package example;

/** 外观类 */
public class PageMaker {
    private PageMaker() {}

    /** 简化接口，生成欢迎页面 */
    public static void makeWelcomePage() {
        MarkdownWriter markdownWriter = new MarkdownWriter();
        String bilibili = Database.getProperties("Bilibili");
        String bing = Database.getProperties("Bing");
        String heyelio = Database.getProperties("Heyelio");
        String github = Database.getProperties("Github");
        markdownWriter.printTitle("欢迎页面");
        markdownWriter.printQuote("软件设计模式（Design pattern），又称设计模式，是一套被反复使用、多数人知晓的、经过分类编目的、代码设计经验的总结。使用设计模式是为了可重用代码、让代码更容易被他人理解、保证代码可靠性、程序的重用性。");
        markdownWriter.printParagraph("上个世纪 90 年代，Eric Gamma、Richard Helm、Ralph Johnson、John Vlissides 等 4 人合作出版了《设计模式：可复用面向对象软件的基础》。而 “设计模式” 这个概念也是从中而来。这 4 人也被称为 the Gang of Four，简称 GoF。\\n" + "\\n" + "“设计模式” 共 23 种，是一种能够提高代码可复用性、可维护性、可读性、稳健性以及安全性的解决方案。它是解决某些特定问题的一般性概念，能够根据需求进行调整，用于解决代码中反复出现的设计问题。\\n" + "\\n" + "合理利用 “设计模式” 开发会给我们带来很多的便利。而如何合理的运用就在于学会 “找到变化，封装变化”。\\n");
        markdownWriter.printTitle("其他链接");
        markdownWriter.printLink(heyelio, "博客主页");
        markdownWriter.printLink(bing, "必应");
        markdownWriter.printLink(github, "Github");
        markdownWriter.printLink(bilibili, "哔哩哔哩");
    }
}
\`\`\`

#### 复杂子系统

\`\`\`java
package example;

import java.util.HashMap;
import java.util.Map;

/** 获取数据的子系统类 */
public class Database {
    private Database() { }

    /**
     - 获取数据
     - @param name key
     - @return value
     */
    public static String getProperties(String name) {
        Map<String, String> map = new HashMap<>(4);
        map.put("Bilibili", "https://www.bilibili.com");
        map.put("Bing", "https://cn.bing.com");
        map.put("Heyelio", "https://heyelio.github.io");
        map.put("Github", "https://github.com");
        if (map.containsKey(name)) {
            return map.get(name);
        }
        return "";
    }
}
\`\`\`

\`\`\`java
package example;

/** 生成markdown的子系统类 */
public class MarkdownWriter {
    /**
     - 打印标题
     - @param title 标题
     */
    public void printTitle(String title) {
        System.out.println("## " + title);
    }

    /**
     - 打印链接
     - @param link 链接
     - @param name 名字
     */
    public void printLink(String link, String name) {
        System.out.println("* [" + name + "](" + link + ")");
    }

    /**
     - 打印正文
     - @param content 内容
     */
    public void printParagraph(String content) {
        System.out.println(content);
    }

    /**
     - 打印引用
     - @param content 内容
     */
    public void printQuote(String content) {
        System.out.println("> " + content + "\\n");
    }
}
\`\`\`

### 代码测试

\`\`\`java
import example.PageMaker;

/** 测试外观模式 */
public class Test {
    public static void main(String[] args) {
        PageMaker.makeWelcomePage();
    }
}
\`\`\`

### 输出结果

\`\`\`markdown
## 欢迎页面

> 软件设计模式（Design pattern），又称设计模式，是一套被反复使用、多数人知晓的、经过分类编目的、代码设计经验的总结。使用设计模式是为了可重用代码、让代码更容易被他人理解、保证代码可靠性、程序的重用性。

上个世纪 90 年代，Eric Gamma、Richard Helm、Ralph Johnson、John Vlissides 等 4 人合作出版了《设计模式：可复用面向对象软件的基础》。而 “设计模式” 这个概念也是从中而来。这 4 人也被称为 the Gang of Four，简称 GoF。

“设计模式” 共 23 种，是一种能够提高代码可复用性、可维护性、可读性、稳健性以及安全性的解决方案。它是解决某些特定问题的一般性概念，能够根据需求进行调整，用于解决代码中反复出现的设计问题。

合理利用 “设计模式” 开发会给我们带来很多的便利。而如何合理的运用就在于学会 “找到变化，封装变化”。

## 其他链接

- [博客主页](https://heyelio.github.io)
- [必应](https://cn.bing.com)
- [Github](https://github.com)
- [哔哩哔哩](https://www.bilibili.com)
\`\`\`

## 常用场景和解决方案

- 减少客户端处理的系统数量或联合更多的系统来扩展原有系统。
- 让一个系统（或对象）为多个系统（或对象）工作。
- 简化复杂系统。如果你需要一个指向复杂子系统的直接接口，且该接口的功能有限，则可以使用外观模式。
- 作为一个简洁的中间层。如果子系统组织为多层结构，你可以要求子系统仅使用外观来进行交互， 以减少子系统之间的耦合。

## 模式的优缺点

| 优点                                 | 缺点                                         |
| :----------------------------------- | :------------------------------------------- |
| 你可以让自己的代码独立于复杂子系统。 | 外观可能成为与程序中所有类都耦合的上帝对象。 |

### 使用外观模式的优势

- 对使用者屏蔽子系统的细节，因而减少了使用者处理的对象数目，让整个系统使用起来更加方便。
- 实现了子系统与使用者之间的松散耦合关系。
- 有助于建立层次结构系统，并简化层与层之间的依赖关系。
- 能够消除复杂的循环依赖。
- 有利于系统在不同平台之间的移植和重构。

### 使用外观模式的劣势

- 减低了可靠性，可能会出现过多子系统依赖一个外观系统。
- 容易导致子系统越来越复杂。

## 拓展知识

- 外观模式为现有对象定义了一个新接口，适配器模式则会试图运用已有的接口。*适配器*通常只封装一个对象，*外观*通常会作用于整个对象子系统上。
- 外观类通常可以转换为单例模式类，因为在大部分情况下一个外观对象就足够了。

🔙 [设计模式](/posts/design-patterns/)

**📌最后：希望本文能够给您提供帮助，文章中有不懂或不正确的地方，请在下方评论区💬留言！**

**🔗参考文献：**

🌐 [设计模式 --refactoringguru](https://refactoringguru.cn/design-patterns#intro-patterns)

📺 [bilibili-趣学设计模式；黄靖锋. --拉勾教育](https://www.bilibili.com/video/BV1hY411Y7zR/?p=1&vd_source=a9a236c4d6e5c5350c70b71ee0727b8c)

📖 图解设计模式 /（日）结城浩著；杨文轩译. --北京：人民邮电出版社，2017.1`,slug:`facade-pattern`,path:`/posts/facade-pattern/`,wordCount:4667,readingMinutes:6,toc:[{depth:2,slug:`为什么要使用`,text:`为什么要使用？`},{depth:2,slug:`模式结构`,text:`模式结构`},{depth:2,slug:`模式实现`,text:`模式实现`},{depth:3,slug:`示例程序的类图`,text:`示例程序的类图`},{depth:3,slug:`代码实现`,text:`代码实现`},{depth:4,slug:`外观`,text:`外观`},{depth:4,slug:`复杂子系统`,text:`复杂子系统`},{depth:3,slug:`代码测试`,text:`代码测试`},{depth:3,slug:`输出结果`,text:`输出结果`},{depth:2,slug:`常用场景和解决方案`,text:`常用场景和解决方案`},{depth:2,slug:`模式的优缺点`,text:`模式的优缺点`},{depth:3,slug:`使用外观模式的优势`,text:`使用外观模式的优势`},{depth:3,slug:`使用外观模式的劣势`,text:`使用外观模式的劣势`},{depth:2,slug:`拓展知识`,text:`拓展知识`}],protected:!1,passwordHint:``,sourcePath:`facade-pattern/index.md`},{title:`工厂方法模式：由子类决定创建什么`,description:`工厂方法模式是一种创建型设计模式，其在父类中提供一个创建对象的方法，允许子类决定实例化对象的类型。`,publishedAt:`2023-04-03T11:11:00+08:00`,updatedAt:`2023-04-03T11:11:00+08:00`,tags:[`设计模式`,`创建型模式`,`工厂方法模式`],category:`设计模式`,series:`设计模式`,seriesOrder:2,pinned:!1,draft:!1,cover:`/posts/factory-method-pattern/cover.webp`,coverAlt:`工厂方法模式封面`,content:`**工厂方法模式**是一种创建型设计模式，其在父类中提供一个创建对象的方法，允许子类决定实例化对象的类型。

工厂模式分为：简单工厂、**工厂方法**、抽象工厂。

## 为什么要使用？

**工厂方法模式的对象职责：**

**在父类中提供一个创建对象的方法， 允许子类决定实例化对象的类型。** 换句话说，父类只需要知道它能创建对象，具体什么是实例对象让子类去考虑。

例如在实际开发中，你需要用户能够去自定义组件，那么你就需要制定一套规则，让用户依照你的规则去开发。工厂方法模式🏭就是非常好的选择。它能够让创建产品和使用产品分离，那么用户就可以在不修改核心代码的同时，更改为自定义组件。

父类决定实例的生成方式，但并不决定所要生成的具体的类，具体的类全部交由子类去负责。这样就能让创建者和具体产品解耦。

## 模式结构

- **产品** （Product） 将会对接口进行声明。 对于所有由创建者及其子类构建的对象， 这些接口都是通用的。
- **具体产品** （Concrete Products） 是产品接口的不同实现。
- **创建者** （Creator） 类声明返回产品对象的工厂方法。 该方法的返回对象类型必须与产品接口相匹配。<span style="color:gray">注意， 并不一定每次调用工厂方法都会**创建**新的实例。 工厂方法也可以返回缓存、 对象池或其他来源的已有对象。</span>
- **具体创建者** （Concrete Creators） 将会重写基础工厂方法， 使其返回不同类型的产品。

**工厂方法模式的类图：**

![工厂方法模式的类图](./25b372b91b645ca645c4fc642ff0a308.webp)

\`Creator\` 类只需要知道 \`create()\` 方法可以创建出 \`Product\`，而不需要知道其他具体实现。

当我们更换实现为新的 \`ConcreteCreator\` 类时，那么 \`create()\` 方法创建的 \`ConcreteProduct\` 也会更改。如果 \`Creator\` 类中能够创建不同的 \`Product\` 时，它就离抽象工厂更近一步了。

工厂方法模式侧重于直接对具体产品的实现进行封装和调用，通过统一的接口定义来约束程序的对外行为。

## 模式实现

该示例使用工厂方法模式来构建 \`Dialog\` 和 \`Button\` 的关系，并提供了一套默认样式。该模式使得用户也可以自定义样式，只需要继承抽象类并实现。

### 示例程序的类图

![示例程序的类图](./b46a6159998755616e9bd8806807b49f.webp)

### 代码实现

#### 抽象创建者 Creator

\`\`\`java
package example.framework;

/** 抽象对话框 */
public abstract class Dialog {
    /** 显示对话框 */
    public void show() {
        Button button = createButton();
        button.render();
    }

    /**
     - 创建按键组件
     - @return 按键组件实例
     */
    public abstract Button createButton();
}
\`\`\`

#### 抽象产品 Product

\`\`\`java
package example.framework;

/** 抽象按键产品 */
public abstract class Button {
    /** 按键标签 */
    protected String label = "Button";

    /**
     - 展示按键
     */
    public abstract void render();
}
\`\`\`

#### 默认实现

\`\`\`java
package example.concrete;

import example.framework.Button;
import example.framework.Dialog;

/** 默认对话框实现 */
public class DefaultDialog extends Dialog {
    /**
     - 创建按键组件
     - @return 按键组件实例
     */
    @Override
    public Button createButton() {
        return new DefaultButton();
    }
}
\`\`\`

\`\`\`java
package example.concrete;

import example.framework.Button;

/** 默认按键产品实现 */
public class DefaultButton extends Button {
    /** 展示按键 */
    @Override
    public void render() {
        System.out.println("| " + this.label + " |");
    }
}
\`\`\`

#### 自定义实现

\`\`\`java
package example.my;

import example.framework.Button;
import example.framework.Dialog;

/** 自定义对话框实现 */
public class MyDialog extends Dialog {
    /**
     - 创建按键组件
     - @return 按键组件实例
     */
    @Override
    public Button createButton() {
        return new MyButton();
    }
}
\`\`\`

\`\`\`java
package example.my;

import example.framework.Button;

/** 自定义按键产品实现 */
public class MyButton extends Button {
    /** 展示按键 */
    @Override
    public void render() {
        System.out.println("( " + this.label + " )");
    }
}
\`\`\`

### 代码测试

\`\`\`java
import example.concrete.DefaultDialog;
import example.framework.Dialog;
import example.my.MyDialog;

/** 测试工厂方法模式 */
public class Test {
    public static void main(String[] args) {
        Dialog defaultDialog = new DefaultDialog();
        defaultDialog.show();
        System.out.println("------------- 分割线 -------------");
        Dialog myDialog = new MyDialog();
        myDialog.show();
    }
}
\`\`\`

### 输出结果

\`\`\`text
| Button |
------------- 分割线 -------------
( Button )
\`\`\`

由上述可以看出，我们不需要去修改默认实现类就可以将样式替换成自定义的。

## 常用场景和解决方案

- 有限、可重用的对象，使用工厂方法模式可以有效节约资源，例如：
  - 需要使用很多重复代码创建对象时，比如，\`DAO\` 层的数据对象、\`API\` 层的 \`VO\` 对象等。
  - 创建对象要访问外部信息或资源时，比如，读取数据库字段、获取访问授权 token 信息、配置文件等。
  - 创建需要统一管理生命周期的对象时，比如，会话信息、用户网页浏览轨迹对象等。
  - 创建池化对象时，比如，连接池对象、线程池对象、日志对象等。
- 希望隐藏对象的真实类型时，比如，不希望使用者知道对象的真实构造函数参数等。
- 不确定对象确切类别及其依赖关系时，可以使用工厂方法。工厂方法能让你在使用时不考虑它以后可能会拓展的具体实现。
- 如果你希望用户能扩展你软件库或框架的内部组件，可使用工厂方法。

## 模式的优缺点

| 优点                                                                               | 缺点                                                                                                                 |
| :--------------------------------------------------------------------------------- | :------------------------------------------------------------------------------------------------------------------- |
| 你可以避免创建者和具体产品之间的紧密耦合。                                         | 应用工厂方法模式需要引入许多新的子类， 代码可能会因此变得更复杂。 最好的情况是将该模式引入创建者类的现有层次结构中。 |
| 能根据用户的需求定制化地创建对象。                                                 | 具体工厂实现逻辑不统一，增加代码理解难度。                                                                           |
| 隐藏了具体使用哪种产品来创建对象。                                                 |                                                                                                                      |
| _单一职责原则_。 你可以将产品创建代码放在程序的单一位置， 从而使得代码更容易维护。 |                                                                                                                      |
| _开闭原则_。 无需更改现有客户端代码， 你就可以在程序中引入新的产品类型。           |                                                                                                                      |

## 拓展知识

- 在许多设计工作的初期都会使用工厂方法模式（较为简单， 而且可以更方便地通过子类进行定制），随后演化为使用抽象工厂模式、原型模式或生成器模式（更灵活但更加复杂）。
- 抽象工厂模式通常基于一组工厂方法，但你也可以使用原型模式来生成这些类的方法。
- **工厂方法和抽象工厂的区别：**
  1. 工厂方法模式侧重于继承的连续性，核心为“**里氏替换原则**”；而抽象工厂模式侧重于组合的拓展性，核心为“**分析共性，找出更好的抽象产品**”。
  2. 工厂方法适用单产品，抽象工厂适用于多产品。

🔙 [设计模式](/posts/design-patterns/)

**📌最后：希望本文能够给您提供帮助，文章中有不懂或不正确的地方，请在下方评论区💬留言！**

**🔗参考文献：**

🌐 [设计模式 --refactoringguru](https://refactoringguru.cn/design-patterns#intro-patterns)

📺 [bilibili-趣学设计模式；黄靖锋. --拉勾教育](https://www.bilibili.com/video/BV1hY411Y7zR/?p=1&vd_source=a9a236c4d6e5c5350c70b71ee0727b8c)

📖 图解设计模式 /（日）结城浩著；杨文轩译. --北京：人民邮电出版社，2017.1`,slug:`factory-method-pattern`,path:`/posts/factory-method-pattern/`,wordCount:4076,readingMinutes:7,toc:[{depth:2,slug:`为什么要使用`,text:`为什么要使用？`},{depth:2,slug:`模式结构`,text:`模式结构`},{depth:2,slug:`模式实现`,text:`模式实现`},{depth:3,slug:`示例程序的类图`,text:`示例程序的类图`},{depth:3,slug:`代码实现`,text:`代码实现`},{depth:4,slug:`抽象创建者-creator`,text:`抽象创建者 Creator`},{depth:4,slug:`抽象产品-product`,text:`抽象产品 Product`},{depth:4,slug:`默认实现`,text:`默认实现`},{depth:4,slug:`自定义实现`,text:`自定义实现`},{depth:3,slug:`代码测试`,text:`代码测试`},{depth:3,slug:`输出结果`,text:`输出结果`},{depth:2,slug:`常用场景和解决方案`,text:`常用场景和解决方案`},{depth:2,slug:`模式的优缺点`,text:`模式的优缺点`},{depth:2,slug:`拓展知识`,text:`拓展知识`}],protected:!1,passwordHint:``,sourcePath:`factory-method-pattern/index.md`},{title:`享元模式：用共享状态省内存`,description:`享元模式是一种结构型设计模式，它摒弃了在每个对象中保存所有数据的方式，通过共享多个对象所共有的相同状态，让你能在有限的内存容量中载入更多对象。`,publishedAt:`2023-04-04T18:22:00+08:00`,updatedAt:`2023-04-04T18:22:00+08:00`,tags:[`设计模式`,`结构型模式`,`享元模式`],category:`设计模式`,series:`设计模式`,seriesOrder:12,pinned:!1,draft:!1,cover:`/posts/flyweight-pattern/cover.webp`,coverAlt:`享元模式封面`,content:`**享元模式**是一种结构型设计模式，它摒弃了在每个对象中保存所有数据的方式，通过共享多个对象所共有的相同状态，让你能在有限的内存容量中载入更多对象。

享元模式要解决的问题是**节约内存的空间大小。** 它的本质就是在使用时 **找到不可变的特征并缓存起来**，当类似对象使用时从缓存中读取以达到节省内存空间的目的。

## 为什么要使用？

**享元模式的对象职责：**

**通过共享多个对象所共有的相同状态，让你能在有限的内存容量中载入更多对象。**

使用享元模式可以减少内存消耗，例如，展示商品的一些固定信息时，不需要重复创建对象。

使用享元模式还可以聚合同一类的不可变对象，提高对象的复用性。例如，在 \`Integer\` 类中使用到的 \`IntegerCache\` 类。

## 模式结构

享元模式只是一种优化。在应用该模式之前，你要确定程序中存在与大量类似对象同时占用内存相关的内存消耗问题，并且确保该问题无法使用其他更好的方式来解决。

- **享元**（Flyweight）类包含原始对象中部分能在多个对象中共享的状态。同一享元对象可在许多不同情景中使用。享元中存储的状态被称为“内在状态”。传递给享元方法的状态被称为“外在状态”。
- **情景**（Context）类包含原始对象中各不相同的外在状态。情景与享元对象组合在一起就能表示原始对象的全部状态。<span style="color:gray">通常情况下，原始对象的行为会保留在享元类中。因此调用享元方法必须提供部分外在状态作为参数。但你也可将行为移动到情景类中，然后将连入的享元作为单纯的数据对象。</span>

- **客户端**（Client）负责计算或存储享元的外在状态。在客户端看来，享元是一种可在运行时进行配置的模板对象，具体的配置方式为向其方法中传入一些情景数据参数。
- **享元工厂**（Flyweight Factory）会对已有享元的缓存池进行管理。有了工厂后，客户端就无需直接创建享元，它们只需调用工厂并向其传递目标享元的一些内在状态即可。工厂会根据参数在之前已创建的享元中进行查找，如果找到满足条件的享元就将其返回；如果没有找到就根据参数新建享元。

**享元模式的类图：**

![享元模式的类图](./3404a017840cf71280fb27f32790c94d.webp)

从类图中，我们可以看出，\`Client\` 通过 \`Context\` 保存对象，将**不可变特征（内在状态）** 通过工厂转换为享元对象 \`Flyweight\` ，并注册在工厂内部，需要时通过调用工厂并向其传递目标享元的一些内在状态即可。将**可变特征（外在状态）** 保存在 \`Context\` 中，使用时通过享元对象的方法调用。

## 模式实现

该示例使用享元模式将大字符字母（由 \`#\`，\`.\`，\`\\n\` 组成）变为一个个享元，在大字母字符串类中使用它们。将不同的大字符字母存储起来，在使用时不需要生成重复字母，以达到减少内存占用的目的。

### 示例程序的类图

![示例程序的类图](./0610cc0c306a0d19ecc2648f39f8061d.webp)

### 代码实现

#### 享元

\`\`\`java
package example;

import java.io.BufferedReader;
import java.io.FileReader;
import java.io.IOException;

/** 享元，共享大体积字符 */
public class BigChar {
    /** 大体积字符名 */
    private char charName;
    /** 大体积字符（由“#”，“.”，“\\n”组成） */
    private String fontData;

    /**
     - 根据字符名读取文件，生成大体积字符
     - @param charName 字符名
     */
    public BigChar(char charName) {
        String path = System.getProperty("user.dir") + "\\\\flyweight\\\\resource\\\\";
        this.charName = charName;
        try {
            BufferedReader reader = new BufferedReader(new FileReader(path + "big-" + charName + ".txt"));
            String line;
            StringBuffer buf = new StringBuffer();
            while ((line = reader.readLine()) != null) {
                buf.append(line);
                buf.append("\\n");
            }
            reader.close();
            this.fontData = buf.toString();
        } catch (IOException ex) {
            ex.printStackTrace();
        }

    }

    /** 打印大体积字符 */
    public void print() {
        System.out.println(fontData);
    }
}
\`\`\`

#### 享元工厂

\`\`\`java
package example;

import java.util.HashMap;
import java.util.Map;

/** 享元工厂，生成大体积字符享元 */
public class BigCharFactory {
    /** 管理已经生成的BigChar实例 */
    private Map pool = new HashMap();
    /** 单例工厂 */
    private static BigCharFactory singleton = new BigCharFactory();

    /** 单例模式 */
    private BigCharFactory() { }

    /**
     - 获取享元工厂实例
     - @return 享元工厂实例
     */
    public static BigCharFactory getInstance() {
        return singleton;
    }

    /**
     - 共享大体积字符BigChar实例
     - @param charName BigChar字符名
     - @return BigChar实例
     */
    public BigChar getBigChar(char charName) {
        BigChar bigChar = (BigChar) pool.get("" + charName);
        if (bigChar == null) {
            bigChar = new BigChar(charName);
            pool.put("" + charName, bigChar);
        }
        return bigChar;
    }
}
\`\`\`

#### 情景

\`\`\`java
package example;

/** 将字符串中的重复字符变成享元，组合享元字符成字符串 */
public class BigString {
    /** 享元数组 */
    private BigChar[] bigChars;

    /**
     - 创建享元工厂，根据传入的字符串来生成大体积字符串。
     - 将字符串中的重复字符变成大体积字符享元，组合大体积字符享元成大体积字符串
     - @param string
     */
    public BigString(String string) {
        bigChars = new BigChar[string.length()];
        BigCharFactory bigCharFactory = BigCharFactory.getInstance();
        for (int i = 0; i < bigChars.length; i++) {
            bigChars[i] = bigCharFactory.getBigChar(string.charAt(i));
        }
    }

    /** 调用具体享元的print()方法 */
    public void print() {
        for (int i = 0; i < bigChars.length; i++) {
            bigChars[i].print();
        }
    }
}
\`\`\`

### 代码测试

\`\`\`java
import example.BigString;

/** 测试享元模式 */
public class Test {
    public static void main(String[] args) {
        BigString hello = new BigString("hello");
      hello.print();
    }
}
\`\`\`

### 输出结果

<span style="color:gray">备注：这里为了展示，手动将字符排成一行。</span>

\`\`\`text
.##....##..########..##........##.........######..
.##....##..##........##........##........##....##.
.########..########..##........##........##....##.
.########..########..##........##........##....##.
.##....##..##........##........##........##....##.
.##....##..########..########..########...######..
\`\`\`

打印一个大体积的字符串，每个字符的打印样式都存放在文件里，需要从文件中读取。

如果每打印一个大字符就读取一次文件并写入内存，十分消耗内存。将字符串中不变的 26 个字母抽离成享元共享，就能大大减少内存消耗。

这里的 \`BigString\` 类似一个情景（Context）与享元对象 \`BigChar\` 组合在一起就能表示一个完整的大体积字符串对象。

## 常用场景和解决方案

- 系统中存在大量重复创建的对象。

- 可以使用外部特定的状态来控制使用的对象。

- 相关性很高并且可以复用的对象。

- \`JDK 1.8\` 中 \`Integer\` 类中的 \`valueOf(int i)\` 方法：

  \`\`\`java
  public static Integer valueOf(int i) {
      if (i >= IntegerCache.low && i <= IntegerCache.high)
          return IntegerCache.cache[i + (-IntegerCache.low)];
      return new Integer(i);
  }
  \`\`\`

  如果判断当前 i 的值是否在 -128 到 127 之间。如果存在，则直接返回引用；如果不存在，就创建一个新的对象。

- 仅在程序必须支持大量对象且没有足够的内存容量时使用享元模式。

  - 程序需要生成数量巨大的相似对象；
  - 这将耗尽目标设备的所有内存；
  - 对象中包含可抽取且能在多个对象间共享的重复状态。

## 模式的优缺点

| 优点                                                 | 缺点                                                                                     |
| :--------------------------------------------------- | :--------------------------------------------------------------------------------------- |
| 如果程序中有很多相似对象，那么你将可以节省大量内存。 | 你可能需要牺牲执行速度来换取内存，因为他人每次调用享元方法时都需要重新计算部分情景数据。 |
|                                                      | 代码会变得更加复杂。团队中的新成员总是会问：“为什么要像这样拆分一个实体的状态？”。       |

### 使用享元模式的优势

- 可以极大减少内存中对象的数量，使得相同对象或相似对象在内存中只保存一份。
- 通过封装内存特有的运行状态，达到共享对象之间高效复用的目的。

### 使用享元模式的劣势

- 以时间换空间，间接增加了系统的实现复杂度。
- 运行时间更长，对于一些需要快速响应的系统并不适合。

## 拓展知识

- 用好享元模式的关键是**找到不可变对象**。
- 享元模式强调的是空间效率，缓存模式强调的是时间效率。
- 对于超大型数据模式，享元模式是非常有效的优化方法之一。
- 如果你能将对象的所有共享状态简化为一个享元对象，那么享元就和单例模式类似了。但这两个模式有两个根本性的不同。
  - 只会有一个单例实体，但是*享元*类可以有多个实体，各实体的内在状态也可以不同。
  - *单例*对象可以是可变的。享元对象是不可变的。

🔙 [设计模式](/posts/design-patterns/)

**📌最后：希望本文能够给您提供帮助，文章中有不懂或不正确的地方，请在下方评论区💬留言！**

**🔗参考文献：**

🌐 [设计模式 --refactoringguru](https://refactoringguru.cn/design-patterns#intro-patterns)

📺 [bilibili-趣学设计模式；黄靖锋. --拉勾教育](https://www.bilibili.com/video/BV1hY411Y7zR/?p=1&vd_source=a9a236c4d6e5c5350c70b71ee0727b8c)

📖 图解设计模式 /（日）结城浩著；杨文轩译. --北京：人民邮电出版社，2017.1`,slug:`flyweight-pattern`,path:`/posts/flyweight-pattern/`,wordCount:5181,readingMinutes:9,toc:[{depth:2,slug:`为什么要使用`,text:`为什么要使用？`},{depth:2,slug:`模式结构`,text:`模式结构`},{depth:2,slug:`模式实现`,text:`模式实现`},{depth:3,slug:`示例程序的类图`,text:`示例程序的类图`},{depth:3,slug:`代码实现`,text:`代码实现`},{depth:4,slug:`享元`,text:`享元`},{depth:4,slug:`享元工厂`,text:`享元工厂`},{depth:4,slug:`情景`,text:`情景`},{depth:3,slug:`代码测试`,text:`代码测试`},{depth:3,slug:`输出结果`,text:`输出结果`},{depth:2,slug:`常用场景和解决方案`,text:`常用场景和解决方案`},{depth:2,slug:`模式的优缺点`,text:`模式的优缺点`},{depth:3,slug:`使用享元模式的优势`,text:`使用享元模式的优势`},{depth:3,slug:`使用享元模式的劣势`,text:`使用享元模式的劣势`},{depth:2,slug:`拓展知识`,text:`拓展知识`}],protected:!1,passwordHint:``,sourcePath:`flyweight-pattern/index.md`},{title:`解释器模式：给语言定义一套语法`,description:`解释器模式是一种行为设计模式，用于定义语言的语法规则表示，并提供解释器来处理句子中的语法。`,publishedAt:`2023-04-05T20:54:00+08:00`,updatedAt:`2023-04-05T20:54:00+08:00`,tags:[`设计模式`,`行为型模式`,`解释器模式`],category:`设计模式`,series:`设计模式`,seriesOrder:24,pinned:!1,draft:!1,cover:`/posts/interpreter-pattern/cover.webp`,coverAlt:`解释器模式封面`,content:`**解释器模式**是一种行为设计模式，用于定义语言的语法[^1]规则表示，并提供解释器来处理句子中的语法。

解释器模式描述如何构建一个简单“语言”的语法解释器，通过更简洁的规则来表示复杂的逻辑。它的适用范围很小，只在一些非常特定的领域被用到（编译器、规则引擎、正则表达式、\`SQL\` 解析等）。

[^1]: 语法也称文法，在语言学中指任意自然语言中的句子、短语以及词等语法单位的语法结构与语法意义的规律。在编译原理中，可以粗略地理解为“用有穷集合来描述无穷事物的规则”。

## 为什么要使用？

**解释器模式的对象职责：**

**通过更简洁的规则来表示复杂的逻辑。**

👉 将领域语言（即问题表征）定义为简单的语言语法。通过多个不同规则的简单组合来映射复杂的模型。

📜 例如，在开发中使用正则表达式来快速匹配 \`IP\` 地址，而不是将所有可能的情况都用 \`if-else\` 来进行编写。

👉 更便捷地提升解释数学公式这一类场景的计算效率。

📜 例如，需要通过一定的规则运算才能得出最后结果的情况，在使用解释器模式后，能够很好地通过预置地规则来进行判断和解释。

## 模式结构

- **抽象表达式**（Abstract Expression）定义一个解释器有哪些操作，可以是抽象类或接口。同时说明只要继承或实现的子节点都需要实现这些操作方法。
- **终结符表达式**（Terminal Expression）用于解释所有终结符[^2]的表达式。
- **非终结符表达式**（Nonterminal Expression）用于解释所有非终结符[^3]表达式。
- **上下文**（Context）包含解释器全局的信息。
- **请求者**（Client）调用终结符表达式和非终结符表达式来推导语法树。

**解释器模式的类图：**

![解释器模式的类图](./23e9086a3007f78fb1d9ab02cc58eff4.webp)

[^2]: 终结符，是一个“确定”的值，无法再继续推导下去。

[^3]: 非终结符，又或者称作“语法变量”，不是一个“确定”的值，可以被继续推导下去。

## 模式实现

该示例使用解释器模式实现“判断两个字符串中至少存在一个是输入字符串的子串（或）”和“判断两个字符串是否同时为输入字符串的子串（且）”。在非终结符表达式中做“且”或“或”的操作；在终结符表达式中判断“终结符字符串”是否是“输入字符串”的子串。

### 示例程序的类图

![示例程序的类图](./ae59ef9c91854c5553cbcbe1eb0a33e5.webp)

### 代码实现

#### 抽象表达式

\`\`\`java
/** 抽象表达式接口 */
public interface Expression {
    /**
     - 解释表达式
     - @param con 表达式
     - @return true满足条件
     */
    boolean interpreter(String con);
}
\`\`\`

#### 终结符表达式

\`\`\`java
/** 终结符 */
public class TerminalExpression implements Expression {
    private String data;

    public TerminalExpression(String data) {
        this.data = data;
    }

    /**
     - 解释表达式
     - @param con 表达式
     - @return true满足条件
     */
    @Override
    public boolean interpreter(String con) {
        if(con.contains(data)) {
            return true;
        }
        return false;
    }
}
\`\`\`

#### 非终结符表达式

\`\`\`java
/** “或”非终结符 */
public class OrExpression implements Expression {
    private Expression expr1;
    private Expression expr2;

    public OrExpression(Expression expr1, Expression expr2) {
        this.expr1 = expr1;
        this.expr2 = expr2;
    }

    /**
     - 解释表达式
     - @param con 表达式
     - @return true满足条件
     */
    @Override
    public boolean interpreter(String con) {
        return expr1.interpreter(con) || expr2.interpreter(con);
    }
}
\`\`\`

\`\`\`java
/** “且”非终结符 */
public class AndExpression implements Expression {
    private Expression expr1;
    private Expression expr2;

    public AndExpression(Expression expr1, Expression expr2) {
        this.expr1 = expr1;
        this.expr2 = expr2;
    }

    /**
     - 解释表达式
     - @param con 表达式
     - @return true满足条件
     */
    @Override
    public boolean interpreter(String con) {
        return expr1.interpreter(con) && expr2.interpreter(con);
    }
}
\`\`\`

### 代码测试

\`\`\`java
/** 测试解释器模式 */
public class Test {
    public static void main(String[] args) {
        // 创建两个终结符，生成它们的“或”非终结符
        Expression mick = new TerminalExpression("mick");
        TerminalExpression mia = new TerminalExpression("mia");
        Expression isSingle = new OrExpression(mick, mia);
        // 创建两个终结符，生成它们的“且”非终结符
        Expression spike = new TerminalExpression("spike");
        TerminalExpression mock = new TerminalExpression("mock");
        Expression isCommitted = new AndExpression(spike, mock);
        // 解释非终结符表达式
        System.out.println("'mick'是否包含'mick'或'mia'：" + isSingle.interpreter("mick"));
        System.out.println("'mia'是否包含'mick'或'mia'：" + isSingle.interpreter("mia"));
        System.out.println("'max'是否包含'mick'或'mia'：" + isSingle.interpreter("max"));

        System.out.println("'mock-spike'是否同时包含'spike'和'mock'：" + isCommitted.interpreter("mock-spike"));
        System.out.println("'single-mock'是否同时包含'spike'和'mock'：" + isCommitted.interpreter("single-mock"));
    }
}
\`\`\`

### 输出结果

\`\`\`text
'mick'是否包含'mick'或'mia'：true
'mia'是否包含'mick'或'mia'：true
'max'是否包含'mick'或'mia'：false
'mock-spike'是否同时包含'spike'和'mock'：true
'single-mock'是否同时包含'spike'和'mock'：false
\`\`\`

## 常用场景和解决方案

- 语言的语法较为简单并且对执行效率要求不高。
- 问题重复出现，且可以用一种简单的语言来进行表达。
- 一个语言需要解释执行。

## 模式的优缺点

| 优点                       | 缺点                       |
| :------------------------- | :------------------------- |
| 很容易改变和扩展语法逻辑。 | 维护成本很高。             |
| 更容易实现语法。           | 执行效率较低。             |
|                            | 应用场景单一，复用性不高。 |

## 拓展知识

- 在解释器模式中通常会使用树的结构，终端表达式对象是叶对象，非终端表达式是组合对象。
- 解释器模式能够通过一些简短的规则来解决复杂的数据匹配问题。

🔙 [设计模式](/posts/design-patterns/)

**📌最后：希望本文能够给您提供帮助，文章中有不懂或不正确的地方，请在下方评论区💬留言！**

**🔗参考文献：**

📺 [bilibili-趣学设计模式；黄靖锋. --拉勾教育](https://www.bilibili.com/video/BV1hY411Y7zR/?p=1&vd_source=a9a236c4d6e5c5350c70b71ee0727b8c)

📖 图解设计模式 /（日）结城浩著；杨文轩译. --北京：人民邮电出版社，2017.1`,slug:`interpreter-pattern`,path:`/posts/interpreter-pattern/`,wordCount:3695,readingMinutes:5,toc:[{depth:2,slug:`为什么要使用`,text:`为什么要使用？`},{depth:2,slug:`模式结构`,text:`模式结构`},{depth:2,slug:`模式实现`,text:`模式实现`},{depth:3,slug:`示例程序的类图`,text:`示例程序的类图`},{depth:3,slug:`代码实现`,text:`代码实现`},{depth:4,slug:`抽象表达式`,text:`抽象表达式`},{depth:4,slug:`终结符表达式`,text:`终结符表达式`},{depth:4,slug:`非终结符表达式`,text:`非终结符表达式`},{depth:3,slug:`代码测试`,text:`代码测试`},{depth:3,slug:`输出结果`,text:`输出结果`},{depth:2,slug:`常用场景和解决方案`,text:`常用场景和解决方案`},{depth:2,slug:`模式的优缺点`,text:`模式的优缺点`},{depth:2,slug:`拓展知识`,text:`拓展知识`}],protected:!1,passwordHint:``,sourcePath:`interpreter-pattern/index.md`},{title:`迭代器模式：不暴露内部地遍历`,description:`迭代器模式是一种行为设计模式，让你能在不暴露集合底层表现形式（列表、 栈和树等）的情况下遍历集合中所有的元素。`,publishedAt:`2023-04-05T22:12:00+08:00`,updatedAt:`2023-04-05T22:12:00+08:00`,tags:[`设计模式`,`行为型模式`,`迭代器模式`],category:`设计模式`,series:`设计模式`,seriesOrder:16,pinned:!1,draft:!1,cover:`/posts/iterator-pattern/cover.webp`,coverAlt:`迭代器模式封面`,content:`**迭代器模式**是一种行为设计模式，让你能在不暴露集合底层表现形式（列表、 栈和树等）的情况下遍历集合中所有的元素。

## 为什么要使用？

**迭代器模式的对象职责：**

**在不暴露对象内部细节的情况下，提供对容器对象中各个元素进行访问的方法。**

👉 减少程序中重复的遍历代码。

🎈 使用迭代器模式是将遍历算法作为容器对象自身的一种“属性方法”来使用，能够有效地避免写很多重复的代码，不会暴露其内部结构。

👉 隐藏统一遍历集合的方法逻辑。

🎈 迭代器模式把对不同集合类的访问逻辑抽象出来，在不同暴露集合内部结构的情况下，隐藏不同集合遍历需要使用的算法，同时能够对外提供更为简便的访问算法接口。

## 模式结构

- **迭代器**（Iterator）接口声明了遍历集合所需的操作：获取下一个元素、获取当前位置和重新开始迭代等。
- **具体迭代器**（Concrete Iterators）实现遍历集合的一种特定算法。迭代器对象必须跟踪自身遍历的进度。这使得多个迭代器可以相互独立地遍历同一集合。
- **集合**（Collection）接口声明一个或多个方法来获取与集合兼容的迭代器。请注意，返回方法的类型必须被声明为迭代器接口，因此具体集合可以返回各种不同种类的迭代器。
- **具体集合**（Concrete Collections）会在客户端请求迭代器时返回一个特定的具体迭代器类实体。
- **客户端**（Client）通过集合和迭代器的接口与两者进行交互。这样一来客户端无需与具体类进行耦合，允许同一客户端代码使用各种不同的集合和迭代器。<span style="color:gray">客户端通常不会自行创建迭代器，而是会从集合中获取。但在特定情况下，客户端可以直接创建一个迭代器（例如当客户端需要自定义特殊迭代器时）。</span>

**迭代器模式的类图：**

![迭代器模式的类图](./d49677cbaa721893baec67f6993c7b7a.webp)

## 模式实现

该示例使用迭代器模式为 \`BookShelf\` 书架类提供了一个迭代器 \`BookShelfIterator\`，实现了遍历书架的功能。

### 示例程序的类图

![示例程序的类图](./9788192137b46db4f6fa10d315233033.webp)

### 代码实现

#### 迭代器

\`\`\`java
package example;

/** 迭代器接口 */
public interface Iterator {
    /**
     - 是否存在下一个元素
     - @return true存在
     */
    boolean hasNext();

    /**
     - 获取下一个对象
     - @return 下一个对象
     */
    Object next();
}
\`\`\`

#### 具体迭代器

\`\`\`java
package example;

/** 书架类迭代器具体实现 */
public class BookShelfIterator implements Iterator {
    private BookShelf bookShelf;
    private int index = 0;

    public BookShelfIterator(BookShelf bookShelf) {
        this.bookShelf = bookShelf;
    }

    /**
     - 是否存在下一个元素
     - @return true存在
     */
    @Override
    public boolean hasNext() {
        if (index >= bookShelf.size())
        {
            return false;
        }
        return true;
    }

    /**
     - 获取下一个对象
     - @return 下一个对象
     */
    @Override
    public Object next() {
        Book book = bookShelf.get(index);
        index++;
        return book;
    }
}
\`\`\`

#### 集合

\`\`\`java
package example;

/** 集合接口 */
public interface Aggregate {
    /**
     - 获取集合的迭代器
     - @return 迭代器
     */
    Iterator iterator();
}
\`\`\`

#### 具体集合

\`\`\`java
package example;

/** 书架类具体集合实现 */
public class BookShelf implements Aggregate {
    /** 存储的书籍信息 */
    private Book[] books;
    /** 书籍数量（当前书籍数组中最后一本书籍的下标） */
    private int last = 0;
    /** 书籍数组能容纳数量 */
    private int size;

    public BookShelf(int maxSize) {
        this.size = maxSize;
        this.books = new Book[maxSize];
    }

    /**
     - 根据下标获取书籍
     - @param index 下标
     - @return 指定下标书籍
     */
    public Book get(int index) {
        if (index >= 0 && index < size) {
            return books[index];
        }
        return null;
    }

    /**
     - 在最后一本书籍上添加
     - @param book 需要添加的书籍
     */
    public void append(Book book) {
        // 扩充
        if (last >= size) {
            this.size = 2 * this.size;
            Book[] expBooks = new Book[this.size];
            for (int i = 0; i < this.books.length; i++) {
                expBooks[i] = this.books[i];
            }
            this.books = expBooks;
        }
        books[last] = book;
        last++;
    }

    /**
     - 获取当前书架的书籍数量
     - @return
     */
    public int size() {
        return last;
    }

    /**
     - 获取集合的迭代器
     - @return 迭代器
     */
    @Override
    public Iterator iterator() {
        return new BookShelfIterator(this);
    }
}
\`\`\`

\`\`\`java
package example;

/** 书籍类 */
public class Book {
    private String name;

    public Book(String name) {
        this.name = name;
    }

    public String getName() {
        return name;
    }
}
\`\`\`

### 代码测试

\`\`\`java
import example.Book;
import example.BookShelf;
import example.Iterator;

/** 测试迭代器模式 */
public class Test {
    public static void main(String[] args) {
        BookShelf bookShelf = new BookShelf(2);
        bookShelf.append(new Book("设计模式"));
        bookShelf.append(new Book("数据结构"));
        // BookShelf的append方法会自动扩充。
        bookShelf.append(new Book("软件工程"));
        bookShelf.append(new Book("软件建模"));
        Iterator it = bookShelf.iterator();
        int stop = 0;
        while (it.hasNext()) {
            stop++;
            Book book = (Book) it.next();
            System.out.println("1: " + book.getName());
            if (stop == 2) {
                System.out.println("-- 中断遍历，但是迭代器仍保留遍历时中断的下标！ --");
                break;
            }
        }
        while (it.hasNext()) {
            Book book = (Book) it.next();
            System.out.println("2: " + book.getName());
        }
    }
}
\`\`\`

### 输出结果

\`\`\`text
1: 设计模式
1: 数据结构
-- 中断遍历，但是迭代器仍保留遍历时中断的下标！ --
2: 软件工程
2: 软件建模
\`\`\`

从测试和结果中可以得出，迭代器模式能让我们暂停遍历并在需要时继续。

## 常用场景和解决方案

- 出于便利性或安全性等原因，希望对客户端隐藏其遍历算法复杂性时。
- 需要简化重复的循环遍历逻辑时，使用该模式可以减少程序中重复的遍历代码。
- 如果你希望代码能够遍历不同的甚至是无法预知的数据结构，可以使用迭代器模式。该模式为集合和迭代器提供了一些通用接口。如果你在代码中使用了这些接口，那么将其他实现了这些接口的集合和迭代器传递给它时，它仍将可以正常运行。

## 模式的优缺点

| 优点                                                                                         | 缺点                                                           |
| :------------------------------------------------------------------------------------------- | :------------------------------------------------------------- |
| _单一职责原则_。通过将体积庞大的遍历算法代码抽取为独立的类，你可对客户端代码和集合进行整理。 | 如果你的程序只与简单的集合进行交互，应用该模式可能会矫枉过正。 |
| _开闭原则_。你可实现新型的集合和迭代器并将其传递给现有代码，无需修改现有代码。               | 对于某些特殊集合，使用迭代器可能比直接遍历的效率低。           |
| 你可以并行遍历同一集合，因为每个迭代器对象都包含其自身的遍历状态。                           | 增加子类数量或系统复杂性。                                     |
| 相似的，你可以暂停遍历并在需要时继续。                                                       |                                                                |

## 拓展知识

- 你可以使用迭代器模式来遍历组合模式树。
- 你可以同时使用工厂方法模式和迭代器来让子类集合返回不同类型的迭代器，并使得迭代器与集合相匹配。
- 你可以同时使用备忘录模式和迭代器来获取当前迭代器的状态，并且在需要的时候进行回滚。
- 可以同时使用访问者模式和迭代器来遍历复杂数据结构，并对其中的元素执行所需操作，即使这些元素所属的类完全不同。

🔙 [设计模式](/posts/design-patterns/)

**📌最后：希望本文能够给您提供帮助，文章中有不懂或不正确的地方，请在下方评论区💬留言！**

**🔗参考文献：**

🌐 [设计模式 --refactoringguru](https://refactoringguru.cn/design-patterns#intro-patterns)

📺 [bilibili-趣学设计模式；黄靖锋. --拉勾教育](https://www.bilibili.com/video/BV1hY411Y7zR/?p=1&vd_source=a9a236c4d6e5c5350c70b71ee0727b8c)

📖 图解设计模式 /（日）结城浩著；杨文轩译. --北京：人民邮电出版社，2017.1`,slug:`iterator-pattern`,path:`/posts/iterator-pattern/`,wordCount:4393,readingMinutes:7,toc:[{depth:2,slug:`为什么要使用`,text:`为什么要使用？`},{depth:2,slug:`模式结构`,text:`模式结构`},{depth:2,slug:`模式实现`,text:`模式实现`},{depth:3,slug:`示例程序的类图`,text:`示例程序的类图`},{depth:3,slug:`代码实现`,text:`代码实现`},{depth:4,slug:`迭代器`,text:`迭代器`},{depth:4,slug:`具体迭代器`,text:`具体迭代器`},{depth:4,slug:`集合`,text:`集合`},{depth:4,slug:`具体集合`,text:`具体集合`},{depth:3,slug:`代码测试`,text:`代码测试`},{depth:3,slug:`输出结果`,text:`输出结果`},{depth:2,slug:`常用场景和解决方案`,text:`常用场景和解决方案`},{depth:2,slug:`模式的优缺点`,text:`模式的优缺点`},{depth:2,slug:`拓展知识`,text:`拓展知识`}],protected:!1,passwordHint:``,sourcePath:`iterator-pattern/index.md`},{title:`KMP：让失配也成为信息`,description:`KMP 字符串匹配算法详解，包含 next 数组推导、代码实现与例题训练。`,publishedAt:`2023-04-09T22:16:00+08:00`,updatedAt:`2023-04-09T22:16:00+08:00`,tags:[`算法`,`KMP`,`字符串匹配`],category:`算法`,pinned:!1,draft:!1,cover:`/posts/kmp-algorithm/cover.webp`,coverAlt:`KMP 算法实现详解封面`,content:`## 前言

"字符串匹配"是一个传统的算法问题。给定一个文本串 S 和模式串 T，判断 T 是否为 S 的子串。如果是，则返回 T 在 S 中首次出现的位置；如果不是，则返回 -1。

对于这类算法问题，KMP 算法是一种较好的解决方案💡。

🔍下面来看看 KMP 算法的优势：

**👎暴力算法演示图：**

![暴力算法演示](./124722c1e97d9b8f13425173e28b13ce.webp)

**👍KMP 算法演示图：**

![KMP算法演示](./48886e67903fb215cbe6078eed389580.webp)

从上面两张演示图中，可以看出 KMP 算法的优势在于"匹配更快"和"遍历指针无需回溯"。

## 算法介绍

下面是来自百度百科🌐的介绍：

> KMP 算法是一种改进的字符串匹配算法，由 D.E.Knuth，J.H.Morris 和 V.R.Pratt 提出的，因此人们称它为克努特—莫里斯—普拉特操作（简称 KMP 算法）。KMP 算法的核心是利用匹配失败后的信息，尽量减少模式串与主串的匹配次数以达到快速匹配的目的。具体实现就是通过一个 next() 函数实现，[函数](https://baike.baidu.com/item/函数/18686609)本身包含了模式串的局部匹配信息。KMP 算法的[时间复杂度](https://baike.baidu.com/item/时间复杂度/1894057)O(m+n) 。

该算法相对于 Brute-Force（暴力）算法有比较大的改进，主要是消除了主串指针的回溯，从而使算法效率有了某种程度的提高。

在分析 KMP 算法前，需要先了解以下名词：

**👉<span style="color:blue">文本串</span>：** 由数字、字母、下划线组成的一串字符。这里指需要被搜索的主串 \`abababaa\`。

**👉<span style="color:green">模式串</span>：** 比主串短的一串字符。这里指用于匹配的字符串 \`abaa\`。

**👉模式匹配：** 在<span style="color:blue">文本串</span>中找出和<span style="color:green">模式串</span>相同的子串。

**👉遍历指针：** 遍历<span style="color:blue">文本串</span>的指针。

1️⃣ 传统暴力算法在每次匹配失败后，都需要从<span style="color:green">模式串</span>的第一个字符开始匹配。如下图，我们可以看到遍历指针在匹配失败后会出现回溯现象。

![暴力算法指针回溯](./69d9496a192ac74c69865fed481559d9.webp)

2️⃣ KMP 算法的强大之处在于能够避免遍历失败后的指针回溯。如下图，我们可以看到遍历指针只会往后走，变化的只有<span style="color:green">模式串</span>的匹配位置。

![KMP算法避免回溯](./aa0669b3fb533d301bc08d9c569fbce6.webp)

💡 KMP 算法能够避免指针回溯的关键就在 **next 数组**上。它的思想就是记录已经匹配成功的<span style="color:green">模式串</span>元素，让当前匹配失败的<span style="color:blue">文本串</span>元素不需要从<span style="color:green">模式串</span>首元素重新开始匹配，而是从匹配成功的<span style="color:green">模式串</span>元素的后一个元素开始匹配。

🔖 **next 数组**能够让我们知道，当<span style="color:blue">文本串</span>元素和<span style="color:green">模式串</span>元素匹配失败后，应该跳转到<span style="color:green">模式串</span>的哪个元素重新开始匹配。如下表：

|     下标      |  0  |  1  |  2  |  3  |
| :-----------: | :-: | :-: | :-: | :-: |
|   **元素**    |  a  |  b  |  a  |  a  |
| **next 数组** |  0  |  0  |  0  |  1  |

例如，当最后一个元素"a"（下标为 3）在匹配失败后，<span style="color:blue">文本串</span>不需要从<span style="color:green">模式串</span>第一个元素"a"（下标为 0）的位置重新开始匹配，而是到第二个元素"b"（下标为 1）开始匹配。如下图：

![next数组跳转示意](./7c9e13c27604e136b9b3dacf342bfe58.webp)

现在只要能够求解出 **next 数组**，实现"字符串匹配"就不成问题了。

## next数组详解

### 总体分析

> 给出结论：next 数组除了表示匹配失败后下一次匹配的元素下标，还表示当前下标和整个模式串的共同前缀的长度。

从"**next 数组**能够让我们知道，当<span style="color:blue">文本串</span>元素和<span style="color:green">模式串</span>元素匹配失败后，应该跳转到<span style="color:green">模式串</span>的哪个元素重新开始匹配。"这句话中，我们得出两个结论：

1. **next 数组**与<span style="color:green">模式串</span>有关，那么它的长度应该等于<span style="color:green">模式串</span>的长度。
2. 当<span style="color:blue">文本串</span>元素和<span style="color:green">模式串</span>中下标为 i 的元素匹配失败后，需要获取 \`next[i]\` 的值来找到下一次匹配的<span style="color:green">模式串</span>元素，拿来与当前<span style="color:blue">文本串</span>元素进行匹配。

❓那么，假设现在有<span style="color:green">模式串 T</span> ="ababaab"，如何求它的 **next 数组**？

⁉️**next 数组**能够知道匹配失败后下一次匹配的<span style="color:green">模式串</span>元素，就说明在此元素之前的元素都是匹配成功的，这样才能避免重新从<span style="color:green">模式串</span>第一个元素开始匹配。那些匹配成功的元素就是与整个<span style="color:green">模式串</span>前缀相同的元素，所以也有人叫它"prefix 数组"。

例如，现在有<span style="color:green">模式串</span> \`ababaab\`，下标为"5"的元素是"a"（橙色），求 \`next[5]\` 的值？

从<span style="color:green">模式串</span>中可以看出，匹配成功的元素（绿色）应该是"ab<span style="color:green">aba</span><span style="color:orange">a</span>b"，与其对应的前缀元素是（红色）"<span style="color:red">aba</span>ba<span style="color:orange">a</span>b"。

为了匹配效率，其**对应的前缀元素应该是最长的**。即在前缀"a"和"aba"中，选择"aba"。

那么，\`next[5]\` 的值应该是"3"。因为前面的"aba"是已经匹配成功的元素，所以只要从下标为"3"的元素开始匹配就行。由于数组从 0 开始，那么也说明"3"是匹配成功元素的长度。

❗现在我们就能够得出：next 数组除了表示匹配失败后下一次匹配的元素下标，还表示 **当前下标** 和 **整个<span style="color:green">模式串</span>** 的 **共同前缀的长度**。<span style="color:gray">（PS：在我看来，这是最容易理解的。）</span>

### 实现推导

> 可以选择直接跳到代码实现。

知道 next 数组的具体含义，现在我们回到问题："假设现在有<span style="color:green">模式串 T</span> ="ababaab"，如何求它的 next 数组？"。我们可以利用动态规划的思想，将它拆分成一个个子串。不过在此之前需要用一些变量来表示它们。

👉 指针"i"用来遍历的<span style="color:green">模式串</span>元素，即 \`next[i]\` 中的"i"。（橙色）

👉 指针"j"指向共同前缀的后一个元素（待匹配元素）。"j"指针前面的元素都是已经匹配成功的共同前缀。作用是找共同前缀。具体用处看下面的推导......

1. "<span style="color:orange">a</span>"：i = 0，整个<span style="color:green">模式串</span>只有一个元素时，匹配失败直接继续匹配即可，即 \`next[0] = 0\`。

2. "a<span style="color:orange">b</span>"：i = 1，整个<span style="color:green">模式串</span>只有两个元素时，如果"a"匹配成功、"b"匹配失败，那么说明当前 i 下标指向的元素需要重新从"a"开始匹配，即 \`next[1] = 0\`。

3. "ab<span style="color:orange">a</span>"：i = 2，整个<span style="color:green">模式串</span>有三个及以上数量的元素时，这时候在"首元素"和"当前匹配元素"中就有其他元素，也就意味着存在不需要从"首元素"开始匹配的可能。那么我们让"j = 0"即指向"首元素 a"。那么就可以开始找共同前缀了。我们直接把 \`T[j]\` 和 \`T[i - 1]\` 进行比对，一个是整个<span style="color:green">模式串</span>的前缀，一个是当前下标的前缀。\`T[j] != T[i - 1]\` 说明它们不是共同前缀，此时共同前缀的长度为 0，即 \`next[2] = 0\`。

4. "aba<span style="color:orange">b</span>"：i = 3，这时候还不存在共同前缀，那么就意味着我们还需要从"j = 0"开始找共同前缀。此时\`T[0] == T[2]\`，说明存在共同前缀"a"。即 \`next[3] = 1\`。

5. "abab<span style="color:orange">a</span>"：i = 4，这时已经存在一个共同前缀"a"，说明"j"需要后移一位"j = 1"，判断第二位是否也属于共同前缀。此时 \`T[1] == T[3]\`，说明存在共同前缀"ab"。那么 \`next[4] = 2\`。

6. "ababa<span style="color:orange">a</span>"：i = 5，这时的共同前缀为"ab"、j = 2，由于 \`T[2] == T[4]\`，即 \`next[5] = 3\`。

7. "ababaa<span style="color:orange">b</span>"：i = 6，这时的共同前缀为"aba"、j = 3。前面都是匹配成功的例子，如果出现匹配失败该怎么办？继续往下看。此时 \`T[3] != T[5]\`，说明当前共同前缀已被推翻，需要获取新的共同前缀。

   如下图，此时"b"不等于"a"。但是 next 数组中储存有"b"的共同前缀。\`next[3] = 1\`，说明它共同前缀的长度为 1 且匹配失败后下一个要匹配的元素的下标为 1。让 j = 1，继续开始匹配。此时"b"不等于"a"。继续回溯，j = 0，此时"a"等于"a"，说明公共前缀有 1 个，即 \`next[6] = 1\`。

   ![next数组回溯推导](./e8f72c1203e2e244f7de5b23111e0e5d.webp)

**求出<span style="color:green">模式串 T</span> ="ababaab"的 next 数组为：**

|     下标      |  0  |  1  |  2  |  3  |  4  |  5  |  6  |
| :-----------: | :-: | :-: | :-: | :-: | :-: | :-: | :-: |
|   **元素**    |  a  |  b  |  a  |  b  |  a  |  a  |  b  |
| **next 数组** |  0  |  0  |  0  |  1  |  2  |  3  |  1  |

**next 数组的推导视频如下：**

<video controls muted>
  <source src="./799a794e9bb94240a20b24a65719346f.mp4" type="video/mp4" />
  next 数组的推导视频
</video>

### 代码实现

✅在匹配成功的时候，直接将共同前缀的长度加 1 即可。共同前缀的长度是指针"j"的值。如下图：

![匹配成功示意](./3fa7905896a0ba75c71fb09d2c941c25.webp)

❎在匹配失败的时候，就需要考虑边界了。如下图：

![匹配失败边界](./dd0a6daa60739649e85e06f3319f972c.webp)

0️⃣如果只是正常的回溯并没有什么问题，直接让指针"j"指向下一个要匹配的元素（\`j = next[j]\`）。匹配成功后将共同前缀的长度加 1 即可。

例如，在第一次匹配失败时，需要"j"指针回溯，回到"j"元素的共同前缀的后一位元素的位置（\`next[j] = 3\`）。"j = 3"进入第二次匹配，如果匹配成功。此时共同前缀的长度是 3，所以 \`next[i] = 3 + 1 = 4\`。

1️⃣如果是当"j"指针无法再回溯时，出现匹配失败的情况，就说明当前"i"元素已经没有共同前缀了，即 \`next[i] = 0\`。

\`\`\`java
/**
 * 求next数组
 *
 * @param pattern 模式串
 * @return next数组
 */
public int[] getNext(String pattern) {
    int len = pattern.length();
    if (len <= 1) {
        return new int[]{0};
    }
    int[] next = new int[len];
    next[0] = 0;
    int i = 1, j = 0;
    while (i < len) {
        // 第二个元素都是"0"
        if (i == 1) {
            next[i] = 0;
            i++;
            continue;
        }
        // 匹配成功
        if (pattern.charAt(i - 1) == pattern.charAt(j)) {
            next[i] = j + 1;
            i++;
            j++;
            continue;
        }
        // 匹配失败
        if (j == 0) {
            // 特殊情况，j == 0，指针无法回溯。
            next[i] = 0;
            i++;
        } else {
            j = next[j];
        }
    }
    return next;
}
\`\`\`

✨求 next 数组的代码是实现了，但是不够优雅，感觉还能再简洁一点。所以就有人想出从"j = -1"开始，那么 \`next[0] = -1\`。这样做的好处是"匹配成功"、"匹配失败且 \`j == 0\`"和"\`i == 1\`"的情况可以统一处理。只是需要在使用时，将"-1"看作"0"，防止下标越界。

- 当"匹配成功"时： \`next[i] = j + 1\`、\`i++\`、\`j++\`。
- 当"\`i == 1\`"或"匹配失败且 \`j == 0\`"时：这两种情况可以归结为"j == -1"，因为它们的最终结果都是 \`next[i] = 0\`、\`j = 0\`、\`i++\`，都满足 \`next[i] = j + 1 = 0\`、\`i++\`、\`j++\`。

\`\`\`java
/**
 * 求next数组
 *
 * @param pattern 模式串
 * @return next数组
 */
public static int[] getNext(String pattern) {
    int len = pattern.length();
    if (len <= 1) {
        return new int[]{0};
    }

    int[] next = new int[len];
    next[0] = -1;
    int i = 1, j = -1;
    while (i < len) {
        if (j == -1 || pattern.charAt(i - 1) == pattern.charAt(j)) {
            next[i] = j + 1;
            i++;
            j++;
        } else {
            j = next[j];
        }
    }
    return next;
}
\`\`\`

**求出 next 数组，就可以直接使用 KMP 算法，代码如下：**

\`\`\`java
public int kmp(String haystack, String needle) {
    int[] next = getNext(needle);
    // kmp算法
    int n = haystack.length();
    int m = needle.length();
    for (int i = 0, j = 0; i < n; i++) {
        // 匹配失败，找next，直到匹配成功。除非"j=0"，即第一个元素就匹配失败。
        while (j > 0 && haystack.charAt(i) != needle.charAt(j)) {
            // 适配next数组存在-1的情况。
            j = next[j] == -1 ? 0 : next[j];
        }
        // 匹配成功
        if (haystack.charAt(i) == needle.charAt(j)) {
            j++;
        }
        // 全部匹配完，那么j指针已经遍历完模式串，直接返回时第一个匹配项的下标。
        if (j == m) {
            return i - m + 1;
        }
    }
    return -1;
}
\`\`\`

## nextValue数组详解

**next value 数组**是对 **next数组** 的优化，主要就是减少无效回溯的次数。对比图如下表：

|        下标        |  0  |  1  |  2  |  3  |  4  |  5  |  6  |
| :----------------: | :-: | :-: | :-: | :-: | :-: | :-: | :-: |
|      **元素**      |  a  |  b  |  a  |  b  |  a  |  a  |  b  |
|   **next 数组**    | -1  |  0  |  0  |  1  |  2  |  3  |  1  |
| **nextValue 数组** | -1  |  0  | -1  |  0  | -1  |  3  |  0  |

如何减少无效回溯的次数，如下图：

![nextValue优化示意](./53fb52fe65c01c22cae4555377f4635a.webp)

当"X"指针指向的元素匹配失败需要回溯时，它需要回到"Y"指针指向的元素再进行匹配。但是我们可以看出"X"和"Y"指针指向的元素都是"b"，那么说明这是一次无效匹配，它依旧会匹配失败。**next value 数组**就是对这种情况进行优化。

既然知道"Y"指针指向的元素照样会匹配失败，那就跳过"Y"，直接拿"Y"的 **next** 值"0"继续匹配。那么原来需要回溯两次，现在只需要回溯一次。

**代码实现如下：**

从上面可以得出，**next value 数组**就是根据 **next 数组**的值，判断回溯的元素和当前元素是否相同？相同则跳过本次回溯；不同则保留原始 next 值。

\`\`\`java
/**
 * 求next value数组
 *
 * @param pattern 模式串
 * @return next value数组
 */
public int[] getNextValue(String pattern) {
    int len = pattern.length();
    if (len <= 1) {
        return new int[]{0};
    }
    int[] next = new int[len];
    next[0] = -1;
    int i = 1, j = -1;
    while (i < len) {
        if (j == -1 || pattern.charAt(i - 1) == pattern.charAt(j)) {
            // 在获取next值时，做一次优化。如果当前元素和回溯元素相同，则跳过本次回溯。
            next[i] = pattern.charAt(i) == pattern.charAt(j + 1) ? next[j + 1] : j + 1;
            i++;
            j++;
        } else {
            j = next[j];
        }
    }
    return next;
}
\`\`\`

## 例题训练

### 🔍题目要求

**难度：**<span style="color:orange">中等</span> | \`LeetCode\` | 🔗[链接直达](https://leetcode.cn/problems/find-the-index-of-the-first-occurrence-in-a-string/)

给你两个字符串 \`haystack\` 和 \`needle\`，请你在 \`haystack\` 字符串中找出 \`needle\` 字符串的第一个匹配项的下标（下标从 0 开始）。如果 \`needle\` 不是 \`haystack\` 的一部分，则返回 \`-1\` 。

**示例 1：**

\`\`\`text
输入：haystack = "sadbutsad", needle = "sad"
输出：0
解释："sad" 在下标 0 和 6 处匹配。
第一个匹配项的下标是 0 ，所以返回 0 。
\`\`\`

**示例 2：**

\`\`\`text
输入：haystack = "leetcode", needle = "leeto"
输出：-1
解释："leeto" 没有在 "leetcode" 中出现，所以返回 -1 。
\`\`\`

**提示：**

- 1 &lt;= \`haystack.length\`，\`needle.length\` &lt;= 10<sup>4</sup>
- \`haystack\` 和 \`needle\` 仅由小写英文字符组成

### ⌨️代码实现

\`\`\`java
class Solution {
    public int strStr(String haystack, String needle) {
        int[] next = getNextValue(needle);
        // kmp算法
        int n = haystack.length();
        int m = needle.length();
        for (int i = 0, j = 0; i < n; i++) {
            // 匹配失败，找next，直到匹配成功。除非"j=0"，即第一个元素就匹配失败。
            while (j > 0 && haystack.charAt(i) != needle.charAt(j)) {
                j = next[j] == -1 ? 0 : next[j];
            }
            // 匹配成功
            if (haystack.charAt(i) == needle.charAt(j)) {
                j++;
            }
            // 全部匹配完，那么j指针已经遍历完模式串，直接返回时第一个匹配项的下标。
            if (j == m) {
                return i - m + 1;
            }
        }
        return -1;
    }

    /**
     * 求next value数组
     *
     * @param pattern 模式串
     * @return next value数组
     */
    public int[] getNextValue(String pattern) {
        int len = pattern.length();
        if (len <= 1) {
            return new int[]{0};
        }
        int[] next = new int[len];
        next[0] = -1;
        int i = 1, j = -1;
        while (i < len) {
            if (j == -1 || pattern.charAt(i - 1) == pattern.charAt(j)) {
                // 在获取next值时，做一次优化。如果当前元素和回溯元素相同，则跳过本次回溯。
                next[i] = pattern.charAt(i) == pattern.charAt(j + 1) ? next[j + 1] : j + 1;
                i++;
                j++;
            } else {
                j = next[j];
            }
        }
        return next;
    }
}
\`\`\`

---

**📌最后：希望本文能够给您提供帮助，文章中有不懂或不正确的地方，请在下方评论区💬留言！**

**🔗参考文献：**

🌐 [kmp算法 --百度百科](https://baike.baidu.com/item/kmp%E7%AE%97%E6%B3%95/10951804)

📺 [bilibili - KMP算法之求next数组代码讲解；甩手掌柜凡三岁. –凡三岁爱学习](https://www.bilibili.com/video/BV16X4y137qw/?spm_id_from=333.337.search-card.all.click&vd_source=a9a236c4d6e5c5350c70b71ee0727b8c)`,slug:`kmp-algorithm`,path:`/posts/kmp-algorithm/`,wordCount:9757,readingMinutes:15,toc:[{depth:2,slug:`前言`,text:`前言`},{depth:2,slug:`算法介绍`,text:`算法介绍`},{depth:2,slug:`next数组详解`,text:`next数组详解`},{depth:3,slug:`总体分析`,text:`总体分析`},{depth:3,slug:`实现推导`,text:`实现推导`},{depth:3,slug:`代码实现`,text:`代码实现`},{depth:2,slug:`nextvalue数组详解`,text:`nextValue数组详解`},{depth:2,slug:`例题训练`,text:`例题训练`},{depth:3,slug:`题目要求`,text:`🔍题目要求`},{depth:3,slug:`代码实现-1`,text:`⌨️代码实现`}],protected:!1,passwordHint:``,sourcePath:`kmp-algorithm/index.md`},{title:`中介者模式：让对象不再彼此纠缠`,description:`中介者模式是一种行为设计模式，能让你减少对象之间混乱无序的依赖关系。该模式会限制对象之间的直接交互，迫使它们通过一个中介者对象进行合作。`,publishedAt:`2023-04-05T14:46:00+08:00`,updatedAt:`2023-04-05T14:46:00+08:00`,tags:[`设计模式`,`行为型模式`,`中介者模式`],category:`设计模式`,series:`设计模式`,seriesOrder:17,pinned:!1,draft:!1,cover:`/posts/mediator-pattern/cover.webp`,coverAlt:`中介者模式封面`,content:`**中介者模式**是一种行为设计模式，能让你减少对象之间混乱无序的依赖关系。该模式会限制对象之间的直接交互，迫使它们通过一个中介者对象进行合作。

中介者模式提供了一种减少对象之间耦合度的思路。

## 为什么要使用？

**中介者模式的对象职责：**

**迫使对象之间只能通过一个中介者对象进行合作。** 减少对象之间混乱无序的依赖关系。

👉 解决对象之间直接耦合的问题，避免“一处修改多处”的连锁反应出现。

👉 在结构上作为中转，解耦两个服务或系统之间的直接耦合关系。

👉 为了更便捷地统一协同对象之间的通信。

💡 中介者模式的中转作用（结构性）使得对象间的依赖结构变成星型结构，极大地降低对象间的依赖结构耦合度。

💡 中介者模式的协调作用（行为性）能对同类型的对象请求进行统一的处理。

## 模式结构

- **组件**（Component）是各种包含业务逻辑的类。每个组件都有一个指向中介者的引用，该引用被声明为中介者接口类型。组件不知道中介者实际所属的类，因此你可通过将其连接到不同的中介者以使其能在其他程序中复用。<span style="color:gray">组件并不知道其他组件的情况。如果组件内发生了重要事件，它只能通知中介者。中介者收到通知后能轻易地确定发送者，这或许已足以判断接下来需要触发的组件了。</span>
- **中介者**（Mediator）接口声明了与组件交流的方法，但通常仅包括一个通知方法。组件可将任意上下文（包括自己的对象）作为该方法的参数，只有这样接收组件和发送者类之间才不会耦合。<span style="color:gray">对于组件来说，中介者看上去完全就是一个黑箱。发送者不知道最终会由谁来处理自己的请求，接收者也不知道最初是谁发出了请求。</span>
- **具体中介者**（Concrete Mediator）封装了多种组件间的关系。具体中介者通常会保存所有组件的引用并对其进行管理，甚至有时会对其生命周期进行管理。

**中介者模式的类图：**

![中介者模式的类图](./beefc945b1a06b145e85119ebb796458.webp)

## 模式实现

该示例使用中介者模式为每个组件都绑定了一个中介者，只允许每个组件与中介者进行互动。中介者可以接收到来自各个组件的消息，并得知来自哪个组件。同时，中介者也可以调用相应组件的方法。

### 示例程序的类图

![示例程序的类图](./a7149b074cc93d8f7623b0ee3fa638ba.webp)

### 代码实现

#### 中介者

\`\`\`java
package example;

/** 中介者接口 */
public interface Mediator {
    /**
     - 接收组件发送的信息
     - @param sender 组件发送的信息
     */
    void apply(Component sender);
}
\`\`\`

#### 具体中介者

\`\`\`java
package example;

/** 具体中介者类 */
public class ConcreteMediator implements Mediator {
    /**
     - 接收组件发送的信息
     - @param sender 组件发送的信息
     */
    @Override
    public void apply(Component sender) {
        System.out.println("中介者接收到来自<" + sender.getClass() + ">的信息...");
    }
}
\`\`\`

#### 组件

\`\`\`java
package example;

/** 抽象组件类 */
public abstract class Component {
    /** 关联的中介者 */
    private Mediator m;

    public Component(Mediator m) {
        this.m = m;
    }

    public Mediator getMediator() {
        return m;
    }

    /** 组件方法 */
    public abstract void exec();
}
\`\`\`

#### 具体组件

\`\`\`java
package example;

/** 组件A实现类 */
public class ComponentA extends Component {
    public ComponentA(Mediator m) {
        super(m);
    }

    /** 组件方法 */
    @Override
    public void exec() {
        System.out.println("调用ComponentA的exec方法...");
        super.getMediator().apply(this);
    }
}
\`\`\`

\`\`\`java
package example;

/** 组件B实现类 */
public class ComponentB extends Component {
    public ComponentB(Mediator m) {
        super(m);
    }

    /** 组件方法 */
    @Override
    public void exec() {
        System.out.println("调用ComponentB的exec方法...");
        super.getMediator().apply(this);
    }
}
\`\`\`

### 代码测试

\`\`\`java
import example.*;

/** 测试中介者模式 */
public class Test {
    public static void main(String[] args) {
        Mediator mediator = new ConcreteMediator();
        Component componentA = new ComponentA(mediator);
        Component componentB = new ComponentB(mediator);
        componentA.exec();

        System.out.println("\\n---------------------- 分割线 ----------------------\\n");

        componentB.exec();
    }
}
\`\`\`

### 输出结果

\`\`\`text
调用ComponentA的exec方法...
中介者接收到来自<class example.ComponentA>的信息...

---------------------- 分割线 ----------------------

调用ComponentB的exec方法...
中介者接收到来自<class example.ComponentB>的信息...
\`\`\`

## 常用场景和解决方案

- 系统中对象之间存在复杂的引用关系时，中介者模式能让你将对象间的所有关系抽取成为一个单独的类，以使对于特定组件的修改工作独立于其他组件。
- 在不同情景下复用一些基本行为，导致你需要被迫创建大量组件子类时。中介者模式通过一个中间对象来封装多个类中的共有行为，能让你不需要生成太多的子类。
- 当组件因过于依赖其他组件而无法在不同应用中复用时，中介者模式能让你将所有组件间的关系都包含在中介者中，因此你无需修改组件就能方便地新建中介者类以定义新的组件合作方式。

## 模式的优缺点

| 优点                                                                           | 缺点                                       |
| :----------------------------------------------------------------------------- | :----------------------------------------- |
| _单一职责原则_。你可以将多个组件间的交流抽取到同一位置，使其更易于理解和维护。 | 一段时间后，中介者可能会演化成为上帝对象。 |
| _开闭原则_。你无需修改实际组件就能增加新的中介者。                             |                                            |
| 你可以减轻应用中多个组件间的耦合情况。                                         |                                            |
| 你可以更方便地复用各个组件。                                                   |                                            |

### 使用中介者模式的优势

- 减少对象之间的直接交互，间接解耦过多依赖。
- 减少子类的创建数量。例如，在不同情景下复用一些基本行为，导致你需要被迫创建大量组件子类时。
- 简化各系统的设计和实现。
- 通过新建中间层快速扩展新功能，提升代码扩展性。

### 使用中介者模式的劣势

- 中介者类中的交互逻辑可能变得非常复杂且难以维护。
- 变成了新的重度依赖对象。
- 需要知道所有对象的交互逻辑。

## 拓展知识

- 外观模式和中介者的职责类似：它们都尝试在大量紧密耦合的类中组织起合作。
  - _外观_为子系统中的所有对象定义了一个简单接口，但是它不提供任何新功能。子系统本身不会意识到外观的存在。子系统中的对象可以直接进行交流。
  - _中介者_将系统中组件的沟通行为中心化。各组件只知道中介者对象，无法直接相互交流。
- 中介者和观察者之间的区别：
  - _中介者_的主要目标是消除一系列系统组件之间的相互依赖。这些组件将依赖于同一个中介者对象。
  - _观察者_的目标是在对象之间建立动态的单向连接，使得部分对象可作为其他对象的附属发挥作用。
- 对于中介者和观察者，在大部分情况下，你可以使用其中一种模式，而有时可以同时使用。
  - 有一种流行的中介者模式实现方式依赖于_观察者_。中介者对象担当发布者的角色，其他组件则作为订阅者，可以订阅中介者的事件或取消订阅。当_中介者_以这种方式实现时，它可能看上去与_观察者_非常相似。你也可以永久性地将所有组件链接到同一个中介者对象。这种实现方式和_观察者_并不相同，但这仍是一种中介者模式。
  - 假设有一个程序，其所有的组件都变成了发布者，它们之间可以相互建立动态连接。这样程序中就没有中心化的中介者对象，而只有一些分布式的观察者。

🔙 [设计模式](/posts/design-patterns/)

**📌最后：希望本文能够给您提供帮助，文章中有不懂或不正确的地方，请在下方评论区💬留言！**

**🔗参考文献：**

🌐 [设计模式 --refactoringguru](https://refactoringguru.cn/design-patterns#intro-patterns)

📺 [bilibili-趣学设计模式；黄靖锋. --拉勾教育](https://www.bilibili.com/video/BV1hY411Y7zR/?p=1&vd_source=a9a236c4d6e5c5350c70b71ee0727b8c)

📖 图解设计模式 /（日）结城浩著；杨文轩译. --北京：人民邮电出版社，2017.1`,slug:`mediator-pattern`,path:`/posts/mediator-pattern/`,wordCount:4138,readingMinutes:9,toc:[{depth:2,slug:`为什么要使用`,text:`为什么要使用？`},{depth:2,slug:`模式结构`,text:`模式结构`},{depth:2,slug:`模式实现`,text:`模式实现`},{depth:3,slug:`示例程序的类图`,text:`示例程序的类图`},{depth:3,slug:`代码实现`,text:`代码实现`},{depth:4,slug:`中介者`,text:`中介者`},{depth:4,slug:`具体中介者`,text:`具体中介者`},{depth:4,slug:`组件`,text:`组件`},{depth:4,slug:`具体组件`,text:`具体组件`},{depth:3,slug:`代码测试`,text:`代码测试`},{depth:3,slug:`输出结果`,text:`输出结果`},{depth:2,slug:`常用场景和解决方案`,text:`常用场景和解决方案`},{depth:2,slug:`模式的优缺点`,text:`模式的优缺点`},{depth:3,slug:`使用中介者模式的优势`,text:`使用中介者模式的优势`},{depth:3,slug:`使用中介者模式的劣势`,text:`使用中介者模式的劣势`},{depth:2,slug:`拓展知识`,text:`拓展知识`}],protected:!1,passwordHint:``,sourcePath:`mediator-pattern/index.md`},{title:`备忘录模式：随时存档与回滚`,description:`备忘录模式（也称快照模式）是一种行为设计模式，允许在不暴露对象实现细节的情况下保存和恢复对象之前的状态。`,publishedAt:`2023-04-05T17:24:00+08:00`,updatedAt:`2023-04-05T17:24:00+08:00`,tags:[`设计模式`,`行为型模式`,`备忘录模式`],category:`设计模式`,series:`设计模式`,seriesOrder:18,pinned:!1,draft:!1,cover:`/posts/memento-pattern/cover.webp`,coverAlt:`备忘录模式封面`,content:`**备忘录模式**（也称快照模式）是一种行为设计模式，允许在不暴露对象实现细节的情况下保存和恢复对象之前的状态。

## 为什么要使用？

**备忘录模式的对象职责：**

**捕获并外部化对象的内部状态，以便以后可以恢复。**

👉 为了记录多个时间点的备份数据。备忘录模式更多的是用来记录多个时间点的对象状态数据。可以通过多次记录的数据进行数据分析或防止客户端篡改数据。

📜 比如，编辑器、聊天会话中会涉及多次操作和多次交互对话。

👉 需要快速撤销当前操作并恢复到某个对象状态。

📜 微信中的撤回功能其实就是备忘录模式的一种体现。用户发错信息后，需要立即恢复到未发送状态。

## 模式结构

---

### 基于嵌套类的实现

该模式的经典实现方式依赖于许多流行编程语言（例如 \`C++\`、 \`C#\` 和 \`Java\`）所支持的嵌套类。

- **原发器**（Originator）类可以生成自身状态的快照（用自身状态创建一个备忘录），也可以在需要时通过快照恢复自身状态（用备忘录里保存的状态给自身状态赋值）。

- **备忘录**（Memento）是原发器状态快照的值对象（value object）。通常做法是将备忘录设为不可变的，并通过构造函数一次性传递数据。

- **负责人**（Caretaker）仅知道“何时”和“为何”捕捉原发器的状态，以及何时恢复状态。<span style="color:gray">负责人通过保存备忘录栈来记录原发器的历史状态。当原发器需要回溯历史状态时，负责人将从栈中获取最顶部（最后一个记录的）的备忘录，并将其传递给原发器的恢复（restoration）方法。</span>

🔖 在该实现方法中，备忘录类将被嵌套在原发器中。这样原发器就可访问备忘录的成员变量和方法，即使这些方法被声明为私有。另一方面，负责人对于备忘录的成员变量和方法的访问权限非常有限：它们只能在栈中保存备忘录，而不能修改其状态。

**备忘录模式的类图：**

![备忘录模式的类图](./1f61390c765266636222d8b01a2ee7da.webp)

---

### 基于中间接口的实现

另外一种实现方法适用于不支持嵌套类的编程语言 （没错，_REFACTORING ·GURU·_ 说的就是 \`PHP\`，本人没用过）。

- 在没有嵌套类的情况下，你可以规定负责人仅可通过明确声明的中间接口与备忘录互动，该接口仅声明与备忘录元数据相关的方法，限制其对备忘录成员变量的直接访问权限。

- 另一方面，原发器可以直接与备忘录对象进行交互，访问备忘录类中声明的成员变量和方法。这种方式的缺点在于你需要将备忘录的所有成员变量声明为公有。

**备忘录模式的类图：**

![备忘录模式的类图](./7ea50c1cb4ff491ca39ae51381743864.webp)

---

### 封装更加严格的实现

如果你不想让其他类有任何机会通过备忘录来访问原发器的状态，那么还有另一种可用的实现方式。

- 这种实现方式允许存在多种不同类型的原发器和备忘录。每种原发器都和其相应的备忘录类进行交互。原发器和备忘录都不会将其状态暴露给其他类。

- 负责人此时被明确禁止修改存储在备忘录中的状态。但负责人类将独立于原发器，因为此时恢复方法被定义在了备忘录类中。

- 每个备忘录将与创建了自身的原发器连接。原发器会将自己及状态传递给备忘录的构造函数。由于这些类之间的紧密联系，只要原发器定义了合适的设置器（setter），备忘录就能恢复其状态。

**备忘录模式的类图：**

![备忘录模式的类图](./81f2092603b298dfebd7aa706a613de7.webp)

---

## 模式实现

该示例使用备忘录模式实现了博客编辑器的回退功能。使用 \`BlogOriginator\` 类来存放博客当前记录（博客内容的编辑操作），使用 \`BlogCaretaker\` 类来控制博客历史记录（编辑器的保存操作和回退操作）。每当用户执行 \`BlogCaretaker\` 类的 \`save\` 操作时，\`BlogCaretaker\` 会自动将当前的博客内容保存在历史信息栈中（用 \`BlogMemento\` 类型存储）。每当用户执行 \`BlogCaretaker\` 类的 \`undo\` 操作时，如果存在历史记录则回退到上一个保存的记录中。

### 示例程序的类图

![示例程序的类图](./9abdece79d4904e095d1d03b05bd4351.webp)

### 代码实现

#### 原发器（内嵌备忘录）

\`\`\`java
package example;

/** 博客原发器 */
public class BlogOriginator {
    private String title;
    private String author;
    private String content;

    public BlogOriginator(String title, String author, String content) {
        this.title = title;
        this.author = author;
        this.content = content;
    }

    /**
     - 获取博客原发器的快照
     - @return 博客备忘录
     */
    public BlogMemento save() {
        return new BlogMemento(this.title, this.author, this.content);
    }

    /**
     - 恢复博客记录
     - @param m 博客备忘录
     */
    public void restore(BlogMemento m) {
        this.title = m.title;
        this.author = m.author;
        this.content = m.content;
    }

    /** 展示博客页面（markdown格式） */
    public void showBlog() {
        System.out.println("---");
        System.out.println("title: " + this.title);
        System.out.println("author: " + this.author);
        System.out.println("---");
        System.out.println("## " + this.title);
        System.out.println(this.content);
    }

    public void setTitle(String title) {
        this.title = title;
    }

    public void setAuthor(String author) {
        this.author = author;
    }

    public void setContent(String content) {
        this.content = content;
    }

    /** 博客备忘录，用于回退博客记录 */
    public class BlogMemento {
        private String title;
        private String author;
        private String content;

        private BlogMemento(String title, String author, String content) {
            this.title = title;
            this.author = author;
            this.content = content;
        }
    }
}
\`\`\`

#### 负责人

\`\`\`java
package example;

import java.util.Deque;
import java.util.LinkedList;

/** 博客管理者类 */
public class BlogCaretaker {
    /** 博客原发器 */
    private BlogOriginator originator;
    /** 博客原发器的历史记录信息栈 */
    private Deque<BlogOriginator.BlogMemento> history = new LinkedList<>();

    public BlogCaretaker(BlogOriginator originator) {
        this.originator = originator;
    }

    /** 保存历史信息 */
    public void save() {
        BlogOriginator.BlogMemento currentState = originator.save();
        history.push(currentState);
    }

    /** 回退记录 */
    public void undo() {
        if (!history.isEmpty()) {
            BlogOriginator.BlogMemento m = history.pop();
            originator.restore(m);
        }
    }
}
\`\`\`

### 代码测试

\`\`\`java
import example.BlogCaretaker;
import example.BlogOriginator;

/** 测试备忘录模式 */
public class Test {
    public static void main(String[] args) {
        // 初始化博客内容并保存
        BlogOriginator blogOriginator = new BlogOriginator("备忘录模式", "Heyelio", "初始化备忘录模式的内容！");
        BlogCaretaker blogCaretaker = new BlogCaretaker(blogOriginator);
        blogCaretaker.save();

        // 第一次修改博客内容并保存
        blogOriginator.setContent("第一次修改博客内容！");
        blogCaretaker.save();

        // 第二次修改博客内容，最新修改未保存
        blogOriginator.setContent("第二次修改博客内容！");

        // 此时历史记录中存放两个记录（下列序号从栈顶开始）
        // 1. 第一次修改博客内容（最后一次保存记录）
        // 2. 初始化博客内容
        System.out.println("打印最新的博客内容：");
        blogOriginator.showBlog();
        System.out.println("\\n------------------- 分割线 -------------------\\n");

        System.out.println("回退一次：");
        blogCaretaker.undo();
        blogOriginator.showBlog();
        System.out.println("\\n------------------- 分割线 -------------------\\n");

        System.out.println("回退两次：");
        blogCaretaker.undo();
        blogOriginator.showBlog();
    }
}
\`\`\`

### 输出结果

\`\`\`text
打印最新的博客内容：
---
title: 备忘录模式
author: Heyelio
---
## 备忘录模式
第二次修改博客内容！

------------------- 分割线 -------------------

回退一次：
---
title: 备忘录模式
author: Heyelio
---
## 备忘录模式
第一次修改博客内容！

------------------- 分割线 -------------------

回退两次：
---
title: 备忘录模式
author: Heyelio
---
## 备忘录模式
初始化备忘录模式的内容！
\`\`\`

## 常用场景和解决方案

- 需要保存一个对象在某一个时刻的状态或者恢复对象之前的状态时。
- 当直接访问对象的成员变量、获取器或设置器将导致封装被突破时。或者是不希望外界直接访问对象的内部状态时。
- 备忘录模式的应用场景比较局限，主要是用来备份、撤销、恢复等。

## 模式的优缺点

| 优点                                                       | 缺点                                                                                         |
| :--------------------------------------------------------- | :------------------------------------------------------------------------------------------- |
| 你可以在不破坏对象封装情况的前提下创建对象状态快照。       | 如果客户端过于频繁地创建备忘录，程序将消耗大量内存。                                         |
| 你可以通过让负责人维护原发器状态历史记录来简化原发器代码。 | 负责人必须完整跟踪原发器的生命周期，这样才能销毁弃用的备忘录。                               |
|                                                            | 绝大部分动态编程语言（例如 \`PHP\`、\`Python\` 和 \`JavaScript\`）不能确保备忘录中的状态不被修改。 |

### 使用备忘录模式的优势

- 能够快速撤销对对象状态的更改。例如，在编辑器中不小心删除了一段重要文字，使用回退操作能够快速复原。
- 能够帮助缓解记录历史对象状态。使用备忘录模式能够记录一些重要的数据信息（用户提供的订单数据）而不需要反复查询接口，提高效率。
- 能够提升代码的扩展性。备忘录模式是通过外部对象来保存原始对象的状态，而不是在原始对象中新增状态记录。

### 使用备忘录模式的劣势

- 备忘录会破坏封装性。当备忘录在进行恢复的过程中遇见错误时，可能会恢复错误的状态。
- 备忘录的对象数据很大时，读取数据可能出现内存用尽的情况。例如，在编辑器中加入高清的图片，如果直接记录图片本身可能会导致内存被用尽。

## 拓展知识

- 你可以同时使用命令模式和备忘录模式来实现“撤销”。在这种情况下，命令用于对目标对象执行各种不同的操作，备忘录用来保存一条命令执行前该对象的状态。
- 你可以同时使用备忘录和迭代器模式来获取当前迭代器的状态，并且在需要的时候进行回滚。

🔙 [设计模式](/posts/design-patterns/)

**📌最后：希望本文能够给您提供帮助，文章中有不懂或不正确的地方，请在下方评论区💬留言！**

**🔗参考文献：**

🌐 [设计模式 --refactoringguru](https://refactoringguru.cn/design-patterns#intro-patterns)

📺 [bilibili-趣学设计模式；黄靖锋. --拉勾教育](https://www.bilibili.com/video/BV1hY411Y7zR/?p=1&vd_source=a9a236c4d6e5c5350c70b71ee0727b8c)

📖 图解设计模式 /（日）结城浩著；杨文轩译. --北京：人民邮电出版社，2017.1`,slug:`memento-pattern`,path:`/posts/memento-pattern/`,wordCount:5816,readingMinutes:10,toc:[{depth:2,slug:`为什么要使用`,text:`为什么要使用？`},{depth:2,slug:`模式结构`,text:`模式结构`},{depth:3,slug:`基于嵌套类的实现`,text:`基于嵌套类的实现`},{depth:3,slug:`基于中间接口的实现`,text:`基于中间接口的实现`},{depth:3,slug:`封装更加严格的实现`,text:`封装更加严格的实现`},{depth:2,slug:`模式实现`,text:`模式实现`},{depth:3,slug:`示例程序的类图`,text:`示例程序的类图`},{depth:3,slug:`代码实现`,text:`代码实现`},{depth:4,slug:`原发器内嵌备忘录`,text:`原发器（内嵌备忘录）`},{depth:4,slug:`负责人`,text:`负责人`},{depth:3,slug:`代码测试`,text:`代码测试`},{depth:3,slug:`输出结果`,text:`输出结果`},{depth:2,slug:`常用场景和解决方案`,text:`常用场景和解决方案`},{depth:2,slug:`模式的优缺点`,text:`模式的优缺点`},{depth:3,slug:`使用备忘录模式的优势`,text:`使用备忘录模式的优势`},{depth:3,slug:`使用备忘录模式的劣势`,text:`使用备忘录模式的劣势`},{depth:2,slug:`拓展知识`,text:`拓展知识`}],protected:!1,passwordHint:``,sourcePath:`memento-pattern/index.md`},{title:`面向对象设计：从耦合到概念完整性`,description:`面向对象设计原则与建模方法，涵盖耦合内聚、关注点分离、信息隐藏、概念完整性等核心概念。`,publishedAt:`2023-03-09T07:25:00+08:00`,updatedAt:`2023-03-09T07:25:00+08:00`,tags:[`面向对象`,`软件设计`,`OOP`],category:`面向对象`,pinned:!0,rank:2,draft:!1,cover:`/posts/object-oriented-design/cover.webp`,coverAlt:`面向对象设计封面`,content:`**面向对象设计**是一种新的软件设计思想，意在模拟真实的世界🌏运作。通过面向对象设计衍生出来的面向对象程序设计能让我们尽可能模拟人类👶的思维方式，使得软件的开发方法与过程尽可能接近人类认识世界。

下面是**百度百科**关于**面向对象程序设计**的介绍：

> 面向对象程序设计(Object Oriented Programming)作为一种新方法，其本质是以建立模型体现出来的抽象思维过程和[面向对象](https://baike.baidu.com/item/面向对象/2262089?fromModule=lemma_inlink)的方法。模型是用来反映现实世界中事物特征的。任何一个模型都不可能反映客观事物的一切具体特征，只能对事物特征和变化规律的一种抽象，且在它所涉及的范围内更普遍、更集中、更深刻地描述客体的特征。通过建立模型而达到的抽象是人们对客体认识的深化。
>
> 1. 面向对象程序设计（Object Oriented Programming，OOP）是一种计算机编程架构。OOP 的一条基本原则是计算机程序由单个能够起到子程序作用的单元或对象组合而成。OOP 达到了软件工程的三个主要目标：重用性、灵活性和扩展性。OOP = 对象 + 类 + 继承 + 多态 + 消息，其中核心概念是类和对象。
> 2. 面向对象程序设计方法是尽可能模拟人类的思维方式，使得软件的开发方法与过程尽可能接近人类认识世界、解决现实问题的方法和过程，也即使得描述问题的问题空间与问题的解决方案空间在结构上尽可能一致，把客观世界中的实体抽象为问题域中的对象。
> 3. 面向对象程序设计以对象为核心，该方法认为程序由一系列对象组成。类是对现实世界的抽象，包括表示静态属性的数据和对数据的操作，对象是类的实例化。对象间通过消息传递相互通信，来模拟现实世界中不同实体间的联系。在面向对象的程序设计中，对象是组成程序的基本模块。

对于面向对象程序设计，百度百科的介绍还是不够具体。如果我们想要使用面向对象的思维进行程序设计，还是会无从下手。所以在开始学习面向对象设计之前，我们还需要了解以下概念：软件要求、概念和技术设计、用户故事、耦合和内聚、关注点分离、信息隐藏、概念完整性、模型检查。如果你了解这些概念，也可以直接从[面向对象建模](#面向对象建模)开始。

## 软件要求、概念和技术设计

🔖 我们可以将开发软件视为一个处理问题并产生涉及软件的解决方案的过程。通常，这是一个迭代的过程，每次迭代都将一组需求带到工作和测试的实现中，并最终构建一个完整的解决方案。在每一次迭代中，我们需要完成以下步骤：

**👉引出需求：** 当我们有了一组初始需求时，需要将它概述为解决方案。就是将一组初始需求变成一个解决整体问题的方案，确保能够加以快速有效的执行。在此活动中需要生成"概念设计"，然后再生成"详细设计"。

**👉概念设计：** 概念设计是我们对如何满足需求的初步想法，不涉及任何技术细节。

**👉详细设计：** 在详细设计中，我们需要开始考虑每个组件的技术细节，可以通过将组件拆分为越来越小的组件来完成。如果这些组件不够具体、有结构需要调整、不能够进行详细设计，则需要重新回到"概念设计"进行调整。

❗**开发软件的步骤分为需求分析、概念设计、详细设计。**

## 用户故事

🔖 用户故事是从用户的角度来描述用户渴望得到的功能，我们可以利用它去更好的表述我们的需求。

> _作为一个\\_\\_\\_\\_\\_，我想\\_\\_\\_\\_\\_，以便\\_\\_\\_\\_\\_。_

_作为_ **在线购物者**，_我想_ **将商品添加到我的购物车中**，_以便_ **我可以购买它。**

🔖 通常，名词对应软件中的对象。因此，在此示例中，我们标识了三个对象：

1. 用户角色与软件中的对象（在线购物者）相关联。
2. 商品对象可以是商店中的任何产品。
3. 购物车对象是用于跟踪要购买的商品的。

🔖 谓词可以帮助我们确定对象可能具有的责任或者识别对象之间的联系。因此，在此示例中，我们可以得出：

1. 添加和购买可能是购物车的职责。
2. 一个在线购物者通常与一个购物车相关联，同时购物车应该能够容纳多个商品。

**❗用户故事是可用于表达软件系统需求的众多技术之一。它们易于使用，可以让我们在使用面向对象的思维时发现对象和进一步的需求。**

## 耦合和内聚

> 乔治·米勒（George Miller）在一篇心理学论文中观察到了这一点，其中受试者必须回忆 1 到 14 个随机的声音和图像。当人数达到 7 左右时，受试者开始回忆失败。在编程时，保持模块简单至关重要。一旦你的设计复杂性超过了开发人员的心理处理能力，错误就会更频繁地发生。我们将用耦合和内聚评估设计的复杂性。耦合侧重于模块与其他模块之间的复杂性。内聚侧重于模块内的复杂性。

在设计系统时，我们需要将各种模块组合在一起。

❎ 把一个糟糕的设计想象成拼图，你的模块就是拼图。你只能将一个拼图连接到另一个特定的拼图，而不能连接其他拼图。

✅ 一个设计良好的系统就像乐高积木。你可以毫不费力地连接任意两个乐高积木，并且所有乐高积木都相互兼容。

🔖 在设计系统时，我们应该让它像乐高一样。这样就可以轻松地将模块连接在一起并重复使用。

**❗模块的耦合表示模块连接到其他模块的复杂性。**

❎ 如果一个模块高度依赖其他模块，那么就说明这个模块与其他模块紧密耦合，就像拼图一样；

✅ 如果一个模块很容易连接到其他模块，那么就说明这个模块与其他模块松散耦合。就像乐高。

**❗内聚力表示模块职责的明确性，它是描述模块内部的。**

❎ 如果一个模块试图封装多个任务或目的不明确，则该模块的内聚力较低。

✅ 如果一个模块只执行一项任务而不执行其他任务或有明确的目的，则该模块具有高内聚力。

🔖 我们不仅需要考虑模块与模块间的耦合度，还需要注意模块内的内聚力。如果你发现你的模块中有多个职责，那么你就需要拆分你的模块。

例如，现在有个传感器类，有个 \`getter\` 方法，1️⃣标志位代表获取温度，0️⃣标志位代表获取湿度。那么从内聚角度看，这个类低内聚，因为它没有指出明确的用途。从耦合角度看，这个类高耦合，因为我们如果不阅读它的接口文档，就不知道如何获取温度湿度。

🎈 接下来我们来重新设计这个类。

传感器类现在被湿度传感器类和温度传感器类所取代。这两个类都有一个明确定义的用途。由于每个类都有明确的目的，因此可以说这些类具有高度的凝聚力。湿度传感器的 \`getter\` 方法返回湿度，温度传感器的 \`getter\` 方法返回温度。这使得其他类使用它们其中的任何一个类时都是松散耦合的。

**❗一般来说，在设计中，需要在低耦合和高内聚之间取得平衡。对于复杂的系统，复杂性可以分布在模块之间或者模块内部。随着模块的简化以实现高内聚，那么它们就需要依赖更多其他的模块，从而变得高耦合。如果模块之间的连接被简化以实现低耦合，那么模块内部就需要承担更多的责任，从而变得低内聚。**

## 关注点分离

> **关注点分离**可以帮助我们创建一个灵活、可重用和可维护的系统。关注点分离是应用于整个面向对象建模和编程的关键思想。

举个例子，我们都知道狗的一些基本行为，比如走路、跑步、说话和吃饭。虽然这些行为很容易识别和抽象，但我们还需要思考以下两点：

❓ 狗可以自己做哪些行为？

❓ 哪些需要其他事或其他人的帮助？

如果我们仔细研究过狗的饮食行为，我们可能会得出这样的结论。"狗有食物，它知道如何吃，主人可以通过给狗食物来告诉它吃食物。"但这是模拟情况的正确方法吗？

❓ 谁在给狗喂食？

❓ 狗总是有食物吃，还是需要主人给狗食物才有得吃？

实际上，狗需要主人来喂养它。狗知道如何吃食物，但在主人喂它之前，它对它将要吃的食物一无所知。这就出现了两个问题："饮食的行动"和"提供食物的行动"。这可以通过引入狗主人类来完成。

🎈 在我们的新设计中，狗类只知道如何吃食物。狗主人类是知道如何获取狗粮以及如何给狗食物的类。我们已经消除了狗是如何获取食物的问题，让狗主人来处理这个问题。

🔖 使用关注点分离时，我们应该只将行为和属性封装在与所述行为和属性相关的类中。这有助于我们创建一个模块化的系统，其中各个类可以轻松地交换，而无需重写大部分代码。

再比如说，智能手机有许多功能，包括照相、录音、通信等等。要解决这些问题就要把问题抛给指定对象，让相机对象来满足智能手机能照相的功能。让录音机对象满足智能手机能录音的功能。而智能手机只需要关注如何组合它们，并不要求知道它们内部是如何实现的。

🔖 我们的目标是创建灵活的可重用且可维护的代码。关注点分离使用抽象、封装、分解和泛化创建更具凝聚力的类。这将创建一个更易于维护的系统，因为每个类都经过组织，因此它只包含完成其工作所需的代码。这使得开发人员能够重用和构建单个类而不影响其他类。

**❗关注点分离要求我们在建模时，将问题分解，让每个对象专注于每个问题。**

## 信息隐藏

> 信息隐藏允许我们的系统模型为其他人提供正确使用它们所需的最少信息量并隐藏其他所有内容。信息隐藏允许开发人员与需要了解该模块的实现细节的其他开发人员单独处理模块。他们只能通过其接口使用此模块。通常，可能会更改的内容（例如实现细节）应隐藏。而不应该改变的事情，都用接口暴露出来。

例如，我们都在同一个系统上，但在不同的模块上工作。如果我的模块需要来自你的模块的信息，则信息隐藏要求你仅向我提供模块工作所需的信息。不必让我访问模块中的所有内容，你也不需要知道我的模块是如何工作的。

🔖 信息隐藏通常与封装相关联。我们使用封装将属性和行为捆绑到它们的相应类中，并公开一个接口来提供访问权限。

🔖 封装有效地隐藏了行为的实现，因为唯一的访问是通过特定方法的接口。其他类只能依赖于这些方法接口中的信息，而不依赖于具体的方法实现。通过封装隐藏的信息使我们能够在不改变预期结果的情况下更改实现。

**❗信息隐藏能够让我们控制要共享的信息以及要让其他人看到的行为。外部知道的信息越少，才能更有利于构建灵活、可重用和可维护的系统。**

## 概念完整性

> 概念完整性通常被认为是系统设计中最重要的考虑因素。著名的计算机架构师弗雷德·布鲁克斯（Fred Brooks）在他的书《神话人月》（The Mythical Man-Month）中指出，最好让一个系统省略某些异常功能和改进，去反映一组设计思想，而不是拥有一个包含许多良好却独立和不协调的想法的系统。简而言之，概念完整性是关于以一致的方式设计和实现软件，就好像它是由一个人编写的一样。在软件中实践概念完整性有助于指导团队编写软件。如果每个团队成员都看到软件的设计和逻辑是一致且易于遵循的，这将帮助他们知道如何以及在何处更改软件以满足新的要求。

例如，在 Unix 操作系统中，每个资源都可以像文件一样被查看和操作。同一组操作可用于不同类型的资源。这简化了事情，使任何资源都可以以相同的方式处理。统一概念可以避免出现特殊情况，能让软件具有一致性。

例如，团队成员都可以遵循特定的命名约定。

例如，在前后端分离项目中，封装后端返回给前端的结果集。

**❗概念完整性可以帮助我们创建一致且设计良好的软件。**

## 模型检查

> 模型检查是对系统状态模型所有可能发生的事情进行的系统检查，我们需要检查软件的所有状态，并通过模拟会更改软件状态和变量的不同事件来发现存在的任何错误。以此来确保软件的状态模型是否包含一些缺陷。或者说我们需要对我们的软件进行软件测试。

模型检查是一种进行状态探索的技术。从当前状态开始，探索所有可能出现的情况，并推理这些可能出现的情况会导致状态发生怎样的变化。

**❗执行模型检查有三个不同的阶段：建模阶段、运行阶段和分析阶段。**

🔖 模型检查让我们不仅能够开发出设计良好的软件，而且能够开发出满足所需属性和行为的软件。

## 面向对象建模

**面向对象建模**是将现实世界的任何实体抽象为对象的建模思想。如果能够学会使用面向对象建模的方式设计软件，会让你的代码会更加灵活、更易重用。

❓ **实体**是什么？**对象**又是什么？

🎗️ 我们身边的许多物品，比如杯子、笔记本等，这些都是现实世界的实体。

🎗️ 对象则是这一个个实体的抽象，根据实体的特性和功能抽象出对象的属性和方法。

在面向对象建模中，我们将一个个实体看做一个个有自我意识的对象，它们知道自己是怎么样的，能干什么事。

例如，对于杯子自身来说，它知道自己的形状大小、能容纳多少毫升的液体、能用来干嘛。

❗对象可以分为三种：**实体对象**、**边界对象**、**控制对象**。

❗面向对象建模有四个原则：**抽象化**、**封装**、**分解**和**泛化**。

### 对象类别

🔖 **实体对象**是最容易理解的，因为它们对应问题空间中的某个实际实体。软件中表示椅子的对象、表示建筑物或客户的对象，这些都是实体对象。通常，这些对象需要知道有关自身的属性，同时他们还可以修改自己，并使用一些方法来改变自己。

🔖 **边界对象**是位于系统边界之间的对象。可能是处理另一个软件系统的对象，就像从互联网获取信息的对象一样。也可能是负责向用户显示信息并获取其输入的对象。如果你需要编写用户界面，那一定离不开边界对象。任何处理另一个系统的对象、用户、另一个软件系统、互联网等都可以被视为边界对象。

🔖 **控制对象**是负责协调的对象。当我们尝试去分解大型对象时，拥有一个控制其他对象的对象会很有用，这就是控制对象。调解器是个很好的例子：它能够协调许多不同对象的活动，以便它们可以保持松散耦合。

### 抽象化

> 抽象是人类处理复杂事物时的主要方式之一 。抽象是在某些上下文中，将问题域中的概念简化为基本概念的想法。抽象能忽略不重要的细节，将一个概念分解为简化的描述，让我们可以更好地理解概念。

**❗抽象化让我们在某些上下文中，抽取实体必要的属性和行为。**

例如抽象化"食物"，在健康层面下，我们往往关注它的营养价值而并非成本。

**❗一个好的抽象体应该强调它概念所需的要点，而不在意它那些不必要的细节。它应该具备必要的属性和行为，除此之外的一切都与它不相关。**

例如"人类"，但是人类是一个庞大的概念，我们无法抽象出一个完整的人类，所以我们要结合所处环境和其所对应的身份。

假设现在是在学校学习的学生，他们有一些基本的属性"学号"、"成绩"等。这些属性实际的数值会改变，比如学生的成绩会发生变化。但是属性本身不会，因为属性是一个抽象体最基础的描述。除此之外还有行为，例如学生的行为包含上课和写作业，这些是属于学生的责任，反映他是一个学生。哪些与他学生身份不相关的细节，我们不会去考虑。例如在学校学习的学生，我们不会去关注他养了几只小狗、他家有多有钱之类的事情。

### 封装

> 封装是指隐藏对象内部实现的细节，仅对外提供公共访问的接口。

**❗封装是一个在面对对象建模和编程中最基础的设计原则，它涉及三个方面：**

👉 你需要将属性数值（或数据）和会改变这些数值的行为（或函数），封装在一起成为一个独立的对象。

👉 你可以显示该对象的某些数据或函数，这些数据或函数可以让其他对象访问。

👉 你可以将对某些数据或函数的访问限制为仅用于该对象内部。

🔖 简单来说就是封装把对象所需的数据和函数打包成一个独立的对象，显示能让其他对象访问的部分，用来防止外部访问对象内部的细节。

**❗一个对象应该只包含与该对象相关的属性和方法，这些方法可以是让外部获取内部属性数据的接口，也可以是和该对象有关的一些行为。**

例如，一个学生对象只含有与自己相关的课程成绩。

例如，教师对象可以通过询问学生对象（调用学生对象提供的方法）去得知该学生对象的课程成绩。

**❗封装有利于数据的完整性。**

在 Java 中，你可以定义一些不让外部直接访问的数据，然后提供指定的方法让外部安全访问。这样对象的属性值就无法通过变量赋值的方式直接改变。

例如，现在有一个汽车对象，它有一个里程数，如果直接通过赋值改变，那么它可能为负数。但是如果提供指定方法让它改变，我们就能在方法中限制它不为负数。

**❗封装可以保护敏感的信息。**

假设让学生对象去存储一个课程分数，学生对象本身可以提供课程分数的查询，但不需要去透露课程分数的实际数值。

例如，学生对象提供一个查询方法，辨别该学生是否在该课程的学习中表现良好，其方法实现就是使用自己存储的课程分数计算。当分数在 90 ~ 100 时输出"优秀"，在 80 ~ 90 时输出"良"依此类推...

**❗封装有助于更改软件，提高代码复用性。类向外部提供的访问接口可以保持不变，但属性和方法的实现逻辑可以发生改变。外部类在使用接口时，不需要关心其内部是如何运作的。**

例如，学生对象可以在教师对象中知道自己的成绩，但是教师对象不会告知学生对象"他是如何批卷的？"、"是机改还是手批？"

🔖 在编程中，我们可以采用黑盒思考法去封装。把类想象成一个无法看清内部细节的盒子。只要根据规范提供输入值，就会得到相应的预期值，与盒子内部如何运作无关。我们不需要去思考太多，只需要关注"输入值后得到的输出值能帮我们实现什么"。

### 分解

> 分解是把完整的物体分成不同的部分，或者从另一个角度来看，把一堆功能不同的个体组合在一起变成完整对象。

🔖 分解让你能进一步地把问题分解成更容易理解和解决的部分，这与关注点分离类似。

**❗分解的普遍原则是去分析一个完整对象的不同职责，并思考如何把它们分解成不同的部分。每个部分都有自己独特的责任，我们需要把一个整体和它的每个部分联系在一起。**

例如，把一个完整的车分解，它可能有的零件是变速箱、引擎、车轮、轮胎、车门、窗户、车椅和燃料。这些部分都有它们自己的责任。

**❗一个整体可能会有固定或者动态数量的部件。**

例如，冰箱的冷冻库是固定的，但是冰箱内的食物不固定。这也对应了 \`UML\` 中的组合和聚合关系。

**❗整体对象的生命周期和分解出来的部分对象的生命周期可能紧密相关也可能不相关。**

例如，冰箱和它的冷冻库有同样的生命周期，但是冰箱和冰箱内的食物生命周期却不同。冷冻库故障，那么也说明这个冰箱需要去修理；但冰箱里的食物过期和冰箱本身却没有什么关联。

**❗多数整体是可以共享内部的部分的。但是有些时候是不可能或无法共享的。**

例如，一个女生可能是一个家庭的子女也可能是另一个家庭的父母。

例如，冰箱中的食物不能同时放在烤箱里。

🔖 总而言之，分解能帮助我们将问题分解成较小的部分。一个复杂的整体对象可以由独立及简单的部分对象所构成。了解部分跟整体的联系很重要，像是固定或动态数量，它们的生命周期或是否有共享的情况。在 \`UML\` 建模中，组合关系、聚合关系所对应的都是整体与部分的关系。利用好它们，不会让我们在面对一个复杂的整体对象时无从下手。

### 泛化

> 通过泛化，可以帮助我们在解决问题时减少代码冗余。我们可以泛化行为，这样就不需要在整个程序中编写相同的代码。

🔖 在 Java 中我们用继承基类和实现接口的方式来实现泛化。

在 Java 的继承中，你可以有一个"父类"和多个"子类"。当子类继承自父类时，子类将具有父类的属性和行为。我们可以将共通的属性和行为放在父类中。每个继承自该父类的子类，都将具备这些共通的属性和行为。此外，子类还可以拥有一些属于自己的属性和行为，这让它们可以更加专注于自己可以做什么。

例如，狗类和猫类都继承与动物类，它们都具有动物共通的吃和睡。但是狗有属于它自己的忠诚性，猫有属于它自己的好奇心。

**❗不过，泛化不能滥用。有些时候，分解的效果比泛化更好，分解对于模块间的耦合度较低。**

🔖 泛化能帮我们减少代码重复，但它也有着高耦合的特性。当我们使用泛化时，需要思考一下以下问题。

❓ "我是否使用泛化来简单地共享属性或行为，而无需在我的子类中进一步添加任何特殊内容？"

🎗️ 如果"是"，那么你滥用了继承。这是误用的迹象，子类没有存在的意义，因为拥有父类就已经足够了。

❓ "是否违反了里氏替换原则（子类型必须能够替换掉他们的基类型）？"

🎗️ 例如，动物类有跑和跳的行为，现在有一个鱼类，用游泳行为替代了这个跑和跳。那么这就违背了里氏替换原则。因为在动物类中，我们期望子类去形容如何跑和跳，而不是像鱼类一样，使用游泳替代它们。鱼的行为不再像我们期望的那样，它违背了父类的期望，也就违反了里氏替换原则。

## 总结

- 开发软件的步骤分为**需求分析**、**概念设计**、**详细设计**。
- **用户故事**可以让我们在使用面向对象的思维时发现对象和进一步的需求。
- 模块与模块之间的复杂度用耦合度表示，模块内部职责的明确性用内聚力表示。一般来说，在设计中，需要在**低耦合**和**高内聚**之间取得平衡。
- **关注点分离**要求我们在建模时，将问题分解，让每个对象专注于每个问题。
- **信息隐藏**能够让我们控制要共享的信息以及要让其他人看到的行为。外部知道的信息越少，才能更有利于构建灵活、可重用和可维护的系统。
- **概念完整性**可以帮助我们创建一致且设计良好的软件。
- 执行**模型检查**有三个不同的阶段：**建模阶段**、**运行阶段**和**分析阶段**。
- 对象可以分为三种：**实体对象**、**边界对象**、**控制对象**。
- 面向对象建模有四个原则：**抽象化**、**封装**、**分解**和**泛化**。
- **抽象化**让我们在某些上下文中，抽取实体必要的属性和行为。一个好的抽象体应该强调它概念所需的要点，而不在意它那些不必要的细节。它应该具备必要的属性和行为，除此之外的一切都与它不相关。
- **封装**是一个在面对对象建模和编程中最基础的设计原则，它涉及三个方面：
  1. 你需要将属性数值（或数据）和会改变这些数值的行为（或函数），封装在一起成为一个独立的对象。
  2. 你可以显示该对象的某些数据或函数，这些数据或函数可以让其他对象访问。
  3. 你可以将对某些数据或函数的访问限制为仅用于该对象内部。
- **封装**要求一个对象应该只包含与该对象相关的属性和方法，这些方法可以是让外部获取内部属性数据的接口，也可以是和该对象有关的一些行为。
- **封装**的好处：
  1. 有利于数据的完整性。
  2. 可以保护敏感的信息。
  3. 有助于更改软件，提高代码复用性。
- **分解**让我们将一个完整的对象分解为不同职责的部分。整体和部分的关系可以从数量、生命周期和共享三方面去考虑。
- **泛化**可以让我们减少编写重复的代码，但是泛化不能滥用。有些时候，分解的效果比泛化更好，分解对于模块间的耦合度较低。

---

**📌最后：希望本文能够给您提供帮助，文章中有不懂或不正确的地方，请在下方评论区💬留言！**

**🔗参考文献：**

🌐 [Object Oriented Design --coursera](https://www.coursera.org/learn/object-oriented-design)

🌐 [面向对象程序设计 --百度百科](https://baike.baidu.com/item/%E9%9D%A2%E5%90%91%E5%AF%B9%E8%B1%A1%E7%A8%8B%E5%BA%8F%E8%AE%BE%E8%AE%A1/24792)`,slug:`object-oriented-design`,path:`/posts/object-oriented-design/`,wordCount:9372,readingMinutes:39,toc:[{depth:2,slug:`软件要求概念和技术设计`,text:`软件要求、概念和技术设计`},{depth:2,slug:`用户故事`,text:`用户故事`},{depth:2,slug:`耦合和内聚`,text:`耦合和内聚`},{depth:2,slug:`关注点分离`,text:`关注点分离`},{depth:2,slug:`信息隐藏`,text:`信息隐藏`},{depth:2,slug:`概念完整性`,text:`概念完整性`},{depth:2,slug:`模型检查`,text:`模型检查`},{depth:2,slug:`面向对象建模`,text:`面向对象建模`},{depth:3,slug:`对象类别`,text:`对象类别`},{depth:3,slug:`抽象化`,text:`抽象化`},{depth:3,slug:`封装`,text:`封装`},{depth:3,slug:`分解`,text:`分解`},{depth:3,slug:`泛化`,text:`泛化`},{depth:2,slug:`总结`,text:`总结`}],protected:!1,passwordHint:``,sourcePath:`object-oriented-design/index.md`},{title:`观察者模式：一变全知道`,description:`观察者模式（也称事件订阅者、监听者。）是一种行为设计模式，允许你定义一种订阅机制，可在对象事件发生时通知多个“观察”该对象的其他对象。这是对象之间的一对多依赖关系，这样当一个对象改变状态时，它的所有依赖者都会收到通知并自动更新。`,publishedAt:`2023-04-05T12:00:00+08:00`,updatedAt:`2023-04-05T12:00:00+08:00`,tags:[`设计模式`,`行为型模式`,`观察者模式`],category:`设计模式`,series:`设计模式`,seriesOrder:19,pinned:!1,draft:!1,cover:`/posts/observer-pattern/cover.webp`,coverAlt:`观察者模式封面`,content:`**观察者模式**（也称事件订阅者、监听者。）是一种行为设计模式，允许你定义一种订阅机制，可在对象事件发生时通知多个“观察”该对象的其他对象。这是对象之间的一对多依赖关系，这样当一个对象改变状态时，它的所有依赖项都会自动得到通知和更新。

**观察者模式**的特点在于**找到合适的被观察者**。

定义一个通知列表，将需要通知的对象放到这个通知列表中，当被观察者需要发起通知时，就会通知这个列表中的所有对象。

## 为什么要使用？

**观察者模式的对象职责：**

**当一个对象改变状态时，它的所有依赖项对象都会自动得到通知和更新。**

观察者模式🔎能够方便我们捕获观察对象的变化并及时做出相应的操作，同时还能提升代码扩展性。

例如，当用户🙆‍♂️（订阅者）关注的博主💃（发布者）更新时，能够及时收到更新的内容📄。使用观察者模式🔎我们可以任意扩展新的发布者或新的订阅者。

假设现在需要添加“专栏📢”这个模块，希望它能像“关注博主的用户🙆‍♂️能在博主💃更新后及时收到更新内容📄”一样。那么只需要在“发布者接口”下实现一个“专栏发布者”，就能让“订阅专栏的用户👨‍💻及时收到更新内容📄”。

## 模式结构

- **发布者**（Publisher）会向其他对象发送值得关注的事件。事件会在发布者自身状态改变或执行特定行为后发生。发布者中包含一个允许新订阅者加入和当前订阅者离开列表的订阅构架。<span style="color:gray">当新事件发生时，发送者会遍历订阅列表并调用每个订阅者对象的通知方法。该方法是在订阅者接口中声明的。</span>

- **订阅者**（Subscriber）接口声明了通知接口。在绝大多数情况下，该接口仅包含一个 \`update\` 更新方法。该方法可以拥有多个参数，使发布者能在更新时传递事件的详细信息。

- **具体订阅者**（Concrete Subscribers）可以执行一些操作来回应发布者的通知。所有具体订阅者类都实现了同样的接口，因此发布者不需要与具体类相耦合。<span style="color:gray">订阅者通常需要一些上下文信息来正确地处理更新。因此，发布者通常会将一些上下文数据作为通知方法的参数进行传递。发布者也可将自身作为参数进行传递，使订阅者直接获取所需的数据。</span>

- **客户端**（Client）会分别创建发布者和订阅者对象，然后为订阅者注册发布者更新。

**观察者模式的类图：**

![观察者模式的类图](./9790685628d46fc6402c5f24432f3d92.webp)

## 模式实现

该示例使用观察者模式定义两个观察者类 \`DigitObserver\`、\`GraphObserver\` 和一个发布者类 \`RandomNumberGenerator\`。实现每当发布者类 \`RandomNumberGenerator\` 执行 \`execute\` 方法生成数值时。两个观察者类 \`DigitObserver\`、\`GraphObserver\` 会自动根据发布者类生成的数值分别生成“数字版数值”和“数值数量的‘*’”。

### 示例程序的类图

![示例程序的类图](./f22074237346b349e3b737a5ff407052.webp)

### 代码实现

#### 发布者抽象类

\`\`\`java
package example;

import java.util.ArrayList;
import java.util.List;

/** 数字生成器发布者抽象类 */
public abstract class NumberGenerator {
    /** 观察者列表 */
    private List<Observer> observers = new ArrayList<>();

    /**
     - 添加观察者到观察者列表
     - @param observer 要添加的观察者
     */
    public void addObserver(Observer observer) {
        observers.add(observer);
    }

    /**
     - 删除观察者列表的观察者
     - @param observer 要删除的观察者
     */
    public void deleteObserver(Observer observer) {
        observers.remove(observer);
    }

    /** 发送通知给所有观察者 */
    public void notifyObservers() {
        for (Observer observer : observers) {
            observer.update(this);
        }
    }

    /**
     - 获取生成的数值
     - @return 生成的数值
     */
    public abstract int getNumber();

    /** 生成数值 */
    public abstract void execute();
}
\`\`\`

#### 发布者具体实现

\`\`\`java
package example;

import java.util.Random;

/** 随机数生成器发布者具体实现 */
public class RandomNumberGenerator extends NumberGenerator {
    /** 随机数生成器 */
    private Random random = new Random();
    /** 当前数值 */
    private int number = 0;

    /**
     - 获取生成的数值
     - @return 生成的数值
     */
    @Override
    public int getNumber() {
        return number;
    }

    /** 每隔1秒生成一个1~9的数值 */
    @Override
    public void execute() {
        for (int i = 0; i < 5; i++) {
            number = random.nextInt(10);
            notifyObservers();
            try {
                Thread.sleep(1000);
            } catch (InterruptedException e) {
                e.printStackTrace();
            }
        }
    }
}
\`\`\`

#### 观察者接口

\`\`\`java
package example;

/** 观察者接口 */
public interface Observer {
    /**
     - 数字生成后自动更新
     - @param generator 数字生成器
     */
    public void update(NumberGenerator generator);
}
\`\`\`

#### 观察者具体实现

\`\`\`java
package example;

/** 数字形式显示数值，具体观察者实现类 */
public class DigitObserver implements Observer {
    /**
     - 数字生成后自动更新
     - @param generator 数字生成器
     */
    @Override
    public void update(NumberGenerator generator) {
        System.out.println("DigitObserver：" + generator.getNumber());
    }
}
\`\`\`

\`\`\`\`java
package example;

/** 图形形式显示数值，具体观察者实现类 */
public class GraphObserver implements Observer {
    /**
     - 数字生成后自动更新
     - @param generator 数字生成器
     */
    @Override
    public void update(NumberGenerator generator) {
        System.out.print("GraphObserver：'");
        for (int i = 0; i < generator.getNumber(); i++) {
            System.out.print("*");
        }
        System.out.println("'");
    }
}
\`\`\`text

### 代码测试

\`\`\`java
import example.*;

/** 测试观察者模式 */
public class Test {
    public static void main(String[] args) {
        NumberGenerator generator = new RandomNumberGenerator();
        Observer digitObserver = new DigitObserver();
        GraphObserver graphObserver = new GraphObserver();
        generator.addObserver(digitObserver);
        generator.addObserver(graphObserver);
        generator.execute();
    }
}
\`\`\`\`

### 输出结果

\`\`\`text
DigitObserver：9
GraphObserver：'*********'
DigitObserver：0
GraphObserver：''
DigitObserver：2
GraphObserver：'**'
DigitObserver：9
GraphObserver：'*********'
DigitObserver：7
GraphObserver：'*******'
\`\`\`

## 常用场景和解决方案

- 当一个对象状态的改变需要改变其他对象时，或实际对象是事先未知的或动态变化的时。
- 一个对象发生改变时只想要发生通知，而不需要知道接收者是谁。
- 需要创建一种链式触发机制时。
- 微博或微信朋友圈发送的场景。
- 需要建立基于事件触发的场景。

## 模式的优缺点

| 优点                                                                                           | 缺点                       |
| :--------------------------------------------------------------------------------------------- | :------------------------- |
| _开闭原则_。你无需修改发布者代码就能引入新的订阅者类（如果是发布者接口则可轻松引入发布者类）。 | 订阅者的通知顺序是随机的。 |
| 你可以在运行时建立对象之间的联系。                                                             |                            |

### 使用观察者模式的优势

- 能够降低系统与系统之间的耦合性。
- 提高代码的扩展性，能够任意引入新的订阅者类或发布者类。
- 可以建立一套基于目标对象特定操作或数据的触发机制。

### 使用观察者模式的劣势

- 增加代码的理解难度。
- 降低了系统的性能。

## 拓展知识

责任链模式、命令模式、中介者模式和观察者模式用于处理请求发送者和接收者之间的不同连接方式：

- _责任链_按照顺序将请求动态传递给一系列的潜在接收者，直至其中一名接收者对请求进行处理。
- _命令_在发送者和请求者之间建立单向连接。
- _中介者_清除了发送者和请求者之间的直接连接，强制它们通过一个中介对象进行间接沟通。
- _观察者_允许接收者动态地订阅或取消接收请求。

🔙 [设计模式](/posts/design-patterns/)

**📌最后：希望本文能够给您提供帮助，文章中有不懂或不正确的地方，请在下方评论区💬留言！**

**🔗参考文献：**

🌐 [设计模式 --refactoringguru](https://refactoringguru.cn/design-patterns#intro-patterns)

📺 [bilibili-趣学设计模式；黄靖锋. --拉勾教育](https://www.bilibili.com/video/BV1hY411Y7zR/?p=1&vd_source=a9a236c4d6e5c5350c70b71ee0727b8c)

📖 图解设计模式 /（日）结城浩著；杨文轩译. --北京：人民邮电出版社，2017.1`,slug:`observer-pattern`,path:`/posts/observer-pattern/`,wordCount:4637,readingMinutes:7,toc:[{depth:2,slug:`为什么要使用`,text:`为什么要使用？`},{depth:2,slug:`模式结构`,text:`模式结构`},{depth:2,slug:`模式实现`,text:`模式实现`},{depth:3,slug:`示例程序的类图`,text:`示例程序的类图`},{depth:3,slug:`代码实现`,text:`代码实现`},{depth:4,slug:`发布者抽象类`,text:`发布者抽象类`},{depth:4,slug:`发布者具体实现`,text:`发布者具体实现`},{depth:4,slug:`观察者接口`,text:`观察者接口`},{depth:4,slug:`观察者具体实现`,text:`观察者具体实现`},{depth:3,slug:`代码测试`,text:`代码测试`},{depth:3,slug:`输出结果`,text:`输出结果`},{depth:2,slug:`常用场景和解决方案`,text:`常用场景和解决方案`},{depth:2,slug:`模式的优缺点`,text:`模式的优缺点`},{depth:3,slug:`使用观察者模式的优势`,text:`使用观察者模式的优势`},{depth:3,slug:`使用观察者模式的劣势`,text:`使用观察者模式的劣势`},{depth:2,slug:`拓展知识`,text:`拓展知识`}],protected:!1,passwordHint:``,sourcePath:`observer-pattern/index.md`},{title:`原型模式：复制而不是新建`,description:`原型模式是一种创建型设计模式，使你能够复制已有对象，而又无需使代码依赖它们所属的类。`,publishedAt:`2023-04-03T17:12:00+08:00`,updatedAt:`2023-04-03T17:12:00+08:00`,tags:[`设计模式`,`创建型模式`,`原型模式`],category:`设计模式`,series:`设计模式`,seriesOrder:5,pinned:!1,draft:!1,cover:`/posts/prototype-pattern/cover.webp`,coverAlt:`原型模式封面`,content:`**原型模式**是一种创建型设计模式，使你能够复制已有对象，而又无需使代码依赖它们所属的类。

## 为什么要使用？

**原型模式的对象职责：**

**复制已有对象无需使代码依赖它们所属的类。**

使用原型实例指定创建对象的种类，然后通过拷贝这些原型来创建新的对象。

在现实开发中，我们可以会遇到一些情况，无法根据类来生成实例，而要根据现有的实例来生成新的实例。如以下情况：

1. 对象种类繁多，无法将它们整合到一个类中时。
2. 难以根据类生成实例时，或者说生成实例的过程太过复杂。
3. 想解耦框架与生成的实例时，让生成实例的框架不依赖于具体的类。

那么，我们可以使用原型模式来生成新的类，使被复制的具体的类与复制解耦。

## 模式结构

- **原型** （Prototype）接口将对克隆方法进行声明。在绝大多数情况下，其中只会有一个名为 \`clone\` 克隆的方法。

- **具体原型**（Concrete Prototype）类将实现克隆方法。除了将原始对象的数据复制到克隆（需要考虑浅拷贝还是深拷贝）体中之外，该方法有时还需处理克隆过程中的极端情况，例如克隆关联对象和梳理递归依赖等等。

- **客户端**（Client）可以复制实现了原型接口的任何对象。

**原型模式的类图：**

![原型模式的类图](./89563d45ae12070b7d7c07292f7eb382.webp)

通过一个声明 \`clone\` 的接口作为原型，让其他需要被克隆的对象实现它。这样使你能够克隆对象，但又不需要将代码和对象所属类耦合。

## 模式实现

该示例使用原型模式构建一个注册原型的工厂和下划线类原型。将原型注册到工厂中，需要克隆原型时，只需要使用相应的原型 \`key\`，即可获取相应原型克隆实例。

### 示例程序的类图

![示例程序的类图](./b8544fbc46faad3252ca7206c68f3793.webp)

### 代码实现

#### 原型接口

\`\`\`java
package example;

/** 原型接口 */
public interface IPrototype extends Cloneable {
    /**
     - 克隆接口
     - 如果在没有实现 Cloneable 接口的实例上调用 Object 的 clone 方法，则会导致抛出 CloneNotSupportedException 异常。
     *
     - @return IPrototype
     - @throws CloneNotSupportedException
     */
    IPrototype clone() throws CloneNotSupportedException;
}
\`\`\`

#### 具体原型

\`\`\`java
package example;

/** 具体原型 */
public class UnderlinePen implements IPrototype {
    /** 下划线符号 */
    private String ulChar;

    public UnderlinePen(String ulChar) {
        this.ulChar = ulChar;
    }

    /** 打印下划线 */
    public void print() {
        if (ulChar != null && !"".equals(ulChar)) {
            for (int i = 0; i < 10; i++) {
                System.out.print(ulChar);
            }
            System.out.println();
        }
    }

    /**
     - 克隆接口
     - 如果在没有实现 Cloneable 接口的实例上调用 Object 的 clone 方法，则会导致抛出 CloneNotSupportedException 异常。
     - @return IPrototype 克隆后的对象
     - @throws CloneNotSupportedException
     */
    @Override
    public IPrototype clone() throws CloneNotSupportedException {
        IPrototype prototype = null;
        try {
            prototype = (IPrototype) super.clone();
        } catch (CloneNotSupportedException e) {
            e.printStackTrace();
        }
        return prototype;
    }
}
\`\`\`

#### 原型工厂

\`\`\`java
package example;

import java.util.HashMap;
import java.util.Map;

/** 原型工厂 */
public class PrototypeFactory {
    /** 原型注册表 */
    private Map<String, IPrototype> prototypeMap = new HashMap<>();

    public void register(String name, IPrototype prototype) {
        prototypeMap.put(name, prototype);
    }

    /**
     - 根据原型注册表，拷贝原型
     - @param name 原型注册表key
     - @return 拷贝原型
     */
    public IPrototype getPrototypeInstance(String name) {
        IPrototype prototype = null;
        try {
            prototype = prototypeMap.get(name).clone();
        } catch (CloneNotSupportedException e) {
            e.printStackTrace();
        }
        return prototype;
    }
}
\`\`\`

### 代码测试

\`\`\`java
import example.IPrototype;
import example.PrototypeFactory;
import example.UnderlinePen;

/** 测试原型模式 */
public class Test {
    public static void main(String[] args) {
        PrototypeFactory prototypeFactory = new PrototypeFactory();
        UnderlinePen plus = new UnderlinePen("+");
        UnderlinePen minus = new UnderlinePen("-");
        prototypeFactory.register("plus", plus);
        prototypeFactory.register("minus", minus);
        UnderlinePen plusClone = (UnderlinePen) prototypeFactory.getPrototypeInstance("plus");
        UnderlinePen minusClone = (UnderlinePen) prototypeFactory.getPrototypeInstance("minus");
        System.out.print("原生“+”对象(" + System.identityHashCode(plus) + ")输出：");
        plus.print();
        System.out.print("克隆“+”对象(" + System.identityHashCode(plusClone) + ")输出：");
        plusClone.print();

        System.out.println("\\n------------------- 分割线 -------------------\\n");

        System.out.print("原生“-”对象(" + System.identityHashCode(minus) + ")输出：");
        minus.print();
        System.out.print("克隆“-”对象(" + System.identityHashCode(minusClone) + ")输出：");
        minusClone.print();

    }
}
\`\`\`

### 输出结果

\`\`\`text
原生“+”对象(460141958)输出：++++++++++
克隆“+”对象(1163157884)输出：++++++++++

------------------- 分割线 -------------------

原生“-”对象(1956725890)输出：----------
克隆“-”对象(356573597)输出：----------
\`\`\`

从上述结果不难看出，我们用原型模式创建的对象和原来的对象并非同个对象，但是属性又完全一致。

## 常用场景和解决方案

- 资源优化场景。当对象初始化需要借助许多外部资源时，如 \`IO\` 资源。
- 复制的依赖场景。创建对象时需要多个对象相互依赖。
- 性能和安全要求的场景。
- 同一个对象可能被多个修改者使用的场景。
- 需要保存原始对象状态的场景。例如记录历史操作。
- 结合工厂模式使用。用原型注册表来记录每个原型，让使用者能克隆所需的原型。

## 模式的优缺点

| 优点                                             | 缺点                                       |
| :----------------------------------------------- | :----------------------------------------- |
| 你可以克隆对象，而无需与它们所属的具体类相耦合。 | 克隆包含循环引用的复杂对象可能会非常麻烦。 |
| 你可以克隆预生成原型，避免反复运行初始化代码。   |                                            |
| 你可以更方便地生成复杂对象。                     |                                            |
| 你可以用继承以外的方式来处理复杂对象的不同配置。 |                                            |

### 使用原型模式的优势

- 减少每次创建对象的资源消耗。使用对象拷贝是在内存中进行二进制流的拷贝，资源消耗更少、速度更快。
- 减低对象创建的时间消耗，在需要查询数据库创建对象时，如果数据库繁忙，就需要等待，那么这个创建过程就可能出现长时间等待。使用原型模式创建对象就相当于进行一次缓存读取，大大加快了创建对象时间。
- 快速复制对象运行时的状态，不需要了解创建过程也能快速创建对象。
- 能保存原始对象的副本，方便快速回滚到上一次保存或最初的状态。
- 可以快速扩展运行时对象的属性和方法。

### 使用原型模式的劣势

- 需要一个被初始化过的正确对象。
- 复制大对象时，可能出现内存溢出的 \`OOM\`（Out Of Memory） 错误。
- 动态扩展对象功能时可能会掩盖新的风险。

## 拓展知识

- 原型可用于保存命令模式的历史记录。
- 大量使用组合模式和装饰模式的设计通常可从对于原型的使用中获益。你可以通过该模式来复制复杂结构，而非从零开始重新构造。
- 原型并不基于继承，因此没有继承的缺点。另一方面，*原型*需要对被复制对象进行复杂的初始化。工厂方法基于继承， 但是它不需要初始化步骤。
- Java 中的 \`Cloneable\` 接口是一个**标记接口**，用来标记可以使用 \`clone\` 方法进行复制。其内部根本没有声明 \`clone\` 方法。\`clone\` 方法的定义在 \`java.lang.Object\` 中。
- clone 方法进行的复制是浅复制。它只是**将被复制实例的字段值直接复制到新的实例中**。如果字段保存的是数组，那么它只会复制该数组的引用，并不会复制数组中的元素。
- 使用原型模式时可能需要我们对 \`IO\` 流、内存和 \`JVM\` 等一些底层的原理有更加深入的理解才行。

🔙 [设计模式](/posts/design-patterns/)

**📌最后：希望本文能够给您提供帮助，文章中有不懂或不正确的地方，请在下方评论区💬留言！**

**🔗参考文献：**

🌐 [设计模式 --refactoringguru](https://refactoringguru.cn/design-patterns#intro-patterns)

📺 [bilibili-趣学设计模式；黄靖锋. --拉勾教育](https://www.bilibili.com/video/BV1hY411Y7zR/?p=1&vd_source=a9a236c4d6e5c5350c70b71ee0727b8c)

📖 图解设计模式 /（日）结城浩著；杨文轩译. --北京：人民邮电出版社，2017.1`,slug:`prototype-pattern`,path:`/posts/prototype-pattern/`,wordCount:4836,readingMinutes:8,toc:[{depth:2,slug:`为什么要使用`,text:`为什么要使用？`},{depth:2,slug:`模式结构`,text:`模式结构`},{depth:2,slug:`模式实现`,text:`模式实现`},{depth:3,slug:`示例程序的类图`,text:`示例程序的类图`},{depth:3,slug:`代码实现`,text:`代码实现`},{depth:4,slug:`原型接口`,text:`原型接口`},{depth:4,slug:`具体原型`,text:`具体原型`},{depth:4,slug:`原型工厂`,text:`原型工厂`},{depth:3,slug:`代码测试`,text:`代码测试`},{depth:3,slug:`输出结果`,text:`输出结果`},{depth:2,slug:`常用场景和解决方案`,text:`常用场景和解决方案`},{depth:2,slug:`模式的优缺点`,text:`模式的优缺点`},{depth:3,slug:`使用原型模式的优势`,text:`使用原型模式的优势`},{depth:3,slug:`使用原型模式的劣势`,text:`使用原型模式的劣势`},{depth:2,slug:`拓展知识`,text:`拓展知识`}],protected:!1,passwordHint:``,sourcePath:`prototype-pattern/index.md`},{title:`代理模式：给对象配个替身`,description:`代理模式是一种结构型设计模式，让你能够提供对象的替代品或其占位符。代理控制着对于原对象的访问，并允许在将请求提交给对象前后进行一些处理。`,publishedAt:`2023-04-04T15:52:00+08:00`,updatedAt:`2023-04-04T15:52:00+08:00`,tags:[`设计模式`,`结构型模式`,`代理模式`],category:`设计模式`,series:`设计模式`,seriesOrder:13,pinned:!1,draft:!1,cover:`/posts/proxy-pattern/cover.webp`,coverAlt:`代理模式封面`,content:`**代理模式**是一种结构型设计模式，让你能够提供对象的替代品或其占位符。代理控制着对于原对象的访问，并允许在将请求提交给对象前后进行一些处理。

代理模式的基本理念是作为一个外包装的中间层，享有控制住访问对象的权力，同时也能扩展一些功能。其核心能力在于对某一个具体的功能进行增强和补充。

## 为什么要使用？

**代理模式的对象职责：**

**能够提供对象的替代品或其占位符。** 代理模式是将“原对象的控制权”委托给“代理”，让“代理”能够将请求提交给“原对象”前后进行一些处理。

在现实生活中，房东🙍‍♂️因为某些事情无法处理出售或出租房子🏠的时候，就会委托房产中介👨‍💼去帮他们进行出售或出租。这就是代理模式的一种真实世界类比。

**❔为什么要使用代理模式，而不直接使用“原对象”呢？**

**👉 客户端有时无法直接操作某些对象。**

📜 在分布式应用中，你需要调用的对象运行在另外一台服务器上。如果直接调用“原对象”，就需要处理网络服务，通过网络进行访问。我们可以使用代理模式，建立一个网络代理对象，就只需要调用代理对象就可以进行访问。

**👉 客户端执行某些耗时操作容易造成服务端阻塞。**

📜 在云编辑器里进行文案编写时，使用者不希望在执行拷贝图片的操作后，打字无法正常操作，甚至无法查看其他页面。我们可以使用代理模式，通过标示图片所在地址，用代理对象去读取图片资源。

**👉 服务端需要控制客户端的访问权限。**

📜 某一项业务由于安全原因只能让一部分特定的用户去访问。我们可以使用代理模式，让代理对象去接收所有请求，再有代理对象做权限判断。

💡 还有“某个接口可能需要外部额外操作”、“系统一直保存无用的、占用大资源的对象”等情况，也能考虑使用代理模式。

## 模式结构

- **服务接口**（Service Interface）声明了服务接口。代理必须遵循该接口才能伪装成服务对象。

- **服务**（Service）类提供了一些实用的业务逻辑。

- **代理**（Proxy）类包含一个指向服务对象的引用成员变量。代理完成其任务（例如延迟初始化、记录日志、访问控制和缓存等）后会将请求传递给服务对象。<span style="color:gray">通常情况下， 代理会对其服务对象的整个生命周期进行管理。</span>

- **客户端**（Client）能通过同一接口与服务或代理进行交互，所以你可在一切需要服务对象的代码中使用代理。

**代理模式的类图：**

![代理模式的类图](./cb6b000c97f765ff5aa07d91c1cd34e6.webp)

## 模式实现

该示例使用代理模式将耗时的打印机实例初始化交由代理类负责。代理类让其只有在需要打印的时候才会开始实例化打印机。

### 示例程序的类图

![示例程序的类图](./d12f0e236330e7080b9321d1f6de2b38.webp)

### 代码实现

#### 服务接口

\`\`\`java
package example;

/** 打印机服务接口 */
public interface Printable {
    /**
     - 设置打印机名字
     - @param name 打印机名字
     */
    void setPrinterName(String name);

    /**
     - 获取打印机名字
     - @return 打印机名字
     */
    String getPrinterName();

    /**
     - 打印
     - @param value 要打印的内容
     */
    void print(String value);
}
\`\`\`

#### 服务

\`\`\`java
package example;

/** 打印机服务 */
public class Printer implements Printable {
    /** 打印机名字 */
    private String name;

    /** 生成实例需要5秒 */
    public Printer(String name) {
        this.name = name;
        System.out.println("正在生成Printer实例...");
        heavyJob();
        System.out.println("已生成Printer实例！");
    }

    /**
     - 设置打印机名字
     - @param name 打印机名字
     */
    @Override
    public void setPrinterName(String name) {
        this.name = name;
    }

    /**
     - 获取打印机名字
     - @return 打印机名字
     */
    @Override
    public String getPrinterName() {
        return this.name;
    }

    /**
     - 打印
     - @param value 要打印的内容
     */
    @Override
    public void print(String value) {
        System.out.println("-----* " + this.name + " *-----");
        System.out.println(value);
    }

    /** 模拟生成实例需要耗费大量时间 */
    private void heavyJob() {
        for (int i = 0; i < 3; i++) {
            try {
                Thread.sleep(1000);
            } catch (InterruptedException e) {
                e.printStackTrace();
            }
            System.out.println(i + 1 + "秒...");
        }
    }
}
\`\`\`

#### 代理

\`\`\`java
package example;

/** 打印机代理 */
public class PrinterProxy implements Printable {
    /** 打印机名字 */
    private String name;
    /** 打印机服务对象 */
    private Printer real;

    public PrinterProxy(String name) {
        this.name = name;
    }

    /**
     - 设置打印机名字
     - @param name 打印机名字
     */
    @Override
    public synchronized void setPrinterName(String name) {
        this.name = name;
    }

    /**
     - 获取打印机名字
     - @return 打印机名字
     */
    @Override
    public String getPrinterName() {
        return this.name;
    }

    /**
     - 打印
     - @param value 要打印的内容
     */
    @Override
    public void print(String value) {
        realize();
        real.print(value);
    }

    /** 生成实例 */
    private synchronized void realize() {
        if (real == null) {
            real = new Printer(name);
        }
    }
}
\`\`\`

### 代码测试

\`\`\`java
import example.Printable;
import example.PrinterProxy;

/** 测试代理模式 */
public class Test {
    public static void main(String[] args) {
        Printable p = new PrinterProxy("Heyelio");
        System.out.println("初始化打印机名字为：" + p.getPrinterName());
        p.setPrinterName("The Heyelio");
        System.out.println("修改打印机名字为：" + p.getPrinterName());
        p.print("代理模式测试");
    }
}
\`\`\`

### 输出结果

\`\`\`text
初始化打印机名字为：Heyelio
修改打印机名字为：The Heyelio
正在生成Printer实例...
1秒...
2秒...
3秒...
已生成Printer实例！
-----* The Heyelio *-----
代理模式测试
\`\`\`

生成 \`Printer\` 实例需要耗时 3 秒，使用 \`PrinterProxy\` 代理类让生成实例的时机放在调用 \`print\` 方法的时候。实现打印机只有在打印的时候才会生成实例。

## 常用场景和解决方案

- Virtual Proxy（虚拟代理），适用于延迟初始化，用小对象表示大对象的场景。<span style="color:gray">真正需要原对象实例时，才生成和初始化。</span>
- Access Proxy（保护代理），适用于服务端对客户端的访问控制场景。<span style="color:gray">为原对象的功能做一些访问限制。</span>
- Remote Proxy（远程代理），适用于需要本地执行远程服务代码的场景。<span style="color:gray">调用远程原对象如同在身边一样。</span>
- 日志记录代理，适用于需要保存请求对象历史记录的场景。<span style="color:gray">在原对象周围添加日志监控。</span>
- 缓存代理，适用于缓存客户请求结果并对缓存生命周期进行管理的场景。<span style="color:gray">对重复请求的相同结果进行缓存。</span>
- 智能引用，适用于在没有客户端使用某个重量级对象时立即销毁该对象。<span style="color:gray">代理会将所有获取了指向服务对象或其结果的客户端记录在案。代理会时不时地遍历各个客户端，检查它们是否仍在运行。如果相应的客户端列表为空，代理就会销毁该服务对象，释放底层系统资源。代理还可以记录客户端是否修改了服务对象。其他客户端还可以复用未修改的对象。</span>

## 模式的优缺点

| 优点                                                                   | 缺点                                     |
| :--------------------------------------------------------------------- | :--------------------------------------- |
| 你可以在客户端毫无察觉的情况下控制服务对象。                           | 代码可能会变得复杂，因为需要新建许多类。 |
| 如果客户端对服务对象的生命周期没有特殊要求，你可以对生命周期进行管理。 | 服务响应可能会延迟。                     |
| 即使服务对象还未准备好或不存在，代理也可以正常工作。                   |                                          |
| _开闭原则_。你可以在不对服务或客户端做出修改的情况下创建新代理。       |                                          |

### 使用代理模式的优势

- 作为接口的特定中间层能够降低对象间的直接耦合。
- 虚拟代理通过延迟加载以及使用小对象代表大对象的方式，帮助减少系统资源的损耗，提升系统运行速度。
- 保护代理可以控制客户端对服务端的访问权限。
- 远程代理帮助客户端快速访问分布式机器上的对象，分布式服务器可以提供集群负载均衡、故障容错和高性能的计算能力。
- 日志代理记录能记录每次操作的信息，对于用户使用轨迹跟踪、数据统计、定位问题等都有重要作用。
- 缓存代理能够提供各式各样的缓存结果，对于需要高频读取重复数据的系统来说，能极大地提升系统性能。
- 智能引用能够销毁长时间未被使用却占用大量资源的对象，释放底层资源。还能为原对象提供一些额外的操作被使用。

### 使用代理模式的劣势

- 因为在客户端和服务器之间增加了代理对象，所以增加了系统的复杂度。
- 实现代理模式的服务，如果处理请求时间过长，容易造成多个服务调用阻塞，从而影响整体系统的处理速度。
- 对于一些偏操作系统或标准协议等底层的代理服务而言，代码实现可能很复杂。

## 拓展知识

- 适配器模式能为被封装对象提供不同的接口，代理模式能为对象提供相同的接口，装饰模式则能为对象提供加强的接口。
- 装饰和代理两者之间的不同之处在于_代理_通常自行管理其服务对象的生命周期，而_装饰_的生成则总是由客户端进行控制。
- 代理模式的应用比装饰模式更广泛，代理模式不执着于链式结构，而是采用更为灵活的单一结构。

🔙 [设计模式](/posts/design-patterns/)

**📌最后：希望本文能够给您提供帮助，文章中有不懂或不正确的地方，请在下方评论区💬留言！**

**🔗参考文献：**

🌐 [设计模式 --refactoringguru](https://refactoringguru.cn/design-patterns#intro-patterns)

📺 [bilibili-趣学设计模式；黄靖锋. --拉勾教育](https://www.bilibili.com/video/BV1hY411Y7zR/?p=1&vd_source=a9a236c4d6e5c5350c70b71ee0727b8c)

📖 图解设计模式 /（日）结城浩著；杨文轩译. --北京：人民邮电出版社，2017.1`,slug:`proxy-pattern`,path:`/posts/proxy-pattern/`,wordCount:5068,readingMinutes:10,toc:[{depth:2,slug:`为什么要使用`,text:`为什么要使用？`},{depth:2,slug:`模式结构`,text:`模式结构`},{depth:2,slug:`模式实现`,text:`模式实现`},{depth:3,slug:`示例程序的类图`,text:`示例程序的类图`},{depth:3,slug:`代码实现`,text:`代码实现`},{depth:4,slug:`服务接口`,text:`服务接口`},{depth:4,slug:`服务`,text:`服务`},{depth:4,slug:`代理`,text:`代理`},{depth:3,slug:`代码测试`,text:`代码测试`},{depth:3,slug:`输出结果`,text:`输出结果`},{depth:2,slug:`常用场景和解决方案`,text:`常用场景和解决方案`},{depth:2,slug:`模式的优缺点`,text:`模式的优缺点`},{depth:3,slug:`使用代理模式的优势`,text:`使用代理模式的优势`},{depth:3,slug:`使用代理模式的劣势`,text:`使用代理模式的劣势`},{depth:2,slug:`拓展知识`,text:`拓展知识`}],protected:!1,passwordHint:``,sourcePath:`proxy-pattern/index.md`},{title:`单例模式：全局只此一份`,description:`单例模式是一种创建型设计模式，让你能够保证一个类只有一个实例，并提供一个访问该实例的全局节点。`,publishedAt:`2023-04-04T15:21:00+08:00`,updatedAt:`2023-04-04T15:21:00+08:00`,tags:[`设计模式`,`创建型模式`,`单例模式`],category:`设计模式`,series:`设计模式`,seriesOrder:6,pinned:!1,draft:!1,cover:`/posts/singleton-pattern/cover.webp`,coverAlt:`单例模式封面`,content:`**单例模式**是一种创建型设计模式， 让你能够保证一个类只有一个实例， 并提供一个访问该实例的全局节点。

## 为什么要使用？

**单例模式的对象职责：**

- **保证一个类只有一个实例。** 有时候我们需要控制一个类所拥有的实例数量，例如控制某些共享资源（数据库或文件）的访问权限。但是如果使用构造函数创建对象，它总是返回一个新的对象，不符合我们的需求。
- **为该实例提供一个全局访问节点。** 我们常常会使用一些全局变量来让任何地方能够访问到，它很方便但是也会带来一些麻烦，例如会被其他代码覆盖掉那些变量的内容。但单例模式不会，它可以保护实例不被其他代码覆盖，同时它类似于全局变量或全局函数的角色可以在程序的任何地方被访问。

## 模式结构

- 一个单例类只能有一个实例；（对象实例数量受到限制的事实）
- 单例类必须自行创建这个实例；（对象实例的构造与销毁）
- 单例类必须保证全局其他对象都能唯一访问到它。（需要保证对象实例成为“线程安全”的某种机制）

**单例模式的类图：**

![单例模式的类图](./af2aa094c32b3945f62485fbaff083e0.webp)

通过一个私有的类变量来保存实例，再使用私有构造方法来确保外部无法通过 \`new\` 的方式创建新的实例。最后再为这个私有变量实例提供一个外部都能访问的方法。这样就保证了一个类只有一个实例， 并且全局都能访问到它。

## 模式实现

该示例使用饿汉式单例模式实现，通过判断两个实例是否相同来验证是否为单例模式。

### 示例程序的类图

![示例程序的类图](./9b30a9aaccee2c07a487a9a3ddd70b89.webp)

### 代码实现

\`\`\`java
package example.simple;

/** 简单单例模式实现（饿汉式） */
public class Singleton {
    /** 唯一实例 */
    private static Singleton instance = new Singleton();

    /** 禁止外部使用构造函数创建对象 */
    private Singleton() {
        System.out.println("Singleton类内部生成了一个实例！");
    }

    /** 提供外部可访问唯一实例的节点 */
    public static Singleton getInstance() {
        return instance;
    }
}
\`\`\`

### 代码测试

\`\`\`java
import example.simple.Singleton;

/** 测试 */
public class Test {
    public static void main(String[] args) {
        // 第一次获取实例
        Singleton s1 = Singleton.getInstance();
        // 第二次获取实例
        Singleton s2 = Singleton.getInstance();
        if (s1 == s2) {
            System.out.println("s1和s2是同一个实例！");
        } else {
            System.out.println("s1和s2不是同一个实例！");
        }
    }
}
\`\`\`

### 输出结果

\`\`\`text
Singleton类内部生成了一个实例！
s1和s2是同一个实例！
\`\`\`

输出结果说明对象只被创建了一次，同时外部多次访问的实例都是同一实例。

## 常用场景和解决方案

**常见的单例模式应用和使用的解决方案：**

- **饿汉式初始化：** 初始化的时候就创建对象。饿汉式创建对象的性能比较低但不存在线程同步问题，开发常用。
- **懒汉式初始化：** 对象被调用时才创建对象。在单线程环境没有问题，但在多线程环境下就会出现问题，存在创建多个对象的风险。
- **同步信号：** 懒汉单例模式在单线程环境没有问题，但在多线程环境下就会出现问题，存在创建多个对象的风险。所以就需要加锁同步。加锁也有两种方案：
  1. 锁方法：由于初始化实例就执行一次，所以锁方法会导致效率低下。
  2. 锁实例化代码块：在判空之后加入锁，锁住实例化代码块。但是这样也会造成同步问题，如果有多个线程进入了判空之后拿锁的阶段，此时第一个拿到锁的线程实例化后，第二个拿到锁的又能再实例化，不符合单例模式的设计。我们可以使用双重锁定来解决。
- **双重锁定：** 双重锁定是一种较为实用、安全的方案，就是在同步产生实例化的代码块里再判断，进行两次检查。在双重检查锁中，代码会检查两次单例类是否有已存在的实例，一次加锁一次不加锁，一次确保不会有多个实例被创建。
- **使用 \`ThreadLocal\`：** 最常用的方式。\`ThreadLocal\` 会为每个线程提供一个独立的对象副本，从而解决多个线程对数据的访问冲突问题。

## 模式的优缺点

| 优点                                   | 缺点                                                                                                                                                                                                                                           |
| :------------------------------------- | :--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| 你可以保证一个类只有一个实例。         | 违反了*单一职责原则*。 该模式同时解决了两个问题。                                                                                                                                                                                              |
| 你获得了一个指向该实例的全局访问节点。 | 单例模式可能掩盖不良设计， 比如程序各组件之间相互了解过多等。                                                                                                                                                                                  |
| 仅在首次请求单例对象时对其进行初始化。 | 该模式在多线程环境下需要进行特殊处理， 避免多个线程多次创建单例对象。                                                                                                                                                                          |
|                                        | 单例的客户端代码单元测试可能会比较困难， 因为许多测试框架以基于继承的方式创建模拟对象。 由于单例类的构造函数是私有的， 而且绝大部分语言无法重写静态方法， 所以你需要想出仔细考虑模拟单例的方法。 要么干脆不编写测试代码， 或者不使用单例模式。 |

### 使用单例模式的优势

- 对有限资源的合理利用，保护有限的资源，防止资源重复竞抢。
- 更高内聚的代码组件，能提高代码复用性。
- 具备全局唯一访问点的权限控制，方便按照统一规则管控权限。
- 从负载均衡的角度考虑，可以轻松将 Singleton 扩展成两个、三个或更多个实例。由于封装了基数问题，所以在适当的时候可以自由更改实例的数量。

### 使用单例模式的劣势

- 作为全局变量使用时，引用的对象越多，代码修改影响的范围就越大。
- 作为全局变量时，在全局变量中使用状态变量时，会造成加/解锁的性能损耗。
- 即便能扩展多实例，但耦合度依然很高，因为隐蔽了不同对象之间的调用关系。
- 不支持有参数的构造函数。

## 拓展知识

在多数情况下，以下模式只会生成一个实例。

- 抽象工程 Abstract Factory
- 生成器 Builder
- 外观 Facade
- 原型 Prototype

🔙 [设计模式](/posts/design-patterns/)

**📌最后：希望本文能够给您提供帮助，文章中有不懂或不正确的地方，请在下方评论区💬留言！**

**🔗参考文献：**

🌐 [设计模式 --refactoringguru](https://refactoringguru.cn/design-patterns#intro-patterns)

📺 [bilibili-趣学设计模式；黄靖锋. --拉勾教育](https://www.bilibili.com/video/BV1hY411Y7zR/?p=1&vd_source=a9a236c4d6e5c5350c70b71ee0727b8c)

📖 图解设计模式 /（日）结城浩著；杨文轩译. --北京：人民邮电出版社，2017.1`,slug:`singleton-pattern`,path:`/posts/singleton-pattern/`,wordCount:3167,readingMinutes:8,toc:[{depth:2,slug:`为什么要使用`,text:`为什么要使用？`},{depth:2,slug:`模式结构`,text:`模式结构`},{depth:2,slug:`模式实现`,text:`模式实现`},{depth:3,slug:`示例程序的类图`,text:`示例程序的类图`},{depth:3,slug:`代码实现`,text:`代码实现`},{depth:3,slug:`代码测试`,text:`代码测试`},{depth:3,slug:`输出结果`,text:`输出结果`},{depth:2,slug:`常用场景和解决方案`,text:`常用场景和解决方案`},{depth:2,slug:`模式的优缺点`,text:`模式的优缺点`},{depth:3,slug:`使用单例模式的优势`,text:`使用单例模式的优势`},{depth:3,slug:`使用单例模式的劣势`,text:`使用单例模式的劣势`},{depth:2,slug:`拓展知识`,text:`拓展知识`}],protected:!1,passwordHint:``,sourcePath:`singleton-pattern/index.md`},{title:`状态模式：状态变了行为就变`,description:`状态模式是一种行为设计模式，让你能在一个对象的内部状态变化时改变其行为，使其看上去就像改变了自身所属的类一样。或者说通过控制状态的变化使其行为发生变化。`,publishedAt:`2023-04-05T22:17:00+08:00`,updatedAt:`2023-04-05T22:17:00+08:00`,tags:[`设计模式`,`行为型模式`,`状态模式`],category:`设计模式`,series:`设计模式`,seriesOrder:20,pinned:!1,draft:!1,cover:`/posts/state-pattern/cover.webp`,coverAlt:`状态模式封面`,content:`**状态模式**是一种行为设计模式，让你能在一个对象的内部状态变化时改变其行为，使其看上去就像改变了自身所属的类一样。或者说通过控制状态的变化使其行为发生变化。

## 为什么要使用？

**状态模式的对象职责：**

**通过控制状态的变化使其行为发生变化。** 找到合适的抽象状态以及状态之间的转移关系，通过改变状态来达到改变行为的目的。

当要设计的业务具有复杂的状态变迁时，期望通过状态变化来快速进行变更操作，并降低代码耦合性，避免增加代码的复杂性。

例如，一首歌曲的状态可以是“📝草稿”、“🔬审核中”、“📤上架”、“📥下架”。

1. “草稿状态”只能跃迁到“审核状态”；
2. “审核状态”如果审核成功可以跃迁到“上架状态”；如果审核失败则跃迁到“草稿状态”；
3. “上架状态”和“下架状态”可以任意切换；
4. “下架状态”可以选择永久下架，即一首歌曲的生命周期结束。

## 模式结构

- **上下文**（Context）保存了一个具体的状态对象，并会将所有与该状态相关的工作委派给它。上下文通过状态接口与状态对象交互，且会向外界提供一个更新状态的操作。

- **状态**（State）接口会声明特定于状态的方法，这些方法应该适用于每个具体状态。

- **具体状态**（Concrete States）会自行实现特定于状态的方法。为了避免多个状态中包含相似代码，你可以提供一个封装有部分通用行为的中间抽象类。<span style="color:gray">状态对象可存储对于上下文对象的反向引用。状态可以通过该引用从上下文处获取所需信息，并且能触发状态转移。上下文和具体状态都可以设置上下文的下个状态，并可通过替换连接到上下文的状态对象来完成实际的状态转换。</span>

**状态模式的类图：**

![状态模式的类图](./c1c02d2a9201ffd065f9d3fceb6aa728.webp)

## 模式实现

该示例使用状态模式把包裹的状态分为 6 个部分，分别为“已下单”、“仓库处理中”、“运输中”、“派送中”、“待取件”、“已签收”。每个状态按顺序更新。每次调用 \`PackageContext\` 的 \`update\` 方法时，它就会根据当前状态，去调用当前状态的 \`updateState\` 方法。每个状态的 \`updateState\` 方法中会设置下一个状态为当前状态，以便下次调用 \`PackageContext\` 的 \`update\` 方法时，能够调用新状态的 \`updateState\` 方法。

### 示例程序的类图

![示例程序的类图](./9696f1963752575e090c8fd71a695bd5.webp)

### 示例程序的状态图

![示例程序的状态图](./5a5c9bf4a459d65768874a396a6dfc19.webp)

### 代码实现

#### 上下文

\`\`\`java
package example;

/** 包裹上下文 */
public class PackageContext {
    /** 当前状态 */
    private PackageState currentState;
    /** 包裹ID */
    private String packageId;

    public PackageContext(PackageState currentState, String packageId) {
        this.currentState = currentState;
        this.packageId = packageId;
    }

    public void setCurrentState(PackageState currentState) {
        this.currentState = currentState;
    }

    /** 更新状态 */
    public void update() {
        System.out.print("当前包裹id：" + packageId + " --> 包裹状态：");
        currentState.updateState(this);
        System.out.println();
    }
}
\`\`\`

#### 状态接口

\`\`\`java
package example;

/** 包裹状态接口 */
public interface PackageState {
    /**
     - 更新包裹状态
     - @param ctx 包裹上下文
     */
    void updateState(PackageContext ctx);
}
\`\`\`

#### 具体状态

\`\`\`java
package example;

/** 已下单包裹状态 */
public class Acknowledged implements PackageState {
    private static Acknowledged instance = new Acknowledged();

    private Acknowledged() { }

    /** 单例状态 */
    public static Acknowledged getInstance() {
        return instance;
    }

    /**
     - 更新包裹状态
     - @param ctx 包裹上下文
     */
    @Override
    public void updateState(PackageContext ctx) {
        System.out.println("包裹已下单...");
        ctx.setCurrentState(WarehouseProcessing.getInstance());
    }
}
\`\`\`

\`\`\`java
package example;

/** 仓库处理中包裹状态 */
public class WarehouseProcessing implements PackageState {
    private static WarehouseProcessing instance = new WarehouseProcessing();

    private WarehouseProcessing() { }

    /** 单例状态 */
    public static WarehouseProcessing getInstance() {
        return instance;
    }

    /**
     - 更新包裹状态
     - @param ctx 包裹上下文
     */
    @Override
    public void updateState(PackageContext ctx) {
        System.out.println("包裹正在仓库处理中...");
        ctx.setCurrentState(InTransition.getInstance());
    }
}
\`\`\`

\`\`\`java
package example;

/** 运输中包裹状态 */
public class InTransition implements PackageState {
    private static InTransition instance = new InTransition();

    private InTransition() { }

    /** 单例状态 */
    public static InTransition getInstance() {
        return instance;
    }

    /**
     - 更新包裹状态
     - @param ctx 包裹上下文
     */
    @Override
    public void updateState(PackageContext ctx) {
        System.out.println("包裹正在运输中...");
        ctx.setCurrentState(Delivering.getInstance());
    }
}
\`\`\`

\`\`\`java
package example;

/** 派送中包裹状态 */
public class Delivering implements PackageState {
    private static Delivering instance = new Delivering();

    private Delivering() { }

    /** 单例状态 */
    public static Delivering getInstance() {
        return instance;
    }

    /**
     - 更新包裹状态
     - @param ctx 包裹上下文
     */
    @Override
    public void updateState(PackageContext ctx) {
        System.out.println("包裹已下单...");
        ctx.setCurrentState(WaitForPickUp.getInstance());
    }
}
\`\`\`

\`\`\`java
package example;

/** 待取件包裹状态 */
public class WaitForPickUp implements PackageState {
    private static WaitForPickUp instance = new WaitForPickUp();

    private WaitForPickUp() { }

    /** 单例状态 */
    public static WaitForPickUp getInstance() {
        return instance;
    }

    /**
     - 更新包裹状态
     - @param ctx 包裹上下文
     */
    @Override
    public void updateState(PackageContext ctx) {
        System.out.println("包裹待取件...");
        ctx.setCurrentState(Received.getInstance());
    }
}
\`\`\`

\`\`\`java
package example;

/** 签收包裹状态 */
public class Received implements PackageState {
    private static Received instance = new Received();

    private Received() { }

    /** 单例状态 */
    public static Received getInstance() {
        return instance;
    }

    /**
     - 更新包裹状态
     - @param ctx 包裹上下文
     */
    @Override
    public void updateState(PackageContext ctx) {
        System.out.println("包裹已签收...");
    }
}
\`\`\`

### 代码测试

\`\`\`java
import example.Acknowledged;
import example.PackageContext;

/** 测试状态模式 */
public class Test {
    public static void main(String[] args) {
        PackageContext context = new PackageContext(Acknowledged.getInstance(), "9527");
        context.update();
        context.update();
        context.update();
        context.update();
        context.update();
        context.update();
    }
}
\`\`\`

### 输出结果

\`\`\`text
当前包裹id：9527 --> 包裹状态：包裹已下单...

当前包裹id：9527 --> 包裹状态：包裹正在仓库处理中...

当前包裹id：9527 --> 包裹状态：包裹正在运输中...

当前包裹id：9527 --> 包裹状态：包裹已下单...

当前包裹id：9527 --> 包裹状态：包裹待取件...

当前包裹id：9527 --> 包裹状态：包裹已签收...
\`\`\`

## 常用场景和解决方案

- 对象根据自身状态的变化来进行不同行为的操作，同时状态的数量非常多且与状态相关的代码会频繁变更的话，可以使用状态模式。
- 对象需要根据自身变量的当前值改变行为，但不期望使用大量 \`if-else\` 语句时。
- 对于某些确定的状态和行为，不想使用重复代码时。

## 模式的优缺点

| 优点                                                   | 缺点                                                                                |
| :----------------------------------------------------- | :---------------------------------------------------------------------------------- |
| _单一职责原则_。将与特定状态相关的代码放在单独的类中。 | 如果状态机只有很少的几个状态，或者很少发生改变， 那么应用该模式可能会显得小题大作。 |
| _开闭原则_。无需修改已有状态类和上下文就能引入新状态。 | 如果要修改当前状态类，就有可能要修改前一个状态类和后一个状态类。                    |
| 通过消除臃肿的状态机条件语句简化上下文代码。           |                                                                                     |

### 使用状态模式的优势

- 提前定好可能的状态，降低代码实现复杂度。
- 快速理解状态和行为之间的关系。
- 避免写大量的 \`if-else\` 条件语句。
- 可以让多个环境对象共享一个状态对象，从而减少重复代码。

### 使用状态模式的劣势

- 造成很多零散类。
- 状态切换关系越复杂，代码实现难度越高。

## 拓展知识

- 状态可被视为策略的扩展。两者都基于组合机制：它们都通过将部分工作委派给“帮手”对象来改变其在不同情景下的行为。_策略_使得这些对象相互之间完全独立，它们不知道其他对象的存在。但_状态_模式没有限制具体状态之间的依赖，且允许它们自行改变在不同情景下的状态。
- 状态模式类似于面向对象的“关注点分离”，即将问题分解，让每个对象专注于每个问题。状态模式将一个对象的每种状态分离，使每个状态对象只专注于当前状态。而至于状态间的转换则交给上下文去处理。

🔙 [设计模式](/posts/design-patterns/)

**📌最后：希望本文能够给您提供帮助，文章中有不懂或不正确的地方，请在下方评论区💬留言！**

**🔗参考文献：**

🌐 [设计模式 --refactoringguru](https://refactoringguru.cn/design-patterns#intro-patterns)

📺 [bilibili-趣学设计模式；黄靖锋. --拉勾教育](https://www.bilibili.com/video/BV1hY411Y7zR/?p=1&vd_source=a9a236c4d6e5c5350c70b71ee0727b8c)

📖 图解设计模式 /（日）结城浩著；杨文轩译. --北京：人民邮电出版社，2017.1`,slug:`state-pattern`,path:`/posts/state-pattern/`,wordCount:5672,readingMinutes:7,toc:[{depth:2,slug:`为什么要使用`,text:`为什么要使用？`},{depth:2,slug:`模式结构`,text:`模式结构`},{depth:2,slug:`模式实现`,text:`模式实现`},{depth:3,slug:`示例程序的类图`,text:`示例程序的类图`},{depth:3,slug:`示例程序的状态图`,text:`示例程序的状态图`},{depth:3,slug:`代码实现`,text:`代码实现`},{depth:4,slug:`上下文`,text:`上下文`},{depth:4,slug:`状态接口`,text:`状态接口`},{depth:4,slug:`具体状态`,text:`具体状态`},{depth:3,slug:`代码测试`,text:`代码测试`},{depth:3,slug:`输出结果`,text:`输出结果`},{depth:2,slug:`常用场景和解决方案`,text:`常用场景和解决方案`},{depth:2,slug:`模式的优缺点`,text:`模式的优缺点`},{depth:3,slug:`使用状态模式的优势`,text:`使用状态模式的优势`},{depth:3,slug:`使用状态模式的劣势`,text:`使用状态模式的劣势`},{depth:2,slug:`拓展知识`,text:`拓展知识`}],protected:!1,passwordHint:``,sourcePath:`state-pattern/index.md`},{title:`策略模式：算法可替换`,description:`策略模式是一种行为设计模式，它能让你定义一系列算法，并将每种算法分别放入独立的类中，以使算法的对象能够相互替换。`,publishedAt:`2023-04-05T11:45:00+08:00`,updatedAt:`2023-04-05T11:45:00+08:00`,tags:[`设计模式`,`行为型模式`,`策略模式`],category:`设计模式`,series:`设计模式`,seriesOrder:21,pinned:!1,draft:!1,cover:`/posts/strategy-pattern/cover.webp`,coverAlt:`策略模式封面`,content:`**策略模式**是一种行为设计模式，它能让你定义一系列算法，并将每种算法分别放入独立的类中，以使算法的对象能够相互替换。

## 为什么要使用？

**策略模式的对象职责：**

**定义一系列算法，并将每种算法分别放入独立的类中，以使算法的对象能够相互替换。**

👉 为了提高代码的可维护性。

👉 为了动态快速地替换更多的算法。

👉 为了应对需要频繁更换策略的场景。

💡 策略模式对算法起到了很好的封装作用，对于一些老旧的算法可以很方便地进行替换和升级。

## 模式结构

- **上下文**（Context）维护指向具体策略的引用，且仅通过策略接口与该对象进行交流。<span style="color:gray">当上下文需要运行算法时，它会在其已连接的策略对象上调用执行方法。上下文不清楚其所涉及的策略类型与算法的执行方式。</span>
- **策略**（Strategy）接口是所有具体策略的通用接口，它声明了一个上下文用于执行策略的方法。
- **具体策略**（Concrete Strategies）实现了上下文所用算法的各种不同变体。
- **客户端**（Client）会创建一个特定策略对象并将其传递给上下文。上下文则会提供一个设置器以便客户端在运行时替换相关联的策略。

**策略模式的类图：**

![策略模式的类图](./f1c379ba3b9885cde0ef3c2553f93f10.webp)

## 模式实现

该示例使用策略模式将不同的排序算法（冒泡排序和插入排序）变为一个个单独的类。通过在 \`IntTypeSort\` 类中注入不同的策略，来调用不同的排序算法。

### 示例程序的类图

![示例程序的类图](./2babb38e87c4a2bcd92524eb751f137b.webp)

### 代码实现

#### 上下文

\`\`\`java
package example;

/** int类型排序的上下文 */
public class IntTypeSort {
    /** 排序策略 */
    private ISort sortStrategy;

    public IntTypeSort(ISort sortStrategy) {
        this.sortStrategy = sortStrategy;
    }

    /**
     - 从小到大顺序排序
     - @param arrays 待排序数组
     - @return 排序好的数组
     */
    public int[] getOrder(int[] arrays) {
        return sortStrategy.sort(arrays, true);
    }

    /**
     - 从大到小逆序排序
     - @param arrays 待排序数组
     - @return 排序好的数组
     */
    public int[] getReverseOrder(int[] arrays) {
        return sortStrategy.sort(arrays, false);
    }
}
\`\`\`

#### 策略接口

\`\`\`java
package example;

/** 排序策略接口 */
public interface ISort {
    /**
     - 排序算法
     - @param arrays 待排序数组
     - @param flag true从小到大顺序排序，false从大到小逆序排序
     - @return 排序好的数组
     */
    int[] sort(int[] arrays, boolean flag);
}
\`\`\`

#### 具体策略

\`\`\`java
package example;

/** 冒泡排序策略 */
public class BubbleSort implements ISort {
    /**
     - 排序算法
     - @param arrays 待排序数组
     - @param flag   true从小到大顺序排序，false从大到小逆序排序
     - @return 排序好的数组
     */
    @Override
    public int[] sort(int[] arrays, boolean flag) {
        if (arrays.length == 0) {
            return arrays;
        }
        for (int i = 0; i < arrays.length; i++)
        {
            for (int j = 0; j < arrays.length - 1 - i; j++)
            {
                if (arrays[j + 1] < arrays[j]) {
                    int temp = arrays[j + 1];
                    arrays[j + 1] = arrays[j];
                    arrays[j] = temp;
                }
            }
        }
        // 从大到小排序
        if (!flag) {
            int len = arrays.length;
            int[] temp = new int[len];
            for (int i = 0; i < len; i++) {
                temp[i] = arrays[len - i - 1];
            }
            return temp;
        }
        return arrays;
    }
}
\`\`\`

\`\`\`java
package example;

/** 插入排序策略 */
public class InsertionSort implements ISort {
    /**
     - 排序算法
     - @param arrays 待排序数组
     - @param flag   true从小到大顺序排序，false从大到小逆序排序
     - @return 排序好的数组
     */
    @Override
    public int[] sort(int[] arrays, boolean flag) {
        if (arrays.length == 0)
        {
            return arrays;
        }
        int current;
        for (int i = 0; i < arrays.length - 1; i++) {
            current = arrays[i + 1];
            int preIndex = i;
            while (preIndex >= 0 && current < arrays[preIndex]) {
                arrays[preIndex + 1] = arrays[preIndex];
                preIndex--;
            }
            arrays[preIndex + 1] = current;
        }
        // 从大到小排序
        if (!flag) {
            int len = arrays.length;
            int[] temp = new int[len];
            for (int i = 0; i < len; i++) {
                temp[i] = arrays[len - i - 1];
            }
            return temp;
        }
        return arrays;
    }
}
\`\`\`

### 代码测试

\`\`\`java
import example.IntTypeSort;
import example.BubbleSort;
import example.InsertionSort;

import java.util.Arrays;

/** 测试策略模式 */
public class Test {
    public static void main(String[] args) {
        int[] arrays = new int[]{6, 1, 4, 9, 2, 3, 7, 5, 8};
        System.out.print("原始数组为：");
        Arrays.stream(arrays).forEach(item -> System.out.print(item + " "));
        System.out.println("\\n");

        IntTypeSort bubbleSort = new IntTypeSort(new BubbleSort());
        IntTypeSort insertionSort = new IntTypeSort(new InsertionSort());

        System.out.println("冒泡排序策略：");
        System.out.print("从小到大顺序排序：");
        Arrays.stream(bubbleSort.getOrder(arrays)).forEach(item -> System.out.print(item + " "));
        System.out.println();
        System.out.print("从大到小逆序排序：");
        Arrays.stream(bubbleSort.getReverseOrder(arrays)).forEach(item -> System.out.print(item + " "));
        System.out.println();

        System.out.println("\\n----------------------- 分割线 -----------------------\\n");

        System.out.println("插入排序策略：");
        System.out.print("从小到大顺序排序：");
        Arrays.stream(insertionSort.getOrder(arrays)).forEach(item -> System.out.print(item + " "));
        System.out.println();
        System.out.print("从大到小逆序排序：");
        Arrays.stream(insertionSort.getReverseOrder(arrays)).forEach(item -> System.out.print(item + " "));
        System.out.println();
    }
}
\`\`\`

### 输出结果

\`\`\`text
原始数组为：6 1 4 9 2 3 7 5 8

冒泡排序策略：
从小到大顺序排序：1 2 3 4 5 6 7 8 9
从大到小逆序排序：9 8 7 6 5 4 3 2 1

----------------------- 分割线 -----------------------

插入排序策略：
从小到大顺序排序：1 2 3 4 5 6 7 8 9
从大到小逆序排序：9 8 7 6 5 4 3 2 1
\`\`\`

使用 \`IntTypeSort bubbleSort = new IntTypeSort(new BubbleSort());\` 和 \`IntTypeSort insertionSort = new IntTypeSort(new InsertionSort());\` 注入不同策略，再根据不同策略执行排序。

## 常用场景和解决方案

- 系统中需要动态切换几种算法的场景。
- 使用多重的条件选择语句来实现的业务场景。例如，当类中使用了复杂条件运算符以在同一算法的不同变体中切换时。
- 只希望客户端选择已经封装好的算法场景而不关心算法实现细节。
- 如果算法在上下文的逻辑不是非常重要，策略模式可以让你分离使用策略和创建策略的场景。
- 当你有许多仅在执行某些行为时略有不同的相似类时，可使用策略模式。策略模式让你能将不同行为抽取到一个独立类层次结构中，并将原始类组合成同一个，从而减少重复代码。

## 模式的优缺点

| 优点                                                                                  | 缺点                                                                                                                                                                     |
| :------------------------------------------------------------------------------------ | :----------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| 你可以在运行时切换对象内的算法，提升代码灵活性。                                      | 如果你的算法极少发生改变，那么没有任何理由引入新的类和接口。使用该模式只会让程序过于复杂。                                                                               |
| 你可以将算法的实现和使用算法的代码隔离开来。                                          | 客户端必须知晓策略间的不同——它需要选择合适的策略。客户端的学习成本变高。                                                                                                 |
| 提供了一种管理多个不同算法策略的方法，能够降低使用多重 \`if-else\` 嵌套语句的理解难度。 | 许多现代编程语言支持函数类型功能，允许你在一组匿名函数中实现不同版本的算法。这样，你使用这些函数的方式就和使用策略对象时完全相同，无需借助额外的类和接口来保持代码简洁。 |
| _开闭原则_。你无需对上下文进行修改就能够引入新的策略，提供良好的代码扩展性。          | 具体策略类的数量会剧增，增加维护成本。                                                                                                                                   |
| 你可以使用组合来代替继承。                                                            |                                                                                                                                                                          |

## 拓展知识

- 装饰模式可让你更改对象的外表，策略则让你能够改变其本质。
- 桥接模式、状态模式和策略模式（在某种程度上包括适配器模式）模式的接口非常相似。实际上，它们都基于组合模式——即将工作委派给其他对象，不过也各自解决了不同的问题。模式并不只是以特定方式组织代码的配方，你还可以使用它们来和其他开发者讨论模式所解决的问题。
- 模板方法模式基于继承机制：它允许你通过扩展子类中的部分内容来改变部分算法。策略基于组合机制：你可以通过对相应行为提供不同的策略来改变对象的部分行为。_模板方法_在类层次上运作，因此它是静态的。_策略_在对象层次上运作，因此允许在运行时切换行为。

🔙 [设计模式](/posts/design-patterns/)

**📌最后：希望本文能够给您提供帮助，文章中有不懂或不正确的地方，请在下方评论区💬留言！**

**🔗参考文献：**

🌐 [设计模式 --refactoringguru](https://refactoringguru.cn/design-patterns#intro-patterns)

📺 [bilibili-趣学设计模式；黄靖锋. --拉勾教育](https://www.bilibili.com/video/BV1hY411Y7zR/?p=1&vd_source=a9a236c4d6e5c5350c70b71ee0727b8c)

📖 图解设计模式 /（日）结城浩著；杨文轩译. --北京：人民邮电出版社，2017.1`,slug:`strategy-pattern`,path:`/posts/strategy-pattern/`,wordCount:5367,readingMinutes:7,toc:[{depth:2,slug:`为什么要使用`,text:`为什么要使用？`},{depth:2,slug:`模式结构`,text:`模式结构`},{depth:2,slug:`模式实现`,text:`模式实现`},{depth:3,slug:`示例程序的类图`,text:`示例程序的类图`},{depth:3,slug:`代码实现`,text:`代码实现`},{depth:4,slug:`上下文`,text:`上下文`},{depth:4,slug:`策略接口`,text:`策略接口`},{depth:4,slug:`具体策略`,text:`具体策略`},{depth:3,slug:`代码测试`,text:`代码测试`},{depth:3,slug:`输出结果`,text:`输出结果`},{depth:2,slug:`常用场景和解决方案`,text:`常用场景和解决方案`},{depth:2,slug:`模式的优缺点`,text:`模式的优缺点`},{depth:2,slug:`拓展知识`,text:`拓展知识`}],protected:!1,passwordHint:``,sourcePath:`strategy-pattern/index.md`},{title:`模板方法模式：父类定框架，子类填步骤`,description:`模板方法模式是一种行为设计模式，它在超类中定义了一个算法的框架，允许子类在不修改结构的情况下重写算法的特定步骤。`,publishedAt:`2023-04-05T12:42:00+08:00`,updatedAt:`2023-04-05T12:42:00+08:00`,tags:[`设计模式`,`行为型模式`,`模板方法模式`],category:`设计模式`,series:`设计模式`,seriesOrder:22,pinned:!1,draft:!1,cover:`/posts/template-method-pattern/cover.webp`,coverAlt:`模板方法模式封面`,content:`**模板方法模式**是一种行为设计模式，它在超类中定义了一个算法的框架，允许子类在**不修改结构**的情况下重写算法的特定步骤。

🔖 通常是对算法的特定步骤进行优化，而不是对整个算法进行修改。

## 为什么要使用？

**模板方法模式的对象职责：**

**在父类中定义处理流程的框架，在子类中实现具体处理。**

👉 期望在一个通用的算法或流程框架下进行自定义开发。

👉 避免同样的代码逻辑进行重复编码。

💡 模板方法模式将通用操作和流程处理交给父类处理，其他具体操作交由子类实现。

## 模式结构

- **抽象类**（Abstract Class）会声明作为算法步骤的方法，以及依次调用它们的实际模板方法。算法步骤可以被声明为 \`abstract\` 类型，也可以提供一些默认实现。
- **具体类**（Concrete ­Class）可以重写所有步骤，但不能重写模板方法自身。

**模板方法模式的类图：**

![模板方法模式的类图](./b8372e3933ea46e56697eb8ed645d3de.webp)

## 模式实现

该示例使用模板方法模式将 \`display\` 操作交由父类实现，其他操作由子类（显示单个字符的类 \`CharDisplay\` 和显示整个字符串的类 \`StringDisplay\` ）实现，\`display\` 主要负责控制 \`open\`，\`print\`，\`close\` 的调用顺序。

### 示例程序的类图

![示例程序的类图](./f91f23262e45b096b97100bf3def60e6.webp)

### 代码实现

#### 抽象类

\`\`\`java
package example;

/** 抽象模板类 */
public abstract class AbstractDisplay {
    /** 子类需要实现的方法 */
    public abstract void open();

    /** 子类需要实现的方法 */
    public abstract void print();

    /** 子类需要实现的方法 */
    public abstract void close();

    /** 模板方法，处理流程 */
    public final void display() {
        open();
        print();
        close();
    }
}
\`\`\`

#### 具体类

\`\`\`java
package example;

/** 具体子类，字符方式打印 */
public class CharDisplay extends AbstractDisplay {
    private char ch;

    public CharDisplay(char ch) {
        this.ch = ch;
    }

    /** 子类需要实现的方法 */
    @Override
    public void open() {
        System.out.print("<<");
    }

    /** 子类需要实现的方法 */
    @Override
    public void print() {
        System.out.print(ch);
    }

    /** 子类需要实现的方法 */
    @Override
    public void close() {
        System.out.println(">>");
    }
}
\`\`\`

\`\`\`java
package example;

/** 具体子类，字符串方式打印 */
public class StringDisplay extends AbstractDisplay {
    private String str;

    public StringDisplay(String str) {
        this.str = str;
    }

    /** 子类需要实现的方法 */
    @Override
    public void open() {
        System.out.print("+");
        for (int i = 0; i < str.length(); i++) {
            System.out.print("-");
        }
        System.out.println("+");
    }

    /** 子类需要实现的方法 */
    @Override
    public void print() {
        printLine();
        System.out.print("|");
        for (int i = 0; i < str.length(); i++) {
            System.out.print(str.charAt(i));
        }
        System.out.println("|");
        printLine();
    }

    /** 子类需要实现的方法 */
    @Override
    public void close() {
        System.out.print("+");
        for (int i = 0; i < str.length(); i++) {
            System.out.print("-");
        }
        System.out.println("+");
    }

    /** 子类特有的私有方法 */
    private void printLine() {
        System.out.print("|");
        for (int i = 0; i < str.length(); i++) {
            System.out.print("-");
        }
        System.out.println("|");
    }
}
\`\`\`

### 代码测试

\`\`\`java
import example.AbstractDisplay;
import example.CharDisplay;
import example.StringDisplay;

/** 测试模板方法模式 */
public class Test {
    public static void main(String[] args) {
        AbstractDisplay charDisplay = new CharDisplay('H');
        AbstractDisplay stringDisplay = new StringDisplay("Heyelio");
        System.out.println("CharDisplay实现");
        charDisplay.display();

        System.out.println("\\n----------------- 分割线 -----------------\\n");

        System.out.println("StringDisplay实现");
        stringDisplay.display();
    }
}
\`\`\`

### 输出结果

\`\`\`text
CharDisplay实现:
<<H>>

----------------- 分割线 -----------------

StringDisplay实现:
+-------+
|-------|
|Heyelio|
|-------|
+-------+
\`\`\`

## 常用场景和解决方案

- 多个类有相同的方法并且逻辑可以共用时。
- 将通用的算法或固定流程设计为模板，在每一个具体的子类中再继续优化算法步骤或流程步骤时。
- 重构超长代码时，发现某一个经常使用的共有方法。
- 当你只希望客户端扩展某个特定算法步骤，而不是整个算法或其结构时。

## 模式的优缺点

| 优点                                                                                     | 缺点                                                   |
| :--------------------------------------------------------------------------------------- | :----------------------------------------------------- |
| 你可仅允许客户端重写一个大型算法中的特定部分，使得算法其他部分修改对其所造成的影响减小。 | 部分客户端可能会受到算法框架的限制。                   |
| 你可将重复代码提取到一个超类中，有效去除重复代码。                                       | 通过子类抑制默认步骤实现可能会导致违反*里氏替换原则*。 |
| 有助于找到更通用的模板。                                                                 | 模板方法中的步骤越多，其维护工作就可能会越困难。       |

## 拓展知识

- 工厂方法模式是模板方法模式的一种特殊形式。同时，*工厂方法*可以作为一个大型*模板方法*中的一个步骤。
- 继承的结构容易带来“修改一个类而影响所有类”的情况。

🔙 [设计模式](/posts/design-patterns/)

**📌最后：希望本文能够给您提供帮助，文章中有不懂或不正确的地方，请在下方评论区💬留言！**

**🔗参考文献：**

🌐 [设计模式 --refactoringguru](https://refactoringguru.cn/design-patterns#intro-patterns)

📺 [bilibili-趣学设计模式；黄靖锋. --拉勾教育](https://www.bilibili.com/video/BV1hY411Y7zR/?p=1&vd_source=a9a236c4d6e5c5350c70b71ee0727b8c)

📖 图解设计模式 /（日）结城浩著；杨文轩译. --北京：人民邮电出版社，2017.1`,slug:`template-method-pattern`,path:`/posts/template-method-pattern/`,wordCount:3456,readingMinutes:4,toc:[{depth:2,slug:`为什么要使用`,text:`为什么要使用？`},{depth:2,slug:`模式结构`,text:`模式结构`},{depth:2,slug:`模式实现`,text:`模式实现`},{depth:3,slug:`示例程序的类图`,text:`示例程序的类图`},{depth:3,slug:`代码实现`,text:`代码实现`},{depth:4,slug:`抽象类`,text:`抽象类`},{depth:4,slug:`具体类`,text:`具体类`},{depth:3,slug:`代码测试`,text:`代码测试`},{depth:3,slug:`输出结果`,text:`输出结果`},{depth:2,slug:`常用场景和解决方案`,text:`常用场景和解决方案`},{depth:2,slug:`模式的优缺点`,text:`模式的优缺点`},{depth:2,slug:`拓展知识`,text:`拓展知识`}],protected:!1,passwordHint:``,sourcePath:`template-method-pattern/index.md`},{title:`UML 类图：六种关系的画法`,description:`UML 类图的关系与画法，涵盖依赖、关联、泛化、实现、聚合、组合六种类间关系。`,publishedAt:`2023-03-09T09:23:00+08:00`,updatedAt:`2023-03-09T09:23:00+08:00`,tags:[`UML`,`类图`,`面向对象`],category:`软件建模`,series:`UML`,seriesOrder:1,pinned:!1,draft:!1,cover:`/posts/uml-class-diagram/cover.webp`,coverAlt:`UML 之类图封面`,content:`类图（class diagram）是一种静态模型。它可以帮助开发者👨‍💻利用面向对象思维进行软件建模。

类图中的每个类都由一个框表示。每个盒子🗃️分为**三个部分**。

**🥇顶部是类名**，对应 Java 中的类名，如果是抽象类则用斜体表示。

**🥈中间部分是属性部分**，对应 Java 中的成员变量，用于抽象出事物的属性。主要由作用域、变量名和变量类型组成。

**🥉底部是操作部分**，对应 Java 中的成员方法，用于抽象出事物的行为。主要由作用域、操作名称、参数列表和返回类型组成。如果是抽象方法则用斜体表示；如果是静态方法则用下划线表示。

|                       类                       |                       抽象类                       |                       接口                       |
| :--------------------------------------------: | :------------------------------------------------: | :----------------------------------------------: |
| ![类](./59a1d578f9f186edbc666137f4621ddf.webp) | ![抽象类](./3f58c20d2dba51aa248b65ca2ff1dda1.webp) | ![接口](./28dba3f38b39c48d7c959ec08291cd14.webp) |

**✨作用域表示如下：**

| 符号  |          作用域          |               描述               |
| :---: | :----------------------: | :------------------------------: |
| **-** |        \`private\`         |              当前类              |
| **~** | \`default\` 或者 \`package\` |         当前类、同一包下         |
| **#** |       \`protected\`        |      当前类、同一包下、子类      |
| **+** |         \`public\`         | 当前类、同一包下、子类、其他包下 |

## 类图中的关系

面向对象设计中的分解与 \`UML\` 中的关系对应。其中类间的关系分为 6 种。分别是**依赖**、**关联**、**泛化**（继承）、**实现**（接口）、**聚合**和**组合**。

|   关系   |                       图像                       |              备注              |
| :------: | :----------------------------------------------: | :----------------------------: |
| **依赖** | ![依赖](./36c8d4ed749e47c51bb46c620cfc0a00.webp) |      箭头指向被依赖的部分      |
| **关联** | ![关联](./968c21435e66803e726c8bbd2f226f75.webp) | 单向关联的箭头指向被关联的部分 |
| **泛化** | ![泛化](./7c593353769854561c78ed59287189f4.webp) |       空心三角形指向父类       |
| **实现** | ![实现](./9a6ffe4a49bc07b6341798cf98418e35.webp) |       空心三角形指向接口       |
| **聚合** | ![聚合](./b02ad8e24ff76ae2cb9d0a9ddc33ef63.webp) |          菱形指向整体          |
| **组合** | ![组合](./9c514cc368985bddeeba789da1eeb36d.webp) |          菱形指向整体          |

**1️⃣依赖（dependency）：** 依赖是一种 use-a 的关系。**依赖表示一个类为其他类提供它的服务。**

例如，一架客机需要依赖跑道起飞。

**2️⃣关联（association）：** 一种简单的关联关系，并不存在依赖关系。在类中，关联是一种拥有关系。**关联关系意味着两个对象之间存在松散的关系。这些对象可能会在一段时间内相互交互。**

例如，一个类的对象可以使用另一个类的对象提供的服务/方法。 这就像人与航空公司之间的关系。一个人通常不拥有航空公司，但可以与一家航空公司互动。航空公司还可以与许多人对象进行交互。

**3️⃣泛化（inheritance）：泛化表示子类拥有父类的所有属性和方法。** 在绘制类图时，不需要在子类写出父类已有的属性或方法。

例如，猫对象和狗对象都拥有动物对象的年龄属性和吃饭行为。

**4️⃣实现（implementation）：** 实现和泛化一样，但是实现接口使用虚线加空心三角形表示。

**5️⃣聚合（aggregation）：** 聚合是一种弱 has-a 的关系，部分可以属于整体，但它们也可以独立存在。**聚合关系是一种弱关系，一种生命周期不同步的关系。**

例如，这就像客机与其机组人员之间的关系。客机的一个重要部分是它的机组人员。没有机组人员，客机将无法飞行。但是，如果机上没有机组人员，客机也不会不存在。机组人员也是如此，他们是客机运营的一部分，但如果机组人员不在客机上，他们也不会消失或被摧毁。

**6️⃣组合（composition）：** 组成是对部分的排他性包含，也称为强 has-a 关系。这意味着整体不能没有它的部分而存在。如果失去了它的任何部分，整体就不复存在了。如果整体被摧毁，那么它的所有部分也被摧毁。通常只能通过其整体访问部分。包含的部分是整体独有的。**组合关系是一种强关系，一种生命周期同步的关系。**

例如，大脑是人类组成的一部分，人没有大脑会死，大脑没有人也不能存在。

**✨多重性：**

|    基数     |          描述          |
| :---------: | :--------------------: |
| **0 .. 1**  |     表示 0 到 1 个     |
|    **n**    |       表示任意个       |
| **0 .. \\*** |   表示 0 到任意多个    |
| **1 .. \\*** |   表示 1 到任意多个    |
| **m .. n**  | 表示任意多个到任意多个 |

**示例类图 1：**

![示例类图1](./882b00ea03c13711654a2431415248a5.webp)

**示例类图 2：**

![示例类图2](./0e6f0ca2c9208545187aa4411cd6795c.webp)

## 关系间的区别

**🔖依赖和关联的区别：**

👉**依赖关系** 是一种 **短期的** 、 **临时性的** 、 **弱的** 关系，一般来说是 **单向的** ，常出现在方法参数和局部变量中。例如，一架客机需要依赖跑道起飞。每架客机并不需要配有专门的跑道，它只有在需要起飞时才需要依赖到跑道。转换成代码思维就是：客机类不需要有跑道类类型的成员变量，只需要在起飞行为时，传入指定的跑道类类型参数即可。

👉**关联关系** 是一种 **长期的** 、 **表示拥有的** 、 **强的** 关系，可以是 **单向或者双向的** ，常出现在成员变量和全局变量中，它意味着两个对象可能在一段时间内会进行交互。例如，人与航空公司之间的关系，人可以与多个航空公司互动，航空公司也可以跟多个人互动。转换成代码思维就是：用户类中可以用成员变量保存自己注册过的航空公司类对象，航空公司类也可以用成员变量保存注册过会员的用户信息。

**🔖关联、聚合和组合的区别：**

👉**关联关系** 是一种 **平等的** 、 **较弱的** 关系，是 **个体与个体** 的。例如，人与航空公司之间的关系是平等的。

👉**聚合关系** 是一种 **不平等的** 、 **较强的** 关系，是 **整体与部分** 的，并且 **生命周期不同步** ，部分可以离开整体存在。例如，显示器是台式电脑的一部分，但是显示器除了作为电脑屏幕还可以作为监控屏幕，离开了电脑依旧能存在，生命周期是不同步的。

👉**组合关系** 是一种 **不平等的** 、 **最强的** 关系，是 **整体与部分** 的，并且 **生命周期同步** ，部分无法离开整体存在。例如，眼睛是人的一部分，但是人死了眼睛也就自然死了，生命周期是同步的。

---

**📌最后：希望本文能够给您提供帮助，文章中有不懂或不正确的地方，请在下方评论区💬留言！**

**🔗参考文献：**

📺 [bilibili - UML类图](https://www.bilibili.com/video/BV1HJ411c7qo/?spm_id_from=333.1007.top_right_bar_window_default_collection.content.click&vd_source=a9a236c4d6e5c5350c70b71ee0727b8c)`,slug:`uml-class-diagram`,path:`/posts/uml-class-diagram/`,wordCount:3388,readingMinutes:8,toc:[{depth:2,slug:`类图中的关系`,text:`类图中的关系`},{depth:2,slug:`关系间的区别`,text:`关系间的区别`}],protected:!1,passwordHint:``,sourcePath:`uml-class-diagram/index.md`},{title:`UML 顺序图：一次交互的时间线`,description:`UML 顺序图的模型元素与使用方法，涵盖参与者、对象、生命线、激活框、消息等概念。`,publishedAt:`2023-03-09T14:53:00+08:00`,updatedAt:`2023-03-09T14:53:00+08:00`,tags:[`UML`,`顺序图`,`面向对象`],category:`软件建模`,series:`UML`,seriesOrder:2,pinned:!0,rank:5,draft:!1,cover:`/posts/uml-sequence-diagram/cover.webp`,coverAlt:`UML 之顺序图封面`,content:`> **交互序列图（sequence diagram）** 也称顺序图，捕捉一段时间范围内多个对象之间的交互信息，强调消息交互的时间顺序，将一个用例详细的记录出来。用于处理行为较为简单的用例。

**序列图用于向团队展示程序中的对象（可能是程序中的类，也可能是一个参与者）如何相互交互以完成任务。** 简单地说，把序列图想象成不同人之间的对话表，这张对话表中记录着他们之间发送的所有消息。

序列图通常用作开发团队开始编程之前的规划工具，或者用来描述一个系统是如何设计的。他们可以让你更轻松简单的完成你的功能设计。甚至可以帮助你发现系统中以前没有发现的问题。序列图非常强大，是软件建模中不可缺少的一环。

🎈一个用例通常会细化为一个或多个顺序图，是用例需求过渡到下一个更细化的级别的工具。<span style="color:red">注意：顺序图作用于单用例多对象。</span>

## 顺序图的模型元素

**1️⃣参与者（Actor）：**<span style="color:green">使用一个小人来表示。</span>参与者是在系统之外与系统交互的某人或某事物。

![参与者](./a0cebc614da2b57ea2495c079c638b16.webp)

**2️⃣对象（Object）：**<span style="color:green">使用一个长方形来表示。</span>在对象名称中带有下划线，说明它是系统中声明的实体（特定类，例如"Student 类"）。而系统中未声明的实体不带有下划线（特定种类，例如"人"）。关于对象的命名有以下三种形式：

|                       对象名: 类名                       |                       对象名                       |                       \\:类名                       |
| :------------------------------------------------------: | :------------------------------------------------: | :------------------------------------------------: |
| ![对象名\\:类名](./580438b275a6f64218af102ad851eb53.webp) | ![对象名](./0e85d5323c873e8f6d2a88f57eae955c.webp) | ![\\:类名](./f4a20fdbbd8e2c71715494bc33d14312.webp) |

对于不同类型的对象还有不同的表示形式，如下：

|                       实体对象                       |                       边界对象                       |                       控制对象                       |
| :--------------------------------------------------: | :--------------------------------------------------: | :--------------------------------------------------: |
| ![实体对象](./c9ca5fc25ac4dce29bd7d8e83d083942.webp) | ![边界对象](./de09aa0eb4a032a9a66952be2006fb39.webp) | ![控制对象](./50a1c0f9c58abdb93376bb76f2d842f0.webp) |

**3️⃣生命线（Lifeline）：**<span style="color:green">生命线是垂直的虚线，从对象或者参与者开始。</span>它显示了一个对象或参与者存在的时间。

![生命线](./a62d067a3dbdbfe0d9d497f5222434a2.webp)

**4️⃣激活框（Activation Box）：**<span style="color:green">用一个细长方形表示，附着在生命线上，系统外部对象不需要激活框，例如参与者。</span>激活框显示对象进程开始时间和对象进程的执行时间。有利于我们分析对象何时处于运行状态、何时处于空闲状态。

![激活框](./6955dfd2adffa71bf06aa4ce3d5d0e2a.webp)

**5️⃣消息（Message）：** 一般分为同步消息、异步消息和返回消息。<span style="color:green">把一个对象的生命线用带箭头的线连接到另一个对象的生命线，并在上面写上执行的操作。消息按时间顺序从上到下。</span>消息可以描述信息在对象之间传递，描述对象间的相互作用或序列。

- 同步消息：<span style="color:green">用实线箭头表示。</span>发送消息的对象需要等待接收消息的对象执行完所有操作后才能继续执行自己的操作。
- 异步消息：<span style="color:green">用实线棍状箭头表示。</span>发送消息的对象发送消息后，无需等待可以继续执行自己的操作。
- 返回消息：<span style="color:green">用虚线棍状箭头表示。</span>当对象将消息发送回去时称消息为返回消息。

|                       同步消息                       |                       异步消息                       |                       返回消息                       |
| :--------------------------------------------------: | :--------------------------------------------------: | :--------------------------------------------------: |
| ![同步消息](./db710f141c0075b5c7abdfbf329ed63b.webp) | ![异步消息](./339f6904c3764c55972c645eea3b325c.webp) | ![返回消息](./a04ab0b13a786991f55572c2ebb8a033.webp) |

✨消息也有许多表现形式，如下：

|                       不知来源的对象                       |                       不知消息来源的消息                       |                       消息未到达目的地                       |
| :--------------------------------------------------------: | :------------------------------------------------------------: | :----------------------------------------------------------: |
| ![不知来源的对象](./e4000dceb469c409a115f3be78cbdafd.webp) | ![不知消息来源的消息](./68c4ff353b987c6118d07f10ba4beabf.webp) | ![消息未到达目的地](./a8ac1f893e918fbd4ad1513f6745597a.webp) |

|                       生命线终止                       |                       创建消息                       |                       删除消息                       |                       自关联消息                       |
| :----------------------------------------------------: | :--------------------------------------------------: | :--------------------------------------------------: | :----------------------------------------------------: |
| ![生命线终止](./fc73f6fe3f3c5651e334af46de8c47a1.webp) | ![创建消息](./8adf6ec2f78aacf9e5d55fdbf1fbbec2.webp) | ![删除消息](./2aa9488488ca852b693bd545dbb8354b.webp) | ![自关联消息](./a66b26f9900801c627010e3292aeb079.webp) |

<span style="color:red">注意：创建消息的符号和返回消息的符号相同，并且指着被创建对象。</span>

**6️⃣约束条件（Guards）：**<span style="color:green">用 \`[Boolean Test]\` 表示。</span>可以与消息和交互片段结合使用。

例如，只有"a > 0"时，才发送消息。如下图：

![约束条件](./bed823c253b6e4816f1cf503ccb4e8de.webp)

**7️⃣交互片段（Frame）：**<span style="color:green">用一个长方形表示，在左上角写上交互操作名称。</span>包含多种操作指令。

![交互片段](https://heyelio.github.io./a9e420426be3c5aea479466ddfd193bd.webp)

✨常用的交互片段：

|  交互操作   |                                     图形                                      |       描述       |
| :---------: | :---------------------------------------------------------------------------: | :--------------: |
| \`Alt\` 分支  | ![Alt分支](https://heyelio.github.io./d36b47b459e9db837937e00d65a6f293.webp)  |  只执行一个分支  |
| \`Opt\` 选择  | ![Opt选择](https://heyelio.github.io./34a18240ab57956795c2f4126bb4e751.webp)  |   满足条件执行   |
| \`Loop\` 循环 | ![Loop循环](https://heyelio.github.io./69811e52fb1f773e07e15a9fb47c062c.webp) | 重复执行一定次数 |
| \`Par\` 并行  | ![Par并行](https://heyelio.github.io./9149d8a3169702b5deebee58d476fc95.webp)  |     并行执行     |

✨引用另一个顺序图：

\`\`\`text
sequence diagram name[(arguments)] [: return value]
\`\`\`

![引用顺序图](https://heyelio.github.io./21229177468e187f199bb506c8b7857a.webp)

## 如何使用顺序图？

**假如我们现在要用顺序图描述去 ATM 机🏧取现金💵时发生的所有步骤，脚本如下：**

1. 当用户到达 ATM 机时，先要插入银行卡。
2. ATM 机要向银行验证用户的银行卡是否有效？
   - 验证成功，ATM 机提醒用户需要输入密码。
   - 验证失败，ATM 机弹出银行卡。
3. 用户输入密码。
4. ATM 机要向银行验证用户输入的密码是否正确？
   - 密码正确，ATM 机提醒用户输入金额。
   - 密码错误，ATM 机弹出银行卡。
5. 用户输入金额。
6. ATM 机向银行请求交易。
7. 银行向银行账户系统验证账户金额是否充足？
   - 金额充足：
     1. 银行向银行账户系统请求提现。
     2. 银行账户系统提示银行提现成功。
     3. 银行提示 ATM 机交易成功。
     4. ATM 机将现金推出。
   - 金额不足：
     1. 银行账户系统提示银行用户的金额不足。
     2. 银行提示 ATM 机当前交易失败。
8. ATM 机弹出银行卡。

**顺序图如下：**

![ATM取现顺序图](https://heyelio.github.io./f9073ae0356042062220a13931d05576.webp)

---

**📌最后：希望本文能够给您提供帮助，文章中有不懂或不正确的地方，请在下方评论区💬留言！**

**🔗参考文献：**

🌐 [Explore the UML sequence diagram --IBM Developer](https://developer.ibm.com/articles/the-sequence-diagram/)

🌐 [UML Message](https://www.uml-diagrams.org/interaction-message.html)

📺 [bilibili - UML序列图](https://www.bilibili.com/video/BV1TK4y1Y7Jq/?spm_id_from=333.788.top_right_bar_window_default_collection.content.click&vd_source=a9a236c4d6e5c5350c70b71ee0727b8c)`,slug:`uml-sequence-diagram`,path:`/posts/uml-sequence-diagram/`,wordCount:5084,readingMinutes:7,toc:[{depth:2,slug:`顺序图的模型元素`,text:`顺序图的模型元素`},{depth:2,slug:`如何使用顺序图`,text:`如何使用顺序图？`}],protected:!1,passwordHint:``,sourcePath:`uml-sequence-diagram/index.md`},{title:`UML 用例图：参与者与用例的关系`,description:`UML 用例图的模型元素与关系，涵盖参与者、用例、关联、包含、扩展、泛化等概念。`,publishedAt:`2023-03-09T16:14:00+08:00`,updatedAt:`2023-03-09T16:14:00+08:00`,tags:[`UML`,`用例图`,`面向对象`],category:`软件建模`,series:`UML`,seriesOrder:3,pinned:!1,draft:!1,cover:`/posts/uml-use-case-diagram/cover.webp`,coverAlt:`UML 之用例图封面`,content:`用例图可以让其他人更直观的了解一个系统。假如我们现在有一个 APP 方案📝想让其他人了解它，但是无论怎么表达他们都无法理解，那么我们可以使用用例图去表示它，这样能让其他人更加直观的了解它。下面是关于百度百科🌐对它的描述：

> **用例图**（use case diagram）是用户与系统交互的最简表示形式，展现了[用户](https://baike.baidu.com/item/用户/3621489?fromModule=lemma_inlink)和与他相关的[用例](https://baike.baidu.com/item/用例?fromModule=lemma_inlink)之间的关系。通过用例图，人们可以获知系统不同种类的用户和用例。用例图也经常和其他图表配合使用。

用例图是静态模型，是需求分析中的产物。其主要作用是描述参与者和用例之间的关系，帮助开发人员能够可视化了解系统的功能。

## 用例图的模型元素

**1️⃣系统（System）：**<span style="color:green">使用一个矩形框表示一个系统，并将系统的名称放在顶部。</span>在矩形内的所有东西都属于这个系统，而在矩形外的任何东西都能够使用这个系统。

![系统](./23114b3aa3066fff75453c29633d3e62.webp)

**2️⃣参与者（Actor）：**<span style="color:green">使用一个小人图形表示参与者。参与者放置在矩形框外部。</span>参与者是使用系统的人或物，它可能是个人、一个组织、其他系统或者外部设备。参与者有三个重点因素：

1. 参与者是系统的外部对象，需要放置在系统之外；
2. 参与者需要被视为类型或类别，它们不是特定的个人或者特定的组织。例如顾客指代的是所有顾客，而并非某个人；又或者银行指代的是所有银行，而并非某个银行。
3. 参与者分为主要参与者（Primary Actor）和次要参与者（Secondary Actor）。主要参与者是主动发起行为，而次要参与者往往更为被动。一般将<span style="color:green">主要参与者放置在系统左边</span>，<span style="color:green">次要参与者放置在系统右边。</span>

![参与者](./f6570b8f64e305aed82a851a579b34ea.webp)

**3️⃣用例（Use Case）：**<span style="color:green">使用一个椭圆形来表示一个用例，在椭圆形内写上用例完成的动作。用例放置在矩形框内部。</span>用例代表完成的系统中某种任务的一个动作，所以用例属于系统内部。用例的描述应着重于系统从外界来看有什么样的行为，而不管该行为在系统内部是如何具体实现的。<span style="color:green">用例都以动词开头并强化所发生的操作，且最好按照逻辑排列用例。</span>

![用例](./7aefb4c0b2e8c66c14980a5af4ba1ef2.webp)

### ✨关系（relationship）

**4️⃣关联（Association）：**<span style="color:green">使用一根实线连接参与者和用例，表示参与者和用例在进行一种基本的交流或互动。</span><span style="color:red">注意：关联关系只用在执行者和用例之间，用例和用例之间不会存在关联关系。</span>

![关联](./4e09180c596898e99f891a0666050ac1.webp)

**5️⃣包含（Include）：**<span style="color:green">使用一根带有箭头的虚线，由基本用例指向包含用例。</span>包含关系表示基本用例和包含用例之间的依赖关系，每次执行基本用例的时候，也会执行包含用例。又或者说基本用例依赖包含用例。<span style="color:red">注意：每次调用基本用例时都必须同时执行包含用例。</span>

![包含](./5da6e0a0f5ebdb89ea5c80fba0ae1424.webp)

**6️⃣扩展（Extend）：**<span style="color:green">使用一根带有箭头的虚线，由扩展用例指向基本用例。</span>扩展关系由基本用例和扩展用例组成。当执行基本用例时，扩展用例不是一定要执行。它们只有在满足某些条件时才会执行。又或者说你可以使用扩展用例去扩展基本用例的行为。

![扩展](./608964248d90d0f98f6527aeea309c8a.webp)

**7️⃣带扩展点的用例（Extension Point）：**<span style="color:green">用一根实线把用例分成两部分，上半部分写用例的名称，下半部分写用例的扩展点。</span>扩展点只是扩展关系的详细版本。

![带扩展点的用例](./8ace677f47e5eee29ceb7cf5416d3394.webp)

**8️⃣泛化（Generalization）：**<span style="color:green">使用一个带实线的三角形空心箭头来表示泛化关系，三角形箭头由子指向父。</span>子参与者继承父参与者的所有关系、子用例继承父用例的所有结构、行为和关系。

![泛化](./ae5594ddb10dc55c43f633df87f95a16.webp)

**示例用例图：**

![示例用例图](./7059e64648cbf3004066b25b715aac22.webp)

## 包含关系和扩展关系的区别

每次执行基本用例时，包含关系一定执行，扩展关系可能执行。这两种关系的箭头指向不同。基本用例依赖包含用例，而扩展用例依赖基本用例。<span style="color:red">注意：多个基本用例可以指向同一个包含或扩展用例。</span>

例如，每次打喷嚏眼睛都会闭上，但不是每次打喷嚏都会说"不好意思"，说"不好意思"只是对于打喷嚏行为的补充。如下图所示：

![包含与扩展的区别](./e465eabd158088f4b0be103387ebc28e.webp)

---

**📌最后：希望本文能够给您提供帮助，文章中有不懂或不正确的地方，请在下方评论区💬留言！**

**🔗参考文献：**

🌐 [用例图 --百度百科](https://baike.baidu.com/item/%E7%94%A8%E4%BE%8B%E5%9B%BE/9531932)

📺 [bilibili - UML用例图](https://www.bilibili.com/video/BV1Bz4y1Z7ZV/?spm_id_from=333.1007.top_right_bar_window_default_collection.content.click&vd_source=a9a236c4d6e5c5350c70b71ee0727b8c)`,slug:`uml-use-case-diagram`,path:`/posts/uml-use-case-diagram/`,wordCount:2897,readingMinutes:6,toc:[{depth:2,slug:`用例图的模型元素`,text:`用例图的模型元素`},{depth:3,slug:`关系relationship`,text:`✨关系（relationship）`},{depth:2,slug:`包含关系和扩展关系的区别`,text:`包含关系和扩展关系的区别`}],protected:!1,passwordHint:``,sourcePath:`uml-use-case-diagram/index.md`},{title:`访问者模式：把操作从结构里拿出来`,description:`访问者模式是一种行为设计模式，它能将算法与其所作用的对象隔离开来。允许在运行时将一个或多个操作应用于一组对象，将操作与对象结构分离。`,publishedAt:`2023-04-05T19:41:00+08:00`,updatedAt:`2023-04-05T19:41:00+08:00`,tags:[`设计模式`,`行为型模式`,`访问者模式`],category:`设计模式`,series:`设计模式`,seriesOrder:23,pinned:!1,draft:!1,cover:`/posts/visitor-pattern/cover.webp`,coverAlt:`访问者模式封面`,content:`**访问者模式**是一种行为设计模式，它能将算法与其所作用的对象隔离开来。允许在运行时将一个或多个操作应用于一组对象，将**操作**与**对象结构**分离。

访问者模式是以行为（某一个操作）作为扩展对象功能的出发点，在不改变已有类的功能的前提下进行批量扩展。

**🎈 在学习访问者模式之前，需要想搞清楚以下概念：**

📜 **双分派**是在执行一个方法时，不仅要根据对象运行时的类型来决定，还要根据方法参数<span style="color:red">运行时</span>的类型来决定。

📜 **单分派**是在执行一个方法时，不仅要根据对象运行时的类型来决定，还要根据方法参数<span style="color:blue">编译时</span>的类型来决定。

💡 Java 支持单分派不支持多分派！Java 重载方法的参数类型在编译时就已经确定了。就算我们使用 \`Parent value = new Child()\` 去调用重载方法 \`method(value)\`（🎗️ \`method(Parent)\`、🎗️ \`method(Child)\`），执行的也只会是 \`method(Parent)\`。因为单分派在编译时方法参数类型就已经确定，所以就算使用父类类型来保存子类对象，也只能调用父类参数类型的重载方法。

## 为什么要使用？

**访问者模式的对象职责：**

**在运行时能够将一个或多个操作应用于一组对象，将操作与对象结构分离。**

👉 解决编程部分语言不支持动态双分派的能力。

👉 需要动态绑定不同的对象和对象操作。

👉 通过行为与对象结构的分离实现对象的职责分离，提高代码复用性。

💡 对于一些数据元素相对稳定，而访问方法或操作方法多变的情况，访问者模式是一个好的解决方案。

## 模式结构

- **访问者**（Visitor）接口声明了一系列以对象结构的具体元素为参数的访问者方法。如果编程语言支持重载，这些方法的名称可以是相同的，但是其参数一定是不同的。
- **具体访问者**（Concrete Visitor）会为不同的具体元素类实现相同行为的几个不同版本。
- **元素**（Element）接口声明了一个方法来“接收”访问者。该方法必须有一个参数被声明为访问者接口类型。
- **具体元素**（Concrete Element）必须实现接收方法。该方法的目的是根据当前元素类将其调用重定向到相应访问者的方法。请注意，即使元素基类实现了该方法，所有子类都必须对其进行重写并调用访问者对象中的合适方法。
- **客户端**（Client）通常会作为集合或其他复杂对象（例如一个组合树）的代表。客户端通常不知晓所有的具体元素类，因为它们会通过抽象接口与集合中的对象进行交互。

**访问者模式的类图：**

![访问者模式的类图](./182f0c52640e0acd9047348e16c761e7.webp)

访问者模式是一种双分派模式，所以对于 \`visit(element: ConcreteElementA)\`，它知道 \`ConcreteElementA\` 中独有的 \`featureA\` 方法。\`Client\` 通过 \`element.accept(new ConcreteVisitor())\`，为需要访问的 \`element\` 传入指定的 \`Visitor\`。那么通过在 \`accept(visitor: Visitor)\` 中执行 \`visitor.visit(this)\` 来实现传入可变类型的参数。

## 模式实现

该示例使用访问者模式来实现双分派效果，使其对象类型和方法参数类型都在运行时决定。

### 示例程序的类图

![示例程序的类图](./fd45b96b024c3fad6e6ba260f30ace56.webp)

### 代码实现

#### 访问者

\`\`\`java
package example;

/** 访问者 */
public interface Visitor {
    /**
     - 为ConcreteElementA定制访问方法
     - @param element 元素
     */
    void visit(ConcreteElementA element);

    /**
     - 为ConcreteElementB定制访问方法
     - @param element 元素
     */
    void visit(ConcreteElementB element);
}
\`\`\`

#### 具体访问者

\`\`\`java
package example;

/** 具体访问者 */
public class ConcreteVisitor implements Visitor {
    /**
     - 为ConcreteElementA定制访问方法
     - @param element 元素
     */
    @Override
    public void visit(ConcreteElementA element) {
        element.featureA();
    }

    /**
     - 为ConcreteElementB定制访问方法
     - @param element 元素
     */
    @Override
    public void visit(ConcreteElementB element) {
        element.featureB();
    }
}
\`\`\`

#### 元素

\`\`\`java
package example;

/** 元素 */
public interface Element {
    /**
     - 元素访问入口
     - @param visitor 访问者
     */
    void accept(Visitor visitor);
}
\`\`\`

#### 具体元素

\`\`\`java
package example;

/** 具体元素A */
public class ConcreteElementA implements Element {
    /**
     - 元素访问入口
     - @param visitor 访问者
     */
    @Override
    public void accept(Visitor visitor) {
        visitor.visit(this);
    }

    /** ConcreteElementA特有方法 */
    public void featureA() {
        System.out.println("执行ConcreteElementA特有方法featureA...");
    }
}
\`\`\`

\`\`\`java
package example;

/** 具体元素B */
public class ConcreteElementB implements Element {
    /**
     - 元素访问入口
     - @param visitor 访问者
     */
    @Override
    public void accept(Visitor visitor) {
        visitor.visit(this);
    }

    /** ConcreteElementB特有方法 */
    public void featureB() {
        System.out.println("执行ConcreteElementB特有方法featureB...");
    }
}
\`\`\`

### 代码测试

\`\`\`java
import example.*;

/** 测试访问者模式 */
public class Test {
    public static void main(String[] args) {
        Element elementA = new ConcreteElementA();
        Element elementB = new ConcreteElementB();
        Visitor visitor = new ConcreteVisitor();
        elementA.accept(visitor);
        elementB.accept(visitor);
    }
}
\`\`\`

### 输出结果

\`\`\`text
执行ConcreteElementA特有方法featureA...
执行ConcreteElementB特有方法featureB...
\`\`\`

从案例中，我们可以得出访问者模式的几点特征：

1. 这是一种双分派模式，我们的变量类型均为接口（即父类），却可以调用不同子类的不同方法。
2. 我们可以给 \`Element\` 类添加任意多个操作（即添加 \`ConcreteVisitor\`）。这不会影响到原有的代码结构。
3. 这种模式无法自由添加或删除 \`ConcreteElement\` 类。因为一旦有新的 \`ConcreteElement\`，那么每个 \`Visitor\` 都要添加新的 \`visit\` 方法。

## 常用场景和解决方案

- 对象的数据结构相对稳定，而操作却经常变化的时候。
- 需要将数据结构与不常用的操作进行分离的时候。
- 需要在运行时动态决定使用哪些对象和方法的时候。
- 需要在不同类的一组对象上执行同一个操作。
- 当某个行为仅在类层次结构中的一些类中有意义，而在其他类中没有意义时，可使用该模式。你只需实现接收相关类的对象作为参数的访问者方法并将其他方法留空即可。

## 模式的优缺点

| 优点                                                                                                                                                           | 缺点                                                                             |
| :------------------------------------------------------------------------------------------------------------------------------------------------------------- | :------------------------------------------------------------------------------- |
| _开闭原则_。你可以引入在不同类对象上执行的新行为，且无需对这些类做出修改。                                                                                     | 每次在元素层次结构中添加或移除一个类时，你都要更新所有的访问者。                 |
| _单一职责原则_。可将同一行为的不同版本移到同一个类中。                                                                                                         | 在访问者同某个元素进行交互时，它们可能没有访问元素私有成员变量和方法的必要权限。 |
| 访问者对象可以在与各种对象交互时收集一些有用的信息。当你想要遍历一些复杂的对象结构（例如对象树），并在结构中的每个对象上应用访问者时，这些信息可能会有所帮助。 |                                                                                  |

### 使用访问者模式的优势

- 简化客户端操作。比如，扫描文件时，对客户端来说只需要执行扫描，不需要知道文件类型、如何读取文件等操作。
- 增加新的访问操作和访问者会非常便捷。
- 通过行为能够快速组合一组复杂的对象结构。

### 使用访问者模式的劣势

- 增加新的数据结构困难，需要变更操作。
- 具体元素在变更时需要修改代码，容易引入问题。

## 拓展知识

- 可以使用访问者对整个组合模式树执行操作。
- 可以同时使用访问者和迭代器模式来遍历复杂数据结构，并对其中的元素执行所需操作，即使这些元素所属的类完全不同。

🔙 [设计模式](https://heyelio.github.io/0587cd81)

**📌最后：希望本文能够给您提供帮助，文章中有不懂或不正确的地方，请在下方评论区💬留言！**

**🔗参考文献：**

🌐 [设计模式 --refactoringguru](https://refactoringguru.cn/design-patterns#intro-patterns)

📺 [bilibili-趣学设计模式；黄靖锋. --拉勾教育](https://www.bilibili.com/video/BV1hY411Y7zR/?p=1&vd_source=a9a236c4d6e5c5350c70b71ee0727b8c)

📖 图解设计模式 /（日）结城浩著；杨文轩译. --北京：人民邮电出版社，2017.1`,slug:`visitor-pattern`,path:`/posts/visitor-pattern/`,wordCount:4559,readingMinutes:9,toc:[{depth:2,slug:`为什么要使用`,text:`为什么要使用？`},{depth:2,slug:`模式结构`,text:`模式结构`},{depth:2,slug:`模式实现`,text:`模式实现`},{depth:3,slug:`示例程序的类图`,text:`示例程序的类图`},{depth:3,slug:`代码实现`,text:`代码实现`},{depth:4,slug:`访问者`,text:`访问者`},{depth:4,slug:`具体访问者`,text:`具体访问者`},{depth:4,slug:`元素`,text:`元素`},{depth:4,slug:`具体元素`,text:`具体元素`},{depth:3,slug:`代码测试`,text:`代码测试`},{depth:3,slug:`输出结果`,text:`输出结果`},{depth:2,slug:`常用场景和解决方案`,text:`常用场景和解决方案`},{depth:2,slug:`模式的优缺点`,text:`模式的优缺点`},{depth:3,slug:`使用访问者模式的优势`,text:`使用访问者模式的优势`},{depth:3,slug:`使用访问者模式的劣势`,text:`使用访问者模式的劣势`},{depth:2,slug:`拓展知识`,text:`拓展知识`}],protected:!1,passwordHint:``,sourcePath:`visitor-pattern/index.md`}];function Y({includeDrafts:e=qe}={}){return sn.filter(t=>e||!t.draft).sort((e,t)=>pn(e,t))}function cn(e,t={}){return Y(t).find(t=>t.slug===e)}function ln(e={}){let t=new Map;for(let n of Y(e))for(let e of n.tags)t.set(e,(t.get(e)??0)+1);return[...t].map(([e,t])=>({name:e,count:t})).sort((e,t)=>mn(e.name,t.name))}function un(e={}){let t=new Map;for(let n of Y(e))n.category!==void 0&&t.set(n.category,(t.get(n.category)??0)+1);return[...t].map(([e,t])=>({name:e,count:t})).sort((e,t)=>t.count-e.count||mn(e.name,t.name))}function dn(e={}){let t=new Map;for(let n of Y(e))n.series!==void 0&&t.set(n.series,(t.get(n.series)??0)+1);return[...t].map(([e,t])=>({name:e,count:t})).sort((e,t)=>mn(e.name,t.name))}function fn(e,t={}){return Y(t).filter(t=>t.series===e).sort((e,t)=>(e.seriesOrder??2**53-1)-(t.seriesOrder??2**53-1)||pn(e,t))}function pn(e,t){if(e.pinned!==t.pinned)return e.pinned?-1:1;let n=(e.rank??2**53-1)-(t.rank??2**53-1);return n===0?Date.parse(t.publishedAt)-Date.parse(e.publishedAt)||mn(e.slug,t.slug):n}function mn(e,t){return e<t?-1:+(e>t)}function hn(e){let t=e.trim();return t===``?`/archive/`:`/archive/?tag=${encodeURIComponent(t)}`}function gn(e){let t=e?.trim()??``;return t===``?`/archive/?uncategorized=true`:`/archive/?category=${encodeURIComponent(t)}`}function _n({currentCategory:e}){let{pathname:t,search:n}=c(),r=Y(),i=un(),a=t.replace(/\/$/,``),o=a===``||a===`/`,s=a===`/archive`,l=a===`/categories`,u=new URLSearchParams(n),d=u.get(`category`),f=u.has(`tag`),p=u.has(`uncategorized`),m=(0,F.useRef)(null),[h,g]=(0,F.useState)({left:!1,right:!1,more:!1});return(0,F.useEffect)(()=>{let e=m.current;if(e===null)return;let t=()=>{let t=e.scrollWidth>e.clientWidth+1,n=e.scrollLeft<=1,r=e.scrollLeft+e.clientWidth>=e.scrollWidth-1;g({left:t&&!n,right:t&&!r,more:t})};return t(),e.addEventListener(`scroll`,t),window.addEventListener(`resize`,t),()=>{e.removeEventListener(`scroll`,t),window.removeEventListener(`resize`,t)}},[i.length]),(0,F.useEffect)(()=>{let e=m.current;if(e===null)return;let t=e.querySelector(`[data-active], [data-soft-active]`);if(t===null)return;let n=t.offsetLeft-e.offsetLeft-(e.clientWidth-t.offsetWidth)/2;e.scrollTo({left:Math.max(0,n),behavior:`smooth`})},[t,n,e]),(0,L.jsx)(`div`,{id:`category-bar`,className:`card-base category-bar onload-animation p-3`,children:(0,L.jsxs)(`div`,{className:`category-bar-inner flex gap-2`,children:[(0,L.jsx)(I,{to:`/`,"aria-label":H(V.home),"data-category-name":``,"data-active":o?``:void 0,className:`category-pill focus-ring-inset flex shrink-0 items-center justify-center px-3 py-1.5 text-sm transition-colors duration-150 ease-out`,children:(0,L.jsx)(J,{name:`home`,className:`text-lg`,variant:`solid`})}),(0,L.jsxs)(I,{to:`/archive/`,"data-category-name":`__archive__`,"data-active":s&&!f&&!p&&d===null?``:void 0,className:`category-pill focus-ring-inset flex shrink-0 items-center justify-center px-4 py-1.5 text-sm whitespace-nowrap transition-colors duration-150 ease-out`,children:[H(V.archive),(0,L.jsx)(`span`,{className:`pill-count`,children:r.length})]}),(0,L.jsx)(`div`,{className:`category-divider shrink-0`}),(0,L.jsxs)(`div`,{className:`scroll-area relative`,children:[(0,L.jsx)(`div`,{className:`scroll-fade scroll-fade-left`,"aria-hidden":`true`,"data-visible":h.left?``:void 0}),(0,L.jsx)(`div`,{ref:m,className:`category-scroll flex gap-2 overflow-x-auto`,children:i.map(t=>(0,L.jsxs)(I,{to:gn(t.name),"data-category-name":t.name,"data-active":s&&d===t.name?``:void 0,"data-soft-active":e===t.name?``:void 0,className:`category-pill focus-ring-inset flex items-center justify-center px-4 py-1.5 text-sm whitespace-nowrap transition-colors duration-150 ease-out`,children:[t.name,(0,L.jsx)(`span`,{className:`pill-count`,children:t.count})]},t.name))}),(0,L.jsx)(`div`,{className:`scroll-fade scroll-fade-right`,"aria-hidden":`true`,"data-visible":h.right?``:void 0})]}),(0,L.jsx)(`div`,{className:`category-divider more-divider shrink-0`,"aria-hidden":`true`,"data-visible":h.more?``:void 0}),(0,L.jsxs)(I,{to:`/categories/`,"aria-label":H(V.more),"data-category-name":`__categories__`,"data-active":l?``:void 0,className:`category-pill focus-ring-inset flex shrink-0 items-center justify-center gap-1 px-3 py-1.5 text-sm transition-colors duration-150 ease-out`,children:[(0,L.jsx)(`span`,{children:H(V.more)}),(0,L.jsx)(J,{name:`chevron-right`,className:`text-sm`})]})]})})}var vn={siteUrl:R.url,title:R.title,description:R.description,locale:R.locale,lang:R.lang,timeZone:R.timeZone,hue:R.themeColor.hue,navbarMode:R.navbar.mode,post:R.post,postListLayout:R.postListLayout,coverImage:R.coverImage,license:{name:R.license,url:R.licenseUrl,icon:R.licenseIcon},dynamic:R.dynamic,wallpaperMode:ft,banner:R.banner,wallpaperImages:R.wallpaperImages},yn=JSON.stringify(vn).replaceAll(`<`,`\\u003c`);function bn(){return(0,L.jsxs)(L.Fragment,{children:[(0,L.jsx)(`div`,{id:`config-carrier`,"data-hue":R.themeColor.hue,"data-wallpaper-mode":ft,className:`hidden`}),(0,L.jsx)(`script`,{type:`application/json`,id:`config-carrier-json`,children:yn})]})}var xn=[{id:`2026-07-07-changsha`,publishedAt:`2026-07-07T22:10:00+08:00`,content:`长沙第一天，去了文和里和黄兴路。长沙的小吃是真的多，臭豆腐、糖油粑粑这些都想尝一遍，基本上一路走一路吃。黄兴路的名字来自黄兴，他是湖南长沙人，也是辛亥革命的重要领导人物，和孙中山并称“孙黄”。以前只知道这是一条步行街，这次才知道原来还有这层历史。`,location:`长沙 · 芙蓉区`,images:[{src:`/gallery/changsha-2026/wenheli.webp`,alt:`文和里的街巷`,width:1280,height:1706},{src:`/gallery/changsha-2026/huangxing-road.webp`,alt:`黄兴路步行街`,width:1280,height:1706}]},{id:`2026-07-08-yuelu`,publishedAt:`2026-07-08T21:40:00+08:00`,content:`第二天去了橘子洲和岳麓山。橘子洲最有名的应该就是青年毛泽东艺术雕塑了，也是毛泽东青年时期生活、学习过的地方之一。《沁园春·长沙》里的“独立寒秋，湘江北去，橘子洲头”写的就是这里。之后去了岳麓山，逛了爱晚亭，也了解了一些岳麓书院和湖湘文化的历史。长沙确实有不少和毛泽东以及近代革命历史有关的地方，这次算是实地看了一遍。`,location:`长沙 · 岳麓区`,images:[{src:`/gallery/changsha-2026/orange-isle.webp`,alt:`橘子洲`,width:1137,height:1421},{src:`/gallery/changsha-2026/aiwan-pavilion.webp`,alt:`爱晚亭`,width:1280,height:1706},{src:`/gallery/changsha-2026/lushan-south-road.webp`,alt:`麓山南路`,width:1280,height:1706}]},{id:`2026-07-09-museum`,publishedAt:`2026-07-09T20:05:00+08:00`,content:`第三天去了湖南博物院。馆里最值得看的应该就是马王堆汉墓出土的那批文物了，包括保存了两千多年的辛追夫人遗体、著名的T形帛画，以及重量只有49克的素纱襌衣。除此之外，还有商代的大禾人面纹方鼎和皿方罍等青铜器。以前这些东西大多是在历史书上见过，这次总算有机会亲眼看看。博物院逛完之后，又顺便去了零食王国。今天的照片就留这一张胡人俑吧。`,location:`长沙 · 开福区`,images:[{src:`/gallery/changsha-2026/tang-figurine.webp`,alt:`胡人俑`,width:1089,height:1089}]},{id:`2026-11-15-rebuild`,publishedAt:`2026-11-15T12:00:00+08:00`,content:`最近用 AI 把博客重新做了一遍。这次参考了 Firefly 的设计和整体风格，让 AI 编码工具帮忙实现，基本上算是重新搭了一套。技术栈换成了 React Router 7，也做了全站预渲染，文章和图片统一放在仓库里管理。前前后后折腾了一阵子，新版本总算上线了。`}],Sn=new Intl.DateTimeFormat(`en-CA`,{year:`numeric`,month:`2-digit`,day:`2-digit`,timeZone:R.timeZone}),Cn=new Intl.DateTimeFormat(`en-CA`,{year:`numeric`,month:`2-digit`,day:`2-digit`,hour:`2-digit`,minute:`2-digit`,second:`2-digit`,hourCycle:`h23`,timeZone:R.timeZone});function wn(e){return Sn.format(new Date(e))}function Tn(e){return wn(e).replaceAll(`-`,``)}function En(e){let t=Cn.formatToParts(new Date(e)),n=e=>t.find(t=>t.type===e)?.value??``;return`${n(`year`)}-${n(`month`)}-${n(`day`)} ${n(`hour`)}:${n(`minute`)}:${n(`second`)}`}function Dn(e){let t=Date.parse(e);return Number.isNaN(t)?0:Math.floor((Date.now()-t)/864e5)}function On(e){let t=Date.parse(e);return Number.isNaN(t)?0:Math.ceil(Math.abs(Date.now()-t)/864e5)}var kn={"/assets/images/DesktopWallpaper/d1.avif":{variants:[{path:`/optimized/assets-images-desktopwallpaper-d1-1s85gkm-400.webp`,width:400},{path:`/optimized/assets-images-desktopwallpaper-d1-1s85gkm-800.webp`,width:800},{path:`/optimized/assets-images-desktopwallpaper-d1-1s85gkm-1200.webp`,width:1200},{path:`/optimized/assets-images-desktopwallpaper-d1-1s85gkm-1600.webp`,width:1600}],avif:[{path:`/optimized/assets-images-desktopwallpaper-d1-1s85gkm-400.avif`,width:400},{path:`/optimized/assets-images-desktopwallpaper-d1-1s85gkm-800.avif`,width:800},{path:`/optimized/assets-images-desktopwallpaper-d1-1s85gkm-1200.avif`,width:1200},{path:`/optimized/assets-images-desktopwallpaper-d1-1s85gkm-1600.avif`,width:1600}],lqip:`31321b5a5a29363715`},"/assets/images/DesktopWallpaper/d2.avif":{variants:[{path:`/optimized/assets-images-desktopwallpaper-d2-0u1yze1-400.webp`,width:400},{path:`/optimized/assets-images-desktopwallpaper-d2-0u1yze1-800.webp`,width:800},{path:`/optimized/assets-images-desktopwallpaper-d2-0u1yze1-1200.webp`,width:1200},{path:`/optimized/assets-images-desktopwallpaper-d2-0u1yze1-1600.webp`,width:1600}],avif:[{path:`/optimized/assets-images-desktopwallpaper-d2-0u1yze1-400.avif`,width:400},{path:`/optimized/assets-images-desktopwallpaper-d2-0u1yze1-800.avif`,width:800},{path:`/optimized/assets-images-desktopwallpaper-d2-0u1yze1-1200.avif`,width:1200},{path:`/optimized/assets-images-desktopwallpaper-d2-0u1yze1-1600.avif`,width:1600}],lqip:`35383e403e44545048`},"/assets/images/DesktopWallpaper/d3.avif":{variants:[{path:`/optimized/assets-images-desktopwallpaper-d3-1nhj178-400.webp`,width:400},{path:`/optimized/assets-images-desktopwallpaper-d3-1nhj178-800.webp`,width:800},{path:`/optimized/assets-images-desktopwallpaper-d3-1nhj178-1200.webp`,width:1200},{path:`/optimized/assets-images-desktopwallpaper-d3-1nhj178-1600.webp`,width:1600}],avif:[{path:`/optimized/assets-images-desktopwallpaper-d3-1nhj178-400.avif`,width:400},{path:`/optimized/assets-images-desktopwallpaper-d3-1nhj178-800.avif`,width:800},{path:`/optimized/assets-images-desktopwallpaper-d3-1nhj178-1200.avif`,width:1200},{path:`/optimized/assets-images-desktopwallpaper-d3-1nhj178-1600.avif`,width:1600}],lqip:`2c3a2e3d45353d402d`},"/assets/images/DesktopWallpaper/d4.avif":{variants:[{path:`/optimized/assets-images-desktopwallpaper-d4-1ccd3pj-400.webp`,width:400},{path:`/optimized/assets-images-desktopwallpaper-d4-1ccd3pj-800.webp`,width:800},{path:`/optimized/assets-images-desktopwallpaper-d4-1ccd3pj-1200.webp`,width:1200},{path:`/optimized/assets-images-desktopwallpaper-d4-1ccd3pj-1600.webp`,width:1600}],avif:[{path:`/optimized/assets-images-desktopwallpaper-d4-1ccd3pj-400.avif`,width:400},{path:`/optimized/assets-images-desktopwallpaper-d4-1ccd3pj-800.avif`,width:800},{path:`/optimized/assets-images-desktopwallpaper-d4-1ccd3pj-1200.avif`,width:1200},{path:`/optimized/assets-images-desktopwallpaper-d4-1ccd3pj-1600.avif`,width:1600}],lqip:`3c4d39374a3424453d`},"/assets/images/DesktopWallpaper/d5.avif":{variants:[{path:`/optimized/assets-images-desktopwallpaper-d5-1nxkuqa-400.webp`,width:400},{path:`/optimized/assets-images-desktopwallpaper-d5-1nxkuqa-800.webp`,width:800},{path:`/optimized/assets-images-desktopwallpaper-d5-1nxkuqa-1200.webp`,width:1200},{path:`/optimized/assets-images-desktopwallpaper-d5-1nxkuqa-1600.webp`,width:1600}],avif:[{path:`/optimized/assets-images-desktopwallpaper-d5-1nxkuqa-400.avif`,width:400},{path:`/optimized/assets-images-desktopwallpaper-d5-1nxkuqa-800.avif`,width:800},{path:`/optimized/assets-images-desktopwallpaper-d5-1nxkuqa-1200.avif`,width:1200},{path:`/optimized/assets-images-desktopwallpaper-d5-1nxkuqa-1600.avif`,width:1600}],lqip:`7e6f4674663f897f5c`},"/assets/images/DesktopWallpaper/d6.avif":{variants:[{path:`/optimized/assets-images-desktopwallpaper-d6-0t22ucl-400.webp`,width:400},{path:`/optimized/assets-images-desktopwallpaper-d6-0t22ucl-800.webp`,width:800},{path:`/optimized/assets-images-desktopwallpaper-d6-0t22ucl-1200.webp`,width:1200},{path:`/optimized/assets-images-desktopwallpaper-d6-0t22ucl-1600.webp`,width:1600}],avif:[{path:`/optimized/assets-images-desktopwallpaper-d6-0t22ucl-400.avif`,width:400},{path:`/optimized/assets-images-desktopwallpaper-d6-0t22ucl-800.avif`,width:800},{path:`/optimized/assets-images-desktopwallpaper-d6-0t22ucl-1200.avif`,width:1200},{path:`/optimized/assets-images-desktopwallpaper-d6-0t22ucl-1600.avif`,width:1600}],lqip:`5c3f376250476f5555`},"/assets/images/MobileWallpaper/m1.avif":{variants:[{path:`/optimized/assets-images-mobilewallpaper-m1-0a56l37-400.webp`,width:400},{path:`/optimized/assets-images-mobilewallpaper-m1-0a56l37-800.webp`,width:800},{path:`/optimized/assets-images-mobilewallpaper-m1-0a56l37-1080.webp`,width:1080}],avif:[{path:`/optimized/assets-images-mobilewallpaper-m1-0a56l37-400.avif`,width:400},{path:`/optimized/assets-images-mobilewallpaper-m1-0a56l37-800.avif`,width:800},{path:`/optimized/assets-images-mobilewallpaper-m1-0a56l37-1080.avif`,width:1080}],lqip:`5f5d2c767f3a3d3c18`},"/assets/images/MobileWallpaper/m2.avif":{variants:[{path:`/optimized/assets-images-mobilewallpaper-m2-04vticc-400.webp`,width:400},{path:`/optimized/assets-images-mobilewallpaper-m2-04vticc-800.webp`,width:800},{path:`/optimized/assets-images-mobilewallpaper-m2-04vticc-1080.webp`,width:1080}],avif:[{path:`/optimized/assets-images-mobilewallpaper-m2-04vticc-400.avif`,width:400},{path:`/optimized/assets-images-mobilewallpaper-m2-04vticc-800.avif`,width:800},{path:`/optimized/assets-images-mobilewallpaper-m2-04vticc-1080.avif`,width:1080}],lqip:`36251d3c3a3f6f5835`},"/assets/images/MobileWallpaper/m3.avif":{variants:[{path:`/optimized/assets-images-mobilewallpaper-m3-0litpbl-400.webp`,width:400},{path:`/optimized/assets-images-mobilewallpaper-m3-0litpbl-800.webp`,width:800},{path:`/optimized/assets-images-mobilewallpaper-m3-0litpbl-1080.webp`,width:1080}],avif:[{path:`/optimized/assets-images-mobilewallpaper-m3-0litpbl-400.avif`,width:400},{path:`/optimized/assets-images-mobilewallpaper-m3-0litpbl-800.avif`,width:800},{path:`/optimized/assets-images-mobilewallpaper-m3-0litpbl-1080.avif`,width:1080}],lqip:`313e314d4b403b3a2b`},"/assets/images/MobileWallpaper/m4.avif":{variants:[{path:`/optimized/assets-images-mobilewallpaper-m4-151396i-400.webp`,width:400},{path:`/optimized/assets-images-mobilewallpaper-m4-151396i-800.webp`,width:800},{path:`/optimized/assets-images-mobilewallpaper-m4-151396i-1080.webp`,width:1080}],avif:[{path:`/optimized/assets-images-mobilewallpaper-m4-151396i-400.avif`,width:400},{path:`/optimized/assets-images-mobilewallpaper-m4-151396i-800.avif`,width:800},{path:`/optimized/assets-images-mobilewallpaper-m4-151396i-1080.avif`,width:1080}],lqip:`414e363a5241235454`},"/assets/images/MobileWallpaper/m5.avif":{variants:[{path:`/optimized/assets-images-mobilewallpaper-m5-0im8sun-400.webp`,width:400},{path:`/optimized/assets-images-mobilewallpaper-m5-0im8sun-800.webp`,width:800},{path:`/optimized/assets-images-mobilewallpaper-m5-0im8sun-1080.webp`,width:1080}],avif:[{path:`/optimized/assets-images-mobilewallpaper-m5-0im8sun-400.avif`,width:400},{path:`/optimized/assets-images-mobilewallpaper-m5-0im8sun-800.avif`,width:800},{path:`/optimized/assets-images-mobilewallpaper-m5-0im8sun-1080.avif`,width:1080}],lqip:`8779518a7c4b827751`},"/assets/images/MobileWallpaper/m6.avif":{variants:[{path:`/optimized/assets-images-mobilewallpaper-m6-0z77p3s-400.webp`,width:400},{path:`/optimized/assets-images-mobilewallpaper-m6-0z77p3s-800.webp`,width:800},{path:`/optimized/assets-images-mobilewallpaper-m6-0z77p3s-1080.webp`,width:1080}],avif:[{path:`/optimized/assets-images-mobilewallpaper-m6-0z77p3s-400.avif`,width:400},{path:`/optimized/assets-images-mobilewallpaper-m6-0z77p3s-800.avif`,width:800},{path:`/optimized/assets-images-mobilewallpaper-m6-0z77p3s-1080.avif`,width:1080}],lqip:`5f4d3e5e4e3a785551`},"/assets/images/sponsor/alipay.png":{variants:[{path:`/optimized/assets-images-sponsor-alipay-1pumdhs-400.webp`,width:400},{path:`/optimized/assets-images-sponsor-alipay-1pumdhs-716.webp`,width:716}],avif:[{path:`/optimized/assets-images-sponsor-alipay-1pumdhs-400.avif`,width:400},{path:`/optimized/assets-images-sponsor-alipay-1pumdhs-716.avif`,width:716}],lqip:`9d9d9d9b9b9b999999`},"/assets/images/sponsor/wechat.png":{variants:[{path:`/optimized/assets-images-sponsor-wechat-0d2u010-400.webp`,width:400},{path:`/optimized/assets-images-sponsor-wechat-0d2u010-538.webp`,width:538}],avif:[{path:`/optimized/assets-images-sponsor-wechat-0d2u010-400.avif`,width:400},{path:`/optimized/assets-images-sponsor-wechat-0d2u010-538.avif`,width:538}],lqip:`cecdcdcfcfcfd5d1cb`},"/favicon/favicon-180.png":{variants:[{path:`/optimized/favicon-favicon-180-19tkst7-180.webp`,width:180}],avif:[{path:`/optimized/favicon-favicon-180-19tkst7-180.avif`,width:180}],lqip:`7e7d7b77797aaba59f`},"/favicon/favicon-192.png":{variants:[{path:`/optimized/favicon-favicon-192-13i8j5o-192.webp`,width:192}],avif:[{path:`/optimized/favicon-favicon-192-13i8j5o-192.avif`,width:192}],lqip:`7e7d7b78797aaba59f`},"/favicon/favicon-32.png":{variants:[{path:`/optimized/favicon-favicon-32-1qz9idn-32.webp`,width:32}],avif:[{path:`/optimized/favicon-favicon-32-1qz9idn-32.avif`,width:32}],lqip:`7e7e7c787a7aaba59f`},"/friends/emilkowalski.webp":{variants:[{path:`/optimized/friends-emilkowalski-0knkm09-128.webp`,width:128}],avif:[{path:`/optimized/friends-emilkowalski-0knkm09-128.avif`,width:128}],lqip:`9be2f8afdaf79db3f2`},"/friends/jalammar.webp":{variants:[{path:`/optimized/friends-jalammar-07j4v2o-128.webp`,width:128}],avif:[{path:`/optimized/friends-jalammar-07j4v2o-128.avif`,width:128}],lqip:`8e83809b8a829e9593`},"/friends/joshwcomeau.webp":{variants:[{path:`/optimized/friends-joshwcomeau-00lksca-128.webp`,width:128}],avif:[{path:`/optimized/friends-joshwcomeau-00lksca-128.avif`,width:128}],lqip:`8eaca990a49d365453`},"/friends/lilianweng.webp":{variants:[{path:`/optimized/friends-lilianweng-0zczw4d-128.webp`,width:128}],avif:[{path:`/optimized/friends-lilianweng-0zczw4d-128.avif`,width:128}],lqip:`7c753c747537a98a5a`},"/friends/ruanyifeng.webp":{variants:[{path:`/optimized/friends-ruanyifeng-0z0acy7-128.webp`,width:128}],avif:[{path:`/optimized/friends-ruanyifeng-0z0acy7-128.avif`,width:128}],lqip:`383b26979da6a7b0bf`},"/friends/simonwillison.webp":{variants:[{path:`/optimized/friends-simonwillison-0zdrolq-128.webp`,width:128}],avif:[{path:`/optimized/friends-simonwillison-0zdrolq-128.avif`,width:128}],lqip:`ad937ca68d73d5af9a`},"/friends/stratechery.webp":{variants:[{path:`/optimized/friends-stratechery-007f81v-128.webp`,width:128}],avif:[{path:`/optimized/friends-stratechery-007f81v-128.avif`,width:128}],lqip:`fdb041ffbe62ffab36`},"/friends/zhangxinxu.webp":{variants:[{path:`/optimized/friends-zhangxinxu-0nizoqj-128.webp`,width:128}],avif:[{path:`/optimized/friends-zhangxinxu-0nizoqj-128.avif`,width:128}],lqip:`737448afab8f9d8a53`},"/gallery/changsha-2026/aiwan-pavilion.webp":{variants:[{path:`/optimized/gallery-changsha-2026-aiwan-pavilion-1qbcbrm-400.webp`,width:400},{path:`/optimized/gallery-changsha-2026-aiwan-pavilion-1qbcbrm-800.webp`,width:800},{path:`/optimized/gallery-changsha-2026-aiwan-pavilion-1qbcbrm-1200.webp`,width:1200},{path:`/optimized/gallery-changsha-2026-aiwan-pavilion-1qbcbrm-1280.webp`,width:1280}],avif:[{path:`/optimized/gallery-changsha-2026-aiwan-pavilion-1qbcbrm-400.avif`,width:400},{path:`/optimized/gallery-changsha-2026-aiwan-pavilion-1qbcbrm-800.avif`,width:800},{path:`/optimized/gallery-changsha-2026-aiwan-pavilion-1qbcbrm-1200.avif`,width:1200},{path:`/optimized/gallery-changsha-2026-aiwan-pavilion-1qbcbrm-1280.avif`,width:1280}],lqip:`697876828c863d462a`},"/gallery/changsha-2026/huangxing-road.webp":{variants:[{path:`/optimized/gallery-changsha-2026-huangxing-road-1fzha3h-400.webp`,width:400},{path:`/optimized/gallery-changsha-2026-huangxing-road-1fzha3h-800.webp`,width:800},{path:`/optimized/gallery-changsha-2026-huangxing-road-1fzha3h-1200.webp`,width:1200},{path:`/optimized/gallery-changsha-2026-huangxing-road-1fzha3h-1280.webp`,width:1280}],avif:[{path:`/optimized/gallery-changsha-2026-huangxing-road-1fzha3h-400.avif`,width:400},{path:`/optimized/gallery-changsha-2026-huangxing-road-1fzha3h-800.avif`,width:800},{path:`/optimized/gallery-changsha-2026-huangxing-road-1fzha3h-1200.avif`,width:1200},{path:`/optimized/gallery-changsha-2026-huangxing-road-1fzha3h-1280.avif`,width:1280}],lqip:`88798b91a3b9625a58`},"/gallery/changsha-2026/lushan-south-road.webp":{variants:[{path:`/optimized/gallery-changsha-2026-lushan-south-road-07chhwt-400.webp`,width:400},{path:`/optimized/gallery-changsha-2026-lushan-south-road-07chhwt-800.webp`,width:800},{path:`/optimized/gallery-changsha-2026-lushan-south-road-07chhwt-1200.webp`,width:1200},{path:`/optimized/gallery-changsha-2026-lushan-south-road-07chhwt-1280.webp`,width:1280}],avif:[{path:`/optimized/gallery-changsha-2026-lushan-south-road-07chhwt-400.avif`,width:400},{path:`/optimized/gallery-changsha-2026-lushan-south-road-07chhwt-800.avif`,width:800},{path:`/optimized/gallery-changsha-2026-lushan-south-road-07chhwt-1200.avif`,width:1200},{path:`/optimized/gallery-changsha-2026-lushan-south-road-07chhwt-1280.avif`,width:1280}],lqip:`9ab2ccadbfd2445359`},"/gallery/changsha-2026/orange-isle.webp":{variants:[{path:`/optimized/gallery-changsha-2026-orange-isle-1xd30wj-400.webp`,width:400},{path:`/optimized/gallery-changsha-2026-orange-isle-1xd30wj-800.webp`,width:800},{path:`/optimized/gallery-changsha-2026-orange-isle-1xd30wj-1137.webp`,width:1137}],avif:[{path:`/optimized/gallery-changsha-2026-orange-isle-1xd30wj-400.avif`,width:400},{path:`/optimized/gallery-changsha-2026-orange-isle-1xd30wj-800.avif`,width:800},{path:`/optimized/gallery-changsha-2026-orange-isle-1xd30wj-1137.avif`,width:1137}],lqip:`7893c18da4cc969ba7`},"/gallery/changsha-2026/snack-kingdom.webp":{variants:[{path:`/optimized/gallery-changsha-2026-snack-kingdom-0meauk7-400.webp`,width:400},{path:`/optimized/gallery-changsha-2026-snack-kingdom-0meauk7-800.webp`,width:800},{path:`/optimized/gallery-changsha-2026-snack-kingdom-0meauk7-1077.webp`,width:1077}],avif:[{path:`/optimized/gallery-changsha-2026-snack-kingdom-0meauk7-400.avif`,width:400},{path:`/optimized/gallery-changsha-2026-snack-kingdom-0meauk7-800.avif`,width:800},{path:`/optimized/gallery-changsha-2026-snack-kingdom-0meauk7-1077.avif`,width:1077}],lqip:`8975628f7e688b6f5d`},"/gallery/changsha-2026/tang-figurine.webp":{variants:[{path:`/optimized/gallery-changsha-2026-tang-figurine-1fw4evn-400.webp`,width:400},{path:`/optimized/gallery-changsha-2026-tang-figurine-1fw4evn-800.webp`,width:800},{path:`/optimized/gallery-changsha-2026-tang-figurine-1fw4evn-1089.webp`,width:1089}],avif:[{path:`/optimized/gallery-changsha-2026-tang-figurine-1fw4evn-400.avif`,width:400},{path:`/optimized/gallery-changsha-2026-tang-figurine-1fw4evn-800.avif`,width:800},{path:`/optimized/gallery-changsha-2026-tang-figurine-1fw4evn-1089.avif`,width:1089}],lqip:`955644b2735dd3927b`},"/gallery/changsha-2026/wenheli.webp":{variants:[{path:`/optimized/gallery-changsha-2026-wenheli-1abdv3b-400.webp`,width:400},{path:`/optimized/gallery-changsha-2026-wenheli-1abdv3b-800.webp`,width:800},{path:`/optimized/gallery-changsha-2026-wenheli-1abdv3b-1200.webp`,width:1200},{path:`/optimized/gallery-changsha-2026-wenheli-1abdv3b-1280.webp`,width:1280}],avif:[{path:`/optimized/gallery-changsha-2026-wenheli-1abdv3b-400.avif`,width:400},{path:`/optimized/gallery-changsha-2026-wenheli-1abdv3b-800.avif`,width:800},{path:`/optimized/gallery-changsha-2026-wenheli-1abdv3b-1200.avif`,width:1200},{path:`/optimized/gallery-changsha-2026-wenheli-1abdv3b-1280.avif`,width:1280}],lqip:`6b615e5d5a5f4f4537`},"/static/avatar.png":{variants:[{path:`/optimized/static-avatar-153wcdc-400.webp`,width:400},{path:`/optimized/static-avatar-153wcdc-800.webp`,width:800},{path:`/optimized/static-avatar-153wcdc-1200.webp`,width:1200},{path:`/optimized/static-avatar-153wcdc-1536.webp`,width:1536}],avif:[{path:`/optimized/static-avatar-153wcdc-400.avif`,width:400},{path:`/optimized/static-avatar-153wcdc-800.avif`,width:800},{path:`/optimized/static-avatar-153wcdc-1200.avif`,width:1200},{path:`/optimized/static-avatar-153wcdc-1536.avif`,width:1536}],lqip:`999796999795cec7c3`},"/static/logo.png":{variants:[{path:`/optimized/static-logo-0vpbste-400.webp`,width:400},{path:`/optimized/static-logo-0vpbste-800.webp`,width:800},{path:`/optimized/static-logo-0vpbste-1200.webp`,width:1200},{path:`/optimized/static-logo-0vpbste-1536.webp`,width:1536}],avif:[{path:`/optimized/static-logo-0vpbste-400.avif`,width:400},{path:`/optimized/static-logo-0vpbste-800.avif`,width:800},{path:`/optimized/static-logo-0vpbste-1200.avif`,width:1200},{path:`/optimized/static-logo-0vpbste-1536.avif`,width:1536}],lqip:`7e7d7b78797baba59f`},"/static/og-default.png":{variants:[{path:`/optimized/static-og-default-12ch2gn-400.webp`,width:400},{path:`/optimized/static-og-default-12ch2gn-800.webp`,width:800},{path:`/optimized/static-og-default-12ch2gn-1200.webp`,width:1200}],avif:[{path:`/optimized/static-og-default-12ch2gn-400.avif`,width:400},{path:`/optimized/static-og-default-12ch2gn-800.avif`,width:800},{path:`/optimized/static-og-default-12ch2gn-1200.avif`,width:1200}],lqip:`cdd1d3dde7ece5edf3`}};function An(){switch(R.imageOptimization.formats){case`avif`:return[`avif`];case`webp`:return[`webp`];default:return[`avif`,`webp`]}}var jn=kn;function Mn(e){return jn[e]}function Nn(e){if(e===void 0||!/^[0-9a-f]{18}$/i.test(e))return;let[t,n,r]=[0,6,12].map(t=>`#${e.slice(t,t+6)}`);return`linear-gradient(135deg, ${t} 0%, ${n} 50%, ${r} 100%)`}function Pn(e,t){return e.map(e=>`${t(e.path)} ${e.width}w`).join(`, `)}function X({src:e,alt:t,width:n,height:r,className:i,loading:a=`lazy`,fetchPriority:o,sizes:s=`100vw`,referrerPolicy:c,onLoad:l,onError:u,sources:d,naturalHeight:f=!1,position:p,coverImg:m=!1,fadeIn:h=!1,placeholder:g=!0}){let _=(0,F.useRef)(null),v=e.startsWith(`/`)?B(e):e,y=e.startsWith(`/`)?Mn(e):void 0,b=g?Nn(y?.lqip):void 0,x=An(),[S,C]=(0,F.useState)(null),w=S===v;(0,F.useEffect)(()=>{let e=_.current;!w&&e!==null&&e.complete&&e.naturalWidth===0&&C(v)},[w,v]);let T=()=>{u?.(),w||C(v)};if((0,F.useEffect)(()=>{if(!h)return;let e=_.current;if(e===null)return;let t=()=>{e.style.opacity=`1`};return e.complete&&e.naturalWidth>0?t():e.addEventListener(`load`,t,{once:!0}),()=>{e.removeEventListener(`load`,t)}},[h,v]),w)return(0,L.jsx)(Kt,{alt:t,className:i});let E=(0,L.jsx)(`img`,{ref:_,src:v,alt:t,width:f?void 0:n,height:f?void 0:r,className:q(i,h&&`opacity-0 transition-opacity duration-500 ease-out`),loading:a,decoding:`async`,fetchPriority:o,referrerPolicy:c,"data-cover-img":m?!0:void 0,"data-image-managed":!0,style:{...b===void 0?{}:{backgroundImage:b},...p===void 0?{}:{objectPosition:p}},onLoad:l,onError:T});if(y===void 0&&d===void 0)return E;let D=x.includes(`avif`);return(0,L.jsxs)(`picture`,{className:`contents`,children:[d?.map(e=>{let t=e.src.startsWith(`/`)?Mn(e.src):void 0,n=t?.avif;return[D&&n!==void 0&&n.length>0?(0,L.jsx)(`source`,{type:`image/avif`,media:e.media,srcSet:Pn(n,B),sizes:s},`${e.media}-avif`):null,(0,L.jsx)(`source`,{media:e.media,srcSet:t===void 0?B(e.src):Pn(t.variants,B),sizes:s},e.media)]}),D&&y?.avif!==void 0?(0,L.jsx)(`source`,{type:`image/avif`,srcSet:Pn(y.avif,B),sizes:s}):null,y===void 0?null:(0,L.jsx)(`source`,{type:`image/webp`,srcSet:Pn(y.variants,B),sizes:s}),E]})}function Z({id:e,title:t,titleIcon:n,children:r,className:i,isCollapsed:a=!1,collapsedHeight:o=`20rem`,useExpandedButtonSpacing:s=!1,contentPadding:c=!0,moreUrl:l}){let[u,d]=(0,F.useState)(!1),f=t!==void 0,p=a&&!u,m=o===`7.5rem`?`h-[7.5rem]`:`h-80`;return(0,L.jsxs)(`section`,{className:q(`card-base`,c&&`pb-4`,i),"aria-label":t,"data-is-collapsed":a,"data-expanded":u,"data-use-expanded-button-spacing":s,children:[f?(0,L.jsxs)(`div`,{className:`widget-title relative mt-4 mb-2 ml-8 flex items-center justify-between text-lg font-bold text-neutral-900 transition before:absolute before:top-[5.5px] before:left-[-16px] before:h-4 before:w-1 before:rounded-md before:bg-(--primary) dark:text-neutral-100`,children:[(0,L.jsx)(`span`,{className:`widget-name`,children:t}),n===void 0?null:n]}):null,(0,L.jsx)(`div`,{id:e,className:q(`collapse-wrapper overflow-hidden`,c&&`px-4`,p&&m,c&&!f&&`pt-4`),children:r}),a?(0,L.jsx)(`div`,{className:q(`expand-btn -mb-2 px-4`,u&&s&&`pt-2`),children:l===void 0?(0,L.jsx)(`button`,{type:`button`,className:`btn-plain h-9 w-full rounded-lg`,title:H(u?V.collapse:V.more),"aria-label":H(u?V.collapse:V.more),"aria-expanded":u,"data-show-more":H(V.more),"data-show-less":H(V.collapse),onClick:()=>{d(e=>!e)},children:(0,L.jsxs)(`div`,{className:`flex -translate-x-2 items-center justify-center gap-2 text-(--primary)`,children:[(0,L.jsx)(J,{name:`more`,className:q(`toggle-icon-more text-[1.75rem]`,u&&`hidden`)}),(0,L.jsx)(J,{name:`chevron-up`,className:q(`toggle-icon-less text-[1.75rem]`,!u&&`hidden`)}),(0,L.jsx)(`span`,{className:`toggle-text`,children:H(u?V.collapse:V.more)})]})}):(0,L.jsx)(I,{to:l,className:`btn-plain flex h-9 w-full items-center justify-center rounded-lg`,title:H(V.more),children:(0,L.jsxs)(`div`,{className:`flex -translate-x-2 items-center justify-center gap-2 text-(--primary)`,children:[(0,L.jsx)(J,{name:`more`,className:`text-[1.75rem]`}),(0,L.jsx)(`span`,{children:H(V.more)})]})})}):null]})}function Fn(e){return btoa(String.fromCharCode(...new TextEncoder().encode(e)))}function In(){return(0,L.jsxs)(`section`,{className:`card-base p-3`,"aria-label":`个人资料`,children:[(0,L.jsxs)(I,{to:`/about/`,"aria-label":`前往关于页`,className:`group relative mx-auto mt-1 mb-3 block max-w-48 overflow-hidden rounded-xl active:scale-95 lg:mx-0 lg:mt-0 lg:max-w-none`,children:[(0,L.jsx)(`div`,{className:`pointer-events-none absolute z-50 flex size-full items-center justify-center transition group-hover:bg-black/30 group-active:bg-black/50`,children:(0,L.jsx)(J,{name:`address-card`,className:`scale-90 text-5xl text-white opacity-0 transition group-hover:scale-100 group-hover:opacity-100`})}),(0,L.jsx)(X,{src:R.author.avatar,alt:`${R.author.name} 的头像`,width:350,height:350,loading:`eager`,fetchPriority:`high`,placeholder:!1,className:`profile-avatar-image mx-auto h-full w-full object-cover lg:mt-0`})]}),(0,L.jsxs)(`div`,{className:`px-2`,children:[(0,L.jsx)(`div`,{className:`mb-1 text-center text-xl font-bold transition dark:text-neutral-50`,children:R.author.name}),(0,L.jsx)(`div`,{className:`mx-auto mb-2 h-1 w-5 rounded-full bg-(--primary) transition`}),(0,L.jsx)(`div`,{className:`mb-2.5 text-center text-neutral-400 transition`,children:R.author.bio}),(0,L.jsx)(`div`,{className:`mb-1 flex flex-wrap justify-center gap-2`,children:R.social.map(e=>{let t=e.showName===!0,n=q(`btn-regular h-10 rounded-lg`,t?`gap-2 px-3 font-bold active:scale-95`:`w-10 active:scale-90`),r=(0,L.jsx)(J,{name:e.icon,className:`text-[1.5rem]`}),i=t?(0,L.jsx)(`span`,{children:e.label}):null;return e.href.startsWith(`mailto:`)?(0,L.jsxs)(`button`,{type:`button`,"aria-label":e.label,title:e.label,"data-encoded-email":Fn(e.href),className:n,onClick:e=>{let t=e.currentTarget.dataset.encodedEmail;t!==void 0&&(window.location.href=atob(t))},children:[r,i]},e.href):(0,L.jsxs)(`a`,{rel:`me noreferrer`,"aria-label":e.label,title:e.label,href:e.href,target:`_blank`,className:n,children:[r,i]},e.href)})})]})]})}function Ln(){let[e,t]=(0,F.useState)(!1);return e?null:(0,L.jsx)(Z,{id:`announcement`,title:H(V.announcement),children:(0,L.jsxs)(`div`,{children:[(0,L.jsx)(`div`,{className:`mb-3 leading-relaxed whitespace-pre-line text-neutral-600 dark:text-neutral-300`,children:R.announcement.body}),(0,L.jsxs)(`div`,{className:`flex items-center justify-between gap-3`,children:[(0,L.jsx)(`div`,{children:(0,L.jsx)(I,{to:R.announcement.href,className:`btn-regular rounded-lg px-3 py-1.5 text-sm font-medium transition-transform active:scale-95`,children:R.announcement.linkLabel})}),(0,L.jsx)(`button`,{type:`button`,"aria-label":H(V.announcementClose),className:`btn-regular h-8 w-8 rounded-lg text-sm transition-colors hover:bg-red-100 dark:hover:bg-red-900/30`,onClick:()=>t(!0),children:(0,L.jsx)(J,{name:`fa7-solid:xmark`,className:`text-sm`})})]})]})})}function Rn({tags:e,collapseThreshold:t=10}){return e.length===0?(0,L.jsx)(Z,{id:`tags`,title:H(V.tags),children:(0,L.jsx)(`p`,{className:`text-meta text-sm`,children:H(V.noTags)})}):(0,L.jsx)(Z,{id:`tags`,title:H(V.tags),isCollapsed:e.length>t,collapsedHeight:`7.5rem`,useExpandedButtonSpacing:!0,moreUrl:`/tags/`,children:(0,L.jsx)(`div`,{className:`flex flex-wrap gap-2`,children:e.map(e=>(0,L.jsx)(I,{to:hn(e.name),"aria-label":`查看包含 ${e.name} 标签的全部文章`,className:`tag-item px-3 py-1.5 text-sm font-medium transition`,children:e.name},e.name))})})}function zn({totalPosts:e,categoryCount:t,tagCount:n,totalWords:r,lastActivity:i}){let[a,o]=(0,F.useState)({runningDays:0,lastActivityDays:0});(0,F.useEffect)(()=>{let e=window.setTimeout(()=>{o({runningDays:On(`${R.since}-01-01`),lastActivityDays:i===``?0:Dn(i)})},0);return()=>window.clearTimeout(e)},[i]);let s=[{label:H(V.siteStatsPostCount),value:`${e}`,icon:`article`},{label:H(V.siteStatsCategoryCount),value:`${t}`,icon:`folder`},{label:H(V.siteStatsTagCount),value:`${n}`,icon:`tag`},{label:H(V.siteStatsTotalWords),value:r.toLocaleString(),icon:`notes`},{label:H(V.siteStatsRunningDays),value:`${a.runningDays}`,suffix:H(V.siteStatsDays).replace(`{days}`,``).trim(),icon:`calendar`},{label:H(V.siteStatsLastUpdate),value:a.lastActivityDays===0?H(V.today):`${a.lastActivityDays}`,...a.lastActivityDays===0?{}:{suffix:H(V.siteStatsDaysAgo).replace(`{days}`,``).trim()},icon:`mingcute:heartbeat-line`}];return(0,L.jsx)(Z,{id:`site-stats`,title:H(V.siteStats),children:(0,L.jsx)(`div`,{className:`flex flex-col gap-2`,children:s.map(e=>(0,L.jsxs)(`div`,{className:`flex items-center justify-between px-3 py-1.5`,children:[(0,L.jsxs)(`div`,{className:`flex items-center gap-2.5`,children:[(0,L.jsx)(`div`,{className:`text-xl text-(--primary)`,children:(0,L.jsx)(J,{name:e.icon})}),(0,L.jsx)(`span`,{className:`text-sm font-medium text-neutral-700 dark:text-neutral-300`,children:e.label})]}),(0,L.jsxs)(`div`,{className:`flex items-center`,children:[(0,L.jsx)(`span`,{className:`text-base font-bold text-neutral-900 dark:text-neutral-100`,children:e.value}),e.suffix===void 0?null:(0,L.jsx)(`span`,{className:`ml-1 text-sm text-neutral-500 dark:text-neutral-400`,children:e.suffix})]})]},e.label))})})}function Bn({categories:e,collapseThreshold:t=5}){return e.length===0?(0,L.jsx)(Z,{id:`categories`,title:H(V.categories),children:(0,L.jsx)(`p`,{className:`text-meta text-sm`,children:H(V.noData)})}):(0,L.jsx)(Z,{id:`categories`,title:H(V.categories),isCollapsed:e.length>t,collapsedHeight:`7.5rem`,children:(0,L.jsx)(`div`,{className:`flex flex-col`,children:e.map(e=>(0,L.jsx)(I,{to:gn(e.name),"aria-label":`查看 ${e.name} 分类下的全部文章`,className:`focus-ring-inset flex h-10 w-full items-center rounded-lg pl-2 text-neutral-700 transition-all hover:bg-(--btn-plain-bg-hover) hover:pl-3 hover:text-(--primary) active:bg-(--btn-plain-bg-active) dark:text-neutral-300 dark:hover:text-(--primary)`,children:(0,L.jsxs)(`div`,{className:`relative mr-2 flex w-full min-w-0 items-center justify-between`,children:[(0,L.jsx)(`div`,{className:`overflow-hidden text-left text-ellipsis whitespace-nowrap`,children:e.name}),(0,L.jsx)(`div`,{className:`ml-4 flex h-7 min-w-8 items-center justify-center rounded-lg bg-[oklch(0.95_0.025_var(--hue))] px-2 text-sm font-bold text-(--btn-content) transition dark:bg-(--primary) dark:text-(--deep-text)`,children:e.count})]})},e.name))})})}function Vn({limit:e=2}={}){let t=xn.slice(0,e);return(0,L.jsxs)(Z,{id:`latest-dynamics`,title:H(V.latestDynamics),children:[(0,L.jsx)(`div`,{className:`flex flex-col gap-1.5`,children:t.length===0?(0,L.jsx)(`p`,{className:`m-0 p-3 text-center text-sm text-neutral-500`,children:H(V.dynamicEmpty)}):t.map(e=>(0,L.jsx)(I,{to:`/dynamic/#dynamic-${e.id}`,"aria-label":`动态: ${e.content}`,className:`group flex min-h-16 min-w-0 items-center gap-3 rounded-lg p-2 text-neutral-700/75 transition-colors duration-150 hover:bg-(--btn-plain-bg-hover) hover:text-(--primary) active:bg-(--btn-plain-bg-active) dark:text-neutral-300/75`,children:(0,L.jsxs)(`div`,{className:`min-w-0 flex-1`,children:[(0,L.jsxs)(`div`,{className:`mb-1 flex items-center gap-1 text-xs leading-4 text-(--primary)`,children:[(0,L.jsx)(J,{name:`clock`,size:16,className:`shrink-0`}),(0,L.jsx)(`time`,{dateTime:new Date(e.publishedAt).toISOString(),children:En(e.publishedAt)}),(e.images?.length??0)>0?(0,L.jsx)(`span`,{className:`ml-auto inline-flex items-center gap-1.5`,children:(0,L.jsx)(J,{name:`image`,size:14,className:`shrink-0 text-neutral-500 dark:text-neutral-400`})}):null]}),(0,L.jsx)(`p`,{className:`m-0 line-clamp-3 text-sm leading-[1.35rem]`,children:e.content})]})},e.id))}),(0,L.jsxs)(I,{to:`/dynamic/`,className:`btn-plain mt-2 flex items-center justify-center gap-1 rounded-lg p-1.5 text-sm text-(--primary)`,children:[(0,L.jsx)(J,{name:`chat`,className:`size-4.5`,"aria-hidden":`true`}),(0,L.jsx)(`span`,{children:H(V.moreDynamics)}),xn.length===0?null:(0,L.jsxs)(`span`,{className:`opacity-60`,children:[`(`,xn.length,`)`]})]})]})}function Hn(){let[e,t]=(0,F.useState)(!1),n=R.url.replace(/^https?:\/\//,``).replace(/\/$/,``),r=[{icon:`hammer`,label:H(V.siteInfoBuildPlatform),value:z.buildPlatform},{icon:`versions`,label:H(V.siteInfoBlogVersion),value:`${R.title} v${z.version}`,href:`https://github.com/heyelio`},{icon:`copyright`,label:H(V.siteInfoLicense),value:R.license}],i=[{icon:`world-www`,label:H(V.siteInfoDomain),value:n,fullWidth:!0},{icon:`versions`,label:R.title,value:`v${z.version}`},{icon:`brand-react`,label:`React Router`,value:`v${z.frameworkVersion}`},{icon:`brand-nodejs`,label:`Node`,value:z.nodeVersion},{icon:`brand-pnpm`,label:`pnpm`,value:z.pnpmVersion},{icon:`clock-record`,label:H(V.siteInfoBuildTime),value:z.buildTime,fullWidth:!0},{icon:`settings`,label:H(V.siteInfoSystem),value:z.system,fullWidth:!0}];return(0,L.jsx)(Z,{id:`site-info`,title:H(V.siteInfo),children:(0,L.jsxs)(`div`,{className:`flex flex-col gap-2`,children:[(0,L.jsx)(`div`,{className:`flex flex-col gap-2`,children:r.map(e=>(0,L.jsxs)(`div`,{className:`flex items-center justify-between rounded-lg px-3 py-2`,children:[(0,L.jsxs)(`div`,{className:`flex items-center gap-2.5`,children:[(0,L.jsx)(`div`,{className:`text-lg text-(--primary)`,children:(0,L.jsx)(J,{name:e.icon})}),(0,L.jsx)(`span`,{className:`text-sm font-medium text-neutral-700 dark:text-neutral-300`,children:e.label})]}),e.href===void 0?(0,L.jsx)(`span`,{title:e.value,className:`max-w-[55%] truncate text-right text-xs font-bold text-neutral-900 dark:text-neutral-100`,children:e.value}):(0,L.jsx)(`a`,{href:e.href,target:`_blank`,rel:`noopener noreferrer`,title:e.value,className:`max-w-[55%] truncate text-right text-xs font-bold text-neutral-900 transition-colors hover:text-(--primary) dark:text-neutral-100`,children:e.value})]},e.label))}),(0,L.jsx)(`div`,{className:`overflow-hidden`,children:(0,L.jsx)(`div`,{className:e?`h-auto`:`h-0`,children:(0,L.jsx)(`div`,{className:`grid grid-cols-2 gap-2`,children:i.map(e=>(0,L.jsxs)(`div`,{className:q(`flex flex-col items-center gap-1 rounded-lg bg-neutral-100/60 px-1 py-2 dark:bg-neutral-800/50`,e.fullWidth&&`col-span-2`),children:[(0,L.jsx)(`div`,{className:`text-lg text-(--primary)`,children:(0,L.jsx)(J,{name:e.icon})}),(0,L.jsx)(`span`,{className:`text-xs text-neutral-500 dark:text-neutral-400`,children:e.label}),(0,L.jsx)(`span`,{title:e.value,className:q(`w-full truncate text-center font-bold text-neutral-900 dark:text-neutral-100`,e.fullWidth?`text-xs`:`text-sm`),children:e.value})]},e.label))})})}),(0,L.jsxs)(`button`,{type:`button`,"aria-expanded":e,className:`btn-plain mt-1 flex h-8 w-full items-center justify-center gap-1.5 rounded-lg text-sm text-(--primary)`,onClick:()=>t(e=>!e),children:[(0,L.jsx)(J,{name:`chevron-down`,size:24,className:q(`transition-transform duration-200`,e&&`rotate-180`)}),(0,L.jsx)(`span`,{children:H(e?V.siteInfoCollapse:V.siteInfoExpand)})]})]})})}var Un=[H(V.calendarSunday),H(V.calendarMonday),H(V.calendarTuesday),H(V.calendarWednesday),H(V.calendarThursday),H(V.calendarFriday),H(V.calendarSaturday)],Wn=[H(V.calendarJanuary),H(V.calendarFebruary),H(V.calendarMarch),H(V.calendarApril),H(V.calendarMay),H(V.calendarJune),H(V.calendarJuly),H(V.calendarAugust),H(V.calendarSeptember),H(V.calendarOctober),H(V.calendarNovember),H(V.calendarDecember)],Gn=()=>()=>{},Kn=null;function qn(e){return`${e.year}-${String(e.month+1).padStart(2,`0`)}-${String(e.day).padStart(2,`0`)}`}function Jn(){if(Kn===null){let e=new Date;Kn={year:e.getFullYear(),month:e.getMonth(),day:e.getDate()}}return Kn}function Yn(e){let[t,n,r]=e.slice(0,10).split(`-`);return{key:e.slice(0,10),year:Number(t??`0`),month:Number(n??`1`)-1,day:Number(r??`1`)}}function Xn({posts:e,showTitle:t=!0}){let n=e[0],r=n===void 0?{year:1970,month:0,day:1}:Yn(n.publishedAt),i=(0,F.useSyncExternalStore)(Gn,Jn,()=>({year:r.year,month:r.month,day:r.day})),[a,o]=(0,F.useState)(`day`),[s,c]=(0,F.useState)(null),[l,u]=(0,F.useState)(null),d=l??i,f=(0,F.useMemo)(()=>{let t=new Map;for(let n of e){let e=n.publishedAt.slice(0,10),r=t.get(e);r===void 0?t.set(e,[n]):r.push(n)}return t},[e]),p=(0,F.useMemo)(()=>[...new Set(e.map(e=>Number(e.publishedAt.slice(0,4))))].sort((e,t)=>t-e),[e]);if(e.length===0)return(0,L.jsx)(Z,{id:`calendar-widget`,...t?{title:H(V.calendar)}:{},children:(0,L.jsx)(`p`,{className:`text-meta text-sm`,children:H(V.noData)})});let m=new Date(Date.UTC(d.year,d.month,1)).getUTCDay(),h=new Date(Date.UTC(d.year,d.month+1,0)).getUTCDate(),g=`${d.year}-${String(d.month+1).padStart(2,`0`)}`,_=e.filter(e=>e.publishedAt.slice(0,7)===g),v=s===null?_:f.get(qn(s))??_,y=d.year===i.year&&d.month===i.month,b=(e,t)=>{o(`day`),c(null),u({year:e,month:t,day:1})},x=e=>{if(a===`day`){let t=d.year*12+d.month+e;b(Math.floor(t/12),(t%12+12)%12)}else a===`month`&&u({...d,year:d.year+e})},S=Array.from({length:4},(t,n)=>Array.from({length:12},(t,r)=>{let i=e.filter(e=>{let t=Yn(e.publishedAt);return t.year===d.year&&t.month===r&&Math.min(Math.floor((t.day-1)/7),3)===n}).length;return{month:r,count:i,opacity:i===0?``:[`opacity-45`,`opacity-65`,`opacity-85`,`opacity-100`][Math.min(i,4)-1]}})),C=a===`day`?`${d.year}${H(V.year)}${d.month+1}${H(V.month)}`:a===`month`?`${d.year}${H(V.year)}`:H(V.year);return(0,L.jsxs)(Z,{id:`calendar-widget`,...t?{title:H(V.calendar)}:{},children:[(0,L.jsxs)(`div`,{className:`mb-2 flex items-center justify-between`,children:[(0,L.jsx)(`button`,{type:`button`,"aria-label":`上一个月`,className:q(`btn-plain flex h-8 w-8 items-center justify-center rounded-lg transition-colors hover:bg-(--btn-plain-bg-hover)`,a===`year`&&`invisible`),onClick:()=>x(-1),children:(0,L.jsx)(J,{name:`fa7-solid:chevron-left`,className:`text-sm`})}),(0,L.jsx)(`button`,{type:`button`,className:`text-deep cursor-pointer text-lg font-bold transition-colors select-none hover:text-(--primary)`,onClick:()=>o(a===`day`?`month`:`year`),children:C}),(0,L.jsxs)(`div`,{className:`flex gap-2`,children:[a===`day`&&y?null:(0,L.jsx)(`button`,{type:`button`,"aria-label":`回到今天`,className:`btn-plain flex h-8 w-8 items-center justify-center rounded-lg transition-colors hover:bg-(--btn-plain-bg-hover)`,onClick:()=>{o(`day`),c(null),u(null)},children:(0,L.jsx)(J,{name:`fa7-solid:arrow-rotate-left`,className:`text-sm`})}),(0,L.jsx)(`button`,{type:`button`,"aria-label":`下一个月`,className:q(`btn-plain flex h-8 w-8 items-center justify-center rounded-lg transition-colors hover:bg-(--btn-plain-bg-hover)`,a===`year`&&`invisible`),onClick:()=>x(1),children:(0,L.jsx)(J,{name:`fa7-solid:chevron-right`,className:`text-sm`})})]})]}),a===`day`?(0,L.jsxs)(L.Fragment,{children:[(0,L.jsx)(`div`,{className:`mb-1 grid grid-cols-7 gap-1 text-center text-xs`,children:Un.map(e=>(0,L.jsx)(`span`,{className:`text-meta font-medium`,children:e},e))}),(0,L.jsxs)(`div`,{className:`grid grid-cols-7 gap-1 pb-1`,children:[Array.from({length:m},(e,t)=>(0,L.jsx)(`span`,{className:`aspect-square`},`blank-${t}`)),Array.from({length:h},(e,t)=>{let n=t+1,r=qn({year:d.year,month:d.month,day:n}),a=f.get(r)?.length??0,o=y&&n===i.day,l=s!==null&&qn(s)===r;return(0,L.jsxs)(`button`,{type:`button`,"aria-label":`${d.year}${H(V.year)}${d.month+1}${H(V.month)}${n}${H(V.day)}${a===0?``:`，${a}${H(V.postCount)}`}`,"aria-pressed":l,className:q(`calendar-day relative flex aspect-square cursor-pointer items-center justify-center rounded-sm text-sm transition hover:-translate-y-0.5`,a===0?`text-75`:`text-deep font-bold`,o&&`ring-2 ring-(--primary)`,l&&`bg-(--btn-regular-bg)`),onClick:()=>{a!==0&&c(l?null:{year:d.year,month:d.month,day:n})},children:[n,a===0?null:(0,L.jsx)(`span`,{className:`absolute bottom-0 left-1/2 h-1 w-1 -translate-x-1/2 rounded-full bg-(--primary)`}),a>1?(0,L.jsx)(`span`,{className:`absolute top-0 right-0 text-[10px] font-bold text-(--primary)`,children:a}):null]},n)})]}),(0,L.jsxs)(`div`,{className:`mb-2`,children:[(0,L.jsx)(`div`,{className:`mb-1 grid grid-cols-12 gap-0.5`,children:Array.from({length:12},(e,t)=>(0,L.jsx)(`span`,{className:`text-center text-[10px] text-neutral-400 dark:text-neutral-500`,children:t+1},t))}),(0,L.jsx)(`div`,{className:`grid grid-cols-12 gap-0.5`,children:S.map((e,t)=>e.map(e=>(0,L.jsx)(`button`,{type:`button`,"aria-label":`${d.year}${H(V.year)}${H(V.calendarHeatmapWeek,{month:e.month+1,week:t+1,count:e.count})}`,title:H(V.calendarHeatmapWeek,{month:e.month+1,week:t+1,count:e.count}),className:q(`heatmap-cell mx-auto aspect-square w-[85%] rounded-sm transition-shadow hover:shadow-[0_0_1.5px_1.5px_var(--primary)]`,e.count===0?`bg-(--btn-plain-bg-hover)`:`bg-(--primary)`,e.opacity),onClick:()=>b(d.year,e.month)},`${t}-${e.month}`)))})]}),_.length===0?null:(0,L.jsxs)(`div`,{children:[(0,L.jsx)(`div`,{className:`mb-2 border-t border-neutral-200 dark:border-neutral-700`}),(0,L.jsx)(`div`,{className:`flex max-h-48 flex-col gap-1 overflow-y-auto`,children:v.map(e=>(0,L.jsxs)(I,{to:e.path,className:`text-75 flex items-center justify-between rounded-sm px-2 py-1 text-sm transition-colors hover:bg-(--btn-plain-bg-hover) hover:text-(--primary)`,children:[(0,L.jsx)(`span`,{className:`truncate`,children:e.title}),(0,L.jsxs)(`span`,{className:`text-meta ml-2 text-xs whitespace-nowrap`,children:[e.publishedAt.slice(5,7),`-`,e.publishedAt.slice(8,10)]})]},e.slug))})]})]}):null,a===`month`?(0,L.jsx)(`div`,{className:`grid grid-cols-3 gap-2`,children:Wn.map((t,n)=>{let r=e.some(e=>e.publishedAt.startsWith(`${d.year}-${String(n+1).padStart(2,`0`)}`)),i=n===d.month;return(0,L.jsxs)(`button`,{type:`button`,className:q(`relative cursor-pointer rounded-sm p-2 text-center text-sm transition-colors hover:bg-(--btn-plain-bg-hover)`,i?`bg-(--btn-plain-bg-hover) font-bold text-(--primary)`:`text-75`),onClick:()=>b(d.year,n),children:[t,r?(0,L.jsx)(`span`,{className:`absolute bottom-1 left-1/2 h-1 w-1 -translate-x-1/2 rounded-full bg-(--primary)`}):null]},t)})}):null,a===`year`?(0,L.jsx)(`div`,{className:`grid grid-cols-3 gap-2`,children:p.map(e=>(0,L.jsxs)(`button`,{type:`button`,className:q(`relative cursor-pointer rounded-sm p-2 text-center text-sm transition-colors hover:bg-(--btn-plain-bg-hover)`,e===d.year?`bg-(--btn-plain-bg-hover) font-bold text-(--primary)`:`text-75`),onClick:()=>{o(`month`),c(null),u({year:e,month:d.month,day:1})},children:[e,(0,L.jsx)(`span`,{className:`absolute bottom-1 left-1/2 h-1 w-1 -translate-x-1/2 rounded-full bg-(--primary)`})]},e))}):null]})}function Zn(e){if(e===void 0)return!1;let t=Date.parse(e);return!Number.isNaN(t)&&Date.now()>t}function Qn(e){if(e===void 0)return`1rem`;if(e.all!==void 0)return e.all===`0`?`0`:e.all;let t=[e.top===void 0?``:`padding-top: ${e.top}`,e.right===void 0?``:`padding-right: ${e.right}`,e.bottom===void 0?``:`padding-bottom: ${e.bottom}`,e.left===void 0?``:`padding-left: ${e.left}`].filter(Boolean);return t.length===0?`1rem`:t.join(`; `)}function $n({config:e,showTitle:t,instanceId:n}){let r=(0,F.useRef)(null),[i,a]=(0,F.useState)(!1),o=e?.displayCount??-1;if((0,F.useEffect)(()=>{if(e===void 0||o<=0)return;let t=`ad-display-${n}`;try{let e=Number.parseInt(window.localStorage.getItem(t)??`0`,10);if(e>=o){r.current?.closest(`section`)?.style.setProperty(`display`,`none`);return}window.localStorage.setItem(t,`${e+1}`)}catch{}},[e,o,n]),(0,F.useEffect)(()=>{let t=r.current;t!==null&&(t.style.padding=Qn(e?.padding))},[e?.padding]),e===void 0||Zn(e.expireDate))return null;let s=e.image?.link!==void 0&&e.image.external===!0,c=e.link!==void 0&&e.link.external===!0,l=e.image===void 0?null:(0,L.jsx)(X,{src:e.image.src,alt:e.image.alt,width:0,height:0,naturalHeight:!0,loading:`lazy`,sizes:`(min-width: 1024px) 20rem, 100vw`,className:`h-auto w-full rounded-lg`}),u=()=>{a(!0),window.setTimeout(()=>{r.current?.closest(`section`)?.style.setProperty(`display`,`none`)},300)};return(0,L.jsx)(Z,{id:n,...t?{title:e.title??H(V.advertisement)}:{},contentPadding:!1,className:q(`advertisement-widget group transition-all duration-300`,i?`translate-x-full opacity-0`:`hover:-translate-y-0.5`),children:(0,L.jsxs)(`div`,{ref:r,className:`relative`,children:[e.closable===!0?(0,L.jsx)(`button`,{type:`button`,"aria-label":H(V.announcementClose),title:`Close`,className:`absolute top-2 right-2 z-10 flex size-6 items-center justify-center rounded-full bg-neutral-200 text-neutral-500 opacity-0 transition-all duration-200 group-hover:opacity-100 hover:bg-neutral-300 hover:text-neutral-700 dark:bg-neutral-700 dark:text-neutral-400 dark:hover:bg-neutral-600 dark:hover:text-neutral-200`,onClick:u,children:(0,L.jsx)(J,{name:`fa7-solid:xmark`,className:`size-3.5`})}):null,l===null?null:(0,L.jsx)(`div`,{className:q(e.content===void 0&&e.link===void 0?``:`mb-3`),children:e.image?.link===void 0?l:s?(0,L.jsx)(`a`,{href:e.image.link,target:`_blank`,rel:`noopener noreferrer`,className:`block overflow-hidden rounded-lg`,children:l}):(0,L.jsx)(I,{to:e.image.link,className:`block overflow-hidden rounded-lg`,children:l})}),e.content===void 0?null:(0,L.jsx)(`p`,{className:`mb-3 text-center text-sm leading-relaxed text-neutral-600 transition dark:text-neutral-300`,children:e.content}),e.link===void 0?null:(0,L.jsx)(`div`,{className:`text-center`,children:c?(0,L.jsxs)(`a`,{href:e.link.url,target:`_blank`,rel:`noopener noreferrer`,className:`btn-regular inline-flex items-center gap-2 rounded-lg px-4 py-2 text-sm font-medium transition-all duration-200 hover:scale-105`,children:[(0,L.jsx)(`span`,{children:e.link.text}),(0,L.jsx)(J,{name:`fa7-solid:arrow-up-right-from-square`,className:`size-3.5`})]}):(0,L.jsx)(I,{to:e.link.url,className:`btn-regular inline-flex items-center gap-2 rounded-lg px-4 py-2 text-sm font-medium transition-all duration-200 hover:scale-105`,children:(0,L.jsx)(`span`,{children:e.link.text})})})]})})}var er=120,tr=200,nr=2e3;function rr(e){return typeof e==`string`?e.replace(/<[^>]*>/g,``).replace(/\s+/g,` `).trim().slice(0,er):``}function ir(e){let t=rr(e);return/^https?:\/\//i.test(t)?t:``}function ar(e){if(!Array.isArray(e))return[];let t=[];for(let n of e){if(typeof n!=`object`||!n)continue;let e=n,r=rr(e.name??e.title),i=ir(e.url);if(r!==``&&i!==``&&(t.push({name:r,artist:rr(e.artist??e.author),url:i,cover:ir(e.cover??e.pic),lyrics:ir(e.lrc??e.lyrics)}),t.length>=tr))break}return t}function or(e){if(!Number.isFinite(e)||e<=0)return`0:00`;let t=Math.floor(e);return`${Math.floor(t/60)}:${(t%60).toString().padStart(2,`0`)}`}function sr(e){let t=[];for(let n of e.split(/\r?\n/)){let e=[],r=n.trim();for(;;){let t=/^\[([^\]]*)\]/.exec(r);if(t===null)break;let n=cr(t[1]??``);n!==null&&e.push(n),r=r.slice(t[0].length).trim()}if(e.length!==0&&r!==``){for(let n of e)t.push({at:n,text:r.slice(0,er)});if(t.length>=nr)break}}return t.sort((e,t)=>e.at-t.at)}function cr(e){let t=/^(\d{1,3}):(\d{1,2})(?:[.:](\d{1,3}))?$/.exec(e.trim());if(t===null)return null;let n=(t[3]??`0`).padEnd(3,`0`).slice(0,3);return Number(t[1])*60+Number(t[2])+Number(n)/1e3}function lr(e,t){let n=-1;for(let[r,i]of e.entries()){if(i.at>t)break;n=r}return n}function ur(e,t,n,r){if(t<=0)return null;if(n.auto&&n.repeat===`one`)return e;if(n.shuffle){if(t===1)return 0;let n=Math.floor(r()*(t-1));return n>=e?n+1:n}return e+1<t?e+1:n.auto&&n.repeat===`off`?null:0}var dr={status:`idle`,tracks:[],index:0,playing:!1,progress:0,duration:0,volume:.7,muted:!1,mode:`list`,lyrics:[],lyricsStatus:`idle`,message:``},Q=dr,fr=new Set,pr=new Map,mr=null,hr=!1,gr=!1,_r=null,vr=!1;function $(e){Q={...Q,...e};for(let e of fr)e()}function yr(e){return fr.add(e),()=>{fr.delete(e)}}function br(){return Q}function xr(){return dr}function Sr(){return!vr&&(vr=!0,!0)}function Cr(){try{let e=window.localStorage.getItem(`music-player-volume`);if(e===null)return null;let t=Number.parseFloat(e);return Number.isFinite(t)?Math.min(1,Math.max(0,t)):null}catch{return null}}function wr(e){try{window.localStorage.setItem(`music-player-volume`,e.toString())}catch{}}function Tr(e){if(e.lyrics===``){$({lyrics:[],lyricsStatus:`idle`});return}let t=pr.get(e.lyrics);t===void 0?($({lyrics:[],lyricsStatus:`loading`}),(async()=>{try{let t=await fetch(e.lyrics);if(!t.ok)throw Error(`lyrics request failed`);let n=sr(await t.text());pr.set(e.lyrics,n),Q.tracks[Q.index]?.lyrics===e.lyrics&&$({lyrics:n,lyricsStatus:`ready`})}catch{Q.tracks[Q.index]?.lyrics===e.lyrics&&$({lyrics:[],lyricsStatus:`error`})}})()):$({lyrics:t,lyricsStatus:`ready`})}function Er(e,t){let n=Q.tracks[e];if(n===void 0)return;_r!==null&&(clearTimeout(_r),_r=null);let r=Fr();$({index:e,progress:0,duration:0,lyrics:[],lyricsStatus:`idle`,message:``}),Tr(n),r!==null&&(r.src=n.url,r.volume=Q.volume,r.muted=Q.muted,t&&r.play().catch(()=>$({playing:!1})))}function Dr(e=!1){let t=ur(Q.index,Q.tracks.length,{repeat:Q.mode===`one`?`one`:`all`,auto:e,shuffle:Q.mode===`random`},Math.random);t===null?$({playing:!1}):Er(t,!0)}function Or(){Q.tracks.length!==0&&Er((Q.index-1+Q.tracks.length)%Q.tracks.length,!0)}function kr(){let e=Fr();e!==null&&Q.tracks.length!==0&&(e.paused?e.play().catch(()=>$({playing:!1})):e.pause())}function Ar(e){e===Q.index&&Q.playing?kr():Er(e,!0)}function jr(){let e=[`list`,`one`,`random`];$({mode:e[(e.indexOf(Q.mode)+1)%e.length]??`list`})}function Mr(e){let t=Math.min(1,Math.max(0,e)),n=Fr();n!==null&&(n.volume=t,n.muted=!1),wr(t),$({volume:t,muted:!1})}function Nr(){let e=!Q.muted,t=Fr();t!==null&&(t.muted=e),$({muted:e})}function Pr(e){let t=Fr();t===null||!Number.isFinite(t.duration)||t.duration<=0||(t.currentTime=Math.min(Math.max(0,e),t.duration),$({progress:t.currentTime}))}function Fr(){if(typeof window>`u`)return null;if(mr!==null)return mr;let e=document.createElement(`audio`),t=Cr();return e.crossOrigin=`anonymous`,e.preload=`none`,e.volume=t??Q.volume,t!==null&&(Q={...Q,volume:t}),e.addEventListener(`play`,()=>{$({playing:!0,message:``})}),e.addEventListener(`pause`,()=>{$({playing:!1})}),e.addEventListener(`timeupdate`,()=>{Number.isFinite(e.duration)&&$({progress:e.currentTime,duration:e.duration})}),e.addEventListener(`loadedmetadata`,()=>{Number.isFinite(e.duration)&&$({duration:e.duration})}),e.addEventListener(`ended`,()=>{Dr(!0)}),e.addEventListener(`volumechange`,()=>{$({volume:e.volume,muted:e.muted})}),e.addEventListener(`error`,()=>{let e=Q.index;$({playing:!1,message:`播放失败，即将自动跳过…`}),_r!==null&&clearTimeout(_r),_r=window.setTimeout(()=>{Q.index===e&&Dr(!0)},2e3)}),document.body.appendChild(e),mr=e,e}async function Ir(){if(Q.status!==`loading`&&Q.status!==`ready`){$({status:`loading`,message:``}),Fr();try{let e=await fetch(Ne.endpoint);if(!e.ok)throw Error(`playlist request failed`);let t=ar(await e.json());if(t.length===0){$({status:`error`,message:`歌单为空。`});return}$({status:`ready`,tracks:t}),Er(Q.mode===`random`?Math.floor(Math.random()*t.length):0,!1)}catch{$({status:`error`,message:`播放列表加载失败。`})}}}function Lr(){if(typeof window>`u`||hr)return;hr=!0;let e=()=>{gr||(gr=!0,document.removeEventListener(`pointerdown`,e,!0),document.removeEventListener(`keydown`,e,!0),Ir())};document.addEventListener(`pointerdown`,e,!0),document.addEventListener(`keydown`,e,!0);let t=()=>{typeof window.requestIdleCallback==`function`?window.requestIdleCallback(e,{timeout:2e3}):window.setTimeout(e,800)};document.readyState===`complete`?t():window.addEventListener(`load`,t,{once:!0})}function Rr(){let e=(0,F.useSyncExternalStore)(yr,br,xr),[t,n]=(0,F.useState)(`none`),[r,i]=(0,F.useState)(null),[a,o]=(0,F.useState)(``),s=(0,F.useRef)(null),c=(0,F.useRef)(null),l=(0,F.useRef)(!1),u=(0,F.useRef)(null),d=(0,F.useRef)(-1);(0,F.useEffect)(()=>{Lr()},[]);let f=e.tracks[e.index],p=r===null?e.duration>0?Math.min(100,e.progress/e.duration*100):0:r*100,m=e.muted?0:e.volume*100,h=lr(e.lyrics,e.progress),g=`${e.index}:${f?.cover??``}`,_=f!==void 0&&f.cover!==``&&a===g,v=e.status===`idle`||e.status===`loading`,y=e.message===``?f===void 0?H(V.music):f.name:e.message,b=f===void 0?H(V.musicNoPlaying):f.artist;(0,F.useEffect)(()=>{d.current=h},[h]),(0,F.useEffect)(()=>{let e=s.current;e!==null&&(e.style.setProperty(`--music-progress`,`${p}%`),e.style.setProperty(`--music-volume`,`${m}%`))},[p,m]);let x=e=>{let t=c.current;if(t===null||d.current<0)return;let n=t.querySelector(`[data-index="${d.current}"]`);n!==null&&t.scrollTo({top:n.offsetTop-t.clientHeight/2+n.offsetHeight/2,behavior:e})};(0,F.useEffect)(()=>{t!==`lyrics`||l.current||x(`smooth`)},[h,t]),(0,F.useEffect)(()=>()=>{u.current!==null&&window.clearTimeout(u.current)},[]);let S=()=>{l.current=!0,u.current!==null&&window.clearTimeout(u.current),u.current=window.setTimeout(()=>{l.current=!1,x(`auto`)},3e3)},C=()=>{t!==`lyrics`&&!e.playing&&Sr()&&n(`lyrics`),kr()},w=t=>{i(null),Pr(Number(t)/100*e.duration)},T=r===null?e.progress:r*e.duration;return(0,L.jsxs)(`div`,{ref:s,className:`music-player-widget relative w-full transition-all duration-300`,children:[(0,L.jsxs)(`div`,{className:`mb-2 flex items-center gap-2 px-1`,children:[(0,L.jsx)(`div`,{className:`group relative h-14 w-14 shrink-0`,children:(0,L.jsxs)(`div`,{className:`bg-primary/10 relative z-10 flex h-full w-full items-center justify-center overflow-hidden rounded-full border-2 border-white shadow-lg dark:border-neutral-700`,children:[(0,L.jsx)(J,{name:`music`,size:24,className:`text-primary absolute opacity-40`,"aria-hidden":`true`}),f!==void 0&&f.cover!==``?(0,L.jsx)(X,{src:f.cover,alt:`${f.name} - ${f.artist}`,width:56,height:56,loading:`lazy`,className:q(`music-cover relative z-10 h-full w-full object-cover transition-opacity duration-300`,_?`opacity-100`:`opacity-0`,`animate-spin-slow`,!e.playing&&`music-cover-paused`),onLoad:()=>{o(g)}},g):null]})}),(0,L.jsxs)(`div`,{className:`flex min-w-0 flex-1 flex-col`,children:[(0,L.jsxs)(`div`,{className:`flex items-center justify-between gap-2 overflow-hidden`,children:[(0,L.jsx)(`div`,{className:`relative min-w-0 flex-1 overflow-hidden`,children:(0,L.jsx)(`h3`,{className:`music-title truncate text-base leading-tight font-bold text-neutral-800 dark:text-neutral-100`,title:y,children:y})}),(0,L.jsx)(`button`,{type:`button`,className:q(`btn-lrc-toggle shrink-0 transform p-0.5 pr-2 transition-all duration-300 hover:text-(--primary) active:scale-95`,t===`lyrics`?`text-primary`:`text-neutral-400`),title:H(V.musicLyrics),"aria-label":H(V.musicLyrics),"aria-pressed":t===`lyrics`,onClick:()=>{n(e=>e===`lyrics`?`none`:`lyrics`)},children:t===`lyrics`?(0,L.jsx)(J,{name:`subtitles`,size:20,"aria-hidden":`true`}):(0,L.jsx)(J,{name:`subtitles-off`,size:20,"aria-hidden":`true`})})]}),(0,L.jsx)(`div`,{className:`min-w-0 overflow-hidden`,children:(0,L.jsx)(`p`,{className:`music-artist truncate text-xs font-medium text-neutral-500 dark:text-neutral-400`,title:b,children:b})}),(0,L.jsxs)(`div`,{className:`flex h-5 items-center gap-3 text-neutral-400`,children:[(0,L.jsxs)(`div`,{className:`flex h-full shrink-0 items-center gap-1 font-mono text-[10px]`,"aria-live":`polite`,children:[(0,L.jsx)(`span`,{className:`current-time`,children:or(T)}),(0,L.jsx)(`span`,{className:`opacity-50`,"aria-hidden":`true`,children:`/`}),(0,L.jsx)(`span`,{className:`total-time`,children:or(e.duration)})]}),(0,L.jsxs)(`div`,{className:`ml-auto flex h-full items-center gap-1 bg-transparent`,children:[(0,L.jsx)(`button`,{type:`button`,className:`btn-mute flex items-center rounded-md p-0.5 transition-colors hover:text-(--primary)`,title:H(V.musicVolume),"aria-label":H(V.musicVolume),"aria-pressed":e.muted,onClick:Nr,children:e.muted||e.volume===0?(0,L.jsx)(J,{name:`volume-off`,size:18,"aria-hidden":`true`}):(0,L.jsx)(J,{name:`volume`,size:18,"aria-hidden":`true`})}),(0,L.jsx)(`div`,{className:`flex w-16 items-center transition-all duration-300 ease-out`,children:(0,L.jsxs)(`div`,{className:`vol-container group relative h-1 w-full rounded-full bg-neutral-300/50 dark:bg-neutral-500/40`,children:[(0,L.jsx)(`div`,{className:`vol-bar pointer-events-none absolute top-0 left-0 h-full rounded-full bg-(--primary) transition-[width] duration-100`}),(0,L.jsx)(`div`,{className:`vol-thumb pointer-events-none absolute top-1/2 -mt-1.5 -ml-1.5 h-3 w-3 scale-0 rounded-full bg-(--primary) shadow-sm ring-2 ring-white transition-transform duration-200 group-focus-within:scale-100 group-hover:scale-100 dark:ring-neutral-800`}),(0,L.jsx)(`input`,{type:`range`,min:0,max:100,step:1,value:Math.round(m),"aria-label":H(V.musicVolume),className:`absolute inset-x-0 -top-2 h-8 w-full cursor-pointer opacity-0`,onChange:e=>{Mr(Number(e.target.value)/100)}})]})})]})]})]})]}),(0,L.jsx)(`div`,{className:`px-1`,children:(0,L.jsxs)(`div`,{className:`progress-container group relative mt-2 mb-2 h-1 w-full rounded-full bg-neutral-300/60 dark:bg-neutral-500/40`,children:[(0,L.jsx)(`div`,{className:q(`progress-bar pointer-events-none absolute top-0 left-0 h-full rounded-full bg-(--primary)`,r===null?`transition-[width] duration-100`:``)}),(0,L.jsx)(`div`,{className:q(`progress-thumb pointer-events-none absolute top-1/2 -mt-1.5 -ml-1.5 h-3 w-3 rounded-full bg-(--primary) shadow-sm ring-2 ring-white transition-transform duration-200 group-focus-within:scale-100 group-hover:scale-100 dark:ring-neutral-800`,r===null?`scale-0`:`scale-100`)}),(0,L.jsx)(`input`,{type:`range`,min:0,max:100,step:.1,value:Math.min(100,Math.max(0,p)),"aria-label":H(V.musicProgress),className:`absolute inset-x-0 -top-2 h-8 w-full cursor-pointer opacity-0`,onChange:e=>{i(Number(e.target.value)/100)},onPointerUp:e=>{w(e.currentTarget.value)},onPointerCancel:()=>{i(null)},onKeyUp:e=>{w(e.currentTarget.value)},onBlur:e=>{r!==null&&w(e.currentTarget.value)}})]})}),(0,L.jsxs)(`div`,{className:`flex items-center justify-between px-1 py-1.5 select-none`,children:[(0,L.jsx)(`button`,{type:`button`,className:q(`btn-repeat transform p-2 transition-colors active:scale-95`,e.mode===`list`?`text-neutral-300 hover:text-(--primary) dark:text-neutral-600`:`text-primary`),title:H(V.musicPlayMode),"aria-label":H(V.musicPlayMode),onClick:jr,children:e.mode===`one`?(0,L.jsx)(J,{name:`repeat-one`,size:20,"aria-hidden":`true`}):e.mode===`random`?(0,L.jsx)(J,{name:`shuffle`,size:20,"aria-hidden":`true`}):(0,L.jsx)(J,{name:`repeat`,size:20,"aria-hidden":`true`})}),(0,L.jsx)(`button`,{type:`button`,className:`btn-prev transform p-2 text-neutral-600 transition-colors hover:text-(--primary) active:scale-95 dark:text-neutral-300`,title:H(V.musicPrev),"aria-label":H(V.musicPrev),onClick:Or,children:(0,L.jsx)(J,{name:`skip-back`,size:30,"aria-hidden":`true`})}),(0,L.jsx)(`button`,{type:`button`,className:q(`btn-play flex h-12 w-12 transform items-center justify-center rounded-full transition-all duration-300`,e.playing?`bg-(--primary) text-white hover:brightness-110`:`bg-(--btn-regular-bg) text-(--primary) hover:bg-(--btn-regular-bg-hover) active:bg-(--btn-regular-bg-active)`),title:e.playing?H(V.musicPause):H(V.musicPlay),"aria-label":e.playing?H(V.musicPause):H(V.musicPlay),onClick:C,children:e.playing?(0,L.jsx)(J,{name:`pause`,size:30,variant:`solid`,"aria-hidden":`true`}):(0,L.jsx)(J,{name:`play`,size:30,className:`ml-0.5`,variant:`solid`,"aria-hidden":`true`})}),(0,L.jsx)(`button`,{type:`button`,className:`btn-next transform p-2 text-neutral-600 transition-colors hover:text-(--primary) active:scale-95 dark:text-neutral-300`,title:H(V.musicNext),"aria-label":H(V.musicNext),onClick:()=>{Dr(!1)},children:(0,L.jsx)(J,{name:`skip-forward`,size:30,"aria-hidden":`true`})}),(0,L.jsx)(`button`,{type:`button`,className:q(`btn-drawer-toggle transform p-2 transition-all duration-300 hover:text-(--primary) active:scale-95`,t===`playlist`?`text-primary`:`text-neutral-400`),title:H(V.musicPlaylist),"aria-label":H(V.musicPlaylist),"aria-pressed":t===`playlist`,onClick:()=>{n(e=>e===`playlist`?`none`:`playlist`)},children:(0,L.jsx)(J,{name:`playlist`,size:20,"aria-hidden":`true`})})]}),(0,L.jsx)(`div`,{className:q(`lrc-drawer grid transition-all duration-300 ease-[cubic-bezier(0.4,0,0.2,1)]`,t===`lyrics`?`grid-rows-[1fr] opacity-100`:`grid-rows-[0fr] opacity-0`),children:(0,L.jsx)(`div`,{className:`min-h-0 overflow-hidden`,children:(0,L.jsx)(`div`,{className:`mx-1 mt-2 border-t border-neutral-100 pt-2 dark:border-white/5`,children:(0,L.jsx)(`div`,{ref:c,className:`lrc-container custom-scrollbar flex h-48 flex-col items-center gap-2 overflow-y-auto scroll-smooth p-4 py-24 text-center`,onWheel:S,onTouchStart:S,children:e.lyricsStatus===`loading`?(0,L.jsx)(`div`,{className:`py-10 text-sm text-neutral-400`,children:H(V.musicLoadingLyrics)}):e.lyricsStatus===`error`?(0,L.jsx)(`div`,{className:`py-10 text-sm text-neutral-400`,children:H(V.musicFailedLyrics)}):e.lyrics.length===0?(0,L.jsx)(`div`,{className:`py-10 text-sm text-neutral-400`,children:H(V.musicNoLyrics)}):e.lyrics.map((e,t)=>(0,L.jsx)(zr,{line:e,index:t,active:t===h,onSeek:()=>{Pr(e.at)}},`${t}-${e.at}`))})})})}),(0,L.jsx)(`div`,{className:q(`playlist-drawer grid transition-all duration-300 ease-[cubic-bezier(0.4,0,0.2,1)]`,t===`playlist`?`grid-rows-[1fr] opacity-100`:`grid-rows-[0fr] opacity-0`),children:(0,L.jsx)(`div`,{className:`min-h-0 overflow-hidden`,children:(0,L.jsx)(`div`,{className:`mx-1 mt-2 border-t border-neutral-100 pt-2 dark:border-white/5`,children:(0,L.jsx)(`div`,{className:`playlist-container custom-scrollbar relative max-h-48 overflow-y-auto pr-1 pb-1`,children:e.tracks.map((t,n)=>{let r=n===e.index;return(0,L.jsxs)(`button`,{type:`button`,"aria-current":r?`true`:void 0,"aria-label":`${t.name} - ${t.artist}`,className:q(`playlist-item group flex w-full cursor-pointer items-center gap-3 rounded-lg p-2 text-left transition-colors hover:bg-neutral-50 dark:hover:bg-white/5`,r&&`bg-neutral-100 dark:bg-white/10`),onClick:()=>{Ar(n)},children:[(0,L.jsxs)(`div`,{className:`relative h-8 w-8 shrink-0 overflow-hidden rounded-md bg-neutral-200 dark:bg-neutral-700`,children:[t.cover===``?null:(0,L.jsx)(X,{src:t.cover,alt:``,width:32,height:32,loading:`lazy`,className:`item-cover h-full w-full object-cover`}),(0,L.jsx)(`div`,{className:q(`item-active-overlay bg-primary/20 absolute inset-0 items-center justify-center`,r?`flex`:`hidden`),children:e.playing?(0,L.jsxs)(`div`,{className:`eq-bars flex h-3.5 items-end gap-[2px]`,children:[(0,L.jsx)(`span`,{className:`eq-bar h-1 w-[3px] rounded-sm bg-(--primary)`}),(0,L.jsx)(`span`,{className:`eq-bar h-1 w-[3px] rounded-sm bg-(--primary)`}),(0,L.jsx)(`span`,{className:`eq-bar h-1 w-[3px] rounded-sm bg-(--primary)`})]}):(0,L.jsx)(J,{name:`play`,size:14,className:`text-primary`,variant:`solid`,"aria-hidden":`true`})})]}),(0,L.jsxs)(`div`,{className:`min-w-0 flex-1`,children:[(0,L.jsx)(`div`,{className:q(`item-title truncate text-xs font-bold transition-colors`,r?`text-primary`:`text-neutral-700 group-hover:text-(--primary) dark:text-neutral-200`),children:t.name}),(0,L.jsx)(`div`,{className:`item-artist truncate text-[10px] text-neutral-400`,children:t.artist})]})]},`${n}-${t.url}`)})})})})}),(0,L.jsx)(`div`,{className:q(`music-loading absolute inset-0 z-20 flex flex-col items-center justify-center rounded-xl bg-white/60 backdrop-blur-[2px] transition-opacity duration-300 dark:bg-[#1e1e1e]/60`,v?``:`pointer-events-none opacity-0`),"aria-busy":`true`,"aria-hidden":`true`,children:(0,L.jsx)(`div`,{className:`text-primary h-8 w-8 animate-spin`,children:(0,L.jsx)(J,{name:`sync`,size:30,"aria-hidden":`true`})})})]})}function zr({line:e,index:t,active:n,onSeek:r}){let i=/^(.*?)\s*[(（](.+?)[)）]\s*$/.exec(e.text);return(0,L.jsx)(`button`,{type:`button`,"aria-current":n?`true`:void 0,"aria-label":e.text,"data-index":t,className:q(`lrc-line flex flex-col items-center justify-center py-1 leading-snug transition-all duration-300`,n?`text-primary text-base font-bold`:`text-sm text-neutral-400 hover:text-(--primary)`),onClick:r,children:i?.[1]!==void 0&&i[2]!==void 0?(0,L.jsxs)(L.Fragment,{children:[(0,L.jsx)(`span`,{className:`lrc-orig transition-all duration-300`,children:i[1].trim()}),(0,L.jsx)(`span`,{className:q(`lrc-trans mt-0.5 text-xs font-normal tracking-wide transition-all duration-300`,n?`opacity-90`:`opacity-70`),children:i[2].trim()})]}):e.text})}function Br(){return(0,L.jsx)(Z,{title:H(V.music),children:(0,L.jsx)(Rr,{})})}var Vr=[`[animation-delay:0ms]`,`[animation-delay:50ms]`,`[animation-delay:100ms]`,`[animation-delay:150ms]`,`[animation-delay:200ms]`,`[animation-delay:250ms]`,`[animation-delay:300ms]`,`[animation-delay:350ms]`,`[animation-delay:400ms]`,`[animation-delay:450ms]`];function Hr(e){let t=Y(),n=t.reduce((e,t)=>{let n=t.content.replace(/```[\s\S]*?```/g,``).replace(/`[^`]*`/g,``),r=n.match(/[\u4e00-\u9fa5]/g)?.length??0,i=n.match(/[a-zA-Z]/g)?.length??0;return e+r+i},0),r=t.flatMap(e=>[e.publishedAt,e.updatedAt]).filter(e=>typeof e==`string`).sort((e,t)=>Date.parse(t)-Date.parse(e))[0]??``;return{posts:t,tags:ln(),categories:un(),totalWords:n,lastActivity:r,toc:e}}function Ur(e,t,n){switch(e.type){case`profile`:return(0,L.jsx)(In,{});case`announcement`:return(0,L.jsx)(Ln,{});case`music`:return(0,L.jsx)(Br,{});case`categories`:return(0,L.jsx)(Bn,{categories:t.categories,collapseThreshold:e.specificConfig?.collapseThreshold??5});case`tags`:return(0,L.jsx)(Rn,{tags:t.tags,collapseThreshold:e.specificConfig?.collapseThreshold??10});case`dynamic`:return(0,L.jsx)(Vn,{limit:e.specificConfig?.dynamic?.limit??2});case`stats`:return(0,L.jsx)(zn,{totalPosts:t.posts.length,categoryCount:t.categories.length,tagCount:t.tags.length,totalWords:t.totalWords,lastActivity:t.lastActivity});case`siteInfo`:return(0,L.jsx)(Hn,{});case`calendar`:return(0,L.jsx)(Xn,{posts:t.posts,showTitle:e.showTitle!==!1});case`sidebarToc`:return t.toc??null;case`advertisement`:return(0,L.jsx)($n,{config:e.specificConfig?.ad,showTitle:e.showTitle!==!1,instanceId:`advertisement-${n}`});default:return null}}function Wr(e,t){return!(`showOnPostPage`in e&&e.showOnPostPage===!1&&t||`hideOnNonPostPage`in e&&e.hideOnNonPostPage===!0&&!t)}function Gr(e,t){return q(`onload-animation`,`showOnPostPage`in e&&e.showOnPostPage===!1&&`widget-hide-on-post`,`showOnPostPage`in e&&e.showOnPostPage===!1&&t&&`hidden`,`hideOnNonPostPage`in e&&e.hideOnNonPostPage===!0&&`widget-hide-on-non-post`,`hideOnNonPostPage`in e&&e.hideOnNonPostPage===!0&&!t&&`hidden`)}function Kr({side:e,toc:t}){let{pathname:n}=c(),r=Rt(n),i=Hr(t),a=(e===`left`?zt.leftComponents:e===`right`?zt.rightComponents:zt.mobileBottomComponents).filter(e=>e.enable);if(e===`bottom`)return a.length===0?null:(0,L.jsx)(`div`,{className:`flex w-full flex-col gap-4`,children:a.map((e,t)=>(0,L.jsx)(`div`,{className:q(`flex w-full flex-col`,Gr(e,r),Vr[t%Vr.length]),children:Ur(e,i,`bottom-${t}`)},`${e.type}-${t}`))});let o=a.filter(e=>`position`in e),s=o.filter(e=>e.position===`top`),l=o.filter(e=>e.position===`sticky`);if(s.length===0&&l.length===0)return null;let u=s.some(e=>Wr(e,r));return(0,L.jsxs)(L.Fragment,{children:[s.length>0?(0,L.jsx)(`div`,{className:q(`flex w-full flex-col gap-4`,u&&`mb-4`),children:s.map((t,n)=>(0,L.jsx)(`div`,{className:q(`flex w-full flex-col`,Gr(t,r),Vr[n%Vr.length]),children:Ur(t,i,`${e}-top-${n}`)},`${t.type}-${n}`))}):null,l.length>0?(0,L.jsx)(`div`,{id:`${e}-sidebar-sticky`,className:q(`mt-0 flex w-full flex-col gap-4`,`sticky`,u?`top-4`:`top-0`),children:l.map((t,n)=>(0,L.jsx)(`div`,{className:q(`flex w-full flex-col`,Gr(t,r),Vr[(s.length+n)%Vr.length]),children:Ur(t,i,`${e}-sticky-${n}`)},`${t.type}-${n}`))}):null]})}function qr(){return(0,L.jsx)(Kr,{side:`left`})}var Jr={enable:!0,selected:[`system`],bannerTitleFont:`--font-fraunces`,bannerSubtitleFont:`--font-inter`,navbarTitleFont:``,codeFont:`--font-jetbrains-mono`,subsetFonts:{"--font-noto-sans-sc":{extraChars:``}}};function Yr(e=Jr){return e.enable?[...new Set([e.bannerTitleFont,e.bannerSubtitleFont,e.navbarTitleFont,e.codeFont].map(e=>e.trim()).filter(e=>e!==``))]:[]}var Xr=Yr(Jr);function Zr(){return(0,F.useEffect)(()=>{document.fonts.ready.then(()=>{document.dispatchEvent(new CustomEvent(`fontsLoaded`))})},[]),(0,L.jsx)(`div`,{id:`font-setup`,"data-fonts":Xr.join(` `),className:`hidden`})}var Qr=`github-card:`,$r=864e5,ei=5e3,ti=new Map;function ni(){return performance.timeOrigin+performance.now()}function ri(e){return!Number.isFinite(e)||e<=0?`0`:e<1e3?String(e):`${(e/1e3).toFixed(+(e<1e4))}k`}function ii(e){try{let t=window.localStorage.getItem(`${Qr}${e}`);if(t===null)return null;let n=JSON.parse(t);return typeof n.savedAt!=`number`||ni()-n.savedAt>$r?null:n.data}catch{return null}}function ai(e,t){try{window.localStorage.setItem(`${Qr}${e}`,JSON.stringify({savedAt:ni(),data:t}))}catch{}}function oi(e){return{stars:e.stargazers_count??0,forks:e.forks_count??0,description:e.description??``,license:e.license?.spdx_id??`no-license`,avatarUrl:e.owner?.avatar_url??``}}function si(e){let t=ii(e);if(t!==null)return Promise.resolve(t);let n=ti.get(e);if(n!==void 0)return n;let r=fetch(`https://api.github.com/repos/${e}`,{headers:{Accept:`application/vnd.github+json`},signal:AbortSignal.timeout(ei)}).then(async t=>{if(!t.ok)return null;let n=oi(await t.json());return ai(e,n),n}).catch(()=>null).finally(()=>{ti.delete(e)});return ti.set(e,r),r}function ci(e,t,n){let r=e.querySelector(t);r!==null&&(r.textContent=n)}function li(e,t){e.classList.remove(`fetch-error`,`fetch-waiting`),ci(e,`.gc-stars`,ri(t.stars)),ci(e,`.gc-forks`,ri(t.forks)),ci(e,`.gc-license`,t.license),t.description!==``&&ci(e,`.gc-description`,t.description);let n=e.querySelector(`.gc-avatar`);n!==null&&t.avatarUrl!==``&&(n.style.backgroundImage=`url("${t.avatarUrl}")`,n.style.backgroundColor=`transparent`)}function ui(){let{pathname:e}=c();(0,F.useEffect)(()=>{let e=Array.from(document.querySelectorAll(`a.card-github[data-repo]`));if(e.length===0)return;let t=!1,n=new Set(e.map(e=>e.dataset.repo).filter(e=>e!==void 0&&e!==``));for(let r of n)si(r).then(n=>{if(!(t||n===null))for(let t of e)t.dataset.repo===r&&li(t,n)});return()=>{t=!0}},[e])}function di({children:e,position:t=`right`}){return(0,L.jsx)(`div`,{id:`${t}-sidebar`,className:`flex w-full flex-col pt-0`,children:e})}function fi({children:e}){let[t,n]=(0,F.useState)(!1);return(0,F.useEffect)(()=>{if(!t)return;let e=document.body.style.overflow;document.body.style.overflow=`hidden`;let r=e=>{e.key===`Escape`&&n(!1)};return window.addEventListener(`keydown`,r),()=>{document.body.style.overflow=e,window.removeEventListener(`keydown`,r)}},[t]),(0,L.jsxs)(`div`,{className:`md:hidden`,children:[(0,L.jsxs)(`button`,{type:`button`,"aria-expanded":t,className:`card-base text-deep flex w-full items-center justify-center gap-2 py-3 text-sm font-medium`,onClick:()=>{n(!0)},children:[(0,L.jsx)(J,{name:`list`,size:16,className:`text-primary`}),`显示侧栏组件`]}),t?(0,L.jsxs)(`div`,{className:`fixed inset-0 z-[60]`,role:`dialog`,"aria-modal":`true`,"aria-label":`侧栏组件`,children:[(0,L.jsx)(`button`,{type:`button`,"aria-label":`关闭侧栏组件`,className:`absolute inset-0 cursor-default bg-black/40`,onClick:()=>{n(!1)}}),(0,L.jsxs)(`div`,{className:`bg-card ring-line absolute inset-x-0 bottom-0 flex max-h-[80dvh] flex-col rounded-t-2xl shadow-2xl ring-1`,children:[(0,L.jsxs)(`header`,{className:`border-divider flex items-center justify-between border-b px-4 py-3`,children:[(0,L.jsx)(`h2`,{className:`text-deep text-sm font-semibold`,children:`侧栏组件`}),(0,L.jsx)(`button`,{type:`button`,"aria-label":`关闭侧栏组件`,className:`btn-plain size-8`,onClick:()=>{n(!1)},children:(0,L.jsx)(J,{name:`close`,size:16})})]}),(0,L.jsx)(`div`,{className:`flex flex-col gap-4 overflow-y-auto p-4 pb-8`,children:e})]})]}):null]})}var pi=`<!--
	You can use HTML to customize the footer content in this file; any markup is
	supported.
-->
`.replace(/<!--[\s\S]*?-->/g,``).trim(),mi=new Date().getFullYear();function hi(){return(0,L.jsxs)(`footer`,{className:`site-footer pointer-events-auto pb-4 md:pb-6`,children:[(0,L.jsx)(`div`,{className:`mx-32 mt-10 mb-5 border-t border-dashed border-black/10 transition dark:border-white/15`}),(0,L.jsx)(`div`,{className:`flex flex-col items-center justify-center px-6 transition`,children:(0,L.jsxs)(`div`,{className:`text-50 text-center text-sm transition`,children:[(0,L.jsx)(`div`,{className:`mb-2`,children:pi===``?null:(0,L.jsx)(`div`,{dangerouslySetInnerHTML:{__html:pi}})}),(0,L.jsxs)(`div`,{className:`mx-0.5 my-2.5 flex flex-wrap justify-center gap-x-2 gap-y-2.5`,children:[`© `,(0,L.jsx)(`span`,{id:`copyright-year`,children:mi}),R.author.name,`. All Rights Reserved.`,(0,L.jsx)(`span`,{"aria-hidden":`true`,children:`/`}),(0,L.jsx)(`a`,{className:`link font-medium text-(--primary) transition`,href:B(`/rss.xml`),target:`_blank`,rel:`noreferrer`,children:`RSS`}),(0,L.jsx)(`span`,{"aria-hidden":`true`,children:`/`}),(0,L.jsx)(`a`,{className:`link font-medium text-(--primary) transition`,href:B(`/atom.xml`),target:`_blank`,rel:`noreferrer`,children:`Atom`}),(0,L.jsx)(`span`,{"aria-hidden":`true`,children:`/`}),(0,L.jsx)(`a`,{className:`link font-medium text-(--primary) transition`,href:B(`/sitemap.xml`),target:`_blank`,rel:`noreferrer`,children:`Sitemap`})]}),(0,L.jsxs)(`div`,{className:`mx-0.5 my-2.5 flex flex-wrap justify-center gap-x-2 gap-y-2.5`,children:[(0,L.jsx)(`span`,{children:`Powered by`}),(0,L.jsx)(`a`,{className:`link font-medium text-(--primary) transition`,href:`https://reactrouter.com`,target:`_blank`,rel:`noreferrer`,children:`React Router`})]})]})})]})}var gi={文章:V.navArticles,社交:V.navSocial,我的:V.navMine,关于:V.navAbout,链接:V.navLinks,主页:V.home,归档:V.archive,分类:V.categories,标签:V.tags,系列:V.series,友链:V.friends,留言:V.guestbook,留言板:V.guestbook,动态:V.dynamic,项目:V.projects,相册:V.gallery,书签导航:V.booknav,哔哩哔哩:V.bilibili,番组计划:V.bangumi,打赏:V.sponsor,赞助:V.sponsor,关于我:V.about,搜索:V.search};function _i(e){let t=gi[e];return t===void 0?e:H(t)}function vi(e){return e.map(e=>{if(typeof e!=`object`||!e)return e;let t=e,n={...t};return typeof t.label==`string`&&(n.label=_i(t.label)),typeof t.name==`string`&&(n.name=_i(t.name)),Array.isArray(t.children)&&(n.children=vi(t.children)),n})}var yi=[{value:`appearance`,label:H(V.settingsTabAppearance),icon:`palette`},{value:`wallpaper`,label:H(V.settingsTabWallpaper),icon:`image`}],bi={banner:`image`,fullscreen:`layers`,overlay:`grid`,none:`close`},xi=[{value:`list`,label:H(V.postListLayoutList)},{value:`grid`,label:H(V.postListLayoutGrid)}],Si=[{value:`classic`,label:H(V.fullscreenClassicLayout)},{value:`hero`,label:H(V.fullscreenHeroLayout)}],Ci=(0,L.jsx)(`svg`,{className:`h-4 w-4`,fill:`currentColor`,viewBox:`0 0 24 24`,"aria-hidden":`true`,children:(0,L.jsx)(`path`,{d:`M4 6h16v2H4zm0 5h16v2H4zm0 5h16v2H4z`})}),wi=(0,L.jsx)(`svg`,{className:`h-4 w-4`,fill:`currentColor`,viewBox:`0 0 24 24`,"aria-hidden":`true`,children:(0,L.jsx)(`path`,{d:`M3 3h7v7H3V3zm0 11h7v7H3v-7zm11-11h7v7h-7V3zm0 11h7v7h-7v-7z`})});function Ti(){let{hue:e,setHue:t,cardBorder:n,setCardBorder:r,cardFollowHue:i,setCardFollowHue:a,postLayout:o,setPostLayout:s,resetPostLayout:c,wallpaperMode:l,setWallpaperMode:u,fullscreenLayout:d,setFullscreenLayout:f,overlayOpacity:p,setOverlayOpacity:m,overlayBlur:h,setOverlayBlur:g,overlayCardOpacity:_,setOverlayCardOpacity:v,bannerTitle:y,setBannerTitle:b,wallpaperRotate:x,setWallpaperRotate:S,bannerWaves:C,setBannerWaves:w,bannerGradient:T,setBannerGradient:E}=It(),[D,O]=(0,F.useState)(!1),[k,A]=(0,F.useState)(`appearance`),j=(0,F.useRef)(null),M=(0,F.useRef)(null);(0,F.useEffect)(()=>{if(!D)return;let e=e=>{e.key===`Escape`&&(O(!1),M.current?.focus())},t=e=>{let t=e.target;!j.current?.contains(t)&&!M.current?.contains(t)&&O(!1)};return document.addEventListener(`keydown`,e),document.addEventListener(`pointerdown`,t),()=>{document.removeEventListener(`keydown`,e),document.removeEventListener(`pointerdown`,t)}},[D]);let ee=n===W.cardBorder&&i===W.cardFollowHue,te=p===W.overlayOpacity&&h===W.overlayBlur&&_===W.overlayCardOpacity,ne=y===W.bannerTitle&&x===W.wallpaperRotate&&C===W.bannerWaves&&T===W.bannerGradient,re=l===`overlay`||l===`fullscreen`&&d===`hero`,N=l===`banner`||l===`fullscreen`&&d===`classic`;return(0,L.jsxs)(`div`,{children:[(0,L.jsx)(`button`,{ref:M,type:`button`,id:`display-settings-switch`,"aria-controls":`display-setting`,"aria-expanded":D,"aria-label":`Display Settings`,className:q(`btn-plain scale-animation h-11 w-11 rounded-lg active:scale-90`,D&&`text-primary`),onClick:()=>{O(e=>!e)},children:(0,L.jsx)(J,{name:`palette`,className:`text-[1.25rem]`})}),(0,L.jsxs)(`div`,{ref:j,id:`display-setting`,role:`dialog`,"aria-label":`显示设置`,"aria-hidden":!D,inert:!D,"data-floating-panel":!0,"data-floating-panel-trigger":`display-settings-switch`,className:q(`float-panel custom-scrollbar absolute right-4 z-50 max-h-[80vh] w-80 overflow-y-auto px-3 pt-0 pb-3 transition-all`,!D&&`float-panel-closed`),children:[(0,L.jsx)(`div`,{className:`mb-3 flex gap-1 border-b border-black/5 pt-3 pb-1 dark:border-white/10`,role:`tablist`,"aria-label":`设置分类`,children:yi.map(e=>(0,L.jsxs)(`button`,{type:`button`,role:`tab`,"aria-selected":k===e.value,className:q(`focus-ring-inset flex min-w-0 flex-1 flex-col items-center justify-center gap-1.5 rounded-lg px-2 py-2 text-xs font-medium transition-colors`,k===e.value?`bg-(--btn-plain-bg-hover) text-(--primary)`:`text-gray-500 hover:bg-(--btn-plain-bg-hover) hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-300`),onClick:()=>{A(e.value)},children:[(0,L.jsx)(J,{name:e.icon,className:`shrink-0 text-[1.5rem]`}),(0,L.jsx)(`span`,{className:`truncate`,children:e.label})]},e.value))}),k===`appearance`?(0,L.jsxs)(`div`,{role:`tabpanel`,"aria-label":H(V.settingsTabAppearance),children:[(0,L.jsx)(Ei,{title:H(V.themeColor),isDefault:e===W.hue,onReset:()=>{t(W.hue)},children:(0,L.jsx)(`span`,{id:`hueValue`,className:`flex items-center justify-center rounded-md bg-(--btn-regular-bg) font-bold text-(--btn-content) transition`,children:e})}),(0,L.jsx)(`div`,{className:`hue-slider-shell h-6 w-full rounded-md bg-(--btn-regular-bg) px-1 select-none`,children:(0,L.jsx)(`input`,{id:`colorSlider`,type:`range`,min:0,max:360,step:5,value:e,"aria-label":H(V.themeColor),className:`slider w-full`,onChange:e=>{t(Number(e.target.value))}})}),(0,L.jsx)(Ei,{title:H(V.postListLayout),isDefault:o===kt(),onReset:c}),(0,L.jsx)(`div`,{className:`flex gap-2`,children:xi.map(e=>(0,L.jsxs)(`button`,{type:`button`,"aria-label":e.label,"aria-pressed":o===e.value,title:e.label,className:q(`btn-regular relative flex flex-1 items-center justify-center gap-2 overflow-hidden rounded-md px-3 py-2 transition-all active:scale-95`,o===e.value?`bg-(--btn-regular-bg-hover)`:`opacity-60`),onClick:()=>{s(e.value)},children:[e.value===`list`?Ci:wi,(0,L.jsx)(`span`,{className:`text-xs font-medium`,children:e.label})]},e.value))}),(0,L.jsx)(Ei,{title:H(V.cardSettings),isDefault:ee,onReset:()=>{r(W.cardBorder),a(W.cardFollowHue)}}),(0,L.jsxs)(`div`,{className:`space-y-1`,children:[(0,L.jsx)(Oi,{icon:`grid`,label:H(V.cardBorder),checked:n,onChange:r}),(0,L.jsx)(Oi,{icon:`palette`,label:H(V.cardFollowTheme),checked:i,onChange:a})]})]}):k===`wallpaper`?(0,L.jsxs)(`div`,{role:`tabpanel`,"aria-label":H(V.settingsTabWallpaper),children:[(0,L.jsx)(Ei,{title:H(V.wallpaperMode),isDefault:l===W.wallpaperMode,onReset:()=>{u(W.wallpaperMode)}}),(0,L.jsx)(`div`,{className:`grid grid-cols-2 gap-2`,children:pt.map(e=>(0,L.jsxs)(`button`,{type:`button`,"aria-pressed":l===e.value,className:q(`btn-regular relative flex items-center justify-center gap-2 overflow-hidden rounded-md px-3 py-2 transition-all active:scale-95`,l===e.value?`bg-(--btn-regular-bg-hover)`:`opacity-60`),onClick:()=>{u(e.value)},children:[(0,L.jsx)(J,{name:bi[e.value],className:`shrink-0 text-[1.25rem]`}),(0,L.jsx)(`span`,{className:`text-xs font-medium`,children:e.label})]},e.value))}),l===`fullscreen`?(0,L.jsxs)(L.Fragment,{children:[(0,L.jsx)(Ei,{title:H(V.fullscreenLayout),isDefault:d===W.fullscreenLayout,onReset:()=>{f(W.fullscreenLayout)}}),(0,L.jsx)(`div`,{className:`grid grid-cols-2 gap-2`,children:Si.map(e=>(0,L.jsxs)(`button`,{type:`button`,"aria-pressed":d===e.value,className:q(`btn-regular relative flex items-center justify-center gap-2 overflow-hidden rounded-md px-3 py-2 transition-all active:scale-95`,d===e.value?`bg-(--btn-regular-bg-hover)`:`opacity-60`),onClick:()=>{f(e.value)},children:[(0,L.jsx)(J,{name:e.value===`classic`?`image`:`layers`,className:`shrink-0 text-[1.25rem]`}),(0,L.jsx)(`span`,{className:`text-xs font-medium`,children:e.label})]},e.value))})]}):null,re?(0,L.jsxs)(L.Fragment,{children:[(0,L.jsx)(Ei,{title:H(V.overlaySettings),isDefault:te,onReset:()=>{m(W.overlayOpacity),g(W.overlayBlur),v(W.overlayCardOpacity)}}),(0,L.jsxs)(`div`,{className:`space-y-2`,children:[l===`fullscreen`?null:(0,L.jsx)(Di,{label:H(V.overlayOpacity),min:20,max:100,step:1,value:Math.round(p*100),display:`${Math.round(p*100)}%`,onChange:e=>{m(e/100)}}),(0,L.jsx)(Di,{label:H(V.overlayBlur),min:0,max:20,step:.5,value:h,display:`${h.toFixed(1)}px`,onChange:g}),(0,L.jsx)(Di,{label:H(V.overlayCardOpacity),min:20,max:100,step:1,value:Math.round(_*100),display:`${Math.round(_*100)}%`,onChange:e=>{v(e/100)}})]})]}):null,N?(0,L.jsxs)(L.Fragment,{children:[(0,L.jsx)(Ei,{title:H(V.wallpaperSettings),isDefault:ne,onReset:()=>{b(W.bannerTitle),S(W.wallpaperRotate),w(W.bannerWaves),E(W.bannerGradient)}}),(0,L.jsxs)(`div`,{className:`space-y-1`,children:[(0,L.jsx)(Oi,{icon:`notes`,label:H(V.wallpaperTitle),checked:y,onChange:b}),(0,L.jsx)(Oi,{icon:`image`,label:H(V.wallpaperCarousel),checked:x,onChange:S}),l===`banner`||l===`fullscreen`&&d===`classic`?(0,L.jsxs)(L.Fragment,{children:[(0,L.jsx)(Oi,{icon:`shuffle`,label:H(V.wavesAnimation),checked:C,onChange:w}),(0,L.jsx)(Oi,{icon:`layers`,label:H(V.gradientTransition),checked:T,onChange:E})]}):null]})]}):null]}):null]})]})}function Ei({title:e,isDefault:t,onReset:n,children:r}){return(0,L.jsxs)(`h3`,{className:`section-title`,children:[e,(0,L.jsx)(`button`,{type:`button`,"aria-label":`Reset to Default`,"aria-hidden":t||void 0,disabled:t,className:q(`btn-regular rounded-md active:scale-90`,t&&`pointer-events-none opacity-0`),onClick:n,children:(0,L.jsx)(`span`,{className:`text-(--btn-content)`,children:(0,L.jsx)(J,{name:`sync`,className:`text-[0.75rem]`})})}),r]})}function Di({label:e,value:t,min:n,max:r,step:i,display:a,onChange:o}){let s=(0,F.useRef)(null);return(0,F.useEffect)(()=>{let e=s.current;e!==null&&e.style.setProperty(`--range-progress`,`${(t-n)/(r-n)*100}%`)},[t,n,r]),(0,L.jsxs)(`div`,{className:`rounded-md bg-(--btn-regular-bg) p-2`,children:[(0,L.jsxs)(`div`,{className:`mb-1 flex items-center justify-between`,children:[(0,L.jsx)(`span`,{className:`text-xs font-medium text-(--btn-content) opacity-80`,children:e}),(0,L.jsx)(`span`,{className:`text-xs text-(--btn-content)`,children:a})]}),(0,L.jsx)(`input`,{ref:s,type:`range`,min:n,max:r,step:i,value:t,"aria-label":e,className:`slider overlay-slider w-full`,onChange:e=>{o(Number(e.target.value))}})]})}function Oi({icon:e,label:t,checked:n,onChange:r}){return(0,L.jsxs)(`button`,{type:`button`,role:`switch`,"aria-checked":n,"aria-label":t,className:q(`btn-regular relative flex w-full items-center gap-3 overflow-hidden rounded-md px-3 py-2 text-left transition-all active:scale-95`,n&&`bg-(--btn-regular-bg-hover)`),onClick:()=>{r(!n)},children:[(0,L.jsx)(J,{name:e,className:`shrink-0 text-[1.25rem]`}),(0,L.jsx)(`span`,{className:`flex-1 text-sm`,children:t}),(0,L.jsx)(`span`,{className:q(`relative h-5 w-10 rounded-full transition-all duration-200`,n?`bg-(--primary)`:`bg-(--btn-regular-bg-active)`),children:(0,L.jsx)(`span`,{className:q(`absolute top-0.5 h-4 w-4 rounded-full bg-white shadow transition-all duration-200`,n?`left-5`:`left-0.5`)})})]})}var ki=vi([...R.navGroups]);function Ai({open:e,onClose:t}){let{pathname:n}=c(),[r,i]=(0,F.useState)(null);return(0,F.useEffect)(()=>{if(!e)return;document.body.classList.add(`menu-open`);let r=window.setTimeout(()=>i(Mi(n)),0),a=e=>{e.key===`Escape`&&t()};return document.addEventListener(`keydown`,a),()=>{window.clearTimeout(r),document.body.classList.remove(`menu-open`),document.removeEventListener(`keydown`,a)}},[e,n,t]),(0,L.jsx)(`div`,{id:`nav-menu-panel`,className:q(!e&&`float-panel-closed`),"data-floating-panel":``,"data-floating-panel-scroll-lock":``,inert:!e,"aria-hidden":!e,children:(0,L.jsxs)(`div`,{className:`mobile-menu-motion`,children:[(0,L.jsx)(`div`,{className:`mobile-menu-glass`,"aria-hidden":`true`}),(0,L.jsx)(`div`,{className:`mobile-menu-scrim`,"aria-hidden":`true`,onClick:t}),(0,L.jsxs)(`aside`,{className:`mobile-menu-drawer`,role:`dialog`,"aria-modal":`true`,"aria-label":`导航菜单`,children:[(0,L.jsxs)(`header`,{className:`mobile-menu-header`,children:[(0,L.jsx)(`span`,{className:`mobile-menu-title`,children:R.title}),(0,L.jsx)(`button`,{type:`button`,className:`mobile-menu-close`,"aria-label":`关闭菜单`,onClick:t,children:(0,L.jsx)(J,{name:`close`,className:`text-[1.5rem]`})})]}),(0,L.jsx)(`nav`,{className:`mobile-menu-list`,"aria-label":`移动端导航`,children:ki.map((e,a)=>`children`in e?(0,L.jsx)(`div`,{className:`mobile-menu-item-root`,children:(0,L.jsxs)(`div`,{className:`mobile-dropdown`,"data-expanded":r===e.label?`true`:`false`,children:[(0,L.jsxs)(`button`,{type:`button`,className:`mobile-menu-item`,"aria-expanded":r===e.label,"aria-controls":`mobile-submenu-${a}`,onClick:()=>{i(r===e.label?null:e.label)},children:[(0,L.jsx)(J,{name:e.icon,className:`mobile-menu-item-icon`,variant:`solid`}),(0,L.jsx)(`span`,{className:`mobile-menu-item-label`,children:e.label}),(0,L.jsx)(J,{name:`chevron-down`,className:`mobile-menu-item-arrow`})]}),(0,L.jsx)(`div`,{id:`mobile-submenu-${a}`,className:`mobile-submenu`,inert:r!==e.label,"aria-hidden":r!==e.label,children:e.children.map(e=>{let r=`external`in e&&e.external||!e.href.startsWith(`/`);return(0,L.jsxs)(`a`,{href:e.href,target:r?`_blank`:void 0,rel:r?`noopener noreferrer`:void 0,className:`mobile-menu-item`,"data-active":ji(n,e.href)?`true`:`false`,onClick:t,children:[(0,L.jsx)(J,{name:e.icon,className:`mobile-menu-item-icon`}),(0,L.jsx)(`span`,{className:`mobile-menu-item-label`,children:e.label}),r?(0,L.jsx)(J,{name:`fa7-solid:arrow-up-right-from-square`,className:`mobile-menu-item-external shrink-0 text-[0.9rem]`}):null]},e.label)})})]})},e.label):(0,L.jsx)(`div`,{className:`mobile-menu-item-root`,children:(0,L.jsxs)(`a`,{href:e.href,className:`mobile-menu-item`,"data-active":ji(n,e.href)?`true`:`false`,onClick:t,children:[(0,L.jsx)(J,{name:e.icon,className:`mobile-menu-item-icon`,variant:`solid`}),(0,L.jsx)(`span`,{className:`mobile-menu-item-label`,children:e.label}),e.href.startsWith(`http`)?(0,L.jsx)(J,{name:`fa7-solid:arrow-up-right-from-square`,className:`mobile-menu-item-external shrink-0 text-[0.9rem]`}):(0,L.jsx)(J,{name:`chevron-right`,className:`mobile-menu-item-arrow`})]})},e.label))})]})]})})}function ji(e,t){return t===`/`?e===`/`:e===t||e===t.replace(/\/$/,``)}function Mi(e){for(let t of R.navGroups)if(`children`in t&&t.children.some(t=>ji(e,t.href)))return t.label;return null}function Ni({open:e}){return(0,L.jsx)(`div`,{id:`music-nav-panel`,className:q(`float-panel absolute right-16 z-50 w-80 p-2 pt-4.5 transition-all`,e?``:`float-panel-closed`),"data-floating-panel":``,"data-floating-panel-trigger":`music-player-switch`,inert:!e,"aria-hidden":!e,children:(0,L.jsx)(Rr,{})})}function Pi(e){return e.toLowerCase().split(/\s+/).filter(Boolean)}function Fi(e,t){let n=0,r=e.indexOf(t);for(;r!==-1;)n+=1,r=e.indexOf(t,r+t.length);return n}function Ii(e,t,n=60){let r=e.text.toLowerCase(),i=-1;for(let e of t){let t=r.indexOf(e);t!==-1&&(i===-1||t<i)&&(i=t)}if(i===-1)return e.description;let a=Math.max(0,i-n),o=Math.min(e.text.length,i+n*2),s=a>0?`…`:``,c=o<e.text.length?`…`:``;return`${s}${e.text.slice(a,o).trim()}${c}`}function Li(e,t,n=20){let r=Pi(t);if(r.length===0)return[];let i=[];for(let t of e){let e=t.title.toLowerCase(),n=t.description.toLowerCase(),a=t.tags.join(` `).toLowerCase(),o=t.text.toLowerCase(),s=`${e} ${n} ${a} ${o}`;if(!r.every(e=>s.includes(e)))continue;let c=0;for(let t of r)e.includes(t)&&(c+=12),a.includes(t)&&(c+=6),n.includes(t)&&(c+=4),c+=Fi(o,t);i.push({...t,score:c,snippet:Ii(t,r)})}return i.sort((e,t)=>t.score-e.score||e.url.localeCompare(t.url)).slice(0,n)}function Ri(e,t){let n=Pi(t);if(n.length===0)return[{text:e,match:!1}];let r=e.toLowerCase(),i=[];for(let e of n){let t=r.indexOf(e);for(;t!==-1;)i.push([t,t+e.length]),t=r.indexOf(e,t+e.length)}if(i.length===0)return[{text:e,match:!1}];i.sort((e,t)=>e[0]-t[0]);let a=[];for(let e of i){let t=a.at(-1);t&&e[0]<=t[1]?t[1]=Math.max(t[1],e[1]):a.push([e[0],e[1]])}let o=[],s=0;for(let[t,n]of a)t>s&&o.push({text:e.slice(s,t),match:!1}),o.push({text:e.slice(t,n),match:!0}),s=n;return s<e.length&&o.push({text:e.slice(s),match:!1}),o}var zi={amp:`&`,lt:`<`,gt:`>`,quot:`"`,apos:`'`,nbsp:`\xA0`};function Bi(e){return e.replace(/&(#x[\da-f]+|#\d+|[a-z]+);/gi,(e,t)=>t.startsWith(`#x`)||t.startsWith(`#X`)?String.fromCodePoint(Number.parseInt(t.slice(2),16)):t.startsWith(`#`)?String.fromCodePoint(Number.parseInt(t.slice(1),10)):zi[t.toLowerCase()]??e)}function Vi(e){let t=[],n=/<mark>([\s\S]*?)<\/mark>/g,r=0,i=0,a=n.exec(e);for(;a!==null;)a.index>r&&t.push(Bi(e.slice(r,a.index))),t.push((0,L.jsx)(`mark`,{children:Bi(a[1]??``)},i)),i+=1,r=a.index+a[0].length,a=n.exec(e);return r<e.length&&t.push(Bi(e.slice(r))),t}function Hi({entry:e,query:t}){return e.excerptHtml===void 0?(0,L.jsx)(L.Fragment,{children:Ri(e.excerpt,t).map((e,t)=>e.match?(0,L.jsx)(`mark`,{children:e.text},t):e.text)}):(0,L.jsx)(L.Fragment,{children:Vi(e.excerptHtml)})}var Ui=null;function Wi(){return Ui===null&&(Ui=import(B(`/pagefind/pagefind.js`)).then(async e=>{let t=e;return await t.options({excerptLength:20}),t}).catch(()=>null)),Ui}async function Gi(e){let t=await Wi();if(t===null)return null;let n=await t.search(e);return Promise.all(n.results.map(e=>e.data()))}var Ki={status:`idle`,results:[]},qi=300;function Ji(e,t=!0){let[n,r]=(0,F.useState)(Ki),i=(0,F.useRef)(null);return(0,F.useEffect)(()=>{let n=e.trim();if(!t||n===``){r(Ki);return}let a=!1,o=new AbortController;r({status:`loading`,results:[]});let s=setTimeout(()=>{(async()=>{let e=await Gi(n);if(!a){if(e!==null)r({status:`ready`,results:e.map(e=>({url:e.url,title:e.meta.title??e.url,excerptHtml:e.excerpt,excerpt:``}))});else try{if(i.current===null){let e=await fetch(B(`/search-index.json`),{signal:o.signal});if(!e.ok)throw Error(`search index is unavailable`);let t=await e.json();i.current=Array.isArray(t)?t:[]}if(a)return;r({status:`ready`,results:Li(i.current,n).map(e=>({url:e.url,title:e.title,excerpt:e.snippet}))})}catch{a||r({status:`error`,results:[]})}}})()},qi);return()=>{a=!0,o.abort(),clearTimeout(s)}},[e,t]),n}var Yi=5;function Xi(){let e=i(),[t,n]=(0,F.useState)(``),[r,a]=(0,F.useState)(!1),[o,s]=(0,F.useState)(-1),c=(0,F.useRef)(null),l=(0,F.useRef)(null),u=(0,F.useRef)(null),d=t.trim(),{status:f,results:p}=Ji(t,r),m=p.slice(0,Yi),h=()=>{(u.current?.offsetParent===null?l.current:u.current)?.focus()},g=()=>{a(!1),s(-1)},_=()=>{n(``),g()},v=()=>{a(!0)},y=()=>{g(),e(d===``?`/search/`:`/search/?q=${encodeURIComponent(d)}`)},b=e=>{let t=c.current?.querySelectorAll(`[data-search-result]`),n=t?.length??0;if(n===0)return;let r=(e+n)%n;s(r),t?.[r]?.focus()};(0,F.useEffect)(()=>{let e=e=>{(e.metaKey||e.ctrlKey)&&e.key.toLowerCase()===`k`&&(e.preventDefault(),requestAnimationFrame(()=>{l.current?.offsetParent===null?(v(),requestAnimationFrame(h)):h()}))};return window.addEventListener(`keydown`,e),()=>window.removeEventListener(`keydown`,e)},[]),(0,F.useEffect)(()=>{if(!r)return;let e=e=>{e.target instanceof Node&&c.current!==null&&!c.current.contains(e.target)&&g()};return document.addEventListener(`pointerdown`,e),()=>document.removeEventListener(`pointerdown`,e)},[r]);let x=t=>{if(t.key===`Escape`)t.preventDefault(),g(),h();else if(t.key===`ArrowDown`)t.preventDefault(),v(),b(o+1);else if(t.key===`ArrowUp`)t.preventDefault(),v(),b(o<=0?m.length-1:o-1);else if(t.key===`Enter`&&o>=0){t.preventDefault();let n=m[o];n!==void 0&&(_(),e(n.url))}};return(0,L.jsxs)(`div`,{ref:c,className:`relative`,children:[(0,L.jsxs)(`form`,{id:`search-bar`,role:`search`,className:`group relative mr-2 hidden h-11 items-center rounded-lg bg-black/4 transition-all focus-within:bg-black/6 hover:bg-black/6 lg:flex dark:bg-white/5 dark:focus-within:bg-white/10 dark:hover:bg-white/10`,onSubmit:e=>{e.preventDefault(),y()},children:[(0,L.jsx)(J,{name:`search`,className:`pointer-events-none absolute my-auto ml-3 text-[1.25rem] text-black/30 transition dark:text-white/30`}),(0,L.jsx)(`input`,{ref:l,id:`search-input-desktop`,type:`text`,placeholder:H(V.search),"aria-label":H(V.search),autoComplete:`off`,spellCheck:!1,value:t,onKeyDown:x,onChange:e=>{let t=e.target.value;n(t),s(-1),t.trim()===``?g():v()},className:`h-full w-40 bg-transparent pr-14 pl-10 text-sm text-black/50 outline-0 transition-all focus:w-52 active:w-52 xl:focus:w-60 xl:active:w-60 dark:text-white/50`}),(0,L.jsx)(`kbd`,{"aria-hidden":!0,className:`pointer-events-none absolute top-1/2 right-2 -translate-y-1/2 rounded-md border border-black/10 px-1 py-0.5 font-mono text-[0.5625rem] leading-4 text-black/40 group-focus-within:hidden dark:border-white/15 dark:text-white/40`,children:`Ctrl K`}),(0,L.jsx)(`button`,{type:`button`,"aria-label":H(V.searchClear),className:`btn-plain absolute top-1/2 right-2 hidden h-7 w-7 -translate-y-1/2 items-center justify-center rounded-md group-focus-within:flex`,onMouseDown:e=>{e.preventDefault()},onClick:()=>{_(),l.current?.focus()},children:(0,L.jsx)(J,{name:`close`,className:`text-[1rem]`})}),(0,L.jsx)(`button`,{type:`submit`,className:`sr-only`,children:H(V.search)})]}),(0,L.jsx)(`button`,{type:`button`,id:`search-switch`,"aria-label":H(V.search),"aria-controls":`search-panel`,"aria-expanded":r,className:`btn-plain scale-animation flex h-11 w-11 items-center justify-center rounded-lg active:scale-90 lg:hidden!`,onClick:()=>{r?g():(v(),requestAnimationFrame(h))},children:(0,L.jsx)(J,{name:`search`,className:`text-[1.25rem]`})}),(0,L.jsxs)(`div`,{id:`search-panel`,className:q(`float-panel search-panel fixed top-20 right-4 left-4 p-2 md:right-auto md:left-1/2 md:w-120 md:-translate-x-1/2`,`lg:absolute lg:top-[4.125rem] lg:right-2 lg:left-auto lg:w-120 lg:translate-x-0`,!r&&`float-panel-closed`),inert:!r,"aria-hidden":!r,"data-pagefind-ignore":!0,children:[(0,L.jsx)(`form`,{className:`mb-2 lg:hidden`,role:`search`,onSubmit:e=>{e.preventDefault(),y()},children:(0,L.jsxs)(`div`,{className:`relative flex h-11 items-center rounded-xl bg-black/4 transition-all focus-within:bg-black/6 hover:bg-black/6 dark:bg-white/5 dark:focus-within:bg-white/10 dark:hover:bg-white/10`,children:[(0,L.jsx)(J,{name:`search`,className:`pointer-events-none absolute ml-3 text-[1.25rem] text-black/30 transition dark:text-white/30`}),(0,L.jsx)(`input`,{ref:u,id:`search-input-mobile`,type:`text`,placeholder:H(V.search),"aria-label":H(V.search),autoComplete:`off`,spellCheck:!1,value:t,onKeyDown:x,onChange:e=>{n(e.target.value),s(-1)},className:`absolute inset-0 w-full bg-transparent pl-10 text-sm text-black/50 outline-0 focus:w-60 dark:text-white/50`}),(0,L.jsx)(`button`,{type:`submit`,className:`sr-only`,children:H(V.search)})]})}),(0,L.jsxs)(`div`,{className:`max-h-[70vh] overflow-y-auto overscroll-contain`,children:[f===`loading`?(0,L.jsx)(`div`,{className:`text-50 block rounded-xl px-3 py-2 text-lg transition first-of-type:mt-2 lg:first-of-type:mt-0`,children:H(V.searchLoading)}):null,f===`error`?(0,L.jsx)(`div`,{className:`text-50 block rounded-xl px-3 py-2 text-lg transition first-of-type:mt-2 lg:first-of-type:mt-0`,children:H(V.searchNoResults)}):null,f===`idle`?(0,L.jsx)(`div`,{className:`text-50 block rounded-xl px-3 py-2 text-lg transition first-of-type:mt-2 lg:first-of-type:mt-0`,children:H(V.searchTypeSomething)}):null,f===`ready`&&m.length===0?(0,L.jsx)(`div`,{className:`text-50 block rounded-xl px-3 py-2 text-lg transition first-of-type:mt-2 lg:first-of-type:mt-0`,children:H(V.searchNoResults)}):null,f===`ready`&&m.length>0?(0,L.jsx)(L.Fragment,{children:m.map((e,t)=>(0,L.jsxs)(`a`,{href:e.url,"data-search-result":``,className:q(`group block rounded-xl px-3 py-2 text-lg transition first-of-type:mt-2 lg:first-of-type:mt-0`,t===o?`bg-(--btn-plain-bg-active)`:`hover:bg-(--btn-plain-bg-hover) active:bg-(--btn-plain-bg-active)`),onClick:()=>{_()},onKeyDown:x,onMouseEnter:()=>{s(t)},children:[(0,L.jsxs)(`div`,{className:`text-90 inline-flex font-bold transition group-hover:text-(--primary)`,children:[(0,L.jsx)(`span`,{children:e.title}),(0,L.jsx)(J,{name:`fa7-solid:chevron-right`,className:`my-auto translate-x-1 text-[0.75rem] text-(--primary) transition`})]}),e.excerptHtml===void 0||e.excerptHtml.includes(`<mark>`)?(0,L.jsx)(`div`,{className:`text-50 mt-1 flex items-start text-sm transition`,children:(0,L.jsx)(`div`,{children:(0,L.jsx)(Hi,{entry:e,query:d})})}):null]},e.url))}):null]}),f===`ready`&&p.length>Yi?(0,L.jsx)(`a`,{href:d===``?`/search/`:`/search/?q=${encodeURIComponent(d)}`,className:`block rounded-xl px-3 py-2 text-center text-lg font-bold text-(--primary) transition first-of-type:mt-2 hover:bg-(--btn-plain-bg-hover) active:bg-(--btn-plain-bg-active) lg:first-of-type:mt-0`,onClick:()=>{g()},children:(0,L.jsxs)(`span`,{className:`inline-flex items-center`,children:[H(V.searchViewMore).replace(`{count}`,String(p.length-Yi)),(0,L.jsx)(J,{name:`fa7-solid:arrow-right`,className:`ml-1 text-[0.75rem] transition`})]})}):null]})]})}var Zi=vi([...R.navGroups]),Qi=typeof document>`u`?F.useEffect:F.useLayoutEffect;function $i(){let{pathname:e}=c(),t=e===`/`,n=R.navbar,r=n.mode,{wallpaperMode:i}=It(),[a,o]=(0,F.useState)(!1),[s,l]=(0,F.useState)(!1),[u,d]=(0,F.useState)(!1),[f,p]=(0,F.useState)(!1),[m,h]=(0,F.useState)(!1),[g,_]=(0,F.useState)(!1),[v,y]=(0,F.useState)(!1);Qi(()=>{y(!0)},[]);let b=v?i===`fullscreen`?t?`semifull`:`semi`:i===`overlay`||i===`none`?`none`:`semi`:`semi`;return(0,F.useEffect)(()=>{let e=0,t=()=>{e=0;let t=window.scrollY;h(b===`semifull`&&t>50),_(t>8)},n=()=>{e===0&&(e=window.requestAnimationFrame(t))};return t(),window.addEventListener(`scroll`,n,{passive:!0}),()=>{window.removeEventListener(`scroll`,n),window.cancelAnimationFrame(e)}},[b]),(0,F.useEffect)(()=>{if(!s)return;let e=e=>{let t=document.getElementById(`music-nav-panel`),n=document.getElementById(`music-player-switch`);t!==null&&n!==null&&e.target instanceof Node&&!t.contains(e.target)&&!n.contains(e.target)&&l(!1)};return document.addEventListener(`click`,e),()=>document.removeEventListener(`click`,e)},[s]),(0,F.useEffect)(()=>{if(r!==`dynamic`)return;let e=window.scrollY,n=()=>{let n=window.scrollY,r=n-e,a=i===`fullscreen`?t?window.innerHeight:0:i===`banner`?window.innerHeight*((t?65:45)/100):0;e=n,n<a||r<0||n<=80?d(!1):r>0&&n>150&&d(!0)};return window.addEventListener(`scroll`,n,{passive:!0}),()=>window.removeEventListener(`scroll`,n)},[t,r,i]),(0,F.useEffect)(()=>{if(r===`dynamic`)return document.body.classList.toggle(`dynamic-navbar-hidden`,u),()=>document.body.classList.remove(`dynamic-navbar-hidden`)},[u,r]),(0,F.useEffect)(()=>{let e=e=>{let t=e.detail;p(t?.playing===!0)};return document.addEventListener(`bg-player-state-change`,e),()=>document.removeEventListener(`bg-player-state-change`,e)},[]),(0,L.jsxs)(L.Fragment,{children:[(0,L.jsx)(`div`,{id:`top-row`,"data-navbar-mode":r,className:q(`pointer-events-none relative z-50 mx-auto transition-all duration-700`,r===`static`?``:`fixed top-0 right-0 left-0 z-80 h-18`,n.widthFull?``:`w-full max-w-(--page-width) px-0 md:px-4 xl:w-[92vw]`),children:(0,L.jsx)(`div`,{id:`navbar-wrapper`,className:q(`pointer-events-auto transition-all`,r===`static`&&`sticky top-0`,u&&`navbar-hidden`),children:(0,L.jsxs)(`div`,{id:`navbar`,className:q(`z-50`,m&&`scrolled`,g&&`navbar-sticky-shadow`),"data-transparent-mode":b,"data-is-home":t,"data-full-width":n.widthFull,suppressHydrationWarning:!0,children:[(0,L.jsx)(`script`,{src:B(`navbar-init.js`)}),(0,L.jsxs)(`div`,{className:`h-18 overflow-visible! px-4`,children:[(0,L.jsxs)(`div`,{className:`mx-auto grid h-full w-full max-w-(--page-width) grid-cols-[auto_minmax(0,1fr)_auto] items-center`,children:[(0,L.jsx)(`a`,{href:`/`,"aria-label":R.title,className:`navbar-brand h-13 rounded-lg px-3 font-bold transition-transform duration-150 active:scale-95 md:px-5`,children:(0,L.jsxs)(`div`,{className:`text-md flex flex-row items-center text-black dark:text-white`,style:{fontFamily:`var(--font-navbar-title, inherit)`},children:[n.logo.light!==``&&n.logo.dark!==``?(0,L.jsxs)(L.Fragment,{children:[(0,L.jsx)(X,{src:n.logo.light,alt:n.logo.alt,width:28,height:28,placeholder:!1,className:`navbar-logo mr-2 mb-1 h-7 w-7 object-contain dark:hidden`}),(0,L.jsx)(X,{src:n.logo.dark,alt:n.logo.alt,width:28,height:28,placeholder:!1,className:`navbar-logo mr-2 mb-1 hidden h-7 w-7 object-contain dark:block`})]}):(0,L.jsx)(J,{name:n.logo.icon,className:`navbar-logo mr-2 mb-1 text-[1.75rem]`,variant:`solid`,"aria-hidden":!0}),(0,L.jsx)(`span`,{className:`navbar-brand-title`,"aria-hidden":`true`,children:Array.from(R.title).map((e,t)=>(0,L.jsx)(`span`,{className:`navbar-title-char`,style:{"--char-index":t},children:e===` `?`\xA0`:e},t))})]})}),(0,L.jsx)(`div`,{className:`col-start-2 hidden items-center justify-center space-x-1 lg:flex lg:space-x-0 xl:space-x-1`,children:Zi.map(e=>(0,L.jsx)(ta,{group:e},e.label))}),(0,L.jsxs)(`div`,{className:`col-start-3 flex justify-self-end`,children:[(0,L.jsx)(Xi,{}),(0,L.jsx)(`button`,{type:`button`,id:`music-player-switch`,"aria-label":H(V.music),"aria-controls":`music-nav-panel`,"aria-expanded":s,className:`btn-plain scale-animation h-11 w-11 rounded-lg active:scale-90`,onClick:()=>{l(e=>!e)},children:(0,L.jsx)(J,{name:`music`,className:`text-[1.25rem]`,variant:`solid`})}),R.wallpaperPlayer.enabled?(0,L.jsx)(`button`,{type:`button`,id:`bg-player-toggle`,"aria-label":H(f?V.videoPause:V.videoPlay),"aria-pressed":f,title:H(f?V.videoPause:V.videoPlay),className:`btn-plain scale-animation hidden h-11 w-11 rounded-lg active:scale-90 md:flex`,onClick:()=>{document.dispatchEvent(new CustomEvent(`bg-player-toggle`))},children:(0,L.jsx)(J,{name:f?`pause`:`play`,className:`text-[1.5rem]`,variant:`solid`})}):null,(0,L.jsx)(Ti,{}),(0,L.jsx)(ea,{}),(0,L.jsx)(`button`,{type:`button`,id:`nav-menu-switch`,"aria-label":`Menu`,"aria-controls":`nav-menu-panel`,"aria-expanded":a,name:`Nav Menu`,className:`btn-plain scale-animation h-11 w-11 rounded-lg active:scale-90 lg:hidden!`,onClick:()=>{o(!0)},children:(0,L.jsx)(J,{name:`menu`,className:`text-[1.25rem]`,variant:`solid`})})]})]}),(0,L.jsx)(Ni,{open:s})]})]})})}),(0,L.jsx)(Ai,{open:a,onClose:()=>o(!1)})]})}function ea(){let{theme:e,setTheme:t}=It(),[n,r]=(0,F.useState)(!1),[i,a]=(0,F.useState)(!1),o=(0,F.useRef)(null),s=(0,F.useRef)(null);(0,F.useEffect)(()=>{let t=()=>{a(document.documentElement.classList.contains(`dark`))};if(t(),e!==`system`)return;let n=window.matchMedia(`(prefers-color-scheme: dark)`);return n.addEventListener(`change`,t),()=>n.removeEventListener(`change`,t)},[e]),(0,F.useEffect)(()=>{if(!n)return;let e=e=>{let t=e.target;!s.current?.contains(t)&&!o.current?.contains(t)&&r(!1)},t=e=>{e.key===`Escape`&&(r(!1),o.current?.focus())};return document.addEventListener(`pointerdown`,e),document.addEventListener(`keydown`,t),()=>{document.removeEventListener(`pointerdown`,e),document.removeEventListener(`keydown`,t)}},[n]);let c=[{value:`light`,label:H(V.lightMode),icon:`sun`},{value:`dark`,label:H(V.darkMode),icon:`moon`},{value:`system`,label:H(V.systemMode),icon:`brightness-auto`}];return(0,L.jsxs)(`div`,{className:`z-50`,children:[(0,L.jsxs)(`button`,{ref:o,type:`button`,id:`scheme-switch`,"aria-label":`Light/Dark Mode`,"aria-haspopup":`menu`,"aria-controls":`theme-mode-panel`,"aria-expanded":n,className:`btn-plain scale-animation relative h-11 w-11 rounded-lg active:scale-90`,onClick:()=>{r(e=>!e)},children:[(0,L.jsx)(`span`,{className:q(`absolute inset-0 flex items-center justify-center`,i&&`opacity-0`),children:(0,L.jsx)(J,{name:`sun`,className:`text-[1.25rem]`})}),(0,L.jsx)(`span`,{className:q(`absolute inset-0 flex items-center justify-center`,!i&&`opacity-0`),children:(0,L.jsx)(J,{name:`moon`,className:`text-[1.25rem]`})})]}),n?(0,L.jsx)(`div`,{ref:s,id:`theme-mode-panel`,role:`menu`,"aria-labelledby":`scheme-switch`,className:`float-panel absolute top-21 right-4 z-50 p-2 transition-all`,children:c.map((n,i)=>(0,L.jsxs)(`button`,{type:`button`,role:`menuitem`,className:q(`btn-plain scale-animation flex h-9 w-full items-center justify-start! rounded-lg px-3 font-medium whitespace-nowrap transition active:scale-95`,i===c.length-1?``:`mb-0.5`,e===n.value&&`current-theme-btn`),onClick:()=>{t(n.value),r(!1)},children:[(0,L.jsx)(J,{name:n.icon,className:`mr-3 text-[1.25rem]`}),n.label]},n.value))}):null]})}function ta({group:e}){let t=`children`in e&&e.children.length>0,n=`dropdown-${e.label}`,r=(0,F.useRef)(null),i=(0,F.useRef)(null),a=(0,F.useRef)(null),o=(0,F.useRef)(!1),[s,c]=(0,F.useState)(!1);if(!t){let t=`href`in e?e.href:`/`,n=`external`in e&&e.external;return(0,L.jsx)(`div`,{className:`dropdown-container`,"data-dropdown":``,children:(0,L.jsx)(`a`,{href:t,target:n?`_blank`:void 0,rel:n?`noopener noreferrer`:void 0,"aria-label":e.label,className:`btn-plain scale-animation h-10 rounded-lg px-4 font-bold whitespace-nowrap active:scale-95`,children:(0,L.jsxs)(`div`,{className:`flex items-center gap-1.5`,children:[(0,L.jsx)(J,{name:e.icon,className:`navbar-icon mr-1.5 text-[1.1rem]`,variant:`solid`}),e.label,n?(0,L.jsx)(J,{name:`fa7-solid:arrow-up-right-from-square`,className:`ml-1 -translate-y-px text-[0.875rem] text-black/20 transition dark:text-white/20`}):null]})})})}let l=e=>{let t=a.current?.querySelectorAll(`[data-dropdown-item]`),n=t?.length??0;if(n===0)return;let r=e<0?n-1:Math.min(e,n-1);t?.[r]?.focus()},u=e=>{c(!0),requestAnimationFrame(()=>{l(e)})},d=e=>{let t=[...a.current?.querySelectorAll(`[data-dropdown-item]`)??[]];if(t.length===0)return;let n=t.findIndex(e=>e===document.activeElement);t[e===`next`?(n+1)%t.length:(n-1+t.length)%t.length]?.focus()},f=()=>{o.current=!0,c(!1),i.current?.focus()};return(0,L.jsxs)(`div`,{ref:r,className:`dropdown-container group`,"data-dropdown":``,"data-open":s,onMouseEnter:()=>{c(!0)},onMouseLeave:()=>{c(!1)},onFocus:()=>{o.current?o.current=!1:c(!0)},onBlur:e=>{r.current?.contains(e.relatedTarget)||c(!1)},children:[(0,L.jsxs)(`button`,{ref:i,type:`button`,"aria-expanded":s,"aria-haspopup":`true`,"aria-controls":n,"data-dropdown-trigger":``,className:`dropdown-trigger btn-plain scale-animation relative h-10 rounded-lg px-4 pr-8 font-bold whitespace-nowrap active:scale-95 lg:pl-3 xl:pl-4`,onClick:()=>{c(e=>!e)},onKeyDown:e=>{e.key===`ArrowDown`?(e.preventDefault(),u(0)):e.key===`Escape`&&c(!1)},children:[(0,L.jsxs)(`span`,{className:`flex items-center gap-1.5`,children:[(0,L.jsx)(J,{name:e.icon,className:`navbar-icon mr-1.5 text-[1.1rem]`,variant:`solid`}),e.label]}),(0,L.jsx)(J,{name:`chevron-down`,className:`dropdown-arrow absolute top-1/2 right-2.5 -translate-y-1/2 text-[1.2rem] transition-transform duration-200`})]}),(0,L.jsx)(`div`,{ref:a,id:n,className:`dropdown-menu`,"data-dropdown-menu":``,role:`menu`,tabIndex:-1,inert:!s,"aria-hidden":!s,onKeyDown:e=>{e.key===`ArrowDown`?(e.preventDefault(),d(`next`)):e.key===`ArrowUp`?(e.preventDefault(),d(`previous`)):e.key===`Home`?(e.preventDefault(),l(0)):e.key===`End`?(e.preventDefault(),l(-1)):e.key===`Escape`&&(e.preventDefault(),f())},children:(0,L.jsx)(`div`,{className:`float-panel dropdown-content p-2`,children:e.children.map((t,n)=>{let r=`external`in t&&t.external,i=t.group,a=n>0?e.children[n-1].group:void 0;return(0,L.jsxs)(F.Fragment,{children:[i!==void 0&&i!==a?(0,L.jsx)(`div`,{className:`dropdown-group-title px-4 pt-2 pb-1 text-xs font-semibold text-black/40 dark:text-white/40`,children:i}):null,(0,L.jsxs)(`a`,{href:t.href,target:r?`_blank`:void 0,rel:r?`noopener noreferrer`:void 0,className:q(`dropdown-item focus-ring-inset btn-plain scale-animation flex h-10 w-full items-center justify-start! rounded-lg px-3 font-medium whitespace-nowrap transition active:scale-95`,n===e.children.length-1?``:`mb-0.5`),"data-dropdown-item":``,role:`menuitem`,children:[(0,L.jsx)(J,{name:t.icon,className:`navbar-icon mr-3 text-[1.25rem]`}),(0,L.jsx)(`span`,{children:t.label}),r?(0,L.jsx)(J,{name:`fa7-solid:arrow-up-right-from-square`,className:`ml-auto text-[0.75rem] text-black/25 dark:text-white/25`}):null]})]},t.label)})})})]})}function na(){(0,F.useEffect)(()=>{function e(e){let t=e.target instanceof Element?e.target.closest(`a[data-encoded-email]`):null;if(t===null)return;let n=t.getAttribute(`data-encoded-email`);n!==null&&(e.preventDefault(),window.location.href=atob(n))}return document.addEventListener(`click`,e),()=>document.removeEventListener(`click`,e)},[])}function ra(){let e=c();(0,F.useEffect)(()=>{if(document.querySelector(`.diagram-container`)===null)return;let e=!1;return tt(async()=>{let{initDiagrams:e,startDiagramRuntime:t}=await import(`./diagram-runtime-DsFpkCsA.js`);return{initDiagrams:e,startDiagramRuntime:t}},[]).then(({initDiagrams:t,startDiagramRuntime:n})=>{e||(n(),t())}).catch(()=>{}),()=>{e=!0,tt(async()=>{let{cleanupDiagrams:e}=await import(`./diagram-runtime-DsFpkCsA.js`);return{cleanupDiagrams:e}},[]).then(({cleanupDiagrams:e})=>e()).catch(()=>{})}},[e.pathname])}function ia(){(0,F.useEffect)(()=>{let e=e=>{e.dataset.imageManaged===void 0&&e.dataset.imageFallback===void 0&&e.replaceWith(qt(e))},t=t=>{t.target instanceof HTMLImageElement&&e(t.target)};return document.addEventListener(`error`,t,!0),document.querySelectorAll(`img`).forEach(t=>{t.complete&&t.naturalWidth===0&&e(t)}),()=>document.removeEventListener(`error`,t,!0)},[])}function aa({children:e}){let{pathname:t}=c();na(),ra(),ui(),ia();let n=Rt(t);return(0,L.jsxs)(`div`,{className:`relative min-h-screen`,children:[(0,L.jsx)(bn,{}),(0,L.jsx)(Zr,{}),(0,L.jsx)(`a`,{href:`#main-content`,className:`bg-card text-primary sr-only rounded-lg px-4 py-2 text-sm font-medium shadow-lg focus:not-sr-only focus:fixed focus:top-3 focus:left-3 focus:z-[70]`,children:`跳到主要内容`}),(0,L.jsx)($i,{}),e,n?null:(0,L.jsx)(on,{})]})}function oa({children:e,sidebar:t,leftSidebar:n=(0,L.jsx)(qr,{}),heading:r}){let{pathname:i}=c(),a=Rt(i),o=zt,s=!o.enable||o.hideSidebarOnPostPage&&a,l=!s&&o.position!==`right`,u=!s&&o.position!==`left`&&t!=null;return(0,L.jsx)(`div`,{id:`content-panel`,className:`content-panel pointer-events-none absolute z-30 w-full`,children:(0,L.jsxs)(`div`,{id:`content-panel-inner`,className:`pointer-events-auto relative mx-auto w-full max-w-(--page-width) xl:w-[92vw]`,children:[(0,L.jsxs)(`div`,{id:`main-grid`,className:q(`mobile-no-sidebar mx-auto grid w-full gap-4 px-2 transition duration-700 md:px-4`,!l&&`sidebar-left-hidden`,!u&&`sidebar-right-hidden`),"data-grid-hide-sidebar-on-post":o.hideSidebarOnPostPage,children:[l?(0,L.jsx)(sa,{side:`left`,children:n}):null,(0,L.jsxs)(`div`,{id:`content-column`,className:`w-full`,children:[(0,L.jsx)(`div`,{id:`category-bar-wrapper`,children:(0,L.jsx)(_n,{})}),(0,L.jsxs)(`main`,{id:`swup-container`,className:`transition-main`,"data-current-post-category":``,children:[(0,L.jsx)(`h1`,{className:`sr-only`,children:r??R.title}),(0,L.jsx)(`div`,{id:`content-wrapper`,className:`onload-animation`,children:e})]}),(0,L.jsx)(`div`,{id:`mobile-bottom-sidebar`,className:`mt-4 block md:hidden`,children:s?null:(0,L.jsx)(fi,{children:(0,L.jsx)(Kr,{side:`bottom`})})})]}),u?(0,L.jsx)(sa,{side:`right`,children:t}):null]}),(0,L.jsx)(hi,{})]})})}function sa({side:e,children:t}){return(0,L.jsxs)(L.Fragment,{children:[(0,L.jsx)(`div`,{id:e===`left`?`left-sidebar-wrapper`:`right-sidebar-static`,"data-hide-sidebar-on-post":zt.hideSidebarOnPostPage?`true`:`false`,children:t==null?null:(0,L.jsx)(di,{position:e,children:t})}),(0,L.jsx)(`div`,{id:`${e}-sidebar-dynamic`,className:`transition-swup-fade hidden`,"data-sidebar-placeholder":`true`})]})}export{Pe as $,Ft as A,B,an as C,$t as D,J as E,ht as F,Ee as G,R as H,H as I,Re as J,Ie as K,V as L,gt as M,ft as N,Kt as O,mt as P,Oe as Q,tt as R,ln as S,tn as T,We as U,qe as V,Ge as W,ke as X,Me as Y,Ae as Z,un as _,Kr as a,I as at,dn as b,Mn as c,Tn as d,Be as et,wn as f,hn as g,gn as h,Hi as i,ze as it,It as j,q as k,Nn as l,xn as m,aa as n,Fe as nt,Z as o,fe as ot,En as p,Le as q,Ji as r,je as rt,X as s,me as st,oa as t,De as tt,Dn as u,cn as v,nn as w,fn as x,Y as y,Ye as z};