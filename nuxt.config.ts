// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  alias: {
    assets: "/{rootDir}/assets",
  },
  css: ["~/assets/main.scss"],
  modules: ["@nuxt/content", "@nuxtjs/tailwindcss"],
  content: {

  },
  postcss: {
    plugins: {
      tailwindcss: {
      },
      autoprefixer: {},
    }
  }
})
