"use client"

import { useState } from "react"
import {
  INTEGRACIONES_CONTENT,
  type FeatureVisual as VisualKey,
} from "@/content/integraciones"
import { FeatureVisual } from "@/components/ui/feature-visual"
import { Reveal } from "@/components/ui/reveal"
import { cn } from "@/lib/utils"

export function Integraciones() {
  const [activa, setActiva] = useState<VisualKey>(
    INTEGRACIONES_CONTENT.features[0].id
  )

  return (
    <section className="overflow-hidden rounded-none bg-forest text-inverse">
      <div className="mx-auto max-w-max px-[var(--pad-x)] py-20 md:py-28">
        <Reveal from="left" className="max-w-[52ch]">
          <span className="font-mono text-xs font-bold uppercase tracking-[0.14em] text-white/55">
            {INTEGRACIONES_CONTENT.eyebrow}
          </span>
          <h2
            className="mt-4 font-display font-normal leading-[1.05] tracking-tight"
            style={{ fontSize: "clamp(28px, 4vw, 44px)" }}
          >
            {INTEGRACIONES_CONTENT.title}
          </h2>
          <p className="mt-4 text-lg text-white/70">
            {INTEGRACIONES_CONTENT.subtitle}
          </p>
        </Reveal>

        {/* Features: lista a la izquierda, visual a la derecha */}
        <h3 className="mb-6 mt-14 font-mono text-xs font-bold uppercase tracking-[0.14em] text-white/55">
          {INTEGRACIONES_CONTENT.featuresLabel}
        </h3>

        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 md:gap-14">
          <Reveal from="left">
            <ul className="flex flex-col divide-y divide-white/10 border-y border-white/10">
              {INTEGRACIONES_CONTENT.features.map((feature) => {
                const seleccionada = feature.id === activa
                return (
                  <li key={feature.id}>
                    <button
                      type="button"
                      onClick={() => setActiva(feature.id)}
                      onMouseEnter={() => setActiva(feature.id)}
                      aria-pressed={seleccionada}
                      className="w-full py-5 text-left transition-opacity"
                    >
                      <span
                        className={cn(
                          "flex items-baseline gap-3 font-semibold transition-colors",
                          seleccionada ? "text-inverse" : "text-white/60"
                        )}
                      >
                        <span
                          className={cn(
                            "h-px w-6 shrink-0 translate-y-[-4px] transition-all",
                            seleccionada ? "bg-inverse" : "bg-white/25"
                          )}
                        />
                        {feature.label}
                      </span>
                      <span
                        className={cn(
                          "mt-1 block pl-9 text-sm leading-relaxed transition-colors",
                          seleccionada ? "text-white/70" : "text-white/40"
                        )}
                      >
                        {feature.text}
                      </span>
                    </button>
                  </li>
                )
              })}
            </ul>
          </Reveal>

          <Reveal from="right" className="min-h-[320px] md:sticky md:top-28 md:self-start">
            <FeatureVisual id={activa} />
          </Reveal>
        </div>
      </div>
    </section>
  )
}
