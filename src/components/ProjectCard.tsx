import { Blocks, ChefHat, ClipboardList, ExternalLink, ServerCog, Truck, Users } from 'lucide-react'
import type { Project } from '../types'
import { Badge } from './Badge'
import { techDotColor } from '../utils/techColor'

const PLACEHOLDER_ICONS: Record<string, typeof ChefHat> = {
  delikatering: ChefHat,
  'monitoreo-migrante': Users,
  'control-proveedores': Truck,
  'gestion-casos': ClipboardList,
  skeleton: Blocks,
}

function ProjectVisual({ project }: { project: Project }) {
  if (project.subProjects && project.subProjects.length > 0) {
    return (
      <div className="bg-background-elevated grid h-48 grid-cols-2 gap-0.5 overflow-hidden rounded-t-2xl">
        {project.subProjects.map((sub) => (
          <img
            key={sub.name}
            src={sub.image}
            alt={sub.imageAlt ?? sub.name}
            loading="lazy"
            className="h-full w-full object-cover"
          />
        ))}
      </div>
    )
  }

  const Icon = PLACEHOLDER_ICONS[project.id] ?? ServerCog

  return (
    <div className="from-accent-primary to-technology-go flex h-48 items-center justify-center rounded-t-2xl bg-gradient-to-br">
      <Icon size={56} className="text-white/90" aria-hidden="true" />
    </div>
  )
}

export function ProjectCard({ project }: { project: Project }) {
  return (
    <article className="border-border bg-surface flex h-full flex-col overflow-hidden rounded-2xl border shadow-sm transition-shadow hover:shadow-md">
      <ProjectVisual project={project} />

      <div className="flex flex-1 flex-col p-6">
        <div className="flex flex-wrap items-center gap-2">
          <Badge tone="accent">{project.tag}</Badge>
          <Badge tone="outline">{project.category}</Badge>
        </div>

        <h3 className="mt-3 text-xl font-bold">{project.name}</h3>
        <p className="text-text-secondary mt-1 text-sm font-medium">{project.type}</p>

        <p className="text-text-secondary mt-3">{project.solution}</p>

        {project.subProjects && project.subProjects.length > 0 && (
          <ul className="text-text-secondary mt-3 space-y-1 text-sm">
            {project.subProjects.map((sub) => (
              <li key={sub.name}>
                <span className="text-text-primary font-medium">{sub.name}:</span> {sub.description}
              </li>
            ))}
          </ul>
        )}

        <div className="mt-4">
          <p className="text-text-secondary text-xs font-semibold tracking-wide uppercase">
            Funcionalidades principales
          </p>
          <ul className="text-text-secondary mt-2 space-y-1 text-sm">
            {project.features.slice(0, 4).map((feature) => (
              <li key={feature} className="flex gap-2">
                <span
                  className="border-border mt-2 h-1 w-1 flex-shrink-0 rounded-full border"
                  aria-hidden="true"
                />
                <span>{feature}</span>
              </li>
            ))}
          </ul>
        </div>

        <div className="mt-4 flex flex-wrap gap-2">
          {project.tech.map((tech) => (
            <Badge key={tech} tone="neutral">
              <span className="inline-flex items-center gap-1.5">
                <span
                  className="h-1.5 w-1.5 flex-shrink-0 rounded-full"
                  style={{ backgroundColor: techDotColor(tech) }}
                  aria-hidden="true"
                />
                {tech}
              </span>
            </Badge>
          ))}
        </div>

        <div className="mt-6 flex-1" />

        {project.link && (
          <a
            href={project.link}
            target="_blank"
            rel="noopener noreferrer"
            className="text-accent-primary dark:text-accent-hover mt-4 inline-flex w-fit items-center gap-1.5 text-sm font-semibold hover:underline"
          >
            {project.linkLabel ?? 'Ver enlace'}
            <ExternalLink size={14} aria-hidden="true" />
          </a>
        )}
      </div>
    </article>
  )
}
