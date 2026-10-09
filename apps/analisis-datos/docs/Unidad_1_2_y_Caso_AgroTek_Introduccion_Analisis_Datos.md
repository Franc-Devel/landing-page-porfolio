# Introducción al Análisis de Datos
## Informe completo — Unidad 1, Unidad 2, Caso AgroTek y Trabajo Práctico N.º 1

**Materia:** Introducción al Análisis de Datos  
**Fuente:** Dossier de Cátedra 2026 — UTN FRT  
**Alumno:** Francisco Delgado  

---

# Índice

1. Unidad 1 — Del dato a la decisión
   - 1.1 ¿Qué es analizar datos?
   - Modelo DIKW: dato, información, conocimiento y decisión
   - Tipos de datos
   - 1.2 Los cinco tipos de análisis de datos
   - 1.3 Análisis de datos y ciencia de datos
   - 1.4 Roles en un equipo de análisis de datos
   - 1.5 Panorama general de herramientas
   - 1.6 Caso práctico de la unidad: AgroTek
   - Síntesis y autoevaluación de la Unidad 1
2. Desarrollo orientativo del caso AgroTek
3. Unidad 2 — Recolección, calidad e inspección de datos
   - 2.1 Vocabulario básico
   - 2.2 Fuentes de datos
   - 2.3 Ciclo de vida de los datos
   - 2.4 Calidad de datos
   - 2.5 Puente con la Semana Diagnóstica
   - 2.6 Proceso ETL
   - 2.7 Inspección inicial de un conjunto de datos
   - Uso de IA como asistente
   - Actividad de clasificación de problemas de calidad
   - Síntesis y autoevaluación de la Unidad 2
4. Trabajo Práctico N.º 1 — Calidad e inspección de datos
5. Relación general entre las Unidades 1 y 2

---

# 1. UNIDAD 1 — DEL DATO A LA DECISIÓN

## Introducción general

La primera unidad presenta el mapa general de la materia. Parte de una idea central: **una organización puede generar una enorme cantidad de registros, pero esos registros no tienen valor por sí solos si no se transforman en información útil para decidir**.

El ejemplo inicial plantea una cadena de indumentaria deportiva que registra ventas, clientes, stock, reclamos y otras operaciones. Aunque todos esos registros existen en planillas o sistemas, todavía no responden por sí mismos preguntas como:

- qué producto conviene reponer;
- qué sucursal necesita más personal;
- qué promoción conviene lanzar;
- qué clientes están dejando de comprar;
- qué productos se compran juntos;
- en qué momento se producen más ventas.

Para poder responder esas preguntas, los datos deben ser examinados, organizados, interpretados y transformados en información que permita tomar decisiones.

La unidad funciona como base conceptual del resto de la materia. Presenta qué significa analizar datos, cuáles son los tipos principales de datos y de análisis, qué personas participan en un proyecto de datos y qué herramientas suelen utilizarse.

### Objetivos de aprendizaje de la Unidad 1

Al finalizar la unidad se espera que el estudiante pueda:

- explicar qué es el análisis de datos y por qué está orientado a la toma de decisiones;
- diferenciar dato, información, conocimiento y decisión;
- clasificar datos según su naturaleza y su fuente;
- distinguir análisis descriptivo, diagnóstico, predictivo, prescriptivo y exploratorio;
- identificar qué pregunta responde cada tipo de análisis;
- reconocer los roles habituales de un equipo de datos;
- reconocer las principales familias de herramientas utilizadas en análisis de datos.

---

## 1.1 ¿Qué es analizar datos?

El **análisis de datos** es el proceso de examinar, limpiar, transformar y organizar datos para descubrir información útil, obtener conclusiones y **apoyar la toma de decisiones**.

No debe entenderse como una técnica aislada ni como una simple operación matemática. Es un proceso que combina:

- herramientas;
- criterio profesional;
- conocimiento del contexto;
- interpretación de resultados;
- comunicación de conclusiones.

La clave es que el análisis tenga una finalidad. Un informe puede contener muchos gráficos y cálculos, pero si no ayuda a responder una pregunta o tomar una decisión, su valor práctico es limitado.

### Ejemplo de la unidad

Una cadena de comercio electrónico registra cada clic, compra y devolución. Con esos datos puede descubrir:

- qué productos se compran juntos;
- qué horarios tienen más ventas;
- qué clientes están por dejar de comprar o reducir sus compras.

A partir de esa información puede ajustar stock, lanzar promociones o priorizar atención a determinados clientes.

Por lo tanto, **el valor no está simplemente en almacenar clics o registros, sino en las decisiones que se pueden tomar a partir de ellos**.

---

# Modelo DIKW: dato, información, conocimiento y decisión

La unidad utiliza el modelo **DIKW**, llamado así por las palabras en inglés:

- **Data** — Dato
- **Information** — Información
- **Knowledge** — Conocimiento
- **Wisdom** — Sabiduría o criterio para decidir

Este modelo explica cómo un valor aislado puede convertirse progresivamente en una decisión concreta.

## Dato

Es un valor aislado que todavía no posee suficiente contexto para ser interpretado.

Ejemplo:

`45.000`

Por sí solo no sabemos qué representa.

## Información

Es un dato acompañado por contexto y significado.

Ejemplo:

`$45.000 es el precio de las zapatillas Running X200.`

Ahora el valor ya puede interpretarse.

## Conocimiento

Surge cuando se identifican relaciones, tendencias o patrones a partir de la información.

Ejemplo:

`Las Running X200 se venden más los fines de semana y en la sucursal Shopping.`

Ya no solamente conocemos un precio, sino también un comportamiento comercial.

## Sabiduría / decisión

Es la aplicación de criterio para actuar a partir del conocimiento obtenido.

Ejemplo:

`Reforzar el stock de Running X200 en la sucursal Shopping los jueves, antes del pico de ventas del fin de semana.`

### Idea principal del modelo DIKW

La enseñanza central es que **acumular datos no genera valor automáticamente**. El valor aparece cuando los datos se contextualizan, se interpretan, permiten descubrir patrones y finalmente ayudan a decidir.

---

## Ejemplo del sensor de temperatura

La unidad presenta el valor `18` registrado por un sensor de temperatura.

- **Dato:** `18`.
- **Información:** el Depósito A se encuentra a 18 °C.
- **Conocimiento:** si la mercadería debe conservarse a 15 °C, existe un problema de temperatura.
- **Decisión:** revisar el sistema de refrigeración y posiblemente redistribuir los productos más sensibles.

Este ejemplo muestra de manera sencilla cómo un mismo valor cambia de significado a medida que se agrega contexto y criterio.

---

# Tipos de datos

