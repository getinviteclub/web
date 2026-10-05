import type { Ilustracion } from "@/components/ui/illustrations"

/**
 * Lo que se puede sumar a la invitación. Se muestra en el detalle de cada
 * diseño, sin precios (se cotizan por WhatsApp).
 *
 * La invitación se vende completa: esto no es lo que "le falta", es lo
 * que la acompaña el resto de la boda — antes (save the date), durante
 * (QR, mesas, papelería) y después (agradecimiento). Todo a juego con el
 * diseño elegido.
 *
 * Seis: dos filas exactas de tres en la grilla. Si se saca uno, sacar
 * otro o dejar tres.
 *
 * TODO (Facu): confirmar que todos se pueden producir hoy antes de
 * publicarlos.
 */
export const EXTRAS_CONTENT = {
  eyebrow: "Para sumar",
  title: "Si quieren sumar algo más.",
  ctaText: "Consultar",
} as const

export const EXTRAS: { id: string; name: string; text: string; ilustracion: Ilustracion }[] = [
  {
    id: "save-the-date",
    name: "Save the date",
    text: "Una pieza a juego para avisar la fecha antes de invitar.",
    ilustracion: "calendario",
  },
  {
    id: "qr",
    name: "Tarjetas con QR",
    text: "Para las mesas o la lista de regalos: escanean y llegan a la invitación.",
    ilustracion: "qr",
  },
  {
    id: "mesas",
    name: "Ubicación de mesas",
    text: "Cada invitado busca su nombre y encuentra su mesa.",
    ilustracion: "mesas",
  },
  {
    id: "papeleria",
    name: "Papelería para imprimir",
    text: "Menú, carteles y señalética con el mismo diseño.",
    ilustracion: "menu",
  },
  {
    id: "monograma",
    name: "Monograma",
    text: "Sus iniciales dibujadas, para usar en toda la boda.",
    ilustracion: "pluma",
  },
  {
    id: "agradecimiento",
    name: "Agradecimiento",
    text: "Una pieza para después, con las fotos del día.",
    ilustracion: "sobre",
  },
]
