const readline = require("readline").createInterface({
  input: process.stdin,
  output: process.stdout,
});

readline.question("Ingrese una palabra: ", (palabra) => {
  let matches = palabra.match(/[aeiouáéíóú]/gi);
  let cantidad = matches ? matches.length : 0;
  console.log(`[+] La palabra '${palabra}' tiene ${cantidad} vocales.`);
  readline.close();
});
