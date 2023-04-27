// Clase: PascalCase
// variables, métodos: camelCase
// 1- Incluir letras y números
// 2- No empieza con un número
// 3- No incluye espacios
// 4- Incluye _ o $

export class Training {
  constructor(
    public type: string,
    readonly distance: number,
    public date: string,
    private comments: string = ""
  ) {}
}
