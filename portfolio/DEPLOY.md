# Guía de despliegue — GitHub Pages

1. **Crea el repositorio en GitHub.**
   Si lo llamas distinto a `portfolio`, actualiza `base` en
   `vite.config.js` y `homepage` en `package.json` para que coincidan
   exactamente con el nombre del repo (con `/` al inicio y al final).

2. **Sube el proyecto.**
   ```bash
   git init
   git add .
   git commit -m "Portafolio inicial"
   git branch -M main
   git remote add origin https://github.com/PaulJonaDev/portfolio.git
   git push -u origin main
   ```

3. **Instala `gh-pages` (ya está en `package.json`, solo falta instalarlo).**
   ```bash
   npm install
   ```

4. **Publica.**
   ```bash
   npm run deploy
   ```
   Esto compila el proyecto (`predeploy` corre `build` automáticamente)
   y publica la carpeta `dist/` en la rama `gh-pages`.

5. **Activa GitHub Pages.**
   En GitHub → *Settings* → *Pages* → *Build and deployment* → *Source*,
   selecciona la rama `gh-pages` y la carpeta `/ (root)`.

6. **Verifica.**
   El sitio queda disponible en:
   `https://PaulJonaDev.github.io/portfolio/`
   (puede tardar 1–2 minutos en propagarse la primera vez).

## Actualizar el sitio después de cambios

Cada vez que edites contenido (`src/data/profile.js`,
`src/data/projects.js`) o estilos, repite solo el paso 4:

```bash
git add .
git commit -m "Actualizo contenido"
git push
npm run deploy
```

## Alternativa: Vercel o Netlify

Si en algún momento prefieres no depender de GitHub Pages (por ejemplo,
para tener dominio propio o despliegues por rama), ambos detectan un
proyecto Vite automáticamente:

- **Build command:** `npm run build`
- **Output directory:** `dist`

En ese caso, quita o pon en `"/"` el valor de `base` en `vite.config.js`,
porque Vercel/Netlify sirven desde la raíz del dominio, no desde un
subdirectorio como GitHub Pages.
