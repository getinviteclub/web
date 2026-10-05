import { Trazo, type TrazoProps } from "./trazo"

/** Los detalles de la invitación: la agenda, el menú, las dudas, el libro de firmas. */

/** Hoja de almanaque con la fecha marcada. Agregar al calendario / Save the date. */
export function Calendario(props: TrazoProps) {
  return (
    <Trazo {...props}>
      <path d="M24 30 C 48 29, 72 30.5, 96 29.5 L96 98 C 72 99, 48 97.5, 24 98.5 Z" />
      <path d="M24 46 L96 45.5" />
      <path d="M42 22 L42 36 M78 22 L78 36" />
      <path d="M36 58 L40 58 M50 58 L54 58 M64 58 L68 58 M78 58 L82 58" />
      <path d="M36 70 L40 70 M50 70 L54 70 M78 70 L82 70" />
      <path d="M36 82 L40 82 M50 82 L54 82 M64 82 L68 82" />
      <path d="M66 64 C 60 66, 59 74, 64 77 C 70 80, 76 75, 74 69 C 73 65, 69 63, 64 65" />
    </Trazo>
  )
}

/** Carta de menú con cubiertos al costado. Menú. */
export function Menu(props: TrazoProps) {
  return (
    <Trazo {...props}>
      <path d="M38 18 C 54 17, 70 18.5, 84 17.5 L84 102 C 70 103, 54 101.5, 38 102.5 Z" />
      <path d="M50 34 C 56 33, 66 33, 72 34" />
      <path d="M48 50 L74 50 M52 58 L70 58 M48 70 L74 70 M52 78 L70 78" />
      <path d="M58 90 C 60 88, 62 88, 64 90" />
      <path d="M22 30 L22 96 M18 30 L18 44 C 18 48, 26 48, 26 44 L26 30" />
      <path d="M98 30 C 106 38, 106 54, 98 60 L98 96" />
    </Trazo>
  )
}

/** Tarjeta con un signo de pregunta. Preguntas frecuentes. */
export function Pregunta(props: TrazoProps) {
  return (
    <Trazo {...props}>
      <path d="M22 28 C 48 27, 74 28.5, 98 27.5 L98 92 C 74 93, 48 91.5, 22 92.5 Z" />
      <path d="M50 48 C 50 38, 70 38, 70 48 C 70 56, 60 56, 60 66" />
      <circle cx="60" cy="76" r="1.6" />
      <path d="M36 92 L30 104 L46 92" />
    </Trazo>
  )
}

/** Tarjeta de mesa con un código QR dibujado. Tarjetas con QR. */
export function Qr(props: TrazoProps) {
  return (
    <Trazo {...props}>
      <path d="M26 20 C 48 19, 72 20.5, 94 19.5 L94 100 C 72 101, 48 99.5, 26 100.5 Z" />
      <path d="M36 32 L52 32 L52 48 L36 48 Z M41 37 L47 37 L47 43 L41 43 Z" />
      <path d="M68 32 L84 32 L84 48 L68 48 Z M73 37 L79 37 L79 43 L73 43 Z" />
      <path d="M36 64 L52 64 L52 80 L36 80 Z M41 69 L47 69 L47 75 L41 75 Z" />
      <path d="M58 32 L62 32 M58 40 L62 40 M58 48 L62 48 M58 58 L66 58 M68 58 L84 58 M36 56 L52 56" />
      <path d="M60 64 L66 64 L66 70 M72 64 L84 64 M60 76 L68 76 M74 70 L74 80 L84 80 M80 70 L84 70" />
      <path d="M44 90 C 52 88, 68 88, 76 90" />
    </Trazo>
  )
}

/** Plano de mesas redondas con sillas. Ubicación de mesas. */
export function Mesas(props: TrazoProps) {
  return (
    <Trazo {...props}>
      <circle cx="38" cy="42" r="12" />
      <circle cx="82" cy="42" r="12" />
      <circle cx="60" cy="84" r="12" />
      <path d="M38 24 L38 26 M38 58 L38 60 M20 42 L22 42 M54 42 L56 42 M26 30 L27.5 31.5 M50 30 L48.5 31.5 M26 54 L27.5 52.5 M50 54 L48.5 52.5" />
      <path d="M82 24 L82 26 M82 58 L82 60 M64 42 L66 42 M98 42 L100 42 M70 30 L71.5 31.5 M94 30 L92.5 31.5 M70 54 L71.5 52.5 M94 54 L92.5 52.5" />
      <path d="M60 66 L60 68 M60 100 L60 102 M42 84 L44 84 M76 84 L78 84 M48 72 L49.5 73.5 M72 72 L70.5 73.5 M48 96 L49.5 94.5 M72 96 L70.5 94.5" />
      <path d="M35 42 L41 42 M79 42 L85 42 M57 84 L63 84" />
    </Trazo>
  )
}

/** Libro de firmas abierto con una pluma. Mensajes para los novios. */
export function Libro(props: TrazoProps) {
  return (
    <Trazo {...props}>
      <path d="M60 40 C 46 32, 28 32, 14 36 L14 92 C 28 88, 46 88, 60 96" />
      <path d="M60 40 C 74 32, 92 32, 106 36 L106 92 C 92 88, 74 88, 60 96" />
      <path d="M60 40 L60 96" />
      <path d="M24 50 C 32 48, 42 48, 50 51 M24 60 C 32 58, 42 58, 50 61 M24 70 C 30 68, 38 68, 44 70" />
      <path d="M70 52 C 74 48, 78 56, 82 51 C 86 47, 90 54, 94 50" />
      <path d="M96 14 C 88 22, 80 34, 76 44 L74 50 L80 46 C 86 36, 94 26, 96 14 Z" />
    </Trazo>
  )
}
