// Tipo implícito -> JS Style
let edad = 60;
console.log(edad);
console.log(typeof edad);

edad = 40;
console.log(edad);

// Tipo explícito -> TS Style
// Tipos primitivos: number, string, boolean
let months: number;
let firstName: string;
let isAdult: boolean;

// Tipo Union
let identificador: number | string;

// Acepta los tipos de datos definidos en el Union
identificador = 3;
identificador = "Catalina";

// Tipo Alias
type StringOrNumber = string | number;

// Definir una variable con un alias
let variable: StringOrNumber;

variable = 3;
variable = "Frontend";

console.log(variable);

// Tipo any
let dato: any;

dato = 10;
dato = "Backend";
dato = false;
