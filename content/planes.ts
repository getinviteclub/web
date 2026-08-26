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
}

/**
 * Precio en USD y no en pesos: protege el margen de la inflación y señala
 * calidad, igual que NosCasamos. El equivalente local se muestra recién en
 * el checkout (Batch 3).
 *
 * RSVP vive en el plan más barato a propósito: es la razón de compra #1,
 * cobrarlo aparte sería cobrar por la propuesta de valor central.
 *
 * La línea Atelier (USD 180+) todavía no está acá: entra en Batch 2.
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
    tagline: "Para quienes quieren una pieza propia de punta a punta.",
    features: [
      "Todo lo del plan Completa",
      "Sección “Nuestra historia”",
      "Paleta de colores a elección",
      "Dominio propio",
      "Tres revisiones",
    ],
    ctaLabel: "Elegir Premium",
  },
]

/** El precio más bajo, para el ancla del hero y del detalle de diseño. */
export const PRECIO_DESDE = PLANES[0].price

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
