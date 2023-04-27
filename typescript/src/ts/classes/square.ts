import { IShape } from "../interfaces/ishape.js";

export class Square implements IShape {
  constructor(public color: string, public side: number) {}
  draw(): void {
    const cssClass = `color: ${this.color};`;
    console.log(`%cThe square has an area of ${this.area()}`, cssClass);
  }
  area(): number {
    return Math.pow(this.side, 2);
  }
}
