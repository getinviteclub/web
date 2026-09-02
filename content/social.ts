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
  { label: "Planes", href: "/#planes" },
  { label: "Preguntas frecuentes", href: "/#faqs" },
] as const
