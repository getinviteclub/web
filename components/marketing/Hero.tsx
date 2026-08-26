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
          // 22ch y no 18: el 18 estaba calibrado para el título viejo, más
          // corto. "Tu invitación de casamiento," necesita 21ch, así que con
          // 18 el título se partía en 3 líneas en vez de las 2 que tiene el
          // copy. Sin text-balance: el corte ya lo define el \n del content,
          // y balance competía con él.
          className="max-w-[22ch] whitespace-pre-line font-display font-normal leading-[1.06]"
          // El H1 nuevo es más largo que el anterior: "Tu invitación de
          // casamiento," necesita 444px a 46px de cuerpo y en un teléfono de
          // 375px hay 335px. Con el piso en 46 quedaba partido en 3 líneas.
          // El 8.9vw lo hace acompañar al ancho: 33px a 375px, donde entra
          // en las 2 líneas que el copy tiene pensadas. El tope baja de 96 a 88
          // porque el contenedor deja 880px y a 96 la primera línea pedía 927.
          style={{ fontSize: "clamp(30px, 8.9vw, 88px)" }}
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
            size="md"
            trackAs={FUNNEL_EVENTS.heroCta}
          >
            {HERO_CONTENT.ctaText}
          </Cta>
        </div>
      </div>
    </header>
  )
}
