const KNOWN_TECH_COLORS: Record<string, string> = {
  php: 'var(--color-technology-php)',
  laravel: 'var(--color-technology-php)',
  javascript: 'var(--color-technology-js)',
  jquery: 'var(--color-technology-js)',
  html5: 'var(--color-technology-html)',
  html: 'var(--color-technology-html)',
  mysql: 'var(--color-technology-go)',
  sql: 'var(--color-technology-go)',
  'api rest': 'var(--color-technology-go)',
}

const FALLBACK_COLORS = [
  'var(--color-technology-go)',
  'var(--color-technology-php)',
  'var(--color-technology-purple)',
  'var(--color-technology-html)',
  'var(--color-technology-js)',
]

/** Deterministic accent color for a technology tag, echoing GitHub's per-language dots. */
export function techDotColor(tech: string): string {
  const key = tech.toLowerCase().trim()
  if (KNOWN_TECH_COLORS[key]) return KNOWN_TECH_COLORS[key]

  let hash = 0
  for (let i = 0; i < key.length; i += 1) {
    hash = (hash * 31 + key.charCodeAt(i)) >>> 0
  }
  return FALLBACK_COLORS[hash % FALLBACK_COLORS.length]
}
