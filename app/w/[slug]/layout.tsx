import { WEDDING_REGISTRY } from "@/content/wedding/registry"
import { AuraShell } from "@/components/wedding/aura/AuraShell"
import { StudioShell } from "@/components/wedding/studio/StudioShell"
import { NocturnaShell } from "@/components/wedding/nocturna/NocturnaShell"

/**
 * Layout de /w/[slug]. Cada diseño trae su propia identidad (fuentes,
 * colores, CSS) en un "shell", aislado del sitio de marketing: este
 * layout solo elige cuál según el diseño del slug.
 *
 * El título/descripción de cada página se arma en page.tsx
 * (generateMetadata) — cambia por cliente.
 */
export default function WeddingLayout({
  children,
  params,
}: {
  children: React.ReactNode
  params: { slug: string }
}) {
  const design = WEDDING_REGISTRY[params.slug]?.design

  if (design === "studio") return <StudioShell>{children}</StudioShell>
  if (design === "nocturna") return <NocturnaShell>{children}</NocturnaShell>
  return <AuraShell>{children}</AuraShell>
}
