import { _ as __nuxt_component_0 } from './nuxt-link.mjs';
import { mergeProps, useSSRContext, ref, unref, defineComponent, computed, withCtx, createTextVNode } from 'file://D:/2025-04-04/wellfoodwebsite/node_modules/vue/index.mjs';
import { ssrRenderAttrs, ssrInterpolate, ssrRenderComponent, ssrRenderList, ssrRenderAttr, ssrRenderStyle } from 'file://D:/2025-04-04/wellfoodwebsite/node_modules/vue/server-renderer/index.mjs';
import { _ as _export_sfc } from './_plugin-vue_export-helper.mjs';
import { FontAwesomeIcon } from 'file://D:/2025-04-04/wellfoodwebsite/node_modules/@fortawesome/vue-fontawesome/index.js';
import { faChevronLeft, faChevronRight } from 'file://D:/2025-04-04/wellfoodwebsite/node_modules/@fortawesome/free-solid-svg-icons/index.mjs';
import { _ as _sfc_main$5 } from './Projects.vue2.mjs';
import { _ as _sfc_main$4 } from './Services.vue2.mjs';
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

const _imports_0 = "" + __buildAssetsURL("about-us-1.DfCSyCzG.png");

const _sfc_main$3 = {
  props: {
    title: String,
    subtitle: String,
    largeMargin: Boolean
    // Control margin with a prop
  },
  computed: {
    shouldApplyMargin() {
      return this.largeMargin;
    }
  }
};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(mergeProps({
    class: $options.shouldApplyMargin ? "mb-[80px]" : "?"
  }, _attrs))}><h6 class="text-base text-primarycolor mb-[30px]">${ssrInterpolate($props.title)}</h6><h2 class="text-black md:text-[45px] md:leading-[50px] text-3xl font-semibold">${ssrInterpolate($props.subtitle)}</h2></div>`);
}
const _sfc_setup$2 = _sfc_main$3.setup;
_sfc_main$3.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/SectionHeader.vue");
  return _sfc_setup$2 ? _sfc_setup$2(props, ctx) : void 0;
};
const SectionHeader = /* @__PURE__ */ _export_sfc(_sfc_main$3, [["ssrRender", _sfc_ssrRender]]);

const _sfc_main$2 = {
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
const _sfc_setup$1 = _sfc_main$2.setup;
_sfc_main$2.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/TestimonialsSlider.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};

const _sfc_main$1 = /* @__PURE__ */ defineComponent({
  __name: "Counter",
  __ssrInlineRender: true,
  props: {
    value: {},
    label: {},
    extraClass: {}
  },
  setup(__props) {
    const props = __props;
    const parsedValue = computed(() => {
      return typeof props.value === "number" ? props.value : Number(props.value);
    });
    ref(null);
    const displayLabel = computed(() => props.label || "Default Label");
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({
        class: `text-center ${_ctx.extraClass}`
      }, _attrs))}><h3${ssrRenderAttr("data-stop", parsedValue.value)} class="text-[55px] font-bold leading-[70px] text-primarycolor"> 0 </h3><p class="font-medium text-black mt-2">${ssrInterpolate(displayLabel.value)}</p></div>`);
    };
  }
});

