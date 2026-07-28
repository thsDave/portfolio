import { HelmetProvider } from 'react-helmet-async'
import { MainLayout } from './layouts/MainLayout'
import { PersonSchema } from './components/PersonSchema'
import { Hero } from './sections/Hero'
import { About } from './sections/About'
import { Skills } from './sections/Skills'
import { Experience } from './sections/Experience'
import { Projects } from './sections/Projects'
import { Education } from './sections/Education'
import { ValueProposition } from './sections/ValueProposition'
import { Contact } from './sections/Contact'

function App() {
  return (
    <HelmetProvider>
      <PersonSchema />
      <MainLayout>
        <Hero />
        <About />
        <Skills />
        <Experience />
        <Projects />
        <Education />
        <ValueProposition />
        <Contact />
      </MainLayout>
    </HelmetProvider>
  )
}

export default App
