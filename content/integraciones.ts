// Lista de features de la invitación.
//
// La auditoría (Bloque 4) proponía agruparlas en 3 clusters narrativos
// ("Que lleguen bien", "Que confirmen", "Que la disfruten antes"). Se probó
// y Facu los descartó: son categorías, no funcionalidades, y no aportaban
// nada sobre la lista. Vuelve a ser plana a propósito — no reponerlos sin
// acordarlo.
//
// "Exportar la lista" sí quedó como feature propia: estaba enterrada dentro
// del texto de RSVP y es un beneficio concreto.
//
// `image`: hoy son las 3 capturas reales que ya usamos en <Galeria> y en el
// detalle de cada template (content/mockups.ts), repetidas en rotación —
// placeholder a propósito hasta tener una captura por feature.

import { MOCKUPS } from "@/content/mockups"

export type FeatureId =
  | "confirmacion"
  | "exportar"
  | "mapa"
  | "regalos"
  | "informacion"
  | "calendario"
  | "dresscode"
  | "galeria"
  | "playlist"
  | "faq"
  | "historia"
  | "countdown"
  | "cronograma"
  | "alojamiento"

export const INTEGRACIONES_CONTENT = {
  eyebrow: "Sin apps que descargar",
  title: "Funciona con lo que tus invitados ya usan",
  subtitle:
    "Desde la invitación hasta la confirmación de asistencia, toda la información de su casamiento disponible desde un solo link.",
  /** Cierre: no es una feature, es una invitación a preguntar. */
  consulta: "¿Necesitan algo que no está en la lista? Consultanos y vemos cómo resolverlo.",
  features: [
    {
      id: "confirmacion" as FeatureId,
      label: "Confirmación de asistencia",
      text: "Restricciones alimentarias, cómo viajan y todo lo que necesiten contarte, en un solo formulario.",
      image: MOCKUPS.clasica,
    },
    {
      id: "exportar" as FeatureId,
      label: "Exportar la lista",
      text: "Descargás a los confirmados en una planilla de Excel, lista para pasarle al salón.",
      image: MOCKUPS.manuscrita,
    },
    {
      id: "mapa" as FeatureId,
      label: "Ubicación",
      text: "Un toque y se abre el mapa con la dirección cargada.",
      image: MOCKUPS.manuscrita,
    },
    {
      id: "regalos" as FeatureId,
      label: "Regalos",
      text: "Alias y CBU a la vista, listos para copiar y pegar.",
      image: MOCKUPS.editorial,
    },
    {
      id: "informacion" as FeatureId,
      label: "Información del evento",
      text: "Estacionamiento, cómo llegar, accesos y todo lo que necesiten saber.",
      image: MOCKUPS.clasica,
    },
    {
      id: "calendario" as FeatureId,
      label: "Agregar al calendario",
      text: "Se guarda en el calendario del celular con un toque.",
      image: MOCKUPS.manuscrita,
    },
    {
      id: "dresscode" as FeatureId,
      label: "Dress code",
      text: "Cómo vestirse para la fiesta, todo clarito.",
      image: MOCKUPS.editorial,
    },
    {
      id: "galeria" as FeatureId,
      label: "Galería de fotos",
      text: "Las fotos de ustedes, dentro de la misma invitación.",
      image: MOCKUPS.clasica,
    },
    {
      id: "playlist" as FeatureId,
      label: "Playlist",
      text: "Sugerí las canciones para festejar juntos.",
      image: MOCKUPS.manuscrita,
    },
    {
      id: "faq" as FeatureId,
      label: "Preguntas frecuentes",
      text: "Dudas, consultas y toda la ayuda que puedan necesitar.",
      image: MOCKUPS.editorial,
    },
    {
      id: "historia" as FeatureId,
      label: "Nuestra historia",
      text: "Tres fotos y el texto de cómo se conocieron, contado por ustedes.",
      image: MOCKUPS.clasica,
    },
    {
      id: "countdown" as FeatureId,
      label: "Countdown",
      text: "Los días, horas y minutos que faltan para el gran día, en vivo.",
      image: MOCKUPS.manuscrita,
    },
    {
      id: "cronograma" as FeatureId,
      label: "Cronograma de la fiesta",
      text: "Ceremonia, recepción y after: los horarios del día, todo en un lugar.",
      image: MOCKUPS.editorial,
    },
    {
      id: "alojamiento" as FeatureId,
      label: "Dónde alojarse",
      text: "Hoteles cerca del lugar, con las tarifas especiales si hay convenio.",
      image: MOCKUPS.clasica,
    },
  ],
} as const
