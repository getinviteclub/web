"use client"

import { useEffect, useState } from "react"
import { Reveal } from "@/components/ui/reveal"
import type { AuraContent } from "@/content/wedding/aura/types"

type TimeLeft = { days: number; hours: number; minutes: number; seconds: number }

const ZERO: TimeLeft = { days: 0, hours: 0, minutes: 0, seconds: 0 }

/** Cuenta regresiva en vivo hasta `content.date.isoTargetDate`. Port fiel del original de Flor. */
export function CountdownSection({ content }: { content: AuraContent }) {
  const [timeLeft, setTimeLeft] = useState<TimeLeft>(ZERO)

  useEffect(() => {
    const target = new Date(content.date.isoTargetDate).getTime()

    const calculate = () => {
      const difference = target - Date.now()
      if (difference <= 0) {
        setTimeLeft(ZERO)
        return
      }
      setTimeLeft({
        days: Math.floor(difference / (1000 * 60 * 60 * 24)),
        hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
        minutes: Math.floor((difference / 1000 / 60) % 60),
        seconds: Math.floor((difference / 1000) % 60),
      })
    }

    calculate()
    const interval = setInterval(calculate, 1000)
    return () => clearInterval(interval)
  }, [content.date.isoTargetDate])

  const formatUnit = (n: number) => n.toString().padStart(2, "0")

  const units: { label: string; value: string }[] = [
    { label: "Días", value: String(timeLeft.days) },
    { label: "Horas", value: formatUnit(timeLeft.hours) },
    { label: "Minutos", value: formatUnit(timeLeft.minutes) },
    { label: "Segundos", value: formatUnit(timeLeft.seconds) },
  ]

  return (
    <section
      id="countdown"
      className="relative flex min-h-0 items-center justify-center overflow-hidden bg-[#F2F2EF] py-16 md:min-h-[70vh] md:py-24"
    >
      <div className="mx-auto w-full max-w-6xl px-6 text-center text-[#1C1B18] md:px-12">
        <Reveal from="up">
          <div className="mb-[-8px] flex items-center justify-center gap-3 font-sans text-[10px] tracking-[0.11em] text-[#3A3833]">
            <span className="font-serif-display text-base italic tracking-normal text-[#20221C]">
              III. Hacia nuestro gran día
            </span>
          </div>
        </Reveal>

        <Reveal from="up" className="font-script mb-8 text-[45px] leading-none text-[#1C1B18]">
          Comienza la cuenta regresiva
        </Reveal>

        <Reveal from="up" className="mx-auto max-w-4xl px-4 py-6 md:px-10">
          <div className="grid grid-cols-4 items-center gap-2 sm:gap-6">
            {units.map((unit) => (
              <div key={unit.label} className="flex flex-col items-center">
                <span className="font-serif-display text-3xl font-light leading-none tracking-tight text-[#1C1B18] sm:text-5xl md:text-7xl lg:text-8xl">
                  {unit.value}
                </span>
                <span className="mt-3 font-sans text-[9px] tracking-[0.13em] text-[#3A3833] sm:text-xs">
                  {unit.label}
                </span>
              </div>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  )
}
