const readline = require("readline").createInterface({
  input: process.stdin,
  output: process.stdout,
});

readline.question("Ingrese su salario mensual: $", (input) => {
  let ingreso = parseFloat(input);

  if (isNaN(ingreso) || ingreso < 0) {
    console.log("[!] Error: Monto inválido.");
  } else if (ingreso < 1000) {
    console.log(`[+] Libre de impuestos. Neto: $${ingreso.toFixed(2)}`);
  } else if (ingreso <= 5000) {
    let impuesto = ingreso * 0.1;
    console.log(
      `[!] Impuesto (10%): $${impuesto.toFixed(2)} | Neto: $${(ingreso - impuesto).toFixed(2)}`,
    );
  } else {
    let impuesto = ingreso * 0.2;
    console.log(
      `[!] Impuesto (20%): $${impuesto.toFixed(2)} | Neto: $${(ingreso - impuesto).toFixed(2)}`,
    );
  }

  readline.close();
});
