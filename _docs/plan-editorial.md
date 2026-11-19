# Plan editorial del blog

Una nota por semana. Las tres primeras están escritas y Pedro aprobó el tono el 19/11/2026. Las demás se escriben en este orden, salvo que una noticia obligue a adelantar alguna.

Clusters y keywords: [keywords.md](keywords.md). Plantilla de nota: [plantilla-nota.html](plantilla-nota.html).

## A quién le escribimos

El cliente de CMP es quien **vende** pozo: inmobiliarias, comercializadoras y desarrolladoras. Por eso hay dos tipos de nota (decisión de Pedro del 19/11/2026):

- **Para vendedores (10 de cada 15 notas).** Le hablan al inmobiliario, la comercializadora o la desarrolladora sobre su trabajo: cotizar, comparar, hacer seguimiento, ordenar el equipo y la cartera. Tienen menos búsquedas, pero quien llega es quien puede contratar CMP. Terminan con "Cómo lo resolvemos en CMP" y el CTA al comparativo.
- **Para mandarle al cliente (5 de cada 15).** Responden lo que pregunta el comprador (riesgos, crédito, pozo o usado). Son lo que le ofrecemos al broker: material serio, con fuentes, para reenviar sin escribir nada. Tienen arriba el recuadro "Si sos inmobiliario" con el botón "Mandásela por WhatsApp". El link compartido lleva `utm_medium=compartido`, y con eso el cliente ve la nota sin los recuadros para inmobiliarios ni el CTA (clase `para-broker`). Además traen búsquedas y citas de las IA, que le dan autoridad al sitio.

## Reglas para escribir

1. **Nada inventado.** Tasas, requisitos de bancos, índices y normas van con fuente y fecha. Si no hay fuente, no va.
2. **Fuentes primarias primero:** InfoLEG o Boletín Oficial para normas, CAMARCO para el índice CAC, la web del banco o del BCRA para tasas. Si solo hay nota de medio, se cita el medio con su fecha.
3. **Datos que cambian = fecha en el texto** ("al 19/11/2026") y en la línea de autor ("Datos verificados al..."). Cada nota con tasas se revisa una vez por mes.
4. **Beltrán Briones** es fuente pública e inspiración: se lo resume con link y fecha. No firma, no se le inventan frases y no se da a entender que respalda a CMP.
5. **Nada de clientes reales** (NDA): ni nombres, ni datos, ni casos. Los ejemplos usan los desarrollos ficticios de la home (Tilo Norte, Patio Lapacho, Torre Ceibo).
6. **Tono:** voseo, frases cortas, sin tono de venta. Primero se responde la pregunta y después se explica.
7. **Formato para buscadores de IA:** "Respuesta corta" arriba, títulos en forma de pregunta, una idea por párrafo, tablas para comparar y preguntas frecuentes al final.
8. **Aviso legal** en notas de normas, créditos o inversión: es informativa y no reemplaza a un escribano, abogado o asesor.
9. **Cada nota nueva** se suma a `blog/index.html` (en la sección que le toca), `sitemap.xml` y `llms.txt`, y a "Seguí leyendo" de su nota pilar.

## Calendario

