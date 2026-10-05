import { CINTA_SECCIONES } from "@/content/hero"
import { Marquee } from "@/components/ui/marquee"
import { Asterisk, ICON_WEIGHT } from "@/components/ui/icons"
import { HeroScroll } from "@/components/marketing/HeroScroll"

/**
 * La portada: el hero con scroll (<HeroScroll>) y, al salir, la cinta con
 * las secciones de la invitación.
 */
export function Hero() {
  return (
    <header>
      <HeroScroll />

      <div className="border-y border-rule py-4">
        <Marquee
          items={CINTA_SECCIONES}
          speed={55}
          itemClassName="font-display text-[22px] italic leading-none md:text-[28px]"
          separator={
            <Asterisk size={16} weight={ICON_WEIGHT} aria-hidden="true" className="inline-block" />
          }
        />
      </div>
    </header>
  )
}
