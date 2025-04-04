import { ref, mergeProps, unref, useSSRContext } from "vue";
import { ssrRenderAttrs, ssrRenderComponent } from "vue/server-renderer";
import { ChevronsUp } from "lucide-vue-next";
const _sfc_main = {
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
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/ScrollToTopButton.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
export {
  _sfc_main as default
};
//# sourceMappingURL=ScrollToTopButton.vue.mjs.map