const workingProcess = [
  {
    id: 1,
    title: "Requirement Gathering",
    bgColor: "linear-gradient(180deg, #FFE9D0 0%, #FFFFFF 100%)",
    image: "/shreeom_website/Images/icons/requirement.png"
  },
  {
    id: 2,
    title: "Planning",
    bgColor: "linear-gradient(180deg, #B9EEFF 0%, #FFFFFF 100%)",
    image: "/shreeom_website/Images/icons/planning.png"
  },
  {
    id: 3,
    title: "UI/UX Design",
    bgColor: "linear-gradient(180deg, #C0CBFF 0%, #FFFFFF 100%)",
    image: "/shreeom_website/Images/icons/ui-ux-design.png"
  },
  {
    id: 4,
    title: "Prototype",
    bgColor: "linear-gradient(180deg, #D9BAFF 0%, #FFFFFF 100%)",
    image: "/shreeom_website/Images/icons/prototype.png"
  },
  {
    id: 5,
    title: "Development",
    bgColor: "linear-gradient(180deg, #F3AEFF 0%, #FFFFFF 100%)",
    image: "/shreeom_website/Images/icons/prototype.png"
  },
  {
    id: 6,
    title: "Quality Assurance",
    bgColor: "linear-gradient(180deg, #FFBDBD 0%, #FFFFFF 100%)",
    image: "/shreeom_website/Images/icons/quality.png"
  },
  {
    id: 7,
    title: "Deployment",
    bgColor: "linear-gradient(180deg, #D3E7FF 0%, #FFFFFF 100%)",
    image: "/shreeom_website/Images/icons/deployment.png"
  },
  {
    id: 8,
    title: "Support & Maintenance",
    bgColor: "  linear-gradient(180deg, #FFF3B7 0%, #FFFFFF 100%)",
    image: "/shreeom_website/Images/icons/support.png"
  }
];

const heroBg = "" + __buildAssetsURL("hero-section.kLSdPXtS.png");

const aboutBg = "" + __buildAssetsURL("about-section.CaCswnWl.png");

const workprocessBg = "" + __buildAssetsURL("work-process-section.j1z2JFnx.png");

const ai = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABYAAAAVCAYAAABCIB6VAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAGMSURBVHgBtVU9SwNBEH13SRNJMKBNioCNsfQiCH4QUewStNQySvwBCpaW/oA0lsK1sRJEwSKgFmplbP0AjyBYCRHUSowzThbu8O643J0P9vbjdt++mZ2d1dDDPJD9AEYSgIFwsK6BM9XR+DMLVL+BOjWziAaLytYVcKhNkUpif0KM+AKKOpFuImYkgTW9G938PyCxg7rfhMwA2VSQkhty/itPA6d0KquL7muT8EFpHNhZl/b+kRSF3LBs7AVf4jKFy8srkE6JMjvxQRO4uQMen93XerqCTZ8gF7Ro8QnFT7rnFoUV2mhvW+q+iBXJ8SVw0ZL2xhICw5O4tgy8fzrHRvOiPAhcfWyPAjZXgUkrFA2NJsIRV2ak5gO6b0ubo6BGrpgzhFgp58MNTFwyZEG94RzngyqOiUWZFPpTzC5gpW5Kdk2gkBffn9/KnIe2OzEnIZOuYBUxgvhMHf8Ezm4dxAxKbG8qH/MViCvLdbqcj+k5sSgxL0Cyf1T8cjGnZh+dpPcuEV45v3mW6vwADOdaqXpWInsAAAAASUVORK5CYII=";

const figma = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABUAAAAgCAYAAAD9oDOIAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAJiSURBVHgBtVU9b9NQFL33OhSH7wqQWiSIET8ALNjrCgnUAdQsiIk6YmKLxNCBoTF/oGViTCIk1I3sCLX9BfXIRD2A1Im67dCUxPfybOIUtUn8qrhnsJ+fj4/vuz7HD+EYDuYtCwbAtJxQna4dn8eVRnBiLh3sP7+zJADVQQ/GuHzvcRMQF2AwGsDspS+g+LD37HZdCdaGCWrABaI1qbpWIqoEXVWBC+PDUjr1RFS9YQHyAqIjb1+XCEQeQJ4QmY17GkKeYA5IfaANyBc+MdEK5AWRD8pWIU22Aj8SqcC4bRBp4nI99vmR+XdUkoi5+ocmZ7py9YRfr9x9uHGBdmfS65/FG1Z8LkaH69fbu7Hx19N7hXTQMresAsJ91ePBbtgG79UqulNfOw5iYQlBrN4dR1kpmHr6MdieKwb9Sj+9kHkx4AuMXB5UFitRiAYN4wXcOZyNhan+UiwluAwZ2LoFJSU4imfhufP/EmXE5ccRy8CP6WyeWrYz/U1KJAhaifp9URwdHkVRkqhc0REjJBTwdciX2qjFI277FJnQUjYKssiPvkMzm4eN5OtXGhgyQln1dmSibu5BSNwt45DkSWKptpdUGx8qn9FnBltEVTNC/NeTCT/qoC0sTTgSD1VEvYN9tFPz9xP1ZtEDg2iHGUMctMGxqmVVBWsO4wddGIFE1NysWQjGmrAyMIyPZPmxIGoEQFvU3Hzv5imYiBqc8x4FveXrQIS1f+IUkV5S2NBLXiJqArd0ktK2axmc/0RDuxZ2gcowfI8KGLoenAJJTzv2O58hstWwn5Re9d6Emj9NlWeGv1do6Rf5MCLhAAAAAElFTkSuQmCC";

