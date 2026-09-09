/**
 * Copy de la sección de diseños de la landing.
 *
 * Estaba escrito adentro del componente; vive acá por la regla de oro #4
 * (contenido separado del código), igual que el hero y el precio.
 *
 * DECISIÓN TOMADA (Facu): acá NO va el precio NI una bajada. La galería es
 * para enamorarse de un diseño, no para leer sobre el servicio ni comparar
 * plata. El título y las cuatro fichas se explican solos; el precio aparece
 * un paso después, en el detalle. No reponer sin acordarlo.
 */
export const GALERIA_CONTENT = {
  eyebrow: "Diseños",
  title: "Encontrá tu estilo",
  /** Label de cada ficha. */
  cardCta: "Ver diseño",
} as const
