import Link from "next/link"
import { INVITACION_INCLUYE, INCLUYE_SEGUN_PLAN } from "@/content/invitacion"
import { CheckItem } from "@/components/ui/check-item"

/**
 * "Tu invitación puede incluir": el puente entre el diseño y el plan.
 *
 * Dice PUEDE incluir, no incluye, y la nota remata que el alcance lo define
 * el plan. La versión anterior listaba cuatro features por diseño y las
 * mostraba con el mismo tilde que usa el pricing, así que se leían como
 * incluidas en los USD 25 — y varias (paleta a elección, Nuestra historia)
 * son de Premium.
 */
export function TemplateIncluye() {
  return (
    <section className="border-t border-border pt-6">
      <h2 className="font-display text-xl font-normal">
        Tu invitación puede incluir
      </h2>

      <ul className="mt-4 grid grid-cols-1 gap-x-6 gap-y-2 sm:grid-cols-2">
        {INVITACION_INCLUYE.map((item) => (
          <CheckItem key={item}>{item}</CheckItem>
        ))}
      </ul>

      <p className="note-copy mt-4 text-muted-foreground">
        {INCLUYE_SEGUN_PLAN}{" "}
        <Link
          href="/#planes"
          className="text-ink underline underline-offset-4 transition-opacity hover:opacity-60"
        >
          Ver los planes
        </Link>
      </p>
    </section>
  )
}
