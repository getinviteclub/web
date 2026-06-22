import { waLink } from "@/lib/whatsapp"
import { NAV_LINKS } from "@/content/nav"

export function Navbar() {
  const ctaHref = waLink("Hola, quiero info de GetInviteClub")

  return (
    <nav className="absolute inset-x-0 top-0 z-10 flex items-center justify-between px-[var(--pad-x)] py-4 border-b border-white/25 text-inverse">
      {/* Logo */}
      <a href="#" className="font-display font-bold tracking-tight text-base">
        Invite<span className="italic font-medium"> Club</span>
      </a>

      {/* Links — ocultos en mobile, visibles desde md */}
      <ul className="hidden md:flex gap-8">
        {NAV_LINKS.map((link) => (
          <li key={link.label}>
            <a
              href={link.href}
              className="font-ui text-base font-semibold transition-opacity hover:opacity-70"
              {...(link.external
                ? { target: "_blank", rel: "noopener noreferrer" }
                : {})}
            >
              {link.label}
            </a>
          </li>
        ))}
      </ul>

      {/* CTA */}
      <a
        href={ctaHref}
        target="_blank"
        rel="noopener noreferrer"
        className="font-ui text-base font-semibold underline underline-offset-4 transition-opacity hover:opacity-70"
      >
        Contacto
      </a>
    </nav>
  )
}
