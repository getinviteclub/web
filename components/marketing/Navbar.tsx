"use client"

import { useEffect, useRef, useState } from "react"
import { NAV_LINKS, NAV_CTA } from "@/content/nav"
import { Cta } from "@/components/ui/cta"
import { Wordmark } from "@/components/ui/wordmark"
import { MenuMobile } from "@/components/marketing/MenuMobile"
import { Anuncio } from "@/components/marketing/Anuncio"
import { cn } from "@/lib/utils"

/** Píxeles a recorrer antes de empezar a esconder la barra. */
const UMBRAL = 120

/**
 * La barra, en tres tercios como una cabecera de revista: los links a la
 * izquierda, el logotipo al centro y el CTA a la derecha. En mobile queda
 * logotipo + menú.
 *
 * La franja de aviso va adentro del mismo <nav> fixed para que se esconda
 * y reaparezca con la barra, sin dejar un hueco.
 */
export function Navbar() {
  const [oculto, setOculto] = useState(false)
  const ultimaY = useRef(0)

  useEffect(() => {
    let ticking = false

    const onScroll = () => {
      if (ticking) return
      ticking = true

      window.requestAnimationFrame(() => {
        const y = window.scrollY

        // Baja: se esconde. Sube: reaparece.
        if (y > ultimaY.current && y > UMBRAL) setOculto(true)
        else if (y < ultimaY.current) setOculto(false)

        ultimaY.current = y
        ticking = false
      })
    }

    ultimaY.current = window.scrollY
    window.addEventListener("scroll", onScroll, { passive: true })
    return () => window.removeEventListener("scroll", onScroll)
  }, [])

  return (
    <nav
      className={cn(
        "fixed inset-x-0 top-0 z-40 border-b border-rule bg-background text-ink",
        "transition-transform duration-300 ease-out",
        oculto ? "-translate-y-full" : "translate-y-0"
      )}
    >
      <Anuncio />

      <div className="mx-auto grid max-w-max grid-cols-[1fr_auto] items-center gap-4 px-[var(--pad-x)] py-3 md:grid-cols-[1fr_auto_1fr]">
        <ul className="hidden items-center gap-7 md:flex">
          {NAV_LINKS.map((link) => (
            <li key={link.label}>
              <a
                href={link.href}
                className="label-copy transition-opacity hover:opacity-60"
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        <Wordmark className="md:justify-self-center" />

        <div className="flex items-center justify-end gap-4">
          <Cta href={NAV_CTA.href} size="sm" className="hidden md:inline-flex">
            {NAV_CTA.label}
          </Cta>
          <MenuMobile />
        </div>
      </div>
    </nav>
  )
}
