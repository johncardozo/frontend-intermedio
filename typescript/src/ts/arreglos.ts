console.log("arreglos");

// Arreglo con tipo de datos implícito
let heroes = ["batman", "wolverine", "superman"];
console.log(heroes);

// Genera error por tipo de dato
//heroes.push(100);
//heroes[1] = 200;

let notas = ["Diana", 4.8, "Angie", 4.9, "Juan Carlos", 4.0];
console.log(notas);
notas.push("Adriana");
notas.push(4.5);
console.log(notas);

// Genera error por tipo de dato
//notas.push(true);

// Arreglos con tipo explícito -> Inicializado!
let games: string[] = [];

games.push("StarCraft");
games.push("Quake");

console.log(games);

// Declaración de arreglo con tipo Union
let grades1: (string | number)[] = [];

grades1.push(10);
grades1.push("abc");
// Genera un error
//grades.push(false);

// Declaración de arreglo con tipo Alias
type Grade = string | number;
let grades2: Grade[] = [];
grades2.push(100);
grades2.push("xyz");
// Genera error de tipos
//grades2.push(false);
