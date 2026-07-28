import { SITE, SOCIAL_LINKS } from '../data/site'
import { SocialIcon } from './SocialIcon'

export function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className="border-border bg-background-secondary border-t">
      <div className="section-container flex flex-col items-center gap-6 py-10 text-center">
        <div>
          <p className="font-heading text-text-primary text-lg font-bold">{SITE.name}</p>
          <p className="text-text-secondary text-sm">{SITE.role}</p>
        </div>

        <div className="flex items-center gap-3">
          {SOCIAL_LINKS.map((social) => (
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
        </div>

        <div className="text-text-secondary flex flex-col items-center gap-2 text-sm">
          <p>
            © {year} {SITE.name}. Todos los derechos reservados.
          </p>
          <a href="#inicio" className="text-accent-primary dark:text-accent-hover font-medium">
            Volver al inicio
          </a>
        </div>
      </div>
    </footer>
  )
}
