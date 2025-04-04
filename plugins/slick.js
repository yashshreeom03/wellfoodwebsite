// plugins/slick.js
import { defineNuxtPlugin } from '#app'

export default defineNuxtPlugin(async () => {
  if (process.client) {
    await import('slick-carousel')
  }
})
