import { type VariantProps } from "class-variance-authority"
import { Cta, ctaVariants } from "@/components/ui/cta"
import { WhatsappLogo, ICON_WEIGHT } from "@/components/ui/icons"
import { FUNNEL_EVENTS, type EventParams } from "@/lib/analytics"
import { waLink } from "@/lib/whatsapp"

/**
 * El CTA del sistema apuntando a WhatsApp con el mensaje pre-cargado.
 * Toda la parte visual vive en <Cta>; acá solo se arma el link.
 */

/**
 * El logo de WhatsApp, de Phosphor. Antes era un SVG pegado a mano con
 * dos paths: se veía más pesado que el resto de los íconos del sistema y
 * no acompañaba el peso `light`.
 */
function WhatsappIcon({ className }: { className?: string }) {
  return (
    <WhatsappLogo
      weight={ICON_WEIGHT}
      aria-hidden="true"
      className={className}
    />
  )
}

type WhatsappCtaProps = VariantProps<typeof ctaVariants> & {
  /** Mensaje pre-cargado en el chat. */
  message: string
  children: React.ReactNode
  className?: string
  /** Contexto del click: desde qué diseño y/o plan sale. */
  trackParams?: EventParams
}

export function WhatsappCta({
  message,
  children,
  variant,
  tone,
  size,
  className,
  trackParams,
}: WhatsappCtaProps) {
  return (
    <Cta
      href={waLink(message)}
      variant={variant}
      tone={tone}
      size={size}
      className={className}
      external
      trackAs={FUNNEL_EVENTS.whatsappCta}
      trackParams={trackParams}
    >
      {children}
    </Cta>
  )
}

export { WhatsappIcon, ctaVariants }
