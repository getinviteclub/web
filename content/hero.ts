/**
 * Copy del hero, definido por Facu.
 *
 * Reemplaza a la propuesta de la auditoría ("Tu invitación de casamiento,
 * en un link"). Mantiene lo que la auditoría pedía como mínimo: la bajada
 * declara la categoría —"una invitación digital"— que era justamente lo
 * que faltaba en el copy original.
 *
 * PENDIENTE: el ancla "72 h · desde USD 25" que la auditoría ubicaba en el
 * hero (Bloque 4) hoy no está en ninguna de las dos líneas. El precio recién
 * aparece al llegar a #planes.
 */
export const HERO_CONTENT = {
  title: "El comienzo de\nuna gran celebración",
  subtitle:
    "Una invitación digital para compartir cada detalle con las personas más importantes.",
  ctaText: "Ver los diseños",
  ctaHref: "#disenos",
  bgSrc: "/images/wedding-hero.jpeg",
} as const
