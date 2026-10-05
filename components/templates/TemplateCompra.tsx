import type { Template } from "@/content/templates"
import { DETALLE_CONTENT as D } from "@/content/detalle"
import { cifra } from "@/content/cifras"
import { Cta } from "@/components/ui/cta"
import { WhatsappCta, WhatsappIcon } from "@/components/ui/whatsapp-cta"
import { Heading } from "@/components/ui/heading"
import { Indice } from "@/components/ui/indice"
import { Stars } from "@/components/ui/stars"
import { ArrowUpRight, Check, ICON_WEIGHT } from "@/components/ui/icons"
import { TemplateFicha } from "@/components/templates/TemplateFicha"
import { FUNNEL_EVENTS } from "@/lib/analytics"
import { mensajeDiseno } from "@/lib/whatsapp"

/**
 * La columna derecha del detalle: todo lo necesario para decidir, en el
 * orden en que se decide — qué es, qué dicen, qué incluye, qué hago. Sin
 * precio: se pasa por WhatsApp (ver content/precio.ts).
 *
 * Primario: "Quiero este diseño" abre WhatsApp con el diseño ya escrito.
 * No dice "Comprar": abre una charla, no un checkout.
 * Secundario: la demo navegable, si existe.
 */
export function TemplateCompra({ template }: { template: Template }) {
  return (
    <div>
      <div className="flex flex-wrap items-center gap-x-4 gap-y-2">
        <Indice numero>{template.numero}</Indice>
        <span className="label-copy">{template.keywords.join(" · ")}</span>
      </div>

      <Heading as="h1" size="xl" className="mt-5">
        {template.name}
      </Heading>

      <a href="#resenas" className="mt-4 inline-flex items-center gap-2.5 text-sm text-muted-foreground hover:text-ink">
        <Stars />
        {cifra("resenas").valor} · {cifra("parejas").valor} parejas
      </a>

      <p className="mt-6 max-w-[48ch] text-lg leading-relaxed desc-copy">
        {template.longDescription}
      </p>

      <ul className="mt-8 border-t border-rule pt-6">
        {D.puntos.map((punto) => (
          <li key={punto} className="flex gap-3 py-1.5 text-sm">
            <Check size={16} weight={ICON_WEIGHT} aria-hidden="true" className="mt-px shrink-0" />
            {punto}
          </li>
        ))}
      </ul>

      {/* En fila y a tamaño md, no a lo ancho: dos pills enormes apilados
          pesaban más que el propio diseño. "Ver en vivo" y no "Ver la
          invitación en vivo": con el texto largo no entraban juntos.

          "Ver en vivo" va en TODOS los diseños (decisión de Facu), aunque
          la invitación en vivo todavía no exista: apunta a /w/<slug> y
          queda listo para cuando se cargue en content/wedding/registry.ts.
          Hasta entonces ese link da 404. */}
      <div className="mt-8 flex flex-wrap items-center gap-2.5">
        <WhatsappCta
          message={mensajeDiseno(template.name)}
          trackParams={{ design: template.slug }}
          tone="dark"
          size="md"
          className="gap-2"
        >
          <WhatsappIcon className="size-3.5" />
          {D.ctaPrincipal}
        </WhatsappCta>

        <Cta
          href={`/w/${template.liveDemoSlug ?? template.slug}`}
          external
          size="md"
          trackAs={FUNNEL_EVENTS.viewLiveDemo}
          trackParams={{ design: template.slug }}
          className="gap-2"
        >
          {D.ctaDemo}
          <ArrowUpRight size={14} weight={ICON_WEIGHT} aria-hidden="true" />
        </Cta>
      </div>

      <TemplateFicha template={template} className="mt-10" />
    </div>
  )
}
