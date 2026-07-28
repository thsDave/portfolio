interface SectionHeadingProps {
  eyebrow?: string
  title: string
  description?: string
  align?: 'left' | 'center'
}

export function SectionHeading({
  eyebrow,
  title,
  description,
  align = 'left',
}: SectionHeadingProps) {
  return (
    <div className={align === 'center' ? 'text-center' : 'text-left'}>
      {eyebrow && (
        <p className="text-accent-primary dark:text-accent-hover text-sm font-semibold tracking-wide uppercase">
          {eyebrow}
        </p>
      )}
      <h2 className="mt-2 text-3xl font-bold sm:text-4xl">{title}</h2>
      {description && (
        <p
          className={`text-text-secondary mt-4 max-w-2xl text-lg ${
            align === 'center' ? 'mx-auto' : ''
          }`}
        >
          {description}
        </p>
      )}
    </div>
  )
}
