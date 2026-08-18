"use client"

import { useRef, useState } from "react"
import { INTEGRACIONES_CONTENT, type FeatureId } from "@/content/integraciones"
import { PhoneMockup } from "@/components/ui/phone-mockup"
import { Reveal } from "@/components/ui/reveal"
import { cn } from "@/lib/utils"
import { Eyebrow } from "@/components/ui/eyebrow"
import { ArrowGlyph } from "@/components/ui/arrow-glyph"

/**
 * Lista de features, una sola activa a la vez (estado `activa`, click o
 * hover). En desktop esa selección mueve la foto fija (sticky) de la
 * derecha; en mobile no hay sticky posible, así que es la MISMA
 * selección la que abre la foto de esa fila debajo —al elegir otra, la
 * anterior se cierra sola, nunca quedan dos abiertas.
 *
 * Las fotos son las 3 capturas reales que ya usa <Galeria>, en rotación:
 * placeholder a propósito hasta tener una por feature (ver content/integraciones.ts).
 */
export function Integraciones() {
  const [activa, setActiva] = useState<FeatureId>(
    INTEGRACIONES_CONTENT.features[0].id
  )
  const feature = INTEGRACIONES_CONTENT.features.find((f) => f.id === activa)!

  return (
    <section className="rounded-none bg-clay">
      <div className="mx-auto max-w-max px-[var(--pad-x)] py-20 md:py-28">
        <Reveal from="left" className="max-w-[52ch]">
          <Eyebrow>{INTEGRACIONES_CONTENT.eyebrow}</Eyebrow>
          <h2
            className="mt-4 font-display font-normal leading-[1.05]"
            style={{ fontSize: "clamp(28px, 4vw, 44px)" }}
          >
            {INTEGRACIONES_CONTENT.title}
          </h2>
          <p className="mt-4 text-lg desc-copy">
            {INTEGRACIONES_CONTENT.subtitle}
          </p>
        </Reveal>

        {/* Features: lista a la izquierda, foto a la derecha */}
        <div className="mt-14 grid grid-cols-1 gap-8 md:grid-cols-2 md:gap-14">
          <Reveal from="left">
            <ul className="flex flex-col divide-y divide-rule border-y border-rule">
              {INTEGRACIONES_CONTENT.features.map((f) => (
                <FeatureRow
                  key={f.id}
                  feature={f}
                  activa={activa}
                  onSelect={setActiva}
                />
              ))}
            </ul>
          </Reveal>

          <Reveal
            from="right"
            className="hidden md:sticky md:top-28 md:block md:self-start"
          >
            <PhoneMockup
              key={feature.id}
              src={feature.image}
              alt={feature.label}
              className="max-w-[240px] fade-in"
            />
          </Reveal>
        </div>
      </div>
    </section>
  )
}

type Feature = (typeof INTEGRACIONES_CONTENT.features)[number]

function FeatureRow({
  feature,
  activa,
  onSelect,
}: {
  feature: Feature
  activa: FeatureId
  onSelect: (id: FeatureId) => void
}) {
  const seleccionada = feature.id === activa
  const liRef = useRef<HTMLLIElement>(null)

  return (
    <li ref={liRef}>
      <button
        type="button"
        onClick={() => {
          // En mobile no hay panel sticky que avise qué se abrió: sin
          // esto, tocar una fila más abajo en la lista deja el título
          // y la foto nuevos fuera de pantalla. Solo si esta fila no
          // estaba ya abierta —evita un scroll de más al re-tocarla.
          const abriendola = !seleccionada
          onSelect(feature.id)
          if (abriendola && window.innerWidth < 768) {
            // setTimeout, no requestAnimationFrame: alcanza con ceder
            // el turno a React para que la foto ya esté montada, sin
            // atarlo al ciclo de pintado del navegador.
            setTimeout(() => {
              liRef.current?.scrollIntoView({
                behavior: "smooth",
                block: "center",
              })
            }, 0)
          }
        }}
        onMouseEnter={() => onSelect(feature.id)}
        aria-pressed={seleccionada}
        aria-expanded={seleccionada}
        className="flex w-full items-center justify-between gap-8 py-5 text-left"
      >
        <span className="min-w-0">
          <span
            className={cn(
              "block font-display text-2xl font-normal transition-colors",
              seleccionada ? "text-ink" : "text-muted-foreground"
            )}
          >
            {feature.label}
          </span>
          <span className="mt-1 block text-sm leading-relaxed desc-copy">
            {feature.text}
          </span>
        </span>
        {/* Aparece con el hover: hace más notorio el cambio de fila
            activa en desktop. En mobile no hay hover —el tap ya abre
            la foto debajo— así que ahí no va. */}
        <ArrowGlyph
          className={cn(
            "hidden size-6 shrink-0 text-ink transition-all duration-300 md:block",
            seleccionada
              ? "translate-x-0 opacity-100"
              : "-translate-x-1 opacity-0"
          )}
        />
      </button>

      {/* Solo en mobile: la misma selección que mueve el panel sticky
          de desktop abre la foto acá debajo. Elegir otra fila cierra
          esta sola. Monta/desmonta en vez de animar el alto: el truco
          CSS de grid-template-rows 0fr→1fr no transiciona parejo
          entre motores. */}
      {seleccionada && (
        <div className="pb-6 md:hidden">
          <PhoneMockup
            src={feature.image}
            alt={feature.label}
            className="max-w-[200px] fade-in"
          />
        </div>
      )}
    </li>
  )
}
