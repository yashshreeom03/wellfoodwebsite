import { _ as __nuxt_component_0 } from './nuxt-link.mjs';
import { unref, withCtx, createTextVNode, useSSRContext } from 'file://D:/2025-04-04/wellfoodwebsite/node_modules/vue/index.mjs';
import { ssrRenderComponent, ssrRenderList, ssrInterpolate } from 'file://D:/2025-04-04/wellfoodwebsite/node_modules/vue/server-renderer/index.mjs';
import { _ as _sfc_main$1 } from './PageBanner.vue.mjs';
import 'file://D:/2025-04-04/wellfoodwebsite/node_modules/ufo/dist/index.mjs';
import './server.mjs';
import 'file://D:/2025-04-04/wellfoodwebsite/node_modules/hookable/dist/index.mjs';
import 'file://D:/2025-04-04/wellfoodwebsite/node_modules/unctx/dist/index.mjs';
import 'file://D:/2025-04-04/wellfoodwebsite/node_modules/h3/dist/index.mjs';
import 'file://D:/2025-04-04/wellfoodwebsite/node_modules/vue-router/dist/vue-router.node.mjs';
import 'file://D:/2025-04-04/wellfoodwebsite/node_modules/radix3/dist/index.mjs';
import 'file://D:/2025-04-04/wellfoodwebsite/node_modules/defu/dist/defu.mjs';
import 'file://D:/2025-04-04/wellfoodwebsite/node_modules/emailjs-com/cjs/index.js';
import '../_/renderer.mjs';
import 'file://D:/2025-04-04/wellfoodwebsite/node_modules/vue-bundle-renderer/dist/runtime.mjs';
import 'file://D:/2025-04-04/wellfoodwebsite/node_modules/unhead/dist/server.mjs';
import 'file://D:/2025-04-04/wellfoodwebsite/node_modules/unhead/dist/utils.mjs';
import '../_/nitro.mjs';
import 'file://D:/2025-04-04/wellfoodwebsite/node_modules/destr/dist/index.mjs';
import 'file://D:/2025-04-04/wellfoodwebsite/node_modules/ofetch/dist/node.mjs';
import 'file://D:/2025-04-04/wellfoodwebsite/node_modules/node-mock-http/dist/index.mjs';
import 'file://D:/2025-04-04/wellfoodwebsite/node_modules/unstorage/dist/index.mjs';
import 'file://D:/2025-04-04/wellfoodwebsite/node_modules/unstorage/drivers/fs.mjs';
import 'file:///D:/2025-04-04/wellfoodwebsite/node_modules/nuxt/dist/core/runtime/nitro/utils/cache-driver.js';
import 'file://D:/2025-04-04/wellfoodwebsite/node_modules/unstorage/drivers/fs-lite.mjs';
import 'file://D:/2025-04-04/wellfoodwebsite/node_modules/nitropack/node_modules/ohash/dist/index.mjs';
import 'file://D:/2025-04-04/wellfoodwebsite/node_modules/klona/dist/index.mjs';
import 'file://D:/2025-04-04/wellfoodwebsite/node_modules/scule/dist/index.mjs';
import 'node:fs';
import 'node:url';
import 'file://D:/2025-04-04/wellfoodwebsite/node_modules/pathe/dist/index.mjs';
import 'file://D:/2025-04-04/wellfoodwebsite/node_modules/devalue/index.js';
import 'file://D:/2025-04-04/wellfoodwebsite/node_modules/unhead/dist/plugins.mjs';
import 'file://D:/2025-04-04/wellfoodwebsite/node_modules/@fortawesome/vue-fontawesome/index.js';
import 'file://D:/2025-04-04/wellfoodwebsite/node_modules/@fortawesome/free-solid-svg-icons/index.mjs';

const jobs = [
  {
    title: "Graphics Software Engineer",
    location: "Remote . United States . United Kingdom",
    salary: "$150k - $200k"
  },
  {
    title: "Full Stack Engineer",
    location: "Remote . United States . United Kingdom",
    salary: "$150k - $200k"
  },
  {
    title: "Product Marketing",
    location: "Remote . United States . United Kingdom",
    salary: "$150k - $200k"
  }
];

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

export { _sfc_main as default };
//# sourceMappingURL=Career.vue.mjs.map
