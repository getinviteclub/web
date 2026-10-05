"use client"

import type { WeddingContent } from "@/content/wedding/types"
import { STUDIO_COPY as C } from "@/content/wedding/studio/copy"
import { useCountdown } from "@/lib/wedding/use-countdown"
import { Reveal } from "@/components/ui/reveal"
import { Arena } from "@/components/ui/illustrations/objetos"
import { HandUnderline } from "./Trazos"

const dos = (n: number) => String(n).padStart(2, "0")

/** Cuenta regresiva en vivo, a marcador gigante sobre una franja de tinta. */
export function StudioCountdown({ content }: { content: WeddingContent }) {
  const t = useCountdown(content.date.isoTargetDate)
  const valores = [String(t.days), dos(t.hours), dos(t.minutes), dos(t.seconds)]

  return (
    <section id="cuenta" className="bg-[var(--st-ink)] px-6 py-20 text-[var(--st-card)] md:py-28">
      <Reveal from="up" className="mx-auto flex max-w-5xl flex-col items-center text-center">
        <Arena className="w-16" />
        <span className="st-mono mt-6 text-[11px] opacity-80">{C.countdown.label}</span>
        <h2 className="st-hand mt-3 text-[clamp(48px,7vw,84px)] font-semibold">{C.countdown.title}</h2>

        <dl className="mt-10 grid w-full grid-cols-4 gap-2 sm:gap-8">
          {C.countdown.unidades.map((unidad, i) => (
            <div key={unidad} className="flex flex-col items-center">
              {/* El número va primero visualmente aunque en el DOM vaya la etiqueta. */}
              <dt className="st-mono order-2 mt-2 text-[10px] opacity-80 sm:text-xs">{unidad}</dt>
              <dd className="st-hand order-1 text-[clamp(52px,10vw,128px)] font-semibold leading-none tabular-nums">
                {valores[i]}
              </dd>
            </div>
          ))}
        </dl>
        <HandUnderline className="mt-6 w-[min(420px,80%)] [&_path]:stroke-[var(--st-card)]" />
      </Reveal>
    </section>
  )
}
