import type { Ilustracion } from "@/components/ui/illustrations"

/**
 * Las secciones de la invitación: quince, todas incluidas, la misma lista
 * para todos los diseños. Se usan las que la boda necesite.
 *
 * Quince y no otro número: entran en tres filas exactas de cinco en
 * desktop. Si se suma o se saca una, revisar la grilla de <Secciones>.
 *
 * Textos de una línea: la ilustración y el nombre ya cuentan casi todo.
 * Prohibido en este archivo: "plan", "premium", "desbloqueá".
 */
export type Seccion = {
  id: string
  label: string
  text: string
  ilustracion: Ilustracion
}

export const INVITACION_CONTENT = {
  eyebrow: "Adentro de la invitación",
  title: "Todo lo que sus invitados necesitan, en un solo lugar.",
  secciones: [
    { id: "rsvp", label: "Confirmación de asistencia", text: "Confirman en un toque; ustedes ven la lista al día.", ilustracion: "sobre" },
    { id: "ubicacion", label: "Cómo llegar", text: "La dirección abre el mapa directo.", ilustracion: "mapa" },
    { id: "regalos", label: "Regalos", text: "Alias y CBU listos para copiar.", ilustracion: "regalo" },
    { id: "cronograma", label: "Cronograma", text: "Ceremonia, cena y fiesta, con horarios.", ilustracion: "reloj" },
    { id: "dress-code", label: "Dress code", text: "Qué ponerse, sin preguntas.", ilustracion: "mono" },
    { id: "cuenta-regresiva", label: "Cuenta regresiva", text: "Los días que faltan, en la portada.", ilustracion: "arena" },
    { id: "historia", label: "Nuestra historia", text: "Cómo empezó todo, con sus palabras.", ilustracion: "pluma" },
    { id: "galeria", label: "Galería", text: "Sus fotos, a pantalla completa.", ilustracion: "camara" },
    { id: "playlist", label: "Playlist", text: "Los invitados sugieren canciones.", ilustracion: "disco" },
    { id: "alojamiento", label: "Dónde alojarse", text: "Hoteles cerca, para quienes viajan.", ilustracion: "llave" },
    { id: "traslados", label: "Traslados", text: "Horarios y puntos de salida.", ilustracion: "auto" },
    { id: "calendario", label: "Agregar al calendario", text: "La fecha, directo en su agenda.", ilustracion: "calendario" },
    { id: "menu", label: "Menú", text: "Los pasos y las opciones especiales.", ilustracion: "menu" },
    { id: "faq", label: "Preguntas frecuentes", text: "Lo que todos preguntan, respondido.", ilustracion: "pregunta" },
    { id: "mensajes", label: "Mensajes para los novios", text: "Un libro de firmas digital.", ilustracion: "libro" },
  ] satisfies Seccion[],
} as const
