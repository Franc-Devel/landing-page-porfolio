const readline = require("readline").createInterface({
  input: process.stdin,
  output: process.stdout,
});

readline.question("Ingrese su edad: ", (input) => {
  let edad = parseInt(input);

  if (isNaN(edad) || edad < 0) {
    console.log("[!] Error: Por favor ingresa una edad válida.");
  } else if (edad >= 16) {
    // Nota: En Argentina el voto es opcional desde los 16 y obligatorio desde los 18.
    // Ajusta este límite a 18 si el ejercicio requiere una lógica más estricta.
    console.log("[+] Tienes edad suficiente para votar.");
  } else {
    console.log("[-] Aún no tienes edad para votar.");
  }

  readline.close();
});
