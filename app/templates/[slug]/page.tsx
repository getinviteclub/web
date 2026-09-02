import type { Metadata } from "next"
import Link from "next/link"
import { notFound } from "next/navigation"
import { TEMPLATES } from "@/content/templates"
import { PRECIO_DESDE } from "@/content/planes"
import { Navbar } from "@/components/marketing/Navbar"
import { Footer } from "@/components/marketing/Footer"
import { ArrowLeft, ICON_WEIGHT } from "@/components/ui/icons"
import { TemplatePreview } from "@/components/templates/TemplatePreview"
import { TemplatePrecio } from "@/components/templates/TemplatePrecio"
import { TemplateIncluye } from "@/components/templates/TemplateIncluye"
import { WhatsappCta } from "@/components/ui/whatsapp-cta"
import { TrackView } from "@/components/ui/track-view"
import { StickyCta } from "@/components/ui/sticky-cta"
import { CTA_INLINE_ID } from "@/lib/dom-ids"
import { FUNNEL_EVENTS } from "@/lib/analytics"
import { mensajeDiseno } from "@/lib/whatsapp"

/**
 * La pantalla más importante del MVP: acá se decide.
 *
 * El orden de la columna derecha es el orden en que se decide —qué es,
 * cuánto sale, qué trae, cómo sigo— y cada bloque vive en su propio
 * componente; esta página solo los ensambla.
 */

export function generateStaticParams() {
  return TEMPLATES.map((template) => ({ slug: template.slug }))
}

export function generateMetadata({
  params,
}: {
  params: { slug: string }
}): Metadata {
  const template = TEMPLATES.find((t) => t.slug === params.slug)
  if (!template) return {}
  return {
    title: `${template.name} — Invitación digital de casamiento | Invite Club`,
    description: `${template.longDescription} Desde ${PRECIO_DESDE}, pago único.`,
  }
}

export default function TemplatePage({
  params,
}: {
  params: { slug: string }
}) {
  const template = TEMPLATES.find((t) => t.slug === params.slug)
  if (!template) notFound()

  const mensaje = mensajeDiseno(template.name)

  return (
    <>
      <Navbar />

      {/* pt alto: el navbar es fixed y sin esto le come el breadcrumb. */}
      <main className="mx-auto max-w-max px-[var(--pad-x)] pb-16 pt-28 md:pb-20 md:pt-32">
        <Link
          href="/#disenos"
          className="label-copy inline-flex items-center gap-1.5 transition-opacity hover:opacity-70"
        >
          <ArrowLeft size={14} weight={ICON_WEIGHT} aria-hidden="true" />
          Volver a diseños
        </Link>

        {/* Nombre y descripción van ARRIBA de la grilla y no dentro de la
            columna derecha: en mobile la grilla se apila y el usuario se
            encontraba con la foto y el botón "Ver la invitación completa"
            antes de leer de qué diseño se trata. Así el orden es el mismo
            en las dos anchuras: qué es → cómo se ve → cuánto sale → qué
            trae → cómo sigo. */}
        <header className="mt-6 max-w-[52ch]">
          <TrackView
            event={FUNNEL_EVENTS.viewTemplate}
            params={{ design: template.slug }}
          />
          <h1
            className="font-display font-normal leading-[1.05]"
            style={{ fontSize: "clamp(32px, 5vw, 48px)" }}
          >
            {template.name}
          </h1>
          <p className="mt-4 text-lg desc-copy">{template.longDescription}</p>
        </header>

        <div className="mt-10 grid gap-12 md:mt-14 md:grid-cols-2 md:items-start md:gap-16">
          <TemplatePreview template={template} />

          <div className="flex flex-col gap-8">
            <TemplatePrecio />

            <TemplateIncluye />

            {/* El CTA no dice "Comprar" ni "Contratar" a propósito: abre un
                WhatsApp, no un checkout. "Me gusta este diseño" describe
                exactamente lo que el usuario está haciendo —elegir— y baja
                el costo percibido de tocarlo. */}
            <div className="border-t border-border pt-6">
              <div id={CTA_INLINE_ID}>
                <WhatsappCta
                  message={mensaje}
                  trackParams={{ design: template.slug }}
                  size="md"
                >
                  Me gusta este diseño
                </WhatsappCta>
              </div>
              <p className="note-copy mt-3 text-muted-foreground">
                Te escribimos por WhatsApp con el diseño ya elegido. Te
                respondemos en el día, sin compromiso.
              </p>
            </div>
          </div>
        </div>
      </main>

      <Footer />

      {/* Acá está la máxima intención de todo el sitio y el CTA de arriba
          ya quedó fuera de pantalla. */}
      <StickyCta
        nombre={template.name}
        precio={`Desde ${PRECIO_DESDE}`}
        message={mensaje}
        trackParams={{ design: template.slug }}
      />
    </>
  )
}
