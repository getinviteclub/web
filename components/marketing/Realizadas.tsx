import Link from "next/link"
import { REALIZADAS, REALIZADAS_CONTENT as R } from "@/content/realizadas"
import { getTemplate } from "@/content/templates"
import { Eyebrow } from "@/components/ui/eyebrow"
import { Heading } from "@/components/ui/heading"
import { FilmPhoto } from "@/components/ui/film-photo"
import { Reveal } from "@/components/ui/reveal"

/**
 * "La colección, hecha realidad": invitaciones de parejas con el diseño
 * en el que se basaron. Sobre negro. En el teléfono es una tira que se
 * desliza (el gesto es natural ahí); desde md, una grilla: con mouse una
 * tira sin pista de scroll escondía la mitad de las fichas.
 *
 * En el detalle de un diseño se pasa `diseno` y las de ese diseño van
 * primero (no se filtran: con dos ejemplos la tira quedaba vacía).
 */
export function Realizadas({ diseno, title }: { diseno?: string; title?: string }) {
  const items = diseno
    ? [...REALIZADAS].sort((a, b) => Number(b.diseno === diseno) - Number(a.diseno === diseno))
    : REALIZADAS

  return (
    <section className="bg-forest text-inverse">
      <div className="mx-auto max-w-max py-20 md:py-28">
        <Reveal from="up" className="px-[var(--pad-x)] text-center">
          <Eyebrow onDark>{R.eyebrow}</Eyebrow>
          <Heading size="lg" className="mt-5">
            {title ?? R.title}
          </Heading>
        </Reveal>

        <ul className="mt-12 flex snap-x snap-mandatory scroll-px-[var(--pad-x)] gap-5 overflow-x-auto px-[var(--pad-x)] pb-4 [scrollbar-width:none] md:mt-16 md:grid md:grid-cols-3 md:overflow-visible md:pb-0 lg:grid-cols-6 [&::-webkit-scrollbar]:hidden">
          {items.map((r) => {
            const template = getTemplate(r.diseno)
            return (
              <li
                key={`${r.pareja}-${r.pagina}`}
                className="w-[72vw] max-w-[340px] shrink-0 snap-start sm:w-[40vw] md:w-auto md:max-w-none"
              >
                <FilmPhoto
                  src={r.imagen.src}
                  alt={r.imagen.alt}
                  sizes="(min-width: 1024px) 16vw, (min-width: 768px) 30vw, 72vw"
                  className="aspect-[4/5] w-full"
                />
                <p className="mt-4 font-display text-2xl leading-none">{r.pareja}</p>
                <p className="label-copy label-copy-inverse mt-3 text-white/60">
                  Basada en{" "}
                  {template ? (
                    <Link
                      href={`/templates/${template.slug}`}
                      className="underline decoration-white/30 underline-offset-4 hover:decoration-white"
                    >
                      {template.name}
                    </Link>
                  ) : (
                    r.diseno
                  )}{" "}
                  — {r.pagina}
                </p>
              </li>
            )
          })}
        </ul>
      </div>
    </section>
  )
}
