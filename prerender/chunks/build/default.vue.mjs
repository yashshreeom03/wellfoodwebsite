import { ssrRenderAttrs, ssrRenderComponent, ssrRenderAttr, ssrRenderClass, ssrRenderList, ssrInterpolate, ssrRenderSlot } from 'file://D:/2025-04-04/wellfoodwebsite/node_modules/vue/server-renderer/index.mjs';
import { _ as __nuxt_component_0 } from './nuxt-link.mjs';
import { a as useRuntimeConfig } from './server.mjs';
import { ref, mergeProps, withCtx, unref, createVNode, createTextVNode, toDisplayString, useSSRContext } from 'file://D:/2025-04-04/wellfoodwebsite/node_modules/vue/index.mjs';
import { useRoute } from 'file://D:/2025-04-04/wellfoodwebsite/node_modules/vue-router/dist/vue-router.node.mjs';
import { FontAwesomeIcon } from 'file://D:/2025-04-04/wellfoodwebsite/node_modules/@fortawesome/vue-fontawesome/index.js';
import { faLinkedinIn, faFacebookF, faInstagram } from 'file://D:/2025-04-04/wellfoodwebsite/node_modules/@fortawesome/free-brands-svg-icons/index.mjs';
import { faEnvelope, faPhone, faLocationDot } from 'file://D:/2025-04-04/wellfoodwebsite/node_modules/@fortawesome/free-solid-svg-icons/index.mjs';
import { ChevronsUp } from 'file://D:/2025-04-04/wellfoodwebsite/node_modules/lucide-vue-next/dist/cjs/lucide-vue-next.js';
import 'file://D:/2025-04-04/wellfoodwebsite/node_modules/ufo/dist/index.mjs';
import 'file://D:/2025-04-04/wellfoodwebsite/node_modules/hookable/dist/index.mjs';
import 'file://D:/2025-04-04/wellfoodwebsite/node_modules/unctx/dist/index.mjs';
import 'file://D:/2025-04-04/wellfoodwebsite/node_modules/h3/dist/index.mjs';
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

