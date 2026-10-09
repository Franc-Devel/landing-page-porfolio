const readline = require("readline").createInterface({
  input: process.stdin,
  output: process.stdout,
});

// Genera un número aleatorio entre 1 y 10
const numAzar = Math.floor(Math.random() * 10) + 1;

readline.question("Adivina el número del sistema (del 1 al 10): ", (input) => {
  let intento = parseInt(input);

  if (isNaN(intento)) {
    console.log("[!] Entrada no válida.");
  } else if (intento === numAzar) {
    console.log(`[+] ¡BINGO! El número era ${numAzar}.`);
  } else if (intento > numAzar) {
    console.log(
      `[-] Fallaste. El número ingresado (${intento}) es MAYOR al objetivo.`,
    );
  } else {
    console.log(
      `[-] Fallaste. El número ingresado (${intento}) es MENOR al objetivo.`,
    );
  }

  if (intento !== numAzar && !isNaN(intento)) {
    console.log(`> (El número oculto era ${numAzar})`);
  }

  readline.close();
});
