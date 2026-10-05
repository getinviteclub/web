import Image from "next/image"
import { cn } from "@/lib/utils"

/** El logo oficial: "INVITE" grotesca + "CLUB" serif itálica. PNG negro
 *  con transparencia (1600×248); sobre fondo oscuro se invierte a blanco. */
export const LOGO = { src: "/images/logo.png", width: 1600, height: 248 } as const

export function Logo({
  className,
  onDark,
  priority,
  alt = "Invite Club",
  sizes = "160px",
}: {
  className?: string
  onDark?: boolean
  priority?: boolean
  /** "" cuando es decorativo (la cinta del footer). */
  alt?: string
  /** Ancho con el que se muestra, para no bajar el PNG entero. */
  sizes?: string
}) {
  return (
    <Image
      src={LOGO.src}
      width={LOGO.width}
      height={LOGO.height}
      alt={alt}
      sizes={sizes}
      priority={priority}
      className={cn("h-auto", onDark && "invert", className)}
    />
  )
}

/** El logo como link a la home: el de la barra, el menú y el footer. */
export function Wordmark({
  className,
  onDark,
}: {
  className?: string
  onDark?: boolean
}) {
  return (
    <a href="/" aria-label="Invite Club, inicio" className={cn("inline-block", className)}>
      <Logo onDark={onDark} priority className="w-[132px] md:w-[148px]" />
    </a>
  )
}
