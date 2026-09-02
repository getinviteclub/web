import { PLANES, DISENO_VS_PLAN } from "@/content/planes"
import { CheckItem } from "@/components/ui/check-item"
import { WhatsappCta } from "@/components/ui/whatsapp-cta"
import { Reveal } from "@/components/ui/reveal"
import { Eyebrow } from "@/components/ui/eyebrow"
import { TrackView } from "@/components/ui/track-view"
import { FUNNEL_EVENTS } from "@/lib/analytics"
import { mensajePlan, MENSAJES } from "@/lib/whatsapp"
import { cn } from "@/lib/utils"

export function Pricing() {
  return (
    <section
      id="planes"
      className="mx-auto max-w-max px-[var(--pad-x)] py-20 md:py-24"
    >
      <TrackView event={FUNNEL_EVENTS.viewPricing} />

      <Reveal from="left" className="mb-10 max-w-[52ch] md:mb-14">
        <Eyebrow className="mb-4">Planes</Eyebrow>
        {/* El titular es la distinción diseño/plan y no una frase de
            marca: es la objeción #1 del pricing —"el diseño que me gustó
            debe estar en el plan caro"— y tiene que estar resuelta antes
            de que el usuario mire un solo precio. */}
        <h2
          className="font-display font-normal leading-[1.15]"
          style={{ fontSize: "clamp(28px, 4vw, 44px)" }}
        >
          {DISENO_VS_PLAN.statement}
        </h2>
        <p className="mt-4 text-lg desc-copy">{DISENO_VS_PLAN.nota}</p>
      </Reveal>

      <Reveal from="up" className="mb-10 md:mb-14">
        <dl className="grid grid-cols-1 gap-x-10 gap-y-6 border-y border-rule py-7 sm:grid-cols-2">
          {[DISENO_VS_PLAN.diseno, DISENO_VS_PLAN.plan].map((bloque) => (
            <div key={bloque.title}>
              <dt className="font-display text-xl font-normal">
                {bloque.title}
              </dt>
              <dd className="mt-1.5 text-sm leading-relaxed desc-copy">
                {bloque.text}
              </dd>
            </div>
          ))}
        </dl>
      </Reveal>

      {/* Atelier queda fuera de la grilla: no es un tier más caro del
          mismo producto, es otro servicio (diseño desde cero). Mezclarlo
          haría leer los 3 planes como "versiones degradadas" del cuarto. */}
      <div className="grid grid-cols-1 items-stretch gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {PLANES.filter((p) => !p.atelier).map((plan, i) => (
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
                {plan.featured && plan.badge && (
                  <span className="label-copy label-copy-inverse rounded-none bg-ink px-2.5 py-1">
                    {plan.badge}
                  </span>
                )}
              </div>

              <p className="font-display text-[40px] font-normal leading-none">
                {plan.price}
              </p>

              <p className="text-sm leading-relaxed desc-copy">
                {plan.tagline}
              </p>

              <ul className="flex flex-col gap-2.5">
                {plan.features.map((feature) => (
                  <CheckItem key={feature}>{feature}</CheckItem>
                ))}
              </ul>

              <WhatsappCta
                message={mensajePlan(plan.name)}
                trackParams={{ plan: plan.id }}
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

      {PLANES.filter((p) => p.atelier).map((plan) => (
        <Reveal from="up" key={plan.id}>
          <div className="mt-10 flex flex-col gap-5 border-t border-ink pt-8 sm:flex-row sm:items-start sm:justify-between sm:gap-10">
            <div className="max-w-[46ch]">
              <div className="flex items-baseline gap-4">
                <h3 className="font-display text-2xl font-normal">
                  {plan.name}
                </h3>
                <span className="font-display text-2xl font-normal">
                  {plan.price}
                </span>
              </div>
              <p className="mt-2 text-sm leading-relaxed desc-copy">
                {plan.tagline}
              </p>
              {plan.features.length > 0 && (
                <ul className="mt-3 flex flex-wrap gap-x-5 gap-y-1">
                  {plan.features.map((feature) => (
                    <li key={feature} className="text-sm desc-copy">
                      {feature}
                    </li>
                  ))}
                </ul>
              )}
            </div>
            <WhatsappCta
              message={MENSAJES.atelier}
              trackParams={{ plan: plan.id }}
              variant="link"
              className="shrink-0"
            >
              {plan.ctaLabel}
            </WhatsappCta>
          </div>
        </Reveal>
      ))}

      <p className="note-copy mt-10">
        Pago único, sin suscripción. Los precios están en dólares; te pasamos
        el equivalente en pesos al momento de contratar.
      </p>
    </section>
  )
}
