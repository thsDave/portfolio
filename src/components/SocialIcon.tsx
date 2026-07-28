import { Mail } from 'lucide-react'
import type { ComponentType } from 'react'
import type { SocialLink } from '../types'
import { GithubIcon, LinkedinIcon, WhatsappIcon } from './icons/BrandIcons'

type IconComponent = ComponentType<{ size?: number; 'aria-hidden'?: boolean }>

const ICONS: Record<SocialLink['icon'], IconComponent> = {
  github: GithubIcon,
  linkedin: LinkedinIcon,
  whatsapp: WhatsappIcon,
  mail: Mail,
}

interface SocialIconProps {
  icon: SocialLink['icon']
  size?: number
}

export function SocialIcon({ icon, size = 18 }: SocialIconProps) {
  const Icon = ICONS[icon]
  return <Icon size={size} aria-hidden={true} />
}
