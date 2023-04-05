let x = 3;

// Una sola opción
if (x === 5) {
  console.log("x es igual a 5");
}

// Dos opciones
if (x === 3) {
  console.log("x es igual a 3");
} else {
  console.log("x es diferente a 3");
}

// Muchas opciones
if (x === 1) {
  console.log("X vale 1");
} else if (x === 2) {
  console.log("X vale 2");
} else if (x === 3) {
  console.log("X vale 3");
} else {
  console.log("no fue ninguna");
}

if (x === 1) {
  console.log("X vale 1");
}
if (x === 2) {
  console.log("X vale 2");
}
if (x === 3) {
  console.log("X vale 3");
}

if (x === 1) console.log("X vale 1");
if (x === 2) console.log("X vale 2");
if (x === 3) console.log("X vale 3");

let a = 4;
let r = 0;
if (a === 9) {
  r = 8;
} else {
  r = 5;
}
// Expresión ternaria
// expresion booleana ? true : false
r = a === 9 ? 8 : 5;
console.log(`Valor final de r = ${r}`);

let mensaje = a % 2 === 0 ? "es par" : "es impar";
console.log(`${a} ${mensaje}`);

// Definición de constantes
const LUNES = 1;
const MARTES = 2;
const MIERCOLES = 3;
const JUEVES = 4;

// Switch
const dia = MARTES;
switch (dia) {
  case LUNES:
    console.log("dia es lunes");
    break;
  case MARTES:
    console.log("dia es martes");
    break;
  case MIERCOLES:
    console.log("dia es miércoles");
    break;
  case JUEVES:
    console.log("dia es jueves");
    break;

  default:
    console.log("No es una día válido");
    break;
}
console.log("Final del switch");

// switch(true) pattern
let var1 = 15;
let var2 = 10;
switch (true) {
  case var1 === 5:
    console.log("Var1 es mayor a 5");
    break;
  case var1 >= 6 && var1 <= 10:
    console.log("var1 está entre 6 y 10");
    break;
  case var2 === 5:
    console.log("var2 es 5");
    break;
  case var2 === 20 || var2 === 10:
    console.log("var2 es 20 o 10");
    break;
  default:
    console.log("No se cumplió con nada");
    break;
}
