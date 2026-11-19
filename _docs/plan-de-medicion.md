# Plan de medición del sitio

Qué se mide en cmpsolutionsio.github.io, cuándo y con qué datos, y dónde se ve cada cosa.

Esta carpeta empieza con `_`, así que GitHub Pages no la publica: queda solo en el repo.

## Cómo está armado

- **Google Analytics 4** mide todo lo que pasa en el sitio. Es la única herramienta de analítica.
- **La planilla de Google** (Apps Script, constante `ENDPOINT` en `index.html`) recibe solo los **leads** de los dos formularios. Desde el 19/11/2026 ya no recibe eventos: la pestaña "Analítica web" queda como histórico.
- **Sin aviso de cookies**, por decisión de Pedro (19/11/2026). La [página de Privacidad](../privacidad.html) informa que se usa GA4 y cómo evitarlo.

**Archivos:**

| Archivo | Qué tiene |
|---|---|
| `analitica.js` | El ID de GA4 (`GA_ID`) y lo que se mide en cualquier página: vista de página, secciones vistas, scroll, tiempo activo, clics a CTA, WhatsApp y links internos, preguntas frecuentes y origen de la visita. |
| `index.html`, `<script>` | Los eventos propios de la home: demo, precios, checklist y formulario. Usan `window.cmpTrack`. |
| `privacidad.html` | La política de privacidad. |

**Para medir una página nueva** (por ejemplo, del blog), alcanza con una línea en el `<head>`:

```html
<script src="/analitica.js" defer></script>
```

Con eso ya mide la vista de página, las secciones, el scroll, el tiempo, los clics a CTA, WhatsApp y links internos, y los `<details>` como preguntas frecuentes.

**Para que un link mande su propio evento,** agregale `data-evento="nombre"`. Por ejemplo, `<a href="https://wa.me/?text=…" data-evento="compartir_nota">`.
- El nombre va en minúsculas, con letras, números y `_`, y empieza con una letra.
- Tiene hasta 40 caracteres.
- No puede empezar con `ga_`, `google_` ni `firebase_`.

## Pruebas en la compu

1. Correr `python3 -m http.server 8790` en la carpeta del repo y abrir http://localhost:8790.
2. En localhost, cada evento sale con `debug_mode` y se ve al instante en **GA4 → Administrar → DebugView**.
3. La consola del navegador muestra cada evento como `[analítica] nombre {parámetros}`.

En archivo local (`file://`) no se manda nada. La planilla tampoco recibe nada desde localhost.

## Eventos

Los nombres van en castellano y en snake_case. Los parámetros vacíos no se mandan.

### Automáticos de GA4

- **`page_view`**: lo manda GA4 solo al cargar cada página.
  - Lleva la URL con las UTM, el sitio de origen, el dispositivo, el navegador y la ubicación aproximada.
  - Todos los eventos llevan la propiedad de usuario `visitante`.
- **`click`** (clics salientes), **`file_download`** (el PDF del checklist) y **`user_engagement`**: los manda GA4 solo, con la medición mejorada.

### Generales (`analitica.js`)

| Evento | Cuándo | Parámetros |
|---|---|---|
| `seccion_vista` | Una sección se ve por primera vez: la mitad de la sección, o media pantalla si es más alta que la pantalla. Una vez por sección y por página. | `seccion` |
| `scroll_profundidad` | Llega al 25, 50, 75, 90 y 100 % de la página. Una vez cada uno. | `porcentaje` |
| `tiempo_activo` | Cumple 15 s, 30 s, 1, 2 y 5 min con la pestaña visible y algún movimiento en el último minuto. | `segundos` |
| `clic_cta` | Clic en cualquier link al formulario ("Quiero mi comparativo"). | `seccion`, y `plan` y `periodo` si está en una tarjeta de plan |
| `clic_whatsapp` | Clic en un link a WhatsApp **con número**, es decir, un contacto a CMP: plan Integral, pie o el botón que aparece después del formulario. | `seccion`, y `plan` y `periodo` si está en una tarjeta de plan |
| `compartir_whatsapp` | Clic en un link a WhatsApp **sin número** (`wa.me/?text=…`): alguien comparte algo con un tercero. | `seccion` |
| *(nombre de `data-evento`)* | Clic en un link con `data-evento="nombre"`: se manda ese evento en vez del automático. Hoy: `compartir_nota`, el botón "Mandásela por WhatsApp" de las notas del blog. | `seccion` |
| `clic_nav` | Clic en el menú, el logo, "Garantía de 30 días" o un link a otra página del sitio. | `seccion`, `destino` |
| `faq_abierta` | Abre una pregunta frecuente. Una vez por pregunta y por página. | `pregunta`, `seccion` |

