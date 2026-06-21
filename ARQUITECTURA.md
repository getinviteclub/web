# GetInviteClub — Arquitectura

> El "qué construimos y por qué". Referencia conceptual. Las reglas operativas
> cortas están en `CLAUDE.md`; los pasos están en `PLAN-DE-ACCION.md`.

---

## 1. La web es una vitrina (no se cobra ahí)

La web expone el producto y empuja a un único CTA: **WhatsApp**. El pago se cierra
por fuera (link manual de MercadoPago en la conversación). Implicancias:

- **Cero lógica de pago en el código.** Sin checkout, sin SDK de MercadoPago, sin links de pago embebidos.
- **Un solo objetivo de conversión:** que escriban por WhatsApp.
- **Sin formulario de contacto** (diluye el CTA y suma fricción).

### Estructura del sitio: una landing + páginas de template

Para una vitrina con CTA único, **una landing de scroll único** convierte mejor que
repartir todo en páginas sueltas (menos navegación = más contactos; además el tráfico
viene de Instagram/Pinterest/referidos, no de búsqueda).

```
/                    Landing única (secciones con anclas):
                       Hero → Galería de templates → Cómo funciona →
                       Testimonios (2 bodas) → Pricing (informativo) → FAQs → CTA WhatsApp
/templates/[slug]    Detalle de cada template: preview grande + features + qué incluye
                       cada plan + CTA. Sirve como link compartible por WhatsApp/IG.
```

Pricing, FAQs, testimonios, quiénes somos → **secciones dentro de la landing**, no
páginas aparte. Lo único que "abre" en página propia es el detalle de cada template.

### Optimizaciones de conversión

- **WhatsApp pre-cargado y contextual** (`wa.me` con mensaje). Desde la landing:
  *"Hola, quiero info de GetInviteClub"*. Desde un template: *"Hola, me interesa el template Aurora"*.
- **Botón de WhatsApp flotante/sticky** en mobile, siempre visible.
- **Prueba social arriba** (las 2 bodas reales, cerca del Hero).
- **Pricing transparente y simple** (3 planes; "desde $X" si no se quiere fijar el número).
- **FAQs que respondan objeciones:** ¿cuánto tarda?, ¿qué incluye cada plan?, ¿puedo cambiar de plan?, ¿hay demo?
- **Medición barata:** un link/UTM de WhatsApp distinto por template → saber qué template trae más contactos (sin necesidad de analytics todavía).

---

## 2. Design system (construir una vez, reusar siempre)

La identidad visual se define **una sola vez** como tokens y componentes, y la usan
tanto la landing como (en Fase 2) los templates.

- **Tokens (decisión: replicar el sitio actual):** colores (fondo `#FFFFFF`, tinta
  `#0A0A0A`, gris muted `#6B6B6B`), tipografías (Inter Display / Inter display + Switzer
  body), espaciados (`--pad-x: 16px`, `--max: 1440px`). Centralizados (CSS variables /
  config de Tailwind), no repartidos por los componentes. Ya existen en el export `styles.css`.
- **Componentes `ui/`:** botones, secciones, contenedores (base shadcn/ui).
- **Regla:** ningún componente define sus propios hex o fuentes; todo sale de los tokens.

Esto es lo que hace que migrar 5 templates después sea barato: no se reconstruye la
identidad cinco veces, se "viste" el mismo motor con distintos temas.

---

## 3. Motor de templates: una estructura, varios temas, features apagables

Los 5 templates **comparten exactamente la misma estructura**. Lo que cambia es la
identidad visual y qué funcionalidades están prendidas. Tres capas que se combinan:

**1. Un solo motor (estructura fija).** Una única implementación de la boda: portada,
historia, RSVP, libro de visitas, galería, info del evento. La estructura no cambia
nunca entre templates.

**2. Temas (identidad).** Cada template es un **set de tokens**: colores, tipografías,
imágenes, detalles decorativos. El motor lee el tema activo y se ve distinto sin tocar
la estructura. Se construyen los componentes una vez y se "visten" 5 veces.

