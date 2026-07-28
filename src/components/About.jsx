import Reveal from './Reveal'
import SectionHeading from './SectionHeading'
import { about } from '../data'

export default function About() {
  return (
    <section id="about" className="relative mx-auto max-w-5xl px-6 py-16 sm:px-8 sm:py-20">
      <SectionHeading index="01" title="Perfil" note="Quién soy" />

      <div className="grid gap-12 lg:grid-cols-[1.6fr_1fr]">
        <div>
          <Reveal>
            <p className="text-2xl font-medium leading-snug tracking-[-0.015em] sm:text-[1.7rem]">
              {about.intro}
            </p>
          </Reveal>

          <div className="mt-8 space-y-5">
            {about.paragraphs.map((p, i) => (
              <Reveal key={i} delay={i * 0.08}>
                <p className="max-w-prose leading-relaxed text-[var(--ink-muted)]">{p}</p>
              </Reveal>
            ))}
          </div>
        </div>

        <Reveal delay={0.15}>
          <dl className="border-t border-[var(--rule)]">
            {about.facts.map((f) => (
              <div
                key={f.label}
                className="flex items-baseline justify-between gap-4 border-b border-[var(--rule)] py-4"
              >
                <dt className="label">{f.label}</dt>
                <dd className="text-right text-sm">{f.value}</dd>
              </div>
            ))}
          </dl>
        </Reveal>
      </div>
    </section>
  )
}
