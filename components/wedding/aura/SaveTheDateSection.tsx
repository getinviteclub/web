import { Reveal } from "@/components/ui/reveal"
import { getGoogleCalendarUrl } from "@/lib/wedding/calendar"
import type { AuraContent } from "@/content/wedding/aura/types"

/** Cierre de página: monograma, resumen de fecha/lugar y CTA a Google Calendar. Port fiel del original de Flor. */
export function SaveTheDateSection({ content }: { content: AuraContent }) {
  const [monogramLeft, monogramRight] = content.couple.monogram.split("&")

  return (
    <section className="relative overflow-hidden border-t border-[#1C1B18]/10 bg-[#F2F2EF] py-20">
      <div className="mx-auto max-w-5xl px-6 text-center md:px-12">
        <Reveal from="up" className="bg-[#F2F2EF] p-8 sm:p-12">
          <div className="font-hero-script mb-4 flex items-center justify-center text-3xl sm:text-4xl">
            <span>{monogramLeft}</span>
            <span className="-ml-2">{monogramRight}</span>
          </div>

          <h3 className="font-serif-display mb-2 text-3xl text-[#1C1B18] sm:text-4xl">Agendá nuestro gran día</h3>

          <div className="font-serif-display mb-6 text-base italic text-[#1C1B18]">
            {content.date.displayDate} — {content.location.city}, {content.location.province}
          </div>

          <p className="font-serif-editorial mx-auto mb-8 max-w-md text-sm text-[#20221C] sm:text-base">
            Agregá el evento automáticamente a tu calendario para recibir recordatorios y tener todos los detalles
            siempre a mano.
          </p>

          <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
            <a
              href={getGoogleCalendarUrl(content.date.calendarEvent)}
              target="_blank"
              rel="noopener noreferrer"
              className="font-serif-display inline-flex w-full items-center justify-center gap-2.5 border border-[#1C1B18] bg-[#1C1B18] px-7 py-4 text-xs font-semibold tracking-[0.02em] text-[#F2F2EF] transition-all duration-300 hover:bg-transparent hover:text-[#1C1B18] sm:w-auto sm:text-sm"
            >
              Agregar a Google Calendar
            </a>
          </div>
        </Reveal>
      </div>
    </section>
  )
}
