console.log("funciones");

const mensaje = (): void => {
  console.log("Hello from a function");
};

const areaCirculo = (radio: number): number => {
  const area = Math.PI * Math.pow(radio, 2);
  return area;
};

function areaTriangulo() {
  console.log("Area del triangulo");
}

// Declaración de variables
let area: number;

// Obtiene el área del círculo
area = areaCirculo(10);

console.log(area);
console.log(typeof area);

// Parámetros de tipo union
function mensaje2(msg: string | number): void {
  console.log(msg);
}

mensaje2(100);
mensaje2("abc");
// Genera un error
//mensaje2(false);

type TipoMensaje = string | number;
// Parámetros de tipo Alias
function mensaje3(msg: TipoMensaje): void {
  console.log(msg);
}
mensaje3(20);
mensaje3("20");
// Genera un error
//mensaje3(false);

// Definición de parámetros opcionales
const incrementarV1 = (valor1: number, valor2?: number): number => {
  return valor2 ? valor1 + valor2 : valor1 + 1;
};

let r1: number = incrementarV1(10, 20);
console.log(r1);

let r2: number = incrementarV1(100);
console.log(r2);

// Definición de parámetros con valor por default
const incrementarV2 = (valor1: number, valor2: number = 10): number => {
  return valor1 + valor2;
};

let r3 = incrementarV2(10, 20);
console.log(r3);
let r4 = incrementarV2(200);
console.log(r4);

// Definición del signature de una función
let mostrarMensaje: (a: string, b: string) => void;

// Crea la función respetando la definición del signature
mostrarMensaje = (nombre: string, apellido: string) => {
  console.log(`${nombre} ${apellido}`);
};

// Invoca la función
mostrarMensaje("Eliana", "Giraldo");
