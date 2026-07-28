import { Reveal } from '../components/Reveal'
import { SectionHeading } from '../components/SectionHeading'
import { Badge } from '../components/Badge'
import { SPECIALIZATIONS } from '../data/skills'
import type { SkillGroup } from '../types'

const TIER_TONE: Record<SkillGroup['tier'], 'brand' | 'neutral' | 'outline'> = {
  principal: 'brand',
  profesional: 'neutral',
  complementario: 'outline',
}

export function Skills() {
  return (
    <section
      id="conocimientos"
      className="scroll-mt-16 bg-slate-50 py-20 sm:py-24 dark:bg-slate-900"
    >
      <div className="section-container">
        <SectionHeading
          eyebrow="Conocimientos"
          title="Áreas de especialización"
          description="Un perfil que combina desarrollo de software con infraestructura, seguridad y herramientas empresariales."
        />

        <div className="mt-12 grid gap-6 md:grid-cols-2">
          {SPECIALIZATIONS.map((category, index) => (
            <Reveal key={category.id} delay={(index % 2) * 0.1}>
              <div className="h-full rounded-2xl border border-slate-200 bg-white p-6 shadow-sm dark:border-slate-800 dark:bg-slate-950">
                <h3 className="text-xl font-bold">{category.title}</h3>
                <p className="mt-2 text-sm text-slate-600 dark:text-slate-400">
                  {category.description}
                </p>

                <div className="mt-5 space-y-4">
                  {category.groups.map((group) => (
                    <div key={group.title}>
                      <p className="text-xs font-semibold tracking-wide text-slate-500 uppercase dark:text-slate-400">
                        {group.title}
                      </p>
                      <div className="mt-2 flex flex-wrap gap-2">
                        {group.items.map((item) => (
                          <Badge key={item} tone={TIER_TONE[group.tier]}>
                            {item}
                          </Badge>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
