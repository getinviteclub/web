# CLAUDE.md — GetInviteClub

> Archivo de contexto para Claude Code. Vive en la raíz del repo. Leelo antes de
> tocar nada. Reglas cortas y obligatorias; el "por qué" está en `ARQUITECTURA.md`.

## Qué es

**GetInviteClub** (`getinviteclub.com`) — servicio *done-for-you* de invitaciones
digitales y sitios web de boda para LATAM (ABC1), estética high-end editorial.
La web es una **vitrina** (no self-service, no se cobra en la web).

**Objetivo #1 que manda sobre todo lo técnico:** conseguir el primer cliente que
PAGA. Lo técnico es el habilitador, no el fin. No agregar nada que no acerque a cobrar.

## Stack (no cambiar sin acordarlo)

- **Next.js 14** (App Router) · **TypeScript** · **Tailwind CSS** · **shadcn/ui**
- **Supabase** (PostgreSQL + RLS), región São Paulo
- **Vercel** (deploy + previews) · **GitHub** org `Get-Invite-Club` · **Cloudflare** (DNS)
- Forms: **react-hook-form + Zod** · Package manager: **pnpm**
- Next fijado en v14: `pnpm create next-app@14`. shadcn: `pnpm dlx shadcn@latest`.

## Reglas de oro (esto es lo más importante)

1. **Un archivo, una responsabilidad.** Ningún archivo supera ~200 líneas. Si crece, se parte.
2. **Una sección = un componente = un archivo.** La página solo ensambla; no mete UI adentro.
3. **Lógica separada de la UI.** Datos/queries/cálculos en `lib/` o hooks; lo visual en `components/`.
4. **Contenido separado del código.** Copy, FAQs, planes y datos en `content/`, no hardcodeados en componentes.
5. **Design system primero.** Colores y tipografías salen de tokens centralizados; nada de hex sueltos ni estilos inline repetidos. Reusar `components/ui`.
6. **Tareas chicas.** Construir sección por sección, no "hacé toda la landing" de un saque (eso genera el archivo gigante carísimo de mantener).

## Estructura del repo

```
app/
  (marketing)/page.tsx     # landing: solo ensambla las secciones (~40 líneas)
  templates/[slug]/page.tsx# detalle de cada template (preview + features + planes + CTA)
  w/[slug]/page.tsx        # FASE 2: motor de bodas (vacío por ahora)
  api/framer/              # endpoints de forms de Framer (rsvp, guestbook)
components/
  ui/                      # design system compartido (shadcn + tokens)
  marketing/               # Hero, Galeria, ComoFunciona, Testimonios, Pricing, Faqs, Navbar, Footer
  templates/               # piezas del detalle de un diseño (preview, precio, qué incluye)
  wedding/                 # FASE 2: piezas reutilizables de templates (RSVP, Guestbook, Galeria…)
lib/
  supabase/                # clients (server/browser) + queries
  validations/             # esquemas Zod (rsvp, guestbook)
  whatsapp.ts              # arma el link wa.me pre-cargado
content/                   # copy, faqs, planes, datos de templates
styles/ (o app/globals.css)# tokens: colores, fuentes
```

## Design tokens (identidad visual)

> Referencia: **caratsandcake.com** (editorial, serif de alto contraste sobre
> fondo cálido). La fuente de verdad es `app/globals.css`; esto es el resumen.
> Si tocás un token, actualizá también esta sección.

**Paleta** — nunca blanco puro ni gris azulado:

| Token | Valor | Para qué |
|---|---|---|
| `--c-bg` | `#faf9f8` | fondo, blanco apenas quebrado |
| `--c-paper` | `#ffffff` | cards que deben adelantarse al fondo |
| `--c-bone` / `--c-clay` | `#f6f5f3` / `#eceae6` | superficies de acento, en dos pasos |
| `--c-rule` | `#e4e1dc` | líneas y bordes |
| `--c-ink` | `#000000` | texto principal, negro pleno |
| `--c-muted` / `--c-soft` | `#6f6f6f` / `#a6a6a6` | texto secundario / metadatos |
| `--c-forest` | `#000000` | fondo del bloque oscuro (`bg-forest`) |
| `--c-inverse` | `#ffffff` | texto sobre bloque oscuro |

La jerarquía la da el gris, **no** un negro aguado.

**Tipografía** — dos familias, cargadas con `next/font/google` (no self-hosted):

