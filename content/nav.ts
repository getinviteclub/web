export type NavLink = {
  label: string
  href: string
  external?: boolean
}

export const NAV_LINKS: NavLink[] = [
  { label: "Diseños", href: "#disenos" },
  { label: "Cómo funciona", href: "#como-funciona" },
  { label: "Precios", href: "#planes" },
  { label: "Preguntas", href: "#faqs" },
]
