const readline = require("readline").createInterface({
  input: process.stdin,
  output: process.stdout,
});

readline.question("Ingrese su edad: ", (input) => {
  let edad = parseInt(input);

  if (isNaN(edad) || edad < 0) {
    console.log("[!] Error: Edad no válida.");
  } else if (edad <= 12) {
    console.log("[+] Clasificación: Niño");
  } else if (edad <= 17) {
    console.log("[+] Clasificación: Adolescente");
  } else if (edad <= 59) {
    console.log("[+] Clasificación: Adulto");
  } else {
    console.log("[+] Clasificación: Adulto Mayor");
  }

  readline.close();
});
