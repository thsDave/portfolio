import { useMemo, useState } from 'react'
import { Reveal } from '../components/Reveal'
import { SectionHeading } from '../components/SectionHeading'
import { ProjectCard } from '../components/ProjectCard'
import { PROJECTS, PROJECT_CATEGORIES } from '../data/projects'
import { SITE } from '../data/site'

type Category = (typeof PROJECT_CATEGORIES)[number]

export function Projects() {
  const [activeCategory, setActiveCategory] = useState<Category>('Todos')

  const filteredProjects = useMemo(() => {
    if (activeCategory === 'Todos') return PROJECTS
    return PROJECTS.filter((project) => project.category === activeCategory)
  }, [activeCategory])

  return (
    <section id="proyectos" className="scroll-mt-16 py-20 sm:py-24">
      <div className="section-container">
        <SectionHeading
          eyebrow="Proyectos"
          title="Proyectos desarrollados"
          description="Soluciones reales construidas para organizaciones, clientes y necesidades internas de TI."
        />

        <div
          className="mt-8 flex flex-wrap gap-2"
          role="group"
          aria-label="Filtrar proyectos por categoría"
        >
          {PROJECT_CATEGORIES.map((category) => {
            const isActive = category === activeCategory
            return (
              <button
                key={category}
                type="button"
                onClick={() => setActiveCategory(category)}
                aria-pressed={isActive}
                className={`rounded-full border px-4 py-2 text-sm font-medium transition-colors ${
                  isActive
                    ? 'border-accent-primary bg-accent-primary text-white'
                    : 'border-border text-text-secondary hover:bg-surface-hover'
                }`}
              >
                {category}
              </button>
            )
          })}
        </div>

        <div className="mt-8 grid gap-8 md:grid-cols-2">
          {filteredProjects.map((project, index) => (
            <Reveal key={project.id} delay={(index % 2) * 0.1}>
              <ProjectCard project={project} />
            </Reveal>
          ))}
        </div>

        <p className="text-text-secondary mt-10 text-center">
          Puedes ver más proyectos y experimentos técnicos en{' '}
          <a
            href={`${SITE.githubUrl}?tab=repositories`}
            target="_blank"
            rel="noopener noreferrer"
            className="text-accent-primary dark:text-accent-hover font-semibold hover:underline"
          >
            GitHub
          </a>
          .
        </p>
      </div>
    </section>
  )
}
