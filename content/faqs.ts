/**
 * Las respuestas describen lo que el producto hace HOY.
 *
 * Criterio para sumar o sacar una: la FAQ es para lo que NO se puede
 * resolver visualmente en el flujo. Si la respuesta ya está a la vista en
 * la galería, en el detalle o en el bloque de precio, acá sobra y solo
 * alarga la página.
 *
 * Salieron las tres que preguntaban por planes ("¿Qué incluye cada plan?",
 * "¿Viene el RSVP en todos?", "¿Puedo cambiar de plan?"). No se
 * reescribieron: dejaron de existir junto con los tiers, y mantenerlas
 * reintroduciría por la puerta de atrás justo el modelo que sacamos.
 *
 * En su lugar entró "¿Qué puede incluir?", que es la duda que sí queda, y
 * "¿Puedo pedir algo que no está?", que abre la puerta a los extras y a
 * Atelier sin nombrarlos como upsell.
 */
export const FAQS_CONTENT = [
  {
    question: "¿Cuánto tarda en estar lista mi invitación?",
    answer:
      "72 horas desde que nos pasás los datos y las fotos. Si tenés una fecha ajustada, contanos y vemos cómo acomodarnos.",
  },
  {
    question: "¿Qué puede incluir la invitación?",
    answer:
      "Todo lo que su casamiento necesite: confirmación de asistencia, ubicación, regalos, galería, cronograma, dress code, cuenta regresiva, su historia y más. No son paquetes cerrados — nos cuentan qué quieren y armamos la invitación con esas secciones. En cada diseño está la lista completa.",
  },
  {
    question: "¿El diseño que elija cambia el precio?",
    answer:
      "No. Los cuatro diseños valen lo mismo: elegís el que más les guste sin pensar en el costo. Solo tienen precio aparte los extras, como el dominio propio o el save the date.",
  },
  {
    question: "¿Puedo ver un diseño funcionando antes de contratar?",
    answer:
      "Sí. En Diseños entrás a cualquiera y, en los que tienen demo, abrís la invitación completa y navegable, igual que la van a ver tus invitados.",
  },
  {
    question: "¿Tengo que armar la invitación yo?",
    answer:
      "No. Esto no es un editor: nos pasás las fotos, los textos y los datos por WhatsApp, y la armamos nosotros. Después la revisamos juntos y la ajustamos hasta que quede como se la imaginaron.",
  },
  {
    question: "¿Y si quiero algo que no está en ninguno de los diseños?",
    answer:
      "Existe Atelier: una invitación diseñada desde cero, con tipografía, paleta y composición propias. Es otro servicio, con otro precio y otros tiempos. Escribinos y lo charlamos.",
  },
  {
    question: "¿Cómo se paga?",
    answer:
      "Por Mercado Pago, en un solo pago y antes de que empecemos a armarla. Te pasamos el link por WhatsApp una vez que elegimos el diseño.",
  },
  {
    question: "¿Los precios están en dólares?",
    answer:
      "Sí, para que el precio no se desactualice. Al momento de contratar te pasamos el equivalente en pesos y podés pagar en moneda local.",
  },
] as const
