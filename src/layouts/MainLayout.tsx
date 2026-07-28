import type { ReactNode } from 'react'
import { Navbar } from '../components/Navbar'
import { Footer } from '../components/Footer'
import { FloatingWhatsApp } from '../components/FloatingWhatsApp'

export function MainLayout({ children }: { children: ReactNode }) {
  return (
    <div className="bg-background-primary text-text-primary min-h-screen">
      <a
        href="#contenido-principal"
        className="focus:bg-accent-primary sr-only focus:not-sr-only focus:absolute focus:top-2 focus:left-2 focus:z-50 focus:rounded-md focus:px-4 focus:py-2 focus:text-white"
      >
        Saltar al contenido principal
      </a>
      <Navbar />
      <main id="contenido-principal">{children}</main>
      <Footer />
      <FloatingWhatsApp />
    </div>
  )
}
