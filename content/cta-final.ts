import { FOTOS } from "@/content/fotos"

/**
 * El cierre de la home: una foto a sangre y una pregunta.
 *
 * El CTA principal vuelve a la colección y no a WhatsApp: quien llegó
 * hasta acá sin elegir diseño todavía no tiene qué decir en el chat.
 */
export const CTA_FINAL_CONTENT = {
  title: ["¿Empezamos", "con la suya?"] as const,
  ctaText: "Ver la colección",
  ctaHref: "/#coleccion",
  secondaryText: "Escribirnos por WhatsApp",
  secondaryMessage: "Hola, queremos empezar nuestra invitación de casamiento.",
  foto: FOTOS.pasillo,
} as const
