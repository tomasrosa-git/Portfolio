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
    <section id="contact" className="relative mx-auto max-w-5xl px-6 py-24 md:py-32">
      <SectionHeading title="¿Hablamos?" />

      <div className="grid gap-12 lg:grid-cols-[1.4fr_1fr]">
        <Reveal>
          <p className="max-w-xl text-2xl font-bold leading-snug tracking-tight md:text-3xl">
            Estoy abierto a nuevas oportunidades. No dudes en contactarme.
          </p>

          <div className="mt-9 flex flex-wrap items-center gap-3">
            <a
              href={`mailto:${profile.email}`}
              className="btn-accent inline-flex items-center gap-2 px-6 py-3 text-sm"
            >
              <Mail size={15} />
              {profile.email}
            </a>
            <button
              onClick={copy}
              aria-label="Copiar dirección de correo"
              className="inline-flex items-center gap-2 rounded-lg border border-[var(--border)] px-5 py-3 text-sm text-[var(--text-secondary)] transition-colors hover:border-[var(--border-hover)] hover:text-[var(--text-primary)]"
            >
              {copied ? (
                <Check size={14} style={{ color: 'var(--accent-ink)' }} />
              ) : (
                <Copy size={14} />
              )}
              {copied ? 'Copiado' : 'Copiar'}
            </button>
          </div>
        </Reveal>

        <Reveal delay={0.12}>
          <div className="surface divide-y divide-[var(--border)] px-6">
            <ContactRow href={profile.linkedin} label="LinkedIn" icon={<Linkedin size={15} />} />
            <ContactRow href={profile.github} label="GitHub" icon={<Github size={15} />} />
            <div className="flex items-baseline justify-between gap-4 py-4">
              <span className="text-sm text-[var(--text-muted)]">Ubicación</span>
              <span className="text-sm text-[var(--text-secondary)]">Villa María, AR</span>
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
      className="group flex items-center justify-between gap-4 py-4 text-[var(--text-secondary)] transition-colors hover:text-[var(--text-primary)]"
    >
      <span className="inline-flex items-center gap-2.5 text-sm">
        {icon}
        {label}
      </span>
      <ArrowUpRight
        size={15}
        className="text-[var(--text-muted)] transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
      />
    </a>
  )
}
