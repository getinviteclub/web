import { ANUNCIO } from "@/content/nav"
import { ArrowRight, ICON_WEIGHT } from "@/components/ui/icons"

/**
 * La franja de aviso arriba del navbar. Un mensaje, un link. Si ANUNCIO
 * es null no se pinta nada.
 */
export function Anuncio() {
  if (!ANUNCIO) return null

  return (
    <a
      href={ANUNCIO.href}
      className="group block bg-ink px-[var(--pad-x)] py-2 text-center text-inverse"
    >
      <span className="label-copy label-copy-inverse inline-flex flex-wrap items-center justify-center gap-x-2 gap-y-1">
        <span className="opacity-70">{ANUNCIO.text}</span>
        <span className="inline-flex items-center gap-1.5 underline decoration-white/40 underline-offset-4 group-hover:decoration-white">
          {ANUNCIO.linkText}
          <ArrowRight size={11} weight={ICON_WEIGHT} aria-hidden="true" />
        </span>
      </span>
    </a>
  )
}
