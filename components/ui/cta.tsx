"use client"

import { cva, type VariantProps } from "class-variance-authority"
import { cn } from "@/lib/utils"
import { track, type EventParams, type FunnelEvent } from "@/lib/analytics"

/**
 * CTA del sistema. Dos formas, misma tipografía de label:
 *
 *   variant="pill" → pill con borde de 1px y relleno que entra desde la
 *     izquierda al hacer hover. Es la acción principal.
 *     El relleno es un ::before que va de scaleX(0) a scaleX(1); vive
 *     detrás del texto con `isolate` + `-z-10`, así no hace falta
 *     envolver los children en un span.
 *
 *   variant="link" → texto subrayado, sin caja. Es la acción secundaria
 *     dentro de un bloque que ya tiene su propio peso visual (la ficha
 *     de un diseño, la barra de navegación).
 *
 * `tone` describe sobre qué fondo cae el CTA, no su color:
 *   outline → fondo claro (el principal del sistema)
 *   dark    → fondo claro, pero es la opción destacada (ya viene relleno)
 *   frost   → sobre imagen oscura
 *   glass   → sobre la barra transparente del navbar
 *
 * `size` solo cambia el pill: el link no tiene caja que dimensionar.
 * `lg` está reservado al CTA del hero (24px de padding lateral, 12 de
 * alto); el resto del sitio usa `md`.
 */
const ctaVariants = cva(
  [
    "inline-flex items-center justify-center",
    "font-ui text-xs font-medium uppercase leading-none tracking-label",
    "transition-colors duration-200 ease-[cubic-bezier(.86,0,.07,1)]",
    "focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2",
  ],
  {
    variants: {
      variant: {
        pill: [
          "relative isolate overflow-hidden rounded-pill border",
          "before:absolute before:inset-0 before:-z-10 before:origin-left",
          "before:scale-x-0 before:transition-transform before:duration-[400ms]",
          "before:ease-[cubic-bezier(.86,0,.07,1)]",
          "hover:before:scale-x-100 focus-visible:before:scale-x-100",
        ],
        link: "underline underline-offset-4 transition-opacity hover:opacity-60",
      },
      tone: { outline: "", light: "", dark: "", frost: "", glass: "" },
      size: { sm: "", md: "", lg: "" },
    },
    compoundVariants: [
      /* ── pill: color ── */
      {
        variant: "pill",
        tone: ["outline", "light"],
        class:
          "border-ink text-ink before:bg-ink hover:text-inverse focus-visible:text-inverse focus-visible:outline-ink",
      },
      {
        variant: "pill",
        tone: "dark",
        class:
          "border-ink bg-ink text-inverse before:bg-inverse hover:text-ink focus-visible:text-ink focus-visible:outline-ink",
      },
      {
        variant: "pill",
        tone: ["frost", "glass"],
        class:
          "border-white/70 text-inverse before:bg-white hover:text-ink focus-visible:text-ink focus-visible:outline-white",
      },
      /* ── pill: caja ── */
      { variant: "pill", size: "sm", class: "min-w-[104px] px-4 py-2" },
      { variant: "pill", size: "md", class: "min-w-[130px] px-5 py-2.5" },
      // Solo para el CTA del hero: es el único de la página y compite con
      // una foto a sangre completa, así que necesita más caja que el resto.
      // Mismo valor en mobile —24/12 no aprieta a 375px— para que el
      // botón no cambie de peso entre pantallas.
      { variant: "pill", size: "lg", class: "min-w-[150px] px-6 py-3" },
      /* ── link: color ── */
      {
        variant: "link",
        tone: ["outline", "light", "dark"],
        class: "text-ink focus-visible:outline-ink",
      },
      {
        variant: "link",
        tone: ["frost", "glass"],
        class: "text-inverse focus-visible:outline-white",
      },
    ],
    defaultVariants: { variant: "pill", tone: "outline", size: "md" },
  }
)

type CtaProps = VariantProps<typeof ctaVariants> & {
  href: string
  children: React.ReactNode
  className?: string
  /** Abre en pestaña nueva con el rel seguro. */
  external?: boolean
  /** Evento de funnel a registrar al hacer click. */
  trackAs?: FunnelEvent
  /** Contexto del evento: `design`, y lo que haga falta sumar. */
  trackParams?: EventParams
}

export function Cta({
  href,
  children,
  variant,
  tone,
  size,
  className,
  external,
  trackAs,
  trackParams,
}: CtaProps) {
  return (
    <a
      href={href}
      className={cn(ctaVariants({ variant, tone, size }), className)}
      onClick={() => {
        if (trackAs) track(trackAs, trackParams)
      }}
      {...(external
        ? { target: "_blank", rel: "noopener noreferrer" }
        : {})}
    >
      {children}
    </a>
  )
}

export { ctaVariants }
