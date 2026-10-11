const readline = require("readline").createInterface({
  input: process.stdin,
  output: process.stdout,
});
const numAzar = Math.floor(Math.random() * 10) + 1;
let intentos = 0;

const preguntar = () => {
  readline.question("Adivina el número (1 al 10): ", (input) => {
    let intento = parseInt(input);
    intentos++;
    if (intento === numAzar) {
      console.log(
        `[+] ¡BINGO! El número era ${numAzar}. Te tomó ${intentos} intentos.`,
      );
      readline.close();
    } else {
      console.log("[-] Fallaste. Intenta de nuevo.");
      preguntar(); // Llamada recursiva (simula el bucle)
    }
  });
};
preguntar();
