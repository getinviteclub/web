import { INVITACION_CONTENT as I } from "@/content/invitacion"
import { Eyebrow } from "@/components/ui/eyebrow"
import { Heading } from "@/components/ui/heading"
import { Reveal } from "@/components/ui/reveal"
import { Dibujo } from "@/components/ui/illustrations"

/**
 * Las quince secciones, cada una con su dibujo, en una grilla de celdas
 * separadas por reglas de 1px —como un índice impreso—.
 *
 * Quince entran justas en tres filas de cinco (desktop) y cinco de tres
 * (tablet). En el teléfono, a dos columnas, la última ocupa la fila
 * entera para no dejar una celda vacía.
 */
export function Secciones({ title }: { title?: string }) {
  return (
    <section className="mx-auto max-w-max px-[var(--pad-x)] py-20 md:py-28">
      <Reveal from="up" className="text-center">
        <Eyebrow>{I.eyebrow}</Eyebrow>
        <Heading size="lg" className="mx-auto mt-5 max-w-[22ch]">
          {title ?? I.title}
        </Heading>
      </Reveal>

      <Reveal from="up" className="mt-12 md:mt-16">
        {/* Las reglas salen del gap sobre fondo de regla: cada celda tapa
            con el color del papel y lo que queda a la vista es la línea. */}
        <ul className="grid grid-cols-2 gap-px border border-rule bg-rule md:grid-cols-3 lg:grid-cols-5 [&>li:last-child]:col-span-2 md:[&>li:last-child]:col-span-1">
          {I.secciones.map((s) => (
            <li key={s.id} className="flex flex-col bg-background p-5 md:p-6">
              <Dibujo nombre={s.ilustracion} className="w-14 text-ink md:w-16" />
              <h3 className="mt-5 font-display text-xl leading-tight">{s.label}</h3>
              <p className="mt-1.5 text-sm leading-snug desc-copy">{s.text}</p>
            </li>
          ))}
        </ul>
      </Reveal>
    </section>
  )
}
