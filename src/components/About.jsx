import Reveal from './Reveal'
import SectionHeading from './SectionHeading'
import { about, profile } from '../data'

export default function About() {
  return (
    <section id="about" className="relative mx-auto max-w-5xl px-6 py-24 md:py-32">
      <SectionHeading title="Sobre mí" />

      <div className="grid gap-12 lg:grid-cols-[1.5fr_1fr]">
        <div>
          <Reveal>
            <p className="text-xl leading-relaxed md:text-2xl">
              Soy <span className="font-semibold">{profile.name}</span>, {about.intro}
            </p>
          </Reveal>

          <div className="mt-8 space-y-5">
            {about.paragraphs.map((p, i) => (
              <Reveal key={i} delay={i * 0.08}>
                <p className="max-w-prose leading-relaxed text-[var(--text-secondary)]">{p}</p>
              </Reveal>
            ))}
          </div>
        </div>

        <Reveal delay={0.15}>
          <dl className="surface divide-y divide-[var(--border)] p-6">
            {about.facts.map((f) => (
              <div key={f.label} className="flex items-baseline justify-between gap-4 py-3.5">
                <dt className="text-sm text-[var(--text-muted)]">{f.label}</dt>
                <dd className="text-right text-sm text-[var(--text-primary)]">{f.value}</dd>
              </div>
            ))}
          </dl>
        </Reveal>
      </div>
    </section>
  )
}
