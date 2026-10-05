import { CTA_FINAL_CONTENT as C } from "@/content/cta-final"
import { Cta } from "@/components/ui/cta"
import { WhatsappCta } from "@/components/ui/whatsapp-cta"
import { Heading } from "@/components/ui/heading"
import { FilmPhoto } from "@/components/ui/film-photo"
import { Reveal } from "@/components/ui/reveal"

/**
 * El cierre: una foto a sangre, oscurecida, con la pregunta centrada y
 * las dos salidas. El pill vuelve a la colección; el link es para quien
 * ya eligió.
 */
export function CtaFinal() {
  const [antes, enfasis] = C.title

  return (
    <section className="relative overflow-hidden text-inverse">
      <FilmPhoto src={C.foto.src} alt="" sizes="100vw" className="absolute inset-0" />
      <div className="absolute inset-0 bg-black/55" />

      <Reveal
        from="up"
        className="relative z-[2] mx-auto flex max-w-max flex-col items-center px-[var(--pad-x)] py-28 text-center md:py-40"
      >
        <Heading size="xl">
          {antes} <em>{enfasis}</em>
        </Heading>
        <div className="mt-10 flex flex-wrap items-center justify-center gap-x-8 gap-y-4">
          <Cta href={C.ctaHref} tone="frost" size="lg">
            {C.ctaText}
          </Cta>
          <WhatsappCta message={C.secondaryMessage} variant="link" tone="frost">
            {C.secondaryText}
          </WhatsappCta>
        </div>
      </Reveal>
    </section>
  )
}
