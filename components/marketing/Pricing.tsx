import { PLANES } from "@/content/planes"
import { WhatsappCta } from "@/components/ui/whatsapp-cta"
import { Reveal } from "@/components/ui/reveal"
import { Eyebrow } from "@/components/ui/eyebrow"
import { cn } from "@/lib/utils"

export function Pricing() {
  return (
    <section
      id="planes"
      className="mx-auto max-w-max px-[var(--pad-x)] py-20 md:py-24"
    >
      <Reveal from="left" className="mb-10 max-w-[52ch] md:mb-14">
        <Eyebrow className="mb-4">Planes</Eyebrow>
        <h2
          className="font-display font-normal leading-[1.15]"
          style={{ fontSize: "clamp(28px, 4vw, 44px)" }}
        >
          Una propuesta para cada forma de celebrar
        </h2>
        <p className="mt-4 text-lg text-muted-foreground">
          Elegí el plan que mejor se adapte a tu evento. Pago único, sin
          suscripciones.
        </p>
      </Reveal>

      <div className="grid grid-cols-1 items-stretch gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {PLANES.map((plan, i) => (
          <Reveal key={plan.id} from={i % 2 === 0 ? "left" : "right"}>
            <article
              className={cn(
                // Las tarjetas se levantan del fondo con blanco, no con
                // sombra ni radio: el sistema no tiene ninguno de los dos.
                "flex h-full flex-col gap-5 rounded-none border bg-paper p-7",
                plan.featured ? "border-ink" : "border-rule"
              )}
            >
              <div className="flex items-center justify-between gap-3">
                <h3 className="font-display text-2xl font-normal">
                  {plan.name}
                </h3>
                {plan.featured && (
                  <span className="label-copy label-copy-inverse rounded-none bg-ink px-2.5 py-1">
                    Más elegido
                  </span>
                )}
              </div>

              <p className="font-display text-[40px] font-normal leading-none">
                {plan.price}
              </p>

              <ul className="flex flex-col gap-2.5">
                {plan.features.map((feature) => (
                  <li
                    key={feature}
                    className="relative pl-6 leading-snug text-muted-foreground before:absolute before:left-0 before:font-semibold before:text-ink before:content-['✓']"
                  >
                    {feature}
                  </li>
                ))}
              </ul>

              <WhatsappCta
                message={`Hola, quiero el plan ${plan.name}`}
                tone={plan.featured ? "dark" : "outline"}
                size="md"
                className="mt-auto w-full"
              >
                {plan.ctaLabel}
              </WhatsappCta>
            </article>
          </Reveal>
        ))}
      </div>

      <p className="note-copy mt-6">
        ¿Dudas sobre qué plan te conviene? Escribinos y te ayudamos a elegir —
        te respondemos en el día.
      </p>
    </section>
  )
}
