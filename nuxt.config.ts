// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2024-11-01',
  devtools: { enabled: true },
  components: [{path: "~/shared/icons", prefix:"Icon"}, '~/components'],
  alias: {
    css : "/<rootDir>/assets/css",
  },
  app: {
    baseURL: process.env.BASE_URL,
  },
  css: ["@/assets/css/main.css"],
  modules: ["@pinia/nuxt"],
  pinia: {
    storesDirs: ["./stores/**"],
  },
});
