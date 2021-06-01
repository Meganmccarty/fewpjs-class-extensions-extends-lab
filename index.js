class Polygon {
    constructor(sides) {
        this.sides = sides;
    }

    get countSides() {
        return this.sides.length;
    }

    get perimeter() {
        return this.sides.reduce((accumulator, side) => { return accumulator += side}, 0);
    }
}

class Triangle extends Polygon {
    get isValid() {
        const side1 = this.sides[0];
        const side2 = this.sides[1];
        const side3 = this.sides[2];

        if (side1 + side2 > side3 && side2 + side3 > side1 && side3 + side1 > side2) {
            return true;
        } else {
            return false;
        }
    }
}

class Square extends Polygon {
    get isValid() {
        const side1 = this.sides[0];
        const side2 = this.sides[1];
        const side3 = this.sides[2];
        const side4 = this.sides[3];

        if (side1 === side2 && side1 === side3 && side1 === side4) {
            return true;
        } else {
            return false;
        }
    }

    get area() {
        return this.sides[0] * this.sides[1];
    }
}