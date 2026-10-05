import { PROCESO_CONTENT as P } from "@/content/proceso"
import { FOTOS } from "@/content/fotos"
import { Eyebrow } from "@/components/ui/eyebrow"
import { Heading } from "@/components/ui/heading"
import { Cta } from "@/components/ui/cta"
import { FilmPhoto } from "@/components/ui/film-photo"
import { Reveal } from "@/components/ui/reveal"
import { Indice, dosDigitos } from "@/components/ui/indice"

/**
 * Cómo trabajamos: una hoja apoyada sobre una foto, con los cuatro pasos
 * numerados. El texto vive sobre papel y nunca directo sobre la foto.
 */
export function ComoTrabajamos() {
  return (
    <section id="como-trabajamos" className="relative overflow-hidden">
      <div className="mx-auto grid max-w-max px-[var(--pad-x)] py-20 md:grid-cols-12 md:py-28">
        <FilmPhoto
          src={FOTOS.velas.src}
          alt=""
          sizes="(min-width: 768px) 60vw, 100vw"
          className="aspect-[4/3] w-full md:col-span-7 md:col-start-6 md:row-start-1 md:aspect-auto md:min-h-[560px]"
        />

        <Reveal
          from="left"
          className="relative z-[1] mx-3 -mt-16 md:col-span-6 md:col-start-1 md:row-start-1 md:mx-0 md:my-16 md:self-center"
        >
          <div className="paper-shadow bg-paper p-7 md:p-12">
            <Eyebrow>{P.eyebrow}</Eyebrow>
            <Heading size="lg" className="mt-4">
              {P.title}
            </Heading>

            <ol className="mt-8 border-t border-rule">
              {P.steps.map((step, i) => (
                <li key={step.title} className="grid grid-cols-[3.25rem_1fr] gap-x-3 border-b border-rule py-4">
                  <Indice>{dosDigitos(i + 1)}</Indice>
                  <div>
                    <h3 className="font-display text-2xl leading-tight">{step.title}</h3>
                    <p className="mt-1 text-sm desc-copy">{step.text}</p>
                  </div>
                </li>
              ))}
            </ol>

            <Cta href={P.ctaHref} tone="dark" size="md" className="mt-8">
              {P.ctaText}
            </Cta>
          </div>
        </Reveal>
      </div>
    </section>
  )
}
