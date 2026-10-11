const readline = require("readline").createInterface({
  input: process.stdin,
  output: process.stdout,
});

readline.question("Ingrese el primer número: ", (num1) => {
  readline.question("Ingrese el segundo número: ", (num2) => {
    readline.question("Ingrese el tercer número: ", (num3) => {
      let n1 = parseFloat(num1);
      let n2 = parseFloat(num2);
      let n3 = parseFloat(num3);

      if (isNaN(n1) || isNaN(n2) || isNaN(n3)) {
        console.log("[!] Error: Todos los valores deben ser numéricos.");
      } else {
        // Math.max es una herramienta nativa ideal para no hacer un if interminable
        let mayor = Math.max(n1, n2, n3);
        console.log(`[+] El número mayor es: ${mayor}`);
      }

      readline.close();
    });
  });
});
