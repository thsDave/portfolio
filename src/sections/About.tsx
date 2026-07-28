import { Reveal } from '../components/Reveal'
import { SectionHeading } from '../components/SectionHeading'
import { SITE } from '../data/site'

const HIGHLIGHTS = [
  'Más de una década combinando desarrollo web, soporte técnico y administración de sistemas.',
  'Experiencia trabajando con equipos multidisciplinarios en organizaciones sociales de alcance regional.',
  'Evolución desde la programación hacia la coordinación tecnológica y la seguridad de la información.',
  'Capacidad para traducir necesidades organizacionales en soluciones técnicas concretas.',
]

export function About() {
  return (
    <section id="sobre-mi" className="scroll-mt-16 py-20 sm:py-24">
      <div className="section-container grid gap-12 lg:grid-cols-[1.3fr_1fr]">
        <Reveal>
          <SectionHeading eyebrow="Sobre mí" title="Tecnología aplicada a procesos y personas" />
          <div className="mt-6 space-y-4 text-lg text-slate-600 dark:text-slate-400">
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
              Hoy combino ambos mundos: sigo desarrollando aplicaciones web y, a la vez, coordino
              los servicios tecnológicos de la organización donde trabajo, gestionando accesos,
              infraestructura, proveedores y al equipo de soporte.
            </p>
          </div>
        </Reveal>

        <Reveal delay={0.1}>
          <div className="rounded-2xl border border-slate-200 bg-slate-50 p-6 dark:border-slate-800 dark:bg-slate-900">
            <ul className="space-y-4">
              {HIGHLIGHTS.map((point) => (
                <li key={point} className="flex gap-3 text-slate-700 dark:text-slate-300">
                  <span
                    className="bg-brand-600 dark:bg-accent-400 mt-2 h-1.5 w-1.5 flex-shrink-0 rounded-full"
                    aria-hidden="true"
                  />
                  <span>{point}</span>
                </li>
              ))}
            </ul>
            <div className="mt-6 border-t border-slate-200 pt-4 text-sm text-slate-600 dark:border-slate-800 dark:text-slate-400">
              <p>{SITE.location}</p>
              <p>{SITE.email}</p>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  )
}
