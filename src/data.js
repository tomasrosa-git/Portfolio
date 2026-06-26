// ───────────────────────────────────────────────────────────
//  Contenido del portfolio. Editá libremente estos valores.
//  Los datos marcados con  // ✍️ INVENTADO  son placeholders
//  que pusimos para completar el sitio: ajustalos a gusto.
// ───────────────────────────────────────────────────────────

export const profile = {
  name: 'Tomás Rosa',
  role: 'Estudiante de Ingeniería en Sistemas',
  tagline: 'Construyo software full-stack, prolijo y con intención.',
  location: 'Villa María, Córdoba, Argentina',
  email: 'rosatomas.contact@gmail.com',
  github: 'https://github.com/tomasrosa-git',
  linkedin: 'https://www.linkedin.com/in/tomas-rosa-39abb53b9/?skipRedirect=true',
  resumeUrl: '', // opcional: link a tu CV en PDF
}

export const about = {
  paragraphs: [
    'Soy Tomás, estudiante de cuarto año de Ingeniería en Sistemas de Información en la UTN Facultad Regional Villa María. Me gusta entender los problemas de fondo antes de escribir una línea de código.',
    'Trabajo principalmente en el ecosistema JavaScript/TypeScript, tanto en frontend como en backend, y disfruto especialmente del trabajo en equipo: dividir tareas, revisar código y dejar las cosas mejor de como las encontré.',
    'Manejo un buen nivel de inglés (lectura técnica, documentación y conversación), lo que me permite moverme cómodo con cualquier stack y comunidad.',
  ],
  facts: [
    { label: 'Ubicación', value: 'Villa María, Córdoba' },
    { label: 'Carrera', value: 'Ing. en Sistemas — 4° año' },
    { label: 'Universidad', value: 'UTN FRVM' },
    { label: 'Inglés', value: 'Nivel avanzado' }, // ✍️ INVENTADO — ajustá el nivel
    { label: 'Estado', value: 'Abierto a propuestas' },
  ],
}

export const techStack = [
  { name: 'TypeScript', group: 'Lenguajes' },
  { name: 'JavaScript', group: 'Lenguajes' },
  { name: 'Python', group: 'Lenguajes' }, // ✍️ INVENTADO
  { name: 'Java', group: 'Lenguajes' }, // ✍️ INVENTADO
  { name: 'SQL', group: 'Lenguajes' },

  { name: 'React', group: 'Frontend' },
  { name: 'Tailwind CSS', group: 'Frontend' },
  { name: 'HTML & CSS', group: 'Frontend' },

  { name: 'NestJS', group: 'Backend' },
  { name: 'Node.js', group: 'Backend' },
  { name: 'REST APIs', group: 'Backend' },

  { name: 'PostgreSQL', group: 'Datos & Infra' },
  { name: 'Docker', group: 'Datos & Infra' },
  { name: 'Git & GitHub', group: 'Datos & Infra' },
  { name: 'Linux', group: 'Datos & Infra' }, // ✍️ INVENTADO
]

export const projects = [
  {
    title: 'MatePymes',
    private: true,
    description:
      'Sistema de gestión desarrollado en equipo de 4 para el título de Analista en Sistemas. Incluye módulos de ventas, compras, inventario y gestión de roles. Backend NestJS + PostgreSQL, desplegado con Docker.',
    tags: ['React', 'NestJS', 'PostgreSQL', 'Docker', 'TypeScript'],
    year: '2024',
  },

  {
    // ✍️ INVENTADO — proyecto de ejemplo, reemplazá o borrá
    title: 'Este portfolio',
    private: false,
    link: 'https://github.com/tomasrosa',
    description:
      'El sitio que estás viendo. Single-page en React + Vite con animaciones fluidas en Framer Motion, scroll reveals, cursor custom y diseño responsive.',
    tags: ['React', 'Vite', 'Tailwind', 'Framer Motion'],
    year: '2026',
  },
]

export const education = [
  {
    period: '2023 — Presente',
    title: 'Ingeniería en Sistemas de Información',
    place: 'UTN — Facultad Regional Villa María',
    detail:
      'Cursando 4° año. Formación en desarrollo de software, bases de datos, paradigmas de programación, ingeniería de software y gestión de proyectos.',
    current: true,
  },
  {
    period: '2025',
    title: 'Analista en Sistemas (título intermedio)',
    place: 'UTN — Facultad Regional Villa María',
    detail:
      'Título intermedio de la carrera. Proyecto final integrador: MatePymes, sistema de gestión desarrollado en equipo.',
    current: false,
  },
]
