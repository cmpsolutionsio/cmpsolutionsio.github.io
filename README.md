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

## Contactos y analítica en Google Sheets

- El código que recibe los datos vive en la planilla de prospectos (Extensiones > Apps Script) y está publicado como aplicación web.
- Su dirección (termina en `/exec`) está en la constante `ENDPOINT` de `index.html`. Vacía, no se guarda nada.
- Pestañas que crea: "Leads web" (formulario y checklist), "Analítica web" (actividad anónima) y "Resumen web" (se actualiza cada hora).
- `checklist-7-controles.pdf` es el documento que entrega el aviso emergente.

## Blog y SEO

- El blog es HTML plano en `blog/`: una carpeta por nota (`blog/<slug>/index.html`) y una hoja de estilos compartida, `blog/blog.css`, con los mismos colores y tipografía que la página.
- Nota nueva: copiar `_docs/plantilla-nota.html` y seguir las instrucciones de su comentario. Después sumarla a `blog/index.html`, `sitemap.xml`, `llms.txt` y a "Seguí leyendo" de su nota pilar.
- `_docs/` tiene la investigación de keywords, el plan editorial y lo que hay que dar de alta (Search Console, Bing, dominio). GitHub Pages no publica carpetas que empiezan con `_`.
- `robots.txt` deja pasar a todos los buscadores y bots de IA. `llms.txt` es el resumen del sitio para modelos de lenguaje.
- Si cambia el dominio, reemplazar `https://cmpsolutionsio.github.io` en `index.html`, `blog/`, `_docs/plantilla-nota.html`, `sitemap.xml`, `robots.txt` y `llms.txt`.

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
