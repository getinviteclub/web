"use client"

import { useState } from "react"
import { ChevronDown } from "lucide-react"
import { Reveal } from "@/components/ui/reveal"
import type { AuraContent } from "@/content/wedding/aura/types"

/**
 * Acordeón de preguntas frecuentes. El original animaba alto con Framer
 * Motion (`height: 0` → `height: auto`); acá el mismo efecto sale con
 * el truco de grilla `grid-rows-[0fr]` → `[1fr]` en CSS puro.
 */
export function FaqSection({ content }: { content: AuraContent }) {
  const [openIndex, setOpenIndex] = useState<number | null>(0)

  return (
    <section id="faq" className="relative overflow-hidden border-t border-[#1C1B18]/10 bg-[#F2F2EF] py-24 md:py-36">
      <div className="mx-auto max-w-7xl px-6 md:px-12">
        <div className="mb-16 flex flex-col justify-between gap-6 border-b border-[#1C1B18]/15 pb-8 md:mb-20 md:flex-row md:items-end">
          <div>
            <div className="mb-3 flex items-center gap-3 font-sans text-[10px] tracking-[0.13em] text-[#3A3833]">
              <span className="font-serif-display text-base italic tracking-normal text-[#20221C]">
                IX. Preguntas &amp; respuestas
              </span>
            </div>
            <h2 className="font-serif-display text-4xl tracking-tight text-[#1C1B18] sm:text-5xl md:text-6xl">
              Preguntas frecuentes
            </h2>
          </div>
          <div className="max-w-md">
            <span className="font-script mb-1 block text-[45px] leading-none text-[#1C1B18]">
              Todo lo que necesitás saber
            </span>
            <p className="font-serif-editorial text-sm text-[#20221C]">
              Respuestas a las dudas más comunes sobre la logística y la celebración.
            </p>
          </div>
        </div>

        <div className="mx-auto max-w-4xl divide-y divide-[#1C1B18]/10">
          {content.faq.map((item, index) => {
            const isOpen = openIndex === index

            return (
              <Reveal key={item.question} from="up" className="group py-6 md:py-8">
                <button
                  onClick={() => setOpenIndex(isOpen ? null : index)}
                  className="flex w-full items-center justify-between gap-4 text-left"
                  aria-expanded={isOpen}
                >
                  <div className="flex items-baseline gap-4">
                    <span className="font-sans text-[10px] tracking-wide text-[#3A3833]">0{index + 1}</span>
                    <h3 className="font-serif-display text-xl text-[#1C1B18] transition-colors group-hover:text-[#202D24] sm:text-2xl">
                      {item.question}
                    </h3>
                  </div>
                  <div
                    className={`rounded-full border border-[#1C1B18]/15 p-2 transition-transform duration-300 ${
                      isOpen ? "rotate-180 bg-[#1C1B18] text-[#F2F2EF]" : "text-[#1C1B18]"
                    }`}
                  >
                    <ChevronDown className="h-4 w-4" />
                  </div>
                </button>

                <div
                  className={`grid transition-all duration-300 ease-out ${
                    isOpen ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"
                  }`}
                >
                  <div className="overflow-hidden">
                    <p className="font-serif-editorial pl-8 pr-4 pt-4 text-base leading-snug text-[#20221C] md:pl-10">
                      {item.answer}
                    </p>
                  </div>
                </div>
              </Reveal>
            )
          })}
        </div>
      </div>
    </section>
  )
}
