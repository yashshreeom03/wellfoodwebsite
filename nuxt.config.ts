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
    'slick-carousel/slick/slick.css',
    'slick-carousel/slick/slick-theme.css'
  ],

  plugins: [
    { src: "~/plugins/toast.js", mode: "client" },
    { src: "~/plugins/recaptcha.js", mode: "client" },
    { src: "~/plugins/email.js" },
    { src: '~/plugins/jquery.js', mode: 'client' },
    { src: "~/plugins/slick.js", mode: "client" },
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

  components: true,
});
