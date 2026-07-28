import { ArrowRight } from 'lucide-react'
import { motion, useReducedMotion } from 'motion/react'
import { SITE, whatsappUrl } from '../data/site'
import profilePhoto from '../assets/images/main_photo.webp'
import { GithubIcon, LinkedinIcon } from '../components/icons/BrandIcons'

export function Hero() {
  const prefersReducedMotion = useReducedMotion()

  return (
    <section
      id="inicio"
      className="from-brand-50/60 scroll-mt-16 border-b border-slate-200 bg-gradient-to-b to-white dark:border-slate-800 dark:from-slate-900 dark:to-slate-950"
    >
      <div className="section-container grid items-center gap-12 py-20 sm:py-24 lg:grid-cols-[1.1fr_0.9fr] lg:py-28">
        <motion.div
          initial={prefersReducedMotion ? undefined : { opacity: 0, y: 20 }}
          animate={prefersReducedMotion ? undefined : { opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: 'easeOut' }}
        >
          <p className="text-brand-600 dark:text-accent-400 text-sm font-semibold tracking-wide uppercase">
            {SITE.location}
          </p>
          <h1 className="mt-3 text-4xl font-bold sm:text-5xl lg:text-6xl">{SITE.name}</h1>
          <p className="text-gradient mt-4 text-xl font-semibold sm:text-2xl">{SITE.role}</p>
          <p className="mt-6 max-w-xl text-lg text-slate-600 dark:text-slate-400">
            Diseño, desarrollo y gestiono soluciones tecnológicas que conectan software,
            infraestructura y seguridad para mejorar procesos organizacionales, desde el código
            hasta la operación del día a día.
          </p>

          <div className="mt-8 flex flex-wrap items-center gap-4">
            <a
              href="#proyectos"
              className="bg-brand-600 shadow-brand-600/25 hover:bg-brand-700 inline-flex items-center gap-2 rounded-full px-6 py-3 text-sm font-semibold text-white shadow-lg transition-colors"
            >
              Ver proyectos
              <ArrowRight size={16} aria-hidden="true" />
            </a>
            <a
              href={whatsappUrl()}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-full border border-slate-300 px-6 py-3 text-sm font-semibold text-slate-700 transition-colors hover:bg-slate-100 dark:border-slate-700 dark:text-slate-200 dark:hover:bg-slate-800"
            >
              Contactar por WhatsApp
            </a>
          </div>

          <div className="mt-8 flex items-center gap-4">
            <a
              href={SITE.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Perfil de GitHub"
              className="flex h-11 w-11 items-center justify-center rounded-full border border-slate-200 text-slate-600 transition-colors hover:bg-slate-100 dark:border-slate-700 dark:text-slate-300 dark:hover:bg-slate-800"
            >
              <GithubIcon size={20} />
            </a>
            <a
              href={SITE.linkedinUrl}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Perfil de LinkedIn"
              className="flex h-11 w-11 items-center justify-center rounded-full border border-slate-200 text-slate-600 transition-colors hover:bg-slate-100 dark:border-slate-700 dark:text-slate-300 dark:hover:bg-slate-800"
            >
              <LinkedinIcon size={20} />
            </a>
          </div>
        </motion.div>

        <motion.div
          className="relative mx-auto w-full max-w-sm"
          initial={prefersReducedMotion ? undefined : { opacity: 0, scale: 0.95 }}
          animate={prefersReducedMotion ? undefined : { opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, ease: 'easeOut', delay: 0.15 }}
        >
          <div className="from-brand-500/20 to-accent-400/20 absolute -inset-4 -z-10 rounded-3xl bg-gradient-to-br blur-2xl" />
          <img
            src={profilePhoto}
            alt={`Foto de perfil de ${SITE.shortName}`}
            width={400}
            height={400}
            className="aspect-square w-full rounded-3xl border border-slate-200 object-cover shadow-xl dark:border-slate-800"
          />
        </motion.div>
      </div>
    </section>
  )
}
