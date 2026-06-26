import { motion } from 'framer-motion'
import { Lock, ArrowUpRight, Github } from 'lucide-react'
import Reveal from './Reveal'
import SectionHeading from './SectionHeading'
import { projects } from '../data'

const rots = ['-1.2deg', '1deg', '-0.8deg', '1.4deg']

export default function Projects() {
  return (
    <section id="projects" className="relative mx-auto max-w-6xl px-5 py-24 sm:px-8 sm:py-28">
      <SectionHeading index="03" kicker="lo que construí" title="Proyectos" />

      <div className="grid gap-8 md:grid-cols-2">
        {projects.map((p, i) => (
          <Reveal key={p.title} delay={i * 0.08}>
            <ProjectCard project={p} rot={rots[i % rots.length]} />
          </Reveal>
        ))}
      </div>
    </section>
  )
}

function ProjectCard({ project, rot }) {
  const isPrivate = project.private

  return (
    <motion.article
      whileHover={{ rotate: 0, y: -6 }}
      style={{ transform: `rotate(${rot})` }}
      transition={{ type: 'spring', stiffness: 250, damping: 20 }}
      className="paper relative flex h-full flex-col rounded-sm p-7"
    >
      {/* cinta arriba */}
      <span className="tape" style={{ top: -13, left: 28, transform: 'rotate(-7deg)' }} />

      {/* sello de privado */}
      {isPrivate && (
        <motion.span
          initial={{ scale: 1.6, opacity: 0, rotate: -20 }}
          whileInView={{ scale: 1, opacity: 0.9, rotate: -14 }}
          viewport={{ once: true }}
          transition={{ type: 'spring', stiffness: 200, damping: 12, delay: 0.2 }}
          className="stamp absolute bottom-6 right-5 z-10 inline-flex items-center gap-1.5 text-sm"
        >
          PRIVADO <Lock size={14} />
        </motion.span>
      )}

      <div className="mb-3 flex items-baseline gap-3">
        <h3 className="font-marker text-3xl text-[var(--ink)]">{project.title}</h3>
        <span className="font-hand text-xl text-[var(--ink-soft)]">'{project.year.slice(2)}</span>
      </div>

      <p className="flex-1 font-hand2 text-lg leading-relaxed text-[var(--ink-soft)]">
        {project.description}
      </p>

      <div className="mt-5 flex flex-wrap gap-2 border-t border-dashed border-[var(--ink)]/20 pt-4">
        {project.tags.map((t) => (
          <span key={t} className="kraft rounded-sm px-2.5 py-1 font-type text-xs text-[var(--ink)]">
            {t}
          </span>
        ))}
      </div>

      {!isPrivate && (
        <a
          href={project.link}
          target="_blank"
          rel="noreferrer"
          className="mt-5 inline-flex w-fit items-center gap-2 border-2 border-[var(--ink)] bg-[var(--paper-2)] px-4 py-2 font-marker text-base text-[var(--ink)] transition-transform hover:rotate-1 hover:scale-105"
        >
          <Github size={16} /> Ver código <ArrowUpRight size={15} />
        </a>
      )}
    </motion.article>
  )
}
