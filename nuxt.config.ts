// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  site: {
    url: "https://voleb-kalk-production.up.railway.app/",
  },
  devtools: { enabled: true },
  modules: [
    "@pinia/nuxt",
    "@nuxt/content",
    "@nuxt/test-utils/module",
    "nuxt-og-image",
  ],
  css: ["@/assets/css/main.css"],
  app: {
    head: {
      charset: "utf-8",
      viewport: "width=device-width, initial-scale=1",
      htmlAttrs: {
        lang: "cs",
      },
      link: [{ rel: "icon", type: "image/x-icon", href: "/favicon.ico" }],
      meta: [
        {
          hid: "description",
          name: "description",
          content:
            "Volební kalkulačka zaměřená na období První republiky 1918 - 1938.",
        },
        {
          hid: "og:title",
          property: "og:title",
          content: "Volební kalkulačka 1918 - 1938",
        },
        {
          hid: "og:url",
          property: "og:url",
          content: "https://voleb-kalk-production.up.railway.app/",
        },
        {
          hid: "og:description",
          property: "og:description",
          content:
            "Volební kalkulačka zaměřená na období První republiky 1918 - 1938.",
        },
        {
          hid: "twitter:title",
          name: "twitter:title",
          content: "Volební kalkulačka 1918 - 1938",
        },
        {
          hid: "twitter:url",
          name: "twitter:url",
          content: "https://voleb-kalk-production.up.railway.app/",
        },
        {
          hid: "twitter:description",
          name: "twitter:description",
          content:
            "Volební kalkulačka zaměřená na období První republiky 1918 - 1938.",
        },
      ],
    },
  },
  nitro: {
    compressPublicAssets: true,
  },
});
