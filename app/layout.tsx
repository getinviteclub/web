import type { Metadata } from "next";
import { Inter, Instrument_Serif } from "next/font/google";
import { cn } from "@/lib/utils";
import "./globals.css";

// Grotesca neutra: cuerpo, UI y labels. Es la única sans del sistema.
const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

// Serif de alto contraste para headlines, con su itálica para énfasis
// puntual. Un solo peso (400): la jerarquía la da el tamaño, no el grosor.
const instrumentSerif = Instrument_Serif({
  subsets: ["latin"],
  weight: ["400"],
  style: ["normal", "italic"],
  variable: "--font-instrument",
  display: "swap",
});

export const metadata: Metadata = {
  title: "GetInviteClub — Invitaciones digitales de boda",
  description:
    "Invitaciones digitales y sitios web de boda de alta gama para LATAM. Diseño editorial, RSVP integrado y entrega en 72 h.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="es"
      className={cn(inter.variable, instrumentSerif.variable)}
    >
      <body className="antialiased">{children}</body>
    </html>
  );
}
