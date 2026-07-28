import type { ReactNode } from 'react'

interface BadgeProps {
  children: ReactNode
  tone?: 'neutral' | 'accent' | 'outline'
}

const TONE_CLASSES: Record<NonNullable<BadgeProps['tone']>, string> = {
  neutral: 'bg-surface-hover text-text-primary',
  accent: 'bg-accent-primary/10 text-accent-primary dark:text-accent-hover',
  outline: 'border border-border text-text-secondary',
}

export function Badge({ children, tone = 'neutral' }: BadgeProps) {
  return (
    <span
      className={`inline-flex items-center rounded-full px-3 py-1 text-xs font-medium ${TONE_CLASSES[tone]}`}
    >
      {children}
    </span>
  )
}
