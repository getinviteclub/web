import { MANIFIESTO_CONTENT as M } from "@/content/manifiesto"
import { Eyebrow } from "@/components/ui/eyebrow"
import { Reveal } from "@/components/ui/reveal"
import { Ramo } from "@/components/ui/illustrations/objetos"

/**
 * Qué es Invite Club, en una sola frase centrada. La segunda mitad en gris
 * e itálica: se lee primero la idea y después el matiz.
 */
export function Manifiesto() {
  return (
    <section className="mx-auto max-w-max px-[var(--pad-x)] py-24 md:py-36">
      <Reveal from="up" className="flex flex-col items-center text-center">
        <Ramo className="w-16 text-ink md:w-20" />
        <Eyebrow className="mt-8">{M.eyebrow}</Eyebrow>
        <p className="mt-6 max-w-[22ch] font-display text-[clamp(32px,4.6vw,64px)] leading-[1.04] text-balance">
          {M.statementStart} <em className="text-muted-foreground">{M.statementEnd}</em>
        </p>
      </Reveal>
    </section>
  )
}
