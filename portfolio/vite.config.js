import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// "base" debe coincidir con el nombre del repositorio en GitHub Pages.
// Ejemplo: si el repo se llama "portfolio", la URL final será
// https://PaulJonaDev.github.io/portfolio/
export default defineConfig({
  plugins: [react()],
  base: "/portfolio/",
});
