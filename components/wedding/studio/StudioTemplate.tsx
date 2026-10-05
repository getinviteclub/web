import type { WeddingContent } from "@/content/wedding/types"
import { StudioNav } from "./StudioNav"
import { StudioHero } from "./StudioHero"
import { StudioCarta } from "./StudioCarta"
import { StudioStory } from "./StudioStory"
import { StudioDetails } from "./StudioDetails"
import { StudioCountdown } from "./StudioCountdown"
import { StudioSchedule } from "./StudioSchedule"
import { StudioGallery } from "./StudioGallery"
import { StudioStay } from "./StudioStay"
import { StudioGifts } from "./StudioGifts"
import { StudioRsvp } from "./StudioRsvp"
import { StudioFaq } from "./StudioFaq"
import { StudioSaveTheDate } from "./StudioSaveTheDate"

/**
 * El diseño "Studio" completo: papelería dibujada a mano, una sola tinta
 * roja y estampillas. Mismas secciones —y mismo contenido— que Aura, en
 * el mismo orden, más la carta de bienvenida (que usa campos que el
 * contenido ya traía).
 *
 * Sirve para la demo pública y para cualquier pareja real: lo único que
 * cambia es el `content` (ver content/wedding/registry.ts).
 */
export function StudioTemplate({ content }: { content: WeddingContent }) {
  return (
    <main>
      <StudioNav content={content} />
      <StudioHero content={content} />
      <StudioCarta content={content} />
      <StudioStory content={content} />
      <StudioDetails content={content} />
      <StudioCountdown content={content} />
      <StudioSchedule content={content} />
      <StudioGallery content={content} />
      <StudioStay content={content} />
      <StudioGifts content={content} />
      <StudioRsvp content={content} />
      <StudioFaq content={content} />
      <StudioSaveTheDate content={content} />
    </main>
  )
}
