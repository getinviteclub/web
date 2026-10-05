import type { WeddingContent } from "@/content/wedding/types"
import { STUDIO_COPY as C } from "@/content/wedding/studio/copy"
import { Reveal } from "@/components/ui/reveal"
import { Llave } from "@/components/ui/illustrations/papeleria"
import { SectionHead } from "./SectionHead"
import { Stamp } from "./Stamp"

/**
 * Dónde alojarse: cada hotel como una tarjeta postal, con su foto en
 * estampilla, la distancia, el código de descuento y el link para
 * reservar.
 */
export function StudioStay({ content }: { content: WeddingContent }) {
  return (
    <section id="alojamiento" className="border-t border-[var(--st-rule)] px-6 py-24 md:py-32">
      <SectionHead label={C.stay.label} title={C.stay.title} />

      <ul className="mx-auto grid max-w-6xl gap-8 md:grid-cols-3">
        {content.accommodation.map((h, i) => (
          <li key={h.id}>
            <Reveal from="up" className="flex h-full flex-col items-center bg-[var(--st-card)] px-6 pb-8 pt-10 text-center">
              <Stamp src={h.image} alt={h.name} aspect="landscape" rotate={i % 2 === 0 ? -2 : 2} sizes="280px" className="w-[min(70%,240px)]" />
              {h.badge && <p className="st-script st-ink mt-6 text-sm">{h.badge}</p>}
              <h3 className="st-hand mt-3 text-4xl font-semibold leading-none">{h.name}</h3>
              <p className="st-mono st-muted mt-3 text-[11px]">{h.type}</p>
              <p className="mt-3 leading-relaxed">{h.description}</p>
              <p className="mt-3 text-sm">{h.distance}</p>
              {h.discountCode && (
                <p className="st-mono mt-5 border border-dashed border-[var(--st-ink)] px-3 py-1.5 text-[11px] text-[var(--st-ink)]">
                  {C.stay.codigo}: {h.discountCode}
                </p>
              )}
              <div className="mt-auto pt-7">
                <a href={h.bookingUrl} target="_blank" rel="noopener noreferrer" className="st-btn">
                  {C.stay.cta}
                </a>
              </div>
            </Reveal>
          </li>
        ))}
      </ul>

      <Reveal from="up" className="mt-12 flex items-center justify-center gap-3">
        <Llave className="st-ink w-10" />
        <p className="st-script st-ink text-sm">{C.stay.nota}</p>
      </Reveal>
    </section>
  )
}
