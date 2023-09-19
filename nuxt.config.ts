import vuetify from "vite-plugin-vuetify";

// https://v3.nuxtjs.org/api/configuration/nuxt.config
// @ts-ignore
export default defineNuxtConfig({
    app: {
        buildAssetsDir: "assets",
        // baseURL: '/'
    },
    css: ["@/assets/scss/main.scss"],
    ssr: false,
    imports: {
        autoImport: true,
    },
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
        // "nuxt-purgecss",
        '@nuxt/devtools',
        '@vite-pwa/nuxt',
        // this adds the vuetify vite plugin
        // also produces type error_handlers in the current beta release
        async (options: any, nuxt: any) => {
            // @ts-ignore
            nuxt.hooks.hook("vite:extendConfig", (config) => config.plugins.push(vuetify()));
        },
    ],
    pwa: {
        registerType: 'autoUpdate',
        manifest: {
            name: "Spellbound Saga",
            short_name: "Spellbound Saga",
        },
        workbox: {
            navigateFallback: '/',
            globPatterns: ['**/*.{js,css,html,png,svg,ico}'],
        },
        devOptions: {
            enabled: true,
            suppressWarnings: true,
            navigateFallbackAllowlist: [/^\/$/],
            type: 'module',
        }
    },

    runtimeConfig: {}
});
