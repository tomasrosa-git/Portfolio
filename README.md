# Portfolio — Tomás Rosa

Portfolio personal single-page construido con **React + Vite + Tailwind CSS v4**, con animaciones en **Framer Motion**.

Diseño editorial propio: tipografía Geist / Geist Mono, fondo papel, reglas finas y acento terracota.

## Desarrollo

```bash
npm install      # instalar dependencias
npm run dev      # servidor local
npm run build    # build de producción en /dist
npm run preview  # previsualizar el build
```

## Editar el contenido

Todo el contenido vive en **`src/data.js`**. Los componentes no tienen texto de perfil escrito adentro, así que editar ese archivo alcanza para actualizar el sitio.

- `profile` → nombre, rol, tagline, email, GitHub, LinkedIn
- `about` → intro, párrafos y ficha de datos
- `techStack` → tecnologías agrupadas (`Lenguajes`, `Frontend`, `Backend`, `Datos e infraestructura`)
- `projects` → proyectos (ver abajo)
- `education` → formación académica

### Agregar un proyecto

```js
{
  title: 'Nombre',
  subtitle: 'Categoría',       // se muestra arriba del título
  featured: false,             // true = ficha grande destacada
  private: false,              // true = muestra "Repositorio privado" sin enlace
  link: 'https://github.com/...',   // repositorio
  liveUrl: 'https://...',           // opcional: agrega el botón "Ver en vivo"
  year: '2026',
  description: '...',
  highlights: ['...'],         // bullets de detalles técnicos (solo en featured)
  tags: ['React', 'TypeScript'],
}
```

`liveUrl` es opcional: el botón "Ver en vivo" aparece únicamente en los proyectos que lo tengan.

## Estructura

```
src/
├── data.js            ← todo el contenido editable
├── App.jsx            ← layout + barra de progreso de scroll
├── index.css          ← tema, tipografía y animaciones globales
└── components/
    ├── Cursor.jsx          ← cursor custom (solo desktop)
    ├── Nav.jsx             ← navegación + menú mobile
    ├── Hero.jsx            ← presentación
    ├── About.jsx           ← perfil + ficha de datos
    ├── Projects.jsx        ← proyectos (destacado + compactos)
    ├── TechStack.jsx       ← stack agrupado + cinta tipográfica
    ├── Education.jsx       ← formación
    ├── Contact.jsx         ← contacto + copiar email
    ├── Footer.jsx
    ├── SectionHeading.jsx  ← encabezado numerado de sección
    └── Reveal.jsx          ← wrapper de animación al hacer scroll
```

## Deploy

El build genera estáticos en `/dist`, listos para Netlify, Vercel o GitHub Pages. Si se sirve desde un subdirectorio, configurar `base` en `vite.config.js`.

Accesibilidad: respeta `prefers-reduced-motion` y el cursor custom se desactiva en dispositivos táctiles.
