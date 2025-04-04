import __nuxt_component_0 from "../node_modules/nuxt/dist/app/components/nuxt-link.mjs";
import { withCtx, createTextVNode, unref, useSSRContext } from "vue";
import { ssrRenderComponent, ssrRenderList, ssrRenderAttr } from "vue/server-renderer";
import _sfc_main$1 from "../components/PageBanner.vue.mjs";
import portfolioData from "../data/projectsDetail.mjs";
const _sfc_main = {
  __name: "projectsDetail",
  __ssrInlineRender: true,
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      const _component_NuxtLink = __nuxt_component_0;
      _push(`<!--[-->`);
      _push(ssrRenderComponent(_sfc_main$1, {
        title: "Predict future performance to plan better now",
        breadcrumb: "Predict future performance to plan better now"
      }, null, _parent));
      _push(`<section class="py-[100px]"><div class="container"><div class="flex max-lg:flex-col gap-6 justify-between"><div><h2 class="text-2xl font-medium mb-12">Project Overview</h2><p class="text-lg leading-9">Wrangle is a Slack management tool designed to help business teams manage channels, messages, and tasks more efficiently within Slack. The goal was to create an intuitive and powerful interface that seamlessly integrates with Slack, allowing team members to automate repetitive tasks, organize conversations, and improve team collaboration.Wrangle is a Slack management tool designed to help business teams manage channels, messages, and tasks more efficiently within Slack. The goal was to create an intuitive and powerful interface that seamlessly integrates with Slack, allowing team members to automate repetitive tasks, organize conversations, and improve team collaboration.</p></div><div class="w-full"><div class="lg:min-w-[426px] w-full border border-[#EDEDED] rounded-xl p-[30px]"><div class="mb-5"><h4 class="text-lg font-semibold">Category : <span class="text-lg font-medium">Dashboard</span></h4></div><div class="mb-5"><h4 class="text-lg font-semibold">Author : <span class="text-lg font-medium">Shreeomsoft</span></h4></div><div class="mb-5"><h4 class="text-lg font-semibold">Created date : <span class="text-lg font-medium">3 April 2025</span></h4></div><div class="mb-5"><h4 class="font-semibold text-lg">Technologies Used : <span class="text-lg font-medium">Figma , WordPress , html, css, sass, jQuery, PHP, Next, Node.js , Larvel</span></h4></div><div>`);
      _push(ssrRenderComponent(_component_NuxtLink, {
        to: "",
        class: "text-lg font-semibold underline text-primarycolor cursor-pointer"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(` Live Link `);
          } else {
            return [
              createTextVNode(" Live Link ")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div></div></div></div></div></section><section><div class="container"><div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-[29px]"><!--[-->`);
      ssrRenderList(unref(portfolioData), (item, index) => {
        _push(`<div class="p-[17px] rounded-lg bg-[#03987308]"><img${ssrRenderAttr("src", item.image)}${ssrRenderAttr("alt", item.title)} class="w-full rounded-lg"></div>`);
      });
      _push(`<!--]--></div></div></section><!--]-->`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/projectsDetail.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
export {
  _sfc_main as default
};
//# sourceMappingURL=projectsDetail.vue.mjs.map
