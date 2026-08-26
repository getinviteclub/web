"use client"

import { useEffect, useState } from "react"
import { WhatsappCta } from "@/components/ui/whatsapp-cta"
import { CTA_INLINE_ID } from "@/lib/dom-ids"

/**
 * Barra de conversión fija al pie.
 *
 * Va SOLO en el detalle de un diseño, no en la landing. Ahí es donde la
 * auditoría ubica el punto ciego #2: el usuario llega al diseño que le
 * gusta, es el momento de máxima intención, y su única salida era
 * scrollear de nuevo hasta encontrar cómo escribir.
 *
 * En la landing se dejó afuera a propósito: una franja comercial siempre
 * presente contradice el posicionamiento premium que definió Facu al
 * sacar el precio del hero.
 *
 * SE MUESTRA con dos condiciones a la vez: que el CTA de la página no
 * esté a la vista Y que el usuario ya haya scrolleado un poco.
 *
 * Las dos hacen falta. Solo el umbral de scroll no servía: el detalle
 * mide 875px contra un viewport de 720, o sea 155px de scroll posible,
 * y la barra no aparecía nunca en desktop. Solo mirar el CTA tampoco:
 * está al pie, así que al abrir la página ya queda fuera de pantalla y
 * la barra saltaba de entrada, antes de que el usuario viera nada.
 *
 * Se lee el rect en el scroll en vez de usar IntersectionObserver: es
 * una sola condición por frame, sin un observer que mantener, y hace
 * falta escuchar el scroll igual por el umbral de enganche.
 */
export function StickyCta({
  nombre,
  precio,
  message,
  trackLabel,
}: {
  /** Nombre del diseño que se está viendo. */
  nombre: string
  /** Ancla de precio, p. ej. "Desde USD 25". */
  precio: string
  message: string
  trackLabel?: string
}) {
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const objetivo = document.getElementById(CTA_INLINE_ID)
    if (!objetivo) return

    /** Píxeles de scroll que cuentan como "ya está mirando". */
    const ENGANCHE = 240
    let ticking = false

    const recalcular = () => {
      if (ticking) return
      ticking = true
      window.requestAnimationFrame(() => {
        const r = objetivo.getBoundingClientRect()
        const ctaFuera = r.bottom < 0 || r.top > window.innerHeight
        setVisible(ctaFuera && window.scrollY > ENGANCHE)
        ticking = false
      })
    }

    recalcular()
    window.addEventListener("scroll", recalcular, { passive: true })
    window.addEventListener("resize", recalcular)

    return () => {
      window.removeEventListener("scroll", recalcular)
      window.removeEventListener("resize", recalcular)
    }
  }, [])

  return (
    <div
      // aria-hidden mientras está oculta: si no, un lector de pantalla
      // anuncia un CTA que visualmente no está.
      aria-hidden={!visible}
      className={[
        "fixed inset-x-0 bottom-0 z-40 border-t border-ink bg-background",
        "transition-transform duration-300 ease-out",
        visible ? "translate-y-0" : "translate-y-full",
      ].join(" ")}
    >
      <div className="mx-auto flex max-w-max items-center justify-between gap-4 px-[var(--pad-x)] py-3">
        <div className="min-w-0">
          <p className="truncate font-display text-lg font-normal leading-tight">
            {nombre}
          </p>
          <p className="note-copy">{precio}</p>
        </div>

        <WhatsappCta
          message={message}
          trackLabel={trackLabel}
          className="shrink-0"
        >
          Escribinos
        </WhatsappCta>
      </div>
    </div>
  )
}
