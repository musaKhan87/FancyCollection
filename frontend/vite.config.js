import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { VitePWA } from "vite-plugin-pwa";
// https://vite.dev/config/
export default defineConfig({
  plugins: [
    react(),
    VitePWA({
      registerType: "autoUpdate",
      includeAssets: ["logo.jpeg", "logo.jpeg"],
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
