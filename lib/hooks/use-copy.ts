"use client"

import { useEffect, useRef, useState } from "react"

/**
 * Copiar al portapapeles con un "¡copiado!" que se apaga solo.
 * `copiado` es la clave del último texto copiado (para saber qué botón
 * mostrar como confirmado), o null.
 */
export function useCopy(duracion = 2500) {
  const [copiado, setCopiado] = useState<string | null>(null)
  const timer = useRef<ReturnType<typeof setTimeout>>()

  useEffect(() => () => clearTimeout(timer.current), [])

  const copiar = async (texto: string, clave: string) => {
    try {
      await navigator.clipboard.writeText(texto)
    } catch {
      // Sin permiso de portapapeles (http, iframe): el dato igual está a la vista.
      return
    }
    setCopiado(clave)
    clearTimeout(timer.current)
    timer.current = setTimeout(() => setCopiado(null), duracion)
  }

  return { copiado, copiar }
}
