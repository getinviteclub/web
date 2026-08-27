// Las features agrupadas en 3 clusters narrativos (auditoría, Bloque 4):
// el feature es la prueba, el beneficio es el argumento. Antes era una lista
// plana de 14 ítems donde el usuario tenía que deducir solo para qué le sirven.
//
// Los títulos y bajadas de cada cluster salen textuales de la PPT.
//
// Sobre el cluster "Que confirmen": la PPT lo lista con 4 features.
// "Exportar a Excel" sí existe (Facu confirmó que los invitados se bajan en
// planilla) y por eso ahora es una feature propia: estaba enterrada dentro
// del texto de RSVP, donde no se leía como beneficio. "Recordatorios" queda
// omitido a pedido de Facu: no es algo que el producto haga hoy.
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

export type ClusterId = "llegar" | "confirmar" | "disfrutar"

export const INTEGRACIONES_CONTENT = {
  eyebrow: "Sin apps que descargar",
  title: "Funciona con lo que tus invitados ya usan",
  subtitle:
    "Desde la invitación hasta la confirmación de asistencia, toda la información de su casamiento disponible desde un solo link.",
  /** Solo el título: la bajada de cada cluster repetía lo que ya dicen las
   *  features de abajo, así que se sacó. Los títulos quedan como separadores
   *  narrativos, que es lo que la auditoría (Bloque 4) buscaba. */
  clusters: [
    {
      id: "llegar" as ClusterId,
      title: "Que lleguen bien",
    },
    {
      id: "confirmar" as ClusterId,
      title: "Que confirmen",
    },
    {
      id: "disfrutar" as ClusterId,
      title: "Que la disfruten antes",
    },
  ],
  /** Cierre: no es una feature, es una invitación a preguntar. */
  consulta: "¿Necesitan algo que no está en la lista? Consultanos y vemos cómo resolverlo.",
  features: [
    {
      id: "confirmacion" as FeatureId,
      cluster: "confirmar" as ClusterId,
      label: "Confirmación de asistencia",
      text: "Restricciones alimentarias, cómo viajan y todo lo que necesiten contarte, en un solo formulario.",
      image: MOCKUPS.clasica,
    },
    {
      id: "exportar" as FeatureId,
      cluster: "confirmar" as ClusterId,
      label: "Exportar la lista",
      text: "Descargás a los confirmados en una planilla de Excel, lista para pasarle al salón.",
      image: MOCKUPS.manuscrita,
    },
    {
      id: "mapa" as FeatureId,
      cluster: "llegar" as ClusterId,
      label: "Ubicación",
      text: "Un toque y se abre el mapa con la dirección cargada.",
      image: MOCKUPS.manuscrita,
    },
    {
      id: "regalos" as FeatureId,
      cluster: "disfrutar" as ClusterId,
      label: "Regalos",
      text: "Alias y CBU a la vista, listos para copiar y pegar.",
      image: MOCKUPS.editorial,
    },
    {
      id: "informacion" as FeatureId,
      cluster: "llegar" as ClusterId,
      label: "Información del evento",
      text: "Estacionamiento, cómo llegar, accesos y todo lo que necesiten saber.",
      image: MOCKUPS.clasica,
    },
    {
      id: "calendario" as FeatureId,
      cluster: "llegar" as ClusterId,
      label: "Agregar al calendario",
      text: "Se guarda en el calendario del celular con un toque.",
      image: MOCKUPS.manuscrita,
    },
    {
      id: "dresscode" as FeatureId,
      cluster: "llegar" as ClusterId,
      label: "Dress code",
      text: "Cómo vestirse para la fiesta, todo clarito.",
      image: MOCKUPS.editorial,
    },
    {
      id: "galeria" as FeatureId,
      cluster: "disfrutar" as ClusterId,
      label: "Galería de fotos",
      text: "Las fotos de ustedes, dentro de la misma invitación.",
      image: MOCKUPS.clasica,
    },
    {
      id: "playlist" as FeatureId,
      cluster: "disfrutar" as ClusterId,
      label: "Playlist",
      text: "Sugerí las canciones para festejar juntos.",
      image: MOCKUPS.manuscrita,
    },
    {
      id: "faq" as FeatureId,
      cluster: "confirmar" as ClusterId,
      label: "Preguntas frecuentes",
      text: "Dudas, consultas y toda la ayuda que puedan necesitar.",
      image: MOCKUPS.editorial,
    },
    {
      id: "historia" as FeatureId,
      cluster: "disfrutar" as ClusterId,
      label: "Nuestra historia",
      text: "Tres fotos y el texto de cómo se conocieron, contado por ustedes.",
      image: MOCKUPS.clasica,
    },
    {
      id: "countdown" as FeatureId,
      cluster: "disfrutar" as ClusterId,
      label: "Countdown",
      text: "Los días, horas y minutos que faltan para el gran día, en vivo.",
      image: MOCKUPS.manuscrita,
    },
    {
      id: "cronograma" as FeatureId,
      cluster: "llegar" as ClusterId,
      label: "Cronograma de la fiesta",
      text: "Ceremonia, recepción y after: los horarios del día, todo en un lugar.",
      image: MOCKUPS.editorial,
    },
    {
      id: "alojamiento" as FeatureId,
      cluster: "llegar" as ClusterId,
      label: "Dónde alojarse",
      text: "Hoteles cerca del lugar, con las tarifas especiales si hay convenio.",
      image: MOCKUPS.clasica,
    },
  ],
} as const
