import { Fragment } from "react"
import { cn } from "@/lib/utils"

type MarqueeProps = {
  items: readonly string[]
  /** Duración de una vuelta completa, en segundos. */
  speed?: number
  /** Clases del texto: tamaño, familia, color. */
  itemClassName?: string
  className?: string
  /** Lo que va entre ítem e ítem. Por defecto, un punto medio. */
  separator?: React.ReactNode
}

/**
 * Cinta corrida, solo CSS (ver `.marquee-track` en globals.css).
 *
 * El contenido se renderiza dos veces en la misma fila y la pista se
 * desplaza la mitad de su ancho: cuando termina, la segunda copia está
 * exactamente donde empezó la primera y el salto no se ve.
 *
 * La segunda copia va con aria-hidden: un lector de pantalla la leería
 * dos veces. Con prefers-reduced-motion la cinta se queda quieta.
 */
export function Marquee({
  items,
  speed = 40,
  itemClassName,
  className,
  separator = <span aria-hidden="true">·</span>,
}: MarqueeProps) {
  const fila = (copia: number) => (
    <div
      aria-hidden={copia > 0 || undefined}
      className="flex shrink-0 items-center gap-[0.6em] pr-[0.6em]"
    >
      {items.map((item, i) => (
        <Fragment key={`${item}-${i}`}>
          <span className={cn("whitespace-nowrap", itemClassName)}>{item}</span>
          <span className={itemClassName}>{separator}</span>
        </Fragment>
      ))}
    </div>
  )

  return (
    <div className={cn("flex overflow-hidden", className)}>
      <div
        className="marquee-track flex w-max"
        style={{ "--marquee-speed": `${speed}s` } as React.CSSProperties}
      >
        {fila(0)}
        {fila(1)}
      </div>
    </div>
  )
}
