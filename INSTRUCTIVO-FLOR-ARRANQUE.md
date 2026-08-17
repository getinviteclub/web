# Instructivo de arranque — Flor (Claude Code, app de escritorio)

> Para empezar a trabajar en GetInviteClub desde la **app de escritorio de Claude Code**
> (no Cowork, no VS Code). Hacelo una sola vez; después entrás directo al loop de tareas.

## 0. Antes de empezar (requisitos en tu compu)

Necesitás tener instalado:

- **Git** — para clonar y hacer PRs.
- **Node.js** (18+) y **pnpm** — el proyecto usa pnpm, no npm. Si no tenés pnpm: `npm i -g pnpm`.
- **Cuenta de GitHub** con acceso al repo. Tenés que estar agregada como colaboradora
  (`florencia-akua`) en `ramirezfacundofr-sketch/web`. Si no podés clonarlo, avisale a Facu.

## 1. Clonar el repo (una sola vez)

Elegí dónde guardar el proyecto (ej. tu Escritorio) y cloná:

```bash
git clone https://github.com/ramirezfacundofr-sketch/web.git
cd web
pnpm install
```

`pnpm install` baja todas las dependencias. Puede tardar un par de minutos la primera vez.

## 2. Abrir el proyecto en Claude Code (escritorio)

1. Abrí la app de escritorio de Claude Code.
2. Abrí / seleccioná la **carpeta `web`** que clonaste como tu proyecto.
3. Claude Code lee solo el `CLAUDE.md` del repo (las reglas del proyecto). No hace falta
   que se lo pegues.

Desde acá, Claude Code puede correr los comandos por vos (git, pnpm, etc.): se los pedís
en lenguaje natural y los ejecuta. No hace falta que abras una terminal aparte.

## 3. El loop por tarea (esto se repite por cada sección)

Trabajás **de a una tarea**, cada una en su propia rama. Tus tareas son **3, 4, 6, 8, 9, 10, 11**
del `MAPA-DE-COMPONENTES.md` (las secciones de contenido). Cada tarea trae su prompt listo
en ese documento.

Para cada tarea:

1. **Sincronizar y crear rama.** Pedile a Claude Code (o corré vos):

   ```bash
   git checkout main
   git pull
   git checkout -b NOMBRE-DE-LA-SECCION
   ```

   Usá un nombre corto y claro de rama, ej. `como-funciona`, `stats`, `pricing`, `faqs`, `footer`.

2. **Pasar el prompt de la tarea.** Abrí `MAPA-DE-COMPONENTES.md`, copiá el prompt de la
   tarea que toca y pegáselo a Claude Code. Dejá que cree el archivo.

3. **Verificar en local.** Pedile que corra `pnpm dev` (o corrélo vos) y abrí
   `localhost:3000`. Revisá la sección, incluido **mobile** (DevTools → vista responsive).

4. **Commit + push.**

   ```bash
   git add .
   git commit -m "feat: NOMBRE (Tarea N)"
   git push -u origin NOMBRE-DE-LA-SECCION
   ```

5. **Abrir el PR.** En GitHub aparece "Compare & pull request" → abrí el PR a `main`.
   Vercel genera una **URL de preview** automática en el PR para ver el cambio online.

6. **Revisión y merge.** Facu (o vos) revisa el PR; cuando está ok, se mergea.

7. **Limpiar contexto.** Corré `/clear` en Claude Code antes de empezar la siguiente tarea,
   así no arrastra contexto viejo.

## 4. Reglas que no se rompen

- **Nunca pushees directo a `main`.** Está protegido. Todo entra por PR.
- **Una tarea = un componente = un archivo chico** (< 200 líneas). Nada de "hacé toda la landing".
- **Tokens del design system**, no colores sueltos. **Sin Framer Motion** (solo CSS transitions).
- **Mobile-first** siempre.
- El copy y los datos van en `content/`, no hardcodeados en los componentes.
- **Sin secrets en el repo.** Las llaves se comparten por gestor de contraseñas, nunca por chat.

## 5. Si algo falla

- `pnpm dev` tira error → copiá el error y pedile a Claude Code que lo lea y lo arregle.
- No podés clonar / "permission denied" → todavía no estás agregada como colaboradora; avisale a Facu.
- Dudas de qué tarea hacer → mirá el reparto al final de `MAPA-DE-COMPONENTES.md`.

> Más contexto del proyecto: `HANDOFF.md` (estado general) y `COMO-TRABAJO-FLOR.md` (tu checklist).