Antes de realizar un análisis es necesario comprender qué tipo de dato existe en cada variable, porque eso determina qué operaciones tienen sentido.

La unidad clasifica los datos según **su naturaleza** y según **su fuente**.

## Clasificación según la naturaleza

### 1. Datos cuantitativos

Representan cantidades numéricas.

Se dividen en:

#### Cuantitativos continuos

Pueden admitir cualquier valor dentro de un rango.

Ejemplos:

- precio;
- altura;
- temperatura;
- tiempo de entrega;
- humedad medida en porcentaje.

#### Cuantitativos discretos

Representan conteos y normalmente toman valores enteros.

Ejemplos:

- número de ventas;
- cantidad de unidades vendidas;
- cantidad de productos;
- número de clientes.

### 2. Datos cualitativos

Representan categorías o características.

Se dividen en:

#### Cualitativos nominales

Son categorías **sin un orden natural**.

Ejemplos:

- color;
- provincia;
- medio de pago;
- categoría de producto.

#### Cualitativos ordinales

Son categorías que poseen un **orden lógico**.

Ejemplos:

- nivel de satisfacción: Bajo / Medio / Alto;
- nivel de prioridad;
- clasificación por rangos.

---

## Clasificación según la fuente

### Datos primarios

Son datos generados específicamente para el análisis que se está realizando.

Ejemplos:

- una encuesta diseñada para responder una pregunta concreta;
- datos obtenidos por un sensor propio;
- información recolectada expresamente para un proyecto.

### Datos secundarios

Son datos que fueron recolectados anteriormente con otro propósito y luego se reutilizan.

Ejemplos:

- informes públicos;
- bases de datos ya existentes;
- informes de precios del mercado;
- estadísticas de organismos oficiales.

Los datos secundarios suelen ser más rápidos y económicos de obtener, pero antes de utilizarlos es necesario evaluar si realmente sirven para la pregunta que se quiere responder.

---

# 1.2 Los cinco tipos de análisis de datos

No todas las preguntas de negocio requieren el mismo tipo de análisis. La unidad distingue cinco enfoques principales.

## 1. Análisis descriptivo

### Pregunta principal

**¿Qué pasó?**

### Función

Resume y organiza datos históricos para comprender una situación.

### Ejemplo

`Vendimos $4,8 millones en agosto, un 12 % más que en julio.`

### Uso típico

- reportes;
- indicadores;
- estadísticas descriptivas;
- tableros;
- comparaciones históricas.

---

## 2. Análisis diagnóstico

### Pregunta principal

**¿Por qué pasó?**

### Función

Compara variables y busca relaciones o posibles causas.

### Ejemplo

`Las ventas subieron porque hubo una promoción en calzado.`

El análisis diagnóstico intenta ir más allá de la descripción y entender los factores asociados con el resultado observado.

---

## 3. Análisis predictivo

### Pregunta principal

**¿Qué es probable que pase?**

### Función

Utiliza información histórica para estimar comportamientos futuros.

### Ejemplo

`Se espera un pico de demanda durante la semana del Día del Niño.`

Puede incluir técnicas estadísticas o modelos predictivos. En esta materia se presenta principalmente a nivel conceptual, ya que los modelos avanzados exceden el alcance del curso.

---

## 4. Análisis prescriptivo

### Pregunta principal

**¿Qué deberíamos hacer?**

### Función

Propone o recomienda una acción concreta a partir de la información y las predicciones disponibles.

### Ejemplo

`Conviene anticipar el stock de indumentaria infantil dos semanas antes.`

El foco está en pasar de la predicción a una decisión.

---

## 5. Análisis exploratorio

### Pregunta principal

**¿Qué patrones o relaciones todavía no vimos?**

### Función

Busca relaciones interesantes sin partir necesariamente de una hipótesis previa definida.

### Ejemplo

`¿Existe alguna relación entre el medio de pago y la tasa de devolución?`

Es útil cuando todavía no se conoce con precisión qué patrones pueden existir en los datos.

---

## Error frecuente señalado en la unidad

Un error común es intentar comenzar directamente con análisis predictivo o prescriptivo sin comprender antes qué ocurrió en los datos.

Si todavía no se puede responder con confianza una pregunta descriptiva como `¿qué pasó el mes pasado?`, construir una predicción puede ser riesgoso, porque cualquier problema de calidad o interpretación se trasladará y amplificará en las etapas siguientes.

La materia busca que el estudiante domine principalmente:

- análisis descriptivo;
- análisis diagnóstico;
- análisis exploratorio.

Los enfoques predictivos y prescriptivos se introducen para comprender el panorama general, pero las técnicas avanzadas —redes neuronales, modelos complejos de series temporales, aprendizaje automático, simulaciones, etc.— están fuera del alcance de esta asignatura.

---

# 1.3 Análisis de datos y ciencia de datos: ¿son lo mismo?

Son campos relacionados, pero no idénticos.

## Análisis de datos

Se orienta principalmente a estudiar información pasada y actual para responder preguntas concretas de negocio.

### Pregunta típica

`¿Qué pasó y por qué?`

### Datos utilizados

Principalmente datos estructurados en tablas.

### Resultados habituales

- reportes;
- tableros;
- indicadores;
- conclusiones de negocio.

### Herramientas frecuentes

- Excel;
- SQL;
- Python con Pandas;
- Power BI.

## Ciencia de datos

Tiene un campo más amplio y puede incluir modelos predictivos y aprendizaje automático.

### Pregunta típica

`¿Qué va a pasar?`

### Datos utilizados

Puede trabajar tanto con datos estructurados como con datos no estructurados:

- texto;
- imágenes;
- audio;
- otros formatos.

### Resultados habituales

- modelos entrenados;
- predicciones;
- sistemas de recomendación;
- automatizaciones basadas en modelos.

### Herramientas

Además de las herramientas del análisis de datos, puede utilizar bibliotecas y frameworks de machine learning.

### Alcance de la materia

La asignatura se ubica principalmente dentro del **análisis de datos**. Se utilizarán Python y SQL como herramientas para explorar, limpiar y responder preguntas concretas, no para desarrollar modelos predictivos avanzados.

---

# 1.4 Roles en un equipo de análisis de datos

Un proyecto de análisis de datos real normalmente requiere varias funciones complementarias.

## Data Engineer

Se ocupa de diseñar y mantener la infraestructura que:

- recolecta datos;
- transporta datos;
- almacena datos;
- garantiza que los datos estén disponibles para ser utilizados.

Su trabajo está muy relacionado con pipelines, bases de datos e infraestructura.

## Data Analyst

Explora, limpia y analiza datos para responder preguntas concretas del negocio.

Es el rol más cercano al enfoque de esta materia.

Sus tareas pueden incluir:

