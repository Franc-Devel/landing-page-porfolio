const readline = require("readline").createInterface({
  input: process.stdin,
  output: process.stdout,
});
let sumaPromedio = 0;
let contador = 0;

const pedirParaPromedio = () => {
  readline.question(
    "Ingrese un número (o 'fin' para calcular el promedio): ",
    (input) => {
      if (input.trim().toLowerCase() === "fin") {
        if (contador > 0) {
          console.log(
            `[+] El promedio de los ${contador} números es: ${sumaPromedio / contador}`,
          );
        } else {
          console.log("[!] No se ingresaron números.");
        }
        return readline.close();
      }

      let num = parseFloat(input);
      if (!isNaN(num)) {
        sumaPromedio += num;
        contador++;
      }
      pedirParaPromedio();
    },
  );
};
pedirParaPromedio();
