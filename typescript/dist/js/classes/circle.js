export class Circle {
    constructor(color, radio) {
        this.color = color;
        this.radio = radio;
    }
    draw() {
        const cssClass = `color: ${this.color};`;
        console.log(`%cThe circle has an area of ${this.area()}`, cssClass);
    }
    area() {
        return Math.PI * Math.pow(this.radio, 2);
    }
}
