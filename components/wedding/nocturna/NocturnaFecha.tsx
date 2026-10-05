"use client"

import type { WeddingContent } from "@/content/wedding/types"
import { NOCTURNA_COPY as C } from "@/content/wedding/nocturna/copy"
import { useCountdown } from "@/lib/wedding/use-countdown"
import { Reveal } from "@/components/ui/reveal"

/**
 * La fecha, grande y escalonada (referencia: "27.08 / 2026"), con el mes
 * en caligrafía en relieve detrás. Abajo, el día y la hora, y la cuenta
 * regresiva en una sola línea discreta: sin relojes gigantes.
 */
export function NocturnaFecha({ content }: { content: WeddingContent }) {
  const { date } = content
  const t = useCountdown(date.isoTargetDate)
  const [dia, mes] = date.shortDate.split(".")
  const nombreMes = date.heroDay.split(" de ").pop() ?? ""
  const cuenta = [t.days, t.hours, t.minutes]

  return (
    <section id="fecha" className="overflow-hidden px-6 py-24 md:py-32">
      <Reveal from="up" className="mx-auto flex max-w-xl flex-col items-center text-center">
        <span className="nc-script nc-muted mb-2 text-[34px]">{C.fecha.script}</span>

        <div className="relative mt-6 w-full max-w-[420px]">
          <span
            aria-hidden="true"
            className="nc-script nc-ghost absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 text-[clamp(120px,24vw,230px)]"
          >
            {nombreMes}
          </span>
          <p className="nc-display relative text-[clamp(76px,13vw,128px)] leading-[0.95]">
            <span className="block text-left">
              {dia}.{mes}
            </span>
            <span className="block text-right">{date.heroYear}</span>
          </p>
        </div>

        <p className="nc-sans mt-10">
          {date.dayOfWeek} <span className="nc-muted mx-2">·</span> {date.time}
        </p>

        <dl className="mt-10 flex items-baseline gap-5 border-t border-[var(--nc-rule)] pt-6">
          <dt className="nc-sans nc-muted">{C.fecha.faltan}</dt>
          {C.fecha.unidades.map((u, i) => (
            <dd key={u} className="flex items-baseline gap-1.5">
              <span className="nc-display text-2xl tabular-nums">{String(cuenta[i]).padStart(2, "0")}</span>
              <span className="nc-muted text-[11px]">{u}</span>
            </dd>
          ))}
        </dl>
      </Reveal>
    </section>
  )
}