- inspeccionar datos;
- limpiarlos;
- realizar consultas;
- analizar tendencias;
- construir indicadores;
- comunicar resultados.

## Business Analyst

Traduce necesidades del negocio en preguntas analíticas concretas.

También comunica resultados a las personas responsables de tomar decisiones.

Funciona como un puente entre la necesidad empresarial y el trabajo técnico.

## Visualization / BI Expert

Diseña reportes y tableros que comunican resultados de manera clara, especialmente para públicos no técnicos.

Puede utilizar herramientas como Power BI o Tableau.

## Data Scientist

Construye modelos predictivos y soluciones de aprendizaje automático a partir de los datos.

Pertenece principalmente al campo de la ciencia de datos.

### Caso integrador de la materia

La unidad menciona el **Club Deportivo Cerro Alto** como caso integrador del cuatrimestre. En ese caso se trabajará principalmente desde la perspectiva de Data Analyst:

- explorar;
- limpiar;
- consultar;
- analizar;
- visualizar;
- comunicar.

En proyectos grupales también puede ser útil distribuir explícitamente los distintos roles entre los integrantes.

---

# 1.5 Panorama general de herramientas

La unidad aclara que el objetivo no es dominar todas las herramientas existentes, sino comprender a qué familia pertenece cada una y para qué suele utilizarse.

## Excel / planillas de cálculo

### Familia

Exploración y cálculo.

### Uso

Permite:

- explorar datos rápidamente;
- ordenar;
- filtrar;
- calcular;
- crear gráficos;
- realizar análisis iniciales sin necesidad de programar.

## SQL

### Familia

Consulta de datos.

### Uso

Se utiliza para extraer, filtrar y agregar información almacenada en bases de datos relacionales.

## Python + Pandas

### Familia

Programación para datos.

### Uso

Permite automatizar de forma reproducible:

- limpieza;
- transformación;
- análisis;
- preparación de datos.

## R

### Familia

Programación para datos.

### Uso

Es una alternativa a Python con una fuerte tradición en estadística.

Se menciona como parte del ecosistema, pero no constituye el foco principal de la materia.

## Power BI / Tableau

### Familia

Visualización e informes.

### Uso

Permiten construir tableros interactivos y comunicar resultados dentro de una organización.

## Idea general sobre las herramientas

Distintas herramientas pueden contribuir a resolver una misma pregunta analítica. Ninguna reemplaza completamente a las demás.

Un ejemplo de flujo posible sería:

- SQL para consultar datos almacenados;
- Python/Pandas para limpiar o transformar;
- Excel para inspecciones rápidas;
- Power BI para comunicar resultados.

### Herramientas profesionales mencionadas como panorama general

También aparecen tecnologías de mayor escala o complejidad, por ejemplo:

- Apache Spark;
- Hadoop;
- AWS;
- Azure;
- Google Cloud;
- redes neuronales;
- modelos complejos de series temporales;
- modelos como GARCH o VAR;
- simulaciones Monte Carlo.

Estas herramientas se mencionan para mostrar que el campo profesional es más amplio, pero **no forman parte de los contenidos que el estudiante debe desarrollar en detalle en esta materia**.

---

# 1.6 CASO PRÁCTICO DE LA UNIDAD — AGROTEK

## Presentación de AgroTek

**AgroTek** es una empresa de tamaño mediano dedicada a la producción y comercialización de:

- insumos agrícolas;
- alimentos procesados.

La gerencia general detectó tres problemas principales:

1. **Mermas innecesarias en el stock de productos de temporada.**
2. **Reclamos de clientes clave por demoras en las entregas.**
3. **Pérdida de oportunidades de venta cruzada por falta de seguimiento comercial.**

La dirección decide iniciar un proceso de transformación digital y madurez de datos. Para ello solicita a un equipo de análisis que presente una propuesta estructurada.

El caso se utiliza para aplicar los conceptos de la Unidad 1. Es un caso cerrado de práctica conceptual. Más adelante, en la Unidad 2, se trabaja otro caso con datos concretos para inspeccionar y limpiar.

---

## AgroTek — Parte A: clasificación de datos

La actividad solicita clasificar distintos atributos de AgroTek según:

1. **fuente:** primaria o secundaria;
2. **naturaleza:** cuantitativo continuo, cuantitativo discreto, cualitativo nominal o cualitativo ordinal.

Los atributos presentados son:

1. **ID de cliente:** código alfanumérico único registrado en el CRM de AgroTek.
2. **Encuesta de satisfacción postventa:** Bajo / Medio / Alto.
3. **Humedad del suelo en depósito:** porcentaje medido mediante sensores IoT propios, por ejemplo 45,8 %.
4. **Cantidad de sacos entregados:** conteo de bolsas por lote, por ejemplo 150 sacos.
5. **Informe de precios de mercado:** reporte publicado por un organismo público.

---

## AgroTek — Parte B: la pirámide DIKW en acción

Se debe utilizar el valor `18`, registrado por un sensor de temperatura de uno de los depósitos de AgroTek, y mostrar cómo evoluciona a través de:

**Dato → Información → Conocimiento → Sabiduría/decisión.**

El ejercicio busca demostrar que un valor aislado no alcanza para decidir hasta que se le agrega contexto, interpretación y criterio.

---

## AgroTek — Parte C: propuesta de objetivos de análisis

Para cada uno de los cinco tipos de análisis se debe plantear **una pregunta de negocio concreta** relacionada con alguno de los problemas de AgroTek:

- mermas de stock;
- reclamos por demoras;
- oportunidades perdidas de venta cruzada.

Los cinco enfoques deben cubrir:

- **Descriptivo:** ¿qué ocurrió?
- **Diagnóstico:** ¿por qué ocurrió?
- **Predictivo:** ¿qué es probable que ocurra?
- **Prescriptivo:** ¿qué acciones deberían tomarse?
- **Exploratorio:** ¿qué patrones no anticipados podrían existir?

---

## AgroTek — Parte D: equipo y herramientas

La actividad pide seleccionar:

- **tres herramientas** del panorama presentado en la unidad;
- **tres roles** del equipo multidisciplinario.

Ejemplos de herramientas:

- SQL;
- Python;
- Power BI;
- Excel.

Ejemplos de roles:

- Data Engineer;
- Data Analyst;
- Business Analyst;
- Visualization / BI Expert.

Luego se debe justificar brevemente qué función tendría cada herramienta y cada rol dentro del proyecto AgroTek.

---

## AgroTek — Parte E: ciclo completo

Se pide plantear, en **no más de cinco pasos**, una secuencia para abordar el problema de las mermas en productos de temporada.

La secuencia debe comenzar con la formulación del problema y terminar con la interpretación y comunicación de resultados.

