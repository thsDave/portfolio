import { useEffect, useRef, useState } from 'react'
import { Download, Menu, X } from 'lucide-react'
import { NAV_ITEMS, SITE, SOCIAL_LINKS } from '../data/site'
import { useActiveSection } from '../hooks/useActiveSection'
import { ThemeToggle } from './ThemeToggle'
import { SocialIcon } from './SocialIcon'

const SECTION_IDS = NAV_ITEMS.map((item) => item.href.replace('#', ''))

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const activeId = useActiveSection(SECTION_IDS)
  const menuButtonRef = useRef<HTMLButtonElement>(null)

  useEffect(() => {
    if (!isOpen) return
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        setIsOpen(false)
        menuButtonRef.current?.focus()
      }
    }
    document.addEventListener('keydown', onKeyDown)
    return () => document.removeEventListener('keydown', onKeyDown)
  }, [isOpen])

  useEffect(() => {
    document.body.style.overflow = isOpen ? 'hidden' : ''
    return () => {
      document.body.style.overflow = ''
    }
  }, [isOpen])

  return (
    <header className="bg-background-primary/80 border-border/80 sticky top-0 z-50 border-b backdrop-blur-sm">
      <nav
        className="section-container flex h-16 items-center justify-between"
        aria-label="Navegación principal"
      >
        <a href="#inicio" className="font-heading text-text-primary text-lg font-bold">
          {SITE.shortName}
        </a>

        <ul className="hidden items-center gap-1 lg:flex">
          {NAV_ITEMS.map((item) => {
            const isActive = activeId === item.href.replace('#', '')
            return (
              <li key={item.href}>
                <a
                  href={item.href}
                  className={`rounded-md px-3 py-2 text-sm font-medium transition-colors ${
                    isActive
                      ? 'text-accent-primary dark:text-accent-hover'
                      : 'text-text-secondary hover:text-text-primary'
                  }`}
                  aria-current={isActive ? 'true' : undefined}
                >
                  {item.label}
                </a>
              </li>
            )
          })}
        </ul>

        <div className="hidden items-center gap-3 lg:flex">
          {SOCIAL_LINKS.slice(0, 2).map((social) => (
            <a
              key={social.label}
              href={social.url}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={social.label}
              className="border-border text-text-secondary hover:bg-surface-hover flex h-10 w-10 items-center justify-center rounded-full border transition-colors"
            >
              <SocialIcon icon={social.icon} />
            </a>
          ))}
          <a
            href={SITE.cvUrl}
            download
            className="border-border text-text-secondary hover:bg-surface-hover inline-flex items-center gap-2 rounded-full border px-4 py-2 text-sm font-medium transition-colors"
          >
            <Download size={16} aria-hidden="true" />
            CV
          </a>
          <ThemeToggle />
        </div>

        <div className="flex items-center gap-2 lg:hidden">
          <ThemeToggle />
          <button
            ref={menuButtonRef}
            type="button"
            onClick={() => setIsOpen((open) => !open)}
            aria-expanded={isOpen}
            aria-controls="mobile-menu"
            aria-label={isOpen ? 'Cerrar menú' : 'Abrir menú'}
            className="border-border text-text-primary flex h-10 w-10 items-center justify-center rounded-full border"
          >
            {isOpen ? <X size={20} aria-hidden="true" /> : <Menu size={20} aria-hidden="true" />}
          </button>
        </div>
      </nav>

      {isOpen && (
        <div
          id="mobile-menu"
          className="border-border bg-background-primary h-[calc(100svh-4rem)] overflow-y-auto border-t px-5 pt-2 pb-6 lg:hidden"
        >
          <ul className="flex flex-col gap-1">
            {NAV_ITEMS.map((item) => (
              <li key={item.href}>
                <a
                  href={item.href}
                  onClick={() => setIsOpen(false)}
                  className="text-text-primary hover:bg-surface-hover block rounded-md px-3 py-3 text-base font-medium"
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
          <a
            href={SITE.cvUrl}
            download
            className="border-border text-text-primary mt-3 inline-flex items-center gap-2 rounded-full border px-4 py-2.5 text-sm font-medium"
          >
            <Download size={16} aria-hidden="true" />
            Descargar CV
          </a>
          <div className="mt-4 flex items-center gap-3">
            {SOCIAL_LINKS.map((social) => (
              <a
                key={social.label}
                href={social.url}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={social.label}
                className="border-border text-text-secondary flex h-11 w-11 items-center justify-center rounded-full border"
              >
                <SocialIcon icon={social.icon} />
              </a>
            ))}
          </div>
        </div>
      )}
    </header>
  )
}
