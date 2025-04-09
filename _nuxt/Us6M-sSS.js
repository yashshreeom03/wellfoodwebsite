import{_}from"./Bbu4F4Ma.js";import{e as y,p as j,m as B,c as d,o as p,y as D,a as t,l as i,F as x,i as E,n,h as P,k as I,b as f,t as g,w,d as v,B as S}from"./CyJ8cyDB.js";const C=[{title:"Predict future performance to plan better now",description:"When you start working with Elementor, everything will feel familiar and intuitive. This is possible thanks to interface features like Navigator, Copy/Paste, Copy Style, and more.",buttonText:"View more",buttonColor:"linear-gradient(90deg, #02B78A 0%, #3D927D 100%)",bgColor:"linear-gradient(180deg, #E0FFEE 0%, #F8FFFC 100%)",textColor:"#38947E",bgimgColor:"#0398730A",image:"Images/projects/portfolio-1.png",category:"UI/UX design",boxShadow:"0px 10px 18px 0px #00A87E38"},{title:"Optimize your workflow effortlessly",description:"Work with tools that make everything feel intuitive. Features like Navigator, Copy/Paste, and Smart Automation ensure a seamless experience.",buttonText:"View more",buttonColor:"linear-gradient(90deg, #B7B102 0%, #88923D 100%)",bgColor:"linear-gradient(180deg, #FFFEE0 0%, #FFFFF8 100%)",textColor:"#919438",bgimgColor:"#7398030A",image:"Images/projects/portfolio-1.png",category:"React.js",boxShadow:"0px 10px 18px 0px #89A80038"},{title:"Enhance productivity with intuitive tools",description:"Streamline your work with AI-powered tools, reducing time and effort while maximizing results. Navigate seamlessly with features designed for efficiency.",buttonText:"View more",buttonColor:"linear-gradient(90deg, #B74202 0%, #B35C1E 100%)",bgColor:"linear-gradient(180deg, #FFEBE0 0%, #FFFBF8 100%)",textColor:"#944338",bgimgColor:"#9864030A",image:"Images/projects/portfolio-1.png",category:"Web development",boxShadow:"0px 10px 18px 0px #A8540038"},{title:"Transform ideas into reality effortlessly",description:"With an intuitive interface and real-time insights, decision-making becomes effortless. Optimize strategies and improve outcomes instantly.",buttonText:"View more",buttonColor:"linear-gradient(90deg, #B7028A 0%, #923D86 100%)",bgColor:"linear-gradient(180deg, #FFE0FB 0%, #FFF8FF 100%)",textColor:"#943888",bgimgColor:"#9864030A",image:"Images/projects/portfolio-1.png",category:"PHP",boxShadow:"0px 10px 18px 0px #9F00A838"}],A={key:0,class:"flex flex-wrap gap-4 justify-center mb-[80px]"},U=["src"],V={class:"w-full lg:w-1/2"},T={class:"sm:text-[40px] text-[28px] leading-[30px] sm:leading-[50px] font-semibold"},L={class:"sm:text-lg my-[25px]"},N={class:"w-full lg:w-1/2"},$={class:"sm:text-[40px] text-[28px] leading-[30px] sm:leading-[50px] font-semibold"},R={class:"sm:text-lg my-[25px]"},W=["src"],X={__name:"Projects",props:{showCategories:{type:Boolean,default:!0}},setup(u){const b=y(()=>S().path==="/"),h=I();j(()=>{const s=new IntersectionObserver(o=>{o.forEach(a=>{a.isIntersecting?a.target.classList.add("in-view"):a.target.classList.remove("in-view")})},{threshold:.5});document.querySelectorAll(".card").forEach(o=>s.observe(o))});const F=u,c=B("UI/UX design"),k=y(()=>F.showCategories?C.filter(s=>s.category===c.value):C),l=s=>{c.value=s},r=s=>c.value===s?"bg-[#039873] text-white border-[#039873]":"bg-white border-[#DDDDDD] text-black";return(s,o)=>{const a=_;return p(),d("div",null,[u.showCategories?(p(),d("div",A,[t("button",{onClick:o[0]||(o[0]=e=>l("UI/UX design")),class:i(["px-4 py-2 rounded-lg transition text-lg font-medium border",r("UI/UX design")])}," UI/UX Design ",2),t("button",{onClick:o[1]||(o[1]=e=>l("React.js")),class:i(["px-4 py-2 rounded-lg transition text-lg font-medium border",r("React.js")])}," React.js ",2),t("button",{onClick:o[2]||(o[2]=e=>l("Web development")),class:i(["px-4 py-2 rounded-lg transition text-lg font-medium border",r("Web development")])}," Web Development ",2),t("button",{onClick:o[3]||(o[3]=e=>l("PHP")),class:i(["px-4 py-2 rounded-lg transition text-lg font-medium border",r("PHP")])}," PHP ",2),t("button",{onClick:o[4]||(o[4]=e=>l("Laravel")),class:i(["px-4 py-2 rounded-lg transition text-lg font-medium border",r("Laravel")])}," Laravel ",2),t("button",{onClick:o[5]||(o[5]=e=>l(" node.js")),class:i(["px-4 py-2 rounded-lg transition text-lg font-medium border",r(" node.js")])}," node.js ",2)])):D("",!0),(p(!0),d(x,null,E(k.value,(e,m)=>(p(),d("div",{key:m,class:i(["flex flex-col gap-[45px]","card",b.value?"home-effect":""]),style:n({"--index":m+1})},[t("div",{class:i(["rounded-[20px] p-[30px] sm:p-[50px] flex flex-col gap-6 lg:flex-row items-center justify-between",b.value?"mb-[45px]":""]),style:n({background:e.bgColor})},[m%2!==0?(p(),d(x,{key:0},[t("div",{class:"sm:p-[30px] p-3 rounded-lg",style:n({background:e.bgimgColor})},[t("img",{src:`${P(h).app.baseURL}${e.image}`,alt:"Feature Image",class:"max-w-full rounded-lg shadow"},null,8,U)],4),t("div",V,[t("h6",{class:"text-base mb-[25px] font-semibold uppercase",style:n({color:e.textColor})}," Build Visually ",4),t("h2",T,g(e.title),1),t("p",L,g(e.description),1),f(a,{to:"/projectsDetail",class:"theme-btn Projects-btn inline-block mt-4 px-[60px] py-[14px]",style:n({background:e.buttonColor,"--boxShadow":e.boxShadow})},{default:w(()=>[v(g(e.buttonText),1)]),_:2},1032,["style"])])],64)):(p(),d(x,{key:1},[t("div",N,[t("h6",{class:"text-base mb-[25px] font-semibold uppercase",style:n({color:e.textColor})}," Build Visually ",4),t("h2",$,g(e.title),1),t("p",R,g(e.description),1),f(a,{to:"/projectsDetail",class:"theme-btn Projects-btn inline-block mt-4 px-[60px] py-[14px]",style:n({background:e.buttonColor,"--boxShadow":e.boxShadow})},{default:w(()=>[v(g(e.buttonText),1)]),_:2},1032,["style"])]),t("div",{class:"sm:p-[30px] p-3 rounded-lg",style:n({background:e.bgimgColor})},[t("img",{src:e.image,alt:"Feature Image",class:"max-w-full rounded-lg shadow"},null,8,W)],4)],64))],6)],6))),128))])}}};export{X as _};
