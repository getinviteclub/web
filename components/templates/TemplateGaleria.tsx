"use client"

import { useState } from "react"
import Image from "next/image"
import type { Template } from "@/content/templates"
import { FilmPhoto } from "@/components/ui/film-photo"
import { cn } from "@/lib/utils"

/**
 * La columna izquierda del detalle: una imagen grande y las miniaturas
 * para cambiarla (referencia: la ficha de producto de Glo Creative).
 *
 * Las piezas de diseño (`pieza: true`) se ven a color y enteras sobre
 * papel: son lo que se está vendiendo y recortarlas les come los textos.
 * Las fotos de ambiente pasan por <FilmPhoto> como el resto del sitio.
 *
 * Miniaturas en fila abajo en mobile, en columna a la izquierda desde md.
 */
export function TemplateGaleria({ template }: { template: Template }) {
  const [activa, setActiva] = useState(0)
  const imagen = template.galeria[activa]

  return (
    <div className="flex flex-col-reverse gap-3 md:flex-row">
      <ul className="flex gap-3 md:w-[72px] md:flex-col" aria-label="Imágenes del diseño">
        {template.galeria.map((img, i) => (
          <li key={img.src} className="w-[64px] md:w-full">
            <button
              type="button"
              onClick={() => setActiva(i)}
              aria-label={`Ver imagen ${i + 1}: ${img.alt}`}
              aria-current={i === activa}
              className={cn(
                "relative block aspect-[4/5] w-full overflow-hidden bg-bone transition-opacity",
                i === activa ? "outline outline-1 outline-offset-2 outline-ink" : "opacity-60 hover:opacity-100"
              )}
            >
              <Image
                src={img.src}
                alt=""
                fill
                sizes="72px"
                className="object-cover"
              />
            </button>
          </li>
        ))}
      </ul>

      <div className="flex-1">
        {imagen.pieza ? (
          <div key={imagen.src} className="fade-in relative aspect-[4/5] w-full bg-bone">
            <Image
              src={imagen.src}
              alt={imagen.alt}
              fill
              priority={activa === 0}
              sizes="(min-width: 768px) 45vw, 100vw"
              style={{ objectPosition: activa === 0 ? template.coverPosition : undefined }}
              className="object-contain p-[6%]"
            />
          </div>
        ) : (
          <FilmPhoto
            key={imagen.src}
            src={imagen.src}
            alt={imagen.alt}
            sizes="(min-width: 768px) 45vw, 100vw"
            className="fade-in aspect-[4/5] w-full"
          />
        )}
      </div>
    </div>
  )
}
