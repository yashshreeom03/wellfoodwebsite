import __nuxt_component_0 from "../node_modules/nuxt/dist/app/components/nuxt-link.mjs";
import { withCtx, createTextVNode, useSSRContext } from "vue";
import { ssrRenderComponent } from "vue/server-renderer";
import _sfc_main$1 from "../components/PageBanner.vue.mjs";
const _sfc_main = {
  __name: "CareerDetail",
  __ssrInlineRender: true,
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      const _component_NuxtLink = __nuxt_component_0;
      _push(`<!--[-->`);
      _push(ssrRenderComponent(_sfc_main$1, {
        title: "Product Marketing Director",
        breadcrumb: "Career Detail"
      }, null, _parent));
      _push(`<section><div class="container"><div class="flex justify-center mb-20">`);
      _push(ssrRenderComponent(_component_NuxtLink, {
        to: "/",
        class: "theme-btn-border px-[60px]"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(` Apply `);
          } else {
            return [
              createTextVNode(" Apply ")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div><p class="text-lg leading-7 sm:leading-9 mb-8 sm:mb-12">Play is adding to our team of talented, passionate people who want to lead the charge in revolutionizing how teams create digital products. We are building a transformative platform that empowers teams to design, build, test, and share mobile products—directly from their mobile device. If you&#39;re looking to work at a company leading the future of product design tools, we&#39;d love to chat with you!</p><h3 class="text-2xl mb-8 sm:mb-12 font-medium">Where this position is located</h3><p class="text-lg leading-7 sm:leading-9 mb-8 sm:mb-12">Play is based in NYC, but all positions are flexible/remote. EST time zone preferred but not mandatory.</p><h3 class="text-2xl mb-8 sm:mb-12 font-medium">About the Role</h3><p class="text-lg leading-7 sm:leading-9">We are looking for an experienced and dynamic Director of Product Marketing, reporting to the Co-Founder &amp; Co-CEO. Joining us as our first product marketing hire, you will play a pivotal role in shaping the product marketing function and team, and influence the product roadmap through your engagement with our users.</p><p class="text-lg leading-9">You will join us at a crucial time as we prepare to launch our macOS product and updated iOS product. Your role will be instrumental in increasing product awareness and engagement through engaging content distributed on social media. You will play an impactful role in business strategy, go-to-market growth, improving user activation, and retention.</p></div></section><!--]-->`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/CareerDetail.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
export {
  _sfc_main as default
};
//# sourceMappingURL=CareerDetail.vue.mjs.map
