/* eslint-disable import/no-default-export */
/* eslint-disable import/no-extraneous-dependencies */
import { resolve } from "path";
import viteStylelint from "@amatlash/vite-plugin-stylelint";
import reactRefresh from "@vitejs/plugin-react-refresh";
import { defineConfig } from "vite";
import eslint from "vite-plugin-eslint";
// https://vitejs.dev/config/

export default defineConfig({
  plugins: [reactRefresh(), viteStylelint()].concat(process.env.NO_LINT ? [] : eslint()),
  resolve: {
    alias: {
      "@": resolve(__dirname, "src"),
    },
  },
});
