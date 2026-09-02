/**
 * Las respuestas describen lo que el producto hace HOY.
 *
 * Criterio para sumar o sacar una: la FAQ es para lo que NO se puede
 * resolver visualmente en el flujo. Si la respuesta ya está a la vista en
 * la galería, en el detalle o en Precios, acá sobra y solo alarga la
 * página.
 *
 * Por eso salió "¿Puedo elegir cualquier diseño con cualquier plan?": hoy
 * eso encabeza la sección de Precios (ver DISENO_VS_PLAN) y se repite en
 * cada detalle de diseño.
 *
 * Y entró "¿Cómo se paga?": es la última duda antes de escribir y no está
 * resuelta en ningún lado del sitio.
 */
export const FAQS_CONTENT = [
  {
    question: "¿Cuánto tarda en estar lista mi invitación?",
    answer:
      "72 horas desde que nos pasás los datos y las fotos. Si tenés una fecha ajustada, contanos y vemos cómo acomodarnos.",
  },
  {
    question: "¿Puedo ver un diseño funcionando antes de contratar?",
    answer:
      "Sí. En Diseños entrás a cualquiera y, en los que tienen demo, abrís la invitación completa y navegable, igual que la vería un invitado. Si querés ver una en particular, escribinos y te la mostramos.",
  },
  {
    question: "¿Qué incluye cada plan?",
    answer:
      "Los tres incluyen el diseño que elijas y la confirmación de asistencia. Completa suma cuenta regresiva, galería, dress code y cronograma; Premium agrega “Nuestra historia”, paleta a elección y dominio propio. El detalle está en Precios.",
  },
  {
    question: "¿La confirmación de asistencia viene en todos los planes?",
    answer:
      "Sí, incluso en el más económico. Tus invitados confirman desde la invitación y vos ves la lista actualizada, sin perseguir a nadie por WhatsApp.",
  },
  {
    question: "¿Cómo se paga?",
    answer:
      "Por Mercado Pago, en un solo pago y antes de que empecemos a armarla. Te pasamos el link por WhatsApp una vez que elegimos juntos el diseño y el plan. No hay suscripción ni costos mensuales.",
  },
  {
    question: "¿Los precios están en dólares?",
    answer:
      "Sí, para que el precio no se desactualice. Al momento de contratar te pasamos el equivalente en pesos y pagás en moneda local.",
  },
  {
    question: "¿Puedo cambiar de plan después?",
    answer:
      "Sí, mientras no hayamos empezado a armar la invitación. Una vez publicada, pasar a un plan superior se cobra la diferencia.",
  },
] as const
