import { ArrowUp } from 'lucide-react'
import { profile } from '../data'

export default function Footer() {
  return (
    <footer className="relative z-10 border-t border-[var(--rule)]">
      <div className="mx-auto flex max-w-5xl flex-col items-start justify-between gap-4 px-6 py-8 sm:flex-row sm:items-center sm:px-8">
        <p className="label">
          © {new Date().getFullYear()} {profile.name}
        </p>
        <a
          href="#top"
          className="group inline-flex items-center gap-2 text-sm text-[var(--ink-muted)] transition-colors hover:text-[var(--ink)]"
        >
          <span className="link-underline">Volver arriba</span>
          <ArrowUp
            size={14}
            className="transition-transform duration-300 group-hover:-translate-y-0.5"
          />
        </a>
      </div>
    </footer>
  )
}
