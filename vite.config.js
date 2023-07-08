import { defineConfig } from "vite";
import vituum from "vituum";
import nunjucks from "@vituum/vite-plugin-nunjucks";
// import sass from 'sass'

export default defineConfig({
  plugins: [
    vituum(),
    // sass(),
    nunjucks({
      root: "./src",
    }),
    // sass()
  ],
  server: {
    port: 3000,
  },
});
