"use client"

import { useEffect, useRef, useState } from "react"
import { NAV_LINKS } from "@/content/nav"
import { WhatsappCta } from "@/components/ui/whatsapp-cta"
import { MenuMobile } from "@/components/marketing/MenuMobile"
import { MENSAJES } from "@/lib/whatsapp"
import { cn } from "@/lib/utils"

/** Píxeles a recorrer antes de empezar a esconder la barra. */
const UMBRAL = 120

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
        // Barra sólida sobre el fondo del sistema. Antes era vidrio con
        // tipografía blanca y sobre las secciones claras no se leía.
        "fixed inset-x-0 top-0 z-40 border-b border-rule bg-background text-ink",
        "transition-transform duration-300 ease-out",
        oculto ? "-translate-y-full" : "translate-y-0"
      )}
    >
      <div className="mx-auto flex max-w-max items-center justify-between gap-4 px-[var(--pad-x)] py-4">
        <a href="/" className="font-display text-lg font-normal">
          Invite<span className="font-display-italic"> Club</span>
        </a>

        <ul className="hidden gap-8 md:flex">
          {NAV_LINKS.map((link) => (
            <li key={link.label}>
              <a
                href={link.href}
                className="label-copy transition-opacity hover:opacity-70"
                {...(link.external
                  ? { target: "_blank", rel: "noopener noreferrer" }
                  : {})}
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        {/* Subrayado, igual que el "Ver diseño" de las fichas: dentro de
            la barra un pill compite con el logo y los links. En mobile
            el CTA se va adentro del menú. */}
        <div className="hidden md:block">
          <WhatsappCta
            message={MENSAJES.info}
            variant="link"
          >
            Escribinos
          </WhatsappCta>
        </div>

        <MenuMobile />
      </div>
    </nav>
  )
}
