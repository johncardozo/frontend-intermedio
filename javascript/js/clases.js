// Definición de clase
// PascalCase
class Usuario {
  // Atributos privados
  #nombre;
  #edad;
  #ciudad;
  #activo;
  constructor(nombre, edad, ciudad) {
    this.#nombre = nombre;
    this.#edad = edad;
    this.#ciudad = ciudad;
    // Valor por defecto de un atributo
    this.#activo = true;
  }
  // Obtiene el valor de un atributo
  get nombre() {
    return this.#nombre;
  }
  // Modifica el valor de un atributo
  set nombre(nombre) {
    this.#nombre = nombre;
  }
  // Método de negocio
  esAdulto() {
    return this.#edad >= 18;
  }
  esActivo() {
    return this.#activo;
  }
}
// Creación de objetos
let objeto1 = new Usuario("Catalina", 21, "Melbourne");
let objeto2 = new Usuario("Andrea", 17, "Paris");
console.log(objeto1);
console.log(objeto2);
// Usa el get del atributo
console.log(objeto1.nombre);
// Usa el set del atributo
objeto1.nombre = "Diana";
console.log(objeto1);
// Uso de un método de negocio
console.log(objeto1.esAdulto());
console.log(objeto2.esAdulto());
console.log(objeto1.esActivo());
