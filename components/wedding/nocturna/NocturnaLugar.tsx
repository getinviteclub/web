import type { WeddingContent } from "@/content/wedding/types"
import { NOCTURNA_COPY as C } from "@/content/wedding/nocturna/copy"
import { Reveal } from "@/components/ui/reveal"
import { NcFoto } from "./NcFoto"

/**
 * El lugar, como en la referencia "Площадка": "Dónde" en caligrafía, el
 * nombre en versalitas, una foto dentro de un arco con doble línea, la
 * dirección y un botón chico al mapa.
 *
 * El contenido no trae foto del salón (cada pareja manda las mismas
 * fotos): el arco usa la cuarta de la galería.
 */
export function NocturnaLugar({ content }: { content: WeddingContent }) {
  const { location } = content
  const foto = content.gallery[3] ?? content.gallery[0]

  return (
    <section id="lugar" className="px-6 py-24 md:py-32">
      <Reveal from="up" className="mx-auto flex max-w-md flex-col items-center text-center">
        <span className="nc-script nc-muted mb-3 text-[34px]">{C.lugar.script}</span>
        <h2 className="nc-title mt-1">{location.venueName}</h2>
        <p className="nc-muted mt-2">{location.estateSubtitle}</p>

        {foto && (
          <div className="nc-arch-frame mt-10 w-[min(78vw,320px)]">
            <NcFoto src={foto.src} alt={location.venueName} sizes="320px" className="nc-arch aspect-[3/4]" />
          </div>
        )}

        <p className="mt-10">{location.fullAddress}</p>
        <a href={location.mapsUrl} target="_blank" rel="noopener noreferrer" className="nc-btn mt-6">
          {C.lugar.cta}
        </a>
      </Reveal>
    </section>
  )
}
