"use client"

import type { FormEvent } from "react"
import type { WeddingContent } from "@/content/wedding/types"
import { STUDIO_COPY as C } from "@/content/wedding/studio/copy"
import type { RsvpData } from "@/lib/wedding/use-rsvp"

type Props = {
  content: WeddingContent
  form: RsvpData
  set: <K extends keyof RsvpData>(campo: K, valor: RsvpData[K]) => void
  enviar: (e: FormEvent) => void
  enviando: boolean
}

/** Un campo con su label a máquina arriba y la línea para escribir abajo. */
function Campo({ id, label, children }: { id: string; label: string; children: React.ReactNode }) {
  return (
    <div>
      <label htmlFor={id} className="st-mono st-muted block text-[11px]">
        {label}
      </label>
      {children}
    </div>
  )
}

/**
 * La tarjeta de respuesta: los mismos campos que el RSVP de Aura (asiste
 * o no, contacto, menú, traslado, canción, mensaje), con campos de una
 * sola línea, como una tarjeta para completar a mano.
 */
export function StudioRsvpForm({ content, form, set, enviar, enviando }: Props) {
  const va = form.attending === "yes"

  return (
    <form onSubmit={enviar} className="space-y-8">
      <div className="flex justify-center gap-3">
        <button type="button" data-activo={va} onClick={() => set("attending", "yes")} className="st-btn">
          {C.rsvp.si}
        </button>
        <button type="button" data-activo={!va} onClick={() => set("attending", "no")} className="st-btn">
          {C.rsvp.no}
        </button>
      </div>

      <Campo id="rsvp-nombre" label={`${C.rsvp.nombre} *`}>
        <input id="rsvp-nombre" required className="st-field" value={form.fullName} onChange={(e) => set("fullName", e.target.value)} />
      </Campo>

      <div className="grid gap-8 sm:grid-cols-2">
        <Campo id="rsvp-email" label={C.rsvp.email}>
          <input id="rsvp-email" type="email" className="st-field" value={form.email} onChange={(e) => set("email", e.target.value)} />
        </Campo>
        <Campo id="rsvp-tel" label={C.rsvp.telefono}>
          <input id="rsvp-tel" type="tel" className="st-field" value={form.phone} onChange={(e) => set("phone", e.target.value)} />
        </Campo>
      </div>

      {va && (
        <>
          <Campo id="rsvp-menu" label={C.rsvp.menu}>
            <select id="rsvp-menu" className="st-field" value={form.dietaryRestrictions || C.rsvp.menus[0]} onChange={(e) => set("dietaryRestrictions", e.target.value)}>
              {C.rsvp.menus.map((m) => (
                <option key={m}>{m}</option>
              ))}
            </select>
          </Campo>

          {content.shuttle.available && (
            <label className="flex items-center gap-3">
              <input type="checkbox" checked={form.needsShuttle} onChange={(e) => set("needsShuttle", e.target.checked)} className="size-5 accent-[var(--st-ink)]" />
              <span className="st-hand text-3xl">{C.rsvp.traslado}</span>
            </label>
          )}

          <Campo id="rsvp-cancion" label={C.rsvp.cancion}>
            <input id="rsvp-cancion" className="st-field" value={form.songSuggestion} onChange={(e) => set("songSuggestion", e.target.value)} />
          </Campo>
        </>
      )}

      <Campo id="rsvp-mensaje" label={C.rsvp.mensaje}>
        <textarea id="rsvp-mensaje" rows={2} className="st-field resize-none" value={form.personalMessage} onChange={(e) => set("personalMessage", e.target.value)} />
      </Campo>

      <div className="flex justify-center pt-2">
        <button type="submit" disabled={enviando} className="st-btn" data-activo="true">
          {enviando ? C.rsvp.enviando : C.rsvp.enviar}
        </button>
      </div>
    </form>
  )
}
