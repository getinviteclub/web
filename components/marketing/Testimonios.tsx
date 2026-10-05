import Link from "next/link"
import { TESTIMONIOS, TESTIMONIOS_CONTENT as T } from "@/content/testimonios"
import { getTemplate } from "@/content/templates"
import { Eyebrow } from "@/components/ui/eyebrow"
import { Heading } from "@/components/ui/heading"
import { Reveal } from "@/components/ui/reveal"
import { Stars } from "@/components/ui/stars"

/**
 * El muro de reseñas (referencia: la ficha de Glo Creative, que apila
 * decenas de citas cortas). Muchas voces cortas convencen más que una
 * larga: la destacada ya tiene su propio bloque (<TestimonioDestacado>).
 *
 * Grilla de 3×2 con tarjetas del mismo alto por fila: con columnas de
 * CSS las citas de largo distinto dejaban una tarjeta desfasada abajo.
 *
 * En el detalle se pasa `diseno` y las de ese diseño van primero.
 */
export function Testimonios({ diseno, title }: { diseno?: string; title?: string }) {
  const lista = TESTIMONIOS.filter((t) => !t.destacado)
  const items = diseno
    ? [...lista].sort((a, b) => Number(b.diseno === diseno) - Number(a.diseno === diseno))
    : lista

  return (
    <section id="resenas" className="mx-auto max-w-max px-[var(--pad-x)] py-20 md:py-28">
      <Reveal from="up" className="text-center">
        <Eyebrow>{T.eyebrow}</Eyebrow>
        <Heading size="lg" className="mx-auto mt-5 max-w-[22ch]">
          {title ?? T.title}
        </Heading>
      </Reveal>

      <div className="mt-12 grid gap-5 sm:grid-cols-2 md:mt-16 lg:grid-cols-3">
        {items.map((t) => {
          const template = t.diseno ? getTemplate(t.diseno) : undefined
          return (
            <figure
              key={t.author}
              className="flex flex-col border border-rule bg-paper p-6 md:p-7"
            >
              <Stars />
              <blockquote className="mb-6 mt-5 font-display text-[22px] leading-snug">
                &ldquo;{t.quote}&rdquo;
              </blockquote>
              <figcaption className="mt-auto flex flex-wrap items-baseline justify-between gap-2 border-t border-rule pt-4">
                <span className="text-sm font-medium">{t.author}</span>
                <span className="label-copy text-muted-foreground">
                  {template ? (
                    <Link href={`/templates/${template.slug}`} className="hover:text-ink">
                      {template.name}
                    </Link>
                  ) : null}
                  {template && t.lugar ? " — " : null}
                  {t.lugar}
                </span>
              </figcaption>
            </figure>
          )
        })}
      </div>
    </section>
  )
}
