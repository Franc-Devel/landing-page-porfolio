const readline = require("readline").createInterface({
  input: process.stdin,
  output: process.stdout,
});
let suma = 0;

const pedirNumero = () => {
  if (suma >= 100) {
    console.log(`[+] Límite alcanzado. La suma total es: ${suma}`);
    return readline.close();
  }
  readline.question(
    `Suma actual: ${suma}. Ingrese un número a sumar: `,
    (input) => {
      let num = parseFloat(input);
      if (!isNaN(num)) suma += num;
      pedirNumero();
    },
  );
};
pedirNumero();
