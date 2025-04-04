import { ssrRenderAttrs } from 'file://D:/2025-04-04/wellfoodwebsite/node_modules/vue/server-renderer/index.mjs';
import { useSSRContext } from 'file://D:/2025-04-04/wellfoodwebsite/node_modules/vue/index.mjs';
import { _ as _export_sfc } from './_plugin-vue_export-helper.mjs';

const _sfc_main = {};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs) {
  _push(`<p${ssrRenderAttrs(_attrs)}>welcome to Company</p>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/Company.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const Company = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);

export { Company as default };
//# sourceMappingURL=Company.vue.mjs.map
