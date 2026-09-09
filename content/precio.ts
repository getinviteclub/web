/**
 * El precio, en un solo lugar.
 *
 * Reemplaza a content/planes.ts y al modelo de tres tiers
 * (Esencial / Completa / Premium). DECISIÓN DE PRODUCTO, no un cambio de
 * copy: lo que se vende es LA INVITACIÓN, no un paquete de funcionalidades
 * desbloqueadas. Las secciones —RSVP, galería, cronograma— son parte del
 * producto y se activan según lo que cada pareja necesite.
 *
 * Por eso no hay tabla comparativa en ningún lado y no debería volver:
 * hacía que el usuario dejara de mirar diseños para ponerse a comparar
 * columnas, que es exactamente la decisión que no queremos que tome.
 *
 * Atelier queda aparte y no es un tier más caro: es OTRO SERVICIO. En la
 * invitación se elige un diseño del catálogo y se personaliza; en Atelier
 * se diseña uno nuevo desde cero.
 *
 * MONEDA: todos los precios están en PESOS, convertidos desde los USD
 * anteriores a $1.600 (decisión de Facu, 09/2026). Equivalencias:
 * USD 25 → $40.000 · USD 12 → $19.200 · USD 15 → $24.000 · USD 180 → $288.000.
 *
 * ⚠️ ESTO HAY QUE REVISARLO CADA TANTO. Un precio fijo en pesos se licúa
 * solo: la versión anterior estaba en dólares justamente para que no
 * pasara. Con la inflación, en unos meses estos números valen bastante
 * menos en términos reales y nadie va a avisar. Poné un recordatorio.
 *
 * Todos los números viven en este archivo y en ningún otro lado, así que
 * actualizarlos es tocar solo acá.
 */

/** El ancla de precio de todo el sitio. */
export const PRECIO_DESDE = "$40.000"

/** Plazo de entrega, usado en el detalle y en las FAQ. */
export const PLAZO_ENTREGA = "72 horas"

/** La nota de moneda, al pie de donde se muestre un precio. */
export const NOTA_MONEDA =
  "Pago único, en pesos. Te pasamos el link de Mercado Pago por WhatsApp cuando elijas el diseño."

/** El bloque de precio de la home. Reemplaza a la grilla de planes. */
export const PRECIO_CONTENT = {
  eyebrow: "Precio",
  title: "Una invitación digital",
  text: "Elegí el diseño que más les guste. Nosotros lo personalizamos con sus fotos, sus textos y todo lo que quieran incluir, y se los dejamos listo para compartir.",
  ctaText: "Ver los diseños",
  ctaHref: "/#disenos",
} as const

/**
 * Atelier: el segundo nivel, para quien no quiere un diseño del catálogo.
 * Se comunica igual en la home y en el detalle de cada diseño.
 */
export const ATELIER = {
  name: "Atelier",
  precioDesde: "$288.000",
  claim: "Una invitación diseñada desde cero, especialmente para ustedes.",
  text: "No se elige del catálogo: partimos de una hoja en blanco, de su historia y de cómo se imaginan el día. Tipografía, paleta y composición propias.",
  ctaText: "Conocer Atelier",
} as const

/**
 * Extras: lo único que sí tiene un costo aparte.
 *
 * Van DEBAJO de las funcionalidades en el detalle y no al lado: no son una
 * segunda tabla de precios, son un "si querés, se puede". Cuatro y no
 * nueve — pasada esa cantidad vuelve a leerse como un catálogo de add-ons.
 */
export const EXTRAS = [
  {
    id: "dominio",
    name: "Dominio propio",
    price: "$24.000",
    text: "sunombre.com en vez de un link nuestro.",
  },
  {
    id: "save-the-date",
    name: "Save the date",
    price: "$19.200",
    text: "Una pieza a juego para avisar la fecha antes de invitar.",
  },
  {
    id: "monograma",
    name: "Monograma",
    price: "$40.000",
    text: "Sus iniciales dibujadas a mano, para la invitación y para el resto de la boda.",
  },
  {
    id: "seccion",
    name: "Sección a medida",
    price: "A consultar",
    text: "Algo que no está en la lista y su casamiento necesita.",
  },
] as const