No es necesario resolver el problema; solamente planificar el proceso.

---

# 2. DESARROLLO ORIENTATIVO DEL CASO AGROTEK

> Esta sección desarrolla posibles respuestas utilizando únicamente la información y los conceptos presentados en las Unidades 1 y 2. Sirve como guía de estudio; las respuestas pueden redactarse de otras maneras si mantienen el mismo criterio.

## Parte A — Clasificación orientativa

| Atributo | Fuente | Naturaleza | Justificación |
|---|---|---|---|
| ID de cliente del CRM propio | Primaria | Cualitativo nominal | Aunque pueda contener números y letras, funciona como identificador y no representa una cantidad sobre la cual tenga sentido calcular promedios o sumas. |
| Satisfacción Bajo / Medio / Alto | Primaria | Cualitativo ordinal | Son categorías con un orden natural. |
| Humedad medida por sensor IoT propio | Primaria | Cuantitativo continuo | Es generado por AgroTek y puede tomar valores decimales dentro de un rango. |
| Cantidad de sacos entregados | Primaria | Cuantitativo discreto | Es un conteo de unidades enteras. |
| Informe público de precios de mercado | Secundaria | Depende de las variables del informe; los precios, en particular, son cuantitativos continuos | Fue generado por un organismo externo con un propósito previo y luego reutilizado por AgroTek. |

### Aclaración importante sobre el ID de cliente

Un identificador puede contener números, pero eso no significa que sea cuantitativo. Por ejemplo, calcular el promedio de los números de cliente no tendría sentido. Por eso se interpreta como una categoría nominal o identificador.

---

## Parte B — DIKW con el valor 18

- **Dato:** `18`.
- **Información:** el sensor del Depósito A registra una temperatura de 18 °C.
- **Conocimiento:** si un determinado producto debe conservarse, por ejemplo, a una temperatura menor, el depósito se encuentra fuera del rango recomendado y podría aumentar el riesgo de deterioro o merma.
- **Decisión:** revisar el sistema de refrigeración, verificar los productos sensibles y tomar medidas para evitar pérdidas de stock.

La clave es que la decisión no surge directamente del número 18, sino de compararlo con el contexto operativo y los límites esperados.

---

## Parte C — Preguntas posibles para los cinco tipos de análisis

### Descriptivo

**¿Cuántas unidades de productos de temporada se perdieron por merma durante los últimos seis meses y en qué depósitos ocurrió con mayor frecuencia?**

Busca saber qué ocurrió.

### Diagnóstico

**¿Qué factores están asociados con las mayores mermas: temperatura del depósito, tiempo de almacenamiento, producto o sucursal?**

Busca comprender por qué ocurrió.

### Predictivo

**¿Qué productos de temporada presentan mayor probabilidad de generar merma durante el próximo mes?**

Busca anticipar una situación futura.

### Prescriptivo

**¿Qué cantidades conviene reponer y qué ajustes de almacenamiento deberían realizarse para reducir las mermas?**

Busca recomendar una acción.

### Exploratorio

**¿Existen patrones no previstos entre las mermas, los proveedores, los depósitos, la época del año y los tiempos de entrega?**

Busca relaciones todavía no conocidas.

---

## Parte D — Equipo y herramientas posibles

### Herramientas

#### SQL

Serviría para consultar datos almacenados en sistemas de ventas, stock, entregas, clientes y reclamos.

#### Python + Pandas

Permitiría limpiar, combinar y analizar los datos de manera reproducible, especialmente cuando existan múltiples archivos o fuentes.

#### Power BI

Permitiría crear tableros para comunicar a la gerencia indicadores como:

- nivel de merma;
- demoras;
- cumplimiento de entregas;
- oportunidades de venta cruzada;
- evolución por producto o período.

### Roles

#### Business Analyst

Traduciría los problemas de AgroTek en preguntas analíticas concretas y mantendría el vínculo con la gerencia.

#### Data Analyst

Realizaría la inspección, limpieza, análisis y elaboración de conclusiones a partir de los datos disponibles.

#### Data Engineer

Se ocuparía de asegurar que los datos provenientes de los distintos sistemas puedan recolectarse, integrarse y quedar disponibles para el análisis.

También podría intervenir un Visualization / BI Expert para preparar tableros destinados a la dirección.

---

## Parte E — Propuesta de ciclo de trabajo en cinco pasos

1. **Definir el problema y la pregunta de negocio.** Precisar qué se considera merma, en qué productos y período se analizará y qué decisión se quiere mejorar.
2. **Recolectar e integrar los datos necesarios.** Obtener información de stock, movimientos, ventas, temperaturas, fechas, productos y depósitos.
3. **Inspeccionar, limpiar y preparar los datos.** Detectar faltantes, inconsistencias, duplicados y valores sospechosos antes de analizar.
4. **Analizar los datos.** Medir la merma, comparar productos y depósitos e identificar patrones o factores relacionados.
5. **Interpretar y comunicar los resultados.** Presentar conclusiones e indicadores a la gerencia para apoyar decisiones sobre stock, almacenamiento y reposición.

---

# Síntesis de la Unidad 1

Los conceptos centrales son:

- El análisis de datos transforma datos en información, información en conocimiento y conocimiento en decisiones.
- Todo dato posee una naturaleza y una fuente que determinan cómo debe tratarse.
- Existen cinco grandes tipos de análisis: descriptivo, diagnóstico, predictivo, prescriptivo y exploratorio.
- Análisis de datos y ciencia de datos están relacionados, pero no son exactamente lo mismo.
- Los proyectos de datos suelen involucrar roles complementarios.
- No existe una única herramienta: Excel, SQL, Python/Pandas y Power BI cumplen funciones diferentes dentro del proceso.

---

# Autoevaluación de la Unidad 1

El material propone responder las siguientes preguntas:

1. Explicar con un ejemplo propio el paso de dato a información, conocimiento y decisión.
2. Explicar por qué la cantidad de unidades vendidas es un dato cuantitativo discreto y no continuo.
3. Para el objetivo de reducir la merma de productos de temporada en AgroTek, proponer una pregunta descriptiva y otra diagnóstica que sean diferentes entre sí.
4. Explicar qué diferencia principal existe entre análisis de datos y ciencia de datos.
5. Explicar por qué se mencionan técnicas avanzadas, como modelos predictivos complejos, sin desarrollarlas en profundidad.

---

# 3. UNIDAD 2 — RECOLECCIÓN, CALIDAD E INSPECCIÓN DE DATOS

## Introducción general

La Unidad 2 parte de una idea fundamental: **antes de analizar hay que saber de dónde provienen los datos, cómo están organizados y qué nivel de calidad poseen**.

