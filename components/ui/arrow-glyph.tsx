/**
 * Flecha caligráfica del sistema: un solo trazo fino en vez del glifo
 * genérico de ícono. Vara recta + dos curvas que se abren hacia el
 * asta, como una pluma. currentColor, sin relleno: hereda el color
 * del texto. `flip` la espeja para que apunte a la izquierda.
 */
export function ArrowGlyph({
  className,
  flip,
}: {
  className?: string
  flip?: boolean
}) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.25"
      strokeLinecap="round"
      aria-hidden="true"
      className={className}
      style={flip ? { transform: "scaleX(-1)" } : undefined}
    >
      <path d="M2 12h15" />
      <path d="M12.5 3c1 4.5 4.5 7.5 9 9" />
      <path d="M12.5 21c1-4.5 4.5-7.5 9-9" />
    </svg>
  )
}
