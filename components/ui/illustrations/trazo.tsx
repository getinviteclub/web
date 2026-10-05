import { cn } from "@/lib/utils"

/**
 * El lienzo común de las ilustraciones de trazo fino.
 *
 * Todas comparten esto: viewBox de 120, sin relleno, puntas redondas y
 * `currentColor` —toman el color del texto, así funcionan igual sobre
 * papel y sobre el bloque negro—.
 *
 * `vector-effect: non-scaling-stroke` es lo que las hace "trazo fino":
 * el grosor queda en 1px real aunque el dibujo se muestre a 48 o a 240px.
 * Sin eso, una ilustración grande se veía dibujada con marcador.
 */
export type TrazoProps = {
  className?: string
  /** Texto alternativo. Si falta, el dibujo es decorativo y se oculta a
   *  los lectores de pantalla. */
  title?: string
}

export function Trazo({
  className,
  title,
  children,
}: TrazoProps & { children: React.ReactNode }) {
  return (
    <svg
      viewBox="0 0 120 120"
      fill="none"
      stroke="currentColor"
      strokeWidth={1.15}
      strokeLinecap="round"
      strokeLinejoin="round"
      className={cn("h-auto w-full [&_*]:[vector-effect:non-scaling-stroke]", className)}
      role={title ? "img" : undefined}
      aria-hidden={title ? undefined : true}
    >
      {title && <title>{title}</title>}
      {children}
    </svg>
  )
}
