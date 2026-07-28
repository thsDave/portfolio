import type { ReactNode } from 'react'
import { Navbar } from '../components/Navbar'
import { Footer } from '../components/Footer'
import { FloatingWhatsApp } from '../components/FloatingWhatsApp'

export function MainLayout({ children }: { children: ReactNode }) {
  return (
    <div className="min-h-screen bg-white text-slate-700 dark:bg-slate-950 dark:text-slate-300">
      <a
        href="#contenido-principal"
        className="focus:bg-brand-600 sr-only focus:not-sr-only focus:absolute focus:top-2 focus:left-2 focus:z-50 focus:rounded-md focus:px-4 focus:py-2 focus:text-white"
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
