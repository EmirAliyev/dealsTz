// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  css: ["@/assets/sass/style.sass"],
  modules: ["@pinia/nuxt"],
  typescript: {
    strict: true
  },
  buildModules: ['@nuxt/typescript-build']
  

});
