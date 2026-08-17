import Image from "next/image"
import { CTA_FINAL_CONTENT } from "@/content/cta-final"
import { WhatsappCta } from "@/components/ui/whatsapp-cta"
import { Reveal } from "@/components/ui/reveal"

// La foto tiene mucho blanco: se apoya el texto sobre una caída oscura a la
// izquierda y un velo parejo muy leve que baja los blancos sin apagar la foto.
const SCRIM =
  "linear-gradient(90deg, rgba(10,10,10,.78) 0%, rgba(10,10,10,.55) 38%, rgba(10,10,10,.15) 72%, rgba(10,10,10,.05) 100%)"
const VEIL = "rgba(10,10,10,.12)"

export function CtaFinal() {
  return (
    <section className="relative overflow-hidden rounded-none text-inverse">
      <Image
        src={CTA_FINAL_CONTENT.imageSrc}
        alt={CTA_FINAL_CONTENT.imageAlt}
        fill
        sizes="100vw"
        className="object-cover"
      />
      <div className="absolute inset-0" style={{ background: VEIL }} />
      <div className="absolute inset-0" style={{ background: SCRIM }} />

      <div className="relative z-[2] mx-auto max-w-max px-[var(--pad-x)] py-24 md:py-32">
        <Reveal from="left" className="flex flex-col items-start gap-6">
          <h2
            className="max-w-[18ch] font-display font-normal leading-[1.05]"
            style={{ fontSize: "clamp(30px, 5vw, 56px)" }}
          >
            {CTA_FINAL_CONTENT.title}
          </h2>
          <p className="max-w-[44ch] text-base leading-relaxed text-white/85 md:text-lg">
            {CTA_FINAL_CONTENT.subtitle}
          </p>
          <WhatsappCta
            message={CTA_FINAL_CONTENT.ctaMessage}
            tone="frost"
            size="lg"
          >
            {CTA_FINAL_CONTENT.ctaText}
          </WhatsappCta>
        </Reveal>
      </div>
    </section>
  )
}
