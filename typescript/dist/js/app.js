import { Student } from "./classes/student.js";
import { Teacher } from "./classes/teacher.js";
const s1 = new Student("Valeria", "Medina", 4.5);
console.log(s1);
console.log(s1.getFullName());
const t1 = new Teacher("Liliana", "Ramirez", "007");
console.log(t1);
console.log(t1.getFullName());
