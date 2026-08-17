import { FEATURES_CONTENT } from "@/content/features"
import { PhoneMockup } from "@/components/ui/phone-mockup"
import { Reveal } from "@/components/ui/reveal"
import { Eyebrow } from "@/components/ui/eyebrow"

export function ComoFunciona() {
  return (
    <section
      id="features"
      className="mx-auto max-w-max px-[var(--pad-x)] py-20 md:py-28"
    >
      <div className="grid grid-cols-1 items-center gap-12 md:grid-cols-2 md:gap-16">
        {/* Texto */}
        <Reveal from="left">
          <Eyebrow>
            {FEATURES_CONTENT.eyebrow}
          </Eyebrow>

          <h2
            className="mt-4 font-display font-normal leading-[1.05]"
            style={{ fontSize: "clamp(28px, 4vw, 44px)" }}
          >
            {FEATURES_CONTENT.title}
          </h2>

          <ul className="mt-8 flex flex-col divide-y divide-border">
            {FEATURES_CONTENT.items.map((item) => (
              <li key={item.title} className="py-5">
                <h3 className="mb-1 text-lg font-semibold">{item.title}</h3>
                <p className="leading-relaxed text-muted-foreground">
                  {item.text}
                </p>
              </li>
            ))}
          </ul>
        </Reveal>

        {/* Campo de color pleno con el producto como único elemento */}
        <Reveal from="right">
          <div className="flex justify-center rounded-none bg-clay px-6 py-16">
            <PhoneMockup
              src={FEATURES_CONTENT.mockup}
              alt="Invitación digital vista en el celular"
            />
          </div>
        </Reveal>
      </div>
    </section>
  )
}
