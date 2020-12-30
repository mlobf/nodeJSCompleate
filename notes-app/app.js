/*
const add = require('./utils.js')
const sum = add(1,2);
console.log(sum);
*/
const yargs = require("yargs");
//const multiplicacao = require('./challengeOne.js');
//const validator = require('validator');
//const print = multiplicacao(2, 5);
const chalk = require("chalk");
//const command = process.argv[2];

// Yargs version with
yargs.version("1.1.0");

//  Create add command
yargs.command({
    command: "add",
    describe: "Add a new note",
    handler: function () {
        console.log("Adding a new note");
    },
});
// Create a remove command
yargs.command({
    command: "remove",
    describe: "Removing a new note",
    handler: function () {
        console.log("Removing the note");
    },
});

console.log(yargs.argv);

//console.log(chalk.green.inverse.bold('This is an error message'));
//console.log(print);
//console.log(validator.isEmail('marcos@gmail.com'));
//console.log(validator.isURL('www.uol.com.br'));
//console.log(process.argv[2]);