const logo = "/shreeom_website/Images/logos/logo.png";
const _sfc_main$4 = {
  __name: "Header",
  __ssrInlineRender: true,
  setup(__props) {
    const menuOpen = ref(false);
    const isSticky = ref(false);
    useRoute();
    const closeMenu = () => {
      menuOpen.value = false;
    };
    return (_ctx, _push, _parent, _attrs) => {
      const _component_NuxtLink = __nuxt_component_0;
      _push(`<header${ssrRenderAttrs(mergeProps({
        class: ["bg-transparent py-7 absolute top-0 left-0 w-full z-50 transition-all duration-1000", { "sticky top-0 bg-white/30 backdrop-blur-[50px] w-full shadow-lg py-4 animate-fadeInDown": isSticky.value }]
      }, _attrs))}><div class="container"><div class="flex items-center justify-between gap-4"><div class="flex items-center gap-4">`);
      _push(ssrRenderComponent(_component_NuxtLink, {
        to: "/",
        class: "block"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<img${ssrRenderAttr("src", `${("useRuntimeConfig" in _ctx ? _ctx.useRuntimeConfig : unref(useRuntimeConfig))().app.baseURL}logo`)} alt="main logo" class="h-auto w-auto max-sm:w-4/5"${_scopeId}>`);
          } else {
            return [
              createVNode("img", {
                src: `${("useRuntimeConfig" in _ctx ? _ctx.useRuntimeConfig : unref(useRuntimeConfig))().app.baseURL}logo`,
                alt: "main logo",
                class: "h-auto w-auto max-sm:w-4/5"
              }, null, 8, ["src"])
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div><nav class="hidden lg:flex gap-10">`);
      _push(ssrRenderComponent(_component_NuxtLink, {
        to: "/services",
        class: "text-lg font-medium text-black hover:text-primarycolor transition"
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
      _push(ssrRenderComponent(_component_NuxtLink, {
        to: "/technology",
        class: "text-lg font-medium text-black hover:text-primarycolor transition"
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
      _push(ssrRenderComponent(_component_NuxtLink, {
        to: "/projects",
        class: "text-lg font-medium text-black hover:text-primarycolor transition"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`Projects`);
          } else {
            return [
              createTextVNode("Projects")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(ssrRenderComponent(_component_NuxtLink, {
        to: "/company",
        class: "text-lg font-medium text-black hover:text-primarycolor transition"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`Company`);
          } else {
            return [
              createTextVNode("Company")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(ssrRenderComponent(_component_NuxtLink, {
        to: "/career",
        class: "text-lg font-medium text-black hover:text-primarycolor transition"
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
      _push(ssrRenderComponent(_component_NuxtLink, {
        to: "/contact",
        class: "lg:hidden"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`Contact Us`);
          } else {
            return [
              createTextVNode("Contact Us")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</nav><div class="${ssrRenderClass([{ "opacity-100 visible": menuOpen.value, "opacity-0 invisible": !menuOpen.value }, "fixed top-0 left-0 w-full h-screen bg-black bg-opacity-50 z-40 transition-opacity duration-300 lg:hidden"])}"></div><nav class="${ssrRenderClass([{ "translate-x-0": menuOpen.value, "-translate-x-full": !menuOpen.value }, "fixed top-0 left-0 w-[320px] bg-white shadow-lg h-screen z-50 transition-transform duration-300 lg:hidden"])}"><div class="px-4 py-8 border-b border-gray-100 flex justify-between items-center">`);
      _push(ssrRenderComponent(_component_NuxtLink, {
        to: "/",
        class: "block"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<img${ssrRenderAttr("src", logo)} alt="main logo" class="h-auto w-[60%]"${_scopeId}>`);
          } else {
            return [
              createVNode("img", {
                src: logo,
                alt: "main logo",
                class: "h-auto w-[60%]"
              })
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`<button class="lg:hidden" aria-label="Close menu"><svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg" class="text-black"><path d="M13.5857 2.39091C14.1323 1.84429 14.1323 0.956583 13.5857 0.409964C13.039 -0.136655 12.1513 -0.136655 11.6047 0.409964L7 5.01905L2.39091 0.414337C1.84429 -0.132282 0.956583 -0.132282 0.409964 0.414337C-0.136655 0.960956 -0.136655 1.84866 0.409964 2.39528L5.01905 7L0.414337 11.6091C-0.132282 12.1557 -0.132282 13.0434 0.414337 13.59C0.960956 14.1367 1.84866 14.1367 2.39528 13.59L7 8.98095L11.6091 13.5857C12.1557 14.1323 13.0434 14.1323 13.59 13.5857C14.1367 13.039 14.1367 12.1513 13.59 11.6047L8.98095 7L13.5857 2.39091Z" fill="black"></path></svg></button></div><ul class="flex flex-col"><!--[-->`);
      ssrRenderList(["Services", "Technology", "Projects", "Company", "Career", "Contact"], (item, index) => {
        _push(`<li class="py-3 border-b border-gray-100 px-4">`);
        _push(ssrRenderComponent(_component_NuxtLink, {
          to: "/" + item.toLowerCase(),
          onClick: closeMenu,
          class: "text-lg font-medium hover:text-primarycolor transition"
        }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(`${ssrInterpolate(item)}`);
            } else {
              return [
                createTextVNode(toDisplayString(item), 1)
              ];
            }
          }),
          _: 2
        }, _parent));
        _push(`</li>`);
      });
      _push(`<!--]--></ul></nav><button class="block lg:hidden p-2" aria-label="Open menu"><svg width="18" height="14" viewBox="0 0 18 14" fill="none" xmlns="http://www.w3.org/2000/svg" class="text-black"><path d="M17 13H1M17 7H1M17 1H1" stroke="black" stroke-width="2" stroke-linecap="round"></path></svg></button>`);
      _push(ssrRenderComponent(_component_NuxtLink, {
        to: "/contact",
        class: "lg:flex hidden theme-btn",
        "aria-label": "Contact Us"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(` Contact Us `);
          } else {
            return [
              createTextVNode(" Contact Us ")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div></div></header>`);
    };
  }
};
const _sfc_setup$4 = _sfc_main$4.setup;
_sfc_main$4.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/Header.vue");
  return _sfc_setup$4 ? _sfc_setup$4(props, ctx) : void 0;
};

const ctaBg = "" + __buildAssetsURL("cta-section.UIO9OtJ5.png");

const _sfc_main$3 = {
  __name: "cta",
  __ssrInlineRender: true,
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      const _component_NuxtLink = __nuxt_component_0;
      _push(`<section${ssrRenderAttrs(mergeProps({
        class: "pb-[100px] bg-auto bg-center bg-no-repeat",
        style: { backgroundImage: `url(${unref(ctaBg)})` }
      }, _attrs))}><div class="container"><div class="max-w-[375px] mx-auto text-center"><h2 class="text-black md:text-[45px] md:leading-[50px] text-3xl font-semibold">Have a big idea?</h2><p class="my-[33px]">Let&#39;s bring it to life together!</p>`);
      _push(ssrRenderComponent(_component_NuxtLink, {
        to: "/",
        class: "theme-btn px-[60px] py-[14px] inline-block"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`Get started`);
          } else {
            return [
              createTextVNode("Get started")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div></div></section>`);
    };
  }
};
const _sfc_setup$3 = _sfc_main$3.setup;
_sfc_main$3.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/cta.vue");
  return _sfc_setup$3 ? _sfc_setup$3(props, ctx) : void 0;
};

const logoWhite = "/shreeom_website/Images/logos/logo-white.png";
const _sfc_main$2 = {
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
const _sfc_setup$2 = _sfc_main$2.setup;
_sfc_main$2.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/Footer.vue");
  return _sfc_setup$2 ? _sfc_setup$2(props, ctx) : void 0;
};

const _sfc_main$1 = {
  __name: "ScrollToTopButton",
  __ssrInlineRender: true,
  setup(__props) {
    const isVisible = ref(false);
    return (_ctx, _push, _parent, _attrs) => {
      if (isVisible.value) {
        _push(`<button${ssrRenderAttrs(mergeProps({
          class: "fixed bottom-6 right-6 bg-primarycolor text-white p-3 rounded-full z-50 shadow-lg transition-opacity duration-1000",
          "aria-label": "Scroll to top"
        }, _attrs))}>`);
        _push(ssrRenderComponent(unref(ChevronsUp), null, null, _parent));
        _push(`</button>`);
      } else {
        _push(`<!---->`);
      }
    };
  }
};
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/ScrollToTopButton.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};

const _sfc_main = {
  __name: "default",
  __ssrInlineRender: true,
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<!--[-->`);
      _push(ssrRenderComponent(_sfc_main$4, null, null, _parent));
      _push(`<main>`);
      ssrRenderSlot(_ctx.$slots, "default", {}, null, _push, _parent);
      _push(`</main>`);
      _push(ssrRenderComponent(_sfc_main$3, null, null, _parent));
      _push(ssrRenderComponent(_sfc_main$2, null, null, _parent));
      _push(ssrRenderComponent(_sfc_main$1, null, null, _parent));
      _push(`<!--]-->`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("layouts/default.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=default.vue.mjs.map
