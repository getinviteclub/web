import { waLink } from "@/lib/whatsapp"
import { WhatsappIcon } from "@/components/ui/whatsapp-cta"

export function BotonWhatsappFlotante() {
  return (
    <a
      href={waLink("Hola, quiero info de Invite Club")}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Escribinos por WhatsApp"
      className="fixed bottom-5 right-5 z-50 flex size-14 items-center justify-center rounded-none bg-ink text-inverse transition-opacity hover:opacity-80 focus-visible:outline focus-visible:outline-1 focus-visible:outline-offset-4 focus-visible:outline-current"
    >
      <WhatsappIcon className="size-7" />
    </a>
  )
}
