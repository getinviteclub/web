import { TESTIMONIOS } from "@/content/testimonios"
import { FOTOS } from "@/content/fotos"
import { FilmPhoto } from "@/components/ui/film-photo"
import { Reveal } from "@/components/ui/reveal"
import { Stars } from "@/components/ui/stars"

/**
 * Una sola reseña, en grande, sobre negro y pisando una foto.
 *
 * Es el gesto del pin de referencia ("Working with Katey has shifted my
 * mindset"): la frase se lee como un titular, no como un comentario. La
 * foto va a la derecha y la cita entra por encima desde la izquierda.
 */
export function TestimonioDestacado() {
  const t = TESTIMONIOS.find((x) => x.destacado) ?? TESTIMONIOS[0]

  return (
    <section className="bg-forest text-inverse">
      <div className="mx-auto grid max-w-max items-center gap-10 px-[var(--pad-x)] py-20 md:grid-cols-12 md:py-28">
        <Reveal from="right" className="md:col-span-5 md:col-start-8 md:row-start-1">
          <FilmPhoto
            src={FOTOS.veloPareja.src}
            alt={FOTOS.veloPareja.alt}
            sizes="(min-width: 768px) 40vw, 90vw"
            className="aspect-[4/5] w-full"
          />
        </Reveal>

        <Reveal from="left" className="relative z-[1] md:col-span-8 md:col-start-1 md:row-start-1">
          <Stars size={14} />
          <blockquote className="mt-8 font-display text-[clamp(30px,4.4vw,60px)] leading-[1.05] text-balance">
            &ldquo;{t.quote}&rdquo;
          </blockquote>
          <p className="mt-8 flex flex-wrap items-baseline gap-x-4 gap-y-2">
            <span className="font-display text-2xl">{t.author}</span>
            <span className="label-copy label-copy-inverse opacity-60">
              {[t.lugar, t.fecha].filter(Boolean).join(" — ")}
            </span>
          </p>
        </Reveal>
      </div>
    </section>
  )
}
