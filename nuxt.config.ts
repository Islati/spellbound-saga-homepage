import vuetify from "vite-plugin-vuetify";

// PWA Config
const title = "Spellbound Saga | MMO Card Game";
const shortTitle = "Collect, Trade, and Conquer";
const description = "SpellBound Saga is a collectible card game built by Islati (Skreet) with love for your enjoyment.";
const image = "https://vuetify3nuxt3starter.behonbaker.com/starter.png";
const url = "https://vuetify3nuxt3starter.behonbaker.com/";

// https://v3.nuxtjs.org/api/configuration/nuxt.config
// @ts-ignore
export default defineNuxtConfig({
    css: ["@/assets/scss/main.scss"],
    ssr: false,
    nitro: {
        timing: true,
        publicAssets: [
            {
                baseUrl: "images",
                dir: "public/imgs",
                maxAge: 60 * 60 * 24 * 7 // 7 day cache
            }
        ],
        compressPublicAssets: {
            gzip: true,
            brotli: true,
        }
    },
    build: {
        transpile: ["vuetify"],
    },
    vite: {
        ssr: {
            noExternal: ["vuetify"],
        },
        define: {
            "process.env.DEBUG": false,
        },
        server: {
            hmr: {
                overlay: true
            }
        },
        css: {
            preprocessorOptions: {
                scss: {
                    additionalData: `@use "@/assets/scss/_vars.scss" as *;`
                }
            }
        }
    },
    modules: [
        "nuxt-icon",
        '@pinia/nuxt',
        '@pinia-plugin-persistedstate/nuxt',
        "@vueuse/nuxt",
        // this adds the vuetify vite plugin
        // also produces type error_handlers in the current beta release
        async (options: any, nuxt: any) => {
            // @ts-ignore
            nuxt.hooks.hook("vite:extendConfig", (config) => config.plugins.push(vuetify()));
        },
    ],
    app: {
        baseURL: '/spellbound-saga-homepage/',
        buildAssetsDir: 'assets',
    },
    runtimeConfig: {}
});
