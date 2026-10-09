const readline = require("readline").createInterface({
  input: process.stdin,
  output: process.stdout,
});

const confirmar = () => {
  readline.question("¿Desea aplicar los cambios? (si/no): ", (input) => {
    if (input.trim().toLowerCase() === "no") {
      console.log("[-] Acción cancelada. Volviendo a preguntar...");
      confirmar();
    } else {
      console.log("[+] Acción confirmada por el usuario. Aplicando cambios...");
      readline.close();
    }
  });
};
confirmar();
