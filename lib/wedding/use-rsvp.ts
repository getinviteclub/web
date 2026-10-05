"use client"

import { useEffect, useState, type FormEvent } from "react"
import confetti from "canvas-confetti"
import type { WeddingContent } from "@/content/wedding/types"

export type RsvpData = {
  fullName: string
  email: string
  phone: string
  attending: "yes" | "no"
  dietaryRestrictions: string
  needsShuttle: boolean
  songSuggestion: string
  personalMessage: string
  timestamp?: string
}

const BLANK: RsvpData = {
  fullName: "",
  email: "",
  phone: "",
  attending: "yes",
  dietaryRestrictions: "",
  needsShuttle: false,
  songSuggestion: "",
  personalMessage: "",
}

/**
 * La lógica del RSVP, separada de cómo se ve. Misma funcionalidad que el
 * de Aura (components/wedding/aura/RsvpSection.tsx, que todavía la tiene
 * adentro): guarda la respuesta en localStorage —una clave por boda— y
 * tira confeti si confirman que van.
 *
 * ⚠️ SIN BACKEND: no manda nada a ningún lado todavía (RSVP pendiente de
 * conectar a Supabase, ver CLAUDE.md). La respuesta solo queda en el
 * navegador del invitado.
 */
export function useRsvp(content: WeddingContent, colores: string[]) {
  const storageKey = `wedding_rsvp_${content.couple.bride}_${content.couple.groom}_${content.date.isoTargetDate}`
    .toLowerCase()
    .replace(/\s+/g, "-")

  const [form, setForm] = useState<RsvpData>(BLANK)
  const [enviando, setEnviando] = useState(false)
  const [confirmado, setConfirmado] = useState<RsvpData | null>(null)

  useEffect(() => {
    try {
      const guardado = localStorage.getItem(storageKey)
      if (guardado) setConfirmado(JSON.parse(guardado))
    } catch {
      // modo privado o sin storage: arranca vacío
    }
  }, [storageKey])

  const set = <K extends keyof RsvpData>(campo: K, valor: RsvpData[K]) =>
    setForm((f) => ({ ...f, [campo]: valor }))

  const enviar = (e: FormEvent) => {
    e.preventDefault()
    if (!form.fullName.trim()) return
    setEnviando(true)

    // Una pausa corta: sin ella la confirmación aparece antes de que se
    // registre el click y se siente como si no hubiera pasado nada.
    setTimeout(() => {
      const payload = { ...form, timestamp: new Date().toISOString() }
      try {
        localStorage.setItem(storageKey, JSON.stringify(payload))
      } catch {
        // sin storage, la confirmación igual se muestra
      }
      setConfirmado(payload)
      setEnviando(false)
      if (payload.attending === "yes") {
        try {
          confetti({ particleCount: 90, spread: 75, origin: { y: 0.6 }, colors: colores })
        } catch {
          // adorno: si falla, no bloquea
        }
      }
    }, 700)
  }

  const modificar = () => {
    try {
      localStorage.removeItem(storageKey)
    } catch {
      // nada que limpiar
    }
    setForm(BLANK)
    setConfirmado(null)
  }

  return { form, set, enviar, enviando, confirmado, modificar }
}
