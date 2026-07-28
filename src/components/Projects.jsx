import { motion } from 'framer-motion'
import { ArrowUpRight, Github, Globe, Lock } from 'lucide-react'
import Reveal from './Reveal'
import SectionHeading from './SectionHeading'
import { projects } from '../data'

export default function Projects() {
  const featured = projects.filter((p) => p.featured)
  const rest = projects.filter((p) => !p.featured)

  return (
    <section id="projects" className="relative mx-auto max-w-5xl px-6 py-16 sm:px-8 sm:py-20">
      <SectionHeading index="02" title="Proyectos" note="Trabajo seleccionado" />

      {featured.map((p) => (
        <Reveal key={p.title}>
          <FeaturedProject project={p} />
        </Reveal>
      ))}

      <div className="mt-6 grid gap-6 md:grid-cols-2">
        {rest.map((p, i) => (
          <Reveal key={p.title} delay={i * 0.08}>
            <CompactProject project={p} />
          </Reveal>
        ))}
      </div>
    </section>
  )
}

function FeaturedProject({ project }) {
  return (
    <motion.article
      whileHover={{ y: -3 }}
      transition={{ type: 'spring', stiffness: 260, damping: 24 }}
      className="surface group relative p-7 sm:p-10"
    >
      <span className="absolute right-0 top-0 bg-[var(--accent)] px-3 py-1.5 font-mono text-[0.65rem] uppercase tracking-[0.14em] text-[var(--paper)]">
        Destacado
      </span>

      <div className="grid gap-8 lg:grid-cols-[1.35fr_1fr]">
        <div>
          <p className="label">{project.subtitle}</p>
          <h3 className="mt-2 font-display text-4xl sm:text-5xl">{project.title}</h3>
          <p className="mt-5 max-w-prose leading-relaxed text-[var(--ink-muted)]">
            {project.description}
          </p>

          <div className="mt-7 flex flex-wrap items-center gap-x-5 gap-y-3">
            <ProjectAction project={project} />
            <span className="label">{project.year}</span>
          </div>
        </div>

        <div className="lg:border-l lg:border-[var(--rule)] lg:pl-8">
          <p className="label">Detalles técnicos</p>
          <ul className="mt-4 space-y-3">
            {project.highlights.map((h) => (
              <li key={h} className="flex gap-3 text-sm leading-relaxed text-[var(--ink-muted)]">
                <span className="mt-2 h-px w-3 shrink-0 bg-[var(--rule-strong)]" />
                {h}
              </li>
            ))}
          </ul>

          <TagList tags={project.tags} className="mt-6" />
        </div>
      </div>
    </motion.article>
  )
}

function CompactProject({ project }) {
  return (
    <motion.article
      whileHover={{ y: -3 }}
      transition={{ type: 'spring', stiffness: 260, damping: 24 }}
      className="surface flex h-full flex-col p-6"
    >
      <div className="flex items-start justify-between gap-4">
        <div>
          <p className="label">{project.subtitle}</p>
          <h3 className="mt-1.5 font-display text-2xl">{project.title}</h3>
        </div>
        <span className="label shrink-0">{project.year}</span>
      </div>

      <p className="mt-4 flex-1 text-sm leading-relaxed text-[var(--ink-muted)]">
        {project.description}
      </p>

      <TagList tags={project.tags} className="mt-5" />

      <div className="mt-5 flex flex-wrap items-center gap-x-5 gap-y-3 border-t border-[var(--rule)] pt-4">
        <ProjectAction project={project} />
      </div>
    </motion.article>
  )
}

function ProjectAction({ project }) {
  return (
    <>
      {project.liveUrl && (
        <a
          href={project.liveUrl}
          target="_blank"
          rel="noreferrer"
          className="group/live inline-flex items-center gap-2 bg-[var(--ink)] px-5 py-2.5 text-sm text-[var(--paper)] transition-opacity hover:opacity-85"
        >
          <Globe size={14} />
          Ver en vivo
          <ArrowUpRight
            size={13}
            className="transition-transform duration-300 group-hover/live:translate-x-0.5 group-hover/live:-translate-y-0.5"
          />
        </a>
      )}

      {project.private ? (
        <span className="inline-flex items-center gap-2 text-sm text-[var(--ink-faint)]">
          <Lock size={14} /> Repositorio privado
        </span>
      ) : (
        <a
          href={project.link}
          target="_blank"
          rel="noreferrer"
          className="group/link inline-flex items-center gap-2 text-sm transition-colors hover:text-[var(--accent)]"
        >
          <Github size={15} />
          <span className="link-underline">Ver código</span>
          <ArrowUpRight
            size={14}
            className="transition-transform duration-300 group-hover/link:translate-x-0.5 group-hover/link:-translate-y-0.5"
          />
        </a>
      )}
    </>
  )
}

function TagList({ tags, className = '' }) {
  return (
    <ul className={`flex flex-wrap gap-x-3 gap-y-1.5 ${className}`}>
      {tags.map((t) => (
        <li key={t} className="font-mono text-xs text-[var(--ink-faint)]">
          {t}
        </li>
      ))}
    </ul>
  )
}