La unidad desarrolla:

- organización de un dataset;
- fuentes de datos;
- formatos estructurados y no estructurados;
- ciclo de vida de los datos;
- dimensiones de calidad;
- diferencia entre valor atípico y error;
- proceso ETL;
- inspección inicial de un conjunto de datos.

El principio central es que **ninguna técnica de análisis, por sofisticada que sea, compensa datos de mala calidad**.

### Objetivos de aprendizaje de la Unidad 2

Al finalizar la unidad se espera que el estudiante pueda:

- utilizar correctamente los conceptos de dataset, observación, registro, variable y atributo;
- distinguir fuentes internas y externas;
- distinguir datos estructurados, semiestructurados y no estructurados;
- describir el ciclo de vida de los datos;
- identificar dimensiones básicas de calidad;
- aplicar criterios de calidad sobre un dataset;
- comprender conceptualmente el proceso ETL: Extraer, Transformar y Cargar.

---

# 2.1 Vocabulario básico: dataset, variable y registro

## Dataset

Un **dataset** o conjunto de datos es una colección organizada de datos, habitualmente representada como una tabla.

## Registro / observación

Cada fila de una tabla representa normalmente un caso concreto.

Ejemplos:

- una venta;
- un cliente;
- un socio;
- un turno.

## Variable / atributo

Cada columna representa una característica que se registra o mide para cada observación.

Ejemplos:

- precio;
- fecha;
- provincia;
- actividad;
- monto de cuota.

## Valor

Es el dato específico que aparece en la intersección entre una fila y una columna.

### Ejemplo con una planilla de socios

- **Dataset:** todo el registro de socios y cuotas de agosto.
- **Registro:** socio N.º 134, dado de alta el 03/03/2024.
- **Variables:** nombre, actividad, categoría, monto de cuota.
- **Valores:** por ejemplo `Pádel`, `$18.500`, `Activo`.

Comprender esta estructura es fundamental para poder describir cualquier dataset antes de analizarlo.

---

# 2.2 Fuentes de datos

Los datos utilizados por una organización no siempre provienen del mismo lugar.

## Fuentes internas

Son generadas dentro de la propia organización.

Ejemplos:

- ventas;
- stock;
- reclamos;
- socios;
- cuotas;
- reservas.

## Fuentes externas

Son generadas fuera de la organización.

Ejemplos:

- informes de mercado;
- datos abiertos;
- organismos públicos;
- redes sociales.

---

# Clasificación según el nivel de organización del dato

## Datos estructurados

Están organizados en tablas con filas y columnas bien definidas.

Ejemplos:

- planilla de socios;
- tabla de reservas;
- base de datos relacional.

Son el principal tipo de dato utilizado en la materia porque trabajan naturalmente con herramientas como Excel, SQL y Pandas.

## Datos semiestructurados

Poseen cierto nivel de organización, pero no encajan directamente en una tabla rígida.

Ejemplos:

- archivo JSON de un sistema de reservas;
- correo electrónico con metadatos.

## Datos no estructurados

No tienen una organización tabular predefinida.

Ejemplos:

- fotografías;
- audios;
- texto libre;
- grabaciones de reclamos telefónicos.

Una organización moderna puede generar gran cantidad de datos de este tipo, aunque la asignatura se concentra principalmente en datos estructurados.

---

# 2.3 Ciclo de vida de los datos

Los datos no aparecen y se analizan instantáneamente. Atraviesan diferentes etapas dentro de una organización.

El ciclo presentado es:

1. **Generación y captura.**
2. **Recolección y almacenamiento.**
3. **Preparación y limpieza.**
4. **Análisis.**
5. **Uso en decisiones.**
6. **Archivo o descarte.**

## Generación y captura

El dato se produce por algún evento.

Ejemplo: se registra una venta.

## Recolección y almacenamiento

El dato queda guardado en algún sistema, archivo, planilla o base de datos.

## Preparación y limpieza

Se corrigen problemas y se transforma el dato para dejarlo listo para analizar.

## Análisis

Se examina la información para responder preguntas.

## Uso en decisiones

Los resultados se utilizan para actuar o decidir.

## Archivo o descarte

Cuando los datos dejan de ser útiles o vigentes pueden archivarse o eliminarse de acuerdo con las reglas de la organización.

### Importancia del ciclo de vida

Pensar los datos como parte de un ciclo ayuda a comprender que su calidad puede degradarse con el tiempo.

Ejemplos:

- una dirección de correo electrónico que el cliente dejó de utilizar;
- un precio antiguo que ya no representa la situación actual;
- un estado de cliente que no fue actualizado.

---

# 2.4 Calidad de datos: dimensiones básicas

En lugar de decir simplemente que un dataset es “bueno” o “malo”, la unidad propone evaluar su calidad mediante dimensiones concretas.

Las cinco dimensiones básicas son:

1. completitud;
2. consistencia;
3. validez;
4. unicidad;
5. actualidad.

---

## 1. Completitud

### Pregunta

**¿Faltan valores que deberían existir?**

### Ejemplo

Un campo de email de un socio aparece vacío o marcado como `sin dato`.

El problema es que falta información esperada.

---

## 2. Consistencia

### Pregunta

**¿El mismo dato se registra siempre de la misma forma?**

### Ejemplo

La misma actividad aparece escrita como:

- `Pádel`;
- `padel`;
- `PADEL`.

El significado puede ser el mismo, pero el formato no es consistente.

---

## 3. Validez

### Pregunta

**¿Los valores respetan el formato y el rango esperado?**

### Ejemplo

Un monto de cuota de `-18.500`.

Si la regla de negocio indica que una cuota no puede ser negativa, el dato no es válido.

---

## 4. Unicidad

### Pregunta

**¿Existen registros duplicados que representan el mismo caso?**

### Ejemplo

El mismo socio aparece cargado dos veces con datos casi idénticos.

---

## 5. Actualidad

### Pregunta

**¿La información continúa vigente en el tiempo?**

### Ejemplo

Un socio dado de baja hace meses sigue figurando como activo.

---

# Valor atípico vs. dato erróneo

La unidad hace una distinción fundamental.

## Valor atípico u outlier

Es un dato real, pero inusual respecto del resto.

Ejemplo:

Un pedido corporativo excepcionalmente grande puede ser mucho mayor que los pedidos habituales, pero seguir siendo correcto.

## Dato erróneo

Es un valor que no representa la realidad, normalmente debido a un error de captura, carga o procesamiento.

Ejemplo:

Registrar una cuota de `$185.000` cuando el valor real era `$18.500` por haber agregado un cero de más.

## Diferencia de tratamiento

- Un valor atípico real puede conservarse y analizarse con cuidado.
- Un error debe corregirse o excluirse según corresponda.

