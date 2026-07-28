import { CheckCircle2 } from 'lucide-react'
import { Reveal } from '../components/Reveal'
import { SectionHeading } from '../components/SectionHeading'
import { VALUE_PROPOSITIONS } from '../data/valueProps'

export function ValueProposition() {
  return (
    <section className="scroll-mt-16 py-20 sm:py-24">
      <div className="section-container">
        <SectionHeading
          eyebrow="Propuesta de valor"
          title="Cómo puedo ayudar a tu organización"
          description="Un perfil integral capaz de acompañar tanto el desarrollo de software como la operación tecnológica diaria."
          align="center"
        />

        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {VALUE_PROPOSITIONS.map((item, index) => (
            <Reveal key={item.title} delay={(index % 4) * 0.05}>
              <div className="h-full rounded-2xl border border-slate-200 p-6 dark:border-slate-800">
                <CheckCircle2
                  size={24}
                  className="text-brand-600 dark:text-accent-400"
                  aria-hidden="true"
                />
                <h3 className="mt-4 font-bold">{item.title}</h3>
                <p className="mt-2 text-sm text-slate-600 dark:text-slate-400">
                  {item.description}
                </p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
