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

// Obtiene una posición en el arreglo
console.log(numeros.at(-1));
console.log(numeros.at(-2));

// Concatenar arreglos
let nuevos = [12, 13, 22];
let concatenado = numeros.concat(nuevos);
console.log("concatenado", concatenado);

// Funciones avanzadas
let valores = [100, 200, 300, 400];
console.log(valores);

// reduce -> aplica una función retornado un valor
let res1 = valores.reduce((x, y) => x + y);
console.log(res1);

// map -> aplica una función a cada elemento del arreglo
let res2 = valores.map((valor) => valor + 1);
console.log(res2);

let notas = [4.5, 3.4, 2.1, 3.9, 1.5, 4.8, 0.6];
let res3 = notas.map((nota) => {
  if (nota > 3) {
    return true;
  } else {
    return false;
  }
});
console.log(notas);
console.log(res3);

let res4 = notas.map((nota) => (nota > 3 ? true : false));
console.log(res4);

let res5 = notas.map((nota) => nota > 3);
console.log(res5);

// Longitud
let longitud = notas.length;
console.log(longitud);

// Ordenar un arreglo
notas.sort();
console.log(notas);

// Invertir un arreglo
notas.reverse();
console.log(notas);

// Chaining
notas.sort().reverse();
console.log(notas);

// forEach
const elementos = [11, 20, 33, 40];
let mensaje = "";
elementos.forEach((e) => {
  mensaje += e + " | ";
});
console.log(mensaje);

// every -> true | false -> AND a todos los elementos
let todos = elementos.every((elemento) => elemento % 2 === 0);
console.log("Todos", todos);

// some -> true | false -> OR a todos los elementos
let alguno = elementos.some((elemento) => elemento === 50);
console.log("Alguno", alguno);

// Filter
let filtrados = elementos.filter((elemento) => elemento % 2 === 0);
console.log("Filtro", filtrados);

const elementoAEliminar = 20;
let filtrados2 = elementos.filter((elemento) => elemento !== elementoAEliminar);
console.log("Filtro2", filtrados2);
