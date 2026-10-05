import { Reveal } from "@/components/ui/reveal"
import { cn } from "@/lib/utils"

/**
 * El encabezado de sección de Nocturna, como en la papelería de las
 * referencias: una palabra en caligrafía arriba (chica) o detrás (enorme
 * y en relieve, `ghost`), y el título en versalitas. Siempre centrado.
 */
export function NcHead({
  script,
  ghost,
  title,
  onDark,
  className,
}: {
  /** Caligrafía chica sobre el título ("Cuándo", "Dónde"). */
  script?: string
  /** Caligrafía gigante en relieve detrás del título ("Dress code"). */
  ghost?: string
  title: string
  onDark?: boolean
  className?: string
}) {
  return (
    <Reveal from="up" className={cn("relative mb-12 flex flex-col items-center text-center md:mb-16", className)}>
      {ghost && (
        <span
          aria-hidden="true"
          className="nc-script nc-ghost absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 whitespace-nowrap text-[clamp(88px,14vw,180px)]"
        >
          {ghost}
        </span>
      )}
      {script && <span className={cn("nc-script mb-3 text-[34px]", onDark ? "text-white/70" : "nc-muted")}>{script}</span>}
      <h2 className="nc-title relative mt-1">{title}</h2>
    </Reveal>
  )
}
