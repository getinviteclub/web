/**
 * La única sección de la home que explica el servicio.
 *
 * Funde dos secciones que antes iban separadas y decían lo mismo desde dos
 * ángulos: el modelo y las funcionalidades. NO habla de funcionalidades a
 * propósito: habla del PROBLEMA que resuelve —que la invitación esté hecha
 * y lista para mandar— y del camino para llegar ahí. La lista de qué puede
 * incluir vive en el detalle de cada diseño.
 *
 * Cada paso tiene tres piezas y no dos: el `step` dice qué hace la pareja,
 * el `title` dice qué pasa como consecuencia y el `text` lo explica. Es lo
 * que deja claro que ESTO NO ES UN EDITOR: el paso 02 se llama
 * "Compartinos tus datos" y su resultado es "Nosotros nos encargamos".
 */
export const FEATURES_CONTENT = {
  eyebrow: "Cómo funciona",
  // El \n corta el titular en dos: la acción de la pareja arriba, la
  // nuestra abajo.
  title: "Elegís el diseño.\nNosotros hacemos el resto.",
  subtitle:
    "Elegís tu invitación, nos compartís los detalles de tu casamiento y nosotros nos encargamos de armarla. La revisás y recibís tu invitación lista para compartir.",
  items: [
    {
      step: "Elegí tu diseño",
      title: "Encontrá el que más te guste",
      text: "Elegí entre nuestros diseños y encontrá el estilo que mejor va con tu casamiento.",
    },
    {
      step: "Compartinos tus datos",
      title: "Nosotros nos encargamos",
      text: "Nombres, fotos, textos y todos los detalles que quieras incluir en tu invitación.",
    },
    {
      step: "Recibí tu invitación",
      title: "Lista para compartir",
      text: "La revisás, hacemos los últimos ajustes y te entregamos el link de tu invitación.",
    },
  ],
  ctaText: "Ver los diseños",
  ctaHref: "#disenos",
  /** Foto de la columna derecha. Acompaña, no explica: por eso no lleva
   *  texto encima ni el teléfono, que ya está en la galería y en el detalle.
   *
   *  Foto definitiva: la novia con el ramo, vertical (1043×1508). Venía
   *  como PNG de 1,5 MB; se convirtió a JPEG calidad 82 y quedó en 180 KB
   *  —una foto no gana nada guardada sin pérdida y ese peso lo paga el
   *  usuario en la primera pantalla. Para cambiarla, pisar el archivo:
   *  el componente no se toca. */
  imageSrc: "/images/como-funciona.jpg",
  imageAlt: "",
} as const
