import { Caveat, Homemade_Apple, DM_Mono, EB_Garamond } from "next/font/google"
import { cn } from "@/lib/utils"
import "./studio.css"

/**
 * La identidad de Studio: papelería dibujada a mano.
 *
 *   Caveat         → marcador: titulares, fechas, nombres (--font-studio-hand)
 *   Homemade Apple → la letra cursiva de "hola," (--font-studio-script)
 *   DM Mono        → rótulos de máquina de escribir (--font-studio-mono)
 *   EB Garamond    → el texto corrido, que tiene que leerse (--font-studio-serif)
 *
 * El diseño llega TAL CUAL a cada pareja: estas fuentes y la tinta roja
 * no se cambian por cliente (decisión de Facu).
 */
const hand = Caveat({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-studio-hand",
  display: "swap",
})

const script = Homemade_Apple({
  subsets: ["latin"],
  weight: "400",
  variable: "--font-studio-script",
  display: "swap",
})

const mono = DM_Mono({
  subsets: ["latin"],
  weight: ["400", "500"],
  variable: "--font-studio-mono",
  display: "swap",
})

const serif = EB_Garamond({
  subsets: ["latin"],
  weight: ["400", "500"],
  style: ["normal", "italic"],
  variable: "--font-studio-serif",
  display: "swap",
})

export function StudioShell({ children }: { children: React.ReactNode }) {
  return (
    <div
      id="studio-page"
      className={cn(hand.variable, script.variable, mono.variable, serif.variable, "relative")}
    >
      {children}
    </div>
  )
}
