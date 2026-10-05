import { SOCIAL_LINKS, FOOTER_MENU, FOOTER_CONTENT } from "@/content/social"
import { Eyebrow } from "@/components/ui/eyebrow"
import { Wordmark } from "@/components/ui/wordmark"
import { WhatsappCta } from "@/components/ui/whatsapp-cta"
import { LogoMarquee } from "@/components/marketing/LogoMarquee"
import { MENSAJES } from "@/lib/whatsapp"

/**
 * El pie: columnas chicas arriba y el logo gigante corriendo abajo. Todo a
 * 12px salvo el logo: el contraste lo dan el color y el tracking.
 */
export function Footer() {
  return (
    <footer id="contacto" className="border-t border-rule">
      <div className="mx-auto max-w-max px-[var(--pad-x)] pb-12 pt-16 md:pt-20">
        <div className="grid grid-cols-2 gap-x-8 gap-y-12 md:grid-cols-[2fr_1fr_1fr_1fr] md:gap-x-10">
          <div className="col-span-2 md:col-span-1">
            <Wordmark />
            <p className="mt-5 max-w-[34ch] text-xs leading-relaxed desc-copy">
              {FOOTER_CONTENT.tagline}
            </p>
          </div>

          <div>
            <Eyebrow as="h4">Menú</Eyebrow>
            <ul className="mt-4 flex flex-col gap-2.5">
              {FOOTER_MENU.map((item) => (
                <li key={item.label}>
                  <a href={item.href} className="text-xs text-muted-foreground transition-colors hover:text-ink">
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <Eyebrow as="h4">Seguinos</Eyebrow>
            <ul className="mt-4 flex flex-col gap-2.5">
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
      </div>

      <LogoMarquee />

      <div className="mx-auto flex max-w-max flex-col gap-2 px-[var(--pad-x)] py-6 sm:flex-row sm:items-center sm:justify-between">
        <span className="label-copy text-muted-foreground">{FOOTER_CONTENT.copyright}</span>
        <span className="label-copy text-muted-foreground">{FOOTER_CONTENT.bajada}</span>
      </div>
    </footer>
  )
}
