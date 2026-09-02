import Image from "next/image"
import { Reveal } from "@/components/ui/reveal"
import type { AuraContent } from "@/content/wedding/aura/types"

/**
 * Los hitos de la pareja, en formato revista: foto e texto alternando
 * lado a lado. Port fiel del original de Flor — el `motion.div` con
 * `whileInView` se reemplaza por <Reveal>, que ya hace exactamente eso
 * (fade + desplazamiento al entrar en viewport) en el resto del sitio.
 *
 * La cita final ("Amor es encontrar...") queda fija: es una frase
 * genérica de la identidad de este diseño, no menciona a la pareja —
 * no es contenido de cliente.
 */
export function OurStory({ content }: { content: AuraContent }) {
  return (
    <section
      id="story"
      className="relative overflow-hidden border-t border-[#1C1B18]/10 bg-[#F2F2EF] pb-24 pt-10 md:pb-36 md:pt-36"
    >
      <div className="mb-16 px-6 sm:px-12 md:mb-24">
        <div className="flex flex-col justify-between gap-6 border-b border-[#1C1B18]/15 pb-8 md:flex-row md:items-end">
          <div>
            <div className="mb-3 flex items-center gap-3 font-sans text-[10px] tracking-[0.13em] text-[#3A3833]">
              <span className="font-serif-display text-base italic tracking-normal text-[#20221C]">
                I. Crónicas &amp; momentos
              </span>
            </div>
            <h2 className="font-serif-display text-4xl tracking-tight text-[#1C1B18] sm:text-5xl md:text-6xl">
              Nuestra historia
            </h2>
          </div>
        </div>
      </div>

      <div className="space-y-24 px-6 sm:px-12 md:space-y-36">
        {content.story.map((item, index) => {
          const isEven = index % 2 === 0

          return (
            <div
              key={item.year + item.title}
              className="grid grid-cols-1 items-start gap-8 lg:grid-cols-12 lg:gap-32"
            >
              <div className={`relative lg:col-span-5 ${isEven ? "order-1" : "order-1 lg:order-2"}`}>
                <Reveal from="up">
                  <div
                    className={
                      item.aspect === "landscape"
                        ? "w-full"
                        : `mx-auto max-w-xl ${isEven ? "lg:mr-auto lg:ml-0" : "lg:ml-auto lg:mr-0"}`
                    }
                  >
                    <div
                      className={`film-grain-overlay relative overflow-hidden bg-[#E7DECD] ${
                        item.aspect === "landscape" ? "aspect-[16/10]" : "aspect-[4/5]"
                      }`}
                    >
                      <Image
                        src={item.image}
                        alt={item.imageAlt}
                        fill
                        sizes="(min-width: 1024px) 40vw, 90vw"
                        className="object-cover"
                      />
                    </div>
                    <div className="mt-3 font-sans text-[10px] tracking-[0.13em] text-[#3A3833]">
                      FIG. 0{index + 1}
                    </div>
                  </div>
                </Reveal>
              </div>

              <div
                className={`flex flex-col justify-center lg:col-span-5 lg:mt-24 ${
                  isEven ? "order-2" : "order-2 lg:order-1"
                }`}
              >
                <Reveal from={isEven ? "right" : "left"} className={`space-y-4 ${isEven ? "" : "lg:text-right"}`}>
                  <div className={`flex items-center gap-3 ${isEven ? "" : "lg:justify-end"}`}>
                    <span className="font-sans text-xs font-medium tracking-[0.1em] text-[#202D24]">
                      {item.date}, {item.year}
                    </span>
                    <span className="h-px w-8 bg-[#202D24]/40" />
                  </div>

                  <h3 className="font-serif-display text-3xl leading-tight text-[#1C1B18] sm:text-4xl">
                    {item.title}
                  </h3>

                  <p className="font-serif-editorial -mt-2 text-base leading-snug text-[#20221C] sm:text-lg">
                    {item.description}
                  </p>
                </Reveal>
              </div>
            </div>
          )
        })}
      </div>

      <div className="mx-auto mt-28 max-w-4xl px-6 text-center md:mt-36">
        <div className="relative px-8 py-12">
          <span className="font-serif-display mb-3 block text-3xl leading-none tracking-tighter text-[#1C1B18] sm:text-4xl md:text-5xl">
            &ldquo;Amor es <em className="italic">encontrar</em> a alguien que mire el mundo con tus{" "}
            <em className="italic">mismos</em> ojos.&rdquo;
          </span>
        </div>
      </div>
    </section>
  )
}
