import { PAQUETE as P } from "@/content/paquete"
import { FOTOS } from "@/content/fotos"
import { Eyebrow } from "@/components/ui/eyebrow"
import { Heading } from "@/components/ui/heading"
import { Indice, romano } from "@/components/ui/indice"
import { FilmPhoto } from "@/components/ui/film-photo"
import { Reveal } from "@/components/ui/reveal"
import { TrackView } from "@/components/ui/track-view"
import { PaqueteFicha } from "@/components/marketing/PaqueteFicha"
import { ConsultaLinea } from "@/components/marketing/ConsultaLinea"
import { FUNNEL_EVENTS } from "@/lib/analytics"

/**
 * El paquete, contado como un servicio de estudio (referencia: Avela
 * White): número, nombre, para quién es en (I)(II)(III) y qué incluye.
 * Es UNO: la decisión que queremos que tomen es qué diseño, no cuánto
 * servicio.
 */
export function LaInvitacion() {
  return (
    <section id="la-invitacion" className="bg-bone">
      <div className="mx-auto max-w-max px-[var(--pad-x)] py-20 md:py-28">
        <TrackView event={FUNNEL_EVENTS.viewPricing} />

        <Reveal from="up" className="text-center">
          <div className="flex items-center justify-center gap-4">
            <Indice numero>{P.numero}</Indice>
            <Eyebrow>{P.eyebrow}</Eyebrow>
          </div>
          <Heading size="xl" className="mt-5">
            {P.name}
          </Heading>
        </Reveal>

        <div className="mt-12 grid gap-12 md:mt-16 md:grid-cols-12 md:gap-10">
          <Reveal from="left" className="md:col-span-5">
            <Eyebrow as="h3">{P.idealLabel}</Eyebrow>
            <ol className="mt-5">
              {P.ideal.map((razon, i) => (
                <li key={razon} className="grid grid-cols-[3.5rem_1fr] gap-2 border-t border-ink/10 py-4">
                  <Indice>{romano(i + 1)}</Indice>
                  <span className="font-display text-xl leading-snug">{razon}</span>
                </li>
              ))}
            </ol>

            <FilmPhoto
              src={FOTOS.brindis.src}
              alt={FOTOS.brindis.alt}
              sizes="(min-width: 768px) 30vw, 90vw"
              className="mt-8 hidden aspect-[16/10] w-full md:block"
            />
          </Reveal>

          <Reveal from="right" className="md:col-span-7">
            <PaqueteFicha />
          </Reveal>
        </div>

        <ConsultaLinea className="mt-16 md:mt-20" />
      </div>
    </section>
  )
}
