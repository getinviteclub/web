import Image from "next/image"
import { cn } from "@/lib/utils"

type StampProps = {
  src: string
  alt: string
  /** Ancho de la estampilla (w-*). */
  className?: string
  /** Proporción de la foto adentro. */
  aspect?: "portrait" | "landscape" | "square"
  /** Giro en grados: una estampilla nunca está perfectamente derecha. */
  rotate?: number
  sizes?: string
  priority?: boolean
}

const ASPECT = {
  portrait: "aspect-[4/5]",
  landscape: "aspect-[4/3]",
  square: "aspect-square",
} as const

/**
 * Una foto dentro de una estampilla de correo, con el borde dentado de
 * verdad (ver `.st-stamp` en studio.css). Es la pieza central de Studio:
 * la composición de la invitación de la copa de referencia.
 *
 * Dos capas a propósito: la de afuera lleva el giro y la sombra; la de
 * adentro, la máscara. Si la sombra fuera en la misma, la máscara la recortaría.
 */
export function Stamp({ src, alt, className, aspect = "portrait", rotate = 0, sizes = "320px", priority }: StampProps) {
  return (
    <div className={cn("st-stamp-shadow", className)} style={{ rotate: `${rotate}deg` }}>
      <div className="st-stamp">
        <div className={cn("relative overflow-hidden bg-[#e9e2d3]", ASPECT[aspect])}>
          <Image src={src} alt={alt} fill sizes={sizes} priority={priority} className="object-cover" />
        </div>
      </div>
    </div>
  )
}
