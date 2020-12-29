/*
const add = require('./utils.js')
const sum = add(1,2);
console.log(sum);
*/
const multiplicacao = require('./challengeOne.js');
const validator = require('validator');
const print = multiplicacao(2, 5);
const chalk = require('chalk');

console.log(chalk.green.inverse.bold('This is an error message'));
//console.log(print);
//console.log(validator.isEmail('marcos@gmail.com'));
//console.log(validator.isURL('www.uol.com.br'));

