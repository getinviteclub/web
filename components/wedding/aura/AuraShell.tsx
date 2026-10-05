import {
  Pinyon_Script,
  Ibarra_Real_Nova,
  Monsieur_La_Doulaise,
  Jost,
} from "next/font/google"
import { cn } from "@/lib/utils"
import "./aura.css"

/**
 * La identidad tipográfica y de color de Aura, aislada del sitio de
 * marketing. Antes vivía en app/w/[slug]/layout.tsx; se mudó acá cuando
 * apareció el segundo diseño (Studio), que trae fuentes y colores propios.
 */

const heroScript = Pinyon_Script({
  subsets: ["latin"],
  weight: "400",
  variable: "--font-pinyon-script",
  display: "swap",
})

const script = Monsieur_La_Doulaise({
  subsets: ["latin"],
  weight: "400",
  variable: "--font-monsieur",
  display: "swap",
})

const serifDisplay = Ibarra_Real_Nova({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  style: ["normal", "italic"],
  variable: "--font-ibarra",
  display: "swap",
})

const sansEditorial = Jost({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600"],
  variable: "--font-jost",
  display: "swap",
})

export function AuraShell({ children }: { children: React.ReactNode }) {
  return (
    <div
      id="aura-page"
      className={cn(
        heroScript.variable,
        script.variable,
        serifDisplay.variable,
        sansEditorial.variable,
        "font-sans-editorial selection:bg-[#202D24] selection:text-[#F2F2EF]"
      )}
      style={{ backgroundColor: "#F2F2EF", color: "#1C1B18" }}
    >
      {children}
    </div>
  )
}
