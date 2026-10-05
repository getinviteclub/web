import type { WeddingContent } from "@/content/wedding/types"
import { STUDIO_COPY as C } from "@/content/wedding/studio/copy"
import { Reveal } from "@/components/ui/reveal"
import { Dibujo, type Ilustracion } from "@/components/ui/illustrations"
import { SectionHead } from "./SectionHead"
import { cn } from "@/lib/utils"

/** El `iconName` del contenido (compartido con Aura) → el dibujo de Studio. */
const DIBUJO: Record<string, Ilustracion> = {
  Wine: "copas",
  Heart: "anillos",
  Camera: "camara",
  Utensils: "menu",
  Sparkles: "disco",
  Moon: "velas",
}

/** Las x por donde pasa el camino (en % del ancho), alternando lados:
 *  el centro de los dibujos, que arrancan a 22% del borde + medio círculo. */
const X = [27, 73]

/**
 * El cronograma como un camino dibujado que baja serpenteando y para en
 * cada momento del día (referencia: los itinerarios a mano del board).
 *
 * El camino es UN svg detrás de la lista, estirado al alto total. Para
 * que pase justo por cada dibujo, todas las filas miden lo mismo
 * (auto-rows-fr) y cada parada está en el centro vertical de su fila.
 * En el teléfono el camino se reemplaza por una línea punteada a la
 * izquierda: serpenteando en 375px no quedaba lugar para el texto.
 */
export function StudioSchedule({ content }: { content: WeddingContent }) {
  const n = content.schedule.length
  const camino = content.schedule
    .map((_, i) => {
      const x = X[i % 2]
      const y = (i + 0.5) * 100
      if (i === 0) return `M ${x} ${y}`
      const xPrev = X[(i - 1) % 2]
      return `C ${xPrev} ${y - 50}, ${x} ${y - 50}, ${x} ${y}`
    })
    .join(" ")

  return (
    <section id="cronograma" className="border-t border-[var(--st-rule)] px-6 py-24 md:py-32">
      <SectionHead label={C.schedule.label} title={C.schedule.title} />

      <div className="relative mx-auto max-w-5xl">
        <svg
          viewBox={`0 0 100 ${n * 100}`}
          preserveAspectRatio="none"
          aria-hidden="true"
          className="absolute inset-0 hidden h-full w-full md:block"
        >
          <path d={camino} fill="none" stroke="var(--st-ink)" strokeWidth="1.5" strokeDasharray="1 7" strokeLinecap="round" vectorEffect="non-scaling-stroke" />
        </svg>
        <span aria-hidden="true" className="absolute bottom-0 left-8 top-0 border-l-2 border-dotted border-[var(--st-ink)]/50 md:hidden" />

        <ol className="relative grid auto-rows-fr gap-y-6 md:gap-y-0">
          {content.schedule.map((ev, i) => {
            const derecha = i % 2 === 1
            return (
              <li key={ev.time + ev.title} className="md:min-h-[260px]">
                <Reveal
                  from={derecha ? "right" : "left"}
                  className={cn(
                    "flex h-full items-center gap-5 md:gap-8",
                    derecha ? "md:flex-row-reverse md:pr-[22%] md:text-right" : "md:pl-[22%]"
                  )}
                >
                  <div className="flex h-16 w-16 shrink-0 items-center justify-center rounded-full bg-[var(--st-paper)] md:h-24 md:w-24">
                    <Dibujo nombre={DIBUJO[ev.iconName ?? ""] ?? "ramo"} className="st-ink w-14 md:w-20" />
                  </div>
                  <div className="max-w-sm">
                    <p className="st-hand st-ink text-4xl font-semibold leading-none">
                      {ev.time} <span className="text-2xl font-normal">hs</span>
                    </p>
                    {ev.scriptLabel && <p className="st-script st-ink mt-2 text-sm">{ev.scriptLabel}</p>}
                    <h3 className="st-hand mt-2 text-4xl font-semibold">{ev.title}</h3>
                    <p className="st-mono st-muted mt-1 text-[11px]">{ev.location}</p>
                    <p className="mt-2 leading-relaxed">{ev.description}</p>
                  </div>
                </Reveal>
              </li>
            )
          })}
        </ol>
      </div>
    </section>
  )
}
