import { Navbar } from "@/components/marketing/Navbar"
import { Hero } from "@/components/marketing/Hero"
import { ComoFunciona } from "@/components/marketing/ComoFunciona"
import { Galeria } from "@/components/marketing/Galeria"
// Proceso: oculto (a pedido) porque repite lo que ya cuenta ComoFunciona
// justo después del header. El componente queda intacto en
// components/marketing/ para reutilizarlo más adelante o en otra sección.
// import { Proceso } from "@/components/marketing/Proceso"
import { Testimonios } from "@/components/marketing/Testimonios"
import { QuienesSomos } from "@/components/marketing/QuienesSomos"
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
      {/* Qué es → diseños → cómo funciona → confianza → marca →
          objeciones → cierre.

          La home NO habla de precio (decisión de Facu): el número vive en
          el detalle de cada diseño, que es donde alguien que ya eligió lo
          busca. Tampoco lista funcionalidades: <ComoFunciona> cuenta el
          servicio y manda al catálogo. */}
      {/* Galería al segundo viewport: la auditoría marca el salto
          hero → galería como el mayor contribuyente al bounce. Lo primero
          después del hero tiene que ser el activo real, los diseños. */}
      <Galeria />
      <ComoFunciona />
      {/* <Proceso /> */}
      <Testimonios />
      <QuienesSomos />
      <Faqs />
      <CtaFinal />
      <Footer />
    </>
  )
}
