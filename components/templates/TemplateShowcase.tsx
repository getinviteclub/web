import Image from "next/image"
import { type Template, FOTO_SHOWCASE_DEFAULT } from "@/content/templates"
import { PhoneMockup } from "@/components/ui/phone-mockup"

/**
 * Columna izquierda del detalle: la evidencia visual.
 *
 * Composición en dos capas, como studiogail.co: una FOTO de casamiento a
 * sangre de fondo y el teléfono con LA INVITACIÓN encima.
 *
 * El reparto de roles importa y es donde esto se rompe fácil: atrás va
 * fotografía —contexto, nada de texto—, adelante va la pieza de diseño. Al
 * revés se ven dos invitaciones superpuestas y los dos textos compiten;
 * pasó con `coverImage` de fondo, que no es una foto sino la invitación.
 *
 * Por eso el teléfono muestra `coverImage`, que es la pieza de cada
 * diseño, y no `image`: ese campo hoy apunta a fotos recortadas y todos
 * los diseños salvo uno comparten la misma.
 *
 * `aspect-[4/5]` con `object-cover`: la foto se recorta al formato en vez
 * de estirarse, sirve cualquier original y la columna mantiene la
 * proporción de la referencia en las dos anchuras.
 *
 * El velo es apenas 12% de negro. No está para oscurecer la foto sino para
 * despegar el borde del teléfono cuando abajo cae una zona clara —un
 * vestido, el cielo—, que era donde el marco se perdía.
 */
export function TemplateShowcase({ template }: { template: Template }) {
  return (
    <div className="relative aspect-[4/5] w-full overflow-hidden bg-bone">
      <Image
        src={template.showcaseImage ?? FOTO_SHOWCASE_DEFAULT}
        alt=""
        fill
        priority
        sizes="(min-width: 768px) 50vw, 100vw"
        className="object-cover"
      />
      <div className="absolute inset-0 bg-black/[.12]" />

      <div className="absolute inset-0 flex items-center justify-center p-8">
        <PhoneMockup
          src={template.coverImage}
          alt={`Invitación ${template.name}`}
          priority
          fit="contain"
          className="max-w-[min(58%,230px)]"
        />
      </div>
    </div>
  )
}
