/**
 * Qué puede incluir una invitación, en versión corta.
 *
 * Es el resumen que se muestra en el detalle de cada diseño. NO es la lista
 * completa —esa vive en content/integraciones.ts y se muestra en la
 * landing—: acá van las ocho que una pareja busca cuando está decidiendo.
 *
 * La lista es la MISMA para todos los diseños y eso es a propósito: el
 * diseño define cómo se ve la invitación, nunca qué trae. Antes cada
 * template declaraba sus propias features y eso hacía leer, por ejemplo,
 * "Paleta de colores a elección" como algo que viene con Nocturna, cuando
 * en realidad es del plan Premium.
 */
export const INVITACION_INCLUYE = [
  "Confirmación de asistencia",
  "Cuenta regresiva",
  "Galería de fotos",
  "Ubicación y cómo llegar",
  "Cronograma del día",
  "Dress code",
  "Regalos con alias y CBU",
  "Nuestra historia",
] as const

/** La aclaración que evita prometer las ocho por USD 25. */
export const INCLUYE_SEGUN_PLAN =
  "Qué secciones entran finalmente depende del plan que elijas."
