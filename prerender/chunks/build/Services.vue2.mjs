import { unref, useSSRContext } from 'file://D:/2025-04-04/wellfoodwebsite/node_modules/vue/index.mjs';
import { ssrRenderAttrs, ssrRenderList, ssrRenderStyle, ssrRenderAttr, ssrInterpolate } from 'file://D:/2025-04-04/wellfoodwebsite/node_modules/vue/server-renderer/index.mjs';

const serviceData = [
  {
    title: "Web Design & Development",
    description: "Professional website design crafted by web design leading artistic minds. We create a custom digital experience that engages and inspires your audience.",
    icon: "web-design.png",
    borderColor: "#FF0011",
    bgColor: "#FFF9F9"
  },
  {
    title: "E-Commerce Website Development",
    description: "We provide effective e-commerce services to help you create an impressive online store with easy functionality and increase your sales and profits.",
    icon: "e-commerce.png",
    borderColor: "#039873",
    bgColor: "#F9FFF9"
  },
  {
    title: "Digital Marketing",
    description: "Digital Marketing is an extremely effective way to drive traffic to your website and generate leads and client retention.",
    icon: "digital-marketing.png",
    borderColor: "#FFD500",
    bgColor: "#FFF9F9"
  },
  {
    title: "UI/UX Designing",
    description: "We create experiences that are intuitive to use and visually appealing. From information architecture to user flow and branding, our design team handles all aspects of product design.",
    icon: "ui-ux.png",
    // icon:"../public/Images/icons/ui-ux.png"
    borderColor: "#0077FF",
    bgColor: "#F9FCFF"
  },
  {
    title: "CMS Website Development",
    description: "CMS services make our clients’ websites more informative. Stand out in your industry with our content-customized service.",
    icon: "cms-website.png",
    borderColor: "#6F00FF",
    bgColor: "#FFF9FF"
  },
  {
    title: "Maintenance & Support",
    description: "Whether or not we wrote the original code for your software, count on us to keep your products functional and bug-free.",
    icon: "maintenance.png",
    borderColor: "#FF7700",
    bgColor: "#FFFAF9"
  }
];

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

export { _sfc_main as _ };
//# sourceMappingURL=Services.vue2.mjs.map
