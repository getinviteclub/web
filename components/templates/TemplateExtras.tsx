import { EXTRAS, ATELIER } from "@/content/precio"
import { Reveal } from "@/components/ui/reveal"
import { Eyebrow } from "@/components/ui/eyebrow"
import { WhatsappCta } from "@/components/ui/whatsapp-cta"
import { mensajeExtras, mensajeAtelier } from "@/lib/whatsapp"

/**
 * "También podés sumar" + Atelier: el cierre del detalle.
 *
 * Los extras son lo ÚNICO del sitio que tiene un costo aparte, y por eso
 * van acá abajo y no al lado de las funcionalidades: si comparten fila con
 * lo que ya viene incluido, el usuario vuelve a leer la página como una
 * tabla de precios y a preguntarse qué le falta a la invitación base.
 *
 * Cuatro columnas sin caja ni borde alrededor, solo la regla de arriba:
 * es una nota al pie de lujo, no una segunda grilla de planes.
 *
 * Atelier cierra la página porque es la salida para quien llegó hasta acá
 * y ninguno de los cuatro diseños lo convenció. No es un tier más caro: es
 * otro servicio, y el bloque oscuro lo separa visualmente del resto.
 */
export function TemplateExtras({ diseno }: { diseno: string }) {
  return (
    <>
      <section className="mt-16 border-t border-rule pt-12 md:mt-24">
        <Reveal from="left" className="max-w-[46ch]">
          <Eyebrow>Extras</Eyebrow>
          <h2
            className="mt-4 font-display font-normal leading-[1.1]"
            style={{ fontSize: "clamp(24px, 3vw, 34px)" }}
          >
            ¿Quieren llevarla un poco más allá?
          </h2>
          <p className="mt-3 desc-copy">
            Detalles que se suman aparte, si les hacen sentido.
          </p>
        </Reveal>

        <Reveal from="up" className="mt-10">
          <ul className="grid grid-cols-1 gap-x-10 gap-y-0 border-t border-rule sm:grid-cols-2 lg:grid-cols-4">
            {EXTRAS.map((extra) => (
              <li key={extra.id} className="border-b border-rule py-5">
                <div className="flex items-baseline justify-between gap-3">
                  <h3 className="font-display text-lg font-normal">
                    {extra.name}
                  </h3>
                  <span className="label-copy shrink-0 text-muted-foreground">
                    {extra.price}
                  </span>
                </div>
                <p className="mt-2 text-sm leading-relaxed desc-copy">
                  {extra.text}
                </p>
              </li>
            ))}
          </ul>

          <div className="mt-6">
            <WhatsappCta
              message={mensajeExtras(diseno)}
              trackParams={{ design: diseno }}
              variant="link"
            >
              Consultar por un extra
            </WhatsappCta>
          </div>
        </Reveal>
      </section>

      <section className="mt-20 bg-ink px-[var(--pad-x)] py-16 text-inverse md:mt-28 md:py-20">
        <Reveal from="up" className="mx-auto max-w-[60ch]">
          <Eyebrow onDark>{ATELIER.name}</Eyebrow>
          <p
            className="mt-5 font-display font-normal leading-[1.1]"
            style={{ fontSize: "clamp(26px, 3.6vw, 40px)" }}
          >
            {ATELIER.claim}
          </p>
          <p className="mt-5 leading-relaxed text-white/70">{ATELIER.text}</p>
          <p className="mt-6 font-display text-2xl font-normal">
            Desde {ATELIER.precioDesde}
          </p>
          <div className="mt-7">
            <WhatsappCta
              message={mensajeAtelier()}
              trackParams={{ design: "atelier" }}
              tone="frost"
              size="md"
            >
              {ATELIER.ctaText}
            </WhatsappCta>
          </div>
        </Reveal>
      </section>
    </>
  )
}
