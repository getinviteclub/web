// TODO: revisar que cada ítem corresponda a algo que hoy realmente se entrega.
// Salieron de las features listadas en content/planes.ts.

/** Clave del visual que se dibuja a la derecha (ver components/ui/feature-visual.tsx). */
export type FeatureVisual =
  | "confirmacion"
  | "mapa"
  | "regalos"
  | "informacion"
  | "calendario"
  | "dresscode"
  | "galeria"
  | "playlist"
  | "faq"

export const INTEGRACIONES_CONTENT = {
  eyebrow: "Sin apps que descargar",
  title: "Funciona con lo que tus invitados ya usan",
  subtitle:
    "Desde la invitación hasta la confirmación de asistencia, toda la información de su casamiento disponible desde un solo link.",

  featuresLabel: "¿Qué puede hacer mi invitación?",
  features: [
    {
      id: "confirmacion" as FeatureVisual,
      label: "Confirmación de asistencia",
      text: "Restricciones alimentarias, cómo viajan, un formulario y una planilla con los datos de cada invitado.",
    },
    {
      id: "mapa" as FeatureVisual,
      label: "Ubicación",
      text: "Un toque y se abre el mapa con la dirección cargada.",
    },
    {
      id: "regalos" as FeatureVisual,
      label: "Regalos",
      text: "Alias y CBU a la vista, listos para copiar y pegar.",
    },
    {
      id: "informacion" as FeatureVisual,
      label: "Información del evento",
      text: "Estacionamiento, cómo llegar, accesos y todo lo que necesiten saber.",
    },
    {
      id: "calendario" as FeatureVisual,
      label: "Agregar al calendario",
      text: "Se guarda en el calendario del celular con un toque.",
    },
    {
      id: "dresscode" as FeatureVisual,
      label: "Dress code",
      text: "Cómo vestirse para la fiesta, todo clarito.",
    },
    {
      id: "galeria" as FeatureVisual,
      label: "Galería de fotos",
      text: "Las fotos de ustedes, dentro de la misma invitación.",
    },
    {
      id: "playlist" as FeatureVisual,
      label: "Playlist",
      text: "Sugerí las canciones para festejar juntos.",
    },
    {
      id: "faq" as FeatureVisual,
      label: "Preguntas frecuentes",
      text: "Dudas, consultas y toda la ayuda que puedan necesitar.",
    },
  ],
} as const
