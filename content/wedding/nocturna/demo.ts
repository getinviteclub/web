// Contenido de la demo pública del diseño "Nocturna" — Camila & Juan.
// Pareja, fechas, cuentas y lugares FICTICIOS: es la boda de muestra que
// ven los visitantes de la colección. No es un cliente real.
//
// Misma forma y mismos largos que las demos de Aura y Studio
// (WeddingContent).
//
// ⚠️ FOTOS DE PINTEREST — SOLO PARA MAQUETAR. Estilo 35 mm, analógico,
// movido, blanco y negro; Facu pidió usarlas para ver cómo queda el
// diseño. Tienen derechos de sus autores: se reemplazan por fotos propias
// antes de publicar (y se borra i.pinimg.com de next.config.mjs).
// Los hoteles siguen siendo de Unsplash (licencia libre).

import type { WeddingContent } from "../types"
import { NOCTURNA_GALLERY, NOCTURNA_STAYS, NOCTURNA_BANK, NOCTURNA_FAQ } from "./demo-listas"

/** Pin de Pinterest en resolución original (portada y escenas a lo ancho). */
const original = (path: string) => `https://i.pinimg.com/originals/${path}.jpg`
/** Pin de Pinterest a 736px (cuando el original no está disponible). */
const pin = (path: string) => `https://i.pinimg.com/736x/${path}.jpg`

export const NOCTURNA_DEMO: WeddingContent = {
  metaTitle: "Camila & Juan — 15.05.2027 | Una noche para nosotros",
  metaDescription:
    "Nos casamos el 15 de mayo de 2027 en Palacio Sans Souci. Una noche larga, y queremos que estén.",
  heroImage: original("3e/29/51/3e2951c6c877b669a76dbb1a6d1db6d0"),

  couple: {
    bride: "Camila",
    brideLastName: "Ortiz",
    groom: "Juan",
    groomLastName: "Mansilla",
    monogram: "C&J",
    tagline: "Una noche larga, con la gente que queremos",
    quoteEditorial:
      "Nos encontramos tarde, a la salida de un cine, y desde entonces todas nuestras mejores historias pasaron de noche.",
    welcomeMessage:
      "Después de años compartiendo noches, viajes y películas, decidimos casarnos. Queremos celebrarlo con quienes estuvieron en cada escena.",
  },
  date: {
    heroDay: "15 de Mayo",
    heroYear: "2027",
    displayDate: "15 de mayo de 2027",
    shortDate: "15.05.2027",
    dayOfWeek: "Sábado",
    time: "20:30 hs",
    isoTargetDate: "2027-05-15T20:30:00-03:00",
    calendarEvent: {
      title: "Casamiento de Camila & Juan",
      description: "Casamiento de Camila Ortiz y Juan Mansilla. Dress code: etiqueta, de noche.",
      location: "Palacio Sans Souci, Av. Alvear 1600, Victoria, Buenos Aires, Argentina",
      startDate: "20270515T233000Z",
      endDate: "20270516T090000Z",
    },
  },
  location: {
    venueName: "Palacio Sans Souci",
    estateSubtitle: "Salón principal & jardín francés",
    city: "Victoria",
    province: "Buenos Aires",
    country: "Argentina",
    address: "Av. Alvear 1600, Victoria",
    fullAddress: "Palacio Sans Souci, Av. Alvear 1600, Victoria, Buenos Aires",
    mapsUrl: "https://maps.google.com/?q=Palacio+Sans+Souci+Victoria+Buenos+Aires",
    coordinates: "34°27'25.0\"S 58°32'18.0\"W",
  },
  dressCode: {
    title: "Etiqueta",
    subtitle: "De noche, en tonos profundos",
    description:
      "Smoking o traje oscuro con moño; vestidos largos en negro, chocolate o champagne. La fiesta es de noche y la pista no cierra temprano: calzado cómodo bajo el vestido es bienvenido.",
    palettes: [
      { name: "Negro", hex: "#1F1A19" },
      { name: "Chocolate", hex: "#4A3530" },
      { name: "Topo", hex: "#8C7B70" },
      { name: "Champagne", hex: "#CDBBA0" },
      { name: "Marfil", hex: "#EAE4D9" },
    ],
  },
  shuttle: {
    available: true,
    pickupPoint: "Hotel Alvear, Recoleta",
    pickupTime: "19:30 hs",
    returnTimes: ["02:30 hs", "05:00 hs"],
    note: "Habrá traslado de ida y vuelta desde Recoleta para que nadie tenga que manejar de noche.",
  },

  story: [
    {
      year: "2017",
      date: "21 de julio",
      title: "La salida del cine",
      subtitle: "Un estreno en la calle Corrientes",
      description:
        "Salimos de la misma función y nos quejamos del mismo final. La discusión siguió en un bar hasta que cerró, y la conclusión fue que había que volver a verla. Juntos.",
      image: original("62/de/54/62de547915c84f5e5e231a318c7546c1"),
      imageAlt: "Camila y Juan saliendo por un portal",
      caption: "Buenos Aires",
      aspect: "landscape",
    },
    {
      year: "2022",
      date: "31 de diciembre",
      title: "La terraza",
      subtitle: "Año nuevo en San Telmo",
      description:
        "A las doce, entre fuegos artificiales y una canción que no terminaba nunca, nos prometimos que el año siguiente sería el de mudarnos juntos. Lo cumplimos en marzo.",
      image: pin("f7/9a/87/f79a876545c2382da6183d05a122b007"),
      imageAlt: "Camila y Juan besándose con anteojos de sol",
      caption: "San Telmo",
      aspect: "portrait",
    },
    {
      year: "2026",
      date: "8 de agosto",
      title: "La pregunta",
      subtitle: "Una noche de invierno en París",
      description:
        "Un puente, un poco de lluvia y un anillo escondido en el bolsillo del saco durante tres días. La respuesta llegó antes de que terminara la pregunta.",
      image: original("44/d3/cc/44d3ccb45a1e95016d084836264bd3b8"),
      imageAlt: "Camila y Juan de noche, iluminados por un flash",
      caption: "París",
      aspect: "portrait",
    },
  ],

  schedule: [
    { time: "20:30", title: "Recepción", scriptLabel: "La llegada", location: "Jardín francés", description: "Champagne, música en vivo y las luces del palacio encendiéndose.", iconName: "Wine" },
    { time: "21:00", title: "Ceremonia", scriptLabel: "El sí", location: "La escalinata", description: "Una ceremonia breve, a la luz de las velas, frente a los que más queremos.", iconName: "Heart" },
    { time: "21:45", title: "Cóctel", scriptLabel: "Brindis", location: "Galería de los espejos", description: "Coctelería de autor y una barra de ostras para empezar la noche.", iconName: "Camera" },
    { time: "23:00", title: "Cena", scriptLabel: "A la mesa", location: "Salón principal", description: "Menú de pasos, vinos elegidos y palabras de los amigos.", iconName: "Utensils" },
    { time: "00:30", title: "Fiesta", scriptLabel: "La pista", location: "Salón principal", description: "Banda en vivo y DJ hasta que salga el sol.", iconName: "Sparkles" },
    { time: "04:30", title: "Trasnoche", scriptLabel: "El final", location: "La terraza", description: "Medialunas, café y las últimas canciones.", iconName: "Moon" },
  ],

  gallery: NOCTURNA_GALLERY,
  accommodation: NOCTURNA_STAYS,
  bankAccounts: NOCTURNA_BANK,
  faq: NOCTURNA_FAQ,
  rsvpDeadline: "15 de abril de 2027",
}
