/**
 * Qué puede incluir una invitación.
 *
 * Vive en el DETALLE de cada diseño, que es donde alguien que ya eligió se
 * pregunta "¿y qué puedo hacer con esta?". La home solo da un vistazo.
 *
 * La lista es la misma para los cuatro diseños y eso es a propósito: el
 * diseño define cómo se ve la invitación, nunca qué trae.
 *
 * NO es una tabla de features y no se muestra como catorce tarjetas
 * iguales. Tres secciones llevan texto porque son las que deciden la
 * compra —confirmar, llegar, regalar— y el resto va como índice corrido:
 * enumerarlas todas con el mismo peso las aplana y hace leer la página
 * como la ficha técnica de un software.
 *
 * Prohibido en este archivo: "plan", "premium", "incluido en",
 * "desbloqueá". Las funcionalidades son parte del producto.
 */
export const INVITACION_CONTENT = {
  eyebrow: "Hacela tuya",
  title: "Todo lo que puede incluir",
  text: "Elegís el diseño y después decidís qué querés que tenga. Nos contás cómo es su casamiento y armamos la invitación con las secciones que hagan falta.",

  /** Las tres que deciden la compra. Llevan texto propio. */
  destacadas: [
    {
      id: "rsvp",
      label: "Confirmación de asistencia",
      text: "Tus invitados confirman desde la invitación y vos ves la lista actualizada, con restricciones alimentarias y cómo viajan. La descargás en una planilla lista para pasarle al salón.",
    },
    {
      id: "ubicacion",
      label: "Ubicación y cómo llegar",
      text: "Un toque y se abre el mapa con la dirección cargada. Estacionamiento, accesos y todo lo que necesiten saber para no perderse.",
    },
    {
      id: "regalos",
      label: "Regalos",
      text: "Alias y CBU a la vista, listos para copiar y pegar. Sin que nadie tenga que preguntar por dónde.",
    },
  ],

  /** El resto, como índice corrido. */
  restoLabel: "Y además",
  resto: [
    "Cuenta regresiva",
    "Galería de fotos",
    "Cronograma del día",
    "Dress code",
    "Nuestra historia",
    "Información del evento",
    "Agregar al calendario",
    "Playlist",
    "Dónde alojarse",
    "Preguntas frecuentes",
  ],

  /** Cierre: no es una feature, es una invitación a preguntar. */
  consulta:
    "¿Necesitan algo que no está en la lista? Contanos y vemos cómo resolverlo.",
} as const
