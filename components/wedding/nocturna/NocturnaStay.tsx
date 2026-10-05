import type { WeddingContent } from "@/content/wedding/types"
import { NOCTURNA_COPY as C } from "@/content/wedding/nocturna/copy"
import { Reveal } from "@/components/ui/reveal"
import { NcHead } from "./NcHead"
import { NcFoto } from "./NcFoto"

/**
 * Hospedaje: tres columnas angostas, cada una con la foto en arco (el
 * mismo gesto del lugar), el nombre en versalitas, una línea de datos,
 * el código de descuento y "Reservar" subrayado. Todo centrado.
 */
export function NocturnaStay({ content }: { content: WeddingContent }) {
  return (
    <section id="hospedaje" className="px-6 py-24 md:py-32">
      <NcHead script={C.stay.script} title={C.stay.title} />

      <ul className="mx-auto grid max-w-5xl gap-16 md:grid-cols-3 md:gap-10">
        {content.accommodation.map((h) => (
          <li key={h.id}>
            <Reveal from="up" className="flex h-full flex-col items-center text-center">
              <NcFoto src={h.image} alt={h.name} sizes="(min-width: 768px) 260px, 70vw" className="nc-arch aspect-[4/5] w-[min(70vw,260px)]" />
              <p className="nc-sans nc-muted mt-7">{h.type}</p>
              <h3 className="nc-display mt-2 text-[22px] uppercase tracking-[0.05em]">{h.name}</h3>
              <p className="mt-3 max-w-[30ch]">{h.description}</p>
              <p className="nc-muted mt-1 text-[12px]">{h.distance}</p>
              {h.discountCode && (
                <p className="nc-sans mt-5">
                  {C.stay.codigo} <span className="nc-display ml-1 text-sm tracking-[0.12em]">{h.discountCode}</span>
                </p>
              )}
              <a href={h.bookingUrl} target="_blank" rel="noopener noreferrer" className="nc-sans nc-link mt-auto pt-7">
                {C.stay.cta}
              </a>
            </Reveal>
          </li>
        ))}
      </ul>
    </section>
  )
}
