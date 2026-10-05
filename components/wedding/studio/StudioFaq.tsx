import type { WeddingContent } from "@/content/wedding/types"
import { STUDIO_COPY as C } from "@/content/wedding/studio/copy"
import { Reveal } from "@/components/ui/reveal"
import { Plus, ICON_WEIGHT } from "@/components/ui/icons"
import { SectionHead } from "./SectionHead"

/**
 * Preguntas frecuentes con <details> nativo: abre sin JavaScript y
 * funciona con teclado. La pregunta a marcador, la respuesta en serif.
 */
export function StudioFaq({ content }: { content: WeddingContent }) {
  return (
    <section id="preguntas" className="border-t border-[var(--st-rule)] px-6 py-24 md:py-32">
      <SectionHead label={C.faq.label} title={C.faq.title} />

      <Reveal from="up" className="mx-auto max-w-3xl border-t-2 border-[var(--st-ink)]">
        {content.faq.map((item, i) => (
          <details key={item.question} className="group border-b border-[var(--st-rule)]" open={i === 0}>
            <summary className="flex cursor-pointer list-none items-center justify-between gap-6 py-6 [&::-webkit-details-marker]:hidden">
              <span>
                {item.category && <span className="st-mono st-muted block text-[11px]">{item.category}</span>}
                <span className="st-hand mt-1 block text-4xl font-semibold leading-none">{item.question}</span>
              </span>
              <Plus size={22} weight={ICON_WEIGHT} aria-hidden="true" className="st-ink shrink-0 transition-transform duration-300 group-open:rotate-45" />
            </summary>
            <p className="pb-7 pr-10 text-lg leading-relaxed">{item.answer}</p>
          </details>
        ))}
      </Reveal>
    </section>
  )
}
