import { TEMPLATES } from "@/content/templates"
import { DETALLE_CONTENT as D } from "@/content/detalle"
import { Heading } from "@/components/ui/heading"
import { Reveal } from "@/components/ui/reveal"
import { TemplateCard } from "@/components/templates/TemplateCard"

/**
 * "También les puede gustar": el resto de la colección, para quien llegó
 * al final del detalle sin decidirse. Mejor que vuelvan a mirar diseños
 * acá que se vayan a la home a buscarlos.
 */
export function TemplateRelacionados({ actual }: { actual: string }) {
  const otros = TEMPLATES.filter((t) => t.slug !== actual).slice(0, 3)

  return (
    <section className="border-t border-rule">
      <div className="mx-auto max-w-max px-[var(--pad-x)] py-20 md:py-28">
        <Reveal from="left">
          <Heading size="lg">{D.relacionadosTitle}</Heading>
        </Reveal>
        <ul className="mt-12 grid grid-cols-1 gap-x-6 gap-y-14 sm:grid-cols-2 lg:grid-cols-3">
          {otros.map((t, i) => (
            <li key={t.slug}>
              <Reveal from={i % 2 === 0 ? "left" : "right"}>
                <TemplateCard template={t} />
              </Reveal>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}
