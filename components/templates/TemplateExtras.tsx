import { EXTRAS, EXTRAS_CONTENT as E } from "@/content/extras"
import { Eyebrow } from "@/components/ui/eyebrow"
import { Heading } from "@/components/ui/heading"
import { Reveal } from "@/components/ui/reveal"
import { Dibujo } from "@/components/ui/illustrations"
import { WhatsappCta } from "@/components/ui/whatsapp-cta"
import { mensajeExtras } from "@/lib/whatsapp"

/**
 * "Si quieren sumar algo más": lo que acompaña a la invitación. Visible y
 * con el mismo lenguaje de las secciones —dibujo, nombre, una línea—, sin
 * precios (se cotizan por WhatsApp).
 *
 * Va sobre bone para separarlo de "Todo esto viene en su invitación": lo
 * de arriba viene incluido; esto se suma aparte.
 */
export function TemplateExtras({ diseno }: { diseno: string }) {
  return (
    <section className="bg-bone">
      <div className="mx-auto max-w-max px-[var(--pad-x)] py-20 md:py-28">
        <Reveal from="up" className="text-center">
          <Eyebrow>{E.eyebrow}</Eyebrow>
          <Heading size="lg" className="mt-5">
            {E.title}
          </Heading>
        </Reveal>

        <Reveal from="up">
          <ul className="mx-auto mt-12 grid max-w-[1040px] gap-px border border-rule bg-rule sm:grid-cols-3 md:mt-16">
            {EXTRAS.map((extra) => (
              <li key={extra.id} className="flex flex-col items-center bg-paper px-6 py-10 text-center">
                <Dibujo nombre={extra.ilustracion} className="w-16 text-ink md:w-20" />
                <h3 className="mt-6 font-display text-2xl leading-tight">{extra.name}</h3>
                <p className="mt-2 max-w-[28ch] text-sm leading-snug desc-copy">{extra.text}</p>
              </li>
            ))}
          </ul>

          <div className="mt-10 flex justify-center">
            <WhatsappCta message={mensajeExtras(diseno)} trackParams={{ design: diseno }}>
              {E.ctaText}
            </WhatsappCta>
          </div>
        </Reveal>
      </div>
    </section>
  )
}