Por eso no se debe eliminar automáticamente todo dato extremo. Primero hay que verificarlo.

---

# Principio GIGO — Garbage In, Garbage Out

**Garbage In, Garbage Out (GIGO)** resume uno de los principios centrales de la unidad:

> Si los datos que ingresan a un análisis son de mala calidad, un procesamiento sofisticado no garantiza resultados confiables.

Por lo tanto, la calidad de datos no es un paso opcional ni puramente formal. Es una condición necesaria para que el análisis tenga sentido.

---

# 2.5 Puente con la Semana Diagnóstica: de la intuición al criterio

La unidad conecta los conceptos formales con un ejercicio diagnóstico anterior realizado sobre un registro de ventas de una tienda de indumentaria y artículos deportivos.

Durante esa experiencia podían haberse detectado intuitivamente problemas como:

- datos mal escritos;
- valores negativos;
- faltantes;
- duplicados;
- valores sospechosos.

La Unidad 2 les asigna un nombre y un criterio sistemático.

## Correspondencias presentadas

### Inconsistencias de escritura

Ejemplo en tienda:

`Tucumán`, `Tucuman`, `TUC` para representar una misma provincia.

Dimensión afectada: **consistencia**.

Ejemplo equivalente en Cerro Alto:

`Pádel`, `padel`, `PADEL` para la misma actividad.

### Valor negativo

Ejemplo en tienda:

Precio unitario de `-$45.000`.

Dimensión afectada: **validez**.

Ejemplo en Cerro Alto:

Monto de cuota de `-$18.500`.

### Valor demasiado alto

Ejemplo en tienda:

Un precio de `$450.000` cuando productos similares cuestan `$45.000`.

Puede ser:

- problema de validez;
- posible outlier a confirmar.

Ejemplo en Cerro Alto:

Cuota de `$185.000` cuando las demás de la categoría cuestan `$18.500`.

### Valor faltante

Ejemplo:

Cantidad o email indicado como `sin dato`.

Dimensión afectada: **completitud**.

### Registros duplicados

Ejemplo en tienda:

Dos ventas con mismo cliente, fecha y producto muy similares.

Dimensión afectada: **unicidad**.

Ejemplo en Cerro Alto:

Dos altas de socio con mismo DNI, nombre y fecha muy similares.

### Enseñanza principal

Estos problemas aparecen repetidamente en organizaciones y datasets diferentes. Por eso es importante aprender a identificarlos mediante categorías y criterios, en lugar de corregirlos de manera improvisada.

---

# 2.6 El proceso ETL: Extraer, Transformar y Cargar

Cuando los datos provienen de varias fuentes, es habitual organizar su preparación mediante el proceso **ETL**.

ETL significa:

- **Extract — Extraer**
- **Transform — Transformar**
- **Load — Cargar**

## Extraer

Consiste en obtener datos desde una o varias fuentes originales.

Ejemplos:

- una base de datos;
- un archivo;
- una API;
- una planilla.

## Transformar

Consiste en preparar los datos antes del análisis.

Puede incluir:

- limpiar;
- unificar formatos;
- corregir inconsistencias;
- transformar valores;
- preparar columnas.

## Cargar

Consiste en colocar los datos ya transformados en el destino donde serán analizados.

Ejemplos:

- una tabla;
- un archivo limpio;
- una base de datos preparada para consultas.

### Aclaración de alcance

La unidad presenta ETL a nivel conceptual. No debe confundirse con toda la disciplina de ingeniería de datos, que puede involucrar:

- diseño de pipelines;
- automatización;
- orquestación;
- infraestructura en la nube.

La finalidad aquí es comprender la lógica de las tres etapas porque la preparación y limpieza de datos se retomará posteriormente.

---

# 2.7 Inspección inicial de un conjunto de datos

Antes de limpiar o analizar un dataset conviene realizar una primera inspección **sin modificar todavía los datos**.

Las preguntas iniciales recomendadas son:

- ¿cuántas filas posee el dataset?;
- ¿cuántas columnas?;
- ¿qué tipo de dato tiene cada columna?;
- ¿existen valores faltantes evidentes?;
- ¿los valores parecen respetar el formato esperado?;
- ¿hay registros duplicados?;
- ¿hay valores extraños o extremos que deban verificarse?

Esta inspección sirve para conocer el estado general del dataset antes de decidir qué tratamiento aplicar.

---

## Ejemplo conceptual en Python/Pandas

El dossier muestra de forma conceptual algunas operaciones que posteriormente se utilizarán con Pandas:

```python
import pandas as pd

socios = pd.read_csv('socios_cerro_alto.csv')

socios.shape       # cantidad de filas y columnas
socios.info()      # tipos de datos y valores no nulos
socios.head()      # primeras filas para una primera mirada
socios.isna().sum()  # cantidad de valores faltantes por columna
```

En esta unidad no es necesario dominar todavía la sintaxis; el objetivo es comprender qué preguntas responde cada inspección.

---

# IA como asistente en el análisis de calidad

La unidad incorpora el uso de inteligencia artificial como herramienta de apoyo.

Una IA puede ser útil para:

- revisar una muestra de un dataset;
- sugerir posibles problemas de calidad;
- proponer hipótesis de errores;
- ayudar a organizar una primera lista de verificaciones.

Sin embargo, **la IA no reemplaza la verificación humana**.

Puede ocurrir que una IA:

- confunda un valor atípico real con un error;
- ignore una inconsistencia importante;
- proponga un tratamiento que no respete las reglas del negocio.

Por eso, toda propuesta de IA debe:

1. analizarse;
2. verificarse contra los datos reales;
3. corregirse o justificarse;
4. recién entonces aceptarse.

---

# Actividad — Clasificar problemas de calidad

La unidad presenta un pequeño extracto del registro de socios de Cerro Alto.

| N.º | Socio | Actividad | Monto de cuota | Email |
|---:|---|---|---:|---|
| 1 | Marcos Ibáñez | Pádel | 18500 | marcos@mail.com |
| 2 | Marcos Ibáñez | Pádel | 18500 | marcos@mail.com |
| 3 | Rocío Farías | padel | sin dato | sin dato |
| 4 | Enzo Molina | Natación | 18500 | enzo@mail.com |
| 5 | Valentina Ruiz | Fútbol 5 | -18500 | vale@mail.com |

La actividad solicita:

1. identificar, fila por fila, qué dimensión de calidad está afectada;
2. reconocer qué problemas pueden resolverse mediante una unificación de formato y cuáles requieren volver a consultar la fuente;
3. decidir si el valor `-18500` de la fila 5 es un dato erróneo o un valor atípico, justificando la decisión.

