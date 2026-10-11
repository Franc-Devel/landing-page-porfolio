const readline = require("readline").createInterface({
  input: process.stdin,
  output: process.stdout,
});

readline.question("Ingrese el número para generar su tabla: ", (input) => {
  let base = parseInt(input);
  if (!isNaN(base)) {
    console.log(`> Tabla del ${base}:`);
    for (let i = 1; i <= 10; i++) console.log(`${base} x ${i} = ${base * i}`);
  } else {
    console.log("[!] Número inválido.");
  }
  readline.close();
});
