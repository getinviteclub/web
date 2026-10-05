import type { Template } from "@/content/templates"
import { DETALLE_CONTENT as D } from "@/content/detalle"
import { Cta } from "@/components/ui/cta"
import { Eyebrow } from "@/components/ui/eyebrow"
import { Heading } from "@/components/ui/heading"
import { Reveal } from "@/components/ui/reveal"
import { ArrowUpRight, ICON_WEIGHT } from "@/components/ui/icons"
import { Sobre } from "@/components/ui/illustrations/papeleria"
import { FUNNEL_EVENTS } from "@/lib/analytics"

/**
 * La invitación funcionando. "What you see is exactly what you'll get"
 * (Glo Creative): la demo es la mejor respuesta a "¿cómo se ve de verdad?".
 *
 * Va en TODOS los diseños y apunta a /w/<slug>, igual que el CTA "Ver en
 * vivo" de la columna de compra (decisión de Facu): mientras el diseño no
 * esté cargado en content/wedding/registry.ts, ese link da 404.
 */
export function TemplateDemo({ template }: { template: Template }) {
  return (
    <section className="bg-forest text-inverse">
      <Reveal
        from="up"
        className="mx-auto flex max-w-max flex-col items-center px-[var(--pad-x)] py-20 text-center md:py-28"
      >
        <Sobre className="w-24 text-inverse md:w-28" />
        <Eyebrow onDark className="mt-8">
          {D.demo.eyebrow}
        </Eyebrow>
        <Heading size="lg" className="mt-5 max-w-[20ch]">
          {D.demo.title}
        </Heading>

        <Cta
          href={`/w/${template.liveDemoSlug ?? template.slug}`}
          external
          tone="frost"
          size="lg"
          trackAs={FUNNEL_EVENTS.viewLiveDemo}
          trackParams={{ design: template.slug }}
          className="mt-9 gap-2"
        >
          {D.demo.cta}
          <ArrowUpRight size={12} weight={ICON_WEIGHT} aria-hidden="true" />
        </Cta>
      </Reveal>
    </section>
  )
}
