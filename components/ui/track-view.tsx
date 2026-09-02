"use client"

import { useEffect, useRef } from "react"
import { track, type EventParams, type FunnelEvent } from "@/lib/analytics"

/**
 * Registra un evento cuando la sección entra en pantalla, una sola vez.
 *
 * No pinta nada: es un marcador invisible que se deja adentro de la sección
 * que se quiere medir. Sirve para saber cuánta gente LLEGA a la galería o a
 * precios, que es distinto de cuánta hace click.
 *
 * Observa al elemento PADRE, no a sí mismo: el marcador mide 0×0 px y un
 * IntersectionObserver nunca dispara sobre un elemento sin área.
 *
 * El rootMargin recorta el 45% de abajo del viewport, así el evento salta
 * cuando la sección llegó al medio de la pantalla y no apenas asoma el
 * borde. Funciona igual con secciones altas o bajas, cosa que un threshold
 * por porcentaje no garantiza.
 */
export function TrackView({
  event,
  params,
}: {
  event: FunnelEvent
  params?: EventParams
}) {
  const marcador = useRef<HTMLSpanElement>(null)
  // Fuera del efecto a propósito: `params` es un objeto literal, así que
  // cambia de identidad en cada render y vuelve a correr el efecto. Con la
  // bandera adentro, cada corrida armaba un observer nuevo que podía
  // registrar el mismo evento otra vez.
  const registrado = useRef(false)
  const datos = useRef({ event, params })
  datos.current = { event, params }

  useEffect(() => {
    const seccion = marcador.current?.parentElement
    if (!seccion) return

    const observer = new IntersectionObserver(
      ([entrada]) => {
        if (!entrada.isIntersecting || registrado.current) return
        registrado.current = true
        track(datos.current.event, datos.current.params)
        observer.disconnect()
      },
      { threshold: 0, rootMargin: "0px 0px -45% 0px" }
    )

    observer.observe(seccion)
    return () => observer.disconnect()
  }, [])

  return <span ref={marcador} aria-hidden="true" className="hidden" />
}
