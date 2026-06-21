# GetInviteClub — Mapa de Componentes (build de la landing)

> El puente entre el plan y el código. Parte el export de Framer
> (`referencia-framer/`) en **tareas chiquitas, una por componente**. Cada tarea trae
> un prompt listo para pegar en Claude Code. Hacelas **de a una**, en orden.

## Cómo usar este doc

1. Abrí Claude Code en la carpeta del repo (con `CLAUDE.md` adentro).
2. Copiá el prompt de la tarea que toca, pegalo, dejá que la haga.
3. Verificá en preview, hacé el PR, mergeá. Recién ahí pasás a la siguiente.
4. Una persona puede ir por las tareas pares y la otra por las impares (son archivos distintos → sin conflictos). Sugerencia de reparto al final.

Regla: **una tarea = un componente = un archivo chico.** Nunca "hacé toda la landing".

---

## TAREA 0 — Setup (una vez)

**Qué hace:** crea el repo, el proyecto Next y los tokens. Lo corre una sola persona.

```bash
# 1) Crear repo vacío 'web' (privado) en la org Get-Invite-Club (por la web de GitHub)
# 2) En tu compu:
pnpm create next-app@14 web --ts --tailwind --app --eslint
cd web
pnpm dlx shadcn@latest init
# 3) Copiar CLAUDE.md, ARQUITECTURA.md, PLAN-DE-ACCION.md, este doc y la
#    carpeta referencia-framer/ a la raíz del repo.
```

**Prompt para Claude Code:**

> Leé `CLAUDE.md` y `referencia-framer/styles.css`. Pasá los tokens del `:root` de ese
> CSS (colores `--c-bg #fff`, `--c-ink #0a0a0a`, `--c-muted #6b6b6b`, fuentes Inter
> Display/Inter + Switzer, `--pad-x 16px`, `--max 1440px`) a la configuración de Tailwind
> y a `app/globals.css`. Configurá las fuentes (Inter por Google; Switzer self-hosted en
> `.woff2` si tengo los archivos, si no dejá un fallback). Creá la estructura de carpetas
> de `CLAUDE.md` (`components/marketing`, `components/ui`, `lib/`, `content/`) vacía.
> No construyas secciones todavía.

Después: primer commit + push a `main`, conectar Vercel, proteger `main`. (Ver `PLAN-DE-ACCION.md` Fase 0.)

---

## TAREA 1 — Navbar

- **Archivo:** `components/marketing/Navbar.tsx`
- **Fuente:** `referencia-framer/index.html` sección `<nav>` + CSS `.nav*`
- **Cambios:** el link "Quiero mi invitación" pasa a ser **CTA de WhatsApp** (ver Tarea 2 para el helper). Logo "Invite Club".

> Creá `components/marketing/Navbar.tsx` replicando la `<nav>` de `referencia-framer`
> (logo, links Planes/Instagram/Facebook, CTA). Usá los tokens del design system, archivo
> chico, mobile-first. El CTA principal usa el helper de WhatsApp de `lib/whatsapp.ts`.

## TAREA 2 — Hero + helper de WhatsApp

- **Archivos:** `components/marketing/Hero.tsx` + `lib/whatsapp.ts`
- **Fuente:** sección `<header class="hero">` + CSS `.hero*`
- **Placeholders a reemplazar:** imagen real del hero (hoy Unsplash), número de WhatsApp Business.

> Creá `lib/whatsapp.ts` con una función que arme un link `wa.me` con número y mensaje
> pre-cargado. Después creá `components/marketing/Hero.tsx` replicando el hero de
> `referencia-framer` (imagen de fondo + overlay + título + copy). El CTA usa el helper
> con mensaje "Hola, quiero info de GetInviteClub". Tokens del design system, mobile-first.

## TAREA 3 — Cómo funciona (features)

- **Archivo:** `components/marketing/ComoFunciona.tsx`
- **Fuente:** sección `<section class="about">` + CSS `.about*` / `.feature*`

> Creá `components/marketing/ComoFunciona.tsx` replicando la sección `about` de
> `referencia-framer` (título + grid de 3 features). Tokens, archivo chico, mobile-first.

## TAREA 4 — Stats

- **Archivo:** `components/marketing/Stats.tsx`
- **Fuente:** `<section class="stats">` + CSS `.stats*` / `.stat*`

> Creá `components/marketing/Stats.tsx` replicando la sección `stats` (4 datos: RSVP,
> Multi-dispositivo, +10 diseños, 1 link). Tokens, mobile-first.

## TAREA 5 — Galería de diseños + página de template

- **Archivos:** `components/marketing/Galeria.tsx` + `app/templates/[slug]/page.tsx`
- **Fuente:** `<section class="work">` + CSS `.work*` / `.card*`
- **Placeholders:** nombres reales de diseños (Gina y Weekend son del template de Framer), imágenes reales.

