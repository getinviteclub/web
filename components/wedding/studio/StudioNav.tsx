"use client"

import { useEffect, useState } from "react"
import type { WeddingContent } from "@/content/wedding/types"
import { STUDIO_COPY as C } from "@/content/wedding/studio/copy"
import { cn } from "@/lib/utils"

/**
 * Barra fija: monograma a marcador (vuelve a la portada) y el botón de
 * confirmar. Aparece el fondo de papel al scrollear y una línea de tinta
 * abajo marca cuánto se leyó de la invitación.
 */
export function StudioNav({ content }: { content: WeddingContent }) {
  const [progreso, setProgreso] = useState(0)
  const [scrolleado, setScrolleado] = useState(false)

  useEffect(() => {
    const onScroll = () => {
      const total = document.documentElement.scrollHeight - window.innerHeight
      setProgreso(total > 0 ? (window.scrollY / total) * 100 : 0)
      setScrolleado(window.scrollY > 60)
    }
    onScroll()
    window.addEventListener("scroll", onScroll, { passive: true })
    return () => window.removeEventListener("scroll", onScroll)
  }, [])

  return (
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-50 flex items-center justify-between px-5 py-3 transition-colors duration-500 sm:px-10",
        scrolleado ? "bg-[var(--st-paper)]/95 backdrop-blur" : "bg-transparent"
      )}
    >
      <a href="#portada" aria-label={C.nav.inicio} className="st-hand st-ink text-4xl font-bold leading-none">
        {content.couple.monogram}
      </a>
      <a href="#rsvp" className="st-btn !px-5 !py-2">
        {C.nav.rsvp}
      </a>
      <span
        aria-hidden="true"
        className="absolute bottom-0 left-0 h-[2px] bg-[var(--st-ink)] transition-[width] duration-150"
        style={{ width: `${progreso}%` }}
      />
    </header>
  )
}
