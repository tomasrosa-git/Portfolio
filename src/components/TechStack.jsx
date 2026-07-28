import Reveal from './Reveal'
import SectionHeading from './SectionHeading'
import { techStack } from '../data'

const groups = ['Lenguajes', 'Frontend', 'Backend', 'Datos e infraestructura']

export default function TechStack() {
  return (
    <section id="stack" className="relative py-16 sm:py-20">
      <div className="mx-auto max-w-5xl px-6 sm:px-8">
        <SectionHeading index="03" title="Stack" note="Herramientas" />

        <div className="grid gap-x-10 gap-y-10 sm:grid-cols-2">
          {groups.map((g, gi) => (
            <Reveal key={g} delay={gi * 0.07}>
              <div className="border-t border-[var(--ink)] pt-4">
                <h3 className="label">{g}</h3>
                <ul className="mt-4 flex flex-wrap gap-x-5 gap-y-2">
                  {techStack
                    .filter((t) => t.group === g)
                    .map((t) => (
                      <li key={t.name} className="text-[var(--ink)]">
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
      <div className="relative mt-20 overflow-hidden border-y border-[var(--rule)] py-4">
        <div className="flex w-max animate-marquee">
          {[0, 1].map((copy) => (
            <div key={copy} className="flex shrink-0">
              {techStack.map((t) => (
                <span
                  key={`${copy}-${t.name}`}
                  className="flex items-center whitespace-nowrap px-5 text-xl font-medium tracking-[-0.01em] text-[var(--ink-faint)]"
                >
                  {t.name}
                  <span className="ml-5 text-[var(--rule-strong)]">—</span>
                </span>
              ))}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
