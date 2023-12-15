import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import sass from "sass";
import path from "path";

export default defineConfig({
  base: '/',
  plugins: [react()],
  css: {
    preprocessorOptions: {
      scss: {
        implementation: sass,
      },
    },
    modules: {
      localsConvention: "camelCase",
    },
  },
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
  assetsInclude: ["**/*.svg", "**/*.png", "**/*.jpg", "**/*.gif"],
});