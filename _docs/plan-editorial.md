# Plan editorial del blog

Una nota por semana. Las tres primeras están escritas y esperan el OK de Pedro sobre el tono. Las demás se escriben en este orden, salvo que una noticia obligue a adelantar alguna.

Clusters y keywords: [keywords.md](keywords.md). Plantilla de nota: [plantilla-nota.html](plantilla-nota.html).

## Reglas para escribir

1. **Nada inventado.** Tasas, requisitos de bancos, índices y normas van con fuente y fecha. Si no hay fuente, no va.
2. **Fuentes primarias primero:** InfoLEG o Boletín Oficial para normas, CAMARCO para el índice CAC, la web del banco o del BCRA para tasas. Si solo hay nota de medio, se cita el medio con su fecha.
3. **Datos que cambian = fecha en el texto** ("al 19/11/2026") y en la línea de autor ("Datos verificados al..."). Cada nota con tasas se revisa una vez por mes.
4. **Beltrán Briones** es fuente pública e inspiración: se lo resume con link y fecha. No firma, no se le inventan frases y no se da a entender que respalda a CMP.
5. **Nada de clientes reales** (NDA): ni nombres, ni datos, ni casos. Los ejemplos usan los desarrollos ficticios de la home (Tilo Norte, Patio Lapacho, Torre Ceibo).
6. **Tono:** voseo, frases cortas, sin tono de venta. Primero se responde la pregunta y después se explica.
7. **Formato para buscadores de IA:** "Respuesta corta" arriba, títulos en forma de pregunta, una idea por párrafo, tablas para comparar y preguntas frecuentes al final.
8. **Aviso legal** en notas de normas, créditos o inversión: es informativa y no reemplaza a un escribano, abogado o asesor.
9. **Cada nota nueva** se suma a `blog/index.html`, `sitemap.xml` y `llms.txt`, y a "Seguí leyendo" de su nota pilar.

## Calendario

| # | Semana | Nota | Cluster | Keyword principal | Estado |
|---|---|---|---|---|---|
| 1 | 23/11/2026 | Comprar en pozo: los riesgos reales y cómo cuidarte | A (pilar) | comprar en pozo riesgos | Escrita, para aprobar |
| 2 | 23/11/2026 | Crédito hipotecario o financiación del desarrollador | B (pilar) | crédito hipotecario para comprar en pozo | Escrita, para aprobar |
| 3 | 23/11/2026 | Cómo vender departamentos en pozo | D (pilar) | cómo vender departamentos en pozo | Escrita, para aprobar |
| 4 | 30/11/2026 | Hipoteca divisible: qué es y cómo cambia la compra en pozo | B | hipoteca divisible | Pendiente |
| 5 | 07/12/2026 | Pozo o usado: qué conviene en 2026, con números | C (pilar) | pozo o usado | Pendiente |
| 6 | 14/12/2026 | Índice CAC: qué es y cómo ajusta tus cuotas (se actualiza cada mes) | A | índice CAC | Pendiente |
| 7 | 21/12/2026 | Cómo comparar planes de pago de distintas desarrolladoras | D | cómo comparar planes de pago en pozo | Pendiente |
| 8 | 04/01/2027 | Cómo es comercializar pozo: qué hace la comercializadora y cómo se arregla con la desarrolladora | D | comercializar emprendimientos inmobiliarios | Pendiente |
| 9 | 11/01/2027 | Fideicomiso al costo o precio cerrado: diferencias y riesgos | A | fideicomiso al costo | Pendiente |
| 10 | 18/01/2027 | Créditos hipotecarios UVA: tasas y requisitos del mes | B | créditos hipotecarios UVA | Pendiente (se actualiza mensual) |
| 11 | 25/01/2027 | El costo de cotizar con una lista vieja | D | listas de precios desarrolladoras | Pendiente |
| 12 | 01/02/2027 | Qué revisar en el contrato antes de comprar en pozo | A | contrato compra en pozo | Pendiente |
| 13 | 08/02/2027 | Cuotas en pesos con CAC o en dólares: cuál conviene | B | cuotas en pozo pesos o dólares | Pendiente |
| 14 | 15/02/2027 | Plantillas de WhatsApp para hacer seguimiento en pozo | D | plantillas WhatsApp inmobiliaria | Pendiente |
| 15 | 22/02/2027 | CRM para inmobiliarias que venden pozo: qué tiene que tener | D | CRM inmobiliario pozo | Pendiente |

## Notas que necesitan algo de Pedro o Juan

- **#8 Cómo es comercializar pozo:** sirve mucho más con experiencia propia (sin nombrar clientes): cómo se negocia la comisión, cómo llegan las listas, qué pide la desarrolladora. Necesita una charla de 20 minutos con Pedro o Juan.
- **#15 CRM:** compara con otros CRM; hay que decidir si nombramos competidores.
- **Firma de autor:** hoy las notas las firma "Equipo CMP Solutions". Para Google, en temas de plata y vivienda, una persona con nombre, foto y trayectoria suma confianza. Si Pedro o Juan firman, se arma una página de autor.

## Revisión mensual

- Notas 2 y 10: tasas y líneas de crédito (cambian con cada licitación del FGS).
- Nota 6: índice CAC del mes (CAMARCO lo publica alrededor del día 20).
- Al cambiar un dato: actualizar el texto, la fecha "Datos verificados al", `dateModified` del JSON-LD y `lastmod` del sitemap.
