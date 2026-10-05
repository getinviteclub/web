// Contenido de la demo pública del diseño "Studio" — Martina & Joaquín.
// Pareja, fechas, cuentas y lugares FICTICIOS: es la boda de muestra que
// ven los visitantes de la colección. No es un cliente real.
//
// Misma forma y mismos largos que la demo de Aura (WeddingContent): a
// cada pareja se le pide siempre lo mismo, elija el diseño que elija.
// Las fotos son placeholders de Unsplash (licencia libre).

import type { WeddingContent } from "../types"
import { STUDIO_GALLERY, STUDIO_STAYS, STUDIO_BANK, STUDIO_FAQ } from "./demo-listas"

const u = (id: string) => `https://images.unsplash.com/photo-${id}?auto=format&fit=crop&w=1400&q=75`

export const STUDIO_DEMO: WeddingContent = {
  metaTitle: "Martina & Joaquín — 20.03.2027 | ¡Están invitados!",
  metaDescription:
    "Nos casamos el 20 de marzo de 2027 en Casona del Río, Tigre. Queremos que estén.",
  heroImage: u("1575425909772-5c831442e679"),

  couple: {
    bride: "Martina",
    brideLastName: "Ferreyra",
    groom: "Joaquín",
    groomLastName: "Ledesma",
    monogram: "M&J",
    tagline: "Una fiesta larga, con la gente que más queremos",
    quoteEditorial:
      "Nos conocimos riéndonos de lo mismo y todavía no paramos. Esta vez queremos hacerlo con todos ustedes cerca.",
    welcomeMessage:
      "Vamos a celebrar el día más importante de nuestras vidas y no nos imaginamos hacerlo sin las personas que nos acompañaron hasta acá.",
  },
  date: {
    heroDay: "20 de Marzo",
    heroYear: "2027",
    displayDate: "20 de marzo de 2027",
    shortDate: "20.03.2027",
    dayOfWeek: "Sábado",
    time: "17:00 hs",
    isoTargetDate: "2027-03-20T17:00:00-03:00",
    calendarEvent: {
      title: "Casamiento de Martina & Joaquín",
      description: "Casamiento de Martina Ferreyra y Joaquín Ledesma. Dress code: elegante de verano.",
      location: "Casona del Río, Paseo Victorica 1200, Tigre, Buenos Aires, Argentina",
      startDate: "20270320T200000Z",
      endDate: "20270321T080000Z",
    },
  },
  location: {
    venueName: "Casona del Río",
    estateSubtitle: "Frente al río Luján",
    city: "Tigre",
    province: "Buenos Aires",
    country: "Argentina",
    address: "Paseo Victorica 1200, Tigre",
    fullAddress: "Casona del Río, Paseo Victorica 1200, Tigre, Buenos Aires",
    mapsUrl: "https://maps.google.com/?q=Paseo+Victorica+1200+Tigre+Buenos+Aires",
    coordinates: "34°25'02.0\"S 58°34'40.0\"W",
  },
  dressCode: {
    title: "Elegante de verano",
    subtitle: "Liviano, fresco y con color",
    description:
      "Trajes claros o de lino, vestidos largos o midi en colores vivos. La ceremonia es en el jardín: dejen los tacos finos para la pista y traigan algo para la noche junto al río.",
    palettes: [
      { name: "Rojo tomate", hex: "#C2321F" },
      { name: "Terracota", hex: "#B5643C" },
      { name: "Durazno", hex: "#E9B48F" },
      { name: "Oliva", hex: "#6E7347" },
      { name: "Arena", hex: "#D9CBB2" },
    ],
  },
  shuttle: {
    available: true,
    pickupPoint: "Plaza Italia, Palermo",
    pickupTime: "15:45 hs",
    returnTimes: ["01:30 hs", "04:00 hs"],
    note: "Va a haber combis de ida y vuelta desde Capital para que nadie tenga que manejar.",
  },

  story: [
    {
      year: "2018",
      date: "9 de marzo",
      title: "Un cumple ajeno",
      subtitle: "Una terraza en Palermo",
      description:
        "Ninguno de los dos conocía al cumpleañero. Terminamos hablando toda la noche en un rincón de la terraza, pidiendo la misma canción tres veces y prometiendo un café que tardó dos semanas en llegar.",
      image: u("1697929617839-7074dfec445c"),
      imageAlt: "Martina y Joaquín riéndose entre amigos",
      caption: "Palermo, Buenos Aires",
      aspect: "portrait",
    },
    {
      year: "2021",
      date: "14 de agosto",
      title: "La primera casa",
      subtitle: "Un PH con patio",
      description:
        "Con un sillón prestado, dos plantas y una cafetera que todavía funciona, armamos nuestra primera casa. Ahí aprendimos que cocinar juntos es la mejor forma de discutir y de amigarse.",
      image: u("1484849457281-191e439a0431"),
      imageAlt: "Martina sonriendo en un día de sol",
      caption: "Villa Crespo",
      aspect: "landscape",
    },
    {
      year: "2026",
      date: "2 de enero",
      title: "La pregunta",
      subtitle: "Un muelle en el Delta",
      description:
        "Un atardecer en el río, un bote que casi se da vuelta y un anillo que por suerte no se cayó al agua. Dijimos que sí entre risas y supimos enseguida dónde queríamos festejarlo.",
      image: u("1654994088609-ffd4c1d2b605"),
      imageAlt: "Martina y Joaquín abrazados bajo el velo",
      caption: "Delta del Tigre",
      aspect: "portrait",
    },
  ],

  schedule: [
    { time: "17:00", title: "Llegada & bienvenida", scriptLabel: "hola, hola", location: "El jardín", description: "Limonada, espumante y música tranquila mientras llegan todos.", iconName: "Wine" },
    { time: "17:45", title: "Ceremonia", scriptLabel: "el sí", location: "Bajo el sauce", description: "Una ceremonia corta, con votos escritos por nosotros y muchos pañuelos.", iconName: "Heart" },
    { time: "18:30", title: "Cóctel al atardecer", scriptLabel: "hora dorada", location: "La galería", description: "Tragos de autor, cosas ricas para picar y fotos frente al río.", iconName: "Camera" },
    { time: "20:30", title: "Cena", scriptLabel: "a la mesa", location: "El salón", description: "Menú de pasos con productos de estación y brindis de los amigos.", iconName: "Utensils" },
    { time: "23:00", title: "Fiesta", scriptLabel: "¡a bailar!", location: "La pista", description: "Banda en vivo, DJ y una barra que no cierra hasta tarde.", iconName: "Sparkles" },
    { time: "03:00", title: "Fin de fiesta", scriptLabel: "el recargue", location: "El jardín", description: "Pizzas, café y las últimas canciones bajo las guirnaldas.", iconName: "Moon" },
  ],

  gallery: STUDIO_GALLERY,
  accommodation: STUDIO_STAYS,
  bankAccounts: STUDIO_BANK,
  faq: STUDIO_FAQ,
  rsvpDeadline: "15 de febrero de 2027",
}
