import { Mail, MessageCircle } from 'lucide-react'
import { Reveal } from '../components/Reveal'
import { SectionHeading } from '../components/SectionHeading'
import { SITE, whatsappUrl } from '../data/site'
import { GithubIcon, LinkedinIcon } from '../components/icons/BrandIcons'

export function Contact() {
  return (
    <section id="contacto" className="scroll-mt-16 bg-[#0d1117] py-20 text-[#f0f6fc] sm:py-24">
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
              className="bg-success shadow-success/30 inline-flex items-center gap-3 rounded-full px-8 py-4 text-lg font-semibold text-white shadow-lg transition-colors hover:brightness-110"
            >
              <MessageCircle size={22} aria-hidden="true" />
              Escríbeme por WhatsApp
            </a>
          </div>
        </Reveal>

        <Reveal delay={0.15}>
          <div className="mt-10 flex flex-wrap items-center justify-center gap-6 text-[#9198a1]">
            <a
              href={`mailto:${SITE.email}`}
              className="inline-flex items-center gap-2 hover:text-[#f0f6fc]"
            >
              <Mail size={18} aria-hidden="true" />
              {SITE.email}
            </a>
            <a
              href={SITE.linkedinUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 hover:text-[#f0f6fc]"
            >
              <LinkedinIcon size={18} />
              LinkedIn
            </a>
            <a
              href={SITE.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 hover:text-[#f0f6fc]"
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
