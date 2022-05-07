class Rectangle {
	constructor(width, height) {
		this._width = width;
		this._height = height;
	}

	get width() {
		return this._width;
	}

	get height() {
		return this._height;
	}

	set width(value) {
		this._width = value;
	}

	set height(value) {
		this._height = value;
	}

	get area() {
		return this._width * this._height;
	}
	// Create checks in base class for square
	get isSquare() {
		return this._width === this._height;
	}

	toString() {
		return `${this._width}cm x ${this._height}cm = ${this.area}cm`;
	}
}

// Bad practice - violates Liskov Substitution Principle
// Derives class breaks functionality of base class
class Square extends Rectangle {
	constructor(size) {
		super(size, size);
	}

	set width(value) {
		this._width = this._height = value;
	}

	set height(value) {
		this._height = this._width = value;
	}
}

let useIt = rc => {
	let width = rc._width;
	rc.height = 10;
	console.log(`Expected area: ${width * 10}cm, actual area: ${rc.area}cm`);
}

let rc = new Rectangle(10, 20);
useIt(rc);
console.log(rc.toString());

let sq = new Square(10);
useIt(sq);
console.log(sq.toString());