import { Reveal } from "@/components/ui/reveal"
import type { AuraContent } from "@/content/wedding/aura/types"

/**
 * Lugar (con link a Google Maps, sticky en desktop) + fecha, horario,
 * código de vestimenta y traslado. Port fiel del original de Flor.
 */
export function DetailsSection({ content }: { content: AuraContent }) {
  const { location, date, dressCode, shuttle } = content

  return (
    <section id="details" className="relative border-t border-[#1C1B18]/10 bg-[#F2F2EF] py-24 md:py-36">
      <div className="mx-auto max-w-7xl px-6 md:px-12">
        <div className="mb-16 flex flex-col justify-between gap-6 border-b border-[#1C1B18]/15 pb-8 md:mb-20 md:flex-row md:items-end">
          <div>
            <div className="mb-3 flex items-center gap-3 font-sans text-[10px] tracking-[0.13em] text-[#3A3833]">
              <span className="font-serif-display text-base italic tracking-normal text-[#20221C]">
                II. Coordenadas &amp; esenciales
              </span>
            </div>
            <h2 className="font-serif-display text-4xl tracking-tight text-[#1C1B18] sm:text-5xl md:text-6xl">
              Los detalles
            </h2>
          </div>
        </div>

        <div className="grid grid-cols-1 gap-12 lg:grid-cols-12 lg:gap-16">
          <div className="lg:col-span-6">
            <div className="lg:sticky lg:top-28">
              <Reveal from="up">
                <h3 className="font-serif-display mb-2 text-3xl text-[#1C1B18] sm:text-4xl">{location.venueName}</h3>
                <p className="font-serif-editorial text-base text-[#20221C]">
                  {location.estateSubtitle} — {location.address}
                </p>
                <div className="pt-2">
                  <a
                    href={location.mapsUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="font-serif-display inline-flex items-center gap-2.5 border border-[#1C1B18] bg-[#1C1B18] px-6 py-3.5 text-xs font-semibold tracking-[0.11em] text-[#F2F2EF] transition-all duration-300 hover:bg-transparent hover:text-[#1C1B18] sm:text-sm"
                  >
                    Cómo llegar
                  </a>
                </div>
              </Reveal>
            </div>
          </div>

          <Reveal
            from="up"
            className="lg:col-span-6 [&>*+*]:mt-10 [&>*+*]:border-t [&>*+*]:border-[#1C1B18] [&>*+*]:pt-10"
          >
            <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
              <div>
                <div className="mb-1 font-sans text-xs text-[#3A3833]">Fecha oficial</div>
                <div className="font-serif-display text-2xl text-[#1C1B18]">{date.dayOfWeek}</div>
                <div className="font-serif-display text-lg text-[#20221C]">{date.displayDate}</div>
              </div>
              <div>
                <div className="mb-1 font-sans text-xs text-[#3A3833]">Horario de ingreso</div>
                <div className="font-serif-display text-2xl text-[#1C1B18]">{date.time}</div>
                <div className="mt-1 font-sans text-[11px] text-[#3A3833]">Puntualidad en recepción</div>
              </div>
            </div>

            <div className="space-y-5">
              <div>
                <h4 className="font-serif-display mb-1 text-2xl text-[#1C1B18]">{dressCode.title}</h4>
                <p className="font-serif-editorial text-sm leading-snug text-[#20221C] sm:text-base">
                  {dressCode.description}
                </p>
              </div>
              <div className="pt-2">
                <div className="mb-2.5 font-sans text-base tracking-[0.1em] text-[#20221C]">
                  Paleta de inspiración sugerida
                </div>
                <div className="flex items-center gap-3">
                  {dressCode.palettes.map((color) => (
                    <div key={color.name} className="group relative">
                      <div
                        className="h-7 w-7 -translate-y-0 transform rounded-full border border-black/10 shadow-inner transition-transform group-hover:scale-110 sm:h-8 sm:w-8"
                        style={{ backgroundColor: color.hex }}
                      />
                      <span className="pointer-events-none absolute -bottom-6 left-1/2 z-30 -translate-x-1/2 whitespace-nowrap bg-[#1C1B18] px-1.5 py-0.5 font-sans text-sm tracking-wide text-[#F2F2EF] opacity-0 transition-opacity group-hover:opacity-100">
                        {color.name}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {shuttle.available && (
              <div className="space-y-5">
                <h4 className="font-serif-display text-2xl text-[#1C1B18]">Servicio de traslado exclusivo</h4>
                <p className="font-serif-editorial text-base leading-snug text-[#20221C]">{shuttle.note}</p>
                <div className="font-serif-editorial flex flex-wrap gap-x-6 gap-y-1.5 border-t border-[#1C1B18]/10 pt-4 text-sm text-[#20221C] sm:text-base">
                  <div>
                    <span className="font-medium not-italic text-[#1C1B18]">Salida:</span> {shuttle.pickupTime} (
                    {shuttle.pickupPoint})
                  </div>
                  <div>
                    <span className="font-medium not-italic text-[#1C1B18]">Regresos:</span>{" "}
                    {shuttle.returnTimes.join(" / ")}
                  </div>
                </div>
              </div>
            )}
          </Reveal>
        </div>
      </div>
    </section>
  )
}
