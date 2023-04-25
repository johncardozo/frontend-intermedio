// Definición de objeto con valores predeterminados
let movie1 = {
  title: "Django Unchained",
  year: 2012,
};

console.log(movie1);

movie1.title = "Pulp Fiction";
movie1.year = 1990;
// Genera error de tipos
//movie1.year = "1994";

console.log(movie1);

// Definición de caracterpisticas del objeto con tipos de propiedades
let movie2: {
  title: string;
  year: number;
};

// Creación del objeto
movie2 = {
  title: "ABC",
  year: 123,
};

movie2.title = "xyz";
movie2.year = 456;

// Genera un error de estructura
// movie2 = {
//   title: "DEF",
// };

// Genera un error de estructura
// movie2 = {
//   title: "DEF",
//   year: 2020,
//   genre: "comedy"
// };

// Genera error de estructura
//movie2.genre = "comedy"
