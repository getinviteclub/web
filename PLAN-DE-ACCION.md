# GetInviteClub — Plan de Acción (paso a paso)

> Cómo empezar, en orden, con checkboxes. Pensado para que dos product designers lo
> ejecuten con Claude Code. Conceptos en `ARQUITECTURA.md`; reglas del repo en `CLAUDE.md`.

---

## Estado actual (relevamiento — Junio 2026)

- **Carpeta local "Invite club":** vacía (sin código ni git).
- **GitHub:** org **`Get-Invite-Club`** creada, con **2 miembros** (Facu
  `ramirezfacundofr-sketch` = Owner; `florencia-akua` = Member). Pero **0 repositorios
  todavía** — `github.com/orgs/Get-Invite-Club/repositories` está vacío.
- **Vercel:** no creado todavía.
- **Supabase:** según doc de contexto, proyecto `getinviteclub` creado (São Paulo, Free) — **a confirmar**.
- **Cloudflare:** dominio `getinviteclub.com` activo, hoy → Framer — **a confirmar**.
- **Templates:** 5 en Framer (T5 con links rotos a reparar).

Conclusión: arrancamos casi de cero en lo técnico. Ideal para montar bien la estructura
desde el inicio. Lo de abajo asume eso.

---

## Fase 0 — Setup del repo y entornos (una vez)

Objetivo: tener el esqueleto Next.js en GitHub, deployando en Vercel con previews, y los
dos pudiendo trabajar sin pisarse.

- [x] ~~Invitar a la segunda persona~~ — **ya hecho** (`florencia-akua` es Member).
- [ ] **Crear el repo** `web` (o `getinviteclub-web`), privado, dentro de la org. Vacío (sin README).
- [ ] **Scaffold del proyecto Next.js 14** (lo hace una persona, en su compu):
  ```bash
  pnpm create next-app@14 getinviteclub --ts --tailwind --app --eslint
  cd getinviteclub
  pnpm dlx shadcn@latest init
  ```
- [ ] **Crear la estructura de carpetas** vacía según `CLAUDE.md` (`components/marketing`,
      `components/ui`, `lib/`, `content/`, etc.). Pedírselo a Claude Code con esa estructura.
- [ ] **Agregar `CLAUDE.md`, `ARQUITECTURA.md` y `PLAN-DE-ACCION.md` a la raíz del repo.**
- [ ] **Primer commit + push** a `main`:
  ```bash
  git init && git branch -M main && git add .
  git commit -m "Scaffold inicial Next.js + estructura + docs"
  git remote add origin https://github.com/ramirezfacundofr-sketch/web.git
  git push -u origin main
  ```
- [ ] **Conectar Vercel** al repo (Add New → Project → Import `ramirezfacundofr-sketch/web`). Plan Hobby. (El repo va en la cuenta personal, NO en la org: Vercel Hobby no deploya repos privados de organización.)
- [ ] **Cargar env vars en Vercel** (y en `.env.local` de cada uno): `NEXT_PUBLIC_SUPABASE_URL`,
      `NEXT_PUBLIC_SUPABASE_ANON_KEY`, y `SUPABASE_SERVICE_ROLE_KEY` (solo server). Llaves por gestor de contraseñas, nunca por chat.
- [ ] **Proteger `main`** (Settings → Branches → Require a pull request before merging).
- [ ] **Confirmar Supabase** (¿existe el proyecto? ¿región São Paulo?) y dejar listo para el SQL.

✅ Listo cuando: hay un repo con la app andando en una URL `.vercel.app` y cada PR genera preview.

---

## Fase 1 — Landing (vitrina), sección por sección

Regla de oro: **un componente por sección, un PR por sección.** Así ahorran tokens y no
hay conflictos entre las dos personas. Repártanse las secciones.

Orden sugerido (cada ítem = una rama + un PR):

- [ ] **Base de diseño** (`globals.css` / Tailwind config): tokens de color, fuentes
      self-hosted (`.woff2`), estilos base. *(Hacer esto primero: todo lo demás lo usa.)*
