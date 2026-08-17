import Image from "next/image"
import { Check } from "lucide-react"
import { cn } from "@/lib/utils"
import { TEMPLATES } from "@/content/templates"

const ELEGIDO = TEMPLATES[2]

/** La colección de diseños para elegir, con uno ya marcado como seleccionado. */
export function DesignPicker({ className }: { className?: string }) {
  return (
    <div
      className={cn("flex flex-col items-center gap-4", className)}
      role="img"
      aria-label="Colección de diseños de invitación para elegir"
    >
      <div className="flex justify-center gap-3">
        {TEMPLATES.map((template) => {
          const selected = template.slug === ELEGIDO.slug
          return (
            <div
              key={template.slug}
              className={cn(
                "relative aspect-[9/19.5] w-16 shrink-0 overflow-hidden rounded-none border-2 transition-opacity",
                selected
                  ? "border-ink"
                  : "border-transparent opacity-50"
              )}
            >
              <Image
                src={template.image}
                alt={template.name}
                fill
                sizes="64px"
                className="object-cover"
              />
              {selected && (
                <span className="absolute right-1 top-1 flex size-4 items-center justify-center rounded-none bg-ink">
                  <Check className="size-2.5 text-inverse" strokeWidth={3} />
                </span>
              )}
            </div>
          )
        })}
      </div>

      <div className="rounded-none bg-paper px-4 py-2.5">
        <span className="text-sm font-semibold">{ELEGIDO.name}</span>
        <span className="ml-2 font-mono text-xs uppercase tracking-wide text-muted-foreground">
          elegido
        </span>
      </div>
    </div>
  )
}
