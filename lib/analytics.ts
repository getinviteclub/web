/**
 * Capa fina de tracking del funnel.
 *
 * La auditoría marca la analítica como prerrequisito de todo el roadmap: hoy
 * es imposible saber dónde se pierde la gente porque el funnel termina en un
 * clic saliente a WhatsApp.
 *
 * ESTO NO ENVÍA NADA TODAVÍA. Empuja los eventos a `window.dataLayer`, que es
 * lo que lee Google Tag Manager. Mientras no exista el contenedor de GTM, los
 * eventos se acumulan en el array y no salen a ningún lado — sin errores y
 * sin romper nada.
 *
 * QUÉ FALTA CONFIGURAR (fuera del código):
 *   1. Crear un contenedor de GTM y pegar su ID en NEXT_PUBLIC_GTM_ID
 *      (.env.local en desarrollo, variables de entorno en Vercel).
 *   2. Montar el script de GTM en app/layout.tsx.
 *   3. En GTM, crear los triggers de "Custom Event" con los nombres de
 *      FUNNEL_EVENTS y enviarlos a GA4.
 *
 * Cuando eso esté, este archivo no cambia.
 */

/** Los eventos del funnel, con nombre estable. */
export const FUNNEL_EVENTS = {
  heroCta: "hero_cta_click",
  viewGallery: "view_gallery",
  viewTemplate: "view_template",
  viewLiveDemo: "view_live_demo",
  viewPricing: "view_pricing",
  whatsappCta: "whatsapp_cta_click",
  // Todavía no existen en el producto (Batch 3). Los nombres se definen acá
  // para que GTM y GA4 se configuren una sola vez.
  startBuilder: "start_builder",
  startCheckout: "start_checkout",
  purchase: "purchase",
} as const

export type FunnelEvent = (typeof FUNNEL_EVENTS)[keyof typeof FUNNEL_EVENTS]

/**
 * Contexto del evento. Los dos que importan para el funnel son `design` y
 * `plan`: sin ellos un `whatsapp_cta_click` dice que alguien escribió, pero
 * no desde qué diseño ni con qué plan en la cabeza — que es justo lo que hay
 * que saber para decidir qué diseño producir primero.
 */
export type EventParams = {
  design?: string
  plan?: string
  [key: string]: string | number | boolean | undefined
}

declare global {
  interface Window {
    dataLayer?: Array<Record<string, unknown>>
  }
}

/**
 * Registra un evento del funnel. Seguro de llamar desde cualquier lado:
 * en el servidor no hace nada, y en el cliente nunca tira si no hay GTM.
 */
export function track(event: FunnelEvent, payload: EventParams = {}) {
  if (typeof window === "undefined") return

  window.dataLayer = window.dataLayer ?? []
  window.dataLayer.push({ event, ...payload })

  if (process.env.NODE_ENV === "development") {
    // eslint-disable-next-line no-console
    console.debug("[analytics]", event, payload)
  }
}
