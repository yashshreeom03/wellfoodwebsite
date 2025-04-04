import { defineComponent, computed, ref, mergeProps } from "vue";
import { ssrRenderAttrs, ssrRenderAttr, ssrInterpolate } from "vue/server-renderer";
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "Counter",
  __ssrInlineRender: true,
  props: {
    value: {},
    label: {},
    extraClass: {}
  },
  setup(__props) {
    const props = __props;
    const parsedValue = computed(() => {
      return typeof props.value === "number" ? props.value : Number(props.value);
    });
    ref(null);
    const displayLabel = computed(() => props.label || "Default Label");
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({
        class: `text-center ${_ctx.extraClass}`
      }, _attrs))}><h3${ssrRenderAttr("data-stop", parsedValue.value)} class="text-[55px] font-bold leading-[70px] text-primarycolor"> 0 </h3><p class="font-medium text-black mt-2">${ssrInterpolate(displayLabel.value)}</p></div>`);
    };
  }
});
export {
  _sfc_main as default
};
//# sourceMappingURL=Counter.vue2.mjs.map
