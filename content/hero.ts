import { FOTOS } from "@/content/fotos"

/**
 * La portada (referencia de movimiento: v0-evasion-website).
 *
 * Arranca con una foto de boda a pantalla completa y el titular encima.
 * Al scrollear, la foto se achica a una tarjeta centrada, entran fotos de
 * bodas desde los costados y aparece la bajada debajo.
 *
 * DECISIONES TOMADAS (Facu): ni plazo ni precio en el hero, nada de notas
 * a mano ni referencias a quiénes somos. Fotos de bodas, no invitaciones:
 * la emoción la pone la boda; las invitaciones vienen en la colección.
 */
export const HERO_CONTENT = {
  eyebrow: "Invitaciones digitales de casamiento",
  /** Las partes del titular. La del medio va en itálica. */
  title: ["El primer", "recuerdo", "de su casamiento."] as const,
  /** Lo que aparece debajo de la tarjeta al scrollear. */
  subtitle: ["Diseños de autor,", "completados con su historia."] as const,
  ctaText: "Ver la colección",
  ctaHref: "#coleccion",
  /** La foto que arranca a pantalla completa. Tiene que funcionar
   *  apaisada: es la que más se ve. */
  fondo: FOTOS.veloCampo,
  /** Las que entran por los costados: arriba y abajo de cada lado. */
  izquierda: [FOTOS.besoInvitados, FOTOS.anillos] as const,
  derecha: [FOTOS.noviaFlash, FOTOS.bailando] as const,
} as const

/** La cinta bajo el hero: las secciones de la invitación. */
export const CINTA_SECCIONES = [
  "Confirmación de asistencia",
  "Cómo llegar",
  "Regalos",
  "Cronograma",
  "Dress code",
  "Cuenta regresiva",
  "Nuestra historia",
  "Galería",
  "Playlist",
  "Dónde alojarse",
] as const
