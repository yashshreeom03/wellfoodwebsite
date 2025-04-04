import __nuxt_component_0 from "../node_modules/nuxt/dist/app/components/nuxt-link.mjs";
import { unref, withCtx, createTextVNode, useSSRContext } from "vue";
import { ssrRenderComponent, ssrRenderList, ssrInterpolate } from "vue/server-renderer";
import _sfc_main$1 from "../components/PageBanner.vue.mjs";
import jobs from "../data/jobs.mjs";
const _sfc_main = {
  __name: "Career",
  __ssrInlineRender: true,
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      const _component_NuxtLink = __nuxt_component_0;
      _push(`<!--[-->`);
      _push(ssrRenderComponent(_sfc_main$1, {
        title: "Career",
        breadcrumb: "Career"
      }, null, _parent));
      _push(`<section class="py-[100px]"><div class="container"><h2 class="text-black md:text-[45px] md:leading-[50px] mb-[30px] text-3xl font-medium">Engineering</h2><!--[-->`);
      ssrRenderList(unref(jobs), (job, index) => {
        _push(`<div class="border-b py-9 flex justify-between flex-wrap items-center gap-5 last:border-0"><div><h3 class="text-3xl font-normal mb-4">${ssrInterpolate(job.title)}</h3><p class="text-black font-medium text-lg">${ssrInterpolate(job.location)} . <span>${ssrInterpolate(job.salary)}</span></p></div>`);
        _push(ssrRenderComponent(_component_NuxtLink, {
          to: "/CareerDetail",
          class: "text-primarycolor font-semibold text-lg hover:underline"
        }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(` More details `);
            } else {
              return [
                createTextVNode(" More details ")
              ];
            }
          }),
          _: 2
        }, _parent));
        _push(`</div>`);
      });
      _push(`<!--]--></div></section><!--]-->`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/Career.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
export {
  _sfc_main as default
};
//# sourceMappingURL=Career.vue.mjs.map
