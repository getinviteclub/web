/**
 * ⚠️ PLACEHOLDERS — NO PUBLICAR ASÍ.
 *
 * Todas estas reseñas están inventadas (a pedido de Facu, para maquetar)
 * salvo la de "Mili y Gon", que es real. Publicar reseñas inventadas como
 * si fueran de clientes es un riesgo legal (Ley de Defensa del Consumidor,
 * publicidad engañosa) y reputacional concreto. Reemplazarlas por mensajes
 * reales —con permiso— antes de que esta versión salga a producción, o
 * dejar solo las reales.
 *
 * Seis en el muro (dos filas exactas de tres) + una destacada. Si se
 * suma una, sumar de a tres.
 *
 * `diseno` es el slug del diseño que usaron: el detalle de cada diseño
 * muestra primero las reseñas de ese diseño.
 */
export type Testimonio = {
  quote: string
  author: string
  /** Fecha del casamiento, "dd.mm.aaaa". */
  fecha: string
  lugar?: string
  diseno?: string
  /** true = la que se destaca en grande. Una sola. */
  destacado?: boolean
}

export const TESTIMONIOS_CONTENT = {
  eyebrow: "Reseñas",
  title: "Lo que nos escriben las parejas.",
} as const

export const TESTIMONIOS: Testimonio[] = [
  {
    quote:
      "Teníamos mil cosas en la cabeza y la invitación fue lo único de lo que no tuvimos que ocuparnos. Quedó exactamente como la soñamos.",
    author: "Cami y Juan",
    fecha: "18.10.2025",
    lugar: "Pilar",
    diseno: "nocturna",
    destacado: true,
  },
  {
    quote: "Súper profesionales, nos sacaron todas las dudas, quedó impecable.",
    author: "Mili y Gon",
    fecha: "05.09.2026",
    diseno: "aura",
  },
  {
    quote:
      "La mandamos por WhatsApp y todos nos preguntaron quién nos la había hecho. Mi abuela confirmó sola, sin llamarme.",
    author: "Marie y Nacho",
    fecha: "22.03.2026",
    lugar: "Mendoza",
    diseno: "cielo",
  },
  {
    quote:
      "Lo mejor fue la planilla de confirmaciones: se la pasamos directo al salón con las restricciones de cada uno.",
    author: "Sofi y Tomás",
    fecha: "07.12.2025",
    lugar: "Montevideo",
    diseno: "studio",
  },
  {
    quote: "Parecía una invitación de revista. Y nos respondían a cualquier hora, siempre la misma persona.",
    author: "Lu y Fede",
    fecha: "14.02.2026",
    lugar: "Córdoba",
    diseno: "nocturna",
  },
  {
    quote:
      "Nos casamos en una estancia y la mitad de los invitados viajaba. La sección de cómo llegar y alojamiento nos ahorró cien mensajes.",
    author: "Valen y Pato",
    fecha: "29.11.2025",
    lugar: "San Antonio de Areco",
    diseno: "aura",
  },
  {
    quote: "Elegimos Studio porque somos de lo simple, y quedó exactamente así: simple y hermosa.",
    author: "Agus y Male",
    fecha: "01.11.2025",
    lugar: "Buenos Aires",
    diseno: "studio",
  },
]
