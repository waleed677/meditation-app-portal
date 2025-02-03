import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react()],
  server: {
    cors: {
      origin: "https://mintcream-cod-221842.hostingersite.com", // Your CORS origin for the frontend
    },
    proxy: {
      "/api": {
        target: "https://mintcream-cod-221842.hostingersite.com",
        changeOrigin: true,
        secure: false, // Useful for local dev with self-signed certificates
      },
    },
  },
});
