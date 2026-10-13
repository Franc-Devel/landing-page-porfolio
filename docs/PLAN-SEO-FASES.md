# Plan SEO por fases — FAUVOR

## Entregado

1. Auditoría estática de seis páginas comerciales con `scripts/audit_site.py`. Comprueba títulos, descripciones, H1, canonical, IDs, enlaces, recursos y profundidad. Resultado local: cero incidencias; páginas clave a un clic de portada. No sustituye una auditoría de renderizado o HTTP.
2. Páginas propias de Taller, Analytics y Flow con problemas, circuito del piloto, información necesaria, límites y aceptación. Enlaces de ida y vuelta con la landing y entre temas relacionados. No se generaron páginas masivas por ciudad ni contenido copiado.
3. Privacidad y criterio editorial con responsables y tratamiento del contacto. No se declara ONG ni se atribuye ventaja al TLD .org.
4. Sitemap de seis URLs reales y canónicas. La salida estática contiene index.html en cada ruta. Respuesta 200 y ausencia de soft-404 deben comprobarse sobre producción.
5. Exportador de Search Console preparado. Utiliza la API REST oficial con OAuth existente y permiso de lectura; no instala un proveedor de rankings de pago.

## Comandos

```bash
python3 scripts/audit_site.py --root dist --report audit-report.json
python3 scripts/audit_site.py --root dist --http --report http-report.json
python3 scripts/gsc_export.py --start 2026-10-01 --end 2026-10-13 --output gsc-queries.csv
```

El último comando requiere `GSC_ACCESS_TOKEN` mediante entorno, nunca en argumentos ni repositorio. Cambiar fechas según el período con datos disponibles. Los CSV de GSC y tokens no se publican ni se incorporan a la salida dist. La paginación recupera las filas que la API devuelve; no asegura acceso a todas las consultas, incluidas las omitidas por privacidad.

## Pendiente de acceso a la cuenta

En Search Console elegir Dominio, escribir fauvor.org, continuar y completar el flujo de verificación con Cloudflare o copiar el TXT `google-site-verification=...`. Agregar el TXT exacto emitido por Google, no reutilizar los TXT de Sites. Después verificar en Google, enviar sitemap.xml e inspeccionar la URL principal.

El usuario confirmó la verificación con una captura de Search Console mediante proveedor de dominio. No hay conexión OAuth a Search Console en esta sesión; el envío del sitemap y la solicitud de indexación deben hacerse en la cuenta. No se afirmó descarga de métricas.

## Rendimiento y rastreo en producción

El proxy de red de esta sesión rechazó CONNECT a fauvor.org con 403; ese resultado no es un 403 del sitio ni demuestra un fallo de indexación. No hay navegador de auditoría disponible. Revisar en URL Inspection y PageSpeed Insights: códigos 200, redirects, robots, X-Robots-Tag, renderizado y diferencias móvil/escritorio. La ruta inexistente del crawler permite detectar un posible soft-404 si devuelve 200, pero requiere interpretar la respuesta.

LCP <=2.5 segundos, INP <=200 milisegundos y CLS <=0.1 son objetivos de evaluación, no cifras medidas. El percentil 75 con datos de usuarios es distinto de una ejecución de laboratorio; un dominio nuevo puede no tener datos suficientes en CrUX. Reservar espacio de imágenes y diferir scripts ya está aplicado. No se comprimieron rostros ni logotipos alterando su apariencia.

## Seguimiento

Revisar por semana impresiones, clics, CTR y posición media por consulta/página. El exportador marca oportunidades con posición media 8–15 e impresiones >=100 (umbral configurable). Es una prioridad de revisión, no una garantía de ascenso ni posición exacta diaria. Contrastar consultas con intención y la entrega que el servicio puede ofrecer antes de cambiar encabezados.

Registrar consultas comerciales y pilotos aceptados con consentimiento y sin considerar un clic de WhatsApp como conversación enviada. Crear guías y casos nuevos solamente cuando agreguen ejemplos propios, datos documentados y explicación del método.

SerpBear es opcional: necesita servidor, mantenimiento y un proveedor de datos SERP. No se desplegó ni se contrataron API o suscripciones. Search Console debe ser la primera fuente antes de añadir costos y infraestructura.

## Precisiones sobre el texto solicitado

Google no ofrece un puntaje único de calidad de código ni E-E-A-T como factor aislado. La extensión .org no acredita carácter no lucrativo. Los metadatos, schema y métricas de experiencia ayudan a describir el sitio y su uso, pero no garantizan indexación ni posiciones. El contenido debe ser útil para personas; no se asume un “puntaje de information gain” medible desde el HTML.

Fuentes oficiales:
- https://developers.google.com/search/docs/fundamentals/creating-helpful-content
- https://developers.google.com/search/docs/essentials/spam-policies
- https://developers.google.com/search/docs/appearance/core-web-vitals
- https://developers.google.com/webmaster-tools/v1/searchanalytics/query
