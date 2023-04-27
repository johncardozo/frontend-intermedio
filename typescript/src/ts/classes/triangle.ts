import { IShape } from "../interfaces/ishape.js";

export class Triangle implements IShape {
  constructor(
    public color: string,
    public base: number,
    public height: number
  ) {}
  draw(): void {
    const cssClass = `color: ${this.color};`;
    console.log(`%cThe triangle has an area of ${this.area()}`, cssClass);
  }
  area(): number {
    return (this.base * this.height) / 2;
  }
}
