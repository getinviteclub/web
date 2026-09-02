export type NavLink = {
  label: string
  href: string
  external?: boolean
}

// Los href arrancan con "/" y no con "#" a propósito: el navbar también
// se monta en el detalle de un diseño (/templates/aura), y ahí "#planes"
// resolvería contra esa misma URL —que no tiene esa sección— en vez de
// volver a la landing. Desde la landing el comportamiento no cambia: sigue
// siendo una navegación dentro del mismo documento, con scroll suave.
export const NAV_LINKS: NavLink[] = [
  { label: "Diseños", href: "/#disenos" },
  { label: "Cómo funciona", href: "/#como-funciona" },
  { label: "Precios", href: "/#planes" },
  { label: "Preguntas", href: "/#faqs" },
]
