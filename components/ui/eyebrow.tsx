import { cn } from "@/lib/utils"

/**
 * El label chico en mayúsculas que abre cada sección.
 *
 * Reemplaza al patrón `font-mono text-xs uppercase tracking-[...]` que
 * estaba repetido a mano en cada componente.
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
