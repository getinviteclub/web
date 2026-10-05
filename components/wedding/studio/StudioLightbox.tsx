"use client"

import { useEffect } from "react"
import type { GalleryImage } from "@/content/wedding/types"
import { STUDIO_COPY as C } from "@/content/wedding/studio/copy"
import { ArrowLeft, ArrowRight, X, ICON_WEIGHT } from "@/components/ui/icons"

type Props = {
  images: GalleryImage[]
  index: number | null
  onClose: () => void
  onNavigate: (i: number) => void
}

/**
 * La foto a pantalla completa, sobre papel oscurecido. Teclado: Esc
 * cierra, flechas navegan. Bloquea el scroll de la página mientras está
 * abierto.
 */
export function StudioLightbox({ images, index, onClose, onNavigate }: Props) {
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
  const boton = "rounded-full border border-white/30 p-3 text-white transition-colors hover:bg-white/10"

  return (
    <div role="dialog" aria-modal="true" aria-label={img.title} className="fixed inset-0 z-[70] flex flex-col bg-[#2a2622]/95 p-4 md:p-8">
      <div className="flex items-center justify-between text-white">
        <span className="st-mono text-[11px] opacity-70">
          {index + 1} / {total}
        </span>
        <button type="button" onClick={onClose} aria-label={C.gallery.cerrar} className={boton}>
          <X size={18} weight={ICON_WEIGHT} />
        </button>
      </div>

      <div className="relative flex flex-1 items-center justify-center gap-3 py-4">
        <button type="button" onClick={() => onNavigate((index - 1 + total) % total)} aria-label={C.gallery.anterior} className={boton}>
          <ArrowLeft size={18} weight={ICON_WEIGHT} />
        </button>
        {/* eslint-disable-next-line @next/next/no-img-element -- tamaño libre según la foto, no un box fijo */}
        <img src={img.src} alt={img.alt} className="max-h-[72vh] max-w-[78vw] object-contain shadow-2xl" />
        <button type="button" onClick={() => onNavigate((index + 1) % total)} aria-label={C.gallery.siguiente} className={boton}>
          <ArrowRight size={18} weight={ICON_WEIGHT} />
        </button>
      </div>

      <div className="text-center text-white">
        <p className="st-hand text-4xl">{img.title}</p>
        <p className="st-mono mt-1 text-[11px] opacity-70">
          {img.location} · {img.caption}
        </p>
      </div>
    </div>
  )
}
