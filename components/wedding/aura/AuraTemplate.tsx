import type { AuraContent } from "@/content/wedding/aura/types"
import { AccommodationSection } from "./AccommodationSection"
import { CountdownSection } from "./CountdownSection"
import { DetailsSection } from "./DetailsSection"
import { FaqSection } from "./FaqSection"
import { GallerySection } from "./GallerySection"
import { GiftsSection } from "./GiftsSection"
import { HeroCover } from "./HeroCover"
import { Navigation } from "./Navigation"
import { OurStory } from "./OurStory"
import { RsvpSection } from "./RsvpSection"
import { SaveTheDateSection } from "./SaveTheDateSection"
import { ScheduleSection } from "./ScheduleSection"

/**
 * Arma el diseño "Aura" completo a partir de un `content`. Uno solo de
 * estos componentes sirve tanto para la demo pública como para
 * cualquier cliente real que use este diseño — lo único que cambia es
 * el `content` que le pasa app/w/[slug]/page.tsx (ver content/wedding/registry.ts).
 */
export function AuraTemplate({ content }: { content: AuraContent }) {
  return (
    <main>
      <Navigation content={content} />
      <HeroCover content={content} />
      <OurStory content={content} />
      <DetailsSection content={content} />
      <CountdownSection content={content} />
      <ScheduleSection content={content} />
      <GallerySection content={content} />
      <AccommodationSection content={content} />
      <GiftsSection content={content} />
      <RsvpSection content={content} />
      <FaqSection content={content} />
      <SaveTheDateSection content={content} />
    </main>
  )
}
