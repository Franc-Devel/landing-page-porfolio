const readline = require("readline").createInterface({
  input: process.stdin,
  output: process.stdout,
});

readline.question("Ingrese el monto total de la compra: $", (input) => {
  let monto = parseFloat(input);

  if (isNaN(monto) || monto < 0) {
    console.log("[!] Error: Monto inválido.");
  } else {
    if (monto > 100) {
      let descuento = monto * 0.1;
      let total = monto - descuento;
      // .toFixed(2) limita los decimales a 2 para formato de moneda
      console.log(`[+] Descuento aplicado (10%): $${descuento.toFixed(2)}`);
      console.log(`[+] Total a pagar: $${total.toFixed(2)}`);
    } else {
      console.log(
        `[!] No aplica descuento. Total a pagar: $${monto.toFixed(2)}`,
      );
    }
  }

  readline.close();
});
