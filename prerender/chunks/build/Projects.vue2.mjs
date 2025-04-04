import { _ as __nuxt_component_0 } from './nuxt-link.mjs';
import { ref, computed, withCtx, createTextVNode, toDisplayString, useSSRContext } from 'file://D:/2025-04-04/wellfoodwebsite/node_modules/vue/index.mjs';
import { ssrRenderAttrs, ssrRenderClass, ssrRenderList, ssrRenderStyle, ssrRenderAttr, ssrInterpolate, ssrRenderComponent } from 'file://D:/2025-04-04/wellfoodwebsite/node_modules/vue/server-renderer/index.mjs';

const featuresData = [
  {
    title: "Predict future performance to plan better now",
    description: "When you start working with Elementor, everything will feel familiar and intuitive. This is possible thanks to interface features like Navigator, Copy/Paste, Copy Style, and more.",
    buttonText: "View more",
    buttonColor: "linear-gradient(90deg, #02B78A 0%, #3D927D 100%)",
    bgColor: "linear-gradient(180deg, #E0FFEE 0%, #F8FFFC 100%)",
    textColor: "#38947E",
    bgimgColor: "#0398730A",
    image: "/shreeom_website/Images/projects/portfolio-1.png",
    category: "UI/UX design",
    boxShadow: "0px 10px 18px 0px #00A87E38"
  },
  {
    title: "Optimize your workflow effortlessly",
    description: "Work with tools that make everything feel intuitive. Features like Navigator, Copy/Paste, and Smart Automation ensure a seamless experience.",
    buttonText: "View more",
    buttonColor: "linear-gradient(90deg, #B7B102 0%, #88923D 100%)",
    bgColor: "linear-gradient(180deg, #FFFEE0 0%, #FFFFF8 100%)",
    textColor: "#919438",
    bgimgColor: "#7398030A",
    image: "/shreeom_website/Images/projects/portfolio-1.png",
    category: "React.js",
    boxShadow: "0px 10px 18px 0px #89A80038"
  },
  {
    title: "Enhance productivity with intuitive tools",
    description: "Streamline your work with AI-powered tools, reducing time and effort while maximizing results. Navigate seamlessly with features designed for efficiency.",
    buttonText: "View more",
    buttonColor: "linear-gradient(90deg, #B74202 0%, #B35C1E 100%)",
    bgColor: "linear-gradient(180deg, #FFEBE0 0%, #FFFBF8 100%)",
    textColor: "#944338",
    bgimgColor: "#9864030A",
    image: "/shreeom_website/Images/projects/portfolio-1.png",
    category: "Web development",
    boxShadow: "0px 10px 18px 0px #A8540038"
  },
  {
    title: "Transform ideas into reality effortlessly",
    description: "With an intuitive interface and real-time insights, decision-making becomes effortless. Optimize strategies and improve outcomes instantly.",
    buttonText: "View more",
    buttonColor: "linear-gradient(90deg, #B7028A 0%, #923D86 100%)",
    bgColor: "linear-gradient(180deg, #FFE0FB 0%, #FFF8FF 100%)",
    textColor: "#943888",
    bgimgColor: "#9864030A",
    image: "/shreeom_website/Images/projects/portfolio-1.png",
    category: "PHP",
    boxShadow: "0px 10px 18px 0px #9F00A838"
  }
];

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

export { _sfc_main as _ };
//# sourceMappingURL=Projects.vue2.mjs.map
