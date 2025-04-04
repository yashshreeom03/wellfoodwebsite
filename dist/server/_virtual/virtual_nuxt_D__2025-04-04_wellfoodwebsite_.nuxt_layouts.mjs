import { defineAsyncComponent } from "vue";
const layouts = {
  default: defineAsyncComponent(() => import("../layouts/default.vue.mjs").then((m) => m.default || m))
};
export {
  layouts as default
};
//# sourceMappingURL=virtual_nuxt_D__2025-04-04_wellfoodwebsite_.nuxt_layouts.mjs.map
