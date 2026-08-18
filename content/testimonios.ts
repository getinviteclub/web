// Un solo testimonio real por ahora. Sumá más objetos al array a medida que
// lleguen; el carrusel de <Testimonios> se acomoda solo (con 1 no muestra
// flechas ni contador, eso ya lo resuelve el componente).
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
    quote: "Súper profesionales, nos sacaron todas las dudas, quedó impecable.",
    author: "Gonzalo Busquets",
    // TODO: confirmar la fecha — el mensaje original decía "05.09.206",
    // asumí que faltaba un dígito y era 2026.
    role: "05.09.2026",
  },
]
