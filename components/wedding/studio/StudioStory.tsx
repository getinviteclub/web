import type { WeddingContent } from "@/content/wedding/types"
import { STUDIO_COPY as C } from "@/content/wedding/studio/copy"
import { Reveal } from "@/components/ui/reveal"
import { SectionHead } from "./SectionHead"
import { Stamp } from "./Stamp"
import { HandCircle } from "./Trazos"
import { cn } from "@/lib/utils"

/** El giro de cada estampilla: fijo por posición, no al azar (no cambia entre renders). */
const GIROS = [-3, 2.5, -1.5]

/**
 * La historia, en tres capítulos: cada uno con su foto en estampilla, el
 * año encerrado a mano y el texto al lado, alternando lados. Cierra con
 * la frase de la pareja (`quoteEditorial`).
 */
export function StudioStory({ content }: { content: WeddingContent }) {
  return (
    <section id="historia" className="border-t border-[var(--st-rule)] px-6 py-24 md:py-32">
      <SectionHead label={C.story.label} title={C.story.title} />

      <ol className="mx-auto max-w-5xl space-y-24 md:space-y-32">
        {content.story.map((m, i) => (
          <li key={m.year + m.title} className="grid items-center gap-10 md:grid-cols-2 md:gap-16">
            <Reveal from={i % 2 === 0 ? "left" : "right"} className={cn("flex justify-center", i % 2 === 1 && "md:order-2")}>
              <Stamp
                src={m.image}
                alt={m.imageAlt}
                aspect={m.aspect}
                rotate={GIROS[i % GIROS.length]}
                sizes="(min-width: 768px) 40vw, 80vw"
                className={m.aspect === "landscape" ? "w-full max-w-md" : "w-[min(78vw,340px)]"}
              />
            </Reveal>

            <Reveal from={i % 2 === 0 ? "right" : "left"} className="text-center md:text-left">
              <HandCircle className="st-hand st-ink text-5xl font-semibold">{m.year}</HandCircle>
              <p className="st-mono st-muted mt-5 text-[11px]">
                {m.date} — {m.subtitle}
              </p>
              <h3 className="st-hand mt-3 text-5xl font-semibold">{m.title}</h3>
              <p className="mt-4 text-lg leading-relaxed">{m.description}</p>
              {m.caption && <p className="st-script st-ink mt-5 text-sm">{m.caption}</p>}
            </Reveal>
          </li>
        ))}
      </ol>

      <Reveal from="up" className="mx-auto mt-28 max-w-3xl text-center">
        <p className="st-hand st-ink text-[clamp(34px,4.6vw,56px)] leading-tight">
          &ldquo;{content.couple.quoteEditorial}&rdquo;
        </p>
      </Reveal>
    </section>
  )
}
