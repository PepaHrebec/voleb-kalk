import { defineVitestConfig } from "@nuxt/test-utils/config";
import tsconfigPaths from "vite-tsconfig-paths";
import path from "path";

export default defineVitestConfig({
  plugins: [tsconfigPaths()],
  test: {
    environment: "nuxt",
    globals: true,
  },
  resolve: {
    alias: {
      "~": path.resolve(__dirname, "./"),
    },
  },
});
