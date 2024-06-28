import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  base: "/Blog-App/",
  plugins: [react()],
  build: {
    outDir: "dist",
  },
});
