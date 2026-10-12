/**
 * projects-data.js
 * Catálogo exclusivo de los 6 proyectos fijados (Pinned Repositories) en el perfil de GitHub de Francisco Agustín Delgado (@Franc-Devel)
 * Sincronizado con las imágenes de alta fidelidad en images/projects/
 */

const PROJECTS_DATA = [
  {
    id: "en-orden-finanzas",
    title: "FAUVOR Finanzas",
    subtitle: "Finanzas Personales y Compartidas con Automatización e IA",
    category: "automation",
    categoryLabel: "Automatización & IA",
    tags: ["IA Multimodal", "Telegram Bot", "Cloudflare Workers", "SQLite", "Demo Sintética", "Automatización"],
    status: "pinned",
    statusLabel: "Repo Fijado en GitHub",
    pinned: true,
    image: "images/projects/en-orden-finanzas-fauvor.webp",
    repository: "https://github.com/Franc-Devel/En-Orden-Finanzas",
    liveUrl: "https://github.com/Franc-Devel/En-Orden-Finanzas",
    localAppUrl: "apps/finanzas-personales/index.html",
    description: "Showcase de finanzas personales y compartidas con integraciones de Inteligencia Artificial, automatización en la nube y demostración segura basada en datos sintéticos. Ingesta de comprobantes y tickets con OCR multimodal, categorización automática y bot conversacional en Telegram.",
    highlights: [
      "Extracción multimodal con OCR de comprobantes y recibos en PDF/imágenes",
      "Categorización inteligente de gastos e ingresos sin exposición de datos privados",
      "Bot conversacional de Telegram para registro ágil de transacciones en movilidad",
      "Demostración interactiva en sandbox con dataset sintético realista"
    ],
    architecture: {
      ia: "Visión multimodal + procesamiento estructurado de comprobantes",
      automatizacion: "Bot de Telegram y webhooks de eventos en Cloudflare Workers",
      persistencia: "Base de datos transaccional con SQLite y Drizzle ORM",
      seguridad: "Tratamiento estricto de comprobantes como inputs no confiables (Zero Data Leak)",
      repositorio: "https://github.com/Franc-Devel/En-Orden-Finanzas"
    }
  },
  {
    id: "lubricentro-dym",
    title: "FAUVOR Taller",
    subtitle: "Sistema de Gestión para Productos, Stock y Turnos",
    category: "fullstack",
    categoryLabel: "Fullstack & ERP",
    tags: ["Node.js", "Express", "Prisma ORM", "MySQL / SQLite", "Bootstrap 5", "Gestión"],
    status: "pinned",
    statusLabel: "Repo Fijado en GitHub",
    pinned: true,
    image: "images/projects/lubricentro-dym-fauvor.webp",
    repository: "https://github.com/Franc-Devel/Lubricentro-DYM",
    liveUrl: "https://github.com/Franc-Devel/Lubricentro-DYM",
    localAppUrl: "apps/lubricentro-dym/index.html",
    description: "Sistema web de gestión integral para lubricentros y talleres automotrices. Control de catálogo de productos, inventario en tiempo real, órdenes de trabajo por patente vehicular, alertas de servicios preventivos y administración de turnos.",
    highlights: [
      "Inventario en tiempo real con alertas automáticas de reposición de insumos",
      "Ficha de historial técnico por patente de vehículo con control de kilometraje",
      "Gestión de turnos de clientes y emisión ágil de órdenes de trabajo",
      "Arquitectura backend con Node.js, Express y persistencia relacional con Prisma"
    ],
    architecture: {
      frontend: "Panel de administración responsive con Bootstrap 5 y diseño ergonómico",
      backend: "API RESTful modular en Node.js y Express",
      persistencia: "Prisma ORM sobre base de datos relacional (MySQL / SQLite)",
      repositorio: "https://github.com/Franc-Devel/Lubricentro-DYM"
    }
  },
  {
    id: "data-analytics-studio",
    title: "FAUVOR Analytics",
    subtitle: "Ingesta, Calidad y Visualización de Datos con Python",
    category: "python-data",
    categoryLabel: "Python & Ciencia de Datos",
    tags: ["Python", "Pandas", "Matplotlib", "OpenPyXL", "Data Quality", "EDA"],
    status: "pinned",
    statusLabel: "Repo Fijado en GitHub",
    pinned: true,
    image: "images/projects/data-analytics-studio-fauvor.webp",
    repository: "https://github.com/Franc-Devel/Data-Analytics-Studio",
    liveUrl: "https://github.com/Franc-Devel/Data-Analytics-Studio",
    localAppUrl: "apps/analisis-datos/index.html",
    description: "Aplicación de escritorio en Python para explorar archivos CSV y Excel, asegurar la calidad de datos con métricas de completitud y duplicados, y generar estadísticas descriptivas y visualizaciones claras orientadas a la toma de decisiones.",
    highlights: [
      "Lectura y saneamiento automatizado de datasets CSV y planillas Excel con Pandas",
      "Verificación de calidad de datos: detección de nulos, inconsistencias y duplicados",
      "Generación de estadísticas descriptivas y gráficos de dispersión/distribución",
      "Flujo estructurado del dato al impacto: ingesta, transformación y visualización"
    ],
    architecture: {
      lenguaje: "Python 3.x",
      librerias: "Pandas, Matplotlib, OpenPyXL, NumPy",
      enfoque: "Análisis Exploratorio de Datos (EDA) y procesamiento reproducible",
      repositorio: "https://github.com/Franc-Devel/Data-Analytics-Studio"
    }
  },
  {
    id: "francis-gamer",
    title: "FAUVOR Gaming",
    subtitle: "Catálogo Web de Videojuegos con React y Vite",
    category: "ecommerce",
    categoryLabel: "Frontend & React",
    tags: ["React 19", "Vite", "Bootstrap 5", "JavaScript", "UI/UX Gamer", "Vercel"],
    status: "deployed",
    statusLabel: "En Vercel & Repo Fijado",
    pinned: true,
    image: "images/projects/francis-gamer-fauvor.webp",
    repository: "https://github.com/Franc-Devel/Francis-Gamer",
    liveUrl: "https://byte-brothers-rolling-gamer.vercel.app",
    localAppUrl: "apps/francis-gamer/index.html",
    description: "Plataforma web de exploración y catálogo de videojuegos para PC. Desarrollada con React 19 y Vite, incluye buscador dinámico, filtrado instantáneo por categoría y precio, wishlist de deseados persistente y panel de gestión en un paleta marfil y bronce de FAUVOR.",
    highlights: [
      "Arquitectura de componentes desacoplados en React 19 con Vite",
      "Buscador predictivo en tiempo real y filtrado dinámico por géneros",
      "Diseño adaptable en paleta FAUVOR alineada a estándares de la industria gamer",
      "Despliegue activo en producción en Vercel con alta velocidad de respuesta"
    ],
    architecture: {
      frontend: "React 19 + React Router DOM + Bootstrap 5",
      estado: "React Context para persistencia de wishlist y preferencias",
      hosting: "Vercel Edge Network",
      repositorio: "https://github.com/Franc-Devel/Francis-Gamer"
    }
  },
  {
    id: "system-flow",
    title: "FAUVOR Flow",
    subtitle: "Automatizaciones para negocios, de la entrada al resultado",
    category: "automation",
    categoryLabel: "Automatización & Integraciones",
    tags: ["Node.js", "SQLite", "JavaScript", "Flujos", "IA opcional", "Telegram opcional"],
    status: "pinned",
    statusLabel: "Proyecto FAUVOR",
    pinned: true,
    image: "images/projects/system-flow-fauvor.webp",
    repository: "https://github.com/Franc-Devel/system-flow",
    liveUrl: "https://github.com/Franc-Devel/system-flow",
    localAppUrl: "apps/system-flow/index.html",
    description: "Motor de automatizaciones con tres flujos: consulta a presupuesto, comprobante a revisión y seguimiento. Crea tareas y avisos, registra el historial y permite reintentar desde el paso fallido. La demo usa reglas locales y almacenamiento del navegador; el servidor local agrega SQLite e integraciones opcionales.",
    highlights: [
      "Tres flujos ejecutables con validación de entradas",
      "Historial por paso y reintentos sin duplicar tareas",
      "Tareas con estados y exportación del historial en JSON",
      "Servidor Node.js con SQLite e IA/Telegram opcionales; demo sin envíos externos"
    ],
    architecture: {
      interfaz: "HTML, CSS y JavaScript modular con identidad FAUVOR",
      motor: "Motor compartido entre navegador y servidor",
      persistencia: "SQLite en servidor local; localStorage en la demo",
      integraciones: "IA y Telegram opcionales, configurados exclusivamente en el servidor",
      pruebas: "Pruebas del motor y API con Node Test Runner",
      repositorio: "https://github.com/Franc-Devel/system-flow"
    }
  },
  {
    id: "api-clima",
    title: "FAUVOR Clima",
    subtitle: "Clima por Ciudad con React y APIs Meteorológicas",
    category: "frontend",
    categoryLabel: "Consumo de APIs & Web",
    tags: ["React / JS", "Vite", "Open-Meteo", "APIs en Vivo", "Forecast 7D", "Bootstrap"],
    status: "pinned",
    statusLabel: "Repo Fijado en GitHub",
    pinned: true,
    image: "images/projects/weather-dashboard-fauvor.webp",
    repository: "https://github.com/Franc-Devel/apiClima",
    liveUrl: "https://github.com/Franc-Devel/apiClima",
    localAppUrl: "apps/meteo-clima/index.html",
    description: "Dashboard meteorológico interactivo para consulta del clima en vivo por ciudad. Integra consumo asíncrono del servicio Open-Meteo, geocodificación de coordenadas, indicadores climáticos (humedad, viento, presión) y pronóstico extendido a 7 días.",
    highlights: [
      "Consumo de datos meteorológicos en tiempo real con Open-Meteo API",
      "Búsqueda por ciudad con geolocalización de coordenadas",
      "Visualización de temperatura, estado del cielo, humedad, viento y presión",
      "Pronóstico a 7 días con interfaz clara y adaptativa"
    ],
    architecture: {
      tecnologia: "React / JavaScript ES6+ asíncrono con Vite",
      api: "Open-Meteo API (sin claves hardcodeadas ni fugas de secretos)",
      interfaz: "Diseño limpio con Bootstrap y tarjetas dinámicas",
      repositorio: "https://github.com/Franc-Devel/apiClima"
    }
  }
];
