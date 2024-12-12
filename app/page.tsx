import Header from './components/Header'
import Hero from './components/Hero'
import AboutUs from './components/AboutUs'
import Skills from './components/Skills'
import Projects from './components/Project'
import Achievements from './components/Achievements'
import Contact from './components/Contact'
import Footer from './components/Footer'

export default function Home() {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="container mx-auto px-4 py-8">
        <Hero />
        <AboutUs />
        <Skills />
        <Projects />
        <Achievements />
        <Contact />
      </main>
      <Footer />
    </div>
  )
}

