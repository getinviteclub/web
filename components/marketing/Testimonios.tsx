"use client"

import { useState } from "react"
import {
  ArrowLeft,
  ArrowRight,
  Star,
  ICON_WEIGHT,
  ICON_WEIGHT_SOLID,
} from "@/components/ui/icons"
import { TESTIMONIOS } from "@/content/testimonios"
import { cn } from "@/lib/utils"
import { Reveal } from "@/components/ui/reveal"
import { Eyebrow } from "@/components/ui/eyebrow"

/**
 * Carrusel editorial: un testimonio a la vez, centrado, sin card —
 * mismo criterio de banda gris que <ComoFunciona>. Las flechas son las de
 * Phosphor en peso `light`, igual que el resto del sistema (antes eran un
 * glifo caligráfico dibujado a mano).
 */
export function Testimonios() {
  const [i, setI] = useState(0)
  const total = TESTIMONIOS.length
  const testimonio = TESTIMONIOS[i]

  const anterior = () => setI((v) => (v - 1 + total) % total)
  const siguiente = () => setI((v) => (v + 1) % total)

  return (
    <section id="testimonios" className="bg-paper">
      <div className="mx-auto max-w-max px-[var(--pad-x)] py-20 md:py-28">
        <Reveal from="up" className="mx-auto max-w-[46ch] text-center">
          <Eyebrow>Testimonios</Eyebrow>
        </Reveal>

        {/* A mitad de camino entre el label y la cita: mismo margen
            arriba y abajo, no pegadas a ninguno de los dos. */}
        <Reveal from="up" className="mt-7 flex justify-center md:mt-8">
          <div className="flex justify-center gap-1" aria-hidden="true">
            {Array.from({ length: 5 }).map((_, idx) => (
              <Star key={idx} size={14} weight={ICON_WEIGHT_SOLID} />
            ))}
          </div>
        </Reveal>

        <Reveal from="up" className="mx-auto mt-7 max-w-[62ch] md:mt-8">
          {/* Las tres citas se renderizan SIEMPRE, apiladas en la misma
              celda de grilla; solo cambia cuál es visible. Así el alto del
              bloque lo fija la cita más larga y no salta al pasar de una
              de 3 renglones a una de 2 —que era lo que movía al autor, a
              las flechas y a la sección de abajo—.

              Se hace así y no con un min-height en em porque el número de
              renglones cambia con el ancho: la misma cita ocupa 3 en
              desktop y 4 en un teléfono. Cualquier testimonio nuevo entra
              sin recalcular nada. */}
          <div aria-live="polite" className="grid text-center">
            {TESTIMONIOS.map((t, idx) => (
              <blockquote
                key={t.author}
                aria-hidden={idx !== i}
                className={cn(
                  "[grid-area:1/1] font-display font-normal leading-snug",
                  "transition-opacity duration-300",
                  idx === i ? "opacity-100" : "invisible opacity-0"
                )}
                style={{ fontSize: "clamp(22px, 3vw, 32px)" }}
              >
                &ldquo;{t.quote}&rdquo;
              </blockquote>
            ))}
          </div>

          <div className="text-center">
            {/* Sin avatar: quitarlo ya achica el bloque solo (era un
                size-11 + su gap), no queda hueco que compensar a mano. */}
            <figcaption className="mt-8 flex flex-col items-center">
              <strong className="text-sm font-semibold">
                {testimonio.author}
              </strong>
              <span className="text-sm text-muted-foreground">
                {testimonio.role}
              </span>
            </figcaption>
          </div>

          {/* Las flechas quedan aunque hoy haya un solo testimonio —se
              suman más a content/testimonios.ts sin tocar el
              componente. El contador sí se esconde con uno solo: "1 / 1"
              delataría que por ahora no hay más para recorrer. */}
          <div className="mt-10 flex items-center justify-center gap-8">
            <button
              type="button"
              onClick={anterior}
              aria-label="Testimonio anterior"
              className="p-1 text-ink transition-opacity hover:opacity-60"
            >
              <ArrowLeft size={22} weight={ICON_WEIGHT} />
            </button>
            {total > 1 && (
              <span className="text-xs uppercase tracking-label text-muted-foreground">
                {i + 1} / {total}
              </span>
            )}
            <button
              type="button"
              onClick={siguiente}
              aria-label="Testimonio siguiente"
              className="p-1 text-ink transition-opacity hover:opacity-60"
            >
              <ArrowRight size={22} weight={ICON_WEIGHT} />
            </button>
          </div>
        </Reveal>
      </div>
    </section>
  )
}
