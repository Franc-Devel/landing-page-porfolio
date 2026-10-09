const readline = require("readline").createInterface({
  input: process.stdin,
  output: process.stdout,
});

readline.question("Ingrese su rol (admin, editor, invitado): ", (input) => {
  let rol = input.trim().toLowerCase();

  if (rol === "admin" || rol === "editor") {
    console.log(`[+] Acceso PERMITIDO. Bienvenido al panel de ${rol}.`);
  } else if (rol === "invitado") {
    console.log("[-] Acceso DENEGADO. Nivel de privilegios insuficiente.");
  } else {
    console.log("[!] Rol no reconocido en el sistema.");
  }

  readline.close();
});
