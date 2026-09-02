export type Plan = {
  id: string
  name: string
  /** Precio en USD. Ver nota de moneda abajo. */
  price: string
  /** Una línea que explica a quién le sirve el plan. */
  tagline: string
  features: string[]
  featured?: boolean
  /** Etiqueta del badge cuando `featured` es true. */
  badge?: string
  ctaLabel: string
  /** Atelier no es un tier más: es diseño desde cero, no del catálogo.
   *  Se renderiza aparte, debajo de los tres planes. */
  atelier?: boolean
}

/**
 * Precio en USD y no en pesos: protege el margen de la inflación y señala
 * calidad, igual que NosCasamos. El equivalente local se muestra recién en
 * el checkout (Batch 3).
 *
 * RSVP vive en el plan más barato a propósito: es la razón de compra #1,
 * cobrarlo aparte sería cobrar por la propuesta de valor central.
 *
 * El diseño está desacoplado del plan: cualquier diseño del catálogo entra
 * en cualquier plan. El plan define el ALCANCE (qué secciones tiene la
 * invitación), nunca la estética. Ver DISENO_DESACOPLADO abajo.
 *
 * Atelier (USD 180+) es la excepción y por eso va aparte: ahí no se elige
 * del catálogo, se diseña desde cero.
 */
export const PLANES: Plan[] = [
  {
    id: "esencial",
    name: "Esencial",
    price: "USD 25",
    tagline: "Todo lo que tu invitación necesita para funcionar.",
    features: [
      "Cualquier diseño del catálogo",
      "Confirmación de asistencia (RSVP)",
      "Mapa y cómo llegar",
      "Regalos con alias y CBU",
      "Una revisión",
    ],
    ctaLabel: "Elegir Esencial",
  },
  {
    id: "completa",
    name: "Completa",
    price: "USD 45",
    tagline: "La que eligen la mayoría de las parejas.",
    featured: true,
    badge: "Más elegida",
    features: [
      "Todo lo del plan Esencial",
      "Cuenta regresiva",
      "Galería de fotos",
      "Dress code",
      "Cronograma del casamiento",
      "Dos revisiones",
    ],
    ctaLabel: "Elegir Completa",
  },
  {
    id: "premium",
    name: "Premium",
    price: "USD 75",
    // "Pieza propia de punta a punta" chocaba con Atelier ("una pieza
    // única, diseñada desde cero"): sonaban al mismo servicio a distinto
    // precio. Premium es el catálogo llevado al máximo, no diseño a medida.
    tagline: "Para quienes quieren llevar la invitación más lejos.",
    features: [
      "Todo lo del plan Completa",
      "Sección “Nuestra historia”",
      "Paleta de colores a elección",
      "Dominio propio",
      "Tres revisiones",
    ],
    ctaLabel: "Elegir Premium",
  },
  {
    id: "atelier",
    name: "Atelier",
    price: "USD 180+",
    tagline: "Una pieza única, diseñada desde cero con ustedes.",
    atelier: true,
    // Sin lista: Atelier no se vende por features sino por el trabajo a
    // medida. Enumerar dos ítems lo hacía leer como un plan más, chico.
    features: [],
    ctaLabel: "Hablar con el estudio",
  },
]

/**
 * La distinción diseño / plan.
 *
 * Es la objeción que el pricing tiene que resolver ANTES de que el usuario
 * compare precios, y por eso pasó de ser una nota gris al pie de la grilla
 * a encabezar la sección: mientras no queda claro, el usuario lee los tres
 * planes como "tres calidades de diseño" y asume que el que le gustó está
 * en el más caro.
 */
export const DISENO_VS_PLAN = {
  statement: "Elegís el diseño. El plan define qué incluye.",
  diseno: {
    title: "El diseño",
    text: "Define la estética: tipografía, colores, composición y cómo se ven sus fotos.",
  },
  plan: {
    title: "El plan",
    text: "Define el alcance: qué secciones y funcionalidades tiene la invitación.",
  },
  nota: "Todos los diseños están disponibles en todos los planes. El diseño que elijas no cambia el precio.",
} as const

/** La misma idea en una línea, para el detalle de un diseño. */
export const PRECIO_UNIFORME = "El diseño que elijas no cambia el precio."

/** El precio más bajo, para el ancla del hero y del detalle de diseño. */
export const PRECIO_DESDE = PLANES.find((p) => p.id === "esencial")!.price

/** Plazo de entrega, usado en el hero y en las FAQ. */
export const PLAZO_ENTREGA = "72 horas"

// NO SE MUESTRA HOY. Los add-ons son el motor de AOV pero entran con el
// checkout (Batch 3), no antes: sin carrito no hay dónde sumarlos.
export const ADD_ONS = {
  title: "Extras",
  description: "Sumá funcionalidades a cualquier plan.",
  items: [
    { label: "Save the date a juego", price: "USD 12" },
    { label: "Monograma propio", price: "USD 25" },
    { label: "Dominio propio", price: "USD 15" },
    { label: "Muro post-boda", price: "USD 20" },
    { label: "PDF imprimible", price: "USD 8" },
  ],
} as const
