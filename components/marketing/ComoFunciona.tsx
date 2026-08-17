import { FEATURES_CONTENT } from "@/content/features"
import { Reveal } from "@/components/ui/reveal"
import { Eyebrow } from "@/components/ui/eyebrow"

/**
 * Banda clara con la promesa de la marca. Composición centrada y sin
 * imagen: el peso lo lleva la tipografía, no un bloque visual.
 *
 * Los tres ítems NO van numerados a propósito. La numeración 01/02/03
 * vive en <Proceso>, que cuenta los mismos tres pasos; repetirla acá
 * duplicaría la secuencia. Acá el espacio del grid alcanza como separador.
 */
export function ComoFunciona() {
  return (
    <section id="features" className="bg-clay">
      <div className="mx-auto max-w-max px-[var(--pad-x)] py-20 md:py-28">
        {/* 34rem = 544px: la segunda línea del titular mide 502px a 44px
            de cuerpo, y con 46ch (464px) le quedaba "todo." colgando. */}
        <Reveal from="up" className="mx-auto max-w-[34rem] text-center">
          <Eyebrow>{FEATURES_CONTENT.eyebrow}</Eyebrow>

          <h2
            className="mt-5 whitespace-pre-line font-display font-normal leading-[1.15]"
            // El 7.4vw hace que el cuerpo acompañe al ancho en el rango
            // mobile en vez de quedarse clavado en el piso: así la
            // segunda línea entra completa desde 320px para arriba y no
            // deja "todo." colgando solo. A 375px da ~28px, igual que antes.
            style={{ fontSize: "clamp(24px, 7.4vw, 44px)" }}
          >
            {FEATURES_CONTENT.title}
          </h2>
        </Reveal>

        <Reveal from="up">
          <ul className="mx-auto mt-14 grid max-w-[1000px] grid-cols-1 gap-10 sm:grid-cols-3 sm:gap-8 md:mt-16 md:gap-12">
            {FEATURES_CONTENT.items.map((item) => (
              <li key={item.title} className="text-center">
                <h3 className="font-display text-xl font-normal leading-snug">
                  {item.title}
                </h3>
                <p className="mt-2.5 text-sm leading-relaxed desc-copy">
                  {item.text}
                </p>
              </li>
            ))}
          </ul>
        </Reveal>
      </div>
    </section>
  )
}
