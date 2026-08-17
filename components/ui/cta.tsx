import { cva, type VariantProps } from "class-variance-authority"
import { cn } from "@/lib/utils"

/**
 * CTA del sistema: pill con borde de 1px y relleno que entra desde la
 * izquierda al hacer hover.
 *
 * El relleno es un ::before que va de scaleX(0) a scaleX(1). Vive detrás
 * del texto gracias a `isolate` + `-z-10`, así no hace falta envolver los
 * children en un span.
 *
 * `tone` describe sobre qué fondo cae el botón, no su color:
 *   outline → fondo claro (el botón principal del sistema)
 *   dark    → fondo claro, pero es la opción destacada (ya viene relleno)
 *   frost   → sobre imagen oscura
 *   glass   → sobre la barra transparente del navbar
 */
const ctaVariants = cva(
  [
    "relative isolate inline-flex items-center justify-center overflow-hidden",
    "rounded-pill border font-ui font-medium uppercase tracking-label",
    "transition-colors duration-200 ease-[cubic-bezier(.86,0,.07,1)]",
    "before:absolute before:inset-0 before:-z-10 before:origin-left",
    "before:scale-x-0 before:transition-transform before:duration-[400ms]",
    "before:ease-[cubic-bezier(.86,0,.07,1)]",
    "hover:before:scale-x-100 focus-visible:before:scale-x-100",
    "focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2",
  ],
  {
    variants: {
      tone: {
        outline:
          "border-ink text-ink before:bg-ink hover:text-inverse focus-visible:text-inverse focus-visible:outline-ink",
        light:
          "border-ink text-ink before:bg-ink hover:text-inverse focus-visible:text-inverse focus-visible:outline-ink",
        /* Destacado: ya viene relleno y se invierte al pasar el mouse. */
        dark: "border-ink bg-ink text-inverse before:bg-inverse hover:text-ink focus-visible:text-ink focus-visible:outline-ink",
        frost:
          "border-white/70 text-inverse before:bg-white hover:text-ink focus-visible:text-ink focus-visible:outline-white",
        glass:
          "border-white/70 text-inverse before:bg-white hover:text-ink focus-visible:text-ink focus-visible:outline-white",
      },
      size: {
        sm: "min-w-[104px] px-4 py-2 text-[11px] leading-none",
        md: "min-w-[130px] px-5 py-2.5 text-xs leading-none",
        lg: "min-w-[150px] px-7 py-3.5 text-[13px] leading-none",
      },
    },
    defaultVariants: { tone: "outline", size: "md" },
  }
)

type CtaProps = VariantProps<typeof ctaVariants> & {
  href: string
  children: React.ReactNode
  className?: string
  /** Abre en pestaña nueva con el rel seguro. */
  external?: boolean
}

export function Cta({
  href,
  children,
  tone,
  size,
  className,
  external,
}: CtaProps) {
  return (
    <a
      href={href}
      className={cn(ctaVariants({ tone, size }), className)}
      {...(external
        ? { target: "_blank", rel: "noopener noreferrer" }
        : {})}
    >
      {children}
    </a>
  )
}

export { ctaVariants }
