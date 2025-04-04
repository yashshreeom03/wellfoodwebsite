import __nuxt_component_0 from "../node_modules/nuxt/dist/app/components/nuxt-link.mjs";
import { computed, unref, withCtx, createTextVNode, useSSRContext } from "vue";
import { ssrRenderStyle, ssrRenderComponent, ssrRenderAttr, ssrRenderList, ssrInterpolate } from "vue/server-renderer";
import _imports_0 from "../public/Images/about/about-us-1.png.mjs";
import SectionHeader from "../components/SectionHeader.vue.mjs";
import _sfc_main$4 from "../components/TestimonialsSlider.vue.mjs";
import _sfc_main$3 from "../components/Projects.vue.mjs";
import _sfc_main$2 from "../components/Services.vue.mjs";
import "../components/Counter.vue.mjs";
import workingProcess from "../data/workingProcess.mjs";
import heroBg from "../public/Images/background/hero-section.png.mjs";
import aboutBg from "../public/Images/background/about-section.png.mjs";
import workprocessBg from "../public/Images/background/work-process-section.png.mjs";
import ai from "../public/Images/icons/ai.png.mjs";
import figma from "../public/Images/icons/figma.png.mjs";
import star from "../public/Images/icons/star.png.mjs";
import vue from "../public/Images/icons/vue.png.mjs";
import ps from "../public/Images/icons/ps.png.mjs";
import node from "../public/Images/icons/node.png.mjs";
import php from "../public/Images/icons/php.png.mjs";
import react from "../public/Images/icons/react.png.mjs";
import _sfc_main$1 from "../components/Counter.vue2.mjs";
const _sfc_main = {
  __name: "index",
  __ssrInlineRender: true,
  props: {
    itemsText: {
      type: Array,
      default: () => new Array(40).fill("Get In Touch")
    }
  },
  setup(__props) {
    computed(() => "hidden");
    return (_ctx, _push, _parent, _attrs) => {
      const _component_NuxtLink = __nuxt_component_0;
      _push(`<!--[--><section class="pt-[187px] pb-11 relative" style="${ssrRenderStyle({ backgroundImage: `url(${unref(heroBg)})` })}"><div class="container"><div class="max-w-[834px] text-center mx-auto relative z-10"><h6 class="text-base text-primarycolor mb-[38px]">Welcome to Shreeom</h6><h1 class="text-[85px] leading-[102px] font-semibold max-lg:text-5xl max-sm:text-4xl"> Turn your ideas into great products </h1><p class="mt-[30px] mb-[50px] max-w-[527px] mx-auto text-lg"> Building an expert software development team for your project, we put your needs first. Let&#39;s join us now! </p><div class="flex justify-center gap-6 flex-wrap">`);
      _push(ssrRenderComponent(_component_NuxtLink, {
        to: "/",
        class: "theme-btn px-[60px] py-[14px]"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(` Let&#39;s Talk `);
          } else {
            return [
              createTextVNode(" Let's Talk ")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(ssrRenderComponent(_component_NuxtLink, {
        to: "/",
        class: "theme-btn-border px-[60px]"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(` About Us `);
          } else {
            return [
              createTextVNode(" About Us ")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div></div><div class="grid counter-wrapper lg:grid-cols-4 grid-cols-2 gap-6 mt-[100px] text-center">`);
      _push(ssrRenderComponent(_sfc_main$1, {
        value: "100",
        label: "Projects Delivered"
      }, null, _parent));
      _push(ssrRenderComponent(_sfc_main$1, {
        value: "2",
        label: "Years of Experience"
      }, null, _parent));
      _push(ssrRenderComponent(_sfc_main$1, {
        value: "98",
        label: "Clients Satisfaction"
      }, null, _parent));
      _push(ssrRenderComponent(_sfc_main$1, {
        value: "10",
        label: "Team Members"
      }, null, _parent));
      _push(`</div></div><div class="w-[50%] h-[234px] hero-bg absolute top-[30%] left-1/3 z-0"></div><div class="absolute rotate-[330deg] bg-white w-[37px] h-[35px] backdrop-blur-[41.2449836730957px] xl:top-[23.5%] xl:left-[22.5%] top-[22%] left-[14%] max-md:hidden rounded-[10px] flex items-center justify-center shadow-[2px_5px_20px_0px_#0000000F]"><img${ssrRenderAttr("src", unref(ai))} alt="ai"></div><div class="absolute rotate-12 bg-white w-[50px] h-[50px] backdrop-blur-[41.2449836730957px] xl:top-[42%] xl:left-[17%] top-[45%] left-[15%] max-md:hidden rounded-[10px] flex items-center justify-center shadow-[2px_5px_20px_0px_#0000000F]"><img${ssrRenderAttr("src", unref(vue))} alt="vue"></div><div class="absolute rotate-[350deg] bg-white w-[58px] h-[58px] backdrop-blur-[41.2449836730957px] xl:top-[54%] xl:left-[24%] top-[61%] left-[20%] max-md:hidden rounded-[10px] flex items-center justify-center shadow-[2px_5px_20px_0px_#0000000F]"><img${ssrRenderAttr("src", unref(figma))} alt="figma"></div><div class="absolute rotate-[40deg] bg-white w-[38px] h-[38px] backdrop-blur-[41.2449836730957px] top-[20%] right-[25%] max-md:hidden rounded-[10px] flex items-center justify-center shadow-[2px_5px_20px_0px_#0000000F]"><img${ssrRenderAttr("src", unref(ps))} alt="ps"></div><div class="absolute rotate-[320deg] bg-white w-[51px] h-[51px] backdrop-blur-[41.2449836730957px] xl:top-[38%] xl:right-[20%] lg:top-[38%] top-[34%] right-[13%] max-md:hidden rounded-[10px] flex items-center justify-center shadow-[2px_5px_20px_0px_#0000000F]"><img${ssrRenderAttr("src", unref(php))} alt="php"></div><div class="absolute rotate-[25deg] bg-white w-[53px] h-[53px] backdrop-blur-[41.2449836730957px] top-[46%] xl:right-[14%] right-[10%] max-md:hidden rounded-[6px] flex items-center justify-center shadow-[2px_5px_20px_0px_#0000000F]"><img${ssrRenderAttr("src", unref(node))} alt="node"></div><div class="absolute rotate-[25deg] bg-white w-[67px] h-[67px] backdrop-blur-[41.2449836730957px] xl:top-[57%] xl:right-[22%] top-[57%] right-[14%] max-md:hidden rounded-[10px] flex items-center justify-center shadow-[2px_5px_20px_0px_#0000000F]"><img${ssrRenderAttr("src", unref(react))} alt="react"></div></section><section class="pt-[50px] pb-[100px]"><div class="container"><div>`);
      _push(ssrRenderComponent(SectionHeader, {
        class: "text-center",
        largeMargin: "true",
        title: "Our Services",
        subtitle: "Our Core Services we deliver"
      }, null, _parent));
      _push(ssrRenderComponent(_sfc_main$2, null, null, _parent));
      _push(`</div></div></section><section class="pb-[100px] relative"><div class="container"><div class="flex flex-col gap-6 lg:flex-row items-center justify-between"><div class="w-full lg:w-1/2">`);
      _push(ssrRenderComponent(SectionHeader, {
        class: "mb-[25px]",
        title: "About us",
        subtitle: "The Shreeomsoft Difference"
      }, null, _parent));
      _push(`<p class="mb-[30px] text-lg sm:leading-9">The shreeomsoft is a website and mobile development companies and we are helping startup businesses turn their idea into a digital product into reality. With a team of over 10+ professionals and 2+ years of outstanding service such as branding design, web design &amp; development, app development, maintenance, we are providing dedicated support.</p>`);
      _push(ssrRenderComponent(_component_NuxtLink, {
        to: "/",
        class: "inline-block theme-btn px-[60px] py-[14px]"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`Learn more`);
          } else {
            return [
              createTextVNode("Learn more")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div><div class="w-full lg:w-1/2"><img${ssrRenderAttr("src", _imports_0)} class="mx-auto" alt=""></div></div></div><div class="absolute bottom-0 left-[45%] z-[-1]"><img${ssrRenderAttr("src", unref(aboutBg))} alt=""></div></section><section class="pb-[100px]"><div class="container"><div>`);
      _push(ssrRenderComponent(SectionHeader, {
        class: "text-center",
        largeMargin: "true",
        title: "Projects",
        subtitle: "Our Core Services we deliver"
      }, null, _parent));
      _push(ssrRenderComponent(_sfc_main$3, { showCategories: false }, null, _parent));
      _push(`</div></div></section><section class="pb-[100px] bg-auto bg-bottom bg-no-repeat" style="${ssrRenderStyle({ backgroundImage: `url(${unref(workprocessBg)})` })}"><div class="container"><div>`);
      _push(ssrRenderComponent(SectionHeader, {
        class: "text-center",
        largeMargin: true,
        title: "Our working process",
        subtitle: "How to start ?"
      }, null, _parent));
      _push(`<div class="grid grid-cols-2 working-wrapper md:grid-cols-4 gap-x-6"><!--[-->`);
      ssrRenderList(unref(workingProcess), (step, index) => {
        _push(`<div class="md:mb-[100px] mb-12"><div class="w-[150px] h-[150px] rounded-full mx-auto flex items-center justify-center mb-3" style="${ssrRenderStyle({ background: step.bgColor })}"><img${ssrRenderAttr("src", step.image)}${ssrRenderAttr("alt", step.title)}></div><div class="text-center"><p class="text-xl font-semibold">${ssrInterpolate(step.id)}. ${ssrInterpolate(step.title)}</p></div></div>`);
      });
      _push(`<!--]--></div></div></div></section>`);
      _push(ssrRenderComponent(_sfc_main$4, null, null, _parent));
      _push(`<section class="overflow-hidden whitespace-nowrap py-[50px]"><div class="flex gap-16 md:gap-[170px] animate-marquee"><!--[-->`);
      ssrRenderList(__props.itemsText, (item, index) => {
        _push(`<div class="flex items-center gap-4 md:gap-[25px] text-primarycolor"><img${ssrRenderAttr("src", unref(star))} class="max-md:w-[15%]" alt="Star"><h4 class="text-4xl md:text-[50px] font-semibold">${ssrInterpolate(item)}</h4></div>`);
      });
      _push(`<!--]--></div></section><!--]-->`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/index.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
export {
  _sfc_main as default
};
//# sourceMappingURL=index.vue.mjs.map
