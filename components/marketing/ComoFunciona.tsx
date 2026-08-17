import { FEATURES_CONTENT } from "@/content/features"
import { Reveal } from "@/components/ui/reveal"
import { Eyebrow } from "@/components/ui/eyebrow"

/**
 * Banda clara con la promesa de la marca. Composición centrada y sin
 * imagen: el peso lo lleva la tipografía, no un bloque visual.
 *
 * Los tres ítems NO van numerados a propósito. La numeración 01/02/03
 * vive en <Proceso>, que cuenta los mismos tres pasos; repetirla acá
 * duplicaría la secuencia. Acá el separador es una línea fina.
 */
export function ComoFunciona() {
  return (
    <section id="features" className="bg-bone">
      <div className="mx-auto max-w-max px-[var(--pad-x)] py-20 md:py-28">
        <Reveal from="up" className="mx-auto max-w-[46ch] text-center">
          <Eyebrow>{FEATURES_CONTENT.eyebrow}</Eyebrow>

          <h2
            className="mt-5 text-balance font-display font-normal leading-[1.15]"
            style={{ fontSize: "clamp(28px, 4vw, 44px)" }}
          >
            {FEATURES_CONTENT.title}
          </h2>
        </Reveal>

        <Reveal from="up">
          <ul className="mx-auto mt-14 grid max-w-[1000px] grid-cols-1 gap-10 sm:grid-cols-3 sm:gap-8 md:mt-16 md:gap-12">
            {FEATURES_CONTENT.items.map((item) => (
              <li
                key={item.title}
                className="border-t border-rule pt-6 text-center"
              >
                <h3 className="font-display text-xl font-normal leading-snug">
                  {item.title}
                </h3>
                <p className="mt-2.5 text-sm leading-relaxed text-muted-foreground">
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
