import Image from "next/image"
import type { Template } from "@/content/templates"
import { INVITACION_CONTENT } from "@/content/invitacion"
import { Reveal } from "@/components/ui/reveal"
import { Eyebrow } from "@/components/ui/eyebrow"

/**
 * "Todo lo que puede incluir": el corazón del detalle.
 *
 * Composición asimétrica a propósito, con el mismo lenguaje que el resto
 * del sitio —reglas de 1px, serif para los títulos, gris para el cuerpo—:
 * catorce tarjetas iguales convertían esto en la ficha técnica de un
 * software, y lo que se vende es una invitación.
 *
 * El reparto de peso es la decisión de diseño: tres secciones con texto a
 * la izquierda (las que deciden la compra) y una foto de la invitación a
 * la derecha que sostiene la columna. El resto va abajo como índice
 * corrido, separado por puntos, en una sola línea de texto.
 */
export function TemplateIncluye({ template }: { template: Template }) {
  return (
    <section className="border-t border-rule pt-12 md:pt-16">
      <Reveal from="left" className="max-w-[52ch]">
        <Eyebrow>{INVITACION_CONTENT.eyebrow}</Eyebrow>
        <h2
          className="mt-4 font-display font-normal leading-[1.05]"
          style={{ fontSize: "clamp(28px, 4vw, 44px)" }}
        >
          {INVITACION_CONTENT.title}
        </h2>
        <p className="mt-4 text-lg desc-copy">{INVITACION_CONTENT.text}</p>
      </Reveal>

      <div className="mt-12 grid gap-10 md:mt-16 md:grid-cols-12 md:gap-16">
        <Reveal from="left" className="md:col-span-7">
          <ul className="border-t border-rule">
            {INVITACION_CONTENT.destacadas.map((item) => (
              <li key={item.id} className="border-b border-rule py-6">
                <h3 className="font-display text-2xl font-normal">
                  {item.label}
                </h3>
                <p className="mt-2 max-w-[54ch] leading-relaxed desc-copy">
                  {item.text}
                </p>
              </li>
            ))}
          </ul>

          <div className="mt-8">
            <Eyebrow as="h3">{INVITACION_CONTENT.restoLabel}</Eyebrow>
            {/* Índice corrido y no una grilla de ítems: son las que
                acompañan, no las que deciden. Separadas por puntos ocupan
                tres renglones en vez de diez filas. */}
            <p className="mt-3 max-w-[54ch] font-display text-xl font-normal leading-relaxed">
              {INVITACION_CONTENT.resto.join(" · ")}
            </p>
            <p className="note-copy mt-5 max-w-[46ch] text-muted-foreground">
              {INVITACION_CONTENT.consulta}
            </p>
          </div>
        </Reveal>

        {/* La foto sostiene la columna derecha y evita que la sección sea
            una pared de texto. Sin marco de teléfono: ya hay uno arriba. */}
        <Reveal from="right" className="md:col-span-5">
          <div className="relative aspect-[4/5] w-full overflow-hidden bg-bone">
            <Image
              src={template.coverImage}
              alt={`Invitación ${template.name}`}
              fill
              sizes="(min-width: 768px) 40vw, 90vw"
              style={{ objectPosition: template.coverPosition }}
              className="object-cover"
            />
          </div>
        </Reveal>
      </div>
    </section>
  )
}
