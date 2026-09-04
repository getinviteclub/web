// Franja editorial de marca. Justifica el precio de un servicio atendido:
// lo que se vende no es acceso a un editor, es que alguien se ocupe.
//
// CORREGIDO: la versión anterior decía "No vendemos una plantilla /
// diseñamos tu invitación con vos, una por una" y un pilar afirmaba que
// "cada invitación se diseña desde cero". Eso contradice el modelo real
// —catálogo de diseños + personalización— y prometía un servicio de
// diseño custom que solo existe en la línea Atelier. Un cliente que llega
// con esa expectativa se decepciona en la primera entrega.
//
// El diferencial que SÍ es cierto y sostiene el precio: lo armamos
// nosotros, hay una sola interlocutora, hay revisiones y el precio es
// cerrado.
export const QUIENES_SOMOS_CONTENT = {
  label: "Quiénes somos",
  // Afirmación corta, en 2 partes para poder resaltar la segunda.
  statementStart: "Vos elegís el diseño.",
  statementEnd:
    "Nosotros lo personalizamos con ustedes, hasta que quede como se lo imaginaron.",
  text: "Somos un estudio chico. Tomamos las bodas de a una: vos elegís un diseño del catálogo y nosotros lo armamos con sus fotos, sus textos y toda la información de su día. Todo se coordina por WhatsApp, con la misma persona de principio a fin.",
  pillars: [
    {
      title: "Lo armamos nosotros",
      text: "No tenés que aprender a usar nada: nos pasás la información y te devolvemos la invitación lista.",
    },
    {
      title: "Una sola interlocutora",
      text: "Hablás siempre con la misma persona, por WhatsApp, sin tickets ni soporte.",
    },
    {
      title: "Sin sorpresas",
      text: "Precio cerrado desde el principio, con las revisiones que hagan falta hasta que quede como se la imaginaron.",
    },
  ],
} as const