const star = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAD4AAAA+CAYAAABzwahEAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAPjSURBVHgB5ZtdUhNBEMf/PRM1Pok3wBt4A3ODcAOxyir1iUV8t3z3I3kR9cVwg3CDvYHewHgC45MRdmfsCYIBsuxXuicWv6oUYTcU29vd8+/tngCx+JTc7+wnPUSig0hYZ3cc4Se/TREBg3j0iPAQkYhiuH2/t8U/NuGxESvc43jcoH/61pN9iQgQtNlPNi3Zb/h3BdP8Zn4PjwZTKKLucQvTO3eAw90cmW0oox/qRJcWNPLUhzK6oX4xzBfIO7zYPX7zHUqoetwQJYXnjv0jKKJqOMEUhjQZ2oEieobvv+ghaHcRypquZrglX1qlObJbUEJncXuXbNguL2qEDVx9NWqaruJx2zVbpUYHONztzKh4XSfUl2j3Sj7bAvlQv0K7i8hv5Xelw13c48bXD10zMwmEETe8iT4bMuIlrKzhZdpdgIcXb0uJGl5Fu4uQ1nTpUO+hIfO21OekXAIbItNs5As2v23w9iaa8vc53QEDCLBaOeO87JhO3zu/XalgqcaEX2nu8wM8G6RYEe0ND949Mrxy0xZ53IcsE76pQ0duzDdhghY0MzzkHpeW9qTK6iEOKbw/yLt8ExoUO/UMlwnldnhM+VrGdVOh3HAuOY0xD8lx92RdjC1mQkTjzGXDslRYbnjI219mm6uuUEH18H9ykgpw6bKbcN5wDmUbGvxhkVp/79ZhlBMO8eTN+PQArWXeyjFBkMY8H5obDlM2+q4nrzrJiIHnoohD/Cc7euNcqM+HeYTwijbFXDVs7JTL3688tHiVPXudnh5fvriF5gFMD3F1ui0pR/Khu+1Gy3S+kpx1yCYOvk+gTawxwbsGNOwgG80ayVkBHX6+5mflbQ/0aU0WwrmxhAOeN48XQ7mMxiXrvBt6bUrWZYTKLvTVDHakU8ETfTUOh1k3G7RtRq70sfQsFcg/WNVNaBrKZYi1l83H5wlLyDu0gKeru8c3s5FEq1mur151bFQAR87EPX17D0LI9dx2B1NP7gAN4VRJIYhos9F4O0ZDKDxfCyI+QjIf977UbUlJh3lAfmjo6BB1IQwhjLjhbpbVbg875xqnSFXkPb47l6K0xl+kbTuoVdCZj3NpKfLZFqgYns84dEM3tIywFaQrH+YBHY9X1XSPsdaeVrVdT1U0XVq7z/0vKGL3934UlbAa2r2I6s5Gz92R4rMN9L4FqoY7bgkVnvO5yDi4CN1t2yf6nC45o6Ldi6jvVw+dz8sHvdqidoq64e43t3svaPp8vqWM/jcUQgnLDf6FIyPtMA9E+RZSmGqc/cLNQ1wngqabD89rbfVcJdG+YhlKWIK5g0hEMzyUsJnLok1o/wDJuIIg8C5z+AAAAABJRU5ErkJggg==";

