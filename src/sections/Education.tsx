import { GraduationCap } from 'lucide-react'
import { Reveal } from '../components/Reveal'
import { SectionHeading } from '../components/SectionHeading'
import { Badge } from '../components/Badge'
import { EDUCATION, TRAINING } from '../data/education'

export function Education() {
  return (
    <section id="formacion" className="bg-background-secondary scroll-mt-16 py-20 sm:py-24">
      <div className="section-container grid gap-12 lg:grid-cols-2">
        <Reveal>
          <SectionHeading eyebrow="Formación" title="Formación académica" />
          <div className="mt-8 space-y-6">
            {EDUCATION.map((item) => (
              <div key={item.id} className="border-border bg-surface rounded-2xl border p-6">
                <div className="flex items-start gap-3">
                  <GraduationCap
                    size={22}
                    className="text-accent-primary dark:text-accent-hover mt-1 flex-shrink-0"
                    aria-hidden="true"
                  />
                  <div>
                    <h3 className="font-bold">{item.degree}</h3>
                    <p className="text-text-secondary text-sm font-medium">
                      {item.institution} · {item.period}
                    </p>
                  </div>
                </div>
                <ul className="text-text-secondary mt-3 space-y-1.5 pl-9 text-sm">
                  {item.points.map((point) => (
                    <li key={point} className="flex gap-2">
                      <span
                        className="border-border mt-1.5 h-1 w-1 flex-shrink-0 rounded-full border"
                        aria-hidden="true"
                      />
                      <span>{point}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </Reveal>

        <Reveal delay={0.1}>
          <SectionHeading eyebrow="Formación" title="Formación complementaria" />
          <div className="border-border bg-surface mt-8 rounded-2xl border p-6">
            <ul className="space-y-3">
              {TRAINING.map((item) => (
                <li
                  key={item.title}
                  className="border-border flex flex-wrap items-center justify-between gap-2 border-b pb-3 last:border-b-0 last:pb-0"
                >
                  <span className="text-text-primary">{item.title}</span>
                  <Badge tone="outline">{item.type}</Badge>
                </li>
              ))}
            </ul>
          </div>
        </Reveal>
      </div>
    </section>
  )
}
