import{_ as re}from"./ERYlYzGB.js";import{p as x,h as de,y as R,j as h,l as H,z as ue,c as _,o as b,A as pe,a,f as G,n as ce,B as fe,t as O,C as me,D as Z,E as J,G as w,m as ge,H as K,x as ve,b as g,g as he,u as y,F as E,e as P,I as xe,w as q}from"./By-y42rN.js";import{c as T}from"./CE6IlAa9.js";import{_ as j}from"./fHTmxjmO.js";import{_ as ye}from"./CCje0yTk.js";import{s as be}from"./7uoZjAw9.js";import{y as F,p as X,z as U,n as Q,a as Y,b as ee,A as we,B as te,S as _e,u as Ce,C as Se}from"./IqLi1unX.js";import{N as Be}from"./CMhoMISt.js";import{A as Ee}from"./C1epffbn.js";import{u as Oe}from"./B3QTLvIe.js";import"./Bxffxfqi.js";/**
 * @license lucide-vue-next v0.477.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ie=T("ArrowLeftIcon",[["path",{d:"m12 19-7-7 7-7",key:"1l729n"}],["path",{d:"M19 12H5",key:"x3x0zl"}]]);/**
 * @license lucide-vue-next v0.477.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Pe=T("AwardIcon",[["path",{d:"m15.477 12.89 1.515 8.526a.5.5 0 0 1-.81.47l-3.58-2.687a1 1 0 0 0-1.197 0l-3.586 2.686a.5.5 0 0 1-.81-.469l1.514-8.526",key:"1yiouv"}],["circle",{cx:"12",cy:"8",r:"6",key:"1vp47v"}]]);/**
 * @license lucide-vue-next v0.477.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const V=T("StarIcon",[["path",{d:"M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z",key:"r04s7s"}]]);/**
 * @license lucide-vue-next v0.477.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Te=T("ThumbsUpIcon",[["path",{d:"M7 10v12",key:"1qc93n"}],["path",{d:"M15 5.88 14 10h5.83a2 2 0 0 1 1.92 2.56l-2.33 8A2 2 0 0 1 17.5 22H4a2 2 0 0 1-2-2v-8a2 2 0 0 1 2-2h2.76a2 2 0 0 0 1.79-1.11L12 2a3.13 3.13 0 0 1 3 3.88Z",key:"emmmcr"}]]);/**
 * @license lucide-vue-next v0.477.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Fe=T("UserRoundPlusIcon",[["path",{d:"M2 21a8 8 0 0 1 13.292-6",key:"bjp14o"}],["circle",{cx:"10",cy:"8",r:"5",key:"o932ke"}],["path",{d:"M19 16v6",key:"tddt3s"}],["path",{d:"M22 19h-6",key:"vcuq98"}]]);/**
 * @license lucide-vue-next v0.477.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ne=T("UsersIcon",[["path",{d:"M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2",key:"1yyitq"}],["circle",{cx:"9",cy:"7",r:"4",key:"nufk8"}],["path",{d:"M22 21v-2a4 4 0 0 0-3-3.87",key:"kshegd"}],["path",{d:"M16 3.13a4 4 0 0 1 0 7.75",key:"1da9ce"}]]),je=x("/Images/hero/hero.png"),Ae=x("/Images/about/about-1.png"),Re={class:"mb-3 ml-auto"},Me=["data-stop"],ze={class:"font-medium text-black mt-2"},A=de({__name:"Counter",props:{value:{},label:{},extraClass:{}},setup(t){const i=t,o=R(()=>typeof i.value=="number"?i.value:Number(i.value)),u=h(null),s=n=>n>=1e3?`${Math.floor(n/1e3)}K+`:`${n}+`,p=R(()=>{switch(i.label){case"Happy Customers Around the World":return Fe;case"Best client support award achieved":return Pe;case"Trusted best partners and sponsors":return Ne;case"Active users using our best services":return Te;default:return null}});return H(()=>{if(!u.value)return;const n=new IntersectionObserver(l=>{l.forEach(e=>{if(e.isIntersecting){const c=o.value,d=1e3,r=30,S=Math.ceil(c/r);let m=0;const C=()=>{m+=S,m>=c&&(m=c),u.value&&(u.value.innerText=s(m)),m<c&&setTimeout(C,d/r)};C(),n.unobserve(e.target)}})},{threshold:.5});n.observe(u.value),ue(()=>{u.value&&n.unobserve(u.value)})}),(n,l)=>(b(),_("div",{class:pe(`bg-white p-[30px] max-w-[293px] max-h-[222px] sm:mb-[40px] mb-5 shadow-lg rounded-xl flex mx-auto flex-col border ${n.extraClass}`)},[a("div",Re,[p.value?(b(),G(fe(p.value),{key:0,class:"text-primarycolor w-[30px] h-[30px]"})):ce("",!0)]),a("h3",{ref_key:"countRef",ref:u,"data-stop":o.value,class:"text-[50px] font-bold leading-[70px] text-primarycolor"}," 0 ",8,Me),a("p",ze,O(n.label),1)],2))}}),ke=x("/Images/icons/requirement-gathering.png"),De=x("/Images/icons/planning.png"),Le=x("/Images/icons/services-ui-ux.png"),Ue=x("/Images/icons/prototype.png"),He=x("/Images/icons/development.png"),$e=x("/Images/icons/quality-assurance.png"),qe=x("/Images/icons/deployment.png"),Ve=x("/Images/icons/support-maintenance.png"),We=[{title:"Requirement Gathering",icon:ke,bgColor:"#F4FCEC",textColor:"#618C36"},{title:"Planning",icon:De,bgColor:"#E3F2FF",textColor:"#62A4DC"},{title:"UI/UX Design",icon:Le,bgColor:"#F6ECFC",textColor:"#9546C4"},{title:"Prototype",icon:Ue,bgColor:"#D1F8FE",textColor:"#2D8694"},{title:"Development",icon:He,bgColor:"#EAFFFB",textColor:"#5DAEA0"},{title:"Quality Assurance",icon:$e,bgColor:"#FCEDEC",textColor:"#C85C55"},{title:"Deployment",icon:qe,bgColor:"#E9F3F7",textColor:"#73B1C9"},{title:"Support & Maintenance",icon:Ve,bgColor:"#FAFFD9",textColor:"#B8CB3B"}],ne=x("/Images/testmonial/reviews-1.png"),ae=x("/Images/testmonial/reviews-2.png"),se=x("/Images/testmonial/reviews-3.png"),Ge=x("/Images/testmonial/reviews-4.png"),Ze=x("/Images/testmonial/reviews-5.png"),Je=[{name:"Roxanne",role:"Marketing Director",rating:5,review:"Great design for an existing website portal. Highly recommend shreemosoft. Worked closely with me to fulfill the requirements, and provided support after the project was completed. Thanks shreemosoft.",image:ne},{name:"John Doe",role:"CEO, XYZ Corp",rating:4.8,review:"Fantastic experience working with shreemosoft. Delivered exactly what we needed on time and with great support!",image:ae},{name:"Jane Smith",role:"Product Manager",rating:4.9,review:"Professional team and excellent design. The collaboration was smooth, and the final product exceeded expectations!",image:se}];function W(t,i){t===void 0&&(t={});const o={on:{}},u={},s={};F(o,we),o._emitClasses=!0,o.init=!1;const p={},n=X.map(e=>e.replace(/_/,"")),l=Object.assign({},t);return Object.keys(l).forEach(e=>{typeof t[e]>"u"||(n.indexOf(e)>=0?U(t[e])?(o[e]={},s[e]={},F(o[e],t[e]),F(s[e],t[e])):(o[e]=t[e],s[e]=t[e]):e.search(/on[A-Z]/)===0&&typeof t[e]=="function"?o.on[`${e[2].toLowerCase()}${e.substr(3)}`]=t[e]:p[e]=t[e])}),["navigation","pagination","scrollbar"].forEach(e=>{o[e]===!0&&(o[e]={}),o[e]===!1&&delete o[e]}),{params:o,passedParams:s,rest:p,events:u}}function Ke(t,i){let{el:o,nextEl:u,prevEl:s,paginationEl:p,scrollbarEl:n,swiper:l}=t;Q(i)&&u&&s&&(l.params.navigation.nextEl=u,l.originalParams.navigation.nextEl=u,l.params.navigation.prevEl=s,l.originalParams.navigation.prevEl=s),Y(i)&&p&&(l.params.pagination.el=p,l.originalParams.pagination.el=p),ee(i)&&n&&(l.params.scrollbar.el=n,l.originalParams.scrollbar.el=n),l.init(o)}function Xe(t,i,o,u,s){const p=[];if(!i)return p;const n=e=>{p.indexOf(e)<0&&p.push(e)};if(o&&u){const e=u.map(s),c=o.map(s);e.join("")!==c.join("")&&n("children"),u.length!==o.length&&n("children")}return X.filter(e=>e[0]==="_").map(e=>e.replace(/_/,"")).forEach(e=>{if(e in t&&e in i)if(U(t[e])&&U(i[e])){const c=Object.keys(t[e]),d=Object.keys(i[e]);c.length!==d.length?n(e):(c.forEach(r=>{t[e][r]!==i[e][r]&&n(e)}),d.forEach(r=>{t[e][r]!==i[e][r]&&n(e)}))}else t[e]!==i[e]&&n(e)}),p}const Qe=t=>{!t||t.destroyed||!t.params.virtual||t.params.virtual&&!t.params.virtual.enabled||(t.updateSlides(),t.updateProgress(),t.updateSlidesClasses(),t.parallax&&t.params.parallax&&t.params.parallax.enabled&&t.parallax.setTranslate())};function L(t,i,o){t===void 0&&(t={});const u=[],s={"container-start":[],"container-end":[],"wrapper-start":[],"wrapper-end":[]},p=(n,l)=>{Array.isArray(n)&&n.forEach(e=>{const c=typeof e.type=="symbol";l==="default"&&(l="container-end"),c&&e.children?p(e.children,l):e.type&&(e.type.name==="SwiperSlide"||e.type.name==="AsyncComponentWrapper")||e.componentOptions&&e.componentOptions.tag==="SwiperSlide"?u.push(e):s[l]&&s[l].push(e)})};return Object.keys(t).forEach(n=>{if(typeof t[n]!="function")return;const l=t[n]();p(l,n)}),o.value=i.value,i.value=u,{slides:u,slots:s}}function Ye(t,i,o){if(!o)return null;const u=d=>{let r=d;return d<0?r=i.length+d:r>=i.length&&(r=r-i.length),r},s=t.value.isHorizontal()?{[t.value.rtlTranslate?"right":"left"]:`${o.offset}px`}:{top:`${o.offset}px`},{from:p,to:n}=o,l=t.value.params.loop?-i.length:0,e=t.value.params.loop?i.length*2:i.length,c=[];for(let d=l;d<e;d+=1)d>=p&&d<=n&&c.length<i.length&&c.push(i[u(d)]);return c.map(d=>{if(d.props||(d.props={}),d.props.style||(d.props.style={}),d.props.swiperRef=t,d.props.style=s,d.type)return w(d.type,{...d.props},d.children);if(d.componentOptions)return w(d.componentOptions.Ctor,{...d.props},d.componentOptions.children)})}const et={name:"Swiper",props:{tag:{type:String,default:"div"},wrapperTag:{type:String,default:"div"},modules:{type:Array,default:void 0},init:{type:Boolean,default:void 0},direction:{type:String,default:void 0},oneWayMovement:{type:Boolean,default:void 0},swiperElementNodeName:{type:String,default:"SWIPER-CONTAINER"},touchEventsTarget:{type:String,default:void 0},initialSlide:{type:Number,default:void 0},speed:{type:Number,default:void 0},cssMode:{type:Boolean,default:void 0},updateOnWindowResize:{type:Boolean,default:void 0},resizeObserver:{type:Boolean,default:void 0},nested:{type:Boolean,default:void 0},focusableElements:{type:String,default:void 0},width:{type:Number,default:void 0},height:{type:Number,default:void 0},preventInteractionOnTransition:{type:Boolean,default:void 0},userAgent:{type:String,default:void 0},url:{type:String,default:void 0},edgeSwipeDetection:{type:[Boolean,String],default:void 0},edgeSwipeThreshold:{type:Number,default:void 0},autoHeight:{type:Boolean,default:void 0},setWrapperSize:{type:Boolean,default:void 0},virtualTranslate:{type:Boolean,default:void 0},effect:{type:String,default:void 0},breakpoints:{type:Object,default:void 0},breakpointsBase:{type:String,default:void 0},spaceBetween:{type:[Number,String],default:void 0},slidesPerView:{type:[Number,String],default:void 0},maxBackfaceHiddenSlides:{type:Number,default:void 0},slidesPerGroup:{type:Number,default:void 0},slidesPerGroupSkip:{type:Number,default:void 0},slidesPerGroupAuto:{type:Boolean,default:void 0},centeredSlides:{type:Boolean,default:void 0},centeredSlidesBounds:{type:Boolean,default:void 0},slidesOffsetBefore:{type:Number,default:void 0},slidesOffsetAfter:{type:Number,default:void 0},normalizeSlideIndex:{type:Boolean,default:void 0},centerInsufficientSlides:{type:Boolean,default:void 0},watchOverflow:{type:Boolean,default:void 0},roundLengths:{type:Boolean,default:void 0},touchRatio:{type:Number,default:void 0},touchAngle:{type:Number,default:void 0},simulateTouch:{type:Boolean,default:void 0},shortSwipes:{type:Boolean,default:void 0},longSwipes:{type:Boolean,default:void 0},longSwipesRatio:{type:Number,default:void 0},longSwipesMs:{type:Number,default:void 0},followFinger:{type:Boolean,default:void 0},allowTouchMove:{type:Boolean,default:void 0},threshold:{type:Number,default:void 0},touchMoveStopPropagation:{type:Boolean,default:void 0},touchStartPreventDefault:{type:Boolean,default:void 0},touchStartForcePreventDefault:{type:Boolean,default:void 0},touchReleaseOnEdges:{type:Boolean,default:void 0},uniqueNavElements:{type:Boolean,default:void 0},resistance:{type:Boolean,default:void 0},resistanceRatio:{type:Number,default:void 0},watchSlidesProgress:{type:Boolean,default:void 0},grabCursor:{type:Boolean,default:void 0},preventClicks:{type:Boolean,default:void 0},preventClicksPropagation:{type:Boolean,default:void 0},slideToClickedSlide:{type:Boolean,default:void 0},loop:{type:Boolean,default:void 0},loopedSlides:{type:Number,default:void 0},loopPreventsSliding:{type:Boolean,default:void 0},rewind:{type:Boolean,default:void 0},allowSlidePrev:{type:Boolean,default:void 0},allowSlideNext:{type:Boolean,default:void 0},swipeHandler:{type:Boolean,default:void 0},noSwiping:{type:Boolean,default:void 0},noSwipingClass:{type:String,default:void 0},noSwipingSelector:{type:String,default:void 0},passiveListeners:{type:Boolean,default:void 0},containerModifierClass:{type:String,default:void 0},slideClass:{type:String,default:void 0},slideActiveClass:{type:String,default:void 0},slideVisibleClass:{type:String,default:void 0},slideFullyVisibleClass:{type:String,default:void 0},slideBlankClass:{type:String,default:void 0},slideNextClass:{type:String,default:void 0},slidePrevClass:{type:String,default:void 0},wrapperClass:{type:String,default:void 0},lazyPreloaderClass:{type:String,default:void 0},lazyPreloadPrevNext:{type:Number,default:void 0},runCallbacksOnInit:{type:Boolean,default:void 0},observer:{type:Boolean,default:void 0},observeParents:{type:Boolean,default:void 0},observeSlideChildren:{type:Boolean,default:void 0},a11y:{type:[Boolean,Object],default:void 0},autoplay:{type:[Boolean,Object],default:void 0},controller:{type:Object,default:void 0},coverflowEffect:{type:Object,default:void 0},cubeEffect:{type:Object,default:void 0},fadeEffect:{type:Object,default:void 0},flipEffect:{type:Object,default:void 0},creativeEffect:{type:Object,default:void 0},cardsEffect:{type:Object,default:void 0},hashNavigation:{type:[Boolean,Object],default:void 0},history:{type:[Boolean,Object],default:void 0},keyboard:{type:[Boolean,Object],default:void 0},mousewheel:{type:[Boolean,Object],default:void 0},navigation:{type:[Boolean,Object],default:void 0},pagination:{type:[Boolean,Object],default:void 0},parallax:{type:[Boolean,Object],default:void 0},scrollbar:{type:[Boolean,Object],default:void 0},thumbs:{type:Object,default:void 0},virtual:{type:[Boolean,Object],default:void 0},zoom:{type:[Boolean,Object],default:void 0},grid:{type:[Object],default:void 0},freeMode:{type:[Boolean,Object],default:void 0},enabled:{type:Boolean,default:void 0}},emits:["_beforeBreakpoint","_containerClasses","_slideClass","_slideClasses","_swiper","_freeModeNoMomentumRelease","activeIndexChange","afterInit","autoplay","autoplayStart","autoplayStop","autoplayPause","autoplayResume","autoplayTimeLeft","beforeDestroy","beforeInit","beforeLoopFix","beforeResize","beforeSlideChangeStart","beforeTransitionStart","breakpoint","changeDirection","click","disable","doubleTap","doubleClick","destroy","enable","fromEdge","hashChange","hashSet","init","keyPress","lock","loopFix","momentumBounce","navigationHide","navigationShow","navigationPrev","navigationNext","observerUpdate","orientationchange","paginationHide","paginationRender","paginationShow","paginationUpdate","progress","reachBeginning","reachEnd","realIndexChange","resize","scroll","scrollbarDragEnd","scrollbarDragMove","scrollbarDragStart","setTransition","setTranslate","slidesUpdated","slideChange","slideChangeTransitionEnd","slideChangeTransitionStart","slideNextTransitionEnd","slideNextTransitionStart","slidePrevTransitionEnd","slidePrevTransitionStart","slideResetTransitionStart","slideResetTransitionEnd","sliderMove","sliderFirstMove","slidesLengthChange","slidesGridLengthChange","snapGridLengthChange","snapIndexChange","swiper","tap","toEdge","touchEnd","touchMove","touchMoveOpposite","touchStart","transitionEnd","transitionStart","unlock","update","virtualUpdate","zoomChange"],setup(t,i){let{slots:o,emit:u}=i;const{tag:s,wrapperTag:p}=t,n=h("swiper"),l=h(null),e=h(!1),c=h(!1),d=h(null),r=h(null),S=h(null),m={value:[]},C={value:[]},M=h(null),z=h(null),k=h(null),D=h(null),{params:I,passedParams:le}=W(t);L(o,m,C),S.value=le,C.value=m.value;const oe=()=>{L(o,m,C),e.value=!0};I.onAny=function(v){for(var f=arguments.length,B=new Array(f>1?f-1:0),N=1;N<f;N++)B[N-1]=arguments[N];u(v,...B)},Object.assign(I.on,{_beforeBreakpoint:oe,_containerClasses(v,f){n.value=f}});const $={...I};if(delete $.wrapperClass,r.value=new _e($),r.value.virtual&&r.value.params.virtual.enabled){r.value.virtual.slides=m.value;const v={cache:!1,slides:m.value,renderExternal:f=>{l.value=f},renderExternalUpdate:!1};F(r.value.params.virtual,v),F(r.value.originalParams.virtual,v)}Z(()=>{!c.value&&r.value&&(r.value.emitSlidesClasses(),c.value=!0);const{passedParams:v}=W(t),f=Xe(v,S.value,m.value,C.value,B=>B.props&&B.props.key);S.value=v,(f.length||e.value)&&r.value&&!r.value.destroyed&&Ce({swiper:r.value,slides:m.value,passedParams:v,changedParams:f,nextEl:M.value,prevEl:z.value,scrollbarEl:D.value,paginationEl:k.value}),e.value=!1}),K("swiper",r),ge(l,()=>{ve(()=>{Qe(r.value)})}),H(()=>{d.value&&(Ke({el:d.value,nextEl:M.value,prevEl:z.value,paginationEl:k.value,scrollbarEl:D.value,swiper:r.value},I),u("swiper",r.value))}),J(()=>{r.value&&!r.value.destroyed&&r.value.destroy(!0,!1)});function ie(v){return I.virtual?Ye(r,v,l.value):(v.forEach((f,B)=>{f.props||(f.props={}),f.props.swiperRef=r,f.props.swiperSlideIndex=B}),v)}return()=>{const{slides:v,slots:f}=L(o,m,C);return w(s,{ref:d,class:te(n.value)},[f["container-start"],w(p,{class:Se(I.wrapperClass)},[f["wrapper-start"],ie(v),f["wrapper-end"]]),Q(t)&&[w("div",{ref:z,class:"swiper-button-prev"}),w("div",{ref:M,class:"swiper-button-next"})],ee(t)&&w("div",{ref:D,class:"swiper-scrollbar"}),Y(t)&&w("div",{ref:k,class:"swiper-pagination"}),f["container-end"]])}}},tt={name:"SwiperSlide",props:{tag:{type:String,default:"div"},swiperRef:{type:Object,required:!1},swiperSlideIndex:{type:Number,default:void 0,required:!1},zoom:{type:Boolean,default:void 0,required:!1},lazy:{type:Boolean,default:!1,required:!1},virtualIndex:{type:[String,Number],default:void 0}},setup(t,i){let{slots:o}=i,u=!1;const{swiperRef:s}=t,p=h(null),n=h("swiper-slide"),l=h(!1);function e(r,S,m){S===p.value&&(n.value=m)}H(()=>{!s||!s.value||(s.value.on("_slideClass",e),u=!0)}),me(()=>{u||!s||!s.value||(s.value.on("_slideClass",e),u=!0)}),Z(()=>{!p.value||!s||!s.value||(typeof t.swiperSlideIndex<"u"&&(p.value.swiperSlideIndex=t.swiperSlideIndex),s.value.destroyed&&n.value!=="swiper-slide"&&(n.value="swiper-slide"))}),J(()=>{!s||!s.value||s.value.off("_slideClass",e)});const c=R(()=>({isActive:n.value.indexOf("swiper-slide-active")>=0,isVisible:n.value.indexOf("swiper-slide-visible")>=0,isPrev:n.value.indexOf("swiper-slide-prev")>=0,isNext:n.value.indexOf("swiper-slide-next")>=0}));K("swiperSlide",c);const d=()=>{l.value=!0};return()=>w(t.tag,{class:te(`${n.value}`),ref:p,"data-swiper-slide-index":typeof t.virtualIndex>"u"&&s&&s.value&&s.value.params.loop?t.swiperSlideIndex:t.virtualIndex,onLoadCapture:d},t.zoom?w("div",{class:"swiper-zoom-container","data-swiper-zoom":typeof t.zoom=="number"?t.zoom:void 0},[o.default&&o.default(c.value),t.lazy&&!l.value&&w("div",{class:"swiper-lazy-preloader"})]):[o.default&&o.default(c.value),t.lazy&&!l.value&&w("div",{class:"swiper-lazy-preloader"})])}},nt={class:"pt-[100px]"},at={class:"container"},st={class:"flex flex-col lg:flex-row items-center justify-between"},lt={class:"mt-10 lg:mt-0 w-full lg:w-1/2"},ot=["src"],it={class:"pt-[100px]"},rt={class:"container"},dt={class:"flex flex-col-reverse gap-6 lg:flex-row items-center justify-between"},ut={class:"w-full lg:w-1/2"},pt=["src"],ct={class:"w-full lg:w-1/2 grid grid-cols-1 sm:grid-cols-2 sm:gap-6 mt-10 lg:mt-0 relative",style:{backgroundPosition:"center",backgroundRepeat:"no-repeat"}},ft={class:"pt-[100px]"},mt={class:"container"},gt={class:"grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"},vt={class:"flex sm:mb-12 mb-6"},ht=["src","alt"],xt={class:"text-xl font-semibold mb-5"},yt={class:"leading-7"},bt={class:"pt-[100px]"},wt={class:"container"},_t={class:"pt-[100px]"},Ct={class:"container"},St={class:"grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5"},Bt={class:"w-[138px] h-[138px] bg-white rounded-full flex items-center justify-center mb-5"},Et=["src","alt"],Ot={class:"text-lg font-semibold text-center"},It={class:"py-[100px]"},Pt={class:"container"},Tt={class:"mx-auto pt-10 sm:px-4"},Ft={class:"flex flex-col lg:flex-row items-center lg:gap-6 gap-14"},Nt={class:"bg-white max-w-[427px] py-7 lg:px-20 px-12 rounded-2xl shadow-md text-center flex-1"},jt={class:"text-[#FFDC64] flex justify-center gap-[5px] mb-6"},At={class:"flex justify-center mt-3 -space-x-5"},Rt={class:"flex justify-center mt-3 -space-x-5"},Mt=["src"],zt={class:"max-w-screen-lg mx-auto overflow-hidden"},kt={class:"lg:p-6 rounded-lg max-w-[552px]"},Dt={class:"flex items-center gap-3 mb-5"},Lt=["src","alt"],Ut={class:"font-semibold"},Ht={class:"text-gray-500 text-sm"},$t={class:"text-[#FFDC64] flex gap-[5px] mb-6"},qt={class:"sm-leading-9 leading-8"},Vt={class:"flex justify-end gap-4 mt-4"},Wt={class:"custom-prev bg-primarycolor text-white p-2 rounded-[15px]"},Gt={class:"custom-next bg-primarycolor text-white p-2 rounded-[15px]"},Zt={__name:"HeroSection",setup(t){const i=[ne,ae,se,Ge,Ze],o=R(()=>"hidden");return(u,s)=>{const p=re;return b(),_(E,null,[g(ye),a("section",nt,[a("div",at,[a("div",st,[s[0]||(s[0]=he('<div class="max-w-xl"><h1 class="text-6xl max-lg:text-5xl max-sm:text-4xl font-black"> Creative, Digital, <span class="text-primarycolor">Experiences</span></h1><p class="my-[30px] text-xl text-[#787878]"> We help businesses, startups, and build brands, websites &amp; apps that consumers love. </p><div><a href="#" class="hidden lg:flex items-center gap-2 bg-primarycolor rounded-full overflow-hidden text-white relative h-[57px] w-[182px] border-0 text-[18px] font-medium text-custom-white transition-all duration-500 group" aria-label="Theme Button"><span class="absolute bg-secondarycolor h-full p-[16px_22px] rounded-[80px_0_80px_80px] text-center flex items-center justify-center"> Contact Us </span><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 15 15" fill="none" class="absolute top-[20px] right-[18px] transition-transform duration-500 group-hover:rotate-45" width="15" height="15"><path d="M1.24998 15C0.874983 15 0.624988 14.875 0.374993 14.625C-0.124998 14.125 -0.124998 13.375 0.374993 12.875L12.8748 0.375C13.3747 -0.125 14.1247 -0.125 14.6247 0.375C15.1247 0.875 15.1247 1.625 14.6247 2.125L2.12496 14.625C1.87496 14.875 1.62497 15 1.24998 15Z" fill="white"></path><path d="M13.75 13.75C13 13.75 12.5 13.25 12.5 12.5V2.5H2.50022C1.75023 2.5 1.25024 2 1.25024 1.25C1.25024 0.5 1.75023 0 2.50022 0H13.75C14.5 0 15 0.5 15 1.25V12.5C15 13.25 14.5 13.75 13.75 13.75Z" fill="white"></path></svg></a></div></div>',1)),a("div",lt,[a("img",{src:y(je),alt:"Digital Experience",class:"w-full max-w-lg mx-auto animate-ballunShape"},null,8,ot)])])])]),a("section",it,[a("div",rt,[a("div",dt,[a("div",ut,[a("img",{src:y(Ae),alt:"Brand Logo",class:"max-lg:mx-auto"},null,8,pt)]),a("div",ct,[a("div",null,[g(A,{value:"35000",label:"Happy Customers Around the World"}),g(A,{value:"250",label:"Trusted best partners and sponsors"})]),a("div",null,[g(A,{value:"120",label:"Best client support award achieved",extraClass:"lg:mt-[60px]"}),g(A,{value:"50",label:"Active users using our best services"})])])])])]),a("section",ft,[a("div",mt,[g(j,{title:"Our Services",subtitle:"How can I make things easier for you?"}),a("div",gt,[(b(!0),_(E,null,P(y(be),(n,l)=>(b(),_("div",{key:l,class:"bg-transparent rounded-2xl sm:p-[34px] p-5 border border-[#CFCFCF] hover:bg-white hover:shadow-lg transition-all duration-300 group"},[a("div",vt,[a("img",{src:n.icon,alt:`${n.title} Icon`},null,8,ht),s[1]||(s[1]=a("div",{class:"ml-auto text-lg font-bold transition-transform max-h-fit duration-300 group-hover:rotate-45"},[a("svg",{width:"16",height:"16",viewBox:"0 0 20 20",fill:"none",xmlns:"http://www.w3.org/2000/svg"},[a("path",{d:"M3.31625 1.66838C3.31625 1.22589 3.49202 0.801537 3.80491 0.488656C4.11779 0.175775 4.54214 0 4.98462 0H18.3316C18.7741 0 19.1985 0.175775 19.5113 0.488656C19.8242 0.801537 20 1.22589 20 1.66838V15.0154C20 15.4579 19.8242 15.8822 19.5113 16.1951C19.1985 16.508 18.7741 16.6838 18.3316 16.6838C17.8891 16.6838 17.4648 16.508 17.1519 16.1951C16.839 15.8822 16.6632 15.4579 16.6632 15.0154V5.69583L2.82741 19.5317C2.51276 19.8356 2.09132 20.0037 1.65388 19.9999C1.21644 19.9961 0.797987 19.8207 0.488656 19.5113C0.179326 19.202 0.00386433 18.7836 6.30687e-05 18.3461C-0.00373819 17.9087 0.164425 17.4872 0.468333 17.1726L14.3042 3.33675H4.98462C4.54214 3.33675 4.11779 3.16098 3.80491 2.84809C3.49202 2.53521 3.31625 2.11086 3.31625 1.66838Z",fill:"black"})])],-1))]),a("h3",xt,O(n.title),1),a("p",yt,O(n.description),1)]))),128))])])]),a("section",bt,[a("div",wt,[g(j,{title:"PROJECTS",subtitle:"Our Latest Projects"}),g(p,{limit:6})])]),a("section",_t,[a("div",Ct,[g(j,{title:"Our Services",subtitle:"Our Working Process"}),a("div",St,[(b(!0),_(E,null,P(y(We),(n,l)=>(b(),_("div",{key:l,class:"flex flex-col items-center justify-center p-6 rounded-[10px] hover:shadow-lg",style:xe({backgroundColor:n.bgColor,color:n.textColor})},[a("div",Bt,[a("img",{src:n.icon,alt:`${n.title} Icon`},null,8,Et)]),a("h3",Ot,O(n.title),1)],4))),128))])])]),a("section",It,[a("div",Pt,[g(j,{title:"TESTIMONIAL",subtitle:"Read what they have to say about working with us"}),a("div",Tt,[a("div",Ft,[a("div",Nt,[s[2]||(s[2]=a("h2",{class:"text-[80px] leading-[112px] font-bold"},"4.8",-1)),a("div",jt,[(b(),_(E,null,P(5,n=>a("span",{key:n},[g(y(V),{size:"18",fill:"#FFDC64"})])),64))]),s[3]||(s[3]=a("p",{class:"text-black text-lg font-medium mb-6"},"(40+ Reviews)",-1)),s[4]||(s[4]=a("p",{class:"text-black text-xl font-medium mb-6"}," Customer experiences that speak for themselves ",-1)),a("div",At,[a("div",Rt,[(b(),_(E,null,P(i,(n,l)=>a("img",{key:l,src:n,class:"w-[50px] h-[50px] rounded-full"},null,8,Mt)),64))])])]),a("div",zt,[g(y(et),{modules:[y(Be)],navigation:{nextEl:".custom-next",prevEl:".custom-prev"},"space-between":20,"slides-per-view":1,class:"overflow-hidden"},{default:q(()=>[(b(!0),_(E,null,P(y(Je),(n,l)=>(b(),G(y(tt),{key:l},{default:q(()=>[a("div",kt,[a("div",Dt,[a("img",{src:n.image,class:"w-12 h-12 rounded-full",alt:n.name},null,8,Lt),a("div",null,[a("h4",Ut,O(n.name),1),a("p",Ht,O(n.role),1)])]),a("div",$t,[(b(),_(E,null,P(5,e=>a("span",{key:e},[g(y(V),{class:"w-6 h-6",fill:"#FFDC64",stroke:y(o)},null,8,["stroke"])])),64))]),a("p",qt,O(n.review),1)])]),_:2},1024))),128))]),_:1},8,["modules"]),a("div",Vt,[a("button",Wt,[g(y(Ie),{class:"text-white"})]),a("button",Gt,[g(y(Ee),{class:"text-white"})])])])])])])])],64)}}},Jt={layout:"default"},rn=Object.assign(Jt,{__name:"home",setup(t){return Oe("home"),(i,o)=>(b(),_("div",null,[g(Zt)]))}});export{rn as default};
