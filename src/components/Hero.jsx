import { motion, useScroll, useTransform } from 'framer-motion'
import { useRef, useState } from 'react'
import { Github, Linkedin, Mail, MapPin, ArrowDown, RotateCw } from 'lucide-react'
import { profile } from '../data'
import { Star, Barcode, Duck } from './Doodles'

const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.1, delayChildren: 0.1 } },
}
const item = {
  hidden: { opacity: 0, y: 24, rotate: -1 },
  show: { opacity: 1, y: 0, rotate: 0, transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] } },
}

export default function Hero() {
  const ref = useRef(null)
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start start', 'end start'] })
  const yCard = useTransform(scrollYProgress, [0, 1], [0, 80])

  return (
    <section
      id="top"
      ref={ref}
      className="relative flex min-h-[100svh] items-center overflow-hidden px-5 pt-28 sm:px-8"
    >
      <div className="relative z-10 mx-auto grid w-full max-w-6xl items-center gap-10 lg:grid-cols-[1.15fr_0.85fr]">
        {/* ── Texto ── */}
        <motion.div variants={container} initial="hidden" animate="show">
          <motion.div variants={item}>
            <span className="sticky inline-block -rotate-2 px-4 py-2 font-hand2 text-base text-[var(--ink)] shadow">
              <span className="mr-2 inline-block h-2.5 w-2.5 rounded-full bg-emerald-600 align-middle" />
              Disponible para propuestas y pasantías
            </span>
          </motion.div>

          <motion.p variants={item} className="mt-7 font-hand text-3xl text-red-marker">
            ¡Hola! soy
          </motion.p>

          <motion.h1
            variants={item}
            className="font-marker text-5xl leading-[1] text-red-marker sm:text-6xl lg:text-7xl"
          >
            Tomás Rosa
          </motion.h1>

          <motion.p variants={item} className="mt-5 max-w-md font-hand text-2xl text-[var(--ink-soft)]">
            Estudiante de Ingeniería en Sistemas. Armo software full-stack, prolijo y con
            intención.
          </motion.p>

          <motion.div
            variants={item}
            className="mt-5 flex flex-wrap items-center gap-x-4 gap-y-1 font-hand2 text-[var(--ink-soft)]"
          >
            <span className="inline-flex items-center gap-1.5">
              <MapPin size={17} className="text-red-marker" /> {profile.location}
            </span>
            <span>· UTN FRVM · 4° año</span>
            <span>· Inglés avanzado</span>
          </motion.div>

          <motion.div variants={item} className="mt-8 flex flex-wrap items-center gap-3">
            <a
              href="#projects"
              className="kraft -rotate-1 px-6 py-3 font-marker text-lg text-[var(--ink)] transition-transform hover:rotate-0 hover:scale-105"
            >
              Ver proyectos →
            </a>
            <a
              href={`mailto:${profile.email}`}
              className="inline-flex items-center gap-2 border-2 border-[var(--ink)] bg-[var(--paper-2)] px-5 py-3 font-marker text-lg text-[var(--ink)] transition-transform hover:rotate-1 hover:scale-105"
            >
              <Mail size={18} /> Contactame
            </a>
            <div className="ml-1 flex items-center gap-2">
              <IconLink href={profile.github} label="GitHub" rot="-4deg">
                <Github size={20} />
              </IconLink>
              <IconLink href={profile.linkedin} label="LinkedIn" rot="4deg">
                <Linkedin size={20} />
              </IconLink>
            </div>
          </motion.div>
        </motion.div>

        {/* ── Carnet de dev (se da vuelta al pasar el mouse) ── */}
        <motion.div style={{ y: yCard }} className="relative mx-auto flex w-full max-w-sm justify-center">
          <DevCard />

          {/* accesorios garabateados */}
          <Star className="absolute -left-2 top-2 h-8 w-8 rotate-12" />
          <span className="absolute -bottom-3 left-2 -rotate-3 font-hand text-xl text-[var(--ink-soft)]">
            ¡ese soy yo!
          </span>
        </motion.div>
      </div>

      <motion.a
        href="#about"
        className="absolute bottom-6 left-1/2 z-10 hidden -translate-x-1/2 font-hand text-xl text-[var(--ink-soft)] lg:block"
        animate={{ y: [0, 8, 0] }}
        transition={{ duration: 1.8, repeat: Infinity, ease: 'easeInOut' }}
      >
        <span className="flex flex-col items-center">
          seguí leyendo
          <ArrowDown size={20} />
        </span>
      </motion.a>
    </section>
  )
}

