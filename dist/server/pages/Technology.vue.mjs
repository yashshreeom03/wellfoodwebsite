import { unref, useSSRContext } from "vue";
import { ssrRenderComponent, ssrRenderList, ssrInterpolate, ssrRenderAttr } from "vue/server-renderer";
import _sfc_main$1 from "../components/PageBanner.vue.mjs";
import techStack from "../data/techStack.mjs";
const _sfc_main = {
  __name: "Technology",
  __ssrInlineRender: true,
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<!--[-->`);
      _push(ssrRenderComponent(_sfc_main$1, {
        title: "Technology",
        breadcrumb: "Technology"
      }, null, _parent));
      _push(`<section class="py-[100px]"><div class="container"><!--[-->`);
      ssrRenderList(unref(techStack), (category) => {
        _push(`<div class="mb-[100px]"><h2 class="text-2xl font-medium mb-9 max-sm:text-center">${ssrInterpolate(category.category)}</h2><div class="flex flex-wrap max-sm:justify-center gap-4"><!--[-->`);
        ssrRenderList(category.technologies, (tech) => {
          _push(`<div class="border rounded-[15px] h-[148px] w-[203px] p-4 flex flex-col justify-center items-center gap-[15px]"><img${ssrRenderAttr("src", tech.icon)} alt=""><span class="text-lg font-medium">${ssrInterpolate(tech.name)}</span></div>`);
        });
        _push(`<!--]--></div></div>`);
      });
      _push(`<!--]--></div></section><!--]-->`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/Technology.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
export {
  _sfc_main as default
};
//# sourceMappingURL=Technology.vue.mjs.map
