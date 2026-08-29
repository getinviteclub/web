import { Reveal } from "@/components/ui/reveal"
import type { AuraContent } from "@/content/wedding/aura/types"

/** El itinerario del día, en formato editorial (lista tipográfica, sin cards). Port fiel del original de Flor. */
export function ScheduleSection({ content }: { content: AuraContent }) {
  return (
    <section id="schedule" className="relative overflow-hidden border-t border-[#1C1B18]/10 bg-[#F2F2EF] py-24 md:py-36">
      <div className="mx-auto max-w-7xl px-6 md:px-12">
        <div className="mb-16 grid grid-cols-1 items-end gap-8 lg:grid-cols-12 lg:gap-16 md:mb-24">
          <div className="lg:col-span-6">
            <div className="mb-3 flex items-center gap-3 font-sans text-[10px] tracking-[0.13em] text-[#3A3833]">
              <span className="font-serif-display text-base italic tracking-normal text-[#20221C]">
                IV. Itinerario &amp; tiempos
              </span>
            </div>
            <h2 className="font-serif-display text-4xl leading-[1.05] tracking-tight text-[#1C1B18] sm:text-5xl md:text-6xl">
              El cronograma
            </h2>
          </div>
        </div>

        <div className="divide-y divide-[#1C1B18]/10">
          {content.schedule.map((event, index) => (
            <Reveal key={event.time + event.title} from="up" className="group -mx-4 px-4 py-10 md:-mx-8 md:px-8 md:py-14">
              <div className="grid grid-cols-1 items-baseline gap-4 md:grid-cols-12 md:gap-8">
                <div className="flex items-baseline md:col-span-3">
                  <span className="mr-4 font-sans text-[10px] tracking-[0.1em] text-[#3A3833]">0{index + 1}</span>
                  <span className="font-serif-display text-3xl text-[#1C1B18] transition-colors group-hover:text-[#202D24] sm:text-4xl">
                    {event.time}
                  </span>
                  <span className="ml-1 font-sans text-xs tracking-wide text-[#3A3833]">hs</span>
                </div>

                <div className="space-y-1 md:col-span-5">
                  {event.scriptLabel && (
                    <div className="font-script -rotate-1 origin-left text-[45px] leading-none text-[#1C1B18]">
                      {event.scriptLabel}
                    </div>
                  )}
                  <h3 className="font-serif-display text-2xl tracking-tight text-[#1C1B18] sm:text-3xl">
                    {event.title}
                  </h3>
                </div>

                <div className="mt-2 md:col-span-4 md:mt-0">
                  <p className="font-serif-editorial text-sm leading-snug text-[#20221C] sm:text-base">
                    {event.description}
                  </p>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
