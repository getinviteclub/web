import { Star, ICON_WEIGHT_SOLID } from "@/components/ui/icons"
import { cn } from "@/lib/utils"

/** Cinco estrellas sólidas. Decorativas: el puntaje se dice en texto al lado. */
export function Stars({ size = 12, className }: { size?: number; className?: string }) {
  return (
    <span className={cn("inline-flex gap-0.5", className)} aria-hidden="true">
      {Array.from({ length: 5 }).map((_, i) => (
        <Star key={i} size={size} weight={ICON_WEIGHT_SOLID} />
      ))}
    </span>
  )
}
