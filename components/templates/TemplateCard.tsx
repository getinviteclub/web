import Image from "next/image"
import Link from "next/link"
import type { Template } from "@/content/templates"
import { COLECCION_CONTENT } from "@/content/coleccion"
import { Indice } from "@/components/ui/indice"

/**
 * La ficha de un diseño en la colección.
 *
 * La portada a color, con un micro-zoom al pasar el mouse. Debajo, como
 * en un catálogo: número, nombre y tres palabras.
 */
export function TemplateCard({
  template,
  sizes = "(min-width: 1024px) 30vw, (min-width: 640px) 45vw, 90vw",
}: {
  template: Template
  sizes?: string
}) {
  return (
    <Link href={`/templates/${template.slug}`} className="group block">
      <div className="relative aspect-[4/5] overflow-hidden bg-bone">
        <Image
          src={template.coverImage}
          alt={`Invitación ${template.name}`}
          fill
          sizes={sizes}
          style={{ objectPosition: template.coverPosition }}
          className="object-cover transition-transform duration-[700ms] ease-[cubic-bezier(.16,1,.3,1)] group-hover:scale-[1.04]"
        />
        {template.nuevo && (
          <span className="label-copy absolute left-3 top-3 bg-paper px-2.5 py-1.5">
            {COLECCION_CONTENT.nuevoLabel}
          </span>
        )}
      </div>

      <div className="mt-5 flex items-baseline justify-between gap-4">
        <h3 className="font-display text-[clamp(28px,2.6vw,36px)] leading-none">
          {template.name}
        </h3>
        <Indice numero>{template.numero}</Indice>
      </div>
      <p className="label-copy mt-3 text-muted-foreground">
        {template.keywords.join(" · ")}
      </p>
      <span className="rule-hover label-copy mt-5 inline-block">
        {COLECCION_CONTENT.cardCta}
      </span>
    </Link>
  )
}
