import type { Template } from "@/content/templates"
import { PhoneMockup } from "@/components/ui/phone-mockup"
import { Cta } from "@/components/ui/cta"
import { ArrowUpRight, ICON_WEIGHT } from "@/components/ui/icons"
import { FUNNEL_EVENTS } from "@/lib/analytics"

/**
 * Columna izquierda del detalle: la evidencia.
 *
 * "Ver la invitación completa" pasó de ser un link chico y subrayado bajo
 * el teléfono a un CTA con caja, y con razón: es lo único en todo el sitio
 * donde la pareja ve el producto real y navegable en vez de una captura.
 * Un diseño con demo convierte mucho mejor mostrándola que describiéndola.
 *
 * Sigue siendo `variant="pill" tone="outline"` y no el relleno oscuro para
 * que no compita con "Me gusta este diseño", que es el CTA de la página.
 *
 * Los diseños sin `liveDemoSlug` (hoy todos menos Aura) muestran solo la
 * captura: prometer una demo que no existe es peor que no tenerla.
 */
export function TemplatePreview({ template }: { template: Template }) {
  return (
    <div className="bg-bone px-6 py-12">
      <PhoneMockup
        src={template.image}
        alt={`Invitación ${template.name}`}
        priority
      />

      {template.liveDemoSlug && (
        <div className="mt-10 flex flex-col items-center gap-3 text-center">
          <Cta
            href={`/w/${template.liveDemoSlug}`}
            external
            size="md"
            trackAs={FUNNEL_EVENTS.viewLiveDemo}
            trackParams={{ design: template.slug }}
            className="gap-2"
          >
            Ver la invitación completa
            <ArrowUpRight size={14} weight={ICON_WEIGHT} aria-hidden="true" />
          </Cta>
          <span className="note-copy max-w-[30ch] text-muted-foreground">
            Se abre la invitación real, tal cual la ven los invitados.
          </span>
        </div>
      )}
    </div>
  )
}
