import path from "path";
import react from "@vitejs/plugin-react-swc";
import { defineConfig } from "vite";

export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
  server: {
    port: 3000, // Customize port if needed
  },
  build: {
    outDir: 'dist', // Customize output directory if needed
    // Add other build options here
  },
});
