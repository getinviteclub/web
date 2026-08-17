"use client"

import { useEffect, useRef, useState } from "react"
import { createPortal } from "react-dom"
import { NAV_LINKS } from "@/content/nav"
import { WhatsappCta } from "@/components/ui/whatsapp-cta"
import { Eyebrow } from "@/components/ui/eyebrow"

/**
 * Menú de pantalla completa para mobile. Abajo de 768px la barra solo
 * muestra el logo y este botón; los links y el CTA viven acá adentro.
 *
 * El panel repite la fila del navbar (logo a la izquierda, botón a la
 * derecha) para que la cruz caiga exactamente donde estaba la hamburguesa.
 *
 * Va por portal al <body> y no acá adentro: el <nav> anima con transform
 * para esconderse al scrollear, y un transform crea contenedor de bloque
 * para los `position: fixed` hijos. Dentro del nav, el panel se medía
 * contra la barra (76px de alto) en vez de contra la ventana.
 */
export function MenuMobile() {
  const [abierto, setAbierto] = useState(false)
  const abrirRef = useRef<HTMLButtonElement>(null)
  const cerrarRef = useRef<HTMLButtonElement>(null)

  useEffect(() => {
    if (!abierto) return

    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setAbierto(false)
    }

    // El panel es md:hidden: si la ventana crece con el menú abierto
    // desaparecería de la vista pero el scroll quedaría bloqueado.
    const mq = window.matchMedia("(min-width: 768px)")
    const onAncho = (e: MediaQueryListEvent) => {
      if (e.matches) setAbierto(false)
    }

    const overflowPrevio = document.documentElement.style.overflow
    document.documentElement.style.overflow = "hidden"
    cerrarRef.current?.focus()

    document.addEventListener("keydown", onKey)
    mq.addEventListener("change", onAncho)

    return () => {
      document.removeEventListener("keydown", onKey)
      mq.removeEventListener("change", onAncho)
      document.documentElement.style.overflow = overflowPrevio
    }
  }, [abierto])

  const cerrar = () => {
    setAbierto(false)
    abrirRef.current?.focus()
  }

  return (
    <>
      <button
        ref={abrirRef}
        type="button"
        onClick={() => setAbierto(true)}
        aria-label="Abrir menú"
        aria-expanded={abierto}
        aria-controls="menu-mobile"
        className="-mr-2 flex size-11 items-center justify-center md:hidden"
      >
        <span aria-hidden="true" className="flex w-6 flex-col gap-[7px]">
          <span className="h-px w-full bg-ink" />
          <span className="h-px w-full bg-ink" />
        </span>
      </button>

      {abierto &&
        createPortal(
          <div
            id="menu-mobile"
            role="dialog"
            aria-modal="true"
            aria-label="Menú"
            className="panel-in fixed inset-0 z-50 flex flex-col bg-background text-ink md:hidden"
          >
            <div className="flex items-center justify-between gap-4 border-b border-rule px-[var(--pad-x)] py-4">
              <a
                href="#"
                onClick={cerrar}
                className="font-display text-lg font-normal"
              >
                Invite<span className="font-display-italic"> Club</span>
              </a>

              <button
                ref={cerrarRef}
                type="button"
                onClick={cerrar}
                aria-label="Cerrar menú"
                className="-mr-2 flex size-11 items-center justify-center"
              >
                <svg
                  viewBox="0 0 24 24"
                  aria-hidden="true"
                  className="size-6"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1"
                >
                  <path d="M5 5l14 14M19 5L5 19" />
                </svg>
              </button>
            </div>

            {/* Bloque compacto: filas apretadas entre sí y un respiro
                contra el header, para que lea como un cluster y no como
                una continuación de la barra. */}
            <nav className="flex flex-1 flex-col overflow-y-auto px-[var(--pad-x)] pb-8 pt-6">
              <ul>
                {NAV_LINKS.map((link) => (
                  <li key={link.label} className="border-b border-rule">
                    <a
                      href={link.href}
                      onClick={cerrar}
                      className="flex items-center justify-between gap-4 py-3 font-display text-2xl font-normal"
                      {...(link.external
                        ? { target: "_blank", rel: "noopener noreferrer" }
                        : {})}
                    >
                      {link.label}
                      {/* La flecha solo donde el link se va del sitio. Los
                        demás son anclas de esta misma página. */}
                      {link.external && (
                        <span aria-hidden="true" className="text-base">
                          ↗
                        </span>
                      )}
                    </a>
                  </li>
                ))}
              </ul>

              {/* Ancla al pie del viewport, en una sola fila, con el mismo
                  CTA subrayado que usa el navbar en desktop. El pt-10 es
                  el piso de separación cuando la pantalla es corta. */}
              <div className="mt-auto flex items-center justify-between gap-4 pt-10">
                <Eyebrow>Contacto</Eyebrow>
                <WhatsappCta
                  message="Hola, quiero info de Invite Club"
                  variant="link"
                  // El texto mide 14px de alto: el padding agranda el
                  // área táctil y el margen negativo lo saca del layout,
                  // así no cambia nada visualmente.
                  className="-my-3 py-3"
                >
                  Escribinos
                </WhatsappCta>
              </div>
            </nav>
          </div>,
          document.body,
        )}
    </>
  )
}
