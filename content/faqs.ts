/**
 * Las respuestas describen lo que el producto hace HOY, no lo que va a
 * hacer. Ojo con dos de ellas cuando cambie el producto:
 *
 * - "demo": hoy en el detalle de cada diseño se ven capturas reales, no una
 *   demo navegable. Cuando exista el preview navegable (Batch 2) hay que
 *   reescribirla.
 * - "cambiar de plan": la política comercial la define Facu. La respuesta
 *   actual es la más conservadora posible (antes de empezar, sin costo).
 *   CONFIRMAR antes de publicar.
 */
export const FAQS_CONTENT = [
  {
    question: "¿Cuánto tarda en estar lista mi invitación?",
    answer:
      "72 horas desde que nos pasás los datos y las fotos. Si tenés una fecha ajustada, contanos y vemos cómo acomodarnos.",
  },
  {
    question: "¿Qué incluye cada plan?",
    answer:
      "Los tres planes incluyen el diseño que elijas y la confirmación de asistencia. Completa suma cuenta regresiva, galería, dress code y cronograma; Premium agrega “Nuestra historia”, paleta a elección y dominio propio. El detalle está en Precios.",
  },
  {
    question: "¿Puedo elegir cualquier diseño con cualquier plan?",
    answer:
      "Sí. El diseño no cambia el precio: elegís el que más les guste y el plan define qué secciones va a tener la invitación.",
  },
  {
    question: "¿La confirmación de asistencia viene en todos los planes?",
    answer:
      "Sí, incluso en el más económico. Tus invitados confirman desde la invitación y vos ves la lista actualizada, sin perseguir a nadie por WhatsApp.",
  },
  {
    question: "¿Puedo cambiar de plan después?",
    answer:
      "Sí, mientras no hayamos empezado a armar la invitación. Una vez publicada, pasar a un plan superior se cobra la diferencia.",
  },
  {
    question: "¿Puedo ver un diseño antes de contratar?",
    answer:
      "Sí. En Diseños entrás a cualquiera y ves las pantallas reales de esa invitación. Si querés ver una funcionando de punta a punta, escribinos y te la mostramos.",
  },
  {
    question: "¿Los precios están en dólares?",
    answer:
      "Sí, para que el precio no se desactualice. Al momento de contratar te pasamos el equivalente en pesos y podés pagar en moneda local.",
  },
] as const