| # | Semana | Nota | Para quién | Cluster | Keyword principal | Estado |
|---|---|---|---|---|---|---|
| 1 | 23/11/2026 | Cómo vender departamentos en pozo | Vendedores | D (pilar) | cómo vender departamentos en pozo | Escrita, tono aprobado |
| 2 | 23/11/2026 | Comprar en pozo: los riesgos reales y cómo cuidarte | Para mandar al cliente | A (pilar) | comprar en pozo riesgos | Escrita, tono aprobado |
| 3 | 23/11/2026 | Crédito hipotecario o financiación del desarrollador | Para mandar al cliente | B (pilar) | crédito hipotecario para comprar en pozo | Escrita, tono aprobado |
| 4 | 30/11/2026 | Hipoteca divisible: qué tiene que hacer la desarrolladora para que sus compradores accedan al crédito | Vendedores | B | hipoteca divisible | Pendiente |
| 5 | 07/12/2026 | Cómo comparar planes de pago de distintas desarrolladoras | Vendedores | D | cómo comparar planes de pago en pozo | Pendiente |
| 6 | 14/12/2026 | El costo de cotizar con una lista vieja | Vendedores | D | listas de precios desarrolladoras | Pendiente |
| 7 | 21/12/2026 | Pozo o usado: qué conviene en 2026, con números | Para mandar al cliente | C (pilar) | pozo o usado | Pendiente |
| 8 | 04/01/2027 | Cómo es comercializar pozo: qué hace la comercializadora y cómo se arregla con la desarrolladora | Vendedores | D | comercializar emprendimientos inmobiliarios | Pendiente |
| 9 | 11/01/2027 | Plantillas de WhatsApp para el seguimiento de clientes de pozo | Vendedores | D | plantillas WhatsApp inmobiliaria | Pendiente |
| 10 | 18/01/2027 | Índice CAC: cuánto va a subir tu cuota (se actualiza cada mes) | Para mandar al cliente | A | índice CAC | Pendiente |
| 11 | 25/01/2027 | Cómo ordenar la cartera de desarrolladoras: cuántas, cuáles y cómo pedir las listas | Vendedores | D | cartera de desarrolladoras inmobiliaria | Pendiente |
| 12 | 01/02/2027 | Qué medir en un equipo de brokers de pozo | Vendedores | D | métricas equipo comercial inmobiliario | Pendiente |
| 13 | 08/02/2027 | Qué revisar en el contrato antes de comprar en pozo | Para mandar al cliente | A | contrato compra en pozo | Pendiente |
| 14 | 15/02/2027 | Cómo presentar un desarrollo en pozo: brochure, tabla y visita | Vendedores | D | cómo presentar un emprendimiento en pozo | Pendiente |
| 15 | 22/02/2027 | CRM para inmobiliarias que venden pozo: qué tiene que tener | Vendedores | D | CRM inmobiliario pozo | Pendiente |

**Banco de ideas para mandar al cliente** (entran si una noticia las vuelve urgentes): Fideicomiso al costo o precio cerrado; Créditos hipotecarios UVA: tasas y requisitos del mes; Cuotas en pesos con CAC o en dólares.

## Notas que necesitan algo de Pedro o Juan

- **#8 Cómo es comercializar pozo** y **#11 Cartera de desarrolladoras:** sirven mucho más con experiencia propia (sin nombrar clientes): cómo se negocia la comisión, cómo llegan las listas, qué pide la desarrolladora. Necesitan una charla de 20 minutos con Pedro o Juan.
- **#12 Qué medir en un equipo de brokers:** conviene validar con Pedro qué miran hoy los dueños de inmobiliaria.
- **#15 CRM:** compara con otros CRM; hay que decidir si nombramos competidores.
- **Firma de autor:** hoy las notas las firma "Equipo CMP Solutions". Para Google, en temas de plata y vivienda, una persona con nombre, foto y trayectoria suma confianza. Si Pedro o Juan firman, se arma una página de autor.

## Revisión mensual

- Notas 3 y 4: tasas y líneas de crédito (cambian con cada licitación del FGS).
- Nota 10: índice CAC del mes (CAMARCO lo publica alrededor del día 20).
- Al cambiar un dato: actualizar el texto, la fecha "Datos verificados al", `dateModified` del JSON-LD y `lastmod` del sitemap.

## Cómo medir si funciona

Con la analítica del PR #3:
- **Notas para vendedores:** clics al comparativo (`clic_cta`) desde el blog.
- **Notas para mandar al cliente:** clics en "Mandásela a tu cliente" (links con `data-evento="compartir_nota"`) y visitas que llegan con `utm_medium=compartido`. Si los brokers no las comparten, se escriben menos.
