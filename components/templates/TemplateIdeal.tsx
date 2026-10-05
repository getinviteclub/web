import type { Template } from "@/content/templates"
import { DETALLE_CONTENT as D } from "@/content/detalle"
import { Eyebrow } from "@/components/ui/eyebrow"
import { Heading } from "@/components/ui/heading"
import { FilmPhoto } from "@/components/ui/film-photo"
import { Reveal } from "@/components/ui/reveal"
import { Indice, romano } from "@/components/ui/indice"

/**
 * "Pensada para parejas que…": las tres razones del diseño en (I)(II)(III)
 * — el recurso con el que Avela White describe a quién le sirve cada
 * servicio. Ayuda a autoseleccionarse: quien se reconoce en dos de tres
 * ya eligió.
 *
 * La foto de ambiente es la última de la galería del diseño (una foto,
 * nunca la pieza), así cada detalle tiene su propio clima.
 */
export function TemplateIdeal({ template }: { template: Template }) {
  const foto = [...template.galeria].reverse().find((img) => !img.pieza)

  return (
    <section className="border-t border-rule">
      <div className="mx-auto grid max-w-max gap-12 px-[var(--pad-x)] py-20 md:grid-cols-12 md:items-center md:gap-10 md:py-28">
        <Reveal from="left" className="md:col-span-6">
          <Eyebrow>{D.idealLabel}</Eyebrow>
          <Heading size="lg" className="mt-5">
            {template.name}, <em>{template.keywords[0].toLowerCase()}</em> de principio a fin.
          </Heading>

          <ol className="mt-10 border-t border-ink">
            {template.idealPara.map((razon, i) => (
              <li key={razon} className="grid grid-cols-[3.5rem_1fr] gap-2 border-b border-rule py-6">
                <Indice>{romano(i + 1)}</Indice>
                <p className="font-display text-[clamp(20px,2vw,26px)] leading-snug">{razon}</p>
              </li>
            ))}
          </ol>
        </Reveal>

        {foto && (
          <Reveal from="right" className="md:col-span-5 md:col-start-8">
            <FilmPhoto
              src={foto.src}
              alt={foto.alt}
              soft
              sizes="(min-width: 768px) 38vw, 90vw"
              className="aspect-[4/5] w-full"
            />
          </Reveal>
        )}
      </div>
    </section>
  )
}
