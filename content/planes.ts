export type Plan = {
  id: string
  name: string
  // TODO: reemplazar por los 3 precios reales (hoy placeholder)
  price: string
  features: string[]
  featured?: boolean
  ctaLabel: string
}

export const PLANES: Plan[] = [
  {
    id: "basico",
    name: "Básico",
    price: "$XXX.XXX",
    features: [
      "Foto de la pareja (1)",
      "Nombres, día y horario",
      "Dirección",
      "Dress Code",
      "Una (1) revisión",
    ],
    ctaLabel: "Elegir Básico",
  },
  {
    id: "plus",
    name: "Plus",
    price: "$XXX.XXX",
    featured: true,
    features: [
      "Todo lo del plan Básico",
      "Cuenta regresiva",
      "RSVP",
      "Regalos (Alias/CBU)",
      "Galería de fotos (4)",
      "Hasta dos (2) revisiones",
    ],
    ctaLabel: "Elegir Plus",
  },
  {
    id: "premium",
    name: "Premium",
    price: "$XXX.XXX",
    features: [
      "Todo lo del plan Plus",
      '"Nuestra historia"',
      "Paleta de colores a elección",
      "Agendá la fecha/evento",
      "Opciones de alojamiento",
      '"Preguntas frecuentes"',
      "Cronograma del casamiento",
      "Hasta tres (3) revisiones",
    ],
    ctaLabel: "Elegir Premium",
  },
]

// NO SE MUESTRA HOY. Se sacó de la landing porque sumaba ruido antes de tener
// los precios definidos. Los datos quedan acá para cuando se quiera reactivar.
export const EXTRAS = {
  title: "Extras",
  description: "Sumá funcionalidades a cualquier plan — $14.999 cada uno.",
  items: [
    "Save the Date",
    "Invitación personalizada por invitado",
    "E-card de agradecimiento",
    "Muro de mensajes",
    "Monograma personalizado",
    "Código QR",
  ],
} as const
