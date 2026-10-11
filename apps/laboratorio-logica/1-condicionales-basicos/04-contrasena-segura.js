const readline = require("readline").createInterface({
  input: process.stdin,
  output: process.stdout,
});

const PASS_GUARDADA = "Root1234!";

readline.question("Ingrese la contraseña: ", (input) => {
  if (input === PASS_GUARDADA) {
    console.log("[+] Acceso concedido. Las contraseñas coinciden.");
  } else {
    console.log("[-] Acceso denegado. Contraseña incorrecta.");
  }

  readline.close();
});
