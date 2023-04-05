console.log("Serie de Fibonacci");

// Inicialización de las variables
const n = 8;
let primero = 0;
let anterior = 1;
let fibonacci = 0;
let contador = 0;
while (contador < n) {
  console.log(`${primero} + ${anterior} = ${primero + anterior}`);
  // Calcula el valor actual de la serie
  fibonacci = anterior + primero;

  // Cambio de variables
  primero = anterior;
  anterior = fibonacci;

  // Incremento del contador
  contador++;
}
console.log(`Fibonacci de ${n} es ${fibonacci}`);
