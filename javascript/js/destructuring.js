console.log("app");

// Objeto
const usuario = {
  nombre: "Catalina",
  edad: 21,
};

// Acceder a propiedades de forma tradicional
// const nombre = usuario.nombre;
// const edad = usuario.edad;

// Accede a propiedades con destructuring
const { nombre, edad } = usuario;

// Accede a propiedades con destructuring renombrando variables
const { nombre: firstName, edad: age } = usuario;

console.log(nombre);
console.log(edad);
console.log(firstName);
console.log(age);

// Objeto
const weather = {
  today: { min: 9, max: 20 },
  tomorrow: { min: 5, max: 10 },
};
// Accede a una propiedad compleja
const {
  tomorrow: { max },
} = weather;
// Accede a una propiedad compleja renombrando la variable
const {
  tomorrow: { max: maxTomorrow },
} = weather;

console.log(max);
console.log(maxTomorrow);

// Destructuring de parámetros de una función
function imprimirUbicacionV1(usuario) {
  console.log(usuario.ciudad, usuario.pais);
}
function imprimirUbicacionV2({ ciudad, pais }) {
  console.log(ciudad, pais);
}

const user = {
  nombre: "John",
  apellido: "Cardozo",
  ciudad: "Medellin",
  pais: "Colombia",
};

// Invocar la función
imprimirUbicacionV1(user);
imprimirUbicacionV2(user);

// SWAPING
// Tradicional
let a = 5;
let b = 10;

let temp = a; // temp = 5
a = b; // a = 10;
b = temp; // b = 5

// Swaping con destructuring
[a, b] = [b, a];

// Destructuring con arreglos
const numeros = [10, 20, undefined, 40, 50, 60, 70, 80, 90];
// Acceso por el subíndice -> tradicional
const primero = numeros[0];
const segundo = numeros[1];
// Acceso por destructuring
const [first, second] = numeros;
// Acceso por destructuring saltando posiciones
const [prim, seg, , cua, , , sep] = numeros;
// Destructuring con operador spread ...
const [p, , , q, ...resto] = numeros;
// Destructuring de una posición con un valor por default
const [, , l = 30] = numeros;
console.log(primero, segundo);
console.log(first, second);
console.log(prim, seg, cua, sep);
console.log(p);
console.log(q);
console.log(resto);
console.log(l);

// Convierte string a array y hace destructuring de cada posición en variables
const nombreCompleto = "Catalina Cardozo";
const [firstNames, lastNames] = nombreCompleto.split(" ");
console.log(firstNames);
console.log(lastNames);

// Destructuring de un arreglo retornado por una función
function calcular(numero1, numero2) {
  const suma = numero1 + numero2;
  const resta = numero1 > numero2 ? numero1 - numero2 : numero2 - numero1;
  const multiplicacion = numero1 * numero2;
  const division = numero1 / numero2;

  return [suma, resta, multiplicacion, division];
}

const [suma, resta, multiplicacion, division] = calcular(3, 9);
console.log(suma, resta, multiplicacion, division);

const [s, r, m, d] = calcular(2, 8);
console.log(s, r, m, d);

// Destructuring de un arreglo de objetos
const peliculas = [
  { id: 1, titulo: "Titanic" },
  { id: 2, titulo: "Terminator" },
  { id: 3, titulo: "Avatar" },
  { id: 4, titulo: "The Abyss", duracion: 120 },
];
const [{ titulo: titulo1 }, , { titulo: titulo2 }, { duracion }] = peliculas;
console.log(titulo1, titulo2, duracion);

// Forma tradicional
const t1 = peliculas[0].titulo;
const t2 = peliculas[2].titulo;
console.log(t1, t2);
