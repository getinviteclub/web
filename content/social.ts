/**
 * Contenido del footer.
 *
 * La bajada no promete un editor ("creá tu invitación"): es exactamente
 * lo contrario del servicio.
 */
export const FOOTER_CONTENT = {
  tagline: "Invitaciones digitales de casamiento, hechas a medida.",
  copyright: "© 2026 Invite Club",
  bajada: "Diseño personalizado, boda por boda.",
} as const

export const SOCIAL_LINKS = [
  { label: "Instagram", href: "https://www.instagram.com/getinviteclub/" },
  {
    label: "Facebook",
    href: "https://www.facebook.com/profile.php?id=61577169039720",
  },
] as const

// Absolutos por el mismo motivo que NAV_LINKS: el footer también se
// monta en el detalle de un diseño.
export const FOOTER_MENU = [
  { label: "Colección", href: "/#coleccion" },
  { label: "La invitación", href: "/#la-invitacion" },
  { label: "Cómo trabajamos", href: "/#como-trabajamos" },
  { label: "Preguntas frecuentes", href: "/#faqs" },
] as const
