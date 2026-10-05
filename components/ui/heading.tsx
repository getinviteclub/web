import { cva, type VariantProps } from "class-variance-authority"
import { cn } from "@/lib/utils"

/**
 * Los titulares serif del sistema, en cuatro tamaños.
 *
 * Antes cada sección traía su `style={{ fontSize: "clamp(...)" }}` y había
 * siete clamps distintos para lo que eran tres tamaños. Acá viven una vez:
 * si una sección necesita otro, se suma una variante, no un style suelto.
 *
 *   hero → la portada, uno solo por página
 *   xl   → el titular de una sección que abre un capítulo
 *   lg   → el titular de sección común
 *   md   → títulos dentro de una sección (una ficha, un paso)
 *
 * El énfasis va con <em> adentro: toma la itálica de la misma serif.
 */
const headingVariants = cva("font-display font-normal text-balance", {
  variants: {
    size: {
      hero: "text-[clamp(46px,7.6vw,116px)] leading-[0.92]",
      xl: "text-[clamp(36px,5.6vw,80px)] leading-[0.98]",
      lg: "text-[clamp(30px,4vw,52px)] leading-[1.04]",
      md: "text-[clamp(22px,2.4vw,30px)] leading-[1.12]",
    },
  },
  defaultVariants: { size: "lg" },
})

type HeadingProps = VariantProps<typeof headingVariants> & {
  as?: "h1" | "h2" | "h3" | "p"
  className?: string
  children: React.ReactNode
}

export function Heading({
  as: Tag = "h2",
  size,
  className,
  children,
}: HeadingProps) {
  return (
    <Tag className={cn(headingVariants({ size }), className)}>{children}</Tag>
  )
}
