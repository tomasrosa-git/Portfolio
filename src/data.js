// ───────────────────────────────────────────────────────────
//  Contenido del portfolio. Editá libremente estos valores.
// ───────────────────────────────────────────────────────────

export const profile = {
  name: 'Tomás Rosa',
  role: 'Desarrollador full-stack',
  tagline:
    'Diseño y construyo aplicaciones web de punta a punta, desde la base de datos hasta la interfaz.',
  location: 'Villa María, Córdoba, Argentina',
  email: 'rosatomas.contact@gmail.com',
  github: 'https://github.com/tomasrosa-git',
  linkedin: 'https://www.linkedin.com/in/tomasrosa-dev/',
}

export const about = {
  intro:
    'Desarrollo aplicaciones web full-stack con foco en arquitecturas claras y productos que funcionen en producción, no solo en la demo.',
  paragraphs: [
    'Trabajo principalmente sobre el ecosistema TypeScript —React y Next.js en el frontend, Node en el backend— con PostgreSQL como base y despliegues reales en la nube.',
    'Estoy cursando el cuarto año de Ingeniería en Sistemas de Información en la UTN Facultad Regional Villa María, donde ya obtuve el título intermedio de Analista en Sistemas.',
    'Me interesa entender el problema antes de escribir código, dejar decisiones documentadas y trabajar en equipo: dividir tareas, revisar código y sostener lo que se construye.',
  ],
  facts: [
    { label: 'Ubicación', value: 'Villa María, Córdoba' },
    { label: 'Formación', value: 'Ing. en Sistemas — UTN FRVM' },
    { label: 'Inglés', value: 'Técnico y conversacional' },
    { label: 'Disponibilidad', value: 'Abierto a propuestas' },
  ],
}

export const techStack = [
  { name: 'TypeScript', group: 'Lenguajes' },
  { name: 'JavaScript', group: 'Lenguajes' },
  { name: 'SQL', group: 'Lenguajes' },
  { name: 'Java', group: 'Lenguajes' },

  { name: 'React', group: 'Frontend' },
  { name: 'Next.js', group: 'Frontend' },
  { name: 'Tailwind CSS', group: 'Frontend' },

  { name: 'Node.js', group: 'Backend' },
  { name: 'Express', group: 'Backend' },
  { name: 'NestJS', group: 'Backend' },
  { name: 'REST APIs', group: 'Backend' },

  { name: 'PostgreSQL', group: 'Datos e infraestructura' },
  { name: 'Prisma', group: 'Datos e infraestructura' },
  { name: 'Supabase', group: 'Datos e infraestructura' },
  { name: 'Docker', group: 'Datos e infraestructura' },
  { name: 'Render', group: 'Datos e infraestructura' },
  { name: 'Cloudflare', group: 'Datos e infraestructura' },
  { name: 'Git y GitHub', group: 'Datos e infraestructura' },
]

export const projects = [
  {
    title: 'Raccord',
    subtitle: 'Plataforma de cine',
    featured: true,
    private: false,
    link: 'https://github.com/tomasrosa-git/Raccord',
    liveUrl: 'https://raccord.com.ar',
    year: '2026',
    description:
      'Aplicación web que reúne información de cine en un solo lugar: catálogo de películas, fichas de personas, premios y en qué plataformas ver cada título. Integra la API de TMDB para catálogo, imágenes y proveedores de streaming, y Wikidata/Wikipedia para premios y biografías.',
    highlights: [
      'Monorepo con frontend y backend desplegados como servicios independientes en Render.',
      'Next.js con App Router y renderizado en servidor (SSR/ISR) en lugar de sitio estático.',
      'API en Express con Prisma sobre PostgreSQL alojado en Supabase.',
      'Dominio propio .com.ar delegado a Cloudflare para CDN y cacheo.',
    ],
    tags: ['Next.js', 'TypeScript', 'Express', 'Prisma', 'PostgreSQL', 'Tailwind'],
  },
  {
    title: 'MatePymes',
    subtitle: 'Sistema de gestión',
    featured: false,
    private: true,
    year: '2025',
    description:
      'Sistema de gestión desarrollado en equipo de cuatro personas como proyecto final para el título de Analista en Sistemas. Cubre los módulos de ventas, compras, inventario y administración de roles.',
    highlights: [
      'Backend en NestJS con PostgreSQL y despliegue contenerizado con Docker.',
      'Control de acceso por roles sobre todos los módulos del sistema.',
    ],
    tags: ['React', 'NestJS', 'PostgreSQL', 'Docker', 'TypeScript'],
  },
  {
    title: 'Portfolio personal',
    subtitle: 'Sitio propio',
    featured: false,
    private: false,
    link: 'https://github.com/tomasrosa-git/Portfolio',
    year: '2026',
    description:
      'Este sitio. Single page en React con Vite, animaciones de scroll y un diseño editorial propio, sin plantillas ni librerías de componentes.',
    highlights: [],
    tags: ['React', 'Vite', 'Tailwind', 'Framer Motion'],
  },
]

export const education = [
  {
    period: '2023 — Presente',
    title: 'Ingeniería en Sistemas de Información',
    place: 'UTN — Facultad Regional Villa María',
    detail:
      'Cursando cuarto año. Formación en desarrollo de software, bases de datos, paradigmas de programación, ingeniería de software y gestión de proyectos.',
    current: true,
  },
  {
    period: '2025',
    title: 'Analista en Sistemas',
    place: 'UTN — Facultad Regional Villa María',
    detail:
      'Título intermedio de la carrera. Proyecto final integrador: MatePymes, sistema de gestión desarrollado en equipo.',
    current: false,
  },
]
