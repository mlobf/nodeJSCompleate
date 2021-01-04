const yargs = require("yargs");
const notes = require('./notes.js');
//const chalk = require("chalk");

// Yargs version with
yargs.version("1.1.0");

//  Add command
yargs.command({
    command: "add",
    describe: "Add a new note",
    builder: {
        title: {
            describe: "Note title",
            demandOption: true,
            type: "string"
        },
        body: {
            describe: "This is a body",
            demandOption: true,
            type: "string"
        },
    },
    handler: function (argv) {
        notes.addNote(argv.title, argv.body);
    },
});

// Remove command
yargs.command({
    command: "remove",
    describe: "Removing a new note",
    builder: {
        title: {
            describe: "Note title",
            demandOption: true,
            type: "string"
        },
    },
    handler: function (argv) {
        notes.removeNote(argv.title);
    },
}, );

// Listing Command
yargs.command({
    command: "listNote",
    describe: "Listing all new note",
    handler: function () {
        console.log("Now listing all the note");
    },
});

yargs.parse();
