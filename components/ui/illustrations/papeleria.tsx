import { Trazo, type TrazoProps } from "./trazo"

/**
 * Papelería: lo que se escribe, se manda y se guarda.
 * Los trazos tienen curvas apenas irregulares a propósito: una línea
 * perfectamente recta delata el vector y deja de leer "hecho a mano".
 */

/** Sobre cerrado con sello de lacre. Confirmación de asistencia. */
export function Sobre(props: TrazoProps) {
  return (
    <Trazo {...props}>
      <path d="M15 35 C 40 34, 80 35.5, 105 34 C 105.5 54, 104.5 74, 105 93 C 80 92, 40 93.5, 15 92.5 C 14.5 72, 15.5 54, 15 35 Z" />
      <path d="M15.5 35.5 C 30 46, 46 58, 60 67 C 74 58, 90 46, 104.5 34.5" />
      <path d="M15.5 92 C 26 83, 37 74, 49 64.5" />
      <path d="M104.5 92.5 C 94 83, 83 74, 71 64.5" />
      <circle cx="60" cy="67" r="8.5" />
      <path d="M60 61.5 L61.6 65.2 L65.5 65.5 L62.5 68 L63.5 71.8 L60 69.8 L56.5 71.8 L57.5 68 L54.5 65.5 L58.4 65.2 Z" />
      <path d="M53 75 C 52 79, 50 81, 48.5 83 M67 75 C 68 79, 70 81, 71.5 83" />
    </Trazo>
  )
}

/** Pluma de escribir. Su historia. */
export function Pluma(props: TrazoProps) {
  return (
    <Trazo {...props}>
      <path d="M92 14 C 70 24, 50 50, 34 96" />
      <path d="M92 14 C 96 30, 86 52, 66 66 C 60 70, 52 74, 45 76" />
      <path d="M92 14 C 76 18, 60 30, 52 44 C 48 52, 46 60, 44 70" />
      <path d="M80 30 C 72 32, 66 38, 62 44 M74 44 C 68 46, 62 50, 58 56 M66 58 C 60 60, 56 62, 52 66" />
      <path d="M34 96 L31 104 L36 99" />
      <path d="M20 106 C 34 104, 50 107, 64 104 C 74 102, 86 106, 98 104" />
    </Trazo>
  )
}

/** Caja de regalo con moño. Regalos. */
export function Regalo(props: TrazoProps) {
  return (
    <Trazo {...props}>
      <path d="M26 54 C 48 53, 72 54.5, 94 53.5 L94 64 C 72 65, 48 63.5, 26 64.5 Z" />
      <path d="M30 64.5 C 30.5 78, 29.5 90, 30 102 C 50 101.5, 70 102.5, 90 101.5 C 89.5 90, 90.5 78, 90 64" />
      <path d="M55 54 L55.5 102 M65 54 L64.5 101.5" />
      <path d="M60 53 C 50 40, 34 36, 36 46 C 38 54, 52 53, 60 53 Z" />
      <path d="M60 53 C 70 40, 86 36, 84 46 C 82 54, 68 53, 60 53 Z" />
      <path d="M58 53 C 52 58, 48 62, 44 66 M62 53 C 68 58, 72 62, 76 66" />
    </Trazo>
  )
}

/** Mapa plegado con un recorrido y el pin. Cómo llegar. */
export function Mapa(props: TrazoProps) {
  return (
    <Trazo {...props}>
      <path d="M14 42 L42 33 L72 42 L104 33 L104 90 L72 99 L42 90 L14 99 Z" />
      <path d="M42 33 L42 90 M72 42 L72 99" />
      <path
        d="M22 88 C 30 78, 40 82, 48 72 C 56 62, 66 70, 74 60 C 80 52, 84 56, 86 50"
        strokeDasharray="2.5 3.5"
      />
      <path d="M86 47 C 80 40, 80 30, 86 26 C 92 22, 100 28, 98 36 C 97 40, 92 44, 86 52 C 86 50, 86 48, 86 47 Z" />
      <circle cx="89" cy="33" r="3.2" />
    </Trazo>
  )
}

/** Llave antigua de hotel con su etiqueta. Dónde alojarse. */
export function Llave(props: TrazoProps) {
  return (
    <Trazo {...props}>
      <circle cx="40" cy="44" r="15" />
      <circle cx="40" cy="44" r="7" />
      <path d="M51 55 C 62 66, 74 78, 88 92" />
      <path d="M76 80 L82 74 M82 86 L88 80 M85 89 L90 84" />
      <path d="M28 33 C 24 24, 26 16, 34 14 L44 12 C 48 12, 50 16, 48 20 L40 30" />
      <path d="M33 16 L41 25" />
    </Trazo>
  )
}
