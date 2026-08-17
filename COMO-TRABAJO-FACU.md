# Cómo trabajo el proyecto en Claude Code — Facu 🟣

> Guía personal. El detalle de cada tarea está en `MAPA-DE-COMPONENTES.md`.
> Vos arrancás primero (creás el repo y la base); Flor se suma después.

## Conceptos que no hay que olvidar

- **Claude Code es la herramienta de Terminal** (comando `claude`), no la app de escritorio.
  Mejor correrlo desde la terminal integrada de **VS Code** (ves los archivos al costado).
- **No le pegás archivos.** Claude Code lee la carpeta solo. `CLAUDE.md` lo lee automático.
- **`/clear` = borrón y cuenta nueva** de la conversación, sin tocar tu código. Lo usás
  entre tarea y tarea para que arranque liviano (y barato).
- **Una tarea = un componente = un PR.** Nunca "hacé toda la landing".

---

## Paso 1 — Setup inicial (lo hacés una sola vez)

1. Crear el repo `web` (privado, vacío) en la **cuenta personal** `ramirezfacundofr-sketch`
   (NO en la org: Vercel Hobby no deploya repos privados de organización). Por la web de GitHub.
2. Abrir VS Code en la carpeta `~/Desktop/Invite club`, abrir la terminal y correr `claude`.
3. Primer mensaje a Claude Code:

   > *"Esta carpeta tiene mis documentos del proyecto. Leé `CLAUDE.md` y
   > `MAPA-DE-COMPONENTES.md`. Hacé la **Tarea 0**: armá acá mismo un proyecto Next.js 14
   > con Tailwind y shadcn, dejando mis `.md` y la carpeta `referencia-framer/` donde están.
   > Pasá los tokens de `referencia-framer/styles.css` a Tailwind y `globals.css`. No
   > empieces secciones todavía."*

4. Cuando termine, subir a GitHub (push a `main`) y **conectar Vercel** al repo.
5. Avisarle a Flor que ya puede clonar.

✅ Listo cuando: el repo está en GitHub, anda en una URL `.vercel.app`, y `CLAUDE.md` está en la raíz.

---

## Paso 2 — El loop por cada tarea (siempre igual)

1. Traer lo último: `git checkout main && git pull`.
2. Crear rama de la tarea: `git checkout -b hero` (o el nombre que toque).
3. En Claude Code: *"Hacé la Tarea N del `MAPA-DE-COMPONENTES.md`."*
4. **Revisar** lo que propone (Claude Code muestra los cambios antes de aplicarlos).
5. Verlo andar: `pnpm dev` → abrir en el navegador.
6. Subir: `git add . && git commit -m "..."` y `git push -u origin hero`.
7. Abrir el **PR** en GitHub → Flor revisa → merge. Vercel publica el preview solo.
8. `/clear` en Claude Code y seguís con la próxima.

---

## Mis tareas (tacho a medida que avanzo)

> Reparto sugerido. El detalle/prompt de cada una está en `MAPA-DE-COMPONENTES.md`.

- [x] **Tarea 0** — Setup (repo + scaffold Next + tokens) ← arranca todo acá
- [x] **Tarea 1** — Navbar ✅ (incluyó `lib/whatsapp.ts`, links de ancla, CTA "Contacto") — mergeada
- [ ] **Tarea 2** — Hero (el helper de WhatsApp ya quedó hecho en la Tarea 1) ← **acá voy**
- [ ] **Tarea 5** — Galería de diseños + página de template (`/templates/[slug]`)
- [ ] **Tarea 12** — Ensamblar la landing (`page.tsx`)
- [ ] **Tarea 7** — Quiénes somos *(coordinar con Flor)*

## Reglas de oro

- Cada uno en **su** clon del repo y **su** rama. Nunca editar la misma carpeta física que Flor.
- Antes de empezar el día: `git pull` de `main`.
- Si una tarea se complica o el archivo crece mucho, pedile a Claude Code que lo parta en piezas más chicas.
