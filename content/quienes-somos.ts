// Franja editorial de marca. Sirve para justificar el precio de un servicio
// hecho a medida: lo que se vende no es una plantilla, es que alguien se
// ocupe. Si más adelante no aporta, se saca de app/(marketing)/page.tsx.
export const QUIENES_SOMOS_CONTENT = {
  label: "Quiénes somos",
  // Afirmación corta y fuerte, en 2 partes para poder resaltar la segunda.
  statementStart: "No vendemos una plantilla.",
  statementEnd:
    "Diseñamos tu invitación con vos, una por una, hasta que quede como te la imaginaste.",
  text: "[Texto pendiente — 2 o 3 líneas contando quiénes son y cómo trabajan. Ej: estudio chico, cada boda tomada de a una, acompañamiento por WhatsApp de principio a fin.]",
  pillars: [
    {
      title: "Hecho a medida",
      text: "Cada invitación se diseña desde cero sobre tu historia, no sobre un formulario.",
    },
    {
      title: "Una sola interlocutora",
      text: "Hablás siempre con la misma persona, por WhatsApp, sin tickets ni soporte.",
    },
    {
      title: "Sin sorpresas",
      text: "Precio cerrado y revisiones incluidas antes de empezar.",
    },
  ],
} as const
