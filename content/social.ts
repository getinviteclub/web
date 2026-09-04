/**
 * Contenido del footer.
 *
 * La bajada se reescribió con el cambio de modelo: decía "Creá y compartí
 * tu invitación digital", que promete un editor donde la pareja arma la
 * invitación sola. Es exactamente lo contrario del servicio.
 */
export const FOOTER_CONTENT = {
  tagline:
    "Invitaciones digitales de casamiento. Elegís el diseño, nosotros la personalizamos y te la dejamos lista para compartir.",
  copyright: "© 2026 Invite Club. Todos los derechos reservados.",
  lugar: "Buenos Aires, Argentina",
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
  { label: "Diseños", href: "/#disenos" },
  { label: "Cómo funciona", href: "/#como-funciona" },
  { label: "Precio", href: "/#precio" },
  { label: "Preguntas frecuentes", href: "/#faqs" },
] as const
