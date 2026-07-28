import { SITE, SOCIAL_LINKS } from '../data/site'
import { SocialIcon } from './SocialIcon'

export function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className="border-t border-slate-200 bg-slate-50 dark:border-slate-800 dark:bg-slate-900">
      <div className="section-container flex flex-col items-center gap-6 py-10 text-center">
        <div>
          <p className="font-heading text-lg font-bold text-slate-900 dark:text-white">
            {SITE.name}
          </p>
          <p className="text-sm text-slate-600 dark:text-slate-400">{SITE.role}</p>
        </div>

        <div className="flex items-center gap-3">
          {SOCIAL_LINKS.map((social) => (
            <a
              key={social.label}
              href={social.url}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={social.label}
              className="flex h-10 w-10 items-center justify-center rounded-full border border-slate-200 text-slate-600 transition-colors hover:bg-white dark:border-slate-700 dark:text-slate-300 dark:hover:bg-slate-800"
            >
              <SocialIcon icon={social.icon} />
            </a>
          ))}
        </div>

        <div className="flex flex-col items-center gap-2 text-sm text-slate-600 dark:text-slate-400">
          <p>
            © {year} {SITE.name}. Todos los derechos reservados.
          </p>
          <a href="#inicio" className="text-brand-600 dark:text-accent-400 font-medium">
            Volver al inicio
          </a>
        </div>
      </div>
    </footer>
  )
}
