"use client"

import { useState } from "react"
import Image from "next/image"
import { Eye } from "lucide-react"
import { Reveal } from "@/components/ui/reveal"
import type { AuraContent } from "@/content/wedding/aura/types"
import { LightboxModal } from "./LightboxModal"

/** Collage editorial de fotos, con lightbox a pantalla completa. Port fiel del original de Flor. */
export function GallerySection({ content }: { content: AuraContent }) {
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null)

  return (
    <section id="gallery" className="relative overflow-hidden border-t border-[#1C1B18]/10 bg-[#F2F2EF] py-24 md:py-36">
      <div className="mx-auto max-w-7xl px-6 md:px-12">
        <div className="mb-16 flex flex-col justify-between gap-6 border-b border-[#1C1B18]/15 pb-8 md:mb-24 md:flex-row md:items-end">
          <div>
            <div className="mb-3 flex items-center gap-3 font-sans text-[10px] tracking-[0.13em] text-[#3A3833]">
              <span className="font-serif-display text-base italic tracking-normal text-[#20221C]">
                V. Ensayo visual &amp; momentos
              </span>
            </div>
            <h2 className="font-serif-display text-4xl tracking-tight text-[#1C1B18] sm:text-5xl md:text-6xl">
              Fragmentos &amp; memorias
            </h2>
          </div>
        </div>

        <div className="grid grid-cols-12 items-start gap-x-3 gap-y-20 sm:gap-x-6 md:gap-x-12 md:gap-y-32">
          {content.gallery.map((img, idx) => (
            <Reveal
              key={img.id}
              from="up"
              className={`${img.span} group relative cursor-pointer ${idx % 2 === 1 ? "mt-16 md:mt-24 lg:mt-32" : ""}`}
            >
              <button
                type="button"
                onClick={() => setLightboxIndex(idx)}
                className="block w-full text-left"
                aria-label={`Ver ${img.title} en grande`}
              >
                <div
                  className={`film-grain-overlay relative overflow-hidden bg-[#E7DECD] ${img.aspectRatio} transition-transform duration-500 group-hover:-translate-y-1`}
                >
                  <Image
                    src={img.src}
                    alt={img.alt}
                    fill
                    sizes="(min-width: 768px) 40vw, 90vw"
                    className="object-cover"
                  />
                  <div className="absolute inset-0 flex justify-end bg-[#1C1B18]/40 p-6 text-white opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                    <div className="h-fit rounded-full bg-white/20 p-2 backdrop-blur-xs">
                      <Eye className="h-4 w-4 text-white" />
                    </div>
                  </div>
                </div>
                <div className="mt-4 font-sans text-[11px] tracking-[0.1em] text-[#3A3833]">FIG. 0{idx + 1}</div>
              </button>
            </Reveal>
          ))}
        </div>
      </div>

      <LightboxModal
        images={content.gallery}
        currentIndex={lightboxIndex}
        onClose={() => setLightboxIndex(null)}
        onNavigate={setLightboxIndex}
      />
    </section>
  )
}
