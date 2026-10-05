import { PAQUETE as P } from "@/content/paquete"
import { Cta } from "@/components/ui/cta"
import { WhatsappCta } from "@/components/ui/whatsapp-cta"
import { Eyebrow } from "@/components/ui/eyebrow"
import { Check, ICON_WEIGHT } from "@/components/ui/icons"
import { MENSAJES } from "@/lib/whatsapp"

/**
 * La ficha del paquete: qué incluye y las dos salidas. Una hoja de papel,
 * como una propuesta impresa — no una "pricing card". Sin precio: se pasa
 * por WhatsApp (ver content/precio.ts).
 */
export function PaqueteFicha() {
  return (
    <div className="paper-shadow bg-paper p-7 md:p-10">
      <Eyebrow as="h3">{P.incluyeLabel}</Eyebrow>
      <ul className="mt-6 grid gap-x-8 sm:grid-cols-2">
        {P.incluye.map((item) => (
          <li key={item} className="flex gap-3 border-b border-rule py-3.5 text-sm leading-snug">
            <Check size={16} weight={ICON_WEIGHT} aria-hidden="true" className="mt-px shrink-0" />
            {item}
          </li>
        ))}
      </ul>

      <div className="mt-10 flex flex-wrap items-center gap-x-8 gap-y-4">
        <Cta href={P.ctaHref} tone="dark" size="lg">
          {P.ctaText}
        </Cta>
        <WhatsappCta message={MENSAJES.consulta} variant="link">
          {P.consultaText}
        </WhatsappCta>
      </div>
    </div>
  )
}