### Lectura orientativa

- Filas 1 y 2: posible problema de **unicidad**, porque parecen duplicadas.
- Fila 3: `padel` frente a `Pádel` indica **consistencia**; los campos `sin dato` indican **completitud**.
- Fila 5: `-18500` plantea un problema de **validez**, salvo que exista una regla de negocio que justifique montos negativos; requiere verificación.

---

# Síntesis de la Unidad 2

Los conceptos principales son:

- un dataset está organizado en registros y variables;
- los datos pueden provenir de fuentes internas o externas;
- pueden ser estructurados, semiestructurados o no estructurados;
- atraviesan un ciclo de vida desde su generación hasta su archivo o descarte;
- la calidad puede evaluarse mediante completitud, consistencia, validez, unicidad y actualidad;
- un valor atípico real no es igual que un error;
- ETL organiza conceptualmente la preparación en Extraer, Transformar y Cargar;
- antes de analizar conviene realizar una inspección inicial;
- la IA puede ayudar, pero sus propuestas deben verificarse contra los datos reales.

---

# Autoevaluación de la Unidad 2

El material propone:

1. En un dataset de reclamos de clientes, identificar un ejemplo de registro y un ejemplo de variable.
2. Clasificar según la dimensión de calidad afectada:
   - un teléfono vacío;
   - una fecha de venta posterior al día de hoy;
   - el mismo cliente registrado como `Juan Pérez` y `J. Pérez`.
3. Explicar por qué un valor atípico no debe eliminarse automáticamente.
4. Identificar en el caso del Club Deportivo Cerro Alto una situación correspondiente a la etapa **Transformar** del proceso ETL.

---

# 4. TRABAJO PRÁCTICO N.º 1 — CALIDAD E INSPECCIÓN DE DATOS

> Además del caso AgroTek, el material incluido en el ZIP contiene el Trabajo Práctico N.º 1 de la materia. Se incorpora aquí porque forma parte del mismo bloque de estudio y aplica directamente los conceptos de las Unidades 1 y 2.

## Título

**Trabajo Práctico N.º 1 — Calidad e inspección de datos**

## Lugar dentro de la secuencia de trabajos prácticos

Es el primero de una serie de cuatro trabajos prácticos.

La secuencia propuesta es acumulativa:

- **TP N.º 1:** identificar problemas de calidad.
- **TP N.º 2:** resolver o limpiar esos problemas.
- **TP N.º 3:** analizar y visualizar los datos ya limpios.
- **TP N.º 4:** integrar todo el recorrido en un caso nuevo y más amplio.

La lógica intenta reproducir un proyecto profesional real, donde cada etapa depende de la calidad del trabajo realizado en la anterior.

---

## Propósito del TP N.º 1

Practicar:

- inspección inicial de un conjunto de datos;
- identificación sistemática de problemas de calidad;
- aplicación del vocabulario aprendido;
- clasificación mediante las dimensiones de calidad de la Unidad 2;
- análisis previo a cualquier corrección.

---

## Objetivo

Al finalizar el trabajo, el estudiante debe poder:

- examinar un dataset desconocido;
- describir su estructura;
- identificar registros, variables y tipos de datos;
- detectar problemas de calidad;
- clasificar cada problema según la dimensión afectada;
- documentar los hallazgos en un informe.

---

# Situación del TP — Club Deportivo Cerro Alto

El caso corresponde al **Club Deportivo Cerro Alto**, utilizado también como caso integrador de otras materias.

El club llevaba el registro de socios y cuotas de manera manual y comenzó a organizarlo de forma más sistemática.

En esta materia el caso se observa desde el punto de vista del análisis de datos, no desde la gestión del proyecto ni desde la construcción del sistema.

La cátedra entregará a través de Classroom un archivo con registros de socios y cuotas correspondientes al último semestre.

La planilla tendrá una estructura similar a la utilizada durante la Semana Diagnóstica, pero será más grande y contendrá nuevos problemas de calidad.

---

# Conocimientos necesarios para resolver el TP

Se requiere comprender:

- dataset;
- registro;
- variable;
- completitud;
- consistencia;
- validez;
- unicidad;
- actualidad;
- diferencia entre valor atípico y dato erróneo;
- tipos de datos de la Unidad 1:
  - cuantitativo continuo;
  - cuantitativo discreto;
  - cualitativo nominal;
  - cualitativo ordinal.

---

# Consignas del TP N.º 1

## Consigna 1 — Inspección inicial

Realizar una inspección inicial del dataset e informar:

- cantidad de registros;
- cantidad de variables;
- tipo de dato de cada variable;
- primera lectura general.

No es necesario programar. Puede realizarse con una planilla de cálculo.

---

## Consigna 2 — Relevamiento de problemas de calidad

Construir una tabla que documente cada problema detectado.

Para cada problema se debe indicar:

- fila o filas afectadas;
- dimensión de calidad correspondiente:
  - completitud;
  - consistencia;
  - validez;
  - unicidad;
  - actualidad;
- breve justificación.

---

## Consigna 3 — Error o posible valor atípico

Para cada problema detectado se debe indicar si corresponde a:

- un dato erróneo;
- un posible valor atípico que todavía debe confirmarse.

La decisión debe estar justificada con un criterio concreto.

No basta con decir que un número “parece raro”.

---

## Consigna 4 — Propuesta de tratamiento

Para cada problema se debe redactar una propuesta sobre qué se haría con el dato **antes de analizarlo**.

Ejemplos de tratamientos posibles, según el problema:

- corregir formato;
- verificar con la fuente;
- completar un dato faltante si existe una fuente confiable;
- revisar un posible duplicado;
- mantener un outlier real;
- corregir o excluir un dato erróneo.

En este TP la propuesta solamente se redacta. La limpieza efectiva se realizará en el TP N.º 2.

---

## Consigna 5 — Uso obligatorio de IA

Se debe utilizar un asistente de IA para proponer una **lista preliminar** de posibles problemas de calidad sobre una muestra del dataset.

Luego el equipo debe documentar:

- qué propuso la IA;
- qué sugerencias se confirmaron al revisar los datos reales;
- qué sugerencias se descartaron;
- por qué se descartaron;
- qué correcciones se realizaron sobre la propuesta inicial.

El objetivo no es copiar la respuesta de la IA, sino demostrar un uso crítico y verificable.

---

# Producto esperado

El TP debe entregar:

## 1. Informe breve

Extensión máxima: **4 páginas**.

Debe incluir:

- descripción de la inspección inicial;
- tabla de relevamiento de problemas de calidad;
- sección de verificación de la propuesta de IA.

## 2. Archivo de datos original

Debe entregarse sin modificar.

La limpieza se realizará recién en el TP N.º 2.

