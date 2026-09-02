import { Plus, ICON_WEIGHT } from "@/components/ui/icons"
import { FAQS_CONTENT } from "@/content/faqs"
import { WhatsappCta } from "@/components/ui/whatsapp-cta"
import { MENSAJES } from "@/lib/whatsapp"
import { Reveal } from "@/components/ui/reveal"
import { Eyebrow } from "@/components/ui/eyebrow"

export function Faqs() {
  return (
    <section
      id="faqs"
      className="mx-auto max-w-max px-[var(--pad-x)] py-20 md:py-28"
    >
      <div className="grid grid-cols-1 gap-10 md:grid-cols-[minmax(0,0.8fr)_minmax(0,1.2fr)] md:gap-16">
        {/* Columna izquierda: título + salida a WhatsApp */}
        <Reveal from="left" className="md:sticky md:top-10 md:self-start">
          <Eyebrow>
            Preguntas frecuentes
          </Eyebrow>
          <h2
            className="mt-4 font-display font-normal leading-[1.05]"
            style={{ fontSize: "clamp(28px, 4vw, 44px)" }}
          >
            Todo lo que suelen preguntarnos
          </h2>
          <p className="mt-4 desc-copy">
            ¿No encontrás tu respuesta? Escribinos y te contestamos en el día.
          </p>
          <WhatsappCta
            message={MENSAJES.consulta}
            tone="outline"
            className="mt-6"
          >
            Hacer una consulta
          </WhatsappCta>
        </Reveal>

        {/* Columna derecha: acordeón contenido */}
        <Reveal from="right" className="divide-y divide-border overflow-hidden rounded-none border border-border">
          {FAQS_CONTENT.map((faq) => (
            <details key={faq.question} className="group">
              <summary className="flex cursor-pointer list-none items-center justify-between gap-4 px-6 py-5 text-lg font-semibold transition-colors hover:bg-bone [&::-webkit-details-marker]:hidden">
                {faq.question}
                {/* El mismo Plus rotado 45° hace la cruz al abrir: un
                    solo ícono, sin cambio de glifo a mitad de la
                    transición. */}
                <Plus
                  size={20}
                  weight={ICON_WEIGHT}
                  aria-hidden="true"
                  className="shrink-0 text-muted-foreground transition-transform duration-200 group-open:rotate-45"
                />
              </summary>
              <p className="px-6 pb-6 leading-relaxed desc-copy">
                {faq.answer}
              </p>
            </details>
          ))}
        </Reveal>
      </div>
    </section>
  )
}
