// Declaración de variables
// JS acerpta comilla simple y doble para strings
let frase1 = "Hello world";
console.log(frase1);

// Combinación de comilla simple y doble
let frase2 = 'qué "quiere" decir eso?';
let frase3 = "I don't know";
console.log(frase2);
console.log(frase3);

// Escapar caracteres
// let frase4 = "qué \"quiere\" decir eso?";
// let frase5 = 'I don\'t know';
let frase6 = "Universidad\nDistrital\nFJC";
console.log(frase6);

let frase7 = "c:\\nomina\\texto.xls";
console.log(frase7);

// Concatenación -> +
let pelicula = "Star " + "Wars";
console.log(pelicula);

pelicula += ": The Return of the Jedi";
console.log(pelicula);

// Concatenar con otros tipos de datos
let year = 1983;
pelicula = pelicula + " - " + year;
console.log(pelicula);

let number1 = "10";
let number2 = "30";

// Convertir str en number con parseInt()
let value1 = parseInt(number1);
let value2 = parseInt(number2);

let result1 = number1 + number2;
console.log(result1);

let result2 = value1 + value2;
console.log(result2);

// Convertir str en number con Number()
let value3 = Number(number1);
console.log(value3);
console.log(typeof value3);

// Emojis
let mensaje1 = "Carita feliz 😊";
console.log(mensaje1);

// Longitud de un string -> length
let mensaje2 = "Universidad Distrital";
let longitud = mensaje2.length;
console.log(longitud);

// Acceso a un caracter dado su subíndice
let caracter1 = mensaje2[0];
console.log(caracter1);

// No modifica el caracter: es inmutable.
mensaje2[0] = "X";
console.log(mensaje2);

// Extraer una cadena
let emojis = "hola😎mundo";
console.log(emojis.substring(4, 6));

// Templates y Literales
let nombre = "Catalina";
let edad = 21;
let mensaje3 = "La estudiante " + nombre + " tiene " + edad + " años";
console.log(mensaje3);
let mensaje4 = `La estudiante ${nombre} 
tiene ${edad} años`;
console.log(mensaje4);
