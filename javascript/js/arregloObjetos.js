let coleccion = [
  {
    artista: "ACDC",
    anio: 1980,
    cantante: "Bon Scott",
    formatos: ["LP", "CD", "MP3", "Streaming"],
  },
  {
    artista: "Guns and Roses",
    anio: 1991,
    cantante: "Axl Rose",
  },
  { artista: "Queen", anio: 1978, cantante: "Fredy Mercury" },
];

console.log(coleccion[1].artista);
console.log("%cARTISTAS", "font-size: 20px; color: lime;");
// Recorre un arreglo de objetos
coleccion.forEach((item) => console.log(item.artista));
// Muestra el arreglo en forma tabla en DevTools
console.table(coleccion);

// Iterar sobre un arreglo de un objeto del arreglo principal
coleccion[0].formatos.forEach((f) =>
  console.log(`%cEl formato es ${f}`, "color: yellow")
);
let curso = "Frontend Intermedio";
console.log("%cFIN", "font-size: 15px; color: magenta;", curso);
