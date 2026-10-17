import Reveal from './Reveal'
import SectionHeading from './SectionHeading'
import { techStack } from '../data'

const groups = ['Lenguajes', 'Frontend', 'Backend', 'Datos e infraestructura']

export default function TechStack() {
  return (
    <section id="stack" className="relative py-24 md:py-32">
      <div className="mx-auto max-w-5xl px-6">
        <SectionHeading
          title="Stack"
          description="Las herramientas con las que trabajo día a día."
        />

        <div className="grid gap-x-10 gap-y-10 sm:grid-cols-2">
          {groups.map((g, gi) => (
            <Reveal key={g} delay={gi * 0.07}>
              <div className="border-t border-[var(--border)] pt-5">
                <h3 className="text-sm text-[var(--text-muted)]">{g}</h3>
                <ul className="mt-4 flex flex-wrap gap-2">
                  {techStack
                    .filter((t) => t.group === g)
                    .map((t) => (
                      <li key={t.name} className="pill">
                        {t.name}
                      </li>
                    ))}
                </ul>
              </div>
            </Reveal>
          ))}
        </div>
      </div>

      {/* Cinta tipográfica continua */}
      <div className="relative mt-20 overflow-hidden border-y border-[var(--border)] py-4">
        <div className="flex w-max animate-marquee">
          {[0, 1].map((copy) => (
            <div key={copy} className="flex shrink-0">
              {techStack.map((t) => (
                <span
                  key={`${copy}-${t.name}`}
                  className="flex items-center whitespace-nowrap px-5 text-xl font-semibold tracking-tight text-[var(--text-muted)]"
                >
                  {t.name}
                  <span className="ml-5 text-[var(--accent-ink)]">/</span>
                </span>
              ))}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
