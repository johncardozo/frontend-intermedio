console.log("arrow functions -> ECMAScript 6 = ES6");

// function
function mensaje1() {
  console.log("Mensaje 1");
}

// Arrow function de una instrucción
const mensaje2 = () => console.log("Mensaje 2");

// Arrow function de varias instrucciones
const mensaje3 = () => {
  console.log("Mensaje 3");
  console.log("En Arrow function");
};

/**
 * Calcula si la persona es adulto o niño dada su edad
 * @param {*} edad Edad de la persona
 * @returns La descripción de la persona
 */
const esAdultoV1 = (edad) => (edad >= 18 ? "Adulto" : "Niño");

function esAdultoV2(edad) {
  if (edad >= 18) {
    return "Adulto";
  } else {
    return "Niño";
  }
}

// Arrow function -> Una sola instrucción no necesita return
const sumarV1 = (numero1, numero2) => numero1 + numero2;

// Se puede usar return dentro de arrow function
const sumarV2 = (numero1, numero2) => {
  const resultado = numero1 + numero2;
  return resultado;
};

// Invocar o usar funciones
mensaje1();
mensaje2();
mensaje3();

console.log(esAdultoV1(10));
