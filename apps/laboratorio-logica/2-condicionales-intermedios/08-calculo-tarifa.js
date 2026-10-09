const readline = require("readline").createInterface({
  input: process.stdin,
  output: process.stdout,
});

readline.question("Ingrese la distancia del envío en Km: ", (input) => {
  let distancia = parseFloat(input);

  if (isNaN(distancia) || distancia < 0) {
    console.log("[!] Distancia inválida.");
  } else if (distancia <= 10) {
    console.log("[+] Tarifa base de envío: $50");
  } else if (distancia <= 50) {
    console.log("[+] Tarifa media de envío: $100");
  } else {
    console.log("[+] Tarifa de larga distancia: $200");
  }

  readline.close();
});
