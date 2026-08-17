import { SOCIAL_LINKS, FOOTER_MENU } from "@/content/social"

export function Footer() {
  return (
    <footer
      id="contact"
      className="mx-auto grid max-w-max grid-cols-1 gap-8 px-[var(--pad-x)] pb-28 pt-16 md:grid-cols-[2fr_1fr_1fr] md:pb-16"
    >
      <div>
        <a
          href="#"
          className="mb-4 inline-block font-display font-normal tracking-tight"
        >
          Invite<span className="font-display-italic"> Club</span>
        </a>
        <p className="max-w-[40ch] text-muted-foreground">
          Creá y compartí tu invitación digital. Gestión de invitados,
          confirmaciones online y más.
        </p>
        <span className="mt-6 block text-sm text-muted-foreground">
          ©2026 Invite Club. Todos los derechos reservados.
        </span>
      </div>

      <div>
        <h4 className="mb-3 font-mono text-xs font-bold uppercase tracking-wide">
          Menú
        </h4>
        {FOOTER_MENU.map((item) => (
          <a
            key={item.label}
            href={item.href}
            className="mb-1.5 block text-muted-foreground transition-opacity hover:opacity-70"
          >
            {item.label}
          </a>
        ))}
      </div>

      <div>
        <h4 className="mb-3 font-mono text-xs font-bold uppercase tracking-wide">
          Seguinos
        </h4>
        {SOCIAL_LINKS.map((item) => (
          <a
            key={item.label}
            href={item.href}
            target="_blank"
            rel="noopener noreferrer"
            className="mb-1.5 block text-muted-foreground transition-opacity hover:opacity-70"
          >
            {item.label}
          </a>
        ))}
      </div>
    </footer>
  )
}
