import { MOCKUPS } from "@/content/mockups"

// TODO: longDescription y features son placeholders razonables, no copy
// final — falta que Facu los revise. `coverImage` de los 4 diseños apunta
// a la misma foto provisoria (mismo criterio que ya usaba ASSETS.md para
// el hero) hasta tener las 4 fotos de portada reales.
export type Template = {
  slug: string
  name: string
  /** Bajada corta, la que se ve en la card de la galería. */
  description: string
  /** Foto de portada de la card (retrato, ver <Galeria>). Provisoria. */
  coverImage: string
  /** Captura de la pantalla real, la que se ve en el detalle del template
   *  dentro de <PhoneMockup>. Distinta de coverImage: esa es una foto,
   *  esta es el screenshot de la invitación en sí. */
  image: string
  longDescription: string
  features: string[]
}

const COVER_PROVISORIA = "/images/wedding-hero.jpeg"

export const TEMPLATES: Template[] = [
  {
    slug: "studio",
    name: "Studio",
    description: "Minimalismo editorial, limpio y atemporal.",
    coverImage: COVER_PROVISORIA,
    image: MOCKUPS.clasica,
    longDescription:
      "Tipografía como protagonista y mucho aire en blanco. Para parejas que prefieren la elegancia de lo simple antes que la decoración.",
    features: [
      "RSVP integrado",
      "Cuenta regresiva",
      "Galería de fotos",
      "Mapa del evento",
    ],
  },
  {
    slug: "cielo",
    name: "Cielo",
    description: "Romántico y luminoso, con detalles delicados.",
    coverImage: COVER_PROVISORIA,
    image: MOCKUPS.manuscrita,
    longDescription:
      "Colores suaves y detalles delicados sobre fondo claro. Para celebraciones con una estética cálida y femenina.",
    features: [
      "RSVP integrado",
      "Nuestra historia",
      "Galería de fotos",
      "Regalos (Alias/CBU)",
    ],
  },
  {
    slug: "nocturna",
    name: "Nocturna",
    description: "Elegancia cinematográfica en blanco y negro.",
    coverImage: COVER_PROVISORIA,
    image: MOCKUPS.editorial,
    longDescription:
      "Fotografía en blanco y negro con tipografía de alto contraste. La opción de mayor impacto visual, para bodas con estética editorial.",
    features: [
      "RSVP integrado",
      "Galería de fotos",
      "Paleta de colores a elección",
      "Preguntas frecuentes",
    ],
  },
  {
    slug: "aura",
    name: "Aura",
    description: "Delicado y etéreo, con una estética suave y elegante.",
    coverImage: COVER_PROVISORIA,
    image: MOCKUPS.clasica,
    longDescription:
      "Texturas suaves y una paleta neutra, con foco en la fotografía. Para quienes buscan algo etéreo y sereno.",
    features: [
      "RSVP integrado",
      "Cuenta regresiva",
      "Galería de fotos",
      "Mapa del evento",
    ],
  },
]
