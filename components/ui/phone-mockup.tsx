import Image from "next/image"
import { cn } from "@/lib/utils"

type PhoneMockupProps = {
  src: string
  alt: string
  className?: string
  priority?: boolean
  /** `cover` (por defecto) recorta la imagen al 9:19.5 de la pantalla.
   *  `contain` la muestra entera y rellena lo que sobra con el tono papel:
   *  es lo que hace falta cuando la fuente es una pieza de diseño y no una
   *  captura de teléfono, porque recortarla le come los márgenes y parte
   *  los textos. */
  fit?: "cover" | "contain"
}

/**
 * Marco de celular hecho solo con CSS — no necesita assets.
 * La pantalla mantiene ratio 9:19.5, igual que un teléfono real.
 */
export function PhoneMockup({
  src,
  alt,
  className,
  priority,
  fit = "cover",
}: PhoneMockupProps) {
  return (
    <div className={cn("relative mx-auto w-full max-w-[260px]", className)}>
      <div
        className={cn(
          "relative aspect-[9/19.5] overflow-hidden rounded-none border-[7px] border-ink",
          fit === "contain" ? "bg-bone" : "bg-ink"
        )}
      >
        <Image
          src={src}
          alt={alt}
          fill
          priority={priority}
          sizes="260px"
          className={fit === "contain" ? "object-contain" : "object-cover"}
        />
        {/* Notch: solo con `cover`. Sobre una pieza mostrada entera queda
            un bloque negro flotando sobre una banda de papel, porque el
            diseño no tiene una barra de estado abajo que lo justifique. */}
        {fit === "cover" && (
          <div className="absolute left-1/2 top-0 h-[22px] w-[92px] -translate-x-1/2 rounded-none bg-ink" />
        )}
      </div>
    </div>
  )
}
