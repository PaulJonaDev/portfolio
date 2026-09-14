# Portafolio — Jonathan David Paul Caraballo

Portafolio profesional construido con React + Vite. Ver la sección
"Guía de despliegue" más abajo para publicarlo en GitHub Pages.

## Requisitos

- Node.js 18 o superior
- npm 9 o superior

## Desarrollo local

```bash
npm install
npm run dev
```

Abre la URL que muestra la terminal (por defecto `http://localhost:5173`).

## Compilar para producción

```bash
npm run build
npm run preview   # sirve la carpeta dist/ localmente para verificar
```

## Antes de publicar

1. Reemplaza `public/resume-jonathan-paul.pdf` por tu CV real (mismo nombre
   de archivo, o actualiza `resumeFile` en `src/data/profile.js`).
2. Revisa `src/data/profile.js` y `src/data/projects.js`: son los únicos
   archivos que deberías tocar para mantener el contenido actualizado.
3. Verifica el enlace de LinkedIn: el CV y el README traían dos URLs
   distintas (`/in/pauljonadev` vs. `/in/jonathan-paul-caraballo`);
   confirma cuál es la vigente en `src/data/profile.js`.

Ver `DEPLOY.md` para el paso a paso de publicación en GitHub Pages.
