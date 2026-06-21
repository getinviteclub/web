import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { cn } from "@/lib/utils";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
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
    <html lang="es" className={cn(inter.variable)}>
      <body className="antialiased">{children}</body>
    </html>
  );
}
