import { useEffect, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Menu, X } from 'lucide-react'

const links = [
  { label: 'Sobre mí', href: '#about' },
  { label: 'Stack', href: '#stack' },
  { label: 'Proyectos', href: '#projects' },
  { label: 'Formación', href: '#education' },
  { label: 'Contacto', href: '#contact' },
]

export default function Nav() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24)
    onScroll()
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <motion.header
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
      className={`fixed inset-x-0 top-0 z-50 transition-colors duration-300 ${
        scrolled ? 'bg-[#f3ecdc]/85 backdrop-blur-sm' : ''
      }`}
    >
      <div className="mx-auto flex max-w-6xl items-center justify-between px-5 py-3 sm:px-8">
        <a href="#top" className="group flex items-center gap-2.5">
          <img
            src="/favicon.svg"
            alt="TR"
            className="h-10 w-10 transition-transform duration-300 group-hover:-rotate-6"
          />
          <span className="font-marker text-2xl text-red-marker sm:text-3xl">Tomás Rosa</span>
        </a>

        <nav className="hidden items-center gap-6 md:flex">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="group relative font-marker text-lg text-red-marker"
            >
              {l.label}
              <span className="absolute -bottom-1 left-0 h-[3px] w-0 rounded bg-[var(--orange)] transition-all duration-300 group-hover:w-full" />
            </a>
          ))}
        </nav>

        <button
          className="grid h-11 w-11 place-items-center rounded-full border-2 border-dashed border-[var(--ink)] text-[var(--ink)] md:hidden"
          onClick={() => setOpen((v) => !v)}
          aria-label="Menú"
        >
          {open ? <X size={20} /> : <Menu size={20} />}
        </button>
      </div>

      <AnimatePresence>
        {open && (
          <motion.nav
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            className="paper mx-4 mt-1 flex flex-col gap-1 rounded-sm p-3 md:hidden"
          >
            {links.map((l) => (
              <a
                key={l.href}
                href={l.href}
                onClick={() => setOpen(false)}
                className="font-marker rounded px-3 py-3 text-lg text-red-marker hover:bg-black/5"
              >
                {l.label}
              </a>
            ))}
          </motion.nav>
        )}
      </AnimatePresence>
    </motion.header>
  )
}
