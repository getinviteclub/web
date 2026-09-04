import type { Metadata } from "next"
import Link from "next/link"
import { notFound } from "next/navigation"
import { TEMPLATES } from "@/content/templates"
import { PRECIO_DESDE } from "@/content/precio"
import { Navbar } from "@/components/marketing/Navbar"
import { Footer } from "@/components/marketing/Footer"
import { ArrowLeft, ICON_WEIGHT } from "@/components/ui/icons"
import { TemplateShowcase } from "@/components/templates/TemplateShowcase"
import { TemplateCompra } from "@/components/templates/TemplateCompra"
import { TemplateIncluye } from "@/components/templates/TemplateIncluye"
import { TemplateExtras } from "@/components/templates/TemplateExtras"
import { TrackView } from "@/components/ui/track-view"
import { FUNNEL_EVENTS } from "@/lib/analytics"

/**
 * La pantalla más importante del MVP: acá se decide.
 *
 * Arriba, la estructura de studiogail.co: la evidencia a la izquierda —la
 * foto con el teléfono encima— y la decisión a la derecha, en el orden en
 * que se toma: qué es → cómo se ve → cuánto sale → qué hago. El precio y
 * los dos CTA entran en la primera pantalla.
 *
 * Abajo, a lo ancho, lo que esta página tiene que responder ahora que no
 * hay planes: "me gusta esta invitación, ¿qué puedo hacer con ella?".
 * <TemplateIncluye> lo contesta y <TemplateExtras> cierra con lo que se
 * suma aparte y con Atelier. Van a ancho completo y no en una columna
 * porque son composiciones con foto, no una lista.
 *
 * La página solo ensambla; cada bloque vive en su propio componente.
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

  return (
    <>
      <Navbar />

      {/* pt alto: el navbar es fixed y sin esto le come el breadcrumb. */}
      <main className="mx-auto max-w-max px-[var(--pad-x)] pb-16 pt-28 md:pb-20 md:pt-32">
        <TrackView
          event={FUNNEL_EVENTS.viewTemplate}
          params={{ design: template.slug }}
        />

        <Link
          href="/#disenos"
          className="label-copy inline-flex items-center gap-1.5 transition-opacity hover:opacity-70"
        >
          <ArrowLeft size={14} weight={ICON_WEIGHT} aria-hidden="true" />
          Volver a diseños
        </Link>

        {/* Dos columnas desde 640px y no desde 768: en una ventana a media
            pantalla —o en un panel lateral— el md las apilaba y el detalle
            perdía justo lo que lo hace leer como ficha de producto, que es
            la evidencia al lado de la decisión. A 640 la columna queda en
            280px y el teléfono se achica con ella, porque su ancho es un
            porcentaje de la caja y no un valor fijo. */}
        <div className="mt-6 grid gap-10 sm:grid-cols-2 sm:items-center sm:gap-8 md:mt-8 lg:gap-16">
          <TemplateShowcase template={template} />

          <TemplateCompra template={template} />
        </div>

        <div className="mt-16 md:mt-24">
          <TemplateIncluye template={template} />
        </div>

        <TemplateExtras diseno={template.slug} />
      </main>

      <Footer />
    </>
  )
}
