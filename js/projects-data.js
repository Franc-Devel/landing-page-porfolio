/**
 * projects-data.js
 * Catálogo completo de proyectos desarrollados por Francisco Agustín Delgado
 * Datos verificados, auditados y sanitizados (Zero Data Leak Policy)
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
    thumbnail: "apps/francis-gamer/images/games/10-grand-theft-auto-v-enhanced/header.jpg",
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
    thumbnail: null,
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
    thumbnail: null,
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
    tags: ["JavaScript", "Vanilla CSS", "LocalStorage", "Algoritmia", "UTN"],
    status: "deployed",
    statusLabel: "Desplegado en Vercel",
    liveUrl: "https://modo-parcial-programacion-iv.vercel.app",
    localAppUrl: "apps/modo-parcial-prog4/index.html",
    thumbnail: null,
    description: "Plataforma de estudio activo diseñada para la carrera universitaria de Programación. Simula entornos de examen con preguntas aleatorias, límite de tiempo y diagnóstico de desempeño por unidad temática.",
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
    thumbnail: null,
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
    subtitle: "Simulador Universitario - UTN FRT",
    category: "estudio",
    categoryLabel: "Simuladores & Estudio",
    tags: ["JavaScript", "Data Science", "Python / Pandas Concepts", "UTN"],
    status: "production",
    statusLabel: "App Interactiva",
    liveUrl: null,
    localAppUrl: "apps/analisis-datos/index.html",
    thumbnail: null,
    description: "Simulador interactivo enfocado en los fundamentos de la ciencia y análisis de datos: estadística descriptiva, manipulación con Pandas, limpieza de datasets y visualización interpretativa.",
    highlights: [
      "Casos prácticos de limpieza de datos nulos y normalización",
      "Explicación interactiva de fórmulas y distribuciones estadísticas",
      "Sistema de autoevaluación con feedback conceptual inmediato",
      "Estructura alineada al programa oficial de la UTN FRT"
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
    thumbnail: null,
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
    thumbnail: null,
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
    thumbnail: null,
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
    title: "Calculadora Científica & Pro JS",
    subtitle: "Motor Matemático & Herramienta Interactiva",
    category: "tools",
    categoryLabel: "Herramientas & Algoritmos",
    tags: ["JavaScript", "CSS Glassmorphism", "Teclado", "Historial"],
    status: "production",
    statusLabel: "App Interactiva",
    liveUrl: null,
    localAppUrl: "apps/calculadora/index.html",
    thumbnail: null,
    description: "Calculadora web moderna desarrollada con JavaScript Vanilla. Evolucionó desde funciones básicas de consola hacia una interfaz glassmórfica completa con registro de historial, atajos de teclado y validación matemática.",
    highlights: [
      "Manejo seguro de división por cero y redondeo de punto flotante IEEE 754",
      "Historial interactivo que permite copiar resultados con un clic",
      "Soporte nativo para eventos de teclado (0-9, operadores, Enter, Esc)",
      "Diseño oscuro con acentos luminosos y micro-animaciones al pulsar"
    ],
    architecture: {
      logic: "Módulo JS desacoplado con funciones puras para operaciones aritméticas",
      ui: "CSS Vanilla con variables personalizadas y efectos de desenfoque de fondo",
      performance: "Carga en menos de 50ms sin librerías externas"
    }
  },
  {
    id: "laboratorio-logica",
    title: "Laboratorio de Lógica & Condicionales",
    subtitle: "Consola de Algorítmica & Bucles JS",
    category: "tools",
    categoryLabel: "Herramientas & Algoritmos",
    tags: ["JavaScript", "Algoritmos", "Terminal Emulada", "Bootstrap"],
    status: "production",
    statusLabel: "App Interactiva",
    liveUrl: null,
    localAppUrl: "apps/laboratorio-logica/index.html",
    thumbnail: null,
    description: "Entorno interactivo para la ejecución y visualización de algoritmos en tres fases progresivas: condicionales simples, condicionales anidados y bucles iterativos, con salida en terminal simulada.",
    highlights: [
      "Navegación por niveles: Básicos, Intermedios y Bucles",
      "Selector dinámico de ejercicios con explicaciones conceptuales",
      "Terminal interactiva con impresión de resultados paso a paso",
      "Estructura diseñada para consolidar la base de la lógica de programación"
    ],
    architecture: {
      execution: "Patrón Factory / Constructor para registrar y ejecutar módulos de código",
      ui: "Tema Bunker Dark con consola de alto contraste",
      security: "Ejecución aislada y sanitizada sin uso de eval inseguro"
    }
  },
  {
    id: "meteo-clima",
    title: "MeteoTrack Satelital",
    subtitle: "Dashboard Meteorológico con Open-Meteo",
    category: "tools",
    categoryLabel: "Herramientas & Algoritmos",
    tags: ["React", "Vite", "Open-Meteo API", "Geocodificación"],
    status: "production",
    statusLabel: "App Interactiva",
    liveUrl: null,
    localAppUrl: "apps/meteo-clima/index.html",
    thumbnail: null,
    description: "Aplicación meteorológica en tiempo real que combina geocodificación automática y pronóstico satelital sin requerir claves de API privadas de terceros (Zero API Key Leak).",
    highlights: [
      "Búsqueda universal de ciudades con detección de coordenadas geográficas",
      "Mapeo de códigos WMO a estados climáticos reales (lluvia, nieve, niebla)",
      "Monitoreo de temperaturas máximas y mínimas proyectadas",
      "Manejo robusto de estados de carga y fallas de conectividad"
    ],
    architecture: {
      frontend: "React con Vite + React Bootstrap",
      apiIntegration: "Consumo de API pública Open-Meteo sin cuotas restrictivas ni secretos expuestos",
      security: "Arquitectura sin claves de API duras (Zero Secret Exposure)"
    }
  },
  {
    id: "task-flow",
    title: "Task Flow Pro",
    subtitle: "Gestor de Tareas & Flujo de Trabajo",
    category: "tools",
    categoryLabel: "Herramientas & Algoritmos",
    tags: ["React", "Vite", "React Hook Form", "LocalStorage"],
    status: "production",
    statusLabel: "App Interactiva",
    liveUrl: null,
    localAppUrl: "apps/task-flow/index.html",
    thumbnail: null,
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
    thumbnail: null,
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

// Estadísticas generales para el panel
const PORTFOLIO_STATS = {
  totalProjects: PROJECTS_DATA.length,
  deployedCount: PROJECTS_DATA.filter(p => p.status === "deployed").length,
  interactiveApps: PROJECTS_DATA.filter(p => p.localAppUrl !== null).length,
  categoriesCount: 6,
  zeroLeakVerified: true
};
