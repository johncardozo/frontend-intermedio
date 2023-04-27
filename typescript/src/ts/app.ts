import { Circle } from "./classes/circle.js";
import { Triangle } from "./classes/triangle.js";
import { Square } from "./classes/square.js";
import { IShape } from "./interfaces/ishape.js";

// Define un objeto por su interface
let shape1, shape2: IShape;

// Crea objetos que implementan la interface
shape1 = new Square("red", 4);
shape2 = new Circle("lime", 2);

// Invoca métodos definidos en la interface
console.log(`El area del cuadrado es ${shape1.area()}`);
console.log(`El area del circulo es ${shape2.area()}`);

shape1.draw();
shape2.draw();

// Arreglo de objetos con que cumplen con la interface
let shapes: IShape[] = [];

// Agrega objetos que cumplen con la interface
shapes.push(new Circle("magenta", 10));
shapes.push(new Square("cyan", 5));
shapes.push(new Circle("orange", 5));
shapes.push(new Triangle("white", 2, 3));
shapes.push(new Circle("green", 5));
shapes.push(new Triangle("gray", 10, 20));
shapes.push(new Circle("green", 5));

// Invoca el método de cada objeto que está definido por la interface
shapes.forEach((shape) => shape.draw());
