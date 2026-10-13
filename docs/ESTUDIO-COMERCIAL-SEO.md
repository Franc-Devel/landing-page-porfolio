# FAUVOR: oferta comercial y base de posicionamiento

## Alcance y método

Mercado aprobado: empresas de habla hispana. Estudio cualitativo por lectura de los seis repositorios, sus documentos de funciones y límites, la presentación institucional y documentación oficial de Google. Se contrastan categorías de oferta con Odoo y Zapier. No se realizaron entrevistas de compradores, auditorías de producción ni mediciones de volumen de búsqueda: las prioridades comerciales son hipótesis para validar con consultas y pilotos, no estimaciones de demanda acreditada.

## Hallazgo principal

La oferta debe partir de un problema reconocible, no de seis aplicaciones presentadas como productos terminados idénticos a sus demos. Priorizar gestión operativa, visibilidad comercial y continuidad de tareas. Vender diagnóstico, adaptación y entrega acordada; distinguir implementación, conexión de proveedores y mantenimiento. Conservar Gaming y Clima como evidencia de desarrollo e integración, sin presentarlos como plataformas comerciales completas.

## Matriz de oportunidades

| Base | Comprador y dolor | Oferta inicial | Evidencia disponible | Validación antes de producción | Prioridad |
|---|---|---|---|---|---|
| Taller | Dueño/administración de taller o lubricentro; stock, caja y turnos separados | Piloto de gestión: catálogo, ventas, caja, agenda y usuarios | React/Node/SQLite y módulos del repositorio; demo estática | Licencia y atribución de coautores del proyecto académico; permisos, backup, migración, concurrencia y aceptación del negocio | Alta, condicionada a derechos y puesta a punto |
| Analytics | Responsable comercial; planillas y falta de indicadores comunes | Tablero con fuentes e indicadores definidos | Streamlit, exploración de CSV/Excel, indicadores y reportes; dataset sintético | Calidad y autorización de datos, definición de indicadores, actualización, acceso y entrega de informes | Alta |
| Flow | Operaciones/ventas; consultas sin seguimiento, tareas repetitivas | Un flujo completo con entrada, tarea, aviso e historial | Motor de tres flujos, SQLite local, reintentos probados; demo navegador | Contrato de API, proveedor de IA/mensajería, credenciales, monitoreo e idempotencia del canal externo | Alta |
| Finanzas | Persona o equipo; pagos, gastos y comprobantes dispersos | Organización financiera adaptada | Demo sintética y documentación de módulos privados | Disponibilidad del código privado, autorización, autenticación, archivos, proveedor de IA y backup | Media; no contabilidad fiscal ni asesoramiento |
| Gaming | Negocio con catálogo; falta de experiencia navegable | Catálogo web, filtros y fichas a medida | React/Vite, catálogo educativo y estados locales | Derechos sobre contenidos y marcas; permisos en servidor para producción; pagos no incluidos | Media como servicio web, baja como venta del demo de juegos |
| Clima | Empresa que consulta fuentes externas | Interfaz e integración de APIs | Geocodificación y clima de Open-Meteo; cliente y manejo de errores | Términos del proveedor para uso comercial, disponibilidad, caché y límites; radar no real | Media como capacidad de integración, baja como producto meteorológico autónomo |

## Diferenciación y competencia

Odoo agrupa inventario, CRM y otras funciones empresariales; Zapier ofrece automatización de flujos y seguimiento de leads. Esto acredita categorías existentes de solución, no demanda específica de FAUVOR ni superioridad respecto de esos proveedores. FAUVOR debe diferenciarse por comprensión del proceso, adaptación, contacto directo y piloto acotado con el equipo del cliente.

No competir como ERP universal ni prometer reemplazar toda la infraestructura en 24 horas. El diferencial aprobado es una primera versión funcional de alcance acordado, con accesos e información disponibles. Los tres días siguientes se utilizan para ajustes del piloto, sin convertirlos en garantía de producción de cualquier integración.

## Formas de contratación propuestas

1. **Piloto de alcance cerrado:** problema prioritario, responsable del cliente, criterios de aceptación, usuarios y datos de prueba definidos. Entrega: circuito funcional y lista de observaciones.
2. **Implementación:** adaptación del proceso validado, usuarios, datos, conexiones autorizadas y capacitación. Entrega: puesta en marcha aceptada y documentación.
3. **Evolución y mantenimiento:** incidencias, cambios y seguimiento acordados. Proveedores externos, alojamiento y consumos se identifican por separado.

No se fijaron precios, suscripciones ni SLA no aprobados. El presupuesto debe explicitar alcance, exclusiones, responsabilidades, hitos y forma de aceptación.

## Descubrimiento comercial

Preguntas de calificación: ¿qué tarea se repite?, ¿quién la realiza?, ¿qué herramientas usa?, ¿qué datos y permisos existen?, ¿cuántos usuarios participan?, ¿cómo se mide el tiempo actual?, ¿quién aprueba el piloto?, ¿qué resultado mínimo permite avanzar?