const vue = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAB4AAAAaCAYAAACgoey0AAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAJmSURBVHgBzVZBaxNBGP2+yW6TUAlpSxG0YIMnPW2FUk+6HipJUWjxIoKQ/AN7trEp/QG2f0AjeLde7M0OHj3lH7h3L7lIK3RnujNhQ2ZmZzObXvog2ew338zbN/veEAx/HG4DsgA0nH/6c4/9i5Uacv799+nXE703aL5e9Ym/r9crL+9CqXFLLwNt7nU88EiEDL7pg/6jJfj/669S44DbQdimA9ofKr2ClGNbeciaD15jXs5S6gyOxZXQ5+8HydCxQbxWh9JKVS/X/Wq8r6vVSQWqr1YgAxHD+EgSy9vzuAcIQ71rbmMpYy6+W998M341WVvsPawBqXnGTM75AW31ojEx3ekNeYwHeqNQ7D2oGQuAV/ooLuvNt21ji8vE8sAQ0daHfnpD0h90a+8o2XKqd5efLsvFVGAoSRENtX6wYFELncl7dUUOhmqrAsTPyfeqUkoMNfd40SQF7NNWl1qJxaDNaGLRaShvLGYP8EtDEDGaLEarbN6GPJDlsjSVDkx2MTVULnGu0e7Pgw2VF3eyyhG7GMVnKrEkT4yWXAZ6vfwky2hT4pMIAVfi0STY1WviPftBXa05xseZWBoNwTiX/bUFxWj2+MTPIAckbxBYvKsbTShMjZYfH9NQzsRiMmfMiJcwmvgUiU8hYokLLowW6WXh4iLxMfrAAeHpYYgIZw6t0Vmz23Doc1AM4xONTusT8QFHOBGPVo07WSfaBAZ58ZmZ2Ga08XPxeAcKwF2xgMVoLvG5FrE8x5lxokUu8bkWsSTf6p5MGi2Jz5eiamciHs0iqeroZ6vbgxkwE3H6z7RIfG4MrgDqht7hgxPlBgAAAABJRU5ErkJggg==";

const ps = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABcAAAAWCAYAAAArdgcFAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAGzSURBVHgBtVW/S8NAFP6SZqlWKC62urSgbkqhWMd2dNDBzR+DndyKg3+A9h8Q3aoudRCcpIPQtVkLATGTP8AKto1LqbTYpXDeyxmsmJYkpB+Eu3uX+95733u5SLAQScTAlANIUhiewd6AfhHGfY1WkmmbWeGk7BS+Qc7CqF5JZsRQXuEnJLTR68dlTpyF32AII6hkOTmLYRzgDpShm9PR33mrCS+wJ985AlbX/9peNOA678qRPHKXiJ41Mc4ngdw5EJyCUygjd8sXQPVOzHMF4WBuUWSR2QJSG8JZqwHcngD1JziPfBC9jhiJLMUl2zwUdfnqCIf0uIp8IiQOLaeBpYyw1R+BtX0xp6woYsupK3KKbhDlS6G/roqCp7eF00H5HJPrFeCd69jrCj1Ja8tOnUPyLPA67PLuCvIs1RsX5A+qbUSmVPrPHjkgciq2K/JhIDlIFpKIIjazUf+9Zk9upT/sgyEiIqUiUhfp9hnyWzFZ5MMe/EfeeZ97gGzevWMjZ1IJ40ElgG6jhlA0znVPwC8wdoYPrRAwF91mCZOzn3wWoRLDCxhr87MG/8HnYWjHZPoGmZqFEZGnVXsAAAAASUVORK5CYII=";

