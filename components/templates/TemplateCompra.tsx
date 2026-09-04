import type { Template } from "@/content/templates"
import { PRECIO_DESDE } from "@/content/precio"
import { Cta } from "@/components/ui/cta"
import { WhatsappCta } from "@/components/ui/whatsapp-cta"
import { ArrowUpRight, ICON_WEIGHT } from "@/components/ui/icons"
import { FUNNEL_EVENTS } from "@/lib/analytics"
import { mensajeDiseno } from "@/lib/whatsapp"

/**
 * Columna derecha del detalle: nombre, descripción, precio y las dos
 * salidas. El orden es el de la decisión —qué es, cómo se ve, cuánto sale,
 * qué hago— y es el mismo de studiogail.co.
 *
 * Dos CTA y no uno, con jerarquía explícita:
 *   primario  → "Me gusta este diseño" (relleno) abre WhatsApp. No dice
 *               "Comprar" ni "Contratar": abre un chat, no un checkout.
 *   secundario→ "Ver la invitación" (contorno) abre la demo navegable.
 *
 * La demo va de secundaria a propósito aunque convenza más: quien ya se
 * decidió no tiene que buscar el botón de avanzar entre dos iguales.
 *
 * La nota de abajo avisa que lo que se abre es una invitación con TODAS
 * las secciones activadas. Ya no hay que defenderse de que el usuario crea
 * que eso viene en el tier caro —no hay tiers—, pero sí de que asuma que
 * su invitación va a tener catorce secciones porque sí: las que lleva las
 * deciden ellos.
 */
export function TemplateCompra({ template }: { template: Template }) {
  return (
    <div>
      <h1
        className="font-display font-normal leading-[1.05]"
        style={{ fontSize: "clamp(32px, 5vw, 48px)" }}
      >
        {template.name}
      </h1>

      <p className="mt-4 max-w-[46ch] text-lg desc-copy">
        {template.longDescription}
      </p>

      <p className="mt-8 font-display text-[40px] font-normal leading-none">
        Desde {PRECIO_DESDE}
      </p>

      {/* Los dos CTA se ponen en fila recién en lg. Entre 640 y 1024 la
          columna mide entre 280 y 430px y los dos juntos piden ~437: se
          encogían hasta que el label quedaba apretado contra el borde del
          pill. Apilados ocupan el ancho de la columna y se leen enteros. */}
      <div className="mt-8 flex flex-col gap-3 lg:flex-row lg:items-center">
        <WhatsappCta
          message={mensajeDiseno(template.name)}
          trackParams={{ design: template.slug }}
          tone="dark"
          size="lg"
          className="w-full lg:w-auto"
        >
          Me gusta este diseño
        </WhatsappCta>

        {template.liveDemoSlug && (
          <Cta
            href={`/w/${template.liveDemoSlug}`}
            external
            size="lg"
            trackAs={FUNNEL_EVENTS.viewLiveDemo}
            trackParams={{ design: template.slug }}
            className="w-full gap-2 lg:w-auto"
          >
            Ver la invitación
            {/* 12px y no 14: el label mide 12 con leading-none, así que un
                ícono más alto estiraba la caja y este CTA quedaba 2px más
                alto que el primario, al lado. */}
            <ArrowUpRight size={12} weight={ICON_WEIGHT} aria-hidden="true" />
          </Cta>
        )}
      </div>

      {template.liveDemoSlug && (
        <p className="note-copy mt-4 max-w-[52ch] text-muted-foreground">
          Se abre la invitación real, tal cual la ven los invitados, con
          todas las secciones activadas. La suya lleva las que necesiten.
        </p>
      )}
    </div>
  )
}
