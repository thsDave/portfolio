import type { EducationItem, TrainingItem } from '../types'

export const EDUCATION: EducationItem[] = [
  {
    id: 'utec',
    institution: 'Universidad Tecnológica de El Salvador',
    degree: 'Licenciatura en Informática',
    period: '2016 - 2019',
    points: [
      'Métodos y estándares de ingeniería de software.',
      'Análisis y diseño de sistemas de información.',
      'Administración de bases de datos y desarrollo de aplicaciones web.',
    ],
  },
  {
    id: 'itca',
    institution: 'Escuela Especializada en Ingeniería ITCA',
    degree: 'Técnico en Ingeniería de Sistemas',
    period: '2012 - 2014',
    points: [
      'Programación estructurada y orientada a objetos.',
      'Desarrollo de aplicaciones para la web.',
      'Diseño de redes informáticas y gestores de bases de datos.',
    ],
  },
]

export const TRAINING: TrainingItem[] = [
  {
    title: 'Especialización en JavaScript (Node.js, React y React Native)',
    type: 'Especialización',
  },
  { title: 'Scrum y desarrollo ágil de software', type: 'Entrenamiento' },
  { title: 'Introducción al desarrollo web', type: 'Certificación' },
  { title: 'Modelamiento de datos para administración de bases de datos', type: 'Certificación' },
  { title: 'Introducción a Python', type: 'Certificación' },
  { title: 'Desarrollo de aplicaciones web con ASP.NET', type: 'Entrenamiento' },
  { title: 'HTML5, CSS3 y JavaScript para desarrolladores web', type: 'Taller' },
  { title: 'Python básico', type: 'Taller' },
  { title: 'Python avanzado', type: 'Taller' },
  { title: 'Desarrollo de aplicaciones empresariales con Power Apps', type: 'Taller' },
]
