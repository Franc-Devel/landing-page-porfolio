const fs = require("fs");
const path = require("path");

// Estructura de carpetas y archivos basada en tus requerimientos
const projectStructure = {
  "1-condicionales-basicos": [
    "01-positivo-negativo.js",
    "02-edad-votar.js",
    "03-par-impar.js",
    "04-contrasena-segura.js",
    "05-mayor-tres-numeros.js",
    "06-calculadora-basica.js",
    "07-anio-bisiesto.js",
    "08-clasificacion-calificaciones.js",
    "09-precio-descuento.js",
    "10-verificar-acceso.js",
  ],
  "2-condicionales-intermedios": [
    "01-clasificador-edades.js",
    "02-validar-fecha.js",
    "03-verificacion-roles.js",
    "04-impuestos-ingreso.js",
    "05-conversion-temperatura.js",
    "06-juego-adivinanza.js",
    "07-evaluar-contrasena.js",
    "08-calculo-tarifa.js",
    "09-clasificacion-peliculas.js",
    "10-simulacion-semaforo.js",
  ],
  "3-bucles": [
    "01-contar-1-a-10.js",
    "02-sumatoria-simple.js",
    "03-tabla-multiplicar.js",
    "04-pares-1-a-100.js",
    "05-cuenta-regresiva.js",
    "06-numero-aleatorio.js",
    "07-sumar-hasta-100.js",
    "08-contar-vocales.js",
    "09-validar-edad.js",
    "10-secuencia-creciente.js",
    "11-menu-interactivo.js",
    "12-solicitar-contrasena.js",
    "13-ingreso-calificaciones.js",
    "14-confirmar-accion.js",
    "15-promedio-numeros.js",
  ],
};

// Contenido base para cada archivo generado
const baseContent = `// Título del Ejercicio\n// TODO: Implementar lógica aquí\n\nconsole.log("Archivo inicializado correctamente.");\n`;

console.log("Iniciando construcción de la estructura del proyecto...\n");

Object.keys(projectStructure).forEach((folder) => {
  const folderPath = path.join(__dirname, folder);

  // Crear la carpeta si no existe
  if (!fs.existsSync(folderPath)) {
    fs.mkdirSync(folderPath);
    console.log(`[+] Carpeta creada: ${folder}`);
  } else {
    console.log(`[!] La carpeta ya existe: ${folder}`);
  }

  // Crear los archivos dentro de la carpeta
  projectStructure[folder].forEach((file) => {
    const filePath = path.join(folderPath, file);
    if (!fs.existsSync(filePath)) {
      fs.writeFileSync(filePath, baseContent, "utf8");
      console.log(`  ├── Archivo generado: ${file}`);
    } else {
      console.log(`  ├── [!] El archivo ya existe: ${file}`);
    }
  });
});

console.log("\nConstrucción finalizada. Estructura lista para codificar.");
