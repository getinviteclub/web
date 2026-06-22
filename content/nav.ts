export type NavLink = {
  label: string
  href: string
  external?: boolean
}

export const NAV_LINKS: NavLink[] = [
  { label: "Diseños", href: "#disenos" },
  { label: "Planes", href: "#planes" },
  { label: "Preguntas frecuentes", href: "#faqs" },
]
