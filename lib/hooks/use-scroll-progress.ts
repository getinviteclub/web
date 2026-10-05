"use client"

import { useEffect, useRef, useState } from "react"

/** 0–1, sin salirse. */
export const clamp01 = (n: number) => Math.min(1, Math.max(0, n))

/** Arranca rápido y frena suave: el movimiento responde enseguida al
 *  scroll y se asienta sin golpe. Más fluido que una curva de ida y
 *  vuelta, que arranca lento y se siente "trabado" al empezar a bajar. */
export const easeOut = (t: number) => 1 - Math.pow(1 - t, 3)

/** Cuánto se acerca el valor mostrado al real en cada frame (0–1). Más
 *  bajo = más inercia. 0.1 se siente como seda sin quedar atrasado. */
const SUAVIDAD = 0.1

/**
 * Cuánto se recorrió una sección alta con un hijo sticky: 0 cuando su
 * borde de arriba toca el de la ventana, 1 cuando terminó de pasar.
 *
 * El valor NO va pegado al scroll: lo persigue con inercia (interpolación
 * por frame). Pegado 1:1, cada tirón de la rueda del mouse se veía como un
 * salto; así la animación fluye entre tirón y tirón.
 *
 * No re-renderiza: llama a `onProgress` en cada frame para que el
 * componente escriba variables CSS. Con prefers-reduced-motion no escucha
 * el scroll y devuelve `estatico`.
 */
export function useScrollProgress<T extends HTMLElement>(
  onProgress: (p: number) => void
) {
  const ref = useRef<T>(null)
  const callback = useRef(onProgress)
  callback.current = onProgress
  const [estatico, setEstatico] = useState(false)

  useEffect(() => {
    const node = ref.current
    if (!node) return

    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      setEstatico(true)
      callback.current(0)
      return
    }

    const objetivo = () => {
      const recorrido = node.offsetHeight - window.innerHeight
      return recorrido > 0 ? clamp01(-node.getBoundingClientRect().top / recorrido) : 0
    }

    let actual = objetivo()
    let frame = 0
    callback.current(actual)

    const paso = () => {
      const meta = objetivo()
      actual += (meta - actual) * SUAVIDAD
      // Cerca del destino se clava y se corta el loop: no queda un rAF
      // corriendo para siempre con la página quieta.
      if (Math.abs(meta - actual) < 0.0005) {
        actual = meta
        frame = 0
      } else {
        frame = window.requestAnimationFrame(paso)
      }
      callback.current(actual)
    }
    const pedir = () => {
      if (!frame) frame = window.requestAnimationFrame(paso)
    }

    window.addEventListener("scroll", pedir, { passive: true })
    window.addEventListener("resize", pedir)
    return () => {
      window.removeEventListener("scroll", pedir)
      window.removeEventListener("resize", pedir)
      if (frame) window.cancelAnimationFrame(frame)
    }
  }, [])

  return { ref, estatico }
}
