import Image from "next/image"
import { MapPin, Copy, Play, Check, Info, Shirt, HelpCircle } from "lucide-react"
import type { FeatureVisual as Key } from "@/content/integraciones"
import { MOCKUPS } from "@/content/mockups"

const panel =
  "flex h-full w-full flex-col justify-center gap-3 rounded-none bg-white/[0.07] p-6 backdrop-blur-md"
const tarjeta = "rounded-none bg-white/10 p-4"

function Confirmacion() {
  const invitados = [
    { name: "Familia Gómez", detail: "Sin TACC" },
    { name: "Tomás Ruiz", detail: "En auto propio" },
    { name: "Julieta Paz", detail: "Vegetariana" },
  ]
  return (
    <div className={panel}>
      <div className={tarjeta}>
        <div className="mb-3 flex items-baseline justify-between">
          <span className="label-copy label-copy-inverse">Confirmados</span>
          <span className="text-2xl font-bold leading-none">
            42
          </span>
        </div>
        <div className="flex flex-col gap-2.5">
          {invitados.map((inv) => (
            <div
              key={inv.name}
              className="flex items-center justify-between gap-3"
            >
              <span className="flex items-center gap-2 text-sm">
                <Check className="size-3.5 shrink-0 text-white/70" />
                {inv.name}
              </span>
              <span className="note-copy note-copy-inverse shrink-0">
                {inv.detail}
              </span>
            </div>
          ))}
        </div>
      </div>
      <p className="note-copy note-copy-inverse">
        Formulario y planilla con los datos de cada invitado
      </p>
    </div>
  )
}

function Mapa() {
  return (
    <div className={panel}>
      <div className="relative h-40 overflow-hidden rounded-none bg-white/10">
        {/* Calles insinuadas */}
        <div className="absolute inset-0 opacity-40">
          <div className="absolute left-0 right-0 top-1/3 h-px bg-white/50" />
          <div className="absolute left-0 right-0 top-2/3 h-px bg-white/50" />
          <div className="absolute bottom-0 left-1/4 top-0 w-px bg-white/50" />
          <div className="absolute bottom-0 left-2/3 top-0 w-px bg-white/50" />
        </div>
        <MapPin className="absolute left-1/2 top-1/2 size-7 -translate-x-1/2 -translate-y-full text-inverse" />
      </div>
      <p className="note-copy note-copy-inverse">Estancia La Serena · Pilar</p>
    </div>
  )
}

function Calendario() {
  const dias = Array.from({ length: 30 }, (_, i) => i + 1)
  return (
    <div className={panel}>
      <p className="text-sm font-semibold">Marzo 2027</p>
      <div className="grid grid-cols-7 gap-1.5">
        {dias.map((d) => (
          <span
            key={d}
            className={`flex aspect-square items-center justify-center rounded-none text-[11px] ${
              d === 14
                ? "bg-inverse font-semibold text-ink"
                : "bg-white/10 text-white/60"
            }`}
          >
            {d}
          </span>
        ))}
      </div>
    </div>
  )
}

function Regalos() {
  return (
    <div className={panel}>
      <div className={tarjeta}>
        <p className="label-copy label-copy-inverse">Alias</p>
        <div className="mt-1 flex items-center justify-between gap-3">
          <span className="font-semibold">boda.mica.nico</span>
          <Copy className="size-4 text-white/70" />
        </div>
      </div>
      <div className={tarjeta}>
        <p className="label-copy label-copy-inverse">CBU</p>
        <span className="mt-1 block font-semibold">0000003100010000000001</span>
      </div>
    </div>
  )
}

function Galeria() {
  const fotos = [MOCKUPS.clasica, MOCKUPS.manuscrita, MOCKUPS.editorial]
  return (
    <div className={panel}>
      <div className="grid grid-cols-3 gap-2">
        {fotos.map((src) => (
          <div
            key={src}
            className="relative aspect-[3/4] overflow-hidden rounded-none bg-white/10"
          >
            <Image src={src} alt="" fill sizes="120px" className="object-cover" />
          </div>
        ))}
      </div>
      <p className="note-copy note-copy-inverse">12 fotos de ustedes</p>
    </div>
  )
}

function InformacionEvento() {
  const datos = [
    { label: "Lugar", value: "Estancia La Serena" },
    { label: "Estacionamiento", value: "Disponible en el predio" },
    { label: "Accesos", value: "Portón norte" },
  ]
  return (
    <div className={panel}>
      <div className={tarjeta}>
        <div className="label-copy label-copy-inverse mb-3 flex items-center gap-2">
          <Info className="size-3.5" />
          Antes de llegar
        </div>
        <div className="flex flex-col gap-2.5">
          {datos.map((d) => (
            <div
              key={d.label}
              className="flex items-baseline justify-between gap-3 text-sm"
            >
              <span className="label-copy label-copy-inverse">{d.label}</span>
              <span className="font-medium">{d.value}</span>
            </div>
          ))}
        </div>
      </div>
      <p className="note-copy note-copy-inverse">
        Todo lo que necesitan saber antes de llegar
      </p>
    </div>
  )
}

function DressCode() {
  return (
    <div className={panel}>
      <div className={`${tarjeta} flex items-center gap-3`}>
        <span className="flex size-9 shrink-0 items-center justify-center rounded-none bg-white/15">
          <Shirt className="size-4" />
        </span>
        <div>
          <p className="text-sm font-semibold">Formal</p>
          <p className="note-copy note-copy-inverse">Colores tierra, evitar blanco</p>
        </div>
      </div>
      <p className="note-copy note-copy-inverse">Cómo vestirse, todo clarito</p>
    </div>
  )
}

function Faq() {
  const preguntas = [
    "¿Hay estacionamiento?",
    "¿Puedo llevar +1?",
    "¿Hasta qué hora es la fiesta?",
  ]
  return (
    <div className={panel}>
      {preguntas.map((p) => (
        <div key={p} className={`${tarjeta} flex items-center gap-3`}>
          <span className="flex size-8 shrink-0 items-center justify-center rounded-none bg-white/15">
            <HelpCircle className="size-4" />
          </span>
          <span className="text-sm">{p}</span>
        </div>
      ))}
    </div>
  )
}

function Playlist() {
  const temas = ["Nuestra canción", "Entrada", "Fiesta"]
  return (
    <div className={panel}>
      {temas.map((t, i) => (
        <div key={t} className={`${tarjeta} flex items-center gap-3`}>
          <span className="flex size-8 shrink-0 items-center justify-center rounded-none bg-white/15">
            {i === 0 ? (
              <Play className="size-3.5 fill-current" />
            ) : (
              <span className="label-copy label-copy-inverse">{i + 1}</span>
            )}
          </span>
          <span className="text-sm">{t}</span>
        </div>
      ))}
    </div>
  )
}

const VISUALES: Record<Key, () => JSX.Element> = {
  confirmacion: Confirmacion,
  mapa: Mapa,
  regalos: Regalos,
  informacion: InformacionEvento,
  calendario: Calendario,
  dresscode: DressCode,
  galeria: Galeria,
  playlist: Playlist,
  faq: Faq,
}

export function FeatureVisual({ id }: { id: Key }) {
  const Visual = VISUALES[id]
  return <Visual />
}