Para cada piloto medir tiempo inicial/final, errores, tareas pendientes, volumen procesado y aceptación del usuario con método y período documentados. Las cifras existentes de 40% y 15 pilotos son reportadas por el propietario; no se añadió evidencia externa ni se incorporaron a marcado de valoraciones.

## Intenciones de búsqueda y contenido

| Intención | Contenido de la landing | Consultas candidatas, sin volumen validado |
|---|---|---|
| Implementar gestión | Gestión para talleres y comercios | software para talleres, control de stock y turnos |
| Entender desempeño | Tableros comerciales y análisis | tableros comerciales, análisis de datos para empresas |
| Reducir trabajo manual | Flujos e integraciones | automatización de procesos, integración de herramientas |
| Ordenar finanzas | Organización de pagos y gastos | gestión de pagos, registro de gastos y comprobantes |
| Crear presencia digital | Sitios y catálogos | desarrollo web para empresas, catálogo digital a medida |
| Conectar información | Aplicaciones con APIs | integración de APIs, desarrollo de aplicaciones a medida |

Marketing estratégico 360° se presenta como servicio complementario de Agustina y no como una funcionalidad implementada en los demos.

## Cambios implementados

- Title y descripción relacionados con software a medida, IA y gestión empresarial; H1 explícito.
- Canonical absoluto hacia https://fauvor.org/ para consolidar las copias del sitio.
- Open Graph y Twitter Card con URL e imagen absoluta de la marca.
- Organization, WebSite, WebPage y catálogo de servicios en JSON-LD, alineados con contenido visible. Sin reseñas, precios, certificaciones o domicilio inventados.
- robots.txt permite rastreo y declara sitemap.xml; sitemap incluye únicamente la URL comercial canónica real. Los anclajes no se incluyen como páginas independientes.
- Demos con noindex, follow para evitar indexación de pantallas y datos ficticios; robots no bloquea su lectura, para que el rastreador pueda ver noindex.
- Seis ofertas comerciales con audiencia, alcance, entrega, CTA específico y enlace de demo.
- Preguntas frecuentes visibles sobre alcance, plazo, datos, costos e IA. No se promete resultado enriquecido para FAQ.
- Contenido y enlaces de proyectos presentes en HTML; JavaScript añade interacción.
- Scripts diferidos manteniendo su orden, dimensiones de imágenes, lazy loading bajo el primer bloque y preferencia de movimiento reducido.
- Menú con aria-controls, estados aria-expanded y cierre al seleccionar; diálogos con pestañas y navegación por teclado.

## Verificación y límites

Comprobaciones locales: JSON-LD parseable, una URL canónica, título/descripción únicos, ausencia de noindex en la landing, un H1, IDs sin duplicados, anclas válidas, enlaces a demos existentes, recursos locales, sitemap XML y robots, copia de salida sincronizada y sintaxis JavaScript.

No hay herramienta de navegador o Search Console conectada en esta sesión. No se midieron LCP, INP, CLS, Lighthouse ni rankings; no se afirma 100/100. Tampoco se ejecutó Rich Results Test. Los cambios reducen dependencias de renderizado y preparan rastreo; su desempeño debe medirse en el sitio publicado.

## Activación y evaluación

1. Verificar propiedad de dominio en Google Search Console. Se requiere el TXT que emita la cuenta; no se puede inventar.
2. Enviar https://fauvor.org/sitemap.xml y solicitar inspección de https://fauvor.org/.
3. Confirmar respuesta HTTP, acceso sin login y ausencia de X-Robots-Tag restrictivo mediante URL Inspection. El sitio está configurado como público.
4. Medir PageSpeed Insights y Core Web Vitals; Google recomienda LCP <=2.5 s, INP <200 ms y CLS <0.1. Son objetivos, no resultados medidos aquí.
5. Revisar consultas, impresiones, clics, páginas indexadas y contactos recibidos. No contar abrir WhatsApp como mensaje efectivamente enviado.
6. Crear páginas específicas por servicio cuando existan casos y contenido original suficiente. Cada página futura necesita URL real, contenido propio, canonical y sitemap.
7. Publicar casos con consentimiento y métricas trazables, sin comprar enlaces ni repetir palabras artificialmente.

Google no utiliza un único puntaje de código ni garantiza primeras posiciones por agregar metadatos. Sus guías priorizan contenido útil, accesibilidad al rastreo y experiencia. Los cambios pueden tardar en reflejarse y necesitan evaluación posterior.

## Fuentes

- https://developers.google.com/search/docs/fundamentals/seo-starter-guide
- https://developers.google.com/search/docs/crawling-indexing/consolidate-duplicate-urls
- https://developers.google.com/search/docs/crawling-indexing/sitemaps/build-sitemap
- https://developers.google.com/search/docs/appearance/structured-data/organization
- https://developers.google.com/search/docs/appearance/core-web-vitals
- https://www.odoo.com/app/inventory
- https://www.odoo.com/
- https://help.zapier.com/hc/en-us/articles/22234847450893-Zap-workflows-quick-start-guide
- https://zapier.com/automation/lead-management-automation
- Repositorios locales, docs/FEATURES.md de Finanzas, docs/FAUVOR.md de Flow y presentación institucional suministrada.
