export default {
  // Disable server-side rendering: https://go.nuxtjs.dev/ssr-mode
  ssr: false,

  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    titleTemplate: "%s - cms-dashboard-test",
    title: "cms-dashboard-test",
    htmlAttrs: {
      lang: "en",
    },
    meta: [
      { charset: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { hid: "description", name: "description", content: "" },
      { name: "format-detection", content: "telephone=no" },
    ],
    link: [{ rel: "icon", type: "image/x-icon", href: "/favicon.ico" }],
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: {
    dirs: ["~/components", "~/components/UI", "~/components/UI/icons"],
  },

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    // https://go.nuxtjs.dev/vuetify
    [
      "@nuxtjs/vuetify",
      {
        defaultAssets: false,
        customVariables: ["~/assets/variables.scss"],
        treeShake: true,
        rtl: true,
        theme: {
          options: { customProperties: true },
          themes: {
            light: {
              primary: "#2D6CE9",
              secondary: "#24D9C1",
              background: "#FFFFFF",
              background_app: "#FAFAFA",
              info: "#22B0FC",
              warning: "#FEC132",
              error: "#FC4529",
              success: "#38C976",
              on: "#1B2024",
            },
          },
        },
        icons: {
          values: {
            adDashboard: {
              component: "adDashboard",
            },
            adArticle: {
              component: "adArticle",
            },
            adPages: {
              component: "adPages",
            },
            adUsers: {
              component: "adUsers",
            },
            adTheme: {
              component: "adTheme",
            },
            adFileManager: {
              component: "adFileManager",
            },
            adSupport: {
              component: "adSupport",
            },
            adEmail: {
              component: "adEmail",
            },
            adForms: {
              component: "adForms",
            },
            adSettings: {
              component: "adSettings",
            },
            adSiteHealth: {
              component: "adSiteHealth",
            },
          },
        },
      },
    ],
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    // https://go.nuxtjs.dev/axios
    [
      "@nuxtjs/axios",
      {
        // Workaround to avoid enforcing hard-coded localhost:3000: https://github.com/nuxt-community/axios-module/issues/308
        baseURL: "/",
      },
    ],
  ],

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {},
};
