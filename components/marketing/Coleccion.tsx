import { COLECCION_CONTENT as C } from "@/content/coleccion"
import { TEMPLATES } from "@/content/templates"
import { PROXIMAMENTE } from "@/content/proximamente"
import { Eyebrow } from "@/components/ui/eyebrow"
import { Heading } from "@/components/ui/heading"
import { Reveal } from "@/components/ui/reveal"
import { Dibujo } from "@/components/ui/illustrations"
import { TrackView } from "@/components/ui/track-view"
import { TemplateCard } from "@/components/templates/TemplateCard"
import { FUNNEL_EVENTS } from "@/lib/analytics"

/**
 * La colección: el activo real del sitio, inmediatamente después del
 * manifiesto. Tres columnas en desktop; los "próximamente" cierran la
 * grilla sin link, para decir que la colección crece.
 *
 * Mantiene el id #coleccion: lo apuntan el hero, la nav y el footer.
 */
export function Coleccion() {
  return (
    <section id="coleccion" className="border-t border-rule">
      <div className="mx-auto max-w-max px-[var(--pad-x)] py-20 md:py-28">
        <TrackView event={FUNNEL_EVENTS.viewGallery} />

        <Reveal from="up" className="mb-12 text-center md:mb-16">
          <Eyebrow>{C.eyebrow}</Eyebrow>
          <Heading size="xl" className="mt-5">
            {C.title}
          </Heading>
        </Reveal>

        <ul className="grid grid-cols-1 gap-x-6 gap-y-14 sm:grid-cols-2 lg:grid-cols-3">
          {TEMPLATES.map((template, i) => (
            <li key={template.slug}>
              <Reveal from={i % 2 === 0 ? "left" : "right"}>
                <TemplateCard template={template} />
              </Reveal>
            </li>
          ))}

          {PROXIMAMENTE.map((p) => (
            <li key={p.name} aria-label={`${p.name}, ${C.proximamenteLabel}`}>
              <div className="relative flex aspect-[3/2] items-center justify-center bg-bone sm:aspect-[4/5]">
                <Dibujo nombre={p.ilustracion} className="w-[30%] text-soft sm:w-[38%]" />
                <span className="label-copy absolute left-3 top-3 text-muted-foreground">
                  {C.proximamenteLabel}
                </span>
              </div>
              <h3 className="mt-5 font-display text-[clamp(28px,2.6vw,36px)] leading-none text-soft">
                {p.name}
              </h3>
              <p className="label-copy mt-3 text-soft">{p.keywords.join(" · ")}</p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}
