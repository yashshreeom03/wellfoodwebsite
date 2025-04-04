import __nuxt_component_0 from "../node_modules/nuxt/dist/app/components/nuxt-link.mjs";
import { unref, withCtx, createTextVNode, useSSRContext } from "vue";
import { ssrRenderAttrs, ssrRenderStyle, ssrInterpolate, ssrRenderComponent } from "vue/server-renderer";
import backgroundImage from "../public/Images/background/page-benner.png.mjs";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
import { faChevronRight } from "@fortawesome/free-solid-svg-icons";
const _sfc_main = {
  __name: "PageBanner",
  __ssrInlineRender: true,
  props: {
    title: String,
    breadcrumb: String
  },
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      const _component_NuxtLink = __nuxt_component_0;
      _push(`<section${ssrRenderAttrs(_attrs)}><div class="container"><div class="relative"><div class="absolute inset-0 bg-bottom bg-no-repeat" style="${ssrRenderStyle({ backgroundImage: `url(${unref(backgroundImage)})` })}"></div><div class="relative z-10 flex flex-col items-center justify-center pt-[190px] pb-[100px]"><h1 class="text-[32px] font-bold leading-9 text-center">${ssrInterpolate(__props.title)}</h1><p class="mt-4 text-lg flex items-start"><span>`);
      _push(ssrRenderComponent(_component_NuxtLink, { to: "/services" }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`Home`);
          } else {
            return [
              createTextVNode("Home")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</span><span class="mx-2">`);
      _push(ssrRenderComponent(unref(FontAwesomeIcon), {
        icon: unref(faChevronRight),
        class: "text-sm"
      }, null, _parent));
      _push(`</span><span class="text-[#01624A]">${ssrInterpolate(__props.breadcrumb)}</span></p></div></div></div></section>`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/PageBanner.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
export {
  _sfc_main as default
};
//# sourceMappingURL=PageBanner.vue.mjs.map
