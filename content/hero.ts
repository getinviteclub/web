/**
 * H1 y bajada según la auditoría (Bloque 4). El anterior —"Tu casamiento
 * empieza con la invitación"— era bonito pero no declaraba la categoría:
 * un visitante frío no sabía si esto era una imprenta, un estudio o una app.
 *
 * El ancla de plazo y precio va dentro de la bajada y no como badge aparte:
 * repetir "72 horas / USD 25" dos veces en el mismo viewport sería ruido.
 */
export const HERO_CONTENT = {
  title: "Tu invitación de casamiento,\nen un link.",
  subtitle:
    "Diseño editorial, confirmación de asistencia y toda la info de tu fiesta en un solo lugar. Lista en 72 horas, desde USD 25.",
  ctaText: "Ver los diseños",
  ctaHref: "#disenos",
  bgSrc: "/images/wedding-hero.jpeg",
} as const
