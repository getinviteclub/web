/**
 * La franja de cifras (prueba social en números).
 *
 * ⚠️ PLACEHOLDERS: "+120 parejas" y "4,9/5" son inventados para maquetar.
 * Poner los números reales antes de publicar —o sacarlos—: una cifra
 * falsa es publicidad engañosa. "15" y "2" son condiciones del servicio.
 */
export const CIFRAS = [
  { id: "parejas", valor: "+120", label: "Parejas que ya la enviaron" },
  { id: "resenas", valor: "4,9/5", label: "Promedio de reseñas" },
  { id: "secciones", valor: "15", label: "Secciones incluidas" },
  { id: "rondas", valor: "2", label: "Rondas de cambios" },
] as const

export function cifra(id: (typeof CIFRAS)[number]["id"]) {
  return CIFRAS.find((c) => c.id === id)!
}
