import { FOTOS } from "@/content/fotos"

/**
 * "Hechas realidad": invitaciones de parejas, con el diseño en el que se
 * basaron. Es lo que en Avela White se llama "Collections, brought to
 * life" y responde la duda de fondo: "¿cómo queda con MIS fotos?".
 *
 * ⚠️ PLACEHOLDERS: parejas inventadas y fotos de banco. Reemplazar por
 * capturas de invitaciones reales (con permiso de la pareja). La imagen
 * ideal es la captura de la sección que dice `pagina`, en 4:5.
 */
export type Realizada = {
  pareja: string
  diseno: string
  /** Qué sección de la invitación se ve en la imagen. */
  pagina: string
  imagen: { src: string; alt: string }
}

export const REALIZADAS_CONTENT = {
  eyebrow: "La colección, hecha realidad",
  title: "El mismo diseño, otra historia.",
} as const

export const REALIZADAS: Realizada[] = [
  { pareja: "Cami & Juan", diseno: "nocturna", pagina: "Portada", imagen: FOTOS.bailando },
  { pareja: "Sofi & Tomás", diseno: "studio", pagina: "Nuestra historia", imagen: FOTOS.luces },
  { pareja: "Valen & Pato", diseno: "aura", pagina: "Cómo llegar", imagen: FOTOS.espaldaVelo },
  { pareja: "Marie & Nacho", diseno: "cielo", pagina: "Portada", imagen: FOTOS.sonrisa },
  { pareja: "Lu & Fede", diseno: "nocturna", pagina: "Galería", imagen: FOTOS.noche },
  { pareja: "Agus & Male", diseno: "studio", pagina: "Cronograma", imagen: FOTOS.fiesta },
]
