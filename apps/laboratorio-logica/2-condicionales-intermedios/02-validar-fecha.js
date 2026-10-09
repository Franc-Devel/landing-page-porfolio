const readline = require("readline").createInterface({
  input: process.stdin,
  output: process.stdout,
});

readline.question("Ingrese el día (1-31): ", (diaInput) => {
  readline.question("Ingrese el mes (1-12): ", (mesInput) => {
    readline.question("Ingrese el año (ej: 2026): ", (anioInput) => {
      let d = parseInt(diaInput);
      let m = parseInt(mesInput);
      let a = parseInt(anioInput);

      if (
        isNaN(d) ||
        isNaN(m) ||
        isNaN(a) ||
        d < 1 ||
        m < 1 ||
        m > 12 ||
        a < 1
      ) {
        console.log("[-] Fecha inválida (formato incorrecto).");
      } else {
        let diasMaximos = 31;

        if (m === 4 || m === 6 || m === 9 || m === 11) {
          diasMaximos = 30;
        } else if (m === 2) {
          let esBisiesto = (a % 4 === 0 && a % 100 !== 0) || a % 400 === 0;
          diasMaximos = esBisiesto ? 29 : 28;
        }

        if (d <= diasMaximos) {
          console.log(`[+] La fecha ${d}/${m}/${a} es VÁLIDA.`);
        } else {
          console.log(
            `[-] La fecha ${d}/${m}/${a} es INVÁLIDA (El mes ${m} no tiene ${d} días).`,
          );
        }
      }

      readline.close();
    });
  });
});
