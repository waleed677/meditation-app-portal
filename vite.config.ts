import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
  server: {
    proxy: {
      "/api": {
        target: "https://meditation.baramdatsol.com",
        secure: false,
      },
    },
  },
  plugins: [react()],
});
