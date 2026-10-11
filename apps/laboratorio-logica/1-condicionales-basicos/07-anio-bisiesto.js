const readline = require("readline").createInterface({
  input: process.stdin,
  output: process.stdout,
});

readline.question("Ingrese un año para verificar: ", (input) => {
  let anio = parseInt(input);

  if (isNaN(anio)) {
    console.log("[!] Error: Ingresa un año válido.");
  } else if ((anio % 4 === 0 && anio % 100 !== 0) || anio % 400 === 0) {
    // La regla dice: Divisible por 4, pero no por 100, a menos que sea divisible por 400
    console.log(`[+] El año ${anio} es BISIESTO.`);
  } else {
    console.log(`[-] El año ${anio} NO es bisiesto.`);
  }

  readline.close();
});
