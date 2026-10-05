import type { WeddingContent } from "@/content/wedding/types"
import { STUDIO_COPY as C } from "@/content/wedding/studio/copy"
import { getGoogleCalendarUrl } from "@/lib/wedding/calendar"
import { Reveal } from "@/components/ui/reveal"
import { Copas } from "@/components/ui/illustrations/celebracion"
import { HandCircle } from "./Trazos"

/**
 * El cierre: "nos vemos el" con la fecha encerrada, el botón para
 * agregarlo al calendario y la firma de la pareja. Repite el gesto de la
 * portada para que la invitación termine como empezó.
 */
export function StudioSaveTheDate({ content }: { content: WeddingContent }) {
  const { couple, date } = content

  return (
    <section className="st-ink border-t border-[var(--st-rule)] px-6 pb-20 pt-24 text-center md:pb-28 md:pt-32">
      <Reveal from="up" className="flex flex-col items-center">
        <Copas className="w-24" />
        <p className="st-script mt-8 text-[clamp(22px,3vw,34px)]">{C.save.title}</p>
        <HandCircle className="st-hand mt-4 text-[clamp(44px,7vw,84px)] font-semibold">{date.displayDate}</HandCircle>

        <a href={getGoogleCalendarUrl(date.calendarEvent)} target="_blank" rel="noopener noreferrer" className="st-btn mt-12">
          {C.save.cta}
        </a>

        <p className="st-script mt-16 text-sm">{C.save.gracias}</p>
        <p className="st-hand mt-2 text-6xl font-semibold">
          {couple.bride} &amp; {couple.groom}
        </p>
      </Reveal>
    </section>
  )
}
