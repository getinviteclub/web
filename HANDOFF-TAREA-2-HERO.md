# HANDOFF — Tarea 2: Hero (para chat nuevo de Cowork)

> Abrí un chat nuevo de Cowork, conectá la carpeta `Invite club` y pegá:
> *"Seguimos GetInviteClub. Leé `HANDOFF-TAREA-2-HERO.md` y guiame con la Tarea 2."*

## Dónde estoy parado

- Tarea 0 (setup) y **Tarea 1 (Navbar) hechas y mergeadas a `main`**. Vercel importado y andando (preview por PR).
- Soy **Facu**. Trabajo con **Claude Code en la terminal integrada de VS Code**, parado en `~/Desktop/Invite club`.
- Flujo por tarea: `git checkout main && git pull` → rama nueva → prompt en Claude Code → revisar → `pnpm dev` en una **2da terminal** (la 1ra queda con el dev server) → `git add <archivos puntuales>` → commit → push → PR → preview Ready → merge → `/clear`.

## Lo que toca ahora: Tarea 2 — Hero

- **Archivo:** `components/marketing/Hero.tsx`
- **Fuente:** sección `<header class="hero">` + CSS `.hero*` de `referencia-framer/`
- El **helper de WhatsApp ya existe** (`lib/whatsapp.ts`, función `waLink`, número `5491130953594`) — NO rehacerlo, solo reusarlo.
- El CTA del Hero usa `waLink("Hola, quiero info de GetInviteClub")`.
- Tokens del design system, archivo chico (<200 líneas), mobile-first, solo CSS transitions (sin Framer Motion).

**Prompt sugerido para Claude Code (en rama `hero`):**

> Leé `CLAUDE.md` y `referencia-framer/index.html` + `referencia-framer/styles.css`. Creá `components/marketing/Hero.tsx` replicando el hero de `referencia-framer` (imagen de fondo + overlay + título + copy + CTA). El CTA reusa `waLink` de `lib/whatsapp.ts` con el mensaje "Hola, quiero info de GetInviteClub". Tokens del design system, archivo chico, mobile-first, sin Framer Motion. Montalo temporalmente en `app/page.tsx` (arriba del placeholder, debajo del Navbar) para previsualizar.

## Notas importantes

- El **Navbar es blanco** (texto `text-inverse`) porque va `position: absolute` **encima del hero**. Al montar el Hero detrás, el navbar por fin se va a ver bien. Verificarlo en esta tarea.
- **Placeholder pendiente:** imagen real del hero (hoy hay una de Unsplash en el export). Reemplazar cuando la tengamos.
- Al commitear, agregar **solo los archivos de la tarea** (no los `.md`), para que el PR quede limpio:
  `git add components/marketing/Hero.tsx app/page.tsx` (y lo que sume la tarea).
- Si aparece `fatal: ... index.lock: File exists`, correr `rm -f ".git/index.lock"` y reintentar.

## IDs de sección a respetar (de tareas futuras, no de esta)

Para que las anclas del navbar funcionen: Galería (Tarea 5) → `id="disenos"`, Pricing (Tarea 6) → `id="planes"`, FAQs (Tarea 9) → `id="faqs"`.

## Mapa completo

Todo el detalle de las 13 tareas está en `MAPA-DE-COMPONENTES.md`. Estado general en `HANDOFF.md`.
