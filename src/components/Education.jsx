import { motion } from 'framer-motion'
import { GraduationCap } from 'lucide-react'
import Reveal from './Reveal'
import SectionHeading from './SectionHeading'
import { education } from '../data'
import { Pushpin } from './Doodles'

export default function Education() {
  return (
    <section id="education" className="relative mx-auto max-w-6xl px-5 py-24 sm:px-8 sm:py-28">
      <SectionHeading index="04" kicker="dónde aprendí" title="Formación académica" />

      <div className="relative ml-3 border-l-2 border-dashed border-[var(--ink)]/40 pl-8">
        {education.map((e, i) => (
          <Reveal key={e.title} delay={i * 0.1}>
            <div className="relative pb-12 last:pb-0">
              {/* chincheta que sujeta la ficha a la línea */}
              <Pushpin
                className="absolute -left-[46px] top-1 h-6 w-6"
                color={e.current ? 'var(--orange)' : 'var(--red)'}
              />

              <motion.div
                whileHover={{ rotate: 0 }}
                style={{ transform: `rotate(${i % 2 ? 0.8 : -0.8}deg)` }}
                className="paper rounded-sm p-6"
              >
                <div className="mb-1 flex flex-wrap items-center gap-3">
                  <span className="inline-flex items-center gap-1.5 font-hand text-2xl text-red-marker">
                    <GraduationCap size={20} /> {e.period}
                  </span>
                  {e.current && (
                    <span className="stamp text-xs">EN CURSO</span>
                  )}
                </div>
                <h3 className="font-marker text-2xl text-[var(--ink)]">{e.title}</h3>
                <p className="mt-0.5 font-hand2 text-lg text-[var(--ink-soft)]">{e.place}</p>
                <p className="mt-2 font-hand2 text-lg leading-relaxed text-[var(--ink-soft)]">
                  {e.detail}
                </p>
              </motion.div>
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  )
}
