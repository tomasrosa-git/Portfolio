import { motion } from 'framer-motion'
import { Github, Linkedin } from 'lucide-react'
import { profile } from '../data'

const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.08, delayChildren: 0.1 } },
}
const item = {
  hidden: { opacity: 0, y: 16 },
  show: { opacity: 1, y: 0, transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] } },
}

export default function Hero() {
  return (
    <section
      id="top"
      className="relative mx-auto flex min-h-[100svh] max-w-5xl flex-col justify-center px-6 py-32"
    >
      <motion.div variants={container} initial="hidden" animate="show">
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
