import { Logo } from "@/components/ui/wordmark"

/** Cuántas veces se repite el logo en cada mitad de la cinta. */
const REPETICIONES = 4

/**
 * El logo gigante corriendo al pie del sitio. Misma mecánica que
 * <Marquee> (dos copias, se desplaza la mitad; ver `.marquee-track`),
 * pero con la imagen del logo en lugar de texto.
 */
export function LogoMarquee() {
  const fila = (copia: number) => (
    <div aria-hidden={copia > 0 || undefined} className="flex shrink-0 items-center">
      {Array.from({ length: REPETICIONES }).map((_, i) => (
        <Logo
          key={i}
          alt=""
          sizes="(min-width: 1257px) 880px, 70vw"
          className="mr-[6vw] w-[min(70vw,880px)] max-w-none shrink-0"
        />
      ))}
    </div>
  )

  return (
    <div className="flex overflow-hidden border-y border-rule py-6 md:py-10">
      <div
        className="marquee-track flex w-max"
        style={{ "--marquee-speed": "70s" } as React.CSSProperties}
      >
        {fila(0)}
        {fila(1)}
      </div>
    </div>
  )
}
