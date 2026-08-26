import { ArrowUp } from 'lucide-react'
import { profile } from '../data'

export default function Footer() {
  return (
    <footer className="relative z-10 border-t border-[var(--border)]">
      <div className="mx-auto flex max-w-5xl flex-col items-start justify-between gap-4 px-6 py-8 sm:flex-row sm:items-center">
        <p className="text-sm text-[var(--text-muted)]">
          © {new Date().getFullYear()} {profile.name}
        </p>
        <a
          href="#top"
          className="link-underline group inline-flex items-center gap-2 text-sm text-[var(--text-secondary)]"
        >
          Volver arriba
          <ArrowUp
            size={14}
            className="transition-transform duration-300 group-hover:-translate-y-0.5"
          />
        </a>
      </div>
    </footer>
  )
}
