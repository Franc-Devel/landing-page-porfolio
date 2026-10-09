const readline = require("readline").createInterface({
  input: process.stdin,
  output: process.stdout,
});

readline.question("Ingrese un número: ", (input) => {
  let numero = parseFloat(input);

  if (isNaN(numero)) {
    console.log("[!] Error: No ingresaste un número válido.");
  } else if (numero > 0) {
    console.log("[+] El número es POSITIVO.");
  } else if (numero < 0) {
    console.log("[-] El número es NEGATIVO.");
  } else {
    console.log("[0] El número es CERO.");
  }

  readline.close();
});
