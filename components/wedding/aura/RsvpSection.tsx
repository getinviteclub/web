"use client"

import { useEffect, useRef, useState, type FormEvent } from "react"
import confetti from "canvas-confetti"
import { ChevronDown } from "lucide-react"
import { Reveal } from "@/components/ui/reveal"
import type { AuraContent } from "@/content/wedding/aura/types"

type RsvpFormData = {
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

const BLANK_FORM: RsvpFormData = {
  fullName: "",
  email: "",
  phone: "",
  attending: "yes",
  dietaryRestrictions: "Ninguna",
  needsShuttle: false,
  songSuggestion: "",
  personalMessage: "",
}

/**
 * Formulario de confirmación de asistencia. Visual y funcional del lado
 * del cliente (persiste en localStorage), pero sin backend — no manda
 * nada a Supabase todavía (decisión explícita: RSVP queda pendiente de
 * conectar). Cada cliente tiene su propia clave de localStorage, así no
 * se pisan entre sí en este mismo navegador.
 */
export function RsvpSection({ content }: { content: AuraContent }) {
  const storageKey = `wedding_rsvp_${content.couple.bride}_${content.couple.groom}_${content.date.isoTargetDate}`
    .toLowerCase()
    .replace(/\s+/g, "-")

  const [formData, setFormData] = useState<RsvpFormData>(BLANK_FORM)
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)
  const [confirmedData, setConfirmedData] = useState<RsvpFormData | null>(null)
  const sectionRef = useRef<HTMLElement>(null)

  useEffect(() => {
    try {
      const saved = localStorage.getItem(storageKey)
      if (saved) {
        setConfirmedData(JSON.parse(saved))
        setIsSubmitted(true)
      }
    } catch {
      // localStorage puede no estar disponible (modo privado); sin RSVP previo, no pasa nada.
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  const scrollToConfirmation = () => {
    requestAnimationFrame(() => {
      if (!sectionRef.current) return
      const top = sectionRef.current.getBoundingClientRect().top + window.scrollY - 100
      window.scrollTo({ top, behavior: "smooth" })
    })
  }

  const triggerConfetti = () => {
    try {
      confetti({
        particleCount: 80,
        spread: 70,
        origin: { y: 0.6 },
        colors: ["#202D24", "#B89B72", "#E7DECD", "#1C1B18"],
      })
    } catch {
      // el confetti es un adorno, si falla no bloquea la confirmación
    }
  }

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault()
    if (!formData.fullName.trim()) return

    setIsSubmitting(true)

    setTimeout(() => {
      const payload: RsvpFormData = { ...formData, timestamp: new Date().toISOString() }

      try {
        localStorage.setItem(storageKey, JSON.stringify(payload))
      } catch {
        // sin localStorage, la confirmación igual se muestra en pantalla
      }

      setConfirmedData(payload)
      setIsSubmitted(true)
      setIsSubmitting(false)
      scrollToConfirmation()

      if (formData.attending === "yes") triggerConfetti()
    }, 700)
  }

  const handleReset = () => {
    try {
      localStorage.removeItem(storageKey)
    } catch {
      // nada que limpiar
    }
    setFormData(BLANK_FORM)
    setIsSubmitted(false)
    setConfirmedData(null)
  }

  return (
    <section
      id="rsvp"
      ref={sectionRef}
      className="relative overflow-hidden border-t border-[#1C1B18]/10 bg-[#F2F2EF] py-24 md:py-36"
    >
      <div className="mx-auto max-w-7xl px-6 md:px-12">
        <div className="mb-16 flex flex-col justify-between gap-6 border-b border-[#1C1B18]/15 pb-8 md:mb-20 md:flex-row md:items-end">
          <div>
            <div className="mb-3 flex items-center gap-3 font-sans text-[10px] tracking-[0.13em] text-[#3A3833]">
              <span className="font-serif-display text-base italic tracking-normal text-[#20221C]">
                VIII. Confirmación de asistencia
              </span>
            </div>
            <h2 className="font-serif-display text-4xl tracking-tight text-[#1C1B18] sm:text-5xl md:text-6xl">
              Confirmar asistencia
            </h2>
          </div>
          <div className="max-w-md">
            <p className="font-serif-editorial text-sm text-[#20221C]">
              Confirmá tu asistencia antes del 15 de septiembre para organizar cada detalle.
            </p>
          </div>
        </div>

        <div className="mx-auto max-w-3xl">
          {isSubmitted && confirmedData ? (
            <div className="aura-fade-in-scale relative bg-[#F2F2EF] p-8 text-center sm:p-14">
              <div className="mb-2 font-sans text-[10px] tracking-[0.13em] text-[#3A3833]">
                Pase oficial de invitación
              </div>
              <h3 className="font-serif-display mb-3 text-3xl text-[#1C1B18] sm:text-4xl">
                {confirmedData.attending === "yes"
                  ? "¡Gracias por confirmar tu presencia!"
                  : "Lamentamos que no puedas acompañarnos"}
              </h3>
              <div className="font-serif-display mb-8 text-sm italic text-[#1C1B18]">
                {confirmedData.attending === "yes"
                  ? `Nos vemos en ${content.location.venueName}`
                  : "Estarás en nuestros corazones"}
              </div>

              <div className="mx-auto max-w-lg space-y-3 border border-dashed border-[#1C1B18]/20 bg-[#F2F2EF] p-6 text-left font-sans text-base">
                <div className="flex justify-between border-b border-[#1C1B18]/10 pb-2">
                  <span className="tracking-wide text-[#3A3833]">Titular:</span>
                  <span className="font-serif-display text-sm font-semibold text-[#1C1B18]">
                    {confirmedData.fullName}
                  </span>
                </div>
                <div className="flex justify-between border-b border-[#1C1B18]/10 pb-2">
                  <span className="tracking-wide text-[#3A3833]">Asistencia:</span>
                  <span className="font-serif-display font-semibold text-[#202D24]">
                    {confirmedData.attending === "yes" ? "Confirmada" : "No asistirá"}
                  </span>
                </div>
                <div className="flex justify-between border-b border-[#1C1B18]/10 pb-2">
                  <span className="tracking-wide text-[#3A3833]">Menú:</span>
                  <span className="font-serif-display text-[#1C1B18]">{confirmedData.dietaryRestrictions}</span>
                </div>
                <div className="flex justify-between">
                  <span className="tracking-wide text-[#3A3833]">Traslado:</span>
                  <span className="font-serif-display text-[#1C1B18]">
                    {confirmedData.needsShuttle ? "Sí, servicio de traslado" : "Movilidad propia"}
                  </span>
                </div>
              </div>

              <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row sm:gap-8">
                <button
                  onClick={handleReset}
                  className="font-serif-display border-b border-[#20221C]/40 pb-1 text-xs font-medium tracking-[0.1em] text-[#20221C] transition-colors hover:text-[#1C1B18] sm:text-sm"
                >
                  Modificar mi respuesta
                </button>
              </div>
            </div>
          ) : (
            <Reveal from="up">
              <form onSubmit={handleSubmit} className="space-y-8 bg-[#F2F2EF] p-8 sm:p-12">
              <div>
                <label className="mb-3 block font-sans text-sm font-medium tracking-[0.025em] text-[#3A3833]">
                  ¿Podrás acompañarnos? *
                </label>
                <div className="grid grid-cols-2 gap-4">
                  <button
                    type="button"
                    onClick={() => setFormData({ ...formData, attending: "yes" })}
                    className={`flex flex-col items-center gap-1.5 border px-6 py-5 text-center transition-all ${
                      formData.attending === "yes"
                        ? "border-[#1C1B18] bg-[#1C1B18] text-[#F2F2EF]"
                        : "border-[#1C1B18]/20 bg-transparent text-[#1C1B18] hover:border-[#1C1B18]"
                    }`}
                  >
                    <span className="font-serif-display text-xl tracking-wide sm:text-2xl">Sí, asistiré</span>
                  </button>
                  <button
                    type="button"
                    onClick={() => setFormData({ ...formData, attending: "no" })}
                    className={`flex flex-col items-center gap-1.5 border px-6 py-5 text-center transition-all ${
                      formData.attending === "no"
                        ? "border-[#1C1B18] bg-[#1C1B18] text-[#F2F2EF]"
                        : "border-[#1C1B18]/20 bg-transparent text-[#1C1B18] hover:border-[#1C1B18]"
                    }`}
                  >
                    <span className="font-serif-display text-xl tracking-wide sm:text-2xl">No podré asistir</span>
                  </button>
                </div>
              </div>

              <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
                <div>
                  <label htmlFor="fullName" className="mb-2 block font-sans text-sm tracking-[0.025em] text-[#3A3833]">
                    Nombre completo *
                  </label>
                  <input
                    id="fullName"
                    type="text"
                    required
                    value={formData.fullName}
                    onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                    placeholder="Ej. Sofía Martínez"
                    className="w-full border border-[#1C1B18]/20 bg-[#F2F2EF] px-4 py-3 font-sans text-sm text-[#1C1B18] placeholder:text-[#3A3833]/60 focus:border-[#1C1B18] focus:outline-none"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="mb-2 block font-sans text-sm tracking-[0.025em] text-[#3A3833]">
                    Correo electrónico *
                  </label>
                  <input
                    id="email"
                    type="email"
                    required
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    placeholder="sofia@ejemplo.com"
                    className="w-full border border-[#1C1B18]/20 bg-[#F2F2EF] px-4 py-3 font-sans text-sm text-[#1C1B18] placeholder:text-[#3A3833]/60 focus:border-[#1C1B18] focus:outline-none"
                  />
                </div>
              </div>

              <div>
                <label htmlFor="phone" className="mb-2 block font-sans text-sm tracking-[0.025em] text-[#3A3833]">
                  Teléfono / WhatsApp
                </label>
                <input
                  id="phone"
                  type="tel"
                  value={formData.phone}
                  onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                  placeholder="+54 9 11 1234-5678"
                  className="w-full border border-[#1C1B18]/20 bg-[#F2F2EF] px-4 py-3 font-sans text-sm text-[#1C1B18] placeholder:text-[#3A3833]/60 focus:border-[#1C1B18] focus:outline-none"
                />
              </div>

              {formData.attending === "yes" && (
                <>
                  <div>
                    <label htmlFor="dietary" className="mb-2 block font-sans text-sm tracking-[0.025em] text-[#3A3833]">
                      Preferencias o restricciones alimentarias
                    </label>
                    <div className="relative">
                      <select
                        id="dietary"
                        value={formData.dietaryRestrictions}
                        onChange={(e) => setFormData({ ...formData, dietaryRestrictions: e.target.value })}
                        className="w-full appearance-none border border-[#1C1B18]/20 bg-[#F2F2EF] px-4 py-3 pr-10 font-sans text-sm text-[#1C1B18] focus:border-[#1C1B18] focus:outline-none"
                      >
                        <option value="Ninguna">Menú tradicional (sin restricciones)</option>
                        <option value="Vegetariano">Menú vegetariano</option>
                        <option value="Vegano">Menú vegano</option>
                        <option value="Celíaco / Sin TACC">Menú celíaco (sin TACC)</option>
                        <option value="Intolerancia a la Lactosa">Intolerancia a la lactosa</option>
                        <option value="Otra alergia">Otra alergia (especificar en mensaje)</option>
                      </select>
                      <ChevronDown className="pointer-events-none absolute right-4 top-1/2 h-4 w-4 -translate-y-1/2 text-[#3A3833]" />
                    </div>
                  </div>

                  {content.shuttle.available && (
                    <div className="flex items-start gap-3">
                      <input
                        id="needsShuttle"
                        type="checkbox"
                        checked={formData.needsShuttle}
                        onChange={(e) => setFormData({ ...formData, needsShuttle: e.target.checked })}
                        className="mt-1 h-4 w-4 accent-[#202D24]"
                      />
                      <label htmlFor="needsShuttle" className="font-sans text-sm text-[#20221C]">
                        <span className="mb-0.5 block text-base text-[#1C1B18]">
                          Utilizaré el transfer / traslado oficial
                        </span>
                        Salida {shuttleSummary(content.shuttle)}.
                      </label>
                    </div>
                  )}

                  <div>
                    <label htmlFor="song" className="mb-2 block font-sans text-sm tracking-[0.025em] text-[#3A3833]">
                      ¿Qué canción no puede faltar en la fiesta?
                    </label>
                    <input
                      id="song"
                      type="text"
                      value={formData.songSuggestion}
                      onChange={(e) => setFormData({ ...formData, songSuggestion: e.target.value })}
                      placeholder="Ej. Fleetwood Mac — Dreams / Soda Stereo"
                      className="w-full border border-[#1C1B18]/20 bg-[#F2F2EF] px-4 py-3 font-sans text-sm text-[#1C1B18] placeholder:text-[#3A3833]/60"
                    />
                  </div>
                </>
              )}

              <div>
                <label htmlFor="message" className="mb-2 block font-sans text-sm tracking-[0.025em] text-[#3A3833]">
                  Mensaje o dedicatoria para los novios
                </label>
                <textarea
                  id="message"
                  rows={3}
                  value={formData.personalMessage}
                  onChange={(e) => setFormData({ ...formData, personalMessage: e.target.value })}
                  placeholder={`Escribí unas palabras para ${content.couple.bride} & ${content.couple.groom}...`}
                  className="w-full border border-[#1C1B18]/20 bg-[#F2F2EF] px-4 py-3 font-sans text-sm text-[#1C1B18] placeholder:text-[#3A3833]/60"
                />
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className="font-serif-display flex w-full items-center justify-center gap-3 border border-[#1C1B18] bg-[#1C1B18] py-4 text-xs font-semibold tracking-[0.03em] text-[#F2F2EF] transition-all duration-300 hover:bg-[#202D24] disabled:opacity-50 sm:text-sm"
              >
                {isSubmitting ? "Enviando respuesta..." : "Confirmar respuesta"}
              </button>

              <div className="text-center font-sans text-xs tracking-[0.025em] text-[#3A3833]">
                Confirmación válida hasta el 15 de septiembre de 2027
              </div>
              </form>
            </Reveal>
          )}
        </div>
      </div>
    </section>
  )
}

function shuttleSummary(shuttle: AuraContent["shuttle"]) {
  return `a las ${shuttle.pickupTime} desde ${shuttle.pickupPoint} y regreso durante la fiesta`
}
