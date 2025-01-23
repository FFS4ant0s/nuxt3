// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2024-11-01',
  devtools: { enabled: true },
  alias: {
    css : "/<rootDir>/assets/css",
  },
  app: {
    baseURL: process.env.BASE_URL || "http//localhost:3000",
  },
  css: ["@/assets/css/main.css"],
});
