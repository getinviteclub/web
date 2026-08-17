import Image from "next/image"
import { cn } from "@/lib/utils"

function initials(name: string) {
  const clean = name.replace(/[[\]]/g, "").trim()
  const parts = clean.split(/\s+/).filter(Boolean)
  if (parts.length === 0) return "—"
  return (parts[0][0] + (parts[1]?.[0] ?? "")).toUpperCase()
}

type AvatarProps = {
  name: string
  /** Foto opcional; si no hay, se muestran las iniciales. */
  src?: string
  className?: string
}

export function Avatar({ name, src, className }: AvatarProps) {
  return (
    <div
      className={cn(
        "relative flex size-11 shrink-0 items-center justify-center overflow-hidden rounded-none bg-clay font-mono text-sm font-bold text-ink",
        className
      )}
    >
      {src ? (
        <Image src={src} alt={name} fill sizes="44px" className="object-cover" />
      ) : (
        <span aria-hidden="true">{initials(name)}</span>
      )}
    </div>
  )
}
