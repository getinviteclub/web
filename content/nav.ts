export type NavLink = {
  label: string
  href: string
  external?: boolean
}

// Los href arrancan con "/" y no con "#" a propósito: el navbar también
// se monta en el detalle de un diseño (/templates/aura), y ahí "#faqs"
// resolvería contra esa misma URL —que no tiene esa sección— en vez de
// volver a la home. Desde la home sigue siendo un scroll suave.
export const NAV_LINKS: NavLink[] = [
  { label: "Colección", href: "/#coleccion" },
  { label: "La invitación", href: "/#la-invitacion" },
  { label: "Cómo trabajamos", href: "/#como-trabajamos" },
  { label: "Preguntas", href: "/#faqs" },
]

/** El CTA de la barra. Va a la colección, no a WhatsApp: el primer paso
 *  es elegir un diseño. */
export const NAV_CTA = { label: "Elegir diseño", href: "/#coleccion" } as const

/**
 * La franja de aviso arriba de todo. Un solo mensaje, corto, con link.
 * Para apagarla, `ANUNCIO = null`.
 */
export const ANUNCIO: { text: string; linkText: string; href: string } | null = {
  text: "Nuevo en la colección: Studio.",
  linkText: "Ver la invitación en vivo",
  href: "/templates/studio",
}
