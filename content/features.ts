/**
 * Los tres pasos del servicio, en la home.
 *
 * El copy tiene un trabajo puntual y es la razón por la que se reescribió:
 * dejar claro que ESTO NO ES UN EDITOR. La versión anterior ("Elegí un
 * diseño / Compartinos la información / Recibí tu invitación") describía
 * pasos genéricos que podría tener cualquier plataforma self-service, y la
 * pareja tiene que entender que no va a armar nada sola.
 *
 * Por eso el paso 02 dice "nos contás" y no "cargá", y el 03 nombra la
 * revisión: es el momento donde queda explícito que hay alguien del otro
 * lado haciendo el trabajo.
 */
export const FEATURES_CONTENT = {
  eyebrow: "Cómo funciona",
  // El \n corta el titular en dos líneas (ver whitespace-pre-line en
  // ComoFunciona): la promesa arriba, quién la cumple abajo.
  title: "Ustedes eligen.\nNosotros la hacemos.",
  items: [
    {
      title: "Elegí tu diseño",
      text: "Mirá el catálogo y quedate con la invitación que más los represente.",
    },
    {
      title: "Contanos qué querés incluir",
      text: "Nos pasás las fotos, los textos y los datos del casamiento, y nos decís qué secciones necesitan.",
    },
    {
      title: "Nosotros hacemos el resto",
      text: "La armamos, la revisamos juntos y se la entregamos lista para compartir. No tenés que usar ningún editor.",
    },
  ],
} as const