**3. Feature flags por plan.** El template se muestra con **todo prendido** (versión
vitrina/demo) y en la boda real se **apagan** funcionalidades según el plan que pagó el
cliente. Más features = más precio (upsell = cambiar de plan, sin código nuevo).

```ts
// content/planes.ts — fuente única de verdad de qué incluye cada plan
export const PLANES = {
  basico:  ['rsvp'],
  premium: ['rsvp', 'guestbook', 'galeria'],
  full:    ['rsvp', 'guestbook', 'galeria', 'musica', 'mapa', 'regalos'],
} as const;
```

**Detalle clave:** los demos de la galería **son bodas también** — el mismo motor con
datos de ejemplo y todo prendido. No hay un "sistema de demos" aparte.

---

## 4. Modelo de datos (Supabase)

Una sola tabla de bodas + las dos de interacción. Las features salen del `plan`.

```
weddings
  id            uuid pk
  slug          text unique        -- url: /w/maria-y-juan
  tema          text               -- 1 de los 5 temas
  plan          text               -- 'basico' | 'premium' | 'full'
  contenido     jsonb              -- nombres, fecha, historia, imágenes, info del evento
  features_override jsonb null     -- opcional: prender/apagar algo puntual por cliente
  created_at    timestamptz

rsvps
  id, wedding_slug (fk), nombre, asiste (bool), acompañantes, mensaje, created_at

guestbook_entries
  id, wedding_slug (fk), nombre, mensaje, created_at
```

- Las features efectivas de una boda = `PLANES[plan]` (más `features_override` si existe).
- RLS: lectura pública de `weddings` publicadas; escritura de `rsvps`/`guestbook` validada
  por el endpoint server-side (no exponer service role al cliente).
- El mismo esqueleto sirve para la Fase 1 (forms de Framer apuntando al endpoint) y la
  Fase 2 (motor de bodas en React leyendo de estas tablas).

---

## 5. Migración Framer → React, en 3 olas

**Ola 1 — Cobrar (Fase 1, ahora).** Landing (vitrina) en Next + endpoint de forms para
desbloquear los forms de Framer + DNS cutover del apex al final. Los templates **siguen
en Framer**. En paralelo: testimonios, contenido en redes, primer cobro. Al codear la
landing, ya se arman `ui/` (design system) y la capa de datos como piezas reutilizables.

**Ola 2 — Migrar templates, de a uno.** Recién con 2–3 clientes pagos. Se construye el
motor `w/[slug]` con los componentes `wedding/` y los 5 temas. Se migra el template más
usado primero, se prueba con una boda real, y cuando funciona se cambia el DNS de **ese**
subdominio (`template1.getinviteclub.com`) de Framer → Vercel. Se repite template por template.

**Ola 3 — Apagar Framer.** Cuando los 5 subdominios apuntan a Vercel, se da de baja Framer.

Cada template migrado es independiente y de bajo riesgo (se cambia un subdominio a la vez,
con preview de Vercel antes), así nunca se rompe lo que ya está cobrando.

---

## 6. Decisiones técnicas heredadas (no re-discutir)

1. **DNS enruta por hostname, no por path.** Templates como **subdominios**
   `template1..5.getinviteclub.com` → Framer (el apex va a Vercel). Path-based solo con
   `rewrites` en `next.config.ts` si se exige.
2. **Forms de Framer → endpoint Next.js en Vercel → Supabase.** Nada de Google Apps Script.
   Se conecta sin DNS porque Framer postea a la URL de Vercel.
3. **Solo una persona necesita cuenta de Vercel.** La otra trabaja vía GitHub; los previews
   aparecen en cada PR.
4. **`SUPABASE_SERVICE_ROLE_KEY` solo server-side.** Nunca en el cliente ni en el repo.
5. **Cloudflare en "DNS only" (nube gris)** para registros de Vercel y Framer; la nube
   naranja rompe el SSL.
6. **Migración en olas.** No sumar observabilidad/automatización (PostHog, Sentry, n8n,
   Twilio) antes de facturar — quema runway. Eso es Fase 2.
7. **No migrar templates en Fase 1.** Siguen en Framer; se migran just-in-time en Fase 2.
