import { motion } from 'framer-motion'
import { ArrowUpRight, Github, Globe, Lock } from 'lucide-react'
import Reveal from './Reveal'
import SectionHeading from './SectionHeading'
import { projects } from '../data'

export default function Projects() {
  const featured = projects.filter((p) => p.featured)
  const rest = projects.filter((p) => !p.featured)

  return (
    <section id="projects" className="relative mx-auto max-w-5xl px-6 py-24 md:py-32">
      <SectionHeading
        title="Proyectos"
        description="Lo que construí, desde la base de datos hasta la interfaz."
      />

      <div className="space-y-6">
        {featured.map((p) => (
          <Reveal key={p.title}>
            <FeaturedProject project={p} />
          </Reveal>
        ))}
      </div>

      <div className="mt-6 grid gap-6 md:grid-cols-2">
        {rest.map((p, i) => (
          <Reveal
            key={p.title}
            delay={i * 0.08}
            className={rest.length % 2 === 1 && i === rest.length - 1 ? 'md:col-span-2' : ''}
          >
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
      className="surface relative overflow-hidden p-7 md:p-10"
    >
      <span
        className="absolute right-0 top-0 rounded-bl-lg px-3 py-1.5 text-[0.65rem] font-semibold uppercase tracking-wider"
        style={{ background: 'var(--accent)', color: 'var(--accent-fg)' }}
      >
        Destacado
      </span>

      <div className="grid gap-8 lg:grid-cols-[1.35fr_1fr]">
        <div>
          <p className="text-sm text-[var(--text-muted)]">{project.subtitle}</p>
          <h3 className="mt-2 text-4xl font-extrabold tracking-tighter md:text-5xl">
            {project.title}
          </h3>
          <p className="mt-5 max-w-prose leading-relaxed text-[var(--text-secondary)]">
            {project.description}
          </p>

          <div className="mt-7 flex flex-wrap items-center gap-x-5 gap-y-3">
            <ProjectAction project={project} />
            <span className="text-sm text-[var(--text-muted)]">{project.year}</span>
          </div>
        </div>

        <div className="lg:border-l lg:border-[var(--border)] lg:pl-8">
          <p className="text-sm text-[var(--text-muted)]">Detalles técnicos</p>
          <ul className="mt-4 space-y-3">
            {project.highlights.map((h) => (
              <li
                key={h}
                className="flex gap-3 text-sm leading-relaxed text-[var(--text-secondary)]"
              >
                <span className="mt-2 h-px w-3 shrink-0 bg-[var(--accent-ink)]" />
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
          <p className="text-sm text-[var(--text-muted)]">{project.subtitle}</p>
          <h3 className="mt-1.5 text-2xl font-extrabold tracking-tighter">{project.title}</h3>
        </div>
        <span className="shrink-0 text-sm text-[var(--text-muted)]">{project.year}</span>
      </div>

      <p className="mt-4 flex-1 text-sm leading-relaxed text-[var(--text-secondary)]">
        {project.description}
      </p>

      <TagList tags={project.tags} className="mt-5" />

      <div className="mt-5 flex flex-wrap items-center gap-x-5 gap-y-3 border-t border-[var(--border)] pt-4">
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
          className="btn-accent group/live inline-flex items-center gap-2 px-5 py-2.5 text-sm"
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
        <span className="inline-flex items-center gap-2 text-sm text-[var(--text-muted)]">
          <Lock size={14} /> Repositorio privado
        </span>
      ) : (
        <a
          href={project.link}
          target="_blank"
          rel="noreferrer"
          className="link-underline group/link inline-flex items-center gap-2 text-sm text-[var(--text-secondary)]"
        >
          <Github size={15} />
          Ver código
          <ArrowUpRight
            size={13}
            className="transition-transform duration-300 group-hover/link:translate-x-0.5 group-hover/link:-translate-y-0.5"
          />
        </a>
      )}
    </>
  )
}

function TagList({ tags, className = '' }) {
  return (
    <ul className={`flex flex-wrap gap-2 ${className}`}>
      {tags.map((t) => (
        <li key={t} className="pill">
          {t}
        </li>
      ))}
    </ul>
  )
}
