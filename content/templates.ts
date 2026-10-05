import { FOTOS } from "@/content/fotos"

/**
 * La colección. Cada diseño es un mundo visual completo —estética,
 * tipografía, paleta— que después se completa con los datos de cada
 * pareja. Sumar un diseño nuevo es un objeto más en TEMPLATES.
 *
 * DECISIÓN (Facu): el diseño llega TAL CUAL. Paleta y tipografía no se
 * cambian; lo único que se carga es el contenido de cada pareja. Por eso
 * `paleta` y `tipografia` se muestran como ficha del diseño, no como
 * opciones a elegir.
 *
 * Lo que NO vive acá, a propósito:
 *   · lo que incluye → content/paquete.ts y content/invitacion.ts.
 *   · el mensaje de WhatsApp → mensajeDiseno() (lib/whatsapp.ts).
 *
 * `paleta` lleva hex sueltos y está bien: son DATOS del diseño que se
 * muestran como muestras de color, no estilos del sitio.
 *
 * TODO (Facu): longDescription e idealPara son copy propuesto, revisarlo.
 */
export type ImagenDiseno = {
  src: string
  alt: string
  /** true = pieza de diseño (se muestra a color y entera). */
  pieza?: boolean
}

export type Template = {
  slug: string
  name: string
  /** Número de la colección: "01". */
  numero: string
  /** Tres palabras que definen el diseño, como en un catálogo. */
  keywords: readonly [string, string, string]
  /** Bajada corta, la de la ficha en la colección. */
  description: string
  longDescription: string
  /** Portada de la ficha (retrato 4:5). Es la pieza de diseño. */
  coverImage: string
  coverPosition?: string
  /** "Pensada para parejas que…": tres razones, en (I)(II)(III). */
  idealPara: readonly [string, string, string]
  paleta: readonly { nombre: string; hex: string }[]
  tipografia: string
  /** Lo que se ve en la galería del detalle, en orden. */
  galeria: readonly ImagenDiseno[]
  /** Slug en content/wedding/registry.ts → CTA "Ver la invitación en vivo". */
  liveDemoSlug?: string
  /** Marca de "Nuevo" en la colección. */
  nuevo?: boolean
}

