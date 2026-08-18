export type ProcesoVisual = "diseno" | "info" | "listo"

export const PROCESO_CONTENT = {
  eyebrow: "Cómo funciona",
  title: "Tu invitación lista en 3 pasos",
  subtitle:
    "Sin plataformas que aprender ni formularios largos. Nos escribís y nos encargamos de todo.",
  ctaText: "Empezar por WhatsApp",
  ctaMessage: "Hola, quiero empezar mi invitación",
  steps: [
    {
      number: "01",
      title: "Elegí tu diseño",
      text: "Explorá la colección y elegí el estilo que más les guste.",
      visual: "diseno" as ProcesoVisual,
    },
    {
      number: "02",
      title: "Compartinos la información",
      text: "Completá los datos de su casamiento y enviá las fotos que quieran incluir.",
      visual: "info" as ProcesoVisual,
    },
    {
      number: "03",
      title: "La dejamos lista",
      text: "Adaptamos el diseño elegido con su información y se las entregamos listas para compartir.",
      visual: "listo" as ProcesoVisual,
    },
  ],
} as const
