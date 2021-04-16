const yargs = require("yargs");
const notes = require("./notes.js");
//const chalk = require("chalk");

// Yargs version with
yargs.version("1.1.0");

//  Add note
yargs.command({
	command: "add",
	describe: "Add a new note",
	builder: {
		title: {
			describe: "Note title",
			demandOption: true,
			type: "string",
		},
		body: {
			describe: "This is a body",
			demandOption: true,
			type: "string",
		},
	},
	handler: function (argv) {
		notes.addNote(argv.title, argv.body);
	},
});

// Remove some note.
yargs.command({
	command: "remove",
	describe: "Removing a new note",
	builder: {
		title: {
			describe: "Note title",
			demandOption: true,
			type: "string",
		},
	},
	handler: function (argv) {
		notes.removeNote(argv.title);
	},
});

// Listing all notes
yargs.command({
	command: "listNote",
	describe: "Listing all new note",
	handler: function () {
		console.log("Now listing all the note");
	},
});

yargs.parse();
