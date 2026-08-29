"use client"

import { INTEGRACIONES_CONTENT } from "@/content/integraciones"
import { Reveal } from "@/components/ui/reveal"
import { Eyebrow } from "@/components/ui/eyebrow"

/**
 * OPCIÓN 2 (grilla): las 14 features como índice de "todo lo que incluís",
 * sin descripciones ni panel de foto. La lista en fila medía 2457px
 * (3,2 pantallas) y las descripciones pesaban más que los títulos —46px
 * contra 32px por fila— repitiendo en la mayoría lo que el título ya dice.
 *
 * Se pierde el panel del teléfono que cambiaba al pasar el mouse: sin
 * descripciones no hay fila alta que lo sostenga al costado.
 */
export function Integraciones() {
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

        <Reveal from="up" className="mt-12">
          <ul className="grid grid-cols-1 gap-x-10 gap-y-0 border-t border-rule sm:grid-cols-2 lg:grid-cols-3">
            {INTEGRACIONES_CONTENT.features.map((f) => (
              <li
                key={f.id}
                className="border-b border-rule py-4 font-display text-xl font-normal"
              >
                {f.label}
              </li>
            ))}
          </ul>

          <p className="mt-8 max-w-[46ch] text-sm leading-relaxed desc-copy">
            {INTEGRACIONES_CONTENT.consulta}
          </p>
        </Reveal>
      </div>
    </section>
  )
}
