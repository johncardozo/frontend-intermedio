// Ejemplo con arreglos
let arreglo = ["Cata", 21, true];
arreglo[0] = 20;
arreglo[2] = "Mary";
console.log(arreglo);

// Definición de un tuple
let tuple1: [string, number, boolean];
let tuple2: [string, number] = ["Emilio", 13];

// Modifica el tuple
tuple1 = ["Valeria", 10, false];

// Modific un valor del tuple
tuple1[1] = 100;
tuple2[0] = "Luciana";

console.log(tuple1);
console.log(tuple2);
