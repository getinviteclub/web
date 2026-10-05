import type { WeddingContent } from "@/content/wedding/types"
import { STUDIO_COPY as C } from "@/content/wedding/studio/copy"
import { Reveal } from "@/components/ui/reveal"
import { Mapa } from "@/components/ui/illustrations/papeleria"
import { Mono, Auto } from "@/components/ui/illustrations/objetos"
import { SectionHead } from "./SectionHead"
import { HandHeart } from "./Trazos"

/**
 * Dónde y cuándo: lugar con el mapa dibujado y el botón a Google Maps,
 * día y hora, dress code con los colores en corazones (referencia: la
 * invitación de los dibujos) y el traslado, si hay.
 */
export function StudioDetails({ content }: { content: WeddingContent }) {
  const { location, date, dressCode, shuttle } = content

  return (
    <section id="detalles" className="border-t border-[var(--st-rule)] px-6 py-24 md:py-32">
      <SectionHead label={C.details.label} title={C.details.title} />

      <div className="mx-auto grid max-w-5xl gap-16 md:grid-cols-2">
        <Reveal from="left" className="flex flex-col items-center text-center">
          <Mapa className="st-ink w-28" />
          <h3 className="st-hand mt-5 text-5xl font-semibold">{location.venueName}</h3>
          <p className="st-mono st-muted mt-3 text-[11px]">{location.estateSubtitle}</p>
          <p className="mt-3 text-lg">{location.address}</p>
          <a href={location.mapsUrl} target="_blank" rel="noopener noreferrer" className="st-btn mt-7">
            {C.details.comoLlegar}
          </a>

          <dl className="mt-12 grid w-full grid-cols-2 border-t border-[var(--st-rule)] pt-8">
            <div>
              <dt className="st-mono st-muted text-[11px]">{C.details.fecha}</dt>
              <dd className="st-hand mt-2 text-4xl font-semibold">{date.dayOfWeek}</dd>
              <dd className="mt-1">{date.displayDate}</dd>
            </div>
            <div className="border-l border-[var(--st-rule)]">
              <dt className="st-mono st-muted text-[11px]">{C.details.hora}</dt>
              <dd className="st-hand mt-2 text-4xl font-semibold">{date.time}</dd>
              <dd className="st-script st-ink mt-1 text-xs">{C.details.horaNota}</dd>
            </div>
          </dl>
        </Reveal>

        <Reveal from="right" className="space-y-12">
          <div className="text-center md:text-left">
            <Mono className="st-ink mx-auto w-20 md:mx-0" />
            <p className="st-mono st-muted mt-5 text-[11px]">{C.details.dressCode}</p>
            <h3 className="st-hand mt-2 text-5xl font-semibold">{dressCode.title}</h3>
            <p className="mt-3 text-lg leading-relaxed">{dressCode.description}</p>
            <p className="st-script st-ink mt-6 text-sm">{C.details.paleta}</p>
            <ul className="mt-3 flex justify-center gap-3 md:justify-start">
              {dressCode.palettes.map((c) => (
                <li key={c.hex} title={c.name}>
                  <HandHeart color={c.hex} />
                  <span className="sr-only">{c.name}</span>
                </li>
              ))}
            </ul>
          </div>

          {shuttle.available && (
            <div className="border-t border-[var(--st-rule)] pt-10 text-center md:text-left">
              <Auto className="st-ink mx-auto w-24 md:mx-0" />
              <h3 className="st-hand mt-4 text-5xl font-semibold">{C.details.traslado}</h3>
              <p className="mt-3 text-lg leading-relaxed">{shuttle.note}</p>
              <p className="mt-4">
                <span className="st-mono st-muted text-[11px]">{C.details.salida}</span> {shuttle.pickupTime} — {shuttle.pickupPoint}
              </p>
              <p className="mt-1">
                <span className="st-mono st-muted text-[11px]">{C.details.regresos}</span> {shuttle.returnTimes.join(" / ")}
              </p>
            </div>
          )}
        </Reveal>
      </div>
    </section>
  )
}
