class Document
{

}

class Machine
{
	constructor() 
	{
		if(this.constructor.name === 'Machine') throw new Error('Cannot instantiate abstract class');
	}

	print(document) {

	}

	fax(document) {

	}

	scan(document) {

	}
}

class MultiFunctionPrinter extends Machine {
	print(document) {
		super.print(document);
	}

	fax(document) {
		super.fax(document);
	}

	fax(document) {
		super.fax(document);
	}
}

class NotImplementedError extends Error {
	constructor(name) {
		let msg = `${name} is not implemented`;
		super(msg);
		if (Error.captureStackTrace) {
			Error.captureStackTrace(this, this.constructor);
		}
	}
}

class OldFashionedPrinter extends Machine {
	print(document) {
		super.print(document);
	}
	fax(document) {
		// do nothing
		// bad practice => principle of least surprise
		// predictable behaviour
	}

	scan(document) {
		throw new NotImplementedError('OldFashionedPrinter.scan');
	}
}
// Interface Segregation Principle = Split up
class Printer {
	constructor() {
		if (this.constructor.name === 'Printer')
			throw new Error('Cannot instantiate abstract class');
	}
	print(document) { }
}

class Fax {
	constructor() {
		if (this.constructor.name === 'Fax')
			throw new Error('Cannot instantiate abstract class');
	}
	scan(document) { }
}

class Scanner {
	constructor() {
		if (this.constructor.name === 'Scanner')
			throw new Error('Cannot instantiate abstract class');
	}
	scan(document) { }
}

let printer = new OldFashionedPrinter();
printer.scan();