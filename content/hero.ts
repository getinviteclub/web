/**
 * Copy del hero, definido por Facu.
 *
 * El reparto de trabajo entre las dos partes: el titular pone la emoción
 * ("un día inolvidable") y la bajada declara la categoría en la primera
 * palabra ("Invitaciones digitales para casamientos"). Eso último es lo
 * que le faltaba a la versión original —"El comienzo de una gran
 * celebración"—, donde había que scrollear hasta la galería para entender
 * qué se vende. Si se toca el titular, la categoría tiene que seguir
 * estando en alguna de las dos.
 *
 * DECISIÓN TOMADA (Facu), sigue en pie: el ancla "72 h · desde USD 25"
 * queda FUERA del hero. Hablar de plazos y precio en la primera pantalla
 * contradice el posicionamiento premium. El precio se conoce igual y
 * temprano: está en cada ficha de la galería, en cada detalle de diseño y
 * en #precio. No reponer sin acordarlo.
 */
export const HERO_CONTENT = {
  // El corte deja "un día inolvidable" entero en la segunda línea. La más
  // larga queda en 18 caracteres y entra completa a 88px en desktop y a
  // ~39px en un teléfono de 375px, sin que el navegador la parta sola.
  title: "La invitación a\nun día inolvidable",
  subtitle:
    "Invitaciones digitales para casamientos, creadas para transmitir la esencia de cada celebración.",
  ctaText: "Ver los diseños",
  ctaHref: "#disenos",
  bgSrc: "/images/wedding-hero.jpeg",
} as const
