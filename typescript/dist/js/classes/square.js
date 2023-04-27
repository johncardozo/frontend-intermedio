export class Square {
    constructor(color, side) {
        this.color = color;
        this.side = side;
    }
    draw() {
        const cssClass = `color: ${this.color};`;
        console.log(`%cThe square has an area of ${this.area()}`, cssClass);
    }
    area() {
        return Math.pow(this.side, 2);
    }
}
