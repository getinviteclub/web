import Image from "next/image"
import { INTEGRACIONES_CONTENT } from "@/content/integraciones"
import { TEMPLATES } from "@/content/templates"
import { Reveal } from "@/components/ui/reveal"
import { Eyebrow } from "@/components/ui/eyebrow"
import { PhoneMockup } from "@/components/ui/phone-mockup"

/**
 * El vistazo de la home: aspiracional, no un índice.
 *
 * Antes eran las catorce funcionalidades en una grilla de tres columnas.
 * Esa lista se mudó al detalle de cada diseño; acá quedan seis nombres y
 * un teléfono, porque en la home la pregunta todavía es "¿esto me sirve?"
 * y no "¿qué trae exactamente?".
 *
 * El teléfono sobre la foto repite la composición del detalle a propósito:
 * es el mismo recurso, y hace que la sección muestre una invitación en vez
 * de describirla.
 */
export function Integraciones() {
  const aura = TEMPLATES.find((t) => t.slug === "aura") ?? TEMPLATES[0]

  return (
    <section className="bg-clay">
      <div className="mx-auto max-w-max px-[var(--pad-x)] py-20 md:py-28">
        <div className="grid items-center gap-12 md:grid-cols-2 md:gap-16">
          <Reveal from="left">
            <Eyebrow>{INTEGRACIONES_CONTENT.eyebrow}</Eyebrow>
            <h2
              className="mt-4 max-w-[18ch] font-display font-normal leading-[1.05]"
              style={{ fontSize: "clamp(28px, 4vw, 44px)" }}
            >
              {INTEGRACIONES_CONTENT.title}
            </h2>
            <p className="mt-4 max-w-[48ch] text-lg desc-copy">
              {INTEGRACIONES_CONTENT.subtitle}
            </p>

            <ul className="mt-8 grid grid-cols-1 gap-x-10 border-t border-rule sm:grid-cols-2">
              {INTEGRACIONES_CONTENT.destacadas.map((item) => (
                <li
                  key={item}
                  className="border-b border-rule py-3 font-display text-lg font-normal"
                >
                  {item}
                </li>
              ))}
            </ul>

            <p className="mt-5 text-sm leading-relaxed desc-copy">
              {INTEGRACIONES_CONTENT.cierre}
            </p>
          </Reveal>

          <Reveal from="right">
            <div className="relative aspect-[4/5] w-full overflow-hidden bg-bone">
              <Image
                src={aura.showcaseImage ?? aura.coverImage}
                alt=""
                fill
                sizes="(min-width: 768px) 45vw, 90vw"
                className="object-cover"
              />
              <div className="absolute inset-0 bg-black/[.12]" />
              <div className="absolute inset-0 flex items-center justify-center p-8">
                <PhoneMockup
                  src={aura.coverImage}
                  alt={`Invitación ${aura.name}`}
                  fit="contain"
                  className="max-w-[min(58%,220px)]"
                />
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  )
}
