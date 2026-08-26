import Nav from './components/Nav'
import Hero from './components/Hero'
import Projects from './components/Projects'
import TechStack from './components/TechStack'
import Education from './components/Education'
import About from './components/About'
import Contact from './components/Contact'
import Footer from './components/Footer'

export default function App() {
  return (
    <>
      <Nav />

      <main className="relative z-10">
        <Hero />
        <Projects />
        <TechStack />
        <Education />
        <About />
        <Contact />
      </main>

      <Footer />
    </>
  )
}
