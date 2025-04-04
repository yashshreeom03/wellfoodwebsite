import{_}from"./BBTD7NV7.js";import{e as w,v as $,f as k,l as B,c as x,o as m,a as t,b as s,w as l,d as n,n as b,F as C,h as M,t as V,m as j,i as r,x as v,q as z,y as I}from"./oWZvEsk1.js";import{F as p,c as N,e as T,g as U}from"./Bmkk0sAq.js";const H={class:"container"},D={class:"flex items-center justify-between gap-4"},P={class:"flex items-center gap-4"},E={class:"hidden lg:flex gap-10"},F={class:"px-4 py-8 border-b border-gray-100 flex justify-between items-center"},R={class:"flex flex-col"},y="/shreeom_website/Images/logos/logo.png",A={__name:"Header",setup(d){const i=w(!1),e=w(!1);$();const o=()=>{i.value=!i.value},u=()=>{i.value=!1},f=()=>{e.value=window.scrollY>200};return k(()=>{window.addEventListener("scroll",f)}),B(()=>{window.removeEventListener("scroll",f)}),(L,a)=>{const c=_;return m(),x("header",{class:b(["bg-transparent py-7 absolute top-0 left-0 w-full z-50 transition-all duration-1000",{"sticky top-0 bg-white/30 backdrop-blur-[50px] w-full shadow-lg py-4 animate-fadeInDown":e.value}])},[t("div",H,[t("div",D,[t("div",P,[s(c,{to:"/",class:"block"},{default:l(()=>[t("img",{src:y,alt:"main logo",class:"h-auto w-auto max-sm:w-4/5"})]),_:1})]),t("nav",E,[s(c,{to:"/services",class:"text-lg font-medium text-black hover:text-primarycolor transition"},{default:l(()=>a[0]||(a[0]=[n("Services")])),_:1}),s(c,{to:"/technology",class:"text-lg font-medium text-black hover:text-primarycolor transition"},{default:l(()=>a[1]||(a[1]=[n("Technology")])),_:1}),s(c,{to:"/projects",class:"text-lg font-medium text-black hover:text-primarycolor transition"},{default:l(()=>a[2]||(a[2]=[n("Projects")])),_:1}),s(c,{to:"/company",class:"text-lg font-medium text-black hover:text-primarycolor transition"},{default:l(()=>a[3]||(a[3]=[n("Company")])),_:1}),s(c,{to:"/career",class:"text-lg font-medium text-black hover:text-primarycolor transition"},{default:l(()=>a[4]||(a[4]=[n("Career")])),_:1}),s(c,{to:"/contact",class:"lg:hidden"},{default:l(()=>a[5]||(a[5]=[n("Contact Us")])),_:1})]),t("div",{class:b(["fixed top-0 left-0 w-full h-screen bg-black bg-opacity-50 z-40 transition-opacity duration-300 lg:hidden",{"opacity-100 visible":i.value,"opacity-0 invisible":!i.value}]),onClick:u},null,2),t("nav",{class:b(["fixed top-0 left-0 w-[320px] bg-white shadow-lg h-screen z-50 transition-transform duration-300 lg:hidden",{"translate-x-0":i.value,"-translate-x-full":!i.value}])},[t("div",F,[s(c,{to:"/",class:"block"},{default:l(()=>[t("img",{src:y,alt:"main logo",class:"h-auto w-[60%]"})]),_:1}),t("button",{class:"lg:hidden",onClick:u,"aria-label":"Close menu"},a[6]||(a[6]=[t("svg",{width:"14",height:"14",viewBox:"0 0 14 14",fill:"none",xmlns:"http://www.w3.org/2000/svg",class:"text-black"},[t("path",{d:"M13.5857 2.39091C14.1323 1.84429 14.1323 0.956583 13.5857 0.409964C13.039 -0.136655 12.1513 -0.136655 11.6047 0.409964L7 5.01905L2.39091 0.414337C1.84429 -0.132282 0.956583 -0.132282 0.409964 0.414337C-0.136655 0.960956 -0.136655 1.84866 0.409964 2.39528L5.01905 7L0.414337 11.6091C-0.132282 12.1557 -0.132282 13.0434 0.414337 13.59C0.960956 14.1367 1.84866 14.1367 2.39528 13.59L7 8.98095L11.6091 13.5857C12.1557 14.1323 13.0434 14.1323 13.59 13.5857C14.1367 13.039 14.1367 12.1513 13.59 11.6047L8.98095 7L13.5857 2.39091Z",fill:"black"})],-1)]))]),t("ul",R,[(m(),x(C,null,M(["Services","Technology","Projects","Company","Career","Contact"],(g,S)=>t("li",{key:S,class:"py-3 border-b border-gray-100 px-4"},[s(c,{to:"/"+g.toLowerCase(),onClick:u,class:"text-lg font-medium hover:text-primarycolor transition"},{default:l(()=>[n(V(g),1)]),_:2},1032,["to"])])),64))])],2),t("button",{class:"block lg:hidden p-2",onClick:o,"aria-label":"Open menu"},a[7]||(a[7]=[t("svg",{width:"18",height:"14",viewBox:"0 0 18 14",fill:"none",xmlns:"http://www.w3.org/2000/svg",class:"text-black"},[t("path",{d:"M17 13H1M17 7H1M17 1H1",stroke:"black","stroke-width":"2","stroke-linecap":"round"})],-1)])),s(c,{to:"/contact",class:"lg:flex hidden theme-btn","aria-label":"Contact Us"},{default:l(()=>a[8]||(a[8]=[n(" Contact Us ")])),_:1})])])],2)}}},O=""+new URL("cta-section.UIO9OtJ5.png",import.meta.url).href,Y={class:"container"},q={class:"max-w-[375px] mx-auto text-center"},G={__name:"cta",setup(d){return(i,e)=>{const o=_;return m(),x("section",{class:"pb-[100px] bg-auto bg-center bg-no-repeat",style:j({backgroundImage:`url(${r(O)})`})},[t("div",Y,[t("div",q,[e[1]||(e[1]=t("h2",{class:"text-black md:text-[45px] md:leading-[50px] text-3xl font-semibold"},"Have a big idea?",-1)),e[2]||(e[2]=t("p",{class:"my-[33px]"},"Let's bring it to life together!",-1)),s(o,{to:"/",class:"theme-btn px-[60px] py-[14px] inline-block"},{default:l(()=>e[0]||(e[0]=[n("Get started")])),_:1})])])],4)}}};/*!
 * Font Awesome Free 6.7.2 by @fontawesome - https://fontawesome.com
 * License - https://fontawesome.com/license/free (Icons: CC BY 4.0, Fonts: SIL OFL 1.1, Code: MIT License)
 * Copyright 2024 Fonticons, Inc.
 */const Z={prefix:"fab",iconName:"linkedin-in",icon:[448,512,[],"f0e1","M100.28 448H7.4V148.9h92.88zM53.79 108.1C24.09 108.1 0 83.5 0 53.8a53.79 53.79 0 0 1 107.58 0c0 29.7-24.1 54.3-53.79 54.3zM447.9 448h-92.68V302.4c0-34.7-.7-79.2-48.29-79.2-48.29 0-55.69 37.7-55.69 76.7V448h-92.78V148.9h89.08v40.8h1.3c12.4-23.5 42.69-48.3 87.88-48.3 94 0 111.28 61.9 111.28 142.3V448z"]},J={prefix:"fab",iconName:"facebook-f",icon:[320,512,[],"f39e","M80 299.3V512H196V299.3h86.5l18-97.8H196V166.9c0-51.7 20.3-71.5 72.7-71.5c16.3 0 29.4 .4 37 1.2V7.9C291.4 4 256.4 0 236.2 0C129.3 0 80 50.5 80 159.4v42.1H14v97.8H80z"]},K={prefix:"fab",iconName:"instagram",icon:[448,512,[],"f16d","M224.1 141c-63.6 0-114.9 51.3-114.9 114.9s51.3 114.9 114.9 114.9S339 319.5 339 255.9 287.7 141 224.1 141zm0 189.6c-41.1 0-74.7-33.5-74.7-74.7s33.5-74.7 74.7-74.7 74.7 33.5 74.7 74.7-33.6 74.7-74.7 74.7zm146.4-194.3c0 14.9-12 26.8-26.8 26.8-14.9 0-26.8-12-26.8-26.8s12-26.8 26.8-26.8 26.8 12 26.8 26.8zm76.1 27.2c-1.7-35.9-9.9-67.7-36.2-93.9-26.2-26.2-58-34.4-93.9-36.2-37-2.1-147.9-2.1-184.9 0-35.8 1.7-67.6 9.9-93.9 36.1s-34.4 58-36.2 93.9c-2.1 37-2.1 147.9 0 184.9 1.7 35.9 9.9 67.7 36.2 93.9s58 34.4 93.9 36.2c37 2.1 147.9 2.1 184.9 0 35.9-1.7 67.7-9.9 93.9-36.2 26.2-26.2 34.4-58 36.2-93.9 2.1-37 2.1-147.8 0-184.8zM398.8 388c-7.8 19.6-22.9 34.7-42.6 42.6-29.5 11.7-99.5 9-132.1 9s-102.7 2.6-132.1-9c-19.6-7.8-34.7-22.9-42.6-42.6-11.7-29.5-9-99.5-9-132.1s-2.6-102.7 9-132.1c7.8-19.6 22.9-34.7 42.6-42.6 29.5-11.7 99.5-9 132.1-9s102.7-2.6 132.1 9c19.6 7.8 34.7 22.9 42.6 42.6 11.7 29.5 9 99.5 9 132.1s2.7 102.7-9 132.1z"]},W={class:"bg-[#02261D] pt-[64px]"},X={class:"container"},Q={class:"px-4 grid grid-cols-1 md:grid-cols-2 xl:grid-cols-12 gap-6"},tt={class:"xl:col-span-4"},et={class:"flex gap-4"},st={href:"#",class:"border rounded-[3px] border-[#295048] h-[35px] w-[35px] flex items-center justify-center"},ot={href:"#",class:"border rounded-[3px] border-[#295048] h-[35px] w-[35px] flex items-center justify-center"},lt={href:"#",class:"border rounded-[3px] border-[#295048] h-[35px] w-[35px] flex items-center justify-center"},nt={class:"xl:col-span-2"},at={class:"space-y-4"},it={class:"xl:col-span-3"},rt={class:"space-y-4"},ct={class:"xl:col-span-3"},dt={class:"space-y-3 text-sm"},ut={class:"flex items-center gap-3"},pt={class:"border rounded-[3px] border-[#295048] h-[35px] w-[35px] flex items-center justify-center"},xt={class:"flex items-center gap-3"},mt={class:"border rounded-[3px] border-[#295048] h-[35px] w-[35px] flex items-center justify-center"},ft={class:"flex items-start gap-3"},gt={class:"border rounded-[3px] border-[#295048] h-[35px] min-w-[35px] flex items-center justify-center"},ht={class:"md:flex max-md:text-center justify-between gap-3 flex-wrap mt-14 border-t border-[#B8E0D3] w-full py-9"},bt={class:"md:flex max-md:mt-4 items-center gap-12 text-white"},wt="/shreeom_website/Images/logos/logo-white.png",vt={__name:"Footer",setup(d){return(i,e)=>{const o=_;return m(),x("footer",W,[t("div",X,[t("div",Q,[t("div",tt,[t("img",{src:wt,alt:"Shreeom Logo",class:"mb-[25px]"}),e[0]||(e[0]=t("p",{class:"mb-[30px] text-[#B5B5B5]"}," shreeomsoft is a providing top-notch website and mobile app services. The company was founded in 2023 and headquartered in Surat, India. ",-1)),t("div",et,[t("a",st,[s(r(p),{icon:r(Z),class:"text-white h-[15px] w-[15px]"},null,8,["icon"])]),t("a",ot,[s(r(p),{icon:r(J),class:"text-white h-[15px] w-[15px]"},null,8,["icon"])]),t("a",lt,[s(r(p),{icon:r(K),class:"text-white h-[15px] w-[15px]"},null,8,["icon"])])])]),t("div",nt,[e[6]||(e[6]=t("h3",{class:"font-medium text-white mb-6 text-xl"},"Company",-1)),t("ul",at,[t("li",null,[s(o,{to:"/",class:"text-[#B5B5B5]"},{default:l(()=>e[1]||(e[1]=[n("About Us ")])),_:1})]),t("li",null,[s(o,{to:"/services",class:"text-[#B5B5B5]"},{default:l(()=>e[2]||(e[2]=[n("Services")])),_:1})]),t("li",null,[s(o,{to:"/Technology",class:"text-[#B5B5B5]"},{default:l(()=>e[3]||(e[3]=[n("Technology")])),_:1})]),t("li",null,[s(o,{to:"/Projects",class:"text-[#B5B5B5]"},{default:l(()=>e[4]||(e[4]=[n("Portfolio")])),_:1})]),t("li",null,[s(o,{to:"/Career",class:"text-[#B5B5B5]"},{default:l(()=>e[5]||(e[5]=[n("Career")])),_:1})])])]),t("div",it,[e[11]||(e[11]=t("h3",{class:"font-medium text-white mb-6 text-xl"},"Services",-1)),t("ul",rt,[t("li",null,[s(o,{to:"/services",class:"text-[#B5B5B5]"},{default:l(()=>e[7]||(e[7]=[n("UI/UX Designing")])),_:1})]),t("li",null,[s(o,{to:"/services",class:"text-[#B5B5B5]"},{default:l(()=>e[8]||(e[8]=[n("Web Design & Development")])),_:1})]),t("li",null,[s(o,{to:"/services",class:"text-[#B5B5B5]"},{default:l(()=>e[9]||(e[9]=[n("Digital Marketing")])),_:1})]),t("li",null,[s(o,{to:"/services",class:"text-[#B5B5B5]"},{default:l(()=>e[10]||(e[10]=[n("Maintenance & Support")])),_:1})])])]),t("div",ct,[e[15]||(e[15]=t("h3",{class:"font-medium text-white mb-6 text-xl"},"Contact us",-1)),t("ul",dt,[t("li",ut,[t("span",pt,[s(r(p),{icon:r(N),class:"text-white h-[15px] w-[15px]"},null,8,["icon"])]),e[12]||(e[12]=t("a",{href:"mailto:info@shreeomsoft.com",class:"text-[#B5B5B5]"},"info@shreeomsoft.com",-1))]),t("li",xt,[t("span",mt,[s(r(p),{icon:r(T),class:"text-white h-[15px] w-[15px]"},null,8,["icon"])]),e[13]||(e[13]=t("a",{href:"tel:+919586773991",class:"text-[#B5B5B5]"},"+91 9586773991",-1))]),t("li",ft,[t("span",gt,[s(r(p),{icon:r(U),class:"text-white h-[15px] w-[15px]"},null,8,["icon"])]),e[14]||(e[14]=t("p",{class:"text-[#B5B5B5]"}," 214, Radhika Optima, Yamuna Chowk, Satellite Rd, Mota Varachha, Surat, Gujarat 394101 ",-1))])])])]),t("div",ht,[e[19]||(e[19]=t("p",{class:"text-sm text-white"},"© 2025. Shreeomsoft All Rights Reserved.",-1)),t("ul",bt,[t("li",null,[s(o,{to:"/",class:"text-sm"},{default:l(()=>e[16]||(e[16]=[n("Terms of Service")])),_:1})]),t("li",null,[s(o,{to:"/",class:"text-sm"},{default:l(()=>e[17]||(e[17]=[n("Privacy Policy")])),_:1})]),t("li",null,[s(o,{to:"/",class:"text-sm"},{default:l(()=>e[18]||(e[18]=[n("Cookie Policy")])),_:1})])])])])])}}};/**
 * @license lucide-vue-next v0.477.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const _t=d=>d.replace(/([a-z0-9])([A-Z])/g,"$1-$2").toLowerCase();/**
 * @license lucide-vue-next v0.477.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */var h={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":2,"stroke-linecap":"round","stroke-linejoin":"round"};/**
 * @license lucide-vue-next v0.477.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const yt=({size:d,strokeWidth:i=2,absoluteStrokeWidth:e,color:o,iconNode:u,name:f,class:L,...a},{slots:c})=>v("svg",{...h,width:d||h.width,height:d||h.height,stroke:o||h.stroke,"stroke-width":e?Number(i)*24/Number(d):i,class:["lucide",`lucide-${_t(f??"icon")}`],...a},[...u.map(g=>v(...g)),...c.default?[c.default()]:[]]);/**
 * @license lucide-vue-next v0.477.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const kt=(d,i)=>(e,{slots:o})=>v(yt,{...e,iconNode:i,name:d},o);/**
 * @license lucide-vue-next v0.477.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Bt=kt("ChevronsUpIcon",[["path",{d:"m17 11-5-5-5 5",key:"e8nh98"}],["path",{d:"m17 18-5-5-5 5",key:"2avn1x"}]]),Ct={__name:"ScrollToTopButton",setup(d){const i=w(!1),e=()=>{window.scrollTo({top:0,behavior:"smooth"})},o=()=>{i.value=window.scrollY>300};return k(()=>{window.addEventListener("scroll",o)}),B(()=>{window.removeEventListener("scroll",o)}),(u,f)=>i.value?(m(),x("button",{key:0,onClick:e,class:"fixed bottom-6 right-6 bg-primarycolor text-white p-3 rounded-full z-50 shadow-lg transition-opacity duration-1000","aria-label":"Scroll to top"},[s(r(Bt))])):z("",!0)}},Mt={__name:"default",setup(d){return(i,e)=>(m(),x(C,null,[s(A),t("main",null,[I(i.$slots,"default")]),s(G),s(vt),s(Ct)],64))}};export{Mt as default};
