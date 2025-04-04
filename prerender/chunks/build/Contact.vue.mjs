import { unref, useSSRContext } from 'file://D:/2025-04-04/wellfoodwebsite/node_modules/vue/index.mjs';
import { ssrRenderComponent, ssrRenderAttr, ssrRenderStyle } from 'file://D:/2025-04-04/wellfoodwebsite/node_modules/vue/server-renderer/index.mjs';
import { _ as _sfc_main$1 } from './PageBanner.vue.mjs';
import { FontAwesomeIcon } from 'file://D:/2025-04-04/wellfoodwebsite/node_modules/@fortawesome/vue-fontawesome/index.js';
import { faUser, faEnvelope, faBook } from 'file://D:/2025-04-04/wellfoodwebsite/node_modules/@fortawesome/free-solid-svg-icons/index.mjs';
import './nuxt-link.mjs';
import 'file://D:/2025-04-04/wellfoodwebsite/node_modules/ufo/dist/index.mjs';
import './server.mjs';
import 'file://D:/2025-04-04/wellfoodwebsite/node_modules/hookable/dist/index.mjs';
import 'file://D:/2025-04-04/wellfoodwebsite/node_modules/unctx/dist/index.mjs';
import 'file://D:/2025-04-04/wellfoodwebsite/node_modules/h3/dist/index.mjs';
import 'file://D:/2025-04-04/wellfoodwebsite/node_modules/vue-router/dist/vue-router.node.mjs';
import 'file://D:/2025-04-04/wellfoodwebsite/node_modules/radix3/dist/index.mjs';
import 'file://D:/2025-04-04/wellfoodwebsite/node_modules/defu/dist/defu.mjs';
import 'file://D:/2025-04-04/wellfoodwebsite/node_modules/emailjs-com/cjs/index.js';
import '../_/renderer.mjs';
import 'file://D:/2025-04-04/wellfoodwebsite/node_modules/vue-bundle-renderer/dist/runtime.mjs';
import 'file://D:/2025-04-04/wellfoodwebsite/node_modules/unhead/dist/server.mjs';
import 'file://D:/2025-04-04/wellfoodwebsite/node_modules/unhead/dist/utils.mjs';
import '../_/nitro.mjs';
import 'file://D:/2025-04-04/wellfoodwebsite/node_modules/destr/dist/index.mjs';
import 'file://D:/2025-04-04/wellfoodwebsite/node_modules/ofetch/dist/node.mjs';
import 'file://D:/2025-04-04/wellfoodwebsite/node_modules/node-mock-http/dist/index.mjs';
import 'file://D:/2025-04-04/wellfoodwebsite/node_modules/unstorage/dist/index.mjs';
import 'file://D:/2025-04-04/wellfoodwebsite/node_modules/unstorage/drivers/fs.mjs';
import 'file:///D:/2025-04-04/wellfoodwebsite/node_modules/nuxt/dist/core/runtime/nitro/utils/cache-driver.js';
import 'file://D:/2025-04-04/wellfoodwebsite/node_modules/unstorage/drivers/fs-lite.mjs';
import 'file://D:/2025-04-04/wellfoodwebsite/node_modules/nitropack/node_modules/ohash/dist/index.mjs';
import 'file://D:/2025-04-04/wellfoodwebsite/node_modules/klona/dist/index.mjs';
import 'file://D:/2025-04-04/wellfoodwebsite/node_modules/scule/dist/index.mjs';
import 'node:fs';
import 'node:url';
import 'file://D:/2025-04-04/wellfoodwebsite/node_modules/pathe/dist/index.mjs';
import 'file://D:/2025-04-04/wellfoodwebsite/node_modules/devalue/index.js';
import 'file://D:/2025-04-04/wellfoodwebsite/node_modules/unhead/dist/plugins.mjs';

