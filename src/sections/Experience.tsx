import { Reveal } from '../components/Reveal'
import { SectionHeading } from '../components/SectionHeading'
import { Badge } from '../components/Badge'
import { EXPERIENCE } from '../data/experience'

export function Experience() {
  return (
    <section id="experiencia" className="scroll-mt-16 py-20 sm:py-24">
      <div className="section-container">
        <SectionHeading
          eyebrow="Trayectoria"
          title="Experiencia profesional"
          description="Una progresión desde el soporte y el desarrollo web hacia la coordinación tecnológica."
        />

        <ol className="mt-12 space-y-10 border-l border-slate-200 pl-6 sm:pl-8 dark:border-slate-800">
          {EXPERIENCE.map((item, index) => (
            <Reveal key={item.id} delay={Math.min(index * 0.05, 0.3)}>
              <li className="relative">
                <span
                  className="bg-brand-600 dark:bg-accent-400 absolute top-1.5 -left-[1.72rem] h-3 w-3 rounded-full border-2 border-white sm:-left-[2.22rem] dark:border-slate-950"
                  aria-hidden="true"
                />
                <div className="flex flex-wrap items-center gap-2">
                  <h3 className="text-lg font-bold">{item.role}</h3>
                  {item.current && <Badge tone="brand">Actual</Badge>}
                </div>
                <p className="text-sm font-medium text-slate-600 dark:text-slate-400">
                  {item.organization} · {item.period}
                </p>
                <ul className="mt-3 space-y-1.5 text-slate-600 dark:text-slate-400">
                  {item.points.map((point) => (
                    <li key={point} className="flex gap-2">
                      <span
                        className="mt-2 h-1 w-1 flex-shrink-0 rounded-full bg-slate-400 dark:bg-slate-600"
                        aria-hidden="true"
                      />
                      <span>{point}</span>
                    </li>
                  ))}
                </ul>
              </li>
            </Reveal>
          ))}
        </ol>
      </div>
    </section>
  )
}