### De la home (`index.html`)

| Evento | Cuándo | Parámetros |
|---|---|---|
| `precios_periodo` | Cambia el selector anual/mensual. | `periodo` (`anual` o `mensual`) |
| `demo_pestana` | Cambia de pestaña en la demo de Una Sola Lista. | `pestana` (`filtrar`, `aldia`, `historial`, `compartir`, `mercado`) |
| `demo_slider` | Suelta un slider de la demo, no en cada paso. | `control` (`anticipo` o `cuota`), `valor` (USD), `resultado` ("Entran 4 de 8") |
| `demo_boton` | Clic en "Imprimir" o "Compartir por WhatsApp" de la demo. Esos botones no hacen nada todavía: miden interés. | `destino` (`imprimir` o `compartir_por_whatsapp`) |
| `checklist_visto` | Se abre el popup del checklist. | `motivo` (`mitad_pagina`: se abrió solo al pasar la mitad de la página; `pestana_lateral`: clic en la pestaña del costado) |
| `checklist_error` | Intenta enviar el checklist con un dato mal. | `campo` (`nombre`, `mail` o `whatsapp`) |
| `checklist_enviado` | Deja sus datos en el checklist. **Conversión.** | — |
| `checklist_descarga` | Clic en "Descargar el checklist (PDF)". | — |
| `checklist_cerrado` | Cierra el popup. | `motivo` (`con_datos` o `sin_datos`) |
| `form_inicio` | Entra por primera vez a un campo del formulario final. | — |
| `form_error` | Intenta enviar el formulario con un dato faltante. | `campo` (`nombre` o `whatsapp`) |
| `form_enviado` | Envía el formulario. **Conversión principal.** | `desarrolladoras`, y `plan` y `periodo` si antes hizo clic en un plan |

### Valores de `seccion`

| Valor | Dónde |
|---|---|
| `barra` | Barra superior |
| `inicio` | Hero |
| `el_problema` | El problema |
| `como_funciona` | Cómo funciona |
| `una_sola_lista` | Demo de Una Sola Lista |
| `crm` | CRM |
| `confianza` | Confianza |
| `precios` | Planes y garantía |
| `preguntas_frecuentes` | Preguntas frecuentes |
| `formulario` | Cierre y formulario |
| `pie` | Pie |
| `barra_movil` | Botón fijo en el celular |
| `checklist` | Popup del checklist |

Las secciones sin `id` toman el nombre de su texto chico de arriba (`.eyebrow`). Si ese texto cambia, cambia el nombre en GA4.

## Origen de la visita (UTM)

**GA4 toma las UTM solo:** source, medium, campaign, content y term. Están en **Informes → Adquisición**:
- "Adquisición de usuarios" muestra cómo llegó la primera vez.
- "Adquisición de tráfico" muestra cada sesión.

**Para los leads,** `analitica.js` guarda el origen en el navegador y el formulario lo manda a la planilla en dos campos:

| Campo | Qué es | Ejemplo |
|---|---|---|
| `llegada` | Cómo llegó en esta sesión: UTM si hay; si no, el sitio de origen o "directo". | `linkedin / social / lanzamiento` |
| `primera_visita` | Fecha y origen de la primera vez que entró. | `2026-11-19 · whatsapp / mensaje / prospeccion` |

La planilla sigue recibiendo además `vid`, `fuente` y `dispositivo`.

> **Pendiente en el Apps Script:** si el script escribe columnas fijas, hay que sumarle `llegada` y `primera_visita`.

**Para armar links con UTM:** usá siempre minúsculas y los mismos valores. Por ejemplo:

```
https://cmpsolutionsio.github.io/?utm_source=whatsapp&utm_medium=mensaje&utm_campaign=prospeccion-nov
https://cmpsolutionsio.github.io/?utm_source=linkedin&utm_medium=social&utm_campaign=lanzamiento
```

**UTM que ya usa el sitio:**

| Link | `utm_source` | `utm_medium` | `utm_campaign` |
|---|---|---|---|
| Botón "Mandásela por WhatsApp" de las notas del blog: un broker le pasa la nota a su cliente | `whatsapp` | `compartido` | `nota-broker` |

Para ver cuánta gente llega por esos links: Adquisición de tráfico, filtrado por campaña `nota-broker`.

## Cruzar un lead con su recorrido

1. Cada lead llega a la planilla con `vid`, el id al azar del visitante.
2. En GA4 ese mismo id es la propiedad de usuario `visitante`.
3. Para ver qué hizo esa persona: **Explorar → Exploración libre**, con la dimensión "visitante" y un filtro por ese valor. También sirve **Explorar → Exploración de usuario**.

A GA4 nunca le mandamos nombre, mail ni WhatsApp: lo prohíben los términos de Google.

