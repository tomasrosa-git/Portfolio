import Reveal from './Reveal'
import SectionHeading from './SectionHeading'
import { education } from '../data'

export default function Education() {
  return (
    <section id="education" className="relative mx-auto max-w-5xl px-6 py-24 md:py-32">
      <SectionHeading
        title="Formación"
        description="Un recorrido por mi formación académica en la UTN."
      />

      <div className="space-y-6">
        {education.map((e, i) => (
          <Reveal key={e.title} delay={i * 0.08}>
            <article className="surface grid gap-4 p-6 md:grid-cols-[11rem_1fr] md:gap-8 md:p-8">
              <div className="flex items-start gap-2.5">
                <span className="text-sm text-[var(--text-muted)]">{e.period}</span>
                {e.current && (
                  <span
                    className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full"
                    style={{ background: 'var(--accent)' }}
                    aria-label="En curso"
                  />
                )}
              </div>

              <div>
                <h3 className="text-xl font-bold tracking-tight md:text-2xl">{e.title}</h3>
                <p className="mt-1 text-sm text-[var(--text-muted)]">{e.place}</p>
                <p className="mt-4 max-w-prose text-sm leading-relaxed text-[var(--text-secondary)]">
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
