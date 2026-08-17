import { Link2, Check } from "lucide-react"
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
        <Link2 className="size-4 shrink-0 text-muted-foreground" />
        <span className="truncate font-mono text-sm">
          getinviteclub.com/<span className="text-muted-foreground">tu-boda</span>
        </span>
      </div>

      {/* Confirmaciones */}
      <div className="rounded-none bg-paper p-4">
        <div className="mb-3 flex items-baseline justify-between">
          <span className="font-mono text-xs uppercase tracking-wide text-muted-foreground">
            Confirmados
          </span>
          <span className="font-mono text-2xl font-bold leading-none">
            38
          </span>
        </div>

        <ul className="flex flex-col gap-2.5">
          {CONFIRMACIONES.map((item) => (
            <li key={item.name} className="flex items-center gap-2.5">
              <span className="flex size-5 shrink-0 items-center justify-center rounded-none bg-ink">
                <Check className="size-3 text-inverse" strokeWidth={3} />
              </span>
              <span className="flex-1 truncate text-sm">{item.name}</span>
              <span className="shrink-0 text-xs text-muted-foreground">
                {item.detail}
              </span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  )
}
