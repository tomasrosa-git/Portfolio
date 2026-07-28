import { useState } from 'react'
import { ArrowUpRight, Check, Copy, Github, Linkedin, Mail } from 'lucide-react'
import Reveal from './Reveal'
import SectionHeading from './SectionHeading'
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
    <section id="contact" className="relative mx-auto max-w-5xl px-6 py-16 sm:px-8 sm:py-20">
      <SectionHeading index="05" title="Contacto" note="Hablemos" />

      <div className="grid gap-12 lg:grid-cols-[1.4fr_1fr]">
        <Reveal>
          <p className="max-w-xl text-2xl font-medium leading-snug tracking-[-0.015em] sm:text-[1.9rem]">
            ¿Tenés un proyecto, una pasantía o una búsqueda abierta? Escribime y te respondo
            a la brevedad.
          </p>

          <div className="mt-9 flex flex-wrap items-center gap-3">
            <a
              href={`mailto:${profile.email}`}
              className="group inline-flex items-center gap-2 bg-[var(--ink)] px-6 py-3 text-sm text-[var(--paper)] transition-opacity hover:opacity-85"
            >
              <Mail size={15} />
              {profile.email}
            </a>
            <button
              onClick={copy}
              aria-label="Copiar dirección de correo"
              className="inline-flex items-center gap-2 border border-[var(--rule-strong)] px-5 py-3 text-sm transition-colors hover:bg-[var(--paper-raised)]"
            >
              {copied ? <Check size={14} className="text-[var(--accent)]" /> : <Copy size={14} />}
              {copied ? 'Copiado' : 'Copiar'}
            </button>
          </div>
        </Reveal>

        <Reveal delay={0.12}>
          <div className="border-t border-[var(--ink)]">
            <ContactRow href={profile.linkedin} label="LinkedIn" icon={<Linkedin size={15} />} />
            <ContactRow href={profile.github} label="GitHub" icon={<Github size={15} />} />
            <div className="flex items-baseline justify-between gap-4 border-b border-[var(--rule)] py-4">
              <span className="label">Ubicación</span>
              <span className="text-sm text-[var(--ink-muted)]">Villa María, AR</span>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  )
}

function ContactRow({ href, label, icon }) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noreferrer"
      className="group flex items-center justify-between gap-4 border-b border-[var(--rule)] py-4 transition-colors hover:text-[var(--accent)]"
    >
      <span className="inline-flex items-center gap-2.5 text-sm">
        {icon}
        {label}
      </span>
      <ArrowUpRight
        size={15}
        className="text-[var(--ink-faint)] transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:text-[var(--accent)]"
      />
    </a>
  )
}
