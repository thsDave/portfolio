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
              <div className="border-border h-full rounded-2xl border p-6">
                <CheckCircle2
                  size={24}
                  className="text-accent-primary dark:text-accent-hover"
                  aria-hidden="true"
                />
                <h3 className="mt-4 font-bold">{item.title}</h3>
                <p className="text-text-secondary mt-2 text-sm">{item.description}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
