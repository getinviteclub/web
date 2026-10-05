import type { WeddingContent } from "@/content/wedding/types"
import { NOCTURNA_COPY as C } from "@/content/wedding/nocturna/copy"
import { Reveal } from "@/components/ui/reveal"
import { NcFoto } from "./NcFoto"

const ROMANOS = ["I", "II", "III", "IV", "V"]

/**
 * La historia como la página "A Love Story, told by" (referencia Volare):
 * las tres fotos apiladas a la izquierda, el título escalonado a la
 * derecha y abajo los tres capítulos en columna, como una ficha.
 * En el celular: título, las tres fotos en fila y los capítulos.
 */
export function NocturnaStory({ content }: { content: WeddingContent }) {
  const { couple, story } = content

  return (
    <section id="historia" className="px-6 py-24 md:py-32">
      <div className="mx-auto grid max-w-4xl gap-12 md:grid-cols-[minmax(0,300px)_1fr] md:gap-x-20 md:gap-y-14">
        <Reveal from="up" className="md:col-start-2">
          <h2 className="nc-display text-[clamp(52px,7vw,84px)] uppercase leading-[0.95] tracking-[0.01em]">
            <span className="block">{C.story.titulo[0]}</span>
            <span className="block pl-[18%]">{C.story.titulo[1]}</span>
          </h2>
          <p className="nc-sans nc-muted mt-8">{C.story.contada}</p>
          <p className="nc-script mt-1 text-[40px]">
            {couple.bride} &amp; {couple.groom}
          </p>
        </Reveal>

        <Reveal from="up" className="grid grid-cols-3 gap-3 md:col-start-1 md:row-span-2 md:row-start-1 md:grid-cols-1 md:gap-4">
          {story.map((m) => (
            <NcFoto
              key={m.title}
              recortar
              tono="film"
              src={m.image}
              alt={m.imageAlt}
              sizes="(min-width: 768px) 300px, 33vw"
              className="aspect-square md:aspect-[4/3]"
            />
          ))}
        </Reveal>

        <ol className="space-y-10 md:col-start-2">
          {story.map((m, i) => (
            <li key={m.title}>
              <Reveal from="up" className="border-t border-[var(--nc-rule)] pt-6">
                <p className="nc-sans nc-muted">
                  {C.story.capitulo} {ROMANOS[i]} <span className="mx-2">·</span> {m.date}, {m.year}
                </p>
                <h3 className="nc-display mt-3 text-[26px] uppercase tracking-[0.04em]">{m.title}</h3>
                <p className="mt-3 max-w-md">{m.description}</p>
              </Reveal>
            </li>
          ))}
        </ol>
      </div>
    </section>
  )
}
