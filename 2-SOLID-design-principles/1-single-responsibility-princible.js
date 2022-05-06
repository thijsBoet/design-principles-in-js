const fs = require('fs');

class Journal {
	constructor() {
		this.entries = {};
		this.count = 0
	}

	addEntry(text) {
		let c = ++Journal.count;
		let entry = `${c}: ${text}`;
		this.entries[c] = entry;
		return c;
	}

	removeEntry(index) {
		delete this.entries[index]
	}

	toString() {
		return Object.values(this.entries).join('\n');
	}

	save(filename) {
		fs.writeFileSync(`${filename}.txt`, this.toString());
	}

	load(filename) {
		fs.readFile(__dirname + `/${filename}.txt`, (error, data) => {
			if (error) throw error;
			console.log(data.toString());
		});
	}
}

// Seperation of concerns
class PersistenceManager {
	preprocess(journal) {
		return journal.toString();
	}

	saveToFile(journal, filename) {
		fs.writeFileSync(`${filename}.txt`, journal.toString());
	}

	loadFile(filename) {
		fs.readFile(__dirname + `/${filename}.txt`, (error, data) => {
			if (error) throw error;
			console.log(data.toString());
		});
	}
}

// Journal.count = 0;

let j = new Journal();
j.addEntry('I cried today.');
j.addEntry('I ate a bug.');
// j.save("JournalEntries")
// j.load("JournalEntries")

let p = new PersistenceManager();
p.saveToFile(j, "JournalEntries");
p.loadFile("JournalEntries");