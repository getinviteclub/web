import type { Ilustracion } from "@/components/ui/illustrations"

/**
 * Diseños en preparación. Se muestran al final de la colección, sin foto
 * y sin link: dicen que la colección crece, sin prometer una fecha.
 *
 * Cuando uno esté listo, se borra de acá y pasa a TEMPLATES
 * (content/templates.ts) con su número.
 *
 * TODO (Facu): nombres y palabras son propuesta. Si no se van a producir
 * pronto, vaciar la lista: un "próximamente" eterno resta más que suma.
 */
export const PROXIMAMENTE: {
  name: string
  keywords: readonly [string, string, string]
  ilustracion: Ilustracion
}[] = [
  { name: "Estancia", keywords: ["Campo", "Cálida", "Rústica"], ilustracion: "auto" },
  { name: "Riviera", keywords: ["Costera", "Fresca", "Mediterránea"], ilustracion: "copas" },
]
