import { motion, useScroll, useSpring } from 'framer-motion'
import Cursor from './components/Cursor'
import Nav from './components/Nav'
import Hero from './components/Hero'
import About from './components/About'
import Projects from './components/Projects'
import TechStack from './components/TechStack'
import Education from './components/Education'
import Contact from './components/Contact'
import Footer from './components/Footer'

export default function App() {
  const { scrollYProgress } = useScroll()
  const scaleX = useSpring(scrollYProgress, { stiffness: 120, damping: 30, mass: 0.3 })

  return (
    <>
      <Cursor />

      {/* Barra de progreso de scroll */}
      <motion.div
        style={{ scaleX }}
        className="fixed inset-x-0 top-0 z-[60] h-px origin-left bg-[var(--accent)]"
      />

      <Nav />

      <main className="relative z-10">
        <Hero />
        <About />
        <Projects />
        <TechStack />
        <Education />
        <Contact />
      </main>

      <Footer />
    </>
  )
}
