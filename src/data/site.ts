import type { NavItem, SocialLink } from '../types'

export const SITE = {
  name: 'Isaac David Ramos Quintanilla',
  shortName: 'Isaac David Ramos',
  role: 'Coordinador de IT y Desarrollador de Aplicaciones Web',
  location: 'El Salvador',
  email: 'isaacdrq@gmail.com',
  productionUrl: 'https://thsdave.github.io/portfolio/',
  githubUrl: 'https://github.com/thsDave',
  linkedinUrl: 'https://linkedin.com/in/isaac-david-ramos-538809191',
  whatsappNumber: '50373982779',
  whatsappMessage:
    'Hola, Isaac. Visité tu portafolio y me gustaría conversar contigo sobre una oportunidad de trabajo o proyecto tecnológico.',
  cvUrl: `${import.meta.env.BASE_URL}documents/cv-isaac-ramos-quintanilla.pdf`,
} as const

export const whatsappUrl = (message: string = SITE.whatsappMessage) =>
  `https://wa.me/${SITE.whatsappNumber}?text=${encodeURIComponent(message)}`

export const NAV_ITEMS: NavItem[] = [
  { label: 'Inicio', href: '#inicio' },
  { label: 'Sobre mí', href: '#sobre-mi' },
  { label: 'Experiencia', href: '#experiencia' },
  { label: 'Conocimientos', href: '#conocimientos' },
  { label: 'Proyectos', href: '#proyectos' },
  { label: 'Formación', href: '#formacion' },
  { label: 'Contacto', href: '#contacto' },
]

export const SOCIAL_LINKS: SocialLink[] = [
  { label: 'GitHub', url: SITE.githubUrl, icon: 'github' },
  { label: 'LinkedIn', url: SITE.linkedinUrl, icon: 'linkedin' },
  { label: 'WhatsApp', url: whatsappUrl(), icon: 'whatsapp' },
  { label: 'Correo', url: `mailto:${SITE.email}`, icon: 'mail' },
]
