import type { Metadata } from "next";
import { Inter, Fraunces, Space_Mono } from "next/font/google";
import { cn } from "@/lib/utils";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

// Serif de alto contraste para headlines, con su itálica para énfasis puntual.
const fraunces = Fraunces({
  subsets: ["latin"],
  weight: ["400"],
  style: ["normal", "italic"],
  variable: "--font-fraunces",
  display: "swap",
});

// Monoespaciada para labels, nav, precios y CTAs.
const spaceMono = Space_Mono({
  subsets: ["latin"],
  weight: ["400", "700"],
  variable: "--font-mono",
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
      className={cn(inter.variable, fraunces.variable, spaceMono.variable)}
    >
      <body className="antialiased">{children}</body>
    </html>
  );
}
