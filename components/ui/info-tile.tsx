import Image from "next/image"
import { cn } from "@/lib/utils"
import { MOCKUPS } from "@/content/mockups"

const CAMPOS = [
  { label: "Nombres", value: "Sofía & Martín" },
  { label: "Fecha", value: "14 de marzo, 2027" },
  { label: "Ubicación", value: "Estancia La Serena" },
]

const FOTOS = [MOCKUPS.clasica, MOCKUPS.manuscrita, MOCKUPS.editorial, MOCKUPS.clasica]

/** Los datos que la pareja comparte: información del casamiento y sus fotos. */
export function InfoTile({ className }: { className?: string }) {
  return (
    <div
      className={cn("flex flex-col gap-3", className)}
      role="img"
      aria-label="Datos del casamiento y fotos compartidas"
    >
      <div className="flex flex-col gap-2.5 rounded-none bg-paper px-4 py-3">
        {CAMPOS.map((campo) => (
          <div
            key={campo.label}
            className="flex items-baseline justify-between gap-3"
          >
            <span className="shrink-0 font-mono text-xs uppercase tracking-wide text-muted-foreground">
              {campo.label}
            </span>
            <span className="truncate text-sm font-medium">
              {campo.value}
            </span>
          </div>
        ))}
      </div>

      <div className="rounded-none bg-paper p-3">
        <div className="grid grid-cols-4 gap-1.5">
          {FOTOS.map((src, i) => (
            <div
              key={i}
              className="relative aspect-square overflow-hidden rounded-none bg-bone"
            >
              <Image src={src} alt="" fill sizes="48px" className="object-cover" />
            </div>
          ))}
        </div>
        <p className="mt-2 font-mono text-xs uppercase tracking-wide text-muted-foreground">
          12 fotos adjuntas
        </p>
      </div>
    </div>
  )
}
