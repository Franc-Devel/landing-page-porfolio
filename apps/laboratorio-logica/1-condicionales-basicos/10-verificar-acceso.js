const readline = require("readline").createInterface({
  input: process.stdin,
  output: process.stdout,
});

const USER_DB = "admin";
const PASS_DB = "1234";

readline.question("Usuario: ", (usuario) => {
  readline.question("Contraseña: ", (password) => {
    if (usuario === USER_DB && password === PASS_DB) {
      console.log("[+] Verificación exitosa. Bienvenido al sistema.");
    } else {
      console.log("[-] Error: Credenciales incorrectas.");
    }

    readline.close();
  });
});
