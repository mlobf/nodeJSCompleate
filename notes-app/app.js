const yargs = require("yargs");
const notes = require('./notes.js');
const chalk = require("chalk");

// Chalenge
// 1- Setup the remove command to take a required "--title" option.
//      Done
// 2- Create and export a removeNote function from notes.js
//     Done 
// 3- Call a removeNote in remove command Handler.
//      Done
// 4- Have a removeNote log the title of the note to be removed.
//      
// 5-Test your work using: node app.js remove --title="some title"

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
    command: "list",
    describe: "Listing all new note",
    handler: function () {
        console.log("Now listing all the note");
    },
});

yargs.parse();