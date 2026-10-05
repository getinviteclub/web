/**
 * Las preguntas frecuentes. Describen lo que el producto hace HOY.
 *
 * Sin precios ni plazos (decisión de Facu): el precio se pasa por
 * WhatsApp y el trabajo es hecho a mano, no exprés.
 *
 * `enDetalle: true` = se repite al pie del detalle de cada diseño.
 */
export type Faq = { question: string; answer: string; enDetalle?: boolean }

export const FAQS_CONTENT = {
  eyebrow: "Preguntas frecuentes",
  title: "Lo que suelen preguntarnos.",
  ctaText: "Hacer una consulta",
} as const

export const FAQS: Faq[] = [
  {
    question: "¿Qué incluye la invitación?",
    answer:
      "Todo: el diseño que elijan con sus 15 secciones —confirmación de asistencia, cómo llegar, regalos, cronograma y el resto—, cargado por nosotros, con dos rondas de cambios.",
    enDetalle: true,
  },
  {
    question: "¿Tenemos que armarla nosotros?",
    answer:
      "No. Nos pasan la información por WhatsApp —les mandamos una guía— y la armamos nosotros. Ustedes la revisan.",
    enDetalle: true,
  },
  {
    question: "¿Podemos cambiar colores o tipografías?",
    answer:
      "No. Cada diseño se pensó con su paleta y su tipografía, y llega tal cual. Lo que se vuelve suyo es el contenido: nombres, fotos, textos e historia.",
    enDetalle: true,
  },
  {
    question: "¿Con cuánta anticipación tenemos que escribir?",
    answer:
      "Cuanto antes, mejor. Cada invitación se hace a mano y tomamos pocas bodas por mes; lo ideal es escribirnos unos tres meses antes de enviarla.",
    enDetalle: true,
  },
  {
    question: "¿Cómo confirman los invitados?",
    answer:
      "Desde la invitación: si van, con quién, menú y restricciones. Ustedes ven las respuestas al día y las descargan en una planilla.",
  },
  {
    question: "¿Podemos verla funcionando antes de decidir?",
    answer:
      "Sí. En cada diseño pueden abrir la invitación en vivo y recorrerla como la verían sus invitados.",
  },
  {
    question: "¿Cómo se paga?",
    answer: "Por Mercado Pago, en un solo pago, antes de empezar. Les pasamos el detalle por WhatsApp.",
    enDetalle: true,
  },
  {
    question: "¿Trabajan con parejas de otros países?",
    answer: "Sí. Todo se coordina por WhatsApp y la invitación es un link: funciona igual en cualquier lado.",
  },
]
