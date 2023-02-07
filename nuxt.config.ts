// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  app: {
    head: {
      htmlAttrs: {
        'data-theme': 'forest',
      },
    },
  },
  modules: ['@nuxtjs/tailwindcss', 'nuxt-icon'],
  typescript: {
    shim: false,
  },
});
