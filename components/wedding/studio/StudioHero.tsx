import type { WeddingContent } from "@/content/wedding/types"
import { STUDIO_COPY as C } from "@/content/wedding/studio/copy"
import { Stamp } from "./Stamp"
import { HandCircle } from "./Trazos"

/** "20.03.2027" → "20 / 03 / 27": la fecha como se escribe a mano. */
function fechaCorta(shortDate: string) {
  const [d, m, a] = shortDate.split(".")
  return `${d} / ${m} / ${a?.slice(-2)}`
}

/**
 * La portada, con la composición de la invitación de referencia (la de la
 * copa): "hola," y "¡están invitados!" en las esquinas de arriba, la foto
 * en una estampilla al centro, los nombres encima, la fecha encerrada en
 * un óvalo y la hora con su "→ ???" de fin de fiesta.
 */
export function StudioHero({ content }: { content: WeddingContent }) {
  const { couple, date, location } = content
  const hora = date.time.replace(/\s*hs?$/i, "").trim()

  return (
    <section
      id="portada"
      className="st-ink relative flex min-h-[100svh] flex-col items-center px-6 pb-14 pt-20 text-center sm:px-10"
    >
      <div className="flex w-full max-w-5xl items-baseline justify-between">
        <span className="st-script text-[clamp(22px,3.4vw,40px)]">{C.hero.hola}</span>
        <span className="st-script text-[clamp(22px,3.4vw,40px)]">{C.hero.invitados}</span>
      </div>

      <div className="flex flex-1 flex-col items-center justify-center py-8">
        <h1 className="st-hand text-[clamp(44px,7vw,84px)] font-semibold">
          {couple.bride} <span className="font-normal">&amp;</span> {couple.groom}
        </h1>

        <Stamp
          src={content.heroImage}
          alt={`${couple.bride} & ${couple.groom}`}
          priority
          rotate={-2}
          sizes="(min-width: 768px) 300px, 60vw"
          className="mt-6 w-[min(60vw,300px)]"
        />

        <p className="st-hand mt-6 text-[clamp(34px,4.6vw,56px)]">{C.hero.nosCasamos}</p>

        <HandCircle className="st-hand mt-3 text-[clamp(34px,4.8vw,58px)] font-medium">
          {fechaCorta(date.shortDate)}
        </HandCircle>

        <p className="st-hand mt-6 text-[clamp(30px,4vw,48px)]">
          {location.venueName}, {location.city}
        </p>
        <p className="st-hand mt-4 text-[clamp(40px,6vw,72px)] font-semibold">
          {hora} <span className="font-normal">{C.hero.hasta}</span>
        </p>
      </div>
    </section>
  )
}
