"use strict";
console.log("funciones");
const mensaje = () => {
    console.log("Hello from a function");
};
const areaCirculo = (radio) => {
    const area = Math.PI * Math.pow(radio, 2);
    return area;
};
function areaTriangulo() {
    console.log("Area del triangulo");
}
let area;
area = areaCirculo(10);
console.log(area);
console.log(typeof area);
function mensaje2(msg) {
    console.log(msg);
}
mensaje2(100);
mensaje2("abc");
function mensaje3(msg) {
    console.log(msg);
}
mensaje3(20);
mensaje3("20");
const incrementarV1 = (valor1, valor2) => {
    return valor2 ? valor1 + valor2 : valor1 + 1;
};
let r1 = incrementarV1(10, 20);
console.log(r1);
let r2 = incrementarV1(100);
console.log(r2);
const incrementarV2 = (valor1, valor2 = 10) => {
    return valor1 + valor2;
};
let r3 = incrementarV2(10, 20);
console.log(r3);
let r4 = incrementarV2(200);
console.log(r4);
let mostrarMensaje;
mostrarMensaje = (nombre, apellido) => {
    console.log(`${nombre} ${apellido}`);
};
mostrarMensaje("Eliana", "Giraldo");
