const readline = require("readline").createInterface({
  input: process.stdin,
  output: process.stdout,
});

readline.question("Ingrese su edad: ", (edadInput) => {
  readline.question(
    "Clasificación de la película (+13 o +18): ",
    (clasifInput) => {
      let edad = parseInt(edadInput);
      let clasificacion = clasifInput.trim();

      if (isNaN(edad)) {
        console.log("[!] Edad inválida.");
      } else if (clasificacion === "+18" && edad >= 18) {
        console.log("[+] Boleto emitido. Puede ingresar a la sala.");
      } else if (clasificacion === "+13" && edad >= 13) {
        console.log("[+] Boleto emitido. Puede ingresar a la sala.");
      } else {
        console.log("[-] Acceso denegado por restricciones de edad.");
      }

      readline.close();
    },
  );
});
