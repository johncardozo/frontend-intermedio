// "Backend"
const peliculas = [
  { id: 1, titulo: "Pulp Fiction" },
  { id: 2, titulo: "Kill Bill" },
  { id: 3, titulo: "Once upon a time in Hollywwod" },
];

const getPeliculas = () => {
  setTimeout(() => {
    peliculas.forEach((p) => console.log(p.titulo));
  }, 3000);
};

const crearPelicula = (pelicula) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      // Agrega la pelicula al arreglo
      peliculas.push(pelicula);
      let error = false;
      if (error) {
        reject("No se pudo agregar la pelicula");
      } else {
        resolve("La pelicula se agregó");
      }
    }, 2000);
  });
};
const nuevaPelicula = {
  id: 4,
  titulo: "Inglorious Basterds",
};

console.time("ejecucion");

// Utiliza la promesa
crearPelicula(nuevaPelicula)
  .then(getPeliculas)
  .catch((error) => {
    console.log(error);
  })
  .finally(() => {
    console.log("finally");
    console.timeEnd("ejecucion");
  });

console.log("Continua la ejecución");

let u = 9;

6 = u;
