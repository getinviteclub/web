import { SOCIAL_LINKS, FOOTER_MENU, FOOTER_CONTENT } from "@/content/social"
import { Eyebrow } from "@/components/ui/eyebrow"
import { WhatsappCta } from "@/components/ui/whatsapp-cta"
import { MENSAJES } from "@/lib/whatsapp"

/**
 * El pie, en banda de color.
 *
 * Dos decisiones, las dos tomadas de caratsandcake.com:
 *
 * 1. FONDO `clay` (#eceae6). Es el mismo tono de acento que ya usan
 *    <ComoFunciona> e <Integraciones>, no un color nuevo. Sobre el fondo
 *    del sistema (#faf9f8) se nota, que era el punto: el footer terminaba
 *    disolviéndose en la página en vez de cerrarla. `bone` se probó y
 *    queda a dos puntos del fondo, no corta nada.
 *
 * 2. TODO A 12px. En la referencia el pie entero mide 12: los labels en
 *    mayúsculas con tracking y en negro, los links en gris. El contraste
 *    lo da el color y el tracking, nunca el tamaño. Acá los links estaban
 *    a 16px y en negro pleno, así que pesaban igual que el cuerpo de una
 *    sección y el pie competía con el contenido.
 *
 * La hairline es `ink/10` y no `border-rule`: sobre clay, la regla del
 * sistema (#e4e1dc) queda casi del mismo valor que el fondo.
 */
export function Footer() {
  return (
    <footer id="contact" className="bg-clay">
      <div className="mx-auto max-w-max px-[var(--pad-x)] pb-16 pt-16 md:pt-20">
        <div className="grid grid-cols-2 gap-x-8 gap-y-12 md:grid-cols-[2fr_1fr_1fr_1fr] md:gap-x-10">
          <div className="col-span-2 md:col-span-1">
            <a href="/" className="inline-block font-display text-lg font-normal">
              Invite<span className="font-display-italic"> Club</span>
            </a>
            <p className="mt-4 max-w-[38ch] text-xs leading-relaxed desc-copy">
              {FOOTER_CONTENT.tagline}
            </p>
          </div>

          <div>
            <Eyebrow as="h4">Menú</Eyebrow>
            <ul className="mt-4 flex flex-col gap-2">
              {FOOTER_MENU.map((item) => (
                <li key={item.label}>
                  <a
                    href={item.href}
                    className="text-xs text-muted-foreground transition-colors hover:text-ink"
                  >
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <Eyebrow as="h4">Seguinos</Eyebrow>
            <ul className="mt-4 flex flex-col gap-2">
              {SOCIAL_LINKS.map((item) => (
                <li key={item.label}>
                  <a
                    href={item.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-xs text-muted-foreground transition-colors hover:text-ink"
                  >
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <Eyebrow as="h4">Contacto</Eyebrow>
            <div className="mt-4">
              <WhatsappCta message={MENSAJES.info} variant="link">
                WhatsApp
              </WhatsappCta>
            </div>
          </div>
        </div>

        <div className="mt-16 flex flex-col gap-2 border-t border-ink/10 pt-6 sm:flex-row sm:items-center sm:justify-between">
          <span className="text-xs text-muted-foreground">
            {FOOTER_CONTENT.copyright}
          </span>
          <span className="text-xs text-muted-foreground">
            {FOOTER_CONTENT.lugar}
          </span>
        </div>
      </div>
    </footer>
  )
}
