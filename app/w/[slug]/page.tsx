import type { Metadata } from "next"
import { notFound } from "next/navigation"
import { WEDDING_REGISTRY } from "@/content/wedding/registry"
import { AuraTemplate } from "@/components/wedding/aura/AuraTemplate"
import { StudioTemplate } from "@/components/wedding/studio/StudioTemplate"
import { NocturnaTemplate } from "@/components/wedding/nocturna/NocturnaTemplate"

// Fase 2 — motor de bodas. Un slug, una entrada en el registry: busca
// qué diseño le corresponde y lo renderiza con su contenido. Sumar un
// cliente nuevo es una entrada en content/wedding/registry.ts, no una
// ruta nueva acá.
//
// Un caso por diseño: sumar un diseño nuevo es un caso más acá y un
// shell en layout.tsx.

type Props = { params: { slug: string } }

export function generateMetadata({ params }: Props): Metadata {
  const entry = WEDDING_REGISTRY[params.slug]
  if (!entry) return {}
  return {
    title: entry.content.metaTitle,
    description: entry.content.metaDescription,
  }
}

export default function WeddingPage({ params }: Props) {
  const entry = WEDDING_REGISTRY[params.slug]
  if (!entry) notFound()

  switch (entry.design) {
    case "aura":
      return <AuraTemplate content={entry.content} />
    case "studio":
      return <StudioTemplate content={entry.content} />
    case "nocturna":
      return <NocturnaTemplate content={entry.content} />
    default:
      notFound()
  }
}
