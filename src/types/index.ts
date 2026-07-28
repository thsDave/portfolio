export interface NavItem {
  label: string
  href: string
}

export interface SocialLink {
  label: string
  url: string
  icon: 'github' | 'linkedin' | 'whatsapp' | 'mail'
}

export interface ExperienceItem {
  id: string
  organization: string
  role: string
  period: string
  current?: boolean
  points: string[]
}

export interface SkillGroup {
  title: string
  tier: 'principal' | 'profesional' | 'complementario'
  items: string[]
}

export interface SpecializationCategory {
  id: string
  title: string
  description: string
  groups: SkillGroup[]
}

export type ProjectTag =
  'Proyecto propio' | 'Proyecto privado' | 'Solución institucional' | 'Desarrollo para cliente'

export interface SubProject {
  name: string
  description: string
  image?: string
  imageAlt?: string
}

export interface Project {
  id: string
  name: string
  category: string
  need: string
  solution: string
  role: string
  tech: string[]
  features: string[]
  type: string
  tag: ProjectTag
  image?: string
  imageAlt?: string
  link?: string
  linkLabel?: string
  subProjects?: SubProject[]
}

export interface EducationItem {
  id: string
  institution: string
  degree: string
  period: string
  points: string[]
}

export interface TrainingItem {
  title: string
  type: 'Entrenamiento' | 'Taller' | 'Certificación' | 'Participación' | 'Especialización'
  year?: string
}

export interface ValueProposition {
  title: string
  description: string
}
