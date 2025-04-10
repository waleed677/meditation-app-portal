import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    proxy: {
      "/api": {
        target: "https://mintcream-cod-221842.hostingersite.com",
        changeOrigin: true,
        secure: false,
      },
      "/s3": {
        target: "https://s3.ap-southeast-1.wasabisys.com",
        changeOrigin: true,
        secure: false,
        rewrite: (path) => path.replace(/^\/s3/, ""), // Optional: This rewrites /s3 to the root of the target URL
      },
    },
  },
});
