import type { WeddingContent } from "@/content/wedding/types"
import { Reveal } from "@/components/ui/reveal"
import { Anillos } from "@/components/ui/illustrations/celebracion"

/**
 * La carta de bienvenida, justo después de la portada: "queridos familia
 * y amigos" (referencia: la invitación de los dibujos a mano). Usa el
 * `welcomeMessage` y el `tagline` de la pareja — campos que ya están en
 * el contenido, así no se pide nada extra.
 */
export function StudioCarta({ content }: { content: WeddingContent }) {
  const { couple } = content

  return (
    <section className="px-6 py-20 md:py-28">
      <Reveal from="up" className="mx-auto flex max-w-2xl flex-col items-center text-center">
        <Anillos className="st-ink w-20" />
        <p className="st-hand st-ink mt-6 text-[clamp(36px,5vw,56px)]">queridos familia y amigos:</p>
        <p className="mt-6 text-[clamp(19px,2vw,23px)] leading-relaxed">{couple.welcomeMessage}</p>
        <p className="st-mono st-muted mt-8 text-[11px]">{couple.tagline}</p>
      </Reveal>
    </section>
  )
}
