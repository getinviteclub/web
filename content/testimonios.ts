// TODO: reemplazar por los testimonios reales de las 2 bodas.
// `avatar` es opcional: si no hay foto, se muestran las iniciales del nombre.
// Foto ideal: 200×200 px, cuadrada, cara centrada.
export type Testimonio = {
  quote: string
  author: string
  role: string
  avatar?: string
}

export const TESTIMONIOS: Testimonio[] = [
  {
    quote:
      "[Testimonio pendiente — 2 o 3 líneas en palabras del cliente sobre cómo fue trabajar con ustedes y qué resolvió la invitación.]",
    author: "[Nombre y Apellido]",
    role: "[Boda mes año]",
  },
  {
    quote:
      "[Segundo testimonio pendiente — corto, idealmente mencionando el RSVP o lo fácil que fue compartirlo por WhatsApp.]",
    author: "[Nombre y Apellido]",
    role: "[Boda mes año]",
  },
  {
    quote:
      "[Tercer testimonio pendiente — si solo tenés dos, borrá este objeto del array y la grilla se acomoda sola.]",
    author: "[Nombre y Apellido]",
    role: "[Boda mes año]",
  },
]
