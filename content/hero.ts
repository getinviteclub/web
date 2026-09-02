/**
 * Copy del hero.
 *
 * El titular anterior ("El comienzo de una gran celebración") era bonito
 * pero no declaraba la categoría: había que leer la bajada para saber que
 * esto vende invitaciones. Ahora la declara el titular y la bajada explica
 * el MODELO —elegís un diseño, nosotros lo personalizamos—, que es la
 * misma promesa que repiten <ComoFunciona>, <QuienesSomos> y el detalle.
 *
 * DECISIÓN TOMADA (Facu), sigue en pie: el ancla "72 h · desde USD 25"
 * queda FUERA del hero. Hablar de plazos y precio en la primera pantalla
 * contradice el posicionamiento premium. El precio se conoce igual y
 * temprano: está en cada ficha de la galería, en cada detalle de diseño y
 * en #planes. No reponer sin acordarlo.
 */
export const HERO_CONTENT = {
  // Tres líneas y no dos: la línea más larga queda en 17 caracteres, que
  // es lo que entra a 88px en desktop y a ~39px en un teléfono de 375px
  // sin que el navegador la parta por su cuenta y descuadre el bloque.
  title: "La invitación que\nempieza a contar\nsu historia",
  subtitle:
    "Elegí el diseño. Nosotros lo hacemos realidad, con cada detalle de su día.",
  ctaText: "Ver los diseños",
  ctaHref: "#disenos",
  bgSrc: "/images/wedding-hero.jpeg",
} as const
