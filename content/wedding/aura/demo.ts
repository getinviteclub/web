// Contenido de la demo pública del diseño "Aura" — Valentina & Patricio,
// portado del proyecto de Flor (React/Vite). Dato ficticio de práctica
// confirmado por Facu el 26/08/2026: no son datos reales de ninguna
// pareja. Se muestra a los visitantes de la galería para que vean el
// diseño en funcionamiento — no es un cliente real (ver registry.ts).

import type { AuraContent } from "./types"

const IMG = "/images/wedding/aura"

export const AURA_DEMO: AuraContent = {
  metaTitle: "Valentina & Patricio — 18.11.2027 | Nuestra Boda",
  metaDescription:
    "Nos casamos el 18 de noviembre de 2027 en Finca Madero El Ombú, Pilar. Los esperamos para celebrar.",
  heroImage: `${IMG}/hero.jpg`,

  couple: {
    bride: "Valentina",
    brideLastName: "Rossi",
    groom: "Patricio",
    groomLastName: "Albarracín",
    monogram: "V&M",
    tagline: "Una celebración de amor, arte & vida",
    quoteEditorial:
      "Ella es a la vez musa y creadora, y te enamora la forma en que desdibuja los límites entre el arte y la vida.",
    welcomeMessage:
      "Nos llena de profunda emoción compartir este nuevo capítulo de nuestras vidas rodeados de las personas que han sido el alma de nuestro camino.",
  },
  date: {
    heroDay: "18 de Noviembre",
    heroYear: "2027",
    displayDate: "18 de noviembre de 2027",
    shortDate: "18.11.2027",
    dayOfWeek: "Jueves",
    time: "16:30 hs",
    isoTargetDate: "2027-11-18T16:30:00-03:00",
    calendarEvent: {
      title: "Boda de Valentina & Patricio",
      description:
        "Celebración de la boda de Valentina Rossi y Patricio Albarracín. Código de vestimenta: elegancia de gala contemporánea.",
      location:
        "Finca Madero El Ombú Del Viso, Lisandro de la Torre 7589, B1619 Pilar, Buenos Aires, Argentina",
      startDate: "20271118T193000Z",
      endDate: "20271119T080000Z",
    },
  },
  location: {
    venueName: "Finca Madero El Ombú",
    estateSubtitle: "Del Viso",
    city: "Pilar",
    province: "Buenos Aires",
    country: "Argentina",
    address: "Lisandro de la Torre 7589, B1619 Pilar",
    fullAddress: "Finca Madero El Ombú Del Viso, Lisandro de la Torre 7589, B1619 Pilar",
    mapsUrl:
      "https://maps.google.com/?q=Finca+Madero+El+Omb%C3%BA+Lisandro+de+la+Torre+7589+Pilar+Buenos+Aires",
    coordinates: "34°26'42.1\"S 58°48'15.6\"W",
  },
  dressCode: {
    title: "Elegante",
    subtitle: "Texturas nobles & alta costura",
    description:
      "Invitamos a sumarse con trajes oscuros, smokings modernos o vestidos largos en tonos neutros, profundos o botánicos. Sugerimos calzado cómodo para caminar por los jardines.",
    palettes: [
      { name: "Carbón cálido", hex: "#1C1B18" },
      { name: "Verde botánico", hex: "#202D24" },
      { name: "Taupe suave", hex: "#8A8275" },
      { name: "Arena cálida", hex: "#D6CBBC" },
      { name: "Oliva apagado", hex: "#4A5342" },
    ],
  },
  shuttle: {
    available: true,
    pickupPoint: "Punto de encuentro en CABA - Plaza San Martín / Retiro",
    pickupTime: "15:15 hs",
    returnTimes: ["02:00 hs", "04:30 hs", "06:00 hs"],
    note: "Habrá servicio de traslado exclusivo de ida y vuelta para todos los invitados desde Capital Federal.",
  },

  story: [
    {
      year: "2019",
      date: "14 de octubre",
      title: "El primer encuentro",
      subtitle: "Café & libros en San Telmo",
      description:
        "Nos cruzamos por primera vez entre libros antiguos y mesas de café en las calles adoquinadas de San Telmo. Lo que comenzó como una conversación fortuita sobre diseño se convirtió en una caminata interminable que cruzó toda la ciudad.",
      image: `${IMG}/story-1.jpg`,
      imageAlt: "Retrato de la pareja en San Telmo",
      caption: "San Telmo, Buenos Aires",
      aspect: "portrait",
    },
    {
      year: "2022",
      date: "03 de mayo",
      title: "La promesa en el río",
      subtitle: "Atardecer en el Delta, Tigre",
      description:
        "En una tarde silenciosa frente al agua calma, entre sauces y la luz dorada del río al atardecer, decidimos que esta historia y este camino juntos serían para siempre.",
      image: `${IMG}/story-2.jpg`,
      imageAlt: "Pareja abrazada en la costa del Delta",
      caption: "Delta del Tigre",
      aspect: "landscape",
    },
    {
      year: "2027",
      date: "18 de noviembre",
      title: "El comienzo del viaje",
      subtitle: "Finca Madero El Ombú, Pilar",
      description:
        "Elegimos la magia y la arboleda de Finca Madero para sellar nuestros votos con quienes más amamos, celebrando la belleza de lo auténtico y atemporal.",
      image: `${IMG}/story-3.jpg`,
      imageAlt: "Retrato editorial de los novios en Finca Madero",
      caption: "Finca Madero, Pilar",
      aspect: "portrait",
    },
  ],

  schedule: [
    {
      time: "16:30",
      title: "Recepción & brindis de bienvenida",
      scriptLabel: "La llegada",
      location: "El patio de los ombúes",
      description:
        "Recepción con espumantes, música acústica y bienvenida al atardecer entre los jardines.",
      iconName: "Wine",
    },
    {
      time: "17:15",
      title: "Ceremonia de votos",
      scriptLabel: "El sí, quiero",
      location: "El parque & pérgola principal",
      description:
        "Intercambio de anillos y promesas bajo la sombra del ombú centenario al caer el sol.",
      iconName: "Heart",
    },
    {
      time: "18:30",
      title: "Hora dorada & cóctel al atardecer",
      scriptLabel: "Aperitivo & música",
      location: "Galerías del parque",
      description:
        "Selección de vinos y coctelería de autor, charcutería fina, fotos analógicas y música en vivo.",
      iconName: "Camera",
    },
    {
      time: "20:30",
      title: "Cena bajo las estrellas",
      scriptLabel: "El banquete",
      location: "El gran salón de Finca Madero",
      description: "Menú de pasos maridado especialmente, brindis y palabras dedicadas.",
      iconName: "Utensils",
    },
    {
      time: "23:00",
      title: "Fiesta & baile",
      scriptLabel: "La celebración",
      location: "Pista principal & escenario",
      description:
        "DJ Set en vivo, barra de coctelería premium, sorpresas y pista hasta el amanecer.",
      iconName: "Sparkles",
    },
    {
      time: "03:30",
      title: "Banquete de medianoche",
      scriptLabel: "El recargue",
      location: "Jardines de medianoche",
      description: "Pizzas al horno de barro, empanadas y café de especialidad.",
      iconName: "Moon",
    },
  ],

  gallery: [
    {
      id: "g1",
      src: `${IMG}/gallery-1.jpg`,
      alt: "Retrato editorial monocromático de Valentina con velo vintage",
      title: "El velo & el silencio",
      location: "Estudio San Telmo",
      year: "2024",
      caption: "Luz natural y texturas de seda pura.",
      span: "col-span-6 md:col-span-6",
      aspectRatio: "aspect-[4/5]",
    },
    {
      id: "g2",
      src: `${IMG}/gallery-2.jpg`,
      alt: "Manos entrelazadas de Valentina y Patricio",
      title: "Los detalles nobles",
      location: "Taller Joyería",
      year: "2024",
      caption: "Oro blanco 18k y grabado a mano.",
      span: "col-span-6 md:col-span-3 md:col-start-9",
      aspectRatio: "aspect-[3/4]",
    },
    {
      id: "g3",
      src: `${IMG}/gallery-3.jpg`,
      alt: "Valentina y Patricio corriendo en campo abierto con risas y movimiento",
      title: "En movimiento & alegría",
      location: "Pilar, Buenos Aires",
      year: "2024",
      caption: "Película analógica 35mm, grano visible.",
      span: "col-span-6 md:col-span-3 md:col-start-2",
      aspectRatio: "aspect-[3/4]",
    },
    {
      id: "g4",
      src: `${IMG}/gallery-4.jpg`,
      alt: "Abrazo íntimo y caricia al atardecer en hora dorada",
      title: "Abrazo al atardecer",
      location: "Delta del Tigre",
      year: "2024",
      caption: "35mm Leica M6, Kodak Portra 400.",
      span: "col-span-6 md:col-span-6 md:col-start-6",
      aspectRatio: "aspect-[16/10]",
    },
    {
      id: "g5",
      src: `${IMG}/gallery-5.jpg`,
      alt: "Patricio cargando a Valentina en la playa",
      title: "Entre olas & risas",
      location: "Costa Atlántica",
      year: "2024",
      caption: "Blanco y negro, atardecer de verano.",
      span: "col-span-6 md:col-span-4",
      aspectRatio: "aspect-[4/5]",
    },
    {
      id: "g6",
      src: `${IMG}/gallery-6.jpg`,
      alt: "Valentina y Patricio tomados de la mano caminando por galerías de arquitectura clásica",
      title: "Arquitectura & unión",
      location: "Palacio Duhau",
      year: "2024",
      caption: "Líneas limpias y siluetas contemporáneas.",
      span: "col-span-6 md:col-span-5 md:col-start-7",
      aspectRatio: "aspect-[16/11]",
    },
  ],

  accommodation: [
    {
      id: "stay-1",
      name: "Sheraton Pilar Hotel & Convention Center",
      type: "Hotel 5 estrellas & cercanía",
      distance: "10 min de Finca Madero",
      address: "Ruta Panamericana Km 49.5, Pilar, Buenos Aires",
      description:
        "Elegante hotel con piscina, spa de lujo y gastronomía de primer nivel en el corazón de Pilar.",
      discountCode: "BODAVALENYPATRICIO",
      bookingUrl: "https://www.marriott.com",
      image:
        "https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&w=800&q=80",
      badge: "Recomendado / cercanía",
      priceRange: "Tarifa preferencial -20%",
    },
    {
      id: "stay-2",
      name: "Hilton Pilar Hotel",
      type: "Resort de lujo & golf",
      distance: "12 min de Finca Madero",
      address: "Ruta 8 Km 60.5, Pilar Golf Club, Buenos Aires",
      description:
        "Resort contemporáneo inmerso en campos de golf y naturaleza, con spa de categoría y alta gastronomía.",
      discountCode: "VALENPATRICIO27",
      bookingUrl: "https://www.hilton.com",
      image:
        "https://images.unsplash.com/photo-1582719508461-905c673771fd?auto=format&fit=crop&w=800&q=80",
      badge: "Diseño & confort",
      priceRange: "Boutique exclusivo",
    },
    {
      id: "stay-3",
      name: "Howard Johnson Resort & Spa Pilar",
      type: "Hotel & spa resort",
      distance: "12 min de Finca Madero",
      address: "Canelones 2650, Pilar, Buenos Aires",
      description:
        "Amplios jardines, piscina climatizada y habitaciones diseñadas para el descanso tras la fiesta.",
      discountCode: "VMWEDDING",
      bookingUrl: "https://www.hjongroup.com",
      image:
        "https://images.unsplash.com/photo-1571896349842-33c89424de2d?auto=format&fit=crop&w=800&q=80",
      badge: "Spa & relax",
      priceRange: "Tarifa especial bodas",
    },
  ],

  bankAccounts: [
    {
      currency: "ARS",
      bankName: "Banco Santander Argentina",
      accountType: "Caja de ahorro en pesos",
      accountNumber: "072-0348192/1",
      holder: "Valentina Rossi & Patricio Albarracín",
      cuitOrDni: "27-38491029-4 / 20-36918234-7",
      alias: "VALENYPATRICIO.BODA",
      cbu: "0720123488000034192831",
      notes: "Para transferencias locales en Argentina",
    },
    {
      currency: "USD",
      bankName: "Bank of America / Wise / Dólar MEP",
      accountType: "Cuenta internacional / USD",
      accountNumber: "4830 1928 3491 0029",
      holder: "Valentina Rossi",
      cuitOrDni: "Identificación: 38491029",
      alias: "VALEN.PATRICIO.USD",
      cbu: "ACH / Routing: 026009593",
      swift: "BOFAUS3N",
      notes: "Ideal para invitados internacionales o transferencias en USD",
    },
  ],

  faq: [
    {
      category: "Logística",
      question: "¿Habrá transporte o shuttles para los invitados?",
      answer:
        "Sí, dispondremos de transfers privados con salida puntual a las 15:15 hs desde el punto de encuentro en CABA (Plaza San Martín). Habrá tres horarios de regreso de madrugada (02:00, 04:30 y 06:00 hs) para que disfrutes de la fiesta con total tranquilidad.",
    },
    {
      category: "Código de vestimenta",
      question: '¿Cómo vestir para el código de vestimenta "Elegancia de gala contemporánea"?',
      answer:
        "Para ellos: smoking, traje oscuro sobrio con corbata o moño. Para ellas: vestidos largos o dos piezas formales de noche. Los jardines cuentan con senderos de piedra, pero recomendamos calzado cómodo para disfrutar del césped y la pista.",
    },
    {
      category: "Niños & asistencia",
      question: "¿Puedo asistir con niños o acompañantes?",
      answer:
        "Deseamos que todos nuestros invitados disfruten de una noche libre de preocupaciones y pensada para adultos. Por ello, la celebración será exclusivamente para mayores de edad, salvo los sobrinos y pajes directos de los novios.",
    },
    {
      category: "Menú & restricciones",
      question: "¿Qué opciones hay para dietas celíacas, vegetarianas o veganas?",
      answer:
        "Nuestro chef ejecutivo ha diseñado adaptaciones gastronómicas de alta cocina para todas las preferencias. Por favor indicalo con detalle en el formulario de RSVP para asegurar tu menú personalizado.",
    },
    {
      category: "Clima & estación",
      question: "¿Cómo suele ser el clima en Pilar en noviembre?",
      answer:
        "Las tardes de primavera en Buenos Aires son muy agradables (24°C a 27°C), refrescando suavemente hacia la noche (17°C a 19°C). Recomendamos traer un abrigo liviano o chal para el fin de fiesta al aire libre.",
    },
    {
      category: "Confirmación",
      question: "¿Hasta cuándo puedo confirmar mi presencia?",
      answer:
        "Agradecemos confirmar tu asistencia antes del 15 de septiembre de 2027 a través del formulario de RSVP disponible al final de esta página.",
    },
  ],
}
