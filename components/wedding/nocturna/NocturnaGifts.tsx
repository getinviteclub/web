"use client"

import { useState } from "react"
import type { WeddingContent } from "@/content/wedding/types"
import { NOCTURNA_COPY as C } from "@/content/wedding/nocturna/copy"
import { useCopy } from "@/lib/hooks/use-copy"
import { Reveal } from "@/components/ui/reveal"
import { NcHead } from "./NcHead"

/**
 * Regalos: una tarjeta de papelería con doble marco (referencia: la
 * invitación "CJ"). Pesos o dólares como dos links, los datos en filas
 * y "Copiar" al lado de lo que hace falta copiar.
 */
export function NocturnaGifts({ content }: { content: WeddingContent }) {
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
    <section id="regalos" className="px-6 py-24 md:py-32">
      <NcHead script={C.gifts.script} title={C.gifts.title} />

      <Reveal from="up" className="nc-card mx-auto max-w-lg px-8 py-14 text-center sm:px-14">
        <p className="mx-auto max-w-[34ch]">{C.gifts.intro}</p>

        {monedas.length > 1 && (
          <div className="mt-8 flex justify-center gap-8" role="tablist">
            {monedas.map((m) => (
              <button
                key={m}
                type="button"
                role="tab"
                aria-selected={m === moneda}
                onClick={() => setMoneda(m)}
                className={m === moneda ? "nc-sans nc-link" : "nc-sans nc-muted pb-[3px]"}
              >
                {C.gifts.tabs[m]}
              </button>
            ))}
          </div>
        )}

        <dl className="mt-10 space-y-5">
          {filas.map((f) => (
            <div key={f.label}>
              <dt className="nc-sans nc-muted">{f.label}</dt>
              <dd className="mt-1">{f.valor}</dd>
            </div>
          ))}
          {copiables.map((f) => (
            <div key={f.clave} className="border-t border-[var(--nc-rule)] pt-5">
              <dt className="nc-sans nc-muted">{f.label}</dt>
              <dd className="nc-display mt-1 break-all text-[22px] tracking-[0.04em]">{f.valor}</dd>
              <button type="button" onClick={() => copiar(f.valor, f.clave)} className="nc-sans nc-link mt-2">
                {copiado === f.clave ? C.gifts.copiado : C.gifts.copiar}
              </button>
            </div>
          ))}
        </dl>
        {cuenta.swift && <p className="nc-sans nc-muted mt-6">SWIFT {cuenta.swift}</p>}
      </Reveal>
    </section>
  )
}
