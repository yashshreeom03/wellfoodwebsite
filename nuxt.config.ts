export default defineNuxtConfig({
  compatibilityDate: "2024-11-01",
  devtools: { enabled: true },

  css: [
    "./assest/css/main.css",
    "./assest/css/Style.css",
    "./assest/css/Responsive.css",
  ],

  modules: ["@nuxtjs/tailwindcss"], // Install Tailwind via Nuxt module

  vite: {
    plugins: [], // Remove tailwindcss() from here
  },

  // Remove router.base unless you're using a subdirectory
  // router: {
  //   base: "/your-subdirectory/",
  // },
});
