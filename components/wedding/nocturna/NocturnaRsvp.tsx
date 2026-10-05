"use client"

import type { WeddingContent } from "@/content/wedding/types"
import { NOCTURNA_COPY as C } from "@/content/wedding/nocturna/copy"
import { useRsvp } from "@/lib/wedding/use-rsvp"
import { Reveal } from "@/components/ui/reveal"
import { NcHead } from "./NcHead"
import { NocturnaRsvpForm } from "./NocturnaRsvpForm"

/** Confeti en la paleta del diseño: espresso, topo, champagne y marfil. */
const CONFETI = ["#3B2A28", "#8A7E76", "#CDBBA0", "#F1EEE8"]

/**
 * Confirmación (referencia "Анкета гостя"): la fecha límite arriba y el
 * formulario dentro de la tarjeta de doble marco. Al confirmar, la misma
 * tarjeta responde en caligrafía. La lógica vive en useRsvp.
 */
export function NocturnaRsvp({ content }: { content: WeddingContent }) {
  const rsvp = useRsvp(content, CONFETI)

  return (
    <section id="rsvp" className="px-6 py-24 md:py-32">
      <NcHead title={C.rsvp.title} className="!mb-6" />
      {content.rsvpDeadline && (
        <p className="nc-muted mx-auto mb-12 max-w-[34ch] text-center">
          {C.rsvp.hasta} {content.rsvpDeadline}.
        </p>
      )}

      <Reveal from="up" className="nc-card mx-auto max-w-xl px-8 py-14 sm:px-14">
        {rsvp.confirmado ? (
          <div className="flex flex-col items-center text-center">
            <p className="nc-script text-[clamp(46px,12vw,64px)] leading-[1.1]">
              {rsvp.confirmado.attending === "yes" ? C.rsvp.graciasSi : C.rsvp.graciasNo}
            </p>
            <p className="nc-display mt-6 text-xl uppercase tracking-[0.06em]">{rsvp.confirmado.fullName}</p>
            <p className="nc-sans nc-muted mt-3">
              {content.date.shortDate} · {content.location.venueName}
            </p>
            <button type="button" onClick={rsvp.modificar} className="nc-sans nc-link mt-10">
              {C.rsvp.modificar}
            </button>
          </div>
        ) : (
          <NocturnaRsvpForm content={content} form={rsvp.form} set={rsvp.set} enviar={rsvp.enviar} enviando={rsvp.enviando} />
        )}
      </Reveal>
    </section>
  )
}
