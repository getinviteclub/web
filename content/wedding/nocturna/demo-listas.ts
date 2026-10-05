// Las listas largas de la demo de Nocturna, aparte para que demo.ts no
// pase las 200 líneas. Mismas cantidades que Aura y Studio: 6 fotos,
// 3 hoteles, 2 cuentas, 6 preguntas.

import type { GalleryImage, AccommodationItem, BankAccount, FAQItem } from "../types"

const u = (id: string, w = 1800) =>
  `https://images.unsplash.com/photo-${id}?auto=format&fit=crop&w=${w}&q=75`

/** `span` y `aspectRatio` los usa Aura; Nocturna arma sus propios fotogramas. */
const foto = (id: string, src: string, alt: string, title: string, location: string, caption: string): GalleryImage => ({
  id, src, alt, title, location, year: "2026", caption, span: "", aspectRatio: "",
})

/** ⚠️ Fotos de Pinterest: SOLO para maquetar. Reemplazar antes de publicar. */
const pin = (path: string) => `https://i.pinimg.com/736x/${path}.jpg`

export const NOCTURNA_GALLERY: GalleryImage[] = [
  foto("g1", pin("3d/62/f3/3d62f3340df5776f9a42103f1bdabf14"), "Camila iluminada por el flash", "Flash", "Buenos Aires", "La foto favorita de Juan."),
  foto("g2", pin("66/9c/7a/669c7a3808d5a52e6b54113dad74e3c4"), "Bailando con flash en la pista", "La pista", "Palermo", "Siempre los últimos en irnos."),
  foto("g3", pin("c5/35/8e/c5358e3cabbde4dc47c710f302e83087"), "Luces de fiesta movidas", "Movimiento", "Un casamiento de amigos", "Treinta y cinco milímetros, sin repetir."),
  foto("g4", pin("ea/c9/a7/eac9a7f717c12b5543db7722298c4d79"), "Carpa iluminada con guirnaldas", "Guirnaldas", "San Isidro", "Una cena larga, como nos gustan."),
  foto("g5", pin("c2/c7/69/c2c7699e943c0163da592f0adfcd6860"), "Salida entre bengalas", "Bengalas", "Año nuevo", "El brindis que empezó todo."),
  foto("g6", pin("dd/6d/8d/dd6d8d5df6035eb4c9add4821dc973fb"), "La pista llena de amigos", "Los amigos", "Despedida", "Los de siempre, en primera fila."),
]

export const NOCTURNA_STAYS: AccommodationItem[] = [
  {
    id: "stay-1",
    name: "Alvear Palace Hotel",
    type: "Clásico de Recoleta",
    distance: "Salida del traslado",
    address: "Av. Alvear 1891, Recoleta",
    description: "El punto de salida de las combis. Ideal para quienes llegan de afuera.",
    discountCode: "CAMIYJUAN",
    bookingUrl: "https://www.booking.com",
    image: u("1566073771259-6a8506099945", 900),
    badge: "Recomendado",
    priceRange: "Tarifa especial",
  },
  {
    id: "stay-2",
    name: "Villa Julia",
    type: "Boutique en Tigre",
    distance: "15 min del palacio",
    address: "Paseo Victorica 800, Tigre",
    description: "Una casona frente al río para quedarse y desayunar tarde al día siguiente.",
    discountCode: "CJ2027",
    bookingUrl: "https://www.booking.com",
    image: u("1582719508461-905c673771fd", 900),
    badge: "El más cerca",
    priceRange: "Boutique",
  },
  {
    id: "stay-3",
    name: "Sofitel La Reserva Cardales",
    type: "Resort & spa",
    distance: "40 min del palacio",
    address: "Ruta 4 Km 2, Campana",
    description: "Para hacer un fin de semana largo, con spa y campo de golf.",
    discountCode: "NOCTURNA",
    bookingUrl: "https://www.booking.com",
    image: u("1571896349842-33c89424de2d", 900),
    badge: "Fin de semana",
    priceRange: "Resort",
  },
]

export const NOCTURNA_BANK: BankAccount[] = [
  {
    currency: "ARS",
    bankName: "Banco Macro",
    accountType: "Caja de ahorro en pesos",
    accountNumber: "3-401-0948120734-1",
    holder: "Camila Ortiz & Juan Mansilla",
    cuitOrDni: "27-37204918-3 / 20-36019284-5",
    alias: "CAMIYJUAN.NOCHE",
    cbu: "2850401540094812073418",
    notes: "Para transferencias en Argentina",
  },
  {
    currency: "USD",
    bankName: "Wise / cuenta en dólares",
    accountType: "Cuenta internacional",
    holder: "Juan Mansilla",
    cuitOrDni: "DNI 36019284",
    alias: "CAMI.JUAN.USD",
    cbu: "Routing 084009519 · Cuenta 9600007788",
    swift: "TRWIUS35XXX",
    notes: "Para invitados de afuera",
  },
]

export const NOCTURNA_FAQ: FAQItem[] = [
  { category: "Dress code", question: "¿Qué es etiqueta?", answer: "Ellos, smoking o traje oscuro con moño. Ellas, vestido largo. Negro, tonos profundos y brillo son bienvenidos." },
  { category: "Traslado", question: "¿Cómo llegamos y volvemos?", answer: "Sale una combi a las 19:30 desde el Hotel Alvear y vuelve a las 2:30 y a las 5:00. Avísennos en el RSVP." },
  { category: "Horarios", question: "¿Es puntual?", answer: "Sí: la ceremonia empieza a las 21:00 en punto. Lleguen a la recepción para no perderse nada." },
  { category: "Niños", question: "¿Podemos ir con chicos?", answer: "La fiesta es solo para adultos. Gracias por entenderlo y por organizarse para venir." },
  { category: "Comida", question: "¿Hay opciones especiales?", answer: "Sí: vegetariano, vegano y sin TACC. Indíquenlo en el RSVP para que el menú esté listo." },
  { category: "Confirmación", question: "¿Hasta cuándo confirmamos?", answer: "Hasta el 15 de abril de 2027, desde el formulario de esta misma invitación." },
]
