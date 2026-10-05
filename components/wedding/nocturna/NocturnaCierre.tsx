import type { WeddingContent } from "@/content/wedding/types"
import { NOCTURNA_COPY as C } from "@/content/wedding/nocturna/copy"
import { Reveal } from "@/components/ui/reveal"
import { NcFoto } from "./NcFoto"

/**
 * El cierre, como un save the date (referencia: el auto antiguo con el
 * velo): una foto en blanco y negro a sangre, oscurecida, y encima la
 * caligrafía, la fecha espaciada, los nombres y "se casan".
 * La foto es la quinta de la galería (en la demo, la salida con bengalas).
 */
export function NocturnaCierre({ content }: { content: WeddingContent }) {
  const { couple, date } = content
  const foto = content.gallery[4] ?? content.gallery[0]

  return (
    <section className="relative flex min-h-[90svh] items-center justify-center overflow-hidden bg-[var(--nc-deep)] px-6 py-24 text-center text-[var(--nc-paper)]">
      {foto && <NcFoto recortar src={foto.src} alt="" className="absolute inset-0" />}
      <div className="absolute inset-0 bg-[#1f1716]/55" />

      <Reveal from="up" className="relative flex flex-col items-center">
        <p className="nc-script text-[clamp(64px,10vw,110px)]">{C.cierre.script}</p>
        <p className="nc-display mt-8 text-[clamp(22px,3vw,30px)] tracking-[0.3em]">{date.shortDate}</p>
        <p className="nc-script mt-10 text-[clamp(52px,8vw,84px)]">
          {couple.bride} <span className="nc-display text-[0.4em]">&amp;</span> {couple.groom}
        </p>
        <p className="nc-display mt-4 text-[13px] uppercase tracking-[0.28em]">{C.cierre.casan}</p>
      </Reveal>
    </section>
  )
}
