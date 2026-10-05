import { Reveal } from "@/components/ui/reveal"
import { HandUnderline } from "./Trazos"
import { cn } from "@/lib/utils"

/**
 * El encabezado de cada sección de Studio: el número en máquina de
 * escribir y el título a marcador, con su subrayado ondulado. Centrado,
 * como una carta.
 */
export function SectionHead({
  label,
  title,
  nota,
  className,
}: {
  label: string
  title: string
  nota?: string
  className?: string
}) {
  return (
    <Reveal from="up" className={cn("mb-14 flex flex-col items-center text-center md:mb-20", className)}>
      <span className="st-mono st-muted text-[11px]">{label}</span>
      <h2 className="st-hand st-ink mt-4 text-[clamp(52px,8vw,96px)] font-semibold">{title}</h2>
      <HandUnderline className="mt-1 w-[min(320px,60%)]" />
      {nota && <p className="mt-6 max-w-[46ch] text-lg leading-relaxed">{nota}</p>}
    </Reveal>
  )
}
