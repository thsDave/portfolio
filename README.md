# Portafolio — Isaac David Ramos Quintanilla

Portafolio profesional de **Isaac David Ramos Quintanilla**, consultor de desarrollo de
aplicaciones y soluciones tecnológicas en El Salvador. Aplicación de una sola página, construida
como sitio estático, pensada para comunicar un perfil integral de tecnología: desarrollo de
software, infraestructura, seguridad de la información y consultoría/gestión tecnológica.

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

## Sistema de color

La identidad visual usa tokens semánticos definidos como variables CSS en `src/index.css`
(`--color-background-primary`, `--color-text-secondary`, `--color-accent-primary`,
`--color-technology-*`, etc.), generados vía `@theme` de Tailwind CSS 4. Los valores por defecto en
`@theme` son el tema claro; el bloque `:root.dark` redefine las mismas variables con la paleta
oscura, por lo que las utilidades (`bg-background-primary`, `border-border`, `text-text-secondary`…)
cambian automáticamente con el toggle de tema, sin variantes `dark:` repetidas en cada componente.

Los acentos (`accent-primary`, `accent-hover`, `success`, `success-strong`) y los acentos
tecnológicos (`technology-go`, `technology-php`, `technology-purple`, `technology-html`,
`technology-js`) se mantienen iguales en ambos temas y se usan como puntos de color deliberados
(botones, enlaces activos, puntos de color junto a etiquetas de tecnología), no como color de fondo
o texto general. `text-muted` (`#656C76`) se reserva para texto grande o decorativo en modo oscuro,
ya que sobre los fondos casi negros no alcanza el contraste mínimo de 4.5:1 para texto normal.

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

Este proyecto se publica en dos destinos con rutas base distintas, resueltas mediante el modo de
Vite (`vite.config.ts` lee `mode` y ajusta `base`):

- `npm run build` / `npm run build:github` — `base: '/portfolio/'`, para GitHub Pages. Es el
  comando que ejecuta el workflow de CI; no cambia.
- `npm run build:hosting` — `base: '/'`, para publicar en la raíz de un dominio o subdominio
  propio. Ver [Despliegue manual en hosting](#despliegue-manual-en-hosting) más abajo.

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
  utils/        Utilidades compartidas (p. ej. color por tecnología en tarjetas de proyecto)
public/         Archivos estáticos servidos tal cual (favicons, manifest, robots.txt, CV, etc.)
scripts/        Scripts de mantenimiento (prepare-deploy.mjs genera deploy/ para hosting)
deploy/         Generada por `npm run prepare:deploy`; ignorada por Git (ver sección de hosting)
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

## Despliegue manual en hosting

Además de GitHub Pages, el proyecto puede publicarse como archivos estáticos en cualquier hosting
tradicional (dominio o subdominio propio), sirviéndose desde la raíz (`/`) en lugar de `/portfolio/`.
El hosting **solo necesita servir archivos estáticos**: no requiere Node.js, PHP, ni ningún proceso
en ejecución en el servidor.

### 1. Instalar dependencias

```bash
npm ci
```

### 2. Ejecutar las validaciones

```bash
npm run lint
npm run typecheck
```

### 3. Generar la carpeta `deploy/`

```bash
npm run prepare:deploy
```

Este comando (`scripts/prepare-deploy.mjs`):

1. Compila el proyecto con `npm run build:hosting` (base `/`) y se detiene con un error claro si la
   compilación falla.
2. Borra únicamente el contenido previo de la carpeta local `deploy/` (nunca otras rutas).
3. Copia ahí el contenido de `dist/` — `deploy/index.html`, `deploy/assets/`, etc. quedan
   directamente dentro de `deploy/`, sin una subcarpeta `dist/` intermedia.

`deploy/` es un artefacto de compilación: está en `.gitignore` y no se sube al repositorio; se
regenera cada vez que se ejecuta `npm run prepare:deploy`.

### 4. Qué subir al hosting

Sube **el contenido de `deploy/`** (no la carpeta `deploy` como un nivel adicional, salvo que la
estructura de tu hosting lo requiera) a la raíz pública del dominio o subdominio, típicamente:

- `public_html/`
- La raíz pública del dominio.
- La raíz pública del subdominio (p. ej. `public_html/portafolio/` si el subdominio apunta ahí).

No subas `node_modules/`, `src/`, ni ningún archivo de configuración de desarrollo — `deploy/` ya
excluye todo eso; solo contiene HTML/CSS/JS compilado e imágenes, documentos y archivos públicos
(favicons, `robots.txt`, `sitemap.xml`, `site.webmanifest`, el CV en PDF).

Cada vez que actualices contenido o código, vuelve a ejecutar `npm run prepare:deploy` y sube de
nuevo el contenido de `deploy/`.

### 5. Rutas y navegación

El sitio es una sola página con navegación por anclas (`#inicio`, `#proyectos`, etc.), sin React
Router ni rutas reales — no se necesita `.htaccess` para reescribir rutas a `index.html`. Recargar
la página, o abrir directamente una URL con ancla (p. ej. `https://tu-dominio/#proyectos`), funciona
correctamente: la app hace scroll a la sección correspondiente al montar (ver
`src/hooks/useScrollToHash.ts`).

### 6. Metadatos pendientes de actualizar

La URL canónica, Open Graph, Twitter Card, `robots.txt` y `sitemap.xml` todavía apuntan a
`https://thsdave.github.io/portfolio/` — se conservan así intencionalmente porque aún no se ha
definido el dominio final del hosting. **Cuando se defina un dominio propio**, hay que actualizar:

- `index.html` — `canonical`, `og:url`, `og:image`, `twitter:image`.
- `public/robots.txt` — línea `Sitemap:`.
- `public/sitemap.xml` — `<loc>`.
- `src/data/site.ts` — `productionUrl`.
- `README.md` — la línea "Producción" al inicio de este archivo.

## Consideraciones de privacidad

- No se publican números telefónicos ni correos de terceros, ni referencias personales o laborales.
- El número de teléfono público se usa únicamente para el botón de contacto por WhatsApp.
- El CV descargable (`public/documents/cv-isaac-ramos-quintanilla.pdf`) es una versión reducida y
  revisada para publicación: no incluye referencias personales/laborales ni datos de terceros.
- No hay credenciales, tokens ni variables sensibles en el código fuente.

## Licencia

Código publicado sin una licencia de código abierto explícita. Todos los derechos sobre el
contenido, la marca personal y las imágenes pertenecen a Isaac David Ramos Quintanilla.