## Configuración de GA4 (una sola vez)

Lo hace quien administre la propiedad.

1. **Propiedad:** zona horaria Argentina, moneda USD y flujo web `https://cmpsolutionsio.github.io`. El ID de medición `G-…` va en `GA_ID`, en `analitica.js`.
2. **Medición mejorada** (Flujos de datos → el flujo → Medición mejorada):
   - apagar **Interacciones con formularios** (los formularios se miden con `form_*` y `checklist_*`);
   - dejar prendido el resto.
3. **Retención de datos:** Administrar → Recopilación y modificación de datos → Retención de datos → **14 meses**. Viene en 2, y las exploraciones más viejas se pierden.
4. **Eventos clave** (Administrar → Eventos clave): marcar `form_enviado`, `checklist_enviado` y `clic_whatsapp`. Los eventos aparecen en la lista recién cuando llegan por primera vez; también se pueden crear a mano con el nombre exacto.
5. **Dimensiones personalizadas** (Administrar → Definiciones personalizadas → Crear dimensión). Sin esto, los parámetros no aparecen en los informes. Cada una con su nombre exacto:

| Nombre a mostrar | Alcance | Parámetro |
|---|---|---|
| Sección | Evento | `seccion` |
| Plan | Evento | `plan` |
| Período | Evento | `periodo` |
| Destino | Evento | `destino` |
| Pestaña demo | Evento | `pestana` |
| Control demo | Evento | `control` |
| Valor | Evento | `valor` |
| Resultado demo | Evento | `resultado` |
| Pregunta | Evento | `pregunta` |
| Campo con error | Evento | `campo` |
| Motivo | Evento | `motivo` |
| Profundidad (%) | Evento | `porcentaje` |
| Segundos activo | Evento | `segundos` |
| Desarrolladoras | Evento | `desarrolladoras` |
| Visitante | Usuario | `visitante` |

6. **Tráfico de desarrolladores** (opcional): Administrar → Recopilación y modificación de datos → Filtros de datos. Activar el filtro "Tráfico de desarrolladores" para que las pruebas desde localhost no cuenten en los informes. DebugView las sigue mostrando.
7. **Search Console:** vincularla desde Administrar → Vínculos de productos, cuando esté verificada.

## Dónde mirar cada cosa en GA4

| Pregunta | Dónde |
|---|---|
| ¿Cuánta gente entra y de dónde viene? | Informes → Adquisición → Adquisición de tráfico (fuente / medio / campaña) |
| ¿De qué campaña vienen los leads? | Misma pantalla; elegí `form_enviado` en la columna "Eventos clave" |
| ¿Qué está pasando ahora? | Informes → Tiempo real |
| ¿Hasta dónde llegan en la página? | Explorar → Exploración libre: evento `seccion_vista` por "Sección", o `scroll_profundidad` por "Profundidad (%)" |
| Embudo de la home | Explorar → Exploración de embudo: `page_view` → `seccion_vista` (una_sola_lista) → `seccion_vista` (precios) → `clic_cta` → `form_inicio` → `form_enviado` → `clic_whatsapp` |
| ¿Qué plan les interesa? ¿Anual o mensual? | Exploración libre: `clic_cta` y `form_enviado` por "Plan" y "Período"; `precios_periodo` por "Período" |
| ¿Usan la demo? ¿Con qué presupuesto? | Exploración libre: `demo_pestana` por "Pestaña demo"; `demo_slider` por "Control demo", "Valor" y "Resultado demo" |
| ¿Qué preguntas abren? | Exploración libre: `faq_abierta` por "Pregunta" |
| ¿Qué notas del blog comparten los brokers? | Exploración libre: `compartir_nota` por "Ruta de la página". Las visitas que traen esos links están en la campaña `nota-broker`. |
| ¿Dónde se traban en el formulario? | `form_inicio` contra `form_enviado`; `form_error` por "Campo con error" |
| ¿Funciona el popup del checklist? | `checklist_visto` por "Motivo" → `checklist_enviado` → `checklist_descarga`; `checklist_cerrado` por "Motivo" |
| ¿Cuánto tiempo se quedan? | Informes → Interacción → Páginas (tiempo de interacción promedio), y `tiempo_activo` por "Segundos activo" |
| ¿Qué hizo un lead puntual? | Explorar → Exploración libre filtrada por "Visitante" = el `vid` de la planilla |
| Probar cambios | Administrar → DebugView, con el sitio abierto en localhost |

**Tiempos de GA4:**
- Los informes estándar tardan hasta 24-48 h en completarse.
- Tiempo real y DebugView son inmediatos.
- Las dimensiones personalizadas solo muestran datos desde que se crean, no hacia atrás.
