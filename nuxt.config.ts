export default defineNuxtConfig({
  ssr: true,

  
  app: {
    baseURL: '/shreeom_website/',
    head: {
      link: [
        { rel: "icon", type: "image/x-icon", href: "/shreeom_website/favicon.ico" }
      ]
    }
  },

  nitro: {
    prerender: {
      crawlLinks: true,
      failOnError: false, 
    },
  },

  css: [
    '@/assets/css/main.css',
    'swiper/css/navigation',
    'swiper/css/pagination',
  ],

  plugins: [
    { src: "~/plugins/toast.js", mode: "client" },
    { src: "~/plugins/recaptcha.js", mode: "client" },
    { src: "~/plugins/email.js" }
  ],

  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },

  modules: ['nuxt-swiper'],
  compatibilityDate: "2025-03-03",

  devtools: {
    enabled: true,
  },

 components:true,
 
});