import Image from "next/image"
import { FEATURES_CONTENT } from "@/content/features"
import { Cta } from "@/components/ui/cta"
import { Reveal } from "@/components/ui/reveal"
import { Eyebrow } from "@/components/ui/eyebrow"

/**
 * La sección que explica el servicio, en una sola pieza.
 *
 * Funde <ComoFunciona> e <Integraciones>, que iban una detrás de la otra y
 * contaban lo mismo desde dos ángulos. La segunda además listaba
 * funcionalidades, y en la home eso llega antes de que el usuario vea un
 * diseño: hacía leer la página como la de un software.
 *
 * Dos columnas con `items-stretch`: la izquierda lleva todo el contenido
 * —tag, titular, bajada, los tres pasos y la salida al catálogo— y la
 * derecha una sola foto que iguala su alto. La foto es `fill` sobre un
 * contenedor `h-full`, así se recorta al alto que le toque en vez de
 * imponer el suyo; con una imagen de alto propio, cualquier cambio de copy
 * a la izquierda descuadraba la fila.
 *
 * Mantiene el id #como-funciona: lo apuntan la nav y el footer.
 */
export function ComoFunciona() {
  return (
    <section id="como-funciona" className="bg-clay">
      <div className="mx-auto max-w-max px-[var(--pad-x)] py-20 md:py-28">
        <div className="grid gap-12 md:grid-cols-2 md:items-stretch md:gap-16">
          <Reveal from="left" className="flex flex-col">
            <Eyebrow>{FEATURES_CONTENT.eyebrow}</Eyebrow>

            <h2
              // 24ch y no menos: "Nosotros hacemos el resto." mide 26
              // caracteres y con un ancho más corto el navegador dejaba
              // "resto." colgando solo en un tercer renglón.
              className="mt-4 max-w-[24ch] whitespace-pre-line font-display font-normal leading-[1.1]"
              style={{ fontSize: "clamp(28px, 4vw, 44px)" }}
            >
              {FEATURES_CONTENT.title}
            </h2>

            <p className="mt-5 max-w-[46ch] text-lg desc-copy">
              {FEATURES_CONTENT.subtitle}
            </p>

            {/* Uno abajo del otro y separados por regla: en tres columnas
                los pasos quedaban en tiras angostas y el orden —que es lo
                único que importa acá— se leía peor que en vertical. */}
            <ol className="mt-10 border-t border-ink/10">
              {FEATURES_CONTENT.items.map((item, i) => (
                <li key={item.step} className="border-b border-ink/10 py-6">
                  <Eyebrow as="span" className="text-muted-foreground">
                    {String(i + 1).padStart(2, "0")} — {item.step}
                  </Eyebrow>
                  <h3 className="mt-3 font-display text-xl font-normal leading-snug">
                    {item.title}
                  </h3>
                  <p className="mt-1.5 max-w-[52ch] text-sm leading-relaxed desc-copy">
                    {item.text}
                  </p>
                </li>
              ))}
            </ol>

            <div className="mt-10">
              <Cta href={FEATURES_CONTENT.ctaHref} size="lg">
                {FEATURES_CONTENT.ctaText}
              </Cta>
            </div>
          </Reveal>

          {/* min-h para mobile, donde la columna se apila y no tiene una
              hermana de la que tomar el alto. */}
          <Reveal from="right" className="relative min-h-[420px] md:min-h-0">
            <div className="relative h-full w-full overflow-hidden bg-bone">
              <Image
                src={FEATURES_CONTENT.imageSrc}
                alt={FEATURES_CONTENT.imageAlt}
                fill
                sizes="(min-width: 768px) 45vw, 90vw"
                className="object-cover"
              />
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  )
}
