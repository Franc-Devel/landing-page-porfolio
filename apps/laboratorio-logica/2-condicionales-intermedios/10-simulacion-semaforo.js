const readline = require("readline").createInterface({
  input: process.stdin,
  output: process.stdout,
});

readline.question("Color del semáforo (rojo, amarillo, verde): ", (input) => {
  let color = input.trim().toLowerCase();

  if (color === "rojo") {
    console.log("[!] Acción: DETENERSE COMPLETAMENTE.");
  } else if (color === "amarillo") {
    console.log("[!] Acción: PRECAUCIÓN (Reducir velocidad).");
  } else if (color === "verde") {
    console.log("[+] Acción: AVANZAR.");
  } else {
    console.log("[-] Error: Color de señalética no reconocido por el sensor.");
  }

  readline.close();
});
