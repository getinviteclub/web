import type { Template } from "@/content/templates"
import { DETALLE_CONTENT as D } from "@/content/detalle"
import { cn } from "@/lib/utils"

/**
 * La ficha técnica del diseño: paleta y tipografía. Es INFORMACIÓN, no
 * una elección: el diseño llega tal cual (decisión de Facu, para no abrir
 * rondas de cambios por colores o fuentes). La nota lo dice antes de que
 * pregunten.
 *
 * Los hex vienen del content (son datos del diseño) y se aplican inline:
 * es la única forma de pintar un color que el design system no conoce,
 * y está bien que no lo conozca.
 */
export function TemplateFicha({ template, className }: { template: Template; className?: string }) {
  return (
    <div className={cn("border-t border-rule pt-6", className)}>
      <p className="label-copy">{D.fichaLabel}</p>
      <p className="mt-2 text-sm desc-copy">{D.fichaNota}</p>
      <dl className="mt-6 grid grid-cols-[6.5rem_1fr] gap-y-5">
        <dt className="label-copy pt-1 text-muted-foreground">{D.paletaLabel}</dt>
        <dd>
          <ul className="flex flex-wrap gap-4">
            {template.paleta.map((color) => (
              <li key={color.hex} className="flex items-center gap-2">
                <span
                  aria-hidden="true"
                  className="size-5 border border-ink/15"
                  style={{ backgroundColor: color.hex }}
                />
                <span className="text-xs">{color.nombre}</span>
              </li>
            ))}
          </ul>
        </dd>

        <dt className="label-copy pt-0.5 text-muted-foreground">{D.tipografiaLabel}</dt>
        <dd className="text-sm">{template.tipografia}</dd>
      </dl>
    </div>
  )
}
