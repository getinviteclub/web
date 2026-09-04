import { PRECIO_CONTENT, PRECIO_DESDE, NOTA_MONEDA, ATELIER } from "@/content/precio"
import { Cta } from "@/components/ui/cta"
import { WhatsappCta } from "@/components/ui/whatsapp-cta"
import { Reveal } from "@/components/ui/reveal"
import { Eyebrow } from "@/components/ui/eyebrow"
import { TrackView } from "@/components/ui/track-view"
import { FUNNEL_EVENTS } from "@/lib/analytics"
import { mensajeAtelier } from "@/lib/whatsapp"

/**
 * El precio de la home, en un bloque y sin comparar nada.
 *
 * Reemplaza a <Pricing>, la grilla de tres tarjetas. El cambio es de
 * producto, no de diseño: no hay tiers que comparar, hay una invitación.
 * La grilla obligaba a leer tres columnas y decidir un paquete justo
 * después de haber visto los diseños, que es donde queríamos que la cabeza
 * siguiera estando.
 *
 * El CTA manda al catálogo y no a WhatsApp a propósito: acá todavía no
 * eligieron diseño, y la conversación buena empieza con uno elegido.
 *
 * Atelier va abajo, separado por una regla y con el CTA en link: es otro
 * servicio, y ponerlo al mismo peso lo haría leer como "el plan caro".
 */
export function Precio() {
  return (
    <section
      id="precio"
      className="mx-auto max-w-max px-[var(--pad-x)] py-20 md:py-28"
    >
      <TrackView event={FUNNEL_EVENTS.viewPricing} />

      <div className="grid gap-10 md:grid-cols-12 md:gap-16">
        <Reveal from="left" className="md:col-span-7">
          <Eyebrow>{PRECIO_CONTENT.eyebrow}</Eyebrow>
          <h2
            className="mt-4 font-display font-normal leading-[1.05]"
            style={{ fontSize: "clamp(28px, 4vw, 44px)" }}
          >
            {PRECIO_CONTENT.title}
          </h2>
          <p className="mt-4 max-w-[52ch] text-lg desc-copy">
            {PRECIO_CONTENT.text}
          </p>
        </Reveal>

        <Reveal from="right" className="md:col-span-5">
          <div className="border-t border-ink pt-6">
            <p className="font-display text-[clamp(40px,6vw,56px)] font-normal leading-none">
              Desde {PRECIO_DESDE}
            </p>
            <div className="mt-7">
              <Cta href={PRECIO_CONTENT.ctaHref} size="lg">
                {PRECIO_CONTENT.ctaText}
              </Cta>
            </div>
            <p className="note-copy mt-5 max-w-[38ch] text-muted-foreground">
              {NOTA_MONEDA}
            </p>
          </div>
        </Reveal>
      </div>

      <Reveal from="up">
        <div className="mt-14 flex flex-col gap-5 border-t border-rule pt-8 sm:flex-row sm:items-start sm:justify-between sm:gap-10 md:mt-20">
          <div className="max-w-[52ch]">
            <div className="flex flex-wrap items-baseline gap-x-4 gap-y-1">
              <h3 className="font-display text-2xl font-normal">
                {ATELIER.name}
              </h3>
              <span className="font-display text-2xl font-normal">
                Desde {ATELIER.precioDesde}
              </span>
            </div>
            <p className="mt-2 leading-relaxed desc-copy">{ATELIER.claim}</p>
          </div>

          <WhatsappCta
            message={mensajeAtelier()}
            trackParams={{ design: "atelier" }}
            variant="link"
            className="shrink-0"
          >
            {ATELIER.ctaText}
          </WhatsappCta>
        </div>
      </Reveal>
    </section>
  )
}
