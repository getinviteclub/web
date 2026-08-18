"use client"

import { useState } from "react"
import { INTEGRACIONES_CONTENT, type FeatureId } from "@/content/integraciones"
import { PhoneMockup } from "@/components/ui/phone-mockup"
import { Reveal } from "@/components/ui/reveal"
import { cn } from "@/lib/utils"
import { Eyebrow } from "@/components/ui/eyebrow"
import { ArrowGlyph } from "@/components/ui/arrow-glyph"

/**
 * Lista de features. En desktop hay una sola foto fija (sticky) que
 * cambia según cuál está activa (hover/click, estado `activa`). En
 * mobile no hay sticky posible: cada ítem se abre y cierra solo, como
 * un dropdown común —no depende de cuál está "activa" ni afecta a las
 * demás filas al abrirse (ver <FeatureRow>, estado `abierta`).
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
              {INTEGRACIONES_CONTENT.features.map((f, i) => (
                <FeatureRow
                  key={f.id}
                  feature={f}
                  activa={activa}
                  onSelect={setActiva}
                  abiertaInicial={i === 0}
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
  abiertaInicial,
}: {
  feature: Feature
  activa: FeatureId
  onSelect: (id: FeatureId) => void
  abiertaInicial: boolean
}) {
  const seleccionada = feature.id === activa
  // Independiente de `activa`: abrir esta fila en mobile no cierra
  // ninguna otra, así no hay contenido de arriba que se colapse y
  // corra todo hacia arriba al tocar una fila más abajo.
  const [abierta, setAbierta] = useState(abiertaInicial)

  return (
    <li>
      <button
        type="button"
        onClick={() => {
          onSelect(feature.id)
          setAbierta((v) => !v)
        }}
        onMouseEnter={() => onSelect(feature.id)}
        aria-pressed={seleccionada}
        aria-expanded={abierta}
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

      {/* Solo en mobile: dropdown simple, cada fila abre y cierra la
          suya sola. En desktop no existe —ahí es el panel sticky el
          que cambia. Monta/desmonta en vez de animar el alto: el
          truco CSS de grid-template-rows 0fr→1fr no transiciona
          parejo entre motores. */}
      {abierta && (
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
