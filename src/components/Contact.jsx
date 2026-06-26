import { useState } from 'react'
import { motion } from 'framer-motion'
import { Mail, Github, Linkedin, MapPin, Copy, Check } from 'lucide-react'
import Reveal from './Reveal'
import { profile } from '../data'

export default function Contact() {
  const [copied, setCopied] = useState(false)

  const copy = async () => {
    try {
      await navigator.clipboard.writeText(profile.email)
      setCopied(true)
      setTimeout(() => setCopied(false), 1800)
    } catch {
      /* ignore */
    }
  }

  return (
    <section id="contact" className="relative mx-auto max-w-6xl px-5 py-24 sm:px-8 sm:py-28">
      <SectionHeadingLocal />

      <div className="grid items-start gap-10 lg:grid-cols-2">
        {/* Izquierda: notas */}
        <Reveal>
          <div className="relative">
            <p className="font-hand2 text-xl leading-relaxed text-[var(--ink-soft)]">
              Estoy siempre con ganas de una buena idea. Contame qué tenés en mente —un proyecto,
              una pasantía, sumar a un equipo— y te respondo con buena onda e info clara.
            </p>

            <div className="mt-7 flex flex-wrap gap-4">
              <NoteLink href={profile.linkedin} rot="-3deg" icon={<Linkedin size={18} />} label="LinkedIn" />
              <NoteLink href={profile.github} rot="2deg" icon={<Github size={18} />} label="GitHub" />
            </div>

            <div className="kraft mt-6 inline-flex items-center gap-2 rounded-sm px-4 py-3 font-hand2 text-lg" style={{ transform: 'rotate(-1.5deg)' }}>
              <MapPin size={18} className="text-red-marker" /> {profile.location}
            </div>
          </div>
        </Reveal>

        {/* Derecha: papel de máquina de escribir */}
        <Reveal delay={0.15}>
          <div className="paper relative rounded-sm p-7 sm:p-9" style={{ transform: 'rotate(1deg)' }}>
            <span className="tape" style={{ top: -13, right: 30, transform: 'rotate(6deg)' }} />
            <p className="font-type text-sm uppercase tracking-widest text-[var(--ink-soft)]">
              — Nota para vos —
            </p>
            <p className="mt-4 font-type text-base leading-relaxed text-[var(--ink)]">
              escribime a mi mail y te contesto súper pronto
              <span className="caret">▋</span>
            </p>

            <div className="mt-6 flex flex-wrap items-center gap-3">
              <a
                href={`mailto:${profile.email}`}
                className="inline-flex items-center gap-2 border-2 border-[var(--ink)] bg-[var(--paper-2)] px-5 py-3 font-type text-sm text-[var(--ink)] transition-transform hover:scale-105"
              >
                <Mail size={16} /> {profile.email}
              </a>
              <button
                onClick={copy}
                aria-label="Copiar email"
                className="inline-flex items-center gap-2 border-2 border-dashed border-[var(--ink)] px-4 py-3 font-type text-sm text-[var(--ink)] transition-transform hover:scale-105"
              >
                {copied ? <Check size={15} className="text-emerald-700" /> : <Copy size={15} />}
                {copied ? '¡copiado!' : 'copiar'}
              </button>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  )
}

function SectionHeadingLocal() {
  return (
    <Reveal className="mb-12">
      <p className="font-hand text-2xl text-[var(--ink-soft)]">¿charlamos?</p>
      <h2 className="mt-1 inline-block font-marker text-4xl text-red-marker scribble sm:text-5xl">
        Contactame
      </h2>
    </Reveal>
  )
}

function NoteLink({ href, icon, label, rot }) {
  return (
    <motion.a
      whileHover={{ rotate: 0, scale: 1.05 }}
      href={href}
      target="_blank"
      rel="noreferrer"
      style={{ transform: `rotate(${rot})` }}
      className="sticky inline-flex items-center gap-2 px-5 py-3 font-hand2 text-lg text-[var(--ink)]"
    >
      {icon} {label}
    </motion.a>
  )
}
