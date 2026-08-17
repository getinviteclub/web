import { MOCKUPS } from "@/content/mockups"

// TODO: revisar los NOMBRES de los diseños (Solstice / Gina / Weekend vienen
// del template de Framer). Las imágenes y descripciones ya son las reales.
export type Template = {
  slug: string
  name: string
  description: string
  image: string
  longDescription: string
  features: string[]
}

export const TEMPLATES: Template[] = [
  {
    slug: "solstice",
    name: "Solstice",
    description: "Foto a página completa, sin adornos.",
    image: MOCKUPS.clasica,
    longDescription:
      "La foto ocupa toda la pantalla y el texto aparece al hacer scroll. Para parejas que tienen una imagen que habla sola.",
    features: [
      "RSVP integrado",
      "Cuenta regresiva",
      "Galería de fotos",
      "Mapa del evento",
    ],
  },
  {
    slug: "gina",
    name: "Gina",
    description: "Manuscrita, polaroid y detalles cálidos.",
    image: MOCKUPS.manuscrita,
    longDescription:
      "Lettering a mano y fotos tipo polaroid sobre fondo claro. Íntima y personal, ideal para celebraciones relajadas.",
    features: [
      "RSVP integrado",
      "Nuestra historia",
      "Galería de fotos",
      "Regalos (Alias/CBU)",
    ],
  },
  {
    slug: "weekend",
    name: "Weekend",
    description: "Blanco y negro con caligrafía sobre foto.",
    image: MOCKUPS.editorial,
    longDescription:
      "Foto en blanco y negro con caligrafía superpuesta. La más editorial y de mayor impacto visual de las tres.",
    features: [
      "RSVP integrado",
      "Galería de fotos",
      "Paleta de colores a elección",
      "Preguntas frecuentes",
    ],
  },
]
