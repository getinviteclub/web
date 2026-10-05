const WHATSAPP_NUMBER = "5491130953594"

export function waLink(mensaje: string): string {
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(mensaje)}`
}

/**
 * Los mensajes viven acá y no en cada componente por una razón de
 * conversión, no de prolijidad: todo lo que el sitio YA SABE —qué diseño
 * estaba mirando, si venía por un extra— tiene que viajar al
 * chat. Si el mensaje llega vacío, la primera respuesta se gasta en volver
 * a preguntar lo que la web ya mostraba.
 */

/** Sale del detalle de un diseño: el CTA principal del MVP. */
export function mensajeDiseno(diseno: string): string {
  return `Hola, nos gusta el diseño ${diseno} y queremos avanzar con nuestra invitación.`
}

/** Sale del bloque de extras, al pie del detalle de un diseño. */
export function mensajeExtras(diseno: string): string {
  return `Hola, me gusta el diseño ${diseno} y quería consultar por los extras.`
}

/** Consultas sin diseño elegido (nav, FAQ, ayuda para elegir). */
export const MENSAJES = {
  consulta: "Hola, tenemos una consulta sobre las invitaciones.",
  info: "Hola, queremos info de Invite Club.",
  recomendacion:
    "Hola, quiero ayuda para elegir un diseño para nuestra invitación.",
} as const
