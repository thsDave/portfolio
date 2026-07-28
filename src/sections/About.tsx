import { Reveal } from '../components/Reveal'
import { SectionHeading } from '../components/SectionHeading'
import { SITE } from '../data/site'

const HIGHLIGHTS = [
  'Más de una década combinando desarrollo web, soporte técnico y administración de sistemas.',
  'Experiencia trabajando con equipos multidisciplinarios en organizaciones sociales de alcance regional.',
  'Evolución desde la programación hacia la coordinación tecnológica, la seguridad de la información y la consultoría.',
  'Capacidad para traducir necesidades organizacionales en soluciones técnicas concretas.',
]

export function About() {
  return (
    <section id="sobre-mi" className="scroll-mt-16 py-20 sm:py-24">
      <div className="section-container grid gap-12 lg:grid-cols-[1.3fr_1fr]">
        <Reveal>
          <SectionHeading eyebrow="Sobre mí" title="Tecnología aplicada a procesos y personas" />
          <div className="text-text-secondary mt-6 space-y-4 text-lg">
            <p>
              Soy analista y desarrollador de aplicaciones web con más de diez años de trayectoria
              en el sector de organizaciones sociales, donde he combinado el desarrollo frontend y
              backend con soporte técnico, administración de servidores y gestión de
              infraestructura.
            </p>
            <p>
              He brindado soporte y desarrollado soluciones para equipos y usuarios de distintos
              países, lo que me ha dado una visión práctica de cómo la tecnología debe adaptarse a
              procesos operativos reales. Con el tiempo, esa experiencia me llevó a asumir la
              coordinación de IT, ampliando mi enfoque hacia la seguridad de la información, la
              continuidad operativa y la mejora continua de procesos.
            </p>
            <p>
              Actualmente me desempeño como consultor de desarrollo de aplicaciones y soluciones
              tecnológicas, integrando desarrollo de software, infraestructura, seguridad de la
              información y gestión de servicios de IT para atender necesidades organizacionales.
            </p>
          </div>
        </Reveal>

        <Reveal delay={0.1}>
          <div className="border-border bg-background-secondary rounded-2xl border p-6">
            <ul className="space-y-4">
              {HIGHLIGHTS.map((point) => (
                <li key={point} className="text-text-primary flex gap-3">
                  <span
                    className="bg-accent-primary dark:bg-accent-hover mt-2 h-1.5 w-1.5 flex-shrink-0 rounded-full"
                    aria-hidden="true"
                  />
                  <span>{point}</span>
                </li>
              ))}
            </ul>
            <div className="border-border text-text-secondary mt-6 border-t pt-4 text-sm">
              <p>{SITE.location}</p>
              <p>{SITE.email}</p>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  )
}
