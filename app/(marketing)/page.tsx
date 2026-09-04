import { Navbar } from "@/components/marketing/Navbar"
import { Hero } from "@/components/marketing/Hero"
import { ComoFunciona } from "@/components/marketing/ComoFunciona"
import { Galeria } from "@/components/marketing/Galeria"
// Proceso: oculto (a pedido) porque repite lo que ya cuenta ComoFunciona
// justo después del header. El componente queda intacto en
// components/marketing/ para reutilizarlo más adelante o en otra sección.
// import { Proceso } from "@/components/marketing/Proceso"
// La lista completa de funcionalidades vive en el detalle de cada diseño.
// Acá <Integraciones> quedó como un vistazo de seis nombres: en la home la
// pregunta todavía es "¿esto me sirve?", no "¿qué trae exactamente?".
import { Integraciones } from "@/components/marketing/Integraciones"
import { Testimonios } from "@/components/marketing/Testimonios"
import { QuienesSomos } from "@/components/marketing/QuienesSomos"
import { Precio } from "@/components/marketing/Precio"
import { Faqs } from "@/components/marketing/Faqs"
import { CtaFinal } from "@/components/marketing/CtaFinal"
import { Footer } from "@/components/marketing/Footer"
// BotonWhatsappFlotante: sacado de la página por ahora (a pedido). El
// componente queda intacto en components/marketing/ para reactivarlo.
// import { BotonWhatsappFlotante } from "@/components/marketing/BotonWhatsappFlotante"

export default function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      {/* Qué es → diseños → cómo funciona → qué puede incluir → confianza
          → marca → precio → objeciones → cierre.

          Ya no hay sección de planes: se vende UNA invitación, no tres
          paquetes. <Precio> dice el número y manda al catálogo. */}
      {/* Galería al segundo viewport: la auditoría marca el salto
          hero → galería como el mayor contribuyente al bounce. Lo primero
          después del hero tiene que ser el activo real, los diseños. */}
      <Galeria />
      <ComoFunciona />
      {/* <Proceso /> */}
      <Integraciones />
      <Testimonios />
      <QuienesSomos />
      <Precio />
      <Faqs />
      <CtaFinal />
      <Footer />
    </>
  )
}
