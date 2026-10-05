import type { Metadata } from "next"
import Link from "next/link"
import { notFound } from "next/navigation"
import { TEMPLATES, getTemplate } from "@/content/templates"
import { FAQS } from "@/content/faqs"
import { DETALLE_CONTENT as D } from "@/content/detalle"
import { Navbar } from "@/components/marketing/Navbar"
import { Footer } from "@/components/marketing/Footer"
import { Cifras } from "@/components/marketing/Cifras"
import { Secciones } from "@/components/marketing/Secciones"
import { Realizadas } from "@/components/marketing/Realizadas"
import { ComoTrabajamos } from "@/components/marketing/ComoTrabajamos"
import { Testimonios } from "@/components/marketing/Testimonios"
import { Faqs } from "@/components/marketing/Faqs"
import { ConsultaLinea } from "@/components/marketing/ConsultaLinea"
import { TemplateGaleria } from "@/components/templates/TemplateGaleria"
import { TemplateCompra } from "@/components/templates/TemplateCompra"
import { TemplateIdeal } from "@/components/templates/TemplateIdeal"
import { TemplateDemo } from "@/components/templates/TemplateDemo"
import { TemplateExtras } from "@/components/templates/TemplateExtras"
import { TemplateRelacionados } from "@/components/templates/TemplateRelacionados"
import { TemplateBarraMovil } from "@/components/templates/TemplateBarraMovil"
import { TrackView } from "@/components/ui/track-view"
import { FUNNEL_EVENTS } from "@/lib/analytics"

/**
 * El detalle de un diseño: la pantalla donde se decide.
 *
 * Estructura de ficha de producto (referencia: Glo Creative): arriba la
 * decisión completa —galería a la izquierda, todo lo necesario para
 * decidir a la derecha—, y abajo, en orden, la respuesta a cada objeción
 * que aparece antes de escribir:
 *
 *   ¿es para nosotros?      → TemplateIdeal
 *   ¿qué trae?              → Secciones
 *   ¿cómo se ve de verdad?  → TemplateDemo
 *   ¿qué más se puede?      → TemplateExtras
 *   ¿cuánto trabajo nos da? → ComoTrabajamos
 *   ¿es confiable?          → Testimonios, Realizadas
 *   lo que queda            → ConsultaLinea, Faqs
 *
 * La página solo ensambla; cada bloque vive en su propio componente.
 */

export function generateStaticParams() {
  return TEMPLATES.map((template) => ({ slug: template.slug }))
}

export function generateMetadata({ params }: { params: { slug: string } }): Metadata {
  const template = getTemplate(params.slug)
  if (!template) return {}
  return {
    title: `${template.name} — Invitación digital de casamiento | Invite Club`,
    description: template.longDescription,
  }
}

export default function TemplatePage({ params }: { params: { slug: string } }) {
  const template = getTemplate(params.slug)
  if (!template) notFound()

  return (
    <>
      <Navbar />

      <main className="pt-[104px] md:pt-[112px]">
        <TrackView event={FUNNEL_EVENTS.viewTemplate} params={{ design: template.slug }} />

        <div className="mx-auto max-w-max px-[var(--pad-x)] pb-16 pt-8 md:pb-24 md:pt-10">
          <nav aria-label="Ruta" className="label-copy flex items-center gap-2 text-muted-foreground">
            <Link href="/#coleccion" className="hover:text-ink">
              {D.volver}
            </Link>
            <span aria-hidden="true">/</span>
            <span className="text-ink">{template.name}</span>
          </nav>

          <div className="mt-8 grid gap-10 md:grid-cols-12 md:gap-10 lg:gap-16">
            <div className="md:col-span-6 xl:col-span-7">
              <div className="md:sticky md:top-28">
                <TemplateGaleria template={template} />
              </div>
            </div>
            <div className="md:col-span-6 xl:col-span-5">
              <TemplateCompra template={template} />
            </div>
          </div>
        </div>

        <Cifras />
        <TemplateIdeal template={template} />
        <Secciones title={D.incluyeTitle} />
        <TemplateDemo template={template} />
        <TemplateExtras diseno={template.slug} />
        <ComoTrabajamos />
        <Testimonios diseno={template.slug} />
        <Realizadas diseno={template.slug} title={D.realizadasTitle} />

        <div className="mx-auto max-w-max px-[var(--pad-x)] pt-16 md:pt-20">
          <ConsultaLinea />
        </div>

        <Faqs items={FAQS.filter((f) => f.enDetalle)} />
        <TemplateRelacionados actual={template.slug} />
      </main>

      <Footer />
      <TemplateBarraMovil template={template} />
    </>
  )
}
