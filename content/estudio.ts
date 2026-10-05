import { FOTOS } from "@/content/fotos"

/**
 * Boda por boda: por qué el servicio es personalizado.
 *
 * DECISIÓN (Facu): no aparecen nombres ni fotos nuestras en ningún lado.
 * Lo que se cuenta es la forma de trabajar, no quiénes somos.
 */
export const ESTUDIO_CONTENT = {
  eyebrow: "Nuestra forma de trabajar",
  title: ["Trabajamos", "boda por boda."] as const,
  text: "No tomamos muchas por mes. A cada una le ponemos todo.",
  foto: FOTOS.mesas,
} as const
