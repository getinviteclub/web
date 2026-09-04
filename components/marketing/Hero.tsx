import Image from "next/image"
import { HERO_CONTENT } from "@/content/hero"
import { Cta } from "@/components/ui/cta"
import { FUNNEL_EVENTS } from "@/lib/analytics"

const OVERLAY =
  "linear-gradient(180deg, rgba(0,0,0,.24) 0%, rgba(0,0,0,.34) 50%, rgba(0,0,0,.3) 100%)"

export function Hero() {
  return (
    <header className="relative flex min-h-[620px] w-full items-center justify-center overflow-hidden text-inverse md:min-h-[calc(100svh-72px)]">
      <Image
        src={HERO_CONTENT.bgSrc}
        alt=""
        fill
        priority
        sizes="100vw"
        className="object-cover object-center"
      />
      <div className="absolute inset-0" style={{ background: OVERLAY }} />

      <div className="relative z-[2] mx-auto flex w-full max-w-[980px] flex-col items-center px-[var(--pad-x)] pt-16 text-center">
        <h1
          // Sin text-balance: el corte lo define el \n del content y
          // balance competía con él.
          className="max-w-[22ch] whitespace-pre-line font-display font-normal leading-[1.06]"
          // Recalibrado para el copy actual: la línea más larga es "una
          // gran celebración" (20ch). Con el 8.9vw anterior —pensado para
          // un título más largo— en un teléfono de 375px ocupaba 236px de
          // los 335 disponibles y quedaba chico al pedo. El 10.5vw lo lleva
          // a ~39px ahí, con margen suficiente para no partirse.
          style={{ fontSize: "clamp(32px, 10.5vw, 88px)" }}
        >
          {HERO_CONTENT.title}
        </h1>

        <p className="mt-5 max-w-[42ch] text-balance text-base leading-relaxed text-white/90 md:text-lg">
          {HERO_CONTENT.subtitle}
        </p>

        <div className="mt-8 md:mt-9">
          <Cta
            href={HERO_CONTENT.ctaHref}
            tone="frost"
            size="lg"
            trackAs={FUNNEL_EVENTS.heroCta}
          >
            {HERO_CONTENT.ctaText}
          </Cta>
        </div>
      </div>
    </header>
  )
}
