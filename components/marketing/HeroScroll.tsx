"use client"

import { HERO_CONTENT as H } from "@/content/hero"
import { Cta } from "@/components/ui/cta"
import { Eyebrow } from "@/components/ui/eyebrow"
import { Heading } from "@/components/ui/heading"
import { FilmPhoto } from "@/components/ui/film-photo"
import { clamp01, easeOut, useScrollProgress } from "@/lib/hooks/use-scroll-progress"
import { FUNNEL_EVENTS } from "@/lib/analytics"
import { cn } from "@/lib/utils"

/**
 * El hero con scroll (referencia: v0-evasion-website).
 *
 * Una sección alta con un cuadro sticky adentro. El scroll se traduce en
 * tres variables CSS, escritas directo en el DOM (sin re-render):
 *
 *   --o  0→1→0  el titular sobre la foto, que se va al empezar a bajar
 *   --s  0→1    la foto se recorta a tarjeta y entran las fotos laterales
 *   --t  0→1    aparece la bajada debajo de la tarjeta
 *
 * La foto no cambia de tamaño: se RECORTA con clip-path, que no fuerza
 * relayout y es lo que la hace fluida. El progreso llega suavizado con
 * inercia (ver useScrollProgress), así el movimiento fluye entre tirón y
 * tirón de la rueda. Los márgenes de la tarjeta viven
 * en --top/--bot/--side y cambian por breakpoint.
 *
 * Con prefers-reduced-motion queda quieto en el primer cuadro: foto a
 * pantalla completa, titular y CTA.
 */
export function HeroScroll() {
  const { ref, estatico } = useScrollProgress<HTMLElement>((p) => {
    const el = ref.current
    if (!el) return
    // Las tres etapas se SUPERPONEN y terminan casi juntas: en secuencia
    // (primero una, después la otra) quedaban tramos de scroll donde no
    // pasaba nada y se sentía como un doble scroll.
    el.style.setProperty("--o", String(1 - easeOut(clamp01(p / 0.35))))
    el.style.setProperty("--s", String(easeOut(clamp01(p / 0.8))))
    el.style.setProperty("--t", String(easeOut(clamp01((p - 0.3) / 0.55))))
    el.dataset.fase = p > 0.2 ? "tarjeta" : "inicio"
  })

  const [antes, enfasis, despues] = H.title
  const [sub1, sub2] = H.subtitle

  return (
    <section
      ref={ref}
      data-fase="inicio"
      className={cn(
        "group relative [--o:1] [--s:0] [--t:0]",
        "[--bot:34vh] [--side:5vw] [--top:96px] md:[--bot:27vh] md:[--side:25vw] md:[--top:124px]",
        estatico ? "h-[100svh]" : "h-[170vh] md:h-[185vh]"
      )}
    >
      <div className="sticky top-0 h-[100svh] overflow-hidden">
        {/* La foto principal, recortada según --s. */}
        <div
          className="absolute inset-0"
          style={{
            clipPath:
              "inset(calc(var(--s) * var(--top)) calc(var(--s) * var(--side)) calc(var(--s) * var(--bot)) calc(var(--s) * var(--side)))",
          }}
        >
          {/* Mientras se recorta, la foto se aleja apenas (1.1 → 1): le da
              profundidad al movimiento y que no se lea como un recorte seco. */}
          <div className="absolute inset-0" style={{ transform: "scale(calc(1.1 - var(--s) * 0.1))" }}>
            <FilmPhoto src={H.fondo.src} alt={H.fondo.alt} priority sizes="100vw" className="absolute inset-0" />
          </div>
          <div
            className="absolute inset-0 bg-gradient-to-t from-black/65 via-black/20 to-black/10"
            style={{ opacity: "var(--o)" }}
          />
        </div>

        {/* Columnas laterales: entran desde afuera. Solo desde md. */}
        {[H.izquierda, H.derecha].map((fotos, lado) => (
          <div
            key={lado}
            aria-hidden="true"
            className={cn(
              "absolute bottom-[var(--bot)] top-[var(--top)] hidden w-[calc(var(--side)-4.5vw)] grid-rows-2 gap-[1.5vw] md:grid",
              lado === 0 ? "left-[3vw]" : "right-[3vw]"
            )}
            style={{
              opacity: "var(--s)",
              transform: `translateX(calc((1 - var(--s)) * ${lado === 0 ? "-60%" : "60%"})) scale(calc(0.92 + var(--s) * 0.08))`,
            }}
          >
            {fotos.map((f) => (
              <FilmPhoto key={f.src} src={f.src} alt="" sizes="20vw" className="h-full w-full" />
            ))}
          </div>
        ))}

        {/* Primer cuadro: titular sobre la foto. */}
        <div
          className="absolute inset-0 flex flex-col items-center justify-end px-[var(--pad-x)] pb-[12vh] text-center text-inverse group-data-[fase=tarjeta]:pointer-events-none"
          style={{ opacity: "var(--o)", transform: "translateY(calc((1 - var(--o)) * -60px))" }}
        >
          <Eyebrow as="p" onDark>
            {H.eyebrow}
          </Eyebrow>
          <Heading as="h1" size="hero" className="mt-6 max-w-[14ch]">
            {antes} <em>{enfasis}</em> {despues}
          </Heading>
          <Cta href={H.ctaHref} tone="frost" size="lg" trackAs={FUNNEL_EVENTS.heroCta} className="mt-9">
            {H.ctaText}
          </Cta>
        </div>

        {/* Último cuadro: la bajada debajo de la tarjeta. */}
        <div
          className="absolute inset-x-0 bottom-0 flex h-[var(--bot)] flex-col items-center justify-center px-[var(--pad-x)] text-center group-data-[fase=inicio]:pointer-events-none"
          style={{ opacity: "var(--t)", transform: "translateY(calc((1 - var(--t)) * 40px))" }}
        >
          <p className="font-display text-[clamp(24px,2.6vw,36px)] leading-[1.1]">
            {sub1} <em className="text-muted-foreground">{sub2}</em>
          </p>
          <Cta href={H.ctaHref} tone="dark" size="md" className="mt-5">
            {H.ctaText}
          </Cta>
        </div>
      </div>
    </section>
  )
}
