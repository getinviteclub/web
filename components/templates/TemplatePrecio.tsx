import { PRECIO_DESDE, PLAZO_ENTREGA, PRECIO_UNIFORME } from "@/content/planes"

/**
 * El ancla de precio del detalle.
 *
 * Las tres líneas resuelven, en orden, las tres dudas que frenan a alguien
 * que ya vio un diseño que le gusta:
 *   1. cuánto sale        → el número, en display, al tamaño de un titular
 *   2. si es recurrente   → "Pago único · Sin suscripción"
 *   3. si el diseño lindo → "El diseño que elijas no cambia el precio"
 *      lo encarece
 *
 * La tercera es la que evita el mensaje de WhatsApp más común y más caro
 * de responder: "¿cuánto sale este en particular?".
 */
export function TemplatePrecio() {
  return (
    <div className="border-t border-border pt-6">
      <p className="font-display text-[40px] font-normal leading-none">
        Desde {PRECIO_DESDE}
      </p>
      <p className="label-copy mt-3">Pago único · Sin suscripción</p>
      <p className="note-copy mt-2 text-muted-foreground">
        {PRECIO_UNIFORME} Lista en {PLAZO_ENTREGA}.
      </p>
    </div>
  )
}
