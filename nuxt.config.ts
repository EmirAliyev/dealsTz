// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  css: ["@/assets/sass/style.sass"],
  modules: ["@pinia/nuxt"],
  devServer: {
    port: 8080
  },
  typescript: {
    strict: true
  },
  buildModules: ['@nuxt/typescript-build']
  

});
