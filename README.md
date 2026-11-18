# cmpsolutions.io: página de ventas

Sitio estático de una sola página. No necesita compilación: todo está en `index.html`.

## Publicar con GitHub Pages

1. Subir `index.html` a la rama `main` del repositorio.
2. En el repositorio: Settings → Pages → Source: "Deploy from a branch" → `main` / `/ (root)`.
3. La página queda en `https://<usuario>.github.io/<repositorio>/`.

## Antes de salir a vender

- Reemplazar todo lo que está resaltado entre corchetes: precios, garantía, cupos, plazos y duración de la capacitación.
- Poner el número de WhatsApp en la constante `WHATSAPP` al principio del `<script>` de `index.html` (con código de país, sin signos). Sin ese número, el formulario solo muestra la confirmación y no envía nada.
- Verificar nombre, dominio y marca.

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
