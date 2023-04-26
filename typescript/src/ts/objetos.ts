// Definición de una clase
class Training {
  constructor(
    public _type: string = "Training run",
    readonly _distance: number = 0,
    public _date: string = "today",
    private _comments = ""
  ) {}

  public get comments() {
    return this._comments;
  }

  public set comments(newComment) {
    this._comments = newComment;
  }

  /**
   * Formats the training for a better view.
   * @returns A formatted training
   */
  format() {
    return `On ${this._date} I did ${this._type} for ${this._distance} kms -> ${this._comments}`;
  }
}

// Sobrecarga de constructores
const t1 = new Training("Long run", 21, "2023-04-20");
const t2 = new Training("Intervals", 8, "2023-04-21");
const t3 = new Training("Long run", 10, "2023-04-22");
const t4 = new Training("Long run", 10);
const t5 = new Training("Intervals");
const t6 = new Training();
t6._date = "2024-01-01";

console.log(t1);
console.log(t1._distance);
// setter
t1.comments = "The race was wonderful";
// getter
console.log(t1.comments);

// Genera un error porque la propiedad es de solo lectura
// y no se puede modificar
//t1.distance = 42;

// Use de un método de un objeto
console.log(t1.format());

// Declaración de arreglo de objetos
let trainings: Training[] = [];

// Agrega objetos al arreglo
trainings.push(t1);
trainings.push(t2);
trainings.push(t3);
trainings.push(t4);
trainings.push(t5);
trainings.push(t6);
trainings.push(new Training("Long run", 42, "2023-04-26"));

// Recorre el arreglo de objetos
trainings.forEach((training) => console.log(training.format()));
