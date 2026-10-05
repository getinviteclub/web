import type { ComponentType } from "react"
import type { TrazoProps } from "./trazo"
import { Sobre, Pluma, Regalo, Mapa, Llave } from "./papeleria"
import { Copas, Torta, Velas, Disco, Anillos } from "./celebracion"
import { Camara, Reloj, Arena, Mono, Auto, Ramo } from "./objetos"
import { Calendario, Menu, Pregunta, Libro, Qr, Mesas } from "./detalles"

/**
 * Las ilustraciones de trazo fino, por nombre.
 *
 * El content las pide por clave (`ilustracion: "sobre"`) y no importa el
 * componente: así un copy nuevo puede elegir dibujo sin tocar código.
 */
export const ILUSTRACIONES = {
  sobre: Sobre,
  pluma: Pluma,
  regalo: Regalo,
  mapa: Mapa,
  llave: Llave,
  copas: Copas,
  torta: Torta,
  velas: Velas,
  disco: Disco,
  anillos: Anillos,
  camara: Camara,
  reloj: Reloj,
  arena: Arena,
  mono: Mono,
  auto: Auto,
  ramo: Ramo,
  calendario: Calendario,
  menu: Menu,
  pregunta: Pregunta,
  libro: Libro,
  qr: Qr,
  mesas: Mesas,
} satisfies Record<string, ComponentType<TrazoProps>>

export type Ilustracion = keyof typeof ILUSTRACIONES

export function Dibujo({
  nombre,
  ...props
}: TrazoProps & { nombre: Ilustracion }) {
  const Componente = ILUSTRACIONES[nombre]
  return <Componente {...props} />
}
