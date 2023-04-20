const promesa = new Promise((resolve, reject) => {
  // Parametro 1 -> función
  // Parámetro 2 -> milisegundos
  // setTimeout(() => reject(new Error("Oops")), 3000);
  setTimeout(() => resolve("excelente"), 3000);
});

console.log(promesa);

// then es una función.
promesa
  .then((resultado) => {
    console.log(resultado);
    console.log(promesa);
  })
  .catch((error) => {
    console.log(error);
    console.log(promesa);
  })
  .finally(() => {
    console.log("Esto se ejecuta al finalizar la promesa ");
  });

console.log("Terminamos!");
