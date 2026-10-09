console.log("> Números pares entre 1 y 100:");
let pares = [];
for (let i = 1; i <= 100; i++) {
  if (i % 2 === 0) pares.push(i);
}
console.log(pares.join(", "));
