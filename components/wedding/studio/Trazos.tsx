import { cn } from "@/lib/utils"

/**
 * Los gestos de marcador de Studio: el óvalo que encierra la fecha y el
 * subrayado ondulado. SVG estirado a la caja (preserveAspectRatio none)
 * con trazo de grosor fijo, así sirven para cualquier largo de texto.
 */

/** Encierra `children` en un óvalo hecho a mano, como "( 18 / 04 / 26 )". */
export function HandCircle({ children, className }: { children: React.ReactNode; className?: string }) {
  return (
    <span className={cn("relative inline-block px-[0.9em] py-[0.35em]", className)}>
      {children}
      <svg
        viewBox="0 0 300 100"
        preserveAspectRatio="none"
        aria-hidden="true"
        className="pointer-events-none absolute -inset-x-[4%] -inset-y-[12%] h-[124%] w-[108%] overflow-visible"
      >
        {/* El trazo se pasa de largo al cerrar: así se lee a mano y no a figura. */}
        <path
          d="M162 9 C 240 6, 296 28, 293 53 C 290 82, 214 96, 142 94 C 62 92, 6 78, 8 51 C 10 24, 74 7, 158 10 C 206 12, 246 19, 270 30"
          fill="none"
          stroke="var(--st-ink)"
          strokeWidth="2"
          strokeLinecap="round"
          vectorEffect="non-scaling-stroke"
        />
      </svg>
    </span>
  )
}

/** Subrayado ondulado, de lado a lado de su contenedor. */
export function HandUnderline({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 300 20" preserveAspectRatio="none" aria-hidden="true" className={cn("h-3 w-full", className)}>
      <path
        d="M3 12 C 40 4, 70 18, 110 10 C 150 3, 180 17, 220 9 C 250 4, 275 13, 297 7"
        fill="none"
        stroke="var(--st-ink)"
        strokeWidth="2"
        strokeLinecap="round"
        vectorEffect="non-scaling-stroke"
      />
    </svg>
  )
}

/** Corazón a mano, relleno con un color (las muestras del dress code). */
export function HandHeart({ color, className }: { color: string; className?: string }) {
  return (
    <svg viewBox="0 0 40 36" aria-hidden="true" className={cn("h-auto w-10", className)}>
      <path
        d="M20 34 C 12 27, 2 20, 3 11 C 4 4, 12 1, 17 6 C 18.5 7.5, 19.5 9, 20 10 C 21 7, 24 2, 30 2.5 C 37 3, 39 11, 36 17 C 33 23, 26 29, 20 34 Z"
        fill={color}
        stroke="var(--st-text)"
        strokeOpacity=".25"
        strokeWidth="1"
      />
    </svg>
  )
}
