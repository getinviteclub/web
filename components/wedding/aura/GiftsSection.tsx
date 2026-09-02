"use client"

import { useState } from "react"
import { Check, CreditCard, Copy, Globe, Heart } from "lucide-react"
import { Reveal } from "@/components/ui/reveal"
import type { AuraContent } from "@/content/wedding/aura/types"

/** Datos bancarios para regalar la luna de miel, con selector ARS/USD y copiado en 1 click. Port fiel del original de Flor. */
export function GiftsSection({ content }: { content: AuraContent }) {
  const [copiedKey, setCopiedKey] = useState<string | null>(null)
  const [activeTab, setActiveTab] = useState<"ARS" | "USD">("ARS")

  const copyToClipboard = (text: string, key: string) => {
    navigator.clipboard.writeText(text)
    setCopiedKey(key)
    setTimeout(() => setCopiedKey(null), 2500)
  }

  const currentAccount =
    content.bankAccounts.find((acc) => acc.currency === activeTab) ?? content.bankAccounts[0]

  if (!currentAccount) return null

  return (
    <section id="gifts" className="relative overflow-hidden border-t border-[#1C1B18]/10 bg-[#F2F2EF] py-24 md:py-36">
      <div className="mx-auto max-w-7xl px-6 md:px-12">
        <div className="mb-16 flex flex-col justify-between gap-6 border-b border-[#1C1B18]/15 pb-8 md:mb-20 lg:flex-row lg:items-end">
          <div className="shrink-0">
            <div className="mb-3 flex items-center gap-3 font-sans text-[10px] tracking-[0.13em] text-[#3A3833]">
              <span className="font-serif-display text-base italic tracking-normal text-[#20221C]">
                VII. Regalos &amp; luna de miel
              </span>
            </div>
            <h2 className="font-serif-display text-4xl tracking-tight text-[#1C1B18] sm:text-5xl md:text-6xl">
              Regalos
            </h2>
          </div>
          <div className="max-w-2xl lg:text-right">
            <span className="font-script mb-1 block text-[32px] leading-none text-[#1C1B18] sm:text-[45px]">
              Tu presencia es nuestro mayor regalo
            </span>
            <p className="font-serif-editorial text-sm text-[#20221C] sm:text-base">
              El regalo más valioso es que estés con nosotros en este día tan especial.
            </p>
          </div>
        </div>

        <div className="mx-auto max-w-3xl">
          <Reveal from="up" className="border border-[#1C1B18]/10 bg-[#F2F2EF] p-8 sm:p-12">
            <div className="space-y-3 border-b border-[#1C1B18]/10 pb-8 text-center">
              <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-full border border-[#1C1B18]/20 text-[#202D24]">
                <Heart className="h-5 w-5" />
              </div>
              <h3 className="font-serif-display text-2xl text-[#1C1B18] sm:text-3xl">
                Luna de miel &amp; nuevos proyectos
              </h3>
              <p className="font-serif-editorial mx-auto max-w-xl text-base leading-snug text-[#20221C]">
                Si además deseas hacernos un obsequio, podés colaborar con nuestra luna de miel y la construcción de
                nuestro hogar mediante transferencia bancaria.
              </p>
            </div>

            <div className="my-8 flex justify-center">
              <div className="inline-flex border border-[#1C1B18]/15 p-1">
                <button
                  onClick={() => setActiveTab("ARS")}
                  className={`font-serif-display flex items-center gap-2 px-6 py-3 text-xs font-semibold tracking-[0.1em] transition-all sm:px-8 sm:text-sm ${
                    activeTab === "ARS" ? "bg-[#1C1B18] text-[#F2F2EF]" : "text-[#20221C] hover:text-[#1C1B18]"
                  }`}
                >
                  <CreditCard className="hidden h-4 w-4 sm:block" />
                  <span>Transferencia ARS (Argentina)</span>
                </button>
                <button
                  onClick={() => setActiveTab("USD")}
                  className={`font-serif-display flex items-center gap-2 px-6 py-3 text-xs font-semibold tracking-[0.1em] transition-all sm:px-8 sm:text-sm ${
                    activeTab === "USD" ? "bg-[#1C1B18] text-[#F2F2EF]" : "text-[#20221C] hover:text-[#1C1B18]"
                  }`}
                >
                  <Globe className="hidden h-4 w-4 sm:block" />
                  <span>Internacional / USD</span>
                </button>
              </div>
            </div>

            <div className="space-y-5 bg-[#F2F2EF] p-6 sm:p-8">
              <div className="flex flex-col justify-between gap-1 border-b border-[#1C1B18]/10 pb-3 sm:flex-row sm:items-center">
                <span className="font-sans text-xs tracking-[0.1em] text-[#3A3833]">Entidad bancaria</span>
                <span className="font-serif-display text-lg text-[#1C1B18] sm:text-xl">{currentAccount.bankName}</span>
              </div>

              <div className="flex flex-col justify-between gap-1 border-b border-[#1C1B18]/10 pb-3 sm:flex-row sm:items-center">
                <span className="font-sans text-xs tracking-[0.1em] text-[#3A3833]">Titulares</span>
                <span className="font-serif-display text-lg text-[#1C1B18] sm:text-xl">{currentAccount.holder}</span>
              </div>

              <div className="flex flex-col justify-between gap-1 border-b border-[#1C1B18]/10 pb-3 sm:flex-row sm:items-center">
                <span className="font-sans text-xs tracking-[0.1em] text-[#3A3833]">Identificación / CUIT</span>
                <span className="font-serif-display text-lg text-[#1C1B18] sm:text-xl">{currentAccount.cuitOrDni}</span>
              </div>

              <div className="flex flex-col justify-between gap-2 border-b border-[#1C1B18]/10 pb-4 sm:flex-row sm:items-center">
                <div>
                  <span className="mb-0.5 block font-sans text-xs tracking-[0.1em] text-[#3A3833]">Alias</span>
                  <span className="font-serif-display text-base tracking-wide text-[#1C1B18]">{currentAccount.alias}</span>
                </div>
                <button
                  onClick={() => copyToClipboard(currentAccount.alias, "alias")}
                  className="font-serif-display inline-flex items-center gap-2 self-start border border-[#1C1B18]/30 px-4 py-2 text-xs font-semibold tracking-[0.02em] transition-colors hover:border-[#1C1B18] hover:bg-[#1C1B18] hover:text-[#F2F2EF] sm:self-auto sm:text-sm"
                >
                  {copiedKey === "alias" ? (
                    <>
                      <Check className="h-4 w-4 text-green-600" />
                      <span className="font-semibold text-green-700">Copiado</span>
                    </>
                  ) : (
                    <>
                      <Copy className="h-4 w-4" />
                      <span>Copiar alias</span>
                    </>
                  )}
                </button>
              </div>

              <div className="flex flex-col justify-between gap-2 pt-1 sm:flex-row sm:items-center">
                <div>
                  <span className="mb-0.5 block font-sans text-xs tracking-[0.1em] text-[#3A3833]">
                    {activeTab === "ARS" ? "CBU bancario" : "Número de cuenta / routing"}
                  </span>
                  <span className="font-serif-display break-all text-base tracking-wide text-[#1C1B18]">
                    {currentAccount.cbu}
                  </span>
                </div>
                <button
                  onClick={() => copyToClipboard(currentAccount.cbu, "cbu")}
                  className="font-serif-display inline-flex items-center gap-2 self-start border border-[#1C1B18]/30 px-4 py-2 text-xs font-semibold tracking-[0.02em] transition-colors hover:border-[#1C1B18] hover:bg-[#1C1B18] hover:text-[#F2F2EF] sm:self-auto sm:text-sm"
                >
                  {copiedKey === "cbu" ? (
                    <>
                      <Check className="h-4 w-4 text-green-600" />
                      <span className="font-semibold text-green-700">Copiado</span>
                    </>
                  ) : (
                    <>
                      <Copy className="h-4 w-4" />
                      <span>Copiar {activeTab === "ARS" ? "CBU" : "cuenta"}</span>
                    </>
                  )}
                </button>
              </div>

              {currentAccount.swift && (
                <div className="flex flex-col justify-between gap-1 border-t border-[#1C1B18]/10 pt-3 sm:flex-row sm:items-center">
                  <span className="font-sans text-[10px] tracking-[0.13em] text-[#3A3833]">Código SWIFT / BIC</span>
                  <span className="font-mono text-xs text-[#20221C]">{currentAccount.swift}</span>
                </div>
              )}
            </div>

            <div className="mt-8 text-center">
              <span className="font-serif-display text-[14px] italic text-[#1C1B18]">
                ¡Muchísimas gracias por formar parte de nuestro sueño!
              </span>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  )
}
