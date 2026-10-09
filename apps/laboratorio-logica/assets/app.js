// ==========================================
// MOTOR DE INTERFAZ GRÁFICA (UI)
// ==========================================

// Base de datos de ejercicios estructurada por fase
const dbEjercicios = {
  1: [
    { id: "01", nombre: "01 - Positivo o Negativo" },
    { id: "02", nombre: "02 - Edad para Votar" },
    { id: "03", nombre: "03 - Número Par o Impar" },
    { id: "04", nombre: "04 - Contraseña Segura" },
    { id: "05", nombre: "05 - Mayor de Tres Números" },
    { id: "06", nombre: "06 - Calculadora Básica" },
    { id: "07", nombre: "07 - Año Bisiesto" },
    { id: "08", nombre: "08 - Clasif. de Calificaciones" },
    { id: "09", nombre: "09 - Precio con Descuento" },
    { id: "10", nombre: "10 - Verificar Acceso" },
  ],
  2: [
    { id: "2-01", nombre: "01 - Clasificador de Edades" },
    { id: "2-02", nombre: "02 - Validar Fecha" },
    { id: "2-03", nombre: "03 - Verificación de Roles" },
    { id: "2-04", nombre: "04 - Impuestos por Ingreso" },
    { id: "2-05", nombre: "05 - Conversión de Temperatura" },
    { id: "2-06", nombre: "06 - Juego de Adivinanza" },
    { id: "2-07", nombre: "07 - Evaluar Contraseña" },
    { id: "2-08", nombre: "08 - Cálculo de Tarifa" },
    { id: "2-09", nombre: "09 - Clasificación de Películas" },
    { id: "2-10", nombre: "10 - Simulación de Semáforo" },
  ],
  3: [
    { id: "3-01", nombre: "01 - Contar del 1 al 10" },
    { id: "3-02", nombre: "02 - Sumatoria Simple" },
    { id: "3-03", nombre: "03 - Tabla de Multiplicar" },
    { id: "3-04", nombre: "04 - Pares entre 1 y 100" },
    { id: "3-05", nombre: "05 - Cuenta Regresiva" },
    { id: "3-06", nombre: "06 - Adivinar Número (Bucle)" },
    { id: "3-07", nombre: "07 - Sumar hasta 100" },
    { id: "3-08", nombre: "08 - Contar Vocales" },
    { id: "3-09", nombre: "09 - Validar Edad (18-99)" },
    { id: "3-10", nombre: "10 - Secuencia Creciente" },
    { id: "3-11", nombre: "11 - Menú Interactivo" },
    { id: "3-12", nombre: "12 - Solicitar Contraseña" },
    { id: "3-13", nombre: "13 - Ingreso de Calificaciones" },
    { id: "3-14", nombre: "14 - Confirmar Acción" },
    { id: "3-15", nombre: "15 - Promedio de Números" },
  ],
};

const selectDOM = document.getElementById("ejercicioSelect");
const botonesFase = document.querySelectorAll(".nav-link");

// Función para cargar las opciones dinámicamente
function cargarOpciones(fase) {
  selectDOM.innerHTML = ""; // Limpiamos las opciones anteriores
  dbEjercicios[fase].forEach((ejercicio) => {
    const option = document.createElement("option");
    option.value = ejercicio.id;
    option.textContent = ejercicio.nombre;
    selectDOM.appendChild(option);
  });
}

// Inicializar el panel con la Fase 1 por defecto
cargarOpciones("1");

// Escuchar los clicks en los botones de fase
botonesFase.forEach((boton) => {
  boton.addEventListener("click", (e) => {
    // Quitar la clase 'active' de todos los botones
    botonesFase.forEach((b) => b.classList.remove("active"));
    // Agregar la clase 'active' al botón clickeado
    e.target.classList.add("active");
    // Leer el atributo 'data-fase' y cargar sus opciones
    const faseSeleccionada = e.target.getAttribute("data-fase");
    cargarOpciones(faseSeleccionada);
  });
});

// ==========================================
// LÓGICA DE EJECUCIÓN MATEMÁTICA
// ==========================================

