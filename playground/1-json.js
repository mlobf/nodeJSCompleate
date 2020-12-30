const fs = require('fs')

/*
const book = {
    title: 'Ego is the enemy',
    author: 'Ryan Holliday'
};

// The JSON.stringify turns book to a json
const bookJSON = JSON.stringify(book);

/*
console.log(bookJSON);
// The JSON.parse turns book to a object
const parsedData = JSON.parse(bookJSON);
console.log(parsedData.author);
*/
/*
fs.writeFileSync('1-json.json', bookJSON);
*/
// Read the file having the binay data
const dataBuffer = fs.readFileSync('1-json.json');

// Converting data to a string
const dataJSON = dataBuffer.toString();

// Parsing this dataBuffer on a object;
const data = JSON.parse(dataJSON);

// Access it the objects property.
console.log(data.title);