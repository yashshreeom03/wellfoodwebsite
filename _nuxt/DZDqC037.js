import{_ as j}from"./ubae1hck.js";import{c as r,o as l,a as e,t as c,n as S,e as T,f as k,$ as g,b as s,F as b,h as v,i as o,j as M,k as C,l as H,w as F,d as B,m as y}from"./Boju9AsU.js";import{_ as L}from"./DlAUqK2U.js";import{f as Y,F as I,a as P}from"./Dj95_jBY.js";import{_ as Q}from"./I9lB_zCT.js";import{_ as K}from"./BgbjeSR9.js";const _=""+new URL("about-us-1.DfCSyCzG.png",import.meta.url).href,J={props:{title:String,subtitle:String,largeMargin:Boolean},computed:{shouldApplyMargin(){return this.largeMargin}}},V={class:"text-base text-primarycolor mb-[30px]"},X={class:"text-black md:text-[45px] md:leading-[50px] text-3xl font-semibold"};function O(x,d,t,i,a,p){return l(),r("div",{class:S(p.shouldApplyMargin?"mb-[80px]":"?")},[e("h6",V,c(t.title),1),e("h2",X,c(t.subtitle),1)],2)}const h=L(J,[["render",O]]),G={id:"testimonials-section",class:"py-24 bg-white"},D={class:"container"},W={class:"relative text-center"},q={class:"slider-nav slider-img flex max-w-[650px] mx-auto justify-center gap-4 mb-20"},z=["src"],Z={class:"custom-prev absolute max-sm:hidden lg:left-[-20px] left-0 top-[60%] leading-[8px] w-11 h-11 rounded-full bg-white text-black text-2xl opacity-50 hover:opacity-100 transition duration-300",style:{"box-shadow":"0px 0px 27px 1px #00000014"}},$={class:"custom-next absolute max-sm:hidden lg:right-[-20px] right-0 top-[60%] leading-[8px] w-11 h-11 rounded-full bg-white text-black text-2xl opacity-50 hover:opacity-100 transition duration-300",style:{"box-shadow":"0px 0px 27px 1px #00000014"}},ee={class:"slider-for lg:p-[100px] lg:max-w-[1096px] sm:max-w-[80%] mx-auto p-4 sm:p-[30px] rounded-[40px] bg-[#F0F8EC]"},te=["src"],se={class:"sm:text-[22px] text-base font-medium text-[#3A701F] my-[50px] sm:leading-relaxed"},oe={class:"text-lg text-[#3A701F] font-semibold mb-3"},ie={class:"text-sm text-[#3A701F]"},ae={__name:"TestimonialsSlider",setup(x){const d=T(0),t=["/Images/testmonial/reviews-1.png","/Images/testmonial/reviews-2.png","/Images/testmonial/reviews-3.png","/Images/testmonial/reviews-4.png","/Images/testmonial/reviews-5.png","/Images/testmonial/reviews-3.png"],i=[{name:"Jessica",position:"CEO of InnovateTech",rating:5,text:"ShreeOm has been a game-changer for our business! Their IT solutions are innovative, reliable, and perfectly tailored to our needs. The team is professional and always ready to help. Highly recommend!",image:"Images/logos/testmonial-logo-1.png"},{name:"Peter",position:"Stockholm, Sweden",rating:4,text:"ShreeOm has been a game-changer for our business! Their IT solutions are innovative, reliable, and perfectly tailored to our needs",image:"/Images/logos/testmonial-logo-1.png"},{name:"Jessica",position:"Honolulu, HI",rating:5,text:"Their IT solutions are innovative, reliable, and perfectly tailored to our needs. The team is professional and always ready to help.",image:"/Images/logos/testmonial-logo-1.png"},{name:"Peter",position:"Stockholm, Sweden",rating:4,text:"Their IT solutions are innovative, reliable, and perfectly tailored to our needs. The team is professional and always ready to help. ShreeOm has been a game-changer for our business!",image:"/Images/logos/testmonial-logo-1.png"},{name:"Jessica",position:"Honolulu, HI",rating:5,text:"ShreeOm has been a game-changer for our business...",image:"/Images/logos/testmonial-logo-1.png"},{name:"Peter",position:"Stockholm, Sweden",rating:4,text:"Their IT solutions are innovative and reliable...",image:"/Images/logos/testmonial-logo-1.png"}];return k(()=>{g(".slider-for").length>0&&(g(".slider-for").slick({slidesToShow:1,slidesToScroll:1,fade:!0,asNavFor:".slider-nav",arrows:!1,centerMode:!0,centerPadding:"0px"}),g(".slider-nav").slick({slidesToShow:5,slidesToScroll:1,asNavFor:".slider-for",dots:!1,arrows:!1,centerMode:!0,centerPadding:"0px",focusOnSelect:!0,responsive:[{breakpoint:1024,settings:{slidesToShow:3}},{breakpoint:768,settings:{slidesToShow:1}}]}),g(".custom-prev").click(()=>g(".slider-for").slick("slickPrev")),g(".custom-next").click(()=>g(".slider-for").slick("slickNext")),g(".slider-for").on("afterChange",function(a,p,n){d.value=n}))}),(a,p)=>{const n=h;return l(),r("section",G,[e("div",D,[s(n,{class:"text-center",largeMargin:"true",title:"Testimonials",subtitle:"Success stories of our clients"}),e("div",W,[e("div",q,[(l(),r(b,null,v(t,(A,m)=>e("div",{key:m},[e("img",{src:A,alt:"",class:"w-[90px] h-[90px] mx-auto rounded-full object-cover transition duration-300 ease-in-out cursor-pointer"},null,8,z)])),64))]),e("button",Z,[s(o(I),{icon:o(Y),class:"text-sm font-semibold"},null,8,["icon"])]),e("button",$,[s(o(I),{icon:o(P),class:"text-sm"},null,8,["icon"])]),e("div",ee,[(l(),r(b,null,v(i,(A,m)=>e("div",{key:m},[e("img",{src:A.image,alt:"Company Logo",class:"mx-auto mb-4 w-[150px]"},null,8,te),e("p",se,c(A.text),1),e("h6",oe,c(A.name),1),e("p",ie,c(A.position),1)])),64))])])])])}}},ne=["data-stop"],re={class:"font-medium text-black mt-2"},w=M({__name:"Counter",props:{value:{},label:{},extraClass:{}},setup(x){const d=x,t=C(()=>typeof d.value=="number"?d.value:Number(d.value)),i=T(null),a=C(()=>d.label||"Default Label"),p=n=>n>=1e3?`${Math.floor(n/1e3)}K+`:`${n}+`;return k(()=>{if(!i.value)return;const n=new IntersectionObserver(A=>{A.forEach(m=>{if(m.isIntersecting){const f=t.value,N=1e3,U=30,R=Math.ceil(f/U);let u=0;const E=()=>{u+=R,u>=f&&(u=f),i.value&&(i.value.innerText=p(u)),u<f&&setTimeout(E,N/U)};E(),n.unobserve(m.target)}})},{threshold:.5});n.observe(i.value),H(()=>{i.value&&n.unobserve(i.value)})}),(n,A)=>(l(),r("div",{class:S(`text-center ${n.extraClass}`)},[e("h3",{ref_key:"countRef",ref:i,"data-stop":t.value,class:"text-[55px] font-bold leading-[70px] text-primarycolor"}," 0 ",8,ne),e("p",re,c(a.value),1)],2))}}),le=[{id:1,title:"Requirement Gathering",bgColor:"linear-gradient(180deg, #FFE9D0 0%, #FFFFFF 100%)",image:"/shreeom_website/Images/icons/requirement.png"},{id:2,title:"Planning",bgColor:"linear-gradient(180deg, #B9EEFF 0%, #FFFFFF 100%)",image:"/shreeom_website/Images/icons/planning.png"},{id:3,title:"UI/UX Design",bgColor:"linear-gradient(180deg, #C0CBFF 0%, #FFFFFF 100%)",image:"/shreeom_website/Images/icons/ui-ux-design.png"},{id:4,title:"Prototype",bgColor:"linear-gradient(180deg, #D9BAFF 0%, #FFFFFF 100%)",image:"/shreeom_website/Images/icons/prototype.png"},{id:5,title:"Development",bgColor:"linear-gradient(180deg, #F3AEFF 0%, #FFFFFF 100%)",image:"/shreeom_website/Images/icons/prototype.png"},{id:6,title:"Quality Assurance",bgColor:"linear-gradient(180deg, #FFBDBD 0%, #FFFFFF 100%)",image:"/shreeom_website/Images/icons/quality.png"},{id:7,title:"Deployment",bgColor:"linear-gradient(180deg, #D3E7FF 0%, #FFFFFF 100%)",image:"/shreeom_website/Images/icons/deployment.png"},{id:8,title:"Support & Maintenance",bgColor:"  linear-gradient(180deg, #FFF3B7 0%, #FFFFFF 100%)",image:"/shreeom_website/Images/icons/support.png"}],Ae=""+new URL("hero-section.kLSdPXtS.png",import.meta.url).href,ce=""+new URL("about-section.CaCswnWl.png",import.meta.url).href,de=""+new URL("work-process-section.j1z2JFnx.png",import.meta.url).href,pe="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABYAAAAVCAYAAABCIB6VAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAGMSURBVHgBtVU9SwNBEH13SRNJMKBNioCNsfQiCH4QUewStNQySvwBCpaW/oA0lsK1sRJEwSKgFmplbP0AjyBYCRHUSowzThbu8O643J0P9vbjdt++mZ2d1dDDPJD9AEYSgIFwsK6BM9XR+DMLVL+BOjWziAaLytYVcKhNkUpif0KM+AKKOpFuImYkgTW9G938PyCxg7rfhMwA2VSQkhty/itPA6d0KquL7muT8EFpHNhZl/b+kRSF3LBs7AVf4jKFy8srkE6JMjvxQRO4uQMen93XerqCTZ8gF7Ro8QnFT7rnFoUV2mhvW+q+iBXJ8SVw0ZL2xhICw5O4tgy8fzrHRvOiPAhcfWyPAjZXgUkrFA2NJsIRV2ak5gO6b0ubo6BGrpgzhFgp58MNTFwyZEG94RzngyqOiUWZFPpTzC5gpW5Kdk2gkBffn9/KnIe2OzEnIZOuYBUxgvhMHf8Ezm4dxAxKbG8qH/MViCvLdbqcj+k5sSgxL0Cyf1T8cjGnZh+dpPcuEV45v3mW6vwADOdaqXpWInsAAAAASUVORK5CYII=",ge="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABUAAAAgCAYAAAD9oDOIAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAJiSURBVHgBtVU9b9NQFL33OhSH7wqQWiSIET8ALNjrCgnUAdQsiIk6YmKLxNCBoTF/oGViTCIk1I3sCLX9BfXIRD2A1Im67dCUxPfybOIUtUn8qrhnsJ+fj4/vuz7HD+EYDuYtCwbAtJxQna4dn8eVRnBiLh3sP7+zJADVQQ/GuHzvcRMQF2AwGsDspS+g+LD37HZdCdaGCWrABaI1qbpWIqoEXVWBC+PDUjr1RFS9YQHyAqIjb1+XCEQeQJ4QmY17GkKeYA5IfaANyBc+MdEK5AWRD8pWIU22Aj8SqcC4bRBp4nI99vmR+XdUkoi5+ocmZ7py9YRfr9x9uHGBdmfS65/FG1Z8LkaH69fbu7Hx19N7hXTQMresAsJ91ePBbtgG79UqulNfOw5iYQlBrN4dR1kpmHr6MdieKwb9Sj+9kHkx4AuMXB5UFitRiAYN4wXcOZyNhan+UiwluAwZ2LoFJSU4imfhufP/EmXE5ccRy8CP6WyeWrYz/U1KJAhaifp9URwdHkVRkqhc0REjJBTwdciX2qjFI277FJnQUjYKssiPvkMzm4eN5OtXGhgyQln1dmSibu5BSNwt45DkSWKptpdUGx8qn9FnBltEVTNC/NeTCT/qoC0sTTgSD1VEvYN9tFPz9xP1ZtEDg2iHGUMctMGxqmVVBWsO4wddGIFE1NysWQjGmrAyMIyPZPmxIGoEQFvU3Hzv5imYiBqc8x4FveXrQIS1f+IUkV5S2NBLXiJqArd0ktK2axmc/0RDuxZ2gcowfI8KGLoenAJJTzv2O58hstWwn5Re9d6Emj9NlWeGv1do6Rf5MCLhAAAAAElFTkSuQmCC",me="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAD4AAAA+CAYAAABzwahEAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAPjSURBVHgB5ZtdUhNBEMf/PRM1Pok3wBt4A3ODcAOxyir1iUV8t3z3I3kR9cVwg3CDvYHewHgC45MRdmfsCYIBsuxXuicWv6oUYTcU29vd8+/tngCx+JTc7+wnPUSig0hYZ3cc4Se/TREBg3j0iPAQkYhiuH2/t8U/NuGxESvc43jcoH/61pN9iQgQtNlPNi3Zb/h3BdP8Zn4PjwZTKKLucQvTO3eAw90cmW0oox/qRJcWNPLUhzK6oX4xzBfIO7zYPX7zHUqoetwQJYXnjv0jKKJqOMEUhjQZ2oEieobvv+ghaHcRypquZrglX1qlObJbUEJncXuXbNguL2qEDVx9NWqaruJx2zVbpUYHONztzKh4XSfUl2j3Sj7bAvlQv0K7i8hv5Xelw13c48bXD10zMwmEETe8iT4bMuIlrKzhZdpdgIcXb0uJGl5Fu4uQ1nTpUO+hIfO21OekXAIbItNs5As2v23w9iaa8vc53QEDCLBaOeO87JhO3zu/XalgqcaEX2nu8wM8G6RYEe0ND949Mrxy0xZ53IcsE76pQ0duzDdhghY0MzzkHpeW9qTK6iEOKbw/yLt8ExoUO/UMlwnldnhM+VrGdVOh3HAuOY0xD8lx92RdjC1mQkTjzGXDslRYbnjI219mm6uuUEH18H9ykgpw6bKbcN5wDmUbGvxhkVp/79ZhlBMO8eTN+PQArWXeyjFBkMY8H5obDlM2+q4nrzrJiIHnoohD/Cc7euNcqM+HeYTwijbFXDVs7JTL3688tHiVPXudnh5fvriF5gFMD3F1ui0pR/Khu+1Gy3S+kpx1yCYOvk+gTawxwbsGNOwgG80ayVkBHX6+5mflbQ/0aU0WwrmxhAOeN48XQ7mMxiXrvBt6bUrWZYTKLvTVDHakU8ETfTUOh1k3G7RtRq70sfQsFcg/WNVNaBrKZYi1l83H5wlLyDu0gKeru8c3s5FEq1mur151bFQAR87EPX17D0LI9dx2B1NP7gAN4VRJIYhos9F4O0ZDKDxfCyI+QjIf977UbUlJh3lAfmjo6BB1IQwhjLjhbpbVbg875xqnSFXkPb47l6K0xl+kbTuoVdCZj3NpKfLZFqgYns84dEM3tIywFaQrH+YBHY9X1XSPsdaeVrVdT1U0XVq7z/0vKGL3934UlbAa2r2I6s5Gz92R4rMN9L4FqoY7bgkVnvO5yDi4CN1t2yf6nC45o6Ldi6jvVw+dz8sHvdqidoq64e43t3svaPp8vqWM/jcUQgnLDf6FIyPtMA9E+RZSmGqc/cLNQ1wngqabD89rbfVcJdG+YhlKWIK5g0hEMzyUsJnLok1o/wDJuIIg8C5z+AAAAABJRU5ErkJggg==",xe="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAB4AAAAaCAYAAACgoey0AAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAJmSURBVHgBzVZBaxNBGP2+yW6TUAlpSxG0YIMnPW2FUk+6HipJUWjxIoKQ/AN7trEp/QG2f0AjeLde7M0OHj3lH7h3L7lIK3RnujNhQ2ZmZzObXvog2ew338zbN/veEAx/HG4DsgA0nH/6c4/9i5Uacv799+nXE703aL5e9Ym/r9crL+9CqXFLLwNt7nU88EiEDL7pg/6jJfj/669S44DbQdimA9ofKr2ClGNbeciaD15jXs5S6gyOxZXQ5+8HydCxQbxWh9JKVS/X/Wq8r6vVSQWqr1YgAxHD+EgSy9vzuAcIQ71rbmMpYy6+W998M341WVvsPawBqXnGTM75AW31ojEx3ekNeYwHeqNQ7D2oGQuAV/ooLuvNt21ji8vE8sAQ0daHfnpD0h90a+8o2XKqd5efLsvFVGAoSRENtX6wYFELncl7dUUOhmqrAsTPyfeqUkoMNfd40SQF7NNWl1qJxaDNaGLRaShvLGYP8EtDEDGaLEarbN6GPJDlsjSVDkx2MTVULnGu0e7Pgw2VF3eyyhG7GMVnKrEkT4yWXAZ6vfwky2hT4pMIAVfi0STY1WviPftBXa05xseZWBoNwTiX/bUFxWj2+MTPIAckbxBYvKsbTShMjZYfH9NQzsRiMmfMiJcwmvgUiU8hYokLLowW6WXh4iLxMfrAAeHpYYgIZw6t0Vmz23Doc1AM4xONTusT8QFHOBGPVo07WSfaBAZ58ZmZ2Ga08XPxeAcKwF2xgMVoLvG5FrE8x5lxokUu8bkWsSTf6p5MGi2Jz5eiamciHs0iqeroZ6vbgxkwE3H6z7RIfG4MrgDqht7hgxPlBgAAAABJRU5ErkJggg==",ue="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABcAAAAWCAYAAAArdgcFAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAGzSURBVHgBtVW/S8NAFP6SZqlWKC62urSgbkqhWMd2dNDBzR+DndyKg3+A9h8Q3aoudRCcpIPQtVkLATGTP8AKto1LqbTYpXDeyxmsmJYkpB+Eu3uX+95733u5SLAQScTAlANIUhiewd6AfhHGfY1WkmmbWeGk7BS+Qc7CqF5JZsRQXuEnJLTR68dlTpyF32AII6hkOTmLYRzgDpShm9PR33mrCS+wJ985AlbX/9peNOA678qRPHKXiJ41Mc4ngdw5EJyCUygjd8sXQPVOzHMF4WBuUWSR2QJSG8JZqwHcngD1JziPfBC9jhiJLMUl2zwUdfnqCIf0uIp8IiQOLaeBpYyw1R+BtX0xp6woYsupK3KKbhDlS6G/roqCp7eF00H5HJPrFeCd69jrCj1Ja8tOnUPyLPA67PLuCvIs1RsX5A+qbUSmVPrPHjkgciq2K/JhIDlIFpKIIjazUf+9Zk9upT/sgyEiIqUiUhfp9hnyWzFZ5MMe/EfeeZ97gGzevWMjZ1IJ40ElgG6jhlA0znVPwC8wdoYPrRAwF91mCZOzn3wWoRLDCxhr87MG/8HnYWjHZPoGmZqFEZGnVXsAAAAASUVORK5CYII=",he="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACcAAAAYCAYAAAB5j+RNAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAOVSURBVHgB1VZPTxNREJ/3tpQeVOonYI2evNgCd5ejByN8AHUXYyLEhHL1UnryCNyIMewSL8ZL6wdQlhjjhT/Fi0eXKxpYVKCWfe85s90my0JDaYHE3+Z139uZN/PbmXmzBbgE5HI5HToAh0sA59wcHBz8jmPkTPvg8qDjKOfz+f52N1wmuTPj/yOHBZyFUzBiG6fqtGurlQ5LKBmaptk41ZVS01LKuWq16sd1CmUj+yuVnqwfqMIfX7ogxFRl3PVOcEi2itCoNZIb9Bxt6uvr65tNUnhYJhljBRxeEASj6M87Qo6OekTKSPjwkGRpbW3NocXzpXsjh4dqJvir9IN9CbU9idwUpHuYoylRemu5XuSwSA7hBDTJDQwMmKgzg4+SUXOEECUimQoZMjYdJ4aEfHxGm3S823jClvoe9TJ/OyhfuZYChRcL96FuABBwMLcb8bXwJcstbB2JKtltoWOijdBWsuZ8ZJ3HSF3H+WJCBls/9zFSMiRFP2gQhFRwsCdAYQSTtlA+jJHK49yF1nByD2/P9fVfnYqRXab7MXIYzmqk4B2RZGpwiNfOVoCyUCMcNK/XJNCVtLWysuJSeprOTgLJerPpx7fu3/ToJTA4N5pllIJ2kcGxx2FnV8CVPi3kRskNi1bhr3YscjrWVREjt4ERfNzKLMqKX998m/v88UsFl5W4LBm5amzuJWQ+HPR4lFb/R9BIa8N8Q1qHjZCnUhsxx9NRDeqRzMexS35imdFru/UZ/LTZyW8wj4yQ4ujq6upoU0ChpRDjdJEMulbVV3sa1g8v/d6WEBxGaeTK5ZINuy8+zUb7CqhvJcsCfZQwijeoNdHA+TA9i6nQQbDjPY9BBzBeGvq167yQ6WXuO+tDpWCb2TrwSUxzTgVibv6p45Le0NDQNJK8gy85Fe9fcURtjNqOi8E5ktaOyMUxYT9BUmAoEFPzluON22MFJbF3cenQmojPWo7fie2uyE3YY0UJfHneeu3SmojUakgsQ4a1mQBEiQE3XlkLs9AB2j+tJ4LpSKz0zB4zGUarDuwOpNUmdhVPcfVeg1Q2A4EDHaJLcjFwTl0vyzh1euYrkGEqO01paBLOD/1C4MmuCez06i6cA7oiR83kmW3qjZVa5prKQpqbVGsceNv/eC+EHCAJkNzEdvygF4Q7by04gstKD2iT+DnbbB6UTtF1K2li3H5SVkpuAtN8PASz3dTahYBaCZwj/gE/N8uPNVjDeQAAAABJRU5ErkJggg==",be="data:image/png;base64,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",fe="data:image/png;base64,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",we={class:"container"},ve={class:"max-w-[834px] text-center mx-auto relative z-10"},Fe={class:"flex justify-center gap-6 flex-wrap"},Be={class:"grid counter-wrapper lg:grid-cols-4 grid-cols-2 gap-6 mt-[100px] text-center"},ye={class:"absolute rotate-[330deg] bg-white w-[37px] h-[35px] backdrop-blur-[41.2449836730957px] xl:top-[23.5%] xl:left-[22.5%] top-[22%] left-[14%] max-md:hidden rounded-[10px] flex items-center justify-center shadow-[2px_5px_20px_0px_#0000000F]"},Ce=["src"],Ue={class:"absolute rotate-12 bg-white w-[50px] h-[50px] backdrop-blur-[41.2449836730957px] xl:top-[42%] xl:left-[17%] top-[45%] left-[15%] max-md:hidden rounded-[10px] flex items-center justify-center shadow-[2px_5px_20px_0px_#0000000F]"},Ee=["src"],Ie={class:"absolute rotate-[350deg] bg-white w-[58px] h-[58px] backdrop-blur-[41.2449836730957px] xl:top-[54%] xl:left-[24%] top-[61%] left-[20%] max-md:hidden rounded-[10px] flex items-center justify-center shadow-[2px_5px_20px_0px_#0000000F]"},Se=["src"],Te={class:"absolute rotate-[40deg] bg-white w-[38px] h-[38px] backdrop-blur-[41.2449836730957px] top-[20%] right-[25%] max-md:hidden rounded-[10px] flex items-center justify-center shadow-[2px_5px_20px_0px_#0000000F]"},ke=["src"],Ne={class:"absolute rotate-[320deg] bg-white w-[51px] h-[51px] backdrop-blur-[41.2449836730957px] xl:top-[38%] xl:right-[20%] lg:top-[38%] top-[34%] right-[13%] max-md:hidden rounded-[10px] flex items-center justify-center shadow-[2px_5px_20px_0px_#0000000F]"},Re=["src"],je={class:"absolute rotate-[25deg] bg-white w-[53px] h-[53px] backdrop-blur-[41.2449836730957px] top-[46%] xl:right-[14%] right-[10%] max-md:hidden rounded-[6px] flex items-center justify-center shadow-[2px_5px_20px_0px_#0000000F]"},Me=["src"],He={class:"absolute rotate-[25deg] bg-white w-[67px] h-[67px] backdrop-blur-[41.2449836730957px] xl:top-[57%] xl:right-[22%] top-[57%] right-[14%] max-md:hidden rounded-[10px] flex items-center justify-center shadow-[2px_5px_20px_0px_#0000000F]"},Le=["src"],Ye={class:"pt-[50px] pb-[100px]"},Pe={class:"container"},Qe={class:"pb-[100px] relative"},Ke={class:"container"},_e={class:"flex flex-col gap-6 lg:flex-row items-center justify-between"},Je={class:"w-full lg:w-1/2"},Ve={class:"absolute bottom-0 left-[45%] z-[-1]"},Xe=["src"],Oe={class:"pb-[100px]"},Ge={class:"container"},De={class:"container"},We={class:"grid grid-cols-2 working-wrapper md:grid-cols-4 gap-x-6"},qe=["src","alt"],ze={class:"text-center"},Ze={class:"text-xl font-semibold"},$e={class:"overflow-hidden whitespace-nowrap py-[50px]"},et={class:"flex gap-16 md:gap-[170px] animate-marquee"},tt=["src"],st={class:"text-4xl md:text-[50px] font-semibold"},At={__name:"index",props:{itemsText:{type:Array,default:()=>new Array(40).fill("Get In Touch")}},setup(x){return C(()=>"hidden"),(d,t)=>{const i=j;return l(),r(b,null,[e("section",{class:"pt-[187px] pb-11 relative",style:y({backgroundImage:`url(${o(Ae)})`})},[e("div",we,[e("div",ve,[t[2]||(t[2]=e("h6",{class:"text-base text-primarycolor mb-[38px]"},"Welcome to Shreeom",-1)),t[3]||(t[3]=e("h1",{class:"text-[85px] leading-[102px] font-semibold max-lg:text-5xl max-sm:text-4xl"}," Turn your ideas into great products ",-1)),t[4]||(t[4]=e("p",{class:"mt-[30px] mb-[50px] max-w-[527px] mx-auto text-lg"}," Building an expert software development team for your project, we put your needs first. Let's join us now! ",-1)),e("div",Fe,[s(i,{to:"/",class:"theme-btn px-[60px] py-[14px]"},{default:F(()=>t[0]||(t[0]=[B(" Let's Talk ")])),_:1}),s(i,{to:"/",class:"theme-btn-border px-[60px]"},{default:F(()=>t[1]||(t[1]=[B(" About Us ")])),_:1})])]),e("div",Be,[s(w,{value:"100",label:"Projects Delivered"}),s(w,{value:"2",label:"Years of Experience"}),s(w,{value:"98",label:"Clients Satisfaction"}),s(w,{value:"10",label:"Team Members"})])]),t[5]||(t[5]=e("div",{class:"w-[50%] h-[234px] hero-bg absolute top-[30%] left-1/3 z-0"},null,-1)),e("div",ye,[e("img",{src:o(pe),alt:"ai"},null,8,Ce)]),e("div",Ue,[e("img",{src:o(xe),alt:"vue"},null,8,Ee)]),e("div",Ie,[e("img",{src:o(ge),alt:"figma"},null,8,Se)]),e("div",Te,[e("img",{src:o(ue),alt:"ps"},null,8,ke)]),e("div",Ne,[e("img",{src:o(be),alt:"php"},null,8,Re)]),e("div",je,[e("img",{src:o(he),alt:"node"},null,8,Me)]),e("div",He,[e("img",{src:o(fe),alt:"react"},null,8,Le)])],4),e("section",Ye,[e("div",Pe,[e("div",null,[s(h,{class:"text-center",largeMargin:"true",title:"Our Services",subtitle:"Our Core Services we deliver"}),s(K)])])]),e("section",Qe,[e("div",Ke,[e("div",_e,[e("div",Je,[s(h,{class:"mb-[25px]",title:"About us",subtitle:"The Shreeomsoft Difference"}),t[7]||(t[7]=e("p",{class:"mb-[30px] text-lg sm:leading-9"},"The shreeomsoft is a website and mobile development companies and we are helping startup businesses turn their idea into a digital product into reality. With a team of over 10+ professionals and 2+ years of outstanding service such as branding design, web design & development, app development, maintenance, we are providing dedicated support.",-1)),s(i,{to:"/",class:"inline-block theme-btn px-[60px] py-[14px]"},{default:F(()=>t[6]||(t[6]=[B("Learn more")])),_:1})]),t[8]||(t[8]=e("div",{class:"w-full lg:w-1/2"},[e("img",{src:_,class:"mx-auto",alt:""})],-1))])]),e("div",Ve,[e("img",{src:o(ce),alt:""},null,8,Xe)])]),e("section",Oe,[e("div",Ge,[e("div",null,[s(h,{class:"text-center",largeMargin:"true",title:"Projects",subtitle:"Our Core Services we deliver"}),s(Q,{showCategories:!1})])])]),e("section",{class:"pb-[100px] bg-auto bg-bottom bg-no-repeat",style:y({backgroundImage:`url(${o(de)})`})},[e("div",De,[e("div",null,[s(h,{class:"text-center",largeMargin:!0,title:"Our working process",subtitle:"How to start ?"}),e("div",We,[(l(!0),r(b,null,v(o(le),(a,p)=>(l(),r("div",{key:a.id,class:"md:mb-[100px] mb-12"},[e("div",{class:"w-[150px] h-[150px] rounded-full mx-auto flex items-center justify-center mb-3",style:y({background:a.bgColor})},[e("img",{src:a.image,alt:a.title},null,8,qe)],4),e("div",ze,[e("p",Ze,c(a.id)+". "+c(a.title),1)])]))),128))])])])],4),s(ae),e("section",$e,[e("div",et,[(l(!0),r(b,null,v(x.itemsText,(a,p)=>(l(),r("div",{key:p,class:"flex items-center gap-4 md:gap-[25px] text-primarycolor"},[e("img",{src:o(me),class:"max-md:w-[15%]",alt:"Star"},null,8,tt),e("h4",st,c(a),1)]))),128))])])],64)}}};export{At as default};
