# HANDOFF — GetInviteClub (para retomar en un chat nuevo)

> Pegá este archivo (o conectá la carpeta `Invite club`) al iniciar una conversación
> nueva y decí: *"Seguimos GetInviteClub desde el HANDOFF."* Resume el estado real y qué falta.

## Qué es

Landing **vitrina** (no se cobra en la web; CTA único = WhatsApp) para GetInviteClub,
servicio done-for-you de invitaciones digitales de boda. Objetivo #1: conseguir el primer
cliente que paga. Stack: **Next.js 14 + TypeScript + Tailwind + shadcn/ui + Supabase +
Vercel**, package manager **pnpm**.

## Documentos del proyecto (todos en esta carpeta / repo)

- `CLAUDE.md` — reglas y convenciones del repo (lo lee Claude Code automático).
- `ARQUITECTURA.md` — el qué y por qué: vitrina, design system, motor de templates (1 estructura + temas + features por plan), modelo de datos, 3 olas de migración.
- `PLAN-DE-ACCION.md` — pasos macro con checkboxes (setup, landing, forms, DNS, negocio).
- `MAPA-DE-COMPONENTES.md` — el build de la landing en 13 tareas chiquitas, con prompt listo por tarea.
- `COMO-TRABAJO-FACU.md` / `COMO-TRABAJO-FLOR.md` — guía de trabajo + checklist por persona.
- `referencia-framer/` — export del sitio actual (HTML+CSS limpio, con tokens). Espejo visual, base del diseño.

## Decisiones tomadas (no re-discutir)

1. **Identidad visual = replicar el sitio actual:** Inter Display/Inter + Switzer, paleta blanco/negro editorial (tokens ya en `referencia-framer/styles.css` y en Tailwind).
2. **Repo en cuenta personal `ramirezfacundofr-sketch`, NO en la org**, porque Vercel Hobby (gratis) no deploya repos privados de una organización (pide Pro). La org `Get-Invite-Club` queda para más adelante (post-revenue, con Pro).
3. **Un solo repo** para todo el proyecto (landing + templates + API + motor de bodas). No hacen falta más repos.
4. Web sin lógica de pago. Sin formulario de contacto. Sin Framer Motion.

## Estado actual (al cierre de la sesión)

- ✅ **Tarea 0 hecha:** proyecto Next.js 14 scaffoldeado en `~/Desktop/Invite club` (Tailwind + shadcn + tokens + estructura de carpetas + docs). Compila/corre.
- ✅ **Push inicial hecho** y **repo ya movido a la cuenta personal**: `github.com/ramirezfacundofr-sketch/web` (privado). Remote local ya apunta ahí.
- ✅ GitHub org `Get-Invite-Club` con 2 miembros (Facu Owner, `florencia-akua` Member).
- ✅ **Vercel importado y andando:** proyecto `web-inviteclube` (Hobby, `ramirezfacundofr-gmailcom`), preset Next.js, sin env vars por ahora. Deploy Ready. Cada PR genera preview automática.
- ✅ **Tarea 1 (Navbar) hecha y mergeada:** `components/marketing/Navbar.tsx` + `lib/whatsapp.ts` (helper `waLink`, número real `5491130953594`) + `content/nav.ts`. Links de ancla (Diseños/Planes/Preguntas frecuentes), CTA "Contacto" → WhatsApp, `scroll-behavior: smooth` en `globals.css`. El Navbar está montado temporalmente en `app/page.tsx` para preview (el ensamblado real es la Tarea 12).
- ❔ **Supabase:** proyecto `getinviteclub` — a confirmar que exista y conseguir URL + anon key (para env vars y forms, más adelante).
- ❔ **Cloudflare:** dominio `getinviteclub.com` → hoy apunta a Framer. No se toca hasta el final.

## Decisiones de la sesión (no re-discutir)

- **Navbar = links de ancla** (scroll a secciones), no links externos. CTA único = WhatsApp con label "Contacto".
- **IDs de sección que las próximas tareas DEBEN respetar** para que las anclas funcionen: Galería (Tarea 5) → `id="disenos"`; Pricing (Tarea 6) → `id="planes"`; FAQs (Tarea 9) → `id="faqs"`.
- La sección de diseños se llama **"Diseños"** de cara al visitante (la ruta interna sigue siendo `/templates/[slug]`).

## Pendientes inmediatos (en orden)

- ⏳ Confirmar que Flor esté como colaboradora del repo (repo → Settings → Collaborators → `florencia-akua`). Ver `INSTRUCTIVO-FLOR-ARRANQUE.md`.
1. **Tarea 2 — Hero** del `MAPA-DE-COMPONENTES.md` (el helper de WhatsApp ya está hecho de la Tarea 1, así que esta tarea es solo el Hero). Loop por tarea: rama → "hacé la Tarea N" en Claude Code → revisar → `pnpm dev` → PR → preview → merge → `/clear`.
2. Después: Tarea 5 (Galería + página de template) y Tarea 12 (ensamblado) del lado de Facu.

## Datos clave

- Carpeta local: `~/Desktop/Invite club` (es el repo + los docs).
- GitHub (destino): `github.com/ramirezfacundofr-sketch/web` (privado). Org: `Get-Invite-Club`.
- Vercel: cuenta Hobby `ramirezfacundofr-gmailcom`.
- Email git: `ramirezfacundo.fr@gmail.com` (ya configurado).
- Cómo trabaja cada uno: Claude Code en la terminal de VS Code, parado en la carpeta del proyecto; `/clear` entre tareas; cada uno en su clon y su rama; PRs a `main` protegido.

## Cómo retomar

Conectá la carpeta `Invite club` (o pegá este archivo) en el chat nuevo y decí en qué
pendiente estás. Pedí tareas chicas, de a una.
