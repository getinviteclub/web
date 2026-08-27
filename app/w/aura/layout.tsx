import type { Metadata } from "next"
import {
  Pinyon_Script,
  Ibarra_Real_Nova,
  Monsieur_La_Doulaise,
  Jost,
} from "next/font/google"
import { cn } from "@/lib/utils"
import "./aura.css"

/**
 * Layout de la invitación real "Aura" (Valentina & Patricio). Identidad
 * propia, aislada del sitio de marketing: no hereda --font-display ni
 * --font-ui de app/layout.tsx (ese layout raíz solo pone <html>/<body>,
 * las fuentes de acá se aplican sobre ese body vía el wrapper de abajo).
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

export const metadata: Metadata = {
  title: "Valentina & Patricio — 18.11.2027 | Nuestra Boda",
  description:
    "Nos casamos el 18 de noviembre de 2027 en Finca Madero El Ombú, Pilar. Los esperamos para celebrar.",
}

export default function AuraLayout({
  children,
}: {
  children: React.ReactNode
}) {
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
