import { motion } from 'framer-motion'
import { Github, Linkedin } from 'lucide-react'
import { profile } from '../data'
import GradientASCII from './GradientASCII'
import useTheme from '../hooks/useTheme'

const ASCII = {
  dark: { colors: ['#854d0e', '#fefce8', '#fef08a', '#facc15'], gradientOpacity: 0.7 },
  // En claro el shader oscurece los glifos según el color: el marrón de la paleta oscura
  // dejaba una mancha sucia sobre el papel.
  light: { colors: ['#d97706', '#fffbeb', '#fef3c7', '#fcd34d'], gradientOpacity: 0.45 },
}

const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.08, delayChildren: 0.1 } },
}
const item = {
  hidden: { opacity: 0, y: 16 },
  show: { opacity: 1, y: 0, transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] } },
}

export default function Hero() {
  const theme = useTheme()

  return (
    <section
      id="top"
      className="relative flex min-h-[100svh] items-center overflow-hidden py-32"
    >
      {/* El componente escucha el puntero en window, así que no pierde interacción
          por pointer-events-none; eso mantiene clickeables los enlaces de encima. */}
      <div className="pointer-events-none absolute inset-0">
        <GradientASCII
          colors={ASCII[theme].colors}
          shape="horizon"
          characters=" =+xX0S8#@"
          cellSize={18}
          density={0.8}
          gradientOpacity={ASCII[theme].gradientOpacity}
          lightMode={theme === 'light'}
        />
        {/* En desktop el texto ocupa la mitad izquierda, así que el scrim es horizontal.
            En mobile ocupa todo el ancho: ahí conviene atenuar parejo o el efecto no se ve. */}
        <div
          className="absolute inset-0 md:hidden"
          style={{
            background: [
              'linear-gradient(to bottom, var(--bg) 0%, color-mix(in srgb, var(--bg) 55%, transparent) 14%, transparent 34%)',
              'linear-gradient(to top, var(--bg) 8%, color-mix(in srgb, var(--bg) 70%, transparent) 42%, color-mix(in srgb, var(--bg) 45%, transparent) 100%)',
            ].join(','),
          }}
        />
        <div
          className="absolute inset-0 hidden md:block"
          style={{
            background: [
              'linear-gradient(to bottom, var(--bg) 0%, color-mix(in srgb, var(--bg) 60%, transparent) 9%, transparent 20%)',
              'linear-gradient(to right, var(--bg) 0%, color-mix(in srgb, var(--bg) 70%, transparent) 45%, transparent 75%)',
            ].join(','),
          }}
        />
      </div>

      <motion.div
        variants={container}
        initial="hidden"
        animate="show"
        className="relative mx-auto w-full max-w-5xl px-6"
      >
        <motion.div variants={item} className="accent-rule mb-12 md:mb-16" />

        <motion.h1
          variants={item}
          className="text-5xl font-extrabold leading-none tracking-tighter md:text-7xl lg:text-8xl"
        >
          <span className="block">Tomás</span>
          <span className="block">Rosa</span>
        </motion.h1>

        <motion.div variants={item} className="mt-12 space-y-3 md:mt-16">
          <p className="text-lg text-[var(--text-secondary)] md:text-xl">{profile.role}</p>
          <p className="text-base text-[var(--text-muted)]">{profile.location}</p>
        </motion.div>

        <motion.div
          variants={item}
          className="mt-10 flex flex-wrap items-center gap-x-6 gap-y-3"
        >
          <a
            href={`mailto:${profile.email}`}
            className="link-underline text-base text-[var(--text-secondary)]"
          >
            Contacto →
          </a>
          <a
            href="#projects"
            className="link-underline text-base text-[var(--text-secondary)]"
          >
            Proyectos ↓
          </a>
          <div className="flex items-center gap-1">
            <IconLink href={profile.github} label="GitHub">
              <Github size={17} />
            </IconLink>
            <IconLink href={profile.linkedin} label="LinkedIn">
              <Linkedin size={17} />
            </IconLink>
          </div>
        </motion.div>
      </motion.div>
    </section>
  )
}

function IconLink({ href, label, children }) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noreferrer"
      aria-label={label}
      className="grid h-9 w-9 place-items-center rounded-lg text-[var(--text-muted)] transition-colors hover:bg-[var(--hover-tint)] hover:text-[var(--text-primary)]"
    >
      {children}
    </a>
  )
}
