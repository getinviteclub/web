import type { Metadata } from "next";
import { Inter, Instrument_Serif } from "next/font/google";
import { cn } from "@/lib/utils";
import "./globals.css";

/**
 * Las dos familias son las del logo: "INVITE" es una grotesca pesada en
 * mayúsculas y "CLUB" una serif itálica condensada. El sitio usa la misma
 * receta para equilibrar marca y tono editorial:
 *
 *   · la serif (Instrument Serif) pone la emoción: titulares e itálicas;
 *   · la grotesca (Inter) pone la estructura: cuerpo, y en mayúsculas
 *     con peso los labels y CTA, que es el gesto de "INVITE".
 */
const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const instrumentSerif = Instrument_Serif({
  subsets: ["latin"],
  weight: ["400"],
  style: ["normal", "italic"],
  variable: "--font-instrument",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Invite Club — Invitaciones digitales de casamiento",
  description:
    "Una colección de invitaciones digitales de autor. Ustedes eligen el diseño; nosotros la completamos con su historia y se la entregamos lista para enviar.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es" className={cn(inter.variable, instrumentSerif.variable)}>
      <body className="antialiased">{children}</body>
    </html>
  );
}
