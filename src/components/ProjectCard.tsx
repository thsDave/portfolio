import { ChefHat, ExternalLink, ServerCog, Users } from 'lucide-react'
import type { Project } from '../types'
import { Badge } from './Badge'

const PLACEHOLDER_ICONS: Record<string, typeof ChefHat> = {
  delikatering: ChefHat,
  'monitoreo-migrante': Users,
  itapp: ServerCog,
}

function ProjectVisual({ project }: { project: Project }) {
  if (project.subProjects && project.subProjects.length > 0) {
    return (
      <div className="grid h-48 grid-cols-2 gap-0.5 overflow-hidden rounded-t-2xl bg-slate-900">
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
    <div className="from-brand-600 to-accent-500 flex h-48 items-center justify-center rounded-t-2xl bg-gradient-to-br">
      <Icon size={56} className="text-white/90" aria-hidden="true" />
    </div>
  )
}

export function ProjectCard({ project }: { project: Project }) {
  return (
    <article className="flex h-full flex-col overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm transition-shadow hover:shadow-md dark:border-slate-800 dark:bg-slate-950">
      <ProjectVisual project={project} />

      <div className="flex flex-1 flex-col p-6">
        <div className="flex flex-wrap items-center gap-2">
          <Badge tone="brand">{project.tag}</Badge>
          <Badge tone="outline">{project.category}</Badge>
        </div>

        <h3 className="mt-3 text-xl font-bold">{project.name}</h3>
        <p className="mt-1 text-sm font-medium text-slate-600 dark:text-slate-400">
          {project.type}
        </p>

        <p className="mt-3 text-slate-600 dark:text-slate-400">{project.solution}</p>

        {project.subProjects && project.subProjects.length > 0 && (
          <ul className="mt-3 space-y-1 text-sm text-slate-600 dark:text-slate-400">
            {project.subProjects.map((sub) => (
              <li key={sub.name}>
                <span className="font-medium text-slate-700 dark:text-slate-300">{sub.name}:</span>{' '}
                {sub.description}
              </li>
            ))}
          </ul>
        )}

        <div className="mt-4">
          <p className="text-xs font-semibold tracking-wide text-slate-500 uppercase dark:text-slate-400">
            Funcionalidades principales
          </p>
          <ul className="mt-2 space-y-1 text-sm text-slate-600 dark:text-slate-400">
            {project.features.slice(0, 4).map((feature) => (
              <li key={feature} className="flex gap-2">
                <span
                  className="mt-1.5 h-1 w-1 flex-shrink-0 rounded-full bg-slate-400 dark:bg-slate-600"
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
              {tech}
            </Badge>
          ))}
        </div>

        <div className="mt-6 flex-1" />

        {project.link && (
          <a
            href={project.link}
            target="_blank"
            rel="noopener noreferrer"
            className="text-brand-600 dark:text-accent-400 mt-4 inline-flex w-fit items-center gap-1.5 text-sm font-semibold hover:underline"
          >
            {project.linkLabel ?? 'Ver enlace'}
            <ExternalLink size={14} aria-hidden="true" />
          </a>
        )}
      </div>
    </article>
  )
}