const call = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACwAAAAsCAYAAAAehFoBAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAOZSURBVHgB7ZnPUtNAGMC/3TYpKjIdnXFwFCe+AT6B6UGG8SCgcvGiHHS4IU9A+gTWG+IB9OBFHPDCgB4angDegI74Z8ZBbRHpn7S77ldI/0CbbFKacOA3k2Gb7CY/vm52v90CnNFdSLsL4/r3KQ7MEMW4OMwyWBPL5s0MhExL4Xv3czNMjRiEMVD+/ANqVURFkrGglAhb+pjw0CSfIbwa2Ro9P7Kg7OZPhXSTcCtZm9MiXRMenuQa52zLqfJpkKZ2gTNr1K1y4WocrL5zwIFrCqjpUX1Lg4CpCQOJjsg0CFu6HmHOB2UbhSldEyakOt5K0ygdBWUeAoJCB6A0iyn4EmoQEA1dArLgA6s3hlHOQEA0dglfwkBoVoyN0xAQjS/dOngEv5WKShPvzeubEBD1CAPz9FCU5bySWHnXG5gsUhemyrJsI0yKYju7059fq4HKIjXh1VmSESqmTKPz279ByebTEALNwxovf3RrENkvAS1YEBZNwsWSsuA2vPHIQb5EGRuDEGgSNhdIVpi8dGrAlYhdlMo9TppjM12pEE05RZlTCpXzKhb1h/q2DgFzTFgmysXLFw9LZAYCpmUugVEWfzLtGmGE61H+Fqh0S2GMMiFswqlhoT9e7R6ikxgP9C+uyf9J0TZbW51VTID2XYOJl694pa9aJkDnx/Wv0vl0JxCni/oTHo/F2IYoau3qqDt7EPv1F4tZsY8x8cG8ITVj4j/IAV6IQ6NiwhJrxKTMGpG4VcDFKWNswynBb5DGWxqL5rWk0z3vPtobjOatNKckjotaL/sersLI0LPyKCFkyakObrjEhDjmGfhwjPaiOWAerXfnaWmQkEi6MQBeVuNSwsjwpGVwTh1HBIyU+jMHyl7RPmUyYG8iQDctsLJlrV8rqepSq29LVlpaWFYaUXJ5iOb2IZov1c6xHgX2By4djiytkZH2JOxFunpz0T1ooSwkSVVYBjdpz8KIF2k/OEn7EkbCkva9zBcTixDmY35X22602/foaF/i01x0mVJ6Cxzyjk5AaTtnsc91JIzg0qpYRGnnDM8vGGXsFvbnjoURTJbWXinPRcKUgC5EW3SLWjB8v3ROHL6Qj8EhB5Elki8kV95eMOzPXRFGDnKQiiGm9NvgU1z8GpBcnVOMpnPQZVBcpPw642RKPEwqBcWRh0AluTanpo5e67pwI7Y8ZzDCCdFE59TsvKIqSfimONYLPdGUmSJdGS7PcOM/LmTUfeDUHoAAAAAASUVORK5CYII=";

const email = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADcAAAAoCAYAAABaW2IIAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAKWSURBVHgB3ZhbbtNAFIbPjB0gpKLwAM9dAl0Cb6iIByQWEFZQ2EHZAaygYhUggRA7IOwgvBSJitRBUJKMZw7nGBu5aZz4cuzY/SRHiTMzni//XBwriMEvB4eA+BwB9qB7BApgBApGM4ev+/vvxnxS8QuODo4RcAhXBER44e2/faXCzw+HWqljuEK4OYIX6j3fBu4QbijQfQ1dhxIDO3UQ/nLQVwvw7W+8Twd4NxH8XQ+UB52E0zITB2jx/zk/eWPPkQpY8G8p8AbdSTGd1jL+hYJkbc4w+hW6kKL9Q1ITWgoRV37vr6zEKc5C8HY0Jdm+FNEChGcW7AzXlvMzG6CUw58OeD5eu9eeFC0Nv3CanVaajbHwUJ1/CyPRbcJpLU4tmMDlEmN8yEmSYu9289tGkbTS5JZjOMXFj+a2DU7LTGy0wJWhkFxCE9tG2bTSlJJj6to20FBaQfm00pSWS5DcNnheSy5cleWYqtvGqlsnCUQnTNFtg6dTSEs7L/HSYoxIcstEKdJ87N2hbSNjqDpK2ZxSWr68VEItcjCnVGioLfjfxi4tODxUe/++4iFsv/M9YZzu9fioAXm5eXzEWFrO3TltG3cVCSowJ5SWwYvlmRoEZeWWxBJYxpzg+nqMsKDcgpIh1lj9FcjISXVMWLC6nPQvLtheNbkahpJku+Xl6hITbL+cXN1iQtcpLteUmMD1isk1LVbxuvnltiVW4fr55LYtllCwH5vl2iKWUKA/WqqhRsnZL121ga2Ro3+6bMVWsKGfumiF1rGmvyw3zlOw1Vzud6Aeffyq6aHnm4wC3SLVf4cQOenB4w9HbkYfuiyWwA4LGA1Cc8Qfozm38/T9kGyf0cPrEXSXMY3Cl/2peaCefAr4xF+A3pWpvUNEqwAAAABJRU5ErkJggg==";

const address = "data:image/png;base64,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";

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

export { _sfc_main as default };
//# sourceMappingURL=Contact.vue.mjs.map
