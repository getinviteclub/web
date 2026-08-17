import { cn } from "@/lib/utils"

const SWATCHES = ["#0A0A0A", "#8C7A6B", "#C9BCAE", "#E8E2DA", "#FFFFFF"]

/** Muestra el "detrás de escena" del diseño: paleta, tipografía y revisiones. */
export function StyleTile({ className }: { className?: string }) {
  return (
    <div
      className={cn("flex flex-col gap-5", className)}
      role="img"
      aria-label="Paleta de colores, tipografía y revisiones incluidas"
    >
      {/* Tipografía */}
      <div className="rounded-xl bg-white px-4 py-3 shadow-sm">
        <span className="font-display text-3xl font-semibold leading-none">
          Aa
        </span>
        <span className="note-copy ml-2">
          Tipografía elegida con vos
        </span>
      </div>

      {/* Paleta */}
      <div className="rounded-xl bg-white px-4 py-3 shadow-sm">
        <span className="label-copy mb-2 block">
          Tu paleta
        </span>
        <div className="flex gap-1.5">
          {SWATCHES.map((color) => (
            <span
              key={color}
              className="size-7 rounded-md border border-black/10"
              style={{ backgroundColor: color }}
            />
          ))}
        </div>
      </div>

      {/* Revisiones */}
      <div className="flex flex-wrap gap-2">
        {["Boceto", "Revisión 1", "Revisión 2"].map((step, i) => (
          <span
            key={step}
            className={cn(
              "note-copy rounded-full px-3 py-1.5 font-semibold",
              i === 0 ? "bg-ink note-copy-inverse" : "bg-white"
            )}
          >
            {step}
          </span>
        ))}
      </div>
    </div>
  )
}
