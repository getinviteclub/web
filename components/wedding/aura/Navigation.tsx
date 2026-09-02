"use client"

import { useEffect, useState } from "react"
import type { AuraContent } from "@/content/wedding/aura/types"

/**
 * Header fijo: monograma a la izquierda (vuelve a la portada), botón
 * RSVP a la derecha, línea de progreso de scroll abajo. Port fiel del
 * original de Flor — acá no hacía falta Framer Motion, era solo un
 * fondo que aparece con scroll (CSS transition alcanza).
 *
 * Recibe `content` por el monograma; el resto es genérico al diseño.
 */
export function Navigation({ content }: { content: AuraContent }) {
  const [scrollProgress, setScrollProgress] = useState(0)
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      const totalScroll = document.documentElement.scrollHeight - window.innerHeight
      const currentProgress = totalScroll > 0 ? (window.scrollY / totalScroll) * 100 : 0
      setScrollProgress(currentProgress)
      setIsScrolled(window.scrollY > 80)
    }

    window.addEventListener("scroll", handleScroll, { passive: true })
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id)
    if (!element) return
    const offset = 30
    const bodyRect = document.body.getBoundingClientRect().top
    const elementRect = element.getBoundingClientRect().top
    window.scrollTo({ top: elementRect - bodyRect - offset, behavior: "smooth" })
  }

  const [monogramLeft, monogramRight] = content.couple.monogram.split("&")

  return (
    <header
      className={`fixed left-0 right-0 top-0 z-50 transition-all duration-500 ${
        isScrolled
          ? "border-b border-[#1C1B18]/10 bg-[#F2F2EF]/95 px-6 py-3.5 backdrop-blur-md sm:px-10"
          : "bg-transparent px-6 py-4 sm:px-10 sm:py-6"
      }`}
    >
      <div className="flex w-full items-center justify-between">
        <button
          onClick={() => scrollToSection("cover")}
          className="group flex items-center justify-center"
          aria-label="Ir al inicio"
        >
          <div className="font-hero-script relative flex items-center text-3xl transition-transform group-hover:scale-105 sm:text-4xl">
            <span>{monogramLeft}</span>
            <span className="-ml-2">{monogramRight}</span>
          </div>
        </button>

        <button
          onClick={() => scrollToSection("rsvp")}
          className="font-serif-display bg-[#1C1B18] px-6 py-2.5 text-xs font-semibold tracking-[0.1em] text-[#F2F2EF] transition-all duration-300 hover:bg-[#202D24] sm:px-8 sm:py-3 sm:text-sm"
        >
          RSVP
        </button>
      </div>

      <div className="absolute bottom-0 left-0 right-0 h-px bg-transparent">
        <div
          className="h-[1.5px] bg-[#202D24] transition-all duration-150 ease-out"
          style={{ width: `${scrollProgress}%` }}
        />
      </div>
    </header>
  )
}
