// Un lugar: qué slug (getinviteclub.com/w/<slug>) corresponde a qué
// diseño y con qué contenido. "aura", "studio" y "nocturna" son las demos públicas de
// cada diseño (las que ve un visitante de la colección); cada cliente real
// es una entrada nueva acá, con su propio slug — nada de código nuevo.
//
// Sumar un cliente real:
//   1. content/wedding/<diseño>/clientes/juan-y-juli.ts con sus datos
//      (un WeddingContent, igual que las demos)
//   2. sus fotos en public/images/wedding/<diseño>-juan-y-juli/
//   3. una entrada acá: { design: "studio", content: JUAN_Y_JULI }
// getinviteclub.com/w/juan-y-juli queda funcionando.

import { AURA_DEMO } from "./aura/demo"
import { STUDIO_DEMO } from "./studio/demo"
import { NOCTURNA_DEMO } from "./nocturna/demo"
import type { WeddingContent } from "./types"

export type WeddingDesign = "aura" | "studio" | "nocturna"

export type WeddingEntry = {
  design: WeddingDesign
  content: WeddingContent
}

export const WEDDING_REGISTRY: Record<string, WeddingEntry> = {
  aura: { design: "aura", content: AURA_DEMO },
  studio: { design: "studio", content: STUDIO_DEMO },
  nocturna: { design: "nocturna", content: NOCTURNA_DEMO },
}
