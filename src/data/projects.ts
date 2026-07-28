import type { Project } from '../types'
import abecafeImg from '../assets/images/abecafe.webp'
import fleetsysImg from '../assets/images/fleetsys.webp'

export const PROJECT_CATEGORIES = [
  'Todos',
  'Aplicaciones web',
  'Plataformas institucionales',
  'Herramientas internas',
] as const

export const PROJECTS: Project[] = [
  {
    id: 'delikatering',
    name: 'Delikatering',
    category: 'Aplicaciones web',
    need: 'Una empresa de catering necesitaba una presencia web propia, un canal para recibir y mostrar reseñas de clientes, y un sistema para administrar clientes y servicios.',
    solution:
      'Plataforma compuesta por una landing page pública, una API en Laravel, un portal administrativo y un portal público de reseñas, integrados entre sí.',
    role: 'Desarrollo full stack de la landing, la API y los portales administrativo y de reseñas.',
    tech: ['React', 'Laravel', 'Tailwind CSS', 'MySQL', 'API REST', 'Correo transaccional'],
    features: [
      'Landing page pública de la empresa.',
      'Gestión de clientes e historial de servicios.',
      'Creación de enlaces de invitación con vigencia y límite de intentos.',
      'Envío automatizado de correos a clientes invitados.',
      'Recepción, moderación y publicación de reseñas aprobadas.',
      'Panel administrativo centralizado.',
    ],
    type: 'Plataforma web para empresa de catering',
    tag: 'Desarrollo para cliente',
  },
  {
    id: 'abecafe',
    name: 'Abecafé',
    category: 'Aplicaciones web',
    need: 'La Asociación Salvadoreña de Beneficiadores y Exportadores de Café necesitaba un sitio web institucional propio.',
    solution:
      'Sitio web institucional público que presenta a la asociación y su labor gremial dentro del sector cafetalero.',
    role: 'Desarrollo del sitio web institucional.',
    tech: [],
    features: [
      'Presentación institucional de la asociación y su labor gremial.',
      'Contenido informativo dirigido a productores y exportadores de café.',
    ],
    type: 'Sitio web institucional',
    tag: 'Solución institucional',
    image: abecafeImg,
    imageAlt: 'Página principal del sitio institucional de Abecafé',
  },
  {
    id: 'monitoreo-migrante',
    name: 'Plataforma trinacional de monitoreo de población migrante',
    category: 'Plataformas institucionales',
    need: 'Ayuda en Acción requería una herramienta para monitorear, dar seguimiento y caracterizar perfiles de población migrante entre tres países.',
    solution:
      'Plataforma web de monitoreo diseñada y desarrollada durante la consultoría, con mantenimiento y actualizaciones posteriores de sus bases de datos.',
    role: 'Diseño y desarrollo de la plataforma; posteriormente, gestión y mantenimiento de sus bases de datos y actualizaciones funcionales.',
    tech: ['PHP', 'MySQL'],
    features: [
      'Registro y caracterización de perfiles de población migrante.',
      'Seguimiento regional entre los tres países involucrados.',
      'Mantenimiento y actualización continua de la base de datos.',
    ],
    type: 'Plataforma institucional de monitoreo',
    tag: 'Solución institucional',
  },
  {
    id: 'fleetsys',
    name: 'Fleetsys',
    category: 'Plataformas institucionales',
    need: 'La organización requería una herramienta propia para apoyar la administración y el seguimiento de su flota vehicular.',
    solution:
      'Sistema interno para el control y seguimiento de la flota vehicular de la organización.',
    role: 'Desarrollo y mantenimiento del sistema.',
    tech: ['PHP', 'MySQL'],
    features: [
      'Registro y seguimiento de los vehículos de la flota.',
      'Apoyo a la administración y control operativo de la flota vehicular.',
    ],
    type: 'Sistema de control de flota vehicular',
    tag: 'Solución institucional',
    image: fleetsysImg,
    imageAlt: 'Pantalla del sistema Fleetsys de control de flota vehicular',
  },
  {
    id: 'control-proveedores',
    name: 'Control de proveedores',
    category: 'Plataformas institucionales',
    need: 'La organización requería centralizar y dar seguimiento a la información y los procesos relacionados con sus proveedores.',
    solution:
      'Plataforma institucional para organizar y dar seguimiento a la información de proveedores.',
    role: 'Desarrollo de la plataforma.',
    tech: ['PHP', 'MySQL'],
    features: [
      'Registro y organización de información de proveedores.',
      'Seguimiento de procesos relacionados con proveedores.',
    ],
    type: 'Plataforma institucional de gestión de proveedores',
    tag: 'Solución institucional',
  },
  {
    id: 'gestion-casos',
    name: 'Sistema de gestión de casos',
    category: 'Plataformas institucionales',
    need: 'Una organización requería una herramienta para gestionar el ciclo completo de atención y seguimiento de casos, desde su recepción hasta su cierre.',
    solution:
      'Plataforma institucional para el registro, evaluación, seguimiento y cierre de casos, con formularios dinámicos e instrumentos vinculados a cada expediente.',
    role: 'Desarrollo de la plataforma.',
    tech: ['PHP', 'MySQL'],
    features: [
      'Formularios públicos de entrada con preguntas dinámicas y ramificaciones.',
      'Registro y evaluación de solicitudes.',
      'Seguimiento de casos por etapas: evaluación, seguimiento y cierre.',
      'Instrumentos y documentos vinculados a cada caso.',
      'Gestión de usuarios, roles y permisos.',
      'Historial de cambios y auditoría.',
      'Generación de reportes y documentos PDF.',
    ],
    type: 'Plataforma institucional de gestión de casos',
    tag: 'Solución institucional',
  },
  {
    id: 'skeleton',
    name: 'Skeleton',
    category: 'Herramientas internas',
    need: 'Cada nuevo sistema administrativo implicaba reconstruir desde cero la autenticación, el control de accesos, la auditoría y la estructura visual.',
    solution:
      'Base modular en PHP con arquitectura MVC que centraliza los componentes comunes de seguridad, configuración, usuarios y auditoría para acelerar el inicio de nuevos sistemas administrativos.',
    role: 'Diseño y desarrollo individual de la base y su arquitectura.',
    tech: [
      'PHP',
      'MySQL',
      'DashboardKit',
      'SweetAlert2',
      'DataTables',
      'Select2',
      'Chart.js',
      'Dompdf',
      'PHPMailer',
    ],
    features: [
      'Arquitectura MVC en PHP reutilizable como base para nuevos sistemas.',
      'Autenticación local con recuperación de contraseña.',
      'Autenticación multifactor y control de intentos fallidos.',
      'Integración OAuth con Google, Microsoft 365 y GitHub.',
      'Gestión de usuarios, roles y permisos.',
      'Administración de sesiones y bloqueo por inactividad.',
      'Registro de auditoría.',
      'Configuración SMTP y de apariencia.',
      'Modo claro y oscuro.',
      'Reportes en PDF mediante Dompdf.',
    ],
    type: 'Base modular para sistemas administrativos',
    tag: 'Proyecto propio',
    link: 'https://github.com/thsDave/skeleton',
    linkLabel: 'Ver repositorio',
  },
]