const node = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACcAAAAYCAYAAAB5j+RNAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAOVSURBVHgB1VZPTxNREJ/3tpQeVOonYI2evNgCd5ejByN8AHUXYyLEhHL1UnryCNyIMewSL8ZL6wdQlhjjhT/Fi0eXKxpYVKCWfe85s90my0JDaYHE3+Z139uZN/PbmXmzBbgE5HI5HToAh0sA59wcHBz8jmPkTPvg8qDjKOfz+f52N1wmuTPj/yOHBZyFUzBiG6fqtGurlQ5LKBmaptk41ZVS01LKuWq16sd1CmUj+yuVnqwfqMIfX7ogxFRl3PVOcEi2itCoNZIb9Bxt6uvr65tNUnhYJhljBRxeEASj6M87Qo6OekTKSPjwkGRpbW3NocXzpXsjh4dqJvir9IN9CbU9idwUpHuYoylRemu5XuSwSA7hBDTJDQwMmKgzg4+SUXOEECUimQoZMjYdJ4aEfHxGm3S823jClvoe9TJ/OyhfuZYChRcL96FuABBwMLcb8bXwJcstbB2JKtltoWOijdBWsuZ8ZJ3HSF3H+WJCBls/9zFSMiRFP2gQhFRwsCdAYQSTtlA+jJHK49yF1nByD2/P9fVfnYqRXab7MXIYzmqk4B2RZGpwiNfOVoCyUCMcNK/XJNCVtLWysuJSeprOTgLJerPpx7fu3/ToJTA4N5pllIJ2kcGxx2FnV8CVPi3kRskNi1bhr3YscjrWVREjt4ERfNzKLMqKX998m/v88UsFl5W4LBm5amzuJWQ+HPR4lFb/R9BIa8N8Q1qHjZCnUhsxx9NRDeqRzMexS35imdFru/UZ/LTZyW8wj4yQ4ujq6upoU0ChpRDjdJEMulbVV3sa1g8v/d6WEBxGaeTK5ZINuy8+zUb7CqhvJcsCfZQwijeoNdHA+TA9i6nQQbDjPY9BBzBeGvq167yQ6WXuO+tDpWCb2TrwSUxzTgVibv6p45Le0NDQNJK8gy85Fe9fcURtjNqOi8E5ktaOyMUxYT9BUmAoEFPzluON22MFJbF3cenQmojPWo7fie2uyE3YY0UJfHneeu3SmojUakgsQ4a1mQBEiQE3XlkLs9AB2j+tJ4LpSKz0zB4zGUarDuwOpNUmdhVPcfVeg1Q2A4EDHaJLcjFwTl0vyzh1euYrkGEqO01paBLOD/1C4MmuCez06i6cA7oiR83kmW3qjZVa5prKQpqbVGsceNv/eC+EHCAJkNzEdvygF4Q7by04gstKD2iT+DnbbB6UTtF1K2li3H5SVkpuAtN8PASz3dTahYBaCZwj/gE/N8uPNVjDeQAAAABJRU5ErkJggg==";

const php = "data:image/png;base64,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";

const react = "data:image/png;base64,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";

