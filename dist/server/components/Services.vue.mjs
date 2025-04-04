import { unref, useSSRContext } from "vue";
import { ssrRenderAttrs, ssrRenderList, ssrRenderStyle, ssrRenderAttr, ssrInterpolate } from "vue/server-renderer";
import serviceData from "../data/servicesData.mjs";
const _sfc_main = {
  __name: "Services",
  __ssrInlineRender: true,
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(_attrs)}><div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-[29px]"><!--[-->`);
      ssrRenderList(unref(serviceData), (service, index) => {
        _push(`<div class="py-[40px] px-[29px] rounded-[20px] border-2" style="${ssrRenderStyle({ backgroundColor: service.bgColor || "white", borderColor: service.borderColor })}"><img${ssrRenderAttr("src", `/shreeom_website/Images/icons/${service.icon}`)}${ssrRenderAttr("alt", service.title)} class="mb-[26px]"><h3 class="text-xl font-semibold">${ssrInterpolate(service.title)}</h3><p class="text-[#616161] text-lg mt-4">${ssrInterpolate(service.description)}</p></div>`);
      });
      _push(`<!--]--></div></div>`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/Services.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
export {
  _sfc_main as default
};
//# sourceMappingURL=Services.vue.mjs.map
