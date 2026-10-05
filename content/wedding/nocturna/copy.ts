/**
 * Los textos FIJOS del diseño Nocturna: títulos, labels, botones. No son
 * de ninguna pareja — lo de cada pareja vive en su WeddingContent.
 *
 * Tono: papelería formal. Títulos cortos en versalitas, una palabra en
 * caligrafía por sección y nada de frases de relleno.
 */
export const NOCTURNA_COPY = {
  nav: { inicio: "Ir al inicio", rsvp: "Confirmar" },
  hero: {
    invitan: ["Los invitamos", "a nuestro casamiento"],
    bajar: "Deslicen para conocer los detalles",
  },
  carta: { saludo: "Queridos familia y amigos", firma: "Con cariño," },
  fecha: {
    script: "Cuándo",
    faltan: "Faltan",
    unidades: ["días", "horas", "minutos"] as const,
  },
  story: { titulo: ["Nuestra", "historia"], contada: "Contada por", capitulo: "Capítulo" },
  lugar: { script: "Dónde", cta: "Ver en el mapa" },
  schedule: { ghost: "Programa", title: "El programa" },
  dress: { ghost: "Dress code", title: "Dress code", paleta: "La paleta de la noche" },
  details: {
    title: "Detalles",
    traslado: "Traslado",
    salida: "Salida",
    vuelta: "Vuelta",
    cta: "Agregar al calendario",
  },
  gallery: {
    vertical: "Algunos momentos que nos trajeron hasta acá",
    ver: "Ver foto",
    cerrar: "Cerrar",
    anterior: "Anterior",
    siguiente: "Siguiente",
  },
  stay: { script: "Hospedaje", title: "Dónde quedarse", codigo: "Código", cta: "Reservar" },
  gifts: {
    script: "Regalos",
    title: "Lo más lindo es que estén",
    intro: "Si además quieren hacernos un regalo, nos ayudan con la luna de miel.",
    tabs: { ARS: "Pesos", USD: "Dólares" },
    banco: "Banco",
    titular: "Titular",
    documento: "CUIT / DNI",
    alias: "Alias",
    cbuARS: "CBU",
    cbuUSD: "Cuenta / routing",
    copiar: "Copiar",
    copiado: "Copiado",
  },
  rsvp: {
    title: "Confirmación",
    hasta: "Les pedimos que confirmen su asistencia antes del",
    pregunta: "¿Nos acompañan?",
    si: "Sí, con mucho gusto",
    no: "Lamentablemente no podré",
    nombre: "Nombre y apellido",
    email: "Email",
    telefono: "Teléfono",
    menu: "Restricciones alimentarias",
    traslado: "Voy a usar el traslado",
    cancion: "Una canción para la pista",
    mensaje: "Un mensaje para los novios",
    enviar: "Enviar confirmación",
    enviando: "Enviando…",
    graciasSi: "Los esperamos",
    graciasNo: "Los vamos a extrañar",
    modificar: "Cambiar mi respuesta",
    menus: ["Sin restricciones", "Vegetariano", "Vegano", "Sin TACC", "Sin lactosa", "Otra (indicar en el mensaje)"],
  },
  faq: { title: "Preguntas" },
  cierre: { script: "Los esperamos", casan: "Se casan" },
} as const
