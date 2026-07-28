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
      className="border-border from-background-secondary/60 to-background-primary scroll-mt-16 border-b bg-gradient-to-b"
    >
      <div className="section-container grid items-center gap-12 py-20 sm:py-24 lg:grid-cols-[1.1fr_0.9fr] lg:py-28">
        <motion.div
          initial={prefersReducedMotion ? undefined : { opacity: 0, y: 20 }}
          animate={prefersReducedMotion ? undefined : { opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: 'easeOut' }}
        >
          <p className="text-accent-primary dark:text-accent-hover text-sm font-semibold tracking-wide uppercase">
            {SITE.location}
          </p>
          <h1 className="mt-3 text-4xl font-bold sm:text-5xl lg:text-6xl">{SITE.name}</h1>
          <p className="text-gradient mt-4 text-xl font-semibold sm:text-2xl">{SITE.role}</p>
          <p className="text-text-secondary mt-6 max-w-xl text-lg">
            Integro desarrollo de software, infraestructura, seguridad de la información y gestión
            tecnológica para atender necesidades organizacionales, desde el código hasta la
            operación del día a día.
          </p>

          <div className="mt-8 flex flex-wrap items-center gap-4">
            <a
              href="#proyectos"
              className="bg-accent-primary shadow-accent-primary/25 dark:hover:bg-accent-hover inline-flex items-center gap-2 rounded-full px-6 py-3 text-sm font-semibold text-white shadow-lg transition-colors hover:brightness-90 dark:hover:brightness-100"
            >
              Ver proyectos
              <ArrowRight size={16} aria-hidden="true" />
            </a>
            <a
              href={whatsappUrl()}
              target="_blank"
              rel="noopener noreferrer"
              className="border-border text-text-primary hover:bg-surface-hover inline-flex items-center gap-2 rounded-full border px-6 py-3 text-sm font-semibold transition-colors"
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
              className="border-border text-text-secondary hover:bg-surface-hover flex h-11 w-11 items-center justify-center rounded-full border transition-colors"
            >
              <GithubIcon size={20} />
            </a>
            <a
              href={SITE.linkedinUrl}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Perfil de LinkedIn"
              className="border-border text-text-secondary hover:bg-surface-hover flex h-11 w-11 items-center justify-center rounded-full border transition-colors"
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
          <div className="from-accent-primary/20 to-technology-go/20 absolute -inset-4 -z-10 rounded-3xl bg-gradient-to-br blur-2xl" />
          <img
            src={profilePhoto}
            alt={`Foto de perfil de ${SITE.shortName}`}
            width={400}
            height={400}
            className="border-border aspect-square w-full rounded-3xl border object-cover shadow-xl"
          />
        </motion.div>
      </div>
    </section>
  )
}
