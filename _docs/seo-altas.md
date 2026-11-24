# SEO: qué tiene que dar de alta Pedro

Todo lo técnico ya está en el sitio (metas, canonical, Open Graph, JSON-LD, `sitemap.xml`, `robots.txt`, `llms.txt`). Lo que sigue necesita las cuentas de CMP y no lo puede hacer Claude.

**Estado al 24/11/2026:** el dominio `cmpsolutions.info` ya está comprado y conectado a GitHub Pages, con HTTPS (pasos 1 y 2). Sigue: 3) Search Console, 4) Bing.

Usar una cuenta de Google de CMP o la personal, **nunca la de Extendeal**.

## 1. Dominio propio (recomendado antes de dar de alta Search Console)

Por qué: la autoridad que gane el blog (links, historial en Google, citas de las IA) queda atada al dominio. Si se publica mucho tiempo en `github.io` y después se muda, se recupera con redirecciones, pero se pierde tiempo. También suma confianza: un mail y un sitio `@cmpsolutions...` venden más que un `github.io`.

- `.com.ar`: se compra en NIC Argentina (nic.ar) con CUIT/CUIL. Dice "empresa argentina".
- `.com` o `.io`: en cualquier registrador. El README menciona `cmpsolutions.io`; verificar si está libre.

## 2. Conectar el dominio a GitHub Pages

1. En el repo: **Settings → Pages → Custom domain**, escribir el dominio y guardar. GitHub crea un archivo `CNAME` en el repo (commitea en `main`).
2. En el registrador del dominio, cargar los DNS:
   - Dominio sin www (`cmpsolutions.com.ar`): cuatro registros **A** a `185.199.108.153`, `185.199.109.153`, `185.199.110.153` y `185.199.111.153`.
   - `www`: un registro **CNAME** a `cmpsolutionsio.github.io`.
3. Cuando GitHub muestre el check verde, tildar **Enforce HTTPS**.
4. En la organización de GitHub: **Settings → Pages → Add a domain** para verificar el dominio (evita que otro lo use en Pages).
5. GitHub redirige solo `cmpsolutionsio.github.io` al dominio nuevo.
6. Hecho en el PR #4: la dirección base pasó de `https://cmpsolutionsio.github.io` a `https://cmpsolutions.info` en todo el sitio.
7. `og.png` y `checklist-7-controles.pdf` tienen la dirección escrita dentro de la imagen: hay que regenerarlos.

**Ojo con el repo privado:** si el repo pasa a privado sin un plan pago de GitHub, Pages deja de publicar y se caen la página y el blog.

## 3. Google Search Console

1. Entrar a https://search.google.com/search-console.
2. **Agregar propiedad:**
   - Tipo **Dominio**, con `cmpsolutions.info`. Se verifica con un registro **TXT** en el DNS (Porkbun). Cubre www, sin www, http y https.
3. **Sitemaps:** enviar `sitemap.xml`.
4. **Inspección de URL:** después de mergear el blog, pedir indexación de la home, `/blog/` y las tres notas.
5. A las 2 o 3 semanas, mirar **Rendimiento**: qué búsquedas traen impresiones. Con eso se ajusta `keywords.md`.
6. Si ya se dio de alta con `github.io` y después llega el dominio: verificar también el dominio nuevo y usar **Configuración → Cambio de dirección**.

## 4. Bing Webmaster Tools

Bing alimenta a Copilot y a parte de las búsquedas de ChatGPT, así que importa para AEO.

1. Entrar a https://www.bing.com/webmasters.
2. Elegir **Importar desde Google Search Console**: trae el sitio y el sitemap en un paso (hay que tener hecho el paso 3).
3. Opcional: activar **IndexNow** para avisarle a Bing al instante cuando se publica una nota. Necesita un archivo de clave en la raíz del repo; Claude lo arma cuando quieras.

## 5. Controles después de mergear

- **Datos estructurados:** pegar cada URL en https://search.google.com/test/rich-results y en https://validator.schema.org/. Tienen que aparecer Organization, WebSite, BlogPosting, BreadcrumbList y FAQPage sin errores.
- **FAQ:** desde 2023 Google muestra el desplegable de preguntas frecuentes solo para sitios de gobierno y salud. Igual conviene tener el FAQPage: lo leen Bing y los buscadores de IA.
- **robots.txt:** abrir `/robots.txt` y `/llms.txt` en el navegador y ver que carguen.
- **Vista previa al compartir:** pegar el link de una nota en WhatsApp y ver la tarjeta con imagen y título.

## 6. Seguimiento de AEO (una vez por mes)

Preguntarle a ChatGPT (con búsqueda), Perplexity, Gemini y Copilot cosas como:

- "¿Se puede comprar en pozo con crédito hipotecario?"
- "¿Qué riesgos tiene comprar un departamento en pozo?"
- "¿Cómo comparo planes de pago de distintas desarrolladoras?"

Anotar si citan a CMP y a quién citan en su lugar. Eso dice qué notas reforzar.
