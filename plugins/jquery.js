// plugins/jquery.js
import { defineNuxtPlugin } from '#app'
import jQuery from 'jquery'

export default defineNuxtPlugin(() => {
  if (process.client) {
    window.$ = window.jQuery = jQuery
  }

  return {
    provide: {
      $: jQuery,
      jQuery: jQuery,
    },
  }
})