function IconLink({ href, label, children, rot }) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noreferrer"
      aria-label={label}
      style={{ transform: `rotate(${rot})` }}
      className="grid h-11 w-11 place-items-center rounded-full border-2 border-[var(--ink)] bg-[var(--paper-2)] text-[var(--ink)] transition-transform hover:scale-110 hover:rotate-0"
    >
      {children}
    </a>
  )
}

function DevCard() {
  const [flipped, setFlipped] = useState(false)

  return (
    <motion.div
      initial={{ opacity: 0, y: -30, rotate: -4 }}
      animate={{ opacity: 1, y: 0, rotate: -2 }}
      transition={{ delay: 0.35, type: 'spring', stiffness: 110, damping: 13 }}
      className={`flip h-[420px] w-[300px] ${flipped ? 'is-flipped' : ''}`}
      onClick={() => setFlipped((v) => !v)}
      data-cursor
      role="button"
      tabIndex={0}
      onKeyDown={(e) => e.key === 'Enter' && setFlipped((v) => !v)}
      aria-label="Carnet de desarrollador (girá para ver el dorso)"
    >
      <span className="tape z-20" style={{ top: -14, left: '50%', marginLeft: -46, transform: 'rotate(-4deg)' }} />

      <div className="flip-inner h-full w-full">
        {/* ── FRENTE ── */}
        <div className="flip-face paper absolute inset-0 flex flex-col rounded-sm p-5">
          <div className="flex items-center justify-between border-b-2 border-dashed border-[var(--ink)]/30 pb-2">
            <span className="font-marker text-lg text-red-marker">DEV · ID</span>
            <span className="font-type text-xs text-[var(--ink-soft)]">Nº 2023-TR</span>
          </div>

          <div className="mt-4 flex gap-4">
            {/* foto = monograma */}
            <div className="kraft grid h-28 w-24 shrink-0 place-items-center rounded-sm">
              <span className="font-marker text-4xl text-[var(--ink)]">TR</span>
            </div>
            <div className="flex flex-col justify-center gap-2">
              <Field label="Nombre" value="Tomás Rosa" />
              <Field label="Rol" value="Dev full-stack" />
              <Field label="Base" value="Villa María, AR" />
            </div>
          </div>

          <div className="mt-4 space-y-1.5 font-hand2 text-[var(--ink-soft)]">
            <p className="flex justify-between">
              <span className="font-type text-xs uppercase">Estado</span>
              <span className="text-[var(--ink)]">Disponible</span>
            </p>
            <p className="flex justify-between">
              <span className="font-type text-xs uppercase">Inglés</span>
              <span className="text-[var(--ink)]">Avanzado</span>
            </p>
          </div>

          {/* sello + barcode */}
          <span className="stamp absolute bottom-24 right-4 rotate-12 text-xs">VÁLIDO</span>
          <div className="mt-auto">
            <Barcode className="h-7 w-full" />
            <p className="mt-2 flex items-center justify-center gap-1.5 font-hand text-lg text-[var(--ink-soft)]">
              <RotateCw size={15} /> girá la tarjeta
            </p>
          </div>
        </div>

        {/* ── DORSO ── */}
        <div className="flip-back flip-face kraft flex flex-col items-center justify-center gap-3 rounded-sm p-7 text-center">
          <Duck className="h-32 w-32" />
          <p className="font-marker text-3xl text-red-marker">Próximamente</p>
          <p className="font-hand text-2xl text-[var(--ink-soft)]">sé paciente…</p>
        </div>
      </div>
    </motion.div>
  )
}

function Field({ label, value }) {
  return (
    <div>
      <p className="font-type text-[10px] uppercase tracking-wide text-[var(--ink-soft)]">{label}</p>
      <p className="font-hand2 text-lg leading-tight text-[var(--ink)]">{value}</p>
    </div>
  )
}
