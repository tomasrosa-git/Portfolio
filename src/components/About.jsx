import { motion } from 'framer-motion'
import Reveal from './Reveal'
import SectionHeading from './SectionHeading'
import { about } from '../data'
import { Paperclip } from './Doodles'

export default function About() {
  return (
    <section id="about" className="relative mx-auto max-w-6xl px-5 py-24 sm:px-8 sm:py-28">
      <SectionHeading index="01" kicker="quién soy" title="Sobre mí" />

      <div className="grid items-start gap-10 lg:grid-cols-[1.4fr_1fr]">
        {/* Hoja escrita a mano */}
        <Reveal>
          <div className="paper relative rounded-sm p-7 sm:p-9">
            {/* margen rojo de cuaderno */}
            <span className="absolute inset-y-0 left-8 w-px bg-red-400/40" />
            <div className="space-y-4 pl-6">
              {about.paragraphs.map((p, i) => (
                <Reveal key={i} delay={i * 0.1}>
                  <p className="font-hand2 text-xl leading-relaxed text-[var(--ink)]">{p}</p>
                </Reveal>
              ))}
            </div>
          </div>
        </Reveal>

        {/* Ficha kraft con clip */}
        <Reveal delay={0.15}>
          <motion.div
            whileHover={{ rotate: 0 }}
            style={{ transform: 'rotate(1.5deg)' }}
            className="kraft relative rounded-sm p-6"
          >
            <Paperclip className="absolute -top-5 right-8 h-12 w-5 drop-shadow" />
            <p className="mb-4 font-marker text-2xl text-red-marker">¡la data!</p>
            <dl className="space-y-2.5">
              {about.facts.map((f) => (
                <div
                  key={f.label}
                  className="flex items-center justify-between gap-4 border-b border-dashed border-[var(--ink)]/25 pb-2"
                >
                  <dt className="font-type text-xs uppercase tracking-wide text-[var(--ink-soft)]">
                    {f.label}
                  </dt>
                  <dd className="text-right font-hand2 text-lg text-[var(--ink)]">{f.value}</dd>
                </div>
              ))}
            </dl>
          </motion.div>
        </Reveal>
      </div>
    </section>
  )
}
