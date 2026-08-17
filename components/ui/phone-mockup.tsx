import Image from "next/image"
import { cn } from "@/lib/utils"

type PhoneMockupProps = {
  src: string
  alt: string
  className?: string
  priority?: boolean
}

/**
 * Marco de celular hecho solo con CSS — no necesita assets.
 * La pantalla mantiene ratio 9:19.5, igual que un teléfono real.
 */
export function PhoneMockup({
  src,
  alt,
  className,
  priority,
}: PhoneMockupProps) {
  return (
    <div className={cn("relative mx-auto w-full max-w-[260px]", className)}>
      <div className="relative aspect-[9/19.5] overflow-hidden rounded-none border-[7px] border-ink bg-ink">
        <Image
          src={src}
          alt={alt}
          fill
          priority={priority}
          sizes="260px"
          className="object-cover"
        />
        {/* Notch */}
        <div className="absolute left-1/2 top-0 h-[22px] w-[92px] -translate-x-1/2 rounded-none bg-ink" />
      </div>
    </div>
  )
}
