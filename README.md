# Portfolio — Tomás Rosa

Portfolio personal single-page construido con **React + Vite + Tailwind CSS v4** y animaciones con **Framer Motion**.

## Desarrollo

```bash
npm install      # instalar dependencias (una sola vez)
npm run dev      # servidor local en http://localhost:5173
npm run build    # build de producción en /dist
npm run preview  # previsualizar el build
```

## Cómo editar tu contenido

Casi todo el contenido vive en un solo archivo: **`src/data.js`**.
Ahí podés cambiar tus textos, stack, proyectos y formación sin tocar componentes.

### ⚠️ Datos que tenés que reemplazar (placeholders inventados)

Están marcados con `// ✍️ INVENTADO` dentro de `src/data.js`:

- **`github`** y **`linkedin`** en `profile` → poné tus URLs reales.
- **Nivel de inglés** (`about.facts`) → ajustalo si no es B2+.
- **Proyectos de ejemplo** (`API de Turnos`, `Este portfolio`) → reemplazalos por proyectos reales o borralos. `MatePymes` ya está cargado y marcado como **privado**.
- **Python / Java / Linux** en `techStack` → sacá los que no uses.

> El email (`rosatomas.contact@gmail.com`) ya está cargado correctamente.

## Estructura

```
src/
├── data.js            ← TODO tu contenido editable
├── App.jsx            ← layout + barra de progreso de scroll
├── index.css          ← tema, fuentes, animaciones globales
└── components/
    ├── Cursor.jsx     ← cursor custom (desktop)
    ├── Nav.jsx        ← navegación + menú mobile
    ├── Hero.jsx       ← presentación con parallax
    ├── About.jsx      ← sobre mí + ficha de datos
    ├── TechStack.jsx  ← marquee + stack agrupado
    ├── Projects.jsx   ← tarjetas de proyectos
    ├── Education.jsx  ← timeline UTN FRVM
    ├── Contact.jsx    ← contacto + copiar email
    └── Footer.jsx
```

## Deploy

El proyecto genera estáticos en `/dist`, así que podés subirlo gratis a:

- **Netlify / Vercel**: conectás el repo y listo (detectan Vite solo).
- **GitHub Pages**: subí el contenido de `dist/` (si usás un subpath, configurá `base` en `vite.config.js`).

Accesible: respeta `prefers-reduced-motion` y el cursor custom se desactiva en táctiles.
