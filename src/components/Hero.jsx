import { motion } from 'framer-motion'
import { ArrowUpRight, Github, Linkedin, Mail } from 'lucide-react'
import { profile } from '../data'

const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.07, delayChildren: 0.1 } },
}
const item = {
  hidden: { opacity: 0, y: 18 },
  show: { opacity: 1, y: 0, transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] } },
}

export default function Hero() {
  return (
    <section
      id="top"
      className="relative mx-auto flex max-w-5xl flex-col justify-start px-6 pb-28 pt-28 sm:px-8"
    >
      <motion.div variants={container} initial="hidden" animate="show">
        <motion.div variants={item} className="flex items-center gap-2.5">
          <span className="h-1.5 w-1.5 rounded-full bg-[var(--accent)]" />
          <span className="label">Disponible para propuestas</span>
        </motion.div>

        <motion.h1
          variants={item}
          className="mt-8 font-display text-[clamp(2.9rem,8.5vw,5.5rem)]"
        >
          {profile.name}
        </motion.h1>

        <motion.p
          variants={item}
          className="mt-7 max-w-2xl text-xl leading-relaxed text-[var(--ink-muted)] sm:text-[1.4rem]"
        >
          {profile.role}. {profile.tagline}
        </motion.p>

        <motion.hr variants={item} className="rule my-10 max-w-2xl" />

        <motion.dl
          variants={item}
          className="grid max-w-2xl grid-cols-2 gap-x-8 gap-y-5 sm:grid-cols-3"
        >
          <Meta label="Ubicación" value="Villa María, AR" />
          <Meta label="Formación" value="Ing. en Sistemas · UTN" />
          <Meta label="Idiomas" value="Español · Inglés" />
        </motion.dl>

        <motion.div variants={item} className="mt-12 flex flex-wrap items-center gap-3">
          <a
            href="#projects"
            className="group inline-flex items-center gap-2 bg-[var(--ink)] px-6 py-3 text-sm text-[var(--paper)] transition-opacity hover:opacity-85"
          >
            Ver proyectos
            <ArrowUpRight
              size={15}
              className="transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
            />
          </a>
          <a
            href={`mailto:${profile.email}`}
            className="inline-flex items-center gap-2 border border-[var(--rule-strong)] px-6 py-3 text-sm transition-colors hover:bg-[var(--paper-raised)]"
          >
            <Mail size={15} /> Escribime
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

function Meta({ label, value }) {
  return (
    <div>
      <dt className="label">{label}</dt>
      <dd className="mt-1 text-sm text-[var(--ink)]">{value}</dd>
    </div>
  )
}

function IconLink({ href, label, children }) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noreferrer"
      aria-label={label}
      className="grid h-11 w-11 place-items-center text-[var(--ink-muted)] transition-colors hover:text-[var(--ink)]"
    >
      {children}
    </a>
  )
}
