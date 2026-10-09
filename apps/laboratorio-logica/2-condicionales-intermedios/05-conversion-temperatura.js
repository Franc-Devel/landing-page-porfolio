const readline = require("readline").createInterface({
  input: process.stdin,
  output: process.stdout,
});

readline.question(
  "¿Qué unidad ingresará? (C para Celsius, F para Fahrenheit): ",
  (unidadInput) => {
    readline.question("Ingrese los grados: ", (gradosInput) => {
      let unidad = unidadInput.trim().toUpperCase();
      let temp = parseFloat(gradosInput);

      if (isNaN(temp) || (unidad !== "C" && unidad !== "F")) {
        console.log("[!] Error en la entrada de datos.");
      } else {
        let tempCelsius = unidad === "C" ? temp : ((temp - 32) * 5) / 9;
        let tempFah = unidad === "F" ? temp : (temp * 9) / 5 + 32;

        console.log(
          `[+] Conversión: ${tempCelsius.toFixed(1)}°C equivale a ${tempFah.toFixed(1)}°F`,
        );

        if (tempCelsius < 35) {
          console.log("[!] Alerta médica: Hipotermia.");
        } else if (tempCelsius > 37.5) {
          console.log("[!] Alerta médica: Fiebre.");
        } else {
          console.log("[+] Temperatura corporal normal.");
        }
      }

      readline.close();
    });
  },
);
