import { FAQS, FAQS_CONTENT as F, type Faq } from "@/content/faqs"
import { Plus, ICON_WEIGHT } from "@/components/ui/icons"
import { WhatsappCta } from "@/components/ui/whatsapp-cta"
import { Eyebrow } from "@/components/ui/eyebrow"
import { Heading } from "@/components/ui/heading"
import { Reveal } from "@/components/ui/reveal"
import { Indice, dosDigitos } from "@/components/ui/indice"
import { MENSAJES } from "@/lib/whatsapp"

/**
 * Preguntas frecuentes: título fijo a la izquierda, acordeón a la derecha.
 *
 * Acordeón con <details> nativo: abre y cierra sin JavaScript, funciona
 * con teclado y el contenido está en el HTML para buscadores. Sin caja
 * alrededor, solo reglas: cada pregunta numerada como un índice.
 *
 * En el detalle se pasan `items` (las marcadas `enDetalle`).
 */
export function Faqs({ items = FAQS }: { items?: Faq[] }) {
  return (
    <section id="faqs" className="mx-auto max-w-max px-[var(--pad-x)] py-20 md:py-28">
      <div className="grid gap-12 md:grid-cols-12 md:gap-10">
        <Reveal from="left" className="md:sticky md:top-32 md:col-span-4 md:self-start">
          <Eyebrow>{F.eyebrow}</Eyebrow>
          <Heading size="lg" className="mt-5">
            {F.title}
          </Heading>
          <WhatsappCta message={MENSAJES.consulta} className="mt-7">
            {F.ctaText}
          </WhatsappCta>
        </Reveal>

        <Reveal from="right" className="border-t border-ink md:col-span-7 md:col-start-6">
          {items.map((faq, i) => (
            <details key={faq.question} className="group border-b border-rule">
              <summary className="grid cursor-pointer list-none grid-cols-[3.25rem_1fr_auto] items-baseline gap-x-3 py-6 [&::-webkit-details-marker]:hidden">
                <Indice>{dosDigitos(i + 1)}</Indice>
                <span className="font-display text-[clamp(20px,2vw,26px)] leading-snug">
                  {faq.question}
                </span>
                {/* El mismo Plus rotado 45° hace la cruz al abrir. */}
                <Plus
                  size={20}
                  weight={ICON_WEIGHT}
                  aria-hidden="true"
                  className="self-center transition-transform duration-300 group-open:rotate-45"
                />
              </summary>
              <p className="max-w-[60ch] pb-7 pl-[calc(3.25rem+0.75rem)] pr-8 leading-relaxed desc-copy">
                {faq.answer}
              </p>
            </details>
          ))}
        </Reveal>
      </div>
    </section>
  )
}
