import { ssrRenderComponent } from "vue/server-renderer";
import _sfc_main$2 from "../components/Services.vue.mjs";
import _sfc_main$1 from "../components/PageBanner.vue.mjs";
import { useSSRContext } from "vue";
const _sfc_main = {
  __name: "services",
  __ssrInlineRender: true,
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<!--[-->`);
      _push(ssrRenderComponent(_sfc_main$1, {
        title: "Our Services",
        breadcrumb: "Our Services"
      }, null, _parent));
      _push(`<section class="py-[100px]"><div class="container">`);
      _push(ssrRenderComponent(_sfc_main$2, null, null, _parent));
      _push(`</div></section><!--]-->`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/services.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
export {
  _sfc_main as default
};
//# sourceMappingURL=services.vue.mjs.map
