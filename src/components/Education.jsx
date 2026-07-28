import Reveal from './Reveal'
import SectionHeading from './SectionHeading'
import { education } from '../data'

export default function Education() {
  return (
    <section id="education" className="relative mx-auto max-w-5xl px-6 py-16 sm:px-8 sm:py-20">
      <SectionHeading index="04" title="Formación" note="UTN FRVM" />

      <div className="border-t border-[var(--rule)]">
        {education.map((e, i) => (
          <Reveal key={e.title} delay={i * 0.08}>
            <article className="grid gap-4 border-b border-[var(--rule)] py-8 sm:grid-cols-[9rem_1fr] sm:gap-8">
              <div className="flex items-start gap-3">
                <span className="label whitespace-nowrap">{e.period}</span>
                {e.current && (
                  <span className="mt-1 h-1.5 w-1.5 shrink-0 rounded-full bg-[var(--accent)]" />
                )}
              </div>

              <div>
                <h3 className="font-display text-2xl">{e.title}</h3>
                <p className="mt-1 text-sm text-[var(--ink-muted)]">{e.place}</p>
                <p className="mt-3 max-w-prose text-sm leading-relaxed text-[var(--ink-muted)]">
                  {e.detail}
                </p>
              </div>
            </article>
          </Reveal>
        ))}
      </div>
    </section>
  )
}
