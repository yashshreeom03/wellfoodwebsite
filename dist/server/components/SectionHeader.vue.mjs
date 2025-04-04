import { mergeProps, useSSRContext } from "vue";
import { ssrRenderAttrs, ssrInterpolate } from "vue/server-renderer";
import _export_sfc from "../_virtual/_plugin-vue_export-helper.mjs";
const _sfc_main = {
  props: {
    title: String,
    subtitle: String,
    largeMargin: Boolean
    // Control margin with a prop
  },
  computed: {
    shouldApplyMargin() {
      return this.largeMargin;
    }
  }
};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(mergeProps({
    class: $options.shouldApplyMargin ? "mb-[80px]" : "?"
  }, _attrs))}><h6 class="text-base text-primarycolor mb-[30px]">${ssrInterpolate($props.title)}</h6><h2 class="text-black md:text-[45px] md:leading-[50px] text-3xl font-semibold">${ssrInterpolate($props.subtitle)}</h2></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/SectionHeader.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const SectionHeader = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  SectionHeader as default
};
//# sourceMappingURL=SectionHeader.vue.mjs.map
