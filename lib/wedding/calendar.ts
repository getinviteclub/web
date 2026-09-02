import type { AuraContent } from "@/content/wedding/aura/types"

/**
 * Arma la URL de "agregar a Google Calendar" a partir del `calendarEvent`
 * de cualquier cliente. Genérico al diseño — no específico de Aura, así
 * que cuando exista un segundo diseño con el mismo tipo de evento, se
 * reusa desde acá en vez de reescribirlo.
 */
export function getGoogleCalendarUrl(event: AuraContent["date"]["calendarEvent"]): string {
  const baseUrl = "https://calendar.google.com/calendar/render?action=TEMPLATE"
  const text = encodeURIComponent(event.title)
  const details = encodeURIComponent(`${event.description}\n\nLugar: ${event.location}`)
  const location = encodeURIComponent(event.location)
  const dates = `${event.startDate}/${event.endDate}`

  return `${baseUrl}&text=${text}&dates=${dates}&details=${details}&location=${location}&sf=true&output=xml`
}