export const TEMPLATES: Template[] = [
  {
    slug: "studio",
    name: "Studio",
    numero: "01",
    keywords: ["Dibujada", "Cálida", "Con humor"],
    description: "Papelería a mano, tinta roja y estampillas.",
    longDescription:
      "Una carta escrita a marcador: sus fotos en estampillas, la fecha encerrada a mano y un cronograma que se dibuja como un camino.",
    coverImage: "/images/disenos/studio.jpg",
    idealPara: [
      "Quieren una invitación con humor y personalidad.",
      "Se imaginan una fiesta larga, relajada y con mucha gente querida.",
      "Les gusta lo hecho a mano más que lo perfecto.",
    ],
    paleta: [
      { nombre: "Papel", hex: "#F4F0E6" },
      { nombre: "Tinta roja", hex: "#C2321F" },
      { nombre: "Carbón", hex: "#2A2622" },
    ],
    tipografia: "Marcador a mano, cursiva y máquina de escribir",
    galeria: [
      { src: "/images/disenos/studio.jpg", alt: "Portada del diseño Studio", pieza: true },
      FOTOS.bailando,
      FOTOS.besoInvitados,
      FOTOS.anillos,
    ],
    // TODO (Facu): la portada todavía es la pieza vieja de Studio. Sacar
    // una captura de /w/studio (ver ASSETS.md) y reemplazar coverImage.
    liveDemoSlug: "studio",
    nuevo: true,
  },
  {
    slug: "cielo",
    name: "Cielo",
    numero: "02",
    keywords: ["Romántica", "Luminosa", "Delicada"],
    description: "Papel claro, detalles finos, poco color.",
    longDescription:
      "Papel claro, trazos finos y apenas color. Romántica sin ser recargada.",
    coverImage: "/images/disenos/cielo.jpg",
    idealPara: [
      "Sueñan con una boda de día, en una quinta o al aire libre.",
      "Quieren algo romántico sin caer en lo cursi.",
      "Disfrutan de los detalles chicos: una inicial, una flor dibujada.",
    ],
    paleta: [
      { nombre: "Niebla", hex: "#ECEEF0" },
      { nombre: "Lavanda gris", hex: "#B9B7C4" },
      { nombre: "Carbón", hex: "#2B2B2B" },
    ],
    tipografia: "Grotesca fina en mayúsculas y serif",
    galeria: [
      { src: "/images/disenos/cielo.jpg", alt: "Portada del diseño Cielo", pieza: true },
      { src: "/images/diseno-2.webp", alt: "Cielo en el teléfono", pieza: true },
      FOTOS.sonrisa,
      FOTOS.espaldaVelo,
    ],
  },
  {
    slug: "nocturna",
    name: "Nocturna",
    numero: "03",
    keywords: ["Clásica", "Formal", "Old money"],
    description: "Papelería clásica, caligrafía y blanco y negro.",
    longDescription:
      "Una tarjeta de papelería llevada a la pantalla: caligrafía con rúbricas, versalitas, marfil y espresso. La más formal de la colección.",
    coverImage: "/images/disenos/nocturna.jpg",
    idealPara: [
      "Se casan de noche y con etiqueta.",
      "Les gusta lo clásico: papelería, caligrafía, blanco y negro.",
      "Quieren algo sobrio, que no pase de moda.",
    ],
    paleta: [
      { nombre: "Marfil", hex: "#F1EEE8" },
      { nombre: "Topo", hex: "#8A7E76" },
      { nombre: "Espresso", hex: "#3B2A28" },
    ],
    tipografia: "Romana de alto contraste en versalitas, caligrafía con rúbricas y sans fina",
    galeria: [
      { src: "/images/disenos/nocturna.jpg", alt: "Portada del diseño Nocturna", pieza: true },
      { src: "/images/diseno-3.webp", alt: "Nocturna en el teléfono", pieza: true },
      FOTOS.noche,
      FOTOS.bailando,
    ],
    // TODO (Facu): la portada todavía es la pieza vieja de Nocturna. Sacar
    // una captura de /w/nocturna y reemplazar coverImage.
    liveDemoSlug: "nocturna",
  },
  {
    slug: "aura",
    name: "Aura",
    numero: "04",
    keywords: ["Etérea", "Serena", "Manuscrita"],
    description: "Caligrafía amplia y fotos suaves.",
    longDescription:
      "Caligrafía amplia, fotos suaves y tonos neutros. La más delicada de la colección, y la primera que pueden recorrer en vivo.",
    coverImage: "/images/disenos/aura.jpg",
    // La foto es retrato angosto (744×1194): centrada se comía la fecha y
    // el lugar al pie. Subida a 90% para que entren.
    coverPosition: "50% 90%",
    idealPara: [
      "Les gusta lo sereno: una boda íntima, una finca, una tarde larga.",
      "Quieren que sus nombres se lean como escritos a mano.",
      "Quieren ver la invitación funcionando antes de decidir.",
    ],
    paleta: [
      { nombre: "Blanco roto", hex: "#F2F2EF" },
      { nombre: "Arena", hex: "#E3DACB" },
      { nombre: "Verde bosque", hex: "#202D24" },
    ],
    tipografia: "Caligrafía inglesa y serif clásica",
    galeria: [
      { src: "/images/disenos/aura.jpg", alt: "Portada del diseño Aura", pieza: true },
      { src: "/images/wedding/aura/hero.jpg", alt: "Foto de portada de la invitación Aura" },
      { src: "/images/wedding/aura/story-1.jpg", alt: "Sección Nuestra historia de Aura" },
      { src: "/images/wedding/aura/gallery-1.jpg", alt: "Galería de fotos de Aura" },
    ],
    liveDemoSlug: "aura",
  },
]

export function getTemplate(slug: string): Template | undefined {
  return TEMPLATES.find((t) => t.slug === slug)
}
