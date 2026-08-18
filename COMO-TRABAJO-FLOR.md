# Cómo trabajo el proyecto en Claude Code — Flor 🔵

> Guía personal. El detalle de cada tarea está en `MAPA-DE-COMPONENTES.md`.
> Esperá a que Facu haya creado el repo y hecho el primer push antes de arrancar.

## Conceptos que no hay que olvidar

- **Claude Code es la herramienta de Terminal** (comando `claude`), no la app de escritorio.
  Mejor correrlo desde la terminal integrada de **VS Code** (ves los archivos al costado).
- **No le pegás archivos.** Claude Code lee la carpeta solo. `CLAUDE.md` lo lee automático.
- **`/clear` = borrón y cuenta nueva** de la conversación, sin tocar tu código. Lo usás
  entre tarea y tarea para que arranque liviano (y barato).
- **Una tarea = un componente = un PR.** Nunca "hacé toda la landing".
- Trabajás siempre en **tu propia copia** del repo (tu clon), nunca en la carpeta de Facu.

---

## Paso 1 — Bajar el proyecto (una sola vez)

> Antes: confirmá con Facu que ya hizo la Tarea 0 y subió el repo. Ya sos miembro de la org.

1. Abrir la Terminal y clonar el repo en tu compu:
   ```bash
   git clone https://github.com/ramirezfacundofr-sketch/web.git
   cd web
   ```
2. Instalar dependencias: `pnpm install`.
3. Abrir esa carpeta `web` en VS Code y, en su terminal, correr `claude`.

Cuando bajás el repo, ya te vienen todos los documentos adentro (este incluido), porque
viven dentro del proyecto.

✅ Listo cuando: tenés el repo clonado, `pnpm dev` te abre la landing, y `claude` corre en la carpeta.

---

## Paso 2 — El loop por cada tarea (siempre igual)

1. Traer lo último: `git checkout main && git pull`.
2. Crear rama de la tarea: `git checkout -b pricing` (o el nombre que toque).
3. En Claude Code: *"Hacé la Tarea N del `MAPA-DE-COMPONENTES.md`."*
4. **Revisar** lo que propone (Claude Code muestra los cambios antes de aplicarlos).
5. Verlo andar: `pnpm dev` → abrir en el navegador.
6. Subir: `git add . && git commit -m "..."` y `git push -u origin pricing`.
7. Abrir el **PR** en GitHub → Facu revisa → merge. Vercel publica el preview solo.
8. `/clear` en Claude Code y seguís con la próxima.

---

## Mis tareas (tacho a medida que avanzo)

> Reparto sugerido. El detalle/prompt de cada una está en `MAPA-DE-COMPONENTES.md`.

- [ ] **Tarea 3** — Cómo funciona (features)
- [ ] **Tarea 4** — Stats
- [ ] **Tarea 6** — Pricing (+ `content/planes.ts`)
- [ ] **Tarea 8** — Testimonios (con las 2 bodas reales)
- [ ] **Tarea 9** — FAQs (+ `content/faqs.ts`)
- [ ] **Tarea 10** — Footer
- [ ] **Tarea 11** — Botón de WhatsApp flotante
- [ ] **Tarea 7** — Quiénes somos *(coordinar con Facu)*

## Reglas de oro

- Cada una en **su** clon del repo y **su** rama. Nunca editar la misma carpeta física que Facu.
- Antes de empezar el día: `git pull` de `main`.
- Si una tarea se complica o el archivo crece mucho, pedile a Claude Code que lo parta en piezas más chicas.
