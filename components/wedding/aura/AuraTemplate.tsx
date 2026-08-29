import type { AuraContent } from "@/content/wedding/aura/types"
import { HeroCover } from "./HeroCover"
import { Navigation } from "./Navigation"
import { OurStory } from "./OurStory"

/**
 * Arma el diseño "Aura" completo a partir de un `content`. Uno solo de
 * estos componentes sirve tanto para la demo pública como para
 * cualquier cliente real que use este diseño — lo único que cambia es
 * el `content` que le pasa app/w/[slug]/page.tsx (ver content/wedding/registry.ts).
 *
 * Se arma sección por sección; todavía faltan Detalles, Countdown,
 * Cronograma, Galería, Alojamiento, Regalos, RSVP, FAQ, Save the Date.
 */
export function AuraTemplate({ content }: { content: AuraContent }) {
  return (
    <main>
      <Navigation content={content} />
      <HeroCover content={content} />
      <OurStory content={content} />
    </main>
  )
}
