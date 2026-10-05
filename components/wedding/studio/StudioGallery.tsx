"use client"

import { useState } from "react"
import Image from "next/image"
import type { WeddingContent } from "@/content/wedding/types"
import { STUDIO_COPY as C } from "@/content/wedding/studio/copy"
import { Reveal } from "@/components/ui/reveal"
import { SectionHead } from "./SectionHead"
import { StudioLightbox } from "./StudioLightbox"
import { cn } from "@/lib/utils"

type Pieza = "polaroid" | "estampilla" | "grande"

/**
 * Dónde cae cada una de las 6 fotos del álbum, en orden. El layout es del
 * DISEÑO (no de la pareja): por eso vive acá y no en el contenido, y por
 * eso Studio ignora el `span` que trae cada foto para Aura.
 */
const ALBUM: { pieza: Pieza; clase: string; aspect: string; giro: number }[] = [
  { pieza: "polaroid", clase: "col-span-2 px-10 md:col-span-4 md:mt-16 md:px-0", aspect: "aspect-[4/5]", giro: -3 },
  { pieza: "grande", clase: "col-span-2 md:col-span-8", aspect: "aspect-[4/3]", giro: 0 },
  { pieza: "estampilla", clase: "md:col-span-3 md:col-start-2", aspect: "aspect-[4/5]", giro: 2 },
  { pieza: "polaroid", clase: "md:col-span-4 md:mt-24", aspect: "aspect-square", giro: -1.5 },
  { pieza: "estampilla", clase: "md:col-span-3 md:mt-8", aspect: "aspect-[4/5]", giro: -2.5 },
  { pieza: "polaroid", clase: "col-span-2 md:col-span-6 md:col-start-4", aspect: "aspect-[16/10]", giro: 1.5 },
]

/**
 * La galería como un álbum pegado a mano: polaroids, estampillas y una
 * foto grande con la frase a pincel encima (referencia: "got a little
 * lost in the moment"). Cada foto abre el visor a pantalla completa.
 */
export function StudioGallery({ content }: { content: WeddingContent }) {
  const [abierta, setAbierta] = useState<number | null>(null)

  return (
    <section id="fotos" className="border-t border-[var(--st-rule)] px-6 py-24 md:py-32">
      <SectionHead label={C.gallery.label} title={C.gallery.title} />

      <ul className="mx-auto grid max-w-6xl grid-cols-2 items-start gap-x-4 gap-y-10 md:grid-cols-12 md:gap-x-8 md:gap-y-16">
        {content.gallery.slice(0, ALBUM.length).map((img, i) => {
          const a = ALBUM[i]
          return (
            <li key={img.id} className={a.clase}>
              <Reveal from="up">
                <button
                  type="button"
                  onClick={() => setAbierta(i)}
                  aria-label={`${C.gallery.ver}: ${img.title}`}
                  className={cn(
                    "block w-full transition-transform duration-500 hover:-translate-y-1",
                    a.pieza === "polaroid" && "bg-[var(--st-card)] p-[5%] pb-[4%] shadow-[0_10px_24px_-12px_rgba(42,38,34,.35)]",
                    a.pieza === "estampilla" && "st-stamp-shadow"
                  )}
                  style={{ rotate: `${a.giro}deg` }}
                >
                  <div className={cn(a.pieza === "estampilla" && "st-stamp")}>
                    <div className={cn("relative overflow-hidden bg-[#e9e2d3]", a.aspect)}>
                      <Image src={img.src} alt={img.alt} fill sizes="(min-width: 768px) 45vw, 50vw" className="object-cover" />
                      {a.pieza === "grande" && (
                        <span className="st-hand absolute inset-0 flex items-center justify-center bg-black/25 p-6 text-center text-[clamp(40px,7vw,96px)] font-bold leading-[0.9] text-white">
                          {C.gallery.sobreFoto}
                        </span>
                      )}
                    </div>
                  </div>
                  {a.pieza === "polaroid" && <p className="st-hand mt-3 text-left text-3xl">{img.title}</p>}
                </button>
              </Reveal>
            </li>
          )
        })}
      </ul>

      <StudioLightbox images={content.gallery} index={abierta} onClose={() => setAbierta(null)} onNavigate={setAbierta} />
    </section>
  )
}
