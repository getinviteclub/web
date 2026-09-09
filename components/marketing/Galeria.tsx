import Image from "next/image"
import Link from "next/link"
import { GALERIA_CONTENT } from "@/content/galeria"
import { TEMPLATES } from "@/content/templates"
import { Reveal } from "@/components/ui/reveal"
import { Eyebrow } from "@/components/ui/eyebrow"
import { TrackView } from "@/components/ui/track-view"
import { FUNNEL_EVENTS } from "@/lib/analytics"

export function Galeria() {
  return (
    <section
      id="disenos"
      className="mx-auto max-w-max px-[var(--pad-x)] pb-16 pt-20 md:pt-28"
    >
      <TrackView event={FUNNEL_EVENTS.viewGallery} />

      <Reveal from="left" className="mb-10 md:mb-14">
        <div className="flex flex-wrap items-baseline justify-between gap-2">
          <div>
            <Eyebrow>{GALERIA_CONTENT.eyebrow}</Eyebrow>
            <h2
              className="mt-4 font-display font-normal"
              style={{ fontSize: "clamp(28px, 4vw, 44px)" }}
            >
              {GALERIA_CONTENT.title}
            </h2>
          </div>
        </div>
      </Reveal>

      <div className="grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 sm:gap-x-6 lg:grid-cols-4">
        {TEMPLATES.map((template, i) => (
          <Reveal key={template.slug} from={i % 2 === 0 ? "left" : "right"}>
            <Link href={`/templates/${template.slug}`} className="group block">
              {/* La foto es lo único que se mueve al hover —el mismo
                  micro-zoom que caratsandcake.com—, el texto de abajo
                  queda quieto. */}
              <div className="relative aspect-[4/5] overflow-hidden bg-bone">
                <Image
                  src={template.coverImage}
                  alt={`Invitación ${template.name}`}
                  fill
                  sizes="(min-width: 1024px) 25vw, (min-width: 640px) 45vw, 90vw"
                  style={{ objectPosition: template.coverPosition }}
                  className="object-cover transition-transform duration-[600ms] ease-[cubic-bezier(.16,1,.3,1)] group-hover:scale-[1.06]"
                />
              </div>
              <h3 className="mt-4 font-display text-xl font-normal">
                {template.name}
              </h3>
              {/* 12px: la descripción es un pie de foto, no un párrafo.
                  A 14 competía con el nombre del diseño, que es lo único
                  que tiene que leerse de un golpe en la grilla. */}
              <p className="mt-1 text-xs leading-relaxed desc-copy">
                {template.description}
              </p>
              {/* Sin línea en reposo: la ficha entera ya es clickeable y
                  una línea fija competía con el nombre. Se dibuja al pasar
                  el mouse por cualquier parte de la ficha (ver
                  .rule-hover en globals.css). */}
              <span className="rule-hover label-copy mt-3 inline-block [letter-spacing:var(--ls-cta)]">
                {GALERIA_CONTENT.cardCta}
              </span>
            </Link>
          </Reveal>
        ))}
      </div>

    </section>
  )
}
