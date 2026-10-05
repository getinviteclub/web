// Las listas largas de la demo de Studio (galería, hoteles, cuentas,
// preguntas), aparte para que demo.ts no pase las 200 líneas. Mismas
// cantidades que Aura: 6 fotos, 3 hoteles, 2 cuentas, 6 preguntas.

import type { GalleryImage, AccommodationItem, BankAccount, FAQItem } from "../types"

const u = (id: string, w = 1400) =>
  `https://images.unsplash.com/photo-${id}?auto=format&fit=crop&w=${w}&q=75`

/** `span` y `aspectRatio` los usa Aura; Studio arma su propio collage. */
const foto = (id: string, src: string, alt: string, title: string, location: string, caption: string): GalleryImage => ({
  id, src, alt, title, location, year: "2026", caption, span: "", aspectRatio: "",
})

export const STUDIO_GALLERY: GalleryImage[] = [
  foto("g1", u("1542598688-f8edef5d3d97"), "Martina de noche, con flash", "Flash", "Palermo", "Una noche cualquiera, una foto que nos encanta."),
  foto("g2", u("1758810409996-583f3bad7d51"), "Bailando en una fiesta", "La pista", "Casamiento de amigos", "Siempre somos los últimos en irnos."),
  foto("g3", u("1713925919053-bf388cc18a1d"), "Caminando de noche", "De vuelta", "San Telmo", "Volviendo a casa a pie, como siempre."),
  foto("g4", u("1656515643198-aac4c4e7294a"), "Frente a una pared de lamparitas", "Luces", "Un bar en Chacarita", "La primera foto juntos que nos gustó a los dos."),
  foto("g5", u("1513725673171-537abba17912"), "Entre bengalas", "Bengalas", "Año nuevo", "Un brindis y un deseo cumplido."),
  foto("g6", u("1707294285115-bbbef91a6f7c"), "Los anillos", "Los anillos", "Delta del Tigre", "Todavía nos cuesta creerlo."),
]

export const STUDIO_STAYS: AccommodationItem[] = [
  {
    id: "stay-1",
    name: "Hotel Villa Victoria",
    type: "Boutique frente al río",
    distance: "5 min de Casona del Río",
    address: "Liniers 566, Tigre, Buenos Aires",
    description: "Una casona restaurada con pileta y desayuno en el jardín, a pasos del río.",
    discountCode: "MARTIYJOACO",
    bookingUrl: "https://www.booking.com",
    image: u("1566073771259-6a8506099945", 800),
    badge: "El más cerca",
    priceRange: "Tarifa especial -15%",
  },
  {
    id: "stay-2",
    name: "Delta Eco Lodge",
    type: "Cabañas en el Delta",
    distance: "20 min en lancha",
    address: "Río Capitán, Delta del Tigre",
    description: "Cabañas sobre el agua para quedarse el fin de semana y estirar la fiesta.",
    discountCode: "MJ2027",
    bookingUrl: "https://www.booking.com",
    image: u("1582719508461-905c673771fd", 800),
    badge: "Para quedarse",
    priceRange: "Fin de semana",
  },
  {
    id: "stay-3",
    name: "Wyndham Nordelta",
    type: "Hotel & spa",
    distance: "15 min de Casona del Río",
    address: "Av. del Puerto 240, Nordelta",
    description: "Habitaciones amplias, spa y estacionamiento para quienes vienen en auto.",
    discountCode: "BODAMJ",
    bookingUrl: "https://www.booking.com",
    image: u("1571896349842-33c89424de2d", 800),
    badge: "Con spa",
    priceRange: "Tarifa bodas",
  },
]

export const STUDIO_BANK: BankAccount[] = [
  {
    currency: "ARS",
    bankName: "Banco Galicia",
    accountType: "Caja de ahorro en pesos",
    accountNumber: "4021-8834/1",
    holder: "Martina Ferreyra & Joaquín Ledesma",
    cuitOrDni: "27-39102834-1 / 20-38201945-6",
    alias: "MARTIYJOACO.BODA",
    cbu: "0070021430004021883415",
    notes: "Para transferencias en Argentina",
  },
  {
    currency: "USD",
    bankName: "Wise / cuenta en dólares",
    accountType: "Cuenta internacional",
    holder: "Martina Ferreyra",
    cuitOrDni: "DNI 39102834",
    alias: "MARTI.JOACO.USD",
    cbu: "Routing 084009519 · Cuenta 9600001234",
    swift: "TRWIUS35XXX",
    notes: "Para invitados de afuera",
  },
]

export const STUDIO_FAQ: FAQItem[] = [
  { category: "Traslado", question: "¿Hay forma de ir sin auto?", answer: "Sí: salen combis a las 15:45 desde Plaza Italia y vuelven a la 1:30 y a las 4:00. Avísennos en el RSVP si las van a usar." },
  { category: "Dress code", question: "¿Qué significa elegante de verano?", answer: "Telas livianas, colores con vida y nada de negro total. Ellos, traje claro o lino; ellas, largo o midi. Calzado cómodo para el jardín." },
  { category: "Niños", question: "¿Podemos ir con chicos?", answer: "Esta vez la fiesta es solo para grandes, salvo sobrinos y ahijados. ¡Gracias por entender!" },
  { category: "Comida", question: "¿Hay opciones vegetarianas o sin TACC?", answer: "Sí, hay menú vegetariano, vegano y sin TACC. Indíquenlo en el RSVP así lo preparamos con tiempo." },
  { category: "Clima", question: "¿Y si llueve?", answer: "La casona tiene galerías cubiertas y un salón grande: la fiesta sigue igual. Traigan un abrigo liviano para la noche." },
  { category: "Confirmación", question: "¿Hasta cuándo confirmamos?", answer: "Hasta el 15 de febrero de 2027, desde el formulario de RSVP de esta misma invitación." },
]