> Creá `components/marketing/Galeria.tsx` replicando la sección `work` (grid de cards de
> diseños). Cada card linkea a `/templates/[slug]`. Creá también una página básica
> `app/templates/[slug]/page.tsx` con preview + descripción + features + CTA WhatsApp
> contextual ("Hola, me interesa el template {nombre}"). Datos de los templates en
> `content/templates.ts`. Tokens, mobile-first.

## TAREA 6 — Pricing

- **Archivos:** `components/marketing/Pricing.tsx` + `content/planes.ts`
- **Fuente:** `<section class="plans">` + CSS `.plans*` / `.plan*`
- **Placeholders:** los 3 precios reales (hoy los tres dicen $120.000). El detalle de features de Básico/Plus/Premium + Extras ($14.999) ya está bien, llevalo a `content/planes.ts`.

> Creá `content/planes.ts` con los 3 planes (Básico, Plus, Premium) y sus features + los
> extras, tomados de `referencia-framer/index.html`. Después creá
> `components/marketing/Pricing.tsx` replicando la sección `plans` leyendo de ese content.
> El CTA de cada plan va a WhatsApp con mensaje contextual ("Hola, quiero el plan {nombre}").
> Tokens, mobile-first.

## TAREA 7 — Quiénes somos (nueva)

- **Archivo:** `components/marketing/QuienesSomos.tsx`
- **Fuente:** no está en el export — sección nueva. Copy a definir.

> Creá `components/marketing/QuienesSomos.tsx`, una sección breve de marca/equipo en la
> misma estética editorial del resto. Copy en `content/`. Tokens, mobile-first.

## TAREA 8 — Testimonios

- **Archivo:** `components/marketing/Testimonios.tsx`
- **Fuente:** `<section class="testimonials">` + CSS `.testimonial*`
- **Placeholder importante:** el testimonio actual es del template de Framer (en inglés, "Lily Collins"/"Solace"). Reemplazar por las **2 bodas reales**.

> Creá `components/marketing/Testimonios.tsx` replicando la sección `testimonials`, pero
> con los testimonios reales (en `content/testimonios.ts`). Tokens, mobile-first.

## TAREA 9 — FAQs (nueva)

- **Archivos:** `components/marketing/Faqs.tsx` + `content/faqs.ts`
- **Fuente:** no está en el export — sección nueva.

> Creá `content/faqs.ts` con preguntas/respuestas (¿cuánto tarda?, ¿qué incluye cada
> plan?, ¿puedo cambiar de plan?, ¿hay demo?) y `components/marketing/Faqs.tsx` que las
> renderice (acordeón simple, solo CSS). Tokens, mobile-first.

## TAREA 10 — Footer

- **Archivo:** `components/marketing/Footer.tsx`
- **Fuente:** `<footer class="footer">` + CSS `.footer*`

> Creá `components/marketing/Footer.tsx` replicando el footer (marca + menú + redes).
> Tokens, mobile-first.

## TAREA 11 — Botón de WhatsApp flotante

- **Archivo:** `components/marketing/BotonWhatsappFlotante.tsx`

> Creá `components/marketing/BotonWhatsappFlotante.tsx`: un botón fijo (sticky) visible en
> mobile que usa el helper de `lib/whatsapp.ts`. Tokens, accesible.

## TAREA 12 — Ensamblar la landing

- **Archivo:** `app/(marketing)/page.tsx`

> Armá `app/(marketing)/page.tsx` importando y apilando, en orden: Navbar, Hero,
> ComoFunciona, Stats, Galeria, Pricing, QuienesSomos, Testimonios, Faqs, Footer y el
> BotonWhatsappFlotante. La página solo ensambla; nada de UI adentro. Verificá que compila.

---

## Inventario de placeholders a conseguir (inputs reales)

- [ ] Imagen real del **hero** (alta resolución).
- [ ] **Nombres + imágenes** reales de los diseños (reemplazar Gina, Weekend, etc.).
- [ ] Los **3 precios** reales por plan.
- [ ] **Testimonios reales** de las 2 bodas (reemplazar el de Lily Collins).
- [ ] **Número de WhatsApp Business**.
- [ ] Fuentes **Switzer** `.woff2` (si se quiere self-hosted; Inter va por Google).
- [ ] Copy de **Quiénes somos** y **FAQs**.

## Reparto sugerido (2 personas, sin pisarse)

- **Facu (🟣):** Tareas 0, 1, 2, 5, 12 (estructura + hero + galería + ensamblado).
- **Flor (🔵):** Tareas 3, 4, 6, 8, 9, 10, 11 (secciones de contenido).
- Quiénes somos (7) y el contenido (`content/`) se acuerdan entre los dos.

Cada quien en su rama por tarea → PR → revisión → merge. Como son archivos distintos, nunca chocan.
