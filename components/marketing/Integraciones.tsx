"use client"

import { useState } from "react"
import { INTEGRACIONES_CONTENT, type FeatureId } from "@/content/integraciones"
import { PhoneMockup } from "@/components/ui/phone-mockup"
import { Reveal } from "@/components/ui/reveal"
import { cn } from "@/lib/utils"
import { Eyebrow } from "@/components/ui/eyebrow"

/**
 * Lista de features + una sola foto que va cambiando según cuál está
 * activa. En desktop la foto queda fija (sticky) mientras se recorre la
 * lista; en mobile no hay sticky posible, así que cada ítem abre su
 * propia foto justo debajo al tocarlo (ver <FeatureRow>).
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
        <Eyebrow as="h3" className="mb-6 mt-14">
          {INTEGRACIONES_CONTENT.featuresLabel}
        </Eyebrow>

        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 md:gap-14">
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

  return (
    <li>
      <button
        type="button"
        onClick={() => onSelect(feature.id)}
        onMouseEnter={() => onSelect(feature.id)}
        aria-pressed={seleccionada}
        className="w-full py-5 text-left"
      >
        <span
          className={cn(
            "flex items-baseline gap-3 font-semibold transition-colors",
            seleccionada ? "text-ink" : "text-muted-foreground"
          )}
        >
          <span
            className={cn(
              "h-px shrink-0 translate-y-[-4px] bg-ink transition-all duration-300",
              seleccionada ? "w-8 opacity-100" : "w-6 opacity-30"
            )}
          />
          {feature.label}
        </span>
        <span className="mt-1 block pl-11 text-sm leading-relaxed desc-copy">
          {feature.text}
        </span>
      </button>

      {/* Solo en mobile: la foto de ESTE ítem aparece debajo al tocarlo.
          En desktop no existe —ahí es el panel sticky el que cambia.
          Monta/desmonta en vez de animar el alto: el truco CSS de
          grid-template-rows 0fr→1fr no transiciona parejo entre motores. */}
      {seleccionada && (
        <div className="pb-6 pl-11 md:hidden">
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
