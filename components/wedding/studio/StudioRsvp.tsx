"use client"

import type { WeddingContent } from "@/content/wedding/types"
import { STUDIO_COPY as C } from "@/content/wedding/studio/copy"
import { useRsvp } from "@/lib/wedding/use-rsvp"
import { Reveal } from "@/components/ui/reveal"
import { Sobre } from "@/components/ui/illustrations/papeleria"
import { SectionHead } from "./SectionHead"
import { StudioRsvpForm } from "./StudioRsvpForm"
import { HandCircle } from "./Trazos"

/** Los colores del confeti: la tinta y el papel del diseño. */
const CONFETI = ["#C2321F", "#E9B48F", "#FBF8F1", "#2A2622"]

/**
 * Confirmación de asistencia. Antes de responder, la tarjeta de
 * respuesta; después, el "pase" con lo que contestaron y la opción de
 * cambiarlo. La lógica (guardado, confeti) está en useRsvp.
 */
export function StudioRsvp({ content }: { content: WeddingContent }) {
  const rsvp = useRsvp(content, CONFETI)
  const nota = content.rsvpDeadline ? `${C.rsvp.hasta} ${content.rsvpDeadline}.` : undefined

  return (
    <section id="rsvp" className="border-t border-[var(--st-rule)] px-6 py-24 md:py-32">
      <SectionHead label={C.rsvp.label} title={C.rsvp.title} nota={nota} />

      <Reveal from="up" className="mx-auto max-w-2xl bg-[var(--st-card)] px-6 py-10 shadow-[0_18px_40px_-24px_rgba(42,38,34,.4)] sm:px-12">
        {rsvp.confirmado ? (
          <div className="text-center">
            <Sobre className="st-ink mx-auto w-24" />
            <p className="st-hand st-ink mt-6 text-6xl font-semibold">
              {rsvp.confirmado.attending === "yes" ? C.rsvp.graciasSi : C.rsvp.graciasNo}
            </p>
            <p className="mt-4 text-xl">{rsvp.confirmado.fullName}</p>
            {rsvp.confirmado.attending === "yes" && (
              <HandCircle className="st-hand mt-6 text-4xl">{content.date.shortDate}</HandCircle>
            )}
            <div className="mt-10">
              <button type="button" onClick={rsvp.modificar} className="st-mono st-muted text-[11px] underline underline-offset-4">
                {C.rsvp.modificar}
              </button>
            </div>
          </div>
        ) : (
          <StudioRsvpForm content={content} form={rsvp.form} set={rsvp.set} enviar={rsvp.enviar} enviando={rsvp.enviando} />
        )}
      </Reveal>
    </section>
  )
}
