import{h as L,i as _,j as p,k,l as F,m as x,c as i,o,f as M,n,a,g as V,q as Z,s as u,v as c,t as d,x as E,b as v}from"./X6lLb_1H.js";import{_ as S}from"./Bkf_VgI7.js";import{_ as h}from"./CKJumxPj.js";import{_ as j}from"./CpiYR_6S.js";import"./Cb-gBDs2.js";const A={class:"py-[100px]"},B={class:"container mx-auto px-4"},O={class:"grid grid-cols-1 lg:grid-cols-2 gap-10"},R={class:"bg-white sm:p-10 p-8 rounded-[20px] shadow-serviceshadow"},T={class:"grid grid-cols-1 sm:grid-cols-2 gap-[30px]"},U={key:0,class:"text-red-500"},q={key:0,class:"text-red-500"},D={key:0,class:"text-red-500"},P={key:0,class:"text-red-500"},$={key:0,class:"text-red-500"},z={key:0,class:"text-red-500"},H="6LcP7OgqAAAAAIS0mR4OP9l7V6z6wmdORIlXLdps",G=L({__name:"Contact",setup(g){const C=_(),e=p({firstName:"",lastName:"",phoneNumber:"",email:"",message:""}),l=p({}),{$emailjs:b}=k(),m=p(""),f=p(!1),w=s=>{m.value=s,s&&delete l.value.recaptcha};F(()=>{window.grecaptcha&&window.grecaptcha.ready(()=>{window.grecaptcha.render("recaptcha-container",{sitekey:H,callback:w})})});const y=()=>{let s={};return e.value.firstName||(s.firstName="First Name is required"),e.value.lastName||(s.lastName="Last Name is required"),/^\d{10}$/.test(e.value.phoneNumber)||(s.phoneNumber="Enter a valid 10-digit phone number"),/\S+@\S+\.\S+/.test(e.value.email)||(s.email="Enter a valid email address"),e.value.message||(s.message="Message cannot be empty"),m.value||(s.recaptcha="Please verify that you are not a robot"),l.value=s,Object.keys(s).length===0},N=async()=>{if(y()){C.success("Form submitted successfully!"),await E(),f.value=!0;try{await b.send("service_k2hllnx","template_a89i85s",{firstName:e.value.firstName,lastName:e.value.lastName,phoneNumber:e.value.phoneNumber,email:e.value.email,message:e.value.message},"YM4UwXKM7RnCGJbwg"),f.value=!1,console.log(e.value),e.value={firstName:"",lastName:"",phoneNumber:"",email:"",message:""},l.value={},m.value="",window.grecaptcha&&window.grecaptcha.reset()}catch(s){console.log(s)}}};return x(e,s=>{Object.keys(s).forEach(t=>{s[t]&&delete l.value[t]})},{deep:!0}),x(m,s=>{s&&delete l.value.recaptcha}),(s,t)=>(o(),i("div",null,[f.value?(o(),M(h,{key:0})):n("",!0),a("section",A,[a("div",B,[a("div",O,[t[7]||(t[7]=V('<div class="relative z-[1]"><div class="absolute top-[-70px] left-[-70px] z-[-1]"><img src="'+S+'" alt="Background"></div><h2 class="text-[50px] font-bold mb-8 leading-[70px]"> Get in <span class="text-primarycolor">Touch</span> with us </h2><p class="text-xl mb-8"> We’d love to hear from you! Whether you have questions, need support, or want to discuss a project, feel free to reach out. </p><hr class="my-8"><div><div class="bg-[#F6F6F6] py-8 px-9 rounded-[20px] justify-around max-sm:flex-wrap flex items-center mb-10"><div class="text-center sm:border-r sm:border-r-2 p-3 sm:border-[#E3DEDE] w-full"><div class="flex justify-center"><svg width="100" height="50" viewBox="0 0 50 50" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M39.5165 30.9732C38.4929 29.9074 37.2582 29.3375 35.9496 29.3375C34.6516 29.3375 33.4064 29.8968 32.3406 30.9627L29.0059 34.2868C28.7315 34.1391 28.4571 34.0019 28.1933 33.8647C27.8134 33.6747 27.4546 33.4953 27.1486 33.3054C24.0249 31.3214 21.1862 28.736 18.4636 25.3908C17.1445 23.7234 16.258 22.3199 15.6143 20.8952C16.4797 20.1038 17.2817 19.2807 18.0626 18.4892C18.3581 18.1937 18.6535 17.8877 18.949 17.5922C21.1651 15.3761 21.1651 12.5057 18.949 10.2896L16.0681 7.40871C15.741 7.08157 15.4033 6.74388 15.0867 6.40619C14.4535 5.75191 13.7887 5.07653 13.1027 4.44336C12.0791 3.43029 10.855 2.89209 9.56754 2.89209C8.28009 2.89209 7.03486 3.43029 5.97957 4.44336L5.95847 4.46447L2.3705 8.08409C1.01974 9.43486 0.249378 11.0811 0.0805328 12.9912C-0.172735 16.0726 0.734809 18.943 1.4313 20.8214C3.14086 25.433 5.69465 29.7069 9.50422 34.2868C14.1264 39.8059 19.6877 44.1643 26.0405 47.2351C28.4677 48.3854 31.7074 49.7467 35.327 49.9789C35.5486 49.9894 35.7808 50 35.9919 50C38.4296 50 40.4768 49.1241 42.0808 47.3829C42.0914 47.3618 42.1125 47.3512 42.1231 47.3301C42.6718 46.6653 43.305 46.0638 43.9698 45.42C44.4236 44.9874 44.8879 44.5336 45.3417 44.0587C46.3864 42.9718 46.9352 41.7054 46.9352 40.4074C46.9352 39.0989 46.3759 37.8431 45.31 36.7878L39.5165 30.9732ZM43.2944 42.0854C43.2839 42.0854 43.2839 42.0959 43.2944 42.0854C42.8829 42.5286 42.4608 42.9296 42.007 43.3728C41.321 44.0271 40.6246 44.713 39.9703 45.4834C38.9044 46.6231 37.6487 47.1613 36.0024 47.1613C35.8441 47.1613 35.6753 47.1613 35.517 47.1507C32.3828 46.9502 29.4702 45.7261 27.2858 44.6813C21.3129 41.7899 16.0681 37.6848 11.7098 32.4823C8.11125 28.145 5.7052 24.135 4.11172 19.8294C3.1303 17.2017 2.77151 15.1545 2.9298 13.2233C3.03533 11.9886 3.51021 10.965 4.38609 10.0891L7.98461 6.49061C8.5017 6.00518 9.05045 5.74136 9.58864 5.74136C10.2535 5.74136 10.7917 6.14237 11.1294 6.48006L11.161 6.51172C11.8047 7.11323 12.4168 7.73585 13.0605 8.40068C13.3877 8.73837 13.7254 9.07606 14.063 9.4243L16.944 12.3052C18.0626 13.4238 18.0626 14.458 16.944 15.5766C16.6379 15.8826 16.3425 16.1887 16.0364 16.4842C15.15 17.3917 14.3058 18.2359 13.3877 19.059C13.3666 19.0802 13.3455 19.0907 13.3349 19.1118C12.4274 20.0194 12.5962 20.9058 12.7862 21.5073L12.8178 21.6023C13.5671 23.4174 14.6223 25.1269 16.2264 27.1636L16.2369 27.1742C19.1495 30.7621 22.2204 33.5587 25.6079 35.7009C26.0405 35.9753 26.4837 36.1969 26.9059 36.4079C27.2858 36.5979 27.6446 36.7773 27.9506 36.9672C27.9928 36.9883 28.035 37.02 28.0772 37.0411C28.436 37.2205 28.7737 37.3049 29.122 37.3049C29.9978 37.3049 30.5466 36.7562 30.726 36.5768L34.3351 32.9677C34.6939 32.6089 35.2637 32.1762 35.9285 32.1762C36.5828 32.1762 37.121 32.5878 37.4481 32.9466L37.4693 32.9677L43.2839 38.7823C44.3708 39.8587 44.3708 40.9667 43.2944 42.0854ZM27.0219 11.8937C29.7868 12.358 32.2984 13.6665 34.3034 15.6716C36.3084 17.6766 37.6064 20.1882 38.0813 22.953C38.1974 23.6495 38.7989 24.135 39.4848 24.135C39.5693 24.135 39.6431 24.1244 39.7276 24.1139C40.5085 23.9872 41.0256 23.2485 40.8989 22.4676C40.3291 19.1224 38.7462 16.0726 36.3295 13.656C33.9129 11.2394 30.8632 9.65646 27.5179 9.08661C26.737 8.95998 26.0089 9.47707 25.8717 10.2474C25.7345 11.0178 26.241 11.767 27.0219 11.8937ZM49.9427 22.0561C49.0035 16.5475 46.4075 11.5349 42.4185 7.5459C38.4296 3.55692 33.417 0.960922 27.9084 0.0217193C27.138 -0.115468 26.4099 0.412174 26.2727 1.18253C26.1461 1.96344 26.6631 2.69159 27.4441 2.82878C32.3617 3.66245 36.8466 5.99463 40.4135 9.55094C43.9804 13.1178 46.302 17.6028 47.1357 22.5204C47.2517 23.2169 47.8533 23.7023 48.5392 23.7023C48.6236 23.7023 48.6975 23.6917 48.7819 23.6812C49.5523 23.5651 50.0799 22.8264 49.9427 22.0561Z" fill="#039873"></path></svg></div><h3 class="font-medium text-xl my-3">Phone Number</h3><a href="tel:+918108483737" class="text-[#333333] text-lg block hover:text-green-500">+91 81084 83737</a><a href="tel:+919586773991" class="text-[#333333] text-lg block hover:text-green-500">+91 95867 73991</a></div><div class="text-center w-full p-3"><div class="flex justify-center"><svg width="60" height="44" viewBox="0 0 60 44" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M54.7266 0.953125H5.27344C2.37164 0.953125 0 3.31434 0 6.22656V37.8672C0 40.7805 2.37316 43.1406 5.27344 43.1406H54.7266C57.6284 43.1406 60 40.7794 60 37.8672V6.22656C60 3.31363 57.6272 0.953125 54.7266 0.953125ZM53.9168 4.46875L31.3622 27.097C30.675 27.7862 29.3254 27.7867 28.6378 27.097L6.0832 4.46875H53.9168ZM3.51562 37.2209V6.87285L18.6404 22.0469L3.51562 37.2209ZM6.0832 39.625L21.1223 24.5369L26.1479 29.5789C28.2074 31.645 31.7934 31.6442 33.8522 29.5789L38.8778 24.537L53.9168 39.625H6.0832ZM56.4844 37.2209L41.3596 22.0469L56.4844 6.87285V37.2209Z" fill="#039873"></path></svg></div><h3 class="font-medium text-xl mt-3 mb-1">Email Address</h3><a href="mailto:info@example.com" class="text-[#333333] text-lg hover:text-green-500">info@example.com</a></div></div><div class="bg-[#F6F6F6] py-8 px-9 rounded-[20px] flex items-center"><div class="mr-4"><svg width="38" height="50" viewBox="0 0 38 50" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M18.9995 0C8.81483 0 0.529297 8.28553 0.529297 18.4702C0.529297 21.8231 2.03299 25.4292 2.09601 25.5813C2.58167 26.734 3.53994 28.5246 4.23095 29.5741L16.895 48.7625C17.4133 49.5491 18.1803 50 18.9995 50C19.8187 50 20.5858 49.5491 21.104 48.7636L33.7692 29.5741C34.4613 28.5246 35.4185 26.734 35.9041 25.5813C35.9671 25.4302 37.4698 21.8242 37.4698 18.4702C37.4698 8.28553 29.1842 0 18.9995 0ZM33.9007 24.7382C33.4671 25.7714 32.5751 27.437 31.9548 28.3779L19.2896 47.5674C19.0397 47.9465 18.9604 47.9465 18.7105 47.5674L6.04538 28.3779C5.42499 27.437 4.53299 25.7703 4.09948 24.7371C4.08101 24.6925 2.70227 21.3733 2.70227 18.4702C2.70227 9.48392 10.0132 2.17297 18.9995 2.17297C27.9858 2.17297 35.2968 9.48392 35.2968 18.4702C35.2968 21.3777 33.9148 24.7056 33.9007 24.7382Z" fill="#039873"></path><path d="M18.9991 8.69299C13.6068 8.69299 9.2207 13.0802 9.2207 18.4713C9.2207 23.8625 13.6068 28.2497 18.9991 28.2497C24.3913 28.2497 28.7774 23.8625 28.7774 18.4713C28.7774 13.0802 24.3913 8.69299 18.9991 8.69299ZM18.9991 26.0767C14.8063 26.0767 11.3937 22.6652 11.3937 18.4713C11.3937 14.2775 14.8063 10.866 18.9991 10.866C23.1918 10.866 26.6045 14.2775 26.6045 18.4713C26.6045 22.6652 23.1918 26.0767 18.9991 26.0767Z" fill="#039873"></path></svg></div><div><h3 class="font-semibold text-gray-800">Address</h3><p class="text-gray-600"> 214, Radhika Optima, Yamuna Chowk, nr. Sudama Chowk, Mota Varachha, Surat, Gujarat 394101 </p></div></div></div></div>',1)),a("div",R,[a("form",{onSubmit:Z(N,["prevent"]),class:"space-y-[20px]"},[a("div",T,[a("div",null,[u(a("input",{"onUpdate:modelValue":t[0]||(t[0]=r=>e.value.firstName=r),type:"text",name:"firstName",placeholder:"First Name",class:"input-field border border-[#7F7F7F] rounded-[15px] p-[15px] text-xl focus:outline-none focus:ring-2 focus:ring-primarycolor focus:border-transparent w-full"},null,512),[[c,e.value.firstName]]),l.value.firstName?(o(),i("span",U,d(l.value.firstName),1)):n("",!0)]),a("div",null,[u(a("input",{"onUpdate:modelValue":t[1]||(t[1]=r=>e.value.lastName=r),type:"text",name:"lastName",placeholder:"Last Name",class:"input-field border border-[#7F7F7F] rounded-[15px] p-[15px] text-xl focus:outline-none focus:ring-2 focus:ring-primarycolor focus:border-transparent w-full"},null,512),[[c,e.value.lastName]]),l.value.lastName?(o(),i("span",q,d(l.value.lastName),1)):n("",!0)])]),a("div",null,[u(a("input",{"onUpdate:modelValue":t[2]||(t[2]=r=>e.value.phoneNumber=r),type:"text",name:"phoneNumber",placeholder:"Phone Number",class:"input-field w-full border border-[#7F7F7F] rounded-[15px] p-[15px] text-xl focus:outline-none focus:ring-2 focus:ring-primarycolor focus:border-transparent"},null,512),[[c,e.value.phoneNumber]]),l.value.phoneNumber?(o(),i("span",D,d(l.value.phoneNumber),1)):n("",!0)]),a("div",null,[u(a("input",{"onUpdate:modelValue":t[3]||(t[3]=r=>e.value.email=r),type:"email",placeholder:"E-mail",class:"input-field w-full border border-[#7F7F7F] rounded-[15px] p-[15px] text-xl focus:outline-none focus:ring-2 focus:ring-primarycolor focus:border-transparent"},null,512),[[c,e.value.email]]),l.value.email?(o(),i("span",P,d(l.value.email),1)):n("",!0)]),a("div",null,[u(a("textarea",{"onUpdate:modelValue":t[4]||(t[4]=r=>e.value.message=r),placeholder:"Message",class:"input-field w-full border border-[#7F7F7F] rounded-[15px] p-[15px] text-xl h-[230px] focus:outline-none focus:ring-2 focus:ring-primarycolor focus:border-transparent"},null,512),[[c,e.value.message]]),l.value.message?(o(),i("span",$,d(l.value.message),1)):n("",!0)]),a("div",null,[t[5]||(t[5]=a("div",{id:"recaptcha-container"},null,-1)),l.value.recaptcha?(o(),i("span",z,d(l.value.recaptcha),1)):n("",!0)]),t[6]||(t[6]=a("button",{type:"submit",class:"w-full bg-primarycolor text-white font-bold p-4 sm:text-2xl text-xl rounded-lg hover:bg-secondarycolor transition-colors"}," Submit Message ",-1))],32)])]),t[8]||(t[8]=a("div",{class:"mt-[100px]"},[a("iframe",{title:"Location Map",src:"https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d232.4369561289513!2d72.87838607335019!3d21.232193659156735!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be04f54da5e363f%3A0x8ff304542ff3d72c!2sRadhika%20Optima!5e0!3m2!1sen!2sin!4v1736922730891!5m2!1sen!2sin",class:"w-full h-[533px] border-0",allowfullscreen:"",loading:"lazy"})],-1))])])]))}}),J={__name:"contact",setup(g){return(C,e)=>(o(),i("div",null,[v(h),v(j,{title:"contact",breadcrumb:"contact"}),v(G)]))}};export{J as default};
