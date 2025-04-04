import __nuxt_component_0 from "./node_modules/nuxt/dist/app/components/client-only.mjs";
import __nuxt_component_1 from "./node_modules/nuxt/dist/app/components/nuxt-layout.mjs";
import __nuxt_component_2 from "./node_modules/nuxt/dist/pages/runtime/page.mjs";
import { withCtx, createVNode, useSSRContext } from "vue";
import { ssrRenderAttrs, ssrRenderComponent } from "vue/server-renderer";
/* empty css                      */
/* empty css                           */
import { useHead } from "./node_modules/nuxt/dist/head/runtime/composables/v3.mjs";
const _sfc_main = {
  __name: "app",
  __ssrInlineRender: true,
  setup(__props) {
    useHead({
      title: "Turn your ideas into great products",
      meta: [
        { property: "og:type", content: "website" },
        { property: "og:title", content: "Turn your ideas into great products" },
        { name: "description", content: "The shreeomsoft is a website and mobile development companies and we are helping startup businesses turn their idea into a digital product into reality." },
        { property: "og:url", content: "https://dev1-shree.github.io/shreeom_website/" },
        { property: "og:image", content: "https://dev1-shree.github.io/shreeom_website/Images/logos/Shreeom logo.png" },
        { name: "twitter:card", content: "summary_large_image" },
        { name: "twitter:title", content: "Turn your ideas into great products" },
        { name: "twitter:description", content: "The shreeomsoft is a website and mobile development companies and we are helping startup businesses turn their idea into a digital product into reality." },
        { property: "twitter:url", content: "https://dev1-shree.github.io/shreeom_website/" },
        { name: "twitter:image", content: "https://dev1-shree.github.io/shreeom_website/Images/logos/Shreeom logo.png" },
        { name: "twitter:site", content: "@shreeomTwitterHandle" }
      ]
    });
    return (_ctx, _push, _parent, _attrs) => {
      const _component_client_only = __nuxt_component_0;
      const _component_NuxtLayout = __nuxt_component_1;
      const _component_NuxtPage = __nuxt_component_2;
      _push(`<div${ssrRenderAttrs(_attrs)}>`);
      _push(ssrRenderComponent(_component_client_only, null, {}, _parent));
      _push(ssrRenderComponent(_component_NuxtLayout, null, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(_component_NuxtPage, null, null, _parent2, _scopeId));
          } else {
            return [
              createVNode(_component_NuxtPage)
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div>`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("app.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
export {
  _sfc_main as default
};
//# sourceMappingURL=app.vue.mjs.map
