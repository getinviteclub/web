import type { AuraContent } from "@/content/wedding/aura/types"
import { HeroCover } from "./HeroCover"

/**
 * Arma el diseño "Aura" completo a partir de un `content`. Uno solo de
 * estos componentes sirve tanto para la demo pública como para
 * cualquier cliente real que use este diseño — lo único que cambia es
 * el `content` que le pasa app/w/[slug]/page.tsx (ver content/wedding/registry.ts).
 *
 * Se arma sección por sección; hoy solo tiene el Hero, el resto se va
 * sumando (Historia, Detalles, Countdown, Cronograma, Galería,
 * Alojamiento, Regalos, RSVP, FAQ, Save the Date + Navigation).
 */
export function AuraTemplate({ content }: { content: AuraContent }) {
  return (
    <main>
      <HeroCover content={content} />
    </main>
  )
}
