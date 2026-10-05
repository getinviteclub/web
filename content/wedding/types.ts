/**
 * El contenido de UNA boda, igual para todos los diseños.
 *
 * Nació como el tipo de Aura (content/wedding/aura/types.ts) y se reusa
 * tal cual a propósito: así a cada pareja se le pide SIEMPRE lo mismo
 * —mismas fotos (1 de portada, 3 de historia, 6 de galería, 3 de
 * hoteles), mismos textos y mismos largos—, elija el diseño que elija.
 *
 * Algunos campos son de layout de Aura (`span`, `aspectRatio` de la
 * galería) y los demás diseños los ignoran.
 */
export type {
  AuraContent as WeddingContent,
  StoryMilestone,
  ScheduleEvent,
  AccommodationItem,
  GalleryImage,
  FAQItem,
  BankAccount,
} from "./aura/types"
