"use client"

import type { FormEvent } from "react"
import type { WeddingContent } from "@/content/wedding/types"
import { NOCTURNA_COPY as C } from "@/content/wedding/nocturna/copy"
import type { RsvpData } from "@/lib/wedding/use-rsvp"

type Props = {
  content: WeddingContent
  form: RsvpData
  set: <K extends keyof RsvpData>(campo: K, valor: RsvpData[K]) => void
  enviar: (e: FormEvent) => void
  enviando: boolean
}

function Campo({ id, label, children }: { id: string; label: string; children: React.ReactNode }) {
  return (
    <div>
      <label htmlFor={id} className="nc-sans nc-muted block">
        {label}
      </label>
      {children}
    </div>
  )
}

/**
 * El formulario: los mismos campos que el RSVP de Aura y Studio. La
 * asistencia como dos opciones con círculo (como un formulario impreso)
 * y el resto, líneas de 1px.
 */
export function NocturnaRsvpForm({ content, form, set, enviar, enviando }: Props) {
  const va = form.attending === "yes"
  const opciones = [
    { valor: "yes" as const, label: C.rsvp.si },
    { valor: "no" as const, label: C.rsvp.no },
  ]

  return (
    <form onSubmit={enviar} className="space-y-8">
      <fieldset>
        <legend className="nc-display text-lg uppercase tracking-[0.06em]">{C.rsvp.pregunta}</legend>
        <div className="mt-4 space-y-3">
          {opciones.map((o) => (
            <label key={o.valor} className="flex cursor-pointer items-center gap-3">
              <input type="radio" name="nc-asiste" className="nc-radio" checked={form.attending === o.valor} onChange={() => set("attending", o.valor)} />
              <span>{o.label}</span>
            </label>
          ))}
        </div>
      </fieldset>

      <Campo id="nc-nombre" label={`${C.rsvp.nombre} *`}>
        <input id="nc-nombre" required className="nc-field" value={form.fullName} onChange={(e) => set("fullName", e.target.value)} />
      </Campo>

      <div className="grid gap-8 sm:grid-cols-2">
        <Campo id="nc-email" label={C.rsvp.email}>
          <input id="nc-email" type="email" className="nc-field" value={form.email} onChange={(e) => set("email", e.target.value)} />
        </Campo>
        <Campo id="nc-tel" label={C.rsvp.telefono}>
          <input id="nc-tel" type="tel" className="nc-field" value={form.phone} onChange={(e) => set("phone", e.target.value)} />
        </Campo>
      </div>

      {va && (
        <>
          <Campo id="nc-menu" label={C.rsvp.menu}>
            <select id="nc-menu" className="nc-field" value={form.dietaryRestrictions || C.rsvp.menus[0]} onChange={(e) => set("dietaryRestrictions", e.target.value)}>
              {C.rsvp.menus.map((m) => (
                <option key={m}>{m}</option>
              ))}
            </select>
          </Campo>

          {content.shuttle.available && (
            <label className="flex cursor-pointer items-center gap-3">
              <input type="checkbox" checked={form.needsShuttle} onChange={(e) => set("needsShuttle", e.target.checked)} className="size-3.5 accent-[var(--nc-ink)]" />
              <span>{C.rsvp.traslado}</span>
            </label>
          )}

          <Campo id="nc-cancion" label={C.rsvp.cancion}>
            <input id="nc-cancion" className="nc-field" value={form.songSuggestion} onChange={(e) => set("songSuggestion", e.target.value)} />
          </Campo>
        </>
      )}

      <Campo id="nc-mensaje" label={C.rsvp.mensaje}>
        <textarea id="nc-mensaje" rows={2} className="nc-field resize-none" value={form.personalMessage} onChange={(e) => set("personalMessage", e.target.value)} />
      </Campo>

      <div className="pt-2 text-center">
        <button type="submit" disabled={enviando} className="nc-btn">
          {enviando ? C.rsvp.enviando : C.rsvp.enviar}
        </button>
      </div>
    </form>
  )
}
