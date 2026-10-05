import type { WeddingContent } from "@/content/wedding/types"
import { NOCTURNA_COPY as C } from "@/content/wedding/nocturna/copy"
import { Copas } from "@/components/ui/illustrations/celebracion"

/**
 * La portada es la tarjeta misma, sin foto (referencia: Polina & Sergey).
 * La invitación en versalitas chicas, los nombres en caligrafía enorme
 * —uno corrido a la izquierda y otro a la derecha, como escritos a mano
 * sobre el papel— y un dibujo de trazo fino de dos copas que brindan.
 */
export function NocturnaHero({ content }: { content: WeddingContent }) {
  const { couple, date, location } = content

  return (
    <section id="portada" className="flex min-h-[100svh] flex-col items-center justify-center overflow-hidden px-6 pb-14 pt-28 text-center">
      <p className="nc-display text-[15px] uppercase leading-relaxed tracking-[0.14em]">
        {C.hero.invitan[0]}
        <br />
        {C.hero.invitan[1]}
      </p>

      <h1 className="nc-script mt-10 w-full max-w-[760px] text-[clamp(92px,19vw,200px)] leading-[0.82]">
        <span className="block -translate-x-[6%] text-left">{couple.bride}</span>
        <span className="nc-display -my-2 block text-[0.16em] leading-none">&amp;</span>
        <span className="block translate-x-[6%] text-right">{couple.groom}</span>
      </h1>

      <Copas className="mt-10 w-20 text-[var(--nc-ink)]" />

      <p className="nc-sans mt-8">
        {date.shortDate.replaceAll(".", " · ")}
        <span className="nc-muted mx-3">—</span>
        {location.venueName}
      </p>
      <p className="nc-muted mt-10 max-w-[22ch] text-[12px] leading-relaxed">{C.hero.bajar}</p>
    </section>
  )
}
