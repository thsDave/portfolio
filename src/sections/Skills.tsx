import { Reveal } from '../components/Reveal'
import { SectionHeading } from '../components/SectionHeading'
import { Badge } from '../components/Badge'
import { SPECIALIZATIONS } from '../data/skills'
import type { SkillGroup } from '../types'

const TIER_TONE: Record<SkillGroup['tier'], 'accent' | 'neutral' | 'outline'> = {
  principal: 'accent',
  profesional: 'neutral',
  complementario: 'outline',
}

export function Skills() {
  return (
    <section id="conocimientos" className="bg-background-secondary scroll-mt-16 py-20 sm:py-24">
      <div className="section-container">
        <SectionHeading
          eyebrow="Conocimientos"
          title="Áreas de especialización"
          description="Un perfil que combina desarrollo de software con infraestructura, seguridad, herramientas empresariales y gestión tecnológica."
        />

        <div className="mt-12 grid gap-6 md:grid-cols-2">
          {SPECIALIZATIONS.map((category, index) => (
            <Reveal key={category.id} delay={(index % 2) * 0.1}>
              <div className="border-border bg-surface h-full rounded-2xl border p-6 shadow-sm">
                <h3 className="text-xl font-bold">{category.title}</h3>
                <p className="text-text-secondary mt-2 text-sm">{category.description}</p>

                <div className="mt-5 space-y-4">
                  {category.groups.map((group) => (
                    <div key={group.title}>
                      <p className="text-text-secondary text-xs font-semibold tracking-wide uppercase">
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
