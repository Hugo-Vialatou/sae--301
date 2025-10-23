import { defineConfig } from "vite";
import tailwindcss from "@tailwindcss/vite";
import { resolve } from "path";

export default defineConfig({
  plugins: [tailwindcss()],
  base: "/sae--301/",  // ⚠️ Remplacer par le nom de votre dépôt GitHub
  build: {
    rollupOptions: {
      input: {
        page1: resolve(__dirname, "index.html"),
        page2: resolve(__dirname, "pages/index-2.html"),
        page3: resolve(__dirname, "pages/index-3.html"),
        page4: resolve(__dirname, "pages/index-4.html"),
        page5: resolve(__dirname, "pages/index-5.html"),
        page6: resolve(__dirname, "pages/index-6.html"),
        page4F: resolve(__dirname, "pages/index-4-Femme.html"),
        page5F: resolve(__dirname, "pages/index-5-Femme.html"),
        page6F: resolve(__dirname, "pages/index-6-Femme.html"),
        product1: resolve(__dirname, "pages/index-produit.html"),
        product2: resolve(__dirname, "pages/index-produit-2.html"),
        product3: resolve(__dirname, "pages/index-produit-3.html"),
      },
    },
  },
});