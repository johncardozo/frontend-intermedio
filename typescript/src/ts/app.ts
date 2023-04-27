import { Person } from "./classes/person.js";
import { Student } from "./classes/student.js";
import { Teacher } from "./classes/teacher.js";

// objeto Student que hereda de Person
const s1: Person = new Student("Valeria", "Medina", 4.5);
console.log(s1);
console.log(s1.getFullName());

// objeto Teacher que hereda de Person
const t1: Person = new Teacher("Liliana", "Ramirez", "007");
console.log(t1);
console.log(t1.getFullName());
