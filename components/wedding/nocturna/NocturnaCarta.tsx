import type { WeddingContent } from "@/content/wedding/types"
import { NOCTURNA_COPY as C } from "@/content/wedding/nocturna/copy"
import { Reveal } from "@/components/ui/reveal"
import { NcFoto } from "./NcFoto"

/**
 * La carta de bienvenida, compuesta como página de revista (referencia:
 * "The header font"): saludo en versalitas, la frase de la pareja como
 * título y la foto al centro con el texto justificado a los dos lados.
 * En el celular, la foto arriba y los párrafos abajo.
 */
export function NocturnaCarta({ content }: { content: WeddingContent }) {
  const { couple } = content

  return (
    <section className="px-6 py-24 md:py-32">
      <Reveal from="up" className="mx-auto max-w-2xl text-center">
        <p className="nc-sans nc-muted">{C.carta.saludo}</p>
        <h2 className="nc-title mx-auto mt-5 max-w-[22ch]">{couple.tagline}</h2>
      </Reveal>

      <Reveal
        from="up"
        className="mx-auto mt-14 grid max-w-5xl items-center gap-10 md:grid-cols-[1fr_minmax(0,1.25fr)_1fr] md:gap-8"
      >
        <NcFoto
          recortar
          tono="film"
          src={content.heroImage}
          alt={`${couple.bride} & ${couple.groom}`}
          sizes="(min-width: 768px) 420px, 100vw"
          className="mx-auto aspect-[3/4] w-full max-w-[420px] md:order-2"
        />
        <p className="text-justify md:order-1 md:[text-align-last:right]">{couple.welcomeMessage}</p>
        <p className="text-justify md:order-3">{couple.quoteEditorial}</p>
      </Reveal>

      <Reveal from="up" className="mt-14 text-center">
        <p className="nc-sans nc-muted">{C.carta.firma}</p>
        <p className="nc-script mt-3 text-[56px]">
          {couple.bride} <span className="nc-display text-lg">&amp;</span> {couple.groom}
        </p>
      </Reveal>
    </section>
  )
}
