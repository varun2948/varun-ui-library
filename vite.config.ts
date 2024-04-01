import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
  build: {
    lib: {
      entry: "./src/main.tsx",
      name: "varun-ui-library",
      fileName: (format) => `index.${format}.js`,
    },
    rollupOptions: {
      // Make sure to externalize dependencies in your library build
      // Externalize dependencies that shouldn't be bundled into your library
      external: [],
      output: {
        // Provide global variables to use in the UMD build
        globals: {},
      },
    },
  },
  plugins: [react()],
});
