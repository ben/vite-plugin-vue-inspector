import { defineNuxtConfig } from "nuxt/config"
import Inspector from "vite-plugin-vue-inspector"

export default defineNuxtConfig({
  vite: {
    plugins: [
      Inspector({
        enabled: true,
        toggleButtonVisibility: "always",
        appendTo: "entry.mjs",
      }),
    ],
  },
})
