import { defineNuxtPlugin } from "../node_modules/nuxt/dist/app/nuxt.mjs";
import "vue";
import "D:/2025-04-04/wellfoodwebsite/node_modules/destr/dist/index.mjs";
import "D:/2025-04-04/wellfoodwebsite/node_modules/klona/dist/index.mjs";
import "D:/2025-04-04/wellfoodwebsite/node_modules/defu/dist/defu.mjs";
import "#internal/nuxt/paths";
import emailjs from "emailjs-com";
const email_0dWB39CP7aIGQM1eT8UcaMet7NEdPagKoZWZ4QsFhyU = defineNuxtPlugin((nuxtApp) => {
  nuxtApp.provide("emailjs", emailjs);
});
export {
  email_0dWB39CP7aIGQM1eT8UcaMet7NEdPagKoZWZ4QsFhyU as default
};
//# sourceMappingURL=email.mjs.map
