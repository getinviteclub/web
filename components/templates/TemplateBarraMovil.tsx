"use client"

import { useEffect, useState } from "react"
import type { Template } from "@/content/templates"
import { DETALLE_CONTENT as D } from "@/content/detalle"
import { WhatsappCta } from "@/components/ui/whatsapp-cta"
import { mensajeDiseno } from "@/lib/whatsapp"
import { cn } from "@/lib/utils"

/** Píxeles de scroll a partir de los que aparece: pasada la columna de compra. */
const UMBRAL = 900

/**
 * Barra fija abajo, solo en mobile: nombre, precio y el CTA principal.
 *
 * En un teléfono la columna de compra queda arriba de todo y, después de
 * scrollear la galería de secciones, las reseñas y las preguntas, el botón
 * quedaba a seis pantallas. Esta barra lo trae de vuelta sin tapar el
 * contenido mientras la columna de compra todavía está a la vista.
 */
export function TemplateBarraMovil({ template }: { template: Template }) {
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > UMBRAL)
    onScroll()
    window.addEventListener("scroll", onScroll, { passive: true })
    return () => window.removeEventListener("scroll", onScroll)
  }, [])

  return (
    <div
      aria-hidden={!visible}
      className={cn(
        "fixed inset-x-0 bottom-0 z-30 border-t border-rule bg-background/95 backdrop-blur md:hidden",
        "transition-transform duration-300 ease-out",
        visible ? "translate-y-0" : "pointer-events-none translate-y-full"
      )}
    >
      <div className="flex items-center justify-between gap-4 px-[var(--pad-x)] py-3">
        <div className="min-w-0">
          <p className="truncate font-display text-xl leading-none">{template.name}</p>
          <p className="label-copy mt-1.5 text-muted-foreground">{D.barraMovilNota}</p>
        </div>
        <WhatsappCta
          message={mensajeDiseno(template.name)}
          trackParams={{ design: template.slug }}
          tone="dark"
          size="md"
          className="shrink-0"
        >
          {D.barraMovilCta}
        </WhatsappCta>
      </div>
    </div>
  )
}
