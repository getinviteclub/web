import Image from "next/image"
import { MapPin } from "lucide-react"
import { Reveal } from "@/components/ui/reveal"
import type { AuraContent } from "@/content/wedding/aura/types"

/**
 * Hoteles recomendados cerca del venue, con link directo de reserva.
 * Port del original de Flor con un agregado: el campo `image` de cada
 * hotel ya existía en los datos pero no se mostraba — acá sí, la card
 * se ve mejor con foto y el dato ya estaba disponible.
 */
export function AccommodationSection({ content }: { content: AuraContent }) {
  return (
    <section id="stay" className="relative overflow-hidden border-t border-[#1C1B18]/10 bg-[#F2F2EF] py-24 md:py-36">
      <div className="mx-auto max-w-7xl px-6 md:px-12">
        <div className="mb-16 flex flex-col justify-between gap-6 border-b border-[#1C1B18]/15 pb-8 md:mb-20 md:flex-row md:items-end">
          <div>
            <div className="mb-3 flex items-center gap-3 font-sans text-[10px] tracking-[0.13em] text-[#3A3833]">
              <span className="font-serif-display text-base italic tracking-normal text-[#20221C]">
                VI. Hospedaje &amp; estadía
              </span>
            </div>
            <h2 className="font-serif-display text-4xl tracking-tight text-[#1C1B18] sm:text-5xl md:text-6xl">
              Dónde alojarte
            </h2>
          </div>
          <div className="max-w-md">
            <span className="font-script mb-1 block text-[45px] leading-none text-[#1C1B18]">
              Selección de hoteles &amp; estancias
            </span>
            <p className="font-serif-editorial text-sm text-[#20221C]">
              Hemos seleccionado las mejores opciones de hospedaje con tarifas especiales y cercanía a la finca.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 items-stretch gap-8 lg:grid-cols-3">
          {content.accommodation.map((hotel) => (
            <Reveal
              key={hotel.id}
              from="up"
              className="flex flex-col overflow-hidden border border-[#1C1B18]/10 bg-[#F2F2EF]"
            >
              <div className="relative aspect-[4/3] w-full overflow-hidden bg-[#E7DECD]">
                <Image src={hotel.image} alt={hotel.name} fill sizes="(min-width: 1024px) 30vw, 90vw" className="object-cover" />
              </div>
              <div className="p-6 md:p-8">
                <div className="font-serif-display mb-4 text-[14px] italic tracking-[0.03em] text-[#1C1B18]">
                  {hotel.type}
                </div>
                <h3 className="font-serif-display mb-2 min-h-[4.2rem] text-2xl leading-snug text-[#1C1B18]">
                  {hotel.name}
                </h3>
                <div className="flex items-start gap-2 font-sans text-xs text-[#20221C]">
                  <MapPin className="mt-0.5 h-3.5 w-3.5 shrink-0 text-[#202D24]" />
                  <span>{hotel.distance}</span>
                </div>
              </div>
              <div className="p-6 pt-4 md:p-8 md:pt-8">
                <a
                  href={hotel.bookingUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-serif-display flex w-full items-center justify-center gap-2.5 border border-[#1C1B18] bg-transparent py-4 text-xs font-semibold tracking-[0.03em] text-[#1C1B18] transition-colors hover:bg-[#1C1B18] hover:text-[#F2F2EF] sm:text-sm"
                >
                  Ir a la web
                </a>
              </div>
            </Reveal>
          ))}
        </div>

        <div className="font-serif-editorial mt-12 text-center text-xs text-[#20221C]">
          * Sugerimos reservar con anticipación debido a la temporada de primavera en la zona de Pilar.
        </div>
      </div>
    </section>
  )
}
