/**
 * Los íconos del sistema, en un solo lugar.
 *
 * Todo el sitio de marketing usa **Phosphor** (@phosphor-icons/react).
 * Antes convivían tres cosas distintas —lucide, SVGs dibujados a mano y
 * glifos tipográficos sueltos ("✓", "↗", "←", "+")—: los glifos los
 * resolvía la fuente del sistema, así que el mismo tilde se veía distinto
 * en cada dispositivo y nunca alineaba con el texto.
 *
 * EXCEPCIÓN: components/wedding/aura/* sigue con lucide a propósito. Es la
 * invitación en vivo, tiene su propio lenguaje visual y no se toca desde
 * el sistema de marketing.
 *
 * Se importa de `/ssr` y no de la raíz: la entrada por defecto usa React
 * Context, que no existe en un Server Component. Con `/ssr` los íconos se
 * pueden usar en cualquier lado sin marcar el archivo como "use client".
 *
 * PESO: `light` es el peso del sistema. La identidad es de trazo fino
 * —reglas de 1px, sin radios, serif de alto contraste—; `regular` o `bold`
 * engordan al lado de la tipografía y se notan. `fill` queda reservado a
 * los íconos que son una figura sólida y no un trazo (las estrellas).
 */
export {
  ArrowLeft,
  ArrowRight,
  ArrowUpRight,
  Check,
  LinkSimple,
  List,
  Plus,
  Star,
  WhatsappLogo,
  X,
} from "@phosphor-icons/react/dist/ssr"

export const ICON_WEIGHT = "light" as const
export const ICON_WEIGHT_SOLID = "fill" as const
/** Solo para íconos chicos (≤12px) sobre un fondo sólido: en `light` el
 *  trazo se pierde contra el relleno. */
export const ICON_WEIGHT_BOLD = "bold" as const
