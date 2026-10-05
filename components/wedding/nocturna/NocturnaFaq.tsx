import type { WeddingContent } from "@/content/wedding/types"
import { NOCTURNA_COPY as C } from "@/content/wedding/nocturna/copy"
import { Reveal } from "@/components/ui/reveal"
import { Plus, ICON_WEIGHT } from "@/components/ui/icons"
import { NcHead } from "./NcHead"

/**
 * Preguntas frecuentes: una columna angosta, la pregunta en versalitas y
 * la respuesta en la sans chica. <details> nativo: sin JavaScript.
 */
export function NocturnaFaq({ content }: { content: WeddingContent }) {
  return (
    <section id="preguntas" className="px-6 py-24 md:py-32">
      <NcHead title={C.faq.title} />

      <Reveal from="up" className="mx-auto max-w-2xl border-t border-[var(--nc-rule)]">
        {content.faq.map((item) => (
          <details key={item.question} className="group border-b border-[var(--nc-rule)]">
            <summary className="flex cursor-pointer list-none items-center justify-between gap-6 py-5 [&::-webkit-details-marker]:hidden">
              <span className="nc-display text-[17px] uppercase tracking-[0.05em]">{item.question}</span>
              <Plus size={14} weight={ICON_WEIGHT} aria-hidden="true" className="shrink-0 transition-transform duration-300 group-open:rotate-45" />
            </summary>
            <p className="max-w-xl pb-6">{item.answer}</p>
          </details>
        ))}
      </Reveal>
    </section>
  )
}
