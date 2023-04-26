// Definición de una clase
class Training {
  type: string;
  distance: number;
  date: string;

  // type, distance, date
  // type, distance
  // type
  // sin parámetros
  constructor(
    type: string = "Training run",
    distance: number = 0,
    date: string = "today"
  ) {
    this.type = type;
    this.distance = distance;
    this.date = date;
  }
}
// Sobrecarga de constructores
const t1 = new Training("Long run", 21, "2023-04-20");
const t2 = new Training("Intervals", 8, "2023-04-21");
const t3 = new Training("Long run", 10, "2023-04-22");
const t4 = new Training("Long run", 10);
const t5 = new Training("Intervals");
const t6 = new Training();

console.log(t1);
console.log(t2);
console.log(t3);
console.log(t4);
console.log(t5);
console.log(t6);
