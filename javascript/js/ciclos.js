// Ciclos de repetición
// while - do/while

// Ciclos de recorrido -> requiere lista, arreglo, matriz
// for tradicional, forEach, for in, for of

// ESTRUCTURA DE CICLO
// 1. Inicialización
// 2. Evaluación de expresión booleana
// 3. Instrucciones a ejecutar
// 4. Instrucción de rompimiento

// Si la expresión booleana nunca es false -> loop

// WHILE
let contador1 = 0;
while (contador1 < 5) {
  console.log(`El valor de contador1 es ${contador1}`);
  contador1++;
}
console.log("fin del while");

// DO/WHILE -> así la expresión booleana sea falsa, el ciclo se ejecuta una vez
let contador2 = 0;
do {
  console.log(`El valor de contador2 es ${contador2}`);
  contador2++;
} while (contador2 < 5);
console.log("fin del do/while");

// FOR TRADICIONAL
for (let contador3 = 0; contador3 < 5; contador3++) {
  console.log(`El valor de contador3 es ${contador3}`);
}
console.log("fin del for");

// Ejemplo de combinación de while + if
let contador4 = 0;
while (contador4 <= 100) {
  if (contador4 % 2 === 0) {
    console.log(contador4);
  }
  contador4++;
}

let contador5 = 0;
let acumulador = 0;
while (contador5 < 5) {
  console.log(`sumando ${contador5}`);
  acumulador += contador5;
  contador5++;
}
console.log(`El valor de la sumatoria es ${acumulador}`);
