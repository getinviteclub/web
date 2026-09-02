import { Check, ICON_WEIGHT } from "@/components/ui/icons"
import { cn } from "@/lib/utils"

/**
 * Ítem de una lista de "qué incluye". Vive en components/ui porque lo
 * comparten el pricing y el detalle de cada diseño, y el tilde tiene que
 * ser el mismo en los dos.
 *
 * Antes el tilde era `before:content-['✓']`, un carácter que resolvía la
 * fuente del sistema: cambiaba de forma y de grosor según el dispositivo y
 * no alineaba con la primera línea del texto. Ahora es un ícono, con
 * `mt-0.5` para apoyarlo sobre la línea base en vez de centrarlo.
 */
export function CheckItem({
  children,
  className,
}: {
  children: React.ReactNode
  className?: string
}) {
  return (
    <li className={cn("flex items-start gap-2.5", className)}>
      <Check
        size={16}
        weight={ICON_WEIGHT}
        aria-hidden="true"
        className="mt-0.5 shrink-0 text-ink"
      />
      <span className="leading-snug text-muted-foreground">{children}</span>
    </li>
  )
}
