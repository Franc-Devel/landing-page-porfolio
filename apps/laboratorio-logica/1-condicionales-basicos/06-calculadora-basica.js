const readline = require("readline").createInterface({
  input: process.stdin,
  output: process.stdout,
});

console.log(
  "Operaciones disponibles: + (suma), - (resta), * (multiplicación), / (división)",
);

readline.question("Ingrese el símbolo de la operación: ", (operacion) => {
  readline.question("Ingrese el primer número: ", (n1) => {
    readline.question("Ingrese el segundo número: ", (n2) => {
      let a = parseFloat(n1);
      let b = parseFloat(n2);

      if (isNaN(a) || isNaN(b)) {
        console.log("[!] Error: Ingresa números válidos.");
      } else {
        if (operacion === "+") {
          console.log(`Resultado: ${a + b}`);
        } else if (operacion === "-") {
          console.log(`Resultado: ${a - b}`);
        } else if (operacion === "*") {
          console.log(`Resultado: ${a * b}`);
        } else if (operacion === "/") {
          if (b === 0) {
            console.log("[-] Error: No se puede dividir por cero.");
          } else {
            console.log(`Resultado: ${a / b}`);
          }
        } else {
          console.log("[!] Operación no reconocida.");
        }
      }

      readline.close();
    });
  });
});
