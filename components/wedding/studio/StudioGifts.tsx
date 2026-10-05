"use client"

import { useState } from "react"
import type { WeddingContent } from "@/content/wedding/types"
import { STUDIO_COPY as C } from "@/content/wedding/studio/copy"
import { useCopy } from "@/lib/hooks/use-copy"
import { Reveal } from "@/components/ui/reveal"
import { Regalo } from "@/components/ui/illustrations/papeleria"
import { SectionHead } from "./SectionHead"

/**
 * Regalos: los datos bancarios en una tarjeta de papel, con selector
 * pesos/dólares y "copiar" en un toque para el alias y el CBU. Misma
 * funcionalidad que el de Aura.
 */
export function StudioGifts({ content }: { content: WeddingContent }) {
  const monedas = content.bankAccounts.map((c) => c.currency)
  const [moneda, setMoneda] = useState(monedas[0] ?? "ARS")
  const { copiado, copiar } = useCopy()
  const cuenta = content.bankAccounts.find((c) => c.currency === moneda) ?? content.bankAccounts[0]
  if (!cuenta) return null

  const filas = [
    { label: C.gifts.banco, valor: cuenta.bankName },
    { label: C.gifts.titular, valor: cuenta.holder },
    { label: C.gifts.documento, valor: cuenta.cuitOrDni },
  ]
  const copiables = [
    { clave: "alias", label: C.gifts.alias, valor: cuenta.alias },
    { clave: "cbu", label: moneda === "ARS" ? C.gifts.cbuARS : C.gifts.cbuUSD, valor: cuenta.cbu },
  ]

  return (
    <section id="regalos" className="border-t border-[var(--st-rule)] px-6 py-24 md:py-32">
      <SectionHead label={C.gifts.label} title={C.gifts.title} nota={C.gifts.intro} />

      <Reveal from="up" className="mx-auto max-w-2xl bg-[var(--st-card)] px-6 py-10 shadow-[0_18px_40px_-24px_rgba(42,38,34,.4)] sm:px-12">
        <Regalo className="st-ink mx-auto w-20" />

        {monedas.length > 1 && (
          <div className="mt-8 flex justify-center gap-3" role="tablist">
            {monedas.map((m) => (
              <button key={m} type="button" role="tab" aria-selected={m === moneda} data-activo={m === moneda} onClick={() => setMoneda(m)} className="st-btn !px-5 !py-2">
                {C.gifts.tabs[m]}
              </button>
            ))}
          </div>
        )}

        <dl className="mt-10 divide-y divide-[var(--st-rule)]">
          {filas.map((f) => (
            <div key={f.label} className="flex flex-col gap-1 py-4 sm:flex-row sm:items-baseline sm:justify-between">
              <dt className="st-mono st-muted text-[11px]">{f.label}</dt>
              <dd className="text-lg sm:text-right">{f.valor}</dd>
            </div>
          ))}
          {copiables.map((f) => (
            <div key={f.clave} className="py-4">
              <dt className="st-mono st-muted text-[11px]">{f.label}</dt>
              <dd className="mt-1 flex items-center justify-between gap-4">
                <span className="st-hand min-w-0 break-all text-3xl font-semibold">{f.valor}</span>
                <button type="button" onClick={() => copiar(f.valor, f.clave)} className="st-btn shrink-0 !px-4 !py-2" data-activo={copiado === f.clave}>
                  {copiado === f.clave ? C.gifts.copiado : C.gifts.copiar}
                </button>
              </dd>
            </div>
          ))}
          {cuenta.swift && (
            <div className="flex justify-between py-4">
              <dt className="st-mono st-muted text-[11px]">SWIFT</dt>
              <dd className="st-mono text-xs">{cuenta.swift}</dd>
            </div>
          )}
        </dl>

        <p className="st-hand st-ink mt-8 text-center text-4xl">{C.gifts.gracias}</p>
      </Reveal>
    </section>
  )
}
