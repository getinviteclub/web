"use client"

import { useEffect, useState } from "react"

export type TimeLeft = { days: number; hours: number; minutes: number; seconds: number }

const ZERO: TimeLeft = { days: 0, hours: 0, minutes: 0, seconds: 0 }

/**
 * Cuánto falta hasta `isoTarget`, actualizado cada segundo. Genérico a
 * cualquier diseño de invitación. Arranca en cero en el servidor y se
 * calcula recién en el cliente: así el HTML no queda con un número viejo
 * ni hay diferencia de hidratación.
 */
export function useCountdown(isoTarget: string): TimeLeft {
  const [left, setLeft] = useState<TimeLeft>(ZERO)

  useEffect(() => {
    const target = new Date(isoTarget).getTime()

    const calcular = () => {
      const diff = target - Date.now()
      if (diff <= 0) return setLeft(ZERO)
      setLeft({
        days: Math.floor(diff / 86_400_000),
        hours: Math.floor((diff / 3_600_000) % 24),
        minutes: Math.floor((diff / 60_000) % 60),
        seconds: Math.floor((diff / 1000) % 60),
      })
    }

    calcular()
    const id = setInterval(calcular, 1000)
    return () => clearInterval(id)
  }, [isoTarget])

  return left
}
