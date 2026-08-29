import { MOCKUPS } from "@/content/mockups"

// TODO: longDescription y features son placeholders razonables, no copy
// final — falta que Facu los revise.
export type Template = {
  slug: string
  name: string
  /** Bajada corta, la que se ve en la card de la galería. */
  description: string
  /** Foto de portada de la card (retrato 4:5, ver <Galeria>). */
  coverImage: string
  /** object-position del recorte 4:5. Por defecto centrado; solo hace
   *  falta cuando el contenido importante de la foto no está centrado
   *  verticalmente (ver "aura", que sube el foco para no cortar la
   *  fecha y el lugar al pie de la pieza). */
  coverPosition?: string
  /** Captura de la pantalla real, la que se ve en el detalle del template
   *  dentro de <PhoneMockup>. Distinta de coverImage: esa es una foto,
   *  esta es el screenshot de la invitación en sí. */
  image: string
  longDescription: string
  features: string[]
  /** Slug en content/wedding/registry.ts — si existe, el detalle suma un
   *  CTA "Ver diseño en vivo" hacia /w/[liveDemoSlug]. Solo lo tienen los
   *  diseños ya portados (hoy: aura); el resto sigue siendo mockup. */
  liveDemoSlug?: string
}

export const TEMPLATES: Template[] = [
  {
    slug: "studio",
    name: "Studio",
    description: "Minimalismo editorial, limpio y atemporal.",
    coverImage: "/images/disenos/studio.jpg",
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
    coverImage: "/images/disenos/cielo.jpg",
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
    coverImage: "/images/disenos/nocturna.jpg",
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
    description: "Delicado con estética suave y elegante.",
    coverImage: "/images/disenos/aura.jpg",
    // La foto es retrato angosto (744×1194): centrado de más se comía la
    // fecha y el lugar al pie. Subido a 90% para que entren.
    coverPosition: "50% 90%",
    image: MOCKUPS.clasica,
    longDescription:
      "Texturas suaves y una paleta neutra, con foco en la fotografía. Para quienes buscan algo etéreo y sereno.",
    features: [
      "RSVP integrado",
      "Cuenta regresiva",
      "Galería de fotos",
      "Mapa del evento",
    ],
    liveDemoSlug: "aura",
  },
]
