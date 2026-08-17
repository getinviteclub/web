"use client"

import { useEffect, useRef, useState } from "react"
import { cn } from "@/lib/utils"

type RevealProps = {
  children: React.ReactNode
  /** Dirección del desplazamiento de entrada. */
  from?: "left" | "right" | "up"
  className?: string
}

/**
 * Envoltorio de microinteracción: el contenido entra con fade + un
 * desplazamiento lateral leve al cruzar el viewport (ver .reveal en
 * globals.css). No agrega jerarquía visual ni cambia el contenido, solo
 * dispara la animación una vez por elemento.
 */
export function Reveal({ children, from = "up", className }: RevealProps) {
  const ref = useRef<HTMLDivElement>(null)
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const node = ref.current
    if (!node) return

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true)
          observer.disconnect()
        }
      },
      { threshold: 0.2 }
    )

    observer.observe(node)
    return () => observer.disconnect()
  }, [])

  return (
    <div
      ref={ref}
      data-from={from}
      className={cn("reveal", visible && "is-visible", className)}
    >
      {children}
    </div>
  )
}
