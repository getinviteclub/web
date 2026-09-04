import { MOCKUPS } from "@/content/mockups"

// Un diseño del catálogo. Todo lo que el detalle necesita saber vive acá:
// sumar un diseño nuevo es un objeto más en TEMPLATES, sin tocar código.
//
// Lo que NO vive acá y es a propósito:
//   · el precio → sale de PRECIO_DESDE (content/precio.ts). Es el mismo
//     para todos los diseños; ponerlo por diseño abriría la puerta a que
//     dejen de serlo, que es justo lo contrario de lo que promete el sitio.
//   · las funcionalidades → salen de INVITACION_CONTENT
//     (content/invitacion.ts) y se muestran a lo ancho del detalle. Las
//     y son parte del producto, no del diseño: la lista es la misma para
//     los cuatro, y qué secciones lleva cada invitación se decide con la
//     pareja.
//   · el mensaje de WhatsApp → lo arma mensajeDiseno() (lib/whatsapp.ts).
//
// TODO: longDescription son placeholders razonables, no copy final —
// falta que Facu los revise.
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
  /** Foto de estilo de vida que va DE FONDO en el showcase del detalle,
   *  detrás del teléfono. Tiene que ser una fotografía, nunca una pieza
   *  de diseño: si acá va una invitación, el resultado es una invitación
   *  detrás de otra y los dos textos compiten. Si falta, se usa
   *  FOTO_SHOWCASE_DEFAULT. */
  showcaseImage?: string
  /** Slug en content/wedding/registry.ts — si existe, el detalle suma un
   *  CTA "Ver diseño en vivo" hacia /w/[liveDemoSlug]. Solo lo tienen los
   *  diseños ya portados (hoy: aura); el resto sigue siendo mockup. */
  liveDemoSlug?: string
}

/** El fondo del showcase cuando un diseño no trae el suyo. Es la misma
 *  foto del hero: una fotografía real, sin texto encima. */
export const FOTO_SHOWCASE_DEFAULT = "/images/wedding-hero.jpeg"

export const TEMPLATES: Template[] = [
  {
    slug: "studio",
    name: "Studio",
    description: "Minimalismo editorial, limpio y atemporal.",
    coverImage: "/images/disenos/studio.jpg",
    image: MOCKUPS.clasica,
    longDescription:
      "Tipografía como protagonista y mucho aire en blanco. Para parejas que prefieren la elegancia de lo simple antes que la decoración.",
  },
  {
    slug: "cielo",
    name: "Cielo",
    description: "Romántico y luminoso, con detalles delicados.",
    coverImage: "/images/disenos/cielo.jpg",
    image: MOCKUPS.manuscrita,
    longDescription:
      "Colores suaves y detalles delicados sobre fondo claro. Para celebraciones con una estética cálida y femenina.",
  },
  {
    slug: "nocturna",
    name: "Nocturna",
    description: "Elegancia cinematográfica en blanco y negro.",
    coverImage: "/images/disenos/nocturna.jpg",
    image: MOCKUPS.editorial,
    longDescription:
      "Fotografía en blanco y negro con tipografía de alto contraste. La opción de mayor impacto visual, para bodas con estética editorial.",
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
    // Foto real de la sesión de Aura, la misma que abre /w/aura.
    showcaseImage: "/images/wedding/aura/hero.jpg",
    longDescription:
      "Texturas suaves y una paleta neutra, con foco en la fotografía. Para quienes buscan algo etéreo y sereno.",
    // TODO (contenido, alta prioridad): `image` apunta a MOCKUPS.clasica,
    // que es la MISMA captura que usa Studio — o sea que el teléfono del
    // detalle de Aura no muestra Aura. Ahora que /w/aura existe, la
    // captura se saca de ahí (ver ASSETS.md: DevTools → device toolbar →
    // Capture screenshot) y se guarda como /images/diseno-aura.webp.
    liveDemoSlug: "aura",
  },
]
