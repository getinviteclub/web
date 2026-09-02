const WHATSAPP_NUMBER = "5491130953594"

export function waLink(mensaje: string): string {
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(mensaje)}`
}

/**
 * Los mensajes viven acá y no en cada componente por una razón de
 * conversión, no de prolijidad: todo lo que el sitio YA SABE (qué diseño
 * estaba mirando, desde qué plan salió) tiene que viajar al chat. Si el
 * mensaje llega vacío, la primera respuesta se gasta en volver a preguntar
 * lo que la web ya mostraba.
 */

/** Sale del detalle de un diseño: el CTA principal del MVP. */
export function mensajeDiseno(diseno: string): string {
  return `Hola, me gusta el diseño ${diseno} y quisiera avanzar con mi invitación.`
}

/** Sale de un plan. `diseno` viaja solo si el usuario ya eligió uno. */
export function mensajePlan(plan: string, diseno?: string): string {
  return diseno
    ? `Hola, me gusta el diseño ${diseno} y quisiera avanzar con el plan ${plan}.`
    : `Hola, quisiera avanzar con el plan ${plan}.`
}

/** Consultas sin diseño ni plan elegido (nav, FAQ, ayuda para elegir). */
export const MENSAJES = {
  consulta: "Hola, tengo una consulta sobre las invitaciones.",
  info: "Hola, quiero info de Invite Club.",
  recomendacion:
    "Hola, quiero ayuda para elegir un diseño para nuestra invitación.",
  atelier: "Hola, me interesa la línea Atelier.",
} as const
