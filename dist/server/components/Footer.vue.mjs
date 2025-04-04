import __nuxt_component_0 from "../node_modules/nuxt/dist/app/components/nuxt-link.mjs";
import { mergeProps, unref, withCtx, createTextVNode, useSSRContext } from "vue";
import { ssrRenderAttrs, ssrRenderAttr, ssrRenderComponent } from "vue/server-renderer";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
import { faLinkedinIn, faFacebookF, faInstagram } from "@fortawesome/free-brands-svg-icons";
import { faEnvelope, faPhone, faLocationDot } from "@fortawesome/free-solid-svg-icons";
const logoWhite = "/shreeom_website/Images/logos/logo-white.png";
const _sfc_main = {
  __name: "Footer",
  __ssrInlineRender: true,
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      const _component_NuxtLink = __nuxt_component_0;
      _push(`<footer${ssrRenderAttrs(mergeProps({ class: "bg-[#02261D] pt-[64px]" }, _attrs))}><div class="container"><div class="px-4 grid grid-cols-1 md:grid-cols-2 xl:grid-cols-12 gap-6"><div class="xl:col-span-4"><img${ssrRenderAttr("src", logoWhite)} alt="Shreeom Logo" class="mb-[25px]"><p class="mb-[30px] text-[#B5B5B5]"> shreeomsoft is a providing top-notch website and mobile app services. The company was founded in 2023 and headquartered in Surat, India. </p><div class="flex gap-4"><a href="#" class="border rounded-[3px] border-[#295048] h-[35px] w-[35px] flex items-center justify-center">`);
      _push(ssrRenderComponent(unref(FontAwesomeIcon), {
        icon: unref(faLinkedinIn),
        class: "text-white h-[15px] w-[15px]"
      }, null, _parent));
      _push(`</a><a href="#" class="border rounded-[3px] border-[#295048] h-[35px] w-[35px] flex items-center justify-center">`);
      _push(ssrRenderComponent(unref(FontAwesomeIcon), {
        icon: unref(faFacebookF),
        class: "text-white h-[15px] w-[15px]"
      }, null, _parent));
      _push(`</a><a href="#" class="border rounded-[3px] border-[#295048] h-[35px] w-[35px] flex items-center justify-center">`);
      _push(ssrRenderComponent(unref(FontAwesomeIcon), {
        icon: unref(faInstagram),
        class: "text-white h-[15px] w-[15px]"
      }, null, _parent));
      _push(`</a></div></div><div class="xl:col-span-2"><h3 class="font-medium text-white mb-6 text-xl">Company</h3><ul class="space-y-4"><li>`);
      _push(ssrRenderComponent(_component_NuxtLink, {
        to: "/",
        class: "text-[#B5B5B5]"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`About Us `);
          } else {
            return [
              createTextVNode("About Us ")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</li><li>`);
      _push(ssrRenderComponent(_component_NuxtLink, {
        to: "/services",
        class: "text-[#B5B5B5]"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`Services`);
          } else {
            return [
              createTextVNode("Services")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</li><li>`);
      _push(ssrRenderComponent(_component_NuxtLink, {
        to: "/Technology",
        class: "text-[#B5B5B5]"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`Technology`);
          } else {
            return [
              createTextVNode("Technology")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</li><li>`);
      _push(ssrRenderComponent(_component_NuxtLink, {
        to: "/Projects",
        class: "text-[#B5B5B5]"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`Portfolio`);
          } else {
            return [
              createTextVNode("Portfolio")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</li><li>`);
      _push(ssrRenderComponent(_component_NuxtLink, {
        to: "/Career",
        class: "text-[#B5B5B5]"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`Career`);
          } else {
            return [
              createTextVNode("Career")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</li></ul></div><div class="xl:col-span-3"><h3 class="font-medium text-white mb-6 text-xl">Services</h3><ul class="space-y-4"><li>`);
      _push(ssrRenderComponent(_component_NuxtLink, {
        to: "/services",
        class: "text-[#B5B5B5]"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`UI/UX Designing`);
          } else {
            return [
              createTextVNode("UI/UX Designing")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</li><li>`);
      _push(ssrRenderComponent(_component_NuxtLink, {
        to: "/services",
        class: "text-[#B5B5B5]"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`Web Design &amp; Development`);
          } else {
            return [
              createTextVNode("Web Design & Development")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</li><li>`);
      _push(ssrRenderComponent(_component_NuxtLink, {
        to: "/services",
        class: "text-[#B5B5B5]"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`Digital Marketing`);
          } else {
            return [
              createTextVNode("Digital Marketing")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</li><li>`);
      _push(ssrRenderComponent(_component_NuxtLink, {
        to: "/services",
        class: "text-[#B5B5B5]"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`Maintenance &amp; Support`);
          } else {
            return [
              createTextVNode("Maintenance & Support")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</li></ul></div><div class="xl:col-span-3"><h3 class="font-medium text-white mb-6 text-xl">Contact us</h3><ul class="space-y-3 text-sm"><li class="flex items-center gap-3"><span class="border rounded-[3px] border-[#295048] h-[35px] w-[35px] flex items-center justify-center">`);
      _push(ssrRenderComponent(unref(FontAwesomeIcon), {
        icon: unref(faEnvelope),
        class: "text-white h-[15px] w-[15px]"
      }, null, _parent));
      _push(`</span><a href="mailto:info@shreeomsoft.com" class="text-[#B5B5B5]">info@shreeomsoft.com</a></li><li class="flex items-center gap-3"><span class="border rounded-[3px] border-[#295048] h-[35px] w-[35px] flex items-center justify-center">`);
      _push(ssrRenderComponent(unref(FontAwesomeIcon), {
        icon: unref(faPhone),
        class: "text-white h-[15px] w-[15px]"
      }, null, _parent));
      _push(`</span><a href="tel:+919586773991" class="text-[#B5B5B5]">+91 9586773991</a></li><li class="flex items-start gap-3"><span class="border rounded-[3px] border-[#295048] h-[35px] min-w-[35px] flex items-center justify-center">`);
      _push(ssrRenderComponent(unref(FontAwesomeIcon), {
        icon: unref(faLocationDot),
        class: "text-white h-[15px] w-[15px]"
      }, null, _parent));
      _push(`</span><p class="text-[#B5B5B5]"> 214, Radhika Optima, Yamuna Chowk, Satellite Rd, Mota Varachha, Surat, Gujarat 394101 </p></li></ul></div></div><div class="md:flex max-md:text-center justify-between gap-3 flex-wrap mt-14 border-t border-[#B8E0D3] w-full py-9"><p class="text-sm text-white">© 2025. Shreeomsoft All Rights Reserved.</p><ul class="md:flex max-md:mt-4 items-center gap-12 text-white"><li>`);
      _push(ssrRenderComponent(_component_NuxtLink, {
        to: "/",
        class: "text-sm"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`Terms of Service`);
          } else {
            return [
              createTextVNode("Terms of Service")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</li><li>`);
      _push(ssrRenderComponent(_component_NuxtLink, {
        to: "/",
        class: "text-sm"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`Privacy Policy`);
          } else {
            return [
              createTextVNode("Privacy Policy")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</li><li>`);
      _push(ssrRenderComponent(_component_NuxtLink, {
        to: "/",
        class: "text-sm"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`Cookie Policy`);
          } else {
            return [
              createTextVNode("Cookie Policy")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</li></ul></div></div></footer>`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/Footer.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
export {
  _sfc_main as default
};
//# sourceMappingURL=Footer.vue.mjs.map
