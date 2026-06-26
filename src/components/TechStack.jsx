import { motion } from 'framer-motion'
import Reveal from './Reveal'
import SectionHeading from './SectionHeading'
import { techStack } from '../data'
import { Pushpin, Star } from './Doodles'

// Estilos de etiqueta que se van alternando para dar variedad de "scrapbook".
const styles = [
  { cls: 'kraft text-[var(--ink)]', pin: 'var(--red)' },
  { cls: 'sticky text-[var(--ink)]', pin: 'var(--ink)' },
  { cls: 'paper text-[var(--ink)]', pin: 'var(--orange)' },
  { cls: 'bg-[var(--ink)] text-[#f3ecdc]', pin: '#e8d7b0' },
]
const rots = ['-5deg', '3deg', '-2deg', '6deg', '-4deg', '2deg', '-6deg', '4deg', '-3deg', '5deg']
const sizes = ['text-sm', 'text-base', 'text-sm', 'text-lg', 'text-sm', 'text-base']

export default function TechStack() {
  const marqueeItems = [...techStack, ...techStack]

  return (
    <section id="stack" className="relative py-24 sm:py-28">
      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        <SectionHeading index="02" kicker="con qué laburo" title="Stack tecnológico" />
      </div>

      {/* Tira de película */}
      <div className="relative mb-16 overflow-hidden bg-[#1d1a16] py-3">
        <div className="absolute inset-x-0 top-0 flex h-3 items-center justify-around">
          {Array.from({ length: 40 }).map((_, i) => (
            <span key={i} className="h-1.5 w-2.5 rounded-[1px] bg-[#f3ecdc]" />
          ))}
        </div>
        <div className="absolute inset-x-0 bottom-0 flex h-3 items-center justify-around">
          {Array.from({ length: 40 }).map((_, i) => (
            <span key={i} className="h-1.5 w-2.5 rounded-[1px] bg-[#f3ecdc]" />
          ))}
        </div>
        <div className="flex w-max animate-marquee gap-3 py-3">
          {marqueeItems.map((t, i) => (
            <span
              key={i}
              className="whitespace-nowrap font-type text-sm uppercase tracking-wider text-[#f3ecdc]"
            >
              {t.name} ·
            </span>
          ))}
        </div>
      </div>

      {/* Tablero con etiquetas clavadas */}
      <Reveal className="mx-auto max-w-4xl px-5 sm:px-8">
        <div className="relative">
          <Star className="absolute -left-1 -top-6 hidden h-9 w-9 -rotate-12 sm:block" />
          <Star className="absolute -right-2 bottom-2 hidden h-7 w-7 rotate-12 sm:block" color="var(--red)" />

          <ul className="flex flex-wrap items-center justify-center gap-x-5 gap-y-9 py-4">
            {techStack.map((t, i) => {
              const s = styles[i % styles.length]
              return (
                <motion.li
                  key={t.name}
                  initial={{ opacity: 0, y: 16, rotate: 0 }}
                  whileInView={{ opacity: 1, y: 0, rotate: parseFloat(rots[i % rots.length]) }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.04, type: 'spring', stiffness: 200, damping: 16 }}
                  whileHover={{ rotate: 0, scale: 1.12, zIndex: 10 }}
                  className={`relative cursor-default rounded-sm px-4 py-2 font-type ${s.cls} ${sizes[i % sizes.length]}`}
                >
                  <Pushpin
                    className="absolute -top-4 left-1/2 h-5 w-5 -translate-x-1/2"
                    color={s.pin}
                  />
                  {t.name}
                </motion.li>
              )
            })}
          </ul>

          <p className="mt-6 text-center font-hand text-2xl text-[var(--ink-soft)]">
            …y siempre con ganas de sumar una herramienta más a la caja.
          </p>
        </div>
      </Reveal>
    </section>
  )
}
