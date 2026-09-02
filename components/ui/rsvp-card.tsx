import {
  Check,
  LinkSimple,
  ICON_WEIGHT,
  ICON_WEIGHT_BOLD,
} from "@/components/ui/icons"
import { cn } from "@/lib/utils"

const CONFIRMACIONES = [
  { name: "Sofía y Martín", detail: "2 personas" },
  { name: "Familia Álvarez", detail: "4 personas" },
  { name: "Lucía Gómez", detail: "1 persona" },
]

/** El resultado: un link para compartir y las confirmaciones entrando solas. */
export function RsvpCard({ className }: { className?: string }) {
  return (
    <div
      className={cn("flex flex-col gap-4", className)}
      role="img"
      aria-label="Link de la invitación y confirmaciones de invitados en tiempo real"
    >
      {/* El link */}
      <div className="flex items-center gap-2 rounded-none bg-paper px-4 py-3">
        <LinkSimple
          size={16}
          weight={ICON_WEIGHT}
          className="shrink-0 text-muted-foreground"
        />
        <span className="truncate text-sm">
          getinviteclub.com/<span className="text-muted-foreground">tu-boda</span>
        </span>
      </div>

      {/* Confirmaciones */}
      <div className="rounded-none bg-paper p-4">
        <div className="mb-3 flex items-baseline justify-between">
          <span className="label-copy">
            Confirmados
          </span>
          <span className="text-2xl font-bold leading-none">
            38
          </span>
        </div>

        <ul className="flex flex-col gap-2.5">
          {CONFIRMACIONES.map((item) => (
            <li key={item.name} className="flex items-center gap-2.5">
              <span className="flex size-5 shrink-0 items-center justify-center rounded-none bg-ink">
                <Check
                  size={12}
                  weight={ICON_WEIGHT_BOLD}
                  className="text-inverse"
                />
              </span>
              <span className="flex-1 truncate text-sm">{item.name}</span>
              <span className="note-copy shrink-0">
                {item.detail}
              </span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  )
}
