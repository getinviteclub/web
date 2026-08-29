// Un lugar: qué slug (getinviteclub.com/w/<slug>) corresponde a qué
// diseño y con qué contenido. "aura" es la demo pública del diseño
// (la que ve un visitante de la galería); cada cliente real es una
// entrada nueva acá, con su propio slug — nada de código nuevo.
//
// Sumar un cliente real:
//   1. content/wedding/aura/clientes/juan-y-juli.ts con sus datos
//      (mismo AuraContent que demo.ts)
//   2. sus fotos en public/images/wedding/aura-juan-y-juli/
//   3. una entrada acá: { design: "aura", content: JUAN_Y_JULI }
// getinviteclub.com/w/juan-y-juli queda funcionando.

import { AURA_DEMO } from "./aura/demo"
import type { AuraContent } from "./aura/types"

export type WeddingEntry = {
  design: "aura"
  content: AuraContent
}

export const WEDDING_REGISTRY: Record<string, WeddingEntry> = {
  aura: { design: "aura", content: AURA_DEMO },
}
