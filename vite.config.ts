import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'
import path from "path";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react({ tsDecorators: true })],
  resolve: {
    alias: { "@": path.resolve(__dirname, "./src/") },
  },
  optimizeDeps: {
    include: ["@emotion/styled"],
  },
  server: {
    proxy: {
      "/api": {
        target: "https://api.ilert.com",
        changeOrigin: true,
        secure: false,
      },
    },
  },
});
