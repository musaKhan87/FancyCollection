import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { VitePWA } from "vite-plugin-pwa";
// https://vite.dev/config/
export default defineConfig({
  plugins: [
    react(),
    VitePWA({
      registerType: "autoUpdate",
      includeAssets: ["logo2.png", "logo2.png"],
      manifest: {
        name: "Fancy Collection",
        short_name: "FC",
        start_url: "/",
        display: "standalone",
        background_color: "#ffffff",
        theme_color: "#ff6a00",
      },
    }),
  ],
});
