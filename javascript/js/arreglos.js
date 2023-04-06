console.log("arreglos");

// Variable
let variable = 2;
console.log(variable);

// Arreglo vacío
let elementos1 = [];
console.log(elementos1);
console.log(typeof elementos1);

// Arreglo con valores inicializados
let elementos2 = [10, 20, 30];
console.log(elementos2);

// Diferentes tipos de dato
let elementos3 = [10, 20, 3.4, "Catalina", true];
console.log(elementos3);

// Obtener/Modificar valores de un arreglo
let elementos4 = [100, 200, 300, 800, 50];
console.log(elementos4);
// Obtener un valor del arreglo
let primero = elementos4[3];
console.log(primero);
// Modificar valor en el arreglo
elementos4[1] = 500;
console.log(elementos4);

// Copia de un arreglo
// Valor
let a = 5;
let b = a; // b -> 5
a = 6; // a -> 6
console.log(a, b);

// Referencia
console.log("--- No se debe hacer ---");
let original = [1, 2, 3];
let copia = original; // No se debe hacer
original.pop();
console.log("original", original);
console.log("copia", copia);

// Operador Spread ... -> EcmaScript 6
console.log("--- ECMAScript 6 ---");
let original1 = [1, 2, 3];
let copia1 = [...original1]; // Copia el arreglo
original1.pop();
console.log("original", original1);
console.log("copia", copia1);

let nuevo1 = [...original1, ...copia1];
console.log(nuevo1);

let nuevo2 = [10, 20, ...original, 30, ...copia1];
console.log(nuevo2);

// Copia el arreglo
console.log("Copia con slice");
let original2 = [20, 30, 40];
let copia2 = original2.slice();
console.log("original2", original2);
console.log("copia2", copia2);

let original3 = [10, 20, 30, 40, 50, 60, 70];
let copia3 = original3.slice(2, 6); // No incluye el 4
console.log("original3", original3);
console.log("copia3", copia3);

// AGREGAR ELEMENTOS
console.log("---- MODIFICACION DEL ARREGLO -----");
let numeros = [10, 20, 30, 40, 50, 60, 70, 80];
console.log("numeros", numeros);

// Agregar elemento al inicio
numeros.unshift(50);
console.log("unshift: inserta al inicio");
console.log("numeros", numeros);

// Agregar un elemento al final
numeros.push(45);
console.log("push: inserta al final");
console.log("numeros", numeros);

// Agregar elemento en una posición
// posición, 0 = no borre elementos, valor
numeros.splice(2, 0, 100);
console.log("splice: inserta en una posición");
console.log("numeros", numeros);

// Eliminar el primer elemento
numeros.shift();
console.log("shift: elimina la primera posición");
console.log("numeros", numeros);

// Eliminar el último elemento
numeros.pop();
console.log("pop: elimina la última posición");
console.log("numeros", numeros);

// Eliminar una posición
// posición, cantidad de elementos
numeros.splice(3, 1);
console.log("splice: elimina una posición");
console.log("numeros", numeros);
