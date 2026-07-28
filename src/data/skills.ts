import type { SpecializationCategory } from '../types'

export const SPECIALIZATIONS: SpecializationCategory[] = [
  {
    id: 'desarrollo-software',
    title: 'Desarrollo de software',
    description: 'Construcción de aplicaciones web, desde la interfaz hasta la lógica de negocio.',
    groups: [
      {
        title: 'Tecnologías principales',
        tier: 'principal',
        items: [
          'PHP',
          'Laravel',
          'JavaScript',
          'HTML5',
          'CSS3',
          'Tailwind CSS',
          'Bootstrap',
          'Git y GitHub',
        ],
      },
      {
        title: 'Experiencia profesional',
        tier: 'profesional',
        items: [
          'TypeScript',
          'React',
          'jQuery',
          'Diseño e integración de APIs',
          'Aplicaciones web responsivas',
          'Metodologías ágiles y Scrum',
        ],
      },
      {
        title: 'Conocimientos complementarios',
        tier: 'complementario',
        items: ['Python', 'C# y ASP.NET', 'Java'],
      },
    ],
  },
  {
    id: 'bases-de-datos',
    title: 'Bases de datos',
    description: 'Diseño, mantenimiento y optimización de estructuras de información.',
    groups: [
      {
        title: 'Tecnologías principales',
        tier: 'principal',
        items: ['MySQL', 'SQL', 'Diseño y administración de bases de datos'],
      },
      {
        title: 'Experiencia profesional',
        tier: 'profesional',
        items: [
          'Modelamiento de datos',
          'Integridad y mantenimiento de información',
          'Migraciones y optimización de estructuras',
        ],
      },
    ],
  },
  {
    id: 'infraestructura-sistemas',
    title: 'Infraestructura y sistemas',
    description: 'Administración de servidores, redes y activos tecnológicos.',
    groups: [
      {
        title: 'Tecnologías principales',
        tier: 'principal',
        items: [
          'Administración de servidores Windows y Linux',
          'Redes informáticas',
          'Soporte técnico a usuarios',
          'Mantenimiento preventivo y correctivo',
        ],
      },
      {
        title: 'Experiencia profesional',
        tier: 'profesional',
        items: [
          'Firewalls',
          'Segmentación mediante VLAN',
          'WiFi empresarial',
          'Monitoreo de conectividad',
          'Gestión de activos tecnológicos',
        ],
      },
    ],
  },
  {
    id: 'seguridad-informatica',
    title: 'Seguridad informática',
    description: 'Protección de la información y continuidad de los servicios tecnológicos.',
    groups: [
      {
        title: 'Tecnologías principales',
        tier: 'principal',
        items: [
          'Seguridad de la información',
          'Gestión de accesos y permisos',
          'Autenticación multifactor',
          'Monitoreo de infraestructura',
        ],
      },
      {
        title: 'Experiencia profesional',
        tier: 'profesional',
        items: [
          'Gestión y seguimiento de incidentes',
          'Protección de endpoints',
          'Aplicación de políticas de seguridad',
          'Buenas prácticas de desarrollo seguro',
          'Continuidad y disponibilidad de servicios',
        ],
      },
    ],
  },
  {
    id: 'plataformas-empresariales',
    title: 'Plataformas y herramientas empresariales',
    description: 'Administración de servicios en la nube y herramientas de colaboración.',
    groups: [
      {
        title: 'Tecnologías principales',
        tier: 'principal',
        items: [
          'Microsoft 365',
          'Microsoft Entra',
          'Exchange Online',
          'SharePoint',
          'Teams',
          'OneDrive',
        ],
      },
      {
        title: 'Experiencia profesional',
        tier: 'profesional',
        items: ['Power Automate', 'Power Apps', 'WordPress', 'Moodle', 'Administración de CMS'],
      },
    ],
  },
]
