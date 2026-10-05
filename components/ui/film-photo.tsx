import Image from "next/image"
import { cn } from "@/lib/utils"

type FilmPhotoProps = {
  src: string
  alt: string
  /** El tamaño y la proporción los pone quien la usa (aspect-*, h-*). */
  className?: string
  sizes?: string
  priority?: boolean
  /** Foco apenas corrido, como una 35 mm disparada al vuelo. */
  soft?: boolean
  /** Muestra la foto a color. Para piezas de diseño (las invitaciones)
   *  que no son fotografía: la paleta del diseño es parte de lo que se
   *  está mostrando. */
  color?: boolean
  /** Rótulo de negativo al pie ("400TX — 07"). Lo lee como un rollo. */
  frame?: string
  /** object-position del recorte. */
  position?: string
}

/**
 * Toda foto del sitio entra por acá.
 *
 * Unifica fotos de orígenes distintos en un solo rollo: blanco y negro,
 * algo de contraste y una capa de grano (ver `.film` y `.grain` en
 * globals.css). Si una foto se ve "de banco de imágenes", casi siempre es
 * porque se usó <Image> directo y se salteó esto.
 */
export function FilmPhoto({
  src,
  alt,
  className,
  sizes = "(min-width: 768px) 50vw, 100vw",
  priority,
  soft,
  color,
  frame,
  position,
}: FilmPhotoProps) {
  return (
    <figure className={cn("relative overflow-hidden bg-clay", !color && "grain", className)}>
      <Image
        src={src}
        alt={alt}
        fill
        priority={priority}
        sizes={sizes}
        style={{ objectPosition: position }}
        className={cn(
          "object-cover",
          !color && (soft ? "film-soft scale-[1.02]" : "film")
        )}
      />
      {frame && (
        <figcaption className="label-copy label-copy-inverse absolute bottom-3 right-3 z-[1] opacity-80">
          {frame}
        </figcaption>
      )}
    </figure>
  )
}
