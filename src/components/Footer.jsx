import { ArrowUp } from 'lucide-react'
import { profile } from '../data'

export default function Footer() {
  return (
    <footer className="relative z-10 border-t-2 border-dashed border-[var(--ink)]/30 px-5 py-8 sm:px-8">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-4 sm:flex-row">
        <p className="font-hand2 text-lg text-[var(--ink-soft)]">
          © {new Date().getFullYear()} {profile.name} — hecho a mano con{' '}
          <span className="font-hand text-2xl text-red-marker">React</span>
        </p>
        <a
          href="#top"
          className="inline-flex items-center gap-2 border-2 border-[var(--ink)] bg-[var(--paper-2)] px-4 py-2 font-marker text-base text-[var(--ink)] transition-transform hover:scale-105"
        >
          Volver arriba <ArrowUp size={15} />
        </a>
      </div>
    </footer>
  )
}
