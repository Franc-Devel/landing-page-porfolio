const readline = require("readline").createInterface({
  input: process.stdin,
  output: process.stdout,
});
const PASS_SISTEMA = "Bunker2026";

const pedirPass = () => {
  readline.question("Ingrese la contraseña de acceso: ", (input) => {
    if (input === PASS_SISTEMA) {
      console.log("[+] Verificación superada. Acceso concedido.");
      readline.close();
    } else {
      console.log("[-] Contraseña incorrecta.");
      pedirPass();
    }
  });
};
pedirPass();
