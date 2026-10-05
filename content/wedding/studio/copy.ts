/**
 * Los textos FIJOS del diseño Studio: títulos de sección, labels, botones.
 * No son de ninguna pareja — lo de cada pareja vive en su WeddingContent.
 *
 * Tono: una carta escrita a mano, en minúscula y con humor, como las
 * invitaciones de referencia ("hello, you're invited!", "9PM → ???").
 */
export const STUDIO_COPY = {
  nav: { inicio: "Ir al inicio", rsvp: "Confirmar" },
  hero: {
    hola: "hola,",
    invitados: "¡están invitados!",
    nosCasamos: "nos casamos",
    hasta: "→ ???",
  },
  story: { label: "01 — nuestra historia", title: "Cómo empezó todo" },
  details: {
    label: "02 — los detalles",
    title: "Dónde y cuándo",
    comoLlegar: "Cómo llegar",
    fecha: "El día",
    hora: "La hora",
    horaNota: "llegá un ratito antes",
    dressCode: "Dress code",
    paleta: "colores que nos encantan",
    traslado: "Traslado",
    salida: "Salida",
    regresos: "Vuelta",
  },
  countdown: {
    label: "03 — falta poco",
    title: "Cuenta regresiva",
    unidades: ["días", "horas", "min", "seg"] as const,
  },
  schedule: { label: "04 — el día", title: "Cómo va a ser el día" },
  gallery: {
    label: "05 — fotos",
    title: "Un poco de nosotros",
    /** La frase a mano encima de una de las fotos. */
    sobreFoto: "un poco perdidos en el momento.",
    ver: "Ver foto",
    cerrar: "Cerrar",
    anterior: "Foto anterior",
    siguiente: "Foto siguiente",
  },
  stay: {
    label: "06 — dónde dormir",
    title: "Dónde alojarse",
    codigo: "código",
    cta: "Reservar",
    nota: "Reserven con tiempo: cerca de la fecha se llena.",
  },
  gifts: {
    label: "07 — regalos",
    title: "Regalos",
    intro: "Lo más lindo es que vengan. Si además nos quieren ayudar con la luna de miel, acá están los datos.",
    tabs: { ARS: "En pesos", USD: "En dólares" },
    banco: "Banco",
    titular: "Titular",
    documento: "CUIT / DNI",
    alias: "Alias",
    cbuARS: "CBU",
    cbuUSD: "Cuenta / routing",
    copiar: "copiar",
    copiado: "¡copiado!",
    gracias: "¡gracias, de verdad!",
  },
  rsvp: {
    label: "08 — rsvp",
    title: "¿Vienen?",
    hasta: "Confirmen antes del",
    si: "¡Sí, vamos!",
    no: "No podemos",
    nombre: "Nombre y apellido",
    email: "Email",
    telefono: "Teléfono",
    menu: "¿Alguna restricción con la comida?",
    traslado: "Vamos a usar el traslado",
    cancion: "Una canción que no puede faltar",
    mensaje: "Un mensaje para los novios",
    enviar: "Mandar respuesta",
    enviando: "Mandando…",
    graciasSi: "¡Los esperamos!",
    graciasNo: "Los vamos a extrañar",
    modificar: "Cambiar mi respuesta",
    menus: ["Sin restricciones", "Vegetariano", "Vegano", "Sin TACC", "Sin lactosa", "Otra (contanos en el mensaje)"],
  },
  faq: { label: "09 — preguntas", title: "Por las dudas" },
  save: {
    title: "nos vemos el",
    cta: "Agregar al calendario",
    gracias: "con amor,",
  },
} as const
