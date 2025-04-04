import { ssrRenderComponent } from 'file://D:/2025-04-04/wellfoodwebsite/node_modules/vue/server-renderer/index.mjs';
import { _ as _sfc_main$2 } from './Services.vue2.mjs';
import { _ as _sfc_main$1 } from './PageBanner.vue.mjs';
import { useSSRContext } from 'file://D:/2025-04-04/wellfoodwebsite/node_modules/vue/index.mjs';
import './nuxt-link.mjs';
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

const _sfc_main = {
  __name: "services",
  __ssrInlineRender: true,
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<!--[-->`);
      _push(ssrRenderComponent(_sfc_main$1, {
        title: "Our Services",
        breadcrumb: "Our Services"
      }, null, _parent));
      _push(`<section class="py-[100px]"><div class="container">`);
      _push(ssrRenderComponent(_sfc_main$2, null, null, _parent));
      _push(`</div></section><!--]-->`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/services.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=services.vue.mjs.map
