import { unref, useSSRContext } from "vue";
import { ssrRenderComponent, ssrRenderAttr, ssrRenderStyle } from "vue/server-renderer";
import _sfc_main$1 from "../components/PageBanner.vue.mjs";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
import { faUser, faEnvelope, faBook } from "@fortawesome/free-solid-svg-icons";
import call from "../public/Images/icons/call.png.mjs";
import email from "../public/Images/icons/email.png.mjs";
import address from "../public/Images/icons/address.png.mjs";
const _sfc_main = {
  __name: "Contact",
  __ssrInlineRender: true,
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<!--[-->`);
      _push(ssrRenderComponent(_sfc_main$1, {
        title: "contact us",
        breadcrumb: "contact us"
      }, null, _parent));
      _push(`<section class="py-[100px]"><div class="container"><div class="grid lg:grid-cols-2 gap-8"><div><h2 class="text-black md:text-[45px] md:leading-[50px] text-3xl font-semibold">We&#39;re always here to help.</h2><p class="text-lg mt-4 text-[#8C8C8D]">Our teams are here to help. Just message us and we’ll get back to you.</p><div class="mt-6 space-y-4"><div class="bg-[#F9FCFF] flex flex-col md:flex-row justify-around border border-[#0077FF] rounded-[20px] p-[50px]"><div class="flex flex-col items-center gap-9"><img${ssrRenderAttr("src", unref(call))} alt="call"><div class="text-center"><h3 class="text-[26px] font-semibold">Phone Number</h3><a href="tel:+918108483737" class="text-[#333333] mt-3 block">+91 81604 68737</a><a href="tel:+919586773991" class="text-[#333333] mt-3 block">+91 95867 73991</a></div></div><div class="md:border-l border-t border-[#E8E8E8] max-md:my-6 md:mx-6 block"></div><div class="flex flex-col items-center gap-9"><img${ssrRenderAttr("src", unref(email))} alt="email"><div class="text-center"><h3 class="text-[26px] font-semibold">Email Address</h3><a href="mailto:info@shreemosoft.com" class="text-[#333333] mt-3 block">info@shreemosoft.com</a></div></div></div><div class="bg-[#FFFCF9] flex flex-col gap-12 md:flex-row justify-center items-center border border-[#FFD500] rounded-[20px] p-[50px]"><img${ssrRenderAttr("src", unref(address))} alt="address"><div class="max-md:text-center"><h3 class="text-[26px] font-semibold">Address</h3><p class="text-[#333333] mt-3"> 214, Radhika Optima, Yamuna Chowk, Satellite Rd, Mota Varachha, Surat, Gujarat 394101 </p></div></div></div></div><div class="bg-white rounded-[20px] shadow-[0px_0px_49px_0px_rgba(0,0,0,0.05)] p-5 sm:p-[30px]"><h3 class="text-[28px] font-semibold mb-[28px]">Fill the form</h3><form><div class="grid grid-cols-1 md:grid-cols-2 gap-x-4"><div class="relative"><input type="text" placeholder="First Name" class="input-field">`);
      _push(ssrRenderComponent(unref(FontAwesomeIcon), {
        icon: unref(faUser),
        class: "input-icon"
      }, null, _parent));
      _push(`</div><div class="relative"><input type="text" placeholder="Last Name" class="input-field">`);
      _push(ssrRenderComponent(unref(FontAwesomeIcon), {
        icon: unref(faUser),
        class: "input-icon"
      }, null, _parent));
      _push(`</div></div><div class="relative"><input type="email" placeholder="Enter Your Email" class="input-field">`);
      _push(ssrRenderComponent(unref(FontAwesomeIcon), {
        icon: unref(faEnvelope),
        class: "input-icon"
      }, null, _parent));
      _push(`</div><div class="relative"><input type="text" placeholder="Subject" class="input-field">`);
      _push(ssrRenderComponent(unref(FontAwesomeIcon), {
        icon: unref(faBook),
        class: "input-icon"
      }, null, _parent));
      _push(`</div><div class="relative"><textarea placeholder="Type Your Message" class="input-field h-[135px]"></textarea></div><button type="submit" class="theme-btn px-[60px] py-[14px]"> Send </button></form></div></div></div></section><section class="pb-[100px]"><div class="container"><div class="w-full h-[450px] rounded-[20px] overflow-hidden"><iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d288.4278595809411!2d72.87839939279719!3d21.232075843186877!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be04f40edc4bd51%3A0x2b3984fb5b8f1eab!2sShreeomsoft!5e1!3m2!1sen!2sin!4v1743660603200!5m2!1sen!2sin" class="w-full h-full" style="${ssrRenderStyle({ "border": "0" })}" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe></div></div></section><!--]-->`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/Contact.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
export {
  _sfc_main as default
};
//# sourceMappingURL=Contact.vue.mjs.map
