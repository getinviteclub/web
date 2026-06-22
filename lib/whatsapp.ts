const WHATSAPP_NUMBER = "5491130953594"

export function waLink(mensaje: string): string {
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(mensaje)}`
}
