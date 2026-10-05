/**
 * Copy del detalle de un diseño que es igual para todos los diseños.
 * Lo propio de cada uno vive en content/templates.ts.
 *
 * Sin precio, sin plazos y sin "respuesta en el día" (decisión de Facu):
 * lo que se destaca es qué trae la invitación y que la armamos nosotros.
 */
export const DETALLE_CONTENT = {
  volver: "Colección",
  /** Los puntos bajo la descripción. Cortos: se leen de un vistazo. */
  puntos: [
    "Confirmación de asistencia incluida",
    "Las 15 secciones de la invitación",
    "La armamos nosotros; ustedes revisan",
    "Dos rondas de cambios",
  ],
  ctaPrincipal: "Quiero este diseño",
  ctaDemo: "Ver en vivo",

  /** La ficha: paleta y tipografía son del diseño y llegan tal cual. */
  fichaLabel: "El diseño",
  fichaNota: "Paleta y tipografía vienen con el diseño. Ustedes ponen la historia.",
  paletaLabel: "Paleta",
  tipografiaLabel: "Tipografía",
  idealLabel: "Pensada para parejas que",

  demo: {
    eyebrow: "En vivo",
    title: "Lo que ven es lo que reciben.",
    cta: "Abrir la invitación",
  },

  incluyeTitle: "Todo esto viene en su invitación.",
  realizadasTitle: "Así quedó en otras bodas.",
  relacionadosTitle: "También les puede gustar",
  barraMovilCta: "Quiero este diseño",
  barraMovilNota: "La invitación completa",
} as const
