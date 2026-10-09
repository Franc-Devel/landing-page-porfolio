const readline = require("readline").createInterface({
  input: process.stdin,
  output: process.stdout,
});

readline.question("Ingrese una nueva contraseña: ", (password) => {
  let tieneMayuscula = /[A-Z]/.test(password);
  let tieneNumero = /[0-9]/.test(password);
  let tieneSimbolo = /[^A-Za-z0-9]/.test(password);

  if (password.length >= 8 && tieneMayuscula && tieneNumero && tieneSimbolo) {
    console.log("[+] Nivel de seguridad: ALTO. Contraseña aceptada.");
  } else {
    console.log("[-] Nivel de seguridad: BAJO. La contraseña fue rechazada.");
    console.log(
      "> Requisitos mínimos: 8 caracteres, 1 mayúscula, 1 número y 1 símbolo especial.",
    );
  }

  readline.close();
});
