import __nuxt_component_0 from "../node_modules/nuxt/dist/app/components/nuxt-link.mjs";
import { ref, computed, withCtx, createTextVNode, toDisplayString, useSSRContext } from "vue";
import { ssrRenderAttrs, ssrRenderClass, ssrRenderList, ssrRenderStyle, ssrRenderAttr, ssrInterpolate, ssrRenderComponent } from "vue/server-renderer";
import featuresData from "../data/featuresData.mjs";
const _sfc_main = {
  __name: "Projects",
  __ssrInlineRender: true,
  props: {
    showCategories: {
      type: Boolean,
      default: true
    }
  },
  setup(__props) {
    const props = __props;
    const selectCategory = ref("UI/UX design");
    const filteredData = computed(() => {
      return props.showCategories ? featuresData.filter((item) => item.category === selectCategory.value) : featuresData;
    });
    const getButtonClass = (category) => {
      return selectCategory.value === category ? "bg-[#039873] text-white border-[#039873]" : "bg-white border-[#DDDDDD] text-black";
    };
    return (_ctx, _push, _parent, _attrs) => {
      const _component_NuxtLink = __nuxt_component_0;
      _push(`<div${ssrRenderAttrs(_attrs)}>`);
      if (__props.showCategories) {
        _push(`<div class="flex flex-wrap gap-4 justify-center mb-[120px]"><button class="${ssrRenderClass([getButtonClass("UI/UX design"), "px-4 py-2 rounded-lg transition text-lg font-medium border"])}"> UI/UX Design </button><button class="${ssrRenderClass([getButtonClass("React.js"), "px-4 py-2 rounded-lg transition text-lg font-medium border"])}"> React.js </button><button class="${ssrRenderClass([getButtonClass("Web development"), "px-4 py-2 rounded-lg transition text-lg font-medium border"])}"> Web Development </button><button class="${ssrRenderClass([getButtonClass("PHP"), "px-4 py-2 rounded-lg transition text-lg font-medium border"])}"> PHP </button><button class="${ssrRenderClass([getButtonClass("Laravel"), "px-4 py-2 rounded-lg transition text-lg font-medium border"])}"> Laravel </button><button class="${ssrRenderClass([getButtonClass(" node.js"), "px-4 py-2 rounded-lg transition text-lg font-medium border"])}"> node.js </button></div>`);
      } else {
        _push(`<!---->`);
      }
      _push(`<!--[-->`);
      ssrRenderList(filteredData.value, (feature, index) => {
        _push(`<div class="sm:p-[50px] p-[30px] last:mb-0 mb-20 rounded-[20px] flex flex-col gap-6 lg:flex-row items-center justify-between" style="${ssrRenderStyle({ background: feature.bgColor })}">`);
        if (index % 2 !== 0) {
          _push(`<!--[--><div class="sm:p-[30px] p-3 rounded-lg" style="${ssrRenderStyle({ background: feature.bgimgColor })}"><img${ssrRenderAttr("src", feature.image)} alt="Feature Image" class="max-w-full rounded-lg shadow"></div><div class="w-full lg:w-1/2"><h6 class="text-base mb-[25px] font-semibold uppercase" style="${ssrRenderStyle({ color: feature.textColor })}"> Build Visually </h6><h2 class="sm:text-[40px] text-[28px] leading-[30px] sm:leading-[50px] font-semibold">${ssrInterpolate(feature.title)}</h2><p class="sm:text-lg my-[25px]">${ssrInterpolate(feature.description)}</p>`);
          _push(ssrRenderComponent(_component_NuxtLink, {
            to: "/projectsDetail",
            class: "theme-btn Projects-btn inline-block mt-4 px-[60px] py-[14px]",
            style: { background: feature.buttonColor, "--boxShadow": feature.boxShadow }
          }, {
            default: withCtx((_, _push2, _parent2, _scopeId) => {
              if (_push2) {
                _push2(`${ssrInterpolate(feature.buttonText)}`);
              } else {
                return [
                  createTextVNode(toDisplayString(feature.buttonText), 1)
                ];
              }
            }),
            _: 2
          }, _parent));
          _push(`</div><!--]-->`);
        } else {
          _push(`<!--[--><div class="w-full lg:w-1/2"><h6 class="text-base mb-[25px] font-semibold uppercase" style="${ssrRenderStyle({ color: feature.textColor })}"> Build Visually </h6><h2 class="sm:text-[40px] text-[28px] leading-[30px] sm:leading-[50px] font-semibold">${ssrInterpolate(feature.title)}</h2><p class="sm:text-lg my-[25px]">${ssrInterpolate(feature.description)}</p>`);
          _push(ssrRenderComponent(_component_NuxtLink, {
            to: "/projectsDetail",
            class: "theme-btn Projects-btn inline-block mt-4 px-[60px] py-[14px]",
            style: { background: feature.buttonColor, "--boxShadow": feature.boxShadow }
          }, {
            default: withCtx((_, _push2, _parent2, _scopeId) => {
              if (_push2) {
                _push2(`${ssrInterpolate(feature.buttonText)}`);
              } else {
                return [
                  createTextVNode(toDisplayString(feature.buttonText), 1)
                ];
              }
            }),
            _: 2
          }, _parent));
          _push(`</div><div class="sm:p-[30px] p-3 rounded-lg" style="${ssrRenderStyle({ background: feature.bgimgColor })}"><img${ssrRenderAttr("src", feature.image)} alt="Feature Image" class="max-w-full rounded-lg shadow"></div><!--]-->`);
        }
        _push(`</div>`);
      });
      _push(`<!--]--></div>`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/Projects.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
export {
  _sfc_main as default
};
//# sourceMappingURL=Projects.vue.mjs.map
