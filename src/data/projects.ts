import type { Project } from '../types'
import abecafeImg from '../assets/images/abecafe.webp'
import fleetsysImg from '../assets/images/fleetsys.webp'
import puzzleImg from '../assets/images/puzzle.webp'
import moodleImg from '../assets/images/moodle.webp'

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
    id: 'itapp',
    name: 'ITApp',
    category: 'Herramientas internas',
    need: 'Los equipos de IT de organizaciones pequeñas y medianas requieren centralizar la gestión de colaboradores, usuarios y tickets de soporte técnico.',
    solution:
      'Sistema web interno con arquitectura MVC en PHP para administrar colaboradores, cuentas de usuario y solicitudes de soporte técnico.',
    role: 'Diseño y desarrollo individual del sistema, desde el modelo de datos hasta la interfaz.',
    tech: ['PHP', 'MySQL', 'AdminLTE', 'MVC'],
    features: [
      'Gestión de usuarios con roles y permisos.',
      'Registro de colaboradores por departamento.',
      'Seguimiento de tickets de soporte con niveles de prioridad.',
      'Panel con métricas de estado en tiempo real.',
      'Eliminación lógica de registros para preservar la integridad de la información.',
    ],
    type: 'Sistema interno de gestión de TI',
    tag: 'Proyecto propio',
    link: 'https://github.com/thsDave/itapp',
    linkLabel: 'Ver repositorio',
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
    id: 'plataformas-educo',
    name: 'Plataformas y sitios institucionales de Fundación Educo',
    category: 'Plataformas institucionales',
    need: 'La fundación requería sitios y sistemas propios para presencia institucional, aprendizaje virtual y control de recursos operativos.',
    solution:
      'Conjunto de sitios y sistemas web desarrollados y mantenidos durante la etapa como programador web de la organización.',
    role: 'Desarrollo, administración y mantenimiento de cada plataforma.',
    tech: ['PHP', 'JavaScript', 'MySQL', 'Moodle', 'WordPress'],
    features: [
      'Sitio institucional informativo.',
      'Sistema de control de flota vehicular.',
      'Aplicación educativa interactiva para estudiantes.',
      'Administración de la plataforma virtual de aprendizaje Moodle.',
    ],
    type: 'Sitios y sistemas institucionales',
    tag: 'Solución institucional',
    subProjects: [
      {
        name: 'Abecafé — sitio institucional',
        description:
          'Sitio web para la Asociación Salvadoreña de Beneficiadores y Exportadores de Café.',
        image: abecafeImg,
        imageAlt: 'Página principal del sitio institucional de Abecafé',
      },
      {
        name: 'Fleetsys — control de flota vehicular',
        description:
          'Sistema interno para el control y seguimiento de la flota vehicular de la organización.',
        image: fleetsysImg,
        imageAlt: 'Pantalla del sistema Fleetsys de control de flota vehicular',
      },
      {
        name: 'Puzzle Educo',
        description:
          'Aplicación educativa interactiva desarrollada para actividades con estudiantes.',
        image: puzzleImg,
        imageAlt: 'Interfaz del juego educativo Puzzle Educo',
      },
      {
        name: 'Development Room — Moodle Educo',
        description:
          'Administración y mantenimiento de la plataforma virtual de aprendizaje Moodle.',
        image: moodleImg,
        imageAlt: 'Logotipo de la plataforma Moodle utilizada por Educo',
      },
    ],
  },
]
