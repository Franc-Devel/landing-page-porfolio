const readline = require("readline").createInterface({
  input: process.stdin,
  output: process.stdout,
});

const validar = () => {
  readline.question("Ingrese una edad válida (entre 18 y 99): ", (input) => {
    let edad = parseInt(input);
    if (isNaN(edad) || edad < 18 || edad > 99) {
      console.log("[-] Error: Rango de edad incorrecto.");
      validar();
    } else {
      console.log(`[+] Edad aceptada en el sistema: ${edad}`);
      readline.close();
    }
  });
};
validar();
