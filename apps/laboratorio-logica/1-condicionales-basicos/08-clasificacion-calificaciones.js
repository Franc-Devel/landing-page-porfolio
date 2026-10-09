const readline = require("readline").createInterface({
  input: process.stdin,
  output: process.stdout,
});

readline.question("Ingrese la calificación (0 al 10): ", (input) => {
  let nota = parseFloat(input);

  if (isNaN(nota) || nota < 0 || nota > 10) {
    console.log(
      "[!] Error: Ingresa una calificación válida en el rango de 0 a 10.",
    );
  } else if (nota >= 9) {
    console.log("[+] Excelente");
  } else if (nota >= 6) {
    console.log("[+] Aprobado");
  } else {
    console.log("[-] Reprobado");
  }

  readline.close();
});
