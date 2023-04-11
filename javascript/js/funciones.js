// Definición de una función
function mensaje() {
  console.log("Universidad");
  console.log("Distrital");
}

// Definición de función con parámetros
function mensajeParametros(nombre) {
  console.log("Universidad");
  console.log(nombre);
}

/**
 * Calcular la suma entre los valores recibidos por parámetro
 * @param {*} numero1 Primer número
 * @param {*} numero2 Segundo número
 * @returns Suma de los números recibidos
 */
function sumar(numero1, numero2) {
  const resultado = numero1 + numero2;
  return resultado;
}

function restar(numero1, numero2) {
  const resultado = numero1 - numero2;
  return resultado;
}

// Invocar función simple
mensaje();

// Invocar una función con parámetros
mensajeParametros("Distrital");
mensajeParametros("de Los Andes");
mensajeParametros("Nacional");
mensajeParametros("de La Sabana");

// Invocar función con parámetros y con valor de retorno
let r1 = sumar(10, 20);
console.log(r1);
let r2 = sumar(100, 200);
console.log(r2);

/**
 * Calcula el área del triángulo dada su base y altura.
 * @param {*} base base del triángulo
 * @param {*} altura altura del triángulo
 * @returns El área del triángulo
 */
function calcularAreaTriangulo(base, altura) {
  // Calcula y retorna el área del triángulo
  return (base * altura) / 2;
}

function incrementarV1(valor, incremento) {
  if (typeof incremento === "undefined") {
    return valor + 1;
  } else {
    return valor + incremento;
  }
}

function incrementarV2(valor, incremento = 1) {
  return valor + incremento;
}

let r3 = incrementarV1(4, 2);
console.log(r3);
let r4 = incrementarV1(4);
console.log(r4);
let r5 = incrementarV2(4, 3);
console.log(r5);
let r6 = incrementarV2(4);
console.log(r6);

let area = calcularAreaTriangulo(3, 4);
console.log(`El área del triángulo es ${area}`);
