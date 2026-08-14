import { WHATSAPP_LINK } from '../constants'
import { WhatsAppIcon } from './Icons'

export default function WhatsAppButton() {
  return (
    <a
      href={WHATSAPP_LINK()}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Falar com a Viva Conecta no WhatsApp"
      className="fixed bottom-6 right-6 z-50 flex items-center justify-center w-14 h-14 rounded-full bg-purple-600 hover:bg-purple-700 text-white shadow-lg shadow-purple-600/30 transition-colors motion-safe:animate-gentleBounce"
    >
      <WhatsAppIcon className="w-7 h-7" />
    </a>
  )
}
