import Image from "next/image"
import Link from "next/link"
import { TEMPLATES } from "@/content/templates"
import { WhatsappCta } from "@/components/ui/whatsapp-cta"
import { Reveal } from "@/components/ui/reveal"
import { Eyebrow } from "@/components/ui/eyebrow"

export function Galeria() {
  return (
    <section
      id="disenos"
      className="mx-auto max-w-max px-[var(--pad-x)] py-20 md:py-28"
    >
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
                  className="object-cover transition-transform duration-[600ms] ease-[cubic-bezier(.16,1,.3,1)] group-hover:scale-[1.06]"
                />
              </div>
              <h3 className="mt-4 font-display text-xl font-normal">
                {template.name}
              </h3>
              <p className="mt-1 desc-copy">{template.description}</p>
              <span className="label-copy mt-3 inline-block underline underline-offset-4">
                Ver diseño
              </span>
            </Link>
          </Reveal>
        ))}
      </div>

      {/* Rescate para quien no se decide: que no tenga que elegir para escribir */}
      <Reveal from="up">
        <div className="mt-14 flex flex-col items-start gap-4 rounded-none border border-border p-7 sm:flex-row sm:items-center sm:justify-between">
          <div>
            <p className="font-display text-xl font-normal">
              ¿No sabés cuál elegir?
            </p>
            <p className="mt-1 desc-copy">
              Contanos cómo es tu boda y te recomendamos el diseño que mejor va.
            </p>
          </div>
          <WhatsappCta
            message="Hola, quiero ayuda para elegir un diseño"
            className="shrink-0"
          >
            Que me recomienden
          </WhatsappCta>
        </div>
      </Reveal>
    </section>
  )
}
