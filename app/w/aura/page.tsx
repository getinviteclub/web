import { HeroCover } from "@/components/wedding/aura/HeroCover"

// Fase 2 — motor de bodas. Esta es la primera instancia real: el
// contenido de "Aura" (ver content/wedding/aura.ts), portado del
// proyecto de Flor. Se arma sección por sección — hoy solo el Hero,
// el resto se suma a medida que se porta cada una.
export default function AuraPage() {
  return (
    <main>
      <HeroCover />
    </main>
  )
}
