/**
 * El paquete: UNA invitación, completa. Sin precio en el sitio (ver
 * content/precio.ts) y sin plazos: es un trabajo hecho a mano.
 *
 * `incluye` es el SERVICIO. Las secciones de la invitación viven en
 * content/invitacion.ts. La confirmación de asistencia va primera: es lo
 * que más se usa y viene desde el primer día.
 *
 * TODO (Facu): confirmar las dos últimas de `incluye` —son promesas—.
 */
export const PAQUETE = {
  numero: "01",
  eyebrow: "La invitación",
  name: "La invitación completa",
  idealLabel: "Pensada para parejas que",
  ideal: [
    "Quieren una invitación a la altura del resto de la boda.",
    "No tienen tiempo de pelearse con un editor.",
    "Prefieren hablar con una persona, no con un formulario.",
  ],
  incluyeLabel: "Qué incluye",
  incluye: [
    "Confirmación de asistencia, con planilla descargable",
    "Las 15 secciones de la invitación",
    "El diseño completo, tal como lo ven",
    "Sus textos, fotos y datos, cargados por nosotros",
    "Un link propio para compartir",
    "Dos rondas de cambios",
    "Ajustes de último momento hasta el día del casamiento",
    "Online hasta seis meses después de la fecha",
  ],
  ctaText: "Elegir mi diseño",
  ctaHref: "/#coleccion",
  consultaText: "Hacer una consulta",
} as const

/** La salida para quien no encontró su diseño. Reemplaza a Atelier. */
export const CONSULTA_LINEA = {
  text: "¿Lo que imaginan no está en la colección?",
  ctaText: "Escríbannos",
} as const
