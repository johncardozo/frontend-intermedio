// Definición de una clase
class Training {
  type: string = "";
  distance: number = 0;
  date: string = "";
}

// Crea o instancia un nuevo objeto
const t1 = new Training();
const t2 = new Training();
// Modifica las propiedades de un objeto
t1.distance = 10;
t2.distance = 21;

console.log(t1);
console.log(t2);

// Obtiene el valor de una propiedad de un objeto
console.log(t1.distance);
