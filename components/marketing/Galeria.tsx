import Link from "next/link"
import { TEMPLATES } from "@/content/templates"
import { PhoneMockup } from "@/components/ui/phone-mockup"
import { WhatsappCta } from "@/components/ui/whatsapp-cta"
import { Reveal } from "@/components/ui/reveal"

export function Galeria() {
  return (
    <section
      id="disenos"
      className="mx-auto max-w-max px-[var(--pad-x)] py-20 md:py-28"
    >
      <Reveal from="left" className="mb-10 md:mb-14">
        <div className="flex flex-wrap items-baseline justify-between gap-2">
          <div>
            <span className="font-mono text-xs font-bold uppercase tracking-[0.14em] text-muted-foreground">
              Diseños
            </span>
            <h2
              className="mt-4 font-display font-normal tracking-tight"
              style={{ fontSize: "clamp(28px, 4vw, 44px)" }}
            >
              Encontrá su estilo
            </h2>
          </div>
        </div>
      </Reveal>

      <div className="grid grid-cols-1 gap-8 sm:grid-cols-3 sm:gap-6">
        {TEMPLATES.map((template, i) => (
          <Reveal key={template.slug} from={i % 2 === 0 ? "left" : "right"}>
            <Link href={`/templates/${template.slug}`} className="group">
              <div className="rounded-none bg-bone px-6 py-10 transition-opacity group-hover:opacity-70">
                <PhoneMockup
                  src={template.image}
                  alt={`Invitación ${template.name}`}
                  className="max-w-[210px]"
                />
              </div>
              <h3 className="mb-1 mt-5 font-display text-2xl font-normal">
                {template.name}
              </h3>
              <p className="text-muted-foreground">{template.description}</p>
              <span className="mt-2 inline-block font-mono text-xs uppercase tracking-[0.08em] underline underline-offset-4">
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
            <p className="mt-1 text-muted-foreground">
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
