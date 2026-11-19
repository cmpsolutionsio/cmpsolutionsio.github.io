# cmpsolutions.io: página de ventas

Sitio estático de una sola página. No necesita compilación: todo está en `index.html`.

## Publicar con GitHub Pages

1. Subir `index.html` a la rama `main` del repositorio.
2. En el repositorio: Settings → Pages → Source: "Deploy from a branch" → `main` / `/ (root)`.
3. La página queda en `https://<usuario>.github.io/<repositorio>/`.

## Antes de salir a vender

- Precios, garantía, cupos y plazos están en `index.html`, sección Planes y preguntas frecuentes. Revisarlos cuando cambien.
- Poner el número de WhatsApp en la constante `WHATSAPP` al principio del `<script>` de `index.html` (con código de país, sin signos). Sin ese número, el formulario solo muestra la confirmación y no envía nada.
- Verificar nombre, dominio y marca.

## Contactos en Google Sheets

- El código que recibe los datos vive en la planilla de prospectos (Extensiones > Apps Script) y está publicado como aplicación web.
- Su dirección (termina en `/exec`) está en la constante `ENDPOINT` de `index.html`. Vacía, no se guarda nada.
- Recibe solo los leads del formulario y del checklist, en la pestaña "Leads web". Cada lead llega con su origen: `llegada` y `primera_visita`.
- Desde el 19/11/2026 no recibe eventos. Las pestañas "Analítica web" y "Resumen web" quedan como histórico.
- `checklist-7-controles.pdf` es el documento que entrega el aviso emergente.

## Analítica (Google Analytics 4)

- El ID de medición está en la constante `GA_ID` de `analitica.js`. Vacío, no se mide nada.
- Cada página lo carga con `<script src="/analitica.js" defer></script>` en el `<head>`.
- Qué se mide, cómo configurar GA4 y dónde mirar cada métrica: [`_docs/plan-de-medicion.md`](_docs/plan-de-medicion.md).
- En localhost los eventos van en modo debug (GA4 > DebugView) y se listan en la consola del navegador.
- La política de privacidad está en `privacidad.html`. Hay que actualizarla si se suma otra herramienta.

## Reglas del contenido

- Todas las demos usan datos ficticios. Nunca cargar datos reales de un cliente.
- Las funciones incompletas se describen solo con las frases acordadas (carpetas, WhatsApp, aviso de listas viejas). Finanzas no se menciona.

## Fotos

Cargan desde Unsplash (licencia Unsplash, uso comercial permitido, sin atribución obligatoria):

- Hero: Martti Salmi, https://unsplash.com/photos/PV6p4Lbt8rA
- Cómo funciona: Vitaly Gariev, https://unsplash.com/photos/T5u0v-kFpww
- Confianza: Ksenia Obukhova, https://unsplash.com/photos/KOAkD_Cc9co
- Cierre: Roman, https://unsplash.com/photos/l71vkYSEuyE

Para no depender de Unsplash, descargarlas, guardarlas en una carpeta `img/` y cambiar las cuatro URLs en `index.html`.
