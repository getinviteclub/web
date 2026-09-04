/**
 * El vistazo de la home: qué puede tener una invitación, sin la lista.
 *
 * La versión anterior mostraba las catorce funcionalidades en una grilla.
 * Llegaba ANTES de que el usuario viera un diseño y hacía leer la home
 * como la página de un software. La lista completa vive ahora en el
 * detalle de cada diseño (content/invitacion.ts), que es donde alguien que
 * ya eligió se pregunta qué puede hacer con esa invitación.
 *
 * Acá quedan solo seis nombres, y son los seis que una pareja busca cuando
 * todavía está decidiendo si esto le sirve. El resto se anuncia sin
 * enumerarse.
 */
export const INTEGRACIONES_CONTENT = {
  eyebrow: "En un solo link",
  title: "Todo lo que necesitan, en un solo lugar",
  subtitle:
    "La información del casamiento, la confirmación de asistencia, la ubicación y todo lo que quieran compartir con sus invitados. Sin apps que descargar: se abre desde cualquier teléfono.",
  /** Seis, no catorce. El detalle de cada diseño tiene la lista entera. */
  destacadas: [
    "Confirmación de asistencia",
    "Ubicación y cómo llegar",
    "Galería de fotos",
    "Regalos",
    "Cronograma del día",
    "Cuenta regresiva",
  ],
  cierre: "Y todo lo demás que su casamiento necesite.",
} as const
