const readline = require("readline").createInterface({
  input: process.stdin,
  output: process.stdout,
});
let anterior = -Infinity;
let esCreciente = true;

console.log(
  "> Ingrese números para verificar la secuencia. Escriba 0 para terminar.",
);

const pedirSecuencia = () => {
  readline.question("Número: ", (input) => {
    let num = parseFloat(input);
    if (num === 0) {
      if (esCreciente)
        console.log("[+] La secuencia ingresada es ESTRICTAMENTE CRECIENTE.");
      else
        console.log(
          "[-] La secuencia ingresada NO es estrictamente creciente.",
        );
      return readline.close();
    }

    if (!isNaN(num)) {
      if (num <= anterior) esCreciente = false;
      anterior = num;
    }
    pedirSecuencia();
  });
};
pedirSecuencia();
