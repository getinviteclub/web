import { cn } from "@/lib/utils"

/**
 * El label chico en mayúsculas que **abre** una sección o un bloque.
 *
 * Envuelve a `.label-copy` (globals.css), elige la etiqueta semántica y
 * resuelve la variante sobre fondo oscuro.
 *
 * Para labels embebidos en UI —contadores, badges, ítems de nav— usá la
 * clase `.label-copy` directo: no son estructura, son tipografía.
 */
type EyebrowProps = {
  children: React.ReactNode
  /** Sobre imagen o bloque oscuro. */
  onDark?: boolean
  className?: string
  as?: "span" | "p" | "h2" | "h3" | "h4"
}

export function Eyebrow({
  children,
  onDark,
  className,
  as: Tag = "span",
}: EyebrowProps) {
  return (
    <Tag
      className={cn(
        "label-copy block",
        onDark && "label-copy-inverse",
        className
      )}
    >
      {children}
    </Tag>
  )
}
