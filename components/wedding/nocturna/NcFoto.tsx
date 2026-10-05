import Image from "next/image"
import { cn } from "@/lib/utils"

/**
 * Toda foto de Nocturna entra por acá, con uno de dos tratamientos:
 *   "bw"   → blanco y negro suave y cálido (la mayoría)
 *   "film" → color apagado y tibio, como negativo escaneado
 * Con un grano muy leve encima, para que fotos de orígenes distintos se
 * lean como un mismo rollo.
 */
export function NcFoto({
  src,
  alt,
  tono = "bw",
  className,
  sizes = "100vw",
  priority,
  recortar,
}: {
  src: string
  alt: string
  tono?: "bw" | "film"
  /** Tamaño, proporción y forma (aspect-*, nc-arch): los pone quien la usa. */
  className?: string
  sizes?: string
  priority?: boolean
  /** Agranda un poco la foto para comerse el borde blanco de los
   *  escaneos de película (muchas fotos analógicas lo traen). */
  recortar?: boolean
}) {
  return (
    <div className={cn("nc-grain relative overflow-hidden bg-[var(--nc-rule)]", className)}>
      <Image
        src={src}
        alt={alt}
        fill
        sizes={sizes}
        priority={priority}
        className={cn("object-cover", tono === "film" ? "nc-film" : "nc-bw", recortar && "scale-[1.22]")}
      />
    </div>
  )
}
