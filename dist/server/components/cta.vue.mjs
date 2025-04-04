import __nuxt_component_0 from "../node_modules/nuxt/dist/app/components/nuxt-link.mjs";
import { mergeProps, unref, withCtx, createTextVNode, useSSRContext } from "vue";
import { ssrRenderAttrs, ssrRenderComponent } from "vue/server-renderer";
import ctaBg from "../public/Images/background/cta-section.png.mjs";
const _sfc_main = {
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
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/cta.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
export {
  _sfc_main as default
};
//# sourceMappingURL=cta.vue.mjs.map
