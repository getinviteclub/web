import Image from "next/image"
import { HERO_CONTENT } from "@/content/hero"
import { Cta } from "@/components/ui/cta"
import { Eyebrow } from "@/components/ui/eyebrow"

// Oscurece abajo-izquierda, que es donde vive el texto, sin apagar la foto.
const OVERLAY =
  "linear-gradient(180deg, rgba(10,10,10,.45) 0%, rgba(10,10,10,.15) 35%, rgba(10,10,10,.7) 100%)"

export function Hero() {
  return (
    <header className="relative flex h-[100svh] w-full flex-col overflow-hidden">
      <Image
        src={HERO_CONTENT.bgSrc}
        alt=""
        fill
        priority
        sizes="100vw"
        className="object-cover"
      />
      <div className="absolute inset-0" style={{ background: OVERLAY }} />

      <div className="relative z-[2] mx-auto flex w-full max-w-max flex-1 flex-col justify-end px-[var(--pad-x)] pb-14 pt-28 text-inverse md:pb-20">
        <Eyebrow onDark className="mb-5">
          {HERO_CONTENT.eyebrow}
        </Eyebrow>

        {/* Instrument Serif no necesita el tracking negativo que pedía
            Fraunces, y con 0.95 de interlineado se apelmazaba: la
            referencia respira en 1.1. */}
        <h1
          className="max-w-[16ch] font-display font-normal leading-[1.08]"
          style={{ fontSize: "clamp(42px, 6.4vw, 82px)" }}
        >
          {HERO_CONTENT.title}
        </h1>

        <p className="mt-6 max-w-[42ch] text-base leading-relaxed text-white/85">
          {HERO_CONTENT.subtitle}
        </p>

        <div className="mt-8">
          <Cta href={HERO_CONTENT.ctaHref} tone="frost" size="lg">
            {HERO_CONTENT.ctaText}
          </Cta>
        </div>
      </div>
    </header>
  )
}
