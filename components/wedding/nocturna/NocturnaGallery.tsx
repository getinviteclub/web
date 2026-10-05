"use client"

import { useState } from "react"
import type { WeddingContent } from "@/content/wedding/types"
import { NOCTURNA_COPY as C } from "@/content/wedding/nocturna/copy"
import { Reveal } from "@/components/ui/reveal"
import { NcFoto } from "./NcFoto"
import { NocturnaLightbox } from "./NocturnaLightbox"
import { cn } from "@/lib/utils"

/**
 * Dónde cae cada una de las 6 fotos (del DISEÑO, no de la pareja: por eso
 * Nocturna ignora el `span` que trae cada foto para Aura). En pantallas
 * grandes, una grilla de 12 columnas asimétrica; en el celular, 2.
 */
const LUGARES = [
  { clase: "col-span-2 md:col-span-6 md:col-start-7 md:row-start-1", aspect: "aspect-[4/3]" },
  { clase: "md:col-span-5 md:col-start-1 md:row-start-2 md:-ml-[clamp(0px,4vw,48px)]", aspect: "aspect-[3/4]" },
  { clase: "md:col-span-3 md:col-start-2 md:row-start-3", aspect: "aspect-[3/4]" },
  { clase: "md:col-span-3 md:col-start-6 md:row-start-3 md:mt-24", aspect: "aspect-[3/4]" },
  { clase: "md:col-span-3 md:col-start-10 md:row-start-3", aspect: "aspect-[3/4]" },
  { clase: "col-span-2 md:col-span-8 md:col-start-3 md:row-start-4", aspect: "aspect-[16/10]" },
]

/**
 * La galería como página de portfolio (referencia "Intimacy,
 * Connections…"): una frase en vertical, fotos desfasadas y el índice
 * numerado "01 //" con el título de cada foto. Fotos e índice abren el
 * visor.
 */
export function NocturnaGallery({ content }: { content: WeddingContent }) {
  const [abierta, setAbierta] = useState<number | null>(null)
  const fotos = content.gallery.slice(0, LUGARES.length)

  const foto = (img: (typeof fotos)[number], i: number) => (
    <Reveal key={img.id} from="up" className={LUGARES[i].clase}>
      <button type="button" onClick={() => setAbierta(i)} aria-label={`${C.gallery.ver}: ${img.title}`} className="group block w-full">
        <NcFoto
          recortar
          src={img.src}
          alt={img.alt}
          sizes="(min-width: 768px) 50vw, 100vw"
          className={cn(LUGARES[i].aspect, "transition-opacity duration-500 group-hover:opacity-85")}
        />
      </button>
    </Reveal>
  )

  return (
    <section id="galeria" className="overflow-hidden px-6 py-24 md:py-32">
      <div className="mx-auto grid max-w-6xl grid-cols-2 gap-4 md:grid-cols-12 md:gap-x-6 md:gap-y-16">
        <p className="nc-sans nc-muted col-span-2 max-w-[30ch] md:col-span-1 md:col-start-1 md:row-start-1 md:max-w-none md:rotate-180 md:[writing-mode:vertical-rl]">
          {C.gallery.vertical}
        </p>

        {fotos.slice(0, 1).map(foto)}

        {/* El índice va después de la primera foto: en el celular se lee en ese orden. */}
        <Reveal from="up" className="col-span-2 py-6 md:col-span-5 md:col-start-8 md:row-start-2 md:self-center">
          <ol className="space-y-1">
            {fotos.map((img, i) => (
              <li key={img.id}>
                <button type="button" onClick={() => setAbierta(i)} className="group flex items-baseline gap-5 text-left">
                  <span className="nc-muted w-8 shrink-0 text-[11px] tabular-nums">{String(i + 1).padStart(2, "0")} {"//"}</span>
                  <span className="nc-display text-[clamp(26px,3.2vw,40px)] uppercase leading-[1.15] transition-opacity group-hover:opacity-60">
                    {img.title}
                  </span>
                </button>
              </li>
            ))}
          </ol>
        </Reveal>

        {fotos.slice(1).map((img, i) => foto(img, i + 1))}
      </div>

      <NocturnaLightbox images={content.gallery} index={abierta} onClose={() => setAbierta(null)} onNavigate={setAbierta} />
    </section>
  )
}
