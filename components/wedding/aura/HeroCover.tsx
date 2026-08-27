import Image from "next/image"
import { AURA_CONFIG } from "@/content/wedding/aura"

/**
 * Portada: los dos nombres en script gigante, la foto de la pareja
 * asomando detrás, fecha y lugar en las esquinas inferiores. Port fiel
 * del original de Flor — mismos tamaños fluidos (vw), mismo layout.
 */
export function HeroCover() {
  return (
    <section
      id="cover"
      className="relative flex min-h-[86vh] w-full flex-col items-center justify-center overflow-hidden px-6 py-28 lg:min-h-screen"
      style={{ backgroundColor: "#F2F2EF" }}
    >
      <div className="aura-fade-in-scale relative flex w-full select-none flex-col items-center">
        <span className="font-hero-script relative z-10 -mt-[5vw] text-[26vw] leading-[0.85] sm:-mt-[2.2vw] sm:text-[19vw] md:-mt-[1.8vw] md:text-[16vw] lg:-mt-[3vw] lg:text-[12.5vw]">
          {AURA_CONFIG.couple.bride}
        </span>
        <span className="font-hero-script relative z-10 mt-[20vw] text-[26vw] leading-[0.85] sm:mt-[16vw] sm:text-[19vw] md:text-[16vw] lg:text-[12.5vw]">
          {AURA_CONFIG.couple.groom}
        </span>

        {/* Foto detrás de la tipografía */}
        <div
          className="absolute left-1/2 top-1/2 z-0 aspect-[3/4] w-[44vw] max-w-[280px] -translate-x-1/2 -translate-y-1/2 overflow-hidden sm:w-[16vw] md:w-[13vw] lg:w-[18vw]"
          style={{ backgroundColor: "#E7DECD" }}
        >
          <Image
            src="/images/wedding/aura/hero.jpg"
            alt={`${AURA_CONFIG.couple.bride} & ${AURA_CONFIG.couple.groom}`}
            fill
            priority
            sizes="280px"
            className="object-cover"
          />
        </div>
      </div>

      {/* Fecha — abajo a la izquierda */}
      <div className="font-serif-display absolute bottom-8 left-6 z-10 text-left text-base leading-snug sm:bottom-10 sm:left-12 sm:text-lg">
        <div>18 de Noviembre</div>
        <div>2027</div>
      </div>

      {/* Lugar — abajo a la derecha */}
      <div className="font-serif-display absolute bottom-8 right-6 z-10 text-right text-base leading-snug sm:bottom-10 sm:right-12 sm:text-lg">
        <div>{AURA_CONFIG.location.venueName}</div>
        <div>{AURA_CONFIG.location.country}</div>
      </div>
    </section>
  )
}
