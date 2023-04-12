console.log("OOP");

// Variable
let variable = 0;

// Array
let arreglo = [1, 2, 3];

// Objeto
// JSON -> JavaScript Object Notation
let usuario = {
  nombre: "Catalina",
  apellido: "Cardozo",
  edad: 21,
  activo: true,
  hobbies: ["music", "running", "reading"],
  ubicacion: {
    ciudad: "Melbourne",
    pais: "Australia",
  },
  // Método
  esAdulto() {
    return this.edad >= 18;
  },
};

console.log(usuario);

// Notación punto .
let n = usuario.nombre;
console.log(n);

// Notación llaves []
let e = usuario["edad"];
console.log(e);

console.log(usuario.esAdulto());

const NIVEL_BASICO = 1;
const NIVEL_INTERMEDIO = 2;
const NIVEL_AVANZADO = 3;

let curso = {
  materia: "programación",
  creditos: 4,
  estudiantes: ["Juan Pablo", "Andrés Mateo", "Eliana Paola"],
  nivel: NIVEL_INTERMEDIO,
};

console.log(curso);

// Modificar atributo de un objeto
curso.materia = "Frontend Intermedio";
console.log(curso);

// Si el tributo no existe, lo agrega
curso.universidad = "UDFJC";
console.log(curso);

// Eliminar un atributo de un objeto
delete curso.creditos;
console.log(curso);

// Verifica si un objeto tiene un atributo
let tieneNivel = curso.hasOwnProperty("nivel");
console.log(tieneNivel);

delete curso.nivel;

tieneNivel = curso.hasOwnProperty("nivel");
console.log(tieneNivel);

const pelicula1 = {
  titulo: "Titanic",
  anio: 1997,
};
console.log(pelicula1);
pelicula1.anio = 2000;
console.log(pelicula1);

const pelicula2 = {
  titulo: "Avatar 2",
  anio: 2023,
};
console.log(pelicula2);
// "congela" el objeto
Object.freeze(pelicula2);
// Genera un error dado que se intenta modificar
// una propiedad de un objeto "congelado"
pelicula2.anio = 1990;
console.log(pelicula2);
