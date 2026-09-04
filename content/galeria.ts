/**
 * Copy de la sección de diseños de la landing.
 *
 * Estaba escrito adentro del componente; vive acá por la regla de oro #4
 * (contenido separado del código), igual que el hero y el precio.
 *
 * DECISIÓN TOMADA (Facu): acá NO va el precio. La galería es para
 * enamorarse de un diseño, no para comparar plata. El número aparece un
 * paso después —en el detalle, en la barra sticky y en #precio—. Lo que sí
 * queda es el concepto de `subtitle`: que el diseño se elige primero y el
 * contenido se decide después. No reponer sin acordarlo.
 */
export const GALERIA_CONTENT = {
  eyebrow: "Diseños",
  title: "Encontrá tu estilo",
  // El \n corta después del punto (ver whitespace-pre-line en <Galeria>):
  // son dos ideas opuestas —cómo se ve / qué incluye— y partirlas a mitad
  // de una de las dos, que es lo que hacía el wrap automático, borraba el
  // contraste que la frase existe para marcar.
  subtitle:
    "Elegí el que más les guste.\nDespués decidimos juntos qué va a incluir.",
  /** Rescate para quien no se decide, al pie de la grilla. */
  rescate: {
    title: "¿No sabés cuál elegir?",
    text: "Contanos cómo es tu boda y te recomendamos el diseño que mejor se adapta a tu celebración.",
    ctaText: "Quiero una recomendación",
  },
  /** Label de cada ficha. */
  cardCta: "Ver diseño",
} as const
