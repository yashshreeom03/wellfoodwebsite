import __nuxt_component_0 from "../node_modules/nuxt/dist/app/components/nuxt-link.mjs";
import { useRuntimeConfig } from "../node_modules/nuxt/dist/app/nuxt.mjs";
import { ref, mergeProps, withCtx, unref, createVNode, createTextVNode, toDisplayString, useSSRContext } from "vue";
import { ssrRenderAttrs, ssrRenderComponent, ssrRenderAttr, ssrRenderClass, ssrRenderList, ssrInterpolate } from "vue/server-renderer";
import { useRoute } from "vue-router";
const logo = "/shreeom_website/Images/logos/logo.png";
const _sfc_main = {
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
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/Header.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
export {
  _sfc_main as default
};
//# sourceMappingURL=Header.vue.mjs.map
