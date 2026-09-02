import Image from "next/image"
import Link from "next/link"
import { TEMPLATES } from "@/content/templates"
import { WhatsappCta } from "@/components/ui/whatsapp-cta"
import { Reveal } from "@/components/ui/reveal"
import { Eyebrow } from "@/components/ui/eyebrow"
import { TrackView } from "@/components/ui/track-view"
import { FUNNEL_EVENTS } from "@/lib/analytics"
import { MENSAJES } from "@/lib/whatsapp"

export function Galeria() {
  return (
    <section
      id="disenos"
      className="mx-auto max-w-max px-[var(--pad-x)] pb-16 pt-20 md:pt-28"
    >
      <TrackView event={FUNNEL_EVENTS.viewGallery} />

      <Reveal from="left" className="mb-10 md:mb-14">
        <div className="flex flex-wrap items-baseline justify-between gap-2">
          <div>
            <Eyebrow>
              Diseños
            </Eyebrow>
            <h2
              className="mt-4 font-display font-normal"
              style={{ fontSize: "clamp(28px, 4vw, 44px)" }}
            >
              Encontrá su estilo
            </h2>
            {/* Sin precio acá (decisión de Facu): la galería es para
                enamorarse de un diseño, no para comparar plata. El número
                aparece un paso después, en el detalle, y en #planes.
                Lo que sí queda es el concepto, porque es lo que evita que
                el usuario asuma que el diseño que le gustó es el caro. */}
            <p className="mt-3 max-w-[46ch] text-sm leading-relaxed desc-copy">
              El diseño define cómo se ve la invitación. Qué incluye lo
              define el plan.
            </p>
          </div>
        </div>
      </Reveal>

      <div className="grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 sm:gap-x-6 lg:grid-cols-4">
        {TEMPLATES.map((template, i) => (
          <Reveal key={template.slug} from={i % 2 === 0 ? "left" : "right"}>
            <Link href={`/templates/${template.slug}`} className="group block">
              {/* La foto es lo único que se mueve al hover —el mismo
                  micro-zoom que caratsandcake.com—, el texto de abajo
                  queda quieto. */}
              <div className="relative aspect-[4/5] overflow-hidden bg-bone">
                <Image
                  src={template.coverImage}
                  alt={`Invitación ${template.name}`}
                  fill
                  sizes="(min-width: 1024px) 25vw, (min-width: 640px) 45vw, 90vw"
                  style={{ objectPosition: template.coverPosition }}
                  className="object-cover transition-transform duration-[600ms] ease-[cubic-bezier(.16,1,.3,1)] group-hover:scale-[1.06]"
                />
              </div>
              <h3 className="mt-4 font-display text-xl font-normal">
                {template.name}
              </h3>
              <p className="mt-1 text-sm leading-relaxed desc-copy">
                {template.description}
              </p>
              <span className="label-copy mt-3 inline-block underline underline-offset-4">
                Ver diseño
              </span>
            </Link>
          </Reveal>
        ))}
      </div>

      {/* Rescate para quien no se decide. Es lo único sin caja y
          centrado de toda la página: destaca por romper la estructura
          de grilla, no por color, así no suma un cuarto bloque oscuro
          a una sección de Integraciones. Las dos líneas lo enmarcan. */}
      <Reveal from="up">
        <div className="mt-16 border-y border-rule py-14 text-center">
          <p
            className="mx-auto max-w-[18ch] font-display font-normal leading-[1.15]"
            style={{ fontSize: "clamp(26px, 3.4vw, 38px)" }}
          >
            ¿No sabés cuál elegir?
          </p>
          <p className="mx-auto mt-3 max-w-[44ch] text-sm leading-relaxed desc-copy">
            Contanos cómo es tu boda y te recomendamos el diseño que mejor va.
          </p>
          <div className="mt-6">
            <WhatsappCta
              message={MENSAJES.recomendacion}
              variant="link"
            >
              Que me recomienden
            </WhatsappCta>
          </div>
        </div>
      </Reveal>
    </section>
  )
}
