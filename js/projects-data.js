/**
 * projects-data.js
 * Catálogo completo de proyectos desarrollados por Francisco Agustín Delgado
 * Proyectos locales, repositorios de GitHub (públicos y privados) y despliegues en Vercel
 * Auditado bajo el protocolo Zero Data Leak (Sin claves de entorno ni contraseñas)
 */

const PROJECTS_DATA = [
  {
    id: "francis-gamer",
    title: "Francis Gamer",
    subtitle: "Plataforma & Catálogo de Videojuegos de PC",
    category: "ecommerce",
    categoryLabel: "E-Commerce & Gaming",
    tags: ["React 19", "Vite", "Bootstrap 5", "SweetAlert2", "SPA"],
    status: "deployed",
    statusLabel: "Desplegado en Vercel",
    liveUrl: "https://byte-brothers-rolling-gamer.vercel.app",
    localAppUrl: "apps/francis-gamer/index.html",
    description: "Plataforma integral de exploración, compra simulada y reseña de videojuegos para PC. Incluye wishlist personalizada, buscador en tiempo real por género y especificaciones de hardware.",
    highlights: [
      "Arquitectura modular de componentes en React con Vite",
      "Filtrado instantáneo por categoría, precio y popularidad",
      "Panel de administración con validación de formularios y CRUD completo",
      "Diseño inmersivo en tema oscuro adaptado a estándares de la industria gamer"
    ],
    architecture: {
      frontend: "React 19 + React Router DOM + Bootstrap 5",
      stateManagement: "Custom React Context para Wishlist y Carrito",
      security: "Sanitización de entradas de texto y simulación de transacciones sin almacenamiento de datos bancarios reales",
      performance: "Optimización de assets y carga diferida de imágenes"
    }
  },
  {
    id: "finanzas-personales",
    title: "En Orden · Finanzas Personales",
    subtitle: "Gestión de Gastos, Vencimientos & Sincronización Telegram",
    category: "fullstack",
    categoryLabel: "Fullstack & ERP",
    tags: ["JavaScript", "Drizzle ORM", "SQLite", "Telegram Bot", "Privacidad"],
    status: "production",
    statusLabel: "App Interactiva",
    liveUrl: null,
    localAppUrl: "apps/finanzas-personales/index.html",
    description: "Sistema personal de finanzas para control de vencimientos, registro asistido de gastos y presupuestos mensuales. Cuenta con integración para capturar gastos vía bot de Telegram y visor de comprobantes.",
    highlights: [
      "Dashboard analítico con distribución proporcional de gastos por rubro",
      "Alertas automáticas de próximos vencimientos a 7 y 1 día de anticipación",
      "Almacenamiento privado local con opción de respaldo descargable en JSON y CSV",
      "Diseño ergonómico y optimizado para visualización rápida en móvil y escritorio"
    ],
    architecture: {
      frontend: "Vanilla JS SPA reactiva con sistema de pestañas instantáneas",
      backend: "Node.js con Drizzle ORM y base de datos SQLite segura",
      security: "Tokens de sesión cifrados y variables de entorno estrictamente aisladas",
      integrations: "Webhook local para captura de transacciones vía Telegram"
    }
  },
  {
    id: "cine-app",
    title: "CineApp Pro",
    subtitle: "Gestor & Catálogo de Películas (Gestor de Contenido & Roles)",
    category: "streaming",
    categoryLabel: "Streaming & Multimedia",
    tags: ["JavaScript", "HTML5", "CSS Bunker", "CRUD", "Gestión"],
    status: "production",
    statusLabel: "App Interactiva",
    liveUrl: null,
    localAppUrl: "apps/cine-app/index.html",
    description: "Aplicación para gestión de catálogo cinematográfico con arquitectura modular. Permite registrar películas con directores, año, duración y sinopsis, administrando el catálogo con roles y persistencia.",
    highlights: [
      "Panel de administración con formulario estructurado para carga de títulos",
      "Visualización en tabla estilizada con detalles expandibles y géneros",
      "Gestión de acciones rápidas (eliminar, calificar, restaurar catálogo)",
      "Persistencia de datos y manejo seguro de sesión de usuario"
    ],
    architecture: {
      frontend: "Arquitectura modular en JavaScript desacoplada por capas (UI / API)",
      theme: "Estética Bunker Dark con acentos luminosos en cian y alertas en rojo",
      security: "Validación de esquema de película para prevenir inyección de caracteres maliciosos"
    }
  },
  {
    id: "francis-music",
    title: "Francis Music Streamer",
    subtitle: "Reproductor & Gestor de Streaming de Audio",
    category: "streaming",
    categoryLabel: "Streaming & Multimedia",
    tags: ["React", "Vite", "Web Audio API", "Bootstrap Icons", "CRUD"],
    status: "production",
    statusLabel: "App Interactiva",
    liveUrl: null,
    localAppUrl: "apps/francis-music/index.html",
    description: "Reproductor de audio en streaming con gestión de colas de reproducción, listas personalizadas, catálogo musical y panel administrativo para cargar pistas y metadatos.",
    highlights: [
      "Motor de reproducción continuo en barra fija inferior con controles de volumen y seek",
      "Gestor de playlists personalizadas por usuario",
      "Panel de administración protegido con rutas controladas",
      "Persistencia de estado y preferencias en almacenamiento local"
    ],
    architecture: {
      frontend: "React con Vite + React-Bootstrap",
      audioEngine: "HTML5 Audio API con sincronización de estado de reproducción",
      security: "Rutas protegidas con validación de sesión de usuario en memoria",
      ui: "Interfaz inspirada en Spotify con paleta oscura de alto contraste"
    }
  },
  {
    id: "pokedex",
    title: "Pokédex Nacional Interactiva",
    subtitle: "Catálogo de 151 Pokémon con PokeAPI & Filtros",
    category: "tools",
    categoryLabel: "Herramientas & Lógica",
    tags: ["JavaScript", "PokeAPI", "Bootstrap 5", "Async / Await", "Web APIs"],
    status: "production",
    statusLabel: "App Interactiva",
    liveUrl: null,
    localAppUrl: "apps/pokedex/index.html",
    description: "Aplicación interactiva de consumo de servicios web y arquitectura frontend asíncrona. Consume la API pública PokeAPI para renderizar la primera generación de Pokémon con filtros dinámicos por tipo elemental.",
    highlights: [
      "Carga asíncrona de 151 criaturas con renderizado dinámico de tarjetas",
      "Filtros elementales rápidos (Fuego, Agua, Planta, Eléctrico, Psíquico, etc.)",
      "Formateo visual con identificadores numéricos oficiales y badges coloreados",
      "Consumo eficiente de API sin necesidad de claves privadas expuestas"
    ],
    architecture: {
      client: "JavaScript Vanilla utilizando Fetch API y promesas asíncronas",
      styles: "Bootstrap 5 con hoja de estilos personalizada para tipografías y colores de tipos",
      security: "Peticiones solo lectura a endpoint HTTPS público sin secretos"
    }
  },
  {
    id: "francis-bank",
    title: "Francis Bank · Neo-Banking 3D",
    subtitle: "HomeBanking Cuántico, Tarjeta Holográfica & Analítica",
    category: "fullstack",
    categoryLabel: "Fullstack & Fintech",
    tags: ["JavaScript", "Holographic 3D Card", "Fintech Dashboard", "Biometrics", "Canvas"],
    status: "production",
    statusLabel: "App Interactiva",
    liveUrl: null,
    localAppUrl: "apps/francis-bank/dashboard.html",
    description: "Plataforma de Neo-Banking futurista y HomeBanking interactivo. Incluye tarjeta de crédito holográfica 3D con giro interactivo y CVV dinámico de seguridad (60s), simulador de transferencias con autenticación biométrica, analítica de gastos en Canvas y cotizaciones de divisas y criptomonedas en tiempo real.",
    highlights: [
      "Tarjeta holográfica 3D interactiva con efecto tilt y CVV dinámico con temporizador de 60s",
      "Simulador de transferencias inmediatas con escaneo biométrico y comprobante descargable",
      "Flujo patrimonial en vivo y analítica de gastos semestrales en Canvas",
      "Simulador de rendimientos compuestos diarios y cotizaciones en vivo (MEP/Cripto)"
    ],
    architecture: {
      frontend: "HTML5 semántico, CSS 3D Transforms, Canvas API y JavaScript Vanilla desacoplado",
      ux: "Experiencia fintech de alta fidelidad inspirada en Revolut y Apple Card con modo privacidad",
      security: "Protocolo de CVV rotativo de un solo uso y simulación biométrica de autorización"
    }
  },
  {
    id: "alumnos-crud",
    title: "Gestor de Alumnos CRUD",
    subtitle: "Panel de Administración Educativa & Roles",
    category: "tools",
    categoryLabel: "Herramientas & Lógica",
    tags: ["JavaScript", "REST API", "LocalStorage Fallback", "CRUD", "Admin UI"],
    status: "production",
    statusLabel: "App Interactiva",
    liveUrl: null,
    localAppUrl: "apps/alumnos-crud/index.html",
    description: "Panel de control para la administración de nóminas educativas y equipos. Ofrece altas, bajas, modificaciones y consultas (CRUD) con soporte para backend REST y persistencia local.",
    highlights: [
      "Formulario con validación de nombre, apellido, edad, email y comisión",
      "Tabla interactiva con estados de actividad y botones de edición y eliminación",
      "Fallback transparente a LocalStorage para funcionar sin servidor externo",
      "Alertas de estado contextuales con autocierre en 5 segundos"
    ],
    architecture: {
      client: "JavaScript Vanilla con arquitectura de manejo de estado en cache",
      storage: "Arquitectura híbrida: API REST con conmutación por error a LocalStorage",
      security: "Sanitización de inputs mediante trim y validación tipográfica de edad"
    }
  },
  {
    id: "titan-hard",
    title: "Titan Hard · Tienda Gamer",
    subtitle: "E-Commerce de Hardware & Periféricos para PC",
    category: "ecommerce",
    categoryLabel: "E-Commerce & Gaming",
    tags: ["HTML5", "CSS3", "Bootstrap 5", "FontAwesome", "Gaming"],
    status: "production",
    statusLabel: "App Interactiva",
    liveUrl: null,
    localAppUrl: "apps/titan-hard/index.html",
    description: "Portal de comercio electrónico de componentes de computación y periféricos gamer de alto rendimiento. Creado por Francisco Delgado con catálogo categorizado y diseño temático.",
    highlights: [
      "Menú de navegación multinivel para productos de hardware",
      "Secciones de ofertas destacadas, placas de video y procesadores",
      "Diseño adaptable a dispositivos móviles y pantallas panorámicas",
      "Identidad visual y marca desarrollada desde cero"
    ],
    architecture: {
      frontend: "Bootstrap 5 + CSS personalizado con paleta de alto contraste gamer",
      seo: "Etiquetas meta, Open Graph y estructura semántica completa",
      security: "Contenido estático sin riesgos de inyección en servidor"
    }
  },
  {
    id: "francis-store",
    title: "Francis Store",
    subtitle: "E-Commerce con Animaciones Fluidas",
    category: "ecommerce",
    categoryLabel: "E-Commerce & Gaming",
    tags: ["React", "Vite", "Framer Motion", "React Hot Toast", "Tailored CSS"],
    status: "production",
    statusLabel: "App Interactiva",
    liveUrl: null,
    localAppUrl: "apps/francis-store/index.html",
    description: "Tienda online moderna con transiciones suaves basadas en física de resortes (Framer Motion), drawer interactivo de compras, catálogo responsivo y notificaciones toast.",
    highlights: [
      "Transiciones de página fluidas sin parpadeos visuales",
      "Carrito de compras lateral con cálculo dinámico de subtotales e impuestos",
      "Notificaciones contextuales de feedback inmediato",
      "Panel de gestión de productos con validación de precios y stock"
    ],
    architecture: {
      frontend: "React + Vite + Framer Motion",
      ux: "Micro-interacciones en botones y tarjetas de producto",
      security: "Validación de esquema de datos de producto para evitar inyecciones",
      build: "Compilación optimizada con Rollup en menos de 2 segundos"
    }
  },
  {
    id: "modo-parcial-prog4",
    title: "Modo Parcial - Programación Web",
    subtitle: "Simulador de Examen & Evaluación Activa",
    category: "estudio",
    categoryLabel: "Simuladores & Estudio",
    tags: ["JavaScript", "Vanilla CSS", "LocalStorage", "Algoritmia", "Vercel"],
    status: "deployed",
    statusLabel: "Desplegado en Vercel",
    liveUrl: "https://modo-parcial-programacion-iv.vercel.app",
    localAppUrl: "apps/modo-parcial-prog4/index.html",
    description: "Plataforma de estudio activo y simulación de exámenes técnicos. Simula entornos de evaluación con preguntas aleatorias, límite de tiempo y diagnóstico de desempeño por unidad temática.",
    highlights: [
      "Motor de preguntas aleatorias sin repetición con barajado determinista",
      "Temporizador regresivo con alerta de tiempo crítico",
      "Glosario interactivo y modo flashcards para memorización activa",
      "Historial de intentos guardado localmente con gráfico de progreso"
    ],
    architecture: {
      core: "Arquitectura Vanilla JS sin frameworks pesados para rendimiento instantáneo",
      storage: "LocalStorage para persistencia de puntuaciones y estadísticas",
      security: "Ejecución 100% en el cliente sin recolección de datos personales",
      deployment: "Despliegue automatizado en infraestructura Edge de Vercel"
    }
  },
  {
    id: "modo-defensa-gestion",
    title: "Modo Defensa - Gestión de Software",
    subtitle: "Simulador de Defensa de Tesis & Metodologías",
    category: "estudio",
    categoryLabel: "Simuladores & Estudio",
    tags: ["JavaScript", "Scrum / Agile", "Arquitectura", "Vercel"],
    status: "deployed",
    statusLabel: "Desplegado en Vercel",
    liveUrl: "https://modo-defensa-gestion-software.vercel.app",
    localAppUrl: "apps/modo-defensa-gestion/index.html",
    description: "Herramienta especializada de preparación para la defensa oral de proyectos de software. Cubre ciclos de vida, estimaciones ágiles, gestión de riesgos, aseguramiento de calidad y casos de estudio reales.",
    highlights: [
      "Preguntas orientadas a decisiones arquitectónicas y metodológicas",
      "Módulo de retroalimentación detallada con justificación técnica",
      "Filtros por áreas de conocimiento: Scrum, Kanban, Métricas de Calidad y GitFlow",
      "Diseño tipo terminal de mando aeroespacial con enfoque en legibilidad"
    ],
    architecture: {
      frontend: "HTML5 semántico + CSS Glassmorphism + JS ES6+",
      dataModel: "Banco de preguntas modular con categorización taxonómica",
      security: "Cero dependencias externas vulnerables; código estático auditado",
      deployment: "Producción activa en Vercel"
    }
  },
  {
    id: "analisis-datos",
    title: "Introducción al Análisis de Datos",
    subtitle: "Simulador Técnico & Ciencia de Datos",
    category: "estudio",
    categoryLabel: "Simuladores & Estudio",
    tags: ["JavaScript", "Data Science", "Python / Pandas Concepts", "Estadística"],
    status: "production",
    statusLabel: "App Interactiva",
    liveUrl: null,
    localAppUrl: "apps/analisis-datos/index.html",
    description: "Simulador interactivo enfocado en los fundamentos de la ciencia y análisis de datos: estadística descriptiva, manipulación con Pandas, limpieza de datasets y visualización interpretativa.",
    highlights: [
      "Casos prácticos de limpieza de datos nulos y normalización",
      "Explicación interactiva de fórmulas y distribuciones estadísticas",
      "Sistema de autoevaluación con feedback conceptual inmediato",
      "Estructura alineada a estándares profesionales de ingeniería de datos"
    ],
    architecture: {
      frontend: "Web estándar con CSS nativo y JavaScript orientado a eventos",
      principles: "Enfoque didáctico con interactividad sin latencia de red",
      security: "Entorno sandbox local seguro"
    }
  },
  {
    id: "lubricentro-dym",
    title: "Control Central Lubricentro DyM",
    subtitle: "ERP de Gestión Automotriz & Taller",
    category: "fullstack",
    categoryLabel: "Fullstack & ERP",
    tags: ["React", "Express", "SQLite", "Lucide Icons", "Bunker DB"],
    status: "production",
    statusLabel: "App Interactiva",
    liveUrl: null,
    localAppUrl: "apps/lubricentro-dym/index.html",
    description: "Sistema integral de punto de venta y seguimiento de mantenimientos preventivos para centros de lubricación y mecánica ligera. Control de clientes, órdenes de trabajo, vehículos y alertas de kilometraje.",
    highlights: [
      "Panel de control centralizado con métricas operativas diarias",
      "Registro detallado de vehículos por patente, marca y tipo de lubricante",
      "Historial de servicios con avisos de próximo cambio",
      "Base de datos local robusta con respaldo transaccional en SQLite"
    ],
    architecture: {
      frontend: "React + Vite con sistema de diseño Outfit / Plus Jakarta Sans",
      backend: "Node.js + Express con Better-SQLite3 para baja latencia",
      security: "Cifrado con Bcrypt, tokens JWT y variables de entorno protegidas",
      reliability: "Backups WAL automáticos con redundancia local"
    }
  },
  {
    id: "asistente-aldia",
    title: "Al Día · Asistente Personal & WhatsApp Intelligence",
    subtitle: "Gestor de Mensajería & Organización Personal",
    category: "automation",
    categoryLabel: "Automatización & IA",
    tags: ["JavaScript", "WhatsApp Bridge", "IA Local", "NAS Storage"],
    status: "production",
    statusLabel: "App Interactiva",
    liveUrl: null,
    localAppUrl: "apps/asistente-aldia/index.html",
    description: "Centro de comando para centralizar tareas, recordatorios y compromisos a partir de conversaciones seleccionadas de WhatsApp. Aloja datos exclusivamente en red local/NAS con análisis inteligente de mensajes.",
    highlights: [
      "Visor interactivo de chats y extracción asistida de pendientes",
      "Aprobación de propuestas con un clic antes de modificar tareas existentes",
      "Presupuesto y monitor de consumo local de IA",
      "Privacidad total: solo procesa texto de chats explícitamente autorizados"
    ],
    architecture: {
      frontend: "Panel ligero en Vanilla JS con interfaz reactiva instantánea",
      integration: "Conexión con puente Baileys de WhatsApp Web",
      storage: "Base de datos persistente en servidor local/NAS",
      privacy: "Zero Cloud Leaks: ningún dato sensible sale de la red local sin autorización"
    }
  },
  {
    id: "calculadora-pro",
    title: "Quantum Calc Pro · Workstation",
    subtitle: "Supercalculadora Científica, Graficadora 2D & Suite de Ingeniería",
    category: "tools",
    categoryLabel: "Herramientas & Lógica",
    tags: ["JavaScript", "Graficadora 2D", "Inspector 32-Bit", "Ecuaciones", "Estadística"],
    status: "production",
    statusLabel: "App Interactiva",
    liveUrl: null,
    localAppUrl: "apps/calculadora/index.html",
    description: "Estación de cálculo científico y matemático avanzado. Integra trazador cartesiano de funciones 2D en Canvas en tiempo real, modo programador con inspector interactivo de 32 bits (DEC/HEX/BIN/OCT), resolutor de ecuaciones cuadráticas con discriminante, analítica estadística muestral y audio-feedback háptico.",
    highlights: [
      "Trazador cartesiano 2D interactivo en Canvas con zoom y evaluación de curvas en vivo",
      "Modo Programador con inspector interactivo de 32 bits en tiempo real (DEC, HEX, BIN, OCT)",
      "Resolutor de ecuaciones cuadráticas con discriminante y raíces reales o complejas",
      "Analítica estadística muestral (Media, Mediana, Desvío Estándar σ y Varianza) y audio háptico"
    ],
    architecture: {
      logic: "Motor de evaluación de expresiones matemáticas puras con soporte DEG/RAD y funciones trascendentes",
      grapher: "Motor de renderizado 2D continuo sobre HTML5 Canvas adaptado a DPI retina",
      performance: "Cálculo en menos de 5ms sin librerías externas pesadas"
    }
  },
  {
    id: "laboratorio-logica",
    title: "Quantum Logic & Sorting Studio",
    subtitle: "Visualizador de Algoritmos en Vivo & Consola de 35 Retos JS",
    category: "tools",
    categoryLabel: "Herramientas & Lógica",
    tags: ["JavaScript", "Sorting Visualizer", "Algoritmos O(n²)", "Audio Tonal"],
    status: "production",
    statusLabel: "App Interactiva",
    liveUrl: null,
    localAppUrl: "apps/laboratorio-logica/index.html",
    description: "Laboratorio interactivo de algorítmica y estructuras de control. Incluye visualizador animado de algoritmos de ordenamiento (Bubble Sort y Selection Sort) con barras de colores, métricas de comparaciones e intercambios en vivo, síntesis sonora de frecuencia por elemento y 35 ejercicios prácticos.",
    highlights: [
      "Visualizador interactivo de algoritmos de ordenamiento con barras animadas en tiempo real",
      "Contador en tiempo real de comparaciones, intercambios y velocidad ajustable con tonos acústicos",
      "Banco completo de 35 desafíos algorítmicos en tres fases con emulación de consola",
      "Arquitectura de ejecución segura sin eval ni fugas de memoria"
    ],
    architecture: {
      visualizer: "Motor asíncrono con Promise timing loops para animación fluida a 60 FPS",
      audio: "Web Audio API sintetizando frecuencias sinusoidales proporcionales al valor del elemento",
      security: "Ejecución aislada y sanitizada de algoritmos"
    }
  },
  {
    id: "meteo-clima",
    title: "MeteoTrack Pro 2.0 · Cyber Climate HUD",
    subtitle: "Estación Atmosférica, Radar Doppler & Centro de Preguntas",
    category: "tools",
    categoryLabel: "Herramientas & Lógica",
    tags: ["JavaScript", "Simulador de Partículas", "Radar Doppler", "Curvas Bézier", "Audio Ambiental"],
    status: "production",
    statusLabel: "App Interactiva",
    liveUrl: null,
    localAppUrl: "apps/meteo-clima/index.html",
    description: "Estación meteorológica interactiva de alta fidelidad. Cuenta con simulador de partículas de clima en vivo (lluvia, relámpagos, nieve, sol, aurora polar), radar Doppler táctico con reflectividad dBZ, curva térmica horaria con interpolación Bézier, instrumental científico (rosa de los vientos, UV, AQI) y centro de desafíos climáticos gráficos.",
    highlights: [
      "Simulador de partículas atmosféricas en vivo: lluvia, tormenta con relámpagos, nieve, sol y aurora boreal",
      "Radar Doppler táctico animado con barrido azimutal 360° y niveles de reflectividad dBZ",
      "Curva térmica y probabilidad de precipitación en 24h con interpolación Bézier y pronóstico de 7 días",
      "Centro de preguntas y desafíos climáticos interactivos con diagramas SVG y sintetizador acústico de lluvia"
    ],
    architecture: {
      canvasEngine: "Canvas 2D optimizado con física de partículas vectoriales y relámpagos aleatorios",
      radar: "Simulación polar de barrido con gradiente de intensidad dBZ y anillos de alcance",
      soundSynth: "Sintetizador procedural de ruido blanco y filtros resonantes para emular lluvia y viento",
      security: "Arquitectura sin claves de API duras (Zero Secret Exposure)"
    }
  },
  {
    id: "task-flow",
    title: "Task Flow Pro",
    subtitle: "Gestor de Tareas & Flujo de Trabajo",
    category: "tools",
    categoryLabel: "Herramientas & Lógica",
    tags: ["React", "Vite", "React Hook Form", "LocalStorage"],
    status: "production",
    statusLabel: "App Interactiva",
    liveUrl: null,
    localAppUrl: "apps/task-flow/index.html",
    description: "Administrador de pendientes enfocado en la validación precisa de formularios y el ciclo de vida inmutable del estado en React.",
    highlights: [
      "Validación de campos con límites de longitud y mensajes de error dinámicos",
      "Sincronización bidireccional con LocalStorage mediante useEffect",
      "Eliminación inmutable basada en filtrado funcional de arrays",
      "Interfaz limpia y minimalista para máxima concentración"
    ],
    architecture: {
      state: "Inmutabilidad de estado con useState y React Hook Form",
      persistence: "Persistencia local automática en el navegador",
      security: "Sanitización automática de entradas de texto"
    }
  },
  {
    id: "mi-primer-web",
    title: "Mi Primer Web · Hito Fundacional",
    subtitle: "Primer Proyecto de Maquetado HTML5 & Semántica",
    category: "tools",
    categoryLabel: "Herramientas & Lógica",
    tags: ["HTML5", "CSS3", "Semántica", "Hito Histórico"],
    status: "production",
    statusLabel: "App Interactiva",
    liveUrl: null,
    localAppUrl: "apps/mi-primer-web/index.html",
    description: "El primer proyecto web construido al inicio del camino formativo. Representa el punto de partida en la comprensión de etiquetas semánticas, estructura de páginas y maquetación CSS.",
    highlights: [
      "Estructura basada en etiquetas semánticas nativas (header, nav, main, section, footer)",
      "Navegación multipágina con enlaces internos y externos",
      "El punto de referencia histórico del crecimiento técnico de Francisco Delgado"
    ],
    architecture: {
      markup: "HTML5 puro con estándares de accesibilidad básica",
      value: "Documento viviente del progreso paso a paso (Metodología Learn in Public)"
    }
  },
  {
    id: "talamasca-consultora",
    title: "Talamasca · Consultora Nexo",
    subtitle: "Portal Corporativo de Integración Humana & Tecnológica",
    category: "fullstack",
    categoryLabel: "Fullstack & ERP",
    tags: ["Next.js", "TypeScript", "Diseño Editorial", "Seguridad"],
    status: "production",
    statusLabel: "Arquitectura Corporativa",
    liveUrl: null,
    localAppUrl: null,
    description: "Plataforma web institucional y de diagnóstico para consultora estratégica en tecnología, procesos y adopción de software. Integra un modelo de evaluación en cinco capas y blindaje operativo.",
    highlights: [
      "Diseño de nivel editorial con tipografía de alto impacto y metáforas visuales",
      "Formulario interactivo de diagnóstico previo de sistemas",
      "Sección de blindaje de seguridad y gobernanza de datos",
      "Estructura escalable con Server Components en Next.js"
    ],
    architecture: {
      framework: "Next.js con TypeScript y CSS modular sin frameworks intrusivos",
      doctrina: "Tecnología · Personas · Procesos (La causa raíz detrás del error visible)",
      security: "Gobernanza estricta, validación de inputs y protección contra spam"
    }
  },
  {
    id: "crm-abatech",
    title: "CRM Clientes Abatech",
    subtitle: "Gestión Comercial & Automatización de Reportes",
    category: "fullstack",
    categoryLabel: "Fullstack & ERP",
    tags: ["Python", "SQLite", "Reportes PDF", "Desktop & Web"],
    status: "production",
    statusLabel: "Arquitectura de Software",
    liveUrl: null,
    localAppUrl: null,
    description: "Sistema de gestión comercial y seguimiento de clientes desarrollado en Python con almacenamiento SQLite, generación automatizada de presupuestos y exportación de métricas.",
    highlights: [
      "Base de datos relacional para clientes, transacciones y seguimiento",
      "Generador automático de documentos y comprobantes comerciales",
      "Cero fugas de credenciales gracias a variables de entorno locales",
      "Modularidad diseñada para migrar a interfaz web sin rehacer la lógica de negocio"
    ],
    architecture: {
      core: "Python 3 con arquitectura por capas (Controladores, Servicios, Repositorios)",
      database: "SQLite transaccional con respaldo programado",
      security: "Hashing de contraseñas y permisos basados en rol"
    }
  }
];

const PORTFOLIO_STATS = {
  totalProjects: PROJECTS_DATA.length,
  deployedCount: PROJECTS_DATA.filter(p => p.status === "deployed").length,
  interactiveApps: PROJECTS_DATA.filter(p => p.localAppUrl !== null).length,
  categoriesCount: 6,
  zeroLeakVerified: true
};
