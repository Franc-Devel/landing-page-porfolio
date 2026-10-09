/**
 * BASE DE DATOS DE ESTUDIO - INTRODUCCIÓN AL ANÁLISIS DE DATOS
 * =========================================================================
 * Dossier de Cátedra 2026 — UTN FRT
 * Fuente: docs/Unidad_1_2_y_Caso_AgroTek_Introduccion_Analisis_Datos.md
 * Total de preguntas: 56
 */

const ANALYSIS_DATA = {
  "materia": "Introducción al Análisis de Datos",
  "temas": [
    "Modelo DIKW y Fundamentos del Análisis de Datos",
    "Clasificación y Tipos de Datos (Variables y Fuentes)",
    "Los 5 Tipos de Análisis, Roles y Herramientas",
    "Caso Práctico AgroTek y Formulación de Preguntas",
    "Dataset, Formatos y Ciclo de Vida del Dato",
    "Calidad de Datos: Las 5 Dimensiones y Outliers vs Errores",
    "Proceso ETL, Inspección Inicial y Asistencia con IA",
    "Caso Club Deportivo Cerro Alto y Trabajo Práctico N.º 1"
  ],
  "resumenes": [
    [
      "Modelo DIKW y Fundamentos del Análisis de Datos",
      "Tener muchos registros acumulados no aporta valor por sí solo si no se transforman en decisiones útiles.",
      "El modelo DIKW describe la pirámide: Dato (crudo/sin contexto) → Información (contexto y significado) → Conocimiento (patrones e interpretación) → Decisión / Sabiduría (acción aplicada).",
      "Ejemplo del sensor: 28 (dato) → 28 °C a las 14:00 hs en cámara (información) → la temperatura sube por sobrecarga térmica (conocimiento) → ajustar refrigeración y horarios de motores (decisión)."
    ],
    [
      "Clasificación y Tipos de Datos (Variables y Fuentes)",
      "Cuantitativos continuos: admiten infinitos valores fraccionarios en un intervalo (ej. tiempo, peso, temperatura).",
      "Cuantitativos discretos: surgen de conteos y sólo toman enteros (ej. unidades vendidas, cantidad de hijos, reclamos).",
      "Cualitativos nominales (etiquetas sin orden: género, código postal, DNI) vs Ordinales (categorías con jerarquía: nivel de satisfacción, rango).",
      "Fuentes primarias (recolectadas de primera mano para el objetivo) vs secundarias (recolectadas previamente por terceros o con otro fin, ej. INDEC)."
    ],
    [
      "Los 5 Tipos de Análisis, Roles y Herramientas",
      "Descriptivo (¿Qué pasó?) y Diagnóstico (¿Por qué pasó?) analizan el pasado.",
      "Predictivo (¿Qué podría pasar?) y Prescriptivo (¿Qué deberíamos hacer?) orientan el futuro.",
      "Cognitivo: sistemas de IA que procesan lenguaje natural, aprenden y simulan razonamiento.",
      "Roles: Analista de datos (insights y negocio), Científico de datos (modelos estadísticos complejos), Ingeniero de datos (pipelines e infraestructura) y Analista de negocio (puente con la estrategia).",
      "Herramientas: Excel (análisis rápido y tablas), SQL (consultas a bases relacionales), Python/Pandas (procesamiento avanzado y automatización) y Power BI (dashboards ejecutivos)."
    ],
    [
      "Caso Práctico AgroTek y Formulación de Preguntas",
      "AgroTek enfrenta problemas de merma de productos de temporada, logística de entregas y oportunidad de venta cruzada.",
      "Pregunta descriptiva: ¿Cuál fue el porcentaje de merma por producto el año pasado?",
      "Pregunta diagnóstica: ¿Por qué se venció el stock: por demoras de logística o sobreestimación de compras?",
      "No se debe predecir ni modelar sin antes comprender la historia y verificar la calidad de los datos existentes."
    ],
    [
      "Dataset, Formatos y Ciclo de Vida del Dato",
      "Dataset: colección estructurada; fila = registro u observación; columna = variable o atributo.",
      "Formatos: estructurados (tablas con esquema rígido), semiestructurados (JSON, XML con etiquetas) y no estructurados (audio, video, texto libre).",
      "Ciclo de vida: Generación → Recolección → Procesamiento → Almacenamiento → Análisis → Uso → Archivo o Destrucción."
    ],
    [
      "Calidad de Datos: Las 5 Dimensiones y Outliers vs Errores",
      "Principio GIGO (Garbage In, Garbage Out): datos defectuosos invalidan cualquier conclusión técnica.",
      "5 dimensiones: Completitud (sin nulos críticos), Consistencia (coherencia entre campos/sistemas), Validez (cumple formato/rango), Unicidad (sin duplicados) y Actualidad (vigencia temporal).",
      "Outlier real vs dato erróneo: un valor atípico real es legítimo y no se borra a ciegas; un dato erróneo es una falla de carga o captura y debe tratarse."
    ],
    [
      "Proceso ETL, Inspección Inicial y Asistencia con IA",
      "ETL: Extraer (fuentes diversas), Transformar (limpieza, tipos, normalización) y Cargar (al data warehouse o tabla analítica).",
      "Inspección inicial: conteo de filas, columnas, tipos de datos, nulos y valores extremos antes de tocar el dataset.",
      "Uso crítico de IA: útil como asistente para explorar o generar código, pero nunca como verdad incuestionable sin contrastar contra los datos reales."
    ],
    [
      "Caso Club Deportivo Cerro Alto y Trabajo Práctico N.º 1",
      "Caso de socios y cuotas migrando de registros manuales a digitales.",
      "TP1 acumulativo: inspección inicial, tabla de problemas clasificados por dimensión de calidad, criterio error vs outlier y propuesta de tratamiento previo al análisis.",
      "Adopta el enfoque analítico del dato y no de programación o desarrollo del sistema."
    ]
  ],
  "preguntas": [
    {
      "id": 1,
      "t": 0,
      "q": "¿Cuál es el postulado central respecto a los datos en una organización según el dossier de la materia?",
      "o": [
        "Tener muchos registros acumulados no genera valor por sí solo si no se transforman en información útil para decidir",
        "Cuanto mayor sea el volumen de datos en una base, más rentable es automáticamente la empresa",
        "Los datos solo tienen valor si se procesan con algoritmos de redes neuronales profundas",
        "Cualquier planilla de cálculo con registros ya constituye conocimiento acabado"
      ],
      "c": 0,
      "e": "El dossier remarca que una organización puede acumular millones de registros, pero no tienen valor si no se examinan, interpretan y transforman en información que permita tomar decisiones."
    },
    {
      "id": 2,
      "t": 0,
      "q": "En el modelo DIKW, ¿qué es conceptualmente un \"Dato\"?",
      "o": [
        "Un número, símbolo o registro crudo sin procesar y desprovisto de contexto",
        "Un informe consolidado con recomendaciones estratégicas",
        "Un patrón histórico comprobado mediante métodos estadísticos",
        "Una decisión tomada a partir de intuición gerencial"
      ],
      "c": 0,
      "e": "El dato es la base de la pirámide: un elemento aislado, símbolo o valor numérico que por sí solo no transmite un significado completo ni contextualizado."
    },
    {
      "id": 3,
      "t": 0,
      "q": "En el ejemplo del sensor de temperatura, ¿cuál de los siguientes enunciados representa \"Información\"?",
      "o": [
        "El sensor de la cámara 3 registró 28 °C a las 14:00 hs",
        "El número 28 aislado en un display",
        "Comprender que la temperatura sube siempre los días de calor por sobrecarga de motores",
        "Reprogramar el encendido del motor de refrigeración para las 11:00 hs"
      ],
      "c": 0,
      "e": "El dato 28 se transforma en información cuando se le añade unidad (°C), ubicación (cámara 3) y momento temporal (14:00 hs), adquiriendo contexto y significado."
    },
    {
      "id": 4,
      "t": 0,
      "q": "Siguiendo el modelo DIKW, ¿cómo se manifiesta el nivel de \"Conocimiento\" en el caso del sensor de temperatura?",
      "o": [
        "Al identificar el patrón de que la temperatura sube sistemáticamente a la siesta por la temperatura exterior y la sobrecarga",
        "Al observar únicamente que el termómetro marca 28 °C",
        "Al almacenar los valores en una base de datos relacional",
        "Al comprar un sensor nuevo sin analizar los registros"
      ],
      "c": 0,
      "e": "El conocimiento aparece cuando la información se conecta con la experiencia y el análisis, descubriendo relaciones de causa-efecto, patrones y tendencias."
    },
    {
      "id": 5,
      "t": 0,
      "q": "En la cúspide del modelo DIKW (Sabiduría / Decisión), ¿qué acción concreta corresponde aplicar?",
      "o": [
        "Definir e implementar un protocolo de encendido anticipado de refrigeración para evitar pérdidas de mercadería",
        "Exportar el archivo de temperaturas a formato CSV sin revisarlo",
        "Mirar el tablero de control cada cinco minutos sin intervenir",
        "Borrar los registros antiguos para liberar memoria en el disco"
      ],
      "c": 0,
      "e": "La sabiduría o decisión es la aplicación práctica del conocimiento para resolver un problema de la organización y generar un impacto positivo concreto."
    },
    {
      "id": 6,
      "t": 0,
      "q": "¿Por qué las planillas de ventas de una tienda no responden por sí solas qué producto conviene reponer?",
      "o": [
        "Porque los registros aislados requieren ser filtrados, agrupados y cruzados con stock y rotación para construir información",
        "Porque las planillas electrónicas no permiten almacenar números",
        "Porque la reposición solo puede decidirse por sorteo",
        "Porque los datos de ventas nunca tienen relación con las compras"
      ],
      "c": 0,
      "e": "Tener filas con ventas no dice automáticamente cuándo reponer; se requiere calcular la velocidad de venta, contrastar contra el stock disponible y los tiempos del proveedor."
    },
    {
      "id": 7,
      "t": 0,
      "q": "¿Qué relación jerárquica establece el modelo DIKW entre sus cuatro etapas?",
      "o": [
        "Cada nivel se construye sobre el anterior: los datos dan base a la información, esta al conocimiento y este a la decisión",
        "Son cuatro etapas independientes que pueden ocurrir en cualquier orden sin relacionarse",
        "La decisión genera datos, pero los datos nunca pueden generar decisiones",
        "El conocimiento precede al dato y la información es el resultado final"
      ],
      "c": 0,
      "e": "El modelo DIKW es una pirámide de agregación de valor: Dato → Información (contextualizada) → Conocimiento (estructurado y comprendido) → Decisión / Sabiduría (aplicada)."
    },
    {
      "id": 8,
      "t": 1,
      "q": "¿Por qué el \"tiempo de entrega de un pedido\" (en minutos y segundos) se clasifica como una variable cuantitativa continua?",
      "o": [
        "Porque puede tomar cualquier valor numérico real dentro de un intervalo medible",
        "Porque solo puede asumir números enteros sin decimales",
        "Porque clasifica a los pedidos en categorías con nombres propios",
        "Porque el tiempo es una variable que no puede ser medida"
      ],
      "c": 0,
      "e": "Las variables cuantitativas continuas resultan de mediciones y admiten infinitos valores intermedios (como 12.45 minutos), a diferencia de las discretas que provienen de conteos."
    },
    {
      "id": 9,
      "t": 1,
      "q": "¿Cuál de las siguientes variables es un ejemplo típico de variable cuantitativa DISCRETA?",
      "o": [
        "La cantidad de reclamos ingresados en una sucursal durante el mes",
        "El peso en kilogramos de una bolsa de fertilizante",
        "La temperatura ambiente de un depósito",
        "La velocidad de descarga de la conexión a internet"
      ],
      "c": 0,
      "e": "La cantidad de reclamos proviene de un conteo de unidades enteras (0, 1, 2, 3 reclamos; no tiene sentido físico registrar 2.37 reclamos)."
    },
    {
      "id": 10,
      "t": 1,
      "q": "¿Por qué el Código Postal o el número de DNI deben tratarse como variables cualitativas nominales y NO cuantitativas?",
      "o": [
        "Porque operan como etiquetas de identificación y carece de sentido estadístico calcular su promedio o sumarlos",
        "Porque las computadoras no pueden almacenar números largos",
        "Porque son números que cambian todos los días automáticamente",
        "Porque siempre contienen caracteres alfabéticos obligatorios"
      ],
      "c": 0,
      "e": "Aunque estén formados por dígitos, son códigos de identificación. Calcular el 'DNI promedio' o 'sumar códigos postales' es una operación matemática sin sentido en el negocio."
    },
    {
      "id": 11,
      "t": 1,
      "q": "La variable \"Nivel de satisfacción del socio\" con categorías: (Muy insatisfecho, Regular, Satisfecho, Muy satisfecho), es:",
      "o": [
        "Cualitativa ordinal",
        "Cualitativa nominal",
        "Cuantitativa continua",
        "Cuantitativa discreta"
      ],
      "c": 0,
      "e": "Es cualitativa ordinal porque sus valores son categorías textuales que guardan una jerarquía u orden lógico natural bien definido."
    },
    {
      "id": 12,
      "t": 1,
      "q": "¿Qué diferencia sustancial distingue a los datos primarios de los datos secundarios?",
      "o": [
        "Los primarios son recolectados de primera mano para la investigación actual; los secundarios ya existían o fueron recogidos por terceros",
        "Los primarios siempre son numéricos y los secundarios siempre son texto",
        "Los primarios nunca tienen errores y los secundarios siempre son falsos",
        "Los secundarios son gratuitos y los primarios siempre se pagan con tarjeta"
      ],
      "c": 0,
      "e": "Datos primarios son los que la propia organización captura directamente para su objetivo específico. Datos secundarios provienen de fuentes preexistentes (informes de cámaras empresarias, INDEC, etc.)."
    },
    {
      "id": 13,
      "t": 1,
      "q": "Si un analista de AgroTek consulta el informe de precipitaciones históricas del Servicio Meteorológico Nacional, ¿qué tipo de fuente está utilizando?",
      "o": [
        "Secundaria y externa",
        "Primaria e interna",
        "Primaria y no estructurada",
        "Cualitativa ordinal"
      ],
      "c": 0,
      "e": "Es externa (proviene de una entidad fuera de AgroTek) y secundaria (fue recolectada por el SMN para sus propios fines meteorológicos y no exclusivamente para AgroTek)."
    },
    {
      "id": 14,
      "t": 1,
      "q": "¿Por qué es crucial identificar correctamente el tipo de dato de cada variable al iniciar un análisis?",
      "o": [
        "Porque determina qué operaciones matemáticas, medidas estadísticas y tipos de gráficos son metodológicamente válidos",
        "Porque los sistemas operativos solo admiten un tipo de dato por archivo",
        "Porque los datos cualitativos deben eliminarse inmediatamente de la base",
        "Porque las variables cuantitativas no se pueden graficar"
      ],
      "c": 0,
      "e": "El tipo de variable condiciona el análisis: no se puede calcular la media de una variable nominal, ni trazar un histograma con categorías sin orden."
    },
    {
      "id": 15,
      "t": 2,
      "q": "¿Qué pregunta fundamental intenta responder el análisis descriptivo?",
      "o": [
        "¿Qué pasó?",
        "¿Por qué pasó?",
        "¿Qué va a pasar en el futuro?",
        "¿Qué deberíamos hacer para optimizar el resultado?"
      ],
      "c": 0,
      "e": "El análisis descriptivo sintetiza y resume los datos históricos para retratar qué ocurrió en un período determinado (ventas totales, promedios, clientes atendidos)."
    },
    {
      "id": 16,
      "t": 2,
      "q": "Un informe que investiga \"cuál fue la causa de la caída en las ventas de fertilizantes durante el último mes\" corresponde a un análisis:",
      "o": [
        "Diagnóstico",
        "Descriptivo",
        "Predictivo",
        "Prescriptivo"
      ],
      "c": 0,
      "e": "El análisis diagnóstico indaga las causas subyacentes y correlaciones para responder '¿por qué ocurrió?' un determinado fenómeno observado."
    },
    {
      "id": 17,
      "t": 2,
      "q": "Un modelo que estima la probabilidad de que un cliente abandone el servicio el próximo mes a partir de su historial se clasifica como:",
      "o": [
        "Predictivo",
        "Descriptivo",
        "Diagnóstico",
        "Normativo"
      ],
      "c": 0,
      "e": "El análisis predictivo utiliza modelos estadísticos y datos pasados para estimar la probabilidad de eventos futuros ('¿qué podría pasar?')."
    },
    {
      "id": 18,
      "t": 2,
      "q": "¿Cuál es la función específica del análisis prescriptivo?",
      "o": [
        "Recomendar acciones concretas y optimizaciones para responder '¿qué deberíamos hacer?'",
        "Contar cuántas transacciones se procesaron ayer",
        "Describir la distribución de frecuencias de los clientes",
        "Reparar los servidores caídos de la empresa"
      ],
      "c": 0,
      "e": "El análisis prescriptivo va un paso más allá de predecir: evalúa distintos escenarios y sugiere la decisión o ruta óptima a seguir."
    },
    {
      "id": 19,
      "t": 2,
      "q": "¿Qué rasgo distintivo define al análisis cognitivo frente a los otros cuatro tipos?",
      "o": [
        "Aplica inteligencia artificial y aprendizaje autónomo para interpretar lenguaje, contexto y adaptarse con la experiencia",
        "Es el único que utiliza hojas de cálculo de Excel",
        "Se limita a calcular la media y la desviación estándar",
        "Solo puede ser ejecutado por analistas de negocios sin computadoras"
      ],
      "c": 0,
      "e": "El análisis cognitivo integra algoritmos avanzados de IA (como procesamiento de lenguaje natural y deep learning) capaces de razonar y aprender continuamente de forma similar a los humanos."
    },
    {
      "id": 20,
      "t": 2,
      "q": "Según el dossier, ¿qué diferencia principal existe entre el Análisis de Datos y la Ciencia de Datos?",
      "o": [
        "El análisis de datos se enfoca en responder preguntas de negocio concretas con datos disponibles; la ciencia de datos construye modelos matemáticos y algorítmicos complejos",
        "El análisis de datos solo usa lápiz y papel, mientras que la ciencia de datos usa computadoras",
        "La ciencia de datos se ocupa exclusivamente del hardware y el análisis de la contabilidad",
        "No existe ninguna diferencia; son términos idénticos para el mismo puesto de trabajo"
      ],
      "c": 0,
      "e": "El análisis de datos busca generar insights operativos y estratégicos directos; la ciencia de datos abarca la creación de modelos matemáticos avanzados, algoritmos predictivos e investigación de patrones complejos."
    },
    {
      "id": 21,
      "t": 2,
      "q": "¿Qué responsabilidad principal tiene el Ingeniero de Datos (Data Engineer) en el equipo?",
      "o": [
        "Diseñar, construir y mantener la infraestructura, bases de datos y pipelines de extracción y transporte de datos",
        "Definir los precios de venta al público en el local comercial",
        "Diseñar el logotipo y los folletos publicitarios de la marca",
        "Redactar los contratos legales de los empleados"
      ],
      "c": 0,
      "e": "El Data Engineer se encarga de que los datos fluyan de forma limpia, segura y confiable desde los sistemas transaccionales hacia los depósitos de análisis."
    },
    {
      "id": 22,
      "t": 2,
      "q": "¿Cuál es el rol primordial de SQL dentro del conjunto de herramientas del analista?",
      "o": [
        "Consultar, filtrar, unir y agregar datos alojados en bases de datos relacionales",
        "Crear presentaciones de diapositivas animadas para directorios",
        "Componer canciones y generar gráficos en 3D",
        "Administrar las redes sociales de la organización"
      ],
      "c": 0,
      "e": "SQL (Structured Query Language) es el estándar indispensable para interactuar con bases de datos relacionales y extraer la información estructurada que se necesita analizar."
    },
    {
      "id": 23,
      "t": 2,
      "q": "¿Para qué fase del proyecto resulta especialmente idónea una herramienta como Power BI o Tableau?",
      "o": [
        "Para la construcción de dashboards interactivos y la comunicación visual de métricas a los tomadores de decisiones",
        "Para reemplazar por completo el sistema operativo de la empresa",
        "Para escribir el firmware de los sensores de campo",
        "Para formatear discos rígidos dañados"
      ],
      "c": 0,
      "e": "Power BI y Tableau son herramientas de Business Intelligence especializadas en visualización de datos, tableros de control e informes ejecutivos interactivos."
    },
    {
      "id": 24,
      "t": 3,
      "q": "En el caso práctico de AgroTek, ¿cuál es el problema de negocio prioritario respecto a los insumos de temporada?",
      "o": [
        "El alto nivel de merma y sobrante de productos perecederos al finalizar el ciclo de cosecha",
        "La falta de clientes interesados en comprar granos en el mercado internacional",
        "El cobro exclusivo en monedas virtuales sin respaldo",
        "La inexistencia de camiones para realizar fletes en todo el país"
      ],
      "c": 0,
      "e": "AgroTek sufre mermas importantes: semillas y productos fitosanitarios que se vencen o quedan inmovilizados en depósito al terminar la ventana temporal de siembra."
    },
    {
      "id": 25,
      "t": 3,
      "q": "Para el problema de merma en AgroTek, ¿cuál de las siguientes es una formulación metodológicamente correcta de pregunta DESCRIPTIVA?",
      "o": [
        "¿Qué volumen y costo total de semillas quedaron sin vender al cierre de la última campaña agrícola?",
        "¿Por qué los productores de la zona norte redujeron sus compras un 20%?",
        "¿Qué ocurrirá con el stock de agroquímicos si el año próximo llueve el doble?",
        "¿Qué política de descuentos agresivos deberíamos fijar en noviembre?"
      ],
      "c": 0,
      "e": "La pregunta descriptiva se enfoca en medir y cuantificar lo que ocurrió en el pasado: volumen y costo total de mercadería remanente."
    },
    {
      "id": 26,
      "t": 3,
      "q": "Para el mismo caso de AgroTek, ¿cuál de las siguientes preguntas se clasifica como DIAGNÓSTICA?",
      "o": [
        "¿A qué factores se debió el sobrante de stock: fallas de previsión comercial, retrasos de entrega o cancelaciones de pedidos?",
        "¿Cuántas bolsas de maíz se vendieron el mes pasado?",
        "¿Cuánto dinero hay en la cuenta bancaria hoy?",
        "¿Cuál es el nombre del transportista con el camión más nuevo?"
      ],
      "c": 0,
      "e": "Es diagnóstica porque busca explicar las causas raíz ('¿a qué factores se debió?') del problema observado en la merma."
    },
    {
      "id": 27,
      "t": 3,
      "q": "¿Qué oportunidad comercial busca capitalizar AgroTek mediante el análisis de venta cruzada (cross-selling)?",
      "o": [
        "Identificar qué productos suelen adquirirse juntos para recomendar fertilizantes o inoculantes cuando un cliente compra semillas",
        "Obligar al cliente a comprar únicamente el producto más caro del catálogo",
        "Vender maquinaria usada de otras empresas competidoras",
        "Cerrar las sucursales físicas y dedicarse al comercio de indumentaria"
      ],
      "c": 0,
      "e": "La venta cruzada analiza patrones de compra conjunta en las transacciones para ofrecer insumos complementarios que aumenten el ticket y satisfagan mejor la necesidad agronómica."
    },
    {
      "id": 28,
      "t": 3,
      "q": "Si AgroTek desea determinar la ruta óptima de camiones para reducir el consumo de combustible y cumplir horarios de entrega, ¿qué tipo de análisis debe aplicar?",
      "o": [
        "Análisis prescriptivo",
        "Análisis cualitativo nominal",
        "Análisis descriptivo simple",
        "Análisis de ciclo de vida biológico"
      ],
      "c": 0,
      "e": "La optimización de rutas de logística y asignación de recursos con restricciones operativas es un caso emblemático de análisis prescriptivo."
    },
    {
      "id": 29,
      "t": 3,
      "q": "¿Por qué el dossier advierte que en AgroTek no se debe saltar de inmediato a modelos predictivos sin antes hacer análisis descriptivo y diagnóstico?",
      "o": [
        "Porque no se puede proyectar el futuro con precisión sin entender las causas históricas y asegurar la calidad de los datos basales",
        "Porque los modelos predictivos están legalmente prohibidos en el agro",
        "Porque el análisis descriptivo es más caro que la inteligencia artificial",
        "Porque predecir solo funciona cuando no existen datos previos"
      ],
      "c": 0,
      "e": "La cátedra recalca que saltarse las etapas descriptiva y diagnóstica suele llevar a modelos predictivos sesgados construidos sobre datos sucios o supuestos falsos."
    },
    {
      "id": 30,
      "t": 4,
      "q": "En la estructura tabular estándar de un dataset, ¿qué representa conceptualmente cada FILA?",
      "o": [
        "Un registro u observación individual que describe una entidad o suceso concreto",
        "Una característica o atributo medido en todas las observaciones",
        "El nombre de la base de datos completa",
        "El tipo de dato de la computadora"
      ],
      "c": 0,
      "e": "Cada fila es una observación, registro o tupla: representa un socio particular, una venta concreta o un sensor específico en un instante dado."
    },
    {
      "id": 31,
      "t": 4,
      "q": "En esa misma estructura tabular, ¿qué representa conceptualmente cada COLUMNA?",
      "o": [
        "Una variable o atributo que describe una propiedad común medida a lo largo de las observaciones",
        "Un cliente único que realizó compras en diferentes meses",
        "El total sumado de todas las filas del archivo",
        "La fecha de creación del disco duro"
      ],
      "c": 0,
      "e": "Las columnas son las variables o campos (ej. edad, importe, fecha, ciudad) que caracterizan y estructuran la información de cada registro."
    },
    {
      "id": 32,
      "t": 4,
      "q": "Un archivo de texto en formato JSON o XML que contiene etiquetas organizadas jerárquicamente se clasifica como dato:",
      "o": [
        "Semiestructurado",
        "Completamente estructurado rígido",
        "No estructurado",
        "Dato primario analógico"
      ],
      "c": 0,
      "e": "JSON y XML son datos semiestructurados: poseen marcadores y etiquetas que delimitan campos jerárquicos, pero no tienen el esquema rígido y uniforme de una tabla relacional."
    },
    {
      "id": 33,
      "t": 4,
      "q": "¿Cuál de los siguientes es un ejemplo indiscutible de datos NO estructurados?",
      "o": [
        "Archivos de grabaciones de audio de llamados telefónicos de soporte técnico",
        "Una tabla de base de datos SQL con claves primarias y foráneas",
        "Una planilla de cálculo de Excel con columnas de socios y cuotas",
        "Un archivo CSV separado por comas con números de factura"
      ],
      "c": 0,
      "e": "Audios, videos, imágenes y texto libre no poseen una estructura de filas y columnas predefinida; son datos no estructurados."
    },
    {
      "id": 34,
      "t": 4,
      "q": "¿Cuál es la secuencia lógica completa del Ciclo de Vida de los Datos descrita en el dossier?",
      "o": [
        "Generación → Recolección → Procesamiento → Almacenamiento → Análisis → Uso/Decisión → Archivo o Destrucción",
        "Análisis → Recolección → Generación → Destrucción → Almacenamiento",
        "Uso → Generación → Almacenamiento → Procesamiento → Recolección",
        "Destrucción → Análisis → Recolección → Publicación en redes sociales"
      ],
      "c": 0,
      "e": "El dato nace con su generación y recolección, se limpia y almacena, se analiza para tomar decisiones y finalmente se archiva o destruye por políticas de gobernanza."
    },
    {
      "id": 35,
      "t": 4,
      "q": "¿Por qué la etapa de \"Uso / Decisión\" no concluye el ciclo de vida de los datos en una organización?",
      "o": [
        "Porque las regulaciones de privacidad y seguridad exigen políticas de archivado histórico o destrucción segura",
        "Porque los datos deben volver a imprimirse obligatoriamente en papel",
        "Porque los datos utilizados deben enviarse al fabricante de la computadora",
        "Porque las bases de datos explotan si no se borran al día siguiente"
      ],
      "c": 0,
      "e": "El ciclo culmina con la disposición final: cumplimiento de leyes de protección de datos (GDPR, LPDP), almacenamiento pasivo de auditoría o eliminación definitiva."
    },
    {
      "id": 36,
      "t": 5,
      "q": "¿Qué postula el principio fundamental de calidad de datos conocido como GIGO (Garbage In, Garbage Out)?",
      "o": [
        "Si los datos de entrada son erróneos o defectuosos, los resultados del análisis serán inválidos sin importar qué tan avanzado sea el modelo",
        "Los datos que no sirven deben arrojarse físicamente a la basura de la oficina",
        "Cuanto más compleja sea la fórmula matemática, más se corrigen solos los datos malos",
        "Cualquier algoritmo moderno de IA puede ignorar los errores y acertar siempre"
      ],
      "c": 0,
      "e": "'Basura entra, basura sale': la calidad del resultado analítico está estrictamente condicionada por la calidad y veracidad de los datos recolectados."
    },
    {
      "id": 37,
      "t": 5,
      "q": "En un dataset de socios, si el campo \"Teléfono de contacto\" presenta un 40% de celdas vacías (nulas), ¿qué dimensión de calidad está afectada?",
      "o": [
        "Completitud",
        "Unicidad",
        "Validez",
        "Actualidad"
      ],
      "c": 0,
      "e": "La completitud evalúa si el conjunto de datos cuenta con todos los valores esperados o si existen omisiones y valores nulos indispensables."
    },
    {
      "id": 38,
      "t": 5,
      "q": "Si en una planilla de ventas figura un registro con fecha \"25/12/2035\" (posterior al día de hoy), ¿qué dimensión de calidad se vulnera?",
      "o": [
        "Validez y consistencia cronológica",
        "Completitud",
        "Unicidad",
        "Legibilidad tipográfica"
      ],
      "c": 0,
      "e": "Viola la regla de validez (una venta no puede haberse realizado en el futuro) y la consistencia respecto a la fecha actual del sistema."
    },
    {
      "id": 39,
      "t": 5,
      "q": "Si en un registro un cliente figura como \"Juan Pérez\" con DNI 25.111.222 y en otra fila figura como \"J. Pérez\" con el mismo DNI, ¿qué dimensiones se ven comprometidas?",
      "o": [
        "Unicidad y consistencia",
        "Únicamente completitud",
        "Solamente actualidad",
        "Confidencialidad militar"
      ],
      "c": 0,
      "e": "Falta unicidad (se duplicó la misma persona en dos filas) y falta consistencia (no se respetó un estándar uniforme de nomenclatura de nombres)."
    },
    {
      "id": 40,
      "t": 5,
      "q": "Un dataset de costos de insumos agrícolas no se actualiza desde hace 10 meses en una economía inflacionaria. ¿Qué dimensión de calidad está seriamente comprometida?",
      "o": [
        "Actualidad (u Oportunidad)",
        "Unicidad",
        "Completitud",
        "Consistencia de tipos de datos"
      ],
      "c": 0,
      "e": "La actualidad se refiere a la vigencia temporal de los datos; datos desactualizados llevan a decisiones basadas en una realidad de precios que ya no existe."
    },
    {
      "id": 41,
      "t": 5,
      "q": "¿Qué diferencia conceptual sustancial existe entre un valor atípico (outlier) y un dato erróneo?",
      "o": [
        "El outlier es una medición real y legítima aunque extrema; el dato erróneo es una falla que no refleja la realidad del hecho",
        "El outlier siempre se borra de inmediato y el dato erróneo se multiplica por dos",
        "Son sinónimos perfectos; ambos significan que la persona que cargó el dato cometió una falta",
        "El dato erróneo solo ocurre con letras y el outlier solo con números impares"
      ],
      "c": 0,
      "e": "Un outlier puede ser una compra institucional enorme totalmente verídica (extrema pero real). Un dato erróneo es un error de tipeo o captura (ej. edad 999)."
    },
    {
      "id": 42,
      "t": 5,
      "q": "Si un cliente realiza una compra que representa 20 veces el ticket promedio habitual del comercio, ¿cuál es la conducta profesional correcta?",
      "o": [
        "Verificar el comprobante en la fuente transaccional antes de tomar decisiones; si es real, preservarlo o tratarlo según el objetivo",
        "Eliminar la fila sin consultar a nadie para que el promedio no suba",
        "Reemplazar el monto por el valor del ticket promedio",
        "Apagar el servidor para evitar que el gráfico se deforme"
      ],
      "c": 0,
      "e": "No se eliminan outliers a ciegas. Primero se verifica si fue un error de carga o una venta corporativa legítima; descartarla distorsionaría la facturación real."
    },
    {
      "id": 43,
      "t": 5,
      "q": "En un dataset de socios, el campo \"Edad\" de un socio registra el valor \"-15\". ¿Cómo se clasifica técnicamente esta situación?",
      "o": [
        "Dato erróneo por violación de regla de validez",
        "Outlier legítimo que debe conservarse sin cambios",
        "Variable cualitativa nominal válida",
        "Completitud perfecta"
      ],
      "c": 0,
      "e": "Una edad no puede ser negativa. Es un dato erróneo que viola las reglas de validez del dominio y debe corregirse o excluirse."
    },
    {
      "id": 44,
      "t": 6,
      "q": "¿Qué significan las siglas del proceso estándar ETL en gestión y análisis de datos?",
      "o": [
        "Extract, Transform, Load (Extraer, Transformar y Cargar)",
        "Estimate, Test, Learn (Estimar, Probar y Aprender)",
        "Execute, Transfer, Lock (Ejecutar, Transferir y Bloquear)",
        "Evaluate, Train, Launch (Evaluar, Entrenar y Lanzar)"
      ],
      "c": 0,
      "e": "ETL describe las tres fases indispensables para preparar datos: Extraerlos de sus orígenes, Transformarlos (limpiarlos y moldearlos) y Cargarlos en el destino analítico."
    },
    {
      "id": 45,
      "t": 6,
      "q": "Estandarizar formatos de fechas, eliminar espacios en blanco redundantes y corregir nombres de ciudades corresponde a la fase de:",
      "o": [
        "Transformar (Transform)",
        "Extraer (Extract)",
        "Cargar (Load)",
        "Publicar en la web"
      ],
      "c": 0,
      "e": "Toda tarea de limpieza, filtrado, normalización, conversión de tipos y validación de reglas forma parte de la fase 'Transformar'."
    },
    {
      "id": 46,
      "t": 6,
      "q": "¿Qué tareas prioritarias integran la \"Inspección inicial\" de un dataset según el método de la cátedra?",
      "o": [
        "Contar filas y columnas, revisar tipos de datos declarados, identificar nulos y examinar valores extremos sin modificar aún la tabla",
        "Aplicar directamente un algoritmo de clustering y publicar las conclusiones",
        "Borrar todas las columnas que tengan texto para dejar solo números",
        "Inventar valores donde haya celdas vacías para que la tabla quede completa"
      ],
      "c": 0,
      "e": "La inspección inicial es exploratoria y observacional: entender la morfología del dataset, dimensiones y anomalías visibles antes de alterar o modelar nada."
    },
    {
      "id": 47,
      "t": 6,
      "q": "¿Por qué no se debe comenzar un proyecto de datos graficando de inmediato sin haber realizado la inspección previa?",
      "o": [
        "Porque se corre el riesgo de graficar basura, interpretar distorsiones causadas por nulos o formatos mal leídos",
        "Porque los programas de gráficos exigen pagar una licencia cada vez que se abre un archivo",
        "Porque los gráficos solo deben realizarse al final del año contable",
        "Porque las computadoras no soportan abrir archivos sin antes renombrarlos"
      ],
      "c": 0,
      "e": "Construir gráficos sobre datos sin inspeccionar conduce a falsas ilusiones: escalas rotas por outliers erróneos, categorías duplicadas con diferente ortografía y sumas vacías."
    },
    {
      "id": 48,
      "t": 6,
      "q": "¿Cuál es la recomendación explícita de la cátedra sobre el uso de asistentes de IA generativa (como ChatGPT) en análisis de datos?",
      "o": [
        "Utilizarla como asistente para consultar sintaxis o explorar ideas, pero verificando siempre su código y razonamiento contra los datos reales",
        "Aceptar ciegamente cualquier conclusión que escriba el modelo sin comprobar",
        "Está terminantemente prohibido utilizar herramientas digitales de soporte",
        "Delegarle a la IA la firma legal de los balances contables"
      ],
      "c": 0,
      "e": "El dossier subraya el uso crítico: la IA puede cometer alucinaciones o asumir supuestos falsos del dataset; el analista es el responsable final de contrastar contra la evidencia real."
    },
    {
      "id": 49,
      "t": 6,
      "q": "En el proceso ETL, ¿qué acción concreta define a la etapa de \"Carga\" (Load)?",
      "o": [
        "Escribir o insertar los datos ya procesados y limpios en la base de datos o data warehouse analítico para su explotación",
        "Descargar el archivo desde el correo electrónico a la carpeta de descargas",
        "Cargar la batería de la computadora portátil del analista",
        "Comprimir el archivo en formato ZIP con contraseña"
      ],
      "c": 0,
      "e": "La carga consiste en persistir los datos transformados en el repositorio de destino (ej. Data Warehouse o base SQL analítica) listos para reportes o modelos."
    },
    {
      "id": 50,
      "t": 7,
      "q": "¿Cuál es el objetivo pedagógico central del Trabajo Práctico N.º 1 sobre el Club Deportivo Cerro Alto?",
      "o": [
        "Inspeccionar metódicamente un dataset con problemas de calidad reales y documentarlos clasificados por dimensión antes de intervenir",
        "Programar una aplicación móvil nativa con carrito de compras para el club",
        "Calcular la táctica del equipo de fútbol para el próximo torneo",
        "Diseñar las camisetas y entradas del estadio de Cerro Alto"
      ],
      "c": 0,
      "e": "El TP1 entrena la capacidad de observación crítica del analista: detectar, clasificar por dimensión y documentar los problemas de calidad de un dataset desconocido."
    },
    {
      "id": 51,
      "t": 7,
      "q": "¿Por qué la serie de Trabajos Prácticos de la materia (TP1 al TP4) es acumulativa?",
      "o": [
        "Porque reproduce la dinámica profesional: primero se inspecciona (TP1), luego se limpia (TP2), después se analiza (TP3) y finalmente se integra (TP4)",
        "Porque si no se aprueba el primer trabajo práctico se debe cambiar de carrera",
        "Porque los cuatro trabajos prácticos utilizan exactamente el mismo archivo sin modificaciones",
        "Porque la cátedra no tiene tiempo de redactar consignas diferentes"
      ],
      "c": 0,
      "e": "El diseño curricular es profesional y secuencial: no se puede analizar ni visualizar seriamente sin haber limpiado previamente, y no se limpia sin haber inspeccionado."
    },
    {
      "id": 52,
      "t": 7,
      "q": "En el dataset de cuotas de Cerro Alto, si un registro tiene un \"Importe de cuota\" registrado como \"$ -2500\", ¿cómo se califica?",
      "o": [
        "Dato erróneo por violación de la regla de validez del campo",
        "Outlier legítimo de una donación voluntaria",
        "Variable cualitativa ordinal de descuento",
        "Completitud deficiente por falta de signo positivo"
      ],
      "c": 0,
      "e": "El importe de una cuota regular no puede ser negativo. Se trata de un dato erróneo que atenta contra la validez del campo numérico."
    },
    {
      "id": 53,
      "t": 7,
      "q": "Si en la lista de socios de Cerro Alto aparecen dos registros con nombres distintos pero exactamente el mismo número de DNI, ¿qué problema existe?",
      "o": [
        "Problema de consistencia y unicidad de la clave identificadora",
        "Problema de actualidad del software de planillas",
        "Dato no estructurado sin importancia",
        "Outlier continuo que debe conservarse"
      ],
      "c": 0,
      "e": "El DNI es el identificador unívoco de una persona física. Dos personas con el mismo DNI denotan una inconsistencia grave o un error de carga que viola la unicidad."
    },
    {
      "id": 54,
      "t": 7,
      "q": "En la Consigna 4 del TP1 de Cerro Alto, ¿qué debe proponer el estudiante para cada problema de calidad detectado?",
      "o": [
        "Una propuesta fundada sobre qué tratamiento o corrección darle al dato antes de pasar a la fase analítica",
        "Una disculpa formal a la directiva del club deportivo",
        "Un nuevo precio para la cuota societaria del mes próximo",
        "El despido inmediato del empleado que cargó el archivo"
      ],
      "c": 0,
      "e": "La consigna exige redactar el tratamiento adecuado para cada caso: corregir formato, contrastar con la fuente, eliminar el registro si es irrecuperable o conservar si es outlier legítimo."
    },
    {
      "id": 55,
      "t": 7,
      "q": "¿Qué enfoque distingue a esta materia (Introducción al Análisis de Datos) frente a materias como Programación al tratar el caso Cerro Alto?",
      "o": [
        "Se concentra en evaluar la calidad, veracidad y significado de los datos para la toma de decisiones, y no en escribir el software de gestión",
        "Solo evalúa el diseño visual de los formularios en la pantalla",
        "Enseña cómo configurar el router wifi de la secretaría del club",
        "Reemplaza el trabajo del presidente del club deportivo"
      ],
      "c": 0,
      "e": "El prisma es el dato como activo estratégico: su procedencia, calidad, limpieza y capacidad para iluminar la gestión, independientemente de la tecnología con que se construyó el sistema."
    },
    {
      "id": 56,
      "t": 7,
      "q": "Si un socio abonó la cuota anual completa en un único pago y registra un importe 12 veces superior al mensual, ¿qué criterio aplica según el TP1?",
      "o": [
        "Posible valor atípico legítimo (outlier real) que debe confirmarse con secretaría antes de considerarse un error",
        "Dato erróneo obligatorio que debe ser borrado inmediatamente del dataset",
        "Violación de la dimensión de completitud",
        "Un dato no estructurado que no puede calcularse"
      ],
      "c": 0,
      "e": "Corresponde a un outlier legítimo: un pago anual adelantado es inusual en la columna mensual pero totalmente válido en la realidad del club; verificar y no borrar a ciegas."
    }
  ]
};
