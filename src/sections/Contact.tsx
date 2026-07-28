import { Mail, MessageCircle } from 'lucide-react'
import { Reveal } from '../components/Reveal'
import { SectionHeading } from '../components/SectionHeading'
import { SITE, whatsappUrl } from '../data/site'
import { GithubIcon, LinkedinIcon } from '../components/icons/BrandIcons'

export function Contact() {
  return (
    <section
      id="contacto"
      className="scroll-mt-16 bg-slate-900 py-20 text-white sm:py-24 dark:bg-slate-950"
    >
      <div className="section-container">
        <Reveal>
          <SectionHeading
            eyebrow="Contacto"
            title="¿Conversamos sobre tu próximo proyecto?"
            description="¿Tienes un proyecto o necesitas fortalecer la gestión tecnológica de tu organización? Conversemos sobre cómo puedo ayudarte."
            align="center"
          />
        </Reveal>

        <Reveal delay={0.1}>
          <div className="mt-10 flex justify-center">
            <a
              href={whatsappUrl()}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 rounded-full bg-green-600 px-8 py-4 text-lg font-semibold text-white shadow-lg shadow-green-600/30 transition-colors hover:bg-green-500"
            >
              <MessageCircle size={22} aria-hidden="true" />
              Escríbeme por WhatsApp
            </a>
          </div>
        </Reveal>

        <Reveal delay={0.15}>
          <div className="mt-10 flex flex-wrap items-center justify-center gap-6 text-slate-300">
            <a
              href={`mailto:${SITE.email}`}
              className="inline-flex items-center gap-2 hover:text-white"
            >
              <Mail size={18} aria-hidden="true" />
              {SITE.email}
            </a>
            <a
              href={SITE.linkedinUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 hover:text-white"
            >
              <LinkedinIcon size={18} />
              LinkedIn
            </a>
            <a
              href={SITE.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 hover:text-white"
            >
              <GithubIcon size={18} />
              GitHub
            </a>
          </div>
        </Reveal>
      </div>
    </section>
  )
}
