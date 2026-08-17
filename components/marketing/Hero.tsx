import Image from "next/image"
import { HERO_CONTENT } from "@/content/hero"
import { Cta } from "@/components/ui/cta"

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
        <span className="mb-4 font-mono text-xs font-bold uppercase tracking-[0.14em] text-white/75">
          {HERO_CONTENT.eyebrow}
        </span>

        <h1
          className="max-w-[16ch] font-display font-normal leading-[0.95] tracking-tight"
          style={{ fontSize: "clamp(44px, 7vw, 96px)" }}
        >
          {HERO_CONTENT.title}
        </h1>

        <p className="mt-5 max-w-[42ch] text-base leading-relaxed text-white/85 md:text-lg">
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
