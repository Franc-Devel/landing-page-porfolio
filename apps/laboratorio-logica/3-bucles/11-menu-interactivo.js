const readline = require("readline").createInterface({
  input: process.stdin,
  output: process.stdout,
});

const mostrarMenu = () => {
  console.log("\n--- MENÚ INTERACTIVO ---");
  console.log("1. Mostrar estado");
  console.log("2. Ejecutar diagnóstico");
  console.log("3. Salir");

  readline.question("Elija una opción: ", (opcion) => {
    if (opcion === "1") {
      console.log("[+] Estado: Sistema operando normalmente.");
      mostrarMenu();
    } else if (opcion === "2") {
      console.log("[+] Diagnóstico: 0 errores encontrados.");
      mostrarMenu();
    } else if (opcion === "3") {
      console.log("> Cerrando sesión...");
      readline.close();
    } else {
      console.log("[!] Opción inválida.");
      mostrarMenu();
    }
  });
};
mostrarMenu();