- [ ] **Layout + Navbar + Footer** (`components/marketing/Navbar.tsx`, `Footer.tsx`) con anclas a secciones.
- [ ] **Hero + CTA WhatsApp** (`Hero.tsx` + `lib/whatsapp.ts` con mensaje pre-cargado).
- [ ] **Botón de WhatsApp flotante/sticky** (mobile-first).
- [ ] **Galería de templates** (`Galeria.tsx`): cards que linkean a `/templates/[slug]`.
- [ ] **Cómo funciona** (`ComoFunciona.tsx`).
- [ ] **Prueba social / Testimonios** (`Testimonios.tsx`) con las 2 bodas reales.
- [ ] **Pricing** (`Pricing.tsx`) — informativo, 3 planes, datos desde `content/planes.ts`.
- [ ] **FAQs** (`Faqs.tsx`) — contenido desde `content/faqs.ts`.
- [ ] **Páginas de template** (`/templates/[slug]`): preview + features + qué incluye cada plan + CTA.
- [ ] **Reunir inputs reales:** fuentes `.woff2`, fotos de las 2 bodas, copy final, 3 precios en pesos, número de WhatsApp Business.

✅ Listo cuando: la landing completa se ve en la URL de Vercel y el CTA de WhatsApp funciona con mensaje pre-cargado.

---

## Fase 1 (Infra, en paralelo) — Desbloquear forms de Framer

Se puede adelantar sin tocar el sitio vivo ni el DNS.

- [ ] **Correr el SQL** en Supabase: tablas `weddings`, `rsvps`, `guestbook_entries` + RLS (ver `ARQUITECTURA.md §4`).
- [ ] **Endpoints Next.js** `app/api/framer/rsvp` y `app/api/framer/guestbook`, desplegados en Vercel.
- [ ] **Conectar los forms de Framer** vía Code Override apuntando a la URL `*.vercel.app`. Probar que guardan datos. *(Resuelve el bug crítico #1 sin cambiar el dominio.)*
- [ ] **Arreglar links rotos del Template 5** (apuntan al T4) — dentro de Framer.

---

## Fase 1 (cierre) — DNS cutover

**Solo cuando la landing esté lista y aprobada.**

- [ ] Cloudflare: apex `getinviteclub.com` → Vercel.
- [ ] Subdominios `template1..5.getinviteclub.com` → Framer.
- [ ] Todos los registros en **"DNS only" (nube gris)**.

---

## Flujo de trabajo de las dos personas

1. `main` siempre funciona y está protegido. Nadie escribe directo ahí.
2. Cada quien crea su rama por tarea (ej. `hero`, `pricing`, `forms`). Antes de empezar el día: traer cambios de `main`.
3. Al terminar: **Pull Request** → el otro revisa → **Merge** → Vercel publica solo.
4. Cada PR trae un **link de preview** de Vercel para ver el cambio antes de sumarlo.
5. Como cada sección es su propio archivo, trabajar en paralelo **no genera conflictos**.

Demo antes de prod: ya viene gratis con los previews de cada PR. Si quieren un demo
estable y compartible, pueden mantener una rama `staging` con su propia URL fija.

---

## Negocio (en paralelo, prioridad real)

- [ ] Pedir a las 2 parejas: testimonio + referidos.
- [ ] Publicar 8–12 piezas en Instagram/Pinterest con los 2 casos reales.
- [ ] Definir los 3 precios y cerrar el **primer cobro** con link de MercadoPago. ← métrica de éxito de la fase.

---

## Fase 2 — Migrar templates de Framer a React

No antes de tener 2–3 clientes pagos. Detalle de las olas en `ARQUITECTURA.md §5`.
Resumen: construir el motor `w/[slug]` (estructura única + 5 temas + feature flags por
plan), migrar template por template, cambiar el DNS de cada subdominio cuando esté listo,
y al final apagar Framer.

---

## Próximas 3 acciones inmediatas

1. Invitar a la segunda persona + crear el repo `web` en la org.
2. Scaffold de Next.js con la estructura de `CLAUDE.md` y subirlo + conectar Vercel.
3. Arrancar la landing por la **base de diseño** (tokens + fuentes), después el Hero.
