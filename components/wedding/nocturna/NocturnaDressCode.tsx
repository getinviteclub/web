import type { WeddingContent } from "@/content/wedding/types"
import { NOCTURNA_COPY as C } from "@/content/wedding/nocturna/copy"
import { Reveal } from "@/components/ui/reveal"
import { NcHead } from "./NcHead"

/**
 * Dress code (referencias "Дресс-код"): "Dress code" en caligrafía en
 * relieve detrás del título, el código en versalitas, la explicación y
 * la paleta en círculos, como muestras de tela.
 */
export function NocturnaDressCode({ content }: { content: WeddingContent }) {
  const { dressCode } = content

  return (
    <section id="dress-code" className="overflow-hidden px-6 py-24 md:py-32">
      <NcHead ghost={C.dress.ghost} title={C.dress.title} />

      <Reveal from="up" className="mx-auto flex max-w-md flex-col items-center text-center">
        <p className="nc-display text-[26px] uppercase tracking-[0.06em]">{dressCode.title}</p>
        <p className="nc-muted mt-1">{dressCode.subtitle}</p>
        <p className="mt-6">{dressCode.description}</p>

        <p className="nc-sans nc-muted mt-12">{C.dress.paleta}</p>
        <ul className="mt-5 flex flex-wrap justify-center gap-3">
          {dressCode.palettes.map((c) => (
            <li key={c.hex} className="flex flex-col items-center gap-2">
              <span
                className="size-12 rounded-full shadow-[inset_0_0_0_1px_rgba(47,37,35,.12)]"
                style={{ backgroundColor: c.hex }}
              />
              <span className="nc-muted text-[10px]">{c.name}</span>
            </li>
          ))}
        </ul>
      </Reveal>
    </section>
  )
}
