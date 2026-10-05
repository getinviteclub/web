import { Navbar } from "@/components/marketing/Navbar"
import { Hero } from "@/components/marketing/Hero"
import { Manifiesto } from "@/components/marketing/Manifiesto"
import { Coleccion } from "@/components/marketing/Coleccion"
import { Realizadas } from "@/components/marketing/Realizadas"
import { LaInvitacion } from "@/components/marketing/LaInvitacion"
import { Secciones } from "@/components/marketing/Secciones"
import { ComoTrabajamos } from "@/components/marketing/ComoTrabajamos"
import { Cifras } from "@/components/marketing/Cifras"
import { TestimonioDestacado } from "@/components/marketing/TestimonioDestacado"
import { Testimonios } from "@/components/marketing/Testimonios"
import { Estudio } from "@/components/marketing/Estudio"
import { Faqs } from "@/components/marketing/Faqs"
import { CtaFinal } from "@/components/marketing/CtaFinal"
import { Footer } from "@/components/marketing/Footer"

/**
 * La home, contada como el catálogo de un estudio (referencia: Avela
 * White): qué somos → la colección → cómo queda en la vida real → qué
 * incluye y cuánto sale → qué trae adentro → cómo trabajamos → qué dicen
 * → quiénes somos → dudas → cierre.
 *
 * La colección va apenas después del manifiesto: lo primero que hay que
 * ver son los diseños, que son el activo real.
 *
 * El precio aparece una sola vez, en <LaInvitacion>, como un paquete
 * completo y no como una tabla de planes.
 */
export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <Manifiesto />
        <Coleccion />
        <Realizadas />
        <LaInvitacion />
        <Secciones />
        <ComoTrabajamos />
        <Cifras />
        <TestimonioDestacado />
        <Testimonios />
        <Estudio />
        <Faqs />
        <CtaFinal />
      </main>
      <Footer />
    </>
  )
}
