import { cn } from "@/lib/utils"

type Message = {
  from: "cliente" | "nosotros"
  text: string
  time: string
}

const MESSAGES: Message[] = [
  { from: "cliente", text: "Hola! Nos casamos el 14 de marzo 🤍", time: "10:32" },
  { from: "nosotros", text: "¡Felicitaciones! Te paso los diseños ahora mismo.", time: "10:34" },
  { from: "cliente", text: "Buenísimo, gracias!", time: "10:35" },
]

/** Conversación de WhatsApp simulada. Sin imágenes: todo CSS. */
export function ChatMockup({ className }: { className?: string }) {
  return (
    <div
      className={cn("flex flex-col gap-2.5", className)}
      role="img"
      aria-label="Conversación de ejemplo por WhatsApp para empezar una invitación"
    >
      {MESSAGES.map((msg, i) => {
        const mine = msg.from === "nosotros"
        return (
          <div
            key={i}
            className={cn("flex", mine ? "justify-end" : "justify-start")}
          >
            <div
              className={cn(
                "max-w-[85%] rounded-2xl px-3.5 py-2.5 text-sm leading-snug shadow-sm",
                mine
                  ? "rounded-br-sm bg-[#DCF8C6] text-ink"
                  : "rounded-bl-sm bg-white text-ink"
              )}
            >
              {msg.text}
              <span className="note-copy mt-1 block text-right">
                {msg.time}
              </span>
            </div>
          </div>
        )
      })}
    </div>
  )
}
