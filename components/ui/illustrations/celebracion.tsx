import { Trazo, type TrazoProps } from "./trazo"

/** La fiesta: el brindis, la torta, las velas, la música, los anillos. */

/** Dos copas que brindan. */
export function Copas(props: TrazoProps) {
  return (
    <Trazo {...props}>
      <path d="M14 38 C 26 34, 40 31, 52 28" />
      <path d="M14 38 C 16 52, 42 56, 52 28" />
      <path d="M18 41 C 28 42, 40 39, 48 34" />
      <path d="M34 48 C 36 60, 38 72, 40 84" />
      <path d="M30 88 C 34 84, 44 82, 50 86" />
      <path d="M68 28 C 80 31, 94 34, 106 38" />
      <path d="M68 28 C 78 56, 104 52, 106 38" />
      <path d="M72 34 C 80 39, 92 42, 102 41" />
      <path d="M86 48 C 84 60, 82 72, 80 84" />
      <path d="M70 86 C 76 82, 86 84, 90 88" />
      <path d="M60 8 L60 17 M51 12 L55 18 M69 12 L65 18" />
      <circle cx="28" cy="44" r="0.9" />
      <circle cx="36" cy="40" r="0.9" />
      <circle cx="88" cy="44" r="0.9" />
      <circle cx="94" cy="40" r="0.9" />
    </Trazo>
  )
}

/** Torta de tres pisos con flores arriba. */
export function Torta(props: TrazoProps) {
  return (
    <Trazo {...props}>
      <path d="M46 46 C 56 45, 64 46.5, 74 45.5 L74 62 L46 62 Z" />
      <path d="M38 62 L82 62 L82 80 L38 80 Z" />
      <path d="M30 80 L90 80 L90 100 L30 100 Z" />
      <path d="M46 50 C 49 53, 52 53, 55 50 C 58 53, 61 53, 64 50 C 67 53, 70 53, 74 50" />
      <path d="M38 66 C 42 70, 46 70, 49 66 C 52 70, 56 70, 60 66 C 64 70, 68 70, 71 66 C 74 70, 78 70, 82 66" />
      <path d="M30 85 C 34 89, 38 89, 42 85 C 46 89, 50 89, 54 85 C 58 89, 62 89, 66 85 C 70 89, 74 89, 78 85 C 82 89, 86 89, 90 85" />
      <path d="M20 100 C 46 99, 74 101, 100 100 M32 104 C 50 103.5, 70 104.5, 88 104" />
      <circle cx="56" cy="40" r="4" />
      <circle cx="64" cy="39" r="3.2" />
      <path d="M54 38.5 C 55 37, 57 37, 57.5 39 M62.5 38 C 63.5 37, 65 37.5, 65 39" />
      <path d="M50 44 C 50 40, 52 38, 52 38 M70 44 C 70 40, 68 37, 68 37" />
    </Trazo>
  )
}

/** Candelabro de tres velas. */
export function Velas(props: TrazoProps) {
  return (
    <Trazo {...props}>
      <path d="M36 36 L36 70 M44 36 L44 70 M36 36 L44 36" />
      <path d="M56 26 L56 70 M64 26 L64 70 M56 26 L64 26" />
      <path d="M76 36 L76 70 M84 36 L84 70 M76 36 L84 36" />
      <path d="M40 32 C 37 28, 38 23, 40 19 C 42 23, 43 28, 40 32 Z" />
      <path d="M60 22 C 57 18, 58 13, 60 9 C 62 13, 63 18, 60 22 Z" />
      <path d="M80 32 C 77 28, 78 23, 80 19 C 82 23, 83 28, 80 32 Z" />
      <path d="M33 70 L47 70 M53 70 L67 70 M73 70 L87 70" />
      <path d="M40 70 C 40 84, 80 84, 80 70" />
      <path d="M60 70 L60 98" />
      <path d="M48 104 C 52 98, 68 98, 72 104 Z" />
    </Trazo>
  )
}

/** Disco de vinilo con el brazo apoyado. Playlist. */
export function Disco(props: TrazoProps) {
  return (
    <Trazo {...props}>
      <circle cx="54" cy="64" r="36" />
      <circle cx="54" cy="64" r="27" strokeDasharray="1 4" />
      <circle cx="54" cy="64" r="19" strokeDasharray="1 5" />
      <circle cx="54" cy="64" r="10" />
      <circle cx="54" cy="64" r="1.6" />
      <circle cx="98" cy="22" r="5" />
      <path d="M98 27 C 98 44, 90 58, 76 70 L72 74" />
      <path d="M68 72 L74 78 L78 74" />
    </Trazo>
  )
}

/** Dos anillos enlazados; uno con piedra. */
export function Anillos(props: TrazoProps) {
  return (
    <Trazo {...props}>
      <circle cx="47" cy="72" r="22" />
      <circle cx="47" cy="72" r="19" />
      <circle cx="73" cy="72" r="22" />
      <path d="M41 50 L47 41 L53 50 L47 56 Z" />
      <path d="M41 50 L53 50 M44.5 50 L47 41 L49.5 50" />
      <path d="M47 30 L47 34 M36 35 L38.5 38 M58 35 L55.5 38" />
    </Trazo>
  )
}
