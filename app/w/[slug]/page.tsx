import type { Metadata } from "next"
import { notFound } from "next/navigation"
import { WEDDING_REGISTRY } from "@/content/wedding/registry"
import { AuraTemplate } from "@/components/wedding/aura/AuraTemplate"

// Fase 2 — motor de bodas. Un slug, una entrada en el registry: busca
// qué diseño le corresponde y lo renderiza con su contenido. Sumar un
// cliente nuevo es una entrada en content/wedding/registry.ts, no una
// ruta nueva acá.
//
// Hoy solo existe el diseño "aura" — cuando haya un segundo diseño,
// este switch crece un caso, nada más.

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
    default:
      notFound()
  }
}
