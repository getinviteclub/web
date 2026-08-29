"use client"

import { useEffect } from "react"
import { ChevronLeft, ChevronRight, X } from "lucide-react"
import type { GalleryImage } from "@/content/wedding/aura/types"

type LightboxModalProps = {
  images: GalleryImage[]
  currentIndex: number | null
  onClose: () => void
  onNavigate: (index: number) => void
}

/** Visor de foto a pantalla completa para <GallerySection>, con navegación por teclado. Port fiel del original de Flor. */
export function LightboxModal({ images, currentIndex, onClose, onNavigate }: LightboxModalProps) {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (currentIndex === null) return
      if (e.key === "Escape") onClose()
      if (e.key === "ArrowRight") onNavigate((currentIndex + 1) % images.length)
      if (e.key === "ArrowLeft") onNavigate((currentIndex - 1 + images.length) % images.length)
    }

    window.addEventListener("keydown", handleKeyDown)
    return () => window.removeEventListener("keydown", handleKeyDown)
  }, [currentIndex, images.length, onClose, onNavigate])

  if (currentIndex === null) return null

  const currentImage = images[currentIndex]

  return (
    <div className="aura-fade-in fixed inset-0 z-50 flex flex-col justify-between bg-[#1C1B18]/95 p-4 backdrop-blur-md md:p-8">
      <div className="flex items-center justify-between border-b border-white/10 pb-4 text-[#F2F2EF]">
        <div className="flex items-center gap-4 font-sans text-[10px] tracking-[0.1em]">
          <span className="font-semibold text-[#B89B72]">
            Fotografía {currentIndex + 1} / {images.length}
          </span>
          <span className="hidden text-[#3A3833] sm:inline-block">|</span>
          <span className="hidden text-white/80 sm:inline-block">{currentImage.title}</span>
        </div>

        <button
          onClick={onClose}
          className="rounded-full border border-white/20 p-2 text-white/80 transition-colors hover:bg-white/10 hover:text-white"
          aria-label="Cerrar vista"
        >
          <X className="h-5 w-5" />
        </button>
      </div>

      <div className="relative my-4 flex flex-1 items-center justify-center overflow-hidden">
        <button
          onClick={() => onNavigate((currentIndex - 1 + images.length) % images.length)}
          className="absolute left-2 z-20 rounded-full bg-black/40 p-3 text-white/70 backdrop-blur-xs transition-all hover:bg-black/70 hover:text-white md:left-6"
          aria-label="Foto anterior"
        >
          <ChevronLeft className="h-6 w-6" />
        </button>

        <div className="flex max-h-[75vh] max-w-4xl flex-col items-center justify-center p-2">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={currentImage.src}
            alt={currentImage.alt}
            className="max-h-[68vh] max-w-full object-contain shadow-2xl"
          />
        </div>

        <button
          onClick={() => onNavigate((currentIndex + 1) % images.length)}
          className="absolute right-2 z-20 rounded-full bg-black/40 p-3 text-white/70 backdrop-blur-xs transition-all hover:bg-black/70 hover:text-white md:right-6"
          aria-label="Siguiente foto"
        >
          <ChevronRight className="h-6 w-6" />
        </button>
      </div>

      <div className="flex flex-col items-center justify-between gap-2 border-t border-white/10 pt-4 text-center text-[#F2F2EF] sm:flex-row sm:text-left">
        <div>
          <h4 className="font-serif-display text-lg tracking-wide text-white">{currentImage.title}</h4>
          <p className="font-serif-editorial text-xs text-[#3A3833]">{currentImage.caption || currentImage.alt}</p>
        </div>
        <div className="font-sans text-[9px] uppercase tracking-[0.13em] text-[#B89B72]">
          {currentImage.location} • {currentImage.year}
        </div>
      </div>
    </div>
  )
}
