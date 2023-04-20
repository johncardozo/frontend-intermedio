const hayValor = true;
// Función tradicional anónima por parámetro
let mensaje = new Promise(function (resolve, reject) {
  if (hayValor) {
    resolve("Sí hay un valor");
  } else {
    reject("ERROR! No hay un valor disponible");
  }
});
console.log(mensaje);
// Función arrow anónima por parámetro
let mensaje2 = new Promise((resolve, reject) => {
  reject("ERROR 1");
});
console.log(mensaje2);

// Fucnión separada del constructor de Promise
function manejador(resolve, reject) {
  reject("ERROR 2");
}
let mensaje3 = new Promise(manejador);
console.log(mensaje3);
