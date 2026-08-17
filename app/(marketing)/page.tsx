import { Navbar } from "@/components/marketing/Navbar"
import { Hero } from "@/components/marketing/Hero"
import { ComoFunciona } from "@/components/marketing/ComoFunciona"
import { Galeria } from "@/components/marketing/Galeria"
import { Proceso } from "@/components/marketing/Proceso"
import { Integraciones } from "@/components/marketing/Integraciones"
import { Testimonios } from "@/components/marketing/Testimonios"
import { QuienesSomos } from "@/components/marketing/QuienesSomos"
import { Pricing } from "@/components/marketing/Pricing"
import { Faqs } from "@/components/marketing/Faqs"
import { CtaFinal } from "@/components/marketing/CtaFinal"
import { Footer } from "@/components/marketing/Footer"
import { BotonWhatsappFlotante } from "@/components/marketing/BotonWhatsappFlotante"

export default function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      {/* Beneficio → deseo → facilidad → prueba → marca → precio → objeciones → cierre */}
      <ComoFunciona />
      <Galeria />
      <Proceso />
      <Integraciones />
      <Testimonios />
      <QuienesSomos />
      <Pricing />
      <Faqs />
      <CtaFinal />
      <Footer />
      <BotonWhatsappFlotante />
    </>
  )
}