const _sfc_main = {
  __name: "index",
  __ssrInlineRender: true,
  props: {
    itemsText: {
      type: Array,
      default: () => new Array(40).fill("Get In Touch")
    }
  },
  setup(__props) {
    computed(() => "hidden");
    return (_ctx, _push, _parent, _attrs) => {
      const _component_NuxtLink = __nuxt_component_0;
      _push(`<!--[--><section class="pt-[187px] pb-11 relative" style="${ssrRenderStyle({ backgroundImage: `url(${unref(heroBg)})` })}"><div class="container"><div class="max-w-[834px] text-center mx-auto relative z-10"><h6 class="text-base text-primarycolor mb-[38px]">Welcome to Shreeom</h6><h1 class="text-[85px] leading-[102px] font-semibold max-lg:text-5xl max-sm:text-4xl"> Turn your ideas into great products </h1><p class="mt-[30px] mb-[50px] max-w-[527px] mx-auto text-lg"> Building an expert software development team for your project, we put your needs first. Let&#39;s join us now! </p><div class="flex justify-center gap-6 flex-wrap">`);
      _push(ssrRenderComponent(_component_NuxtLink, {
        to: "/",
        class: "theme-btn px-[60px] py-[14px]"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(` Let&#39;s Talk `);
          } else {
            return [
              createTextVNode(" Let's Talk ")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(ssrRenderComponent(_component_NuxtLink, {
        to: "/",
        class: "theme-btn-border px-[60px]"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(` About Us `);
          } else {
            return [
              createTextVNode(" About Us ")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div></div><div class="grid counter-wrapper lg:grid-cols-4 grid-cols-2 gap-6 mt-[100px] text-center">`);
      _push(ssrRenderComponent(_sfc_main$1, {
        value: "100",
        label: "Projects Delivered"
      }, null, _parent));
      _push(ssrRenderComponent(_sfc_main$1, {
        value: "2",
        label: "Years of Experience"
      }, null, _parent));
      _push(ssrRenderComponent(_sfc_main$1, {
        value: "98",
        label: "Clients Satisfaction"
      }, null, _parent));
      _push(ssrRenderComponent(_sfc_main$1, {
        value: "10",
        label: "Team Members"
      }, null, _parent));
      _push(`</div></div><div class="w-[50%] h-[234px] hero-bg absolute top-[30%] left-1/3 z-0"></div><div class="absolute rotate-[330deg] bg-white w-[37px] h-[35px] backdrop-blur-[41.2449836730957px] xl:top-[23.5%] xl:left-[22.5%] top-[22%] left-[14%] max-md:hidden rounded-[10px] flex items-center justify-center shadow-[2px_5px_20px_0px_#0000000F]"><img${ssrRenderAttr("src", unref(ai))} alt="ai"></div><div class="absolute rotate-12 bg-white w-[50px] h-[50px] backdrop-blur-[41.2449836730957px] xl:top-[42%] xl:left-[17%] top-[45%] left-[15%] max-md:hidden rounded-[10px] flex items-center justify-center shadow-[2px_5px_20px_0px_#0000000F]"><img${ssrRenderAttr("src", unref(vue))} alt="vue"></div><div class="absolute rotate-[350deg] bg-white w-[58px] h-[58px] backdrop-blur-[41.2449836730957px] xl:top-[54%] xl:left-[24%] top-[61%] left-[20%] max-md:hidden rounded-[10px] flex items-center justify-center shadow-[2px_5px_20px_0px_#0000000F]"><img${ssrRenderAttr("src", unref(figma))} alt="figma"></div><div class="absolute rotate-[40deg] bg-white w-[38px] h-[38px] backdrop-blur-[41.2449836730957px] top-[20%] right-[25%] max-md:hidden rounded-[10px] flex items-center justify-center shadow-[2px_5px_20px_0px_#0000000F]"><img${ssrRenderAttr("src", unref(ps))} alt="ps"></div><div class="absolute rotate-[320deg] bg-white w-[51px] h-[51px] backdrop-blur-[41.2449836730957px] xl:top-[38%] xl:right-[20%] lg:top-[38%] top-[34%] right-[13%] max-md:hidden rounded-[10px] flex items-center justify-center shadow-[2px_5px_20px_0px_#0000000F]"><img${ssrRenderAttr("src", unref(php))} alt="php"></div><div class="absolute rotate-[25deg] bg-white w-[53px] h-[53px] backdrop-blur-[41.2449836730957px] top-[46%] xl:right-[14%] right-[10%] max-md:hidden rounded-[6px] flex items-center justify-center shadow-[2px_5px_20px_0px_#0000000F]"><img${ssrRenderAttr("src", unref(node))} alt="node"></div><div class="absolute rotate-[25deg] bg-white w-[67px] h-[67px] backdrop-blur-[41.2449836730957px] xl:top-[57%] xl:right-[22%] top-[57%] right-[14%] max-md:hidden rounded-[10px] flex items-center justify-center shadow-[2px_5px_20px_0px_#0000000F]"><img${ssrRenderAttr("src", unref(react))} alt="react"></div></section><section class="pt-[50px] pb-[100px]"><div class="container"><div>`);
      _push(ssrRenderComponent(SectionHeader, {
        class: "text-center",
        largeMargin: "true",
        title: "Our Services",
        subtitle: "Our Core Services we deliver"
      }, null, _parent));
      _push(ssrRenderComponent(_sfc_main$4, null, null, _parent));
      _push(`</div></div></section><section class="pb-[100px] relative"><div class="container"><div class="flex flex-col gap-6 lg:flex-row items-center justify-between"><div class="w-full lg:w-1/2">`);
      _push(ssrRenderComponent(SectionHeader, {
        class: "mb-[25px]",
        title: "About us",
        subtitle: "The Shreeomsoft Difference"
      }, null, _parent));
      _push(`<p class="mb-[30px] text-lg sm:leading-9">The shreeomsoft is a website and mobile development companies and we are helping startup businesses turn their idea into a digital product into reality. With a team of over 10+ professionals and 2+ years of outstanding service such as branding design, web design &amp; development, app development, maintenance, we are providing dedicated support.</p>`);
      _push(ssrRenderComponent(_component_NuxtLink, {
        to: "/",
        class: "inline-block theme-btn px-[60px] py-[14px]"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`Learn more`);
          } else {
            return [
              createTextVNode("Learn more")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div><div class="w-full lg:w-1/2"><img${ssrRenderAttr("src", _imports_0)} class="mx-auto" alt=""></div></div></div><div class="absolute bottom-0 left-[45%] z-[-1]"><img${ssrRenderAttr("src", unref(aboutBg))} alt=""></div></section><section class="pb-[100px]"><div class="container"><div>`);
      _push(ssrRenderComponent(SectionHeader, {
        class: "text-center",
        largeMargin: "true",
        title: "Projects",
        subtitle: "Our Core Services we deliver"
      }, null, _parent));
      _push(ssrRenderComponent(_sfc_main$5, { showCategories: false }, null, _parent));
      _push(`</div></div></section><section class="pb-[100px] bg-auto bg-bottom bg-no-repeat" style="${ssrRenderStyle({ backgroundImage: `url(${unref(workprocessBg)})` })}"><div class="container"><div>`);
      _push(ssrRenderComponent(SectionHeader, {
        class: "text-center",
        largeMargin: true,
        title: "Our working process",
        subtitle: "How to start ?"
      }, null, _parent));
      _push(`<div class="grid grid-cols-2 working-wrapper md:grid-cols-4 gap-x-6"><!--[-->`);
      ssrRenderList(unref(workingProcess), (step, index) => {
        _push(`<div class="md:mb-[100px] mb-12"><div class="w-[150px] h-[150px] rounded-full mx-auto flex items-center justify-center mb-3" style="${ssrRenderStyle({ background: step.bgColor })}"><img${ssrRenderAttr("src", step.image)}${ssrRenderAttr("alt", step.title)}></div><div class="text-center"><p class="text-xl font-semibold">${ssrInterpolate(step.id)}. ${ssrInterpolate(step.title)}</p></div></div>`);
      });
      _push(`<!--]--></div></div></div></section>`);
      _push(ssrRenderComponent(_sfc_main$2, null, null, _parent));
      _push(`<section class="overflow-hidden whitespace-nowrap py-[50px]"><div class="flex gap-16 md:gap-[170px] animate-marquee"><!--[-->`);
      ssrRenderList(__props.itemsText, (item, index) => {
        _push(`<div class="flex items-center gap-4 md:gap-[25px] text-primarycolor"><img${ssrRenderAttr("src", unref(star))} class="max-md:w-[15%]" alt="Star"><h4 class="text-4xl md:text-[50px] font-semibold">${ssrInterpolate(item)}</h4></div>`);
      });
      _push(`<!--]--></div></section><!--]-->`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/index.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=index.vue.mjs.map
