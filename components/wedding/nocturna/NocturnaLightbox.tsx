"use client"

import { useEffect } from "react"
import type { GalleryImage } from "@/content/wedding/types"
import { NOCTURNA_COPY as C } from "@/content/wedding/nocturna/copy"
import { ArrowLeft, ArrowRight, X, ICON_WEIGHT } from "@/components/ui/icons"

type Props = {
  images: GalleryImage[]
  index: number | null
  onClose: () => void
  onNavigate: (i: number) => void
}

/**
 * La foto a pantalla completa, sobre espresso y en blanco y negro.
 * Esc cierra, flechas navegan; bloquea el scroll de la página.
 */
export function NocturnaLightbox({ images, index, onClose, onNavigate }: Props) {
  const abierto = index !== null
  const total = images.length

  useEffect(() => {
    if (!abierto) return
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose()
      if (e.key === "ArrowRight") onNavigate(((index ?? 0) + 1) % total)
      if (e.key === "ArrowLeft") onNavigate(((index ?? 0) - 1 + total) % total)
    }
    const previo = document.documentElement.style.overflow
    document.documentElement.style.overflow = "hidden"
    window.addEventListener("keydown", onKey)
    return () => {
      window.removeEventListener("keydown", onKey)
      document.documentElement.style.overflow = previo
    }
  }, [abierto, index, total, onClose, onNavigate])

  if (index === null) return null
  const img = images[index]
  const boton = "border border-white/30 p-3 text-white transition-colors hover:bg-[var(--nc-paper)] hover:text-[var(--nc-deep)]"

  return (
    <div role="dialog" aria-modal="true" aria-label={img.title} className="fixed inset-0 z-[70] flex flex-col bg-[var(--nc-deep)]/97 p-4 text-[var(--nc-paper)] md:p-8">
      <div className="flex items-center justify-between">
        <span className="nc-sans text-white/50">
          {String(index + 1).padStart(2, "0")} / {String(total).padStart(2, "0")}
        </span>
        <button type="button" onClick={onClose} aria-label={C.gallery.cerrar} className={boton}>
          <X size={16} weight={ICON_WEIGHT} />
        </button>
      </div>

      <div className="flex flex-1 items-center justify-center gap-3 py-4">
        <button type="button" onClick={() => onNavigate((index - 1 + total) % total)} aria-label={C.gallery.anterior} className={boton}>
          <ArrowLeft size={16} weight={ICON_WEIGHT} />
        </button>
        {/* eslint-disable-next-line @next/next/no-img-element -- tamaño libre según la foto */}
        <img src={img.src} alt={img.alt} className="nc-bw max-h-[72vh] max-w-[78vw] object-contain" />
        <button type="button" onClick={() => onNavigate((index + 1) % total)} aria-label={C.gallery.siguiente} className={boton}>
          <ArrowRight size={16} weight={ICON_WEIGHT} />
        </button>
      </div>

      <div className="text-center">
        <p className="nc-display text-2xl uppercase tracking-[0.06em]">{img.title}</p>
        <p className="mt-1 text-white/60">{img.caption}</p>
      </div>
    </div>
  )
}
