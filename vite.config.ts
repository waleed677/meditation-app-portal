import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    proxy: {
      // "/api": "http://localhost/meditation_app_api",
      // Replace with your API server URL
      "/api": "https://mintcream-cod-221842.hostingersite.com", // Replace with your API server URL
    },
  },
});
