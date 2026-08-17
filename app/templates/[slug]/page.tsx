import Link from "next/link"
import { notFound } from "next/navigation"
import { TEMPLATES } from "@/content/templates"
import { PhoneMockup } from "@/components/ui/phone-mockup"
import { WhatsappCta } from "@/components/ui/whatsapp-cta"

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
          <h1
            className="font-display font-normal leading-[1.05]"
            style={{ fontSize: "clamp(32px, 5vw, 48px)" }}
          >
            {template.name}
          </h1>
          <p className="mt-4 text-lg text-muted-foreground">
            {template.longDescription}
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

          <WhatsappCta
            message={`Hola, me interesa el diseño ${template.name}`}
            size="md"
            className="mt-8"
          >
            Quiero este diseño
          </WhatsappCta>
          <p className="note-copy mt-3">
            Te respondemos en el día · Sin compromiso
          </p>
        </div>
      </div>
    </main>
  )
}
