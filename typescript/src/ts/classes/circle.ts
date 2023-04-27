import { IShape } from "../interfaces/ishape.js";

export class Circle implements IShape {
  constructor(public color: string, public radio: number) {}
  draw(): void {
    const cssClass = `color: ${this.color};`;
    console.log(`%cThe circle has an area of ${this.area()}`, cssClass);
  }
  area(): number {
    return Math.PI * Math.pow(this.radio, 2);
  }
}