---

# Formato

Puede realizarse en:

- procesador de texto;
- planilla de cálculo;
- combinación de herramientas según resulte conveniente.

El trabajo puede realizarse:

- individualmente;
- en grupos de hasta tres integrantes, de acuerdo con lo indicado por la cátedra al asignarlo.

---

# Criterios públicos de calidad del TP

## Cobertura

Se evalúa que se hayan revisado todas las columnas y una porción representativa de las filas del dataset.

## Clasificación correcta

Cada problema debe asociarse a la dimensión de calidad que realmente corresponde.

## Criterio outlier vs. error

La decisión debe estar respaldada por un argumento razonable y evidencia concreta, no solo por una afirmación.

## Uso crítico de IA

El informe debe mostrar claramente:

- qué sugirió la IA;
- qué se verificó;
- qué se corrigió;
- qué se descartó.

## Claridad de la propuesta de tratamiento

Cada propuesta debe ser concreta y aplicable. No debe limitarse a ideas vagas como “corregir el dato”.

---

# Uso de Inteligencia Artificial en el TP

El uso de IA es **obligatorio para la consigna 5**.

Para el resto del trabajo es opcional, siempre que se documente siguiendo la metodología propuesta en la materia:

**problema → propuesta de IA → análisis → verificación → corrección**

No se considera aceptable transcribir directamente una respuesta de IA sin contrastarla con los datos reales.

---

# Qué debe poder explicar el estudiante

Al defender o explicar el trabajo, el estudiante debe poder justificar:

- por qué clasificó cada problema en una determinada dimensión de calidad y no en otra;
- qué evidencia concreta utilizó para decidir si un valor era un error o un outlier real;
- cuál fue la diferencia entre la propuesta de la IA y la verificación posterior realizada por el equipo.

---

# Relación con el TP siguiente

El TP N.º 2 comienza directamente a partir del relevamiento realizado en el TP N.º 1.

Las propuestas de tratamiento definidas ahora serán ejecutadas posteriormente utilizando herramientas como:

- Excel;
- Python/Pandas.

Por eso, un relevamiento incompleto o mal justificado en el TP N.º 1 dificultará la limpieza de datos en el TP N.º 2.

---

# 5. RELACIÓN GENERAL ENTRE LAS UNIDADES 1 Y 2

Las dos unidades forman una secuencia lógica.

## Unidad 1: entender para qué analizamos

Primero se aprende:

- qué es un dato;
- cómo se convierte en información y conocimiento;
- qué preguntas puede responder el análisis;
- qué tipos de análisis existen;
- quiénes participan;
- qué herramientas pueden utilizarse.

La pregunta central es:

**¿Cómo pasamos de un conjunto de datos a una decisión?**

## Unidad 2: comprobar si los datos sirven para analizar

Luego se aprende:

- cómo se organiza un dataset;
- de dónde provienen los datos;
- qué formatos pueden tener;
- cómo evolucionan durante su ciclo de vida;
- cómo detectar problemas de calidad;
- cómo preparar e inspeccionar los datos antes de analizarlos.

La pregunta central es:

**¿Podemos confiar en los datos que vamos a utilizar?**

---

# Secuencia conceptual completa

El recorrido de ambas unidades puede resumirse así:

1. **Definir una pregunta o problema de negocio.**
2. **Identificar qué datos podrían responderla.**
3. **Comprender el tipo y la fuente de esos datos.**
4. **Recolectar los datos.**
5. **Inspeccionar el dataset.**
6. **Evaluar su calidad.**
7. **Detectar faltantes, inconsistencias, duplicados y valores sospechosos.**
8. **Preparar y transformar los datos.**
9. **Analizar.**
10. **Interpretar los resultados.**
11. **Comunicar el conocimiento obtenido.**
12. **Tomar una decisión.**

---

# Conceptos que conviene dominar para estudiar estas unidades

## Unidad 1

- definición de análisis de datos;
- modelo DIKW;
- dato vs. información vs. conocimiento vs. decisión;
- cuantitativo continuo;
- cuantitativo discreto;
- cualitativo nominal;
- cualitativo ordinal;
- fuente primaria;
- fuente secundaria;
- descriptivo;
- diagnóstico;
- predictivo;
- prescriptivo;
- exploratorio;
- diferencia entre análisis de datos y ciencia de datos;
- roles del equipo;
- función de Excel, SQL, Python/Pandas y Power BI.

## Unidad 2

- dataset;
- registro u observación;
- variable o atributo;
- valor;
- fuente interna y externa;
- dato estructurado;
- dato semiestructurado;
- dato no estructurado;
- ciclo de vida del dato;
- completitud;
- consistencia;
- validez;
- unicidad;
- actualidad;
- outlier;
- dato erróneo;
- GIGO;
- ETL;
- inspección inicial;
- uso crítico de IA.

---

# Ideas clave para un examen o defensa oral

1. **Tener muchos datos no significa tener información útil.** El valor aparece cuando el dato se interpreta y permite tomar una decisión.
2. **El tipo de dato importa**, porque determina qué operaciones y análisis tienen sentido.
3. **Cada tipo de análisis responde una pregunta diferente.**
4. **No conviene predecir antes de comprender y verificar los datos históricos.**
5. **Un dataset no se analiza a ciegas:** primero se inspecciona.
6. **La calidad debe clasificarse con criterios concretos**, no simplemente como “buena” o “mala”.
7. **Un valor extremo no necesariamente es un error.** Puede ser un outlier real.
8. **GIGO:** datos malos producen resultados poco confiables aunque la técnica de análisis sea avanzada.
9. **ETL organiza la preparación de datos** en extraer, transformar y cargar.
10. **La IA funciona como asistente, no como autoridad final.** Toda propuesta debe verificarse contra los datos y el contexto real.

---

# Conclusión

Las Unidades 1 y 2 construyen la base completa del proceso de análisis de datos. La primera explica cómo los datos pueden convertirse en decisiones y presenta los tipos de análisis, los roles y las herramientas principales. La segunda se concentra en la materia prima del análisis: los datasets, su origen, estructura y calidad.

El caso **AgroTek** permite aplicar los conceptos de la Unidad 1 a una empresa con problemas concretos de stock, entregas y venta cruzada. El **Trabajo Práctico N.º 1 de Cerro Alto** lleva esos conceptos a una situación más operativa: inspeccionar un dataset real, identificar problemas de calidad, clasificarlos correctamente y plantear cómo deberían tratarse antes de realizar análisis posteriores.

La idea que une todo el material es que **un análisis útil no comienza con un gráfico ni con un algoritmo: comienza con una pregunta clara y con datos que hayan sido comprendidos, inspeccionados y validados**.
