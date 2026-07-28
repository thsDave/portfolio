import type { SpecializationCategory } from '../types'

export const SPECIALIZATIONS: SpecializationCategory[] = [
  {
    id: 'desarrollo-aplicaciones',
    title: 'Desarrollo de aplicaciones y arquitectura',
    description:
      'Diseño y construcción de aplicaciones web, desde el modelo de datos hasta la interfaz.',
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
          'Arquitectura MVC',
          'Diseño e integración de API REST',
          'Gestión de usuarios, roles y permisos',
          'Autenticación multifactor y OAuth (Google, Microsoft 365, GitHub)',
          'Formularios dinámicos y condicionales',
          'Desarrollo seguro (buenas prácticas OWASP)',
        ],
      },
      {
        title: 'Conocimientos complementarios',
        tier: 'complementario',
        items: ['Python', 'C# y ASP.NET', 'Java', 'jQuery', 'DataTables, Select2 y Chart.js'],
      },
    ],
  },
  {
    id: 'bases-de-datos',
    title: 'Bases de datos y gestión de información',
    description: 'Diseño, mantenimiento y optimización de estructuras de información.',
    groups: [
      {
        title: 'Tecnologías principales',
        tier: 'principal',
        items: ['MySQL', 'SQL', 'Diseño y modelamiento de bases de datos relacionales'],
      },
      {
        title: 'Experiencia profesional',
        tier: 'profesional',
        items: [
          'Migraciones y actualización de estructuras de datos',
          'Normalización e integridad referencial',
          'Historial de cambios y auditoría de información',
          'Optimización de consultas y estructuras',
          'Administración y respaldo de bases de datos',
        ],
      },
      {
        title: 'Conocimientos complementarios',
        tier: 'complementario',
        items: [
          'Migración de información entre sistemas',
          'Manejo de codificación UTF-8 y caracteres especiales',
        ],
      },
    ],
  },
  {
    id: 'infraestructura-redes',
    title: 'Infraestructura, redes y continuidad operativa',
    description: 'Administración de servidores, redes y activos tecnológicos.',
    groups: [
      {
        title: 'Tecnologías principales',
        tier: 'principal',
        items: [
          'Administración de servidores Windows y Linux',
          'Redes empresariales y firewalls',
          'Fortinet / FortiGate',
          'UniFi (switches y puntos de acceso)',
        ],
      },
      {
        title: 'Experiencia profesional',
        tier: 'profesional',
        items: [
          'Segmentación de redes mediante VLAN',
          'Redes WiFi empresariales y de invitados',
          'Monitoreo de conectividad',
          'Administración de hosting, DNS y dominios',
          'Almacenamiento NAS y gestión de respaldos',
          'Coordinación con proveedores de telecomunicaciones',
        ],
      },
      {
        title: 'Conocimientos complementarios',
        tier: 'complementario',
        items: [
          'Mantenimiento preventivo y correctivo',
          'Gestión de inventario y activos tecnológicos',
        ],
      },
    ],
  },
  {
    id: 'seguridad-informatica',
    title: 'Seguridad de la información',
    description: 'Protección de la información y continuidad de los servicios tecnológicos.',
    groups: [
      {
        title: 'Tecnologías principales',
        tier: 'principal',
        items: [
          'Gestión de accesos y permisos',
          'Autenticación multifactor (MFA)',
          'Protección de endpoints',
          'Gestión y respuesta ante incidentes',
        ],
      },
      {
        title: 'Experiencia profesional',
        tier: 'profesional',
        items: [
          'Seguridad de Microsoft 365 y del correo electrónico',
          'Protección contra phishing',
          'Seguridad perimetral y segmentación de redes',
          'Monitoreo de eventos e infraestructura',
          'Principios de OWASP ASVS y recomendaciones de autenticación NIST',
        ],
      },
      {
        title: 'Conocimientos complementarios',
        tier: 'complementario',
        items: [
          'Elaboración de políticas y procedimientos de seguridad',
          'Capacitación y orientación a usuarios',
        ],
      },
    ],
  },
  {
    id: 'microsoft-365',
    title: 'Microsoft 365 y colaboración empresarial',
    description: 'Administración de servicios en la nube y herramientas de colaboración.',
    groups: [
      {
        title: 'Tecnologías principales',
        tier: 'principal',
        items: ['Microsoft 365', 'Microsoft Entra ID', 'Exchange Online', 'SharePoint', 'Teams'],
      },
      {
        title: 'Experiencia profesional',
        tier: 'profesional',
        items: [
          'Gestión de usuarios, licencias y buzones compartidos',
          'Power Automate',
          'Power Apps',
          'Microsoft Forms',
          'Políticas de acceso y MFA de identidades',
        ],
      },
      {
        title: 'Conocimientos complementarios',
        tier: 'complementario',
        items: ['OneDrive', 'Gestión documental y metadatos', 'WordPress', 'Moodle'],
      },
    ],
  },
  {
    id: 'gestion-consultoria',
    title: 'Gestión y consultoría tecnológica',
    description:
      'Acompañamiento en la definición, planificación y adopción de soluciones tecnológicas.',
    groups: [
      {
        title: 'Tecnologías principales',
        tier: 'principal',
        items: [
          'Coordinación de servicios tecnológicos',
          'Consultoría en desarrollo de aplicaciones',
          'Análisis de necesidades organizacionales',
        ],
      },
      {
        title: 'Experiencia profesional',
        tier: 'profesional',
        items: [
          'Gestión de proyectos de IT',
          'Gestión de proveedores y licenciamiento',
          'Documentación técnica y funcional',
          'Planificación de implementaciones',
        ],
      },
      {
        title: 'Conocimientos complementarios',
        tier: 'complementario',
        items: [
          'Optimización de costos tecnológicos',
          'Capacitación tecnológica y acompañamiento en la adopción de herramientas',
        ],
      },
    ],
  },
]
