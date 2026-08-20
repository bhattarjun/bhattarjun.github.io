import { defineConfig } from "@lovable.dev/vite-tanstack-config";

export default defineConfig({
  vite: {
    base: "/your-actual-repo-name/",
  },
  tanstackStart: {
    server: { entry: "server" },
  },
});