import Link from "next/link"
import { notFound } from "next/navigation"
import { TEMPLATES } from "@/content/templates"
import { PRECIO_DESDE, PLAZO_ENTREGA } from "@/content/planes"
import { PhoneMockup } from "@/components/ui/phone-mockup"
import { WhatsappCta } from "@/components/ui/whatsapp-cta"
import { TrackView } from "@/components/ui/track-view"
import { StickyCta } from "@/components/ui/sticky-cta"
import { CTA_INLINE_ID } from "@/lib/dom-ids"
import { FUNNEL_EVENTS } from "@/lib/analytics"

export function generateStaticParams() {
  return TEMPLATES.map((template) => ({ slug: template.slug }))
}

export default function TemplatePage({
  params,
}: {
  params: { slug: string }
}) {
  const template = TEMPLATES.find((t) => t.slug === params.slug)
  if (!template) notFound()

  return (
    <main className="mx-auto max-w-max px-[var(--pad-x)] py-12 md:py-20">
      <Link
        href="/#disenos"
        className="label-copy transition-opacity hover:opacity-70"
      >
        ← Volver a diseños
      </Link>

      <div className="mt-8 grid gap-12 md:grid-cols-2 md:items-center md:gap-16">
        <div className="rounded-none bg-bone px-6 py-12">
          <PhoneMockup
            src={template.image}
            alt={`Invitación ${template.name}`}
            priority
          />
        </div>

        <div>
          <TrackView
            event={FUNNEL_EVENTS.viewTemplate}
            label={template.slug}
          />

          <h1
            className="font-display font-normal leading-[1.05]"
            style={{ fontSize: "clamp(32px, 5vw, 48px)" }}
          >
            {template.name}
          </h1>
          <p className="mt-4 text-lg desc-copy">
            {template.longDescription}
          </p>

          {/* El precio acá cierra el punto ciego #2 de la auditoría: el
              usuario llegaba al diseño que le gustaba y no encontraba
              cuánto salía, así que su única salida era WhatsApp. */}
          <div className="mt-8 flex flex-wrap items-baseline gap-x-3 gap-y-1 border-t border-border pt-6">
            <span className="font-display text-3xl font-normal">
              Desde {PRECIO_DESDE}
            </span>
            <Link
              href="/#planes"
              className="label-copy underline underline-offset-4 transition-opacity hover:opacity-60"
            >
              Ver qué incluye cada plan
            </Link>
          </div>
          <p className="note-copy mt-2">
            Cualquier diseño entra en cualquier plan · Lista en {PLAZO_ENTREGA}
          </p>

          <ul className="mt-8 flex flex-col gap-2.5 border-t border-border pt-6">
            {template.features.map((feature) => (
              <li
                key={feature}
                className="relative pl-6 text-muted-foreground before:absolute before:left-0 before:font-semibold before:text-ink before:content-['✓']"
              >
                {feature}
              </li>
            ))}
          </ul>

          <div id={CTA_INLINE_ID} className="mt-8">
            <WhatsappCta
              message={`Hola, me interesa el diseño ${template.name}`}
              trackLabel={template.slug}
              size="md"
            >
              Quiero este diseño
            </WhatsappCta>
          </div>
          <p className="note-copy mt-3">
            Te respondemos en el día · Sin compromiso
          </p>
        </div>
      </div>

      {/* Punto ciego #2 de la auditoría: acá está la máxima intención y
          el CTA de arriba ya quedó fuera de pantalla. */}
      <StickyCta
        nombre={template.name}
        precio={`Desde ${PRECIO_DESDE}`}
        message={`Hola, me interesa el diseño ${template.name}`}
        trackLabel={template.slug}
      />
    </main>
  )
}