document.getElementById("btnEjecutar").addEventListener("click", () => {
  const seleccion = selectDOM.value;
  const terminal = document.getElementById("terminal");

  const print = (texto) => {
    terminal.innerHTML += `\n${texto}`;
  };

  terminal.innerHTML = `> Ejecutando módulo ${seleccion}...`;

  switch (seleccion) {
    // === FASE 1 ===
    case "01":
      let num1 = parseFloat(prompt("Ingrese un número:"));
      if (isNaN(num1)) print("[!] Error: No ingresaste un número válido.");
      else if (num1 > 0) print("[+] El número es POSITIVO.");
      else if (num1 < 0) print("[-] El número es NEGATIVO.");
      else print("[0] El número es CERO.");
      break;

    case "02":
      let edad = parseInt(prompt("Ingrese su edad:"));
      if (isNaN(edad) || edad < 0) print("[!] Error: Edad inválida.");
      else if (edad >= 16) print("[+] Tienes edad suficiente para votar.");
      else print("[-] Aún no tienes edad para votar.");
      break;

    case "03":
      let num3 = parseInt(prompt("Ingrese un número entero:"));
      if (isNaN(num3)) print("[!] Error: Ingresa un número válido.");
      else if (num3 % 2 === 0) print(`[+] El número ${num3} es PAR.`);
      else print(`[-] El número ${num3} es IMPAR.`);
      break;

    case "04":
      const passGuardada = "Root1234!";
      let inputPass = prompt("Ingrese la contraseña:");
      if (inputPass === passGuardada)
        print("[+] Acceso concedido. Las contraseñas coinciden.");
      else print("[-] Acceso denegado. Contraseña incorrecta.");
      break;

    case "05":
      let n1 = parseFloat(prompt("Ingrese el primer número:"));
      let n2 = parseFloat(prompt("Ingrese el segundo número:"));
      let n3 = parseFloat(prompt("Ingrese el tercer número:"));
      if (isNaN(n1) || isNaN(n2) || isNaN(n3))
        print("[!] Error: Todos los valores deben ser numéricos.");
      else print(`[+] El número mayor es: ${Math.max(n1, n2, n3)}`);
      break;

    case "06":
      let op = prompt("Operación (+, -, *, /):");
      let a = parseFloat(prompt("Primer número:"));
      let b = parseFloat(prompt("Segundo número:"));
      if (isNaN(a) || isNaN(b)) print("[!] Error: Ingresa números válidos.");
      else {
        if (op === "+") print(`Resultado: ${a + b}`);
        else if (op === "-") print(`Resultado: ${a - b}`);
        else if (op === "*") print(`Resultado: ${a * b}`);
        else if (op === "/") {
          if (b === 0) print("[-] Error: División por cero.");
          else print(`Resultado: ${a / b}`);
        } else print("[!] Operación no reconocida.");
      }
      break;

    case "07":
      let anio = parseInt(prompt("Ingrese un año para verificar:"));
      if (isNaN(anio)) print("[!] Error: Ingresa un año válido.");
      else if ((anio % 4 === 0 && anio % 100 !== 0) || anio % 400 === 0)
        print(`[+] El año ${anio} es BISIESTO.`);
      else print(`[-] El año ${anio} NO es bisiesto.`);
      break;

    case "08":
      let nota = parseFloat(prompt("Ingrese la calificación (0 al 10):"));
      if (isNaN(nota) || nota < 0 || nota > 10)
        print("[!] Error: Calificación fuera de rango.");
      else if (nota >= 9) print("[+] Excelente");
      else if (nota >= 6) print("[+] Aprobado");
      else print("[-] Reprobado");
      break;

    case "09":
      let monto = parseFloat(prompt("Ingrese el monto de la compra: $"));
      if (isNaN(monto) || monto < 0) print("[!] Error: Monto inválido.");
      else {
        if (monto > 100) {
          let desc = monto * 0.1;
          print(`[+] Descuento aplicado: $${desc.toFixed(2)}`);
          print(`[+] Total a pagar: $${(monto - desc).toFixed(2)}`);
        } else {
          print(`[!] Sin descuento. Total a pagar: $${monto.toFixed(2)}`);
        }
      }
      break;

    case "10":
      let user = prompt("Usuario:");
      let pwd = prompt("Contraseña:");
      if (user === "admin" && pwd === "1234")
        print("[+] Verificación exitosa. Bienvenido.");
      else print("[-] Error: Credenciales incorrectas.");
      break;

    // === FASE 2 ===
    case "2-01":
      let edadClasif = parseInt(prompt("Ingrese su edad:"));
      if (isNaN(edadClasif) || edadClasif < 0)
        print("[!] Error: Edad no válida.");
      else if (edadClasif <= 12) print("[+] Clasificación: Niño");
      else if (edadClasif <= 17) print("[+] Clasificación: Adolescente");
      else if (edadClasif <= 59) print("[+] Clasificación: Adulto");
      else print("[+] Clasificación: Adulto Mayor");
      break;

    case "2-02":
      let d = parseInt(prompt("Día (1-31):"));
      let m = parseInt(prompt("Mes (1-12):"));
      let an = parseInt(prompt("Año (ej: 2026):"));
      if (
        isNaN(d) ||
        isNaN(m) ||
        isNaN(an) ||
        d < 1 ||
        m < 1 ||
        m > 12 ||
        an < 1
      ) {
        print("[-] Fecha inválida (formato incorrecto).");
      } else {
        let diasMaximos = 31;
        if (m === 4 || m === 6 || m === 9 || m === 11) diasMaximos = 30;
        else if (m === 2) {
          let esBisiesto = (an % 4 === 0 && an % 100 !== 0) || an % 400 === 0;
          diasMaximos = esBisiesto ? 29 : 28;
        }
        if (d <= diasMaximos) print(`[+] La fecha ${d}/${m}/${an} es VÁLIDA.`);
        else
          print(
            `[-] La fecha ${d}/${m}/${an} es INVÁLIDA (El mes ${m} no tiene ${d} días).`,
          );
      }
      break;

    case "2-03":
      let usuarioRol = prompt(
        "Ingrese su rol (admin, editor, invitado):",
      ).toLowerCase();
      if (usuarioRol === "admin" || usuarioRol === "editor")
        print(`[+] Acceso PERMITIDO. Bienvenido al panel de ${usuarioRol}.`);
      else if (usuarioRol === "invitado")
        print("[-] Acceso DENEGADO. Nivel de privilegios insuficiente.");
      else print("[!] Rol no reconocido en el sistema.");
      break;

    case "2-04":
      let ingreso = parseFloat(prompt("Ingrese su salario mensual: $"));
      if (isNaN(ingreso) || ingreso < 0) print("[!] Error: Monto inválido.");
      else {
        if (ingreso < 1000) print(`[+] Libre de impuestos. Neto: $${ingreso}`);
        else if (ingreso <= 5000)
          print(
            `[!] Impuesto aplicado (10%): $${ingreso * 0.1} | Neto: $${ingreso * 0.9}`,
          );
        else
          print(
            `[!] Impuesto aplicado (20%): $${ingreso * 0.2} | Neto: $${ingreso * 0.8}`,
          );
      }
      break;

    case "2-05":
      let unidad = prompt(
        "¿Qué ingresará? (C para Celsius, F para Fahrenheit):",
      ).toUpperCase();
      let temp = parseFloat(prompt("Ingrese los grados:"));
      if (isNaN(temp) || (unidad !== "C" && unidad !== "F"))
        print("[!] Error en la entrada de datos.");
      else {
        let tempCelsius = unidad === "C" ? temp : ((temp - 32) * 5) / 9;
        let tempFah = unidad === "F" ? temp : (temp * 9) / 5 + 32;
        print(
          `[+] Conversión: ${tempCelsius.toFixed(1)}°C equivale a ${tempFah.toFixed(1)}°F`,
        );
        if (tempCelsius < 35) print("[!] Alerta médica: Hipotermia.");
        else if (tempCelsius > 37.5) print("[!] Alerta médica: Fiebre.");
        else print("[+] Temperatura corporal normal.");
      }
      break;

    case "2-06":
      let numAzar = Math.floor(Math.random() * 10) + 1;
      let intento = parseInt(
        prompt("Adivina el número del sistema (del 1 al 10):"),
      );
      if (isNaN(intento)) print("[!] Entrada no válida.");
      else if (intento === numAzar)
        print(`[+] ¡BINGO! El número era ${numAzar}.`);
      else if (intento > numAzar)
        print(`[-] Fallaste. Ingresaste MAYOR al objetivo.`);
      else print(`[-] Fallaste. Ingresaste MENOR al objetivo.`);
      print(`> (El número oculto era ${numAzar})`);
      break;

    case "2-07":
      let password = prompt("Ingrese una nueva contraseña:");
      let tieneMayuscula = /[A-Z]/.test(password);
      let tieneNumero = /[0-9]/.test(password);
      let tieneSimbolo = /[^A-Za-z0-9]/.test(password);
      if (password.length >= 8 && tieneMayuscula && tieneNumero && tieneSimbolo)
        print("[+] Nivel de seguridad: ALTO. Contraseña aceptada.");
      else {
        print("[-] Nivel de seguridad: BAJO. La contraseña fue rechazada.");
        print(
          "> Requisitos mínimos: 8 caracteres, 1 mayúscula, 1 número y 1 símbolo.",
        );
      }
      break;

    case "2-08":
      let distancia = parseFloat(
        prompt("Ingrese la distancia del envío en Km:"),
      );
      if (isNaN(distancia) || distancia < 0) print("[!] Distancia inválida.");
      else if (distancia <= 10) print(`[+] Tarifa base de envío: $50`);
      else if (distancia <= 50) print(`[+] Tarifa media de envío: $100`);
      else print(`[+] Tarifa larga distancia: $200`);
      break;

    case "2-09":
      let edadCine = parseInt(prompt("Ingrese su edad:"));
      let clasificacion = prompt("Clasificación de la película (+13 o +18):");
      if (isNaN(edadCine)) print("[!] Edad inválida.");
      else if (clasificacion === "+18" && edadCine >= 18)
        print("[+] Boleto emitido. Puede ingresar a la sala.");
      else if (clasificacion === "+13" && edadCine >= 13)
        print("[+] Boleto emitido. Puede ingresar a la sala.");
      else print("[-] Acceso denegado por restricciones de edad.");
      break;

    case "2-10":
      let color = prompt(
        "Color del semáforo (rojo, amarillo, verde):",
      ).toLowerCase();
      if (color === "rojo") print("[!] Acción: DETENERSE COMPLETAMENTE.");
      else if (color === "amarillo")
        print("[!] Acción: PRECAUCIÓN (Reducir velocidad).");
      else if (color === "verde") print("[+] Acción: AVANZAR.");
      else print("[-] Error: Color de señalética no reconocido por el sensor.");
      break;

    // === FASE 3 ===
    case "3-01":
      print("> Contando del 1 al 10:");
      for (let i = 1; i <= 10; i++) print(`Número: ${i}`);
      break;

    case "3-02":
      let sumaNaturales = 0;
      for (let i = 1; i <= 50; i++) sumaNaturales += i;
      print(
        `[+] La suma de los primeros 50 números naturales es: ${sumaNaturales}`,
      );
      break;

    case "3-03":
      let baseMultiplicar = parseInt(
        prompt("Ingrese el número para generar su tabla:"),
      );
      if (isNaN(baseMultiplicar)) print("[!] Número inválido.");
      else {
        print(`> Tabla del ${baseMultiplicar}:`);
        for (let i = 1; i <= 10; i++)
          print(`${baseMultiplicar} x ${i} = ${baseMultiplicar * i}`);
      }
      break;

    case "3-04":
      print("> Números pares entre 1 y 100:");
      let paresArray = [];
      for (let i = 1; i <= 100; i++) {
        if (i % 2 === 0) paresArray.push(i);
      }
      print(paresArray.join(", "));
      break;

    case "3-05":
      print("> Cuenta regresiva iniciada:");
      for (let i = 10; i >= 0; i--) print(`T-minus: ${i}`);
      break;

    case "3-06":
      let target = Math.floor(Math.random() * 10) + 1;
      let intentoBucle;
      let intentosCount = 0;
      do {
        intentoBucle = parseInt(prompt("Adivina el número (1 al 10):"));
        intentosCount++;
      } while (intentoBucle !== target && !isNaN(intentoBucle));
      print(
        `[+] ¡Acertaste! El número era ${target}. Te tomó ${intentosCount} intentos.`,
      );
      break;

    case "3-07":
      let sumaCien = 0;
      while (sumaCien < 100) {
        let numAIngresar = parseFloat(
          prompt(`Suma actual: ${sumaCien}. Ingrese número a sumar:`),
        );
        if (!isNaN(numAIngresar)) sumaCien += numAIngresar;
      }
      print(`[+] ¡Límite alcanzado! La suma final es: ${sumaCien}`);
      break;

    case "3-08":
      let palabra = prompt("Ingrese una palabra:");
      let vocalesMatch = palabra.match(/[aeiouáéíóú]/gi);
      let cantidadVocales = vocalesMatch ? vocalesMatch.length : 0;
      print(`[+] La palabra '${palabra}' tiene ${cantidadVocales} vocales.`);
      break;

    case "3-09":
      let edadValida;
      do {
        edadValida = parseInt(
          prompt("Ingrese una edad válida (entre 18 y 99):"),
        );
      } while (isNaN(edadValida) || edadValida < 18 || edadValida > 99);
      print(`[+] Edad validada exitosamente en el sistema: ${edadValida}`);
      break;

    case "3-10":
      let esCreciente = true;
      let numeroAnterior = -Infinity;
      let inputSecuencia;
      print(
        "> Ingrese números para verificar la secuencia. Escriba 0 para terminar.",
      );
      while (true) {
        inputSecuencia = parseFloat(
          prompt("Ingrese un número (0 para terminar):"),
        );
        if (inputSecuencia === 0) break;
        if (!isNaN(inputSecuencia)) {
          if (inputSecuencia <= numeroAnterior) esCreciente = false;
          numeroAnterior = inputSecuencia;
        }
      }
      if (esCreciente)
        print("[+] La secuencia ingresada es ESTRICTAMENTE CRECIENTE.");
      else print("[-] La secuencia ingresada NO es estrictamente creciente.");
      break;

    case "3-11":
      let opcionMenu;
      do {
        opcionMenu = prompt(
          "--- MENÚ INTERACTIVO ---\n1. Mostrar estado\n2. Ejecutar diagnóstico\n3. Salir\n\nElija una opción:",
        );
        if (opcionMenu === "1")
          print("[+] Estado: Sistema operando normalmente.");
        else if (opcionMenu === "2")
          print("[+] Diagnóstico: 0 errores encontrados.");
        else if (opcionMenu !== "3") print("[!] Opción inválida.");
      } while (opcionMenu !== "3");
      print("> Saliendo del menú interactivo...");
      break;

    case "3-12":
      const passwordObjetivo = "Bunker2026";
      let passIngresada;
      do {
        passIngresada = prompt("Ingrese la contraseña de acceso:");
      } while (passIngresada !== passwordObjetivo);
      print("[+] Verificación superada. Acceso concedido al sistema.");
      break;

    case "3-13":
      let calificaciones = [];
      let notaActual;
      do {
        notaActual = parseFloat(
          prompt("Ingrese una calificación (valor negativo para finalizar):"),
        );
        if (!isNaN(notaActual) && notaActual >= 0)
          calificaciones.push(notaActual);
      } while (notaActual >= 0);
      print(
        `[+] Ingreso finalizado. Calificaciones registradas: ${calificaciones.join(", ")}`,
      );
      break;

    case "3-14":
      let respuestaConf;
      do {
        respuestaConf = prompt(
          "¿Desea aplicar los cambios? (si/no):",
        ).toLowerCase();
      } while (respuestaConf === "no");
      print("[+] Acción confirmada por el usuario. Aplicando cambios...");
      break;

    case "3-15":
      let sumaPromedio = 0;
      let contadorPromedio = 0;
      let entradaUsuario;
      do {
        entradaUsuario = prompt(
          "Ingrese un número para promediar (o 'fin' para calcular):",
        );
        if (entradaUsuario.toLowerCase() !== "fin") {
          let num = parseFloat(entradaUsuario);
          if (!isNaN(num)) {
            sumaPromedio += num;
            contadorPromedio++;
          }
        }
      } while (entradaUsuario.toLowerCase() !== "fin");

      if (contadorPromedio > 0)
        print(
          `[+] El promedio de los números ingresados es: ${sumaPromedio / contadorPromedio}`,
        );
      else print("[!] No se ingresaron números válidos para promediar.");
      break;

    default:
      print("[!] Ejercicio no encontrado en la base de datos.");
      break;
  }
});
