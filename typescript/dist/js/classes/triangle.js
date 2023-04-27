export class Triangle {
    constructor(color, base, height) {
        this.color = color;
        this.base = base;
        this.height = height;
    }
    draw() {
        const cssClass = `color: ${this.color};`;
        console.log(`%cThe triangle has an area of ${this.area()}`, cssClass);
    }
    area() {
        return (this.base * this.height) / 2;
    }
}
