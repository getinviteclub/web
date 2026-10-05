import { CIFRAS } from "@/content/cifras"
import { cn } from "@/lib/utils"

/**
 * La franja de cifras: cuatro números grandes separados por reglas.
 * Prueba social en una línea, entre dos secciones. En el HTML va primero
 * la etiqueta (<dt>) y después el número (<dd>), como pide <dl>; el
 * flex-col-reverse los muestra al revés: número arriba, etiqueta abajo.
 */
export function Cifras({ className }: { className?: string }) {
  return (
    <div className={cn("border-y border-rule", className)}>
      <dl className="mx-auto grid max-w-max grid-cols-2 px-[var(--pad-x)] md:grid-cols-4">
        {CIFRAS.map((c, i) => (
          <div
            key={c.id}
            className={cn(
              "flex flex-col-reverse py-8 md:px-8 md:py-10",
              i % 2 === 1 && "border-l border-rule pl-6",
              i >= 2 && "border-t border-rule md:border-t-0",
              i > 0 && "md:border-l md:pl-8",
              i === 0 && "md:pl-0"
            )}
          >
            <dt className="label-copy mt-3 text-muted-foreground">{c.label}</dt>
            <dd className="font-display text-[clamp(40px,5vw,64px)] leading-none">{c.valor}</dd>
          </div>
        ))}
      </dl>
    </div>
  )
}
