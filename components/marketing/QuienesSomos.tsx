import { QUIENES_SOMOS_CONTENT } from "@/content/quienes-somos"
import { Reveal } from "@/components/ui/reveal"
import { Eyebrow } from "@/components/ui/eyebrow"

export function QuienesSomos() {
  return (
    <section className="overflow-hidden rounded-none bg-ink text-inverse">
      <div className="mx-auto max-w-max px-[var(--pad-x)] py-20 md:py-28">
        <Reveal from="left">
          <Eyebrow onDark>
            {QUIENES_SOMOS_CONTENT.label}
          </Eyebrow>

          <p
            className="mt-6 max-w-[24ch] font-display font-normal leading-[1.05] md:max-w-[30ch]"
            style={{ fontSize: "clamp(30px, 5vw, 60px)" }}
          >
            {QUIENES_SOMOS_CONTENT.statementStart}{" "}
            <span className="font-display-italic text-white/50">
              {QUIENES_SOMOS_CONTENT.statementEnd}
            </span>
          </p>

          <p className="mt-8 max-w-[60ch] leading-relaxed text-white/70">
            {QUIENES_SOMOS_CONTENT.text}
          </p>
        </Reveal>

        <ul className="mt-14 grid grid-cols-1 gap-8 border-t border-white/20 pt-10 sm:grid-cols-3">
          {QUIENES_SOMOS_CONTENT.pillars.map((pillar, i) => (
            <li key={pillar.title}>
              <Reveal from={i % 2 === 0 ? "left" : "right"}>
                <h3 className="mb-2 font-semibold">{pillar.title}</h3>
                <p className="text-sm leading-relaxed text-white/70">
                  {pillar.text}
                </p>
              </Reveal>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}
