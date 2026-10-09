const readline = require("readline").createInterface({
  input: process.stdin,
  output: process.stdout,
});
let notas = [];

const pedirNota = () => {
  readline.question(
    "Ingrese una calificación (valor negativo para finalizar): ",
    (input) => {
      let nota = parseFloat(input);
      if (isNaN(nota)) {
        pedirNota();
      } else if (nota < 0) {
        console.log(
          `[+] Carga finalizada. Notas registradas: ${notas.join(", ")}`,
        );
        readline.close();
      } else {
        notas.push(nota);
        pedirNota();
      }
    },
  );
};
pedirNota();
