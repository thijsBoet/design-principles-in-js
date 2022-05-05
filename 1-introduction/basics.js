// ABSTRACTION - hide the details and complexity of the implementation from the user of the class and only expose the functionality to the user of the class (in this case, the user of the class is the person class)

// ENCAPSULATION - the bundling of data, along with the methods that operate on that data, into a single unit.

// INHERITANCE - The procedure in which one class inherits the attributes and methods of another class.

// POLYMORPHISM - The ability of an object to take on many forms.

class Person {
	constructor(name, age, job) {
		this.name = name;
		this.age = age;
		this.job = "";
	}
	getName = () => this.name;
	getAge = () => this.age;

	setJob = (job) => this.job = job;
}

// abstraction && encapsulation
class House {
	constructor(address, price, residents) {
		this.address = address;
		this.price = price;
		this.residents = residents;
	}
	getAddress = () => this.address;
	getPrice = () => this.price;
	getResidents = () => this.residents;

	addResident = (resident) => this.residents.push(resident);
}

let matthijs = new Person('Matthijs', 30);
let house = new House("123 Main St", 100000, []);
house.addResident(matthijs);
matthijs.setJob('Developer');
console.log(house.getResidents());

// INHERITANCE
class Programmer extends Person {
	constructor(name, age, company, salary, language) {
		super(name, age);
		this.company = company;
		this.salary = salary;
		this.language = language;
	}
	sayHi = () => console.log(`Hi, my name is ${this.getName()}. I'm ${this.getAge()} years old. I'm a ${this.language} developer at ${this.company} earning ${this.salary} per month.`);
}

// POLYMORPHISM;
class Docter extends Person {
	constructor(name, age, salary) {
		super(name, age);
		this.salary = salary;
	}
}

const Matt = new Programmer('Matthijs', 40, 'Google', '$100k', 'JavaScript');
Matt.sayHi();