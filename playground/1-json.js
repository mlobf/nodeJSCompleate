// Challenge:
//  Work with JSON and the file system:
//
// Load and parse the JSON file.
// Change the name and age property using your info
// Stringify the changed object and overwrite the original data.
// Test your work by viewing data in JSON file.
const fs = require("fs");

console.log("First, to solve the problem..... parsing the data!!");
console.log(" ");
const dataBuffer = fs.readFileSync("1-json.json");
console.log("Convert it to a string");
const dataJSON = dataBuffer.toString();
console.log("Now parsing to an object");
const user = JSON.parse(dataJSON);
console.log("Next step is change that data!");

user.name = "Marcos";
user.age = 39;
console.log("Now its time to stringfy the object and save it");

const userJSON = JSON.stringify(user);
fs.writeFileSync("1-json.json", userJSON);
