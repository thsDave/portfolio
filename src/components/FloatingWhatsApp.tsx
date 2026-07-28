import { MessageCircle } from 'lucide-react'
import { whatsappUrl } from '../data/site'

export function FloatingWhatsApp() {
  return (
    <a
      href={whatsappUrl()}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Escribir por WhatsApp a Isaac David Ramos"
      className="bg-success shadow-success/30 fixed right-5 bottom-5 z-40 flex h-14 w-14 items-center justify-center rounded-full text-white shadow-lg transition-transform hover:scale-105 hover:brightness-110 motion-reduce:transition-none"
    >
      <MessageCircle size={26} aria-hidden="true" />
    </a>
  )
}
