import { ESTUDIO_CONTENT as E } from "@/content/estudio"
import { Eyebrow } from "@/components/ui/eyebrow"
import { FilmPhoto } from "@/components/ui/film-photo"
import { Reveal } from "@/components/ui/reveal"

/**
 * "Trabajamos boda por boda": por qué el servicio es personalizado, sin
 * nombres ni caras (decisión de Facu). Una foto a lo ancho y una frase
 * centrada encima, sobre una hoja de papel.
 */
export function Estudio() {
  const [antes, enfasis] = E.title

  return (
    <section className="mx-auto max-w-max px-[var(--pad-x)] py-20 md:py-28">
      <div className="relative">
        <FilmPhoto
          src={E.foto.src}
          alt={E.foto.alt}
          sizes="100vw"
          className="aspect-[4/5] w-full sm:aspect-[16/9] md:aspect-[21/9]"
        />

        {/* El centrado lo hace este contenedor y no un translate en el
            <Reveal>: la animación de entrada usa transform y lo pisaba. */}
        <div className="absolute inset-0 flex items-end justify-center p-4 sm:items-center">
          <Reveal from="up" className="w-full sm:w-[min(620px,80%)]">
            <div className="paper-shadow bg-paper px-7 py-10 text-center md:px-12 md:py-14">
              <Eyebrow>{E.eyebrow}</Eyebrow>
              <p className="mt-5 font-display text-[clamp(32px,4vw,52px)] leading-[1.02]">
                {antes} <em className="whitespace-nowrap">{enfasis}</em>
              </p>
              <p className="mt-4 desc-copy">{E.text}</p>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  )
}
