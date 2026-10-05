import type { WeddingContent } from "@/content/wedding/types"
import { NOCTURNA_COPY as C } from "@/content/wedding/nocturna/copy"
import { Reveal } from "@/components/ui/reveal"
import { Dibujo, type Ilustracion } from "@/components/ui/illustrations"
import { NcHead } from "./NcHead"

/**
 * El contenido trae un `iconName` por momento (pensado para Aura). Acá se
 * traduce a un dibujo de trazo fino; si llega uno desconocido, copas.
 */
const DIBUJOS: Record<string, Ilustracion> = {
  Wine: "copas",
  Heart: "anillos",
  Camera: "camara",
  Utensils: "menu",
  Sparkles: "disco",
  Music: "disco",
  Moon: "velas",
  Cake: "torta",
  Car: "auto",
}

/**
 * El programa (referencia "Тайминг"): cada momento con su dibujo de trazo
 * fino, la hora en la romana y el nombre en versalitas chicas. Una
 * columna en el celular; tres por fila en pantallas grandes.
 */
export function NocturnaSchedule({ content }: { content: WeddingContent }) {
  return (
    <section id="programa" className="overflow-hidden px-6 py-24 md:py-32">
      <NcHead ghost={C.schedule.ghost} title={C.schedule.title} />

      <ol className="mx-auto grid max-w-4xl gap-14 md:grid-cols-3 md:gap-x-10 md:gap-y-16">
        {content.schedule.map((ev) => (
          <li key={ev.time + ev.title}>
            <Reveal from="up" className="flex flex-col items-center text-center">
              <Dibujo nombre={DIBUJOS[ev.iconName ?? ""] ?? "copas"} className="w-14" />
              <p className="nc-display mt-4 text-[34px] tabular-nums">{ev.time}</p>
              <h3 className="nc-sans mt-2">{ev.title}</h3>
              <p className="nc-muted mt-2 max-w-[26ch] text-[12px] leading-relaxed">{ev.location}</p>
            </Reveal>
          </li>
        ))}
      </ol>
    </section>
  )
}
