# Portafolio — Isaac David Ramos Quintanilla

Portafolio profesional de **Isaac David Ramos Quintanilla**, Coordinador de IT y desarrollador de
aplicaciones web en El Salvador. Aplicación de una sola página, construida como sitio estático,
pensada para comunicar un perfil integral de tecnología: desarrollo web, infraestructura, seguridad
de la información y coordinación de servicios de TI.

**Producción:** https://thsdave.github.io/portfolio/

## Vista general

El sitio presenta, en una navegación por secciones (sin rutas ni backend):

- **Inicio** — presentación principal y llamadas a la acción (proyectos y WhatsApp).
- **Sobre mí** — resumen de trayectoria y enfoque profesional.
- **Conocimientos** — áreas de especialización agrupadas por nivel de experiencia.
- **Experiencia** — línea de tiempo de la trayectoria profesional.
- **Proyectos** — proyectos reales desarrollados, con filtros por categoría.
- **Formación** — formación académica y complementaria.
- **Propuesta de valor** — tipos de soluciones que se pueden aportar a una organización.
- **Contacto** — llamada a la acción por WhatsApp, correo y redes.

## Tecnologías utilizadas

- [React 19](https://react.dev/) + [TypeScript](https://www.typescriptlang.org/)
- [Vite](https://vite.dev/) como build tool
- [Tailwind CSS 4](https://tailwindcss.com/) para estilos
- [Motion](https://motion.dev/) (framer-motion) para animaciones discretas y respetuosas de
  `prefers-reduced-motion`
- [Lucide React](https://lucide.dev/) para iconografía
- [React Helmet Async](https://github.com/staylor/react-helmet-async) para metadatos y datos
  estructurados
- ESLint + Prettier para calidad y consistencia de código
- Fuentes autoalojadas con [Fontsource](https://fontsource.org/) (Inter y Plus Jakarta Sans)

No se utiliza backend, base de datos ni formularios de contacto simulados: el canal de contacto
principal es WhatsApp, con correo electrónico como alternativa.

## Requisitos

- Node.js 20 o superior
- npm 10 o superior

## Instalación

```bash
npm install
```

## Ejecución local

```bash
npm run dev
```

Abre `http://localhost:5173/portfolio/` (la ruta base `/portfolio/` está configurada también en
desarrollo para reflejar el entorno de producción).

## Compilación de producción

```bash
npm run build
```

Genera el sitio estático en `dist/`. Para previsualizar el resultado compilado:

```bash
npm run preview
```

## Validaciones

```bash
npm run lint        # ESLint
npm run typecheck   # Verificación de tipos de TypeScript (sin emitir)
npm run format:check # Verifica formato con Prettier
npm run format       # Aplica formato con Prettier
```

## Estructura principal

```
src/
  assets/       Imágenes, documentos e íconos propios
  components/   Componentes reutilizables (navegación, tarjetas, botones, íconos)
  data/         Contenido editable y tipado (experiencia, proyectos, habilidades, etc.)
  hooks/        Hooks personalizados (tema, sección activa)
  layouts/      Estructura general de la página
  sections/     Secciones del sitio (Hero, Sobre mí, Proyectos, etc.)
  types/        Tipos de TypeScript compartidos
public/         Archivos estáticos servidos tal cual (favicons, manifest, robots.txt, CV, etc.)
```

## Personalización del contenido

Todo el contenido editable vive en `src/data/` como archivos TypeScript tipados, sin necesidad de
tocar los componentes visuales:

- `site.ts` — datos generales del sitio, enlaces sociales y navegación.
- `experience.ts` — trayectoria profesional.
- `skills.ts` — áreas de especialización y agrupaciones de tecnologías.
- `projects.ts` — proyectos desarrollados, tecnologías y enlaces.
- `education.ts` — formación académica y complementaria.
- `valueProps.ts` — propuesta de valor para organizaciones y clientes.

Para actualizar experiencia o proyectos, edita el arreglo correspondiente respetando los tipos
definidos en `src/types/index.ts`.

## Publicación en GitHub Pages

El repositorio incluye un workflow de GitHub Actions (`.github/workflows/deploy.yml`) que instala
dependencias, ejecuta lint y verificación de tipos, compila el proyecto y publica el contenido de
`dist/` mediante GitHub Pages, al hacer push a la rama `master`.

Configuración manual requerida en GitHub (una sola vez):

1. En el repositorio, ir a **Settings → Pages**.
2. En **Source**, seleccionar **GitHub Actions**.
3. Verificar que el workflow se ejecute correctamente en la pestaña **Actions** tras el primer push
   a `master`.

La ruta base `/portfolio/` está configurada en `vite.config.ts` (`base: '/portfolio/'`) y en el
`site.webmanifest`, de modo que todos los recursos, rutas internas y enlaces funcionan correctamente
al publicarse en `https://thsdave.github.io/portfolio/`, incluyendo al recargar la página
directamente en esa URL (el sitio es de una sola página, sin enrutador, por lo que no hay rutas
adicionales que puedan producir errores 404).

## Consideraciones de privacidad

- No se publican números telefónicos ni correos de terceros, ni referencias personales o laborales.
- El número de teléfono público se usa únicamente para el botón de contacto por WhatsApp.
- El CV descargable (`public/documents/cv-isaac-ramos-quintanilla.pdf`) es una versión reducida y
  revisada para publicación: no incluye referencias personales/laborales ni datos de terceros.
- No hay credenciales, tokens ni variables sensibles en el código fuente.

## Licencia

Código publicado sin una licencia de código abierto explícita. Todos los derechos sobre el
contenido, la marca personal y las imágenes pertenecen a Isaac David Ramos Quintanilla.