- **Instrument Serif** (`--font-display`) — headlines. Un solo peso (400) + itálica
  para énfasis: la jerarquía la da el tamaño, no el grosor. Sin tracking negativo.
- **Inter** (`--font-ui`, `--font-label`) — cuerpo, UI y labels. Única sans del sistema.
- Tracking: `--ls-body: .045em` en el body (parte de la identidad, hace que la
  grotesca lea editorial y no UI) · `--ls-label: .1em` en labels · titulares en `normal`.
- Tamaños de headline con `clamp()` inline; el rol "label" vive en `.label-copy`.

**Layout y forma**

- `--pad-x: clamp(20px, 3.91vw, 50px)` · `--max: 1440px`
- **Sin radios**: todo en `0px`. La única excepción son los CTA en pill (`--r-pill: 50px`).

**Íconos** — **Phosphor** (`@phosphor-icons/react`), centralizados en
`components/ui/icons.tsx`. Se importan siempre desde ahí, nunca del paquete
directo, y se usa el peso del sistema (`ICON_WEIGHT` = `light`): la identidad
es de trazo fino y `regular` engorda al lado de la tipografía. `fill` solo
para figuras sólidas (estrellas), `bold` solo para íconos ≤12px sobre fondo
sólido. Prohibido: glifos tipográficos sueltos ("✓", "↗", "←", "+") — los
resuelve la fuente del sistema y cambian de forma según el dispositivo.
`components/wedding/aura/*` es la excepción: sigue con lucide, tiene su
propio lenguaje visual.

**Movimiento**

- **Mobile-first.** Solo CSS transitions, **sin Framer Motion**.
- La entrada de secciones es `<Reveal>` (`components/ui/reveal.tsx`): fade +
  desplazamiento con IntersectionObserver, una vez por elemento. Respeta
  `prefers-reduced-motion`.

### Labels: cuándo componente y cuándo clase

El rol "label" (12px, mayúsculas, tracking) se define **una sola vez** en
`.label-copy` (`globals.css`). Hay dos formas de usarlo y no son intercambiables:

- **`<Eyebrow>`** — el label que **abre** una sección o un bloque. Es un elemento
  de composición: elige la etiqueta (`as`) y resuelve la variante sobre oscuro.
- **`.label-copy`** — labels **embebidos en UI**: contadores, badges, ítems de nav,
  "elegido", "Ver diseño". Son una pincelada tipográfica, no estructura.

Ante la duda: si lo podés borrar y la sección sigue teniendo sentido, es
`.label-copy`. Si es lo que anuncia lo que viene abajo, es `<Eyebrow>`.
Nunca reimplementes el rol a mano con clases sueltas de Tailwind.

## Seguridad (innegociable)

- `SUPABASE_SERVICE_ROLE_KEY` **solo server-side**. Jamás en el bundle del cliente ni en el repo.
- Secrets en `.env.local` (gitignored) y en Vercel. Compartir llaves por gestor de contraseñas, **nunca por chat**.
- La `anon key` y la URL de Supabase sí pueden ir como `NEXT_PUBLIC_*`.

## Flujo de trabajo (2 personas)

- `main` = siempre funciona, **protegido**. Nadie pushea directo: todo entra por Pull Request.
- Cada quien en su rama (ej. `hero`, `pricing`, `forms`). Repartirse secciones para no solaparse.
- PR → el otro revisa → merge. Cada PR genera una **URL de preview** de Vercel para ver el cambio antes de mergear.
- Durante la Fase 1 el dominio real sigue en Framer; la app Next vive en una URL `.vercel.app` (staging sin riesgo).

## Cómo pedir tareas a Claude Code (plantilla)

> "Creá `components/marketing/Hero.tsx` como componente propio, archivo chico,
> usando los tokens del design system y los componentes de `components/ui`. El copy
> va en `content/`. Sin estilos inline repetidos. Mobile-first."

## Do / Don't

- ✅ Componentes chicos y reutilizables · ✅ tokens · ✅ contenido en `content/` · ✅ build/preview antes de mergear
- ❌ Archivos de +200 líneas · ❌ íconos fuera de `components/ui/icons.tsx` · ❌ un solo archivo gigante · ❌ lógica de pago en la web (es vitrina) · ❌ Framer Motion · ❌ secrets en el repo · ❌ formulario de contacto (el CTA único es WhatsApp)
