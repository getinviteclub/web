import type { WeddingContent } from "@/content/wedding/types"
import { NOCTURNA_COPY as C } from "@/content/wedding/nocturna/copy"
import { getGoogleCalendarUrl } from "@/lib/wedding/calendar"
import { Reveal } from "@/components/ui/reveal"
import { Auto } from "@/components/ui/illustrations/objetos"

/**
 * Detalles (referencia: el arco color ciruela de "Детали"): un bloque
 * oscuro con forma de arco, el único de la invitación. Adentro, el
 * traslado y el botón para agendar la fecha; abajo, un auto antiguo de
 * trazo fino.
 */
export function NocturnaDetails({ content }: { content: WeddingContent }) {
  const { shuttle, date } = content

  return (
    <section id="detalles" className="px-6 py-16 md:py-24">
      <Reveal
        from="up"
        className="nc-arch mx-auto flex max-w-[460px] flex-col items-center bg-[var(--nc-deep)] px-8 pb-14 pt-24 text-center text-[var(--nc-paper)] sm:px-12"
      >
        <h2 className="nc-title">{C.details.title}</h2>

        {shuttle.available && (
          <>
            <p className="nc-sans mt-10 text-white/60">{C.details.traslado}</p>
            <p className="mt-3 text-white/85">{shuttle.note}</p>
            <dl className="mt-6 space-y-1">
              <div>
                <dt className="nc-sans inline text-white/60">{C.details.salida} </dt>
                <dd className="inline">
                  {shuttle.pickupTime} · {shuttle.pickupPoint}
                </dd>
              </div>
              <div>
                <dt className="nc-sans inline text-white/60">{C.details.vuelta} </dt>
                <dd className="inline">{shuttle.returnTimes.join(" · ")}</dd>
              </div>
            </dl>
          </>
        )}

        <a
          href={getGoogleCalendarUrl(date.calendarEvent)}
          target="_blank"
          rel="noopener noreferrer"
          className="nc-btn nc-btn-light mt-10"
        >
          {C.details.cta}
        </a>

        <Auto className="mt-12 w-24 text-white/80" />
      </Reveal>
    </section>
  )
}
