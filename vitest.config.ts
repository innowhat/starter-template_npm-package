import { defineConfig } from "vitest/config";
import path from "path";

export default defineConfig({
  test: {
    globals: true,
    setupFiles: ["./vitest.setup.ts"],
    exclude: ["node_modules", "dist"],
    coverage: {
      reporter: ["text", "json", "html"],
      exclude: [
        "**/tests/**",
        "**/*.spec.tsx",
        "**/*.test.tsx",
        "**/vitest.setup.ts",
      ],
    },
  },
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "src"),
    },
  },
});
