import { Trazo, type TrazoProps } from "./trazo"

/** Objetos del día: la cámara, el reloj, el moño, el auto, el ramo. */

/** Cámara de 35 mm. Galería de fotos. */
export function Camara(props: TrazoProps) {
  return (
    <Trazo {...props}>
      <path d="M18 42 C 46 41, 74 42.5, 102 41.5 L102 88 C 74 89, 46 87.5, 18 88.5 Z" />
      <path d="M44 41.5 L48 32 L72 32 L76 41.5" />
      <path d="M84 41 L84 36 L94 36 L94 41" />
      <circle cx="60" cy="65" r="16" />
      <circle cx="60" cy="65" r="10" />
      <path d="M55 60 C 57 58, 60 58, 62 59" />
      <path d="M18 52 L42 52 M78 52 L102 52" />
      <path d="M26 46 L32 46" />
    </Trazo>
  )
}

/** Reloj de bolsillo. Cronograma del día. */
export function Reloj(props: TrazoProps) {
  return (
    <Trazo {...props}>
      <circle cx="60" cy="68" r="32" />
      <circle cx="60" cy="68" r="27" />
      <path d="M56 36 L56 30 L64 30 L64 36" />
      <circle cx="60" cy="24" r="6" />
      <path d="M60 68 L60 50 M60 68 L72 74" />
      <path d="M60 43 L60 46 M60 90 L60 93 M35 68 L38 68 M82 68 L85 68" />
      <circle cx="60" cy="68" r="1.6" />
    </Trazo>
  )
}

/** Reloj de arena. Cuenta regresiva. */
export function Arena(props: TrazoProps) {
  return (
    <Trazo {...props}>
      <path d="M34 18 L86 18 M34 102 L86 102" />
      <path d="M40 18 C 40 44, 56 52, 58 60 C 56 68, 40 76, 40 102" />
      <path d="M80 18 C 80 44, 64 52, 62 60 C 64 68, 80 76, 80 102" />
      <path d="M48 36 C 54 40, 66 40, 72 36" />
      <path d="M60 62 L60 84" strokeDasharray="1 3" />
      <path d="M46 100 C 50 90, 70 90, 74 100" />
    </Trazo>
  )
}

/** Moño de traje. Dress code. */
export function Mono(props: TrazoProps) {
  return (
    <Trazo {...props}>
      <path d="M54 54 C 44 46, 30 40, 22 42 C 18 52, 18 68, 22 78 C 30 80, 44 74, 54 66" />
      <path d="M66 54 C 76 46, 90 40, 98 42 C 102 52, 102 68, 98 78 C 90 80, 76 74, 66 66" />
      <path d="M54 52 C 58 51, 62 51, 66 52 L66 68 C 62 69, 58 69, 54 68 Z" />
      <path d="M28 52 C 34 56, 40 58, 48 58 M28 68 C 34 64, 40 62, 48 62" />
      <path d="M92 52 C 86 56, 80 58, 72 58 M92 68 C 86 64, 80 62, 72 62" />
    </Trazo>
  )
}

/** Auto antiguo con latas atadas atrás. Recién casados. */
export function Auto(props: TrazoProps) {
  return (
    <Trazo {...props}>
      <path d="M26 82 C 24 72, 30 66, 40 64 L50 50 C 56 44, 76 44, 82 50 L92 64 C 102 66, 108 72, 106 82 Z" />
      <path d="M54 52 L50 64 L86 64 L80 52 C 74 47, 60 47, 54 52 Z" />
      <path d="M68 48 L68 64" />
      <circle cx="44" cy="84" r="9" />
      <circle cx="44" cy="84" r="3" />
      <circle cx="90" cy="84" r="9" />
      <circle cx="90" cy="84" r="3" />
      <path d="M26 74 C 18 80, 14 88, 10 96 M26 76 C 22 84, 22 92, 20 100" />
      <path d="M6 96 L14 96 L13 104 L7 104 Z M16 100 L24 100 L23 108 L17 108 Z" />
      <path d="M100 66 L104 62" />
    </Trazo>
  )
}

/** Ramo de rosas atado con cinta. */
export function Ramo(props: TrazoProps) {
  return (
    <Trazo {...props}>
      <circle cx="48" cy="36" r="11" />
      <path d="M48 31 C 44 31, 43 36, 46 38 C 50 40, 53 36, 51 33 C 49 31, 46 32, 46 34" />
      <circle cx="71" cy="34" r="10" />
      <path d="M71 30 C 67 30, 66 35, 69 36 C 73 38, 75 34, 73 31" />
      <circle cx="60" cy="52" r="10" />
      <path d="M60 48 C 56 48, 55 53, 58 54 C 62 56, 64 52, 62 49" />
      <path d="M34 48 C 26 46, 22 52, 24 58 C 30 58, 34 54, 34 48 Z" />
      <path d="M86 46 C 94 44, 98 50, 96 56 C 90 56, 86 52, 86 46 Z" />
      <path d="M52 62 L58 104 M60 62 L60 106 M68 62 L62 104" />
      <path d="M52 80 C 56 78, 64 78, 68 80 C 64 84, 56 84, 52 80 Z" />
      <path d="M56 82 C 50 88, 44 92, 40 92 M64 82 C 70 88, 76 92, 80 92" />
    </Trazo>
  )
}
