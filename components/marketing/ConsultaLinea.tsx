import { CONSULTA_LINEA as C } from "@/content/paquete"
import { WhatsappCta } from "@/components/ui/whatsapp-cta"
import { ArrowRight, ICON_WEIGHT } from "@/components/ui/icons"
import { MENSAJES } from "@/lib/whatsapp"
import { cn } from "@/lib/utils"

/**
 * La salida para quien no encontró su diseño: una pregunta y un link.
 * Reemplaza a Atelier, que salió del sitio.
 */
export function ConsultaLinea({ className }: { className?: string }) {
  return (
    <div
      className={cn(
        "flex flex-col items-center gap-3 border-t border-rule pt-8 text-center sm:flex-row sm:justify-center sm:gap-6",
        className
      )}
    >
      <p className="font-display text-2xl">{C.text}</p>
      <WhatsappCta message={MENSAJES.consulta} variant="link" className="gap-2">
        {C.ctaText}
        <ArrowRight size={12} weight={ICON_WEIGHT} aria-hidden="true" />
      </WhatsappCta>
    </div>
  )
}
