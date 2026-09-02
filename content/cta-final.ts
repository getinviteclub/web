/**
 * Cierre de la landing.
 *
 * El CTA primario vuelve al catálogo y NO a WhatsApp: quien llegó hasta acá
 * sin elegir un diseño todavía no tiene qué decir en el chat, y un mensaje
 * sin diseño elegido arranca la conversación desde cero. El link a WhatsApp
 * queda igual, en segundo plano, para el que ya se decidió o tiene una duda.
 */
export const CTA_FINAL_CONTENT = {
  title: "¿Ya encontraron su diseño?",
  subtitle:
    "Elegí el que más los represente y escribinos. Te respondemos el mismo día, sin compromiso.",
  ctaText: "Ver los diseños",
  ctaHref: "/#disenos",
  /** Salida secundaria, para el que ya sabe qué quiere. */
  secondaryText: "Escribinos por WhatsApp",
  secondaryMessage: "Hola, quiero empezar mi invitación de casamiento.",
  // Foto propia a sangre completa. Original: 1332×732.
  imageSrc: "/images/cta-final.webp",
  imageAlt: "",
} as const
