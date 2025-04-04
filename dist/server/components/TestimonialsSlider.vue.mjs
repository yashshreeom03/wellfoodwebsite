import SectionHeader from "./SectionHeader.vue.mjs";
import { ref, mergeProps, unref, useSSRContext } from "vue";
import { ssrRenderAttrs, ssrRenderComponent, ssrRenderList, ssrRenderAttr, ssrRenderStyle, ssrInterpolate } from "vue/server-renderer";
import "jquery";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
import { faChevronLeft, faChevronRight } from "@fortawesome/free-solid-svg-icons";
const _sfc_main = {
  __name: "TestimonialsSlider",
  __ssrInlineRender: true,
  setup(__props) {
    ref(0);
    const images = [
      "/Images/testmonial/reviews-1.png",
      "/Images/testmonial/reviews-2.png",
      "/Images/testmonial/reviews-3.png",
      "/Images/testmonial/reviews-4.png",
      "/Images/testmonial/reviews-5.png",
      "/Images/testmonial/reviews-3.png"
    ];
    const testimonials = [
      {
        name: "Jessica",
        position: "CEO of InnovateTech",
        rating: 5,
        text: "ShreeOm has been a game-changer for our business! Their IT solutions are innovative, reliable, and perfectly tailored to our needs. The team is professional and always ready to help. Highly recommend!",
        image: "Images/logos/testmonial-logo-1.png"
      },
      {
        name: "Peter",
        position: "Stockholm, Sweden",
        rating: 4,
        text: "ShreeOm has been a game-changer for our business! Their IT solutions are innovative, reliable, and perfectly tailored to our needs",
        image: "/Images/logos/testmonial-logo-1.png"
      },
      {
        name: "Jessica",
        position: "Honolulu, HI",
        rating: 5,
        text: "Their IT solutions are innovative, reliable, and perfectly tailored to our needs. The team is professional and always ready to help.",
        image: "/Images/logos/testmonial-logo-1.png"
      },
      {
        name: "Peter",
        position: "Stockholm, Sweden",
        rating: 4,
        text: "Their IT solutions are innovative, reliable, and perfectly tailored to our needs. The team is professional and always ready to help. ShreeOm has been a game-changer for our business!",
        image: "/Images/logos/testmonial-logo-1.png"
      },
      {
        name: "Jessica",
        position: "Honolulu, HI",
        rating: 5,
        text: "ShreeOm has been a game-changer for our business...",
        image: "/Images/logos/testmonial-logo-1.png"
      },
      {
        name: "Peter",
        position: "Stockholm, Sweden",
        rating: 4,
        text: "Their IT solutions are innovative and reliable...",
        image: "/Images/logos/testmonial-logo-1.png"
      }
    ];
    return (_ctx, _push, _parent, _attrs) => {
      const _component_SectionHeader = SectionHeader;
      _push(`<section${ssrRenderAttrs(mergeProps({
        id: "testimonials-section",
        class: "py-24 bg-white"
      }, _attrs))}><div class="container">`);
      _push(ssrRenderComponent(_component_SectionHeader, {
        class: "text-center",
        largeMargin: "true",
        title: "Testimonials",
        subtitle: "Success stories of our clients"
      }, null, _parent));
      _push(`<div class="relative text-center"><div class="slider-nav slider-img flex max-w-[650px] mx-auto justify-center gap-4 mb-20"><!--[-->`);
      ssrRenderList(images, (img, index) => {
        _push(`<div><img${ssrRenderAttr("src", img)} alt="" class="w-[90px] h-[90px] mx-auto rounded-full object-cover transition duration-300 ease-in-out cursor-pointer"></div>`);
      });
      _push(`<!--]--></div><button class="custom-prev absolute max-sm:hidden lg:left-[-20px] left-0 top-[60%] leading-[8px] w-11 h-11 rounded-full bg-white text-black text-2xl opacity-50 hover:opacity-100 transition duration-300" style="${ssrRenderStyle({ "box-shadow": "0px 0px 27px 1px #00000014" })}">`);
      _push(ssrRenderComponent(unref(FontAwesomeIcon), {
        icon: unref(faChevronLeft),
        class: "text-sm font-semibold"
      }, null, _parent));
      _push(`</button><button class="custom-next absolute max-sm:hidden lg:right-[-20px] right-0 top-[60%] leading-[8px] w-11 h-11 rounded-full bg-white text-black text-2xl opacity-50 hover:opacity-100 transition duration-300" style="${ssrRenderStyle({ "box-shadow": "0px 0px 27px 1px #00000014" })}">`);
      _push(ssrRenderComponent(unref(FontAwesomeIcon), {
        icon: unref(faChevronRight),
        class: "text-sm"
      }, null, _parent));
      _push(`</button><div class="slider-for lg:p-[100px] lg:max-w-[1096px] sm:max-w-[80%] mx-auto p-4 sm:p-[30px] rounded-[40px] bg-[#F0F8EC]"><!--[-->`);
      ssrRenderList(testimonials, (testimonial, index) => {
        _push(`<div><img${ssrRenderAttr("src", testimonial.image)} alt="Company Logo" class="mx-auto mb-4 w-[150px]"><p class="sm:text-[22px] text-base font-medium text-[#3A701F] my-[50px] sm:leading-relaxed">${ssrInterpolate(testimonial.text)}</p><h6 class="text-lg text-[#3A701F] font-semibold mb-3">${ssrInterpolate(testimonial.name)}</h6><p class="text-sm text-[#3A701F]">${ssrInterpolate(testimonial.position)}</p></div>`);
      });
      _push(`<!--]--></div></div></div></section>`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/TestimonialsSlider.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
export {
  _sfc_main as default
};
//# sourceMappingURL=TestimonialsSlider.vue.mjs.map
