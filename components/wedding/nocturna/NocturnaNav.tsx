"use client"

import { useEffect, useState } from "react"
import type { WeddingContent } from "@/content/wedding/types"
import { NOCTURNA_COPY as C } from "@/content/wedding/nocturna/copy"
import { cn } from "@/lib/utils"

/**
 * Barra fina como el membrete de una tarjeta: la fecha a la izquierda,
 * las iniciales en caligrafía al centro y "Confirmar" a la derecha.
 * La regla de abajo aparece recién al bajar.
 */
export function NocturnaNav({ content }: { content: WeddingContent }) {
  const [abajo, setAbajo] = useState(false)

  useEffect(() => {
    const onScroll = () => setAbajo(window.scrollY > 40)
    onScroll()
    window.addEventListener("scroll", onScroll, { passive: true })
    return () => window.removeEventListener("scroll", onScroll)
  }, [])

  const [a, b] = content.couple.monogram.split("&").map((s) => s.trim())

  return (
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-50 grid grid-cols-3 items-center bg-[var(--nc-paper)]/90 px-5 py-3 backdrop-blur transition-[border-color] duration-500 sm:px-10",
        "border-b",
        abajo ? "border-[var(--nc-rule)]" : "border-transparent"
      )}
    >
      <span className="nc-sans nc-muted">{content.date.shortDate}</span>
      <a href="#portada" aria-label={C.nav.inicio} className="nc-script justify-self-center text-[30px] leading-none">
        {a}
        <span className="nc-display mx-1 align-middle text-xs">&amp;</span>
        {b}
      </a>
      <a href="#rsvp" className="nc-sans nc-link justify-self-end">
        {C.nav.rsvp}
      </a>
    </header>
  )
}
