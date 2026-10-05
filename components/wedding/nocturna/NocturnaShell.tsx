import { Gilda_Display, Monsieur_La_Doulaise, Montserrat } from "next/font/google"
import { cn } from "@/lib/utils"
import "./nocturna.css"

/**
 * La identidad de Nocturna: papelería old money.
 *
 *   Gilda Display        → títulos en versalitas, fechas, horarios (--font-nc-display)
 *   Monsieur La Doulaise → los nombres y las palabras en relieve (--font-nc-script)
 *   Montserrat           → el texto y los labels, siempre chicos (--font-nc-sans)
 *
 * El diseño llega TAL CUAL a cada pareja (decisión de Facu).
 */
const display = Gilda_Display({
  subsets: ["latin"],
  weight: "400",
  variable: "--font-nc-display",
  display: "swap",
})

const script = Monsieur_La_Doulaise({
  subsets: ["latin"],
  weight: "400",
  variable: "--font-nc-script",
  display: "swap",
})

const sans = Montserrat({
  subsets: ["latin"],
  weight: ["400", "500"],
  variable: "--font-nc-sans",
  display: "swap",
})

export function NocturnaShell({ children }: { children: React.ReactNode }) {
  return (
    <div id="nocturna-page" className={cn(display.variable, script.variable, sans.variable)}>
      {children}
    </div>
  )
}
