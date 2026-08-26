/**
 * Copy del hero, definido por Facu.
 *
 * Reemplaza a la propuesta de la auditoría ("Tu invitación de casamiento,
 * en un link"). Mantiene lo que la auditoría pedía como mínimo: la bajada
 * declara la categoría —"una invitación digital"— que era justamente lo
 * que faltaba en el copy original.
 *
 * DECISIÓN TOMADA (Facu): el ancla "72 h · desde USD 25" que la auditoría
 * ubicaba acá (Bloque 4) queda FUERA del hero a propósito. Hablar de plazos
 * y precio en la primera pantalla contradice el posicionamiento premium de
 * la marca. El precio se conoce igual y temprano por otras vías: "Precios"
 * en la nav, el "Desde USD 25" en cada detalle de diseño y la sección
 * #planes. No reponer sin acordarlo.
 */
export const HERO_CONTENT = {
  title: "El comienzo de\nuna gran celebración",
  subtitle:
    "Una invitación digital para compartir cada detalle con las personas más importantes.",
  ctaText: "Ver los diseños",
  ctaHref: "#disenos",
  bgSrc: "/images/wedding-hero.jpeg",
} as const
