import { PROCESO_CONTENT, type ProcesoVisual } from "@/content/proceso"
import { DesignPicker } from "@/components/ui/design-picker"
import { InfoTile } from "@/components/ui/info-tile"
import { RsvpCard } from "@/components/ui/rsvp-card"
import { WhatsappCta } from "@/components/ui/whatsapp-cta"
import { Reveal } from "@/components/ui/reveal"
import { Eyebrow } from "@/components/ui/eyebrow"

const VISUALES: Record<ProcesoVisual, React.ComponentType<{ className?: string }>> = {
  diseno: DesignPicker,
  info: InfoTile,
  listo: RsvpCard,
}

export function Proceso() {
  return (
    <section
      id="como-funciona"
      className="mx-auto max-w-max px-[var(--pad-x)] py-20 md:py-28"
    >
      <Reveal from="left" className="mb-12 max-w-[52ch] md:mb-16">
        <Eyebrow>
          {PROCESO_CONTENT.eyebrow}
        </Eyebrow>
        <h2
          className="mt-4 font-display font-normal leading-[1.05]"
          style={{ fontSize: "clamp(28px, 4vw, 44px)" }}
        >
          {PROCESO_CONTENT.title}
        </h2>
        <p className="mt-4 text-lg text-muted-foreground">
          {PROCESO_CONTENT.subtitle}
        </p>
      </Reveal>

      <ol className="grid grid-cols-1 gap-8 sm:grid-cols-3 sm:gap-6">
        {PROCESO_CONTENT.steps.map((step, i) => {
          const Visual = VISUALES[step.visual]
          return (
            <li key={step.number}>
              <Reveal
                from={i % 2 === 0 ? "left" : "right"}
                className="flex h-full flex-col overflow-hidden rounded-none border border-border bg-background"
              >
                {/* Cada paso tiene su propio recurso, no una foto repetida */}
                <div className="flex h-[320px] items-center justify-center border-b border-border bg-bone p-6">
                  <Visual className="w-full" />
                </div>

                <div className="p-6">
                  <span className="font-mono text-sm text-muted-foreground">
                    {step.number}
                  </span>
                  <h3 className="mb-2 mt-2 text-xl font-semibold">
                    {step.title}
                  </h3>
                  <p className="leading-relaxed text-muted-foreground">
                    {step.text}
                  </p>
                </div>
              </Reveal>
            </li>
          )
        })}
      </ol>

      <div className="mt-12">
        <WhatsappCta message={PROCESO_CONTENT.ctaMessage} size="md">
          {PROCESO_CONTENT.ctaText}
        </WhatsappCta>
      </div>
    </section>
  )
}
