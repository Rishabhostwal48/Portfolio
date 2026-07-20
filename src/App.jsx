import Navbar from './components/layout/Navbar'
import Footer from './components/layout/Footer'
import Hero from './components/sections/Hero'
import Projects from './components/sections/Projects'
import CurrentlyBuilding from './components/sections/CurrentlyBuilding'
import TechStack from './components/sections/TechStack'
import About from './components/sections/About'
import Contact from './components/sections/Contact'
import FloatingResumeButton from './components/ui/FloatingResumeButton'

export default function App() {
  return (
    <div className="noise relative min-h-screen bg-bg-primary">
      <Navbar />
      <main>
        <Hero />
        <Projects />
        <CurrentlyBuilding />
        <TechStack />
        <About />
        <Contact />
      </main>
      <Footer />
      <FloatingResumeButton />
    </div>
  )
}
