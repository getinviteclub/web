import { cn } from "@/lib/utils"

/**
 * El número entre paréntesis que ordena un bloque: "( 01 )", "( II )",
 * "(N.º 03)". Es el gesto editorial que numera capítulos, diseños y
 * razones — lo que hace que una lista se lea como un índice de revista y
 * no como viñetas.
 *
 * Es tipografía embebida, no estructura: si hay que anunciar una sección,
 * eso es <Eyebrow>.
 */
type IndiceProps = {
  children: React.ReactNode
  /** Antepone "N.º" (para numerar diseños y paquetes). */
  numero?: boolean
  onDark?: boolean
  className?: string
}

export function Indice({ children, numero, onDark, className }: IndiceProps) {
  return (
    <span
      className={cn(
        "label-copy inline-block whitespace-nowrap",
        onDark ? "text-white/60" : "text-muted-foreground",
        className
      )}
    >
      ({numero ? "N.º " : " "}
      {children}
      {numero ? "" : " "})
    </span>
  )
}

/** 1 → "01". Para numerar listas sin escribir los ceros a mano. */
export function dosDigitos(n: number): string {
  return String(n).padStart(2, "0")
}

/** 1 → "I". Alcanza para las listas cortas del sitio (hasta 10). */
export function romano(n: number): string {
  return ["I", "II", "III", "IV", "V", "VI", "VII", "VIII", "IX", "X"][n - 1] ?? String(n)
}
