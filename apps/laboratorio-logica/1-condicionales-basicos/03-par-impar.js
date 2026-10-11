const readline = require("readline").createInterface({
  input: process.stdin,
  output: process.stdout,
});

readline.question("Ingrese un número entero: ", (input) => {
  let numero = parseInt(input);

  if (isNaN(numero)) {
    console.log("[!] Error: Ingresa un número válido.");
  } else if (numero % 2 === 0) {
    // El operador módulo (%) devuelve el resto de una división. Si el resto al dividir por 2 es 0, es par.
    console.log(`[+] El número ${numero} es PAR.`);
  } else {
    console.log(`[-] El número ${numero} es IMPAR.`);
  }

  readline.close();
});
