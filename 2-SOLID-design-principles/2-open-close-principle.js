let Color = Object.freeze({
	red: 'red',
	green: 'green',
	blue: 'blue',
});

let Size = Object.freeze({
	small: 'small',
	medium: 'medium',
	large: 'large',
});

class Product {
	constructor(name, color, size) {
		this.name = name;
		this.color = color;
		this.size = size;
	}
}

// Open for extension, closed for modification
class ProductFilter {
	filterByColor = (products, color) =>
		products.filter(product => product.color === color);
	filterBySize = (products, size) =>
		products.filter(product => product.size === size);
	filterBySizeAndColor = (products, size, color) =>
		products.filter(
			product => product.size === size && product.color === color
		);

	// state space explosion
	// 3 criteria = 7 methods
}

// Specification classes
class Specification {
	constructor() {
		if (this.constructor.name === 'Specification') {
			throw new Error('Specification is an abstract class!');
		}
	}
}

class ColorSpecification extends Specification {
	constructor(color) {
		super();
		this.color = color;
	}
	isSatisfied(item) {
		return item.color === this.color;
	}
}

class SizeSpecification {
	constructor(size) {
		this.size = size;
	}
	isSatisfied(item) {
		return item.size === this.size;
	}
}

class AndSpecification {
	constructor(...specifications) {
		this.specifications = specifications;
	}
	isSatisfied(item) {
		return this.specifications.every(specification =>
			specification.isSatisfied(item)
		);
	}
}

let apple = new Product('apple', Color.green, Size.small);
let tree = new Product('tree', Color.green, Size.large);
let house = new Product('house', Color.blue, Size.large);

let products = [apple, tree, house];

let pf = new ProductFilter();
console.log(`Green products (old):`);
for (let p of pf.filterByColor(products, Color.green)) {
	console.log(` * ${p.name} is ${p.color}`);
}

class BetterFilter {
	filter(items, spec) {
		return items.filter(item => spec.isSatisfied(item));
	}
}

let bf = new BetterFilter();
console.log(`Green products (new):`);
for (let p of bf.filter(products, new ColorSpecification(Color.green))) {
	console.log(` * ${p.name} is green`);
}

// Combinator
console.log(`Large and green products: `);
let spec = new AndSpecification(
	new SizeSpecification(Size.large),
	new ColorSpecification(Color.green)
);
for (let p of bf.filter(products, spec)) {
	console.log(` * ${p.name} is large and green`);
}