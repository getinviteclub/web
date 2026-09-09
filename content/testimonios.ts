// ⚠️ OJO: "Marie y Nacho" y "Mati y Den" los escribí yo a pedido de Facu,
// NO son testimonios reales. El de "Mili y Gon" sí lo es. Reemplazalos por
// mensajes de clientes de verdad apenas los tengas: publicar reseñas
// inventadas como si fueran de clientes es un riesgo legal y reputacional
// concreto, no un detalle de copy.
//
// El carrusel se acomoda solo a la cantidad (con 1 no muestra flechas ni
// contador, eso ya lo resuelve el componente). Las 5 estrellas son fijas
// para todos.
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
      "Nos encantó de principio a fin. Elegimos el diseño y a los dos días ya la teníamos lista, sin tener que ocuparnos de nada.",
    author: "Marie y Nacho",
    role: "22.03.2026",
  },
  {
    quote:
      "La mandamos por WhatsApp y todos nos escribieron para preguntar quién nos la había hecho. Confirmar la asistencia fue clarísimo para nuestros invitados.",
    author: "Mati y Den",
    role: "14.02.2026",
  },
  {
    quote: "Súper profesionales, nos sacaron todas las dudas, quedó impecable.",
    author: "Mili y Gon",
    // TODO: confirmar la fecha — el mensaje original decía "05.09.206",
    // asumí que faltaba un dígito y era 2026.
    role: "05.09.2026",
  },
]
