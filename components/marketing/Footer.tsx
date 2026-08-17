import { SOCIAL_LINKS, FOOTER_MENU } from "@/content/social"
import { Eyebrow } from "@/components/ui/eyebrow"

export function Footer() {
  return (
    <footer
      id="contact"
      className="mx-auto grid max-w-max grid-cols-1 gap-8 px-[var(--pad-x)] pb-28 pt-16 md:grid-cols-[2fr_1fr_1fr] md:pb-16"
    >
      <div>
        <a
          href="#"
          className="mb-4 inline-block font-display font-normal"
        >
          Invite<span className="font-display-italic"> Club</span>
        </a>
        <p className="max-w-[40ch] desc-copy">
          Creá y compartí tu invitación digital. Gestión de invitados,
          confirmaciones online y más.
        </p>
        <span className="note-copy mt-6 block">
          ©2026 Invite Club. Todos los derechos reservados.
        </span>
      </div>

      <div>
        <Eyebrow as="h4" className="mb-3">
          Menú</Eyebrow>
        {FOOTER_MENU.map((item) => (
          <a
            key={item.label}
            href={item.href}
            className="mb-1.5 block text-ink transition-opacity hover:opacity-70"
          >
            {item.label}
          </a>
        ))}
      </div>

      <div>
        <Eyebrow as="h4" className="mb-3">
          Seguinos</Eyebrow>
        {SOCIAL_LINKS.map((item) => (
          <a
            key={item.label}
            href={item.href}
            target="_blank"
            rel="noopener noreferrer"
            className="mb-1.5 block text-ink transition-opacity hover:opacity-70"
          >
            {item.label}
          </a>
        ))}
      </div>
    </footer>
  )
}
