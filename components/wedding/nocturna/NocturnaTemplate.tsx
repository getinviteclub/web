import type { WeddingContent } from "@/content/wedding/types"
import { NocturnaNav } from "./NocturnaNav"
import { NocturnaHero } from "./NocturnaHero"
import { NocturnaCarta } from "./NocturnaCarta"
import { NocturnaFecha } from "./NocturnaFecha"
import { NocturnaStory } from "./NocturnaStory"
import { NocturnaLugar } from "./NocturnaLugar"
import { NocturnaSchedule } from "./NocturnaSchedule"
import { NocturnaDressCode } from "./NocturnaDressCode"
import { NocturnaDetails } from "./NocturnaDetails"
import { NocturnaGallery } from "./NocturnaGallery"
import { NocturnaStay } from "./NocturnaStay"
import { NocturnaGifts } from "./NocturnaGifts"
import { NocturnaRsvp } from "./NocturnaRsvp"
import { NocturnaFaq } from "./NocturnaFaq"
import { NocturnaCierre } from "./NocturnaCierre"

/**
 * El diseño "Nocturna" completo: papelería old money. Se lee como una
 * tarjeta larga —todo centrado, marfil y espresso— con dos únicos
 * momentos oscuros: el arco de detalles y el cierre a sangre. Mismas
 * secciones y mismo contenido que Aura y Studio.
 */
export function NocturnaTemplate({ content }: { content: WeddingContent }) {
  return (
    <main>
      <NocturnaNav content={content} />
      <NocturnaHero content={content} />
      <NocturnaCarta content={content} />
      <NocturnaFecha content={content} />
      <NocturnaStory content={content} />
      <NocturnaLugar content={content} />
      <NocturnaSchedule content={content} />
      <NocturnaDressCode content={content} />
      <NocturnaDetails content={content} />
      <NocturnaGallery content={content} />
      <NocturnaStay content={content} />
      <NocturnaGifts content={content} />
      <NocturnaRsvp content={content} />
      <NocturnaFaq content={content} />
      <NocturnaCierre content={content} />
    </main>
  )
}
