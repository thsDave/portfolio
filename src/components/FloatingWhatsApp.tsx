import { MessageCircle } from 'lucide-react'
import { whatsappUrl } from '../data/site'

export function FloatingWhatsApp() {
  return (
    <a
      href={whatsappUrl()}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Escribir por WhatsApp a Isaac David Ramos"
      className="fixed right-5 bottom-5 z-40 flex h-14 w-14 items-center justify-center rounded-full bg-green-600 text-white shadow-lg shadow-green-600/30 transition-transform hover:scale-105 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-green-700 motion-reduce:transition-none"
    >
      <MessageCircle size={26} aria-hidden="true" />
    </a>
  )
}
