# Assets — medidas y formato

> Qué imágenes hay que conseguir, en qué tamaño y dónde se reemplazan.
> Todas las imágenes se sirven vía `next/image`, así que Next genera las
> variantes responsive solas: solo hay que subir **la más grande**.

## Resumen

| Uso | Medida a entregar | Ratio | Dónde se cambia |
|---|---|---|---|
| Hero (fondo full screen) | **2400 × 1600 px** | 3:2 | `content/hero.ts` → `bgSrc` |
| Cards de diseños (galería) | **1936 × 1204 px** | 484:301 (~1.6:1) | `content/templates.ts` → `image` |
| Detalle de template | misma imagen que la card | 484:301 | `content/templates.ts` → `image` |
| **Pantallas de celular** (mockups) | **1170 × 2532 px** | 9:19.5 | `content/mockups.ts` |
| Banda CTA final | **2000 × 1000 px** | 2:1 | `content/cta-final.ts` → `bgSrc` |
| Avatares de testimonios | **200 × 200 px** | 1:1 | `content/testimonios.ts` → `avatar` |

### Las pantallas de celular son el activo más importante

Los mockups de teléfono muestran el producto real: la invitación como la va a
ver el invitado. **Ya están en uso** (`public/images/diseno-1..3.webp`), sacadas
del proyecto de Framer y recortadas a 9:19.5.

**Limitación actual:** las capturas originales venían a 390–516 px de ancho, por
debajo de los 540 px que necesita una pantalla retina, así que están levemente
escaladas hacia arriba. Se ven bien, pero no perfectas.

**Cómo sacar capturas mejores (recomendado):**

1. Abrí la invitación en Chrome → DevTools (`⌥⌘I`) → ícono de dispositivo.
2. Elegí iPhone 14 Pro (393 × 852) y poné el zoom del device en 100%.
3. Menú de los 3 puntos → *Capture screenshot*. Chrome exporta a **3x**, o sea
   1179 × 2556 px, que es exactamente lo que hace falta.
4. Guardala en `public/images/` y actualizá la ruta en `content/mockups.ts`.

Importante al recortar: cortá siempre en un límite visual (fin de una foto, fin
de un bloque), nunca en medio de una frase — es lo que hacía ver "rotas" las
capturas originales.

**Capturas que faltan y sumarían mucho:** la pantalla de RSVP y la del chat de
WhatsApp. Hoy el paso 1 del proceso ("nos escribís") muestra una invitación en
vez de una conversación, que es lo que correspondería.

Los avatares son opcionales: si un testimonio no tiene `avatar`, se muestran
las iniciales del nombre en un círculo.

## Tratamiento de las imágenes de fondo

Hero y banda pre-footer usan el mismo criterio, tomado de hims.com: **campo de
color pleno + un elemento sutil**, nunca una escena recargada.

Cómo está armado: la foto ocupa solo la mitad derecha y se disuelve con un
degradado hacia `--c-bone`. El texto vive siempre sobre el color plano, así que
se lee sin necesidad de oscurecer la foto. En mobile la foto pasa a fondo
completo con un velo claro encima.

**Al elegir una foto nueva**, buscá que tenga: pared o fondo liso, un solo
objeto, paleta neutra cálida y mucho aire. Sirven términos como *minimal beige
wall*, *dry flowers against wall*, *neutral still life*. Lo que NO funciona son
fotos de escena completa con mucho detalle: pelean con la tipografía.

Para cambiarla alcanza con pegar el ID nuevo de Unsplash en `content/hero.ts` o
`content/cta-final.ts` — el recorte y el tamaño los resuelve la URL.

## Estado actual (provisorio)

Hoy el hero y las 4 cards usan **la misma foto de Unsplash**:
["Mujer sosteniendo ramo de flores" — Hannah Busing](https://unsplash.com/es/fotos/mujer-sosteniendo-ramo-de-flores-6NUUZZ16hJk),
libre bajo la [Licencia Unsplash](https://unsplash.com/es/licencia).

No están descargadas: se sirven desde la CDN de Unsplash, que hace el **resize y
el crop del lado del servidor** con los parámetros de la URL
(`w`, `h`, `fit=crop`, `crop=`). Por eso ya salen en la medida exacta que
necesita cada lugar, sin procesar nada a mano.

Las 4 cards son la misma foto con distinto encuadre (`crop=entropy`, `faces`,
`top`, `right`) para que la grilla no se vea repetida. Es un parche visual
hasta tener el preview real de cada diseño.

## Hero — 2400 × 1600 px

Va a pantalla completa (`min-h-screen`, `object-cover`), así que se recorta
distinto en mobile y desktop.

- **Formato:** `.webp` (preferido) o `.jpg` calidad 80.
- **Peso objetivo:** menos de 400 KB — es la primera imagen que carga y pesa en el LCP.
- **Composición:** dejá aire arriba (el navbar va encima) y abajo a la izquierda
  (ahí van el título y el CTA). El sujeto, centrado o a la derecha.
- Encima lleva un degradado oscuro, así que una foto muy clara igual funciona.

## Cards de diseños — 1936 × 1204 px

Se muestran a 484 × 301 px, pero se entregan a **2x** para pantallas retina.

- **Formato:** `.webp` o `.jpg` calidad 80.
- **Peso objetivo:** menos de 250 KB cada una.
- Idealmente un mockup/preview de la invitación en sí, no una foto genérica.

## Cómo reemplazarlas (o pasarlas a local)

Servirlas desde Unsplash funciona, pero suma una dependencia externa: si la CDN
falla o cambia la URL, se cae la imagen. Para producción conviene tenerlas locales.

1. Descargá el archivo en la máxima resolución y exportalo en las medidas de la
   tabla de arriba (cualquier editor, o `sips` en Mac / `magick` con ImageMagick):

```bash
# hero 2400×1600, recorte centrado
magick orig.jpg -resize 2400x1600^ -gravity center -extent 2400x1600 \
  -quality 80 public/images/hero.webp

# card 1936×1204
magick orig.jpg -resize 1936x1204^ -gravity center -extent 1936x1204 \
  -quality 80 public/images/design-solstice.webp
```

2. Poné los archivos en `public/images/`.
3. En el content file, cambiá la URL de Unsplash por la ruta local:

```ts
// content/hero.ts
bgSrc: "/images/hero.webp"
```

4. Cuando **no quede ninguna** imagen de Unsplash, se puede borrar el bloque
   `images.remotePatterns` de `next.config.mjs`.

## Otros pendientes (no son imágenes)

- Los **3 precios** reales → `content/planes.ts` (hoy dice `$XXX.XXX`).
- **Testimonio** real de una de las 2 bodas → `content/testimonios.ts`.
- Copy de **Quiénes somos** → `content/quienes-somos.ts`.
- **Respuestas** de las FAQs → `content/faqs.ts`.
- **Nombres y descripciones** reales de los diseños → `content/templates.ts`.
